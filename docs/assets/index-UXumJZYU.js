(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function ug(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function Yv(){if(ax)return Mo;ax=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var rx;function jv(){return rx||(rx=1,Gf.exports=Yv()),Gf.exports}var ue=jv(),Vf={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function Zv(){if(sx)return le;sx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function _(L,et,vt){this.props=L,this.context=et,this.refs=y,this.updater=vt||T}_.prototype.isReactComponent={},_.prototype.setState=function(L,et){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,et,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=_.prototype;function U(L,et,vt){this.props=L,this.context=et,this.refs=y,this.updater=vt||T}var I=U.prototype=new P;I.constructor=U,w(I,_.prototype),I.isPureReactComponent=!0;var k=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(L,et,vt){var yt=vt.ref;return{$$typeof:o,type:L,key:et,ref:yt!==void 0?yt:null,props:vt}}function R(L,et){return C(L.type,et,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function j(L){var et={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return et[vt]})}var rt=/\/+/g;function lt(L,et){return typeof L=="object"&&L!==null&&L.key!=null?j(""+L.key):et.toString(36)}function st(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(et){L.status==="pending"&&(L.status="fulfilled",L.value=et)},function(et){L.status==="pending"&&(L.status="rejected",L.reason=et)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,et,vt,yt,Nt){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ut=!1;if(L===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(L.$$typeof){case o:case e:ut=!0;break;case v:return ut=L._init,O(ut(L._payload),et,vt,yt,Nt)}}if(ut)return Nt=Nt(L),ut=yt===""?"."+lt(L,0):yt,k(Nt)?(vt="",ut!=null&&(vt=ut.replace(rt,"$&/")+"/"),O(Nt,et,vt,"",function(Ht){return Ht})):Nt!=null&&(H(Nt)&&(Nt=R(Nt,vt+(Nt.key==null||L&&L.key===Nt.key?"":(""+Nt.key).replace(rt,"$&/")+"/")+ut)),et.push(Nt)),1;ut=0;var Ct=yt===""?".":yt+":";if(k(L))for(var Pt=0;Pt<L.length;Pt++)yt=L[Pt],it=Ct+lt(yt,Pt),ut+=O(yt,et,vt,it,Nt);else if(Pt=M(L),typeof Pt=="function")for(L=Pt.call(L),Pt=0;!(yt=L.next()).done;)yt=yt.value,it=Ct+lt(yt,Pt++),ut+=O(yt,et,vt,it,Nt);else if(it==="object"){if(typeof L.then=="function")return O(st(L),et,vt,yt,Nt);throw et=String(L),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ut}function V(L,et,vt){if(L==null)return L;var yt=[],Nt=0;return O(L,yt,"","",function(it){return et.call(vt,it,Nt++)}),yt}function W(L){if(L._status===-1){var et=L._result;et=et(),et.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=et)}if(L._status===1)return L._result.default;throw L._result}var pt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},dt={map:V,forEach:function(L,et,vt){V(L,function(){et.apply(this,arguments)},vt)},count:function(L){var et=0;return V(L,function(){et++}),et},toArray:function(L){return V(L,function(et){return et})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return le.Activity=g,le.Children=dt,le.Component=_,le.Fragment=i,le.Profiler=l,le.PureComponent=U,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(L,et,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var yt=w({},L.props),Nt=L.key;if(et!=null)for(it in et.key!==void 0&&(Nt=""+et.key),et)!K.call(et,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&et.ref===void 0||(yt[it]=et[it]);var it=arguments.length-2;if(it===1)yt.children=vt;else if(1<it){for(var ut=Array(it),Ct=0;Ct<it;Ct++)ut[Ct]=arguments[Ct+2];yt.children=ut}return C(L.type,Nt,yt)},le.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},le.createElement=function(L,et,vt){var yt,Nt={},it=null;if(et!=null)for(yt in et.key!==void 0&&(it=""+et.key),et)K.call(et,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Nt[yt]=et[yt]);var ut=arguments.length-2;if(ut===1)Nt.children=vt;else if(1<ut){for(var Ct=Array(ut),Pt=0;Pt<ut;Pt++)Ct[Pt]=arguments[Pt+2];Nt.children=Ct}if(L&&L.defaultProps)for(yt in ut=L.defaultProps,ut)Nt[yt]===void 0&&(Nt[yt]=ut[yt]);return C(L,it,Nt)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:h,render:L}},le.isValidElement=H,le.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:W}},le.memo=function(L,et){return{$$typeof:p,type:L,compare:et===void 0?null:et}},le.startTransition=function(L){var et=F.T,vt={};F.T=vt;try{var yt=L(),Nt=F.S;Nt!==null&&Nt(vt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(N,pt)}catch(it){pt(it)}finally{et!==null&&vt.types!==null&&(et.types=vt.types),F.T=et}},le.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},le.use=function(L){return F.H.use(L)},le.useActionState=function(L,et,vt){return F.H.useActionState(L,et,vt)},le.useCallback=function(L,et){return F.H.useCallback(L,et)},le.useContext=function(L){return F.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,et){return F.H.useDeferredValue(L,et)},le.useEffect=function(L,et){return F.H.useEffect(L,et)},le.useEffectEvent=function(L){return F.H.useEffectEvent(L)},le.useId=function(){return F.H.useId()},le.useImperativeHandle=function(L,et,vt){return F.H.useImperativeHandle(L,et,vt)},le.useInsertionEffect=function(L,et){return F.H.useInsertionEffect(L,et)},le.useLayoutEffect=function(L,et){return F.H.useLayoutEffect(L,et)},le.useMemo=function(L,et){return F.H.useMemo(L,et)},le.useOptimistic=function(L,et){return F.H.useOptimistic(L,et)},le.useReducer=function(L,et,vt){return F.H.useReducer(L,et,vt)},le.useRef=function(L){return F.H.useRef(L)},le.useState=function(L){return F.H.useState(L)},le.useSyncExternalStore=function(L,et,vt){return F.H.useSyncExternalStore(L,et,vt)},le.useTransition=function(){return F.H.useTransition()},le.version="19.2.1",le}var ox;function ph(){return ox||(ox=1,Vf.exports=Zv()),Vf.exports}var Oe=ph();const Kv=ug(Oe);var Xf={exports:{}},bo={},kf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function Qv(){return lx||(lx=1,(function(o){function e(O,V){var W=O.length;O.push(V);t:for(;0<W;){var pt=W-1>>>1,dt=O[pt];if(0<l(dt,V))O[pt]=V,O[W]=dt,W=pt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var V=O[0],W=O.pop();if(W!==V){O[0]=W;t:for(var pt=0,dt=O.length,L=dt>>>1;pt<L;){var et=2*(pt+1)-1,vt=O[et],yt=et+1,Nt=O[yt];if(0>l(vt,W))yt<dt&&0>l(Nt,vt)?(O[pt]=Nt,O[yt]=W,pt=yt):(O[pt]=vt,O[et]=W,pt=et);else if(yt<dt&&0>l(Nt,W))O[pt]=Nt,O[yt]=W,pt=yt;else break t}}return V}function l(O,V){var W=O.sortIndex-V.sortIndex;return W!==0?W:O.id-V.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,S=3,M=!1,T=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(O){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=O)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function k(O){if(w=!1,I(O),!T)if(i(m)!==null)T=!0,N||(N=!0,j());else{var V=i(p);V!==null&&st(k,V.startTime-O)}}var N=!1,F=-1,K=5,C=-1;function R(){return y?!0:!(o.unstable_now()-C<K)}function H(){if(y=!1,N){var O=o.unstable_now();C=O;var V=!0;try{t:{T=!1,w&&(w=!1,P(F),F=-1),M=!0;var W=S;try{e:{for(I(O),g=i(m);g!==null&&!(g.expirationTime>O&&R());){var pt=g.callback;if(typeof pt=="function"){g.callback=null,S=g.priorityLevel;var dt=pt(g.expirationTime<=O);if(O=o.unstable_now(),typeof dt=="function"){g.callback=dt,I(O),V=!0;break e}g===i(m)&&r(m),I(O)}else r(m);g=i(m)}if(g!==null)V=!0;else{var L=i(p);L!==null&&st(k,L.startTime-O),V=!1}}break t}finally{g=null,S=W,M=!1}V=void 0}}finally{V?j():N=!1}}}var j;if(typeof U=="function")j=function(){U(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,lt=rt.port2;rt.port1.onmessage=H,j=function(){lt.postMessage(null)}}else j=function(){_(H,0)};function st(O,V){F=_(function(){O(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var W=S;S=V;try{return O()}finally{S=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=S;S=O;try{return V()}finally{S=W}},o.unstable_scheduleCallback=function(O,V,W){var pt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pt+W:pt):W=pt,O){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=W+dt,O={id:v++,callback:V,priorityLevel:O,startTime:W,expirationTime:dt,sortIndex:-1},W>pt?(O.sortIndex=W,e(p,O),i(m)===null&&O===i(p)&&(w?(P(F),F=-1):w=!0,st(k,W-pt))):(O.sortIndex=dt,e(m,O),T||M||(T=!0,N||(N=!0,j()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var V=S;return function(){var W=S;S=V;try{return O.apply(this,arguments)}finally{S=W}}}})(Wf)),Wf}var cx;function Jv(){return cx||(cx=1,kf.exports=Qv()),kf.exports}var qf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function $v(){if(ux)return Dn;ux=1;var o=ph();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.1",Dn}var fx;function tS(){if(fx)return qf.exports;fx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=$v(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function eS(){if(dx)return bo;dx=1;var o=Jv(),e=ph(),i=tS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case I:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var st=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pt=[],dt=-1;function L(t){return{current:t}}function et(t){0>dt||(t.current=pt[dt],pt[dt]=null,dt--)}function vt(t,n){dt++,pt[dt]=t.current,t.current=n}var yt=L(null),Nt=L(null),it=L(null),ut=L(null);function Ct(t,n){switch(vt(it,n),vt(Nt,t),vt(yt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Rm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Rm(n),t=Cm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(yt),vt(yt,t)}function Pt(){et(yt),et(Nt),et(it)}function Ht(t){t.memoizedState!==null&&vt(ut,t);var n=yt.current,a=Cm(n,t.type);n!==a&&(vt(Nt,t),vt(yt,a))}function $t(t){Nt.current===t&&(et(yt),et(Nt)),ut.current===t&&(et(ut),_o._currentValue=W)}var Ze,oe;function _e(t){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+t+oe}var B=!1;function ie(t,n){if(!t||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){nt=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var z=x.split(`
`),$=E.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===$.length)for(s=z.length-1,c=$.length-1;1<=s&&0<=c&&z[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==$[c]){var ht=`
`+z[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=c);break}}}finally{B=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_e(a):""}function re(t,n){switch(t.tag){case 26:case 27:case 5:return _e(t.type);case 16:return _e("Lazy");case 13:return t.child!==n&&n!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return ie(t.type,!1);case 11:return ie(t.type.render,!1);case 1:return ie(t.type,!0);case 31:return _e("Activity");default:return""}}function Te(t){try{var n="",a=null;do n+=re(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ft=Object.prototype.hasOwnProperty,Le=o.unstable_scheduleCallback,Wt=o.unstable_cancelCallback,ne=o.unstable_shouldYield,D=o.unstable_requestPaint,b=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Kt=o.log,kt=o.unstable_setDisableYieldValue,Mt=null,Et=null;function Yt(t){if(typeof Kt=="function"&&kt(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,t)}catch{}}var Vt=Math.clz32?Math.clz32:G,Ot=Math.log,ae=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ot(t)/ae|0)|0}var wt=256,At=262144,Rt=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=bt(s):(x&=E,x!==0?c=bt(x):a||(a=E&~t,a!==0&&(c=bt(a))))):(E=s&~f,E!==0?c=bt(E):x!==0?c=bt(x):a||(a=s&~t,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function se(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Re(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wn(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-Vt(a),gt=1<<ht;E[ht]=0,z[ht]=-1;var nt=$[ht];if(nt!==null)for($[ht]=null,ht=0;ht<nt.length;ht++){var ot=nt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~gt}s!==0&&Go(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Go(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Vt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Vt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ds(t,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ka(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Us(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:Qm(t.type))}function Ls(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var qn=Math.random().toString(36).slice(2),on="__reactFiber$"+qn,pn="__reactProps$"+qn,Oi="__reactContainer$"+qn,Rr="__reactEvents$"+qn,Oc="__reactListeners$"+qn,Pc="__reactHandles$"+qn,Vo="__reactResources$"+qn,Qa="__reactMarker$"+qn;function Ns(t){delete t[on],delete t[pn],delete t[Rr],delete t[Oc],delete t[Pc]}function pa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Pm(t);t!==null;){if(a=t[on])return a;t=Pm(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[on]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function at(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tt(t){t[Qa]=!0}var Z=new Set,Tt={};function Dt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Tt[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},ee={};function jt(t){return Ft.call(ee,t)?!0:Ft.call(Jt,t)?!1:Bt.test(t)?ee[t]=!0:(Jt[t]=!0,!1)}function de(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ce(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ye(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function We(t){if(!t._valueTracker){var n=Pe(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Pe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ma=/[\n"\\]/g;function Ye(t){return t.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,a,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ye(n)):t.value!==""+ye(n)&&(t.value=""+ye(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,x,ye(n)):a!=null?Sn(t,x,ye(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ye(E):t.removeAttribute("name")}function je(t,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){We(t);return}a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),We(t)}function Sn(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+ye(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ye(a):""}function En(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(st(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ye(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),We(t)}function Ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Th(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Eh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Eh(t,f,n[f])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return kg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Fc=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,wr=null;function Ah(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[pn]||null;if(!c)throw Error(r(90));Pi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Me(s)}break t;case"textarea":yn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mn(t,!!a.multiple,n,!1)}}}var Bc=!1;function Rh(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var s=t(n);return s}finally{if(Bc=!1,(Cr!==null||wr!==null)&&(Dl(),Cr&&(n=Cr,t=wr,wr=Cr=null,Ah(n),t)))for(n=0;n<t.length;n++)Ah(t[n])}}function Os(t,n){var a=t.stateNode;if(a===null)return null;var s=a[pn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Ii)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Hc=!1}var xa=null,Gc=null,ko=null;function Ch(){if(ko)return ko;var t,n=Gc,a=n.length,s,c="value"in xa?xa.value:xa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return ko=c.slice(t,1<s?1-s:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function wh(){return!1}function zn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=zn(Ja),zs=g({},Ja,{view:0,detail:0}),Wg=zn(zs),Vc,Xc,Fs,jo=g({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Vc=t.screenX-Fs.screenX,Xc=t.screenY-Fs.screenY):Xc=Vc=0,Fs=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),Dh=zn(jo),qg=g({},jo,{dataTransfer:0}),Yg=zn(qg),jg=g({},zs,{relatedTarget:0}),kc=zn(jg),Zg=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Kg=zn(Zg),Qg=g({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jg=zn(Qg),$g=g({},Ja,{data:0}),Uh=zn($g),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=n_[t])?!!n[t]:!1}function Wc(){return i_}var a_=g({},zs,{key:function(t){if(t.key){var n=t_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r_=zn(a_),s_=g({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=zn(s_),o_=g({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),l_=zn(o_),c_=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),u_=zn(c_),f_=g({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d_=zn(f_),h_=g({},Ja,{newState:0,oldState:0}),p_=zn(h_),m_=[9,13,27,32],qc=Ii&&"CompositionEvent"in window,Is=null;Ii&&"documentMode"in document&&(Is=document.documentMode);var x_=Ii&&"TextEvent"in window&&!Is,Nh=Ii&&(!qc||Is&&8<Is&&11>=Is),Oh=" ",Ph=!1;function zh(t,n){switch(t){case"keyup":return m_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function g_(t,n){switch(t){case"compositionend":return Fh(n);case"keypress":return n.which!==32?null:(Ph=!0,Oh);case"textInput":return t=n.data,t===Oh&&Ph?null:t;default:return null}}function __(t,n){if(Dr)return t==="compositionend"||!qc&&zh(t,n)?(t=Ch(),ko=Gc=xa=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!v_[t.type]:n==="textarea"}function Bh(t,n,a,s){Cr?wr?wr.push(s):wr=[s]:Cr=s,n=Fl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bs=null,Hs=null;function S_(t){ym(t,0)}function Zo(t){var n=q(t);if(Me(n))return t}function Hh(t,n){if(t==="change")return n}var Gh=!1;if(Ii){var Yc;if(Ii){var jc="oninput"in document;if(!jc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),jc=typeof Vh.oninput=="function"}Yc=jc}else Yc=!1;Gh=Yc&&(!document.documentMode||9<document.documentMode)}function Xh(){Bs&&(Bs.detachEvent("onpropertychange",kh),Hs=Bs=null)}function kh(t){if(t.propertyName==="value"&&Zo(Hs)){var n=[];Bh(n,Hs,t,Ic(t)),Rh(S_,n)}}function y_(t,n,a){t==="focusin"?(Xh(),Bs=n,Hs=a,Bs.attachEvent("onpropertychange",kh)):t==="focusout"&&Xh()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Hs)}function b_(t,n){if(t==="click")return Zo(n)}function E_(t,n){if(t==="input"||t==="change")return Zo(n)}function T_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:T_;function Gs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ft.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function Wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,n){var a=Wh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wh(a)}}function Yh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function jh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function Zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var A_=Ii&&"documentMode"in document&&11>=document.documentMode,Ur=null,Kc=null,Vs=null,Qc=!1;function Zh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Ur==null||Ur!==vn(s)||(s=Ur,"selectionStart"in s&&Zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vs&&Gs(Vs,s)||(Vs=s,s=Fl(Kc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ur)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Jc={},Kh={};Ii&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function tr(t){if(Jc[t])return Jc[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kh)return Jc[t]=n[a];return t}var Qh=tr("animationend"),Jh=tr("animationiteration"),$h=tr("animationstart"),R_=tr("transitionrun"),C_=tr("transitionstart"),w_=tr("transitioncancel"),tp=tr("transitionend"),ep=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function xi(t,n){ep.set(t,n),Dt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Nr=0,tu=0;function Qo(){for(var t=Nr,n=tu=Nr=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&np(a,c,f)}}function Jo(t,n,a,s){ai[Nr++]=t,ai[Nr++]=n,ai[Nr++]=a,ai[Nr++]=s,tu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function eu(t,n,a,s){return Jo(t,n,a,s),$o(t)}function er(t,n){return Jo(t,null,null,n),$o(t)}function np(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Vt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<uo)throw uo=0,ff=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Or={};function D_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new D_(t,n,a,s)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ip(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")nu(t)&&(x=1);else if(typeof t=="string")x=Pv(t,a,yt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=jn(31,a,n,c),t.elementType=C,t.lanes=f,t;case w:return nr(a.children,c,f,n);case y:x=8,c|=24;break;case _:return t=jn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case k:return t=jn(13,a,n,c),t.elementType=k,t.lanes=f,t;case N:return t=jn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:x=10;break t;case P:x=9;break t;case I:x=11;break t;case F:x=14;break t;case K:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function nr(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function iu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function ap(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function au(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var rp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=rp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Te(n)},rp.set(t,n),n)}return{value:t,source:n,stack:Te(n)}}var Pr=[],zr=0,el=null,Xs=0,si=[],oi=0,ga=null,Ai=1,Ri="";function Hi(t,n){Pr[zr++]=Xs,Pr[zr++]=el,el=t,Xs=n}function sp(t,n,a){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=ga,ga=t;var s=Ai;t=Ri;var c=32-Vt(s)-1;s&=~(1<<c),a+=1;var f=32-Vt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ai=1<<32-Vt(n)+c|a<<c|s,Ri=f+t}else Ai=1<<f|a<<c|s,Ri=t}function ru(t){t.return!==null&&(Hi(t,1),sp(t,1,0))}function su(t){for(;t===el;)el=Pr[--zr],Pr[zr]=null,Xs=Pr[--zr],Pr[zr]=null;for(;t===ga;)ga=si[--oi],si[oi]=null,Ri=si[--oi],si[oi]=null,Ai=si[--oi],si[oi]=null}function op(t,n){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=ga,Ai=n.id,Ri=n.overflow,ga=t}var Tn=null,Ke=null,be=!1,_a=null,li=!1,ou=Error(r(519));function va(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ks(ri(n,t)),ou}function lp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[pn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)ge(ho[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),je(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),En(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Tm(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||va(t,!0)}function cp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Tn=Tn.return}}function Fr(t){if(t!==Tn)return!1;if(!be)return cp(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Af(t.type,t.memoizedProps)),a=!a),a&&Ke&&va(t),cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Om(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Om(t)}else n===27?(n=Ke,Na(t.type)?(t=Uf,Uf=null,Ke=t):Ke=n):Ke=Tn?ui(t.stateNode.nextSibling):null;return!0}function ir(){Ke=Tn=null,be=!1}function lu(){var t=_a;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),_a=null),t}function ks(t){_a===null?_a=[t]:_a.push(t)}var cu=L(null),ar=null,Gi=null;function Sa(t,n,a){vt(cu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=cu.current,et(cu)}function uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function fu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),uu(f.return,a,t),s||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),uu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ir(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;Yn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===ut.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&fu(n,t,a,s),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return up(ar,t)}function il(t,n){return ar===null&&rr(t),up(t,n)}function up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var U_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},L_=o.unstable_scheduleCallback,N_=o.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new U_,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&L_(N_,function(){t.controller.abort()})}var qs=null,hu=0,Br=0,Hr=null;function O_(t,n){if(qs===null){var a=qs=[];hu=0,Br=gf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return hu++,n.then(fp,fp),n}function fp(){if(--hu===0&&qs!==null){Hr!==null&&(Hr.status="fulfilled");var t=qs;qs=null,Br=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function P_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var dp=O.S;O.S=function(t,n){Z0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&O_(t,n),dp!==null&&dp(t,n)};var sr=L(null);function pu(){var t=sr.current;return t!==null?t:qe.pooledCache}function al(t,n){n===null?vt(sr,sr.current):vt(sr,n.pool)}function hp(){var t=pu();return t===null?null:{parent:ln._currentValue,pool:t}}var Gr=Error(r(460)),mu=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t}throw lr=n,Gr}}function or(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,Gr):a}}var lr=null;function xp(){if(lr===null)throw Error(r(459));var t=lr;return lr=null,t}function gp(t){if(t===Gr||t===rl)throw Error(r(483))}var Vr=null,Ys=0;function ol(t){var n=Ys;return Ys+=1,Vr===null&&(Vr=[]),mp(Vr,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _p(t){function n(Y,X){if(t){var J=Y.deletions;J===null?(Y.deletions=[X],Y.flags|=16):J.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function c(Y,X){return Y=Bi(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<X?(Y.flags|=67108866,X):J):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function x(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,X,J,xt){return X===null||X.tag!==6?(X=iu(J,Y.mode,xt),X.return=Y,X):(X=c(X,J),X.return=Y,X)}function z(Y,X,J,xt){var Zt=J.type;return Zt===w?ht(Y,X,J.props.children,xt,J.key):X!==null&&(X.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===K&&or(Zt)===X.type)?(X=c(X,J.props),js(X,J),X.return=Y,X):(X=tl(J.type,J.key,J.props,null,Y.mode,xt),js(X,J),X.return=Y,X)}function $(Y,X,J,xt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=au(J,Y.mode,xt),X.return=Y,X):(X=c(X,J.children||[]),X.return=Y,X)}function ht(Y,X,J,xt,Zt){return X===null||X.tag!==7?(X=nr(J,Y.mode,xt,Zt),X.return=Y,X):(X=c(X,J),X.return=Y,X)}function gt(Y,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=iu(""+X,Y.mode,J),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return J=tl(X.type,X.key,X.props,null,Y.mode,J),js(J,X),J.return=Y,J;case T:return X=au(X,Y.mode,J),X.return=Y,X;case K:return X=or(X),gt(Y,X,J)}if(st(X)||j(X))return X=nr(X,Y.mode,J,null),X.return=Y,X;if(typeof X.then=="function")return gt(Y,ol(X),J);if(X.$$typeof===U)return gt(Y,il(Y,X),J);ll(Y,X)}return null}function nt(Y,X,J,xt){var Zt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Zt!==null?null:E(Y,X,""+J,xt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Zt?z(Y,X,J,xt):null;case T:return J.key===Zt?$(Y,X,J,xt):null;case K:return J=or(J),nt(Y,X,J,xt)}if(st(J)||j(J))return Zt!==null?null:ht(Y,X,J,xt,null);if(typeof J.then=="function")return nt(Y,X,ol(J),xt);if(J.$$typeof===U)return nt(Y,X,il(Y,J),xt);ll(Y,J)}return null}function ot(Y,X,J,xt,Zt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Y=Y.get(J)||null,E(X,Y,""+xt,Zt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case M:return Y=Y.get(xt.key===null?J:xt.key)||null,z(X,Y,xt,Zt);case T:return Y=Y.get(xt.key===null?J:xt.key)||null,$(X,Y,xt,Zt);case K:return xt=or(xt),ot(Y,X,J,xt,Zt)}if(st(xt)||j(xt))return Y=Y.get(J)||null,ht(X,Y,xt,Zt,null);if(typeof xt.then=="function")return ot(Y,X,J,ol(xt),Zt);if(xt.$$typeof===U)return ot(Y,X,J,il(X,xt),Zt);ll(X,xt)}return null}function Gt(Y,X,J,xt){for(var Zt=null,we=null,Xt=X,he=X=0,Se=null;Xt!==null&&he<J.length;he++){Xt.index>he?(Se=Xt,Xt=null):Se=Xt.sibling;var De=nt(Y,Xt,J[he],xt);if(De===null){Xt===null&&(Xt=Se);break}t&&Xt&&De.alternate===null&&n(Y,Xt),X=f(De,X,he),we===null?Zt=De:we.sibling=De,we=De,Xt=Se}if(he===J.length)return a(Y,Xt),be&&Hi(Y,he),Zt;if(Xt===null){for(;he<J.length;he++)Xt=gt(Y,J[he],xt),Xt!==null&&(X=f(Xt,X,he),we===null?Zt=Xt:we.sibling=Xt,we=Xt);return be&&Hi(Y,he),Zt}for(Xt=s(Xt);he<J.length;he++)Se=ot(Xt,Y,he,J[he],xt),Se!==null&&(t&&Se.alternate!==null&&Xt.delete(Se.key===null?he:Se.key),X=f(Se,X,he),we===null?Zt=Se:we.sibling=Se,we=Se);return t&&Xt.forEach(function(Ia){return n(Y,Ia)}),be&&Hi(Y,he),Zt}function te(Y,X,J,xt){if(J==null)throw Error(r(151));for(var Zt=null,we=null,Xt=X,he=X=0,Se=null,De=J.next();Xt!==null&&!De.done;he++,De=J.next()){Xt.index>he?(Se=Xt,Xt=null):Se=Xt.sibling;var Ia=nt(Y,Xt,De.value,xt);if(Ia===null){Xt===null&&(Xt=Se);break}t&&Xt&&Ia.alternate===null&&n(Y,Xt),X=f(Ia,X,he),we===null?Zt=Ia:we.sibling=Ia,we=Ia,Xt=Se}if(De.done)return a(Y,Xt),be&&Hi(Y,he),Zt;if(Xt===null){for(;!De.done;he++,De=J.next())De=gt(Y,De.value,xt),De!==null&&(X=f(De,X,he),we===null?Zt=De:we.sibling=De,we=De);return be&&Hi(Y,he),Zt}for(Xt=s(Xt);!De.done;he++,De=J.next())De=ot(Xt,Y,he,De.value,xt),De!==null&&(t&&De.alternate!==null&&Xt.delete(De.key===null?he:De.key),X=f(De,X,he),we===null?Zt=De:we.sibling=De,we=De);return t&&Xt.forEach(function(qv){return n(Y,qv)}),be&&Hi(Y,he),Zt}function Ve(Y,X,J,xt){if(typeof J=="object"&&J!==null&&J.type===w&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Zt=J.key;X!==null;){if(X.key===Zt){if(Zt=J.type,Zt===w){if(X.tag===7){a(Y,X.sibling),xt=c(X,J.props.children),xt.return=Y,Y=xt;break t}}else if(X.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===K&&or(Zt)===X.type){a(Y,X.sibling),xt=c(X,J.props),js(xt,J),xt.return=Y,Y=xt;break t}a(Y,X);break}else n(Y,X);X=X.sibling}J.type===w?(xt=nr(J.props.children,Y.mode,xt,J.key),xt.return=Y,Y=xt):(xt=tl(J.type,J.key,J.props,null,Y.mode,xt),js(xt,J),xt.return=Y,Y=xt)}return x(Y);case T:t:{for(Zt=J.key;X!==null;){if(X.key===Zt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(Y,X.sibling),xt=c(X,J.children||[]),xt.return=Y,Y=xt;break t}else{a(Y,X);break}else n(Y,X);X=X.sibling}xt=au(J,Y.mode,xt),xt.return=Y,Y=xt}return x(Y);case K:return J=or(J),Ve(Y,X,J,xt)}if(st(J))return Gt(Y,X,J,xt);if(j(J)){if(Zt=j(J),typeof Zt!="function")throw Error(r(150));return J=Zt.call(J),te(Y,X,J,xt)}if(typeof J.then=="function")return Ve(Y,X,ol(J),xt);if(J.$$typeof===U)return Ve(Y,X,il(Y,J),xt);ll(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(Y,X.sibling),xt=c(X,J),xt.return=Y,Y=xt):(a(Y,X),xt=iu(J,Y.mode,xt),xt.return=Y,Y=xt),x(Y)):a(Y,X)}return function(Y,X,J,xt){try{Ys=0;var Zt=Ve(Y,X,J,xt);return Vr=null,Zt}catch(Xt){if(Xt===Gr||Xt===rl)throw Xt;var we=jn(29,Xt,null,Y.mode);return we.lanes=xt,we.return=Y,we}finally{}}}var cr=_p(!0),vp=_p(!1),ya=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(t),np(t,null,a),n}return Jo(t,s,n,a),$o(t)}function Zs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}function _u(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vu=!1;function Ks(){if(vu){var t=Hr;if(t!==null)throw t}}function Qs(t,n,a,s){vu=!1;var c=t.updateQueue;ya=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,$=z.next;z.next=null,x===null?f=$:x.next=$,x=z;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,E=ht.lastBaseUpdate,E!==x&&(E===null?ht.firstBaseUpdate=$:E.next=$,ht.lastBaseUpdate=z))}if(f!==null){var gt=c.baseState;x=0,ht=$=z=null,E=f;do{var nt=E.lane&-536870913,ot=nt!==E.lane;if(ot?(ve&nt)===nt:(s&nt)===nt){nt!==0&&nt===Br&&(vu=!0),ht!==null&&(ht=ht.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Gt=t,te=E;nt=n;var Ve=a;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){gt=Gt.call(Ve,gt,nt);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,nt=typeof Gt=="function"?Gt.call(Ve,gt,nt):Gt,nt==null)break t;gt=g({},gt,nt);break t;case 2:ya=!0}}nt=E.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ht===null?($=ht=ot,z=gt):ht=ht.next=ot,x|=nt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;ot=E,E=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ht===null&&(z=gt),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Ca|=x,t.lanes=x,t.memoizedState=gt}}function Sp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function yp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Sp(a[t],n)}var Xr=L(null),cl=L(0);function Mp(t,n){t=Qi,vt(cl,t),vt(Xr,n),Qi=t|n.baseLanes}function Su(){vt(cl,Qi),vt(Xr,Xr.current)}function yu(){Qi=cl.current,et(Xr),et(cl)}var Zn=L(null),ci=null;function Ea(t){var n=t.alternate;vt(en,en.current&1),vt(Zn,t),ci===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(ci=t)}function Mu(t){vt(en,en.current),vt(Zn,t),ci===null&&(ci=t)}function bp(t){t.tag===22?(vt(en,en.current),vt(Zn,t),ci===null&&(ci=t)):Ta()}function Ta(){vt(en,en.current),vt(Zn,Zn.current)}function Kn(t){et(Zn),ci===t&&(ci=null),et(en)}var en=L(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,ce=null,He=null,cn=null,fl=!1,kr=!1,ur=!1,dl=0,Js=0,Wr=null,z_=0;function $e(){throw Error(r(321))}function bu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Eu(t,n,a,s,c,f){return Xi=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?s0:Bu,ur=!1,f=a(s,c),ur=!1,kr&&(f=Tp(n,a,s,c)),Ep(t),f}function Ep(t){O.H=eo;var n=He!==null&&He.next!==null;if(Xi=0,cn=He=ce=null,fl=!1,Js=0,Wr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&nl(t)&&(un=!0))}function Tp(t,n,a,s){ce=t;var c=0;do{if(kr&&(Wr=null),Js=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,cn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=o0,f=n(a,s)}while(kr);return f}function F_(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(ce.flags|=1024),n}function Tu(){var t=dl!==0;return dl=0,t}function Au(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ru(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Xi=0,cn=He=ce=null,kr=!1,Js=dl=0,Wr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ce.memoizedState=cn=t:cn=cn.next=t,cn}function nn(){if(He===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=cn===null?ce.memoizedState:cn.next;if(n!==null)cn=n,He=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?ce.memoizedState=cn=t:cn=cn.next=t}return cn}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Wr===null&&(Wr=[]),t=mp(Wr,t,n),n=ce,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?s0:Bu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===U)return An(t)}throw Error(r(438,String(t)))}function Cu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=nn();return wu(n,He,t)}function wu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,z=null,$=n,ht=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(ve&gt)===gt:(Xi&gt)===gt){var nt=$.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===Br&&(ht=!0);else if((Xi&nt)===nt){$=$.next,nt===Br&&(ht=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=gt,x=f):z=z.next=gt,ce.lanes|=nt,Ca|=nt;gt=$.action,ur&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else nt={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=nt,x=f):z=z.next=nt,ce.lanes|=gt,Ca|=gt;$=$.next}while($!==null&&$!==n);if(z===null?x=f:z.next=E,!Yn(f,t.memoizedState)&&(un=!0,ht&&(a=Hr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Du(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Yn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ap(t,n,a){var s=ce,c=nn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Yn((He||c).memoizedState,a);if(x&&(c.memoizedState=a,un=!0),c=c.queue,Nu(wp.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Cp.bind(null,s,c,a,n),null),qe===null)throw Error(r(349));f||(Xi&127)!==0||Rp(s,n,a)}return a}function Rp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=hl(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Cp(t,n,a,s){n.value=a,n.getSnapshot=s,Dp(n)&&Up(t)}function wp(t,n,a){return a(function(){Dp(n)&&Up(t)})}function Dp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Up(t){var n=er(t,2);n!==null&&Gn(n,t,2)}function Uu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),ur){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Lp(t,n,a,s){return t.baseState=a,wu(t,He,typeof s=="function"?s:ki)}function I_(t,n,a,s,c){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Np(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Np(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var E=a(c,s),z=O.S;z!==null&&z(x,E),Op(t,n,E)}catch($){Lu(t,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(c,s),Op(t,n,f)}catch($){Lu(t,n,$)}}function Op(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Pp(t,n,s)},function(s){return Lu(t,n,s)}):Pp(t,n,a)}function Pp(t,n,a){n.status="fulfilled",n.value=a,zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Np(t,a)))}function Lu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,zp(n),n=n.next;while(n!==s)}t.action=null}function zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fp(t,n){return n}function Ip(t,n){if(be){var a=qe.formState;if(a!==null){t:{var s=ce;if(be){if(Ke){e:{for(var c=Ke,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=ui(c.nextSibling),s=c.data==="F!";break t}}va(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=s,a=i0.bind(null,ce,s),s.dispatch=a,s=Uu(!1),f=Iu.bind(null,ce,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=I_.bind(null,ce,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Bp(t){var n=nn();return Hp(n,He,t)}function Hp(t,n,a){if(n=wu(t,n,Fp)[0],t=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(x){throw x===Gr?rl:x}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,qr(9,{destroy:void 0},B_.bind(null,c,a),null)),[s,f,t]}function B_(t,n){t.action=n}function Gp(t){var n=nn(),a=He;if(a!==null)return Hp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function qr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ce.updateQueue,n===null&&(n=hl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Vp(){return nn().memoizedState}function xl(t,n,a,s){var c=Nn();ce.flags|=t,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function gl(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;He!==null&&s!==null&&bu(s,He.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(ce.flags|=t,c.memoizedState=qr(1|n,f,a,s))}function Xp(t,n){xl(8390656,8,t,n)}function Nu(t,n){gl(2048,8,t,n)}function H_(t){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=hl(),ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function kp(t){var n=nn().memoizedState;return H_({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Wp(t,n){return gl(4,2,t,n)}function qp(t,n){return gl(4,4,t,n)}function Yp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,Yp.bind(null,n,t),a)}function Ou(){}function Zp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Kp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bu(n,s[1]))return s[0];if(s=t(),ur){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function Pu(t,n,a){return a===void 0||(Xi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Q0(),ce.lanes|=t,Ca|=t,a)}function Qp(t,n,a,s){return Yn(a,n)?a:Xr.current!==null?(t=Pu(t,a,s),Yn(t,n)||(un=!0),t):(Xi&42)===0||(Xi&1073741824)!==0&&(ve&261930)===0?(un=!0,t.memoizedState=a):(t=Q0(),ce.lanes|=t,Ca|=t,n)}function Jp(t,n,a,s,c){var f=V.p;V.p=f!==0&&8>f?f:8;var x=O.T,E={};O.T=E,Iu(t,!1,n,a);try{var z=c(),$=O.S;if($!==null&&$(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ht=P_(z,s);to(t,n,ht,$n(t))}else to(t,n,s,$n(t))}catch(gt){to(t,n,{then:function(){},status:"rejected",reason:gt},$n())}finally{V.p=f,x!==null&&E.types!==null&&(x.types=E.types),O.T=x}}function G_(){}function zu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=$p(t).queue;Jp(t,c,n,W,a===null?G_:function(){return t0(t),a(s)})}function $p(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function t0(t){var n=$p(t);n.next===null&&(n=t.alternate.memoizedState),to(t,n.next.queue,{},$n())}function Fu(){return An(_o)}function e0(){return nn().memoizedState}function n0(){return nn().memoizedState}function V_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Ma(a);var s=ba(n,t,a);s!==null&&(Gn(s,n,a),Zs(s,n,a)),n={cache:du()},t.payload=n;return}n=n.return}}function X_(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?a0(n,a):(a=eu(t,n,a,s),a!==null&&(Gn(a,t,s),r0(a,n,s)))}function i0(t,n,a){var s=$n();to(t,n,a,s)}function to(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))a0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Yn(E,x))return Jo(t,n,c,0),qe===null&&Qo(),!1}catch{}finally{}if(a=eu(t,n,c,s),a!==null)return Gn(a,t,s),r0(a,n,s),!0}return!1}function Iu(t,n,a,s){if(s={lane:2,revertLane:gf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=eu(t,a,s,2),n!==null&&Gn(n,t,2)}function _l(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function a0(t,n){kr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function r0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}var eo={readContext:An,use:pl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};eo.useEffectEvent=$e;var s0={readContext:An,use:pl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Xp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xl(4194308,4,Yp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xl(4194308,4,t,n)},useInsertionEffect:function(t,n){xl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(ur){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(ur){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=X_.bind(null,ce,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Uu(t);var n=t.queue,a=i0.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(t,n){var a=Nn();return Pu(a,t,n)},useTransition:function(){var t=Uu(!1);return t=Jp.bind(null,ce,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ce,c=Nn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(ve&127)!==0||Rp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Xp(wp.bind(null,s,f,t),[t]),s.flags|=2048,qr(9,{destroy:void 0},Cp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=qe.identifierPrefix;if(be){var a=Ri,s=Ai;a=(s&~(1<<32-Vt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=z_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Fu,useFormState:Ip,useActionState:Ip,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Cu,useCacheRefresh:function(){return Nn().memoizedState=V_.bind(null,ce)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:An,use:pl,useCallback:Zp,useContext:An,useEffect:Nu,useImperativeHandle:jp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Kp,useReducer:ml,useRef:Vp,useState:function(){return ml(ki)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=nn();return Qp(a,He.memoizedState,t,n)},useTransition:function(){var t=ml(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Ap,useId:e0,useHostTransitionStatus:Fu,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=nn();return Lp(a,He,t,n)},useMemoCache:Cu,useCacheRefresh:n0};Bu.useEffectEvent=kp;var o0={readContext:An,use:pl,useCallback:Zp,useContext:An,useEffect:Nu,useImperativeHandle:jp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Kp,useReducer:Du,useRef:Vp,useState:function(){return Du(ki)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=nn();return He===null?Pu(a,t,n):Qp(a,He.memoizedState,t,n)},useTransition:function(){var t=Du(ki)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Ap,useId:e0,useHostTransitionStatus:Fu,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,n){var a=nn();return He!==null?Lp(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:n0};o0.useEffectEvent=kp;function Hu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),c=Ma(s);c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,s),n!==null&&(Gn(n,t,s),Zs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),c=Ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,s),n!==null&&(Gn(n,t,s),Zs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=Ma(a);s.tag=2,n!=null&&(s.callback=n),n=ba(t,s,a),n!==null&&(Gn(n,t,a),Zs(n,t,a))}};function l0(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(c,f):!0}function c0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Gu.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function u0(t){Ko(t)}function f0(t){console.error(t)}function d0(t){Ko(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function h0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function p0(t){return t=Ma(t),t.tag=3,t}function m0(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){h0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){h0(n,a,s),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function k_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Ul():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),pf(t,s,c)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),pf(t,s,c)),!1}throw Error(r(435,a.tag))}return pf(t,s,c),Ul(),!1}if(be)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ou&&(t=Error(r(422),{cause:s}),ks(ri(t,a)))):(s!==ou&&(n=Error(r(423),{cause:s}),ks(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ri(s,a),c=Vu(t.stateNode,s,c),_u(t,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),co===null?co=[f]:co.push(f),tn!==4&&(tn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Vu(a.stateNode,s,t),_u(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=p0(c),m0(c,t,a,s),_u(a,c),!1}a=a.return}while(a!==null);return!1}var Xu=Error(r(461)),un=!1;function Rn(t,n,a,s){n.child=t===null?vp(n,null,a,s):cr(n,t.child,a,s)}function x0(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return rr(n),s=Eu(t,n,a,x,f,c),E=Tu(),t!==null&&!un?(Au(t,n,c),Wi(t,n,c)):(be&&E&&ru(n),n.flags|=1,Rn(t,n,s,c),n.child)}function g0(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_0(t,n,f,s,c)):(t=tl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Qu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(x,s)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=Bi(f,s),t.ref=n.ref,t.return=n,n.child=t}function _0(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Gs(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,Qu(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return ku(t,n,a,s,c)}function v0(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return S0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?Mp(n,f):Su(),bp(n);else return s=n.lanes=536870912,S0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),Mp(n,f),Ta(),n.memoizedState=null):(t!==null&&al(n,null),Su(),Ta());return Rn(t,n,c,a),n.child}function no(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function S0(t,n,a,s,c){var f=pu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),Su(),bp(n),t!==null&&Ir(t,n,s,!0),n.childLanes=c,null}function Sl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function y0(t,n,a){return cr(n,t.child,null,a),t=Sl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function W_(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(s.mode==="hidden")return t=Sl(n,s),n.lanes=536870912,no(null,t);if(Mu(n),(t=Ke)?(t=Nm(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=ap(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw va(n);return n.lanes=536870912,null}return Sl(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=y0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Ir(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(s=qe,s!==null&&(x=Ds(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,er(t,x),Gn(s,t,x),Xu;Ul(),n=y0(t,n,a)}else t=f.treeContext,Ke=ui(x.nextSibling),Tn=n,be=!0,_a=null,li=!1,t!==null&&op(n,t),n=Sl(n,s),n.flags|=4096;return n}return t=Bi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ku(t,n,a,s,c){return rr(n),a=Eu(t,n,a,s,void 0,c),s=Tu(),t!==null&&!un?(Au(t,n,c),Wi(t,n,c)):(be&&s&&ru(n),n.flags|=1,Rn(t,n,a,c),n.child)}function M0(t,n,a,s,c,f){return rr(n),n.updateQueue=null,a=Tp(n,s,a,c),Ep(t),s=Tu(),t!==null&&!un?(Au(t,n,f),Wi(t,n,f)):(be&&s&&ru(n),n.flags|=1,Rn(t,n,a,f),n.child)}function b0(t,n,a,s,c){if(rr(n),n.stateNode===null){var f=Or,x=a.contextType;typeof x=="object"&&x!==null&&(f=An(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},xu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?An(x):Or,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Hu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Gu.enqueueReplaceState(f,f.state,null),Qs(n,s,f,c),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=fr(a,E);f.props=z;var $=f.context,ht=a.contextType;x=Or,typeof ht=="object"&&ht!==null&&(x=An(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==x)&&c0(n,f,s,x),ya=!1;var nt=n.memoizedState;f.state=nt,Qs(n,s,f,c),Ks(),$=n.memoizedState,E||nt!==$||ya?(typeof gt=="function"&&(Hu(n,a,gt,s),$=n.memoizedState),(z=ya||l0(n,a,z,s,nt,$,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,gu(t,n),x=n.memoizedProps,ht=fr(a,x),f.props=ht,gt=n.pendingProps,nt=f.context,$=a.contextType,z=Or,typeof $=="object"&&$!==null&&(z=An($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||nt!==z)&&c0(n,f,s,z),ya=!1,nt=n.memoizedState,f.state=nt,Qs(n,s,f,c),Ks();var ot=n.memoizedState;x!==gt||nt!==ot||ya||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof E=="function"&&(Hu(n,a,E,s),ot=n.memoizedState),(ht=ya||l0(n,a,ht,s,nt,ot,z)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=z,s=ht):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=cr(n,t.child,null,c),n.child=cr(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Wi(t,n,c),t}function E0(t,n,a,s){return ir(),n.flags|=256,Rn(t,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:hp()}}function Yu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function T0(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Ea(n):Ta(),(t=Ke)?(t=Nm(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=ap(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw va(n);return Df(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ta(),c=n.mode,E=Ml({mode:"hidden",children:E},c),s=nr(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,x,a),n.memoizedState=Wu,no(null,s)):(Ea(n),ju(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=Zu(t,n,a)):n.memoizedState!==null?(Ta(),n.child=t.child,n.flags|=128,n=null):(Ta(),E=s.fallback,c=n.mode,s=Ml({mode:"visible",children:s.children},c),E=nr(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,cr(n,t.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,x,a),n.memoizedState=Wu,n=no(null,s));else if(Ea(n),Df(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,ks({value:s,source:null,stack:null}),n=Zu(t,n,a)}else if(un||Ir(t,n,a,!1),x=(a&t.childLanes)!==0,un||x){if(x=qe,x!==null&&(s=Ds(x,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,er(t,s),Gn(x,t,s),Xu;wf(E)||Ul(),n=Zu(t,n,a)}else wf(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ke=ui(E.nextSibling),Tn=n,be=!0,_a=null,li=!1,t!==null&&op(n,t),n=ju(n,s.children),n.flags|=4096);return n}return c?(Ta(),E=s.fallback,c=n.mode,z=t.child,$=z.sibling,s=Bi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,$!==null?E=Bi($,E):(E=nr(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,no(null,s),s=n.child,E=t.child.memoizedState,E===null?E=qu(a):(c=E.cachePool,c!==null?(z=ln._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=hp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=Yu(t,x,a),n.memoizedState=Wu,no(t.child,s)):(Ea(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function ju(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function Zu(t,n,a){return cr(n,t.child,null,a),t=ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function A0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),uu(t.return,n,a)}function Ku(t,n,a,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function R0(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=en.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,vt(en,x),Rn(t,n,s,a),s=be?Xs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A0(t,a,n);else if(t.tag===19)A0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ku(n,!0,a,null,f,s);break;case"together":Ku(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function q_(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),Sa(n,ln,t.memoizedState.cache),ir();break;case 27:case 5:Ht(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T0(t,n,a):(Ea(n),t=Wi(t,n,a),t!==null?t.sibling:null);Ea(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ir(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return R0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(en,en.current),s)break;return null;case 22:return n.lanes=0,v0(t,n,a,n.pendingProps);case 24:Sa(n,ln,t.memoizedState.cache)}return Wi(t,n,a)}function C0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Qu(t,a)&&(n.flags&128)===0)return un=!1,q_(t,n,a);un=(t.flags&131072)!==0}else un=!1,be&&(n.flags&1048576)!==0&&sp(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=or(n.elementType),n.type=t,typeof t=="function")nu(t)?(s=fr(t,s),n.tag=1,n=b0(null,n,t,s,a)):(n.tag=0,n=ku(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===I){n.tag=11,n=x0(null,n,t,s,a);break t}else if(c===F){n.tag=14,n=g0(null,n,t,s,a);break t}}throw n=lt(t)||t,Error(r(306,n,""))}}return n;case 0:return ku(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=fr(s,n.pendingProps),b0(t,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,gu(t,n),Qs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Sa(n,ln,s),s!==f.cache&&fu(n,[ln],a,!0),Ks(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=E0(t,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),ks(c),n=E0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=ui(t.firstChild),Tn=n,be=!0,_a=null,li=!0,a=vp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ir(),s===c){n=Wi(t,n,a);break t}Rn(t,n,s,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=Bm(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Il(it.current).createElement(a),s[on]=n,s[pn]=t,Cn(s,a,t),tt(s),n.stateNode=s):n.memoizedState=Bm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&be&&(s=n.stateNode=zm(n.type,n.pendingProps,it.current),Tn=n,li=!0,c=Ke,Na(n.type)?(Uf=c,Ke=ui(s.firstChild)):Ke=c),Rn(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=Ke)&&(s=Mv(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,Tn=n,Ke=ui(s.firstChild),li=!1,c=!0):c=!1),c||va(n)),Ht(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,Af(c,f)?s=null:x!==null&&Af(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(t,n,F_,null,null,a),_o._currentValue=c),yl(t,n),Rn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Ke)&&(a=bv(a,n.pendingProps,li),a!==null?(n.stateNode=a,Tn=n,Ke=null,t=!0):t=!1),t||va(n)),null;case 13:return T0(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=cr(n,null,s,a):Rn(t,n,s,a),n.child;case 11:return x0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Sa(n,n.type,s.value),Rn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,rr(n),c=An(c),s=s(c),n.flags|=1,Rn(t,n,s,a),n.child;case 14:return g0(t,n,n.type,n.pendingProps,a);case 15:return _0(t,n,n.type,n.pendingProps,a);case 19:return R0(t,n,a);case 31:return W_(t,n,a);case 22:return v0(t,n,a,n.pendingProps);case 24:return rr(n),s=An(ln),t===null?(c=pu(),c===null&&(c=qe,f=du(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},xu(n),Sa(n,ln,c)):((t.lanes&a)!==0&&(gu(t,n),Qs(n,null,null,a),Ks()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,ln,s)):(s=f.cache,Sa(n,ln,s),s!==c.cache&&fu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function Ju(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(em())t.flags|=8192;else throw lr=sl,mu}else t.flags&=-16777217}function w0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!km(n))if(em())t.flags|=8192;else throw lr=sl,mu}function bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Be():536870912,t.lanes|=n,Kr|=n)}function io(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Y_(t,n,a){var s=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(ln),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fr(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),Qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(qi(n),f!==null?(Qe(n),w0(n,f)):(Qe(n),Ju(n,c,null,s,a))):f?f!==t.memoizedState?(qi(n),Qe(n),w0(n,f)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&qi(n),Qe(n),Ju(n,c,t,s,a)),null;case 27:if($t(n),a=it.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}t=yt.current,Fr(n)?lp(n):(t=zm(c,s,a),n.stateNode=t,qi(n))}return Qe(n),null;case 5:if($t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(f=yt.current,Fr(n))lp(n);else{var x=Il(it.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[on]=n,f[pn]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Cn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&qi(n)}}return Qe(n),Ju(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=it.current,Fr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Tm(t.nodeValue,a)),t||va(n,!0)}else t=Il(t).createTextNode(s),t[on]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Fr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),Qe(n),null);case 4:return Pt(),t===null&&yf(n.stateNode.containerInfo),Qe(n),null;case 10:return Vi(n.type),Qe(n),null;case 19:if(et(en),s=n.memoizedState,s===null)return Qe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)io(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,io(s,!1),t=f.updateQueue,n.updateQueue=t,bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ip(a,t),a=a.sibling;return vt(en,en.current&1|2),be&&Hi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>Cl&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,bl(n,t),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!be)return Qe(n),null}else 2*b()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=en.current,vt(en,c?a&1|2:a&1),be&&Hi(n,s.treeForkCount),t):(Qe(n),null);case 22:case 23:return Kn(n),yu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&et(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(ln),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function j_(t,n){switch(su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(ln),Pt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(en),null;case 4:return Pt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Kn(n),yu(),t!==null&&et(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(ln),null;case 25:return null;default:return null}}function D0(t,n){switch(su(n),n.tag){case 3:Vi(ln),Pt();break;case 26:case 27:case 5:$t(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:et(en);break;case 10:Vi(n.type);break;case 22:case 23:Kn(n),yu(),t!==null&&et(sr);break;case 24:Vi(ln)}}function ao(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){Fe(n,n.return,E)}}function Aa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var z=a,$=E;try{$()}catch(ht){Fe(c,z,ht)}}}s=s.next}while(s!==f)}}catch(ht){Fe(n,n.return,ht)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{yp(n,a)}catch(s){Fe(t,t.return,s)}}}function L0(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Fe(t,n,c)}}function Ci(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function N0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function $u(t,n,a){try{var s=t.stateNode;xv(s,t.type,a,n),s[pn]=n}catch(c){Fe(t,t.return,c)}}function O0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(s!==4&&(s===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ef(t,n,a),t=t.sibling;t!==null;)ef(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function P0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,s,a),n[on]=t,n[pn]=a}catch(f){Fe(t,t.return,f)}}var Yi=!1,fn=!1,nf=!1,z0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Z_(t,n){if(t=t.containerInfo,Ef=Wl,t=jh(t),Zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,z=-1,$=0,ht=0,gt=t,nt=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(E=x+c),gt!==f||s!==0&&gt.nodeType!==3||(z=x+s),gt.nodeType===3&&(x+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)nt=gt,gt=ot;for(;;){if(gt===t)break e;if(nt===a&&++$===c&&(E=x),nt===f&&++ht===s&&(z=x),(ot=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=ot}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:t,selectionRange:a},Wl=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=fr(a.type,c);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Fe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Cf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function F0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),s&4&&ao(5,a);break;case 1:if(Zi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Fe(a,a.return,x)}else{var c=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Fe(a,a.return,x)}}s&64&&U0(a),s&512&&ro(a,a.return);break;case 3:if(Zi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{yp(t,n)}catch(x){Fe(a,a.return,x)}}break;case 27:n===null&&s&4&&P0(a);case 26:case 5:Zi(t,a),n===null&&s&4&&N0(a),s&512&&ro(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),s&4&&H0(t,a);break;case 13:Zi(t,a),s&4&&G0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=av.bind(null,a),Ev(t,a))));break;case 22:if(s=a.memoizedState!==null||Yi,!s){n=n!==null&&n.memoizedState!==null||fn,c=Yi;var f=fn;Yi=s,(fn=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),Yi=c,fn=f}break;case 30:break;default:Zi(t,a)}}function I0(t){var n=t.alternate;n!==null&&(t.alternate=null,I0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ns(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Fn=!1;function ji(t,n,a){for(a=a.child;a!==null;)B0(t,n,a),a=a.sibling}function B0(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||Ci(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ci(a,n);var s=Je,c=Fn;Na(a.type)&&(Je=a.stateNode,Fn=!1),ji(t,n,a),mo(a.stateNode),Je=s,Fn=c;break;case 5:fn||Ci(a,n);case 6:if(s=Je,c=Fn,Je=null,ji(t,n,a),Je=s,Fn=c,Je!==null)if(Fn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(Fn?(t=Je,Um(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),as(t)):Um(Je,a.stateNode));break;case 4:s=Je,c=Fn,Je=a.stateNode.containerInfo,Fn=!0,ji(t,n,a),Je=s,Fn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),fn||Aa(4,a,n),ji(t,n,a);break;case 1:fn||(Ci(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&L0(a,n,s)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:fn=(s=fn)||a.memoizedState!==null,ji(t,n,a),fn=s;break;default:ji(t,n,a)}}function H0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{as(t)}catch(a){Fe(n,n.return,a)}}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{as(t)}catch(a){Fe(n,n.return,a)}}function K_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new z0),n;default:throw Error(r(435,t.tag))}}function Tl(t,n){var a=K_(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=rv.bind(null,t,s);s.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Na(E.type)){Je=E.stateNode,Fn=!1;break t}break;case 5:Je=E.stateNode,Fn=!1;break t;case 3:case 4:Je=E.stateNode.containerInfo,Fn=!0;break t}E=E.return}if(Je===null)throw Error(r(160));B0(f,x,c),Je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)V0(n,t),n=n.sibling}var gi=null;function V0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Bn(t),s&4&&(Aa(3,t,t.return),ao(3,t),Aa(5,t,t.return));break;case 1:In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),s&64&&Yi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,s,a),f[on]=t,tt(f),s=f;break t;case"link":var x=Vm("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Vm("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,tt(f),s=f}t.stateNode=s}else Xm(c,t.type,t.stateNode);else t.stateNode=Gm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Xm(c,t.type,t.stateNode):Gm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&$u(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),a!==null&&s&4&&$u(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{Ti(c,"")}catch(Gt){Fe(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,$u(t,c,a!==null?a.memoizedProps:c)),s&1024&&(nf=!0);break;case 6:if(In(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){Fe(t,t.return,Gt)}}break;case 3:if(Gl=null,c=gi,gi=Bl(n.containerInfo),In(n,t),gi=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(Gt){Fe(t,t.return,Gt)}nf&&(nf=!1,X0(t));break;case 4:s=gi,gi=Bl(t.stateNode.containerInfo),In(n,t),Bn(t),gi=s;break;case 12:In(n,t),Bn(t);break;case 31:In(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 13:In(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=Yi,ht=fn;if(Yi=$||c,fn=ht||z,In(n,t),fn=ht,Yi=$,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Yi||fn||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=z.stateNode;var gt=z.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){Fe(z,z.return,Gt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Gt){Fe(z,z.return,Gt)}}}else if(n.tag===18){if(a===null){z=n;try{var ot=z.stateNode;c?Lm(ot,!0):Lm(z.stateNode,!1)}catch(Gt){Fe(z,z.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Tl(t,a))));break;case 19:In(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 30:break;case 21:break;default:In(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(O0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(t);El(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ti(x,""),a.flags&=-33);var E=tf(t);El(t,E,x);break;case 3:case 4:var z=a.stateNode.containerInfo,$=tf(t);ef(t,$,z);break;default:throw Error(r(161))}}catch(ht){Fe(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),dr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),dr(n);break;case 27:mo(n.stateNode);case 26:case 5:Ci(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),ao(4,f);break;case 1:if(Ki(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Fe(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Sp(z[c],E)}catch($){Fe(s,s.return,$)}}a&&x&64&&U0(f),ro(f,f.return);break;case 27:P0(f);case 26:case 5:Ki(c,f,a),a&&s===null&&x&4&&N0(f),ro(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&x&4&&H0(c,f);break;case 13:Ki(c,f,a),a&&x&4&&G0(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),ro(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function _i(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)k0(t,n,a,s),n=n.sibling}function k0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,s),c&2048&&ao(9,n);break;case 1:_i(t,n,a,s);break;case 3:_i(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(c&2048){_i(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else _i(t,n,a,s);break;case 31:_i(t,n,a,s);break;case 13:_i(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,s):so(t,n):f._visibility&2?_i(t,n,a,s):(f._visibility|=2,Yr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(x,n);break;case 24:_i(t,n,a,s),c&2048&&rf(n.alternate,n);break;default:_i(t,n,a,s)}}function Yr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,z=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:Yr(f,x,E,z,c),ao(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Yr(f,x,E,z,c):so(f,x):(ht._visibility|=2,Yr(f,x,E,z,c)),c&&$&2048&&af(x.alternate,x);break;case 24:Yr(f,x,E,z,c),c&&$&2048&&rf(x.alternate,x);break;default:Yr(f,x,E,z,c)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:so(a,s),c&2048&&af(s.alternate,s);break;case 24:so(a,s),c&2048&&rf(s.alternate,s);break;default:so(a,s)}n=n.sibling}}var oo=8192;function jr(t,n,a){if(t.subtreeFlags&oo)for(t=t.child;t!==null;)W0(t,n,a),t=t.sibling}function W0(t,n,a){switch(t.tag){case 26:jr(t,n,a),t.flags&oo&&t.memoizedState!==null&&zv(a,gi,t.memoizedState,t.memoizedProps);break;case 5:jr(t,n,a);break;case 3:case 4:var s=gi;gi=Bl(t.stateNode.containerInfo),jr(t,n,a),gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=oo,oo=16777216,jr(t,n,a),oo=s):jr(t,n,a));break;default:jr(t,n,a)}}function q0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,j0(s,t)}q0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Y0(t),t=t.sibling}function Y0(t){switch(t.tag){case 0:case 11:case 15:lo(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:lo(t);break;case 12:lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):lo(t);break;default:lo(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,j0(s,t)}q0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function j0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=t;Mn!==null;){s=Mn;var c=s.sibling,f=s.return;if(I0(s),s===a){Mn=null;break t}if(c!==null){c.return=f,Mn=c;break t}Mn=f}}}var Q_={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},J_=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,xe=null,ve=0,ze=0,Qn=null,Ra=!1,Zr=!1,sf=!1,Qi=0,tn=0,Ca=0,hr=0,of=0,Jn=0,Kr=0,co=null,Hn=null,lf=!1,Rl=0,Z0=0,Cl=1/0,wl=null,wa=null,xn=0,Da=null,Qr=null,Ji=0,cf=0,uf=null,K0=null,uo=0,ff=null;function $n(){return(Ne&2)!==0&&ve!==0?ve&-ve:O.T!==null?gf():Us()}function Q0(){if(Jn===0)if((ve&536870912)===0||be){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Gn(t,n,a){(t===qe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),Ua(t,ve,Jn,!1)),wn(t,a),((Ne&2)===0||t!==qe)&&(t===qe&&((Ne&2)===0&&(hr|=a),tn===4&&Ua(t,ve,Jn,!1)),wi(t))}function J0(t,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),c=s?ev(t,n):hf(t,n,!0),f=s;do{if(c===0){Zr&&!s&&Ua(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!$_(a)){c=hf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=co;var z=E.current.memoizedState.isDehydrated;if(z&&(Jr(E,x).flags|=256),x=hf(E,x,!1),x!==2){if(sf&&!z){E.errorRecoveryDisabledLanes|=f,hr|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Jr(t,0),Ua(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(s,n,Jn,!Ra);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Rl+300-b(),10<c)){if(Ua(s,n,Jn,!Ra),_t(s,0,!0)!==0)break t;Ji=n,s.timeoutHandle=wm($0.bind(null,s,a,Hn,wl,lf,n,Jn,hr,Kr,Ra,f,"Throttled",-0,0),c);break t}$0(s,a,Hn,wl,lf,n,Jn,hr,Kr,Ra,f,null,-0,0)}}break}while(!0);wi(t)}function $0(t,n,a,s,c,f,x,E,z,$,ht,gt,nt,ot){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},W0(n,f,gt);var Gt=(f&62914560)===f?Rl-b():(f&4194048)===f?Z0-b():0;if(Gt=Fv(gt,Gt),Gt!==null){Ji=f,t.cancelPendingCommit=Gt(om.bind(null,t,n,f,a,s,c,x,E,z,ht,gt,null,nt,ot)),Ua(t,f,x,!$);return}}om(t,n,f,a,s,c,x,E,z)}function $_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(t,n,a,s){n&=~of,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Vt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Go(t,a,n)}function Dl(){return(Ne&6)===0?(fo(0),!1):!0}function df(){if(xe!==null){if(ze===0)var t=xe.return;else t=xe,Gi=ar=null,Ru(t),Vr=null,Ys=0,t=xe;for(;t!==null;)D0(t.alternate,t),t=t.return;xe=null}}function Jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,vv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,df(),qe=t,xe=a=Bi(t.current,null),ve=n,ze=0,Qn=null,Ra=!1,Zr=It(t,n),sf=!1,Kr=Jn=of=hr=Ca=tn=0,Hn=co=null,lf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Vt(s),f=1<<c;n|=t[c],s&=~f}return Qi=n,Qo(),a}function tm(t,n){ce=null,O.H=eo,n===Gr||n===rl?(n=xp(),ze=3):n===mu?(n=xp(),ze=4):ze=n===Xu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,xe===null&&(tn=1,vl(t,ri(n,t.current)))}function em(){var t=Zn.current;return t===null?!0:(ve&4194048)===ve?ci===null:(ve&62914560)===ve||(ve&536870912)!==0?t===ci:!1}function nm(){var t=O.H;return O.H=eo,t===null?eo:t}function im(){var t=O.A;return O.A=Q_,t}function Ul(){tn=4,Ra||(ve&4194048)!==ve&&Zn.current!==null||(Zr=!0),(Ca&134217727)===0&&(hr&134217727)===0||qe===null||Ua(qe,ve,Jn,!1)}function hf(t,n,a){var s=Ne;Ne|=2;var c=nm(),f=im();(qe!==t||ve!==n)&&(wl=null,Jr(t,n)),n=!1;var x=tn;t:do try{if(ze!==0&&xe!==null){var E=xe,z=Qn;switch(ze){case 8:df(),x=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var $=ze;if(ze=0,Qn=null,$r(t,E,z,$),a&&Zr){x=0;break t}break;default:$=ze,ze=0,Qn=null,$r(t,E,z,$)}}tv(),x=tn;break}catch(ht){tm(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Gi=ar=null,Ne=s,O.H=c,O.A=f,xe===null&&(qe=null,ve=0,Qo()),x}function tv(){for(;xe!==null;)am(xe)}function ev(t,n){var a=Ne;Ne|=2;var s=nm(),c=im();qe!==t||ve!==n?(wl=null,Cl=b()+500,Jr(t,n)):Zr=It(t,n);t:do try{if(ze!==0&&xe!==null){n=xe;var f=Qn;e:switch(ze){case 1:ze=0,Qn=null,$r(t,n,f,1);break;case 2:case 9:if(pp(f)){ze=0,Qn=null,rm(n);break}n=function(){ze!==2&&ze!==9||qe!==t||(ze=7),wi(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:pp(f)?(ze=0,Qn=null,rm(n)):(ze=0,Qn=null,$r(t,n,f,7));break;case 5:var x=null;switch(xe.tag){case 26:x=xe.memoizedState;case 5:case 27:var E=xe;if(x?km(x):E.stateNode.complete){ze=0,Qn=null;var z=E.sibling;if(z!==null)xe=z;else{var $=E.return;$!==null?(xe=$,Ll($)):xe=null}break e}}ze=0,Qn=null,$r(t,n,f,5);break;case 6:ze=0,Qn=null,$r(t,n,f,6);break;case 8:df(),tn=6;break t;default:throw Error(r(462))}}nv();break}catch(ht){tm(t,ht)}while(!0);return Gi=ar=null,O.H=s,O.A=c,Ne=a,xe!==null?0:(qe=null,ve=0,Qo(),tn)}function nv(){for(;xe!==null&&!ne();)am(xe)}function am(t){var n=C0(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Ll(t):xe=n}function rm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=M0(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=M0(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Ru(n);default:D0(a,n),n=xe=ip(n,Qi),n=C0(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Ll(t):xe=n}function $r(t,n,a,s){Gi=ar=null,Ru(n),Vr=null,Ys=0;var c=n.return;try{if(k_(t,c,n,a,ve)){tn=1,vl(t,ri(a,t.current)),xe=null;return}}catch(f){if(c!==null)throw xe=c,f;tn=1,vl(t,ri(a,t.current)),xe=null;return}n.flags&32768?(be||s===1?t=!0:Zr||(ve&536870912)!==0?t=!1:(Ra=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),sm(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){sm(n,Ra);return}t=n.return;var a=Y_(n.alternate,n,Qi);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);tn===0&&(tn=5)}function sm(t,n){do{var a=j_(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);tn=6,xe=null}function om(t,n,a,s,c,f,x,E,z){t.cancelPendingCommit=null;do Nl();while(xn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,Wn(t,a,f,x,E,z),t===qe&&(xe=qe=null,ve=0),Qr=n,Da=t,Ji=a,cf=f,uf=c,K0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sv(ct,function(){return dm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=V.p,V.p=2,x=Ne,Ne|=4;try{Z_(t,n,a)}finally{Ne=x,V.p=c,O.T=s}}xn=1,lm(),cm(),um()}}function lm(){if(xn===1){xn=0;var t=Da,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=V.p;V.p=2;var c=Ne;Ne|=4;try{V0(n,t);var f=Tf,x=jh(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Yh(E.ownerDocument.documentElement,E)){if(z!==null&&Zc(E)){var $=z.start,ht=z.end;if(ht===void 0&&(ht=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ht,E.value.length);else{var gt=E.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Gt=E.textContent.length,te=Math.min(z.start,Gt),Ve=z.end===void 0?te:Math.min(z.end,Gt);!ot.extend&&te>Ve&&(x=Ve,Ve=te,te=x);var Y=qh(E,te),X=qh(E,Ve);if(Y&&X&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var J=gt.createRange();J.setStart(Y.node,Y.offset),ot.removeAllRanges(),te>Ve?(ot.addRange(J),ot.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),ot.addRange(J))}}}}for(gt=[],ot=E;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var xt=gt[E];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Wl=!!Ef,Tf=Ef=null}finally{Ne=c,V.p=s,O.T=a}}t.current=n,xn=2}}function cm(){if(xn===2){xn=0;var t=Da,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=V.p;V.p=2;var c=Ne;Ne|=4;try{F0(t,n.alternate,n)}finally{Ne=c,V.p=s,O.T=a}}xn=3}}function um(){if(xn===4||xn===3){xn=0,D();var t=Da,n=Qr,a=Ji,s=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Qr=Da=null,fm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(wa=null),Ka(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=V.p,V.p=2,O.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{O.T=n,V.p=c}}(Ji&3)!==0&&Nl(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===ff?uo++:(uo=0,ff=t):uo=0,fo(0)}}function fm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Nl(){return lm(),cm(),um(),dm()}function dm(){if(xn!==5)return!1;var t=Da,n=cf;cf=0;var a=Ka(Ji),s=O.T,c=V.p;try{V.p=32>a?32:a,O.T=null,a=uf,uf=null;var f=Da,x=Ji;if(xn=0,Qr=Da=null,Ji=0,(Ne&6)!==0)throw Error(r(331));var E=Ne;if(Ne|=4,Y0(f.current),k0(f,f.current,x,a),Ne=E,fo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{V.p=c,O.T=s,fm(t,n)}}function hm(t,n,a){n=ri(a,n),n=Vu(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(wn(t,2),wi(t))}function Fe(t,n,a){if(t.tag===3)hm(t,t,a);else for(;n!==null;){if(n.tag===3){hm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))){t=ri(a,t),a=p0(2),s=ba(n,a,2),s!==null&&(m0(a,s,n,t),wn(s,2),wi(s));break}}n=n.return}}function pf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new J_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(sf=!0,c.add(a),t=iv.bind(null,t,n,a),n.then(t,t))}function iv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(ve&a)===a&&(tn===4||tn===3&&(ve&62914560)===ve&&300>b()-Rl?(Ne&2)===0&&Jr(t,0):of|=a,Kr===ve&&(Kr=0)),wi(t)}function pm(t,n){n===0&&(n=Be()),t=er(t,n),t!==null&&(wn(t,n),wi(t))}function av(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),pm(t,a)}function rv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),pm(t,a)}function sv(t,n){return Le(t,n)}var Ol=null,ts=null,mf=!1,Pl=!1,xf=!1,La=0;function wi(t){t!==ts&&t.next===null&&(ts===null?Ol=ts=t:ts=ts.next=t),Pl=!0,mf||(mf=!0,lv())}function fo(t,n){if(!xf&&Pl){xf=!0;do for(var a=!1,s=Ol;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Vt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_m(s,f))}else f=ve,f=_t(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,_m(s,f));s=s.next}while(a);xf=!1}}function ov(){mm()}function mm(){Pl=mf=!1;var t=0;La!==0&&_v()&&(t=La);for(var n=b(),a=null,s=Ol;s!==null;){var c=s.next,f=xm(s,n);f===0?(s.next=null,a===null?Ol=c:a.next=c,c===null&&(ts=a)):(a=s,(t!==0||(f&3)!==0)&&(Pl=!0)),s=c}xn!==0&&xn!==5||fo(t),La!==0&&(La=0)}function xm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Vt(f),E=1<<x,z=c[x];z===-1?((E&a)===0||(E&s)!==0)&&(c[x]=se(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=qe,a=ve,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Wt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Wt(s),Ka(a)){case 2:case 8:a=St;break;case 32:a=ct;break;case 268435456:a=Ut;break;default:a=ct}return s=gm.bind(null,t),a=Le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Wt(s),t.callbackPriority=2,t.callbackNode=null,2}function gm(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var s=ve;return s=_t(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(J0(t,s,n),xm(t,b()),t.callbackNode!=null&&t.callbackNode===a?gm.bind(null,t):null)}function _m(t,n){if(Nl())return null;J0(t,n,!0)}function lv(){Sv(function(){(Ne&6)!==0?Le(mt,ov):mm()})}function gf(){if(La===0){var t=Br;t===0&&(t=wt,wt<<=1,(wt&261888)===0&&(wt=256)),La=t}return La}function vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function Sm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function cv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=vm((c[pn]||null).action),x=s.submitter;x&&(n=(n=x[pn]||null)?vm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Yo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(La!==0){var z=x?Sm(c,x):new FormData(c);zu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=x?Sm(c,x):new FormData(c),zu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var _f=0;_f<$c.length;_f++){var vf=$c[_f],uv=vf.toLowerCase(),fv=vf[0].toUpperCase()+vf.slice(1);xi(uv,"on"+fv)}xi(Qh,"onAnimationEnd"),xi(Jh,"onAnimationIteration"),xi($h,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(R_,"onTransitionRun"),xi(C_,"onTransitionStart"),xi(w_,"onTransitionCancel"),xi(tp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function ym(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],z=E.instance,$=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ht){Ko(ht)}c.currentTarget=null,f=z}else for(x=0;x<s.length;x++){if(E=s[x],z=E.instance,$=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ht){Ko(ht)}c.currentTarget=null,f=z}}}}function ge(t,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var s=t+"__bubble";a.has(s)||(Mm(n,t,2,!1),a.add(s))}function Sf(t,n,a){var s=0;n&&(s|=4),Mm(a,t,s,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function yf(t){if(!t[zl]){t[zl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(dv.has(a)||Sf(a,!1,t),Sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,Sf("selectionchange",!1,n))}}function Mm(t,n,a,s){switch(Qm(n)){case 2:var c=Hv;break;case 8:c=Gv;break;default:c=zf}a=c.bind(null,n,a,t),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Mf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=pa(E),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){s=f=x;continue t}E=E.parentNode}}s=s.return}Rh(function(){var $=f,ht=Ic(a),gt=[];t:{var nt=ep.get(t);if(nt!==void 0){var ot=Yo,Gt=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":ot=r_;break;case"focusin":Gt="focus",ot=kc;break;case"focusout":Gt="blur",ot=kc;break;case"beforeblur":case"afterblur":ot=kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=l_;break;case Qh:case Jh:case $h:ot=Kg;break;case tp:ot=u_;break;case"scroll":case"scrollend":ot=Wg;break;case"wheel":ot=d_;break;case"copy":case"cut":case"paste":ot=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Lh;break;case"toggle":case"beforetoggle":ot=p_}var te=(n&4)!==0,Ve=!te&&(t==="scroll"||t==="scrollend"),Y=te?nt!==null?nt+"Capture":null:nt;te=[];for(var X=$,J;X!==null;){var xt=X;if(J=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||J===null||Y===null||(xt=Os(X,Y),xt!=null&&te.push(po(X,xt,J))),Ve)break;X=X.return}0<te.length&&(nt=new ot(nt,Gt,null,a,ht),gt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Fc&&(Gt=a.relatedTarget||a.fromElement)&&(pa(Gt)||Gt[Oi]))break t;if((ot||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=$,Gt=Gt?pa(Gt):null,Gt!==null&&(Ve=u(Gt),te=Gt.tag,Gt!==Ve||te!==5&&te!==27&&te!==6)&&(Gt=null)):(ot=null,Gt=$),ot!==Gt)){if(te=Dh,xt="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(te=Lh,xt="onPointerLeave",Y="onPointerEnter",X="pointer"),Ve=ot==null?nt:q(ot),J=Gt==null?nt:q(Gt),nt=new te(xt,X+"leave",ot,a,ht),nt.target=Ve,nt.relatedTarget=J,xt=null,pa(ht)===$&&(te=new te(Y,X+"enter",Gt,a,ht),te.target=J,te.relatedTarget=Ve,xt=te),Ve=xt,ot&&Gt)e:{for(te=hv,Y=ot,X=Gt,J=0,xt=Y;xt;xt=te(xt))J++;xt=0;for(var Zt=X;Zt;Zt=te(Zt))xt++;for(;0<J-xt;)Y=te(Y),J--;for(;0<xt-J;)X=te(X),xt--;for(;J--;){if(Y===X||X!==null&&Y===X.alternate){te=Y;break e}Y=te(Y),X=te(X)}te=null}else te=null;ot!==null&&bm(gt,nt,ot,te,!1),Gt!==null&&Ve!==null&&bm(gt,Ve,Gt,te,!0)}}t:{if(nt=$?q($):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var we=Hh;else if(Ih(nt))if(Gh)we=E_;else{we=M_;var Xt=y_}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&zc($.elementType)&&(we=Hh):we=b_;if(we&&(we=we(t,$))){Bh(gt,we,a,ht);break t}Xt&&Xt(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&Sn(nt,"number",nt.value)}switch(Xt=$?q($):window,t){case"focusin":(Ih(Xt)||Xt.contentEditable==="true")&&(Ur=Xt,Kc=$,Vs=null);break;case"focusout":Vs=Kc=Ur=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Zh(gt,a,ht);break;case"selectionchange":if(A_)break;case"keydown":case"keyup":Zh(gt,a,ht)}var he;if(qc)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Dr?zh(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Nh&&a.locale!=="ko"&&(Dr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Dr&&(he=Ch()):(xa=ht,Gc="value"in xa?xa.value:xa.textContent,Dr=!0)),Xt=Fl($,Se),0<Xt.length&&(Se=new Uh(Se,t,null,a,ht),gt.push({event:Se,listeners:Xt}),he?Se.data=he:(he=Fh(a),he!==null&&(Se.data=he)))),(he=x_?g_(t,a):__(t,a))&&(Se=Fl($,"onBeforeInput"),0<Se.length&&(Xt=new Uh("onBeforeInput","beforeinput",null,a,ht),gt.push({event:Xt,listeners:Se}),Xt.data=he)),cv(gt,t,$,a,ht)}ym(gt,n)})}function po(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(t,a),c!=null&&s.unshift(po(t,c,f)),c=Os(t,n),c!=null&&s.push(po(t,c,f))),t.tag===3)return s;t=t.return}return[]}function hv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,z=E.alternate,$=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||$===null||(z=$,c?($=Os(a,f),$!=null&&x.unshift(po(a,$,z))):c||($=Os(a,f),$!=null&&x.push(po(a,$,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function Em(t){return(typeof t=="string"?t:""+t).replace(pv,`
`).replace(mv,"")}function Tm(t,n){return n=Em(n),Em(t)===n}function Ge(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ti(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ti(t,""+s);break;case"className":Ae(t,"class",s);break;case"tabIndex":Ae(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ae(t,a,s);break;case"style":Th(t,s,f);break;case"data":if(n!=="object"){Ae(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Xo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Xo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Fi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Xo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),de(t,"popover",s);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":de(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xg.get(a)||a,de(t,a,s))}}function bf(t,n,a,s,c,f){switch(a){case"style":Th(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ti(t,s):(typeof s=="number"||typeof s=="bigint")&&Ti(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):de(t,a,s)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,x,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var E=f=x=c=null,z=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":x=ht;break;case"checked":z=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":E=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ge(t,n,s,ht,a,null)}}je(t,f,E,z,$,x,c,!1);return;case"select":ge("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ge(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!s,n!=null?mn(t,!!s,n,!1):a!=null&&mn(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ge(t,n,x,E,a,null)}En(t,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ge(t,n,z,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<ho.length;s++)ge(ho[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,$,s,a,null)}return;default:if(zc(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&bf(t,n,ht,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ge(t,n,E,s,a,null))}function xv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,z=null,$=null,ht=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=gt;default:s.hasOwnProperty(ot)||Ge(t,n,ot,null,s,gt)}}for(var nt in s){var ot=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(ot!=null||gt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":$=ot;break;case"defaultChecked":ht=ot;break;case"value":x=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==gt&&Ge(t,n,nt,ot,s,gt)}}Pi(t,x,E,z,$,ht,f,c);return;case"select":ot=x=E=nt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ot=z;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":nt=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==z&&Ge(t,n,c,f,s,z)}n=E,a=x,s=ot,nt!=null?mn(t,!!a,nt,!1):!!s!=!!a&&(n!=null?mn(t,!!a,n,!0):mn(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ge(t,n,x,c,s,f)}yn(t,nt,ot);return;case"option":for(var Gt in a)if(nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!s.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:Ge(t,n,Gt,null,s,nt)}for(z in s)if(nt=s[z],ot=a[z],s.hasOwnProperty(z)&&nt!==ot&&(nt!=null||ot!=null))switch(z){case"selected":t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ge(t,n,z,nt,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!s.hasOwnProperty(te)&&Ge(t,n,te,null,s,nt);for($ in s)if(nt=s[$],ot=a[$],s.hasOwnProperty($)&&nt!==ot&&(nt!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ge(t,n,$,nt,s,ot)}return;default:if(zc(n)){for(var Ve in a)nt=a[Ve],a.hasOwnProperty(Ve)&&nt!==void 0&&!s.hasOwnProperty(Ve)&&bf(t,n,Ve,void 0,s,nt);for(ht in s)nt=s[ht],ot=a[ht],!s.hasOwnProperty(ht)||nt===ot||nt===void 0&&ot===void 0||bf(t,n,ht,nt,s,ot);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!s.hasOwnProperty(Y)&&Ge(t,n,Y,null,s,nt);for(gt in s)nt=s[gt],ot=a[gt],!s.hasOwnProperty(gt)||nt===ot||nt==null&&ot==null||Ge(t,n,gt,nt,s,ot)}function Am(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Am(x)){for(x=0,E=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],$=z.startTime;if($>E)break;var ht=z.transferSize,gt=z.initiatorType;ht&&Am(gt)&&(z=z.responseEnd,x+=ht*(z<E?1:(E-$)/(z-$)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ef=null,Tf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Rm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Af(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function _v(){var t=window.event;return t&&t.type==="popstate"?t===Rf?!1:(Rf=t,!0):(Rf=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,Sv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(t){return Dm.resolve(null).then(t).catch(yv)}:wm;function yv(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Um(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),as(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Qa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&mo(t.ownerDocument.body);a=c}while(a);as(n)}function Lm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Cf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),Ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Mv(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function bv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Nm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$?"||t.data==="$~"}function Df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ev(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Uf=null;function Om(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Pm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function zm(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ns(t)}var fi=new Map,Fm=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=V.d;V.d={f:Tv,r:Av,D:Rv,C:Cv,L:wv,m:Dv,X:Lv,S:Uv,M:Nv};function Tv(){var t=$i.f(),n=Dl();return t||n}function Av(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?t0(n):$i.r(t)}var es=typeof document>"u"?null:document;function Im(t,n,a){var s=es;if(s&&typeof n=="string"&&n){var c=Ye(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fm.has(c)||(Fm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Cn(n,"link",t),tt(n),s.head.appendChild(n)))}}function Rv(t){$i.D(t),Im("dns-prefetch",t,null)}function Cv(t,n){$i.C(t,n),Im("preconnect",t,n)}function wv(t,n,a){$i.L(t,n,a);var s=es;if(s&&t&&n){var c='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ye(a.imageSizes)+'"]')):c+='[href="'+Ye(t)+'"]';var f=c;switch(n){case"style":f=ns(t);break;case"script":f=is(t)}fi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(go(f))||(n=s.createElement("link"),Cn(n,"link",t),tt(n),s.head.appendChild(n)))}}function Dv(t,n){$i.m(t,n);var a=es;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ye(s)+'"][href="'+Ye(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(t)}if(!fi.has(f)&&(t=g({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}s=a.createElement("link"),Cn(s,"link",t),tt(s),a.head.appendChild(s)}}}function Uv(t,n,a){$i.S(t,n,a);var s=es;if(s&&t){var c=at(s).hoistableStyles,f=ns(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(xo(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Lf(t,a);var z=x=s.createElement("link");tt(z),Cn(z,"link",t),z._p=new Promise(function($,ht){z.onload=$,z.onerror=ht}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Lv(t,n){$i.X(t,n);var a=es;if(a&&t){var s=at(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(go(c)),f||(t=g({src:t,async:!0},n),(n=fi.get(c))&&Nf(t,n),f=a.createElement("script"),tt(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Nv(t,n){$i.M(t,n);var a=es;if(a&&t){var s=at(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(go(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Nf(t,n),f=a.createElement("script"),tt(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bm(t,n,a,s){var c=(c=it.current)?Bl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=at(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ns(a.href);var f=at(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(xo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||Ov(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=at(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ns(t){return'href="'+Ye(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Hm(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ov(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),tt(n),t.head.appendChild(n))}function is(t){return'[src="'+Ye(t)+'"]'}function go(t){return"script[async]"+t}function Gm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(s)return n.instance=s,tt(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tt(s),Cn(s,"style",c),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":c=ns(a.href);var f=t.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,tt(f),f;s=Hm(a),(c=fi.get(c))&&Lf(s,c),f=(t.ownerDocument||t).createElement("link"),tt(f);var x=f;return x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),Cn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=is(a.src),(c=t.querySelector(go(f)))?(n.instance=c,tt(c),c):(s=a,(c=fi.get(f))&&(s=g({},a),Nf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tt(c),Cn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Vm(t,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Qa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function Xm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Pv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zv(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ns(s.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,tt(f);return}f=n.ownerDocument||n,s=Hm(s),(c=fi.get(c))&&Lf(s,c),f=f.createElement("link"),tt(f);var x=f;x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),Cn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function Fv(t,n){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Of===0&&(Of=62500*gv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Of?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(Iv,t),Xl=null,Vl.call(t))}function Iv(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var s=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Bv(t,n,a,s,c,f,x,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Wm(t,n,a,s,c,f,x,E,z,$,ht,gt){return t=new Bv(t,n,a,x,z,$,ht,gt,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=du(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},xu(f),t}function qm(t){return t?(t=Or,t):Or}function Ym(t,n,a,s,c,f){c=qm(c),s.context===null?s.context=c:s.pendingContext=c,s=Ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ba(t,s,n),a!==null&&(Gn(a,t,n),Zs(a,t,n))}function jm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pf(t,n){jm(t,n),(t=t.alternate)&&jm(t,n)}function Zm(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&Gn(n,t,67108864),Pf(t,67108864)}}function Km(t){if(t.tag===13||t.tag===31){var n=$n();n=mi(n);var a=er(t,n);a!==null&&Gn(a,t,n),Pf(t,n)}}var Wl=!0;function Hv(t,n,a,s){var c=O.T;O.T=null;var f=V.p;try{V.p=2,zf(t,n,a,s)}finally{V.p=f,O.T=c}}function Gv(t,n,a,s){var c=O.T;O.T=null;var f=V.p;try{V.p=8,zf(t,n,a,s)}finally{V.p=f,O.T=c}}function zf(t,n,a,s){if(Wl){var c=Ff(s);if(c===null)Mf(t,n,s,ql,a),Jm(t,s);else if(Xv(c,t,n,a,s))s.stopPropagation();else if(Jm(t,s),n&4&&-1<Vv.indexOf(t)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=bt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var z=1<<31-Vt(x);E.entanglements[1]|=z,x&=~z}wi(f),(Ne&6)===0&&(Cl=b()+500,fo(0))}}break;case 31:case 13:E=er(f,2),E!==null&&Gn(E,f,2),Dl(),Pf(f,2)}if(f=Ff(s),f===null&&Mf(t,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Mf(t,n,s,null,a)}}function Ff(t){return t=Ic(t),If(t)}var ql=null;function If(t){if(ql=null,t=pa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function Qm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case mt:return 2;case St:return 8;case ct:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Bf=!1,Oa=null,Pa=null,za=null,vo=new Map,So=new Map,Fa=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jm(t,n){switch(t){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function yo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&Zm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Xv(t,n,a,s,c){switch(n){case"focusin":return Oa=yo(Oa,t,n,a,s,c),!0;case"dragenter":return Pa=yo(Pa,t,n,a,s,c),!0;case"mouseover":return za=yo(za,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,yo(vo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,yo(So.get(f)||null,t,n,a,s,c)),!0}return!1}function $m(t){var n=pa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ls(t.priority,function(){Km(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ls(t.priority,function(){Km(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ff(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Fc=s,a.target.dispatchEvent(s),Fc=null}else return n=A(a),n!==null&&Zm(n),t.blockedOn=a,!1;n.shift()}return!0}function tx(t,n,a){Yl(t)&&a.delete(n)}function kv(){Bf=!1,Oa!==null&&Yl(Oa)&&(Oa=null),Pa!==null&&Yl(Pa)&&(Pa=null),za!==null&&Yl(za)&&(za=null),vo.forEach(tx),So.forEach(tx)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kv)))}var Zl=null;function ex(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(If(s||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function as(t){function n(z){return jl(z,t)}Oa!==null&&jl(Oa,t),Pa!==null&&jl(Pa,t),za!==null&&jl(za,t),vo.forEach(n),So.forEach(n);for(var a=0;a<Fa.length;a++){var s=Fa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)$m(a),a.blockedOn===null&&Fa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[pn]||null;if(typeof f=="function")x||ex(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[pn]||null)E=x.formAction;else if(If(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ex(a)}}}function nx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(t){this._internalRoot=t}Kl.prototype.render=Hf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();Ym(a,s,t,n,null,null)},Kl.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ym(t.current,2,null,t,null,null),Dl(),n[Oi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Us();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,t),a===0&&$m(t)}};var ix=e.version;if(ix!=="19.2.1")throw Error(r(527,ix,"19.2.1"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Wv={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Mt=Ql.inject(Wv),Et=Ql}catch{}}return bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=u0,f=f0,x=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Wm(t,1,!1,null,null,a,s,null,c,f,x,nx),t[Oi]=n.current,yf(t),new Hf(n)},bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=u0,x=f0,E=d0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Wm(t,1,!0,n,a??null,s,c,z,f,x,E,nx),n.context=qm(null),a=n.current,s=$n(),s=mi(s),c=Ma(s),c.callback=null,ba(a,c,s),a=s,n.current.lanes=a,wn(n,a),wi(n),t[Oi]=n.current,yf(t),new Kl(n)},bo.version="19.2.1",bo}var hx;function nS(){if(hx)return Xf.exports;hx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=eS(),Xf.exports}var iS=nS();const aS=ug(iS);var an=(o=>(o.IDLE="IDLE",o.CAPTURING="CAPTURING",o.ANALYZING="ANALYZING",o.GROWING="GROWING",o.ERROR="ERROR",o))(an||{});const rS=({gameState:o,onInteraction:e,onReset:i,analysisText:r,analysisResult:l})=>{const[u,d]=Oe.useState("");Oe.useEffect(()=>{const m=setInterval(()=>{const p="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789∆∇∑∏";let v="";for(let g=0;g<8;g++)v+=p.charAt(Math.floor(Math.random()*p.length));d(v)},100);return()=>clearInterval(m)},[]);const h=()=>!l||!l.polygon||l.polygon.length===0?"":l.polygon.map(p=>`${p.x/10},${p.y/10}`).join(" ");return ue.jsxs("div",{className:"absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4 md:p-8 overflow-hidden",children:[ue.jsxs("div",{className:"flex flex-col items-center justify-center w-full mt-4",children:[ue.jsx("h1",{className:"text-4xl md:text-7xl font-future text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-widest animate-pulse",style:{textShadow:"0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0",WebkitTextStroke:"1px #FF10F0"},children:"VENI VIDI VICI"}),ue.jsxs("div",{className:"text-xs font-code text-neon-pink/70 mt-2 tracking-[0.5em] drop-shadow-[0_0_5px_rgba(255,20,240,0.8)]",children:["SYSTEM_ID // ",u]})]}),o===an.IDLE&&ue.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-neon-pink/30 opacity-70",children:[ue.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ue.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ue.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ue.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ue.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neon-pink/80 font-code text-xs text-center tracking-widest",children:"[ LOCATE TARGET ]"})]}),o===an.GROWING&&l&&ue.jsxs("div",{className:"absolute inset-0 w-full h-full",children:[ue.jsx("svg",{className:"w-full h-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:ue.jsx("polygon",{points:h(),fill:"none",stroke:"#FF10F0",strokeWidth:"0.2",vectorEffect:"non-scaling-stroke",className:"opacity-50 drop-shadow-[0_0_8px_#FF10F0]",children:ue.jsx("animate",{attributeName:"opacity",values:"0.3;0.7;0.3",dur:"3s",repeatCount:"indefinite"})})}),ue.jsx("div",{className:"absolute top-4 left-4 text-[10px] font-code text-neon-pink bg-black/50 px-2 py-1 border border-neon-pink/50",children:"CONTOUR_LOCKED"})]}),o===an.ANALYZING&&ue.jsx("div",{className:"absolute inset-0 bg-black/20 z-10 flex items-center justify-center backdrop-blur-[2px] transition-all duration-500",children:ue.jsxs("div",{className:"text-neon-pink font-code text-2xl animate-pulse bg-black/70 p-6 border border-neon-pink shadow-[0_0_30px_rgba(255,16,240,0.3)]",children:["VENI VIDI VICI QUID SUMUS",ue.jsx("div",{className:"w-full h-1 bg-neon-pink/30 mt-4 overflow-hidden relative",children:ue.jsx("div",{className:"absolute h-full bg-neon-pink w-1/3 animate-[scanline_1.5s_ease-in-out_infinite]"})})]})}),ue.jsxs("div",{className:"flex flex-col items-center justify-end w-full mb-12 pointer-events-auto",children:[ue.jsx("div",{className:"mb-8 font-code text-neon-pink h-6 text-lg tracking-wider drop-shadow-[0_0_8px_#FF10F0]",children:r}),ue.jsxs("button",{onClick:e,disabled:o===an.ANALYZING,className:`group relative px-12 py-5 bg-black/60 overflow-hidden border-2 transition-all active:scale-95 duration-200 shadow-[0_0_20px_rgba(255,16,240,0.2)]
                ${o===an.ANALYZING?"border-gray-500 opacity-50 cursor-not-allowed":"border-neon-pink hover:bg-neon-pink/10 cursor-pointer hover:shadow-[0_0_40px_rgba(255,16,240,0.6)]"}
            `,children:[ue.jsx("div",{className:"absolute inset-0 w-full h-full bg-neon-pink/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"}),ue.jsx("span",{className:"relative font-future text-2xl md:text-3xl text-white tracking-[0.2em] font-bold group-hover:text-white transition-colors drop-shadow-[0_0_5px_#FF10F0]",children:o===an.IDLE||o===an.GROWING?"VICI":"..."})]}),(o===an.GROWING||o===an.ERROR)&&ue.jsx("button",{onClick:i,className:"mt-8 text-xs text-neon-pink/50 hover:text-white font-code tracking-widest border-b border-transparent hover:border-neon-pink transition-colors uppercase",children:"[ REBOOT SYSTEM ]"}),ue.jsx("div",{className:"absolute bottom-10 left-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent hidden md:block"}),ue.jsx("div",{className:"absolute bottom-10 right-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent hidden md:block"})]}),ue.jsx("div",{className:"absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none mix-blend-overlay"})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="181",sS=0,px=1,oS=2,fg=1,lS=2,sa=3,ja=0,Xn=1,oa=2,ua=0,vs=1,bd=2,mx=3,xx=4,cS=5,yr=100,uS=101,fS=102,dS=103,hS=104,pS=200,mS=201,xS=202,gS=203,Ed=204,Td=205,_S=206,vS=207,SS=208,yS=209,MS=210,bS=211,ES=212,TS=213,AS=214,Ad=0,Rd=1,Cd=2,ys=3,wd=4,Dd=5,Ud=6,Ld=7,dg=0,RS=1,CS=2,Ya=0,wS=1,DS=2,US=3,LS=4,NS=5,OS=6,PS=7,hg=300,Ms=301,bs=302,Nd=303,Od=304,wc=306,Pd=1e3,la=1001,zd=1002,ni=1003,zS=1004,Jl=1005,pi=1006,Yf=1007,br=1008,da=1009,pg=1010,mg=1011,Uo=1012,xh=1013,Tr=1014,ca=1015,As=1016,gh=1017,_h=1018,Lo=1020,xg=35902,gg=35899,_g=1021,vg=1022,Ei=1023,No=1026,Oo=1027,Sg=1028,vh=1029,Sh=1030,yh=1031,Mh=1033,yc=33776,Mc=33777,bc=33778,Ec=33779,Fd=35840,Id=35841,Bd=35842,Hd=35843,Gd=36196,Vd=37492,Xd=37496,kd=37808,Wd=37809,qd=37810,Yd=37811,jd=37812,Zd=37813,Kd=37814,Qd=37815,Jd=37816,$d=37817,th=37818,eh=37819,nh=37820,ih=37821,ah=36492,rh=36494,sh=36495,oh=36283,lh=36284,ch=36285,uh=36286,FS=3200,IS=3201,BS=0,HS=1,Wa="",hi="srgb",Es="srgb-linear",Ac="linear",Xe="srgb",rs=7680,gx=519,GS=512,VS=513,XS=514,yg=515,kS=516,WS=517,qS=518,YS=519,_x=35044,vx="300 es",Ui=2e3,Rc=2001;function Mg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jS(){const o=Cc("canvas");return o.style.display="block",o}const Sx={};function yx(...o){const e="THREE."+o.shift();console.log(e,...o)}function fe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function rn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Po(...o){const e=o.join(" ");e in Sx||(Sx[e]=!0,fe(...o))}function ZS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,fh=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function KS(o,e){return(o%e+e)%e}function Zf(o,e,i){return(1-i)*o+i*e}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,i=0){ke.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],S=u[d+0],M=u[d+1],T=u[d+2],w=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=T,e[i+3]=w;return}if(g!==w||m!==S||p!==M||v!==T){let y=m*S+p*M+v*T+g*w;y<0&&(S=-S,M=-M,T=-T,w=-w,y=-y);let _=1-h;if(y<.9995){const P=Math.acos(y),U=Math.sin(P);_=Math.sin(_*P)/U,h=Math.sin(h*P)/U,m=m*_+S*h,p=p*_+M*h,v=v*_+T*h,g=g*_+w*h}else{m=m*_+S*h,p=p*_+M*h,v=v*_+T*h,g=g*_+w*h;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=u[d],S=u[d+1],M=u[d+2],T=u[d+3];return e[i]=h*T+v*g+m*M-p*S,e[i+1]=m*T+v*S+p*g-h*M,e[i+2]=p*T+v*M+h*S-m*g,e[i+3]=v*T-h*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(u/2),S=m(r/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=S*v*g+p*M*T,this._y=p*M*g-S*v*T,this._z=p*v*T+S*M*g,this._w=p*v*g-S*M*T;break;case"YXZ":this._x=S*v*g+p*M*T,this._y=p*M*g-S*v*T,this._z=p*v*T-S*M*g,this._w=p*v*g+S*M*T;break;case"ZXY":this._x=S*v*g-p*M*T,this._y=p*M*g+S*v*T,this._z=p*v*T+S*M*g,this._w=p*v*g-S*M*T;break;case"ZYX":this._x=S*v*g-p*M*T,this._y=p*M*g+S*v*T,this._z=p*v*T-S*M*g,this._w=p*v*g+S*M*T;break;case"YZX":this._x=S*v*g+p*M*T,this._y=p*M*g+S*v*T,this._z=p*v*T-S*M*g,this._w=p*v*g-S*M*T;break;case"XZY":this._x=S*v*g-p*M*T,this._y=p*M*g-S*v*T,this._z=p*v*T+S*M*g,this._w=p*v*g+S*M*T;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=r+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ft{constructor(e=0,i=0,r=0){ft.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-u*g,this.z=l+m*g+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ee(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new ft,Mx=new Fo;class pe{constructor(e,i,r,l,u,d,h,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],S=r[2],M=r[5],T=r[8],w=l[0],y=l[3],_=l[6],P=l[1],U=l[4],I=l[7],k=l[2],N=l[5],F=l[8];return u[0]=d*w+h*P+m*k,u[3]=d*y+h*U+m*N,u[6]=d*_+h*I+m*F,u[1]=p*w+v*P+g*k,u[4]=p*y+v*U+g*N,u[7]=p*_+v*I+g*F,u[2]=S*w+M*P+T*k,u[5]=S*y+M*U+T*N,u[8]=S*_+M*I+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*d-h*p,S=h*m-v*u,M=p*u-d*m,T=i*g+r*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(l*p-v*r)*w,e[2]=(h*r-l*d)*w,e[3]=S*w,e[4]=(v*i-l*m)*w,e[5]=(l*u-h*i)*w,e[6]=M*w,e[7]=(r*m-p*i)*w,e[8]=(d*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new pe,bx=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Xe&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xe&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:e,whitePoint:r,transfer:Ac,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ue=QS();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class JS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=Cc("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=fa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Jf(l[d].image)):u.push(Jf(l[d]))}else u=Jf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let ty=0;const $f=new ft;class Pn extends Rs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=la,l=la,u=pi,d=br,h=Ei,m=da,p=Pn.DEFAULT_ANISOTROPY,v=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=zo(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pd:e.x=e.x-Math.floor(e.x);break;case la:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pd:e.y=e.y-Math.floor(e.y);break;case la:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=hg;Pn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],g=m[8],S=m[1],M=m[5],T=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,I=(M+1)/2,k=(_+1)/2,N=(v+S)/4,F=(g+w)/4,K=(T+y)/4;return U>I&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=F/r):I>k?I<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(I),r=N/l,u=K/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=F/u,l=K/u),this.set(r,l,u,i),this}let P=Math.sqrt((y-T)*(y-T)+(g-w)*(g-w)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(y-T)/P,this.y=(g-w)/P,this.z=(S-v)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ey extends Rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends ey{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class bg extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ny extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=new ft(1/0,1/0,1/0),i=new ft(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),tc.subVectors(this.max,To),os.subVectors(e.a,To),ls.subVectors(e.b,To),cs.subVectors(e.c,To),Ba.subVectors(ls,os),Ha.subVectors(cs,ls),pr.subVectors(os,cs);let i=[0,-Ba.z,Ba.y,0,-Ha.z,Ha.y,0,-pr.z,pr.y,Ba.z,0,-Ba.x,Ha.z,0,-Ha.x,pr.z,0,-pr.x,-Ba.y,Ba.x,0,-Ha.y,Ha.x,0,-pr.y,pr.x,0];return!td(i,os,ls,cs,tc)||(i=[1,0,0,0,1,0,0,0,1],!td(i,os,ls,cs,tc))?!1:(ec.crossVectors(Ba,Ha),i=[ec.x,ec.y,ec.z],td(i,os,ls,cs,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ta=[new ft,new ft,new ft,new ft,new ft,new ft,new ft,new ft],vi=new ft,$l=new Io,os=new ft,ls=new ft,cs=new ft,Ba=new ft,Ha=new ft,pr=new ft,To=new ft,tc=new ft,ec=new ft,mr=new ft;function td(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){mr.fromArray(o,u);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=e.dot(mr),p=i.dot(mr),v=r.dot(mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const iy=new Io,Ao=new ft,ed=new ft;class Dc{constructor(e=new ft,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):iy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(ed)),this.expandByPoint(Ao.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ea=new ft,nd=new ft,nc=new ft,Ga=new ft,id=new ft,ic=new ft,ad=new ft;class Eg{constructor(e=new ft,i=new ft(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){nd.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Ga.copy(this.origin).sub(nd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=Ga.dot(this.direction),m=-Ga.dot(nc),p=Ga.lengthSq(),v=Math.abs(1-d*d);let g,S,M,T;if(v>0)if(g=d*m-h,S=d*h-m,T=u*v,g>=0)if(S>=-T)if(S<=T){const w=1/v;g*=w,S*=w,M=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-T?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=T?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(nd).addScaledVector(nc,S),M}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,r,l,u){id.subVectors(i,e),ic.subVectors(r,e),ad.crossVectors(id,ic);let d=this.direction.dot(ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,e);const m=h*this.direction.dot(ic.crossVectors(Ga,ic));if(m<0)return null;const p=h*this.direction.dot(id.cross(Ga));if(p<0||m+p>d)return null;const v=-h*Ga.dot(ad);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,r,l,u,d,h,m,p,v,g,S,M,T,w,y){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,g,S,M,T,w,y)}set(e,i,r,l,u,d,h,m,p,v,g,S,M,T,w,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=S,_[3]=M,_[7]=T,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),u=1/us.setFromMatrixColumn(e,1).length(),d=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*v,M=d*g,T=h*v,w=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+T*p,i[5]=S-w*p,i[9]=-h*m,i[2]=w-S*p,i[6]=T+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,M=m*g,T=p*v,w=p*g;i[0]=S+w*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=M*h-T,i[6]=w+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,M=m*g,T=p*v,w=p*g;i[0]=S-w*h,i[4]=-d*g,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*v,i[9]=w-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,M=d*g,T=h*v,w=h*g;i[0]=m*v,i[4]=T*p-M,i[8]=S*p+w,i[1]=m*g,i[5]=w*p+S,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,T=h*m,w=h*p;i[0]=m*v,i[4]=w-S*g,i[8]=T*g+M,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*g+T,i[10]=S-w*g}else if(e.order==="XZY"){const S=d*m,M=d*p,T=h*m,w=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+w,i[5]=d*v,i[9]=M*g-T,i[2]=T*g-M,i[6]=h*v,i[10]=w*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ry)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Va.crossVectors(r,ti),Va.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Va.crossVectors(r,ti)),Va.normalize(),ac.crossVectors(ti,Va),l[0]=Va.x,l[4]=ac.x,l[8]=ti.x,l[1]=Va.y,l[5]=ac.y,l[9]=ti.y,l[2]=Va.z,l[6]=ac.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],S=r[9],M=r[13],T=r[2],w=r[6],y=r[10],_=r[14],P=r[3],U=r[7],I=r[11],k=r[15],N=l[0],F=l[4],K=l[8],C=l[12],R=l[1],H=l[5],j=l[9],rt=l[13],lt=l[2],st=l[6],O=l[10],V=l[14],W=l[3],pt=l[7],dt=l[11],L=l[15];return u[0]=d*N+h*R+m*lt+p*W,u[4]=d*F+h*H+m*st+p*pt,u[8]=d*K+h*j+m*O+p*dt,u[12]=d*C+h*rt+m*V+p*L,u[1]=v*N+g*R+S*lt+M*W,u[5]=v*F+g*H+S*st+M*pt,u[9]=v*K+g*j+S*O+M*dt,u[13]=v*C+g*rt+S*V+M*L,u[2]=T*N+w*R+y*lt+_*W,u[6]=T*F+w*H+y*st+_*pt,u[10]=T*K+w*j+y*O+_*dt,u[14]=T*C+w*rt+y*V+_*L,u[3]=P*N+U*R+I*lt+k*W,u[7]=P*F+U*H+I*st+k*pt,u[11]=P*K+U*j+I*O+k*dt,u[15]=P*C+U*rt+I*V+k*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],S=e[10],M=e[14],T=e[3],w=e[7],y=e[11],_=e[15];return T*(+u*m*g-l*p*g-u*h*S+r*p*S+l*h*M-r*m*M)+w*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*v-u*m*v)+y*(+i*p*g-i*h*M-u*d*g+r*d*M+u*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*S+l*d*g-r*d*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],S=e[10],M=e[11],T=e[12],w=e[13],y=e[14],_=e[15],P=g*y*p-w*S*p+w*m*M-h*y*M-g*m*_+h*S*_,U=T*S*p-v*y*p-T*m*M+d*y*M+v*m*_-d*S*_,I=v*w*p-T*g*p+T*h*M-d*w*M-v*h*_+d*g*_,k=T*g*m-v*w*m-T*h*S+d*w*S+v*h*y-d*g*y,N=i*P+r*U+l*I+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=P*F,e[1]=(w*S*u-g*y*u-w*l*M+r*y*M+g*l*_-r*S*_)*F,e[2]=(h*y*u-w*m*u+w*l*p-r*y*p-h*l*_+r*m*_)*F,e[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*M-r*m*M)*F,e[4]=U*F,e[5]=(v*y*u-T*S*u+T*l*M-i*y*M-v*l*_+i*S*_)*F,e[6]=(T*m*u-d*y*u-T*l*p+i*y*p+d*l*_-i*m*_)*F,e[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*M+i*m*M)*F,e[8]=I*F,e[9]=(T*g*u-v*w*u-T*r*M+i*w*M+v*r*_-i*g*_)*F,e[10]=(d*w*u-T*h*u+T*r*p-i*w*p-d*r*_+i*h*_)*F,e[11]=(v*h*u-d*g*u-v*r*p+i*g*p+d*r*M-i*h*M)*F,e[12]=k*F,e[13]=(v*w*l-T*g*l+T*r*S-i*w*S-v*r*y+i*g*y)*F,e[14]=(T*h*l-d*w*l-T*r*m+i*w*m+d*r*y-i*h*y)*F,e[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*S+i*h*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,g=h+h,S=u*p,M=u*v,T=u*g,w=d*v,y=d*g,_=h*g,P=m*p,U=m*v,I=m*g,k=r.x,N=r.y,F=r.z;return l[0]=(1-(w+_))*k,l[1]=(M+I)*k,l[2]=(T-U)*k,l[3]=0,l[4]=(M-I)*N,l[5]=(1-(S+_))*N,l[6]=(y+P)*N,l[7]=0,l[8]=(T+U)*F,l[9]=(y-P)*F,l[10]=(1-(S+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,v=1/d,g=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,v=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let T,w;if(m)T=u/(d-u),w=d*u/(d-u);else if(h===Ui)T=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Rc)T=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,w;if(m)T=1/(d-u),w=d/(d-u);else if(h===Ui)T=-2/(d-u),w=-(d+u)/(d-u);else if(h===Rc)T=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new ft,Si=new hn,ay=new ft(0,0,0),ry=new ft(1,1,1),Va=new ft,ac=new ft,ti=new ft,Tx=new hn,Ax=new Fo;class ha{constructor(e=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Tx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sy=0;const Rx=new ft,fs=new Fo,na=new hn,rc=new ft,Ro=new ft,oy=new ft,ly=new Fo,Cx=new ft(1,0,0),wx=new ft(0,1,0),Dx=new ft(0,0,1),Ux={type:"added"},cy={type:"removed"},ds={type:"childadded",child:null},rd={type:"childremoved",child:null};class kn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ft,i=new ha,r=new Fo,l=new ft(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new pe}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Cx,e)}rotateY(e){return this.rotateOnAxis(wx,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,i){return Rx.copy(e).applyQuaternion(this.quaternion),this.position.add(Rx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cx,e)}translateY(e){return this.translateOnAxis(wx,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Ro,rc,this.up):na.lookAt(rc,Ro,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(na),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ux),ds.child=e,this.dispatchEvent(ds),ds.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cy),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ux),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),g=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new ft(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ft,ia=new ft,sd=new ft,aa=new ft,hs=new ft,ps=new ft,Lx=new ft,od=new ft,ld=new ft,cd=new ft,ud=new sn,fd=new sn,dd=new sn;class bi{constructor(e=new ft,i=new ft,r=new ft){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),ia.subVectors(r,i),sd.subVectors(e,i);const d=yi.dot(yi),h=yi.dot(ia),m=yi.dot(sd),p=ia.dot(ia),v=ia.dot(sd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-h*v)*S,T=(d*v-h*m)*S;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return ud.setScalar(0),fd.setScalar(0),dd.setScalar(0),ud.fromBufferAttribute(e,i),fd.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(ud,u.x),d.addScaledVector(fd,u.y),d.addScaledVector(dd,u.z),d}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),ia.subVectors(e,i),yi.cross(ia).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),yi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),od.subVectors(e,r);const m=hs.dot(od),p=ps.dot(od);if(m<=0&&p<=0)return i.copy(r);ld.subVectors(e,l);const v=hs.dot(ld),g=ps.dot(ld);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(hs,d);cd.subVectors(e,u);const M=hs.dot(cd),T=ps.dot(cd);if(T>=0&&M<=T)return i.copy(u);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(ps,h);const y=v*T-M*g;if(y<=0&&g-v>=0&&M-T>=0)return Lx.subVectors(u,l),h=(g-v)/(g-v+(M-T)),i.copy(l).addScaledVector(Lx,h);const _=1/(y+w+S);return d=w*_,h=S*_,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},sc={h:0,s:0,l:0};function hd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=KS(e,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=hd(d,u,e+1/3),this.g=hd(d,u,e),this.b=hd(d,u,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:fe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=Ag[e.toLowerCase()];return r!==void 0?this.setHex(r,i):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Ue.workingToColorSpace(Ln.copy(this),e),Math.round(Ee(Ln.r*255,0,255))*65536+Math.round(Ee(Ln.g*255,0,255))*256+Math.round(Ee(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){Ue.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(sc);const r=Zf(Xa.h,sc.h,i),l=Zf(Xa.s,sc.s,i),u=Zf(Xa.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ie;Ie.NAMES=Ag;let uy=0;class Bo extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=vs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ed&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rg extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new ft,oc=new ke;let fy=0;class ii{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=_x,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_x&&(e.usage=this.usage),e}}class Cg extends ii{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class wg extends ii{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Er extends ii{constructor(e,i,r){super(new Float32Array(e),i,r)}}let dy=0;const di=new hn,pd=new kn,ms=new ft,ei=new Io,Co=new Io,bn=new ft;class Ni extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?wg:Cg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ft(-1/0,-1/0,-1/0),new ft(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ft,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Co.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ei.min,Co.min),ei.expandByPoint(bn),bn.addVectors(ei.max,Co.max),ei.expandByPoint(bn)):(ei.expandByPoint(Co.min),ei.expandByPoint(Co.max))}ei.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)bn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(e,p),bn.add(ms)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new ft,m[K]=new ft;const p=new ft,v=new ft,g=new ft,S=new ke,M=new ke,T=new ke,w=new ft,y=new ft;function _(K,C,R){p.fromBufferAttribute(r,K),v.fromBufferAttribute(r,C),g.fromBufferAttribute(r,R),S.fromBufferAttribute(u,K),M.fromBufferAttribute(u,C),T.fromBufferAttribute(u,R),v.sub(p),g.sub(p),M.sub(S),T.sub(S);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(w.copy(v).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(H),y.copy(g).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(H),h[K].add(w),h[C].add(w),h[R].add(w),m[K].add(y),m[C].add(y),m[R].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let K=0,C=P.length;K<C;++K){const R=P[K],H=R.start,j=R.count;for(let rt=H,lt=H+j;rt<lt;rt+=3)_(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const U=new ft,I=new ft,k=new ft,N=new ft;function F(K){k.fromBufferAttribute(l,K),N.copy(k);const C=h[K];U.copy(C),U.sub(k.multiplyScalar(k.dot(C))).normalize(),I.crossVectors(N,C);const H=I.dot(m[K])<0?-1:1;d.setXYZW(K,U.x,U.y,U.z,H)}for(let K=0,C=P.length;K<C;++K){const R=P[K],H=R.start,j=R.count;for(let rt=H,lt=H+j;rt<lt;rt+=3)F(e.getX(rt+0)),F(e.getX(rt+1)),F(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ft,u=new ft,d=new ft,h=new ft,m=new ft,p=new ft,v=new ft,g=new ft;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),w=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,S=new p.constructor(m.length*v);let M=0,T=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*v;for(let _=0;_<v;_++)S[T++]=p[M++]}return new ii(S,v,g)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,g=p.length;v<g;v++){const S=p[v],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],g=u[p];for(let S=0,M=g.length;S<M;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nx=new hn,xr=new Eg,lc=new Dc,Ox=new ft,cc=new ft,uc=new ft,fc=new ft,md=new ft,dc=new ft,Px=new ft,hc=new ft;class Za extends kn{constructor(e=new Ni,i=new Rg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],g=u[m];v!==0&&(md.fromBufferAttribute(g,e),d?dc.addScaledVector(md,v):dc.addScaledVector(md.sub(i),v))}i.add(dc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(lc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(lc,Ox)===null||xr.origin.distanceToSquared(Ox)>(e.far-e.near)**2))&&(Nx.copy(u).invert(),xr.copy(e.ray).applyMatrix4(Nx),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,w=S.length;T<w;T++){const y=S[T],_=d[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let I=P,k=U;I<k;I+=3){const N=h.getX(I),F=h.getX(I+1),K=h.getX(I+2);l=pc(this,_,e,r,p,v,g,N,F,K),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let y=T,_=w;y<_;y+=3){const P=h.getX(y),U=h.getX(y+1),I=h.getX(y+2);l=pc(this,d,e,r,p,v,g,P,U,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,w=S.length;T<w;T++){const y=S[T],_=d[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let I=P,k=U;I<k;I+=3){const N=I,F=I+1,K=I+2;l=pc(this,_,e,r,p,v,g,N,F,K),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=T,_=w;y<_;y+=3){const P=y,U=y+1,I=y+2;l=pc(this,d,e,r,p,v,g,P,U,I),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function hy(o,e,i,r,l,u,d,h){let m;if(e.side===Xn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===ja,h),m===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function pc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const v=hy(o,e,i,r,cc,uc,fc,Px);if(v){const g=new ft;bi.getBarycoord(Px,cc,uc,fc,g),l&&(v.uv=bi.getInterpolatedAttribute(l,h,m,p,g,new ke)),u&&(v.uv1=bi.getInterpolatedAttribute(u,h,m,p,g,new ke)),d&&(v.normal=bi.getInterpolatedAttribute(d,h,m,p,g,new ft),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ft,materialIndex:0};bi.getNormal(cc,uc,fc,S.normal),v.face=S,v.barycoord=g}return v}class Ho extends Ni{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],g=[];let S=0,M=0;T("z","y","x",-1,-1,r,i,e,d,u,0),T("z","y","x",1,-1,r,i,-e,d,u,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Er(p,3)),this.setAttribute("normal",new Er(v,3)),this.setAttribute("uv",new Er(g,2));function T(w,y,_,P,U,I,k,N,F,K,C){const R=I/F,H=k/K,j=I/2,rt=k/2,lt=N/2,st=F+1,O=K+1;let V=0,W=0;const pt=new ft;for(let dt=0;dt<O;dt++){const L=dt*H-rt;for(let et=0;et<st;et++){const vt=et*R-j;pt[w]=vt*P,pt[y]=L*U,pt[_]=lt,p.push(pt.x,pt.y,pt.z),pt[w]=0,pt[y]=0,pt[_]=N>0?1:-1,v.push(pt.x,pt.y,pt.z),g.push(et/F),g.push(1-dt/K),V+=1}}for(let dt=0;dt<K;dt++)for(let L=0;L<F;L++){const et=S+L+st*dt,vt=S+L+st*(dt+1),yt=S+(L+1)+st*(dt+1),Nt=S+(L+1)+st*dt;m.push(et,vt,Nt),m.push(vt,yt,Nt),W+=6}h.addGroup(M,W,C),M+=W,S+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function py(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Dg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const my={clone:Ts,merge:On};var xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ug extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new ft,zx=new ke,Fx=new ke;class Mi extends Ug{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-e/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-e/ka.z)}getViewSize(e,i){return this.getViewBounds(e,zx,Fx),i.subVectors(Fx,zx)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,gs=1;class _y extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(xs,gs,e,i);l.layers=this.layers,this.add(l);const u=new Mi(xs,gs,e,i);u.layers=this.layers,this.add(u);const d=new Mi(xs,gs,e,i);d.layers=this.layers,this.add(d);const h=new Mi(xs,gs,e,i);h.layers=this.layers,this.add(h);const m=new Mi(xs,gs,e,i);m.layers=this.layers,this.add(m);const p=new Mi(xs,gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Lg extends Pn{constructor(e=[],i=Ms,r,l,u,d,h,m,p,v){super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vy extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Lg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ho(5,5,5),u=new Li({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ua});u.uniforms.tEquirect.value=i;const d=new Za(l,u),h=i.minFilter;return i.minFilter===br&&(i.minFilter=pi),new _y(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class mc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sy={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ft,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ft),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ft,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ft),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class yy extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class My extends Pn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=ni,v=ni,g,S){super(null,d,h,m,p,v,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new ft,by=new ft,Ey=new pe;class Sr{constructor(e=new ft(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=gd.subVectors(r,i).cross(by.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(gd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ey.getNormalMatrix(e),l=this.coplanarPoint(gd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Dc,Ty=new ke(.5,.5),xc=new ft;class Ng{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,d=new Sr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],g=u[5],S=u[6],M=u[7],T=u[8],w=u[9],y=u[10],_=u[11],P=u[12],U=u[13],I=u[14],k=u[15];if(l[0].setComponents(p-d,M-v,_-T,k-P).normalize(),l[1].setComponents(p+d,M+v,_+T,k+P).normalize(),l[2].setComponents(p+h,M+g,_+w,k+U).normalize(),l[3].setComponents(p-h,M-g,_-w,k-U).normalize(),r)l[4].setComponents(m,S,y,I).normalize(),l[5].setComponents(p-m,M-S,_-y,k-I).normalize();else if(l[4].setComponents(p-m,M-S,_-y,k-I).normalize(),i===Ui)l[5].setComponents(p+m,M+S,_+y,k+I).normalize();else if(i===Rc)l[5].setComponents(m,S,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=Ty.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ay extends Bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ix=new hn,dh=new Eg,gc=new Dc,_c=new ft;class Ry extends kn{constructor(e=new Ni,i=new Ay){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,e.ray.intersectsSphere(gc)===!1)return;Ix.copy(l).invert(),dh.copy(e.ray).applyMatrix4(Ix);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let T=S,w=M;T<w;T++){const y=p.getX(T);_c.fromBufferAttribute(g,y),Bx(_c,y,m,l,e,i,this)}}else{const S=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let T=S,w=M;T<w;T++)_c.fromBufferAttribute(g,T),Bx(_c,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Bx(o,e,i,r,l,u,d){const h=dh.distanceSqToPoint(o);if(h<i){const m=new ft;dh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Og extends Pn{constructor(e,i,r=Tr,l,u,d,h=ni,m=ni,p,v=No,g=1){if(v!==No&&v!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Pg extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Uc extends Ni{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,S=i/m,M=[],T=[],w=[],y=[];for(let _=0;_<v;_++){const P=_*S-d;for(let U=0;U<p;U++){const I=U*g-u;T.push(I,-P,0),w.push(0,0,1),y.push(U/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const U=P+p*_,I=P+p*(_+1),k=P+1+p*(_+1),N=P+1+p*_;M.push(U,I,N),M.push(I,k,N)}this.setIndex(M),this.setAttribute("position",new Er(T,3)),this.setAttribute("normal",new Er(w,3)),this.setAttribute("uv",new Er(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cy extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wy extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zg extends Ug{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Dy extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Hx(o,e,i,r){const l=Uy(r);switch(i){case _g:return o*e;case Sg:return o*e/l.components*l.byteLength;case vh:return o*e/l.components*l.byteLength;case Sh:return o*e*2/l.components*l.byteLength;case yh:return o*e*2/l.components*l.byteLength;case vg:return o*e*3/l.components*l.byteLength;case Ei:return o*e*4/l.components*l.byteLength;case Mh:return o*e*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Id:case Hd:return Math.max(o,16)*Math.max(e,8)/4;case Fd:case Bd:return Math.max(o,8)*Math.max(e,8)/2;case Gd:case Vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case qd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ah:case rh:case sh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case oh:case lh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ch:case uh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Uy(o){switch(o){case da:case pg:return{byteLength:1,components:1};case Uo:case mg:case As:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Tr:case xh:case ca:return{byteLength:4,components:1};case xg:case gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fg(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Ly(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<g.length;M++){const T=g[S],w=g[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,g[S]=w)}g.length=S+1;for(let M=0,T=g.length;M<T;M++){const w=g[M];o.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,UM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:Ny,alphahash_pars_fragment:Oy,alphamap_fragment:Py,alphamap_pars_fragment:zy,alphatest_fragment:Fy,alphatest_pars_fragment:Iy,aomap_fragment:By,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Vy,begin_vertex:Xy,beginnormal_vertex:ky,bsdfs:Wy,iridescence_fragment:qy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Qy,color_fragment:Jy,color_pars_fragment:$y,color_pars_vertex:tM,color_vertex:eM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:aM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:fM,envmap_common_pars_fragment:dM,envmap_pars_fragment:hM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:TM,envmap_vertex:mM,fog_vertex:xM,fog_pars_vertex:gM,fog_fragment:_M,fog_pars_fragment:vM,gradientmap_pars_fragment:SM,lightmap_pars_fragment:yM,lights_lambert_fragment:MM,lights_lambert_pars_fragment:bM,lights_pars_begin:EM,lights_toon_fragment:AM,lights_toon_pars_fragment:RM,lights_phong_fragment:CM,lights_phong_pars_fragment:wM,lights_physical_fragment:DM,lights_physical_pars_fragment:UM,lights_fragment_begin:LM,lights_fragment_maps:NM,lights_fragment_end:OM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:IM,map_fragment:BM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:kM,morphinstance_vertex:WM,morphcolor_vertex:qM,morphnormal_vertex:YM,morphtarget_pars_vertex:jM,morphtarget_vertex:ZM,normal_fragment_begin:KM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:$M,normal_vertex:tb,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:ab,iridescence_pars_fragment:rb,opaque_fragment:sb,packing:ob,premultiplied_alpha_fragment:lb,project_vertex:cb,dithering_fragment:ub,dithering_pars_fragment:fb,roughnessmap_fragment:db,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:xb,shadowmask_pars_fragment:gb,skinbase_vertex:_b,skinning_pars_vertex:vb,skinning_vertex:Sb,skinnormal_vertex:yb,specularmap_fragment:Mb,specularmap_pars_fragment:bb,tonemapping_fragment:Eb,tonemapping_pars_fragment:Tb,transmission_fragment:Ab,transmission_pars_fragment:Rb,uv_pars_fragment:Cb,uv_pars_vertex:wb,uv_vertex:Db,worldpos_vertex:Ub,background_vert:Lb,background_frag:Nb,backgroundCube_vert:Ob,backgroundCube_frag:Pb,cube_vert:zb,cube_frag:Fb,depth_vert:Ib,depth_frag:Bb,distanceRGBA_vert:Hb,distanceRGBA_frag:Gb,equirect_vert:Vb,equirect_frag:Xb,linedashed_vert:kb,linedashed_frag:Wb,meshbasic_vert:qb,meshbasic_frag:Yb,meshlambert_vert:jb,meshlambert_frag:Zb,meshmatcap_vert:Kb,meshmatcap_frag:Qb,meshnormal_vert:Jb,meshnormal_frag:$b,meshphong_vert:t3,meshphong_frag:e3,meshphysical_vert:n3,meshphysical_frag:i3,meshtoon_vert:a3,meshtoon_frag:r3,points_vert:s3,points_frag:o3,shadow_vert:l3,shadow_frag:c3,sprite_vert:u3,sprite_frag:f3},Lt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Di={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new ft},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Di.physical={uniforms:On([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const vc={r:0,b:0,g:0},_r=new ha,d3=new hn;function h3(o,e,i,r,l,u,d){const h=new Ie(0);let m=u===!0?0:1,p,v,g=null,S=0,M=null;function T(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?i:e).get(I)),I}function w(U){let I=!1;const k=T(U);k===null?_(h,m):k&&k.isColor&&(_(k,1),I=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,I){const k=T(I);k&&(k.isCubeTexture||k.mapping===wc)?(v===void 0&&(v=new Za(new Ho(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ts(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(N,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),_r.copy(I.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(d3.makeRotationFromEuler(_r)),v.material.toneMapped=Ue.getTransfer(k.colorSpace)!==Xe,(g!==k||S!==k.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=k,S=k.version,M=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Za(new Uc(2,2),new Li({name:"BackgroundMaterial",uniforms:Ts(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(k.colorSpace)!==Xe,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||S!==k.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=k,S=k.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,I){U.getRGB(vc,Dg(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,I,d)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,I=1){h.set(U),m=I,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:w,addToRenderList:y,dispose:P}}function p3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(R,H,j,rt,lt){let st=!1;const O=g(rt,j,H);u!==O&&(u=O,p(u.object)),st=M(R,rt,j,lt),st&&T(R,rt,j,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(st||d)&&(d=!1,I(R,H,j,rt),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function g(R,H,j){const rt=j.wireframe===!0;let lt=r[R.id];lt===void 0&&(lt={},r[R.id]=lt);let st=lt[H.id];st===void 0&&(st={},lt[H.id]=st);let O=st[rt];return O===void 0&&(O=S(m()),st[rt]=O),O}function S(R){const H=[],j=[],rt=[];for(let lt=0;lt<i;lt++)H[lt]=0,j[lt]=0,rt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:rt,object:R,attributes:{},index:null}}function M(R,H,j,rt){const lt=u.attributes,st=H.attributes;let O=0;const V=j.getAttributes();for(const W in V)if(V[W].location>=0){const dt=lt[W];let L=st[W];if(L===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),dt===void 0||dt.attribute!==L||L&&dt.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==rt}function T(R,H,j,rt){const lt={},st=H.attributes;let O=0;const V=j.getAttributes();for(const W in V)if(V[W].location>=0){let dt=st[W];dt===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor));const L={};L.attribute=dt,dt&&dt.data&&(L.data=dt.data),lt[W]=L,O++}u.attributes=lt,u.attributesNum=O,u.index=rt}function w(){const R=u.newAttributes;for(let H=0,j=R.length;H<j;H++)R[H]=0}function y(R){_(R,0)}function _(R,H){const j=u.newAttributes,rt=u.enabledAttributes,lt=u.attributeDivisors;j[R]=1,rt[R]===0&&(o.enableVertexAttribArray(R),rt[R]=1),lt[R]!==H&&(o.vertexAttribDivisor(R,H),lt[R]=H)}function P(){const R=u.newAttributes,H=u.enabledAttributes;for(let j=0,rt=H.length;j<rt;j++)H[j]!==R[j]&&(o.disableVertexAttribArray(j),H[j]=0)}function U(R,H,j,rt,lt,st,O){O===!0?o.vertexAttribIPointer(R,H,j,lt,st):o.vertexAttribPointer(R,H,j,rt,lt,st)}function I(R,H,j,rt){w();const lt=rt.attributes,st=j.getAttributes(),O=H.defaultAttributeValues;for(const V in st){const W=st[V];if(W.location>=0){let pt=lt[V];if(pt===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor)),pt!==void 0){const dt=pt.normalized,L=pt.itemSize,et=e.get(pt);if(et===void 0)continue;const vt=et.buffer,yt=et.type,Nt=et.bytesPerElement,it=yt===o.INT||yt===o.UNSIGNED_INT||pt.gpuType===xh;if(pt.isInterleavedBufferAttribute){const ut=pt.data,Ct=ut.stride,Pt=pt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ht=0;Ht<W.locationSize;Ht++)_(W.location+Ht,ut.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)y(W.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Ht=0;Ht<W.locationSize;Ht++)U(W.location+Ht,L/W.locationSize,yt,dt,Ct*Nt,(Pt+L/W.locationSize*Ht)*Nt,it)}else{if(pt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)_(W.location+ut,pt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ut=0;ut<W.locationSize;ut++)y(W.location+ut);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let ut=0;ut<W.locationSize;ut++)U(W.location+ut,L/W.locationSize,yt,dt,L*Nt,L/W.locationSize*ut*Nt,it)}}else if(O!==void 0){const dt=O[V];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(W.location,dt);break;case 3:o.vertexAttrib3fv(W.location,dt);break;case 4:o.vertexAttrib4fv(W.location,dt);break;default:o.vertexAttrib1fv(W.location,dt)}}}}P()}function k(){K();for(const R in r){const H=r[R];for(const j in H){const rt=H[j];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete H[j]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const j in H){const rt=H[j];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete H[j]}delete r[R.id]}function F(R){for(const H in r){const j=r[H];if(j[R.id]===void 0)continue;const rt=j[R.id];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete j[R.id]}}function K(){C(),d=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function m3(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=v[T];i.update(M,r,1)}function m(p,v,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],v[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,g);let T=0;for(let w=0;w<g;w++)T+=v[w]*S[w];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function x3(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ei&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const K=F===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==da&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ca&&!K)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(fe("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),I=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=T>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:k,maxSamples:N}}function g3(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Sr,h=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,M){const T=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,_=o.get(g);if(!l||T===null||T.length===0||u&&!y)u?v(null):p();else{const P=u?0:r,U=P*4;let I=_.clippingState||null;m.value=I,I=v(T,S,U,M);for(let k=0;k!==U;++k)I[k]=i[k];_.clippingState=I,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,M,T){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=m.value,T!==!0||y===null){const _=M+w*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,I=M;U!==w;++U,I+=4)d.copy(g[U]).applyMatrix4(P,h),d.normal.toArray(y,I),y[I+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function _3(o){let e=new WeakMap;function i(d,h){return h===Nd?d.mapping=Ms:h===Od&&(d.mapping=bs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nd||h===Od)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new vy(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const qa=4,Gx=[.125,.215,.35,.446,.526,.582],Mr=20,v3=256,wo=new zg,Vx=new Ie;let _d=null,vd=0,Sd=0,yd=!1;const S3=new ft;class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=S3}=u;_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,vd,Sd),this._renderer.xr.enabled=yd,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:As,format:Ei,colorSpace:Es,depthBuffer:!1},l=kx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kx(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y3(u)),this._blurMaterial=b3(u,e,i),this._ggxMaterial=M3(u,e,i)}return l}_compileMaterial(e){const i=new Za(new Ni,e);this._renderer.compile(i,wo)}_sceneToCubeUV(e,i,r,l,u){const m=new Mi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(Vx),g.toneMapping=Ya,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Za(new Ho,new Rg({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let _=!1;const P=e.background;P?P.isColor&&(y.color.copy(P),e.background=null,_=!0):(y.color.copy(Vx),_=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[U],u.y,u.z)):I===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[U]));const k=this._cubeSize;_s(l,I*k,U>2?k:0,k,k),g.setRenderTarget(l),_&&g.render(w,m),g.render(e,m)}g.toneMapping=M,g.autoClear=S,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;_s(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,wo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),S=.05+p*.95,M=g*S,{_lodMax:T}=this,w=this._sizeLods[r],y=3*w*(r>T-qa?r-T+qa:0),_=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,_s(u,y,_,3*w,2*w),l.setRenderTarget(u),l.render(h,wo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,_s(e,y,_,3*w,2*w),l.setRenderTarget(e),l.render(h,wo)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),w=u/T,y=isFinite(u)?1+Math.floor(v*w):Mr;y>Mr&&fe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const _=[];let P=0;for(let F=0;F<Mr;++F){const K=F/w,C=Math.exp(-K*K/2);_.push(C),F===0?P+=C:F<y&&(P+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/P;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=T,S.mipInt.value=U-r;const I=this._sizeLods[l],k=3*I*(l>U-qa?l-U+qa:0),N=4*(this._cubeSize-I);_s(i,k,N,3*I,2*I),m.setRenderTarget(i),m.render(g,wo)}}function y3(o){const e=[],i=[],r=[];let l=o;const u=o-qa+1+Gx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-qa?m=Gx[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,T=6,w=3,y=2,_=1,P=new Float32Array(w*T*M),U=new Float32Array(y*T*M),I=new Float32Array(_*T*M);for(let N=0;N<M;N++){const F=N%3*2/3-1,K=N>2?0:-1,C=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];P.set(C,w*T*N),U.set(S,y*T*N);const R=[N,N,N,N,N,N];I.set(R,_*T*N)}const k=new Ni;k.setAttribute("position",new ii(P,w)),k.setAttribute("uv",new ii(U,y)),k.setAttribute("faceIndex",new ii(I,_)),r.push(new Za(k,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function kx(o,e,i){const r=new Ar(o,e,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _s(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function M3(o,e,i){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function b3(o,e,i){const r=new Float32Array(Mr),l=new ft(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Wx(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function qx(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E3(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Nd||m===Od,v=m===Ms||m===bs;if(p||v){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Xx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Xx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function T3(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("WebGLRenderer: "+r+" extension not supported."),l}}}function A3(o,e,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,T=g.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let U=0,I=P.length;U<I;U+=3){const k=P[U+0],N=P[U+1],F=P[U+2];S.push(k,N,N,F,F,k)}}else if(T!==void 0){const P=T.array;w=T.version;for(let U=0,I=P.length/3-1;U<I;U+=3){const k=U+0,N=U+1,F=U+2;S.push(k,N,N,F,F,k)}}else return;const y=new(Mg(S)?wg:Cg)(S,1);y.version=w;const _=u.get(g);_&&e.remove(_),u.set(g,y)}function v(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function R3(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(r,M,u,S*d,T),i.update(M,r,T))}function v(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,T);let y=0;for(let _=0;_<T;_++)y+=M[_];i.update(y,r,1)}function g(S,M,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/d,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,w,0,T);let _=0;for(let P=0;P<T;P++)_+=M[P]*w[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function C3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:rn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function w3(o,e,i){const r=new WeakMap,l=new sn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let R=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let I=0;T===!0&&(I=1),w===!0&&(I=2),y===!0&&(I=3);let k=h.attributes.position.count*I,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*N*4*g),K=new bg(F,k,N,g);K.type=ca,K.needsUpdate=!0;const C=I*4;for(let H=0;H<g;H++){const j=_[H],rt=P[H],lt=U[H],st=k*N*4*H;for(let O=0;O<j.count;O++){const V=O*C;T===!0&&(l.fromBufferAttribute(j,O),F[st+V+0]=l.x,F[st+V+1]=l.y,F[st+V+2]=l.z,F[st+V+3]=0),w===!0&&(l.fromBufferAttribute(rt,O),F[st+V+4]=l.x,F[st+V+5]=l.y,F[st+V+6]=l.z,F[st+V+7]=0),y===!0&&(l.fromBufferAttribute(lt,O),F[st+V+8]=l.x,F[st+V+9]=l.y,F[st+V+10]=l.z,F[st+V+11]=lt.itemSize===4?l.w:1)}}S={count:g,texture:K,size:new ke(k,N)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function D3(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Ig=new Pn,Yx=new Og(1,1),Bg=new bg,Hg=new ny,Gg=new Lg,jx=[],Zx=[],Kx=new Float32Array(16),Qx=new Float32Array(9),Jx=new Float32Array(4);function Cs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=jx[l];if(u===void 0&&(u=new Float32Array(l),jx[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Nc(o,e){let i=Zx[e];i===void 0&&(i=new Int32Array(e),Zx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function U3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function L3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function N3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function O3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function P3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Jx.set(r),o.uniformMatrix2fv(this.addr,!1,Jx),_n(i,r)}}function z3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Qx.set(r),o.uniformMatrix3fv(this.addr,!1,Qx),_n(i,r)}}function F3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Kx.set(r),o.uniformMatrix4fv(this.addr,!1,Kx),_n(i,r)}}function I3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function B3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function H3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function G3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function V3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function X3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function k3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function W3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function q3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yx.compareFunction=yg,u=Yx):u=Ig,i.setTexture2D(e||u,l)}function Y3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Hg,l)}function j3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Gg,l)}function Z3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Bg,l)}function K3(o){switch(o){case 5126:return U3;case 35664:return L3;case 35665:return N3;case 35666:return O3;case 35674:return P3;case 35675:return z3;case 35676:return F3;case 5124:case 35670:return I3;case 35667:case 35671:return B3;case 35668:case 35672:return H3;case 35669:case 35673:return G3;case 5125:return V3;case 36294:return X3;case 36295:return k3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return Z3}}function Q3(o,e){o.uniform1fv(this.addr,e)}function J3(o,e){const i=Cs(e,this.size,2);o.uniform2fv(this.addr,i)}function $3(o,e){const i=Cs(e,this.size,3);o.uniform3fv(this.addr,i)}function t1(o,e){const i=Cs(e,this.size,4);o.uniform4fv(this.addr,i)}function e1(o,e){const i=Cs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function n1(o,e){const i=Cs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function i1(o,e){const i=Cs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function a1(o,e){o.uniform1iv(this.addr,e)}function r1(o,e){o.uniform2iv(this.addr,e)}function s1(o,e){o.uniform3iv(this.addr,e)}function o1(o,e){o.uniform4iv(this.addr,e)}function l1(o,e){o.uniform1uiv(this.addr,e)}function c1(o,e){o.uniform2uiv(this.addr,e)}function u1(o,e){o.uniform3uiv(this.addr,e)}function f1(o,e){o.uniform4uiv(this.addr,e)}function d1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Ig,u[d])}function h1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Hg,u[d])}function p1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Gg,u[d])}function m1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Bg,u[d])}function x1(o){switch(o){case 5126:return Q3;case 35664:return J3;case 35665:return $3;case 35666:return t1;case 35674:return e1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return a1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class g1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=K3(i.type)}}class _1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=x1(i.type)}}class v1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function $x(o,e){o.seq.push(e),o.map[e.id]=e}function S1(o,e,i){const r=o.name,l=r.length;for(Md.lastIndex=0;;){const u=Md.exec(r),d=Md.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){$x(i,p===void 0?new g1(h,o,e):new _1(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new v1(h),$x(i,g)),i=g}}}class Tc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);S1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function tg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const y1=37297;let M1=0;function b1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const eg=new pe;function E1(o){Ue._getMatrix(eg,Ue.workingColorSpace,o);const e=`mat3( ${eg.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ng(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+b1(o.getShaderSource(e),h)}else return u}function T1(o,e){const i=E1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function A1(o,e){let i;switch(e){case wS:i="Linear";break;case DS:i="Reinhard";break;case US:i="Cineon";break;case LS:i="ACESFilmic";break;case OS:i="AgX";break;case PS:i="Neutral";break;case NS:i="Custom";break;default:fe("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new ft;function R1(){Ue.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function w1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function D1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Do(o){return o!==""}function ig(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(o){return o.replace(U1,N1)}const L1=new Map;function N1(o,e){let i=me[e];if(i===void 0){const r=L1.get(e);if(r!==void 0)i=me[r],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hh(i)}const O1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(o){return o.replace(O1,P1)}function P1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function sg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function F1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case bs:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function B1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dg:e="ENVMAP_BLENDING_MULTIPLY";break;case RS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function H1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function G1(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=z1(i),p=F1(i),v=I1(i),g=B1(i),S=H1(i),M=C1(i),T=w1(u),w=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Do).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Do).join(`
`),_.length>0&&(_+=`
`)):(y=[sg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),_=[sg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?me.tonemapping_pars_fragment:"",i.toneMapping!==Ya?A1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,T1("linearToOutputTexel",i.outputColorSpace),R1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),d=hh(d),d=ig(d,i),d=ag(d,i),h=hh(h),h=ig(h,i),h=ag(h,i),d=rg(d),h=rg(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=P+y+d,I=P+_+h,k=tg(l,l.VERTEX_SHADER,U),N=tg(l,l.FRAGMENT_SHADER,I);l.attachShader(w,k),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(H){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(k)||"",lt=l.getShaderInfoLog(N)||"",st=j.trim(),O=rt.trim(),V=lt.trim();let W=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,k,N);else{const dt=ng(l,k,"vertex"),L=ng(l,N,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+dt+`
`+L)}else st!==""?fe("WebGLProgram: Program Info Log:",st):(O===""||V==="")&&(pt=!1);pt&&(H.diagnostics={runnable:W,programLog:st,vertexShader:{log:O,prefix:y},fragmentShader:{log:V,prefix:_}})}l.deleteShader(k),l.deleteShader(N),K=new Tc(l,w),C=D1(l,w)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,y1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=M1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=N,this}let V1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new k1(e),i.set(e,r)),r}}class k1{constructor(e){this.id=V1++,this.code=e,this.usedTimes=0}}function W1(o,e,i,r,l,u,d){const h=new Tg,m=new X1,p=new Set,v=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,H,j,rt){const lt=j.fog,st=rt.geometry,O=C.isMeshStandardMaterial?j.environment:null,V=(C.isMeshStandardMaterial?i:e).get(C.envMap||O),W=V&&V.mapping===wc?V.image.height:null,pt=T[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&fe("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const dt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,L=dt!==void 0?dt.length:0;let et=0;st.morphAttributes.position!==void 0&&(et=1),st.morphAttributes.normal!==void 0&&(et=2),st.morphAttributes.color!==void 0&&(et=3);let vt,yt,Nt,it;if(pt){const Re=Di[pt];vt=Re.vertexShader,yt=Re.fragmentShader}else vt=C.vertexShader,yt=C.fragmentShader,m.update(C),Nt=m.getVertexShaderID(C),it=m.getFragmentShaderID(C);const ut=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Pt=rt.isInstancedMesh===!0,Ht=rt.isBatchedMesh===!0,$t=!!C.map,Ze=!!C.matcap,oe=!!V,_e=!!C.aoMap,B=!!C.lightMap,ie=!!C.bumpMap,re=!!C.normalMap,Te=!!C.displacementMap,Ft=!!C.emissiveMap,Le=!!C.metalnessMap,Wt=!!C.roughnessMap,ne=C.anisotropy>0,D=C.clearcoat>0,b=C.dispersion>0,Q=C.iridescence>0,mt=C.sheen>0,St=C.transmission>0,ct=ne&&!!C.anisotropyMap,qt=D&&!!C.clearcoatMap,Ut=D&&!!C.clearcoatNormalMap,Kt=D&&!!C.clearcoatRoughnessMap,kt=Q&&!!C.iridescenceMap,Mt=Q&&!!C.iridescenceThicknessMap,Et=mt&&!!C.sheenColorMap,Yt=mt&&!!C.sheenRoughnessMap,Vt=!!C.specularMap,Ot=!!C.specularColorMap,ae=!!C.specularIntensityMap,G=St&&!!C.transmissionMap,wt=St&&!!C.thicknessMap,At=!!C.gradientMap,Rt=!!C.alphaMap,bt=C.alphaTest>0,_t=!!C.alphaHash,It=!!C.extensions;let se=Ya;C.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(se=o.toneMapping);const Be={shaderID:pt,shaderType:C.type,shaderName:C.name,vertexShader:vt,fragmentShader:yt,defines:C.defines,customVertexShaderID:Nt,customFragmentShaderID:it,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ht,batchingColor:Ht&&rt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&rt.instanceColor!==null,instancingMorph:Pt&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Es,alphaToCoverage:!!C.alphaToCoverage,map:$t,matcap:Ze,envMap:oe,envMapMode:oe&&V.mapping,envMapCubeUVHeight:W,aoMap:_e,lightMap:B,bumpMap:ie,normalMap:re,displacementMap:S&&Te,emissiveMap:Ft,normalMapObjectSpace:re&&C.normalMapType===HS,normalMapTangentSpace:re&&C.normalMapType===BS,metalnessMap:Le,roughnessMap:Wt,anisotropy:ne,anisotropyMap:ct,clearcoat:D,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:Q,iridescenceMap:kt,iridescenceThicknessMap:Mt,sheen:mt,sheenColorMap:Et,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:ae,transmission:St,transmissionMap:G,thicknessMap:wt,gradientMap:At,opaque:C.transparent===!1&&C.blending===vs&&C.alphaToCoverage===!1,alphaMap:Rt,alphaTest:bt,alphaHash:_t,combine:C.combine,mapUv:$t&&w(C.map.channel),aoMapUv:_e&&w(C.aoMap.channel),lightMapUv:B&&w(C.lightMap.channel),bumpMapUv:ie&&w(C.bumpMap.channel),normalMapUv:re&&w(C.normalMap.channel),displacementMapUv:Te&&w(C.displacementMap.channel),emissiveMapUv:Ft&&w(C.emissiveMap.channel),metalnessMapUv:Le&&w(C.metalnessMap.channel),roughnessMapUv:Wt&&w(C.roughnessMap.channel),anisotropyMapUv:ct&&w(C.anisotropyMap.channel),clearcoatMapUv:qt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&w(C.sheenRoughnessMap.channel),specularMapUv:Vt&&w(C.specularMap.channel),specularColorMapUv:Ot&&w(C.specularColorMap.channel),specularIntensityMapUv:ae&&w(C.specularIntensityMap.channel),transmissionMapUv:G&&w(C.transmissionMap.channel),thicknessMapUv:wt&&w(C.thicknessMap.channel),alphaMapUv:Rt&&w(C.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(re||ne),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!st.attributes.uv&&($t||Rt),fog:!!lt,useFog:C.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ct,skinning:rt.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:$t&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===Xe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===oa,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:It&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&C.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function _(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(P(R,C),U(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function P(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function U(C,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),C.push(h.mask)}function I(C){const R=T[C.type];let H;if(R){const j=Di[R];H=my.clone(j.uniforms)}else H=C.uniforms;return H}function k(C,R){let H;for(let j=0,rt=v.length;j<rt;j++){const lt=v[j];if(lt.cacheKey===R){H=lt,++H.usedTimes;break}}return H===void 0&&(H=new G1(o,R,C,u),v.push(H)),H}function N(C){if(--C.usedTimes===0){const R=v.indexOf(C);v[R]=v[v.length-1],v.pop(),C.destroy()}}function F(C){m.remove(C)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:I,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:v,dispose:K}}function q1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Y1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function og(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function lg(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g,S,M,T,w,y){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:M,groupOrder:T,renderOrder:g.renderOrder,z:w,group:y},o[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=M,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=w,_.group=y),e++,_}function h(g,S,M,T,w,y){const _=d(g,S,M,T,w,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,S,M,T,w,y){const _=d(g,S,M,T,w,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||Y1),r.length>1&&r.sort(S||og),l.length>1&&l.sort(S||og)}function v(){for(let g=e,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function j1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new lg,o.set(r,[d])):l>=u.length?(d=new lg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Z1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ft,color:new Ie};break;case"SpotLight":i={position:new ft,direction:new ft,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ft,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ft,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new ft,halfWidth:new ft,halfHeight:new ft};break}return o[e.id]=i,i}}}function K1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Q1=0;function J1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function $1(o){const e=new Z1,i=K1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ft);const l=new ft,u=new hn,d=new hn;function h(p){let v=0,g=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,T=0,w=0,y=0,_=0,P=0,U=0,I=0,k=0,N=0,F=0;p.sort(J1);for(let C=0,R=p.length;C<R;C++){const H=p[C],j=H.color,rt=H.intensity,lt=H.distance,st=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=j.r*rt,g+=j.g*rt,S+=j.b*rt;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],rt);F++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,W=i.get(H);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=st,r.directionalShadowMatrix[M]=H.shadow.matrix,P++}r.directional[M]=O,M++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(j).multiplyScalar(rt),O.distance=lt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[w]=O;const V=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,V.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[w]=V.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,r.spotShadow[w]=W,r.spotShadowMap[w]=st,I++}w++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(j).multiplyScalar(rt),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=O,y++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const V=H.shadow,W=i.get(H);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,r.pointShadow[T]=W,r.pointShadowMap[T]=st,r.pointShadowMatrix[T]=H.shadow.matrix,U++}r.point[T]=O,T++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(rt),O.groundColor.copy(H.groundColor).multiplyScalar(rt),r.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==M||K.pointLength!==T||K.spotLength!==w||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==P||K.numPointShadows!==U||K.numSpotShadows!==I||K.numSpotMaps!==k||K.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=I+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,K.directionalLength=M,K.pointLength=T,K.spotLength=w,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=P,K.numPointShadows=U,K.numSpotShadows=I,K.numSpotMaps=k,K.numLightProbes=F,r.version=Q1++)}function m(p,v){let g=0,S=0,M=0,T=0,w=0;const y=v.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const U=p[_];if(U.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),g++}else if(U.isSpotLight){const I=r.spot[M];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const I=r.rectArea[T];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),d.identity(),u.copy(U.matrixWorld),u.premultiply(y),d.extractRotation(u),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),T++}else if(U.isPointLight){const I=r.point[S];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const I=r.hemi[w];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:r}}function cg(o){const e=new $1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function tE(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new cg(o),e.set(l,[h])):u>=d.length?(h=new cg(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const eE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iE(o,e,i){let r=new Ng;const l=new ke,u=new ke,d=new sn,h=new Cy({depthPacking:IS}),m=new wy,p={},v=i.maxTextureSize,g={[ja]:Xn,[Xn]:ja,[oa]:oa},S=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:eE,fragmentShader:nE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ni;T.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Za(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let _=this.type;this.render=function(N,F,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),j=o.state;j.setBlending(ua),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const rt=_!==sa&&this.type===sa,lt=_===sa&&this.type!==sa;for(let st=0,O=N.length;st<O;st++){const V=N[st],W=V.shadow;if(W===void 0){fe("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const pt=W.getFrameExtents();if(l.multiply(pt),u.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/pt.x),l.x=u.x*pt.x,W.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/pt.y),l.y=u.y*pt.y,W.mapSize.y=u.y)),W.map===null||rt===!0||lt===!0){const L=this.type!==sa?{minFilter:ni,magFilter:ni}:{};W.map!==null&&W.map.dispose(),W.map=new Ar(l.x,l.y,L),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const dt=W.getViewportCount();for(let L=0;L<dt;L++){const et=W.getViewport(L);d.set(u.x*et.x,u.y*et.y,u.x*et.z,u.y*et.w),j.viewport(d),W.updateMatrices(V,L),r=W.getFrustum(),I(F,K,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===sa&&P(W,K),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(C,R,H)};function P(N,F){const K=e.update(w);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ar(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(F,null,K,S,w,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(F,null,K,M,w,null)}function U(N,F,K,C){let R=null;const H=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=K.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=R.uuid,rt=F.uuid;let lt=p[j];lt===void 0&&(lt={},p[j]=lt);let st=lt[rt];st===void 0&&(st=R.clone(),lt[rt]=st,F.addEventListener("dispose",k)),R=st}if(R.visible=F.visible,R.wireframe=F.wireframe,C===sa?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const j=o.properties.get(R);j.light=K}return R}function I(N,F,K,C,R){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===sa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const rt=e.update(N),lt=N.material;if(Array.isArray(lt)){const st=rt.groups;for(let O=0,V=st.length;O<V;O++){const W=st[O],pt=lt[W.materialIndex];if(pt&&pt.visible){const dt=U(N,pt,C,R);N.onBeforeShadow(o,N,F,K,rt,dt,W),o.renderBufferDirect(K,null,rt,dt,N,W),N.onAfterShadow(o,N,F,K,rt,dt,W)}}}else if(lt.visible){const st=U(N,lt,C,R);N.onBeforeShadow(o,N,F,K,rt,st,null),o.renderBufferDirect(K,null,rt,st,N,null),N.onAfterShadow(o,N,F,K,rt,st,null)}}const j=N.children;for(let rt=0,lt=j.length;rt<lt;rt++)I(j[rt],F,K,C,R)}function k(N){N.target.removeEventListener("dispose",k);for(const K in p){const C=p[K],R=N.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const aE={[Ad]:Rd,[Cd]:Ud,[wd]:Ld,[ys]:Dd,[Rd]:Ad,[Ud]:Cd,[Ld]:wd,[Dd]:ys};function rE(o,e){function i(){let G=!1;const wt=new sn;let At=null;const Rt=new sn(0,0,0,0);return{setMask:function(bt){At!==bt&&!G&&(o.colorMask(bt,bt,bt,bt),At=bt)},setLocked:function(bt){G=bt},setClear:function(bt,_t,It,se,Be){Be===!0&&(bt*=se,_t*=se,It*=se),wt.set(bt,_t,It,se),Rt.equals(wt)===!1&&(o.clearColor(bt,_t,It,se),Rt.copy(wt))},reset:function(){G=!1,At=null,Rt.set(-1,0,0,0)}}}function r(){let G=!1,wt=!1,At=null,Rt=null,bt=null;return{setReversed:function(_t){if(wt!==_t){const It=e.get("EXT_clip_control");_t?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),wt=_t;const se=bt;bt=null,this.setClear(se)}},getReversed:function(){return wt},setTest:function(_t){_t?ut(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(_t){At!==_t&&!G&&(o.depthMask(_t),At=_t)},setFunc:function(_t){if(wt&&(_t=aE[_t]),Rt!==_t){switch(_t){case Ad:o.depthFunc(o.NEVER);break;case Rd:o.depthFunc(o.ALWAYS);break;case Cd:o.depthFunc(o.LESS);break;case ys:o.depthFunc(o.LEQUAL);break;case wd:o.depthFunc(o.EQUAL);break;case Dd:o.depthFunc(o.GEQUAL);break;case Ud:o.depthFunc(o.GREATER);break;case Ld:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=_t}},setLocked:function(_t){G=_t},setClear:function(_t){bt!==_t&&(wt&&(_t=1-_t),o.clearDepth(_t),bt=_t)},reset:function(){G=!1,At=null,Rt=null,bt=null,wt=!1}}}function l(){let G=!1,wt=null,At=null,Rt=null,bt=null,_t=null,It=null,se=null,Be=null;return{setTest:function(Re){G||(Re?ut(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Re){wt!==Re&&!G&&(o.stencilMask(Re),wt=Re)},setFunc:function(Re,wn,Wn){(At!==Re||Rt!==wn||bt!==Wn)&&(o.stencilFunc(Re,wn,Wn),At=Re,Rt=wn,bt=Wn)},setOp:function(Re,wn,Wn){(_t!==Re||It!==wn||se!==Wn)&&(o.stencilOp(Re,wn,Wn),_t=Re,It=wn,se=Wn)},setLocked:function(Re){G=Re},setClear:function(Re){Be!==Re&&(o.clearStencil(Re),Be=Re)},reset:function(){G=!1,wt=null,At=null,Rt=null,bt=null,_t=null,It=null,se=null,Be=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,M=[],T=null,w=!1,y=null,_=null,P=null,U=null,I=null,k=null,N=null,F=new Ie(0,0,0),K=0,C=!1,R=null,H=null,j=null,rt=null,lt=null;const st=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=V>=2);let pt=null,dt={};const L=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),vt=new sn().fromArray(L),yt=new sn().fromArray(et);function Nt(G,wt,At,Rt){const bt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(G,_t),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<At;It++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(wt+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return _t}const it={};it[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(ys),ie(!1),re(px),ut(o.CULL_FACE),_e(ua);function ut(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function Ct(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function Pt(G,wt){return g[G]!==wt?(o.bindFramebuffer(G,wt),g[G]=wt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=wt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ht(G,wt){let At=M,Rt=!1;if(G){At=S.get(wt),At===void 0&&(At=[],S.set(wt,At));const bt=G.textures;if(At.length!==bt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,It=bt.length;_t<It;_t++)At[_t]=o.COLOR_ATTACHMENT0+_t;At.length=bt.length,Rt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(At)}function $t(G){return T!==G?(o.useProgram(G),T=G,!0):!1}const Ze={[yr]:o.FUNC_ADD,[uS]:o.FUNC_SUBTRACT,[fS]:o.FUNC_REVERSE_SUBTRACT};Ze[dS]=o.MIN,Ze[hS]=o.MAX;const oe={[pS]:o.ZERO,[mS]:o.ONE,[xS]:o.SRC_COLOR,[Ed]:o.SRC_ALPHA,[MS]:o.SRC_ALPHA_SATURATE,[SS]:o.DST_COLOR,[_S]:o.DST_ALPHA,[gS]:o.ONE_MINUS_SRC_COLOR,[Td]:o.ONE_MINUS_SRC_ALPHA,[yS]:o.ONE_MINUS_DST_COLOR,[vS]:o.ONE_MINUS_DST_ALPHA,[bS]:o.CONSTANT_COLOR,[ES]:o.ONE_MINUS_CONSTANT_COLOR,[TS]:o.CONSTANT_ALPHA,[AS]:o.ONE_MINUS_CONSTANT_ALPHA};function _e(G,wt,At,Rt,bt,_t,It,se,Be,Re){if(G===ua){w===!0&&(Ct(o.BLEND),w=!1);return}if(w===!1&&(ut(o.BLEND),w=!0),G!==cS){if(G!==y||Re!==C){if((_!==yr||I!==yr)&&(o.blendEquation(o.FUNC_ADD),_=yr,I=yr),Re)switch(G){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bd:o.blendFunc(o.ONE,o.ONE);break;case mx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case xx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:rn("WebGLState: Invalid blending: ",G);break}else switch(G){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mx:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xx:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",G);break}P=null,U=null,k=null,N=null,F.set(0,0,0),K=0,y=G,C=Re}return}bt=bt||wt,_t=_t||At,It=It||Rt,(wt!==_||bt!==I)&&(o.blendEquationSeparate(Ze[wt],Ze[bt]),_=wt,I=bt),(At!==P||Rt!==U||_t!==k||It!==N)&&(o.blendFuncSeparate(oe[At],oe[Rt],oe[_t],oe[It]),P=At,U=Rt,k=_t,N=It),(se.equals(F)===!1||Be!==K)&&(o.blendColor(se.r,se.g,se.b,Be),F.copy(se),K=Be),y=G,C=!1}function B(G,wt){G.side===oa?Ct(o.CULL_FACE):ut(o.CULL_FACE);let At=G.side===Xn;wt&&(At=!At),ie(At),G.blending===vs&&G.transparent===!1?_e(ua):_e(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Rt=G.stencilWrite;h.setTest(Rt),Rt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ft(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function re(G){G!==sS?(ut(o.CULL_FACE),G!==H&&(G===px?o.cullFace(o.BACK):G===oS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),H=G}function Te(G){G!==j&&(O&&o.lineWidth(G),j=G)}function Ft(G,wt,At){G?(ut(o.POLYGON_OFFSET_FILL),(rt!==wt||lt!==At)&&(o.polygonOffset(wt,At),rt=wt,lt=At)):Ct(o.POLYGON_OFFSET_FILL)}function Le(G){G?ut(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Wt(G){G===void 0&&(G=o.TEXTURE0+st-1),pt!==G&&(o.activeTexture(G),pt=G)}function ne(G,wt,At){At===void 0&&(pt===null?At=o.TEXTURE0+st-1:At=pt);let Rt=dt[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},dt[At]=Rt),(Rt.type!==G||Rt.texture!==wt)&&(pt!==At&&(o.activeTexture(At),pt=At),o.bindTexture(G,wt||it[G]),Rt.type=G,Rt.texture=wt)}function D(){const G=dt[pt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function mt(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function St(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ut(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Kt(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function kt(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Mt(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Et(G){vt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),vt.copy(G))}function Yt(G){yt.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),yt.copy(G))}function Vt(G,wt){let At=p.get(wt);At===void 0&&(At=new WeakMap,p.set(wt,At));let Rt=At.get(G);Rt===void 0&&(Rt=o.getUniformBlockIndex(wt,G.name),At.set(G,Rt))}function Ot(G,wt){const Rt=p.get(wt).get(G);m.get(wt)!==Rt&&(o.uniformBlockBinding(wt,Rt,G.__bindingPointIndex),m.set(wt,Rt))}function ae(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},pt=null,dt={},g={},S=new WeakMap,M=[],T=null,w=!1,y=null,_=null,P=null,U=null,I=null,k=null,N=null,F=new Ie(0,0,0),K=0,C=!1,R=null,H=null,j=null,rt=null,lt=null,vt.set(0,0,o.canvas.width,o.canvas.height),yt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ut,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ht,useProgram:$t,setBlending:_e,setMaterial:B,setFlipSided:ie,setCullFace:re,setLineWidth:Te,setPolygonOffset:Ft,setScissorTest:Le,activeTexture:Wt,bindTexture:ne,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:Q,texImage2D:kt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:qt,scissor:Et,viewport:Yt,reset:ae}}function sE(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ke,v=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,b){return M?new OffscreenCanvas(D,b):Cc("canvas")}function w(D,b,Q){let mt=1;const St=ne(D);if((St.width>Q||St.height>Q)&&(mt=Q/Math.max(St.width,St.height)),mt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ct=Math.floor(mt*St.width),qt=Math.floor(mt*St.height);g===void 0&&(g=T(ct,qt));const Ut=b?T(ct,qt):g;return Ut.width=ct,Ut.height=qt,Ut.getContext("2d").drawImage(D,0,0,ct,qt),fe("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ct+"x"+qt+")."),Ut}else return"data"in D&&fe("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,b,Q,mt,St=!1){if(D!==null){if(o[D]!==void 0)return o[D];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ct=b;if(b===o.RED&&(Q===o.FLOAT&&(ct=o.R32F),Q===o.HALF_FLOAT&&(ct=o.R16F),Q===o.UNSIGNED_BYTE&&(ct=o.R8)),b===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ct=o.R8UI),Q===o.UNSIGNED_SHORT&&(ct=o.R16UI),Q===o.UNSIGNED_INT&&(ct=o.R32UI),Q===o.BYTE&&(ct=o.R8I),Q===o.SHORT&&(ct=o.R16I),Q===o.INT&&(ct=o.R32I)),b===o.RG&&(Q===o.FLOAT&&(ct=o.RG32F),Q===o.HALF_FLOAT&&(ct=o.RG16F),Q===o.UNSIGNED_BYTE&&(ct=o.RG8)),b===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ct=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ct=o.RG16UI),Q===o.UNSIGNED_INT&&(ct=o.RG32UI),Q===o.BYTE&&(ct=o.RG8I),Q===o.SHORT&&(ct=o.RG16I),Q===o.INT&&(ct=o.RG32I)),b===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),Q===o.UNSIGNED_INT&&(ct=o.RGB32UI),Q===o.BYTE&&(ct=o.RGB8I),Q===o.SHORT&&(ct=o.RGB16I),Q===o.INT&&(ct=o.RGB32I)),b===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ct=o.RGBA32UI),Q===o.BYTE&&(ct=o.RGBA8I),Q===o.SHORT&&(ct=o.RGBA16I),Q===o.INT&&(ct=o.RGBA32I)),b===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),b===o.RGBA){const qt=St?Ac:Ue.getTransfer(mt);Q===o.FLOAT&&(ct=o.RGBA32F),Q===o.HALF_FLOAT&&(ct=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ct=qt===Xe?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function I(D,b){let Q;return D?b===null||b===Tr||b===Lo?Q=o.DEPTH24_STENCIL8:b===ca?Q=o.DEPTH32F_STENCIL8:b===Uo&&(Q=o.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Tr||b===Lo?Q=o.DEPTH_COMPONENT24:b===ca?Q=o.DEPTH_COMPONENT32F:b===Uo&&(Q=o.DEPTH_COMPONENT16),Q}function k(D,b){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ni&&D.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function N(D){const b=D.target;b.removeEventListener("dispose",N),K(b),b.isVideoTexture&&v.delete(b)}function F(D){const b=D.target;b.removeEventListener("dispose",F),R(b)}function K(D){const b=r.get(D);if(b.__webglInit===void 0)return;const Q=D.source,mt=S.get(Q);if(mt){const St=mt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&C(D),Object.keys(mt).length===0&&S.delete(Q)}r.remove(D)}function C(D){const b=r.get(D);o.deleteTexture(b.__webglTexture);const Q=D.source,mt=S.get(Q);delete mt[b.__cacheKey],d.memory.textures--}function R(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let St=0;St<b.__webglFramebuffer[mt].length;St++)o.deleteFramebuffer(b.__webglFramebuffer[mt][St]);else o.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)o.deleteFramebuffer(b.__webglFramebuffer[mt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=D.textures;for(let mt=0,St=Q.length;mt<St;mt++){const ct=r.get(Q[mt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),r.remove(Q[mt])}r.remove(D)}let H=0;function j(){H=0}function rt(){const D=H;return D>=l.maxTextures&&fe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),H+=1,D}function lt(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function st(D,b){const Q=r.get(D);if(D.isVideoTexture&&Le(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const mt=D.image;if(mt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Q,D,b);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+b)}function O(D,b){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){it(Q,D,b);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+b)}function V(D,b){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){it(Q,D,b);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+b)}function W(D,b){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){ut(Q,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+b)}const pt={[Pd]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[zd]:o.MIRRORED_REPEAT},dt={[ni]:o.NEAREST,[zS]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[br]:o.LINEAR_MIPMAP_LINEAR},L={[GS]:o.NEVER,[YS]:o.ALWAYS,[VS]:o.LESS,[yg]:o.LEQUAL,[XS]:o.EQUAL,[qS]:o.GEQUAL,[kS]:o.GREATER,[WS]:o.NOTEQUAL};function et(D,b){if(b.type===ca&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===Yf||b.magFilter===Jl||b.magFilter===br||b.minFilter===pi||b.minFilter===Yf||b.minFilter===Jl||b.minFilter===br)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,pt[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,pt[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,pt[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,dt[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ni||b.minFilter!==Jl&&b.minFilter!==br||b.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function vt(D,b){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",N));const mt=b.source;let St=S.get(mt);St===void 0&&(St={},S.set(mt,St));const ct=lt(b);if(ct!==D.__cacheKey){St[ct]===void 0&&(St[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),St[ct].usedTimes++;const qt=St[D.__cacheKey];qt!==void 0&&(St[D.__cacheKey].usedTimes--,qt.usedTimes===0&&C(b)),D.__cacheKey=ct,D.__webglTexture=St[ct].texture}return Q}function yt(D,b,Q){return Math.floor(Math.floor(D/Q)/b)}function Nt(D,b,Q,mt){const ct=D.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,Q,mt,b.data);else{ct.sort((Mt,Et)=>Mt.start-Et.start);let qt=0;for(let Mt=1;Mt<ct.length;Mt++){const Et=ct[qt],Yt=ct[Mt],Vt=Et.start+Et.count,Ot=yt(Yt.start,b.width,4),ae=yt(Et.start,b.width,4);Yt.start<=Vt+1&&Ot===ae&&yt(Yt.start+Yt.count-1,b.width,4)===Ot?Et.count=Math.max(Et.count,Yt.start+Yt.count-Et.start):(++qt,ct[qt]=Yt)}ct.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,Et=ct.length;Mt<Et;Mt++){const Yt=ct[Mt],Vt=Math.floor(Yt.start/4),Ot=Math.ceil(Yt.count/4),ae=Vt%b.width,G=Math.floor(Vt/b.width),wt=Ot,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ae),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,ae,G,wt,At,Q,mt,b.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function it(D,b,Q){let mt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=o.TEXTURE_3D);const St=vt(D,b),ct=b.source;i.bindTexture(mt,D.__webglTexture,o.TEXTURE0+Q);const qt=r.get(ct);if(ct.version!==qt.__version||St===!0){i.activeTexture(o.TEXTURE0+Q);const Ut=Ue.getPrimaries(Ue.workingColorSpace),Kt=b.colorSpace===Wa?null:Ue.getPrimaries(b.colorSpace),kt=b.colorSpace===Wa||Ut===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Mt=w(b.image,!1,l.maxTextureSize);Mt=Wt(b,Mt);const Et=u.convert(b.format,b.colorSpace),Yt=u.convert(b.type);let Vt=U(b.internalFormat,Et,Yt,b.colorSpace,b.isVideoTexture);et(mt,b);let Ot;const ae=b.mipmaps,G=b.isVideoTexture!==!0,wt=qt.__version===void 0||St===!0,At=ct.dataReady,Rt=k(b,Mt);if(b.isDepthTexture)Vt=I(b.format===Oo,b.type),wt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Et,Yt,null));else if(b.isDataTexture)if(ae.length>0){G&&wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,ae[0].width,ae[0].height);for(let bt=0,_t=ae.length;bt<_t;bt++)Ot=ae[bt],G?At&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Et,Yt,Ot.data);b.generateMipmaps=!1}else G?(wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,Mt.width,Mt.height),At&&Nt(b,Mt,Et,Yt)):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Et,Yt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,ae[0].width,ae[0].height,Mt.depth);for(let bt=0,_t=ae.length;bt<_t;bt++)if(Ot=ae[bt],b.format!==Ei)if(Et!==null)if(G){if(At)if(b.layerUpdates.size>0){const It=Hx(Ot.width,Ot.height,b.format,b.type);for(const se of b.layerUpdates){const Be=Ot.data.subarray(se*It/Ot.data.BYTES_PER_ELEMENT,(se+1)*It/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,se,Ot.width,Ot.height,1,Et,Be)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,Mt.depth,Et,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,Mt.depth,Et,Yt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,Mt.depth,0,Et,Yt,Ot.data)}else{G&&wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Vt,ae[0].width,ae[0].height);for(let bt=0,_t=ae.length;bt<_t;bt++)Ot=ae[bt],b.format!==Ei?Et!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Ot.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?At&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Et,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Et,Yt,Ot.data)}else if(b.isDataArrayTexture)if(G){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Vt,Mt.width,Mt.height,Mt.depth),At)if(b.layerUpdates.size>0){const bt=Hx(Mt.width,Mt.height,b.format,b.type);for(const _t of b.layerUpdates){const It=Mt.data.subarray(_t*bt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,Yt,It)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Yt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Et,Yt,Mt.data);else if(b.isData3DTexture)G?(wt&&i.texStorage3D(o.TEXTURE_3D,Rt,Vt,Mt.width,Mt.height,Mt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,Yt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Et,Yt,Mt.data);else if(b.isFramebufferTexture){if(wt)if(G)i.texStorage2D(o.TEXTURE_2D,Rt,Vt,Mt.width,Mt.height);else{let bt=Mt.width,_t=Mt.height;for(let It=0;It<Rt;It++)i.texImage2D(o.TEXTURE_2D,It,Vt,bt,_t,0,Et,Yt,null),bt>>=1,_t>>=1}}else if(ae.length>0){if(G&&wt){const bt=ne(ae[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Vt,bt.width,bt.height)}for(let bt=0,_t=ae.length;bt<_t;bt++)Ot=ae[bt],G?At&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Et,Yt,Ot):i.texImage2D(o.TEXTURE_2D,bt,Vt,Et,Yt,Ot);b.generateMipmaps=!1}else if(G){if(wt){const bt=ne(Mt);i.texStorage2D(o.TEXTURE_2D,Rt,Vt,bt.width,bt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Yt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Et,Yt,Mt);y(b)&&_(mt),qt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ut(D,b,Q){if(b.image.length!==6)return;const mt=vt(D,b),St=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Q);const ct=r.get(St);if(St.version!==ct.__version||mt===!0){i.activeTexture(o.TEXTURE0+Q);const qt=Ue.getPrimaries(Ue.workingColorSpace),Ut=b.colorSpace===Wa?null:Ue.getPrimaries(b.colorSpace),Kt=b.colorSpace===Wa||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!kt&&!Mt?Et[_t]=w(b.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?b.image[_t].image:b.image[_t],Et[_t]=Wt(b,Et[_t]);const Yt=Et[0],Vt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),ae=U(b.internalFormat,Vt,Ot,b.colorSpace),G=b.isVideoTexture!==!0,wt=ct.__version===void 0||mt===!0,At=St.dataReady;let Rt=k(b,Yt);et(o.TEXTURE_CUBE_MAP,b);let bt;if(kt){G&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ae,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){bt=Et[_t].mipmaps;for(let It=0;It<bt.length;It++){const se=bt[It];b.format!==Ei?Vt!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,se.width,se.height,Vt,se.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ae,se.width,se.height,0,se.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,se.width,se.height,Vt,Ot,se.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,ae,se.width,se.height,0,Vt,Ot,se.data)}}}else{if(bt=b.mipmaps,G&&wt){bt.length>0&&Rt++;const _t=ne(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Vt,Ot,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Et[_t].width,Et[_t].height,0,Vt,Ot,Et[_t].data);for(let It=0;It<bt.length;It++){const Be=bt[It].image[_t].image;G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,Be.width,Be.height,Vt,Ot,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ae,Be.width,Be.height,0,Vt,Ot,Be.data)}}else{G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ot,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Vt,Ot,Et[_t]);for(let It=0;It<bt.length;It++){const se=bt[It];G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,Vt,Ot,se.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,ae,Vt,Ot,se.image[_t])}}}y(b)&&_(o.TEXTURE_CUBE_MAP),ct.__version=St.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ct(D,b,Q,mt,St,ct){const qt=u.convert(Q.format,Q.colorSpace),Ut=u.convert(Q.type),Kt=U(Q.internalFormat,qt,Ut,Q.colorSpace),kt=r.get(b),Mt=r.get(Q);if(Mt.__renderTarget=b,!kt.__hasExternalTextures){const Et=Math.max(1,b.width>>ct),Yt=Math.max(1,b.height>>ct);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ct,Kt,Et,Yt,b.depth,0,qt,Ut,null):i.texImage2D(St,ct,Kt,Et,Yt,0,qt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ft(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,St,Mt.__webglTexture,0,Te(b)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,St,Mt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(D,b,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const mt=b.depthTexture,St=mt&&mt.isDepthTexture?mt.type:null,ct=I(b.stencilBuffer,St),qt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Te(b);Ft(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ct,b.width,b.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ct,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ct,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,D)}else{const mt=b.textures;for(let St=0;St<mt.length;St++){const ct=mt[St],qt=u.convert(ct.format,ct.colorSpace),Ut=u.convert(ct.type),Kt=U(ct.internalFormat,qt,Ut,ct.colorSpace),kt=Te(b);Q&&Ft(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Kt,b.width,b.height):Ft(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Kt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),st(b.depthTexture,0);const St=mt.__webglTexture,ct=Te(b);if(b.depthTexture.format===No)Ft(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(b.depthTexture.format===Oo)Ft(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function $t(D){const b=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const mt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",St)};mt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=mt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const mt=D.texture.mipmaps;mt&&mt.length>0?Ht(b.__webglFramebuffer[0],D):Ht(b.__webglFramebuffer,D)}else if(Q){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=o.createRenderbuffer(),Pt(b.__webglDepthbuffer[mt],D,!1);else{const St=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ct)}}else{const mt=D.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Pt(b.__webglDepthbuffer,D,!1);else{const St=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ze(D,b,Q){const mt=r.get(D);b!==void 0&&Ct(mt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&$t(D)}function oe(D){const b=D.texture,Q=r.get(D),mt=r.get(b);D.addEventListener("dispose",F);const St=D.textures,ct=D.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=b.version,d.memory.textures++),ct){Q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)Q.__webglFramebuffer[Ut][Kt]=o.createFramebuffer()}else Q.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)Q.__webglFramebuffer[Ut]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,Kt=St.length;Ut<Kt;Ut++){const kt=r.get(St[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Ft(D)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<St.length;Ut++){const Kt=St[Ut];Q.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut]);const kt=u.convert(Kt.format,Kt.colorSpace),Mt=u.convert(Kt.type),Et=U(Kt.internalFormat,kt,Mt,Kt.colorSpace,D.isXRRenderTarget===!0),Yt=Te(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Et,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),et(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(Q.__webglFramebuffer[Ut][Kt],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else Ct(Q.__webglFramebuffer[Ut],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,Kt=St.length;Ut<Kt;Ut++){const kt=St[Ut],Mt=r.get(kt);let Et=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),et(Et,kt),Ct(Q.__webglFramebuffer,D,kt,o.COLOR_ATTACHMENT0+Ut,Et,0),y(kt)&&_(Et)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),et(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(Q.__webglFramebuffer[Kt],D,b,o.COLOR_ATTACHMENT0,Ut,Kt);else Ct(Q.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,Ut,0);y(b)&&_(Ut),i.unbindTexture()}D.depthBuffer&&$t(D)}function _e(D){const b=D.textures;for(let Q=0,mt=b.length;Q<mt;Q++){const St=b[Q];if(y(St)){const ct=P(D),qt=r.get(St).__webglTexture;i.bindTexture(ct,qt),_(ct),i.unbindTexture()}}}const B=[],ie=[];function re(D){if(D.samples>0){if(Ft(D)===!1){const b=D.textures,Q=D.width,mt=D.height;let St=o.COLOR_BUFFER_BIT;const ct=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(D),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Kt=D.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[kt]);const Mt=r.get(b[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,Q,mt,0,0,Q,mt,St,o.NEAREST),m===!0&&(B.length=0,ie.length=0,B.push(o.COLOR_ATTACHMENT0+kt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(B.push(ct),ie.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[kt]);const Mt=r.get(b[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Te(D){return Math.min(l.maxSamples,D.samples)}function Ft(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Le(D){const b=d.render.frame;v.get(D)!==b&&(v.set(D,b),D.update())}function Wt(D,b){const Q=D.colorSpace,mt=D.format,St=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Es&&Q!==Wa&&(Ue.getTransfer(Q)===Xe?(mt!==Ei||St!==da)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",Q)),b}function ne(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=j,this.setTexture2D=st,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=Ze,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ft}function oE(o,e){function i(r,l=Wa){let u;const d=Ue.getTransfer(l);if(r===da)return o.UNSIGNED_BYTE;if(r===gh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_h)return o.UNSIGNED_SHORT_5_5_5_1;if(r===xg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===pg)return o.BYTE;if(r===mg)return o.SHORT;if(r===Uo)return o.UNSIGNED_SHORT;if(r===xh)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===As)return o.HALF_FLOAT;if(r===_g)return o.ALPHA;if(r===vg)return o.RGB;if(r===Ei)return o.RGBA;if(r===No)return o.DEPTH_COMPONENT;if(r===Oo)return o.DEPTH_STENCIL;if(r===Sg)return o.RED;if(r===vh)return o.RED_INTEGER;if(r===Sh)return o.RG;if(r===yh)return o.RG_INTEGER;if(r===Mh)return o.RGBA_INTEGER;if(r===yc||r===Mc||r===bc||r===Ec)if(d===Xe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fd||r===Id||r===Bd||r===Hd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Fd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Id)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Vd||r===Xd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Gd||r===Vd)return d===Xe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Xd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh||r===ih)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$d)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nh)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ih)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ah||r===rh||r===sh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===ah)return d===Xe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oh||r===lh||r===ch||r===uh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===oh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const lE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Pg(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Li({vertexShader:lE,fragmentShader:cE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Za(new Uc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fE extends Rs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,S=null,M=null,T=null;const w=typeof XRWebGLBinding<"u",y=new uE,_={},P=i.getContextAttributes();let U=null,I=null;const k=[],N=[],F=new ke;let K=null;const C=new Mi;C.viewport=new sn;const R=new Mi;R.viewport=new sn;const H=[C,R],j=new Dy;let rt=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=k[it];return ut===void 0&&(ut=new xd,k[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=k[it];return ut===void 0&&(ut=new xd,k[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=k[it];return ut===void 0&&(ut=new xd,k[it]=ut),ut.getHandSpace()};function st(it){const ut=N.indexOf(it.inputSource);if(ut===-1)return;const Ct=k[ut];Ct!==void 0&&(Ct.update(it.inputSource,it.frame,p||d),Ct.dispatchEvent({type:it.type,data:it.inputSource}))}function O(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",V);for(let it=0;it<k.length;it++){const ut=N[it];ut!==null&&(N[it]=null,k[it].disconnect(ut))}rt=null,lt=null,y.reset();for(const it in _)delete _[it];e.setRenderTarget(U),M=null,S=null,g=null,l=null,I=null,Nt.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,r.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,r.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",O),l.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Pt=null,Ht=null;P.depth&&(Ht=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=P.stencil?Oo:No,Pt=P.stencil?Lo:Tr);const $t={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer($t),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),I=new Ar(S.textureWidth,S.textureHeight,{format:Ei,type:da,depthTexture:new Og(S.textureWidth,S.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Ar(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:da,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(it){for(let ut=0;ut<it.removed.length;ut++){const Ct=it.removed[ut],Pt=N.indexOf(Ct);Pt>=0&&(N[Pt]=null,k[Pt].disconnect(Ct))}for(let ut=0;ut<it.added.length;ut++){const Ct=it.added[ut];let Pt=N.indexOf(Ct);if(Pt===-1){for(let $t=0;$t<k.length;$t++)if($t>=N.length){N.push(Ct),Pt=$t;break}else if(N[$t]===null){N[$t]=Ct,Pt=$t;break}if(Pt===-1)break}const Ht=k[Pt];Ht&&Ht.connect(Ct)}}const W=new ft,pt=new ft;function dt(it,ut,Ct){W.setFromMatrixPosition(ut.matrixWorld),pt.setFromMatrixPosition(Ct.matrixWorld);const Pt=W.distanceTo(pt),Ht=ut.projectionMatrix.elements,$t=Ct.projectionMatrix.elements,Ze=Ht[14]/(Ht[10]-1),oe=Ht[14]/(Ht[10]+1),_e=(Ht[9]+1)/Ht[5],B=(Ht[9]-1)/Ht[5],ie=(Ht[8]-1)/Ht[0],re=($t[8]+1)/$t[0],Te=Ze*ie,Ft=Ze*re,Le=Pt/(-ie+re),Wt=Le*-ie;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Wt),it.translateZ(Le),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ht[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const ne=Ze+Le,D=oe+Le,b=Te-Wt,Q=Ft+(Pt-Wt),mt=_e*oe/D*ne,St=B*oe/D*ne;it.projectionMatrix.makePerspective(b,Q,mt,St,ne,D),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ut=it.near,Ct=it.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),j.near=R.near=C.near=ut,j.far=R.far=C.far=Ct,(rt!==j.near||lt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),rt=j.near,lt=j.far),j.layers.mask=it.layers.mask|6,C.layers.mask=j.layers.mask&3,R.layers.mask=j.layers.mask&5;const Pt=it.parent,Ht=j.cameras;L(j,Pt);for(let $t=0;$t<Ht.length;$t++)L(Ht[$t],Pt);Ht.length===2?dt(j,C,R):j.projectionMatrix.copy(C.projectionMatrix),et(it,j,Pt)};function et(it,ut,Ct){Ct===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(Ct.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=fh*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(it){return _[it]};let vt=null;function yt(it,ut){if(v=ut.getViewerPose(p||d),T=ut,v!==null){const Ct=v.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let Pt=!1;Ct.length!==j.cameras.length&&(j.cameras.length=0,Pt=!0);for(let oe=0;oe<Ct.length;oe++){const _e=Ct[oe];let B=null;if(M!==null)B=M.getViewport(_e);else{const re=g.getViewSubImage(S,_e);B=re.viewport,oe===0&&(e.setRenderTargetTextures(I,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(I))}let ie=H[oe];ie===void 0&&(ie=new Mi,ie.layers.enable(oe),ie.viewport=new sn,H[oe]=ie),ie.matrix.fromArray(_e.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(_e.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(B.x,B.y,B.width,B.height),oe===0&&(j.matrix.copy(ie.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Pt===!0&&j.cameras.push(ie)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const oe=g.getDepthInformation(Ct[0]);oe&&oe.isValid&&oe.texture&&y.init(oe,l.renderState)}if(Ht&&Ht.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let oe=0;oe<Ct.length;oe++){const _e=Ct[oe].camera;if(_e){let B=_[_e];B||(B=new Pg,_[_e]=B);const ie=g.getCameraImage(_e);B.sourceTexture=ie}}}}for(let Ct=0;Ct<k.length;Ct++){const Pt=N[Ct],Ht=k[Ct];Pt!==null&&Ht!==void 0&&Ht.update(Pt,ut,p||d)}vt&&vt(it,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),T=null}const Nt=new Fg;Nt.setAnimationLoop(yt),this.setAnimationLoop=function(it){vt=it},this.dispose=function(){}}}const vr=new ha,dE=new hn;function hE(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Dg(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,U,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),g(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,I)):_.isMeshMatcapMaterial?(u(y,_),T(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,P,U):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Xn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Xn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=e.get(_),U=P.envMap,I=P.envMapRotation;U&&(y.envMap.value=U,vr.copy(I),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),y.envMapRotation.value.setFromMatrix4(dE.makeRotationFromEuler(vr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,P,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const P=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function pE(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const I=U.program;r.uniformBlockBinding(P,I)}function p(P,U){let I=l[P.id];I===void 0&&(T(P),I=v(P),l[P.id]=I,P.addEventListener("dispose",y));const k=U.program;r.updateUBOMapping(P,k);const N=e.render.frame;u[P.id]!==N&&(S(P),u[P.id]=N)}function v(P){const U=g();P.__bindingPointIndex=U;const I=o.createBuffer(),k=P.__size,N=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,k,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,I),I}function g(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const U=l[P.id],I=P.uniforms,k=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,F=I.length;N<F;N++){const K=Array.isArray(I[N])?I[N]:[I[N]];for(let C=0,R=K.length;C<R;C++){const H=K[C];if(M(H,N,C,k)===!0){const j=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let st=0;st<rt.length;st++){const O=rt[st],V=w(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,j+lt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,lt),lt+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,U,I,k){const N=P.value,F=U+"_"+I;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const K=k[F];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return k[F]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function T(P){const U=P.uniforms;let I=0;const k=16;for(let F=0,K=U.length;F<K;F++){const C=Array.isArray(U[F])?U[F]:[U[F]];for(let R=0,H=C.length;R<H;R++){const j=C[R],rt=Array.isArray(j.value)?j.value:[j.value];for(let lt=0,st=rt.length;lt<st;lt++){const O=rt[lt],V=w(O),W=I%k,pt=W%V.boundary,dt=W+pt;I+=pt,dt!==0&&k-dt<V.storage&&(I+=k-dt),j.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=I,I+=V.storage}}}const N=I%k;return N>0&&(I+=k-N),P.__size=I,P.__cache={},this}function w(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",P),U}function y(P){const U=P.target;U.removeEventListener("dispose",y);const I=d.indexOf(U.__bindingPointIndex);d.splice(I,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}const mE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ra=null;function xE(){return ra===null&&(ra=new My(mE,32,32,Sh,As),ra.minFilter=pi,ra.magFilter=pi,ra.wrapS=la,ra.wrapT=la,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class gE{constructor(e={}){const{canvas:i=jS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Set([Mh,yh,vh]),w=new Set([da,Tr,Uo,Lo,gh,_h]),y=new Uint32Array(4),_=new Int32Array(4);let P=null,U=null;const I=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=hi;let K=0,C=0,R=null,H=-1,j=null;const rt=new sn,lt=new sn;let st=null;const O=new Ie(0);let V=0,W=i.width,pt=i.height,dt=1,L=null,et=null;const vt=new sn(0,0,W,pt),yt=new sn(0,0,W,pt);let Nt=!1;const it=new Ng;let ut=!1,Ct=!1;const Pt=new hn,Ht=new ft,$t=new sn,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function _e(){return R===null?dt:1}let B=r;function ie(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mh}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",_t,!1),i.addEventListener("webglcontextcreationerror",It,!1),B===null){const q="webgl2";if(B=ie(q,A),B===null)throw ie(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let re,Te,Ft,Le,Wt,ne,D,b,Q,mt,St,ct,qt,Ut,Kt,kt,Mt,Et,Yt,Vt,Ot,ae,G,wt;function At(){re=new T3(B),re.init(),ae=new oE(B,re),Te=new x3(B,re,e,ae),Ft=new rE(B,re),Te.reversedDepthBuffer&&S&&Ft.buffers.depth.setReversed(!0),Le=new C3(B),Wt=new q1,ne=new sE(B,re,Ft,Wt,Te,ae,Le),D=new _3(N),b=new E3(N),Q=new Ly(B),G=new p3(B,Q),mt=new A3(B,Q,Le,G),St=new D3(B,mt,Q,Le),Yt=new w3(B,Te,ne),kt=new g3(Wt),ct=new W1(N,D,b,re,Te,G,kt),qt=new hE(N,Wt),Ut=new j1,Kt=new tE(re),Et=new h3(N,D,b,Ft,St,M,m),Mt=new iE(N,St,Te),wt=new pE(B,Le,Te,Ft),Vt=new m3(B,re,Le),Ot=new R3(B,re,Le),Le.programs=ct.programs,N.capabilities=Te,N.extensions=re,N.properties=Wt,N.renderLists=Ut,N.shadowMap=Mt,N.state=Ft,N.info=Le}At();const Rt=new fE(N,B);this.xr=Rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(A){A!==void 0&&(dt=A,this.setSize(W,pt,!1))},this.getSize=function(A){return A.set(W,pt)},this.setSize=function(A,q,at=!0){if(Rt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,pt=q,i.width=Math.floor(A*dt),i.height=Math.floor(q*dt),at===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(W*dt,pt*dt).floor()},this.setDrawingBufferSize=function(A,q,at){W=A,pt=q,dt=at,i.width=Math.floor(A*at),i.height=Math.floor(q*at),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(rt)},this.getViewport=function(A){return A.copy(vt)},this.setViewport=function(A,q,at,tt){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,q,at,tt),Ft.viewport(rt.copy(vt).multiplyScalar(dt).round())},this.getScissor=function(A){return A.copy(yt)},this.setScissor=function(A,q,at,tt){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,q,at,tt),Ft.scissor(lt.copy(yt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(A){Ft.setScissorTest(Nt=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,at=!0){let tt=0;if(A){let Z=!1;if(R!==null){const Tt=R.texture.format;Z=T.has(Tt)}if(Z){const Tt=R.texture.type,Dt=w.has(Tt),zt=Et.getClearColor(),Bt=Et.getClearAlpha(),Jt=zt.r,ee=zt.g,jt=zt.b;Dt?(y[0]=Jt,y[1]=ee,y[2]=jt,y[3]=Bt,B.clearBufferuiv(B.COLOR,0,y)):(_[0]=Jt,_[1]=ee,_[2]=jt,_[3]=Bt,B.clearBufferiv(B.COLOR,0,_))}else tt|=B.COLOR_BUFFER_BIT}q&&(tt|=B.DEPTH_BUFFER_BIT),at&&(tt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",_t,!1),i.removeEventListener("webglcontextcreationerror",It,!1),Et.dispose(),Ut.dispose(),Kt.dispose(),Wt.dispose(),D.dispose(),b.dispose(),St.dispose(),G.dispose(),wt.dispose(),ct.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",ws),Rt.removeEventListener("sessionend",Ds),mi.stop()};function bt(A){A.preventDefault(),yx("WebGLRenderer: Context Lost."),F=!0}function _t(){yx("WebGLRenderer: Context Restored."),F=!1;const A=Le.autoReset,q=Mt.enabled,at=Mt.autoUpdate,tt=Mt.needsUpdate,Z=Mt.type;At(),Le.autoReset=A,Mt.enabled=q,Mt.autoUpdate=at,Mt.needsUpdate=tt,Mt.type=Z}function It(A){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const q=A.target;q.removeEventListener("dispose",se),Be(q)}function Be(A){Re(A),Wt.remove(A)}function Re(A){const q=Wt.get(A).programs;q!==void 0&&(q.forEach(function(at){ct.releaseProgram(at)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,at,tt,Z,Tt){q===null&&(q=Ze);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=Oc(A,q,at,tt,Z);Ft.setMaterial(tt,Dt);let Bt=at.index,Jt=1;if(tt.wireframe===!0){if(Bt=mt.getWireframeAttribute(at),Bt===void 0)return;Jt=2}const ee=at.drawRange,jt=at.attributes.position;let de=ee.start*Jt,Ae=(ee.start+ee.count)*Jt;Tt!==null&&(de=Math.max(de,Tt.start*Jt),Ae=Math.min(Ae,(Tt.start+Tt.count)*Jt)),Bt!==null?(de=Math.max(de,0),Ae=Math.min(Ae,Bt.count)):jt!=null&&(de=Math.max(de,0),Ae=Math.min(Ae,jt.count));const Ce=Ae-de;if(Ce<0||Ce===1/0)return;G.setup(Z,tt,zt,at,Bt);let ye,Pe=Vt;if(Bt!==null&&(ye=Q.get(Bt),Pe=Ot,Pe.setIndex(ye)),Z.isMesh)tt.wireframe===!0?(Ft.setLineWidth(tt.wireframeLinewidth*_e()),Pe.setMode(B.LINES)):Pe.setMode(B.TRIANGLES);else if(Z.isLine){let Qt=tt.linewidth;Qt===void 0&&(Qt=1),Ft.setLineWidth(Qt*_e()),Z.isLineSegments?Pe.setMode(B.LINES):Z.isLineLoop?Pe.setMode(B.LINE_LOOP):Pe.setMode(B.LINE_STRIP)}else Z.isPoints?Pe.setMode(B.POINTS):Z.isSprite&&Pe.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,We=Z._multiDrawCounts,Me=Z._multiDrawCount,vn=Bt?Q.get(Bt).bytesPerElement:1,ma=Wt.get(tt).currentProgram.getUniforms();for(let Ye=0;Ye<Me;Ye++)ma.setValue(B,"_gl_DrawID",Ye),Pe.render(Qt[Ye]/vn,We[Ye])}else if(Z.isInstancedMesh)Pe.renderInstances(de,Ce,Z.count);else if(at.isInstancedBufferGeometry){const Qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,We=Math.min(at.instanceCount,Qt);Pe.renderInstances(de,Ce,We)}else Pe.render(de,Ce)};function wn(A,q,at){A.transparent===!0&&A.side===oa&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,pn(A,q,at),A.side=ja,A.needsUpdate=!0,pn(A,q,at),A.side=oa):pn(A,q,at)}this.compile=function(A,q,at=null){at===null&&(at=A),U=Kt.get(at),U.init(q),k.push(U),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),A!==at&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),U.setupLights();const tt=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const zt=Tt[Dt];wn(zt,at,Z),tt.add(zt)}else wn(Tt,at,Z),tt.add(Tt)}),U=k.pop(),tt},this.compileAsync=function(A,q,at=null){const tt=this.compile(A,q,at);return new Promise(Z=>{function Tt(){if(tt.forEach(function(Dt){Wt.get(Dt).currentProgram.isReady()&&tt.delete(Dt)}),tt.size===0){Z(A);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Wn=null;function Go(A){Wn&&Wn(A)}function ws(){mi.stop()}function Ds(){mi.start()}const mi=new Fg;mi.setAnimationLoop(Go),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(A){Wn=A,Rt.setAnimationLoop(A),A===null?mi.stop():mi.start()},Rt.addEventListener("sessionstart",ws),Rt.addEventListener("sessionend",Ds),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,q,R),U=Kt.get(A,k.length),U.init(q),k.push(U),Pt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),it.setFromProjectionMatrix(Pt,Ui,q.reversedDepth),Ct=this.localClippingEnabled,ut=kt.init(this.clippingPlanes,Ct),P=Ut.get(A,I.length),P.init(),I.push(P),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&Ka(Tt,q,-1/0,N.sortObjects)}Ka(A,q,0,N.sortObjects),P.finish(),N.sortObjects===!0&&P.sort(L,et),oe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,oe&&Et.addToRenderList(P,A),this.info.render.frame++,ut===!0&&kt.beginShadows();const at=U.state.shadowsArray;Mt.render(at,A,q),ut===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=P.opaque,Z=P.transmissive;if(U.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(Z.length>0)for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Bt=Tt[Dt];Ls(tt,Z,A,Bt)}oe&&Et.render(A);for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Bt=Tt[Dt];Us(P,A,Bt,Bt.viewport)}}else Z.length>0&&Ls(tt,Z,A,q),oe&&Et.render(A),Us(P,A,q);R!==null&&C===0&&(ne.updateMultisampleRenderTarget(R),ne.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(N,A,q),G.resetDefaultState(),H=-1,j=null,k.pop(),k.length>0?(U=k[k.length-1],ut===!0&&kt.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?P=I[I.length-1]:P=null};function Ka(A,q,at,tt){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){tt&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const Dt=St.update(A),zt=A.material;zt.visible&&P.push(A,Dt,zt,at,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){const Dt=St.update(A),zt=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),$t.copy(Dt.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(zt)){const Bt=Dt.groups;for(let Jt=0,ee=Bt.length;Jt<ee;Jt++){const jt=Bt[Jt],de=zt[jt.materialIndex];de&&de.visible&&P.push(A,Dt,de,at,$t.z,jt)}}else zt.visible&&P.push(A,Dt,zt,at,$t.z,null)}}const Tt=A.children;for(let Dt=0,zt=Tt.length;Dt<zt;Dt++)Ka(Tt[Dt],q,at,tt)}function Us(A,q,at,tt){const{opaque:Z,transmissive:Tt,transparent:Dt}=A;U.setupLightsView(at),ut===!0&&kt.setGlobalState(N.clippingPlanes,at),tt&&Ft.viewport(rt.copy(tt)),Z.length>0&&qn(Z,q,at),Tt.length>0&&qn(Tt,q,at),Dt.length>0&&qn(Dt,q,at),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Ls(A,q,at,tt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[tt.id]===void 0&&(U.state.transmissionRenderTarget[tt.id]=new Ar(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?As:da,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Tt=U.state.transmissionRenderTarget[tt.id],Dt=tt.viewport||rt;Tt.setSize(Dt.z*N.transmissionResolutionScale,Dt.w*N.transmissionResolutionScale);const zt=N.getRenderTarget(),Bt=N.getActiveCubeFace(),Jt=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(O),V=N.getClearAlpha(),V<1&&N.setClearColor(16777215,.5),N.clear(),oe&&Et.render(at);const ee=N.toneMapping;N.toneMapping=Ya;const jt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),U.setupLightsView(tt),ut===!0&&kt.setGlobalState(N.clippingPlanes,tt),qn(A,at,tt),ne.updateMultisampleRenderTarget(Tt),ne.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ae=0,Ce=q.length;Ae<Ce;Ae++){const ye=q[Ae],{object:Pe,geometry:Qt,material:We,group:Me}=ye;if(We.side===oa&&Pe.layers.test(tt.layers)){const vn=We.side;We.side=Xn,We.needsUpdate=!0,on(Pe,at,tt,Qt,We,Me),We.side=vn,We.needsUpdate=!0,de=!0}}de===!0&&(ne.updateMultisampleRenderTarget(Tt),ne.updateRenderTargetMipmap(Tt))}N.setRenderTarget(zt,Bt,Jt),N.setClearColor(O,V),jt!==void 0&&(tt.viewport=jt),N.toneMapping=ee}function qn(A,q,at){const tt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Tt=A.length;Z<Tt;Z++){const Dt=A[Z],{object:zt,geometry:Bt,group:Jt}=Dt;let ee=Dt.material;ee.allowOverride===!0&&tt!==null&&(ee=tt),zt.layers.test(at.layers)&&on(zt,q,at,Bt,ee,Jt)}}function on(A,q,at,tt,Z,Tt){A.onBeforeRender(N,q,at,tt,Z,Tt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(N,q,at,tt,A,Tt),Z.transparent===!0&&Z.side===oa&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,N.renderBufferDirect(at,q,tt,Z,A,Tt),Z.side=ja,Z.needsUpdate=!0,N.renderBufferDirect(at,q,tt,Z,A,Tt),Z.side=oa):N.renderBufferDirect(at,q,tt,Z,A,Tt),A.onAfterRender(N,q,at,tt,Z,Tt)}function pn(A,q,at){q.isScene!==!0&&(q=Ze);const tt=Wt.get(A),Z=U.state.lights,Tt=U.state.shadowsArray,Dt=Z.state.version,zt=ct.getParameters(A,Z.state,Tt,q,at),Bt=ct.getProgramCacheKey(zt);let Jt=tt.programs;tt.environment=A.isMeshStandardMaterial?q.environment:null,tt.fog=q.fog,tt.envMap=(A.isMeshStandardMaterial?b:D).get(A.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",se),Jt=new Map,tt.programs=Jt);let ee=Jt.get(Bt);if(ee!==void 0){if(tt.currentProgram===ee&&tt.lightsStateVersion===Dt)return Rr(A,zt),ee}else zt.uniforms=ct.getUniforms(A),A.onBeforeCompile(zt,N),ee=ct.acquireProgram(zt,Bt),Jt.set(Bt,ee),tt.uniforms=zt.uniforms;const jt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=kt.uniform),Rr(A,zt),tt.needsLights=Vo(A),tt.lightsStateVersion=Dt,tt.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=ee,tt.uniformsList=null,ee}function Oi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Tc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Rr(A,q){const at=Wt.get(A);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function Oc(A,q,at,tt,Z){q.isScene!==!0&&(q=Ze),ne.resetTextureUnits();const Tt=q.fog,Dt=tt.isMeshStandardMaterial?q.environment:null,zt=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Es,Bt=(tt.isMeshStandardMaterial?b:D).get(tt.envMap||Dt),Jt=tt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),jt=!!at.morphAttributes.position,de=!!at.morphAttributes.normal,Ae=!!at.morphAttributes.color;let Ce=Ya;tt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ce=N.toneMapping);const ye=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Pe=ye!==void 0?ye.length:0,Qt=Wt.get(tt),We=U.state.lights;if(ut===!0&&(Ct===!0||A!==j)){const yn=A===j&&tt.id===H;kt.setState(tt,A,yn)}let Me=!1;tt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==We.state.version||Qt.outputColorSpace!==zt||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Bt||tt.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==kt.numPlanes||Qt.numIntersection!==kt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==ee||Qt.morphTargets!==jt||Qt.morphNormals!==de||Qt.morphColors!==Ae||Qt.toneMapping!==Ce||Qt.morphTargetsCount!==Pe)&&(Me=!0):(Me=!0,Qt.__version=tt.version);let vn=Qt.currentProgram;Me===!0&&(vn=pn(tt,q,Z));let ma=!1,Ye=!1,Pi=!1;const je=vn.getUniforms(),Sn=Qt.uniforms;if(Ft.useProgram(vn.program)&&(ma=!0,Ye=!0,Pi=!0),tt.id!==H&&(H=tt.id,Ye=!0),ma||j!==A){Ft.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(B,"projectionMatrix",A.projectionMatrix),je.setValue(B,"viewMatrix",A.matrixWorldInverse);const En=je.map.cameraPosition;En!==void 0&&En.setValue(B,Ht.setFromMatrixPosition(A.matrixWorld)),Te.logarithmicDepthBuffer&&je.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&je.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,Ye=!0,Pi=!0)}if(Z.isSkinnedMesh){je.setOptional(B,Z,"bindMatrix"),je.setOptional(B,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),je.setValue(B,"boneTexture",yn.boneTexture,ne))}Z.isBatchedMesh&&(je.setOptional(B,Z,"batchingTexture"),je.setValue(B,"batchingTexture",Z._matricesTexture,ne),je.setOptional(B,Z,"batchingIdTexture"),je.setValue(B,"batchingIdTexture",Z._indirectTexture,ne),je.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&je.setValue(B,"batchingColorTexture",Z._colorsTexture,ne));const mn=at.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Yt.update(Z,at,vn),(Ye||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,je.setValue(B,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Sn.envMap.value=Bt,Sn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=xE()),Ye&&(je.setValue(B,"toneMappingExposure",N.toneMappingExposure),Qt.needsLights&&Pc(Sn,Pi),Tt&&tt.fog===!0&&qt.refreshFogUniforms(Sn,Tt),qt.refreshMaterialUniforms(Sn,tt,dt,pt,U.state.transmissionRenderTarget[A.id]),Tc.upload(B,Oi(Qt),Sn,ne)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Tc.upload(B,Oi(Qt),Sn,ne),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&je.setValue(B,"center",Z.center),je.setValue(B,"modelViewMatrix",Z.modelViewMatrix),je.setValue(B,"normalMatrix",Z.normalMatrix),je.setValue(B,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const yn=tt.uniformsGroups;for(let En=0,Ti=yn.length;En<Ti;En++){const zi=yn[En];wt.update(zi,vn),wt.bind(zi,vn)}}return vn}function Pc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Vo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,at){const tt=Wt.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Wt.get(A.texture).__webglTexture=q,Wt.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:at,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const at=Wt.get(A);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const Qa=B.createFramebuffer();this.setRenderTarget=function(A,q=0,at=0){R=A,K=q,C=at;let tt=!0,Z=null,Tt=!1,Dt=!1;if(A){const Bt=Wt.get(A);if(Bt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(B.FRAMEBUFFER,null),tt=!1;else if(Bt.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(Bt.__hasExternalTextures)ne.rebindTextures(A,Wt.get(A.texture).__webglTexture,Wt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const jt=A.depthTexture;if(Bt.__boundDepthTexture!==jt){if(jt!==null&&Wt.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Dt=!0);const ee=Wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?Z=ee[q][at]:Z=ee[q],Tt=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?Z=Wt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[at]:Z=ee,rt.copy(A.viewport),lt.copy(A.scissor),st=A.scissorTest}else rt.copy(vt).multiplyScalar(dt).floor(),lt.copy(yt).multiplyScalar(dt).floor(),st=Nt;if(at!==0&&(Z=Qa),Ft.bindFramebuffer(B.FRAMEBUFFER,Z)&&tt&&Ft.drawBuffers(A,Z),Ft.viewport(rt),Ft.scissor(lt),Ft.setScissorTest(st),Tt){const Bt=Wt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Bt.__webglTexture,at)}else if(Dt){const Bt=q;for(let Jt=0;Jt<A.textures.length;Jt++){const ee=Wt.get(A.textures[Jt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Jt,ee.__webglTexture,at,Bt)}}else if(A!==null&&at!==0){const Bt=Wt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Bt.__webglTexture,at)}H=-1},this.readRenderTargetPixels=function(A,q,at,tt,Z,Tt,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Ft.bindFramebuffer(B.FRAMEBUFFER,Bt);try{const Jt=A.textures[zt],ee=Jt.format,jt=Jt.type;if(!Te.textureFormatReadable(ee)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(jt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-tt&&at>=0&&at<=A.height-Z&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(q,at,tt,Z,ae.convert(ee),ae.convert(jt),Tt))}finally{const Jt=R!==null?Wt.get(R).__webglFramebuffer:null;Ft.bindFramebuffer(B.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(A,q,at,tt,Z,Tt,Dt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(q>=0&&q<=A.width-tt&&at>=0&&at<=A.height-Z){Ft.bindFramebuffer(B.FRAMEBUFFER,Bt);const Jt=A.textures[zt],ee=Jt.format,jt=Jt.type;if(!Te.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,de),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(q,at,tt,Z,ae.convert(ee),ae.convert(jt),0);const Ae=R!==null?Wt.get(R).__webglFramebuffer:null;Ft.bindFramebuffer(B.FRAMEBUFFER,Ae);const Ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ZS(B,Ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,de),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(de),B.deleteSync(Ce),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,at=0){const tt=Math.pow(2,-at),Z=Math.floor(A.image.width*tt),Tt=Math.floor(A.image.height*tt),Dt=q!==null?q.x:0,zt=q!==null?q.y:0;ne.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,Dt,zt,Z,Tt),Ft.unbindTexture()};const Ns=B.createFramebuffer(),pa=B.createFramebuffer();this.copyTextureToTexture=function(A,q,at=null,tt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Dt,zt,Bt,Jt,ee,jt,de,Ae,Ce;const ye=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(at!==null)Dt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,ee=at.min.y,jt=at.isBox3?at.min.z:0;else{const mn=Math.pow(2,-Z);Dt=Math.floor(ye.width*mn),zt=Math.floor(ye.height*mn),A.isDataArrayTexture?Bt=ye.depth:A.isData3DTexture?Bt=Math.floor(ye.depth*mn):Bt=1,Jt=0,ee=0,jt=0}tt!==null?(de=tt.x,Ae=tt.y,Ce=tt.z):(de=0,Ae=0,Ce=0);const Pe=ae.convert(q.format),Qt=ae.convert(q.type);let We;q.isData3DTexture?(ne.setTexture3D(q,0),We=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ne.setTexture2DArray(q,0),We=B.TEXTURE_2D_ARRAY):(ne.setTexture2D(q,0),We=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=B.getParameter(B.UNPACK_ROW_LENGTH),vn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ma=B.getParameter(B.UNPACK_SKIP_PIXELS),Ye=B.getParameter(B.UNPACK_SKIP_ROWS),Pi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,jt);const je=A.isDataArrayTexture||A.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const mn=Wt.get(A),yn=Wt.get(q),En=Wt.get(mn.__renderTarget),Ti=Wt.get(yn.__renderTarget);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,En.__webglFramebuffer),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let zi=0;zi<Bt;zi++)je&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(A).__webglTexture,Z,jt+zi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(q).__webglTexture,Tt,Ce+zi)),B.blitFramebuffer(Jt,ee,Dt,zt,de,Ae,Dt,zt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Wt.has(A)){const mn=Wt.get(A),yn=Wt.get(q);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,Ns),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,pa);for(let En=0;En<Bt;En++)je?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,mn.__webglTexture,Z,jt+En):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mn.__webglTexture,Z),Sn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,Tt,Ce+En):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,Tt),Z!==0?B.blitFramebuffer(Jt,ee,Dt,zt,de,Ae,Dt,zt,B.COLOR_BUFFER_BIT,B.NEAREST):Sn?B.copyTexSubImage3D(We,Tt,de,Ae,Ce+En,Jt,ee,Dt,zt):B.copyTexSubImage2D(We,Tt,de,Ae,Jt,ee,Dt,zt);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Sn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(We,Tt,de,Ae,Ce,Dt,zt,Bt,Pe,Qt,ye.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(We,Tt,de,Ae,Ce,Dt,zt,Bt,Pe,ye.data):B.texSubImage3D(We,Tt,de,Ae,Ce,Dt,zt,Bt,Pe,Qt,ye):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,de,Ae,Dt,zt,Pe,Qt,ye.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,de,Ae,ye.width,ye.height,Pe,ye.data):B.texSubImage2D(B.TEXTURE_2D,Tt,de,Ae,Dt,zt,Pe,Qt,ye);B.pixelStorei(B.UNPACK_ROW_LENGTH,Me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ma),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pi),Tt===0&&q.generateMipmaps&&B.generateMipmap(We),Ft.unbindTexture()},this.initRenderTarget=function(A){Wt.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),Ft.unbindTexture()},this.resetState=function(){K=0,C=0,R=null,Ft.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const _E=`
  uniform float uTime;
  attribute float aType; // 0:Dead, 1:Head, 2:Stem, 3:Flower
  attribute vec3 color;
  varying vec3 vColor;
  
  void main() {
    vColor = color;
    vec3 pos = position;

    // Sway logic for Stems (2) and Flowers (3)
    if (aType > 1.5) {
      float swayIntensity = (aType > 2.5) ? 3.0 : 1.0; // Flowers sway more
      float speed = 2.0;
      // Simple sine wave displacement based on Y position and Time
      pos.x += sin(uTime * speed + pos.y * 0.05) * swayIntensity;
      pos.y += cos(uTime * speed * 0.7 + pos.x * 0.05) * (swayIntensity * 0.5);
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Size attenuation manually or fixed
    // Flowers bigger than stems
    gl_PointSize = (aType > 2.5 ? 12.0 : (aType > 0.5 ? 3.0 : 0.0));
    
    gl_Position = projectionMatrix * mvPosition;
  }
`,vE=`
  varying vec3 vColor;
  
  void main() {
    // Circular particles
    vec2 coord = gl_PointCoord - vec2(0.5);
    if(length(coord) > 0.5) discard;
    
    gl_FragColor = vec4(vColor, 0.9);
  }
`,SE=({analysis:o,capturedImage:e,active:i,growthTrigger:r,width:l,height:u})=>{const d=Oe.useRef(null),h=Oe.useRef(null),m=Oe.useRef(null),p=Oe.useRef(null),v=Oe.useRef(null),g=Oe.useRef(0),S=Oe.useRef(null),M=Oe.useRef(0),T=Oe.useRef(null),w=Oe.useRef(0),y=Oe.useRef(null),_=Oe.useRef(null),P=5e4,U=Oe.useRef(null),I=Oe.useRef(Date.now());Oe.useEffect(()=>{if(!e||!o||!i)return;(async()=>{const C=new Image;C.src=e,await new Promise(Ht=>{C.onload=Ht});const R=document.createElement("canvas");R.width=l,R.height=u;const H=R.getContext("2d");if(!H)return;const j=Math.max(l/C.width,u/C.height),rt=(l-C.width*j)/2,lt=(u-C.height*j)/2;H.drawImage(C,rt,lt,C.width*j,C.height*j);const st=o.box_2d,O=st[0]/1e3*C.height,V=st[1]/1e3*C.width,W=st[2]/1e3*C.height,pt=st[3]/1e3*C.width,dt=rt+V*j,L=lt+O*j,et=rt+pt*j,vt=lt+W*j,yt=Math.max(0,Math.floor(dt))|0,Nt=Math.max(0,Math.floor(L))|0,it=Math.min(l,Math.ceil(et))|0,ut=Math.min(u,Math.ceil(vt))|0,Ct=it-yt|0,Pt=ut-Nt|0;if(!(Ct<=0||Pt<=0))try{const Ht=H.getImageData(yt,Nt,Ct,Pt),$t=Ht.data,Ze=Ht.width,oe=[],_e=[],B=30;for(let ie=1;ie<Pt-1;ie+=2)for(let re=1;re<Ct-1;re+=2){const Te=(ie*Ze+re)*4,Ft=($t[Te]+$t[Te+1]+$t[Te+2])/3,Le=(ie*Ze+(re+1))*4,Wt=($t[Le]+$t[Le+1]+$t[Le+2])/3,ne=((ie+1)*Ze+re)*4,D=($t[ne]+$t[ne+1]+$t[ne+2])/3;if(Math.abs(Ft-Wt)+Math.abs(Ft-D)>B){const Q=yt+re,mt=Nt+ie,St=Q-l/2,ct=u/2-mt;oe.push(St,ct)}else if(Math.random()<.02){const Q=yt+re,mt=Nt+ie,St=Q-l/2,ct=u/2-mt;_e.push(St,ct)}}S.current=new Float32Array(oe),M.current=oe.length/2,T.current=new Float32Array(_e),w.current=_e.length/2}catch(Ht){console.error("Edge detection failed",Ht)}})()},[e,o,i,l,u]),Oe.useEffect(()=>{if(!d.current)return;const K=new yy,C=new zg(l/-2,l/2,u/2,u/-2,1,1e3);C.position.z=100;const R=new gE({alpha:!0,antialias:!1});R.setSize(l,u),R.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.current.appendChild(R.domElement);const H=new Ni,j=new Float32Array(P*3),rt=new Float32Array(P*3),lt=new Float32Array(P).fill(0);H.setAttribute("position",new ii(j,3)),H.setAttribute("color",new ii(rt,3)),H.setAttribute("aType",new ii(lt,1));const st=new Li({uniforms:{uTime:{value:0}},vertexShader:_E,fragmentShader:vE,transparent:!0,blending:bd,depthTest:!1}),O=new Ry(H,st);return K.add(O),U.current={positions:j,colors:rt,types:lt,velocities:new Float32Array(P*3),life:new Float32Array(P),activeHeads:[]},m.current=K,p.current=C,v.current=R,y.current=H,_.current=st,F(),()=>{cancelAnimationFrame(g.current),d.current&&R.domElement&&d.current.removeChild(R.domElement),H.dispose(),st.dispose(),R.dispose()}},[l,u]),Oe.useEffect(()=>{r>0&&i&&k(40)},[r,i]);const k=K=>{if(!U.current)return;const{positions:C,colors:R,types:H,velocities:j,life:rt,activeHeads:lt}=U.current,st=S.current,O=M.current,V=T.current,W=w.current;if(!st&&!V)return;let pt=0;for(let dt=0;dt<P&&!(pt>=K);dt++)if(H[dt]===0){let L=0,et=0;if(W>0&&(Math.random()>.5||O===0)&&V){const yt=Math.floor(Math.random()*W);L=V[yt*2],et=V[yt*2+1]}else if(st&&O>0){const yt=Math.floor(Math.random()*O);L=st[yt*2],et=st[yt*2+1]}else continue;H[dt]=1,rt[dt]=1,C[dt*3]=L,C[dt*3+1]=et,C[dt*3+2]=0,j[dt*3]=(Math.random()-.5)*2,j[dt*3+1]=(Math.random()-.5)*2,R[dt*3]=0,R[dt*3+1]=1,R[dt*3+2]=.5,lt.push(dt),pt++}y.current&&(y.current.attributes.aType.needsUpdate=!0)},N=(K,C,R)=>{if(!U.current)return;const{positions:H,colors:j,types:rt,life:lt}=U.current,st=Math.floor(Math.random()*P);for(let O=0;O<50;O++){const V=(st+O)%P;if(rt[V]===0){rt[V]=R,H[V*3]=K,H[V*3+1]=C,H[V*3+2]=0,lt[V]=-1,R===2?(j[V*3]=0,j[V*3+1]=.5+Math.random()*.5,j[V*3+2]=.2):R===3&&(j[V*3]=1,j[V*3+1]=0+Math.random()*.2,j[V*3+2]=.8+Math.random()*.2);return}}},F=()=>{var O;if(!m.current||!U.current||!y.current||!_.current)return;const{positions:K,types:C,velocities:R,life:H,activeHeads:j}=U.current,rt=(Date.now()-I.current)/1e3;_.current.uniforms.uTime.value=rt;const lt=(O=h.current)==null?void 0:O.getContext("2d");lt&&(lt.clearRect(0,0,l,u),lt.strokeStyle="rgba(255, 255, 255, 0.4)",lt.fillStyle="#00FF00",lt.lineWidth=1,lt.font="10px monospace");const st=[];for(const V of j){if(C[V]!==1)continue;const W=K[V*3],pt=K[V*3+1];if(lt){const dt=W+l/2,L=u/2-pt;if(lt.strokeRect(dt-10,L-10,20,20),Math.random()>.8&&lt.fillText(Math.random().toFixed(3),dt+12,L-2),st.length>0&&Math.random()>.5){const et=st[st.length-1],vt=K[et*3]+l/2,yt=u/2-K[et*3+1];Math.abs(vt-dt)<100&&Math.abs(yt-L)<100&&(lt.beginPath(),lt.moveTo(dt,L),lt.lineTo(vt,yt),lt.stroke())}}K[V*3]+=R[V*3],K[V*3+1]+=R[V*3+1],Math.random()<.6&&N(W,pt,2),R[V*3]+=(Math.random()-.5)*.8,R[V*3+1]+=(Math.random()-.5)*.8,R[V*3]*=.92,R[V*3+1]*=.92,Math.random()<.03&&N(W+(Math.random()-.5)*15,pt+(Math.random()-.5)*15,3),H[V]-=.015,H[V]<=0?(C[V]=0,N(W,pt,3),N(W+5,pt+5,3)):st.push(V)}U.current.activeHeads=st,y.current.attributes.position.needsUpdate=!0,y.current.attributes.color.needsUpdate=!0,y.current.attributes.aType.needsUpdate=!0,v.current&&m.current&&p.current&&v.current.render(m.current,p.current),g.current=requestAnimationFrame(F)};return ue.jsxs(ue.Fragment,{children:[ue.jsx("div",{ref:d,className:"absolute inset-0 pointer-events-none z-10"}),ue.jsx("canvas",{ref:h,width:l,height:u,className:"absolute inset-0 pointer-events-none z-15 mix-blend-screen opacity-70"})]})},yE=()=>{const o=typeof window<"u";let e="";if(o){const u=new URLSearchParams(window.location.search);e=u.get("proxy")||u.get("api")||"",e&&window.localStorage.setItem("PROXY_URL",e)}const i=o&&window.localStorage.getItem("PROXY_URL")||"",r=o&&window.PROXY_URL||"";return e||i||r||"https://royal-base-184.wufu104.workers.dev"},ME=async o=>{try{const e=o.replace(/^data:image\/(png|jpeg|jpg);base64,/,""),i=yE(),r=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:e})});if(!r.ok)throw new Error(`Proxy error: ${r.status} ${r.statusText}`);return await r.json()}catch(e){return console.error("Gemini Analysis Error (using fallback bounding box):",e),{detected:!0,box_2d:[200,200,800,800],confidence:.5,label:"unknown_structure"}}},bE=()=>{const o=Oe.useRef(null),e=Oe.useRef(null),[i,r]=Oe.useState(an.IDLE),[l,u]=Oe.useState(null),[d,h]=Oe.useState(""),[m,p]=Oe.useState(null),[v,g]=Oe.useState({width:window.innerWidth,height:window.innerHeight}),[S,M]=Oe.useState(0);Oe.useEffect(()=>{const y=()=>g({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),Oe.useEffect(()=>{(async()=>{try{const _=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}},audio:!1});o.current&&(o.current.srcObject=_)}catch(_){console.error("Camera access denied:",_),h("CAMERA ERROR"),r(an.ERROR)}})()},[]);const T=Oe.useCallback(async()=>{if(i===an.IDLE){if(!o.current||!e.current)return;r(an.CAPTURING),h("");const y=o.current,_=e.current;_.width=y.videoWidth,_.height=y.videoHeight;const P=_.getContext("2d");if(!P)return;P.drawImage(y,0,0,_.width,_.height);const U=_.toDataURL("image/jpeg",.8);p(U),r(an.ANALYZING),h("VENI VIDI VICI QUID SUMUS");try{const I=await ME(U);u(I),I.detected?(h(""),r(an.GROWING),M(k=>k+1)):(h("NO CONCRETE DETECTED."),r(an.GROWING),M(k=>k+1))}catch{h("OFFLINE MODE - USING LOCAL GROWTH"),r(an.GROWING),M(k=>k+1)}}else i===an.GROWING&&M(y=>y+1)},[i]),w=()=>{r(an.IDLE),p(null),u(null),M(0),h("")};return ue.jsxs("div",{className:"relative w-full h-screen bg-void-black overflow-hidden font-future select-none",children:[ue.jsx("canvas",{ref:e,className:"hidden"}),ue.jsx("video",{ref:o,autoPlay:!0,playsInline:!0,muted:!0,className:`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${m?"opacity-0":"opacity-100"}`,style:{filter:"contrast(1.1) brightness(1.1) saturate(0.8) sepia(0.2)"}}),m&&ue.jsx("img",{src:m,alt:"Frozen Reality",className:"absolute top-0 left-0 w-full h-full object-cover",style:{filter:"contrast(1.2) brightness(0.9) saturate(0.5) sepia(0.3) blur(0.5px)"}}),ue.jsx(SE,{active:i===an.GROWING,analysis:l,capturedImage:m,growthTrigger:S,width:v.width,height:v.height}),ue.jsx(rS,{gameState:i,onInteraction:T,onReset:w,analysisText:d,analysisResult:l}),ue.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,10,0,0.6)_100%)] mix-blend-multiply"}),ue.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150"})]})},Vg=document.getElementById("root");if(!Vg)throw new Error("Could not find root element to mount to");const EE=aS.createRoot(Vg);EE.render(ue.jsx(Kv.StrictMode,{children:ue.jsx(bE,{})}));
