"use strict";(self.webpackChunkguilospanck_github_io=self.webpackChunkguilospanck_github_io||[]).push([[725],{1725:(t,e,o)=>{o.r(e),o.d(e,{default:()=>R});var i=o(7363),n=o.n(i),r=o(4689);const l="2d3134";var a,c;!function(t){t[t.GITHUB=0]="GITHUB",t[t.TWITTER=1]="TWITTER",t[t.LINKEDIN=2]="LINKEDIN",t[t.MEDIUM=3]="MEDIUM"}(a||(a={})),function(t){t[t.WEBSITE=0]="WEBSITE",t[t.GOLANG_PKG=1]="GOLANG_PKG",t[t.SCRAPPER=2]="SCRAPPER",t[t.BOT=3]="BOT",t[t.APP=4]="APP",t[t.BITCOIN=5]="BITCOIN",t[t.AI=6]="AI",t[t.TOOL=7]="TOOL"}(c||(c={}));const s={[c.APP]:"#1D2226",[c.BOT]:"#F5CB5C",[c.GOLANG_PKG]:"#7D80DA",[c.SCRAPPER]:"#E94F37",[c.WEBSITE]:"#02A9EA",[c.BITCOIN]:"#f7931a",[c.AI]:"#CC785C",[c.TOOL]:"#2A9D8F"},u={[c.APP]:"app",[c.GOLANG_PKG]:"golang package",[c.BOT]:"bot",[c.SCRAPPER]:"webscrapper",[c.WEBSITE]:"website",[c.BITCOIN]:"btc related",[c.AI]:"ai",[c.TOOL]:"dev tool"};var p=o(8804),h=o(5888);const d=p.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${t=>{var e;return null!==(e=t.height)&&void 0!==e?e:100}}%;
  background-color: ${t=>{var e;return null!==(e=t.bgcolor)&&void 0!==e?e:h.gK}};

  position: relative;
`,g=p.ZP.div`
  width: ${t=>{var e;return null!==(e=t.width)&&void 0!==e?e:200}}px;
  height: ${t=>{var e;return null!==(e=t.height)&&void 0!==e?e:200}}px;
  border: 2px solid ${h.UA};
  border-radius: 100px;
  background-image: url(${t=>t.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;

  @media (max-width: 270px) {
    width: ${t=>{var e;return null!==(e=t.width/4)&&void 0!==e?e:150}}px;
    height: ${t=>{var e;return null!==(e=t.height/4)&&void 0!==e?e:150}}px;
  }
`,m=p.ZP.header`
  text-align: center;
  font-size: xx-large;
`,b=p.ZP.section`
  display: flex;
  align-items: center;
  height: 60px;
`,y=p.ZP.section`
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
`,f=p.ZP.img`
  width: 100px;
  border-radius: 5px;
  height: 90%;
`,k=p.ZP.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  word-break: break-all;

  justify-content: center;
  align-items: center;
  align-content: center;

  width: 100%;
  height: 30px;
`,w=(0,p.ZP)(k)``,E=(0,p.ZP)(k)``,P=p.ZP.a`
  text-decoration: none;
  color: ${h.UA};

  &:hover {
    color: #fff;
  }
`,G=(0,p.ZP)(P)``,x=(0,p.ZP)(P)``,v=p.ZP.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  bottom: ${t=>{var e;return null!==(e=t.bottom)&&void 0!==e?e:-1}}vh;
`,I=p.ZP.section`
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
`,T=p.ZP.a`
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
    ${t=>{var e;return null!==(e=t.bgColor)&&void 0!==e?e:h.gK}} 0px,
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
`,C=p.ZP.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10%;
`,A=p.ZP.a`
  position: absolute;
  bottom: 20px;
  right: 20px;

  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    transform: rotate(360deg);
  }
`,O="media/me.jpg",B=n().lazy((()=>o.e(961).then(o.bind(o,1961)))),S=n().memo((()=>n().createElement(b,null,n().createElement(r.Z,{steps:(0,i.useMemo)((()=>["Frontend Developer 🎨",1e3,"Backend Developer 🎲",1e3,"FullStack Developer 🦆",1e3,"Mechatronics Engineer ⚙️",1e3]),[]),loop:1/0})))),L=({viewModel:t})=>n().createElement(n().Fragment,null,n().createElement(d,{height:80},n().createElement(g,{title:"photo-container",url:O}),n().createElement(m,{title:"title-name-container"},"Guilherme Pereira"),n().createElement(S,null),n().createElement(y,null,Object.values(a).map((e=>((t,e,o,i)=>{const r=i[t],l=null==r?void 0:r.color;if(!l)return;const a=null==r?void 0:r.src(l);return a?n().createElement("a",{key:t,title:r.title,role:"link",href:r.href,target:"_blank",onMouseEnter:()=>e(t),onMouseLeave:()=>o(t),rel:"noreferrer"},n().createElement(f,{src:a})):void 0})(e,t.onMouseEnterBadge,t.onMouseLeaveBadge,t.badgeInfo)))),n().createElement(w,{title:"personal-notes-container"},n().createElement(G,{href:"https://guilospanck.github.io/notes/",target:"_blank"},"Personal notes")),n().createElement(E,{title:"quote-diary-container"},n().createElement(x,{href:"https://guilospanck.github.io/quote-diary/",target:"_blank"},"Quote diary")),n().createElement(k,{title:"email-container"},n().createElement(P,{href:"mailto:guilospanck@protonmail.com",target:"_blank"},"guilospanck@protonmail.com"))),n().createElement(v,null,n().createElement(B,{fill:"#2d3134"})),n().createElement(d,{bgcolor:"#2d3134"},n().createElement(m,null,"Projects"),n().createElement(I,null,t.projectsData.map((t=>n().createElement(T,{key:t.url,href:t.url,bgColor:s[t.type],target:"_blank"},n().createElement("div",{id:"title"},t.title),n().createElement("div",{id:"subtitle"},u[t.type]),n().createElement("div",{id:"content"},t.content)))))),n().createElement(v,{style:{transform:"rotate(180deg)"},bottom:1},n().createElement(B,{fill:"#2d3134"})),n().createElement(d,{height:20},n().createElement(A,{href:"https://www.linkedin.com/in/guilhermerpereira/"},n().createElement(g,{title:"edge-page-photo",url:O,width:50,height:50})),n().createElement(C,null,n().createElement("h2",null,'"Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety."'),n().createElement("sub",null,"Benjamin Franklin")))),N=()=>{const[t,e]=(0,i.useState)({[a.GITHUB]:{src:t=>`https://img.shields.io/badge/GitHub-100000?color=%23${t}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${t}`,href:"https://github.com/Guilospanck",color:l,title:"GitHub"},[a.TWITTER]:{src:t=>`https://img.shields.io/badge/Twitter-1DA1F2?color=%23${t}&style=for-the-badge&logo=x&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${t}`,href:"https://twitter.com/Guilospanck",color:l,title:"Twitter"},[a.LINKEDIN]:{src:t=>`https://img.shields.io/badge/LinkedIn-0077B5?color=%23${t}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${t}`,href:"https://www.linkedin.com/in/guilhermerpereira/",color:l,title:"LinkedIn"},[a.MEDIUM]:{src:t=>`https://img.shields.io/badge/Medium-12100E?color=%23${t}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${t}`,href:"https://medium.com/@guilospanck",color:l,title:"Medium"}}),[o]=(0,i.useState)([{title:"FlashCards",type:c.APP,content:"A simple and effective Flash Cards application.",url:"https://flashcards.guilospanck.com/"},{title:"Chronos",type:c.APP,content:"Your friendly chronogram app.",url:"https://chronos.guilospanck.com/"},{title:"modelgen",type:c.AI,content:"Generate 3D models by describing them to your AI agent. Exports GLB and USDZ from plain YAML models.",url:"https://github.com/Guilospanck/modelgen"},{title:"vm-claude",type:c.TOOL,content:"Run Claude Code inside a microVM that only sees the current project.",url:"https://github.com/Guilospanck/vm-claude"},{title:"AI Usage Bar",type:c.APP,content:"Native macOS menu-bar app showing your Claude and ChatGPT subscription usage side by side.",url:"https://github.com/Guilospanck/ai-usage-bar"},{title:"MCP Odin",type:c.AI,content:"Hand-crafted Model Context Protocol (2026-07-28) implementation in Odin.",url:"https://github.com/Guilospanck/mcp-odin"},{title:"Odin Minecraft Clone",type:c.APP,content:"Voxel sandbox written in pure Odin with OpenGL 4.1 and GLFW. No engine.",url:"https://github.com/Guilospanck/claude-minecraft-odin"},{title:"Quotebook",type:c.WEBSITE,content:"Turn a folder of markdown files into a minimal quotes website on GitHub Pages.",url:"https://guilospanck.github.io/quotebook/"},{title:"WebRTC Stats Analyzer",type:c.WEBSITE,content:"Parse Chrome WebRTC stats exports and get a call quality diagnosis with charts.",url:"https://guilospanck.github.io/webrtc-stats-analyzer/"},{title:"Notion to Diagram",type:c.WEBSITE,content:"Transform Notion pages into interactive diagrams.",url:"https://guilospanck.github.io/notion-to-diagram/"},{title:"Galaxy WebGPU",type:c.WEBSITE,content:"Your own customisable galaxy in the browser, rendered with WebGPU and tweakable in real time.",url:"https://guilospanck.github.io/galaxy-webgpu/"},{title:"PQC Chat",type:c.APP,content:"TUI websocket chat using Post-Quantum Cryptography. Written in Go.",url:"https://github.com/Guilospanck/pqc"},{title:"workj",type:c.TOOL,content:"Git worktrees in Zellij. Written in Zig.",url:"https://github.com/Guilospanck/workj"},{title:"RAGit",type:c.AI,content:"Talk to your GitHub and GitLab repositories using RAG.",url:"https://github.com/Guilospanck/ragit"},{title:"Area 25.5",type:c.APP,content:"Roguelike survival game built with Rust and the Bevy engine for the PirateJAM 15.",url:"https://guilospanck.itch.io/area25-5"},{title:"NES Emulator Rust",type:c.APP,content:"A NES emulator written in Rust.",url:"https://github.com/Guilospanck/nes-emulator-rust"},{title:"Nostr",type:c.BITCOIN,content:"Nostr protocol written in Rust.",url:"https://github.com/Guilospanck/nostr"},{title:"murray-rs",type:c.BITCOIN,content:"Rust library to quickly incorporate bitcoin data and interactions within your applications.",url:"https://github.com/Guilospanck/murray-rs"},{title:"cashu-rs",type:c.BITCOIN,content:"Cashu ecash protocol (NUTs) implementation in Rust.",url:"https://github.com/Guilospanck/cashu-rs"},{title:"Rust Bitcoin",type:c.BITCOIN,content:"Bitcoin protocol implementation in Rust.",url:"https://github.com/Guilospanck/rust-bitcoin"},{title:"Schnorr",type:c.BITCOIN,content:"Example of how to sign and verify Schnorr signatures as of BIP340. Written in Rust.",url:"https://github.com/Guilospanck/schnorr"},{title:"Stripe Go Integration",type:c.APP,content:"Straightforward Stripe integration using Go. Companion code for the Medium article.",url:"https://github.com/Guilospanck/stripe-go-integration"},{title:"Medium Observability Stack",type:c.APP,content:"Telemetry with OpenTelemetry, Prometheus and Jaeger. Companion code for the Medium article.",url:"https://github.com/Guilospanck/medium-observability-stack"},{title:"ScyllaDB and Go",type:c.APP,content:"Simple application showing how to work with ScyllaDB and Golang using gocqlx.",url:"https://github.com/Guilospanck/scylladb-and-go"},{title:"igocqlx",type:c.GOLANG_PKG,content:"Gocqlx with interfaces.",url:"https://github.com/Guilospanck/igocqlx"},{title:"gocqlxmock",type:c.GOLANG_PKG,content:"Simple mock for gocqlx.",url:"https://github.com/Guilospanck/gocqlxmock"},{title:"Conway's Game of Life",type:c.WEBSITE,content:"John Conway Game of Life React TypeScript implementation.",url:"https://guilospanck.github.io/Conway-Game-Of-Life-React/"},{title:"Discord Clone",type:c.WEBSITE,content:"Frontend Discord Clone made with TypeScript and React.",url:"https://guilospanck.github.io/discord-clone/"}]);return{onMouseEnterBadge:o=>{const i=Object.assign({},t);i[o].color="bfbdbd",e(i)},onMouseLeaveBadge:o=>{const i=Object.assign({},t);i[o].color=l,e(i)},badgeInfo:t,projectsData:o}},R=()=>{const t=N();return n().createElement(L,{viewModel:t})}}}]);