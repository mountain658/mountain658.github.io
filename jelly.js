/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
 * matter-js 0.17.1 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Matter",[],t):"object"==typeof exports?exports.Matter=t():e.Matter=t()}(this,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}([function(e,t){var n={};e.exports=n,function(){n._nextId=0,n._seed=0,n._nowStartTime=+new Date,n._warnedOnce={},n._decomp=null,n.extend=function(e,t){var i,o;"boolean"==typeof t?(i=2,o=t):(i=1,o=!0);for(var r=i;r<arguments.length;r++){var a=arguments[r];if(a)for(var s in a)o&&a[s]&&a[s].constructor===Object?e[s]&&e[s].constructor!==Object?e[s]=a[s]:(e[s]=e[s]||{},n.extend(e[s],o,a[s])):e[s]=a[s]}return e},n.clone=function(e,t){return n.extend({},t,e)},n.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)t.push(n);return t},n.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),i=0;i<n.length;i++)t.push(e[n[i]]);return t}for(var o in e)t.push(e[o]);return t},n.get=function(e,t,n,i){t=t.split(".").slice(n,i);for(var o=0;o<t.length;o+=1)e=e[t[o]];return e},n.set=function(e,t,i,o,r){var a=t.split(".").slice(o,r);return n.get(e,t,0,-1)[a[a.length-1]]=i,i},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(n.random()*(t+1)),o=e[t];e[t]=e[i],e[i]=o}return e},n.choose=function(e){return e[Math.floor(n.random()*e.length)]},n.isElement=function(e){return"undefined"!=typeof HTMLElement?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},n.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},n.isFunction=function(e){return"function"==typeof e},n.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object},n.isString=function(e){return"[object String]"===toString.call(e)},n.clamp=function(e,t,n){return e<t?t:e>n?n:e},n.sign=function(e){return e<0?-1:1},n.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-n._nowStartTime},n.random=function(t,n){return n=void 0!==n?n:1,(t=void 0!==t?t:0)+e()*(n-t)};var e=function(){return n._seed=(9301*n._seed+49297)%233280,n._seed/233280};n.colorToNumber=function(e){return 3==(e=e.replace("#","")).length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},n.logLevel=1,n.log=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.info=function(){console&&n.logLevel>0&&n.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warn=function(){console&&n.logLevel>0&&n.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},n.warnOnce=function(){var e=Array.prototype.slice.call(arguments).join(" ");n._warnedOnce[e]||(n.warn(e),n._warnedOnce[e]=!0)},n.deprecated=function(e,t,i){e[t]=n.chain((function(){n.warnOnce("🔅 deprecated 🔅",i)}),e[t])},n.nextId=function(){return n._nextId++},n.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},n.map=function(e,t){if(e.map)return e.map(t);for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n},n.topologicalSort=function(e){var t=[],i=[],o=[];for(var r in e)i[r]||o[r]||n._topologicalSort(r,i,o,e,t);return t},n._topologicalSort=function(e,t,i,o,r){var a=o[e]||[];i[e]=!0;for(var s=0;s<a.length;s+=1){var l=a[s];i[l]||(t[l]||n._topologicalSort(l,t,i,o,r))}i[e]=!1,t[e]=!0,r.push(e)},n.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var i=function(){for(var t,n=new Array(arguments.length),i=0,o=arguments.length;i<o;i++)n[i]=arguments[i];for(i=0;i<e.length;i+=1){var r=e[i].apply(t,n);void 0!==r&&(t=r)}return t};return i._chained=e,i},n.chainPathBefore=function(e,t,i){return n.set(e,t,n.chain(i,n.get(e,t)))},n.chainPathAfter=function(e,t,i){return n.set(e,t,n.chain(n.get(e,t),i))},n.setDecomp=function(e){n._decomp=e},n.getDecomp=function(){var e=n._decomp;try{e||"undefined"==typeof window||(e=window.decomp),e||"undefined"==typeof global||(e=global.decomp)}catch(t){e=null}return e}}()},function(e,t){var n={};e.exports=n,n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var i=0;i<t.length;i++){var o=t[i];o.x>e.max.x&&(e.max.x=o.x),o.x<e.min.x&&(e.min.x=o.x),o.y>e.max.y&&(e.max.y=o.y),o.y<e.min.y&&(e.min.y=o.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},n.shift=function(e,t){var n=e.max.x-e.min.x,i=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+i}},function(e,t){var n={};e.exports=n,n.create=function(e,t){return{x:e||0,y:t||0}},n.clone=function(e){return{x:e.x,y:e.y}},n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},n.rotate=function(e,t,n){var i=Math.cos(t),o=Math.sin(t);n||(n={});var r=e.x*i-e.y*o;return n.y=e.x*o+e.y*i,n.x=r,n},n.rotateAbout=function(e,t,n,i){var o=Math.cos(t),r=Math.sin(t);i||(i={});var a=n.x+((e.x-n.x)*o-(e.y-n.y)*r);return i.y=n.y+((e.x-n.x)*r+(e.y-n.y)*o),i.x=a,i},n.normalise=function(e){var t=n.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},n.dot=function(e,t){return e.x*t.x+e.y*t.y},n.cross=function(e,t){return e.x*t.y-e.y*t.x},n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},n.add=function(e,t,n){return n||(n={}),n.x=e.x+t.x,n.y=e.y+t.y,n},n.sub=function(e,t,n){return n||(n={}),n.x=e.x-t.x,n.y=e.y-t.y,n},n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},n.div=function(e,t){return{x:e.x/t,y:e.y/t}},n.perp=function(e,t){return{x:(t=!0===t?-1:1)*-e.y,y:t*e.x}},n.neg=function(e){return{x:-e.x,y:-e.y}},n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()]},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.create=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i],r={x:o.x,y:o.y,index:i,body:t,isInternal:!1};n.push(r)}return n},i.fromPath=function(e,t){var n=[];return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,(function(e,t,i){n.push({x:parseFloat(t),y:parseFloat(i)})})),i.create(n,t)},i.centre=function(e){for(var t,n,r,a=i.area(e,!0),s={x:0,y:0},l=0;l<e.length;l++)r=(l+1)%e.length,t=o.cross(e[l],e[r]),n=o.mult(o.add(e[l],e[r]),t),s=o.add(s,n);return o.div(s,6*a)},i.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return o.div(t,e.length)},i.area=function(e,t){for(var n=0,i=e.length-1,o=0;o<e.length;o++)n+=(e[i].x-e[o].x)*(e[i].y+e[o].y),i=o;return t?n/2:Math.abs(n)/2},i.inertia=function(e,t){for(var n,i,r=0,a=0,s=e,l=0;l<s.length;l++)i=(l+1)%s.length,r+=(n=Math.abs(o.cross(s[i],s[l])))*(o.dot(s[i],s[i])+o.dot(s[i],s[l])+o.dot(s[l],s[l])),a+=n;return t/6*(r/a)},i.translate=function(e,t,n){var i;if(n)for(i=0;i<e.length;i++)e[i].x+=t.x*n,e[i].y+=t.y*n;else for(i=0;i<e.length;i++)e[i].x+=t.x,e[i].y+=t.y;return e},i.rotate=function(e,t,n){if(0!==t){for(var i=Math.cos(t),o=Math.sin(t),r=0;r<e.length;r++){var a=e[r],s=a.x-n.x,l=a.y-n.y;a.x=n.x+(s*i-l*o),a.y=n.y+(s*o+l*i)}return e}},i.contains=function(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=e[(n+1)%e.length];if((t.x-i.x)*(o.y-i.y)+(t.y-i.y)*(i.x-o.x)>0)return!1}return!0},i.scale=function(e,t,n,r){if(1===t&&1===n)return e;var a,s;r=r||i.centre(e);for(var l=0;l<e.length;l++)a=e[l],s=o.sub(a,r),e[l].x=r.x+s.x*t,e[l].y=r.y+s.y*n;return e},i.chamfer=function(e,t,n,i,a){t="number"==typeof t?[t]:t||[8],n=void 0!==n?n:-1,i=i||2,a=a||14;for(var s=[],l=0;l<e.length;l++){var c=e[l-1>=0?l-1:e.length-1],u=e[l],d=e[(l+1)%e.length],p=t[l<t.length?l:t.length-1];if(0!==p){var f=o.normalise({x:u.y-c.y,y:c.x-u.x}),v=o.normalise({x:d.y-u.y,y:u.x-d.x}),m=Math.sqrt(2*Math.pow(p,2)),y=o.mult(r.clone(f),p),g=o.normalise(o.mult(o.add(f,v),.5)),x=o.sub(u,o.mult(g,m)),h=n;-1===n&&(h=1.75*Math.pow(p,.32)),(h=r.clamp(h,i,a))%2==1&&(h+=1);for(var b=Math.acos(o.dot(f,v))/h,S=0;S<h;S++)s.push(o.add(o.rotate(y,b*S),x))}else s.push(u)}return s},i.clockwiseSort=function(e){var t=i.mean(e);return e.sort((function(e,n){return o.angle(t,e)-o.angle(t,n)})),e},i.isConvex=function(e){var t,n,i,o,r=0,a=e.length;if(a<3)return null;for(t=0;t<a;t++)if(i=(t+2)%a,o=(e[n=(t+1)%a].x-e[t].x)*(e[i].y-e[n].y),(o-=(e[n].y-e[t].y)*(e[i].x-e[n].x))<0?r|=1:o>0&&(r|=2),3===r)return!1;return 0!==r||null},i.hull=function(e){var t,n,i=[],r=[];for((e=e.slice(0)).sort((function(e,t){var n=e.x-t.x;return 0!==n?n:e.y-t.y})),n=0;n<e.length;n+=1){for(t=e[n];r.length>=2&&o.cross3(r[r.length-2],r[r.length-1],t)<=0;)r.pop();r.push(t)}for(n=e.length-1;n>=0;n-=1){for(t=e[n];i.length>=2&&o.cross3(i[i.length-2],i[i.length-1],t)<=0;)i.pop();i.push(t)}return i.pop(),r.pop(),i.concat(r)}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.on=function(e,t,n){for(var i,o=t.split(" "),r=0;r<o.length;r++)i=o[r],e.events=e.events||{},e.events[i]=e.events[i]||[],e.events[i].push(n);return n},i.off=function(e,t,n){if(t){"function"==typeof t&&(n=t,t=o.keys(e.events).join(" "));for(var i=t.split(" "),r=0;r<i.length;r++){var a=e.events[i[r]],s=[];if(n&&a)for(var l=0;l<a.length;l++)a[l]!==n&&s.push(a[l]);e.events[i[r]]=s}}else e.events={}},i.trigger=function(e,t,n){var i,r,a,s,l=e.events;if(l&&o.keys(l).length>0){n||(n={}),i=t.split(" ");for(var c=0;c<i.length;c++)if(a=l[r=i[c]]){(s=o.clone(n,!1)).name=r,s.source=e;for(var u=0;u<a.length;u++)a[u].apply(e,[s])}}}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(0),a=n(1),s=n(6);i.create=function(e){return r.extend({id:r.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},e)},i.setModified=function(e,t,n,o){if(e.isModified=t,n&&e.parent&&i.setModified(e.parent,t,n,o),o)for(var r=0;r<e.composites.length;r++){var a=e.composites[r];i.setModified(a,t,n,o)}},i.add=function(e,t){var n=[].concat(t);o.trigger(e,"beforeAdd",{object:t});for(var a=0;a<n.length;a++){var s=n[a];switch(s.type){case"body":if(s.parent!==s){r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(e,s);break;case"constraint":i.addConstraint(e,s);break;case"composite":i.addComposite(e,s);break;case"mouseConstraint":i.addConstraint(e,s.constraint)}}return o.trigger(e,"afterAdd",{object:t}),e},i.remove=function(e,t,n){var r=[].concat(t);o.trigger(e,"beforeRemove",{object:t});for(var a=0;a<r.length;a++){var s=r[a];switch(s.type){case"body":i.removeBody(e,s,n);break;case"constraint":i.removeConstraint(e,s,n);break;case"composite":i.removeComposite(e,s,n);break;case"mouseConstraint":i.removeConstraint(e,s.constraint)}}return o.trigger(e,"afterRemove",{object:t}),e},i.addComposite=function(e,t){return e.composites.push(t),t.parent=e,i.setModified(e,!0,!0,!1),e},i.removeComposite=function(e,t,n){var o=r.indexOf(e.composites,t);if(-1!==o&&(i.removeCompositeAt(e,o),i.setModified(e,!0,!0,!1)),n)for(var a=0;a<e.composites.length;a++)i.removeComposite(e.composites[a],t,!0);return e},i.removeCompositeAt=function(e,t){return e.composites.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addBody=function(e,t){return e.bodies.push(t),i.setModified(e,!0,!0,!1),e},i.removeBody=function(e,t,n){var o=r.indexOf(e.bodies,t);if(-1!==o&&(i.removeBodyAt(e,o),i.setModified(e,!0,!0,!1)),n)for(var a=0;a<e.composites.length;a++)i.removeBody(e.composites[a],t,!0);return e},i.removeBodyAt=function(e,t){return e.bodies.splice(t,1),i.setModified(e,!0,!0,!1),e},i.addConstraint=function(e,t){return e.constraints.push(t),i.setModified(e,!0,!0,!1),e},i.removeConstraint=function(e,t,n){var o=r.indexOf(e.constraints,t);if(-1!==o&&i.removeConstraintAt(e,o),n)for(var a=0;a<e.composites.length;a++)i.removeConstraint(e.composites[a],t,!0);return e},i.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),i.setModified(e,!0,!0,!1),e},i.clear=function(e,t,n){if(n)for(var o=0;o<e.composites.length;o++)i.clear(e.composites[o],t,!0);return t?e.bodies=e.bodies.filter((function(e){return e.isStatic})):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,i.setModified(e,!0,!0,!1),e},i.allBodies=function(e){for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(i.allBodies(e.composites[n]));return t},i.allConstraints=function(e){for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(i.allConstraints(e.composites[n]));return t},i.allComposites=function(e){for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(i.allComposites(e.composites[n]));return t},i.get=function(e,t,n){var o,r;switch(n){case"body":o=i.allBodies(e);break;case"constraint":o=i.allConstraints(e);break;case"composite":o=i.allComposites(e).concat(e)}return o?0===(r=o.filter((function(e){return e.id.toString()===t.toString()}))).length?null:r[0]:null},i.move=function(e,t,n){return i.remove(e,t),i.add(n,t),e},i.rebase=function(e){for(var t=i.allBodies(e).concat(i.allConstraints(e)).concat(i.allComposites(e)),n=0;n<t.length;n++)t[n].id=r.nextId();return i.setModified(e,!0,!0,!1),e},i.translate=function(e,t,n){for(var o=n?i.allBodies(e):e.bodies,r=0;r<o.length;r++)s.translate(o[r],t);return i.setModified(e,!0,!0,!1),e},i.rotate=function(e,t,n,o){for(var r=Math.cos(t),a=Math.sin(t),l=o?i.allBodies(e):e.bodies,c=0;c<l.length;c++){var u=l[c],d=u.position.x-n.x,p=u.position.y-n.y;s.setPosition(u,{x:n.x+(d*r-p*a),y:n.y+(d*a+p*r)}),s.rotate(u,t)}return i.setModified(e,!0,!0,!1),e},i.scale=function(e,t,n,o,r){for(var a=r?i.allBodies(e):e.bodies,l=0;l<a.length;l++){var c=a[l],u=c.position.x-o.x,d=c.position.y-o.y;s.setPosition(c,{x:o.x+u*t,y:o.y+d*n}),s.scale(c,t,n)}return i.setModified(e,!0,!0,!1),e},i.bounds=function(e){for(var t=i.allBodies(e),n=[],o=0;o<t.length;o+=1){var r=t[o];n.push(r.bounds.min,r.bounds.max)}return a.create(n)}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),a=n(7),s=(n(16),n(0)),l=n(1),c=n(10);!function(){i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i.create=function(t){var n={id:s.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},i=s.extend(n,t);return e(i,t),i},i.nextGroup=function(e){return e?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var e=function(e,t){t=t||{},i.set(e,{bounds:e.bounds||l.create(e.vertices),positionPrev:e.positionPrev||r.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),o.rotate(e.vertices,e.angle,e.position),c.rotate(e.axes,e.angle),l.update(e.bounds,e.vertices,e.velocity),i.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});var n=e.isStatic?"#14151f":s.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),a=e.isStatic?"#555":"#ccc",u=e.isStatic&&null===e.render.fillStyle?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||a,e.render.lineWidth=e.render.lineWidth||u,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)};i.set=function(e,t,n){var o;for(o in"string"==typeof t&&(o=t,(t={})[o]=n),t)if(Object.prototype.hasOwnProperty.call(t,o))switch(n=t[o],o){case"isStatic":i.setStatic(e,n);break;case"isSleeping":a.set(e,n);break;case"mass":i.setMass(e,n);break;case"density":i.setDensity(e,n);break;case"inertia":i.setInertia(e,n);break;case"vertices":i.setVertices(e,n);break;case"position":i.setPosition(e,n);break;case"angle":i.setAngle(e,n);break;case"velocity":i.setVelocity(e,n);break;case"angularVelocity":i.setAngularVelocity(e,n);break;case"parts":i.setParts(e,n);break;case"centre":i.setCentre(e,n);break;default:e[o]=n}},i.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var i=e.parts[n];i.isStatic=t,t?(i._original={restitution:i.restitution,friction:i.friction,mass:i.mass,inertia:i.inertia,density:i.density,inverseMass:i.inverseMass,inverseInertia:i.inverseInertia},i.restitution=0,i.friction=1,i.mass=i.inertia=i.density=1/0,i.inverseMass=i.inverseInertia=0,i.positionPrev.x=i.position.x,i.positionPrev.y=i.position.y,i.anglePrev=i.angle,i.angularVelocity=0,i.speed=0,i.angularSpeed=0,i.motion=0):i._original&&(i.restitution=i._original.restitution,i.friction=i._original.friction,i.mass=i._original.mass,i.inertia=i._original.inertia,i.density=i._original.density,i.inverseMass=i._original.inverseMass,i.inverseInertia=i._original.inverseInertia,i._original=null)}},i.setMass=function(e,t){var n=e.inertia/(e.mass/6);e.inertia=n*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},i.setDensity=function(e,t){i.setMass(e,t*e.area),e.density=t},i.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},i.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=o.create(t,e),e.axes=c.fromVertices(e.vertices),e.area=o.area(e.vertices),i.setMass(e,e.density*e.area);var n=o.centre(e.vertices);o.translate(e.vertices,n,-1),i.setInertia(e,i._inertiaScale*o.inertia(e.vertices,e.mass)),o.translate(e.vertices,e.position),l.update(e.bounds,e.vertices,e.velocity)},i.setParts=function(e,t,n){var r;for(t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,r=0;r<t.length;r++){var a=t[r];a!==e&&(a.parent=e,e.parts.push(a))}if(1!==e.parts.length){if(n=void 0===n||n){var s=[];for(r=0;r<t.length;r++)s=s.concat(t[r].vertices);o.clockwiseSort(s);var l=o.hull(s),c=o.centre(l);i.setVertices(e,l),o.translate(e.vertices,c)}var u=i._totalProperties(e);e.area=u.area,e.parent=e,e.position.x=u.centre.x,e.position.y=u.centre.y,e.positionPrev.x=u.centre.x,e.positionPrev.y=u.centre.y,i.setMass(e,u.mass),i.setInertia(e,u.inertia),i.setPosition(e,u.centre)}},i.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},i.setPosition=function(e,t){var n=r.sub(t,e.position);e.positionPrev.x+=n.x,e.positionPrev.y+=n.y;for(var i=0;i<e.parts.length;i++){var a=e.parts[i];a.position.x+=n.x,a.position.y+=n.y,o.translate(a.vertices,n),l.update(a.bounds,a.vertices,e.velocity)}},i.setAngle=function(e,t){var n=t-e.angle;e.anglePrev+=n;for(var i=0;i<e.parts.length;i++){var a=e.parts[i];a.angle+=n,o.rotate(a.vertices,n,e.position),c.rotate(a.axes,n),l.update(a.bounds,a.vertices,e.velocity),i>0&&r.rotateAbout(a.position,n,e.position,a.position)}},i.setVelocity=function(e,t){e.positionPrev.x=e.position.x-t.x,e.positionPrev.y=e.position.y-t.y,e.velocity.x=t.x,e.velocity.y=t.y,e.speed=r.magnitude(e.velocity)},i.setAngularVelocity=function(e,t){e.anglePrev=e.angle-t,e.angularVelocity=t,e.angularSpeed=Math.abs(e.angularVelocity)},i.translate=function(e,t){i.setPosition(e,r.add(e.position,t))},i.rotate=function(e,t,n){if(n){var o=Math.cos(t),r=Math.sin(t),a=e.position.x-n.x,s=e.position.y-n.y;i.setPosition(e,{x:n.x+(a*o-s*r),y:n.y+(a*r+s*o)}),i.setAngle(e,e.angle+t)}else i.setAngle(e,e.angle+t)},i.scale=function(e,t,n,r){var a=0,s=0;r=r||e.position;for(var u=0;u<e.parts.length;u++){var d=e.parts[u];o.scale(d.vertices,t,n,r),d.axes=c.fromVertices(d.vertices),d.area=o.area(d.vertices),i.setMass(d,e.density*d.area),o.translate(d.vertices,{x:-d.position.x,y:-d.position.y}),i.setInertia(d,i._inertiaScale*o.inertia(d.vertices,d.mass)),o.translate(d.vertices,{x:d.position.x,y:d.position.y}),u>0&&(a+=d.area,s+=d.inertia),d.position.x=r.x+(d.position.x-r.x)*t,d.position.y=r.y+(d.position.y-r.y)*n,l.update(d.bounds,d.vertices,e.velocity)}e.parts.length>1&&(e.area=a,e.isStatic||(i.setMass(e,e.density*a),i.setInertia(e,s))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},i.update=function(e,t,n,i){var a=Math.pow(t*n*e.timeScale,2),s=1-e.frictionAir*n*e.timeScale,u=e.position.x-e.positionPrev.x,d=e.position.y-e.positionPrev.y;e.velocity.x=u*s*i+e.force.x/e.mass*a,e.velocity.y=d*s*i+e.force.y/e.mass*a,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.angularVelocity=(e.angle-e.anglePrev)*s*i+e.torque/e.inertia*a,e.anglePrev=e.angle,e.angle+=e.angularVelocity,e.speed=r.magnitude(e.velocity),e.angularSpeed=Math.abs(e.angularVelocity);for(var p=0;p<e.parts.length;p++){var f=e.parts[p];o.translate(f.vertices,e.velocity),p>0&&(f.position.x+=e.velocity.x,f.position.y+=e.velocity.y),0!==e.angularVelocity&&(o.rotate(f.vertices,e.angularVelocity,e.position),c.rotate(f.axes,e.angularVelocity),p>0&&r.rotateAbout(f.position,e.angularVelocity,e.position,f.position)),l.update(f.bounds,f.vertices,e.velocity)}},i.applyForce=function(e,t,n){e.force.x+=n.x,e.force.y+=n.y;var i=t.x-e.position.x,o=t.y-e.position.y;e.torque+=i*n.y-o*n.x},i._totalProperties=function(e){for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=1===e.parts.length?0:1;n<e.parts.length;n++){var i=e.parts[n],o=i.mass!==1/0?i.mass:1;t.mass+=o,t.area+=i.area,t.inertia+=i.inertia,t.centre=r.add(t.centre,r.mult(i.position,o))}return t.centre=r.div(t.centre,t.mass),t}}()},function(e,t,n){var i={};e.exports=i;var o=n(4);i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o],a=r.speed*r.speed+r.angularSpeed*r.angularSpeed;if(0===r.force.x&&0===r.force.y){var s=Math.min(r.motion,a),l=Math.max(r.motion,a);r.motion=i._minBias*s+(1-i._minBias)*l,r.sleepThreshold>0&&r.motion<i._motionSleepThreshold*n?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold&&i.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}else i.set(r,!1)}},i.afterCollisions=function(e,t){for(var n=t*t*t,o=0;o<e.length;o++){var r=e[o];if(r.isActive){var a=r.collision,s=a.bodyA.parent,l=a.bodyB.parent;if(!(s.isSleeping&&l.isSleeping||s.isStatic||l.isStatic)&&(s.isSleeping||l.isSleeping)){var c=s.isSleeping&&!s.isStatic?s:l,u=c===s?l:s;!c.isStatic&&u.motion>i._motionWakeThreshold*n&&i.set(c,!1)}}}},i.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||o.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,n&&o.trigger(e,"sleepEnd"))}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),a=n(7),s=n(1),l=n(10),c=n(0);i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(e){var t=e;t.bodyA&&!t.pointA&&(t.pointA={x:0,y:0}),t.bodyB&&!t.pointB&&(t.pointB={x:0,y:0});var n=t.bodyA?r.add(t.bodyA.position,t.pointA):t.pointA,i=t.bodyB?r.add(t.bodyB.position,t.pointB):t.pointB,o=r.magnitude(r.sub(n,i));t.length=void 0!==t.length?t.length:o,t.id=t.id||c.nextId(),t.label=t.label||"Constraint",t.type="constraint",t.stiffness=t.stiffness||(t.length>0?1:.7),t.damping=t.damping||0,t.angularStiffness=t.angularStiffness||0,t.angleA=t.bodyA?t.bodyA.angle:t.angleA,t.angleB=t.bodyB?t.bodyB.angle:t.angleB,t.plugin={};var a={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===t.length&&t.stiffness>.1?(a.type="pin",a.anchors=!1):t.stiffness<.9&&(a.type="spring"),t.render=c.extend(a,t.render),t},i.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],i=n.constraintImpulse;n.isStatic||0===i.x&&0===i.y&&0===i.angle||(n.position.x+=i.x,n.position.y+=i.y,n.angle+=i.angle)}},i.solveAll=function(e,t){for(var n=0;n<e.length;n+=1){var o=e[n],r=!o.bodyA||o.bodyA&&o.bodyA.isStatic,a=!o.bodyB||o.bodyB&&o.bodyB.isStatic;(r||a)&&i.solve(e[n],t)}for(n=0;n<e.length;n+=1)r=!(o=e[n]).bodyA||o.bodyA&&o.bodyA.isStatic,a=!o.bodyB||o.bodyB&&o.bodyB.isStatic,r||a||i.solve(e[n],t)},i.solve=function(e,t){var n=e.bodyA,o=e.bodyB,a=e.pointA,s=e.pointB;if(n||o){n&&!n.isStatic&&(r.rotate(a,n.angle-e.angleA,a),e.angleA=n.angle),o&&!o.isStatic&&(r.rotate(s,o.angle-e.angleB,s),e.angleB=o.angle);var l=a,c=s;if(n&&(l=r.add(n.position,a)),o&&(c=r.add(o.position,s)),l&&c){var u=r.sub(l,c),d=r.magnitude(u);d<i._minLength&&(d=i._minLength);var p,f,v,m,y,g=(d-e.length)/d,x=e.stiffness<1?e.stiffness*t:e.stiffness,h=r.mult(u,g*x),b=(n?n.inverseMass:0)+(o?o.inverseMass:0),S=b+((n?n.inverseInertia:0)+(o?o.inverseInertia:0));if(e.damping){var w=r.create();v=r.div(u,d),y=r.sub(o&&r.sub(o.position,o.positionPrev)||w,n&&r.sub(n.position,n.positionPrev)||w),m=r.dot(v,y)}n&&!n.isStatic&&(f=n.inverseMass/b,n.constraintImpulse.x-=h.x*f,n.constraintImpulse.y-=h.y*f,n.position.x-=h.x*f,n.position.y-=h.y*f,e.damping&&(n.positionPrev.x-=e.damping*v.x*m*f,n.positionPrev.y-=e.damping*v.y*m*f),p=r.cross(a,h)/S*i._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=p,n.angle-=p),o&&!o.isStatic&&(f=o.inverseMass/b,o.constraintImpulse.x+=h.x*f,o.constraintImpulse.y+=h.y*f,o.position.x+=h.x*f,o.position.y+=h.y*f,e.damping&&(o.positionPrev.x+=e.damping*v.x*m*f,o.positionPrev.y+=e.damping*v.y*m*f),p=r.cross(s,h)/S*i._torqueDampen*o.inverseInertia*(1-e.angularStiffness),o.constraintImpulse.angle+=p,o.angle+=p)}}},i.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],c=n.constraintImpulse;if(!(n.isStatic||0===c.x&&0===c.y&&0===c.angle)){a.set(n,!1);for(var u=0;u<n.parts.length;u++){var d=n.parts[u];o.translate(d.vertices,c),u>0&&(d.position.x+=c.x,d.position.y+=c.y),0!==c.angle&&(o.rotate(d.vertices,c.angle,n.position),l.rotate(d.axes,c.angle),u>0&&r.rotateAbout(d.position,c.angle,n.position,d.position)),s.update(d.bounds,d.vertices,n.velocity)}c.angle*=i._warming,c.x*=i._warming,c.y*=i._warming}}},i.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+e.pointA.x,y:(e.bodyA?e.bodyA.position.y:0)+e.pointA.y}},i.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+e.pointB.x,y:(e.bodyB?e.bodyB.position.y:0)+e.pointB.y}}},function(e,t,n){var i={};e.exports=i;var o=n(17);i.create=function(e,t){var n=e.bodyA,o=e.bodyB,r=e.parentA,a=e.parentB,s={id:i.id(n,o),bodyA:n,bodyB:o,contacts:{},activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||o.isSensor,timeCreated:t,timeUpdated:t,inverseMass:r.inverseMass+a.inverseMass,friction:Math.min(r.friction,a.friction),frictionStatic:Math.max(r.frictionStatic,a.frictionStatic),restitution:Math.max(r.restitution,a.restitution),slop:Math.max(r.slop,a.slop)};return i.update(s,e,t),s},i.update=function(e,t,n){var r=e.contacts,a=t.supports,s=e.activeContacts,l=t.parentA,c=t.parentB;if(e.collision=t,e.inverseMass=l.inverseMass+c.inverseMass,e.friction=Math.min(l.friction,c.friction),e.frictionStatic=Math.max(l.frictionStatic,c.frictionStatic),e.restitution=Math.max(l.restitution,c.restitution),e.slop=Math.max(l.slop,c.slop),s.length=0,t.collided){for(var u=0;u<a.length;u++){var d=a[u],p=o.id(d),f=r[p];f?s.push(f):s.push(r[p]=o.create(d))}e.separation=t.depth,i.setActive(e,!0,n)}else!0===e.isActive&&i.setActive(e,!1,n)},i.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.activeContacts.length=0)},i.id=function(e,t){return e.id<t.id?"A"+e.id+"B"+t.id:"A"+t.id+"B"+e.id}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(0);i.fromVertices=function(e){for(var t={},n=0;n<e.length;n++){var i=(n+1)%e.length,a=o.normalise({x:e[i].y-e[n].y,y:e[n].x-e[i].x}),s=0===a.y?1/0:a.x/a.y;t[s=s.toFixed(3).toString()]=a}return r.values(t)},i.rotate=function(e,t){if(0!==t)for(var n=Math.cos(t),i=Math.sin(t),o=0;o<e.length;o++){var r,a=e[o];r=a.x*n-a.y*i,a.y=a.x*i+a.y*n,a.x=r}}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(0),a=n(6),s=n(1),l=n(2);i.rectangle=function(e,t,n,i,s){s=s||{};var l={label:"Rectangle Body",position:{x:e,y:t},vertices:o.fromPath("L 0 0 L "+n+" 0 L "+n+" "+i+" L 0 "+i)};if(s.chamfer){var c=s.chamfer;l.vertices=o.chamfer(l.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete s.chamfer}return a.create(r.extend({},l,s))},i.trapezoid=function(e,t,n,i,s,l){l=l||{};var c,u=n*(s*=.5),d=u+(1-2*s)*n,p=d+u;c=s<.5?"L 0 0 L "+u+" "+-i+" L "+d+" "+-i+" L "+p+" 0":"L 0 0 L "+d+" "+-i+" L "+p+" 0";var f={label:"Trapezoid Body",position:{x:e,y:t},vertices:o.fromPath(c)};if(l.chamfer){var v=l.chamfer;f.vertices=o.chamfer(f.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete l.chamfer}return a.create(r.extend({},f,l))},i.circle=function(e,t,n,o,a){o=o||{};var s={label:"Circle Body",circleRadius:n};a=a||25;var l=Math.ceil(Math.max(10,Math.min(a,n)));return l%2==1&&(l+=1),i.polygon(e,t,l,n,r.extend({},s,o))},i.polygon=function(e,t,n,s,l){if(l=l||{},n<3)return i.circle(e,t,s,l);for(var c=2*Math.PI/n,u="",d=.5*c,p=0;p<n;p+=1){var f=d+p*c,v=Math.cos(f)*s,m=Math.sin(f)*s;u+="L "+v.toFixed(3)+" "+m.toFixed(3)+" "}var y={label:"Polygon Body",position:{x:e,y:t},vertices:o.fromPath(u)};if(l.chamfer){var g=l.chamfer;y.vertices=o.chamfer(y.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete l.chamfer}return a.create(r.extend({},y,l))},i.fromVertices=function(e,t,n,i,c,u,d,p){var f,v,m,y,g,x,h,b,S,w,A=r.getDecomp();for(f=Boolean(A&&A.quickDecomp),i=i||{},m=[],c=void 0!==c&&c,u=void 0!==u?u:.01,d=void 0!==d?d:10,p=void 0!==p?p:.01,r.isArray(n[0])||(n=[n]),S=0;S<n.length;S+=1)if(g=n[S],!(y=o.isConvex(g))&&!f&&r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),y||!f)g=y?o.clockwiseSort(g):o.hull(g),m.push({position:{x:e,y:t},vertices:g});else{var P=g.map((function(e){return[e.x,e.y]}));A.makeCCW(P),!1!==u&&A.removeCollinearPoints(P,u),!1!==p&&A.removeDuplicatePoints&&A.removeDuplicatePoints(P,p);var M=A.quickDecomp(P);for(x=0;x<M.length;x++){var C=M[x].map((function(e){return{x:e[0],y:e[1]}}));d>0&&o.area(C)<d||m.push({position:o.centre(C),vertices:C})}}for(x=0;x<m.length;x++)m[x]=a.create(r.extend(m[x],i));if(c)for(x=0;x<m.length;x++){var B=m[x];for(h=x+1;h<m.length;h++){var _=m[h];if(s.overlaps(B.bounds,_.bounds)){var k=B.vertices,I=_.vertices;for(b=0;b<B.vertices.length;b++)for(w=0;w<_.vertices.length;w++){var T=l.magnitudeSquared(l.sub(k[(b+1)%k.length],I[w])),R=l.magnitudeSquared(l.sub(k[b],I[(w+1)%I.length]));T<5&&R<5&&(k[b].isInternal=!0,I[w].isInternal=!0)}}}}return m.length>1?(v=a.create(r.extend({parts:m.slice(0)},i)),a.setPosition(v,{x:e,y:t}),v):m[0]}},function(e,t,n){var i={};e.exports=i;var o=n(0);i.create=function(e){var t={};return e||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute("data-pixel-ratio"),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=i._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault()},i.setElement(t,t.element),t},i.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove),t.addEventListener("mousedown",e.mousedown),t.addEventListener("mouseup",e.mouseup),t.addEventListener("mousewheel",e.mousewheel),t.addEventListener("DOMMouseScroll",e.mousewheel),t.addEventListener("touchmove",e.mousemove),t.addEventListener("touchstart",e.mousedown),t.addEventListener("touchend",e.mouseup)},i.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},i.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},i._getRelativeMousePosition=function(e,t,n){var i,o,r=t.getBoundingClientRect(),a=document.documentElement||document.body.parentNode||document.body,s=void 0!==window.pageXOffset?window.pageXOffset:a.scrollLeft,l=void 0!==window.pageYOffset?window.pageYOffset:a.scrollTop,c=e.changedTouches;return c?(i=c[0].pageX-r.left-s,o=c[0].pageY-r.top-l):(i=e.pageX-r.left-s,o=e.pageY-r.top-l),{x:i/(t.clientWidth/(t.width||t.clientWidth)*n),y:o/(t.clientHeight/(t.height||t.clientHeight)*n)}}},function(e,t,n){var i={};e.exports=i;var o=n(14),r=n(9),a=n(1);i.collisions=function(e,t){for(var n=[],s=t.pairs.table,l=0;l<e.length;l++){var c=e[l][0],u=e[l][1];if((!c.isStatic&&!c.isSleeping||!u.isStatic&&!u.isSleeping)&&i.canCollide(c.collisionFilter,u.collisionFilter)&&a.overlaps(c.bounds,u.bounds))for(var d=c.parts.length>1?1:0;d<c.parts.length;d++)for(var p=c.parts[d],f=u.parts.length>1?1:0;f<u.parts.length;f++){var v=u.parts[f];if(p===c&&v===u||a.overlaps(p.bounds,v.bounds)){var m,y=s[r.id(p,v)];m=y&&y.isActive?y.collision:null;var g=o.collides(p,v,m);g.collided&&n.push(g)}}}return n},i.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:0!=(e.mask&t.category)&&0!=(t.mask&e.category)}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2);i.collides=function(e,t,n){var a,s,l,c,u=!1;if(n){var d=e.parent,p=t.parent,f=d.speed*d.speed+d.angularSpeed*d.angularSpeed+p.speed*p.speed+p.angularSpeed*p.angularSpeed;u=n&&n.collided&&f<.2,c=n}else c={collided:!1,bodyA:e,bodyB:t};if(n&&u){var v=c.axisBody,m=v===e?t:e,y=[v.axes[n.axisNumber]];if(l=i._overlapAxes(v.vertices,m.vertices,y),c.reused=!0,l.overlap<=0)return c.collided=!1,c}else{if((a=i._overlapAxes(e.vertices,t.vertices,e.axes)).overlap<=0)return c.collided=!1,c;if((s=i._overlapAxes(t.vertices,e.vertices,t.axes)).overlap<=0)return c.collided=!1,c;a.overlap<s.overlap?(l=a,c.axisBody=e):(l=s,c.axisBody=t),c.axisNumber=l.axisNumber}c.bodyA=e.id<t.id?e:t,c.bodyB=e.id<t.id?t:e,c.collided=!0,c.depth=l.overlap,c.parentA=c.bodyA.parent,c.parentB=c.bodyB.parent,e=c.bodyA,t=c.bodyB,r.dot(l.axis,r.sub(t.position,e.position))<0?c.normal={x:l.axis.x,y:l.axis.y}:c.normal={x:-l.axis.x,y:-l.axis.y},c.tangent=r.perp(c.normal),c.penetration=c.penetration||{},c.penetration.x=c.normal.x*c.depth,c.penetration.y=c.normal.y*c.depth;var g=i._findSupports(e,t,c.normal),x=[];if(o.contains(e.vertices,g[0])&&x.push(g[0]),o.contains(e.vertices,g[1])&&x.push(g[1]),x.length<2){var h=i._findSupports(t,e,r.neg(c.normal));o.contains(t.vertices,h[0])&&x.push(h[0]),x.length<2&&o.contains(t.vertices,h[1])&&x.push(h[1])}return x.length<1&&(x=[g[0]]),c.supports=x,c},i._overlapAxes=function(e,t,n){for(var o,a,s=r._temp[0],l=r._temp[1],c={overlap:Number.MAX_VALUE},u=0;u<n.length;u++){if(a=n[u],i._projectToAxis(s,e,a),i._projectToAxis(l,t,a),(o=Math.min(s.max-l.min,l.max-s.min))<=0)return c.overlap=o,c;o<c.overlap&&(c.overlap=o,c.axis=a,c.axisNumber=u)}return c},i._projectToAxis=function(e,t,n){for(var i=r.dot(t[0],n),o=i,a=1;a<t.length;a+=1){var s=r.dot(t[a],n);s>o?o=s:s<i&&(i=s)}e.min=i,e.max=o},i._findSupports=function(e,t,n){for(var i,o,a,s,l=Number.MAX_VALUE,c=r._temp[0],u=t.vertices,d=e.position,p=0;p<u.length;p++)o=u[p],c.x=o.x-d.x,c.y=o.y-d.y,(i=-r.dot(n,c))<l&&(l=i,a=o);return o=u[a.index-1>=0?a.index-1:u.length-1],c.x=o.x-d.x,c.y=o.y-d.y,l=-r.dot(n,c),s=o,o=u[(a.index+1)%u.length],c.x=o.x-d.x,c.y=o.y-d.y,(i=-r.dot(n,c))<l&&(s=o),[a,s]}},function(e,t,n){var i={};e.exports=i;var o=n(0);i._registry={},i.register=function(e){if(i.isPlugin(e)||o.warn("Plugin.register:",i.toString(e),"does not implement all required fields."),e.name in i._registry){var t=i._registry[e.name],n=i.versionParse(e.version).number,r=i.versionParse(t.version).number;n>r?(o.warn("Plugin.register:",i.toString(t),"was upgraded to",i.toString(e)),i._registry[e.name]=e):n<r?o.warn("Plugin.register:",i.toString(t),"can not be downgraded to",i.toString(e)):e!==t&&o.warn("Plugin.register:",i.toString(e),"is already registered to different plugin object")}else i._registry[e.name]=e;return e},i.resolve=function(e){return i._registry[i.dependencyParse(e).name]},i.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},i.isPlugin=function(e){return e&&e.name&&e.version&&e.install},i.isUsed=function(e,t){return e.used.indexOf(t)>-1},i.isFor=function(e,t){var n=e.for&&i.dependencyParse(e.for);return!e.for||t.name===n.name&&i.versionSatisfies(t.version,n.range)},i.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0!==e.uses.length){for(var n=i.dependencies(e),r=o.topologicalSort(n),a=[],s=0;s<r.length;s+=1)if(r[s]!==e.name){var l=i.resolve(r[s]);l?i.isUsed(e,l.name)||(i.isFor(l,e)||(o.warn("Plugin.use:",i.toString(l),"is for",l.for,"but installed on",i.toString(e)+"."),l._warned=!0),l.install?l.install(e):(o.warn("Plugin.use:",i.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(a.push("🔶 "+i.toString(l)),delete l._warned):a.push("✅ "+i.toString(l)),e.used.push(l.name)):a.push("❌ "+r[s])}a.length>0&&o.info(a.join("  "))}else o.warn("Plugin.use:",i.toString(e),"does not specify any dependencies to install.")},i.dependencies=function(e,t){var n=i.dependencyParse(e),r=n.name;if(!(r in(t=t||{}))){e=i.resolve(e)||e,t[r]=o.map(e.uses||[],(function(t){i.isPlugin(t)&&i.register(t);var r=i.dependencyParse(t),a=i.resolve(t);return a&&!i.versionSatisfies(a.version,r.range)?(o.warn("Plugin.dependencies:",i.toString(a),"does not satisfy",i.toString(r),"used by",i.toString(n)+"."),a._warned=!0,e._warned=!0):a||(o.warn("Plugin.dependencies:",i.toString(t),"used by",i.toString(n),"could not be resolved."),e._warned=!0),r.name}));for(var a=0;a<t[r].length;a+=1)i.dependencies(t[r][a],t);return t}},i.dependencyParse=function(e){return o.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/.test(e)||o.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}):{name:e.name,range:e.range||e.version}},i.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-]+)?$/;t.test(e)||o.warn("Plugin.versionParse:",e,"is not a valid version or range.");var n=t.exec(e),i=Number(n[4]),r=Number(n[5]),a=Number(n[6]);return{isRange:Boolean(n[1]||n[2]),version:n[3],range:e,operator:n[1]||n[2]||"",major:i,minor:r,patch:a,parts:[i,r,a],prerelease:n[7],number:1e8*i+1e4*r+a}},i.versionSatisfies=function(e,t){t=t||"*";var n=i.versionParse(t),o=i.versionParse(e);if(n.isRange){if("*"===n.operator||"*"===e)return!0;if(">"===n.operator)return o.number>n.number;if(">="===n.operator)return o.number>=n.number;if("~"===n.operator)return o.major===n.major&&o.minor===n.minor&&o.patch>=n.patch;if("^"===n.operator)return n.major>0?o.major===n.major&&o.number>=n.number:n.minor>0?o.minor===n.minor&&o.patch>=n.patch:o.patch===n.patch}return e===t||"*"===e}},function(e,t,n){var i={};e.exports=i;var o=n(0),r=n(5),a=n(1),s=n(4),l=n(2),c=n(12);!function(){var e,t;"undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout((function(){e(o.now())}),1e3/60)},t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i._goodFps=30,i._goodDelta=1e3/60,i.create=function(e){var t={controller:i,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},n=o.extend(t,e);return n.canvas&&(n.canvas.width=n.options.width||n.canvas.width,n.canvas.height=n.options.height||n.canvas.height),n.mouse=e.mouse,n.engine=e.engine,n.canvas=n.canvas||d(n.options.width,n.options.height),n.context=n.canvas.getContext("2d"),n.textures={},n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.canvas.width,y:n.canvas.height}},1!==n.options.pixelRatio&&i.setPixelRatio(n,n.options.pixelRatio),o.isElement(n.element)?n.element.appendChild(n.canvas):n.canvas.parentNode||o.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),n},i.run=function(t){!function o(r){t.frameRequestId=e(o),n(t,r),i.world(t,r),(t.options.showStats||t.options.showDebug)&&i.stats(t,t.context,r),(t.options.showPerformance||t.options.showDebug)&&i.performance(t,t.context,r)}()},i.stop=function(e){t(e.frameRequestId)},i.setPixelRatio=function(e,t){var n=e.options,i=e.canvas;"auto"===t&&(t=p(i)),n.pixelRatio=t,i.setAttribute("data-pixel-ratio",t),i.width=n.width*t,i.height=n.height*t,i.style.width=n.width+"px",i.style.height=n.height+"px"},i.lookAt=function(e,t,n,i){i=void 0===i||i,t=o.isArray(t)?t:[t],n=n||{x:0,y:0};for(var r={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},a=0;a<t.length;a+=1){var s=t[a],l=s.bounds?s.bounds.min:s.min||s.position||s,u=s.bounds?s.bounds.max:s.max||s.position||s;l&&u&&(l.x<r.min.x&&(r.min.x=l.x),u.x>r.max.x&&(r.max.x=u.x),l.y<r.min.y&&(r.min.y=l.y),u.y>r.max.y&&(r.max.y=u.y))}var d=r.max.x-r.min.x+2*n.x,p=r.max.y-r.min.y+2*n.y,f=e.canvas.height,v=e.canvas.width/f,m=d/p,y=1,g=1;m>v?g=m/v:y=v/m,e.options.hasBounds=!0,e.bounds.min.x=r.min.x,e.bounds.max.x=r.min.x+d*y,e.bounds.min.y=r.min.y,e.bounds.max.y=r.min.y+p*g,i&&(e.bounds.min.x+=.5*d-d*y*.5,e.bounds.max.x+=.5*d-d*y*.5,e.bounds.min.y+=.5*p-p*g*.5,e.bounds.max.y+=.5*p-p*g*.5),e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(c.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),c.setOffset(e.mouse,e.bounds.min))},i.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,i=t/e.options.width,o=n/e.options.height;e.context.setTransform(e.options.pixelRatio/i,0,0,e.options.pixelRatio/o,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},i.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},i.world=function(e,t){var n,u=o.now(),d=e.engine,p=d.world,f=e.canvas,m=e.context,y=e.options,g=e.timing,x=r.allBodies(p),h=r.allConstraints(p),b=y.wireframes?y.wireframeBackground:y.background,S=[],w=[],A={timestamp:d.timing.timestamp};if(s.trigger(e,"beforeRender",A),e.currentBackground!==b&&v(e,b),m.globalCompositeOperation="source-in",m.fillStyle="transparent",m.fillRect(0,0,f.width,f.height),m.globalCompositeOperation="source-over",y.hasBounds){for(n=0;n<x.length;n++){var P=x[n];a.overlaps(P.bounds,e.bounds)&&S.push(P)}for(n=0;n<h.length;n++){var M=h[n],C=M.bodyA,B=M.bodyB,_=M.pointA,k=M.pointB;C&&(_=l.add(C.position,M.pointA)),B&&(k=l.add(B.position,M.pointB)),_&&k&&((a.contains(e.bounds,_)||a.contains(e.bounds,k))&&w.push(M))}i.startViewTransform(e),e.mouse&&(c.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),c.setOffset(e.mouse,e.bounds.min))}else w=h,S=x,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!y.wireframes||d.enableSleeping&&y.showSleeping?i.bodies(e,S,m):(y.showConvexHulls&&i.bodyConvexHulls(e,S,m),i.bodyWireframes(e,S,m)),y.showBounds&&i.bodyBounds(e,S,m),(y.showAxes||y.showAngleIndicator)&&i.bodyAxes(e,S,m),y.showPositions&&i.bodyPositions(e,S,m),y.showVelocity&&i.bodyVelocity(e,S,m),y.showIds&&i.bodyIds(e,S,m),y.showSeparations&&i.separations(e,d.pairs.list,m),y.showCollisions&&i.collisions(e,d.pairs.list,m),y.showVertexNumbers&&i.vertexNumbers(e,S,m),y.showMousePosition&&i.mousePosition(e,e.mouse,m),i.constraints(w,m),y.showBroadphase&&i.grid(e,d.grid,m),y.hasBounds&&i.endViewTransform(e),s.trigger(e,"afterRender",A),g.lastElapsed=o.now()-u},i.stats=function(e,t,n){for(var i=e.engine,o=i.world,a=r.allBodies(o),s=0,l=0,c=0;c<a.length;c+=1)s+=a[c].parts.length;var u={Part:s,Body:a.length,Cons:r.allConstraints(o).length,Comp:r.allComposites(o).length,Pair:i.pairs.list.length};for(var d in t.fillStyle="#0e0f19",t.fillRect(l,0,302.5,44),t.font="12px Arial",t.textBaseline="top",t.textAlign="right",u){var p=u[d];t.fillStyle="#aaa",t.fillText(d,l+55,8),t.fillStyle="#eee",t.fillText(p,l+55,26),l+=55}},i.performance=function(e,t){var n=e.engine,o=e.timing,r=o.deltaHistory,a=o.elapsedHistory,s=o.timestampElapsedHistory,l=o.engineDeltaHistory,c=o.engineElapsedHistory,d=n.timing.lastDelta,p=u(r),f=u(a),v=u(l),m=u(c),y=u(s)/p||0,g=1e3/p||0;t.fillStyle="#0e0f19",t.fillRect(0,50,370,34),i.status(t,10,69,60,4,r.length,Math.round(g)+" fps",g/i._goodFps,(function(e){return r[e]/p-1})),i.status(t,82,69,60,4,l.length,d.toFixed(2)+" dt",i._goodDelta/d,(function(e){return l[e]/v-1})),i.status(t,154,69,60,4,c.length,m.toFixed(2)+" ut",1-m/i._goodFps,(function(e){return c[e]/m-1})),i.status(t,226,69,60,4,a.length,f.toFixed(2)+" rt",1-f/i._goodFps,(function(e){return a[e]/f-1})),i.status(t,298,69,60,4,s.length,y.toFixed(2)+" x",y*y*y,(function(e){return(s[e]/r[e]/y||0)-1}))},i.status=function(e,t,n,i,r,a,s,l,c){e.strokeStyle="#888",e.fillStyle="#444",e.lineWidth=1,e.fillRect(t,n+7,i,1),e.beginPath(),e.moveTo(t,n+7-r*o.clamp(.4*c(0),-2,2));for(var u=0;u<i;u+=1)e.lineTo(t+u,n+7-(u<a?r*o.clamp(.4*c(u),-2,2):0));e.stroke(),e.fillStyle="hsl("+o.clamp(25+95*l,0,120)+",100%,60%)",e.fillRect(t,n-7,4,4),e.font="12px Arial",e.textBaseline="middle",e.textAlign="right",e.fillStyle="#eee",e.fillText(s,t+i,n-5)},i.constraints=function(e,t){for(var n=t,i=0;i<e.length;i++){var r=e[i];if(r.render.visible&&r.pointA&&r.pointB){var a,s,c=r.bodyA,u=r.bodyB;if(a=c?l.add(c.position,r.pointA):r.pointA,"pin"===r.render.type)n.beginPath(),n.arc(a.x,a.y,3,0,2*Math.PI),n.closePath();else{if(s=u?l.add(u.position,r.pointB):r.pointB,n.beginPath(),n.moveTo(a.x,a.y),"spring"===r.render.type)for(var d,p=l.sub(s,a),f=l.perp(l.normalise(p)),v=Math.ceil(o.clamp(r.length/5,12,20)),m=1;m<v;m+=1)d=m%2==0?1:-1,n.lineTo(a.x+p.x*(m/v)+f.x*d*4,a.y+p.y*(m/v)+f.y*d*4);n.lineTo(s.x,s.y)}r.render.lineWidth&&(n.lineWidth=r.render.lineWidth,n.strokeStyle=r.render.strokeStyle,n.stroke()),r.render.anchors&&(n.fillStyle=r.render.strokeStyle,n.beginPath(),n.arc(a.x,a.y,3,0,2*Math.PI),n.arc(s.x,s.y,3,0,2*Math.PI),n.closePath(),n.fill())}}},i.bodies=function(e,t,n){var i,o,r,a,s=n,l=(e.engine,e.options),c=l.showInternalEdges||!l.wireframes;for(r=0;r<t.length;r++)if((i=t[r]).render.visible)for(a=i.parts.length>1?1:0;a<i.parts.length;a++)if((o=i.parts[a]).render.visible){if(l.showSleeping&&i.isSleeping?s.globalAlpha=.5*o.render.opacity:1!==o.render.opacity&&(s.globalAlpha=o.render.opacity),o.render.sprite&&o.render.sprite.texture&&!l.wireframes){var u=o.render.sprite,d=f(e,u.texture);s.translate(o.position.x,o.position.y),s.rotate(o.angle),s.drawImage(d,d.width*-u.xOffset*u.xScale,d.height*-u.yOffset*u.yScale,d.width*u.xScale,d.height*u.yScale),s.rotate(-o.angle),s.translate(-o.position.x,-o.position.y)}else{if(o.circleRadius)s.beginPath(),s.arc(o.position.x,o.position.y,o.circleRadius,0,2*Math.PI);else{s.beginPath(),s.moveTo(o.vertices[0].x,o.vertices[0].y);for(var p=1;p<o.vertices.length;p++)!o.vertices[p-1].isInternal||c?s.lineTo(o.vertices[p].x,o.vertices[p].y):s.moveTo(o.vertices[p].x,o.vertices[p].y),o.vertices[p].isInternal&&!c&&s.moveTo(o.vertices[(p+1)%o.vertices.length].x,o.vertices[(p+1)%o.vertices.length].y);s.lineTo(o.vertices[0].x,o.vertices[0].y),s.closePath()}l.wireframes?(s.lineWidth=1,s.strokeStyle="#bbb",s.stroke()):(s.fillStyle=o.render.fillStyle,o.render.lineWidth&&(s.lineWidth=o.render.lineWidth,s.strokeStyle=o.render.strokeStyle,s.stroke()),s.fill())}s.globalAlpha=1}},i.bodyWireframes=function(e,t,n){var i,o,r,a,s,l=n,c=e.options.showInternalEdges;for(l.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(s=i.parts.length>1?1:0;s<i.parts.length;s++){for(o=i.parts[s],l.moveTo(o.vertices[0].x,o.vertices[0].y),a=1;a<o.vertices.length;a++)!o.vertices[a-1].isInternal||c?l.lineTo(o.vertices[a].x,o.vertices[a].y):l.moveTo(o.vertices[a].x,o.vertices[a].y),o.vertices[a].isInternal&&!c&&l.moveTo(o.vertices[(a+1)%o.vertices.length].x,o.vertices[(a+1)%o.vertices.length].y);l.lineTo(o.vertices[0].x,o.vertices[0].y)}l.lineWidth=1,l.strokeStyle="#bbb",l.stroke()},i.bodyConvexHulls=function(e,t,n){var i,o,r,a=n;for(a.beginPath(),o=0;o<t.length;o++)if((i=t[o]).render.visible&&1!==i.parts.length){for(a.moveTo(i.vertices[0].x,i.vertices[0].y),r=1;r<i.vertices.length;r++)a.lineTo(i.vertices[r].x,i.vertices[r].y);a.lineTo(i.vertices[0].x,i.vertices[0].y)}a.lineWidth=1,a.strokeStyle="rgba(255,255,255,0.2)",a.stroke()},i.vertexNumbers=function(e,t,n){var i,o,r,a=n;for(i=0;i<t.length;i++){var s=t[i].parts;for(r=s.length>1?1:0;r<s.length;r++){var l=s[r];for(o=0;o<l.vertices.length;o++)a.fillStyle="rgba(255,255,255,0.2)",a.fillText(i+"_"+o,l.position.x+.8*(l.vertices[o].x-l.position.x),l.position.y+.8*(l.vertices[o].y-l.position.y))}}},i.mousePosition=function(e,t,n){var i=n;i.fillStyle="rgba(255,255,255,0.8)",i.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},i.bodyBounds=function(e,t,n){var i=n,o=(e.engine,e.options);i.beginPath();for(var r=0;r<t.length;r++){if(t[r].render.visible)for(var a=t[r].parts,s=a.length>1?1:0;s<a.length;s++){var l=a[s];i.rect(l.bounds.min.x,l.bounds.min.y,l.bounds.max.x-l.bounds.min.x,l.bounds.max.y-l.bounds.min.y)}}o.wireframes?i.strokeStyle="rgba(255,255,255,0.08)":i.strokeStyle="rgba(0,0,0,0.1)",i.lineWidth=1,i.stroke()},i.bodyAxes=function(e,t,n){var i,o,r,a,s=n,l=(e.engine,e.options);for(s.beginPath(),o=0;o<t.length;o++){var c=t[o],u=c.parts;if(c.render.visible)if(l.showAxes)for(r=u.length>1?1:0;r<u.length;r++)for(i=u[r],a=0;a<i.axes.length;a++){var d=i.axes[a];s.moveTo(i.position.x,i.position.y),s.lineTo(i.position.x+20*d.x,i.position.y+20*d.y)}else for(r=u.length>1?1:0;r<u.length;r++)for(i=u[r],a=0;a<i.axes.length;a++)s.moveTo(i.position.x,i.position.y),s.lineTo((i.vertices[0].x+i.vertices[i.vertices.length-1].x)/2,(i.vertices[0].y+i.vertices[i.vertices.length-1].y)/2)}l.wireframes?(s.strokeStyle="indianred",s.lineWidth=1):(s.strokeStyle="rgba(255, 255, 255, 0.4)",s.globalCompositeOperation="overlay",s.lineWidth=2),s.stroke(),s.globalCompositeOperation="source-over"},i.bodyPositions=function(e,t,n){var i,o,r,a,s=n,l=(e.engine,e.options);for(s.beginPath(),r=0;r<t.length;r++)if((i=t[r]).render.visible)for(a=0;a<i.parts.length;a++)o=i.parts[a],s.arc(o.position.x,o.position.y,3,0,2*Math.PI,!1),s.closePath();for(l.wireframes?s.fillStyle="indianred":s.fillStyle="rgba(0,0,0,0.5)",s.fill(),s.beginPath(),r=0;r<t.length;r++)(i=t[r]).render.visible&&(s.arc(i.positionPrev.x,i.positionPrev.y,2,0,2*Math.PI,!1),s.closePath());s.fillStyle="rgba(255,165,0,0.8)",s.fill()},i.bodyVelocity=function(e,t,n){var i=n;i.beginPath();for(var o=0;o<t.length;o++){var r=t[o];r.render.visible&&(i.moveTo(r.position.x,r.position.y),i.lineTo(r.position.x+2*(r.position.x-r.positionPrev.x),r.position.y+2*(r.position.y-r.positionPrev.y)))}i.lineWidth=3,i.strokeStyle="cornflowerblue",i.stroke()},i.bodyIds=function(e,t,n){var i,o,r=n;for(i=0;i<t.length;i++)if(t[i].render.visible){var a=t[i].parts;for(o=a.length>1?1:0;o<a.length;o++){var s=a[o];r.font="12px Arial",r.fillStyle="rgba(255,255,255,0.5)",r.fillText(s.id,s.position.x+10,s.position.y-10)}}},i.collisions=function(e,t,n){var i,o,r,a,s=n,l=e.options;for(s.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive)for(o=i.collision,a=0;a<i.activeContacts.length;a++){var c=i.activeContacts[a].vertex;s.rect(c.x-1.5,c.y-1.5,3.5,3.5)}for(l.wireframes?s.fillStyle="rgba(255,255,255,0.7)":s.fillStyle="orange",s.fill(),s.beginPath(),r=0;r<t.length;r++)if((i=t[r]).isActive&&(o=i.collision,i.activeContacts.length>0)){var u=i.activeContacts[0].vertex.x,d=i.activeContacts[0].vertex.y;2===i.activeContacts.length&&(u=(i.activeContacts[0].vertex.x+i.activeContacts[1].vertex.x)/2,d=(i.activeContacts[0].vertex.y+i.activeContacts[1].vertex.y)/2),o.bodyB===o.supports[0].body||!0===o.bodyA.isStatic?s.moveTo(u-8*o.normal.x,d-8*o.normal.y):s.moveTo(u+8*o.normal.x,d+8*o.normal.y),s.lineTo(u,d)}l.wireframes?s.strokeStyle="rgba(255,165,0,0.7)":s.strokeStyle="orange",s.lineWidth=1,s.stroke()},i.separations=function(e,t,n){var i,o,r,a,s,l=n,c=e.options;for(l.beginPath(),s=0;s<t.length;s++)if((i=t[s]).isActive){r=(o=i.collision).bodyA;var u=1;(a=o.bodyB).isStatic||r.isStatic||(u=.5),a.isStatic&&(u=0),l.moveTo(a.position.x,a.position.y),l.lineTo(a.position.x-o.penetration.x*u,a.position.y-o.penetration.y*u),u=1,a.isStatic||r.isStatic||(u=.5),r.isStatic&&(u=0),l.moveTo(r.position.x,r.position.y),l.lineTo(r.position.x+o.penetration.x*u,r.position.y+o.penetration.y*u)}c.wireframes?l.strokeStyle="rgba(255,165,0,0.5)":l.strokeStyle="orange",l.stroke()},i.grid=function(e,t,n){var i=n;e.options.wireframes?i.strokeStyle="rgba(255,180,0,0.1)":i.strokeStyle="rgba(255,180,0,0.5)",i.beginPath();for(var r=o.keys(t.buckets),a=0;a<r.length;a++){var s=r[a];if(!(t.buckets[s].length<2)){var l=s.split(/C|R/);i.rect(.5+parseInt(l[1],10)*t.bucketWidth,.5+parseInt(l[2],10)*t.bucketHeight,t.bucketWidth,t.bucketHeight)}}i.lineWidth=1,i.stroke()},i.inspector=function(e,t){e.engine;var n,i=e.selected,o=e.render,r=o.options;if(r.hasBounds){var a=o.bounds.max.x-o.bounds.min.x,s=o.bounds.max.y-o.bounds.min.y,l=a/o.options.width,c=s/o.options.height;t.scale(1/l,1/c),t.translate(-o.bounds.min.x,-o.bounds.min.y)}for(var u=0;u<i.length;u++){var d=i[u].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),d.type){case"body":n=d.bounds,t.beginPath(),t.rect(Math.floor(n.min.x-3),Math.floor(n.min.y-3),Math.floor(n.max.x-n.min.x+6),Math.floor(n.max.y-n.min.y+6)),t.closePath(),t.stroke();break;case"constraint":var p=d.pointA;d.bodyA&&(p=d.pointB),t.beginPath(),t.arc(p.x,p.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",n=e.selectBounds,t.beginPath(),t.rect(Math.floor(n.min.x),Math.floor(n.min.y),Math.floor(n.max.x-n.min.x),Math.floor(n.max.y-n.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),r.hasBounds&&t.setTransform(1,0,0,1,0,0)};var n=function(e,t){var n=e.engine,o=e.timing,r=o.historySize,a=n.timing.timestamp;o.delta=t-o.lastTime||i._goodDelta,o.lastTime=t,o.timestampElapsed=a-o.lastTimestamp||0,o.lastTimestamp=a,o.deltaHistory.unshift(o.delta),o.deltaHistory.length=Math.min(o.deltaHistory.length,r),o.engineDeltaHistory.unshift(n.timing.lastDelta),o.engineDeltaHistory.length=Math.min(o.engineDeltaHistory.length,r),o.timestampElapsedHistory.unshift(o.timestampElapsed),o.timestampElapsedHistory.length=Math.min(o.timestampElapsedHistory.length,r),o.engineElapsedHistory.unshift(n.timing.lastElapsed),o.engineElapsedHistory.length=Math.min(o.engineElapsedHistory.length,r),o.elapsedHistory.unshift(o.lastElapsed),o.elapsedHistory.length=Math.min(o.elapsedHistory.length,r)},u=function(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length||0},d=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},p=function(e){var t=e.getContext("2d");return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},f=function(e,t){var n=e.textures[t];return n||((n=e.textures[t]=new Image).src=t,n)},v=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n="url("+t+")"),e.canvas.style.background=n,e.canvas.style.backgroundSize="contain",e.currentBackground=t}}()},function(e,t){var n={};e.exports=n,n.create=function(e){return{id:n.id(e),vertex:e,normalImpulse:0,tangentImpulse:0}},n.id=function(e){return e.body.id+"_"+e.index}},function(e,t,n){var i={};e.exports=i;var o=n(7),r=n(19),a=n(13),s=n(20),l=n(21),c=n(4),u=n(5),d=n(8),p=n(0),f=n(6);i.create=function(e){e=e||{};var t=p.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},grid:null,gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},e);return t.world=e.world||u.create({label:"World"}),t.grid=l.create(e.grid||e.broadphase),t.pairs=s.create(),t.world.gravity=t.gravity,t.broadphase=t.grid,t.metrics={},t},i.update=function(e,t,n){var f=p.now();t=t||1e3/60,n=n||1;var v,m,y=e.world,g=e.timing,x=e.grid;g.timestamp+=t*g.timeScale,g.lastDelta=t*g.timeScale;var h={timestamp:g.timestamp};c.trigger(e,"beforeUpdate",h);var b=u.allBodies(y),S=u.allConstraints(y);for(e.enableSleeping&&o.update(b,g.timeScale),i._bodiesApplyGravity(b,e.gravity),i._bodiesUpdate(b,t,g.timeScale,n,y.bounds),d.preSolveAll(b),m=0;m<e.constraintIterations;m++)d.solveAll(S,g.timeScale);d.postSolveAll(b),y.isModified&&l.clear(x),l.update(x,b,e,y.isModified),v=x.pairsList,y.isModified&&u.setModified(y,!1,!1,!0);var w=a.collisions(v,e),A=e.pairs,P=g.timestamp;for(s.update(A,w,P),s.removeOld(A,P),e.enableSleeping&&o.afterCollisions(A.list,g.timeScale),A.collisionStart.length>0&&c.trigger(e,"collisionStart",{pairs:A.collisionStart}),r.preSolvePosition(A.list),m=0;m<e.positionIterations;m++)r.solvePosition(A.list,g.timeScale);for(r.postSolvePosition(b),d.preSolveAll(b),m=0;m<e.constraintIterations;m++)d.solveAll(S,g.timeScale);for(d.postSolveAll(b),r.preSolveVelocity(A.list),m=0;m<e.velocityIterations;m++)r.solveVelocity(A.list,g.timeScale);return A.collisionActive.length>0&&c.trigger(e,"collisionActive",{pairs:A.collisionActive}),A.collisionEnd.length>0&&c.trigger(e,"collisionEnd",{pairs:A.collisionEnd}),i._bodiesClearForces(b),c.trigger(e,"afterUpdate",h),e.timing.lastElapsed=p.now()-f,e},i.merge=function(e,t){if(p.extend(e,t),t.world){e.world=t.world,i.clear(e);for(var n=u.allBodies(e.world),r=0;r<n.length;r++){var a=n[r];o.set(a,!1),a.id=p.nextId()}}},i.clear=function(e){var t=e.world,n=u.allBodies(t);s.clear(e.pairs),l.clear(e.grid),l.update(e.grid,n,e,!0)},i._bodiesClearForces=function(e){for(var t=0;t<e.length;t++){var n=e[t];n.force.x=0,n.force.y=0,n.torque=0}},i._bodiesApplyGravity=function(e,t){var n=void 0!==t.scale?t.scale:.001;if((0!==t.x||0!==t.y)&&0!==n)for(var i=0;i<e.length;i++){var o=e[i];o.isStatic||o.isSleeping||(o.force.y+=o.mass*t.y*n,o.force.x+=o.mass*t.x*n)}},i._bodiesUpdate=function(e,t,n,i,o){for(var r=0;r<e.length;r++){var a=e[r];a.isStatic||a.isSleeping||f.update(a,t,n,i)}}},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(2),a=n(0),s=n(1);i._restingThresh=4,i._restingThreshTangent=6,i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i.preSolvePosition=function(e){var t,n,i;for(t=0;t<e.length;t++)(n=e[t]).isActive&&(i=n.activeContacts.length,n.collision.parentA.totalContacts+=i,n.collision.parentB.totalContacts+=i)},i.solvePosition=function(e,t){var n,o,a,s,l,c,u,d,p,f=r._temp[0],v=r._temp[1],m=r._temp[2],y=r._temp[3];for(n=0;n<e.length;n++)(o=e[n]).isActive&&!o.isSensor&&(s=(a=o.collision).parentA,l=a.parentB,c=a.normal,u=r.sub(r.add(l.positionImpulse,l.position,f),r.add(s.positionImpulse,r.sub(l.position,a.penetration,v),m),y),o.separation=r.dot(c,u));for(n=0;n<e.length;n++)(o=e[n]).isActive&&!o.isSensor&&(s=(a=o.collision).parentA,l=a.parentB,c=a.normal,p=(o.separation-o.slop)*t,(s.isStatic||l.isStatic)&&(p*=2),s.isStatic||s.isSleeping||(d=i._positionDampen/s.totalContacts,s.positionImpulse.x+=c.x*p*d,s.positionImpulse.y+=c.y*p*d),l.isStatic||l.isSleeping||(d=i._positionDampen/l.totalContacts,l.positionImpulse.x-=c.x*p*d,l.positionImpulse.y-=c.y*p*d))},i.postSolvePosition=function(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.totalContacts=0,0!==n.positionImpulse.x||0!==n.positionImpulse.y){for(var a=0;a<n.parts.length;a++){var l=n.parts[a];o.translate(l.vertices,n.positionImpulse),s.update(l.bounds,l.vertices,n.velocity),l.position.x+=n.positionImpulse.x,l.position.y+=n.positionImpulse.y}n.positionPrev.x+=n.positionImpulse.x,n.positionPrev.y+=n.positionImpulse.y,r.dot(n.positionImpulse,n.velocity)<0?(n.positionImpulse.x=0,n.positionImpulse.y=0):(n.positionImpulse.x*=i._positionWarming,n.positionImpulse.y*=i._positionWarming)}}},i.preSolveVelocity=function(e){var t,n,i,o,a,s,l,c,u,d,p,f,v,m,y=r._temp[0],g=r._temp[1];for(t=0;t<e.length;t++)if((i=e[t]).isActive&&!i.isSensor)for(o=i.activeContacts,s=(a=i.collision).parentA,l=a.parentB,c=a.normal,u=a.tangent,n=0;n<o.length;n++)p=(d=o[n]).vertex,f=d.normalImpulse,v=d.tangentImpulse,0===f&&0===v||(y.x=c.x*f+u.x*v,y.y=c.y*f+u.y*v,s.isStatic||s.isSleeping||(m=r.sub(p,s.position,g),s.positionPrev.x+=y.x*s.inverseMass,s.positionPrev.y+=y.y*s.inverseMass,s.anglePrev+=r.cross(m,y)*s.inverseInertia),l.isStatic||l.isSleeping||(m=r.sub(p,l.position,g),l.positionPrev.x-=y.x*l.inverseMass,l.positionPrev.y-=y.y*l.inverseMass,l.anglePrev-=r.cross(m,y)*l.inverseInertia))},i.solveVelocity=function(e,t){for(var n=t*t,o=r._temp[0],s=r._temp[1],l=r._temp[2],c=r._temp[3],u=r._temp[4],d=r._temp[5],p=0;p<e.length;p++){var f=e[p];if(f.isActive&&!f.isSensor){var v=f.collision,m=v.parentA,y=v.parentB,g=v.normal,x=v.tangent,h=f.activeContacts,b=1/h.length;m.velocity.x=m.position.x-m.positionPrev.x,m.velocity.y=m.position.y-m.positionPrev.y,y.velocity.x=y.position.x-y.positionPrev.x,y.velocity.y=y.position.y-y.positionPrev.y,m.angularVelocity=m.angle-m.anglePrev,y.angularVelocity=y.angle-y.anglePrev;for(var S=0;S<h.length;S++){var w=h[S],A=w.vertex,P=r.sub(A,m.position,s),M=r.sub(A,y.position,l),C=r.add(m.velocity,r.mult(r.perp(P),m.angularVelocity),c),B=r.add(y.velocity,r.mult(r.perp(M),y.angularVelocity),u),_=r.sub(C,B,d),k=r.dot(g,_),I=r.dot(x,_),T=Math.abs(I),R=a.sign(I),E=(1+f.restitution)*k,L=a.clamp(f.separation+k,0,1)*i._frictionNormalMultiplier,V=I,O=1/0;T>f.friction*f.frictionStatic*L*n&&(O=T,V=a.clamp(f.friction*R*n,-O,O));var F=r.cross(P,g),D=r.cross(M,g),H=b/(m.inverseMass+y.inverseMass+m.inverseInertia*F*F+y.inverseInertia*D*D);if(E*=H,V*=H,k<0&&k*k>i._restingThresh*n)w.normalImpulse=0;else{var j=w.normalImpulse;w.normalImpulse=Math.min(w.normalImpulse+E,0),E=w.normalImpulse-j}if(I*I>i._restingThreshTangent*n)w.tangentImpulse=0;else{var W=w.tangentImpulse;w.tangentImpulse=a.clamp(w.tangentImpulse+V,-O,O),V=w.tangentImpulse-W}o.x=g.x*E+x.x*V,o.y=g.y*E+x.y*V,m.isStatic||m.isSleeping||(m.positionPrev.x+=o.x*m.inverseMass,m.positionPrev.y+=o.y*m.inverseMass,m.anglePrev+=r.cross(P,o)*m.inverseInertia),y.isStatic||y.isSleeping||(y.positionPrev.x-=o.x*y.inverseMass,y.positionPrev.y-=o.y*y.inverseMass,y.anglePrev-=r.cross(M,o)*y.inverseInertia)}}}}},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(0);i._pairMaxIdleLife=1e3,i.create=function(e){return r.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},i.update=function(e,t,n){var i,r,a,s,l=e.list,c=e.table,u=e.collisionStart,d=e.collisionEnd,p=e.collisionActive;for(u.length=0,d.length=0,p.length=0,s=0;s<l.length;s++)l[s].confirmedActive=!1;for(s=0;s<t.length;s++)(i=t[s]).collided&&((a=c[r=o.id(i.bodyA,i.bodyB)])?(a.isActive?p.push(a):u.push(a),o.update(a,i,n),a.confirmedActive=!0):(a=o.create(i,n),c[r]=a,u.push(a),l.push(a)));for(s=0;s<l.length;s++)(a=l[s]).isActive&&!a.confirmedActive&&(o.setActive(a,!1,n),d.push(a))},i.removeOld=function(e,t){var n,o,r,a,s=e.list,l=e.table,c=[];for(a=0;a<s.length;a++)(o=(n=s[a]).collision).bodyA.isSleeping||o.bodyB.isSleeping?n.timeUpdated=t:t-n.timeUpdated>i._pairMaxIdleLife&&c.push(a);for(a=0;a<c.length;a++)delete l[(n=s[r=c[a]-a]).id],s.splice(r,1)},i.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e}},function(e,t,n){var i={};e.exports=i;var o=n(9),r=n(0);i.create=function(e){return r.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},e)},i.update=function(e,t,n,o){var r,a,s,l,c,u=n.world,d=e.buckets,p=!1;for(r=0;r<t.length;r++){var f=t[r];if((!f.isSleeping||o)&&(!u.bounds||!(f.bounds.max.x<u.bounds.min.x||f.bounds.min.x>u.bounds.max.x||f.bounds.max.y<u.bounds.min.y||f.bounds.min.y>u.bounds.max.y))){var v=i._getRegion(e,f);if(!f.region||v.id!==f.region.id||o){f.region&&!o||(f.region=v);var m=i._regionUnion(v,f.region);for(a=m.startCol;a<=m.endCol;a++)for(s=m.startRow;s<=m.endRow;s++){l=d[c=i._getBucketId(a,s)];var y=a>=v.startCol&&a<=v.endCol&&s>=v.startRow&&s<=v.endRow,g=a>=f.region.startCol&&a<=f.region.endCol&&s>=f.region.startRow&&s<=f.region.endRow;!y&&g&&g&&l&&i._bucketRemoveBody(e,l,f),(f.region===v||y&&!g||o)&&(l||(l=i._createBucket(d,c)),i._bucketAddBody(e,l,f))}f.region=v,p=!0}}}p&&(e.pairsList=i._createActivePairsList(e))},i.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},i._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),o=Math.max(e.endCol,t.endCol),r=Math.min(e.startRow,t.startRow),a=Math.max(e.endRow,t.endRow);return i._createRegion(n,o,r,a)},i._getRegion=function(e,t){var n=t.bounds,o=Math.floor(n.min.x/e.bucketWidth),r=Math.floor(n.max.x/e.bucketWidth),a=Math.floor(n.min.y/e.bucketHeight),s=Math.floor(n.max.y/e.bucketHeight);return i._createRegion(o,r,a,s)},i._createRegion=function(e,t,n,i){return{id:e+","+t+","+n+","+i,startCol:e,endCol:t,startRow:n,endRow:i}},i._getBucketId=function(e,t){return"C"+e+"R"+t},i._createBucket=function(e,t){return e[t]=[]},i._bucketAddBody=function(e,t,n){for(var i=0;i<t.length;i++){var r=t[i];if(!(n.id===r.id||n.isStatic&&r.isStatic)){var a=o.id(n,r),s=e.pairs[a];s?s[2]+=1:e.pairs[a]=[n,r,1]}}t.push(n)},i._bucketRemoveBody=function(e,t,n){t.splice(r.indexOf(t,n),1);for(var i=0;i<t.length;i++){var a=t[i],s=o.id(n,a),l=e.pairs[s];l&&(l[2]-=1)}},i._createActivePairsList=function(e){var t,n,i=[];t=r.keys(e.pairs);for(var o=0;o<t.length;o++)(n=e.pairs[t[o]])[2]>0?i.push(n):delete e.pairs[t[o]];return i}},function(e,t,n){var i=e.exports=n(23);i.Axes=n(10),i.Bodies=n(11),i.Body=n(6),i.Bounds=n(1),i.Common=n(0),i.Composite=n(5),i.Composites=n(24),i.Constraint=n(8),i.Contact=n(17),i.Detector=n(13),i.Engine=n(18),i.Events=n(4),i.Grid=n(21),i.Mouse=n(12),i.MouseConstraint=n(25),i.Pair=n(9),i.Pairs=n(20),i.Plugin=n(15),i.Query=n(26),i.Render=n(16),i.Resolver=n(19),i.Runner=n(27),i.SAT=n(14),i.Sleeping=n(7),i.Svg=n(28),i.Vector=n(2),i.Vertices=n(3),i.World=n(29),i.Engine.run=i.Runner.run,i.Common.deprecated(i.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(e,t,n){var i={};e.exports=i;var o=n(15),r=n(0);i.name="matter-js",i.version="0.17.1",i.uses=[],i.used=[],i.use=function(){o.use(i,Array.prototype.slice.call(arguments))},i.before=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathBefore(i,e,t)},i.after=function(e,t){return e=e.replace(/^Matter./,""),r.chainPathAfter(i,e,t)}},function(e,t,n){var i={};e.exports=i;var o=n(5),r=n(8),a=n(0),s=n(6),l=n(11),c=a.deprecated;i.stack=function(e,t,n,i,r,a,l){for(var c,u=o.create({label:"Stack"}),d=e,p=t,f=0,v=0;v<i;v++){for(var m=0,y=0;y<n;y++){var g=l(d,p,y,v,c,f);if(g){var x=g.bounds.max.y-g.bounds.min.y,h=g.bounds.max.x-g.bounds.min.x;x>m&&(m=x),s.translate(g,{x:.5*h,y:.5*x}),d=g.bounds.max.x+r,o.addBody(u,g),c=g,f+=1}else d+=r}p+=m+a,d=e}return u},i.chain=function(e,t,n,i,s,l){for(var c=e.bodies,u=1;u<c.length;u++){var d=c[u-1],p=c[u],f=d.bounds.max.y-d.bounds.min.y,v=d.bounds.max.x-d.bounds.min.x,m=p.bounds.max.y-p.bounds.min.y,y={bodyA:d,pointA:{x:v*t,y:f*n},bodyB:p,pointB:{x:(p.bounds.max.x-p.bounds.min.x)*i,y:m*s}},g=a.extend(y,l);o.addConstraint(e,r.create(g))}return e.label+=" Chain",e},i.mesh=function(e,t,n,i,s){var l,c,u,d,p,f=e.bodies;for(l=0;l<n;l++){for(c=1;c<t;c++)u=f[c-1+l*t],d=f[c+l*t],o.addConstraint(e,r.create(a.extend({bodyA:u,bodyB:d},s)));if(l>0)for(c=0;c<t;c++)u=f[c+(l-1)*t],d=f[c+l*t],o.addConstraint(e,r.create(a.extend({bodyA:u,bodyB:d},s))),i&&c>0&&(p=f[c-1+(l-1)*t],o.addConstraint(e,r.create(a.extend({bodyA:p,bodyB:d},s)))),i&&c<t-1&&(p=f[c+1+(l-1)*t],o.addConstraint(e,r.create(a.extend({bodyA:p,bodyB:d},s))))}return e.label+=" Mesh",e},i.pyramid=function(e,t,n,o,r,a,l){return i.stack(e,t,n,o,r,a,(function(t,i,a,c,u,d){var p=Math.min(o,Math.ceil(n/2)),f=u?u.bounds.max.x-u.bounds.min.x:0;if(!(c>p||a<(c=p-c)||a>n-1-c))return 1===d&&s.translate(u,{x:(a+(n%2==1?1:-1))*f,y:0}),l(e+(u?a*f:0)+a*r,i,a,c,u,d)}))},i.newtonsCradle=function(e,t,n,i,a){for(var s=o.create({label:"Newtons Cradle"}),c=0;c<n;c++){var u=l.circle(e+c*(1.9*i),t+a,i,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),d=r.create({pointA:{x:e+c*(1.9*i),y:t},bodyB:u});o.addBody(s,u),o.addConstraint(s,d)}return s},c(i,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),i.car=function(e,t,n,i,a){var c=s.nextGroup(!0),u=.5*-n+20,d=.5*n-20,p=o.create({label:"Car"}),f=l.rectangle(e,t,n,i,{collisionFilter:{group:c},chamfer:{radius:.5*i},density:2e-4}),v=l.circle(e+u,t+0,a,{collisionFilter:{group:c},friction:.8}),m=l.circle(e+d,t+0,a,{collisionFilter:{group:c},friction:.8}),y=r.create({bodyB:f,pointB:{x:u,y:0},bodyA:v,stiffness:1,length:0}),g=r.create({bodyB:f,pointB:{x:d,y:0},bodyA:m,stiffness:1,length:0});return o.addBody(p,f),o.addBody(p,v),o.addBody(p,m),o.addConstraint(p,y),o.addConstraint(p,g),p},c(i,"car","Composites.car ➤ moved to car example"),i.softBody=function(e,t,n,o,r,s,c,u,d,p){d=a.extend({inertia:1/0},d),p=a.extend({stiffness:.2,render:{type:"line",anchors:!1}},p);var f=i.stack(e,t,n,o,r,s,(function(e,t){return l.circle(e,t,u,d)}));return i.mesh(f,n,o,c,p),f.label="Soft Body",f},c(i,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")},function(e,t,n){var i={};e.exports=i;var o=n(3),r=n(7),a=n(12),s=n(4),l=n(13),c=n(8),u=n(5),d=n(0),p=n(1);i.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=a.create(e.render.canvas):t&&t.element?n=a.create(t.element):(n=a.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var o={type:"mouseConstraint",mouse:n,element:null,body:null,constraint:c.create({label:"Mouse Constraint",pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),collisionFilter:{category:1,mask:4294967295,group:0}},r=d.extend(o,t);return s.on(e,"beforeUpdate",(function(){var t=u.allBodies(e.world);i.update(r,t),i._triggerEvents(r)})),r},i.update=function(e,t){var n=e.mouse,i=e.constraint,a=e.body;if(0===n.button){if(i.bodyB)r.set(i.bodyB,!1),i.pointA=n.position;else for(var c=0;c<t.length;c++)if(a=t[c],p.contains(a.bounds,n.position)&&l.canCollide(a.collisionFilter,e.collisionFilter))for(var u=a.parts.length>1?1:0;u<a.parts.length;u++){var d=a.parts[u];if(o.contains(d.vertices,n.position)){i.pointA=n.position,i.bodyB=e.body=a,i.pointB={x:n.position.x-a.position.x,y:n.position.y-a.position.y},i.angleB=a.angle,r.set(a,!1),s.trigger(e,"startdrag",{mouse:n,body:a});break}}}else i.bodyB=e.body=null,i.pointB=null,a&&s.trigger(e,"enddrag",{mouse:n,body:a})},i._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&s.trigger(e,"mousemove",{mouse:t}),n.mousedown&&s.trigger(e,"mousedown",{mouse:t}),n.mouseup&&s.trigger(e,"mouseup",{mouse:t}),a.clearSourceEvents(t)}},function(e,t,n){var i={};e.exports=i;var o=n(2),r=n(14),a=n(1),s=n(11),l=n(3);i.collides=function(e,t){for(var n=[],i=0;i<t.length;i++){var o=t[i];if(a.overlaps(o.bounds,e.bounds))for(var s=1===o.parts.length?0:1;s<o.parts.length;s++){var l=o.parts[s];if(a.overlaps(l.bounds,e.bounds)){var c=r.collides(l,e);if(c.collided){n.push(c);break}}}}return n},i.ray=function(e,t,n,r){r=r||1e-100;for(var a=o.angle(t,n),l=o.magnitude(o.sub(t,n)),c=.5*(n.x+t.x),u=.5*(n.y+t.y),d=s.rectangle(c,u,l,r,{angle:a}),p=i.collides(d,e),f=0;f<p.length;f+=1){var v=p[f];v.body=v.bodyB=v.bodyA}return p},i.region=function(e,t,n){for(var i=[],o=0;o<e.length;o++){var r=e[o],s=a.overlaps(r.bounds,t);(s&&!n||!s&&n)&&i.push(r)}return i},i.point=function(e,t){for(var n=[],i=0;i<e.length;i++){var o=e[i];if(a.contains(o.bounds,t))for(var r=1===o.parts.length?0:1;r<o.parts.length;r++){var s=o.parts[r];if(a.contains(s.bounds,t)&&l.contains(s.vertices,t)){n.push(o);break}}}return n}},function(e,t,n){var i={};e.exports=i;var o=n(4),r=n(18),a=n(0);!function(){var e,t,n;("undefined"!=typeof window&&(e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),e)||(e=function(e){n=setTimeout((function(){e(a.now())}),1e3/60)},t=function(){clearTimeout(n)});i.create=function(e){var t=a.extend({fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},e);return t.delta=t.delta||1e3/t.fps,t.deltaMin=t.deltaMin||1e3/t.fps,t.deltaMax=t.deltaMax||1e3/(.5*t.fps),t.fps=1e3/t.delta,t},i.run=function(t,n){return void 0!==t.positionIterations&&(n=t,t=i.create()),function o(r){t.frameRequestId=e(o),r&&t.enabled&&i.tick(t,n,r)}(),t},i.tick=function(e,t,n){var i,a=t.timing,s=1,l={timestamp:a.timestamp};o.trigger(e,"beforeTick",l),e.isFixed?i=e.delta:(i=n-e.timePrev||e.delta,e.timePrev=n,e.deltaHistory.push(i),e.deltaHistory=e.deltaHistory.slice(-e.deltaSampleSize),s=(i=(i=(i=Math.min.apply(null,e.deltaHistory))<e.deltaMin?e.deltaMin:i)>e.deltaMax?e.deltaMax:i)/e.delta,e.delta=i),0!==e.timeScalePrev&&(s*=a.timeScale/e.timeScalePrev),0===a.timeScale&&(s=0),e.timeScalePrev=a.timeScale,e.correction=s,e.frameCounter+=1,n-e.counterTimestamp>=1e3&&(e.fps=e.frameCounter*((n-e.counterTimestamp)/1e3),e.counterTimestamp=n,e.frameCounter=0),o.trigger(e,"tick",l),o.trigger(e,"beforeUpdate",l),r.update(t,i,s),o.trigger(e,"afterUpdate",l),o.trigger(e,"afterTick",l)},i.stop=function(e){t(e.frameRequestId)},i.start=function(e,t){i.run(e,t)}}()},function(e,t,n){var i={};e.exports=i;n(1);var o=n(0);i.pathToVertices=function(e,t){"undefined"==typeof window||"SVGPathSeg"in window||o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var n,r,a,s,l,c,u,d,p,f,v,m=[],y=0,g=0,x=0;t=t||15;var h=function(e,t,n){var i=n%2==1&&n>1;if(!p||e!=p.x||t!=p.y){p&&i?(f=p.x,v=p.y):(f=0,v=0);var o={x:f+e,y:v+t};!i&&p||(p=o),m.push(o),g=f+e,x=v+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();if("Z"!==t){switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":g=e.x,x=e.y;break;case"H":g=e.x;break;case"V":x=e.y}h(g,x,e.pathSegType)}};for(i._svgPathToAbsolute(e),a=e.getTotalLength(),c=[],n=0;n<e.pathSegList.numberOfItems;n+=1)c.push(e.pathSegList.getItem(n));for(u=c.concat();y<a;){if((l=c[e.getPathSegAtLength(y)])!=d){for(;u.length&&u[0]!=l;)b(u.shift());d=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":s=e.getPointAtLength(y),h(s.x,s.y,0)}y+=t}for(n=0,r=u.length;n<r;++n)b(u[n]);return m},i._svgPathToAbsolute=function(e){for(var t,n,i,o,r,a,s=e.pathSegList,l=0,c=0,u=s.numberOfItems,d=0;d<u;++d){var p=s.getItem(d),f=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(f))"x"in p&&(l=p.x),"y"in p&&(c=p.y);else switch("x1"in p&&(i=l+p.x1),"x2"in p&&(r=l+p.x2),"y1"in p&&(o=c+p.y1),"y2"in p&&(a=c+p.y2),"x"in p&&(l+=p.x),"y"in p&&(c+=p.y),f){case"m":s.replaceItem(e.createSVGPathSegMovetoAbs(l,c),d);break;case"l":s.replaceItem(e.createSVGPathSegLinetoAbs(l,c),d);break;case"h":s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l),d);break;case"v":s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c),d);break;case"c":s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l,c,i,o,r,a),d);break;case"s":s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l,c,r,a),d);break;case"q":s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l,c,i,o),d);break;case"t":s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l,c),d);break;case"a":s.replaceItem(e.createSVGPathSegArcAbs(l,c,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),d);break;case"z":case"Z":l=t,c=n}"M"!=f&&"m"!=f||(t=l,n=c)}}},function(e,t,n){var i={};e.exports=i;var o=n(5);n(0);i.create=o.create,i.add=o.add,i.remove=o.remove,i.clear=o.clear,i.addComposite=o.addComposite,i.addBody=o.addBody,i.addConstraint=o.addConstraint}])}));

