"use strict";(self.webpackChunkguilospanck_github_io=self.webpackChunkguilospanck_github_io||[]).push([[725],{1725:(e,t,o)=>{o.r(t),o.d(t,{default:()=>I});var i=o(7363),r=o.n(i),l=o(4689);const n="2d3134";var a,c;!function(e){e[e.GITHUB=0]="GITHUB",e[e.TWITTER=1]="TWITTER",e[e.LINKEDIN=2]="LINKEDIN",e[e.MEDIUM=3]="MEDIUM"}(a||(a={})),function(e){e[e.WEBSITE=0]="WEBSITE",e[e.GOLANG_PKG=1]="GOLANG_PKG",e[e.SCRAPPER=2]="SCRAPPER",e[e.BOT=3]="BOT",e[e.APP=4]="APP"}(c||(c={}));const s={[c.APP]:"#1D2226",[c.BOT]:"#F5CB5C",[c.GOLANG_PKG]:"#FF01FB",[c.SCRAPPER]:"#E94F37",[c.WEBSITE]:"#02A9EA"},d={[c.APP]:"app",[c.GOLANG_PKG]:"golang package",[c.BOT]:"bot",[c.SCRAPPER]:"webscrapper",[c.WEBSITE]:"website"};var h=o(8804),p=o(5888);const u=h.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:100}}%;
  background-color: ${e=>{var t;return null!==(t=e.bgcolor)&&void 0!==t?t:p.gK}};

  position: relative;
`,g=h.ZP.div`
  width: ${e=>{var t;return null!==(t=e.width)&&void 0!==t?t:200}}px;
  height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:200}}px;
  border: 2px solid ${p.UA};
  border-radius: 100px;
  background-image: url(${e=>e.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;

  @media(max-width: 270px) {
    width: ${e=>{var t;return null!==(t=e.width/4)&&void 0!==t?t:150}}px;
    height: ${e=>{var t;return null!==(t=e.height/4)&&void 0!==t?t:150}}px;
  }
`,m=h.ZP.header`
  text-align: center;
  font-size: xx-large;
`,b=h.ZP.section`  
  display: flex;
  align-items: center;
  height: 60px;
`,f=h.ZP.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  width: 100%;
  max-height: 130px;
  gap: 2px;

  overflow: hidden;

  @media(max-height: 500px){
    min-height: 70px;
  }
`,w=h.ZP.img`
  width: 100px;
  border-radius: 5px;
  height: 90%;  
`,E=h.ZP.section`
  display: flex;  
  flex-direction: row;
  flex-wrap: wrap;

  word-break: break-all;

  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 30px;
`,x=h.ZP.a`
  text-decoration: none;
  color: ${p.UA};  

  &:hover {
    color: #FFF;
  }
`,v=h.ZP.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  bottom: ${e=>{var t;return null!==(t=e.bottom)&&void 0!==t?t:-1}}vh;
`,k=h.ZP.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1%;
  width: 100%;  

  margin-top: 5%;

  @media(min-width: 1000px) {
    width: 80%;
  }

  @media(min-width: 1640px) {
    width: 60%;
  }
`,P=h.ZP.a`
  width: 250px;
  height: 220px;
  border-radius: 20px;

  margin-bottom: 1%;
  color: ${p.UA};  
  padding: 15px;
  cursor: pointer;
  text-decoration: none;

  background: linear-gradient(135deg,
    ${e=>{var t;return null!==(t=e.bgColor)&&void 0!==t?t:p.gK}} 0px,
    ${p.uJ} 100%);

  &:hover {
    transform: scale(1.05);
  }

  & > #title {
    font-size: 20px;
  }

  & > #subtitle {
    margin-bottom: 15px;
  }

  & > #content {
    width: 100%;
    max-height: 100px;
    word-break: break-word;
    overflow: auto;
  }
`,y=h.ZP.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10%;
`,G=h.ZP.a`
  position: absolute;
  bottom: 20px;
  right: 20px;

  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    transform: rotate(360deg);
  }
`,A="media/me.jpg",T=r().lazy((()=>o.e(961).then(o.bind(o,1961)))),B=r().memo((()=>r().createElement(b,null,r().createElement(l.Z,{steps:(0,i.useMemo)((()=>["Frontend Developer 🎨",1e3,"Backend Developer 🎲",1e3,"FullStack Developer 🦆",1e3,"Mechatronics Engineer ⚙️",1e3]),[]),loop:1/0})))),C=({viewModel:e})=>r().createElement(r().Fragment,null,r().createElement(u,{height:80},r().createElement(g,{title:"photo-container",url:A}),r().createElement(m,{title:"title-name-container"},"Guilherme Rodrigues"),r().createElement(B,null),r().createElement(f,null,Object.values(a).map((t=>((e,t,o,i)=>{const l=i[e],n=null==l?void 0:l.color;if(!n)return;const a=null==l?void 0:l.src(n);return a?r().createElement("a",{key:e,title:l.title,role:"link",href:l.href,target:"_blank",onMouseEnter:()=>t(e),onMouseLeave:()=>o(e),rel:"noreferrer"},r().createElement(w,{src:a})):void 0})(t,e.onMouseEnterBadge,e.onMouseLeaveBadge,e.badgeInfo)))),r().createElement(E,{title:"email-container"},r().createElement(x,{href:"mailto:guilospanck@protonmail.com",target:"_blank"},"guilospanck@protonmail.com"))),r().createElement(v,null,r().createElement(T,{fill:"#2d3134"})),r().createElement(u,{bgcolor:"#2d3134"},r().createElement(m,null,"Projects"),r().createElement(k,null,e.projectsData.map((e=>r().createElement(P,{key:e.url,href:e.url,bgColor:s[e.type]},r().createElement("div",{id:"title"},e.title),r().createElement("div",{id:"subtitle"},d[e.type]),r().createElement("div",{id:"content"},e.content)))))),r().createElement(v,{style:{transform:"rotate(180deg)"},bottom:1},r().createElement(T,{fill:"#2d3134"})),r().createElement(u,{height:20},r().createElement(G,{href:"https://www.linkedin.com/in/guilhermerpereira/"},r().createElement(g,{title:"edge-page-photo",url:A,width:50,height:50})),r().createElement(y,null,r().createElement("h2",null,'"Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety."'),r().createElement("sub",null,"Benjamin Franklin")))),D=()=>{const[e,t]=(0,i.useState)({[a.GITHUB]:{src:e=>`https://img.shields.io/badge/GitHub-100000?color=%23${e}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://github.com/Guilospanck",color:n,title:"GitHub"},[a.TWITTER]:{src:e=>`https://img.shields.io/badge/Twitter-1DA1F2?color=%23${e}&style=for-the-badge&logo=twitter&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://twitter.com/Guilospanck",color:n,title:"Twitter"},[a.LINKEDIN]:{src:e=>`https://img.shields.io/badge/LinkedIn-0077B5?color=%23${e}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://www.linkedin.com/in/guilhermerpereira/",color:n,title:"LinkedIn"},[a.MEDIUM]:{src:e=>`https://img.shields.io/badge/Medium-12100E?color=%23${e}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://medium.com/@guilospanck",color:n,title:"Medium"}}),[o,r]=(0,i.useState)([{title:"Gartic Like App",type:c.APP,content:"Web drawer like Gartic made with React using TypeScript.",url:"https://github.com/Guilospanck/gartic-like-app/"},{title:"Dota2 Counters",type:c.SCRAPPER,content:"A simple Python webscrapper to gather information of heroes' counters from Dotabuff.",url:"https://github.com/Guilospanck/dota2-counters"},{title:"Discord Clone",type:c.APP,content:"Frontend Discord Clone made with TypeScript and React",url:"https://guilospanck.github.io/discord-clone/"},{title:"igocqlx",type:c.GOLANG_PKG,content:"Gocqlx with interfaces.",url:"https://github.com/Guilospanck/igocqlx"},{title:"Conway's Game of Life",type:c.APP,content:"John Conway Game of Life React TypeScript implementation.",url:"https://guilospanck.github.io/Conway-Game-Of-Life-React/"},{title:"gocqlxmock",type:c.GOLANG_PKG,content:"Simple mock for gocqlx",url:"https://github.com/Guilospanck/gocqlxmock"},{title:"Rust Bitcoin",type:c.APP,content:"Bitcoin protocol implementation in Rust.",url:"https://github.com/Guilospanck/rust-bitcoin"},{title:"Dota2 Discord Bot",type:c.BOT,content:"Dota 2 Counters is a Discord bot that will tell you which are the top five (5) heroes that counter the desired one.",url:"https://top.gg/bot/835946840561156096"},{title:"ScyllaDB and Go",type:c.APP,content:"Simple application showing how to work with ScyllaDB and Golang using gocqlx.",url:"https://github.com/Guilospanck/scylladb-and-go"}]);return{onMouseEnterBadge:o=>{const i=Object.assign({},e);i[o].color="bfbdbd",t(i)},onMouseLeaveBadge:o=>{const i=Object.assign({},e);i[o].color=n,t(i)},badgeInfo:e,projectsData:o}},I=()=>{const e=D();return r().createElement(C,{viewModel:e})}}}]);