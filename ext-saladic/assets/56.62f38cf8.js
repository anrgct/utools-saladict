(window.saladictEntry=window.saladictEntry||[]).push([[56],{116:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0),o=r(30);function i(t,e){var r=Object(o.e)(o.a),i=Object(o.e)((function(){return t(r.current)}));return[Object(n.useRef)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];r.current.next(e?e(t):t[0])})).current,i.current]}},182:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(30),o=r(0);function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Object(o.useRef)(t);r.current=t;var i=Object(n.d)(),a=Object(o.useRef)(),c=Object(o.useRef)();if(Object(o.useEffect)((function(){c.current=null;var t=r.current[0],e=t.subscribe({next:function(e){if(t===r.current[0])return r.current[1]?r.current[1](e):void 0},error:function(e){if(t===r.current[0]){if(r.current[2])return c.current=null,r.current[2](e);c.current=e,i()}},complete:function(){if(t===r.current[0])return r.current[3]?r.current[3]():void 0}});return a.current=e,function(){e.unsubscribe()}}),[t[0]]),c.current)throw c.current;return a}},30:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return l})),r.d(e,"e",(function(){return u})),r.d(e,"d",(function(){return s}));var n=r(0),o=r(91),i=r(161);function a(t){return t}function c(t){return Object(i.a)(0)(t)}function l(){return new o.a}function u(t){var e=Object(n.useRef)(!0),r=Object(n.useRef)(null);return e.current&&(e.current=!1,r.current=t()),r}function s(){var t=Object(n.useState)(0)[1];return Object(n.useRef)((function(){return t(d)})).current}function d(t){return(t+1)%1e6}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},5:function(t,e,r){"use strict";r.d(e,"h",(function(){return i})),r.d(e,"g",(function(){return a})),r.d(e,"b",(function(){return c})),r.d(e,"f",(function(){return l})),r.d(e,"d",(function(){return d})),r.d(e,"e",(function(){return f})),r.d(e,"i",(function(){return p})),r.d(e,"j",(function(){return m})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return y}));var n=r(507),o=r.n(n);r(0),r(116),r(182),r(10),r(371),r(634);function i(){return Promise.reject(new Error("NO_RESULT"))}function a(){return Promise.reject(new Error("NETWORK_ERROR"))}async function c(t){return null==t||/zh-TW|zh-HK/i.test(t)?(await r.e(109).then(r.bind(null,1321))).chsToChz:null}function l(t,...e){if(!t)return"";let r="",n=null;for(let t=e.length-1;t>=0;t--)"string"==typeof e[t]?r=e[t]:"function"==typeof e[t]&&(n=e[t]);const o=r?t.querySelector(r):t;if(!o)return"";const i=o.textContent||"";return n?n(i):i}const u={FORBID_TAGS:["style"],FORBID_ATTR:["style"]};function s(t,{mode:e="innerHTML",selector:r,transform:n,host:i,config:a=u}={}){const c=r?t.querySelector(r):t;if(!c)return"";if(i){const t=t=>{t.setAttribute("href",y(i,t,"href")),t.setAttribute("src",y(i,t,"src"))};"A"!==c.tagName&&"IMG"!==c.tagName||t(c),c.querySelectorAll("a").forEach(t),c.querySelectorAll("img").forEach(t)}const l=o.a.sanitize(c,{...a,RETURN_DOM_FRAGMENT:!0}),s=l.firstChild?l.firstChild[e]:"";return n?n(s):s}function d(t,e,r={}){return s(e,"string"==typeof r?{selector:r,host:t,mode:"innerHTML"}:{...r,host:t,mode:"innerHTML"})}function f(t,e,r={}){return s(e,"string"==typeof r?{selector:r,host:t,mode:"outerHTML"}:{...r,host:t,mode:"outerHTML"})}function p(t,e){const r=t.querySelector(e);r&&r.remove()}function m(t,e){t.querySelectorAll(e).forEach(t=>t.remove())}function h(t){t.setAttribute("target","_blank"),t.setAttribute("rel","nofollow noopener noreferrer")}function y(t,e,r){t.endsWith("/")&&(t=t.slice(0,-1));const n=t.startsWith("https")?"https:":"http:",o=e.getAttribute(r);return o?/^[a-zA-Z0-9]+:/.test(o)?o:o.startsWith("//")?n+o:/^.?\/+/.test(o)?t+"/"+o.replace(/^.?\/+/,""):t+"/"+o:""}},507:function(t,e,r){t.exports=function(){"use strict";var t=Object.freeze||function(t){return t},e=t(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),r=t(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),n=t(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=t(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),i=t(["#text"]),a=Object.freeze||function(t){return t},c=a(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),l=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),u=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),s=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),d=Object.hasOwnProperty,f=Object.setPrototypeOf,p=("undefined"!=typeof Reflect&&Reflect).apply;function m(t,e){f&&f(t,null);for(var r=e.length;r--;){var n=e[r];if("string"==typeof n){var o=n.toLowerCase();o!==n&&(Object.isFrozen(e)||(e[r]=o),n=o)}t[n]=!0}return t}function h(t){var e={},r=void 0;for(r in t)p(d,t,[r])&&(e[r]=t[r]);return e}p||(p=function(t,e,r){return t.apply(e,r)});var y=Object.seal||function(t){return t},v=y(/\{\{[\s\S]*|[\s\S]*\}\}/gm),g=y(/<%[\s\S]*|[\s\S]*%>/gm),b=y(/^data-[\-\w.\u00B7-\uFFFF]/),T=y(/^aria-[\-\w]+$/),x=y(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),w=y(/^(?:\w+script|data):/i),A=y(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function E(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var O=("undefined"!=typeof Reflect&&Reflect).apply,S=Array.prototype.slice,R=Object.freeze,L=function(){return"undefined"==typeof window?null:window};O||(O=function(t,e,r){return t.apply(e,r)});var M=function(t,e){if("object"!==(void 0===t?"undefined":_(t))||"function"!=typeof t.createPolicy)return null;var r=null;e.currentScript&&e.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=e.currentScript.getAttribute("data-tt-policy-suffix"));var n="dompurify"+(r?"#"+r:"");try{return t.createPolicy(n,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+n+" could not be created."),null}};return function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L(),d=function(e){return t(e)};if(d.version="2.0.7",d.removed=[],!a||!a.document||9!==a.document.nodeType)return d.isSupported=!1,d;var f=a.document,p=!1,y=!1,N=a.document,k=a.DocumentFragment,j=a.HTMLTemplateElement,D=a.Node,C=a.NodeFilter,H=a.NamedNodeMap,I=void 0===H?a.NamedNodeMap||a.MozNamedAttrMap:H,z=a.Text,F=a.Comment,U=a.DOMParser,W=a.TrustedTypes;if("function"==typeof j){var P=N.createElement("template");P.content&&P.content.ownerDocument&&(N=P.content.ownerDocument)}var q=M(W,f),B=q?q.createHTML(""):"",G=N,V=G.implementation,$=G.createNodeIterator,K=G.getElementsByTagName,Y=G.createDocumentFragment,J=f.importNode,X={};d.isSupported=V&&void 0!==V.createHTMLDocument&&9!==N.documentMode;var Z=v,Q=g,tt=b,et=T,rt=w,nt=A,ot=x,it=null,at=m({},[].concat(E(e),E(r),E(n),E(o),E(i))),ct=null,lt=m({},[].concat(E(c),E(l),E(u),E(s))),ut=null,st=null,dt=!0,ft=!0,pt=!1,mt=!1,ht=!1,yt=!1,vt=!1,gt=!1,bt=!1,Tt=!1,xt=!1,wt=!1,At=!0,_t=!0,Et=!1,Ot={},St=m({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Rt=m({},["audio","video","img","source","image"]),Lt=null,Mt=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Nt=null,kt=N.createElement("form"),jt=function(t){Nt&&Nt===t||(t&&"object"===(void 0===t?"undefined":_(t))||(t={}),it="ALLOWED_TAGS"in t?m({},t.ALLOWED_TAGS):at,ct="ALLOWED_ATTR"in t?m({},t.ALLOWED_ATTR):lt,Lt="ADD_URI_SAFE_ATTR"in t?m(h(Mt),t.ADD_URI_SAFE_ATTR):Mt,ut="FORBID_TAGS"in t?m({},t.FORBID_TAGS):{},st="FORBID_ATTR"in t?m({},t.FORBID_ATTR):{},Ot="USE_PROFILES"in t&&t.USE_PROFILES,dt=!1!==t.ALLOW_ARIA_ATTR,ft=!1!==t.ALLOW_DATA_ATTR,pt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,mt=t.SAFE_FOR_JQUERY||!1,ht=t.SAFE_FOR_TEMPLATES||!1,yt=t.WHOLE_DOCUMENT||!1,bt=t.RETURN_DOM||!1,Tt=t.RETURN_DOM_FRAGMENT||!1,xt=t.RETURN_DOM_IMPORT||!1,wt=t.RETURN_TRUSTED_TYPE||!1,gt=t.FORCE_BODY||!1,At=!1!==t.SANITIZE_DOM,_t=!1!==t.KEEP_CONTENT,Et=t.IN_PLACE||!1,ot=t.ALLOWED_URI_REGEXP||ot,ht&&(ft=!1),Tt&&(bt=!0),Ot&&(it=m({},[].concat(E(i))),ct=[],!0===Ot.html&&(m(it,e),m(ct,c)),!0===Ot.svg&&(m(it,r),m(ct,l),m(ct,s)),!0===Ot.svgFilters&&(m(it,n),m(ct,l),m(ct,s)),!0===Ot.mathMl&&(m(it,o),m(ct,u),m(ct,s))),t.ADD_TAGS&&(it===at&&(it=h(it)),m(it,t.ADD_TAGS)),t.ADD_ATTR&&(ct===lt&&(ct=h(ct)),m(ct,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&m(Lt,t.ADD_URI_SAFE_ATTR),_t&&(it["#text"]=!0),yt&&m(it,["html","head","body"]),it.table&&(m(it,["tbody"]),delete ut.tbody),R&&R(t),Nt=t)},Dt=function(t){d.removed.push({element:t});try{t.parentNode.removeChild(t)}catch(e){t.outerHTML=B}},Ct=function(t,e){try{d.removed.push({attribute:e.getAttributeNode(t),from:e})}catch(t){d.removed.push({attribute:null,from:e})}e.removeAttribute(t)},Ht=function(t){var e=void 0,r=void 0;if(gt)t="<remove></remove>"+t;else{var n=t.match(/^[\s]+/);(r=n&&n[0])&&(t=t.slice(r.length))}if(p)try{e=(new U).parseFromString(t,"text/html")}catch(t){}if(y&&m(ut,["title"]),!e||!e.documentElement){var o=(e=V.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=q?q.createHTML(t):t}return t&&r&&e.body.insertBefore(N.createTextNode(r),e.body.childNodes[0]||null),K.call(e,yt?"html":"body")[0]};d.isSupported&&(function(){try{Ht('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(p=!0)}catch(t){}}(),function(){try{var t=Ht("<x/><title>&lt;/title&gt;&lt;img&gt;");/<\/title/.test(t.querySelector("title").innerHTML)&&(y=!0)}catch(t){}}());var It=function(t){return $.call(t.ownerDocument||t,t,C.SHOW_ELEMENT|C.SHOW_COMMENT|C.SHOW_TEXT,(function(){return C.FILTER_ACCEPT}),!1)},zt=function(t){return!(t instanceof z||t instanceof F||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof I&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute&&"string"==typeof t.namespaceURI)},Ft=function(t){return"object"===(void 0===D?"undefined":_(D))?t instanceof D:t&&"object"===(void 0===t?"undefined":_(t))&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Ut=function(t,e,r){X[t]&&X[t].forEach((function(t){t.call(d,e,r,Nt)}))},Wt=function(t){var e=void 0;if(Ut("beforeSanitizeElements",t,null),zt(t))return Dt(t),!0;var r=t.nodeName.toLowerCase();if(Ut("uponSanitizeElement",t,{tagName:r,allowedTags:it}),("svg"===r||"math"===r)&&0!==t.querySelectorAll("p, br").length)return Dt(t),!0;if(!it[r]||ut[r]){if(_t&&!St[r]&&"function"==typeof t.insertAdjacentHTML)try{var n=t.innerHTML;t.insertAdjacentHTML("AfterEnd",q?q.createHTML(n):n)}catch(t){}return Dt(t),!0}return"noscript"===r&&/<\/noscript/i.test(t.innerHTML)||"noembed"===r&&/<\/noembed/i.test(t.innerHTML)?(Dt(t),!0):(!mt||t.firstElementChild||t.content&&t.content.firstElementChild||!/</g.test(t.textContent)||(d.removed.push({element:t.cloneNode()}),t.innerHTML?t.innerHTML=t.innerHTML.replace(/</g,"&lt;"):t.innerHTML=t.textContent.replace(/</g,"&lt;")),ht&&3===t.nodeType&&(e=(e=(e=t.textContent).replace(Z," ")).replace(Q," "),t.textContent!==e&&(d.removed.push({element:t.cloneNode()}),t.textContent=e)),Ut("afterSanitizeElements",t,null),!1)},Pt=function(t,e,r){if(At&&("id"===e||"name"===e)&&(r in N||r in kt))return!1;if(ft&&tt.test(e));else if(dt&&et.test(e));else{if(!ct[e]||st[e])return!1;if(Lt[e]);else if(ot.test(r.replace(nt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==r.indexOf("data:")||!Rt[t])if(pt&&!rt.test(r.replace(nt,"")));else if(r)return!1}return!0},qt=function(t){var e=void 0,r=void 0,n=void 0,o=void 0,i=void 0;Ut("beforeSanitizeAttributes",t,null);var a=t.attributes;if(a){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ct};for(i=a.length;i--;){var l=e=a[i],u=l.name,s=l.namespaceURI;if(r=e.value.trim(),n=u.toLowerCase(),c.attrName=n,c.attrValue=r,c.keepAttr=!0,Ut("uponSanitizeAttribute",t,c),r=c.attrValue,"name"===n&&"IMG"===t.nodeName&&a.id)o=a.id,a=O(S,a,[]),Ct("id",t),Ct(u,t),a.indexOf(o)>i&&t.setAttribute("id",o.value);else{if("INPUT"===t.nodeName&&"type"===n&&"file"===r&&c.keepAttr&&(ct[n]||!st[n]))continue;"id"===u&&t.setAttribute(u,""),Ct(u,t)}if(c.keepAttr)if(/svg|math/i.test(t.namespaceURI)&&new RegExp("</("+Object.keys(St).join("|")+")","i").test(r))Ct(u,t);else{ht&&(r=(r=r.replace(Z," ")).replace(Q," "));var f=t.nodeName.toLowerCase();if(Pt(f,n,r))try{s?t.setAttributeNS(s,u,r):t.setAttribute(u,r),d.removed.pop()}catch(t){}}}Ut("afterSanitizeAttributes",t,null)}},Bt=function t(e){var r=void 0,n=It(e);for(Ut("beforeSanitizeShadowDOM",e,null);r=n.nextNode();)Ut("uponSanitizeShadowNode",r,null),Wt(r)||(r.content instanceof k&&t(r.content),qt(r));Ut("afterSanitizeShadowDOM",e,null)};return d.sanitize=function(t,e){var r=void 0,n=void 0,o=void 0,i=void 0,c=void 0;if(t||(t="\x3c!--\x3e"),"string"!=typeof t&&!Ft(t)){if("function"!=typeof t.toString)throw new TypeError("toString is not a function");if("string"!=typeof(t=t.toString()))throw new TypeError("dirty is not a string, aborting")}if(!d.isSupported){if("object"===_(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof t)return a.toStaticHTML(t);if(Ft(t))return a.toStaticHTML(t.outerHTML)}return t}if(vt||jt(e),d.removed=[],Et);else if(t instanceof D)1===(n=(r=Ht("\x3c!--\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?r=n:r.appendChild(n);else{if(!bt&&!ht&&!yt&&wt&&-1===t.indexOf("<"))return q?q.createHTML(t):t;if(!(r=Ht(t)))return bt?null:B}r&&gt&&Dt(r.firstChild);for(var l=It(Et?t:r);o=l.nextNode();)3===o.nodeType&&o===i||Wt(o)||(o.content instanceof k&&Bt(o.content),qt(o),i=o);if(i=null,Et)return t;if(bt){if(Tt)for(c=Y.call(r.ownerDocument);r.firstChild;)c.appendChild(r.firstChild);else c=r;return xt&&(c=J.call(f,c,!0)),c}var u=yt?r.outerHTML:r.innerHTML;return ht&&(u=(u=u.replace(Z," ")).replace(Q," ")),q&&wt?q.createHTML(u):u},d.setConfig=function(t){jt(t),vt=!0},d.clearConfig=function(){Nt=null,vt=!1},d.isValidAttribute=function(t,e,r){Nt||jt({});var n=t.toLowerCase(),o=e.toLowerCase();return Pt(n,o,r)},d.addHook=function(t,e){"function"==typeof e&&(X[t]=X[t]||[],X[t].push(e))},d.removeHook=function(t){X[t]&&X[t].pop()},d.removeHooks=function(t){X[t]&&(X[t]=[])},d.removeAllHooks=function(){X={}},d}()}()},634:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(3),o=r(7);function i(){}var a=r(45);function c(t,e,r){return function(n){return n.lift(new l(t,e,r))}}var l=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.nextOrObserver,this.error,this.complete))},t}(),u=function(t){function e(e,r,n,o){var c=t.call(this,e)||this;return c._tapNext=i,c._tapError=i,c._tapComplete=i,c._tapError=n||i,c._tapComplete=o||i,Object(a.a)(r)?(c._context=c,c._tapNext=r):r&&(c._context=r,c._tapNext=r.next||i,c._tapError=r.error||i,c._tapComplete=r.complete||i),c}return n.__extends(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(o.a)},839:function(t,e,r){"use strict";r.r(e),r.d(e,"getSrcPage",(function(){return a})),r.d(e,"search",(function(){return c})),r.d(e,"getTTS",(function(){return u}));var n=r(5),o=r(131),i=r.n(o);const a=async t=>{const e=await l(t).catch(()=>null);if(e){const t=e.searchResults&&e.searchResults[0]&&e.searchResults[0].tarId;if(t)return"https://www.mojidict.com/details/"+t}return"https://www.mojidict.com"},c=async(t,e,r,o)=>{var a,c;const d=await l(t),f=null===(a=d.searchResults)||void 0===a||null===(c=a[0])||void 0===c?void 0:c.tarId;if(!f)return Object(n.h)();const{data:{result:p}}=await i()({method:"post",url:"https://api.mojidict.com/parse/functions/fetchWord_v2",headers:{"content-type":"text/plain"},data:s({wordId:f})}),m={};return p&&(p.details||p.word)?(p.word&&(m.word={tarId:f,spell:p.word.spell,pron:`${p.word.pron||""} ${p.word.accent||""}`}),p.details&&(m.details=p.details.map(t=>{var e;return{objectId:t.objectId,title:t.title,subdetails:null==p||null===(e=p.subdetails)||void 0===e?void 0:e.filter(e=>e.detailsId===t.objectId).map(t=>{var e;return{objectId:t.objectId,title:t.title,examples:null==p||null===(e=p.examples)||void 0===e?void 0:e.filter(e=>e.subdetailsId===t.objectId)}})}})),d.words&&(null==d?void 0:d.words.length)>1&&(m.releated=d.words.map(t=>({title:`${t.spell} | ${t.pron||""} ${t.accent||""}`,excerpt:t.excerpt})).slice(1)),m.word&&"mojidict"===e.autopron.cn.dict?(m.word.tts=await u(f,102),{result:m,audio:{py:m.word.tts}}):{result:m}):Object(n.h)()};async function l(t){try{const{data:{result:e}}=await i()({method:"post",url:"https://api.mojidict.com/parse/functions/search_v3",headers:{"content-type":"text/plain"},data:s({langEnv:"zh-CN_ja",needWords:!0,searchText:t})});return e||Object(n.h)()}catch(t){return Object(n.g)()}}async function u(t,e){try{var r,n;const{data:o}=await i()({method:"post",url:"https://api.mojidict.com/parse/functions/fetchTts_v2",headers:{"content-type":"text/plain"},data:s({tarId:t,tarType:e})});return(null===(r=o.result)||void 0===r||null===(n=r.result)||void 0===n?void 0:n.url)||""}catch(t){!1}return""}function s(t){return JSON.stringify({_ApplicationId:"E62VyFVLMiW7kvbtVq3p",_ClientVersion:"js2.12.0",_InstallationId:d()+d()+"-"+d()+"-"+d()+"-"+d()+"-"+d()+d()+d(),...t})}function d(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}}]);