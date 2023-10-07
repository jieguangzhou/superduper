"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="Dask Jobs",s={unversionedId:"docs/cluster/jobs",id:"docs/cluster/jobs",title:"Dask Jobs",description:"Scheduling of training and model outputs",source:"@site/content/docs/cluster/jobs.md",sourceDirName:"docs/cluster",slug:"/docs/cluster/jobs",permalink:"/docs/docs/cluster/jobs",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/cluster/jobs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/docs/cluster/configuration"},next:{title:"Single host cluster deployment",permalink:"/docs/docs/cluster/single_host_cluster"}},l={},u=[{value:"Scheduling of training and model outputs",id:"scheduling-of-training-and-model-outputs",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dask-jobs"},"Dask Jobs"),(0,o.kt)("h2",{id:"scheduling-of-training-and-model-outputs"},"Scheduling of training and model outputs"),(0,o.kt)("p",null,"In order to most efficiently marshall computational resources,\nSuperDuperDB may be configured to run in asynchronous mode ",(0,o.kt)("inlineCode",{parentName:"p"},'{"distributed": True}'),".\nThe simplesst way to set a distributed SuperDuperDB deployment is using a ",(0,o.kt)("a",{parentName:"p",href:"single_host_cluster"},"single-host cluster"),". See ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"the section on configuration")," for details in setting up SuperDuperDB."),(0,o.kt)("p",null,"There are several key functionalities in SuperDuperDB which trigger asynchronous jobs to be\nspawned in the configured Dask worker pool."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inserting data"),(0,o.kt)("li",{parentName:"ul"},"Updating data"),(0,o.kt)("li",{parentName:"ul"},"Creating ",(0,o.kt)("inlineCode",{parentName:"li"},"Listener")," instances"),(0,o.kt)("li",{parentName:"ul"},"Apply models to data ",(0,o.kt)("inlineCode",{parentName:"li"},"model.predict")),(0,o.kt)("li",{parentName:"ul"},"Training models ",(0,o.kt)("inlineCode",{parentName:"li"},"model.fit"))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.dask.org/en/stable/"},"the Dask documentation")," for more information about setting up and managing Dask deployments. The dask deployment may be configured using\nthe ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"configuration stystem"),"."),(0,o.kt)("p",null,"The stdout and status of the job may be monitored using the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"Job")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"job = model.predict(X='my-key', db=db, select=collection.find())\njob.listen()\n# ... lots of lines of stdout\n")),(0,o.kt)("p",null,"Jobs may be viewed using ",(0,o.kt)("inlineCode",{parentName:"p"},"db.show"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"db.show('job')\n")))}d.isMDXComponent=!0}}]);