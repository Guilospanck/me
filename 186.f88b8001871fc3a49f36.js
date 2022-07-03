"use strict";(self.webpackChunkguilospanck_github_io=self.webpackChunkguilospanck_github_io||[]).push([[186],{6186:(e,t,o)=>{o.r(t),o.d(t,{default:()=>I});var l=o(7363),r=o.n(l),i=o(4689);const n="2d3134";var a;!function(e){e[e.GITHUB=0]="GITHUB",e[e.TWITTER=1]="TWITTER",e[e.LINKEDIN=2]="LINKEDIN",e[e.MEDIUM=3]="MEDIUM"}(a||(a={}));var c=o(8804),s=o(5888);const h=c.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${s.gK};
  color: ${s.UA};

  width: 100%;
  height: 100%;
  gap: 4%;
`,d=c.ZP.div`
  width: 200px;
  height: 200px;
  border: 2px solid ${s.UA};
  border-radius: 100px;
  background-image: url(${e=>e.url});
  background-size: cover;
  background-position-y: center;

  overflow: hidden;
`,g=c.ZP.header`
  font-size: xx-large;
`,u=c.ZP.section`  
  height: 60px;
`,m=c.ZP.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  width: 100%;
  height: 14px;
  gap: 2px;
`,p=c.ZP.img`
  width: 100px;
  border-radius: 5px;
  height: 90%;  

  &:hover {
    background-color: red;
  }
`,b=c.ZP.section`
  display: flex;  
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 30px;
`,f=c.ZP.a`
  text-decoration: none;
  color: ${s.UA};

`,x=c.ZP.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-height: 25%;
  overflow: hidden;

  @media(max-height: 700px) {
    max-height: 15%;
  }
  @media(max-height: 550px) {
    max-height: 10%;
  }
  @media(max-height: 470px) {
    max-height: 5%;
  }
`,E=r().lazy((()=>o.e(961).then(o.bind(o,1961)))),k=r().memo((()=>r().createElement(u,null,r().createElement(i.Z,{steps:(0,l.useMemo)((()=>["Frontend Developer 🎨",1e3,"Backend Developer 🎲",1e3,"FullStack Developer 🦆",1e3,"Mechatronics Engineer ⚙️",1e3]),[]),loop:1/0})))),w=({viewModel:e})=>r().createElement(h,{title:"container"},r().createElement(d,{title:"photo-container",url:"media/me.jpg"}),r().createElement(g,{title:"title-name-container"},"Guilherme Rodrigues"),r().createElement(k,null),r().createElement(m,null,Object.values(a).map((t=>((e,t,o,l)=>{const i=l[e],n=null==i?void 0:i.color;if(!n)return;const a=null==i?void 0:i.src(n);return a?r().createElement("a",{key:e,title:i.title,role:"link",href:i.href,target:"_blank",onMouseEnter:()=>t(e),onMouseLeave:()=>o(e),rel:"noreferrer"},r().createElement(p,{src:a})):void 0})(t,e.onMouseEnterBadge,e.onMouseLeaveBadge,e.badgeInfo)))),r().createElement(b,{title:"email-container"},r().createElement(f,{href:"mailto:guilospanck@protonmail.com",target:"_blank"},"guilospanck@protonmail.com")),r().createElement(x,null,r().createElement(E,null))),v=()=>{const[e,t]=(0,l.useState)({[a.GITHUB]:{src:e=>`https://img.shields.io/badge/GitHub-100000?color=%23${e}&style=for-the-badge&logo=github&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://github.com/Guilospanck",color:n,title:"GitHub"},[a.TWITTER]:{src:e=>`https://img.shields.io/badge/Twitter-1DA1F2?color=%23${e}&style=for-the-badge&logo=twitter&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://twitter.com/Guilospanck",color:n,title:"Twitter"},[a.LINKEDIN]:{src:e=>`https://img.shields.io/badge/LinkedIn-0077B5?color=%23${e}&style=for-the-badge&logo=linkedin&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://www.linkedin.com/in/guilhermerpereira/",color:n,title:"LinkedIn"},[a.MEDIUM]:{src:e=>`https://img.shields.io/badge/Medium-12100E?color=%23${e}&style=for-the-badge&logo=medium&logoColor=hsla(0,0%,100%,0.7)&labelColor=%${e}`,href:"https://medium.com/@guilospanck",color:n,title:"Medium"}});return{onMouseEnterBadge:o=>{const l=Object.assign({},e);l[o].color="bfbdbd",t(l)},onMouseLeaveBadge:o=>{const l=Object.assign({},e);l[o].color=n,t(l)},badgeInfo:e}},I=()=>{const e=v();return r().createElement(w,{viewModel:e})}}}]);