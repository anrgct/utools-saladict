(window.saladictEntry=window.saladictEntry||[]).push([[140],{653:function(e,t,n){"use strict";n.r(t),n.d(t,"DictLexico",(function(){return r}));var l=n(0),a=n.n(l);const r=({result:e})=>{switch(e.type){case"lex":return function(e){return a.a.createElement("div",{className:"dictLexico-Lex",dangerouslySetInnerHTML:{__html:e.entry},onClick:c})}(e);case"related":return function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Did you mean:"),a.a.createElement("ul",{className:"dictLexico-Related"},e.list.map((e,t)=>a.a.createElement("li",{key:t},a.a.createElement("a",{rel:"nofollow noopener noreferrer",target:"_blank",href:e.href},e.text)))))}(e);default:return null}};function c(e){var t,n,l;const a=e.target,r=(null===(t=a.classList)||void 0===t?void 0:t.contains("moreInfo"))?a:(null===(n=a.parentElement)||void 0===n||null===(l=n.classList)||void 0===l?void 0:l.contains("moreInfo"))?a.parentElement:null;r&&r.classList.toggle("active")}t.default=r}}]);