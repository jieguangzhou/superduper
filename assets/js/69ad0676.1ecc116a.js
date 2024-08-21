"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4690],{2046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(4848),s=n(8453);const o={},a=void 0,c={id:"reusable_snippets/text_extraction",title:"text_extraction",description:"",source:"@site/content/reusable_snippets/text_extraction.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/text_extraction",permalink:"/docs/reusable_snippets/text_extraction",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/reusable_snippets/text_extraction.md",tags:[],version:"current",frontMatter:{}},i={},p=[];function d(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# <tab: PDF>\nfrom PyPDF2 import PdfReader\n\nfrom superduper import model\n\n\n@model(flatten=True, model_update_kwargs={'document_embedded': False})\ndef text_extraction(file_path):\n    reader = PdfReader(file_path)\n    \n    texts = []\n    for i, page in tqdm(enumerate(reader.pages)):\n        text = page.extract_text() \n        texts.append(text)\n    return texts\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(6540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);