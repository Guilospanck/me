"use strict";(self.webpackChunkguilospanck_github_io=self.webpackChunkguilospanck_github_io||[]).push([[725],{1725:(e,t,o)=>{o.r(t),o.d(t,{default:()=>N});var i=o(7363),n=o.n(i),r=o(4689);const l="2d3134";var a,c;!function(e){e[e.GITHUB=0]="GITHUB",e[e.TWITTER=1]="TWITTER",e[e.LINKEDIN=2]="LINKEDIN",e[e.MEDIUM=3]="MEDIUM"}(a||(a={})),function(e){e[e.WEBSITE=0]="WEBSITE",e[e.GOLANG_PKG=1]="GOLANG_PKG",e[e.SCRAPPER=2]="SCRAPPER",e[e.BOT=3]="BOT",e[e.APP=4]="APP",e[e.BITCOIN=5]="BITCOIN"}(c||(c={}));const s={[c.APP]:"#1D2226",[c.BOT]:"#F5CB5C",[c.GOLANG_PKG]:"#7D80DA",[c.SCRAPPER]:"#E94F37",[c.WEBSITE]:"#02A9EA",[c.BITCOIN]:"#f7931a"},p={[c.APP]:"app",[c.GOLANG_PKG]:"golang package",[c.BOT]:"bot",[c.SCRAPPER]:"webscrapper",[c.WEBSITE]:"website",[c.BITCOIN]:"btc related"};var u=o(8804),h=o(5888);const d=u.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:100}}%;
  background-color: ${e=>{var t;return null!==(t=e.bgcolor)&&void 0!==t?t:h.gK}};

  position: relative;
`,g=u.ZP.div`
  width: ${e=>{var t;return null!==(t=e.width)&&void 0!==t?t:200}}px;
  height: ${e=>{var t;return null!==(t=e.height)&&void 0!==t?t:200}}px;
  border: 2px solid ${h.UA};
  border-radius: 100px;
  background-image: url(${e=>e.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;

  @media (max-width: 270px) {
    width: ${e=>{var t;return null!==(t=e.width/4)&&void 0!==t?t:150}}px;
    height: ${e=>{var t;return null!==(t=e.height/4)&&void 0!==t?t:150}}px;
  }
`,m=u.ZP.header`
  text-align: center;
  font-size: xx-large;
`,b=u.ZP.section`
  display: flex;
  align-items: center;
  height: 60px;
`,f=u.ZP.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  width: 100%;
  max-height: 130px;
  gap: 2px;

  overflow: hidden;

  @media (max-height: 500px) {
    min-height: 70px;
  }
`,E=u.ZP.img`
  width: 100px;
  border-radius: 5px;
  height: 90%;
`,w=u.ZP.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  word-break: break-all;

  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 30px;
`,y=(0,u.ZP)(w)``,k=u.ZP.a`
  text-decoration: none;
  color: ${h.UA};

  &:hover {
    color: #fff;
  }
`,x=(0,u.ZP)(k)``,v=u.ZP.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  bottom: ${e=>{var t;return null!==(t=e.bottom)&&void 0!==t?t:-1}}vh;
`,P=u.ZP.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1%;
  width: 100%;

  margin-top: 5%;

  @media (min-width: 1000px) {
    width: 80%;
  }

  @media (min-width: 1640px) {
    width: 60%;
  }
`,G=u.ZP.a`
  width: 250px;
  height: 220px;
  border-radius: 20px;

  margin-bottom: 1%;
  color: ${h.UA};
  padding: 15px;
  cursor: pointer;
  text-decoration: none;

  background: linear-gradient(
    135deg,
    ${e=>{var t;return null!==(t=e.bgColor)&&void 0!==t?t:h.gK}} 0px,
    ${h.uJ} 100%
  );

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
`,I=u.ZP.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10%;
`,T=u.ZP.a`
  position: absolute;
  bottom: 20px;
  right: 20px;

  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    transform: rotate(360deg);
  }
`,B="media/me.jpg",C=n().lazy((()=>o.e(961).then(o.bind(o,1961)))),A=n().memo((()=>n().createElement(b,null,n().createElement(r.Z,{steps:(0,i.useMemo)((()=>["Frontend Developer 🎨",1e3,"Backend Developer 🎲",1e3,"FullStack Developer 🦆",1e3,"Mechatronics Engineer ⚙️",1e3]),[]),loop:1/0})))),S=({viewModel:e})=>n().createElement(n().Fragment,null,n().createElement(d,{height:80},n().createElement(g,{title:"photo-container",url:B}),n().createElement(m,{title:"title-name-container"},"Guilherme Pereira"),n().createElement(A,null),n().createElement(f,null,Object.values(a).map((t=>((e,t,o,i)=>{const r=i[e],l=null==r?void 0:r.color;if(!l)return;const a=null==r?void 0:r.src(l);return a?n().createElement("a",{key:e,title:r.title,role:"link",href:r.href,target:"_blank",onMouseEnter:()=>t(e),onMouseLeave:()=>o(e),rel:"noreferrer"},n().createElement(E,{src:a})):void 0})(t,e.onMouseEnterBadge,e.onMouseLeaveBadge,e.badgeInfo)))),n().createElement(y,{title:"personal-notes-container"},n().createElement(x,{href:"https://guilospanck.github.io/notes/",target:"_blank"},"Personal notes")),n().createElement(w,{title:"email-container"},n().createElement(k,{href:"mailto:guilospanck@protonmail.com",target:"_blank"},"guilospanck@protonmail.com"))),n().createElement(v,null,n().createElement(C,{fill:"#2d3134"})),n().createElement(d,{bgcolor:"#2d3134"},n().createElement(m,null,"Projects"),n().createElement(P,null,e.projectsData.map((e=>n().createElement(G,{key:e.url,href:e.url,bgColor:s[e.type],target:"_blank"},n().createElement("div",{id:"title"},e.title),n().createElement("div",{id:"subtitle"},p[e.type]),n().createElement("div",{id:"content"},e.content)))))),n().createElement(v,{style:{transform:"rotate(180deg)"},bottom:1},n().createElement(C,{fill:"#2d3134"})),n().createElement(d,{height:20},n().createElement(T,{href:"https://www.linkedin.com/in/guilhermerpereira/"},n().createElement(g,{title:"edge-page-photo",url:B,width:50,height:50})),n().createElement(I,null,n().createElement("h2",null,'"Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety."'),n().createElement("sub",null,"Benjamin Franklin")))),D=()=>{const[e,t]=(0,i.useState)({[a.GITHUB]:{src:e=>`https://img.shields.io/badge/GitHub-100000?color=%23${e}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://github.com/Guilospanck",color:l,title:"GitHub"},[a.TWITTER]:{src:e=>`https://img.shields.io/badge/Twitter-1DA1F2?color=%23${e}&style=for-the-badge&logo=x&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://twitter.com/Guilospanck",color:l,title:"Twitter"},[a.LINKEDIN]:{src:e=>`https://img.shields.io/badge/LinkedIn-0077B5?color=%23${e}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://www.linkedin.com/in/guilhermerpereira/",color:l,title:"LinkedIn"},[a.MEDIUM]:{src:e=>`https://img.shields.io/badge/Medium-12100E?color=%23${e}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://medium.com/@guilospanck",color:l,title:"Medium"}}),[o]=(0,i.useState)([{title:"FlashCards",type:c.APP,content:"A simple and effective Flash Cards application.",url:"https://flashcards.guilospanck.com/"},{title:"Nostr",type:c.BITCOIN,content:"Nostr protocol written in Rust.",url:"https://github.com/Guilospanck/nostr"},{title:"Rust Bitcoin",type:c.BITCOIN,content:"Bitcoin protocol implementation in Rust.",url:"https://github.com/Guilospanck/rust-bitcoin"},{title:"murray-rs",type:c.BITCOIN,content:"This powerful library enables developers to quickly incorporate bitcoin data and interactions within their applications.",url:"https://github.com/Guilospanck/murray-rs"},{title:"Schnorr",type:c.BITCOIN,content:"Example of how to sign and verify Schnorr signatures as of BIP340. Written in Rust.",url:"https://github.com/Guilospanck/schnorr"},{title:"Macaroon",type:c.BITCOIN,content:"Simple implementation of Macaroon for learning purposes.",url:"https://github.com/Guilospanck/macaroon"},{title:"BTC target, bits and difficulty",type:c.BITCOIN,content:"nBits, Target and Difficulty of BTC protocol.",url:"https://github.com/Guilospanck/btc-target-bits-difficulty"},{title:"Conway's Game of Life",type:c.WEBSITE,content:"John Conway Game of Life React TypeScript implementation.",url:"https://guilospanck.github.io/Conway-Game-Of-Life-React/"},{title:"Discord Clone",type:c.WEBSITE,content:"Frontend Discord Clone made with TypeScript and React",url:"https://guilospanck.github.io/discord-clone/"},{title:"Gartic Like App",type:c.WEBSITE,content:"Web drawer like Gartic made with React using TypeScript.",url:"https://github.com/Guilospanck/gartic-like-app/"},{title:"NES Emulator Rust",type:c.APP,content:"A NES emulator written in Rust.",url:"https://github.com/Guilospanck/nes-emulator-rust"},{title:"Area 25.5",type:c.APP,content:"A simple Roguelike survival game built using rust and Bevy engine.",url:"https://github.com/Guilospanck/area-25-5"},{title:"Medium Observability Stack",type:c.APP,content:"Sample files and code configs for the Medium article.",url:"https://github.com/Guilospanck/medium-observability-stack"},{title:"Stripe Go Integration",type:c.APP,content:"Sample files and code configs for the Medium article",url:"https://github.com/Guilospanck/stripe-go-integration"},{title:"ScyllaDB and Go",type:c.APP,content:"Simple application showing how to work with ScyllaDB and Golang using gocqlx.",url:"https://github.com/Guilospanck/scylladb-and-go"},{title:"igocqlx",type:c.GOLANG_PKG,content:"Gocqlx with interfaces.",url:"https://github.com/Guilospanck/igocqlx"},{title:"gocqlxmock",type:c.GOLANG_PKG,content:"Simple mock for gocqlx",url:"https://github.com/Guilospanck/gocqlxmock"},{title:"Dota2 Discord Bot",type:c.BOT,content:"Dota 2 Counters is a Discord bot that will tell you which are the top five (5) heroes that counter the desired one.",url:"https://top.gg/bot/835946840561156096"},{title:"Dota2 Counters",type:c.SCRAPPER,content:"A simple Python webscrapper to gather information of heroes' counters from Dotabuff.",url:"https://github.com/Guilospanck/dota2-counters"}]);return{onMouseEnterBadge:o=>{const i=Object.assign({},e);i[o].color="bfbdbd",t(i)},onMouseLeaveBadge:o=>{const i=Object.assign({},e);i[o].color=l,t(i)},badgeInfo:e,projectsData:o}},N=()=>{const e=D();return n().createElement(S,{viewModel:e})}}}]);