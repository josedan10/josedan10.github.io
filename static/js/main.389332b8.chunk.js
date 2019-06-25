(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t){},128:function(e,t){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(65),c=a.n(r),s=(a(90),a(12)),i=a(13),o=a(15),m=a(14),u=a(16),d=a(23),p=a(21),b=a(4),E=a(66),h=a.n(E),f=a(67),g=a.n(f),v=a(68),N=a.n(v),y=a(69),j=a.n(y),k=a(7),_=a(33),O=a.n(_),w=function(e){var t="{ Making a new world with code }";return l.a.createElement("div",{id:"Home",className:"banner home flex-center"},l.a.createElement(j.a,{className:"particles",params:{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#dbdbdb"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},size:{value:3,random:!0}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"}}},retina_detect:!0}}),l.a.createElement("h1",{className:"text-code"},window.innerWidth<768?l.a.createElement("span",{"data-aos":"fade-up"},t):l.a.createElement(N.a,{startDelay:1e3},t)),l.a.createElement("a",{"data-scroll":!0,href:"#About_Me",onClick:function(e){return e.preventDefault()}},l.a.createElement(k.a,{className:"arrowDownIcon link arrowDownLink",src:O.a})))},x=a(73),S=a.n(x),C=function(e){return l.a.createElement("section",{id:"About_Me",className:"container"},l.a.createElement("h2",null,"About Me"),l.a.createElement("div",{className:"content flex-around"},l.a.createElement("img",{alt:"mosaic",src:S.a}),l.a.createElement("article",null,"Hello, my name is Jos\xe9 Daniel. I'm a student, guitar player, singer, developer, athlete and video games lover.",l.a.createElement("br",null),l.a.createElement("br",null),"Everything I do, I do it because I love doing it. Much of my time is spent experimenting and learning new trends to always offer the best to those who need my services.",l.a.createElement("br",null),l.a.createElement("br",null),"I do not consider myself a designer, because the art of design is something that requires a lot of time and dedication to understand it, but I do my best to offer visually pleasing solutions to my clients using some of the knowledge I have acquired by doing a little research on my own.",l.a.createElement("br",null),l.a.createElement("br",null),"Whenever I can I try to learn something new, that can help me to continue growing as an integral professional, capable of providing solutions to a wide range of needs.")))},I=a(2),D=a(34),A=a.n(D);a(112).config();var M=Object({NODE_ENV:"production",PUBLIC_URL:""}),F=M.NODE_ENV,W=M.BASE_URL,T="production"!==F?"http://localhost:3000":W||"https://josedan10.github.io",q=a(74),L=a.n(q),P=a(75),B=a.n(P),J=a(76),U=a.n(J),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;A.a.get("".concat(T,"/data.json")).then(function(t){return e.setState(function(e){return Object(I.a)({},e,{data:t.data.services})})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("section",{id:"Services",className:"container"},l.a.createElement("h2",null,"Services"),l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"200",className:"content flex-around"},e&&Object.keys(e).map(function(t){var a,n=t.charAt(0).toUpperCase()+t.slice(1),r=e[t].map(function(e,a){return l.a.createElement("p",{key:t+a},e)});switch(t){case"design":a=l.a.createElement("img",{src:U.a,alt:"bulb design"});break;case"development":a=l.a.createElement("img",{src:B.a,alt:"semicolon development"});break;default:a=l.a.createElement("img",{src:L.a,alt:"lens seo"})}return l.a.createElement("div",{key:t,className:"service-container flex-center"},l.a.createElement("div",{className:"front flex-center-vertical"},a,l.a.createElement("h3",null,n)),l.a.createElement("div",{className:"back flex-center-vertical"},r))})))}}]),t}(l.a.Component),H=a(6),z=a(77),Q=a.n(z),G=(a(78),a(24)),R=a.n(G),$=function(e){var t=e.element,a=e.transition;return t?l.a.createElement("div",{className:"code-item flex-center "+a},l.a.createElement("div",{className:"code-item__icon flex-center-vertical"},l.a.createElement("img",{"data-aos":"zoom-in",alt:t.name+" icon",className:"code-item__icon__image",src:"/images/".concat(t.icon)})),l.a.createElement("div",{className:"code-item__description"},t.description.map(function(e,a){return l.a.createElement("p",{key:t.name+a},Q()(e))}))):"Loading..."},K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:{languages:[],databases:[],stacks:[]},active:["languages",0],transition:"hide"},a.hide=a.hide.bind(Object(H.a)(Object(H.a)(a))),a.appear=a.appear.bind(Object(H.a)(Object(H.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(e){return Object(I.a)({},e,{transition:"appear"})})}},{key:"hide",value:function(){this.setState(function(e){return Object(I.a)({},e,{transition:"hide"})})}},{key:"appear",value:function(){this.setState(function(e){return Object(I.a)({},e,{transition:"appear"})})}},{key:"componentWillMount",value:function(){var e=this;A.a.get("".concat(T,"/data.json")).then(function(t){return e.setState(function(e){return Object(I.a)({},e,{data:t.data.code})})}).catch(function(e){return console.error(e)})}},{key:"setActive",value:function(e,t){var a=this;this.hide(),setTimeout(function(){a.setState(function(a){return Object(I.a)({},a,{active:[e,t]})})},200),setTimeout(this.appear,500)}},{key:"render",value:function(){var e=this,t=this.state.active[0],a=this.state.active[1],n=this.state.data;return l.a.createElement("section",{id:"Code"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Code"),l.a.createElement("div",{className:"content grid-container"},l.a.createElement("aside",{className:"list"},Object.keys(n).map(function(r,c){return l.a.createElement("div",{key:r+c,className:"list__section"},l.a.createElement("h4",{className:"list__section__name"},r.charAt(0).toUpperCase()+r.slice(1)),l.a.createElement("ul",{className:"list__section__elements"},n[r].map(function(c,s){return l.a.createElement("li",{className:n[t][a]===c?"list__section__element active":"list__section__element",key:c.name,onClick:function(t){return e.setActive(r,s)}},c.name,c.subItems&&l.a.createElement("ul",null,c.subItems.map(function(e,t){return l.a.createElement("li",{key:e+t},e)})))})))})),l.a.createElement($,{transition:this.state.transition,element:n[t][a]}))))}}]),t}(l.a.Component),X=a(84),Y=a(28),Z=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.completeds,r=e.errors,c=e.status,s=e.msg,i=Object.keys(n).filter(function(e){return n[e]}).length;return l.a.createElement("form",{"data-aos":"fade-left","data-aos-delay":"200",className:"console",onKeyDown:a},l.a.createElement("b",{className:"blue"},"sendMessage("),l.a.createElement("div",{className:"input-group"},"\xa0\xa0",l.a.createElement("label",{htmlFor:"name",className:"blue"},"name: "),"\xa0\xa0\xa0\xa0",l.a.createElement("input",{id:"name",name:"name",onChange:function(e){return t(e.target)},type:"text",placeholder:"Jose"})),l.a.createElement("div",{className:"input-group"},"\xa0\xa0",l.a.createElement("label",{htmlFor:"lastname",className:"blue"},"lastname: "),l.a.createElement("input",{id:"lastname",name:"lastname",onChange:function(e){return t(e.target)},type:"text",placeholder:"Quintero"})),l.a.createElement("div",{className:"input-group"},"\xa0\xa0",l.a.createElement("label",{htmlFor:"email",className:"blue"},"email: "),"\xa0\xa0\xa0",l.a.createElement("input",{id:"email",name:"email",onChange:function(e){return t(e.target)},type:"email",placeholder:"user@mail.com"})),l.a.createElement("div",{className:"input-group"},"\xa0\xa0",l.a.createElement("label",{htmlFor:"phone",className:"blue"},"phone: "),"\xa0\xa0\xa0",l.a.createElement("input",{id:"phone",name:"phone",onChange:function(e){return t(e.target)},type:"tel",pattern:"[0-9]{1,3}-[0-9]{10}",placeholder:"58-4122353124"})),l.a.createElement("div",{className:"input-group"},"\xa0\xa0",l.a.createElement("label",{htmlFor:"subject",className:"blue"},"subject: "),"\xa0",l.a.createElement("input",{id:"subject",name:"subject",onChange:function(e){return t(e.target)},type:"text",placeholder:"Web responsive"})),l.a.createElement("div",{className:"input-group"},"\xa0\xa0",l.a.createElement("label",{htmlFor:"message",className:"blue"},"message: "),"\xa0",l.a.createElement("textarea",{id:"message",name:"message",onChange:function(e){return t(e.target)},type:"text",placeholder:"Tell me your idea..."})),l.a.createElement("b",{className:"blue"},")"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"bold blue"},"Please, press enter to send the message..."),l.a.createElement("br",null),l.a.createElement("p",{className:"blue"},i,"/6 completed fields"),l.a.createElement("div",{className:function(){switch(c){case"Error":return"red";case"Sent contact request":return"green";default:return"blue"}}()},l.a.createElement("b",null,"Status: "),c),r.length>0?r.map(function(e,t){return l.a.createElement("p",{key:e+t,className:"red"},e)}):"",s||"")},ee=a(43);ee.init("user_LEWwWousyJSr9c2tm9kzM");var te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:{name:"",lastname:"",email:"",phone:"",subject:"",message:""},status:"In progress",errors:[],completeds:{},msg:null},a.handleChange=a.handleChange.bind(Object(H.a)(Object(H.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(H.a)(Object(H.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(function(t){return Object(I.a)({},t,{data:Object(I.a)({},t.data,Object(Y.a)({},e.name,e.value)),completeds:Object(I.a)({},t.completeds,Object(Y.a)({},e.name,""!==e.value.trim()))})})}},{key:"isNotEmptyFields",value:function(e){var t=!1;return Object.keys(e).forEach(function(a){""===e[a].trim()&&(t=!0)}),!t}},{key:"isValidFields",value:function(e){var t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.email),a=/[0-9]{1,3}-[0-9]{10}/.test(e.phone);return t&&a}},{key:"handleSubmit",value:function(e){if(13===e.keyCode){e.preventDefault();var t=this;if(t.isNotEmptyFields(t.state.data)||t.setState(function(e){return Object(I.a)({},e,{errors:["Some fields are empty. Please fill all fields"],status:"Error"})}),t.isValidFields(t.state.data)||t.setState(function(e){return Object(I.a)({},e,{errors:[].concat(Object(X.a)(e.errors),["Invalid format in email or phone"]),status:"Error"})}),!t.isValidFields(t.state.data)||!t.isNotEmptyFields(t.state.data))return void setTimeout(function(){t.setState(function(e){return Object(I.a)({},e,{errors:[]})})},9e3);t.setState(function(e){return Object(I.a)({},e,{errors:[],status:"Sending message..."})},function(){ee.send("gmail","contact-template",Object(I.a)({},t.state.data)).then(function(e){console.log(e),t.setState(function(e){return Object(I.a)({},e,{status:"Sent contact request",msg:l.a.createElement("p",{className:"blue"},"Thanks!")})})}).catch(function(e){console.log(e),t.setState(function(e){return Object(I.a)({},e,{status:"Error",msg:l.a.createElement("p",{className:"red"},"Error sending contact request.")})})})})}}},{key:"render",value:function(){return l.a.createElement("div",{id:"Contact",className:"container"},l.a.createElement("h2",null,"Contact"),l.a.createElement("div",{className:"content flex-center"},l.a.createElement("div",{className:"schema hideOnTablet"},l.a.createElement("pre",null,l.a.createElement("code",null,l.a.createElement("span",{className:"blue"},"function ",l.a.createElement("span",{className:"bold"},"sendMessage "),"("),l.a.createElement("br",null),"\xa0\xa0","<name>,"," ",l.a.createElement("br",null),"\xa0\xa0","<lastname>,"," ",l.a.createElement("br",null),"\xa0\xa0","<email>,"," ",l.a.createElement("br",null),"\xa0\xa0","<phone>,"," ",l.a.createElement("br",null),"\xa0\xa0","<subject>,"," ",l.a.createElement("br",null),"\xa0\xa0","<message>"," ",l.a.createElement("br",null),l.a.createElement("span",{className:"blue"},") ","{"," ")," ",l.a.createElement("br",null),"\xa0\xa0",l.a.createElement("span",{className:"blue"},l.a.createElement("span",{className:"bold"},"if "),"(")," ",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","name"," ",l.a.createElement("span",{className:"blue"},"!==")," ",'"" &&'," ",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","lastname"," ",l.a.createElement("span",{className:"blue"},"!==")," ",'"" &&'," ",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","email"," ",l.a.createElement("span",{className:"blue"},"!==")," ",'"" &&'," ",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","phone"," ",l.a.createElement("span",{className:"blue"},"!==")," ",'"" &&'," ",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","subject"," ",l.a.createElement("span",{className:"blue"},"!==")," ",'"" &&'," ",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","message"," ",l.a.createElement("span",{className:"blue"},"!==")," ",'""'," ",l.a.createElement("br",null),"\xa0\xa0",l.a.createElement("span",{className:"blue"},") ",l.a.createElement("span",{className:"bold"},"console.log"),'("Sent message") ')," ",l.a.createElement("br",null),"\xa0\xa0",l.a.createElement("span",{className:"blue"},l.a.createElement("span",{className:"bold"},"else "),l.a.createElement("span",{className:"bold"},"console.log"),'("Error sending message")')," ",l.a.createElement("br",null),l.a.createElement("span",{className:"blue"},"}")))),l.a.createElement(Z,{completeds:this.state.completeds,errors:this.state.errors,status:this.state.status,msg:this.state.msg,handleSubmit:this.handleSubmit,handleChange:this.handleChange})))}}]),t}(l.a.Component),ae=function(e){return l.a.createElement("div",{id:"main"},l.a.createElement(w,null),l.a.createElement(C,null),l.a.createElement(V,null),l.a.createElement(K,null),l.a.createElement(te,null))},ne=function(e){return l.a.createElement("h1",null,"Portfolio")},le=function(){return l.a.createElement("div",null,"This is my blog")},re=a(79),ce=a.n(re),se=a(80),ie=a.n(se),oe=["Home","About_Me","Services","Code","Contact"],me=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={open:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggleState",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t=l.a.createElement("div",{className:"menuIcon flex-center",onClick:function(t){t.preventDefault(),e.toggleState()}},l.a.createElement(k.a,{className:"point-1",src:R.a}),l.a.createElement(k.a,{className:"point-2",src:R.a}),l.a.createElement(k.a,{className:"point-3",src:R.a})),a=oe.map(function(t,a){return l.a.createElement("li",null,"Portfolio"!==t?l.a.createElement("a",{"data-scroll":!0,href:"/#"+t,key:t+a,className:"nav-link flex-center",onClick:function(t){e.toggleState(),t.preventDefault()}},a!==oe.length-1?t+",":t):l.a.createElement(d.b,{key:t+a,className:"nav-link flex-center",to:"/"+t},t,","))}),n=l.a.createElement("div",{className:"menuArray flex-center",onClick:function(t){return e.toggleState()}},l.a.createElement("ul",{className:"flex-around"},a));return l.a.createElement("nav",{className:this.state.open?"flex-center open":"flex-center closed",onClick:function(t){return e.toggleState()}},l.a.createElement(k.a,{className:"bracket-open",src:ce.a}),n,t,l.a.createElement(k.a,{className:"bracket-close",src:ie.a}))}}]),t}(l.a.Component),ue=a(83),de=a.n(ue),pe=[{name:"Instagram",url:"https://instagram.com/",username:"josedanqf"},{name:"Github",url:"https://github.com/",username:"josedan10"},{name:"LinkedIn",url:"https://linkedin.com/in/",username:"jose-daniel-quintero-figueroa-a9b96813b"},{name:"Twitter",url:"https://twitter.com/",username:"josedan_music"}],be=function(e){var t=l.a.createElement("ul",{className:"navigation__container flex-center-vertical"},oe.map(function(e){return"Portfolio"!==e?l.a.createElement("li",{key:e,className:"navigation__container__element"},l.a.createElement("a",{href:e,"data-scroll":!0,className:"navigation__container__element__link"},e)):l.a.createElement("li",{key:e,className:"navigation__container__element"},l.a.createElement(d.b,{className:"navigation__container__element__link",to:e},e))}));return l.a.createElement("footer",{className:"grid-container"},l.a.createElement("div",{className:"brand-container flex-center-vertical"},l.a.createElement("img",{className:"logo",alt:"josedan10 logo",src:de.a}),l.a.createElement("p",{className:"blue bold"},"{ Making a new world with code }")),l.a.createElement("div",{className:"navigation hideOnSm"},t),l.a.createElement("div",{className:"social flex-center-vertical"},l.a.createElement("h4",null,"Follow me!"),l.a.createElement("div",{className:"social__links flex-around"},pe.map(function(e){return l.a.createElement("a",{key:e.url,target:"_blankAdding",href:e.url+e.username,className:"flex-center social__links__link"},l.a.createElement("img",{src:"/images/".concat(e.name,".svg"),alt:e.name}))}))),l.a.createElement("p",{className:"blue credits"},"Powered with \ud83d\udc97 by\xa0",l.a.createElement("a",{className:"blue bold",href:"https://github.com"},"GitHub"),". All rights reserved \xa9 2019. Designed and developed by\xa0",l.a.createElement("span",{className:"bold"},"Jos\xe9 Quintero")))};a(152);h.a.init();new g.a('a[href*="#"]',{easing:"easeInQuad",speed:100,speedAsDuration:!1});var Ee=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{history:Object(b.a)()},l.a.createElement("header",null,l.a.createElement(me,null)),l.a.createElement("div",{className:"App"},l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/blog",component:le}),l.a.createElement(p.a,{exact:!0,path:"/portfolio",component:ne}),l.a.createElement(p.a,{path:"/",component:ae}))),l.a.createElement(be,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,a){e.exports=a.p+"static/media/point.51d139db.svg"},33:function(e,t,a){e.exports=a.p+"static/media/arrowDown.83a77387.svg"},73:function(e,t,a){e.exports=a.p+"static/media/meMosaic.17d13e39.svg"},74:function(e,t,a){e.exports=a.p+"static/media/lens.7bdc35e0.svg"},75:function(e,t,a){e.exports=a.p+"static/media/semicolon.d565d3f7.svg"},76:function(e,t,a){e.exports=a.p+"static/media/bulb.27f6a045.svg"},78:function(e,t,a){e.exports=a.p+"static/media/arrowUp.3bd410bb.svg"},79:function(e,t,a){e.exports=a.p+"static/media/openBracket.44cc5c92.svg"},80:function(e,t,a){e.exports=a.p+"static/media/closeBracket.35050676.svg"},83:function(e,t,a){e.exports=a.p+"static/media/logo.f6a26656.svg"},85:function(e,t,a){e.exports=a(153)},90:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.389332b8.chunk.js.map