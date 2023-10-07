"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[1607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Turn your classical-database into a vector-database with SuperDuperDB",s={unversionedId:"use_cases/items/compare_vector_search_solutions",id:"use_cases/items/compare_vector_search_solutions",title:"Turn your classical-database into a vector-database with SuperDuperDB",description:"In this notebook we show how you can use SuperDuperDB to turn your classical database into a vector-search database.",source:"@site/content/use_cases/items/compare_vector_search_solutions.md",sourceDirName:"use_cases/items",slug:"/use_cases/items/compare_vector_search_solutions",permalink:"/docs/use_cases/items/compare_vector_search_solutions",draft:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/use_cases/items/compare_vector_search_solutions.md",tags:[],version:"current",frontMatter:{},sidebar:"useCasesSidebar",previous:{title:"MongoDB Atlas vector-search with SuperDuperDB",permalink:"/docs/use_cases/items/atlas_vector_search"},next:{title:"MNIST using scikit-learn and SuperDuperDB",permalink:"/docs/use_cases/items/mnist_sklearn"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"turn-your-classical-database-into-a-vector-database-with-superduperdb"},"Turn your classical-database into a vector-database with SuperDuperDB"),(0,a.kt)("p",null,"In this notebook we show how you can use SuperDuperDB to turn your classical database into a vector-search database."),(0,a.kt)("p",null,"In this example, we'll be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"sentence_transformers")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"superduperdb")," python package.\nIn addition, we'll be accessing the OpenAI API. In order to get these working you'll need to install the packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!pip install sentence-transformers\n!pip install superduperdb\n")),(0,a.kt)("p",null,"And set the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPEN_AI_KEY")," as environment variable"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\nos.environ['OPENAI_API_KEY'] = '<YOUR-OPENAI-KEY>'\n")),(0,a.kt)("p",null,"In order to access SuperDuperDB, we'll wrap our standard database connector with the ",(0,a.kt)("inlineCode",{parentName:"p"},"superduper")," decorator.\nThis will transform the functionality of your database into a ",(0,a.kt)("strong",{parentName:"p"},"super-duper")," database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb import superduper\nimport pymongo\n\ndb = pymongo.MongoClient().documents\ndb = superduper(db)\n")),(0,a.kt)("p",null,"In this notebook we upload some wikipedia documents from a wikipedia dump. You can find this raw data here ",(0,a.kt)("a",{parentName:"p",href:"https://dumps.wikimedia.org/enwiki/"},"https://dumps.wikimedia.org/enwiki/"),"."),(0,a.kt)("p",null,'We\'ve preprocessed the data, extracting titles and abstracts from each document. We can use this as a test bed for search, by simulating a "typed query" using the title, and indexing the document based on the abstracts only.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import json\nimport random \n\nwith open(f'{os.environ[\"HOME\"]}/data/wikipedia/abstracts.json') as f:\n    data = json.load(f)\ndata = random.sample(data, 1000)\n")),(0,a.kt)("p",null,"Here's a snapshot of the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data[:2]\n")),(0,a.kt)("p",null,"We now insert the data into MongoDB using the SuperDuperDB client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.db.mongodb.query import Collection\n\ncollection = Collection(name='wikipedia')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.document import Document\n\ndb.execute(collection.insert_many([Document(r) for r in data]))\n")),(0,a.kt)("p",null,"We can verify that the documents are in the database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"r = db.execute(collection.find_one())\nr.unpack()\n")),(0,a.kt)("p",null,"Creating a vector-index in SuperDuperDB involves two things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating a model which is used to compute vectors (in this case ",(0,a.kt)("inlineCode",{parentName:"li"},"OpenAIEmbedding"),")"),(0,a.kt)("li",{parentName:"ul"},"Daemonizing this model on a key (",(0,a.kt)("inlineCode",{parentName:"li"},"Listener"),"), so that when new data are added, these are vectorized using the key")),(0,a.kt)("p",null,"Sentence Transformers are supported by SuperDuperDB, with a wrapper that allows the chosen model to\ncommunicate directly with SuperDuperDB. The ",(0,a.kt)("inlineCode",{parentName:"p"},"encoder")," argument specifies how the outputs of the models\nare saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Datalayer"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sentence_transformers\nfrom superduperdb.container.model import Model\nfrom superduperdb.ext.numpy.array import array\n\nmodel = Model(\n    identifier='all-MiniLM-L6-v2',\n    object=sentence_transformers.SentenceTransformer('all-MiniLM-L6-v2'),\n    encoder=array('float32', shape=(384,)),\n    predict_method='encode',\n    batch_predict=True,\n)\n")),(0,a.kt)("p",null,"SuperDuperDB also has inbuilt support for OpenAI. You can also integrate APIs from clients, such as the CoherAI\nclient using the Model wrapper:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.ext.openai.model import OpenAIEmbedding\n\nmodel = OpenAIEmbedding(model='text-embedding-ada-002')\n")),(0,a.kt)("p",null,"We can test our model (whichever we've chosen) like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"model.predict('This is a test', one=True)\n")),(0,a.kt)("p",null,"We've verified our model gives us vectorial outputs, now let's add the search functionality using this model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.ext.numpy.array import array\n\ndb.add(\n    VectorIndex(\n        identifier=f'wiki-index-{model.identifier}',\n        indexing_listener=Listener(\n            model=model,\n            key='abstract',\n            select=collection.find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        ),\n        compatible_listener=Listener(\n            model=model,\n            key='title',\n            select=collection.find(),\n            active=False,\n        ),\n    )\n)\n")),(0,a.kt)("p",null,"We can inspect the functionality which was added like this. The above command creates several components in the single call:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"model")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"listener")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"vector_index"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db.show('model')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db.show('listener')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db.show('vector_index')\n")),(0,a.kt)("p",null,"We can now test a few vector searches. The way to do this in combination with your classical database\n(in this case MongoDB) is to pre-pend the standard query, with a similarity comparison via ",(0,a.kt)("inlineCode",{parentName:"p"},"like"),"."),(0,a.kt)("p",null,"The item inside ",(0,a.kt)("inlineCode",{parentName:"p"},"like")," is vectorized and compared with the stored vectors. In order for this to work, the keys in the\nfirst parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"like")," must match those configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," instances inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorIndex"),". The results are then filtered\nusing the classical query part:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"cur = db.execute(\n    collection\n        .like({'title': 'articles about sport'}, n=10, vector_index=f'wiki-index-{model.identifier}')\n        .find({}, {'title': 1})\n)\n\nfor r in cur:\n    print(r)\n")),(0,a.kt)("p",null,"The benefit of having this combination is demonstrated in this query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"cur = db.execute(\n    collection\n        .like({'title': 'articles about sport'}, n=100, vector_index=f'wiki-index-{model.identifier}')\n        .find({'title': {'$regex': '.*Australia'}})\n)\n\nfor r in cur:\n    print(r['title'])\n")))}d.isMDXComponent=!0}}]);