/* global $, Matter */
/* eslint arrow-body-style: "off" */
/* eslint max-classes-per-file: "off" */
/* eslint no-console: ["error", { allow: ["info", "debug"] }] */

jelly = () => {
  class RandomUtil {
    static randValue(min, max) {
      return Math.random() * (max - min) + min;
    }
  }

  class GeometryUtil {
    static containsRect(rect1, rect2, margin = 0) {
      return (
        rect1.x + margin <= rect2.x
        && rect2.x + rect2.width + margin <= rect1.x + rect1.width
        && rect1.y + margin <= rect2.y
        && rect2.y + rect2.height + margin <= rect1.y + rect1.height
      );
    }

    static containsPoint(rect1, pos, margin = 0) {
      const rect2 = {
        x: pos.x,
        y: pos.y,
        width: 0,
        height: 0,
      };
      return GeometryUtil.containsRect(rect1, rect2, margin);
    }

    static getCornerPoints(rect) {
      const xRight = rect.x + rect.width;
      const yBottom = rect.y + rect.height;
      return [
        Matter.Vector.create(xRight, rect.y), // Top-right
        Matter.Vector.create(rect.x, rect.y), // Top-left
        Matter.Vector.create(rect.x, yBottom), // Bottom-left
        Matter.Vector.create(xRight, yBottom), // Bottom-right
      ];
    }

    static boundingBoxToCenterBox(rect) {
      return {
        x: rect.x + rect.width / 2.0,
        y: rect.y + rect.height / 2.0,
        width: rect.width,
        height: rect.height,
      };
    }

    static diagonalLength(rect) {
      const diagonalVector = Matter.Vector.create(rect.width, rect.height);
      return Matter.Vector.magnitude(diagonalVector);
    }

    static offsetBoundingBox(rect, offset) {
      return {
        x: rect.x + offset.x,
        y: rect.y + offset.y,
        width: rect.width,
        height: rect.height,
      };
    }

    static absToRelPos(absPos, rect) {
      const centerBox = GeometryUtil.boundingBoxToCenterBox(rect);
      return Matter.Vector.sub(absPos, centerBox);
    }

    static constrainPosInBoundingBox(pos, rect) {
      const constrainedX = Math.min(
        Math.max(pos.x, rect.x),
        rect.x + rect.width,
      );
      const constrainedY = Math.min(
        Math.max(pos.y, rect.y),
        rect.y + rect.height,
      );
      return Matter.Vector.create(constrainedX, constrainedY);
    }

    static distance(pos1, pos2) {
      const diff = Matter.Vector.sub(pos2, pos1);
      return Matter.Vector.magnitude(diff);
    }

    static angle(pos1, pos2) {
      const upwardAngle = Matter.Vector.angle(pos1, pos2);
      // The result treats Y-axis as upward, but we want downward
      const downwardAngle = -upwardAngle;
      return GeometryUtil.radianToDegree(downwardAngle);
    }

    static radianToDegree(angleInRadian) {
      const degrees = (angleInRadian * 180.0) / Math.PI;
      return (360.0 + degrees) % 360.0;
    }

    static degreeToRadian(angleInDegree) {
      const radians = (angleInDegree * Math.PI) / 180.0;
      return (2 * Math.PI + radians) % (2 * Math.PI);
    }
  }

  class ElementUtil {
    // Reference: https://stackoverflow.com/a/2631931
    static getPathTo(element) {
      if (element.id !== '') return `id("${element.id}")`;
      if (element === document.body) return element.tagName;

      let ix = 0;
      const siblings = element.parentNode.childNodes;
      for (let i = 0; i < siblings.length; i += 1) {
        const sibling = siblings[i];
        if (sibling === element) {
          const basePath = ElementUtil.getPathTo(element.parentNode);
          return `${basePath}/${element.tagName}[${ix + 1}]`;
        }
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
          ix += 1;
        }
      }
      return '';
    }

    static selfOrParentHasStyle($el, name, value) {
      const parentElements = $el.parents().toArray();
      if ($el.css(name) === value) return true;
      return parentElements.some((parentEl) => {
        return $(parentEl).css(name) === value;
      });
    }
  }

  class SmoothVector {
    constructor(maxSamples) {
      this.maxSamples = maxSamples;

      this.samples = [];
    }

    addSample(vector) {
      if (this.samples.length >= this.maxSamples) this.samples.shift();
      this.samples.push(vector);
    }

    getSmoothVector() {
      const initVector = Matter.Vector.create(0, 0);
      if (this.samples.length === 0) return initVector;
      const accumulatedVector = this.samples.reduce((prevVector, curSample) => {
        return Matter.Vector.add(prevVector, curSample);
      }, initVector);
      return Matter.Vector.div(accumulatedVector, this.samples.length);
    }
  }

  class TreeNode {
    constructor($el, options) {
      this.$el = $el;
      this.options = options;

      this.parent = null;
      this.children = [];

      // Visual parent node should "visually" contain the visual children nodes,
      // they are not necessarily one depth difference but must be
      // ancestor-descendant relationship
      this.visualParent = null;
      this.visualChildren = [];

      // Will be calculated after the visual tree is built
      this.numVisualDescendants = NaN;
      this.visualHeight = NaN;
      this.canBeStartingNode = true;
      this.isStartingNode = false;

      // Will be updated when running the animation
      this.isStatic = false;

      this.cachedID = null;
      this.cachedBoundingBox = null;
    }

    isEligible() {
      return (
        !ElementUtil.selfOrParentHasStyle(this.$el, 'position', 'absolute')
        && !ElementUtil.selfOrParentHasStyle(this.$el, 'position', 'fixed')
        && !ElementUtil.selfOrParentHasStyle(this.$el, 'position', 'sticky')
        && this.isVisible()
        && this.isBoundingBoxBigEnough()
      );
    }

    isVisible() {
      if (!this.$el.is(':visible')) return false;
      const box = this.getBoundingBox();
      if (box.width <= 0 || box.height <= 0) return false;
      return true;
    }

    isBoundingBoxBigEnough() {
      const boundingBox = this.getBoundingBox();
      return (
        boundingBox.width > this.options.minWidth
        && boundingBox.height > this.options.minHeight
      );
    }

    isRoot() {
      return !this.parent;
    }

    isVisualRoot() {
      return !this.visualParent;
    }

    setParent(parentNode) {
      this.parent = parentNode;
    }

    addChild(childNode) {
      this.children.push(childNode);
    }

    setVisualParent(parentNode) {
      this.visualParent = parentNode;
    }

    addVisualChild(childNode) {
      this.visualChildren.push(childNode);
    }

    setNumVisualDescendants(num) {
      this.numVisualDescendants = num;
    }

    setVisualHeight(height) {
      this.visualHeight = height;
    }

    disallowStartingNode() {
      this.canBeStartingNode = false;
    }

    setStartingNode() {
      this.isStartingNode = true;
    }

    setStatic(isStatic) {
      this.isStatic = isStatic;
    }

    setTransform(translation, rotation) {
      const translateStr = `translate(${translation.x}px, ${translation.y}px)`;
      const rotationStr = `rotate(${rotation}rad)`;

      this.$el.css('transform', `${translateStr} ${rotationStr}`);
    }

    clearTransform() {
      this.$el.css('transform', '');
    }

    render(borderStyle = 'solid', borderColor = 'red') {
      if (!this.isEligible()) return;

      // Reference: https://stackoverflow.com/a/26206753
      this.$el.css('outline', `1px ${borderStyle} ${borderColor}`);
      this.$el.css('outline-offset', '-1px');
    }

    getID() {
      if (!this.cachedID) {
        this.cachedID = ElementUtil.getPathTo(this.$el.get(0));
      }
      return this.cachedID;
    }

    getBoundingBox() {
      if (!this.cachedBoundingBox) {
        const rect = this.$el.get(0).getBoundingClientRect();
        const sx = window.scrollX;
        const sy = window.scrollY;
        this.cachedBoundingBox = {
          x: sx + rect.x,
          y: sy + rect.y,
          width: rect.width,
          height: rect.height,
        };
      }

      return this.cachedBoundingBox;
    }
  }

  class TreeVisitor {
    constructor(rootNode) {
      this.rootNode = rootNode;
    }

    * getChildrenIterator() {
      let queue = [this.rootNode];
      while (queue.length > 0) {
        const node = queue.shift();
        queue = [...queue, ...node.children]; // DFS

        yield node;
      }
    }

    * getVisualChildrenIterator() {
      let queue = [this.rootNode];
      while (queue.length > 0) {
        const node = queue.shift();
        queue = [...queue, ...node.visualChildren]; // DFS

        yield node;
      }
    }
  }

  class TreeIterator {
    static iterateChildren(rootNode, fnCallback) {
      const visitor = new TreeVisitor(rootNode);
      const iterator = visitor.getChildrenIterator();
      let curItem = iterator.next();
      while (!curItem.done) {
        const curNode = curItem.value;
        fnCallback(curNode);

        curItem = iterator.next();
      }
    }

    static iterateVisualChildren(rootNode, fnCallback) {
      const visitor = new TreeVisitor(rootNode);
      const iterator = visitor.getVisualChildrenIterator();
      let curItem = iterator.next();
      while (!curItem.done) {
        const curNode = curItem.value;
        fnCallback(curNode);

        curItem = iterator.next();
      }
    }
  }

  class TreeManager {
    constructor(options) {
      this.options = options;

      // The root node is built from "body" tag
      this.rootNode = null;

      // Each visual root node represents a visual tree
      this.visualRootNodes = [];
      // The root nodes in visual subtrees that we starting animating from
      this.visualStartingNodes = [];

      // These information are saved just for debugging
      this.treeNodeCount = 0;
      this.eligibleTreeNodeCount = 0;
      this.visualTreeEdgeCount = 0;
    }

    init() {
      const $body = $('body');
      this.rootNode = this.buildTreeNodes($body);
      console.debug(`Created ${this.treeNodeCount} tree nodes`);
      console.debug(`${this.eligibleTreeNodeCount} of tree nodes are eligible`);

      TreeIterator.iterateChildren(
        this.rootNode,
        this.buildVisualChildren.bind(this),
      );
      console.debug(`Built ${this.visualTreeEdgeCount} visual tree edges`);

      TreeIterator.iterateChildren(
        this.rootNode,
        this.findVisualRootNodes.bind(this),
      );
      console.debug(`Found ${this.visualRootNodes.length} visual root nodes`);

      this.visualRootNodes.forEach((visualRootNode) => {
        TreeIterator.iterateVisualChildren(
          visualRootNode,
          this.countVisualDescendants.bind(this),
        );

        TreeIterator.iterateVisualChildren(
          visualRootNode,
          this.calcVisualHeight.bind(this),
        );

        TreeIterator.iterateVisualChildren(
          visualRootNode,
          this.findVisualStartingNodes.bind(this),
        );
      });

      console.debug(`Found ${this.visualStartingNodes.length} starting nodes`);
    }

    buildTreeNodes($el) {
      const node = new TreeNode($el, this.options.tree);
      const childrenElements = $el
        .children()
        .toArray()
        .map((el) => {
          return $(el);
        });

      // Recursive building
      const childrenNodes = childrenElements.map(($childEl) => {
        return this.buildTreeNodes($childEl);
      });

      // Bind relationship
      childrenNodes.forEach((childNode) => {
        node.addChild(childNode);
        childNode.setParent(node);
      });

      // Accumulate the counters
      this.treeNodeCount += 1;
      if (node.isEligible()) {
        this.eligibleTreeNodeCount += 1;
      }

      return node;
    }

    buildVisualChildren(visualParentNode) {
      if (!visualParentNode.isEligible()) return;

      visualParentNode.children.forEach((childNode) => {
        this.findVisualChildren(visualParentNode, childNode);
      });
    }

    findVisualChildren(visualParentNode, curNode) {
      if (!curNode.isEligible()) return;
      if (curNode.visualParent) return;

      if (
        curNode.isEligible()
        && GeometryUtil.containsRect(
          visualParentNode.getBoundingBox(),
          curNode.getBoundingBox(),
          this.options.tree.minMargin - this.options.geometry.toleranceDistance,
        )
      ) {
        visualParentNode.addVisualChild(curNode);
        curNode.setVisualParent(visualParentNode);
        this.visualTreeEdgeCount += 1;
        return;
      }

      // See if deeper nodes can be visual children
      curNode.children.forEach((childNode) => {
        this.findVisualChildren(visualParentNode, childNode);
      });
    }

    findVisualRootNodes(node) {
      if (!node.isEligible() || !node.isVisualRoot()) return;
      this.visualRootNodes.push(node);
    }

    countVisualDescendants(node) {
      // Return the count if this node has been computed
      if (Number.isFinite(node.numVisualDescendants)) {
        return node.numVisualDescendants;
      }

      const count = node.visualChildren.reduce((prevValue, curNode) => {
        const curValue = this.countVisualDescendants(curNode);
        return prevValue + curValue;
      }, 0 /* initialValue */);

      // Save the count
      node.setNumVisualDescendants(count);

      if (node.visualChildren.length > 0) return count;
      return 1;
    }

    calcVisualHeight(node) {
      // Return the height if this node has been computed
      if (Number.isFinite(node.visualHeight)) return node.visualHeight;

      const height = node.visualChildren.reduce((prevValue, curNode) => {
        const curValue = this.calcVisualHeight(curNode);
        return Math.max(prevValue, curValue);
      }, 0 /* initialValue */);

      this.calcVisualHeightTimes += 1;

      // Save the height
      node.setVisualHeight(height);

      return height + 1;
    }

    findVisualStartingNodes(node) {
      if (
        !node.canBeStartingNode
        || node.numVisualDescendants < this.options.tree.minVisualDescendants
        || node.numVisualDescendants > this.options.tree.maxVisualDescendants
        || node.visualHeight > this.options.tree.maxVisualHeight
      ) {
        return;
      }

      node.setStartingNode();
      this.visualStartingNodes.push(node);

      // Prevent all children nodes to be visited later on
      node.visualChildren.forEach((childNode) => {
        TreeIterator.iterateVisualChildren(childNode, (curNode) => {
          curNode.disallowStartingNode();
        });
      });
    }

    render() {
      this.visualStartingNodes.forEach((visualStartingNode) => {
        TreeManager.renderVisualChildren(visualStartingNode);
      });
    }

    static renderVisualChildren(startingNode) {
      TreeIterator.iterateVisualChildren(startingNode, (curNode) => {
        if (curNode.getID() === startingNode.getID()) {
          curNode.render('solid', 'red');
        } else {
          curNode.render('dotted', 'blue');
        }
      });
    }
  }

  class PhysicsManager {
    constructor(isRender = false) {
      this.isRender = isRender;

      this.engine = null;
      this.render = null;
      this.mouse = null;
    }

    init(rootNode) {
      this.engine = Matter.Engine.create({
        // Disable the gravity
        gravity: {
          y: 0,
        },
      });

      if (this.isRender) {
        this.render = Matter.Render.create({
          element: document.body,
          engine: this.engine,
          options: {
            width: rootNode.getBoundingBox().width,
            height: rootNode.getBoundingBox().height,
            wireframes: true,
          },
        });

        this.mouse = Matter.Mouse.create(this.render.canvas);

        Matter.Render.run(this.render);
      }
    }

    buildMouseConstraint() {
      return Matter.MouseConstraint.create(this.engine, {
        mouse: this.mouse,
        constraint: {
          stiffness: 1.0,
          render: {
            visible: false,
          },
        },
      });
    }

    addObjects(objects) {
      Matter.Composite.add(this.engine.world, objects);
    }

    static correctForce(force) {
      // Reference: https://github.com/liabru/matter-js/issues/666#issuecomment-615939507
      return Matter.Vector.div(force, 1000000);
    }

    static createRectangle(node) {
      const rectangleOptions = PhysicsManager.getRectangleOptions(node);
      const boundingBox = node.getBoundingBox();
      const centerBox = GeometryUtil.boundingBoxToCenterBox(boundingBox);
      const rectangle = Matter.Bodies.rectangle(
        centerBox.x,
        centerBox.y,
        centerBox.width,
        centerBox.height,
        rectangleOptions,
      );
      return rectangle;
    }

    static createOutermostConstraint(
      startingNode,
      staticRect,
      startingRect,
      corner,
      options,
    ) {
      return PhysicsManager.createConstraint(
        startingNode,
        startingNode,
        staticRect,
        startingRect,
        corner,
        corner,
        options,
      );
    }

    static createConstraint(
      nodeA,
      nodeB,
      bodyA,
      bodyB,
      cornerA,
      cornerB,
      options,
    ) {
      const boundingBoxA = nodeA.getBoundingBox();
      const boundingBoxB = nodeB.getBoundingBox();
      const pointA = GeometryUtil.absToRelPos(cornerA, boundingBoxA);
      const pointB = GeometryUtil.absToRelPos(cornerB, boundingBoxB);
      const constraintOptions = PhysicsManager.getConstraintOptions(
        boundingBoxA,
        boundingBoxB,
        pointA,
        pointB,
        options,
      );
      return Matter.Constraint.create({
        bodyA,
        pointA,
        bodyB,
        pointB,
        ...constraintOptions,
      });
    }

    static getRectangleOptions(node) {
      return {
        // Disable collision
        // Reference: https://stackoverflow.com/a/61314389
        collisionFilter: {
          group: -1,
        },
        label: node.getID(),
      };
    }

    static getConstraintOptions(
      boundingBoxA,
      boundingBoxB,
      pointA,
      pointB,
      options,
    ) {
      const diagonalLengthA = GeometryUtil.diagonalLength(boundingBoxA);
      const diagonalLengthB = GeometryUtil.diagonalLength(boundingBoxB);
      const maxDiagonalLength = Math.max(diagonalLengthA, diagonalLengthB);

      const vecAtoB = Matter.Vector.sub(pointA, pointB);
      const distance = Matter.Vector.magnitude(vecAtoB);
      const distanceRatio = distance / maxDiagonalLength;
      const stiffness = this.calcStiffness(
        distanceRatio,
        options.physics.constraint.minStiffness,
        options.physics.constraint.maxStiffness,
        options.physics.constraint.stiffnessCurveSoftness,
      );

      return { damping: options.physics.constraint.damping, stiffness };
    }

    static calcStiffness(ratio, minStiffness, maxStiffness, softness) {
      const stiffnessRange = maxStiffness - minStiffness;
      const poweredRatio = ratio ** softness;
      return poweredRatio * stiffnessRange + minStiffness;
    }
  }

  class RenderHelper {
    constructor(minFPS = 0, maxFPS = Infinity) {
      this.minFPS = minFPS; // frames/second
      this.maxFPS = maxFPS; // frames/second

      this.minInterval = 1.0 / this.maxFPS; // seconds
      this.maxInterval = 1.0 / this.minFPS; // seconds
      this.elapsedTime = 0; // seconds
      this.prevTimestamp = null; // seconds
      this.prevElapsedTime = null; // seconds
    }

    step(fnRender) {
      // Reference:
      // - Matter.Runner.tick
      // - https://github.com/liabru/matter-js/issues/818
      const curTimestamp = Date.now() / 1000.0;
      if (this.prevTimestamp === null) {
        // First step
        this.prevTimestamp = curTimestamp;
        return;
      }

      this.elapsedTime = curTimestamp - this.prevTimestamp;
      // Limit the elapsed time
      this.elapsedTime = Math.min(this.elapsedTime, this.maxInterval);

      if (this.canRender()) {
        if (this.prevElapsedTime !== null) {
          fnRender(this.elapsedTime, this.prevElapsedTime);
        }

        this.prevElapsedTime = this.elapsedTime;

        this.elapsedTime = 0;
        this.prevTimestamp = curTimestamp;
      }
    }

    canRender() {
      return this.elapsedTime >= this.minInterval;
    }
  }

  class JellifyEngine {
    constructor(treeManager, physicsManager, options, isRender = false) {
      this.treeManager = treeManager;
      this.physicsManager = physicsManager;
      this.options = options;
      this.isRender = isRender;

      // Rendering helper
      this.renderHelper = new RenderHelper(
        this.options.render.minFPS /* minFPS */,
        this.options.render.maxFPS, /* maxFPS */
      );

      // Physics objects
      this.staticRectangles = null;
      this.dynamicRectangles = null;
      this.nodeIDToRectangle = null;
      this.outermostConstraints = null;
      this.innerConstraints = null;
      this.mouseConstraint = null;

      // Physics positions
      this.initialPositions = null;

      // Window scroll acceleration
      this.prevScroll = null;
      this.smoothWindowAcceleration = new SmoothVector(
        this.options.physics.acceleration.smoothness,
      );

      // Animation constraints
      this.animationBoundingBox = JellifyEngine.getAnimationBoundingBox(
        this.options.geometry,
      );
      this.translationBoundingBox = JellifyEngine.getTranslationBoundingBox(
        this.options.geometry,
      );
    }

    init() {
      this.buildAllRectangles();

      this.buildAllConstraints(this.options);

      this.saveInitialRectanglePositions();

      this.physicsManager.addObjects(this.staticRectangles);
      this.physicsManager.addObjects(this.dynamicRectangles);
      this.physicsManager.addObjects(this.outermostConstraints);
      this.physicsManager.addObjects(this.innerConstraints);

      if (this.isRender) {
        this.mouseConstraint = this.physicsManager.buildMouseConstraint();
        this.physicsManager.addObjects(this.mouseConstraint);
      }
    }

    runAnimation() {
      window.requestAnimationFrame(this.stepAnimation.bind(this));
    }

    stepAnimation() {
      this.renderHelper.step((elapsedTime, prevElapsedTime) => {
        // Add window scroll sample to calculate window scroll acceleration
        const curScroll = Matter.Vector.create(window.scrollX, window.scrollY);
        if (this.prevScroll !== null) {
          const scrollDiff = Matter.Vector.sub(curScroll, this.prevScroll);
          const stepWindowAcceleration = Matter.Vector.div(
            scrollDiff,
            elapsedTime,
          );

          this.smoothWindowAcceleration.addSample(stepWindowAcceleration);
        }

        this.prevScroll = curScroll;

        this.makeStartingRectanglesStaticIfNotVisible(curScroll);

        // Update physics
        this.applyForceToStartingRectangles();

        this.updateTransformOnVisualNodes();

        const delta = 1000 * elapsedTime;
        const correction = elapsedTime / prevElapsedTime;
        Matter.Engine.update(this.physicsManager.engine, delta, correction);
      });

      window.requestAnimationFrame(this.stepAnimation.bind(this));
    }

    makeStartingRectanglesStaticIfNotVisible(curScroll) {
      this.treeManager.visualStartingNodes.forEach((startingNode) => {
        const boundingBox = startingNode.getBoundingBox();
        const offset = Matter.Vector.neg(curScroll);
        const offsetBoundingBox = GeometryUtil.offsetBoundingBox(
          boundingBox,
          offset,
        );
        const isVisible = GeometryUtil.containsRect(
          this.animationBoundingBox,
          offsetBoundingBox,
        );

        if (isVisible && !startingNode.isStatic) return;
        if (!isVisible && startingNode.isStatic) return;

        // Update static status
        const newStatic = !startingNode.isStatic;
        startingNode.setStatic(newStatic);
        TreeIterator.iterateVisualChildren(startingNode, (node) => {
          const rectangle = this.nodeIDToRectangle[node.getID()];
          Matter.Body.setStatic(rectangle, newStatic);
          if (newStatic) node.clearTransform();
        });
      });
    }

    applyForceToStartingRectangles() {
      const windowAcc = this.smoothWindowAcceleration.getSmoothVector();

      this.treeManager.visualStartingNodes.forEach((startingNode) => {
        if (startingNode.isStatic) return;

        const rectangle = this.nodeIDToRectangle[startingNode.getID()];

        const applyPosition = JellifyEngine.calcApplyForcePosition(
          startingNode,
          rectangle,
          this.options.physics.force,
        );
        const force = JellifyEngine.calcForceOnVisualRectangle(
          windowAcc,
          rectangle,
          this.options.physics.force,
        );

        Matter.Body.applyForce(rectangle, applyPosition, force);
      });
    }

    updateTransformOnVisualNodes() {
      this.treeManager.visualStartingNodes.forEach((startingNode) => {
        if (startingNode.isStatic) return;

        TreeIterator.iterateVisualChildren(startingNode, (node) => {
          const rectangle = this.nodeIDToRectangle[node.getID()];
          const curPosition = rectangle.position;
          // If we don't constrain the translation, the values may go wild
          const constrainedPosition = GeometryUtil.constrainPosInBoundingBox(
            curPosition,
            this.translationBoundingBox,
          );
          const origPosition = this.initialPositions[node.getID()];
          const translation = Matter.Vector.sub(
            constrainedPosition,
            origPosition,
          );

          node.setTransform(translation, rectangle.angle);
        });
      });
    }

    buildAllRectangles() {
      this.staticRectangles = this.buildAllStaticRectangles();
      console.debug(`Built ${this.staticRectangles.length} static rectangles`);

      const dynamicRectResult = this.buildAllDynamicRectangles();
      this.dynamicRectangles = dynamicRectResult.rectangles;
      this.nodeIDToRectangle = dynamicRectResult.nodeIDToRectangle;
      console.debug(`Built ${this.dynamicRectangles.length} dynamic\
 rectangles`);
    }

    buildAllStaticRectangles() {
      return this.treeManager.visualStartingNodes.map((startingNode) => {
        return JellifyEngine.buildStaticRectangle(startingNode);
      });
    }

    buildAllDynamicRectangles() {
      let allRectangles = [];
      let allNodeIDToRectangle = {};
      this.treeManager.visualStartingNodes.forEach((startingNode) => {
        const result = JellifyEngine.buildDynamicRectangles(startingNode);
        const { rectangles, nodeIDToRectangle } = result;

        allRectangles = [...allRectangles, ...rectangles];
        allNodeIDToRectangle = {
          ...allNodeIDToRectangle,
          ...nodeIDToRectangle,
        };
      });
      return {
        rectangles: allRectangles,
        nodeIDToRectangle: allNodeIDToRectangle,
      };
    }

    buildAllConstraints(options) {
      this.outermostConstraints = this.buildAllOutermostConstraints(
        this.staticRectangles,
        this.nodeIDToRectangle,
        options,
      );
      console.debug(`Built ${this.outermostConstraints.length} outermost\
 constraints`);

      this.innerConstraints = this.buildAllInnerConstraints(
        this.nodeIDToRectangle,
        options,
      );
      console.debug(`Built ${this.innerConstraints.length} inner constraints`);
    }

    buildAllOutermostConstraints(staticRectangles, nodeIDToRectangle, options) {
      const allConstraints = [];
      this.treeManager.visualStartingNodes.forEach((startingNode, index) => {
        const staticRectangle = staticRectangles[index];
        const startingRectangle = nodeIDToRectangle[startingNode.getID()];

        const boundingBox = startingNode.getBoundingBox();
        const corners = GeometryUtil.getCornerPoints(boundingBox);

        corners.forEach((corner) => {
          // Build diagonal constraints between static rectangle and starting
          // node rectangle
          const constraint = PhysicsManager.createOutermostConstraint(
            startingNode,
            staticRectangle,
            startingRectangle,
            corner,
            options,
          );
          allConstraints.push(constraint);
        });
      });
      return allConstraints;
    }

    buildAllInnerConstraints(nodeIDToRectangle, options) {
      let allConstraints = [];
      this.treeManager.visualStartingNodes.forEach((startingNode) => {
        const constraints = JellifyEngine.buildInnerConstraints(
          startingNode,
          nodeIDToRectangle,
          options,
        );

        allConstraints = [...allConstraints, ...constraints];
      });
      return allConstraints;
    }

    saveInitialRectanglePositions() {
      this.initialPositions = {};

      this.treeManager.visualStartingNodes.forEach((startingNode) => {
        TreeIterator.iterateVisualChildren(startingNode, (node) => {
          const rectangle = this.nodeIDToRectangle[node.getID()];
          this.initialPositions[node.getID()] = Matter.Vector.clone(
            rectangle.position,
          );
        });
      });
    }

    static buildStaticRectangle(startingNode) {
      const staticRectangle = PhysicsManager.createRectangle(startingNode);
      Matter.Body.setStatic(staticRectangle, true);
      return staticRectangle;
    }

    static buildDynamicRectangles(startingNode) {
      const rectangles = [];
      const nodeIDToRectangle = {};
      TreeIterator.iterateVisualChildren(startingNode, (curNode) => {
        const rectangle = PhysicsManager.createRectangle(curNode);
        rectangles.push(rectangle);
        nodeIDToRectangle[curNode.getID()] = rectangle;
      });
      return { rectangles, nodeIDToRectangle };
    }

    static buildInnerConstraints(startingNode, nodeIDToRectangle, options) {
      let constraints = [];
      TreeIterator.iterateVisualChildren(startingNode, (curNode) => {
        let result = {};
        // Build diagonal constraints
        result = JellifyEngine.buildDiagonalConstraints(
          curNode,
          nodeIDToRectangle,
          options,
        );
        const { diagonalConstraints, excludedCorners } = result;

        // Build inter constraints
        result = JellifyEngine.buildInterConstraints(
          curNode,
          excludedCorners,
          nodeIDToRectangle,
          options,
        );
        const { interConstraints, unconnectedCorners } = result;

        // Fix the unconnected corners by connecting the nearest corner of the
        // current node and the unconnected corner
        const fixedConstraints = JellifyEngine.fixUnconnectedCorners(
          curNode,
          unconnectedCorners,
          nodeIDToRectangle,
          options,
        );

        constraints = [
          ...constraints,
          ...diagonalConstraints,
          ...interConstraints,
          ...fixedConstraints,
        ];
      });
      return constraints;
    }

    static buildDiagonalConstraints(parentNode, nodeIDToRectangle, options) {
      const parentRectangle = nodeIDToRectangle[parentNode.getID()];
      const parentBoundingBox = parentNode.getBoundingBox();
      const corners = GeometryUtil.getCornerPoints(parentBoundingBox);

      const diagonalConstraints = [];
      const excludedCorners = [];
      if (parentNode.visualChildren.length === 0) {
        return { diagonalConstraints, excludedCorners };
      }
      corners.forEach((corner) => {
        const results = JellifyEngine.findNearestCorners(
          corner,
          parentNode.visualChildren,
        );
        results.forEach((result) => {
          const { nearestNode, nearestCornerIndex, nearestCorner } = result;
          const nearestRectangle = nodeIDToRectangle[nearestNode.getID()];
          const constraint = PhysicsManager.createConstraint(
            parentNode,
            nearestNode,
            parentRectangle,
            nearestRectangle,
            corner,
            nearestCorner,
            options,
          );

          diagonalConstraints.push(constraint);

          excludedCorners.push({
            node: nearestNode,
            cornerIndex: nearestCornerIndex,
          });
        });
      });
      return { diagonalConstraints, excludedCorners };
    }

    static buildInterConstraints(
      parentNode,
      excludedCorners,
      nodeIDToRectangle,
      options,
    ) {
      const interConstraints = [];
      const unconnectedCorners = [];
      if (parentNode.visualChildren.length <= 1) {
        return {
          interConstraints,
          unconnectedCorners,
        };
      }

      // Save the Node ID amd its connected corners to avoid connecting the same
      // two corners twice
      const connectedCorners = [];

      parentNode.visualChildren.forEach((node, nodeIndex) => {
        const rectangle = nodeIDToRectangle[node.getID()];
        const otherNodes = [...parentNode.visualChildren];
        otherNodes.splice(nodeIndex, 1);

        const boundingBox = node.getBoundingBox();
        const corners = GeometryUtil.getCornerPoints(boundingBox);
        corners.forEach((corner, cornerIndex) => {
          if (
            JellifyEngine.isCornerExcluded(node, cornerIndex, excludedCorners)
          ) {
            return;
          }

          if (
            JellifyEngine.isCornerExcluded(node, cornerIndex, connectedCorners)
          ) {
            return;
          }

          const angleRange = JellifyEngine.getCornerAngleRange(cornerIndex);
          const results = JellifyEngine.findNearestCorners(
            corner,
            otherNodes,
            angleRange.minAngle,
            angleRange.maxAngle,
            options.geometry.toleranceDistance,
          );

          results.forEach((result) => {
            const { nearestNode, nearestCornerIndex, nearestCorner } = result;
            const nearestRectangle = nodeIDToRectangle[nearestNode.getID()];
            const constraint = PhysicsManager.createConstraint(
              node,
              nearestNode,
              rectangle,
              nearestRectangle,
              corner,
              nearestCorner,
              options,
            );

            interConstraints.push(constraint);

            connectedCorners.push({ node, cornerIndex });
            connectedCorners.push({
              node: nearestNode,
              cornerIndex: nearestCornerIndex,
            });
          });

          // Unable to find another corner to connect, we'll deal with it later
          if (results.length === 0) {
            unconnectedCorners.push({
              node,
              cornerIndex,
              corner,
            });
          }
        });
      });
      return { interConstraints, unconnectedCorners };
    }

    static fixUnconnectedCorners(
      parentNode,
      unconnectedCorners,
      nodeIDToRectangle,
      options,
    ) {
      const parentRectangle = nodeIDToRectangle[parentNode.getID()];

      const fixedConstraints = [];
      if (parentNode.visualChildren.length === 0) return fixedConstraints;
      unconnectedCorners.forEach((unconnectedCorner) => {
        const { node, cornerIndex, corner } = unconnectedCorner;
        const angleRange = JellifyEngine.getCornerAngleRange(cornerIndex);
        const results = JellifyEngine.findNearestCorners(
          corner,
          [parentNode],
          angleRange.minAngle,
          angleRange.maxAngle,
        );

        const rectangle = nodeIDToRectangle[node.getID()];
        // Should have exact 1 corner in results
        results.forEach((result) => {
          const { nearestCorner } = result;
          const constraint = PhysicsManager.createConstraint(
            parentNode,
            node,
            parentRectangle,
            rectangle,
            nearestCorner,
            corner,
            options,
          );

          fixedConstraints.push(constraint);
        });
      });
      return fixedConstraints;
    }

    static findNearestCorners(
      corner,
      otherNodes,
      minAngle = 0,
      maxAngle = 360,
      toleranceDistance = 0,
    ) {
      let results = [];
      let minDist = Infinity;
      otherNodes.forEach((otherNode) => {
        const boundingBox = otherNode.getBoundingBox();
        const otherCorners = GeometryUtil.getCornerPoints(boundingBox);
        otherCorners.forEach((otherCorner, otherCornerIndex) => {
          const vectorAngle = GeometryUtil.angle(corner, otherCorner);
          const vectorAngleCCW = vectorAngle + 360;
          if (
            !(vectorAngle >= minAngle && vectorAngle <= maxAngle)
            && !(vectorAngleCCW >= minAngle && vectorAngleCCW <= maxAngle)
            && GeometryUtil.distance(corner, otherCorner) > toleranceDistance
          ) {
            return;
          }

          const dist = GeometryUtil.distance(corner, otherCorner);
          if (dist <= minDist) {
            results = [];
            results.push({
              nearestNode: otherNode,
              nearestCornerIndex: otherCornerIndex,
              nearestCorner: otherCorner,
            });
            minDist = dist;
          }
        });
      });
      // Either empty or 1 result
      return results;
    }

    static isCornerExcluded(node, cornerIndex, excludedCorners) {
      return excludedCorners.some((nodeAndCornerIndex) => {
        return (
          node.getID() === nodeAndCornerIndex.node.getID()
          && cornerIndex === nodeAndCornerIndex.cornerIndex
        );
      });
    }

    static getCornerAngleRange(cornerIndex) {
      // For example, we prefer quadrant 1 with cornerIndex=0, we prefer
      // quadrant 2 with cornerIndex=1, and so on
      return {
        minAngle: (cornerIndex + 0) * 90,
        maxAngle: (cornerIndex + 1) * 90,
      };
    }

    static calcApplyForcePosition(node, rectangle, options) {
      const randShiftRatioX = RandomUtil.randValue(
        options.minRandomShift,
        options.maxRandomShift,
      );
      const randShiftRatioY = RandomUtil.randValue(
        options.minRandomShift,
        options.maxRandomShift,
      );
      const boundingBox = node.getBoundingBox();
      const offset = Matter.Vector.create(
        boundingBox.width * randShiftRatioX,
        boundingBox.height * randShiftRatioY,
      );
      const center = rectangle.position;
      const offsetPosition = Matter.Vector.add(center, offset);
      return offsetPosition;
    }

    static calcForceOnVisualRectangle(windowAcc, rectangle, options) {
      const negAcc = Matter.Vector.neg(windowAcc);
      const force = Matter.Vector.mult(negAcc, rectangle.mass);
      const correctedForce = PhysicsManager.correctForce(force);

      // Randomly rotate the force
      const randAngleInDegree = RandomUtil.randValue(
        options.minRandomRotate,
        options.maxRandomRotate,
      );
      const randAngle = GeometryUtil.degreeToRadian(randAngleInDegree);
      const rotatedForce = Matter.Vector.rotate(correctedForce, randAngle);

      // Randomly scale the force
      const randScale = RandomUtil.randValue(
        options.minRandomScale,
        options.maxRandomScale,
      );
      const scaledForce = Matter.Vector.mult(rotatedForce, randScale);

      return scaledForce;
    }

    static getAnimationBoundingBox(options) {
      const windowWidth = $(window).width();
      const windowHeight = $(window).height();
      // Extend the window bounding box outward
      const zoom = options.animationAreaZoom;
      const offsetFactor = -1 * ((zoom - 1) / 2);
      return {
        x: offsetFactor * windowWidth,
        y: offsetFactor * windowHeight,
        width: zoom * windowWidth,
        height: zoom * windowHeight,
      };
    }

    static getTranslationBoundingBox(options) {
      const documentWidth = $(document).width();
      const documentHeight = $(document).height();
      // Extend the document bounding box outward
      const zoom = options.animationAreaZoom;
      const offsetFactor = -1 * ((zoom - 1) / 2);
      return {
        x: offsetFactor * documentWidth,
        y: offsetFactor * documentHeight,
        width: zoom * documentWidth,
        height: zoom * documentHeight,
      };
    }
  }

  class App {
    constructor() {
      // App constants
      this.globalBookmarkletName = 'JELLIFY_BOOKMARKLET';
      this.globalOptionsName = 'JELLIFY_OPTIONS';
      this.globalDebugName = 'JELLIFY_DEBUG';
      this.defaultOptions = {
        tree: {
          // We limit the minimal size to avoid building a very small rectangle
          // to boost the performance, and also avoid building small rectangles
          // that acts as pivots
          minWidth: 10,
          minHeight: 10,
          // How much margin between the parent and children visual nodes. Set
          // a non-zero value to avoid exactly overlapping bounding box of the
          // parent and child nodes
          minMargin: 0, // pixels
          // We limit the number of visual descendants to boost the performance.
          // If a node has too many visual descendants we won't consider it as
          // the starting node. Set both numbers to 0 to disable stacked
          // visualization
          minVisualDescendants: 0,
          maxVisualDescendants: 10,
          // We limit the height in the visual tree to avoid long stacked
          // rectangles. Set the number to 0 to disable stacked visualization.
          maxVisualHeight: 5,
        },
        render: {
          minFPS: 30,
          maxFPS: 60,
        },
        geometry: {
          // If the element falls outside the zoomed out area of the viewport,
          // we stop animating the object to optimize the performance
          animationAreaZoom: 5,
          // If the Matter.js rectangle is positioned beyond the zoomed out area
          // of the document, we constrain the translation
          translationAreaZoom: 5,
          // When two points are too close the angle calculation may not be
          // reliable (for example, angle(p1, p2) = 180 when p1 and p2 are very
          // close). Instead, we calculate the distance to see if we can treat
          // two points the same
          toleranceDistance: 1.0,
        },
        physics: {
          constraint: {
            damping: 0.01,
            // We apply higher stiffness to longer constraint, these values
            // correspond to the shortest constraint and longest constraint
            minStiffness: 0.003,
            maxStiffness: 1.0,
            // The exponent applied to stiffness calculation, higher value means
            // less stiffness in the middle range
            stiffnessCurveSoftness: 2.0,
          },
          acceleration: {
            // How many samples to get the average acceleration of the window
            // scroll
            smoothness: 3,
          },
          force: {
            // Apply the force to an offset position from the center (0-1).
            // 0 means no offset, 1 means shift to the edge
            minRandomShift: -0.05, // ratio
            maxRandomShift: 0.05, // ratio
            // Randomly rotate the force to make it chaotic
            minRandomRotate: -30, // degrees
            maxRandomRotate: 30, // degrees
            // Randomly scale the force to make it chaotic
            minRandomScale: 0.9,
            maxRandomScale: 1.1,
          },
        },
      };

      this.options = null;
      this.treeManager = null;
      this.physicsManager = null;
      this.jellifyEngine = null;
    }

    init() {
      if (this.isLoaded()) {
        console.info('Jellify is already loaded, not doing anything new');
        return;
      }

      App.waitLibraries(() => {
        this.waitPageToBeReady();
      });
    }

    waitPageToBeReady() {
      $(document).ready(() => {
        this.options = this.readOptions();
        console.debug(`Options: ${JSON.stringify(this.options)}`);

        const isRender = this.isDebugMode();

        this.treeManager = new TreeManager(this.options);
        this.physicsManager = new PhysicsManager(isRender);
        this.jellifyEngine = new JellifyEngine(
          this.treeManager,
          this.physicsManager,
          this.options,
          isRender,
        );

        this.setLoaded();

        this.treeManager.init();

        if (this.isDebugMode()) {
          this.treeManager.render();
        }

        this.physicsManager.init(this.treeManager.rootNode);

        this.jellifyEngine.init();

        this.jellifyEngine.runAnimation();
      });
    }

    readOptions() {
      if (typeof window[this.globalOptionsName] === 'undefined') {
        return this.defaultOptions;
      }
      const overrideOptions = window[this.globalOptionsName];
      console.debug(`Overriding options: ${JSON.stringify(overrideOptions)}`);
      return Matter.Common.extend(this.defaultOptions, overrideOptions);
    }

    isLoaded() {
      return typeof window[this.globalBookmarkletName] !== 'undefined';
    }

    isDebugMode() {
      return typeof window[this.globalDebugName] !== 'undefined';
    }

    setLoaded() {
      window[this.globalBookmarkletName] = true;
      console.info('Jellify is loaded');

      if (this.isDebugMode()) {
        console.info('Jellify debug mode is enabled');
      }
    }

    static waitLibraries(onFinish) {
      const timerId = setInterval(() => {
        if (window.jQuery && window.Matter) {
          onFinish();
          clearInterval(timerId);
        }
      }, 100);
    }
  }

  const app = new App();
  app.init();
}

// # sourceURL=jellify.js
