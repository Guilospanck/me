"use strict";(self.webpackChunkguilospanck_github_io=self.webpackChunkguilospanck_github_io||[]).push([[725],{1725:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var i=o(7363),r=o.n(i),n=o(4689);const l="2d3134";var a,c;!function(e){e[e.GITHUB=0]="GITHUB",e[e.TWITTER=1]="TWITTER",e[e.LINKEDIN=2]="LINKEDIN",e[e.MEDIUM=3]="MEDIUM"}(a||(a={})),function(e){e[e.WEBSITE=0]="WEBSITE",e[e.GOLANG_PKG=1]="GOLANG_PKG",e[e.SCRAPPER=2]="SCRAPPER",e[e.BOT=3]="BOT",e[e.APP=4]="APP"}(c||(c={}));const s={[c.APP]:"#1D2226",[c.BOT]:"#F5CB5C",[c.GOLANG_PKG]:"#7D80DA",[c.SCRAPPER]:"#E94F37",[c.WEBSITE]:"#02A9EA"},u={[c.APP]:"app",[c.GOLANG_PKG]:"golang package",[c.BOT]:"bot",[c.SCRAPPER]:"webscrapper",[c.WEBSITE]:"website"};var p=o(8804),h=o(5888);const d=p.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:100}}%;
  background-color: ${e=>{var t;return null!==(t=e.bgcolor)&&void 0!==t?t:h.gK}};

  position: relative;
`,m=p.ZP.div`
  width: ${e=>{var t;return null!==(t=e.width)&&void 0!==t?t:200}}px;
  height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:200}}px;
  border: 2px solid ${h.UA};
  border-radius: 100px;
  background-image: url(${e=>e.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;

  @media(max-width: 270px) {
    width: ${e=>{var t;return null!==(t=e.width/4)&&void 0!==t?t:150}}px;
    height: ${e=>{var t;return null!==(t=e.height/4)&&void 0!==t?t:150}}px;
  }
`,g=p.ZP.header`
  text-align: center;
  font-size: xx-large;
`,b=p.ZP.section`  
  display: flex;
  align-items: center;
  height: 60px;
`,f=p.ZP.section`
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
`,w=p.ZP.img`
  width: 100px;
  border-radius: 5px;
  height: 90%;  
`,E=p.ZP.section`
  display: flex;  
  flex-direction: row;
  flex-wrap: wrap;

  word-break: break-all;

  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 30px;
`,x=p.ZP.a`
  text-decoration: none;
  color: ${h.UA};  

  &:hover {
    color: #FFF;
  }
`,k=p.ZP.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  bottom: ${e=>{var t;return null!==(t=e.bottom)&&void 0!==t?t:-1}}vh;
`,y=p.ZP.section`
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
`,v=p.ZP.a`
  width: 250px;
  height: 220px;
  border-radius: 20px;

  margin-bottom: 1%;
  color: ${h.UA};  
  padding: 15px;
  cursor: pointer;
  text-decoration: none;

  background: linear-gradient(135deg,
    ${e=>{var t;return null!==(t=e.bgColor)&&void 0!==t?t:h.gK}} 0px,
    ${h.uJ} 100%);

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
`,P=p.ZP.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10%;
`,G=p.ZP.a`
  position: absolute;
  bottom: 20px;
  right: 20px;

  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    transform: rotate(360deg);
  }
`,A="media/me.jpg",S=r().lazy((()=>o.e(961).then(o.bind(o,1961)))),T=r().memo((()=>r().createElement(b,null,r().createElement(n.Z,{steps:(0,i.useMemo)((()=>["Frontend Developer 🎨",1e3,"Backend Developer 🎲",1e3,"FullStack Developer 🦆",1e3,"Mechatronics Engineer ⚙️",1e3]),[]),loop:1/0})))),B=({viewModel:e})=>r().createElement(r().Fragment,null,r().createElement(d,{height:80},r().createElement(m,{title:"photo-container",url:A}),r().createElement(g,{title:"title-name-container"},"Guilherme Pereira"),r().createElement(T,null),r().createElement(f,null,Object.values(a).map((t=>((e,t,o,i)=>{const n=i[e],l=null==n?void 0:n.color;if(!l)return;const a=null==n?void 0:n.src(l);return a?r().createElement("a",{key:e,title:n.title,role:"link",href:n.href,target:"_blank",onMouseEnter:()=>t(e),onMouseLeave:()=>o(e),rel:"noreferrer"},r().createElement(w,{src:a})):void 0})(t,e.onMouseEnterBadge,e.onMouseLeaveBadge,e.badgeInfo)))),r().createElement(E,{title:"email-container"},r().createElement(x,{href:"mailto:guilospanck@protonmail.com",target:"_blank"},"guilospanck@protonmail.com"))),r().createElement(k,null,r().createElement(S,{fill:"#2d3134"})),r().createElement(d,{bgcolor:"#2d3134"},r().createElement(g,null,"Projects"),r().createElement(y,null,e.projectsData.map((e=>r().createElement(v,{key:e.url,href:e.url,bgColor:s[e.type],target:"_blank"},r().createElement("div",{id:"title"},e.title),r().createElement("div",{id:"subtitle"},u[e.type]),r().createElement("div",{id:"content"},e.content)))))),r().createElement(k,{style:{transform:"rotate(180deg)"},bottom:1},r().createElement(S,{fill:"#2d3134"})),r().createElement(d,{height:20},r().createElement(G,{href:"https://www.linkedin.com/in/guilhermerpereira/"},r().createElement(m,{title:"edge-page-photo",url:A,width:50,height:50})),r().createElement(P,null,r().createElement("h2",null,'"Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety."'),r().createElement("sub",null,"Benjamin Franklin")))),I=()=>{const[e,t]=(0,i.useState)({[a.GITHUB]:{src:e=>`https://img.shields.io/badge/GitHub-100000?color=%23${e}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://github.com/Guilospanck",color:l,title:"GitHub"},[a.TWITTER]:{src:e=>`https://img.shields.io/badge/Twitter-1DA1F2?color=%23${e}&style=for-the-badge&logo=twitter&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://twitter.com/Guilospanck",color:l,title:"Twitter"},[a.LINKEDIN]:{src:e=>`https://img.shields.io/badge/LinkedIn-0077B5?color=%23${e}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://www.linkedin.com/in/guilhermerpereira/",color:l,title:"LinkedIn"},[a.MEDIUM]:{src:e=>`https://img.shields.io/badge/Medium-12100E?color=%23${e}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://medium.com/@guilospanck",color:l,title:"Medium"}}),[o]=(0,i.useState)([{title:"Nostr",type:c.APP,content:"Nostr protocol written in Rust.",url:"https://github.com/Guilospanck/nostr"},{title:"NES Emulator Rust",type:c.APP,content:"A NES emulator written in Rust.",url:"https://github.com/Guilospanck/nes-emulator-rust"},{title:"Rust Bitcoin",type:c.APP,content:"Bitcoin protocol implementation in Rust.",url:"https://github.com/Guilospanck/rust-bitcoin"},{title:"Schnorr",type:c.APP,content:"Example of how to sign and verify Schnorr signatures as of BIP340. Written in Rust.",url:"https://github.com/Guilospanck/schnorr"},{title:"Conway's Game of Life",type:c.WEBSITE,content:"John Conway Game of Life React TypeScript implementation.",url:"https://guilospanck.github.io/Conway-Game-Of-Life-React/"},{title:"Discord Clone",type:c.WEBSITE,content:"Frontend Discord Clone made with TypeScript and React",url:"https://guilospanck.github.io/discord-clone/"},{title:"Gartic Like App",type:c.WEBSITE,content:"Web drawer like Gartic made with React using TypeScript.",url:"https://github.com/Guilospanck/gartic-like-app/"},{title:"Medium Observability Stack",type:c.APP,content:"Sample files and code configs for the Medium article.",url:"https://github.com/Guilospanck/medium-observability-stack"},{title:"ScyllaDB and Go",type:c.APP,content:"Simple application showing how to work with ScyllaDB and Golang using gocqlx.",url:"https://github.com/Guilospanck/scylladb-and-go"},{title:"igocqlx",type:c.GOLANG_PKG,content:"Gocqlx with interfaces.",url:"https://github.com/Guilospanck/igocqlx"},{title:"gocqlxmock",type:c.GOLANG_PKG,content:"Simple mock for gocqlx",url:"https://github.com/Guilospanck/gocqlxmock"},{title:"Dota2 Discord Bot",type:c.BOT,content:"Dota 2 Counters is a Discord bot that will tell you which are the top five (5) heroes that counter the desired one.",url:"https://top.gg/bot/835946840561156096"},{title:"Dota2 Counters",type:c.SCRAPPER,content:"A simple Python webscrapper to gather information of heroes' counters from Dotabuff.",url:"https://github.com/Guilospanck/dota2-counters"}]);return{onMouseEnterBadge:o=>{const i=Object.assign({},e);i[o].color="bfbdbd",t(i)},onMouseLeaveBadge:o=>{const i=Object.assign({},e);i[o].color=l,t(i)},badgeInfo:e,projectsData:o}},C=()=>{const e=I();return r().createElement(B,{viewModel:e})}}}]);