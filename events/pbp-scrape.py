# Usage: php-scrape.py <file with list of NFL game IDs>
import json
import copy
import optparse
import urllib.request
import sys
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('BQBL-2c621a7cef1f.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://bqbl-591f3.firebaseio.com/',
    'databaseAuthVariableOverride': {
        'uid': 'score-scraper',
    },
})

parser = optparse.OptionParser(
  usage=("Usage: %prog [options] <file with list of NFL game IDs> "))

options, args = parser.parse_args()

def process(raw, fumbles, safeties, interceptions):
  data = json.loads(str(raw, 'utf-8'))
  drives = data[id]['drives']
  # 5 is for overtime
  quarters = {1: {}, 2: {}, 3:{}, 4:{}, 5:{}}

  for drive in drives:
    # skip junk in there about current drive
    if drive == 'crntdrv': continue
    plays = copy.deepcopy(drives[drive]['plays'])
    for play_key in plays:
      play = plays[play_key]
      quarter = play['qtr']
      time = play['time']
      quarters[quarter][time] = play

  for n in range(1, 6):
    for t in sorted(quarters[n].keys())[::-1]:
      play = quarters[n][t]
      desc = play['desc']
      if "SAFETY" in desc:
        safeties.append({
            'desc': desc, 'team': play['posteam'], 'quarter': n, 'time': t})
      elif "FUMBLE" in desc and "TOUCHDOWN" in desc:
        fumbles.append({
            'desc': desc, 'team': play['posteam'], 'quarter': n, 'time': t})
      if "INTERCEPT" in desc:
        interceptions.append({
            'desc': desc, 'team': play['posteam'], 'quarter': n, 'time': t})


gameIds = open(args[0]).readlines()
fumbles = []
safeties = []
interceptions = []

for id in gameIds:
  id = id.strip()
  url = "http://www.nfl.com/liveupdate/game-center/%s/%s_gtd.json" % (id, id)
  raw = urllib.request.urlopen("http://www.nfl.com/liveupdate/game-center/%s/%s_gtd.json" % (id, id)).read()
  process(raw, fumbles, safeties, interceptions)

fumble_ref = db.reference('/events/2016/%d/fumbles' % 1)
fumble_ref.set(fumbles)

safety_ref = db.reference('/events/2016/%d/safeties' % 1)
safety_ref.set(safeties)

interception_ref = db.reference('/events/2016/%d/interception' % 1)
interception_ref.set(interceptions)

