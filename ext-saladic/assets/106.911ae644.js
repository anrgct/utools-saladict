(window.saladictEntry=window.saladictEntry||[]).push([[106],{1293:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),l=t.n(n);class s extends l.a.PureComponent{render(){const e=this.props.className||"widget-StarRates",a=this.props.max||5,t=Number(this.props.rate)%(a+1)||0,n=this.props.height||"1.5em",s=this.props.gutter||"0.3em",r={height:n,...this.props.style||{}};return l.a.createElement("div",{className:e,style:r},Array.from(Array(a)).map((e,r)=>l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 426.67 426.67",key:r+t,width:n,height:n,style:{marginRight:r===a-1?"":s}},l.a.createElement("path",{fill:r<t?"#FAC917":"#d1d8de",d:"M213.33 10.44l65.92 133.58 147.42 21.42L320 269.4l25.17 146.83-131.84-69.32-131.85 69.34 25.2-146.82L0 165.45l147.4-21.42"}))))}}},635:function(e,a,t){"use strict";t.r(a),t.d(a,"DictLongman",(function(){return m}));var n=t(0),l=t.n(n),s=t(118),r=t(1293);const m=({result:e})=>"lex"===e.type?function(e){const a=e.bussinessFirst?["bussiness","contemporary"]:["contemporary","bussiness"];return l.a.createElement(l.a.Fragment,null,e.wordfams&&l.a.createElement("div",{className:"dictLongman-Wordfams",dangerouslySetInnerHTML:{__html:e.wordfams}}),a.map((a,t)=>e[a].length>0?l.a.createElement("div",{className:"dictLongman-Dict",key:a+t},e[a].map(c)):null))}(e):"related"===e.type?function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Did you mean:"),l.a.createElement("ul",{className:"dictLongman-Related",dangerouslySetInnerHTML:{__html:e.list}}))}(e):null;function c(e){return l.a.createElement("section",{key:e.title.HWD+e.title.HOMNUM,className:"dictLongman-Entry"},l.a.createElement("header",null,l.a.createElement("div",{className:"dictLongman-HeaderContainer"},l.a.createElement("h1",{className:"dictLongman-Title"},l.a.createElement("span",{className:"dictLongman-Title_HWD"},e.title.HWD),l.a.createElement("span",{className:"dictLongman-Title_HYPHENATION"},e.title.HYPHENATION),l.a.createElement("span",{className:"dictLongman-Title_HOMNUM"},e.title.HOMNUM)),e.level?l.a.createElement("span",{title:e.level.title,className:"dictLongman-Level"},l.a.createElement(r.a,{max:3,rate:e.level.rate,className:"dictLongman-Level_Rate"})):null,e.freq&&e.freq.map(e=>l.a.createElement("span",{key:e.rank,className:"dictLongman-FREQ",title:e.title},e.rank))),l.a.createElement("div",{className:"dictLongman-HeaderContainer"},l.a.createElement("span",{className:"dictLongman-Pos"},e.pos),l.a.createElement("span",{className:"dictLongman-Phsym"},e.phsym),e.prons&&e.prons.map(e=>l.a.createElement(l.a.Fragment,{key:e.pron},e.lang.toUpperCase(),": ",l.a.createElement(s.c,{src:e.pron}))),e.topic&&l.a.createElement(l.a.Fragment,null,"Topic:"," ",l.a.createElement("a",{href:e.topic.href,rel:"nofollow noopener noreferrer"},e.topic.title)))),e.senses.map(e=>l.a.createElement("div",{key:e,className:"dictLongman-Sense",dangerouslySetInnerHTML:{__html:e}})),e.collocations&&l.a.createElement("div",{className:"dictLongman-Box",dangerouslySetInnerHTML:{__html:e.collocations}}),e.grammar&&l.a.createElement("div",{className:"dictLongman-Box",dangerouslySetInnerHTML:{__html:e.grammar}}),e.thesaurus&&l.a.createElement("div",{className:"dictLongman-Box",dangerouslySetInnerHTML:{__html:e.thesaurus}}),e.examples&&e.examples.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"dictLongman-Examples_Title"},"Examples from the Corpus"),e.examples.map(e=>l.a.createElement("div",{key:e,className:"dictLongman-Examples",dangerouslySetInnerHTML:{__html:e}}))))}a.default=m}}]);