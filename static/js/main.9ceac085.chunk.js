(this.webpackJsonpcoinrocket=this.webpackJsonpcoinrocket||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(17),r=n.n(s),i=(n(76),n(77),n.p+"static/media/Logo.a5140b83.svg"),j=n(117),l=n(104),o=n(118),b=n(39),h=n(105),d=(n(78),n(1));function x(){return Object(d.jsx)(j.a,{bg:"white",expand:"lg",variant:"light",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(j.a.Brand,{as:b.b,to:"/",children:Object(d.jsx)("img",{src:i,height:"96",alt:"coinrocket"})}),Object(d.jsx)(j.a.Toggle,{}),Object(d.jsx)(j.a.Collapse,{className:"justify-content-end",children:Object(d.jsx)(o.a.Link,{href:"https://t.me/CoinRocketChannel",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(h.a,{size:"24",className:"text-dark"})})})]})})}var m,O=n(114),u=n(106),g=n(29),p=n.n(g),f=n(45),v=n(11),y=n(8),k=n(119),N=n(9),w=N.a.a(m||(m=Object(y.a)(["\n  &:hover {\n    text-decoration: none;\n  }\n"])));function F(e){var t=e.promotion;return Object(d.jsx)(w,{href:t.target,target:"_blank",rel:"noreferrer",children:Object(d.jsxs)(k.a,{bg:"transparent",className:"border-0",children:[Object(d.jsx)(k.a.Img,{src:t.image.url,alt:t.title,className:"shadowed"}),Object(d.jsxs)(k.a.Body,{className:"px-0 py-1",children:[Object(d.jsx)("span",{className:"text-muted",style:{fontSize:"14px"},children:t.title}),Object(d.jsx)("p",{className:"text-dark",children:t.subtitle})]})]})})}var z,C=n(30),S="https://api-us-east-1.graphcms.com/v2/ckpwautxo7cgi01wk07vshu8h/master",_=Object(C.gql)(z||(z=Object(y.a)(["\n  query Promotions {\n    promotions {\n      id,\n      title,\n      subtitle,\n      target,\n      image {\n        url\n      }\n    }\n  }\n"])));function L(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];function s(){return(s=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.request)(S,_);case 2:t=e.sent,n=t.promotions,a(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(d.jsx)(d.Fragment,{children:n.length>0?n.map((function(e,t){return Object(d.jsx)(u.a,{xs:6,md:3,className:"mt-3",children:Object(d.jsx)(F,{promotion:e})},t)})):Object(d.jsx)(d.Fragment,{})})}var q,B,T=n(61),A=n(120),I=n(57),E=n(107),J=n(108),P=n(116),D=n(109),G=n(111),K=n(110),M=Object(N.a)(E.a)(q||(q=Object(y.a)(["\n  line-height: 1;\n  padding: 0.32rem;\n  background-color: rgba(22,199,132,0.1);\n  color: rgba(22,199,132,1.0);\n  border: 0;\n\n  &:hover {\n    background-color: rgba(22,199,132,1.0);\n  }\n"]))),Q=Object(N.a)(E.a)(B||(B=Object(y.a)(["\n  line-height: 1;\n  padding: 0.32rem;\n  background-color: rgba(0,136,204,0.1);\n  color: rgba(0,136,204,1.0);\n  border: 0;\n\n  &:hover {\n    background-color: rgba(0,136,204,1.0);\n  }\n"])));function R(e){var t,n=e.text,c=e.badge;return Object(d.jsx)(P.a,{placement:"top",overlay:(t=n,Object(d.jsx)(J.a,Object(I.a)(Object(I.a)({},t),{},{children:n}))),children:c})}function $(e){var t=e.item,n=e.nb,c=e.type;return Object(d.jsxs)(A.a.Item,{as:"li",style:{fontSize:"12px"},className:"border-0 px-0 d-flex justify-content-between align-items-center",children:[Object(d.jsxs)("div",{className:"d-flex align-items-center",children:[Object(d.jsx)("span",{className:"text-muted mr-2",children:n+1}),Object(d.jsx)(D.a,{src:t.image.url,width:"18",height:"18",alt:t.name,roundedCircle:!0}),Object(d.jsx)("strong",{className:"ml-1",children:t.name}),Object(d.jsx)("span",{className:"text-muted ml-1",children:t.symbol}),t.kyc?Object(d.jsx)(R,{text:"KYC",badge:Object(d.jsx)(K.a,{className:"ml-1 text-success",size:16})}):Object(d.jsx)(d.Fragment,{}),t.audit?Object(d.jsx)(R,{text:"Audit",badge:Object(d.jsx)(K.a,{className:"ml-1 text-info",size:16})}):Object(d.jsx)(d.Fragment,{})]}),Object(d.jsxs)("div",{children:["launching_soon"===c?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)(M,{href:"https://poocoin.app/tokens/".concat(t.address),target:"_blank",variant:"success",size:"sm",className:"mr-1",children:Object(d.jsx)(G.a,{size:16})}),Object(d.jsx)(Q,{href:t.telegram,target:"_blank",variant:"success",size:"sm",children:Object(d.jsx)(h.a,{size:16})})]})]})}var U,Y,Z=n(112),H=n(113),V="https://api-us-east-1.graphcms.com/v2/ckpwautxo7cgi01wk07vshu8h/master",W=Object(C.gql)(U||(U=Object(y.a)(["\n  query getCategory($name: String!) {\n    category(where: { name: $name }) {\n      tokens {\n        name\n        symbol\n        address\n        telegram\n        audit\n        kyc\n        image {\n          url\n        }\n        publishedAt\n      }\n    }\n  }\n"])));function X(e){switch(e){case"spotlight":return"Spotlight";case"recently_launched":return"Recently Launched";case"launching_soon":return"Launching Soon";default:return"Unknown Type"}}var ee,te,ne,ce,ae,se=N.a.a(Y||(Y=Object(y.a)(["\n  color: rgb(56, 97, 251, 1);\n  font-size: 12px;\n  font-weight: 600;\n  &:hover {\n    color: rgb(56, 97, 251, 2);\n    cursor: pointer;\n  }\n"])));function re(e){var t=e.tokens,n=e.type,a=Object(c.useState)(!1),s=Object(v.a)(a,2),r=s[0],i=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T.a,{in:r,children:Object(d.jsx)("div",{id:"example-collapse-text",children:t.slice(3,t.length).map((function(e,t){return Object(d.jsx)($,{item:e,nb:t+3,type:n},t)}))})}),Object(d.jsx)(A.a.Item,{className:"d-flex justify-content-center",children:Object(d.jsxs)(se,{className:"d-flex align-items-center",onClick:function(){return i(!r)},"aria-controls":"example-collapse-text","aria-expanded":r,children:[r?Object(d.jsx)(Z.a,{size:16}):Object(d.jsx)(H.a,{size:16}),Object(d.jsx)("span",{className:"pl-1",children:r?"Less":"More"})]})})]})}function ie(e){var t=e.tokens,n=e.type;return Object(d.jsxs)(A.a,{as:"ol",numbered:"true",variant:"flush",children:[t.slice(0,3).map((function(e,t){return Object(d.jsx)($,{item:e,nb:t,type:n},t)})),t.length>3?Object(d.jsx)(re,{tokens:t,type:n}):Object(d.jsx)(d.Fragment,{})]})}function je(e){var t=e.type,n=Object(c.useState)([]),a=Object(v.a)(n,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.request)(V,W,{name:t});case 2:n=e.sent,c=n.category,r(c.tokens);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(d.jsx)(k.a,{className:"shadow-sm",border:"light",children:Object(d.jsxs)(k.a.Body,{children:[Object(d.jsx)(k.a.Title,{children:X(t)}),s.length>0?Object(d.jsx)(ie,{tokens:s,type:t}):Object(d.jsx)(d.Fragment,{})]})})}var le=Object(N.a)(O.a)(ee||(ee=Object(y.a)(["\n  background-color: #F8FAFD\n"]))),oe=N.a.h2(te||(te=Object(y.a)(["\n  font-weight: 300;\n"]))),be=N.a.span(ne||(ne=Object(y.a)(["\n  font-weight: 600;\n"]))),he=N.a.p(ce||(ce=Object(y.a)(["\n  font-size: 24px;\n"]))),de=N.a.a(ae||(ae=Object(y.a)(["\n  color: rgba(0,136,204,1.0);\n  font-weight: 500;\n\n  &:hover {\n    color: rgba(0,136,204,0.5);\n  }\n"])));function xe(){return Object(d.jsx)(le,{className:"p-5 mt-5",children:Object(d.jsx)(l.a,{className:"py-5",children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(u.a,{children:[Object(d.jsxs)(oe,{children:["Be the first to know about ",Object(d.jsx)(be,{children:"new listings"})]}),Object(d.jsx)(he,{className:"text-muted",children:"Announcements on Telegram."}),Object(d.jsx)("div",{className:"mt-4",children:Object(d.jsxs)(de,{href:"https://t.me/coinrocketapp",target:"_blank",className:"d-flex align-items-center",children:[Object(d.jsx)(h.a,{size:24}),Object(d.jsx)("span",{className:"ml-2",children:"coinrocketapp"})]})})]})})})})}var me,Oe,ue,ge=n(115),pe=N.a.a(me||(me=Object(y.a)(["\n  color: #58667e;\n\n  &:hover {\n    color: #1070e0d9;\n  }\n"]))),fe=Object(N.a)(ge.a)(Oe||(Oe=Object(y.a)(["\n  background-color: rgba(0,136,204,0.1);\n  color: rgba(0,136,204,1.0);\n"]))),ve=N.a.li(ue||(ue=Object(y.a)(["\n  font-weight: 600;\n"])));function ye(){return Object(d.jsx)(O.a,{className:"bg-white p-5",children:Object(d.jsx)(l.a,{className:"py-5",children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)("h6",{children:Object(d.jsx)("strong",{children:"Support"})}),Object(d.jsxs)("ul",{className:"list-unstyled pt-2 text-muted",children:[Object(d.jsx)(ve,{className:"d-flex align-items-center my-2",children:Object(d.jsx)(pe,{href:"https://t.me/heycryptobob",target:"_blank",children:"Listing Contact"})}),Object(d.jsxs)(ve,{className:"d-flex align-items-center",children:["FAQ ",Object(d.jsx)(fe,{variant:"info",className:"ml-2",children:"Coming Soon"})]})]})]})})})})}function ke(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(O.a,{className:"mt-2",children:Object(d.jsx)(L,{})}),Object(d.jsxs)(O.a,{className:"mt-2",children:[Object(d.jsx)(u.a,{className:"mt-3",sm:12,lg:4,children:Object(d.jsx)(je,{type:"spotlight"})}),Object(d.jsx)(u.a,{className:"mt-3",sm:12,lg:4,children:Object(d.jsx)(je,{type:"recently_launched"})}),Object(d.jsx)(u.a,{className:"mt-3",sm:12,lg:4,children:Object(d.jsx)(je,{type:"launching_soon"})})]})]}),Object(d.jsx)(xe,{}),Object(d.jsx)(ye,{})]})}var Ne=n(7);var we=function(){return Object(d.jsxs)(b.a,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(Ne.c,{children:Object(d.jsx)(Ne.a,{path:"/",children:Object(d.jsx)(ke,{})})})]})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};new(n(69).a)("G-JC21Z3QG9K").initialize().then((function(e){e.pageview("path"),e.gtag("event","pageview","path")}),(function(e){console.error(e)})),n(70).hotjar.initialize("2452138",6);n(96);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(we,{})}),document.getElementById("root")),Fe()}},[[97,1,2]]]);
//# sourceMappingURL=main.9ceac085.chunk.js.map