"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:6},i="Datasets",s={unversionedId:"docs/usage/datasets",id:"docs/usage/datasets",title:"Datasets",description:"Datasets are immutable snapshots of the DB",source:"@site/content/docs/usage/datasets.md",sourceDirName:"docs/usage",slug:"/docs/usage/datasets",permalink:"/docs/docs/usage/datasets",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/usage/datasets.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Vector Indexes",permalink:"/docs/docs/usage/vector_index"},next:{title:"How to...",permalink:"/docs/category/how-to"}},d={},c=[],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasets"},"Datasets"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Datasets are immutable snapshots of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DB"))),(0,r.kt)("p",null,"When building AI models, in many cases, especially for validation, it's important that\nimmutable snapshots of data are maintained for posterity. The purpose of this practice is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To foster reproducibility and transparency in experimentation."),(0,r.kt)("li",{parentName:"ul"},"To have a permanent benchmark via which models may be compared."),(0,r.kt)("li",{parentName:"ul"},"To maintain a record for auditors and oversight committees to refer to in the worst case.")),(0,r.kt)("p",null,"Correspondingly, SuperDuperDB distinguishes between datasets and data queries from\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"DB"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," is designed to be fetched only once, and preserved\nas an ",(0,r.kt)("inlineCode",{parentName:"p"},"Artifact"),", saved in the configured artifact store. "),(0,r.kt)("p",null,"Here is an example of creating a SuperDuperDB dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.dataset import Dataset\n\ndb.add(\n    Dataset(\n        identifier='my-validation-set',\n        select=Collection('documents').find({'_fold': 'valid'})\n    )\n)\n")),(0,r.kt)("p",null,"This dataset may be used for validation of diverse ",(0,r.kt)("inlineCode",{parentName:"p"},"Model")," instances during training and otherwise, simply\nby referring to the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model.fit(\n    X='x',\n    y='y',\n    db=db,\n    select=collection.find(),\n    validation_sets=['my-validation-set'],\n    metrics=['acc', 'roc']\n)\n")),(0,r.kt)("p",null,"Datasets, as with other ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," descendants, may be created inline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.dataset import Dataset\n\ndata = Dataset(\n    identifier='my-validation-set',\n    select=Collection('documents').find({'_fold': 'valid'})\n)\n\nmodel.fit(\n    X='x',\n    y='y',\n    db=db,\n    select=collection.find(),\n    validation_sets=[data],\n    metrics=['acc', 'roc']\n)\n")))}u.isMDXComponent=!0}}]);