import{j as l,s as e,R as d,a as p}from"./vendor.0f6c27f0.js";const m=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}};m();var g="/nft-preview-card-component/assets/image-equilibrium.90d2b484.jpg",f="/nft-preview-card-component/assets/icon-view.fffad88f.svg",u="/nft-preview-card-component/assets/icon-clock.725e4636.svg",h="/nft-preview-card-component/assets/icon-ethereum.76974d10.svg",x="/nft-preview-card-component/assets/image-avatar.48c39391.png";const t=l.exports.jsx,i=l.exports.jsxs;function v(){return t(y,{children:i(b,{children:[t(w,{className:"card-img",children:t("a",{href:"#",children:t("img",{className:"cardImg",src:g,alt:"image"})})}),i(C,{className:"card-main",children:[t("a",{href:"#",children:t(j,{className:"card-title",children:"Equilibrium #3429"})}),t(k,{className:"card-text",children:"Our Equilibrium collection promotes balance and calm."})]}),i(I,{children:[i(N,{children:[t(E,{src:h}),t(q,{children:"0.041 ETH"})]}),i(L,{children:[t(O,{src:u}),t(S,{children:"3 days left"})]})]}),i(T,{children:[t(M,{src:x}),i(z,{children:["Creation of ",t("a",{href:"#",children:"Jules Wyvern"})]})]})]})})}const y=e.div`
 
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  
`,b=e.div`
  width: 350px;
  background-color:hsl(216, 50%, 16%);
  padding: 30px;
  padding-top: 30px;
  border: none;
  border-radius: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,w=e.div`
  
  &:hover{
    padding: 0;
    background-image: url(${f});
    background-repeat: no-repeat;
    background-position: center;
    width: 290px;
    background-color:  hsl(178, 100%, 50%);
    border-radius: 15px;
    z-index: 100;
    position:relative;
    img.cardImg{
      opacity: 0.5;
      z-index: -1;
      position:relative;
    }
  }
  img.cardImg{
    position: relative;
    float: left;
    width: 290px;
    margin: 0;
    display: flex;
    border: none;
    border-radius: 15px;
    position: relative;
    padding: 0;
  
    cursor: pointer;
  }
`,C=e.div`
  margin-top: 25px;
`,j=e.h1`
  color: hsl(0, 0%, 100%);
  font-size: 23px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 15px;
  padding: 0;
  cursor: pointer;
  &:active, &:hover{
    color: hsl(178, 100%, 50%);
  }
`,k=e.p`
  font-size: 18px;
  color: hsl(215, 51%, 70%);
  font-weight: 300;
  text-align: left;
  margin-bottom: 15px;
`,I=e.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: .5px solid black;
  border-color: hsl(215, 51%, 70%);

`,N=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
`,E=e.img`
  width: auto;
  height: 18px;
  fill: hsl(178, 100%, 50%)

`,q=e.p`
  margin-left: 6px;
  color: hsl(178, 100%, 50%);
  `,L=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
`,O=e.img`
  fill: hsl(215, 51%, 70%);
  margin-right: 5px;
`,S=e.p`
  color: hsl(215, 51%, 70%);
  
`,T=e.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
`,M=e.img`
  border: 2px solid hsl(0, 0%, 100%);
  border-radius: 100%;
  width: 30px;
  height: 30px;
 
`,z=e.p`
  display: flex;
  margin-left: 15px;
  color: hsl(215, 51%, 70%);
  
  a{
    color: hsl(0, 0%, 100%);
    margin-left: 5px;
    &:active, &:hover{
    color:hsl(178, 100%, 50%);
    cursor: pointer;

  }
}
`;document.querySelector("root");var R="./images/image-equilibrium.jpg";console.log(R);d.render(t(p.StrictMode,{children:t(v,{})}),document.getElementById("root"));
