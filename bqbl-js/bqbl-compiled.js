var k,aa=aa||{},m=this;function ba(){}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"array"==ca(a)}function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ea(a){return"number"==typeof a}function fa(a){return"function"==ca(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var r="closure_uid_"+(1E9*Math.random()>>>0),ha=0;function ia(a,b,c){return a.call.apply(a.bind,arguments)}
function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return t.apply(null,arguments)}
function ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var u=Date.now||function(){return+new Date};function la(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ba=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function ma(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function oa(a){return decodeURIComponent(a.replace(/\+/g," "))}
function pa(a){if(!qa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ra,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(sa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ta,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ua,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(va,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(wa,"&#0;"));return a}var ra=/&/g,sa=/</g,ta=/>/g,ua=/"/g,va=/'/g,wa=/\x00/g,qa=/[\x00&<>"']/;
function xa(a){a=String(a);var b=a.indexOf(".");-1==b&&(b=a.length);b=Math.max(0,2-b);return Array(b+1).join("0")+a}function ya(a){return Array.prototype.join.call(arguments,"")}function za(a,b){return a<b?-1:a>b?1:0};var x;a:{var Aa=m.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){x=Ba;break a}}x=""}function y(a){return-1!=x.indexOf(a)};function Ca(a,b,c){for(var d in a)b.call(c,a[d],d,a)}var Da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ea(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Da.length;f++)c=Da[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Fa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Fa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(Fa,Error);Fa.prototype.name="CustomError";function Ga(a,b){b.unshift(a);Fa.call(this,ma.apply(null,b));b.shift()}v(Ga,Fa);Ga.prototype.name="AssertionError";function z(a,b){throw new Ga("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var A=Array.prototype,Ha=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ia=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Ja(a){var b;a:{b=Ka;for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]}function La(a,b){var c=Ha(a,b),d;(d=0<=c)&&A.splice.call(a,c,1);return d}function Ma(a){return A.concat.apply(A,arguments)}function Na(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Oa(a,b){a.sort(b||Pa)}
function Qa(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||Pa;Oa(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value}function Pa(a,b){return a>b?1:a<b?-1:0};var Ra=y("Opera")||y("OPR"),B=y("Trident")||y("MSIE"),Sa=y("Edge"),C=y("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),Ta=-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge");function Ua(){var a=x;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Sa)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ta)return/WebKit\/(\S+)/.exec(a)}function Va(){var a=m.document;return a?a.documentMode:void 0}
var Wa=function(){if(Ra&&m.opera){var a=m.opera.version;return fa(a)?a():a}var a="",b=Ua();b&&(a=b?b[1]:"");return B&&(b=Va(),b>parseFloat(a))?String(b):a}(),Xa={};
function D(a){var b;if(!(b=Xa[a])){b=0;for(var c=na(String(Wa)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),M=RegExp("(\\d*)(\\D*)","g");do{var q=l.exec(g)||["","",""],w=M.exec(h)||["","",""];if(0==q[0].length&&0==w[0].length)break;b=za(0==q[1].length?0:parseInt(q[1],10),0==w[1].length?0:parseInt(w[1],10))||za(0==q[2].length,0==w[2].length)||za(q[2],w[2])}while(0==b)}b=Xa[a]=0<=b}return b}
var Ya=m.document,Za=Ya&&B?Va()||("CSS1Compat"==Ya.compatMode?parseInt(Wa,10):5):void 0;var ab=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function bb(a){if(cb){cb=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=(c=bb(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw cb=!0,Error();}}return a.match(ab)}var cb=Ta;function db(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?oa(g):"")}};function eb(a,b){this.b={};this.a=[];this.g=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)E(this,arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof eb)e=a.D(),d=a.M();else{var c=[],f=0;for(e in a)c[f++]=e;e=c;c=[];f=0;for(d in a)c[f++]=a[d];d=c}for(c=0;c<e.length;c++)E(this,e[c],d[c])}}k=eb.prototype;k.M=function(){fb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.D=function(){fb(this);return this.a.concat()};
k.clear=function(){this.b={};this.g=this.c=this.a.length=0};function fb(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];G(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],G(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}function gb(a,b){return G(a.b,b)?a.b[b]:void 0}function E(a,b,c){G(a.b,b)||(a.c++,a.a.push(b),a.g++);a.b[b]=c}k.forEach=function(a,b){for(var c=this.D(),d=0;d<c.length;d++){var e=c[d];a.call(b,gb(this,e),e,this)}};
k.clone=function(){return new eb(this)};function G(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function hb(a,b){this.g=this.i=this.c="";this.h=null;this.j=this.f="";this.a=!1;var c;a instanceof hb?(this.a=void 0!==b?b:a.a,ib(this,a.c),this.i=a.i,this.g=a.g,jb(this,a.h),this.f=a.f,kb(this,a.b.clone()),this.j=a.j):a&&(c=bb(String(a)))?(this.a=!!b,ib(this,c[1]||"",!0),this.i=lb(c[2]||""),this.g=lb(c[3]||"",!0),jb(this,c[4]),this.f=lb(c[5]||"",!0),kb(this,c[6]||"",!0),this.j=lb(c[7]||"")):(this.a=!!b,this.b=new mb(null,0,this.a))}
hb.prototype.toString=function(){var a=[],b=this.c;b&&a.push(nb(b,ob,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.i)&&a.push(nb(b,ob,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.h,null!=c&&a.push(":",String(c));if(c=this.f)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(nb(c,"/"==c.charAt(0)?pb:qb,!0));(c=this.b.toString())&&a.push("?",c);(c=this.j)&&a.push("#",nb(c,rb));return a.join("")};hb.prototype.clone=function(){return new hb(this)};
function ib(a,b,c){a.c=c?lb(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function jb(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.h=b}else a.h=null}function kb(a,b,c){b instanceof mb?(a.b=b,sb(a.b,a.a)):(c||(b=nb(b,tb)),a.b=new mb(b,0,a.a))}function ub(a){var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^u()).toString(36);a=a.b;var c="zx";H(a);a.b=null;c=I(a,c);vb(a,c)&&(a.c-=gb(a.a,c).length);E(a.a,c,[b]);a.c++}
function lb(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function nb(a,b,c){return p(a)?(a=encodeURI(a).replace(b,wb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wb(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ob=/[#\/\?@]/g,qb=/[\#\?:]/g,pb=/[\#\?]/g,tb=/[\#\?@]/g,rb=/#/g;function mb(a,b,c){this.c=this.a=null;this.b=a||null;this.g=!!c}
function H(a){a.a||(a.a=new eb,a.c=0,a.b&&db(a.b,function(b,c){var d=oa(b);H(a);a.b=null;var d=I(a,d),e=gb(a.a,d);e||E(a.a,d,e=[]);e.push(c);a.c++}))}function xb(a,b){H(a);b=I(a,b);if(G(a.a.b,b)){a.b=null;a.c-=gb(a.a,b).length;var c=a.a;G(c.b,b)&&(delete c.b[b],c.c--,c.g++,c.a.length>2*c.c&&fb(c))}}k=mb.prototype;k.clear=function(){this.a=this.b=null;this.c=0};function vb(a,b){H(a);b=I(a,b);return G(a.a.b,b)}
k.D=function(){H(this);for(var a=this.a.M(),b=this.a.D(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.M=function(a){H(this);var b=[];if(p(a))vb(this,a)&&(b=Ma(b,gb(this.a,I(this,a))));else{a=this.a.M();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};
k.toString=function(){if(this.b)return this.b;if(!this.a)return"";for(var a=[],b=this.a.D(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.M(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.b=a.join("&")};k.clone=function(){var a=new mb;a.b=this.b;this.a&&(a.a=this.a.clone(),a.c=this.c);return a};function I(a,b){var c=String(b);a.g&&(c=c.toLowerCase());return c}
function sb(a,b){b&&!a.g&&(H(a),a.b=null,a.a.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(xb(this,b),xb(this,e),0<a.length&&(this.b=null,E(this.a,I(this,e),Na(a)),this.c+=a.length))},a));a.g=b};function J(){this.a="";this.b=yb}J.prototype.B=!0;J.prototype.u=function(){return this.a};J.prototype.toString=function(){return"Const{"+this.a+"}"};function zb(a){if(a instanceof J&&a.constructor===J&&a.b===yb)return a.a;z("expected object of type Const, got '"+a+"'");return"type_error:Const"}var yb={};function Ab(a){var b=new J;b.a=a;return b};function Bb(){this.a="";this.b=Cb}k=Bb.prototype;k.B=!0;k.u=function(){return this.a};k.ba=!0;k.L=function(){return 1};k.toString=function(){return"SafeUrl{"+this.a+"}"};var Db=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Cb={};function Eb(){this.a="";this.b=Fb}k=Eb.prototype;k.B=!0;k.u=function(){return this.a};k.ba=!0;k.L=function(){return 1};k.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function Gb(a){if(a instanceof Eb&&a.constructor===Eb&&a.b===Fb)return a.a;z("expected object of type TrustedResourceUrl, got '"+a+"'");return"type_error:TrustedResourceUrl"}var Fb={};function Hb(a){var b=new Eb;b.a=a;return b};var Ib={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};function K(){this.a="";this.b=Jb}K.prototype.B=!0;var Jb={};K.prototype.u=function(){return this.a};K.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function Kb(a){var b=new K;b.a=a;return b}var Lb=Kb(""),Mb=/^[-,."'%_!# a-zA-Z0-9]+$/;function Nb(){this.a="";this.c=Ob;this.b=null}k=Nb.prototype;k.ba=!0;k.L=function(){return this.b};k.B=!0;k.u=function(){return this.a};k.toString=function(){return"SafeHtml{"+this.a+"}"};function Pb(a){if(a instanceof Nb&&a.constructor===Nb&&a.c===Ob)return a.a;z("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}
var Qb=/^[a-zA-Z0-9-]+$/,Rb={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},Sb={EMBED:!0,IFRAME:!0,LINK:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,TEMPLATE:!0};function Tb(a,b,c){if(!Qb.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toUpperCase()in Sb)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");return Ub(a,b,c)}
function Vb(a){function b(a){if(n(a))Ia(a,b);else{var f;a instanceof Nb?f=a:(f=null,a.ba&&(f=a.L()),a=pa(a.B?a.u():String(a)),f=Wb(a,f));d+=Pb(f);f=f.L();0==c?c=f:0!=f&&c!=f&&(c=null)}}var c=0,d="";Ia(arguments,b);return Wb(d,c)}var Ob={};function Wb(a,b){var c=new Nb;c.a=a;c.b=b;return c}
function Ub(a,b,c){var d=null,e="<"+a;if(b)for(var f in b){if(!Qb.test(f))throw Error('Invalid attribute name "'+f+'".');var g=b[f];if(null!=g){var h,l=a;h=f;if(g instanceof J)g=zb(g);else if("style"==h.toLowerCase()){if(!ga(g))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof g+" given: "+g);if(!(g instanceof K)){var l="",M=void 0;for(M in g){if(!/^[-_a-zA-Z0-9]+$/.test(M))throw Error("Name allows only [-_a-zA-Z0-9], got: "+M);var q=g[M];if(null!=
q){if(q instanceof J)q=zb(q);else if(Mb.test(q)){for(var w=!0,F=!0,$a=0;$a<q.length;$a++){var fc=q.charAt($a);"'"==fc&&F?w=!w:'"'==fc&&w&&(F=!F)}w&&F||(z("String value requires balanced quotes, got: "+q),q="zClosurez")}else z("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: "+q),q="zClosurez";l+=M+":"+q+";"}}g=l?Kb(l):Lb}l=void 0;g instanceof K&&g.constructor===K&&g.b===Jb?l=g.a:(z("expected object of type SafeStyle, got '"+g+"'"),l="type_error:SafeStyle");g=l}else{if(/^on/i.test(h))throw Error('Attribute "'+
h+'" requires goog.string.Const value, "'+g+'" given.');if(h.toLowerCase()in Rb)if(g instanceof Eb)g=Gb(g);else if(g instanceof Bb)g instanceof Bb&&g.constructor===Bb&&g.b===Cb?g=g.a:(z("expected object of type SafeUrl, got '"+g+"'"),g="type_error:SafeUrl");else if(p(g))g instanceof Bb||(g=g.B?g.u():String(g),Db.test(g)||(g="about:invalid#zClosurez"),l=new Bb,l.a=g,g=l),g=g.u();else throw Error('Attribute "'+h+'" on tag "'+l+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+g+
'" given.');}g.B&&(g=g.u());h=h+'="'+pa(String(g))+'"';e=e+(" "+h)}}null!=c?n(c)||(c=[c]):c=[];!0===Ib[a.toLowerCase()]?e+=">":(d=Vb(c),e+=">"+Pb(d)+"</"+a+">",d=d.L());(a=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(a)?d=0:d=null);return Wb(e,d)}Wb("<!DOCTYPE html>",0);Wb("",0);function L(){0!=Xb&&(Yb[this[r]||(this[r]=++ha)]=this);this.j=this.j;this.g=this.g}var Xb=0,Yb={};L.prototype.j=!1;L.prototype.U=function(){if(!this.j&&(this.j=!0,this.l(),0!=Xb)){var a=this[r]||(this[r]=++ha);delete Yb[a]}};L.prototype.l=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function Zb(a){a&&"function"==typeof a.U&&a.U()};var $b="closure_listenable_"+(1E6*Math.random()|0),ac=0;function bc(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.T=!!d;this.W=e;this.ka=++ac;this.H=this.S=!1}function cc(a){a.H=!0;a.listener=null;a.a=null;a.src=null;a.W=null};function dc(a){this.src=a;this.a={};this.b=0}function ec(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=gc(b,c,e,f);-1<h?(a=b[h],d||(a.S=!1)):(a=new bc(c,a.src,g,!!e,f),a.S=d,b.push(a));return a}function hc(a,b){var c=b.type;c in a.a&&La(a.a[c],b)&&(cc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function ic(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=gc(a,c,d,e));return-1<b?a[b]:null}
function gc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.H&&f.listener==b&&f.T==!!c&&f.W==d)return e}return-1};function N(a,b){this.type=a;this.a=this.target=b;this.na=!0}N.prototype.preventDefault=function(){this.na=!1};var jc=!B||9<=Za,kc=B&&!D("9");!Ta||D("528");C&&D("1.9b")||B&&D("8")||Ra&&D("9.5")||Ta&&D("528");C&&!D("8")||B&&D("9");function lc(a){lc[" "](a);return a}lc[" "]=ba;function mc(a,b){N.call(this,a?a.type:"");this.b=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&C)try{lc(c.nodeName)}catch(d){}this.b=a;a.defaultPrevented&&this.preventDefault()}}v(mc,N);mc.prototype.preventDefault=function(){mc.I.preventDefault.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,kc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var nc="closure_lm_"+(1E6*Math.random()|0),oc={},pc=0;
function qc(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)qc(a,b[f],c,d,e);return null}c=rc(c);if(a&&a[$b])a=a.v(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=sc(a);g||(a[nc]=g=new dc(a));c=ec(g,b,c,!1,d,e);if(!c.a){d=tc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(uc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");pc++}a=c}return a}
function tc(){var a=vc,b=jc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function wc(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)wc(a,b[f],c,d,e);else c=rc(c),a&&a[$b]?a.da(b,c,d,e):a&&(a=sc(a))&&(b=ic(a,b,c,!!d,e))&&xc(b)}
function xc(a){if(!ea(a)&&a&&!a.H){var b=a.src;if(b&&b[$b])hc(b.s,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.T):b.detachEvent&&b.detachEvent(uc(c),d);pc--;(c=sc(b))?(hc(c,a),0==c.b&&(c.src=null,b[nc]=null)):cc(a)}}}function uc(a){return a in oc?oc[a]:oc[a]="on"+a}function yc(a,b,c,d){var e=!0;if(a=sc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.T==c&&!f.H&&(f=zc(f,d),e=e&&!1!==f)}return e}
function zc(a,b){var c=a.listener,d=a.W||a.src;a.S&&xc(a);return c.call(d,b)}
function vc(a,b){if(a.H)return!0;if(!jc){var c;if(!(c=b))a:{c=["window","event"];for(var d=m,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new mc(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,h=e.length-1;0<=h;h--){c.a=e[h];var l=yc(e[h],f,!0,c),d=d&&l}for(h=0;h<e.length;h++)c.a=e[h],l=yc(e[h],f,!1,c),
d=d&&l}return d}return zc(a,new mc(b,this))}function sc(a){a=a[nc];return a instanceof dc?a:null}var Ac="__closure_events_fn_"+(1E9*Math.random()>>>0);function rc(a){if(fa(a))return a;a[Ac]||(a[Ac]=function(b){return a.handleEvent(b)});return a[Ac]};function O(){L.call(this);this.s=new dc(this);this.ea=this;this.R=null}v(O,L);O.prototype[$b]=!0;k=O.prototype;k.addEventListener=function(a,b,c,d){qc(this,a,b,c,d)};k.removeEventListener=function(a,b,c,d){wc(this,a,b,c,d)};
function P(a,b){var c,d=a.R;if(d)for(c=[];d;d=d.R)c.push(d);var d=a.ea,e=b,f=e.type||e;if(p(e))e=new N(e,d);else if(e instanceof N)e.target=e.target||d;else{var g=e,e=new N(f,d);Ea(e,g)}var g=!0,h;if(c)for(var l=c.length-1;0<=l;l--)h=e.a=c[l],g=Bc(h,f,!0,e)&&g;h=e.a=d;g=Bc(h,f,!0,e)&&g;g=Bc(h,f,!1,e)&&g;if(c)for(l=0;l<c.length;l++)h=e.a=c[l],g=Bc(h,f,!1,e)&&g}
k.l=function(){O.I.l.call(this);if(this.s){var a=this.s,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,cc(d[e]);delete a.a[c];a.b--}}this.R=null};k.v=function(a,b,c,d){return ec(this.s,String(a),b,!1,c,d)};k.da=function(a,b,c,d){var e;e=this.s;a=String(a).toString();if(a in e.a){var f=e.a[a];b=gc(f,b,c,d);-1<b?(cc(f[b]),A.splice.call(f,b,1),0==f.length&&(delete e.a[a],e.b--),e=!0):e=!1}else e=!1;return e};
function Bc(a,b,c,d){b=a.s.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.H&&g.T==c){var h=g.listener,l=g.W||g.src;g.S&&hc(a.s,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.na};function Q(a,b){O.call(this);this.f=a||1;this.b=b||m;this.h=t(this.m,this);this.i=u()}v(Q,O);Q.prototype.c=!1;Q.prototype.a=null;function Cc(a,b){a.f=b;a.a&&a.c?(Dc(a),Ec(a)):a.a&&Dc(a)}Q.prototype.m=function(){if(this.c){var a=u()-this.i;0<a&&a<.8*this.f?this.a=this.b.setTimeout(this.h,this.f-a):(this.a&&(this.b.clearTimeout(this.a),this.a=null),P(this,Fc),this.c&&(this.a=this.b.setTimeout(this.h,this.f),this.i=u()))}};function Ec(a){a.c=!0;a.a||(a.a=a.b.setTimeout(a.h,a.f),a.i=u())}
function Dc(a){a.c=!1;a.a&&(a.b.clearTimeout(a.a),a.a=null)}Q.prototype.l=function(){Q.I.l.call(this);Dc(this);delete this.b};var Fc="tick";function Gc(a,b,c){if(fa(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function R(a){L.call(this);this.b=a;this.a={}}v(R,L);var Hc=[];R.prototype.v=function(a,b,c,d){n(b)||(b&&(Hc[0]=b.toString()),b=Hc);for(var e=0;e<b.length;e++){var f=qc(a,b[e],c||this.handleEvent,d||!1,this.b||this);if(!f)break;this.a[f.ka]=f}return this};
R.prototype.da=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)this.da(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.b||this,c=rc(c),d=!!d,b=a&&a[$b]?ic(a.s,String(b),c,d,e):a?(a=sc(a))?ic(a,b,c,d,e):null:null,b&&(xc(b),delete this.a[b.ka]);return this};function Ic(a){Ca(a.a,function(a,c){this.a.hasOwnProperty(c)&&xc(a)},a);a.a={}}R.prototype.l=function(){R.I.l.call(this);Ic(this)};R.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Jc(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")};function Kc(){return!(y("iPad")||y("Android")&&!y("Mobile")||y("Silk"))&&(y("iPod")||y("iPhone")||y("Android")||y("IEMobile"))};function Lc(a){N.call(this,"navigate");this.Aa=a}v(Lc,N);var Mc=!B||9<=Za;!C&&!B||B&&9<=Za||C&&D("1.9.1");B&&D("9");function Nc(a){var b=document;return p(a)?b.getElementById(a):a}function Oc(a,b){Ca(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Pc.hasOwnProperty(d)?a.setAttribute(Pc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Pc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Qc(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Mc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',pa(g.name),'"');if(g.type){f.push(' type="',pa(g.type),'"');var h={};Ea(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(p(g)?f.className=g:n(g)?f.className=g.join(" "):Oc(f,g));2<d.length&&Rc(e,f,d);return f}
function Rc(a,b,c){function d(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!da(f)||ga(f)&&0<f.nodeType?d(f):Ia(Sc(f)?Na(f):f,d)}}function Tc(a){return a.contentDocument||a.contentWindow.document}function Sc(a){if(a&&"number"==typeof a.length){if(ga(a))return"function"==typeof a.item||"string"==typeof a.item;if(fa(a))return"function"==typeof a.item}return!1};function S(a,b,c,d){O.call(this);if(a&&!b)throw Error("Can't use invisible history without providing a blank page.");var e;if(c)e=c;else{e="history_state"+Uc;var f=Tb("input",{type:"text",name:e,id:e,style:Ab("display:none")});document.write(Pb(f));e=Nc(e)}this.N=e;c=c?(c=9==c.nodeType?c:c.ownerDocument||c.document)?c.parentWindow||c.defaultView:window:window;this.a=c;var g;p(b)?g=Hb(b):g=b;this.m=g;B&&!b&&(b="https"==window.location.protocol?Ab("https:///"):Ab('javascript:""'),this.m=b=Hb(zb(b)));
this.b=new Q(Vc);b=ka(Zb,this.b);this.j?b.call(void 0):(this.g||(this.g=[]),this.g.push(b));this.C=!a;this.c=new R(this);if(a||T){var h;if(d)h=d;else{a="history_iframe"+Uc;d={id:a,style:Ab("display:none"),sandbox:void 0};b={};b.src=this.m||null;b.srcdoc=null;g={sandbox:""};c={};for(h in b)c[h]=b[h];for(h in g)c[h]=g[h];for(h in d){e=h.toLowerCase();if(e in b)throw Error('Cannot override "'+e+'" attribute, got "'+h+'" with value "'+d[h]+'"');e in g&&delete c[e];c[h]=d[h]}h=Ub("iframe",c,void 0);document.write(Pb(h));
h=Nc(a)}this.h=h;this.A=!0}T&&(this.c.v(this.a,"load",this.ta),this.w=this.i=!1);this.C?Wc(this,U(this),!0):Xc(this,this.N.value);Uc++}v(S,O);S.prototype.K=!1;S.prototype.f=!1;S.prototype.F=null;var Yc=function(a,b){var c=b||Jc;return function(){var b=this||m,b=b.closure_memoize_cache_||(b.closure_memoize_cache_={}),e=c(a[r]||(a[r]=++ha),arguments);return b.hasOwnProperty(e)?b[e]:b[e]=a.apply(this,arguments)}}(function(){return B?8<=Za:"onhashchange"in m}),T=B&&!(8<=Za);k=S.prototype;k.G=null;
k.l=function(){S.I.l.call(this);this.c.U();Zc(this,!1)};function Zc(a,b){if(b!=a.K)if(T&&!a.i)a.w=b;else if(b)if(Ra?a.c.v(a.a.document,$c,a.xa):C&&a.c.v(a.a,"pageshow",a.wa),Yc()&&a.C)a.c.v(a.a,"hashchange",a.ua),a.K=!0,P(a,new Lc(U(a)));else{if(!B||Kc()||a.i)a.c.v(a.b,Fc,t(a.ha,a,!0)),a.K=!0,T||(a.F=U(a),P(a,new Lc(U(a)))),Ec(a.b)}else a.K=!1,Ic(a.c),Dc(a.b)}k.ta=function(){this.i=!0;this.N.value&&Xc(this,this.N.value,!0);Zc(this,this.w)};k.wa=function(a){a.b.persisted&&(Zc(this,!1),Zc(this,!0))};
k.ua=function(){var a=ad(this.a);a!=this.F&&bd(this,a)};function U(a){return null!=a.G?a.G:a.C?ad(a.a):cd(a)||""}function ad(a){a=a.location.href;var b=a.indexOf("#");return 0>b?"":a.substring(b+1)}function Wc(a,b,c){a=a.a.location;var d=a.href.split("#")[0],e=-1!=a.href.indexOf("#");if(T||e||b)d+="#"+b;d!=a.href&&(c?a.replace(d):a.href=d)}
function Xc(a,b,c,d){if(a.A||b!=cd(a))if(a.A=!1,b=encodeURIComponent(String(b)),B){var e=Tc(a.h);e.open("text/html",c?"replace":void 0);c=Vb(Tb("title",{},d||a.a.document.title),Tb("body",{},b));e.write(Pb(c));e.close()}else if(e=Gb(a.m)+"#"+b,a=a.h.contentWindow)c?a.location.replace(e):a.location.href=e}
function cd(a){if(B)return a=Tc(a.h),a.body?oa(a.body.innerHTML):null;var b=a.h.contentWindow;if(b){var c;try{c=oa(ad(b))}catch(d){return a.f||(1!=a.f&&Cc(a.b,dd),a.f=!0),null}a.f&&(0!=a.f&&Cc(a.b,Vc),a.f=!1);return c||null}return null}k.ha=function(){if(this.C){var a=ad(this.a);a!=this.F&&bd(this,a)}if(!this.C||T)if(a=cd(this)||"",null==this.G||a==this.G)this.G=null,a!=this.F&&bd(this,a)};function bd(a,b){a.F=a.N.value=b;a.C?(T&&Xc(a,b),Wc(a,b)):Xc(a,b);P(a,new Lc(U(a)))}
k.xa=function(){Dc(this.b);Ec(this.b)};var $c=["mousedown","keydown","mousemove"],Uc=0,Vc=150,dd=1E4;var ed;
ed={j:["BC","AD"],g:["Before Christ","Anno Domini"],h:"JFMAMJJASOND".split(""),Y:"JFMAMJJASOND".split(""),f:"January February March April May June July August September October November December".split(" "),P:"January February March April May June July August September October November December".split(" "),w:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),R:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),fa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),aa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
O:"Sun Mon Tue Wed Thu Fri Sat".split(" "),$:"Sun Mon Tue Wed Thu Fri Sat".split(" "),i:"SMTWTFS".split(""),Z:"SMTWTFS".split(""),A:["Q1","Q2","Q3","Q4"],m:["1st quarter","2nd quarter","3rd quarter","4th quarter"],a:["AM","PM"],b:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],ea:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],c:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],pa:6,ga:[5,6],qa:5};function fd(a,b,c){ea(a)?(this.a=gd(a,b||0,c||1),hd(this,c||1)):ga(a)?(this.a=gd(a.getFullYear(),a.getMonth(),a.getDate()),hd(this,a.getDate())):(this.a=new Date(u()),a=this.a.getDate(),this.a.setHours(0),this.a.setMinutes(0),this.a.setSeconds(0),this.a.setMilliseconds(0),hd(this,a))}function gd(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}k=fd.prototype;k.ia=ed.pa;k.ja=ed.qa;k.clone=function(){var a=new fd(this.a);a.ia=this.ia;a.ja=this.ja;return a};
k.getFullYear=function(){return this.a.getFullYear()};k.getMonth=function(){return this.a.getMonth()};k.getDate=function(){return this.a.getDate()};k.getTime=function(){return this.a.getTime()};k.toString=function(){return[this.getFullYear(),xa(this.getMonth()+1),xa(this.getDate())].join("")+""};function hd(a,b){a.getDate()!=b&&a.a.setUTCHours(a.a.getUTCHours()+(a.getDate()<b?1:-1))}k.valueOf=function(){return this.a.valueOf()};function id(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function jd(){}jd.prototype.a=null;function kd(a){var b;(b=a.a)||(b={},ld(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var md;function nd(){}v(nd,jd);function od(a){return(a=ld(a))?new ActiveXObject(a):new XMLHttpRequest}function ld(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}md=new nd;function pd(a,b,c,d,e){this.reset(a,b,c,d,e)}pd.prototype.a=null;var qd=0;pd.prototype.reset=function(a,b,c,d,e){"number"==typeof e||qd++;d||u();this.b=b;delete this.a};function rd(a){this.g=a;this.b=this.c=this.a=null}function sd(a,b){this.name=a;this.value=b}sd.prototype.toString=function(){return this.name};var td=new sd("SEVERE",1E3),ud=new sd("CONFIG",700),vd=new sd("FINE",500);function wd(a){if(a.c)return a.c;if(a.a)return wd(a.a);z("Root logger has no level set.");return null}
rd.prototype.log=function(a,b,c){if(a.value>=wd(this).value)for(fa(b)&&(b=b()),a=new pd(a,String(b),this.g),c&&(a.a=c),c="log:"+a.b,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;)c=c.a};var xd={},yd=null;
function zd(a){yd||(yd=new rd(""),xd[""]=yd,yd.c=ud);var b;if(!(b=xd[a])){b=new rd(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=zd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;xd[a]=b}return b};function V(a,b){a&&a.log(vd,b,void 0)};function Ad(a){O.call(this);this.fa=new eb;this.P=a||null;this.b=!1;this.O=this.a=null;this.h=this.$=this.m="";this.c=this.Z=this.i=this.Y=!1;this.f=0;this.w=null;this.aa=Bd;this.A=this.ga=!1}v(Ad,O);var Bd="",Cd=Ad.prototype,Dd=zd("goog.net.XhrIo");Cd.o=Dd;var Ed=/^https?$/i,Fd=["POST","PUT"],Gd=[];function Hd(a,b){var c=new Ad;Gd.push(c);b&&c.v("complete",b);ec(c.s,"ready",c.sa,!0,void 0,void 0);c.f=Math.max(0,6E4);Id(c,a)}k=Ad.prototype;k.sa=function(){this.U();La(Gd,this)};
function Id(a,b){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.m+"; newUri="+b);a.m=b;a.h="";a.$="GET";a.Y=!1;a.b=!0;a.a=a.P?od(a.P):od(md);a.O=a.P?kd(a.P):kd(md);a.a.onreadystatechange=t(a.la,a);try{V(a.o,W(a,"Opening Xhr")),a.Z=!0,a.a.open("GET",String(b),!0),a.Z=!1}catch(c){V(a.o,W(a,"Error opening Xhr: "+c.message));Jd(a,c);return}var d=a.fa.clone(),e=Ja(d.D()),f=m.FormData&&!1;!(0<=Ha(Fd,"GET"))||e||f||E(d,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");
d.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.aa&&(a.a.responseType=a.aa);"withCredentials"in a.a&&(a.a.withCredentials=a.ga);try{Kd(a),0<a.f&&(a.A=Ld(a.a),V(a.o,W(a,"Will abort after "+a.f+"ms if incomplete, xhr2 "+a.A)),a.A?(a.a.timeout=a.f,a.a.ontimeout=t(a.oa,a)):a.w=Gc(a.oa,a.f,a)),V(a.o,W(a,"Sending request")),a.i=!0,a.a.send(""),a.i=!1}catch(g){V(a.o,W(a,"Send error: "+g.message)),Jd(a,g)}}function Ld(a){return B&&D(9)&&ea(a.timeout)&&void 0!==a.ontimeout}
function Ka(a){return"content-type"==a.toLowerCase()}k.oa=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.f+"ms, aborting",V(this.o,W(this,this.h)),P(this,"timeout"),this.a&&this.b&&(V(this.o,W(this,"Aborting")),this.b=!1,this.c=!0,this.a.abort(),this.c=!1,P(this,"complete"),P(this,"abort"),Md(this)))};function Jd(a,b){a.b=!1;a.a&&(a.c=!0,a.a.abort(),a.c=!1);a.h=b;Nd(a);Md(a)}function Nd(a){a.Y||(a.Y=!0,P(a,"complete"),P(a,"error"))}
k.l=function(){this.a&&(this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1),Md(this,!0));Ad.I.l.call(this)};k.la=function(){this.j||(this.Z||this.i||this.c?Od(this):this.va())};k.va=function(){Od(this)};
function Od(a){if(a.b&&"undefined"!=typeof aa)if(a.O[1]&&4==Pd(a)&&2==Qd(a))V(a.o,W(a,"Local request error detected and ignored"));else if(a.i&&4==Pd(a))Gc(a.la,0,a);else if(P(a,"readystatechange"),4==Pd(a)){V(a.o,W(a,"Request complete"));a.b=!1;try{var b=Qd(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=bb(String(a.m))[1]||null;if(!f&&m.self&&m.self.location)var g=m.self.location.protocol,f=g.substr(0,
g.length-1);e=!Ed.test(f?f.toLowerCase():"")}d=e}if(d)P(a,"complete"),P(a,"success");else{var h;try{h=2<Pd(a)?a.a.statusText:""}catch(l){V(a.o,"Can not get status: "+l.message),h=""}a.h=h+" ["+Qd(a)+"]";Nd(a)}}finally{Md(a)}}}function Md(a,b){if(a.a){Kd(a);var c=a.a,d=a.O[0]?ba:null;a.a=null;a.O=null;b||P(a,"ready");try{c.onreadystatechange=d}catch(e){(c=a.o)&&c.log(td,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function Kd(a){a.a&&a.A&&(a.a.ontimeout=null);ea(a.w)&&(m.clearTimeout(a.w),a.w=null)}function Pd(a){return a.a?a.a.readyState:0}function Qd(a){try{return 2<Pd(a)?a.a.status:-1}catch(b){return-1}}function W(a,b){return b+" ["+a.$+" "+a.m+" "+Qd(a)+"]"};var X=null,Rd=[];function Sd(a){a=a.split(";");for(var b={},c=0,d;d=a[c++];)if(!(0>d.indexOf(":"))){var e=d.indexOf(":");0>e||(b[d.substring(0,e)]=d.substring(e+1))}return b}function Td(a,b){return a.J>b.J?1:a.J==b.J?0:-1}function Ud(a,b){return(0<=a.V.indexOf("Final")?1:0)-(0<=b.V.indexOf("Final")?1:0)}function Vd(a,b){return b.ca-a.ca}function Wd(a){if(!(""+a).match(/^\d+$/))throw"Invalid week number: "+a;return"week"+a+".json"}
function Xd(){for(var a=new fd,b=a.getDate(),c=a.getFullYear(),a=a.getMonth()-1;0<=a;a--){var d;a:{switch(a){case 1:d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}b+=d}return Math.floor((b-253)/7)+1}
function Yd(){var a=Sd(U(X)).week||Xd(),a=new hb(Wd(a));ub(a);Hd(a.toString(),function(){var a;try{var c;c=this.a?id(this.a.responseText):void 0;a=c.lastUpdate;Rd=c.scores}catch(d){window.console.log(d),window.console.log("Could not load data; drawing a blank page."),a=(new Date).getTime()/1E3,Rd=[]}c=Sd(U(X)).sort;Zd(c?c.split(","):[]);document.getElementById("updatetime").innerHTML=new Date(1E3*a)})}
function Zd(a){var b=Rd;a=a||[];0==a.length&&(a=["active","score"]);var b=b.map($d).map(function(a){var b=a;a=b;if("proj"==(Sd(U(X)).score||"proj")){var c=b;a:{var b=""+b.game_time,d=b.match(/([^ ]*) - ([1-4])/);if(d)b=d[2],d=d[1],-1<d.indexOf(":")?(d=d.split(":"),d=60*parseInt(d[0],10)+parseInt(d[1],10)):d=0;else if(-1<b.toLowerCase().indexOf("half"))b=2,d=0;else{b=1;break a}b=(900*b-d)/3600}var d=[],l;for(l in c)d[l]=l in ae&&1>b?Math.round(parseInt(c[l],10)+(1-b)*ae[l]):c[l];b=d}l=be(b);return new ce(b.team,
b.opponent||"",b.boxscore_url||"javascript:void(0);",b.game_time,ya(a.completions+"/"+a.attempts+", ",a.pass_yards+" yd, ",a.pass_tds+" TD, ",a.interceptions_td+a.interceptions_notd+" INT"),l)}),c=a.length-1;for(;0<=c;c--){var d;"team"==a[c]?d=Td:"active"==a[c]?d=Ud:"score"==a[c]&&(d=Vd);d&&Qa(b,d)}d=b.map(function(a){for(var b=[],c=0,d;d=a.ya[c++];)0!=d.X&&b.push('<tr class="scorerow">  <td class="scoredesc">'+d.a+'</td>  <td class="scorepoints">'+de(d.X)+"</td></tr>");c="";a.ma&&(c="(vs. "+a.ma+
")");a=['<div class="team'+(0<=a.V.indexOf("Final")?"":" active")+'">','  <div class="teamheader">','    <img class="teamlogo" src="images/'+a.J+'.png" ','        width="48" height="32">','    <span class="teamname">'+a.J+"</span>",'    <span class="teampoints">'+de(a.ca)+"</span>","  </div>",'  <div class="statline">'+a.za+"</div>",'  <div class="gamestatus">','    <a href="'+a.ra+'">'+a.V+"</a>","    "+c,"  </div>",'  <table class="scoretable">'];a=a.concat(b);a=a.concat(["  </table>","</div>"]);
return a.join("\n")});document.getElementById("bqblscores").innerHTML="";for(a=0;a<d.length;a++)document.getElementById("bqblscores").innerHTML+=d[a]}function $d(a){for(var b in a)if(p(a[b])){var c;c=""+a[b];var d=Number(c);c=0==d&&/^[\s\xa0]*$/.test(c)?NaN:d;isNaN(c)||(a[b]=c)}return a}function ce(a,b,c,d,e,f){this.J=a;this.ma=b;this.ra=c;this.V=d;this.za=e;this.ya=f;this.ca=f.map(function(a){return a.X}).reduce(function(a,b){return a+b},0)}function Y(a,b){this.X=a;this.a=b}
function de(a){return 0>a?'<span class="neg">&minus;'+-1*a+"</span>":0<a?"+"+a:""+a}function Z(a,b,c){1!=b&&(c=b+"x "+c);return new Y(b*a,c)}
function be(a){var b=[Z(25,a.interceptions_td,"INT returned for TD"),Z(5,a.interceptions_notd,"INT"),Z(25,a.fumbles_lost_td,"fumble lost for TD"),Z(5,a.fumbles_lost_notd,"fumble lost"),Z(2,a.fumbles_kept,"fumble kept"),ee(a),fe(a.pass_tds+a.rush_tds),ge(a.pass_yards),he(a.completions,a.attempts),Z(20,a.safeties,"QB at fault for safety"),Z(35,a.benchings,"QB benched")];25>a.long_pass&&b.push(new Y(10,"no pass of 25+ yards"));75<=a.rush_yards&&b.push(new Y(-8,"75+ rushing yards"));a.game_losing_taint&&
b.push(new Y(50,"game-losing pick six in OT"));return b.filter(function(a){return 0!=a.X})}function ee(a){a=a.interceptions_notd+a.interceptions_td+a.fumbles_lost_notd+a.fumbles_lost_td;var b=0;3==a?b=10:4==a?b=20:5<=a&&(b=32);for(var c=6;c<=a;c++)b+=b/2;return new Y(b,a+"-turnover game")}
function ge(a){var b;100>a?(a=25,b="under 100"):150>a?(a=12,b="under 150"):200>a?(a=6,b="under 200"):300>a?(a=0,b="under 300"):350>a?(a=-6,b="300+"):400>a?(a=-9,b="350+"):(a=-12,b="400+");return new Y(a,b+" passing yards")}function he(a,b){var c=a/b,d;.3>c?(c=25,d="under 30%"):.4>c?(c=15,d="under 40%"):.5>c?(c=5,d="under 50%"):(c=0,d="50%+");return new Y(c,d+" completion rate")}function fe(a){var b;b=0==a?10:3>a?0:-5;for(var c=4;c<=a;c++)b*=2;return new Y(b,a+"-touchdown game")}
var ae={pass_yards:250,pass_tds:1.6,completions:22,attempts:35,long_pass:40};la("bqbl.init",function(){X=new S;Zc(X,!0);qc(X,"navigate",function(a){a=Sd(a.Aa).sort;var b=[];a&&(b=a.split(","));setTimeout(function(){Zd(b)},0)})});la("bqbl.loadAndUpdate",Yd);
la("bqbl.registerListeners",function(){function a(a,b,c){a&&qc(a,"click",function(a){var d=Sd(U(X)),e;for(e in b)d[e]=b[e];e=X;var f=[],F;for(F in d)f.push(F+":"+d[F]);d=f.join(";");U(e)!=d&&(e.C?(Wc(e,d,!1),Yc()||B&&!Kc()&&Xc(e,d,!1,void 0),e.K&&e.ha()):(Xc(e,d,!1),e.G=e.F=e.N.value=d,P(e,new Lc(d))));c&&Yd();a.preventDefault()})}a(document.getElementById("sortbyactive"),{sort:["active","team"]});a(document.getElementById("sortbyscore"),{sort:["score","team"]});a(document.getElementById("sortbyteam"),
{sort:["team"]});var b=document.getElementById("weekselectors");b.appendChild(document.createTextNode("Week: "));for(var c=1;17>=c;c++){var d=Qc("a",{href:"#"},document.createTextNode(String(""+c)));b.appendChild(d);if(17!=c){var e=Qc("span");e.innerHTML="&nbsp;&middot;&nbsp;";b.appendChild(e)}a(d,{week:c},!0)}a(document.getElementById("scoresreal"),{score:"real"});a(document.getElementById("scoresprojected"),{score:"proj"})});
la("bqbl.startUpdating",function(a){function b(){Yd();window.setTimeout(b,a||3E5)}b()});
