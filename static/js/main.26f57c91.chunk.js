(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,t,n){e.exports=n(571)},571:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),c=n(119),o=n.n(c),l=n(128),u=n(129),i=n(138),s=n(130),d=n(139),m=n(158),b=n(166),h=n(232),f=n.n(h),p=n(233),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onEditorChange=function(e){n.props.changeText(e)},n.onEditorMount=function(e){var t=e.getModel(),a=t.getValue();t.updateOptions({tabSize:2}),n.props.changeText(a)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{language:"markdown",theme:"vs-dark",defaultValue:this.props.defaultText,options:{selectOnLineNumbers:!0,renderWhitespace:"all",wordWrap:"bounded",automaticLayout:!0},editorDidMount:this.onEditorMount,onChange:Object(p.debounce)(this.onEditorChange,1e3)})}}]),t}(a.PureComponent),v=n(137),g=n(115),O=n(247),j=n(235),w=n.n(j),T=n(210),y=n.n(T),x=n(236),H=n.n(x),S=n(237),C=n.n(S),k=new H.a({locale:["ru","en-US"]});k.disableRule("common/punctuation/hellip");var _={table:"table table-striped table-bordered"},D=Object.keys(_).map(function(e){return{regex:new RegExp("<".concat(e,"(.*)>"),"g"),replace:"<".concat(e,' class="').concat(_[e],'" $1>'),type:"output"}}),N=function(){return{regex:/<a href="#(.+)">/g,replace:function(e,t){return'<a href="#'.concat(t,'" id="').concat(t,'">')},type:"output"}},A=function(){return{regex:/<p>(###[\w-]+)<\/p>/g,replace:function(e,t){return t},type:"output"}},L=function(e,t){var n=[].concat(Object(O.a)(D),[N,A]);t.convertHljs&&n.push(C.a);var a=new y.a.Converter({customizedHeaderId:!0,disableForced4SpacesIndentedSublists:!0,extensions:n,ghCompatibleHeaderId:t.addHeaderId,headerLevelStart:t.levelHeader,requireSpaceBeforeHeadingText:!0,tables:!0}).makeHtml(e),r=k.execute(a);return w.a.html(r,{indent_size:2})},I={code:"\u041a\u043e\u0434",frame:"\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"},R=Object(g.b)("CHANGE_TEXT"),V=Object(g.b)("CHANGE_TAB"),M=Object(g.b)("TOGGLE_SHOW_SETTINGS"),G=Object(g.b)("CHANGE_LEVEL_TITLE"),W=Object(g.b)("CONVERT_HLJS"),B=Object(g.b)("ADD_HEADER_ID"),J=function(e){return function(t,n){var a=n().settings;t({type:"SAVE_RAW_TEXT",payload:e}),t(R(L(e,a)))}},q={changeText:J},z=Object(v.a)(function(e){return{defaultText:e.defaultText}},q)(E),F=n(593),X=n(596),P=n(248);function U(){var e=Object(m.a)(["\n  cursor: pointer;\n"]);return U=function(){return e},e}var $=b.a.button(U());var K={changeTab:V,toggleShowSettings:M},Q=Object(v.a)(function(e){return{currentTab:e.currentTab}},K)(function(e){var t=e.currentTab,n=e.changeTab,a=e.toggleShowSettings;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"text-center mt-3"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0438\u0437 MD \u0432 HTML"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"}),r.a.createElement("div",{className:"col-6 d-flex flex-row mb-3 ml-auto"},r.a.createElement(F.a,{className:"ml-auto"},Object.keys(I).map(function(e){return r.a.createElement(X.a,{variant:"secondary",active:I[e]===t,onClick:function(e){n(e.target.textContent)},key:I[e]},I[e])})),r.a.createElement($,{className:"btn",type:"button",onClick:function(){return a()}},r.a.createElement(P.a,null)))))}),Y=n(116);function Z(){var e=Object(m.a)(["\n  flex-grow: 1;\n  resize: none;\n"]);return Z=function(){return e},e}var ee=b.a.textarea(Z()),te=function(e){var t=e.text;return r.a.createElement(ee,{readOnly:!0,className:"form-control",value:t})},ne=n(242),ae=n(243),re=document.createElement("style"),ce=document.createElement("style");re.innerText=ne.a,ce.innerText=ae.a;var oe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).frame=r.a.createRef(),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.frame.current.contentWindow.document;e.querySelector("head").appendChild(re),e.querySelector("head").appendChild(ce),e.querySelector("body").innerHTML=this.props.text}},{key:"componentDidUpdate",value:function(){this.frame.current.contentWindow.document.querySelector("body").innerHTML=this.props.text}},{key:"render",value:function(){return r.a.createElement("iframe",{frameBorder:0,width:"100%",height:"100%",title:"result",ref:this.frame})}}]),t}(a.PureComponent),le=function(e){function t(){var e,n,a;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state=(n={},Object(Y.a)(n,I.code,te),Object(Y.a)(n,I.frame,oe),n),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.currentTab,a=this.state[n];return r.a.createElement(r.a.Fragment,null,r.a.createElement(a,{text:t}))}}]),t}(a.Component),ue=Object(v.a)(function(e){return{text:e.text,currentTab:e.currentTab}})(le),ie=n(594),se=n(595),de=function(e){var t=e.show,n=e.settings,a=e.changeSettings,c=e.toggleShowSettings,o=function(e){var t=e.target.name,n=e.target.value;a({name:t,value:n})};return r.a.createElement(ie.a,{show:t,onHide:c},r.a.createElement(ie.a.Header,{closeButton:!0},r.a.createElement(ie.a.Title,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),r.a.createElement(ie.a.Body,null,r.a.createElement(se.a,null,r.a.createElement(se.a.Group,null,r.a.createElement(se.a.Check,{type:"checkbox",label:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c hljs",name:"CONVERT_HLJS",id:"CONVERT_HLJS",value:n.convertHljs,checked:n.convertHljs,onChange:o})),r.a.createElement(se.a.Group,null,r.a.createElement(se.a.Check,{type:"checkbox",label:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u044f\u043a\u043e\u0440\u044c \u043a\u043e \u0432\u0441\u0435\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u043c",name:"ADD_HEADER_ID",id:"ADD_HEADER_ID",value:n.addHeaderId,checked:n.addHeaderId,onChange:o})),r.a.createElement(se.a.Group,null,r.a.createElement(se.a.Label,null,"\u041d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u0441 \u0443\u0440\u043e\u0432\u043d\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430:"),r.a.createElement(se.a.Control,{as:"select",value:n.levelHeader,name:"HEADER_LEVEL",onChange:o},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"))))))},me={toggleShowSettings:M,changeSettings:function(e){var t=e.name,n=e.value;return function(e,a){switch(t){case"CONVERT_HLJS":e(W());break;case"HEADER_LEVEL":e(G(n));break;case"ADD_HEADER_ID":e(B())}var r=a().rawText;e(J(r))}}},be=Object(v.a)(function(e){return{show:e.showSettings,settings:e.settings}},me)(de);function he(){var e=Object(m.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return he=function(){return e},e}var fe=b.a.div(he()),pe=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(fe,{className:"container-fluid"},r.a.createElement(Q,null),r.a.createElement("div",{className:"row flex-grow-1 pb-3"},r.a.createElement("div",{className:"col-6"},r.a.createElement(z,null)),r.a.createElement("div",{className:"col-6 d-flex"},r.a.createElement(ue,null))),r.a.createElement(be,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee,ve=n(187),ge=Object(g.c)({text:"",rawText:"",defaultText:"# \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n\n- \u0421\u043f\u0438\u0441\u043e\u043a\n  1. \u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a\n\n      ```html\n      <div>\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f \u0432\u0451\u0440\u0441\u0442\u043a\u0430</div>\n      ```\n\n      ```js\n      // \u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 JS\n      const sum = (a, b) => {\n        return a + b;\n      }\n      ```\n  2. \u0412\u0442\u043e\u0440\u043e\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\n\n###big-trip\n\n\u0412\u044b\u0448\u0435 - \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u0439. \u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043f\u0440\u043e\u0433\u043e\u043d\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0442\u0438\u043f\u043e\u0433\u0440\u0430\u0444, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438 \u0442\u0438\u0440\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435. \u0422\u0430\u043a\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 HTML \u043a\u043e\u0434 \u043f\u0440\u043e\u0433\u043e\u043d\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0431\u044c\u044e\u0442\u0438\u0444\u0430\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0431\u044b\u043b\u043e \u043a\u0430\u0448\u0438.\n",currentTab:I.code,showSettings:!1,settings:{convertHljs:!1,levelHeader:3,addHeaderId:!1}},(Ee={},Object(Y.a)(Ee,R,function(e,t){return e.text=t.payload,e}),Object(Y.a)(Ee,V,function(e,t){e.currentTab=t.payload}),Object(Y.a)(Ee,M,function(e){e.showSettings=!e.showSettings}),Object(Y.a)(Ee,W,function(e){e.settings.convertHljs=!e.settings.convertHljs}),Object(Y.a)(Ee,G,function(e,t){e.settings.levelHeader=t.payload}),Object(Y.a)(Ee,B,function(e){e.settings.addHeaderId=!e.settings.addHeaderId}),Object(Y.a)(Ee,"SAVE_RAW_TEXT",function(e,t){e.rawText=t.payload}),Ee)),Oe=Object(g.a)({reducer:ge});n(569);o.a.render(r.a.createElement(ve.a,{store:Oe},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[252,1,2]]]);
//# sourceMappingURL=main.26f57c91.chunk.js.map