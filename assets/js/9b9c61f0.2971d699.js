"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3015],{5784:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=s(4848),n=s(8453);const i={sidebar_position:1},d="Community Support",c={id:"ai_integrations/supported_ai_frameworks",title:"Community Support",description:"The primary way in which developers will integrate and implement functionality from popular AI frameworks, is via",source:"@site/content/ai_integrations/supported_ai_frameworks.md",sourceDirName:"ai_integrations",slug:"/ai_integrations/supported_ai_frameworks",permalink:"/docs/ai_integrations/supported_ai_frameworks",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/ai_integrations/supported_ai_frameworks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},o={},h=[];function a(e){const r={a:"a",code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"community-support",children:"Community Support"}),"\n",(0,t.jsxs)(r.p,{children:["The primary way in which developers will integrate and implement functionality from popular AI frameworks, is via\nthe ",(0,t.jsx)(r.code,{children:"Predictor"})," and ",(0,t.jsx)(r.code,{children:"Model"})," abstractions."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"Predictor"})," mixin class, interfaces with all AI frameworks and API providers, which provide ",(0,t.jsx)(r.code,{children:"self.predict"})," functionality,\nand is subclassed by:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"class"}),(0,t.jsx)(r.th,{children:"framework"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.sklearn.Estimator"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://scikit-learn.org/stable/",children:"Scikit-Learn"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.transformers.Pipeline"})}),(0,t.jsx)(r.td,{children:(0,t.jsxs)(r.a,{href:"https://huggingface.co/docs/transformers/index",children:["Hugging Face's ",(0,t.jsx)(r.code,{children:"transformers"})]})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.torch.TorchModel"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://pytorch.org/",children:"PyTorch"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.openai.OpenAI"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://api.openai.com",children:"OpenAI"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.cohere.Cohere"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://cohere.com",children:"Cohere"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.anthropic.Anthropic"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://anthropic.com",children:"Anthropic"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.jina.Jina"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://jina.ai/embeddings",children:"Jina"})})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"Model"})," class is subclassed by:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"class"}),(0,t.jsx)(r.th,{children:"framework"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.sklearn.Estimator"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://scikit-learn.org/stable/",children:"Scikit-Learn"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.transformers.Pipeline"})}),(0,t.jsx)(r.td,{children:(0,t.jsxs)(r.a,{href:"https://huggingface.co/docs/transformers/index",children:["Hugging Face's ",(0,t.jsx)(r.code,{children:"transformers"})]})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"superduper.ext.torch.TorchModel"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://pytorch.org/",children:"PyTorch"})})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Model"})," instances implement ",(0,t.jsx)(r.code,{children:"self.predict"}),", but also hold import data, such as model weights, parameters or hyperparameters.\nIn addition, ",(0,t.jsx)(r.code,{children:"Model"})," may implement ",(0,t.jsx)(r.code,{children:"self.fit"})," functionality - model training and calibration."]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>c});var t=s(6540);const n={},i=t.createContext(n);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);