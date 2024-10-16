"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{2361:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,[t,n]){return Math.min(n,Math.max(t,e))}},976:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(2265),o=n(8324),a=n(1584),u=n(1538);function i(e){let t=e+"CollectionProvider",[n,i]=(0,o.b)(t),[l,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,i=c(s,n),l=(0,a.e)(t,i.collectionRef);return r.createElement(u.g7,{ref:l},o)}),d=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return r.createElement(l,{scope:t,itemMap:a,collectionRef:o},n)},Slot:f,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,l=r.useRef(null),s=(0,a.e)(t,l),f=c(d,n);return r.useEffect(()=>(f.itemMap.set(l,{ref:l,...i}),()=>void f.itemMap.delete(l))),r.createElement(u.g7,{[p]:"",ref:s},o)})},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},i]}},7513:function(e,t,n){n.d(t,{gm:function(){return a}});var r=n(2265);let o=(0,r.createContext)(void 0);function a(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},3398:function(e,t,n){n.d(t,{Pc:function(){return h},ck:function(){return D},fC:function(){return A}});var r=n(2988),o=n(2265),a=n(8149),u=n(976),i=n(1584),l=n(8324),c=n(3201),s=n(5171),f=n(5137),d=n(1715),p=n(7513);let m="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[w,g,E]=(0,u.B)(b),[R,h]=(0,l.b)(b,[E]),[C,M]=R(b),I=(0,o.forwardRef)((e,t)=>(0,o.createElement)(w.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(w.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(F,(0,r.Z)({},e,{ref:t}))))),F=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:u,loop:l=!1,dir:c,currentTabStopId:b,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:E,onEntryFocus:R,...h}=e,M=(0,o.useRef)(null),I=(0,i.e)(t,M),F=(0,p.gm)(c),[T=null,y]=(0,d.T)({prop:b,defaultProp:w,onChange:E}),[A,D]=(0,o.useState)(!1),S=(0,f.W)(R),k=g(n),x=(0,o.useRef)(!1),[V,P]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=M.current;if(e)return e.addEventListener(m,S),()=>e.removeEventListener(m,S)},[S]),(0,o.createElement)(C,{scope:n,orientation:u,dir:F,loop:l,currentTabStopId:T,onItemFocus:(0,o.useCallback)(e=>y(e),[y]),onItemShiftTab:(0,o.useCallback)(()=>D(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>P(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>P(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:A||0===V?-1:0,"data-orientation":u},h,{ref:I,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{x.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!x.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(m,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=k().filter(e=>e.focusable);_([e.find(e=>e.active),e.find(e=>e.id===T),...e].filter(Boolean).map(e=>e.ref.current))}}x.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>D(!1))})))}),T=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:u=!0,active:i=!1,tabStopId:l,...f}=e,d=(0,c.M)(),p=l||d,m=M("RovingFocusGroupItem",n),v=m.currentTabStopId===p,b=g(n),{onFocusableItemAdd:E,onFocusableItemRemove:R}=m;return(0,o.useEffect)(()=>{if(u)return E(),()=>R()},[u,E,R]),(0,o.createElement)(w.ItemSlot,{scope:n,id:p,focusable:u,active:i},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":m.orientation},f,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u?m.onItemFocus(p):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>m.onItemFocus(p)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return y[o]}(e,m.orientation,m.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=m.loop?(n=o,r=a+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(a+1)}setTimeout(()=>_(o))}})})))}),y={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let A=I,D=T},2447:function(e,t,n){n.d(t,{VY:function(){return _},aV:function(){return T},fC:function(){return F},xz:function(){return y}});var r=n(2988),o=n(2265),a=n(8149),u=n(8324),i=n(3398),l=n(1383),c=n(5171),s=n(7513),f=n(1715),d=n(3201);let p="Tabs",[m,v]=(0,u.b)(p,[i.Pc]),b=(0,i.Pc)(),[w,g]=m(p),E=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,onValueChange:u,defaultValue:i,orientation:l="horizontal",dir:p,activationMode:m="automatic",...v}=e,b=(0,s.gm)(p),[g,E]=(0,f.T)({prop:a,onChange:u,defaultProp:i});return(0,o.createElement)(w,{scope:n,baseId:(0,d.M)(),value:g,onValueChange:E,orientation:l,dir:b,activationMode:m},(0,o.createElement)(c.WV.div,(0,r.Z)({dir:b,"data-orientation":l},v,{ref:t})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:a=!0,...u}=e,l=g("TabsList",n),s=b(n);return(0,o.createElement)(i.fC,(0,r.Z)({asChild:!0},s,{orientation:l.orientation,dir:l.dir,loop:a}),(0,o.createElement)(c.WV.div,(0,r.Z)({role:"tablist","aria-orientation":l.orientation},u,{ref:t})))}),h=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:u,disabled:l=!1,...s}=e,f=g("TabsTrigger",n),d=b(n),p=M(f.baseId,u),m=I(f.baseId,u),v=u===f.value;return(0,o.createElement)(i.ck,(0,r.Z)({asChild:!0},d,{focusable:!l,active:v}),(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":v,"aria-controls":m,"data-state":v?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:p},s,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():f.onValueChange(u)}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&f.onValueChange(u)}),onFocus:(0,a.M)(e.onFocus,()=>{let e="manual"!==f.activationMode;v||l||!e||f.onValueChange(u)})})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,forceMount:u,children:i,...s}=e,f=g("TabsContent",n),d=M(f.baseId,a),p=I(f.baseId,a),m=a===f.value,v=(0,o.useRef)(m);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(l.z,{present:u||m},({present:n})=>(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":m?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:p,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0}}),n&&i))});function M(e,t){return`${e}-trigger-${t}`}function I(e,t){return`${e}-content-${t}`}let F=E,T=R,y=h,_=C}}]);