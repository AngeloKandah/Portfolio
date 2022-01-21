(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),i=n(1),s=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(a.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://angelokandah.github.io/Portfolio/",j="AK.",h="Angelo Kandah",b="Aspiring Front End Engineer",u="I graduated from University of California, Santa Cruz with a Bachelor of Science in Computer Science. I live in California and I am passionate about developing web applications in Javascript and React.",d="https://drive.google.com/file/d/1Tae5SysAtoH50Ly7jSSiNmwCa3IllHV1/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/angelokandah/",github:"https://github.com/AngeloKandah"},p=[{name:"DuplicateTabCloser",description:"A chrome extension for cleaning up any duplicate tabs that you open with configurable options for the user.",stack:["Javascript","Jest","Webpack"],sourceCode:"https://github.com/AngeloKandah/DuplicateTabCloser"},{name:"DuplicateTabCloser Landing Page",description:"A landing page for the DuplicateTabCloser with mobile first in mind.",stack:["React","Javascript","Tailwind"],sourceCode:"https://github.com/AngeloKandah/DuplicateTabCloserLandingPage",livePreview:"https://angelokandah.github.io/DuplicateTabCloserLandingPage/"},{name:"Pok\xe9mon Egg Group Calculator",description:"A calculator for figuring out the fastest path(s) from one egg group to another.",stack:["React","Javascript","Styled-Components"],sourceCode:"https://github.com/AngeloKandah/EggGroupChain",livePreview:"https://angelokandah.github.io/EggGroupChain/"}],O=["JavaScript","React","Tailwind","Styled-Components","HTML","CSS","Git","Jest","Webpack"],f="kandah.angelo@gmail.com",g=n(16),x=n.n(g),k=n(14),v=n.n(k),N=n(18),_=n.n(N),C=n(17),w=n.n(C),S=(n(28),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(a.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,f?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(v.a,{}):Object(s.jsx)(x.a,{})}),Object(s.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(w.a,{}):Object(s.jsx)(_.a,{})})]})}),y=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(S,{})]})}),T=n(11),A=n.n(T),E=n(19),P=n.n(E),J=(n(33),function(){var e=h,t=b,n=u,c=d,a=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["An ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(P.a,{})})]})]})]})}),L=n(7),I=n.n(L),D=n(20),K=n.n(D),R=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(A.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(K.a,{})})]})}),G=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(R,{project:e},I()())}))})]}):null}),H=(n(37),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),B=n(21),z=n.n(B),F=(n(38),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(z.a,{fontSize:"large"})})}):null}),M=(n(39),function(){return f?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(f),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),W=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Template By Raj Shekhar"})})}),U=(n(41),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(y,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(J,{}),Object(s.jsx)(G,{}),Object(s.jsx)(H,{}),Object(s.jsx)(M,{})]}),Object(s.jsx)(F,{}),Object(s.jsx)(W,{})]})});n(42);Object(c.render)(Object(s.jsx)(r,{children:Object(s.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e07bd2be.chunk.js.map