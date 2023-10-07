"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="Minimum working example",l={unversionedId:"docs/getting_started/minimum_working_example",id:"docs/getting_started/minimum_working_example",title:"Minimum working example",description:"To check that everything is working correctly cut and paste this code into a Jupyter notebook.",source:"@site/content/docs/getting_started/minimum_working_example.md",sourceDirName:"docs/getting_started",slug:"/docs/getting_started/minimum_working_example",permalink:"/docs/docs/getting_started/minimum_working_example",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/getting_started/minimum_working_example.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/docs/getting_started/configuring_superduperdb"},next:{title:"Usage",permalink:"/docs/category/usage"}},c={},p=[{value:"Explanation",id:"explanation",level:3}],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"minimum-working-example"},"Minimum working example"),(0,o.kt)("p",null,"To check that everything is working correctly cut and paste this code into a Jupyter notebook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nfrom mongomock import MongoClient\nfrom superduperdb.container.document import Document as D\nfrom superduperdb.ext.numpy.array import array\nfrom superduperdb.db.mongodb.query import Collection\nimport superduperdb as s\n\ndb = s.superduper(MongoClient().documents)\ncollection = Collection(name='docs')\n\na = array('float64', shape=(32,))\n\ndb.execute(\n    collection.insert_many([\n        D({'x': a(np.random.randn(32))})\n        for _ in range(100)\n    ], encoders=(a,))\n)\n\nmodel = s.container.model.Model(\n    identifier='test-model',\n    object=lambda x: x + 1,\n    encoder=a,\n)\n\nmodel.predict(X='x', db=db, select=collection.find())\n\nprint(db.execute(collection.find_one()))\n")),(0,o.kt)("h3",{id:"explanation"},"Explanation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We wrap the ",(0,o.kt)("inlineCode",{parentName:"li"},"pymongo")," database connector with the ",(0,o.kt)("inlineCode",{parentName:"li"},"superduper")," decorator, allowing SuperDuperDB to communicate with MongoDB and install AI into the database."),(0,o.kt)("li",{parentName:"ol"},"We insert several ",(0,o.kt)("inlineCode",{parentName:"li"},"numpy")," arrays, using the encoder ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," to encode these as ",(0,o.kt)("inlineCode",{parentName:"li"},"bytes")," in the database."),(0,o.kt)("li",{parentName:"ol"},"We wrap our model, which in this case, is a simple ",(0,o.kt)("inlineCode",{parentName:"li"},"lambda")," function."),(0,o.kt)("li",{parentName:"ol"},"We apply the model to store predictions on the inserted data in the database."),(0,o.kt)("li",{parentName:"ol"},"We query the database, to retrieve a sample datapoint.")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/usage/db"},"section on the ",(0,o.kt)("inlineCode",{parentName:"a"},"DB")," class")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/usage/models"},"the section on models")," for further explanation and usage."))}m.isMDXComponent=!0}}]);