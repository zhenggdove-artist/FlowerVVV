(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function dg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gf={exports:{}},yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function Zv(){if(ax)return yo;ax=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=e,yo.jsx=i,yo.jsxs=i,yo}var rx;function Kv(){return rx||(rx=1,Gf.exports=Zv()),Gf.exports}var ce=Kv(),Vf={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function Qv(){if(sx)return de;sx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function _(D,q,mt){this.props=D,this.context=q,this.refs=M,this.updater=mt||A}_.prototype.isReactComponent={},_.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},_.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=_.prototype;function N(D,q,mt){this.props=D,this.context=q,this.refs=M,this.updater=mt||A}var H=N.prototype=new P;H.constructor=N,C(H,_.prototype),H.isPureReactComponent=!0;var X=Array.isArray;function U(){}var z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function w(D,q,mt){var ut=mt.ref;return{$$typeof:o,type:D,key:q,ref:ut!==void 0?ut:null,props:mt}}function T(D,q){return w(D.type,q,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function Y(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(mt){return q[mt]})}var rt=/\/+/g;function lt(D,q){return typeof D=="object"&&D!==null&&D.key!=null?Y(""+D.key):q.toString(36)}function at(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(U,U):(D.status="pending",D.then(function(q){D.status==="pending"&&(D.status="fulfilled",D.value=q)},function(q){D.status==="pending"&&(D.status="rejected",D.reason=q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function O(D,q,mt,ut,Mt){var J=typeof D;(J==="undefined"||J==="boolean")&&(D=null);var ft=!1;if(D===null)ft=!0;else switch(J){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(D.$$typeof){case o:case e:ft=!0;break;case v:return ft=D._init,O(ft(D._payload),q,mt,ut,Mt)}}if(ft)return Mt=Mt(D),ft=ut===""?"."+lt(D,0):ut,X(Mt)?(mt="",ft!=null&&(mt=ft.replace(rt,"$&/")+"/"),O(Mt,q,mt,"",function(Nt){return Nt})):Mt!=null&&(I(Mt)&&(Mt=T(Mt,mt+(Mt.key==null||D&&D.key===Mt.key?"":(""+Mt.key).replace(rt,"$&/")+"/")+ft)),q.push(Mt)),1;ft=0;var At=ut===""?".":ut+":";if(X(D))for(var Pt=0;Pt<D.length;Pt++)ut=D[Pt],J=At+lt(ut,Pt),ft+=O(ut,q,mt,J,Mt);else if(Pt=y(D),typeof Pt=="function")for(D=Pt.call(D),Pt=0;!(ut=D.next()).done;)ut=ut.value,J=At+lt(ut,Pt++),ft+=O(ut,q,mt,J,Mt);else if(J==="object"){if(typeof D.then=="function")return O(at(D),q,mt,ut,Mt);throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ft}function G(D,q,mt){if(D==null)return D;var ut=[],Mt=0;return O(D,ut,"","",function(J){return q.call(mt,J,Mt++)}),ut}function W(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(mt){(D._status===0||D._status===-1)&&(D._status=1,D._result=mt)},function(mt){(D._status===0||D._status===-1)&&(D._status=2,D._result=mt)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var ct=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},st={map:G,forEach:function(D,q,mt){G(D,function(){q.apply(this,arguments)},mt)},count:function(D){var q=0;return G(D,function(){q++}),q},toArray:function(D){return G(D,function(q){return q})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return de.Activity=g,de.Children=st,de.Component=_,de.Fragment=i,de.Profiler=l,de.PureComponent=N,de.StrictMode=r,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,de.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},de.cache=function(D){return function(){return D.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(D,q,mt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ut=C({},D.props),Mt=D.key;if(q!=null)for(J in q.key!==void 0&&(Mt=""+q.key),q)!Q.call(q,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&q.ref===void 0||(ut[J]=q[J]);var J=arguments.length-2;if(J===1)ut.children=mt;else if(1<J){for(var ft=Array(J),At=0;At<J;At++)ft[At]=arguments[At+2];ut.children=ft}return w(D.type,Mt,ut)},de.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},de.createElement=function(D,q,mt){var ut,Mt={},J=null;if(q!=null)for(ut in q.key!==void 0&&(J=""+q.key),q)Q.call(q,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(Mt[ut]=q[ut]);var ft=arguments.length-2;if(ft===1)Mt.children=mt;else if(1<ft){for(var At=Array(ft),Pt=0;Pt<ft;Pt++)At[Pt]=arguments[Pt+2];Mt.children=At}if(D&&D.defaultProps)for(ut in ft=D.defaultProps,ft)Mt[ut]===void 0&&(Mt[ut]=ft[ut]);return w(D,J,Mt)},de.createRef=function(){return{current:null}},de.forwardRef=function(D){return{$$typeof:h,render:D}},de.isValidElement=I,de.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:W}},de.memo=function(D,q){return{$$typeof:p,type:D,compare:q===void 0?null:q}},de.startTransition=function(D){var q=z.T,mt={};z.T=mt;try{var ut=D(),Mt=z.S;Mt!==null&&Mt(mt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(U,ct)}catch(J){ct(J)}finally{q!==null&&mt.types!==null&&(q.types=mt.types),z.T=q}},de.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},de.use=function(D){return z.H.use(D)},de.useActionState=function(D,q,mt){return z.H.useActionState(D,q,mt)},de.useCallback=function(D,q){return z.H.useCallback(D,q)},de.useContext=function(D){return z.H.useContext(D)},de.useDebugValue=function(){},de.useDeferredValue=function(D,q){return z.H.useDeferredValue(D,q)},de.useEffect=function(D,q){return z.H.useEffect(D,q)},de.useEffectEvent=function(D){return z.H.useEffectEvent(D)},de.useId=function(){return z.H.useId()},de.useImperativeHandle=function(D,q,mt){return z.H.useImperativeHandle(D,q,mt)},de.useInsertionEffect=function(D,q){return z.H.useInsertionEffect(D,q)},de.useLayoutEffect=function(D,q){return z.H.useLayoutEffect(D,q)},de.useMemo=function(D,q){return z.H.useMemo(D,q)},de.useOptimistic=function(D,q){return z.H.useOptimistic(D,q)},de.useReducer=function(D,q,mt){return z.H.useReducer(D,q,mt)},de.useRef=function(D){return z.H.useRef(D)},de.useState=function(D){return z.H.useState(D)},de.useSyncExternalStore=function(D,q,mt){return z.H.useSyncExternalStore(D,q,mt)},de.useTransition=function(){return z.H.useTransition()},de.version="19.2.1",de}var ox;function ph(){return ox||(ox=1,Vf.exports=Qv()),Vf.exports}var Kt=ph();const Jv=dg(Kt);var kf={exports:{}},bo={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function $v(){return lx||(lx=1,(function(o){function e(O,G){var W=O.length;O.push(G);t:for(;0<W;){var ct=W-1>>>1,st=O[ct];if(0<l(st,G))O[ct]=G,O[W]=st,W=ct;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],W=O.pop();if(W!==G){O[0]=W;t:for(var ct=0,st=O.length,D=st>>>1;ct<D;){var q=2*(ct+1)-1,mt=O[q],ut=q+1,Mt=O[ut];if(0>l(mt,W))ut<st&&0>l(Mt,mt)?(O[ct]=Mt,O[ut]=W,ct=ut):(O[ct]=mt,O[q]=W,ct=q);else if(ut<st&&0>l(Mt,W))O[ct]=Mt,O[ut]=W,ct=ut;else break t}}return G}function l(O,G){var W=O.sortIndex-G.sortIndex;return W!==0?W:O.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,S=3,y=!1,A=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function H(O){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=O)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function X(O){if(C=!1,H(O),!A)if(i(m)!==null)A=!0,U||(U=!0,Y());else{var G=i(p);G!==null&&at(X,G.startTime-O)}}var U=!1,z=-1,Q=5,w=-1;function T(){return M?!0:!(o.unstable_now()-w<Q)}function I(){if(M=!1,U){var O=o.unstable_now();w=O;var G=!0;try{t:{A=!1,C&&(C=!1,P(z),z=-1),y=!0;var W=S;try{e:{for(H(O),g=i(m);g!==null&&!(g.expirationTime>O&&T());){var ct=g.callback;if(typeof ct=="function"){g.callback=null,S=g.priorityLevel;var st=ct(g.expirationTime<=O);if(O=o.unstable_now(),typeof st=="function"){g.callback=st,H(O),G=!0;break e}g===i(m)&&r(m),H(O)}else r(m);g=i(m)}if(g!==null)G=!0;else{var D=i(p);D!==null&&at(X,D.startTime-O),G=!1}}break t}finally{g=null,S=W,y=!1}G=void 0}}finally{G?Y():U=!1}}}var Y;if(typeof N=="function")Y=function(){N(I)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,lt=rt.port2;rt.port1.onmessage=I,Y=function(){lt.postMessage(null)}}else Y=function(){_(I,0)};function at(O,G){z=_(function(){O(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var W=S;S=G;try{return O()}finally{S=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=S;S=O;try{return G()}finally{S=W}},o.unstable_scheduleCallback=function(O,G,W){var ct=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ct+W:ct):W=ct,O){case 1:var st=-1;break;case 2:st=250;break;case 5:st=1073741823;break;case 4:st=1e4;break;default:st=5e3}return st=W+st,O={id:v++,callback:G,priorityLevel:O,startTime:W,expirationTime:st,sortIndex:-1},W>ct?(O.sortIndex=W,e(p,O),i(m)===null&&O===i(p)&&(C?(P(z),z=-1):C=!0,at(X,W-ct))):(O.sortIndex=st,e(m,O),A||y||(A=!0,U||(U=!0,Y()))),O},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(O){var G=S;return function(){var W=S;S=G;try{return O.apply(this,arguments)}finally{S=W}}}})(Wf)),Wf}var cx;function tS(){return cx||(cx=1,Xf.exports=$v()),Xf.exports}var qf={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function eS(){if(ux)return Dn;ux=1;var o=ph();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.1",Dn}var fx;function nS(){if(fx)return qf.exports;fx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=eS(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function iS(){if(dx)return bo;dx=1;var o=tS(),e=ph(),i=nS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case U:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case N:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case H:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var at=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ct=[],st=-1;function D(t){return{current:t}}function q(t){0>st||(t.current=ct[st],ct[st]=null,st--)}function mt(t,n){st++,ct[st]=t.current,t.current=n}var ut=D(null),Mt=D(null),J=D(null),ft=D(null);function At(t,n){switch(mt(J,n),mt(Mt,t),mt(ut,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Rm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Rm(n),t=Cm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(ut),mt(ut,t)}function Pt(){q(ut),q(Mt),q(J)}function Nt(t){t.memoizedState!==null&&mt(ft,t);var n=ut.current,a=Cm(n,t.type);n!==a&&(mt(Mt,t),mt(ut,a))}function te(t){Mt.current===t&&(q(ut),q(Mt)),ft.current===t&&(q(ft),_o._currentValue=W)}var Ce,ee;function fe(t){if(Ce===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ce=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ce+t+ee}var F=!1;function ne(t,n){if(!t||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(dt){var it=dt}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(dt){it=dt}t.call(vt.prototype)}}else{try{throw Error()}catch(dt){it=dt}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(dt){if(dt&&it&&typeof dt.stack=="string")return[dt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var B=x.split(`
`),et=E.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===et.length)for(s=B.length-1,c=et.length-1;1<=s&&0<=c&&B[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==et[c]){var xt=`
`+B[s].replace(" at new "," at ");return t.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",t.displayName)),xt}while(1<=s&&0<=c);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?fe(a):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return fe(t.type);case 16:return fe("Lazy");case 13:return t.child!==n&&n!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return ne(t.type,!1);case 11:return ne(t.type.render,!1);case 1:return ne(t.type,!0);case 31:return fe("Activity");default:return""}}function Ht(t){try{var n="",a=null;do n+=Qt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Dt=Object.prototype.hasOwnProperty,_e=o.unstable_scheduleCallback,Gt=o.unstable_cancelCallback,ie=o.unstable_shouldYield,L=o.unstable_requestPaint,b=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,Ft=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,jt=o.log,Yt=o.unstable_setDisableYieldValue,bt=null,Tt=null;function Zt(t){if(typeof jt=="function"&&Yt(t),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,t)}catch{}}var Wt=Math.clz32?Math.clz32:V,It=Math.log,le=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(It(t)/le|0)|0}var Lt=256,Ct=262144,wt=4194304;function Et(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function St(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Et(s):(x&=E,x!==0?c=Et(x):a||(a=E&~t,a!==0&&(c=Et(a))))):(E=s&~f,E!==0?c=Et(E):x!==0?c=Et(x):a||(a=s&~t,a!==0&&(c=Et(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Vt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var t=wt;return wt<<=1,(wt&62914560)===0&&(wt=4194304),t}function De(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wn(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,et=t.hiddenUpdates;for(a=x&~a;0<a;){var xt=31-Wt(a),vt=1<<xt;E[xt]=0,B[xt]=-1;var it=et[xt];if(it!==null)for(et[xt]=null,xt=0;xt<it.length;xt++){var dt=it[xt];dt!==null&&(dt.lane&=-536870913)}a&=~vt}s!==0&&Go(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Go(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Wt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Wt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ds(t,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ka(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Us(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Qm(t.type))}function Ls(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var qn=Math.random().toString(36).slice(2),on="__reactFiber$"+qn,pn="__reactProps$"+qn,Oi="__reactContainer$"+qn,Rr="__reactEvents$"+qn,Oc="__reactListeners$"+qn,Pc="__reactHandles$"+qn,Vo="__reactResources$"+qn,Qa="__reactMarker$"+qn;function Ns(t){delete t[on],delete t[pn],delete t[Rr],delete t[Oc],delete t[Pc]}function pa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Pm(t);t!==null;){if(a=t[on])return a;t=Pm(t)}return n}t=a,a=t.parentNode}return null}function R(t){if(t=t[on]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function j(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ot(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(t){t[Qa]=!0}var K=new Set,Rt={};function Ot(t,n){Bt(t,n),Bt(t+"Capture",n)}function Bt(t,n){for(Rt[t]=n,t=0;t<n.length;t++)K.add(n[t])}var kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},oe={};function Jt(t){return Dt.call(oe,t)?!0:Dt.call(re,t)?!1:kt.test(t)?oe[t]=!0:(re[t]=!0,!1)}function me(t,n,a){if(Jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function we(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ue(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ze(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ae(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){if(!t._valueTracker){var n=ze(t)?"checked":"value";t._valueTracker=ae(t,n,""+t[n])}}function Te(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ze(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ma=/[\n"\\]/g;function je(t){return t.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pi(t,n,a,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ee(n)):t.value!==""+Ee(n)&&(t.value=""+Ee(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,x,Ee(n)):a!=null?Sn(t,x,Ee(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ee(E):t.removeAttribute("name")}function Ze(t,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(t);return}a=a!=null?""+Ee(a):"",n=n!=null?""+Ee(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),qe(t)}function Sn(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ee(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Mn(t,n,a){if(n!=null&&(n=""+Ee(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ee(a):""}function En(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(at(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ee(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),qe(t)}function Ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Th(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Eh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Eh(t,f,n[f])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return qg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Fc=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,wr=null;function Ah(t){var n=R(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Pi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+je(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[pn]||null;if(!c)throw Error(r(90));Pi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Te(s)}break t;case"textarea":Mn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mn(t,!!a.multiple,n,!1)}}}var Bc=!1;function Rh(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var s=t(n);return s}finally{if(Bc=!1,(Cr!==null||wr!==null)&&(Dl(),Cr&&(n=Cr,t=wr,wr=Cr=null,Ah(n),t)))for(n=0;n<t.length;n++)Ah(t[n])}}function Os(t,n){var a=t.stateNode;if(a===null)return null;var s=a[pn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Ii)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Hc=!1}var xa=null,Gc=null,Xo=null;function Ch(){if(Xo)return Xo;var t,n=Gc,a=n.length,s,c="value"in xa?xa.value:xa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Xo=c.slice(t,1<s?1-s:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function wh(){return!1}function zn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=zn(Ja),zs=g({},Ja,{view:0,detail:0}),Yg=zn(zs),Vc,kc,Fs,jo=g({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Vc=t.screenX-Fs.screenX,kc=t.screenY-Fs.screenY):kc=Vc=0,Fs=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Dh=zn(jo),jg=g({},jo,{dataTransfer:0}),Zg=zn(jg),Kg=g({},zs,{relatedTarget:0}),Xc=zn(Kg),Qg=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=zn(Qg),$g=g({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t_=zn($g),e_=g({},Ja,{data:0}),Uh=zn(e_),n_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=a_[t])?!!n[t]:!1}function Wc(){return r_}var s_=g({},zs,{key:function(t){if(t.key){var n=n_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o_=zn(s_),l_=g({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=zn(l_),c_=g({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),u_=zn(c_),f_=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=zn(f_),h_=g({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p_=zn(h_),m_=g({},Ja,{newState:0,oldState:0}),x_=zn(m_),g_=[9,13,27,32],qc=Ii&&"CompositionEvent"in window,Is=null;Ii&&"documentMode"in document&&(Is=document.documentMode);var __=Ii&&"TextEvent"in window&&!Is,Nh=Ii&&(!qc||Is&&8<Is&&11>=Is),Oh=" ",Ph=!1;function zh(t,n){switch(t){case"keyup":return g_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function v_(t,n){switch(t){case"compositionend":return Fh(n);case"keypress":return n.which!==32?null:(Ph=!0,Oh);case"textInput":return t=n.data,t===Oh&&Ph?null:t;default:return null}}function S_(t,n){if(Dr)return t==="compositionend"||!qc&&zh(t,n)?(t=Ch(),Xo=Gc=xa=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!M_[t.type]:n==="textarea"}function Bh(t,n,a,s){Cr?wr?wr.push(s):wr=[s]:Cr=s,n=Fl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bs=null,Hs=null;function y_(t){Mm(t,0)}function Zo(t){var n=j(t);if(Te(n))return t}function Hh(t,n){if(t==="change")return n}var Gh=!1;if(Ii){var Yc;if(Ii){var jc="oninput"in document;if(!jc){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),jc=typeof Vh.oninput=="function"}Yc=jc}else Yc=!1;Gh=Yc&&(!document.documentMode||9<document.documentMode)}function kh(){Bs&&(Bs.detachEvent("onpropertychange",Xh),Hs=Bs=null)}function Xh(t){if(t.propertyName==="value"&&Zo(Hs)){var n=[];Bh(n,Hs,t,Ic(t)),Rh(y_,n)}}function b_(t,n,a){t==="focusin"?(kh(),Bs=n,Hs=a,Bs.attachEvent("onpropertychange",Xh)):t==="focusout"&&kh()}function E_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Hs)}function T_(t,n){if(t==="click")return Zo(n)}function A_(t,n){if(t==="input"||t==="change")return Zo(n)}function R_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:R_;function Gs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Dt.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function Wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,n){var a=Wh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wh(a)}}function Yh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function jh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function Zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var C_=Ii&&"documentMode"in document&&11>=document.documentMode,Ur=null,Kc=null,Vs=null,Qc=!1;function Zh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Ur==null||Ur!==vn(s)||(s=Ur,"selectionStart"in s&&Zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vs&&Gs(Vs,s)||(Vs=s,s=Fl(Kc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ur)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Jc={},Kh={};Ii&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function tr(t){if(Jc[t])return Jc[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kh)return Jc[t]=n[a];return t}var Qh=tr("animationend"),Jh=tr("animationiteration"),$h=tr("animationstart"),w_=tr("transitionrun"),D_=tr("transitionstart"),U_=tr("transitioncancel"),tp=tr("transitionend"),ep=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function xi(t,n){ep.set(t,n),Ot(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Nr=0,tu=0;function Qo(){for(var t=Nr,n=tu=Nr=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&np(a,c,f)}}function Jo(t,n,a,s){ai[Nr++]=t,ai[Nr++]=n,ai[Nr++]=a,ai[Nr++]=s,tu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function eu(t,n,a,s){return Jo(t,n,a,s),$o(t)}function er(t,n){return Jo(t,null,null,n),$o(t)}function np(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Wt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<uo)throw uo=0,ff=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Or={};function L_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new L_(t,n,a,s)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ip(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")nu(t)&&(x=1);else if(typeof t=="string")x=Fv(t,a,ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=jn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return nr(a.children,c,f,n);case M:x=8,c|=24;break;case _:return t=jn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case X:return t=jn(13,a,n,c),t.elementType=X,t.lanes=f,t;case U:return t=jn(19,a,n,c),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break t;case P:x=9;break t;case H:x=11;break t;case z:x=14;break t;case Q:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function nr(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function iu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function ap(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function au(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var rp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=rp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ht(n)},rp.set(t,n),n)}return{value:t,source:n,stack:Ht(n)}}var Pr=[],zr=0,el=null,ks=0,si=[],oi=0,ga=null,Ai=1,Ri="";function Hi(t,n){Pr[zr++]=ks,Pr[zr++]=el,el=t,ks=n}function sp(t,n,a){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=ga,ga=t;var s=Ai;t=Ri;var c=32-Wt(s)-1;s&=~(1<<c),a+=1;var f=32-Wt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ai=1<<32-Wt(n)+c|a<<c|s,Ri=f+t}else Ai=1<<f|a<<c|s,Ri=t}function ru(t){t.return!==null&&(Hi(t,1),sp(t,1,0))}function su(t){for(;t===el;)el=Pr[--zr],Pr[zr]=null,ks=Pr[--zr],Pr[zr]=null;for(;t===ga;)ga=si[--oi],si[oi]=null,Ri=si[--oi],si[oi]=null,Ai=si[--oi],si[oi]=null}function op(t,n){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=ga,Ai=n.id,Ri=n.overflow,ga=t}var Tn=null,Ke=null,Ae=!1,_a=null,li=!1,ou=Error(r(519));function va(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ri(n,t)),ou}function lp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[pn]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)Me(ho[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Ze(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),En(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Tm(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||va(t,!0)}function cp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Tn=Tn.return}}function Fr(t){if(t!==Tn)return!1;if(!Ae)return cp(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Af(t.type,t.memoizedProps)),a=!a),a&&Ke&&va(t),cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Om(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Om(t)}else n===27?(n=Ke,Na(t.type)?(t=Uf,Uf=null,Ke=t):Ke=n):Ke=Tn?ui(t.stateNode.nextSibling):null;return!0}function ir(){Ke=Tn=null,Ae=!1}function lu(){var t=_a;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),_a=null),t}function Xs(t){_a===null?_a=[t]:_a.push(t)}var cu=D(null),ar=null,Gi=null;function Sa(t,n,a){mt(cu,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=cu.current,q(cu)}function uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function fu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),uu(f.return,a,t),s||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),uu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ir(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;Yn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===ft.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&fu(n,t,a,s),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return up(ar,t)}function il(t,n){return ar===null&&rr(t),up(t,n)}function up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var N_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},O_=o.unstable_scheduleCallback,P_=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new N_,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&O_(P_,function(){t.controller.abort()})}var qs=null,hu=0,Br=0,Hr=null;function z_(t,n){if(qs===null){var a=qs=[];hu=0,Br=gf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return hu++,n.then(fp,fp),n}function fp(){if(--hu===0&&qs!==null){Hr!==null&&(Hr.status="fulfilled");var t=qs;qs=null,Br=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function F_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var dp=O.S;O.S=function(t,n){Z0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&z_(t,n),dp!==null&&dp(t,n)};var sr=D(null);function pu(){var t=sr.current;return t!==null?t:Ye.pooledCache}function al(t,n){n===null?mt(sr,sr.current):mt(sr,n.pool)}function hp(){var t=pu();return t===null?null:{parent:ln._currentValue,pool:t}}var Gr=Error(r(460)),mu=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t}throw lr=n,Gr}}function or(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,Gr):a}}var lr=null;function xp(){if(lr===null)throw Error(r(459));var t=lr;return lr=null,t}function gp(t){if(t===Gr||t===rl)throw Error(r(483))}var Vr=null,Ys=0;function ol(t){var n=Ys;return Ys+=1,Vr===null&&(Vr=[]),mp(Vr,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _p(t){function n(Z,k){if(t){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function s(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function c(Z,k){return Z=Bi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,tt){return Z.index=tt,t?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function x(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function E(Z,k,tt,gt){return k===null||k.tag!==6?(k=iu(tt,Z.mode,gt),k.return=Z,k):(k=c(k,tt),k.return=Z,k)}function B(Z,k,tt,gt){var $t=tt.type;return $t===C?xt(Z,k,tt.props.children,gt,tt.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Q&&or($t)===k.type)?(k=c(k,tt.props),js(k,tt),k.return=Z,k):(k=tl(tt.type,tt.key,tt.props,null,Z.mode,gt),js(k,tt),k.return=Z,k)}function et(Z,k,tt,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=au(tt,Z.mode,gt),k.return=Z,k):(k=c(k,tt.children||[]),k.return=Z,k)}function xt(Z,k,tt,gt,$t){return k===null||k.tag!==7?(k=nr(tt,Z.mode,gt,$t),k.return=Z,k):(k=c(k,tt),k.return=Z,k)}function vt(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=iu(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return tt=tl(k.type,k.key,k.props,null,Z.mode,tt),js(tt,k),tt.return=Z,tt;case A:return k=au(k,Z.mode,tt),k.return=Z,k;case Q:return k=or(k),vt(Z,k,tt)}if(at(k)||Y(k))return k=nr(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return vt(Z,ol(k),tt);if(k.$$typeof===N)return vt(Z,il(Z,k),tt);ll(Z,k)}return null}function it(Z,k,tt,gt){var $t=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:E(Z,k,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===$t?B(Z,k,tt,gt):null;case A:return tt.key===$t?et(Z,k,tt,gt):null;case Q:return tt=or(tt),it(Z,k,tt,gt)}if(at(tt)||Y(tt))return $t!==null?null:xt(Z,k,tt,gt,null);if(typeof tt.then=="function")return it(Z,k,ol(tt),gt);if(tt.$$typeof===N)return it(Z,k,il(Z,tt),gt);ll(Z,tt)}return null}function dt(Z,k,tt,gt,$t){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(tt)||null,E(k,Z,""+gt,$t);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Z=Z.get(gt.key===null?tt:gt.key)||null,B(k,Z,gt,$t);case A:return Z=Z.get(gt.key===null?tt:gt.key)||null,et(k,Z,gt,$t);case Q:return gt=or(gt),dt(Z,k,tt,gt,$t)}if(at(gt)||Y(gt))return Z=Z.get(tt)||null,xt(k,Z,gt,$t,null);if(typeof gt.then=="function")return dt(Z,k,tt,ol(gt),$t);if(gt.$$typeof===N)return dt(Z,k,tt,il(k,gt),$t);ll(k,gt)}return null}function Xt(Z,k,tt,gt){for(var $t=null,Le=null,qt=k,xe=k=0,be=null;qt!==null&&xe<tt.length;xe++){qt.index>xe?(be=qt,qt=null):be=qt.sibling;var Ne=it(Z,qt,tt[xe],gt);if(Ne===null){qt===null&&(qt=be);break}t&&qt&&Ne.alternate===null&&n(Z,qt),k=f(Ne,k,xe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne,qt=be}if(xe===tt.length)return a(Z,qt),Ae&&Hi(Z,xe),$t;if(qt===null){for(;xe<tt.length;xe++)qt=vt(Z,tt[xe],gt),qt!==null&&(k=f(qt,k,xe),Le===null?$t=qt:Le.sibling=qt,Le=qt);return Ae&&Hi(Z,xe),$t}for(qt=s(qt);xe<tt.length;xe++)be=dt(qt,Z,xe,tt[xe],gt),be!==null&&(t&&be.alternate!==null&&qt.delete(be.key===null?xe:be.key),k=f(be,k,xe),Le===null?$t=be:Le.sibling=be,Le=be);return t&&qt.forEach(function(Ia){return n(Z,Ia)}),Ae&&Hi(Z,xe),$t}function se(Z,k,tt,gt){if(tt==null)throw Error(r(151));for(var $t=null,Le=null,qt=k,xe=k=0,be=null,Ne=tt.next();qt!==null&&!Ne.done;xe++,Ne=tt.next()){qt.index>xe?(be=qt,qt=null):be=qt.sibling;var Ia=it(Z,qt,Ne.value,gt);if(Ia===null){qt===null&&(qt=be);break}t&&qt&&Ia.alternate===null&&n(Z,qt),k=f(Ia,k,xe),Le===null?$t=Ia:Le.sibling=Ia,Le=Ia,qt=be}if(Ne.done)return a(Z,qt),Ae&&Hi(Z,xe),$t;if(qt===null){for(;!Ne.done;xe++,Ne=tt.next())Ne=vt(Z,Ne.value,gt),Ne!==null&&(k=f(Ne,k,xe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return Ae&&Hi(Z,xe),$t}for(qt=s(qt);!Ne.done;xe++,Ne=tt.next())Ne=dt(qt,Z,xe,Ne.value,gt),Ne!==null&&(t&&Ne.alternate!==null&&qt.delete(Ne.key===null?xe:Ne.key),k=f(Ne,k,xe),Le===null?$t=Ne:Le.sibling=Ne,Le=Ne);return t&&qt.forEach(function(jv){return n(Z,jv)}),Ae&&Hi(Z,xe),$t}function ke(Z,k,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var $t=tt.key;k!==null;){if(k.key===$t){if($t=tt.type,$t===C){if(k.tag===7){a(Z,k.sibling),gt=c(k,tt.props.children),gt.return=Z,Z=gt;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===Q&&or($t)===k.type){a(Z,k.sibling),gt=c(k,tt.props),js(gt,tt),gt.return=Z,Z=gt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}tt.type===C?(gt=nr(tt.props.children,Z.mode,gt,tt.key),gt.return=Z,Z=gt):(gt=tl(tt.type,tt.key,tt.props,null,Z.mode,gt),js(gt,tt),gt.return=Z,Z=gt)}return x(Z);case A:t:{for($t=tt.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Z,k.sibling),gt=c(k,tt.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}gt=au(tt,Z.mode,gt),gt.return=Z,Z=gt}return x(Z);case Q:return tt=or(tt),ke(Z,k,tt,gt)}if(at(tt))return Xt(Z,k,tt,gt);if(Y(tt)){if($t=Y(tt),typeof $t!="function")throw Error(r(150));return tt=$t.call(tt),se(Z,k,tt,gt)}if(typeof tt.then=="function")return ke(Z,k,ol(tt),gt);if(tt.$$typeof===N)return ke(Z,k,il(Z,tt),gt);ll(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Z,k.sibling),gt=c(k,tt),gt.return=Z,Z=gt):(a(Z,k),gt=iu(tt,Z.mode,gt),gt.return=Z,Z=gt),x(Z)):a(Z,k)}return function(Z,k,tt,gt){try{Ys=0;var $t=ke(Z,k,tt,gt);return Vr=null,$t}catch(qt){if(qt===Gr||qt===rl)throw qt;var Le=jn(29,qt,null,Z.mode);return Le.lanes=gt,Le.return=Z,Le}finally{}}}var cr=_p(!0),vp=_p(!1),Ma=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(t),np(t,null,a),n}return Jo(t,s,n,a),$o(t)}function Zs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}function _u(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vu=!1;function Ks(){if(vu){var t=Hr;if(t!==null)throw t}}function Qs(t,n,a,s){vu=!1;var c=t.updateQueue;Ma=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var B=E,et=B.next;B.next=null,x===null?f=et:x.next=et,x=B;var xt=t.alternate;xt!==null&&(xt=xt.updateQueue,E=xt.lastBaseUpdate,E!==x&&(E===null?xt.firstBaseUpdate=et:E.next=et,xt.lastBaseUpdate=B))}if(f!==null){var vt=c.baseState;x=0,xt=et=B=null,E=f;do{var it=E.lane&-536870913,dt=it!==E.lane;if(dt?(ye&it)===it:(s&it)===it){it!==0&&it===Br&&(vu=!0),xt!==null&&(xt=xt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Xt=t,se=E;it=n;var ke=a;switch(se.tag){case 1:if(Xt=se.payload,typeof Xt=="function"){vt=Xt.call(ke,vt,it);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=se.payload,it=typeof Xt=="function"?Xt.call(ke,vt,it):Xt,it==null)break t;vt=g({},vt,it);break t;case 2:Ma=!0}}it=E.callback,it!==null&&(t.flags|=64,dt&&(t.flags|=8192),dt=c.callbacks,dt===null?c.callbacks=[it]:dt.push(it))}else dt={lane:it,tag:E.tag,payload:E.payload,callback:E.callback,next:null},xt===null?(et=xt=dt,B=vt):xt=xt.next=dt,x|=it;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;dt=E,E=dt.next,dt.next=null,c.lastBaseUpdate=dt,c.shared.pending=null}}while(!0);xt===null&&(B=vt),c.baseState=B,c.firstBaseUpdate=et,c.lastBaseUpdate=xt,f===null&&(c.shared.lanes=0),Ca|=x,t.lanes=x,t.memoizedState=vt}}function Sp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Mp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Sp(a[t],n)}var kr=D(null),cl=D(0);function yp(t,n){t=Qi,mt(cl,t),mt(kr,n),Qi=t|n.baseLanes}function Su(){mt(cl,Qi),mt(kr,kr.current)}function Mu(){Qi=cl.current,q(kr),q(cl)}var Zn=D(null),ci=null;function Ea(t){var n=t.alternate;mt(nn,nn.current&1),mt(Zn,t),ci===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(ci=t)}function yu(t){mt(nn,nn.current),mt(Zn,t),ci===null&&(ci=t)}function bp(t){t.tag===22?(mt(nn,nn.current),mt(Zn,t),ci===null&&(ci=t)):Ta()}function Ta(){mt(nn,nn.current),mt(Zn,Zn.current)}function Kn(t){q(Zn),ci===t&&(ci=null),q(nn)}var nn=D(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,he=null,Ge=null,cn=null,fl=!1,Xr=!1,ur=!1,dl=0,Js=0,Wr=null,I_=0;function $e(){throw Error(r(321))}function bu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Eu(t,n,a,s,c,f){return ki=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?s0:Bu,ur=!1,f=a(s,c),ur=!1,Xr&&(f=Tp(n,a,s,c)),Ep(t),f}function Ep(t){O.H=eo;var n=Ge!==null&&Ge.next!==null;if(ki=0,cn=Ge=he=null,fl=!1,Js=0,Wr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&nl(t)&&(un=!0))}function Tp(t,n,a,s){he=t;var c=0;do{if(Xr&&(Wr=null),Js=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,cn=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=o0,f=n(a,s)}while(Xr);return f}function B_(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(he.flags|=1024),n}function Tu(){var t=dl!==0;return dl=0,t}function Au(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ru(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}ki=0,cn=Ge=he=null,Xr=!1,Js=dl=0,Wr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=t:cn=cn.next=t,cn}function an(){if(Ge===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=cn===null?he.memoizedState:cn.next;if(n!==null)cn=n,Ge=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?he.memoizedState=cn=t:cn=cn.next=t}return cn}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Wr===null&&(Wr=[]),t=mp(Wr,t,n),n=he,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?s0:Bu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===N)return An(t)}throw Error(r(438,String(t)))}function Cu(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=T;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=an();return wu(n,Ge,t)}function wu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,B=null,et=n,xt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(ye&vt)===vt:(ki&vt)===vt){var it=et.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Br&&(xt=!0);else if((ki&it)===it){et=et.next,it===Br&&(xt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(E=B=vt,x=f):B=B.next=vt,he.lanes|=it,Ca|=it;vt=et.action,ur&&a(f,vt),f=et.hasEagerState?et.eagerState:a(f,vt)}else it={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(E=B=it,x=f):B=B.next=it,he.lanes|=vt,Ca|=vt;et=et.next}while(et!==null&&et!==n);if(B===null?x=f:B.next=E,!Yn(f,t.memoizedState)&&(un=!0,xt&&(a=Hr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Du(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Yn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ap(t,n,a){var s=he,c=an(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Yn((Ge||c).memoizedState,a);if(x&&(c.memoizedState=a,un=!0),c=c.queue,Nu(wp.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Cp.bind(null,s,c,a,n),null),Ye===null)throw Error(r(349));f||(ki&127)!==0||Rp(s,n,a)}return a}function Rp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=hl(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Cp(t,n,a,s){n.value=a,n.getSnapshot=s,Dp(n)&&Up(t)}function wp(t,n,a){return a(function(){Dp(n)&&Up(t)})}function Dp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Up(t){var n=er(t,2);n!==null&&Gn(n,t,2)}function Uu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),ur){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function Lp(t,n,a,s){return t.baseState=a,wu(t,Ge,typeof s=="function"?s:Xi)}function H_(t,n,a,s,c){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Np(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Np(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var E=a(c,s),B=O.S;B!==null&&B(x,E),Op(t,n,E)}catch(et){Lu(t,n,et)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(c,s),Op(t,n,f)}catch(et){Lu(t,n,et)}}function Op(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Pp(t,n,s)},function(s){return Lu(t,n,s)}):Pp(t,n,a)}function Pp(t,n,a){n.status="fulfilled",n.value=a,zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Np(t,a)))}function Lu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,zp(n),n=n.next;while(n!==s)}t.action=null}function zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Fp(t,n){return n}function Ip(t,n){if(Ae){var a=Ye.formState;if(a!==null){t:{var s=he;if(Ae){if(Ke){e:{for(var c=Ke,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=ui(c.nextSibling),s=c.data==="F!";break t}}va(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=s,a=i0.bind(null,he,s),s.dispatch=a,s=Uu(!1),f=Iu.bind(null,he,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=H_.bind(null,he,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Bp(t){var n=an();return Hp(n,Ge,t)}function Hp(t,n,a){if(n=wu(t,n,Fp)[0],t=ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(x){throw x===Gr?rl:x}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,qr(9,{destroy:void 0},G_.bind(null,c,a),null)),[s,f,t]}function G_(t,n){t.action=n}function Gp(t){var n=an(),a=Ge;if(a!==null)return Hp(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function qr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=hl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Vp(){return an().memoizedState}function xl(t,n,a,s){var c=Nn();he.flags|=t,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function gl(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ge!==null&&s!==null&&bu(s,Ge.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(he.flags|=t,c.memoizedState=qr(1|n,f,a,s))}function kp(t,n){xl(8390656,8,t,n)}function Nu(t,n){gl(2048,8,t,n)}function V_(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=hl(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Xp(t){var n=an().memoizedState;return V_({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Wp(t,n){return gl(4,2,t,n)}function qp(t,n){return gl(4,4,t,n)}function Yp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,Yp.bind(null,n,t),a)}function Ou(){}function Zp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Kp(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bu(n,s[1]))return s[0];if(s=t(),ur){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s}function Pu(t,n,a){return a===void 0||(ki&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Q0(),he.lanes|=t,Ca|=t,a)}function Qp(t,n,a,s){return Yn(a,n)?a:kr.current!==null?(t=Pu(t,a,s),Yn(t,n)||(un=!0),t):(ki&42)===0||(ki&1073741824)!==0&&(ye&261930)===0?(un=!0,t.memoizedState=a):(t=Q0(),he.lanes|=t,Ca|=t,n)}function Jp(t,n,a,s,c){var f=G.p;G.p=f!==0&&8>f?f:8;var x=O.T,E={};O.T=E,Iu(t,!1,n,a);try{var B=c(),et=O.S;if(et!==null&&et(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var xt=F_(B,s);to(t,n,xt,$n(t))}else to(t,n,s,$n(t))}catch(vt){to(t,n,{then:function(){},status:"rejected",reason:vt},$n())}finally{G.p=f,x!==null&&E.types!==null&&(x.types=E.types),O.T=x}}function k_(){}function zu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=$p(t).queue;Jp(t,c,n,W,a===null?k_:function(){return t0(t),a(s)})}function $p(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function t0(t){var n=$p(t);n.next===null&&(n=t.alternate.memoizedState),to(t,n.next.queue,{},$n())}function Fu(){return An(_o)}function e0(){return an().memoizedState}function n0(){return an().memoizedState}function X_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=ya(a);var s=ba(n,t,a);s!==null&&(Gn(s,n,a),Zs(s,n,a)),n={cache:du()},t.payload=n;return}n=n.return}}function W_(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?a0(n,a):(a=eu(t,n,a,s),a!==null&&(Gn(a,t,s),r0(a,n,s)))}function i0(t,n,a){var s=$n();to(t,n,a,s)}function to(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))a0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Yn(E,x))return Jo(t,n,c,0),Ye===null&&Qo(),!1}catch{}finally{}if(a=eu(t,n,c,s),a!==null)return Gn(a,t,s),r0(a,n,s),!0}return!1}function Iu(t,n,a,s){if(s={lane:2,revertLane:gf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=eu(t,a,s,2),n!==null&&Gn(n,t,2)}function _l(t){var n=t.alternate;return t===he||n!==null&&n===he}function a0(t,n){Xr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function r0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ws(t,a)}}var eo={readContext:An,use:pl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};eo.useEffectEvent=$e;var s0={readContext:An,use:pl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:kp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xl(4194308,4,Yp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xl(4194308,4,t,n)},useInsertionEffect:function(t,n){xl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(ur){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(ur){Zt(!0);try{a(n)}finally{Zt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=W_.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Uu(t);var n=t.queue,a=i0.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(t,n){var a=Nn();return Pu(a,t,n)},useTransition:function(){var t=Uu(!1);return t=Jp.bind(null,he,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,c=Nn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(ye&127)!==0||Rp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,kp(wp.bind(null,s,f,t),[t]),s.flags|=2048,qr(9,{destroy:void 0},Cp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Ye.identifierPrefix;if(Ae){var a=Ri,s=Ai;a=(s&~(1<<32-Wt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=I_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Fu,useFormState:Ip,useActionState:Ip,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Cu,useCacheRefresh:function(){return Nn().memoizedState=X_.bind(null,he)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:An,use:pl,useCallback:Zp,useContext:An,useEffect:Nu,useImperativeHandle:jp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Kp,useReducer:ml,useRef:Vp,useState:function(){return ml(Xi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=an();return Qp(a,Ge.memoizedState,t,n)},useTransition:function(){var t=ml(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Ap,useId:e0,useHostTransitionStatus:Fu,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=an();return Lp(a,Ge,t,n)},useMemoCache:Cu,useCacheRefresh:n0};Bu.useEffectEvent=Xp;var o0={readContext:An,use:pl,useCallback:Zp,useContext:An,useEffect:Nu,useImperativeHandle:jp,useInsertionEffect:Wp,useLayoutEffect:qp,useMemo:Kp,useReducer:Du,useRef:Vp,useState:function(){return Du(Xi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=an();return Ge===null?Pu(a,t,n):Qp(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Du(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Ap,useId:e0,useHostTransitionStatus:Fu,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,n){var a=an();return Ge!==null?Lp(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:n0};o0.useEffectEvent=Xp;function Hu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),c=ya(s);c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,s),n!==null&&(Gn(n,t,s),Zs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),c=ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,s),n!==null&&(Gn(n,t,s),Zs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=ba(t,s,a),n!==null&&(Gn(n,t,a),Zs(n,t,a))}};function l0(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(c,f):!0}function c0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Gu.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function u0(t){Ko(t)}function f0(t){console.error(t)}function d0(t){Ko(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function h0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(t,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function p0(t){return t=ya(t),t.tag=3,t}function m0(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){h0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){h0(n,a,s),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function q_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Ul():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),pf(t,s,c)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),pf(t,s,c)),!1}throw Error(r(435,a.tag))}return pf(t,s,c),Ul(),!1}if(Ae)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ou&&(t=Error(r(422),{cause:s}),Xs(ri(t,a)))):(s!==ou&&(n=Error(r(423),{cause:s}),Xs(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ri(s,a),c=Vu(t.stateNode,s,c),_u(t,c),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),co===null?co=[f]:co.push(f),tn!==4&&(tn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Vu(a.stateNode,s,t),_u(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=p0(c),m0(c,t,a,s),_u(a,c),!1}a=a.return}while(a!==null);return!1}var ku=Error(r(461)),un=!1;function Rn(t,n,a,s){n.child=t===null?vp(n,null,a,s):cr(n,t.child,a,s)}function x0(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return rr(n),s=Eu(t,n,a,x,f,c),E=Tu(),t!==null&&!un?(Au(t,n,c),Wi(t,n,c)):(Ae&&E&&ru(n),n.flags|=1,Rn(t,n,s,c),n.child)}function g0(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_0(t,n,f,s,c)):(t=tl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Qu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(x,s)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=Bi(f,s),t.ref=n.ref,t.return=n,n.child=t}function _0(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Gs(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,Qu(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return Xu(t,n,a,s,c)}function v0(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return S0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?yp(n,f):Su(),bp(n);else return s=n.lanes=536870912,S0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),yp(n,f),Ta(),n.memoizedState=null):(t!==null&&al(n,null),Su(),Ta());return Rn(t,n,c,a),n.child}function no(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function S0(t,n,a,s,c){var f=pu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),Su(),bp(n),t!==null&&Ir(t,n,s,!0),n.childLanes=c,null}function Sl(t,n){return n=yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function M0(t,n,a){return cr(n,t.child,null,a),t=Sl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Y_(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ae){if(s.mode==="hidden")return t=Sl(n,s),n.lanes=536870912,no(null,t);if(yu(n),(t=Ke)?(t=Nm(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=ap(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw va(n);return n.lanes=536870912,null}return Sl(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(yu(n),c)if(n.flags&256)n.flags&=-257,n=M0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Ir(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(s=Ye,s!==null&&(x=Ds(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,er(t,x),Gn(s,t,x),ku;Ul(),n=M0(t,n,a)}else t=f.treeContext,Ke=ui(x.nextSibling),Tn=n,Ae=!0,_a=null,li=!1,t!==null&&op(n,t),n=Sl(n,s),n.flags|=4096;return n}return t=Bi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Xu(t,n,a,s,c){return rr(n),a=Eu(t,n,a,s,void 0,c),s=Tu(),t!==null&&!un?(Au(t,n,c),Wi(t,n,c)):(Ae&&s&&ru(n),n.flags|=1,Rn(t,n,a,c),n.child)}function y0(t,n,a,s,c,f){return rr(n),n.updateQueue=null,a=Tp(n,s,a,c),Ep(t),s=Tu(),t!==null&&!un?(Au(t,n,f),Wi(t,n,f)):(Ae&&s&&ru(n),n.flags|=1,Rn(t,n,a,f),n.child)}function b0(t,n,a,s,c){if(rr(n),n.stateNode===null){var f=Or,x=a.contextType;typeof x=="object"&&x!==null&&(f=An(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},xu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?An(x):Or,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Hu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Gu.enqueueReplaceState(f,f.state,null),Qs(n,s,f,c),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=fr(a,E);f.props=B;var et=f.context,xt=a.contextType;x=Or,typeof xt=="object"&&xt!==null&&(x=An(xt));var vt=a.getDerivedStateFromProps;xt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||et!==x)&&c0(n,f,s,x),Ma=!1;var it=n.memoizedState;f.state=it,Qs(n,s,f,c),Ks(),et=n.memoizedState,E||it!==et||Ma?(typeof vt=="function"&&(Hu(n,a,vt,s),et=n.memoizedState),(B=Ma||l0(n,a,B,s,it,et,x))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=x,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,gu(t,n),x=n.memoizedProps,xt=fr(a,x),f.props=xt,vt=n.pendingProps,it=f.context,et=a.contextType,B=Or,typeof et=="object"&&et!==null&&(B=An(et)),E=a.getDerivedStateFromProps,(et=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||it!==B)&&c0(n,f,s,B),Ma=!1,it=n.memoizedState,f.state=it,Qs(n,s,f,c),Ks();var dt=n.memoizedState;x!==vt||it!==dt||Ma||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof E=="function"&&(Hu(n,a,E,s),dt=n.memoizedState),(xt=Ma||l0(n,a,xt,s,it,dt,B)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,dt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,dt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=dt),f.props=s,f.state=dt,f.context=B,s=xt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=cr(n,t.child,null,c),n.child=cr(n,null,a,c)):Rn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Wi(t,n,c),t}function E0(t,n,a,s){return ir(),n.flags|=256,Rn(t,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:hp()}}function Yu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function T0(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(c?Ea(n):Ta(),(t=Ke)?(t=Nm(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ga!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=ap(t),a.return=n,n.child=a,Tn=n,Ke=null)):t=null,t===null)throw va(n);return Df(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ta(),c=n.mode,E=yl({mode:"hidden",children:E},c),s=nr(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,x,a),n.memoizedState=Wu,no(null,s)):(Ea(n),ju(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=Zu(t,n,a)):n.memoizedState!==null?(Ta(),n.child=t.child,n.flags|=128,n=null):(Ta(),E=s.fallback,c=n.mode,s=yl({mode:"visible",children:s.children},c),E=nr(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,cr(n,t.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,x,a),n.memoizedState=Wu,n=no(null,s));else if(Ea(n),Df(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var et=x.dgst;x=et,s=Error(r(419)),s.stack="",s.digest=x,Xs({value:s,source:null,stack:null}),n=Zu(t,n,a)}else if(un||Ir(t,n,a,!1),x=(a&t.childLanes)!==0,un||x){if(x=Ye,x!==null&&(s=Ds(x,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,er(t,s),Gn(x,t,s),ku;wf(E)||Ul(),n=Zu(t,n,a)}else wf(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ke=ui(E.nextSibling),Tn=n,Ae=!0,_a=null,li=!1,t!==null&&op(n,t),n=ju(n,s.children),n.flags|=4096);return n}return c?(Ta(),E=s.fallback,c=n.mode,B=t.child,et=B.sibling,s=Bi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,et!==null?E=Bi(et,E):(E=nr(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,no(null,s),s=n.child,E=t.child.memoizedState,E===null?E=qu(a):(c=E.cachePool,c!==null?(B=ln._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=hp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=Yu(t,x,a),n.memoizedState=Wu,no(t.child,s)):(Ea(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function ju(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function Zu(t,n,a){return cr(n,t.child,null,a),t=ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function A0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),uu(t.return,n,a)}function Ku(t,n,a,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function R0(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=nn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,mt(nn,x),Rn(t,n,s,a),s=Ae?ks:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A0(t,a,n);else if(t.tag===19)A0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ku(n,!0,a,null,f,s);break;case"together":Ku(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function j_(t,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Sa(n,ln,t.memoizedState.cache),ir();break;case 27:case 5:Nt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T0(t,n,a):(Ea(n),t=Wi(t,n,a),t!==null?t.sibling:null);Ea(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ir(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return R0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),mt(nn,nn.current),s)break;return null;case 22:return n.lanes=0,v0(t,n,a,n.pendingProps);case 24:Sa(n,ln,t.memoizedState.cache)}return Wi(t,n,a)}function C0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Qu(t,a)&&(n.flags&128)===0)return un=!1,j_(t,n,a);un=(t.flags&131072)!==0}else un=!1,Ae&&(n.flags&1048576)!==0&&sp(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=or(n.elementType),n.type=t,typeof t=="function")nu(t)?(s=fr(t,s),n.tag=1,n=b0(null,n,t,s,a)):(n.tag=0,n=Xu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===H){n.tag=11,n=x0(null,n,t,s,a);break t}else if(c===z){n.tag=14,n=g0(null,n,t,s,a);break t}}throw n=lt(t)||t,Error(r(306,n,""))}}return n;case 0:return Xu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=fr(s,n.pendingProps),b0(t,n,s,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,gu(t,n),Qs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Sa(n,ln,s),s!==f.cache&&fu(n,[ln],a,!0),Ks(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=E0(t,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),Xs(c),n=E0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=ui(t.firstChild),Tn=n,Ae=!0,_a=null,li=!0,a=vp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ir(),s===c){n=Wi(t,n,a);break t}Rn(t,n,s,a)}n=n.child}return n;case 26:return Ml(t,n),t===null?(a=Bm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=Il(J.current).createElement(a),s[on]=n,s[pn]=t,Cn(s,a,t),nt(s),n.stateNode=s):n.memoizedState=Bm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Nt(n),t===null&&Ae&&(s=n.stateNode=zm(n.type,n.pendingProps,J.current),Tn=n,li=!0,c=Ke,Na(n.type)?(Uf=c,Ke=ui(s.firstChild)):Ke=c),Rn(t,n,n.pendingProps.children,a),Ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((c=s=Ke)&&(s=Ev(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,Tn=n,Ke=ui(s.firstChild),li=!1,c=!0):c=!1),c||va(n)),Nt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,Af(c,f)?s=null:x!==null&&Af(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(t,n,B_,null,null,a),_o._currentValue=c),Ml(t,n),Rn(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=Ke)&&(a=Tv(a,n.pendingProps,li),a!==null?(n.stateNode=a,Tn=n,Ke=null,t=!0):t=!1),t||va(n)),null;case 13:return T0(t,n,a);case 4:return At(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=cr(n,null,s,a):Rn(t,n,s,a),n.child;case 11:return x0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Sa(n,n.type,s.value),Rn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,rr(n),c=An(c),s=s(c),n.flags|=1,Rn(t,n,s,a),n.child;case 14:return g0(t,n,n.type,n.pendingProps,a);case 15:return _0(t,n,n.type,n.pendingProps,a);case 19:return R0(t,n,a);case 31:return Y_(t,n,a);case 22:return v0(t,n,a,n.pendingProps);case 24:return rr(n),s=An(ln),t===null?(c=pu(),c===null&&(c=Ye,f=du(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},xu(n),Sa(n,ln,c)):((t.lanes&a)!==0&&(gu(t,n),Qs(n,null,null,a),Ks()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,ln,s)):(s=f.cache,Sa(n,ln,s),s!==c.cache&&fu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function Ju(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(em())t.flags|=8192;else throw lr=sl,mu}else t.flags&=-16777217}function w0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Xm(n))if(em())t.flags|=8192;else throw lr=sl,mu}function bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?He():536870912,t.lanes|=n,Kr|=n)}function io(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Z_(t,n,a){var s=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(ln),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fr(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),Qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(qi(n),f!==null?(Qe(n),w0(n,f)):(Qe(n),Ju(n,c,null,s,a))):f?f!==t.memoizedState?(qi(n),Qe(n),w0(n,f)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&qi(n),Qe(n),Ju(n,c,t,s,a)),null;case 27:if(te(n),a=J.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}t=ut.current,Fr(n)?lp(n):(t=zm(c,s,a),n.stateNode=t,qi(n))}return Qe(n),null;case 5:if(te(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(f=ut.current,Fr(n))lp(n);else{var x=Il(J.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[on]=n,f[pn]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Cn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&qi(n)}}return Qe(n),Ju(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,Fr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Tm(t.nodeValue,a)),t||va(n,!0)}else t=Il(t).createTextNode(s),t[on]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Fr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Fr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),c=!1}else c=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),bl(n,n.updateQueue),Qe(n),null);case 4:return Pt(),t===null&&Mf(n.stateNode.containerInfo),Qe(n),null;case 10:return Vi(n.type),Qe(n),null;case 19:if(q(nn),s=n.memoizedState,s===null)return Qe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)io(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,io(s,!1),t=f.updateQueue,n.updateQueue=t,bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ip(a,t),a=a.sibling;return mt(nn,nn.current&1|2),Ae&&Hi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>Cl&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,bl(n,t),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ae)return Qe(n),null}else 2*b()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=nn.current,mt(nn,c?a&1|2:a&1),Ae&&Hi(n,s.treeForkCount),t):(Qe(n),null);case 22:case 23:return Kn(n),Mu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&q(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(ln),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function K_(t,n){switch(su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(ln),Pt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return te(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return q(nn),null;case 4:return Pt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Kn(n),Mu(),t!==null&&q(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(ln),null;case 25:return null;default:return null}}function D0(t,n){switch(su(n),n.tag){case 3:Vi(ln),Pt();break;case 26:case 27:case 5:te(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:q(nn);break;case 10:Vi(n.type);break;case 22:case 23:Kn(n),Mu(),t!==null&&q(sr);break;case 24:Vi(ln)}}function ao(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){Ie(n,n.return,E)}}function Aa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var B=a,et=E;try{et()}catch(xt){Ie(c,B,xt)}}}s=s.next}while(s!==f)}}catch(xt){Ie(n,n.return,xt)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mp(n,a)}catch(s){Ie(t,t.return,s)}}}function L0(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Ie(t,n,c)}}function Ci(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ie(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,n,c)}else a.current=null}function N0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function $u(t,n,a){try{var s=t.stateNode;_v(s,t.type,a,n),s[pn]=n}catch(c){Ie(t,t.return,c)}}function O0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Na(t.type)||t.tag===4}function tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(s!==4&&(s===27&&Na(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ef(t,n,a),t=t.sibling;t!==null;)ef(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function P0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,s,a),n[on]=t,n[pn]=a}catch(f){Ie(t,t.return,f)}}var Yi=!1,fn=!1,nf=!1,z0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Q_(t,n){if(t=t.containerInfo,Ef=Wl,t=jh(t),Zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,B=-1,et=0,xt=0,vt=t,it=null;e:for(;;){for(var dt;vt!==a||c!==0&&vt.nodeType!==3||(E=x+c),vt!==f||s!==0&&vt.nodeType!==3||(B=x+s),vt.nodeType===3&&(x+=vt.nodeValue.length),(dt=vt.firstChild)!==null;)it=vt,vt=dt;for(;;){if(vt===t)break e;if(it===a&&++et===c&&(E=x),it===f&&++xt===s&&(B=x),(dt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=dt}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:t,selectionRange:a},Wl=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Xt=fr(a.type,c);t=s.getSnapshotBeforeUpdate(Xt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(se){Ie(a,a.return,se)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Cf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function F0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),s&4&&ao(5,a);break;case 1:if(Zi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var c=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}s&64&&U0(a),s&512&&ro(a,a.return);break;case 3:if(Zi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mp(t,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&s&4&&P0(a);case 26:case 5:Zi(t,a),n===null&&s&4&&N0(a),s&512&&ro(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),s&4&&H0(t,a);break;case 13:Zi(t,a),s&4&&G0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sv.bind(null,a),Av(t,a))));break;case 22:if(s=a.memoizedState!==null||Yi,!s){n=n!==null&&n.memoizedState!==null||fn,c=Yi;var f=fn;Yi=s,(fn=n)&&!f?Ki(t,a,(a.subtreeFlags&8772)!==0):Zi(t,a),Yi=c,fn=f}break;case 30:break;default:Zi(t,a)}}function I0(t){var n=t.alternate;n!==null&&(t.alternate=null,I0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ns(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Fn=!1;function ji(t,n,a){for(a=a.child;a!==null;)B0(t,n,a),a=a.sibling}function B0(t,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:fn||Ci(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ci(a,n);var s=Je,c=Fn;Na(a.type)&&(Je=a.stateNode,Fn=!1),ji(t,n,a),mo(a.stateNode),Je=s,Fn=c;break;case 5:fn||Ci(a,n);case 6:if(s=Je,c=Fn,Je=null,ji(t,n,a),Je=s,Fn=c,Je!==null)if(Fn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Je!==null&&(Fn?(t=Je,Um(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),as(t)):Um(Je,a.stateNode));break;case 4:s=Je,c=Fn,Je=a.stateNode.containerInfo,Fn=!0,ji(t,n,a),Je=s,Fn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),fn||Aa(4,a,n),ji(t,n,a);break;case 1:fn||(Ci(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&L0(a,n,s)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:fn=(s=fn)||a.memoizedState!==null,ji(t,n,a),fn=s;break;default:ji(t,n,a)}}function H0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{as(t)}catch(a){Ie(n,n.return,a)}}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{as(t)}catch(a){Ie(n,n.return,a)}}function J_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new z0),n;default:throw Error(r(435,t.tag))}}function Tl(t,n){var a=J_(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=ov.bind(null,t,s);s.then(c,c)}})}function In(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Na(E.type)){Je=E.stateNode,Fn=!1;break t}break;case 5:Je=E.stateNode,Fn=!1;break t;case 3:case 4:Je=E.stateNode.containerInfo,Fn=!0;break t}E=E.return}if(Je===null)throw Error(r(160));B0(f,x,c),Je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)V0(n,t),n=n.sibling}var gi=null;function V0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Bn(t),s&4&&(Aa(3,t,t.return),ao(3,t),Aa(5,t,t.return));break;case 1:In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),s&64&&Yi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=gi;if(In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,s,a),f[on]=t,nt(f),s=f;break t;case"link":var x=Vm("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Vm("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,nt(f),s=f}t.stateNode=s}else km(c,t.type,t.stateNode);else t.stateNode=Gm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?km(c,t.type,t.stateNode):Gm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&$u(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),a!==null&&s&4&&$u(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Bn(t),s&512&&(fn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{Ti(c,"")}catch(Xt){Ie(t,t.return,Xt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,$u(t,c,a!==null?a.memoizedProps:c)),s&1024&&(nf=!0);break;case 6:if(In(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Xt){Ie(t,t.return,Xt)}}break;case 3:if(Gl=null,c=gi,gi=Bl(n.containerInfo),In(n,t),gi=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(Xt){Ie(t,t.return,Xt)}nf&&(nf=!1,k0(t));break;case 4:s=gi,gi=Bl(t.stateNode.containerInfo),In(n,t),Bn(t),gi=s;break;case 12:In(n,t),Bn(t);break;case 31:In(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 13:In(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=Yi,xt=fn;if(Yi=et||c,fn=xt||B,In(n,t),fn=xt,Yi=et,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Yi||fn||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=B.stateNode;var vt=B.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;E.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Xt){Ie(B,B.return,Xt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Xt){Ie(B,B.return,Xt)}}}else if(n.tag===18){if(a===null){B=n;try{var dt=B.stateNode;c?Lm(dt,!0):Lm(B.stateNode,!1)}catch(Xt){Ie(B,B.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Tl(t,a))));break;case 19:In(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 30:break;case 21:break;default:In(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(O0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(t);El(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ti(x,""),a.flags&=-33);var E=tf(t);El(t,E,x);break;case 3:case 4:var B=a.stateNode.containerInfo,et=tf(t);ef(t,et,B);break;default:throw Error(r(161))}}catch(xt){Ie(t,t.return,xt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function k0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;k0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),dr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),dr(n);break;case 27:mo(n.stateNode);case 26:case 5:Ci(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Ki(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),ao(4,f);break;case 1:if(Ki(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){Ie(s,s.return,et)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Sp(B[c],E)}catch(et){Ie(s,s.return,et)}}a&&x&64&&U0(f),ro(f,f.return);break;case 27:P0(f);case 26:case 5:Ki(c,f,a),a&&s===null&&x&4&&N0(f),ro(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&x&4&&H0(c,f);break;case 13:Ki(c,f,a),a&&x&4&&G0(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),ro(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function _i(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)X0(t,n,a,s),n=n.sibling}function X0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,s),c&2048&&ao(9,n);break;case 1:_i(t,n,a,s);break;case 3:_i(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(c&2048){_i(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ie(n,n.return,B)}}else _i(t,n,a,s);break;case 31:_i(t,n,a,s);break;case 13:_i(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?_i(t,n,a,s):so(t,n):f._visibility&2?_i(t,n,a,s):(f._visibility|=2,Yr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(x,n);break;case 24:_i(t,n,a,s),c&2048&&rf(n.alternate,n);break;default:_i(t,n,a,s)}}function Yr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,B=s,et=x.flags;switch(x.tag){case 0:case 11:case 15:Yr(f,x,E,B,c),ao(8,x);break;case 23:break;case 22:var xt=x.stateNode;x.memoizedState!==null?xt._visibility&2?Yr(f,x,E,B,c):so(f,x):(xt._visibility|=2,Yr(f,x,E,B,c)),c&&et&2048&&af(x.alternate,x);break;case 24:Yr(f,x,E,B,c),c&&et&2048&&rf(x.alternate,x);break;default:Yr(f,x,E,B,c)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:so(a,s),c&2048&&af(s.alternate,s);break;case 24:so(a,s),c&2048&&rf(s.alternate,s);break;default:so(a,s)}n=n.sibling}}var oo=8192;function jr(t,n,a){if(t.subtreeFlags&oo)for(t=t.child;t!==null;)W0(t,n,a),t=t.sibling}function W0(t,n,a){switch(t.tag){case 26:jr(t,n,a),t.flags&oo&&t.memoizedState!==null&&Iv(a,gi,t.memoizedState,t.memoizedProps);break;case 5:jr(t,n,a);break;case 3:case 4:var s=gi;gi=Bl(t.stateNode.containerInfo),jr(t,n,a),gi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=oo,oo=16777216,jr(t,n,a),oo=s):jr(t,n,a));break;default:jr(t,n,a)}}function q0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,j0(s,t)}q0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Y0(t),t=t.sibling}function Y0(t){switch(t.tag){case 0:case 11:case 15:lo(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:lo(t);break;case 12:lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):lo(t);break;default:lo(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,j0(s,t)}q0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function j0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(I0(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}var $_={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},tv=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,Se=null,ye=0,Fe=0,Qn=null,Ra=!1,Zr=!1,sf=!1,Qi=0,tn=0,Ca=0,hr=0,of=0,Jn=0,Kr=0,co=null,Hn=null,lf=!1,Rl=0,Z0=0,Cl=1/0,wl=null,wa=null,xn=0,Da=null,Qr=null,Ji=0,cf=0,uf=null,K0=null,uo=0,ff=null;function $n(){return(Pe&2)!==0&&ye!==0?ye&-ye:O.T!==null?gf():Us()}function Q0(){if(Jn===0)if((ye&536870912)===0||Ae){var t=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Gn(t,n,a){(t===Ye&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),Ua(t,ye,Jn,!1)),wn(t,a),((Pe&2)===0||t!==Ye)&&(t===Ye&&((Pe&2)===0&&(hr|=a),tn===4&&Ua(t,ye,Jn,!1)),wi(t))}function J0(t,n,a){if((Pe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Vt(t,n),c=s?iv(t,n):hf(t,n,!0),f=s;do{if(c===0){Zr&&!s&&Ua(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ev(a)){c=hf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=co;var B=E.current.memoizedState.isDehydrated;if(B&&(Jr(E,x).flags|=256),x=hf(E,x,!1),x!==2){if(sf&&!B){E.errorRecoveryDisabledLanes|=f,hr|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Jr(t,0),Ua(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(s,n,Jn,!Ra);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Rl+300-b(),10<c)){if(Ua(s,n,Jn,!Ra),St(s,0,!0)!==0)break t;Ji=n,s.timeoutHandle=wm($0.bind(null,s,a,Hn,wl,lf,n,Jn,hr,Kr,Ra,f,"Throttled",-0,0),c);break t}$0(s,a,Hn,wl,lf,n,Jn,hr,Kr,Ra,f,null,-0,0)}}break}while(!0);wi(t)}function $0(t,n,a,s,c,f,x,E,B,et,xt,vt,it,dt){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},W0(n,f,vt);var Xt=(f&62914560)===f?Rl-b():(f&4194048)===f?Z0-b():0;if(Xt=Bv(vt,Xt),Xt!==null){Ji=f,t.cancelPendingCommit=Xt(om.bind(null,t,n,f,a,s,c,x,E,B,xt,vt,null,it,dt)),Ua(t,f,x,!et);return}}om(t,n,f,a,s,c,x,E,B)}function ev(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(t,n,a,s){n&=~of,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Wt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Go(t,a,n)}function Dl(){return(Pe&6)===0?(fo(0),!1):!0}function df(){if(Se!==null){if(Fe===0)var t=Se.return;else t=Se,Gi=ar=null,Ru(t),Vr=null,Ys=0,t=Se;for(;t!==null;)D0(t.alternate,t),t=t.return;Se=null}}function Jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Mv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,df(),Ye=t,Se=a=Bi(t.current,null),ye=n,Fe=0,Qn=null,Ra=!1,Zr=Vt(t,n),sf=!1,Kr=Jn=of=hr=Ca=tn=0,Hn=co=null,lf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Wt(s),f=1<<c;n|=t[c],s&=~f}return Qi=n,Qo(),a}function tm(t,n){he=null,O.H=eo,n===Gr||n===rl?(n=xp(),Fe=3):n===mu?(n=xp(),Fe=4):Fe=n===ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Se===null&&(tn=1,vl(t,ri(n,t.current)))}function em(){var t=Zn.current;return t===null?!0:(ye&4194048)===ye?ci===null:(ye&62914560)===ye||(ye&536870912)!==0?t===ci:!1}function nm(){var t=O.H;return O.H=eo,t===null?eo:t}function im(){var t=O.A;return O.A=$_,t}function Ul(){tn=4,Ra||(ye&4194048)!==ye&&Zn.current!==null||(Zr=!0),(Ca&134217727)===0&&(hr&134217727)===0||Ye===null||Ua(Ye,ye,Jn,!1)}function hf(t,n,a){var s=Pe;Pe|=2;var c=nm(),f=im();(Ye!==t||ye!==n)&&(wl=null,Jr(t,n)),n=!1;var x=tn;t:do try{if(Fe!==0&&Se!==null){var E=Se,B=Qn;switch(Fe){case 8:df(),x=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var et=Fe;if(Fe=0,Qn=null,$r(t,E,B,et),a&&Zr){x=0;break t}break;default:et=Fe,Fe=0,Qn=null,$r(t,E,B,et)}}nv(),x=tn;break}catch(xt){tm(t,xt)}while(!0);return n&&t.shellSuspendCounter++,Gi=ar=null,Pe=s,O.H=c,O.A=f,Se===null&&(Ye=null,ye=0,Qo()),x}function nv(){for(;Se!==null;)am(Se)}function iv(t,n){var a=Pe;Pe|=2;var s=nm(),c=im();Ye!==t||ye!==n?(wl=null,Cl=b()+500,Jr(t,n)):Zr=Vt(t,n);t:do try{if(Fe!==0&&Se!==null){n=Se;var f=Qn;e:switch(Fe){case 1:Fe=0,Qn=null,$r(t,n,f,1);break;case 2:case 9:if(pp(f)){Fe=0,Qn=null,rm(n);break}n=function(){Fe!==2&&Fe!==9||Ye!==t||(Fe=7),wi(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:pp(f)?(Fe=0,Qn=null,rm(n)):(Fe=0,Qn=null,$r(t,n,f,7));break;case 5:var x=null;switch(Se.tag){case 26:x=Se.memoizedState;case 5:case 27:var E=Se;if(x?Xm(x):E.stateNode.complete){Fe=0,Qn=null;var B=E.sibling;if(B!==null)Se=B;else{var et=E.return;et!==null?(Se=et,Ll(et)):Se=null}break e}}Fe=0,Qn=null,$r(t,n,f,5);break;case 6:Fe=0,Qn=null,$r(t,n,f,6);break;case 8:df(),tn=6;break t;default:throw Error(r(462))}}av();break}catch(xt){tm(t,xt)}while(!0);return Gi=ar=null,O.H=s,O.A=c,Pe=a,Se!==null?0:(Ye=null,ye=0,Qo(),tn)}function av(){for(;Se!==null&&!ie();)am(Se)}function am(t){var n=C0(t.alternate,t,Qi);t.memoizedProps=t.pendingProps,n===null?Ll(t):Se=n}function rm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=y0(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=y0(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Ru(n);default:D0(a,n),n=Se=ip(n,Qi),n=C0(a,n,Qi)}t.memoizedProps=t.pendingProps,n===null?Ll(t):Se=n}function $r(t,n,a,s){Gi=ar=null,Ru(n),Vr=null,Ys=0;var c=n.return;try{if(q_(t,c,n,a,ye)){tn=1,vl(t,ri(a,t.current)),Se=null;return}}catch(f){if(c!==null)throw Se=c,f;tn=1,vl(t,ri(a,t.current)),Se=null;return}n.flags&32768?(Ae||s===1?t=!0:Zr||(ye&536870912)!==0?t=!1:(Ra=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),sm(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){sm(n,Ra);return}t=n.return;var a=Z_(n.alternate,n,Qi);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);tn===0&&(tn=5)}function sm(t,n){do{var a=K_(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);tn=6,Se=null}function om(t,n,a,s,c,f,x,E,B){t.cancelPendingCommit=null;do Nl();while(xn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,Wn(t,a,f,x,E,B),t===Ye&&(Se=Ye=null,ye=0),Qr=n,Da=t,Ji=a,cf=f,uf=c,K0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lv(ht,function(){return dm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=G.p,G.p=2,x=Pe,Pe|=4;try{Q_(t,n,a)}finally{Pe=x,G.p=c,O.T=s}}xn=1,lm(),cm(),um()}}function lm(){if(xn===1){xn=0;var t=Da,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=G.p;G.p=2;var c=Pe;Pe|=4;try{V0(n,t);var f=Tf,x=jh(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Yh(E.ownerDocument.documentElement,E)){if(B!==null&&Zc(E)){var et=B.start,xt=B.end;if(xt===void 0&&(xt=et),"selectionStart"in E)E.selectionStart=et,E.selectionEnd=Math.min(xt,E.value.length);else{var vt=E.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var dt=it.getSelection(),Xt=E.textContent.length,se=Math.min(B.start,Xt),ke=B.end===void 0?se:Math.min(B.end,Xt);!dt.extend&&se>ke&&(x=ke,ke=se,se=x);var Z=qh(E,se),k=qh(E,ke);if(Z&&k&&(dt.rangeCount!==1||dt.anchorNode!==Z.node||dt.anchorOffset!==Z.offset||dt.focusNode!==k.node||dt.focusOffset!==k.offset)){var tt=vt.createRange();tt.setStart(Z.node,Z.offset),dt.removeAllRanges(),se>ke?(dt.addRange(tt),dt.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),dt.addRange(tt))}}}}for(vt=[],dt=E;dt=dt.parentNode;)dt.nodeType===1&&vt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<vt.length;E++){var gt=vt[E];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Wl=!!Ef,Tf=Ef=null}finally{Pe=c,G.p=s,O.T=a}}t.current=n,xn=2}}function cm(){if(xn===2){xn=0;var t=Da,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=G.p;G.p=2;var c=Pe;Pe|=4;try{F0(t,n.alternate,n)}finally{Pe=c,G.p=s,O.T=a}}xn=3}}function um(){if(xn===4||xn===3){xn=0,L();var t=Da,n=Qr,a=Ji,s=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Qr=Da=null,fm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(wa=null),Ka(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=G.p,G.p=2,O.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{O.T=n,G.p=c}}(Ji&3)!==0&&Nl(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===ff?uo++:(uo=0,ff=t):uo=0,fo(0)}}function fm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Nl(){return lm(),cm(),um(),dm()}function dm(){if(xn!==5)return!1;var t=Da,n=cf;cf=0;var a=Ka(Ji),s=O.T,c=G.p;try{G.p=32>a?32:a,O.T=null,a=uf,uf=null;var f=Da,x=Ji;if(xn=0,Qr=Da=null,Ji=0,(Pe&6)!==0)throw Error(r(331));var E=Pe;if(Pe|=4,Y0(f.current),X0(f,f.current,x,a),Pe=E,fo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{G.p=c,O.T=s,fm(t,n)}}function hm(t,n,a){n=ri(a,n),n=Vu(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(wn(t,2),wi(t))}function Ie(t,n,a){if(t.tag===3)hm(t,t,a);else for(;n!==null;){if(n.tag===3){hm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))){t=ri(a,t),a=p0(2),s=ba(n,a,2),s!==null&&(m0(a,s,n,t),wn(s,2),wi(s));break}}n=n.return}}function pf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new tv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(sf=!0,c.add(a),t=rv.bind(null,t,n,a),n.then(t,t))}function rv(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>b()-Rl?(Pe&2)===0&&Jr(t,0):of|=a,Kr===ye&&(Kr=0)),wi(t)}function pm(t,n){n===0&&(n=He()),t=er(t,n),t!==null&&(wn(t,n),wi(t))}function sv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),pm(t,a)}function ov(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),pm(t,a)}function lv(t,n){return _e(t,n)}var Ol=null,ts=null,mf=!1,Pl=!1,xf=!1,La=0;function wi(t){t!==ts&&t.next===null&&(ts===null?Ol=ts=t:ts=ts.next=t),Pl=!0,mf||(mf=!0,uv())}function fo(t,n){if(!xf&&Pl){xf=!0;do for(var a=!1,s=Ol;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Wt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_m(s,f))}else f=ye,f=St(s,s===Ye?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Vt(s,f)||(a=!0,_m(s,f));s=s.next}while(a);xf=!1}}function cv(){mm()}function mm(){Pl=mf=!1;var t=0;La!==0&&Sv()&&(t=La);for(var n=b(),a=null,s=Ol;s!==null;){var c=s.next,f=xm(s,n);f===0?(s.next=null,a===null?Ol=c:a.next=c,c===null&&(ts=a)):(a=s,(t!==0||(f&3)!==0)&&(Pl=!0)),s=c}xn!==0&&xn!==5||fo(t),La!==0&&(La=0)}function xm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Wt(f),E=1<<x,B=c[x];B===-1?((E&a)===0||(E&s)!==0)&&(c[x]=ue(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ye,a=ye,a=St(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Gt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Vt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Gt(s),Ka(a)){case 2:case 8:a=yt;break;case 32:a=ht;break;case 268435456:a=Ut;break;default:a=ht}return s=gm.bind(null,t),a=_e(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Gt(s),t.callbackPriority=2,t.callbackNode=null,2}function gm(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var s=ye;return s=St(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(J0(t,s,n),xm(t,b()),t.callbackNode!=null&&t.callbackNode===a?gm.bind(null,t):null)}function _m(t,n){if(Nl())return null;J0(t,n,!0)}function uv(){yv(function(){(Pe&6)!==0?_e(_t,cv):mm()})}function gf(){if(La===0){var t=Br;t===0&&(t=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),La=t}return La}function vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function Sm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function fv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=vm((c[pn]||null).action),x=s.submitter;x&&(n=(n=x[pn]||null)?vm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Yo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(La!==0){var B=x?Sm(c,x):new FormData(c);zu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=x?Sm(c,x):new FormData(c),zu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var _f=0;_f<$c.length;_f++){var vf=$c[_f],dv=vf.toLowerCase(),hv=vf[0].toUpperCase()+vf.slice(1);xi(dv,"on"+hv)}xi(Qh,"onAnimationEnd"),xi(Jh,"onAnimationIteration"),xi($h,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(w_,"onTransitionRun"),xi(D_,"onTransitionStart"),xi(U_,"onTransitionCancel"),xi(tp,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function Mm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],B=E.instance,et=E.currentTarget;if(E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=et;try{f(c)}catch(xt){Ko(xt)}c.currentTarget=null,f=B}else for(x=0;x<s.length;x++){if(E=s[x],B=E.instance,et=E.currentTarget,E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=et;try{f(c)}catch(xt){Ko(xt)}c.currentTarget=null,f=B}}}}function Me(t,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var s=t+"__bubble";a.has(s)||(ym(n,t,2,!1),a.add(s))}function Sf(t,n,a){var s=0;n&&(s|=4),ym(a,t,s,n)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Mf(t){if(!t[zl]){t[zl]=!0,K.forEach(function(a){a!=="selectionchange"&&(pv.has(a)||Sf(a,!1,t),Sf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zl]||(n[zl]=!0,Sf("selectionchange",!1,n))}}function ym(t,n,a,s){switch(Qm(n)){case 2:var c=Vv;break;case 8:c=kv;break;default:c=zf}a=c.bind(null,n,a,t),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function yf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=pa(E),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){s=f=x;continue t}E=E.parentNode}}s=s.return}Rh(function(){var et=f,xt=Ic(a),vt=[];t:{var it=ep.get(t);if(it!==void 0){var dt=Yo,Xt=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":dt=o_;break;case"focusin":Xt="focus",dt=Xc;break;case"focusout":Xt="blur",dt=Xc;break;case"beforeblur":case"afterblur":dt=Xc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=u_;break;case Qh:case Jh:case $h:dt=Jg;break;case tp:dt=d_;break;case"scroll":case"scrollend":dt=Yg;break;case"wheel":dt=p_;break;case"copy":case"cut":case"paste":dt=t_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Lh;break;case"toggle":case"beforetoggle":dt=x_}var se=(n&4)!==0,ke=!se&&(t==="scroll"||t==="scrollend"),Z=se?it!==null?it+"Capture":null:it;se=[];for(var k=et,tt;k!==null;){var gt=k;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||Z===null||(gt=Os(k,Z),gt!=null&&se.push(po(k,gt,tt))),ke)break;k=k.return}0<se.length&&(it=new dt(it,Xt,null,a,xt),vt.push({event:it,listeners:se}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",dt=t==="mouseout"||t==="pointerout",it&&a!==Fc&&(Xt=a.relatedTarget||a.fromElement)&&(pa(Xt)||Xt[Oi]))break t;if((dt||it)&&(it=xt.window===xt?xt:(it=xt.ownerDocument)?it.defaultView||it.parentWindow:window,dt?(Xt=a.relatedTarget||a.toElement,dt=et,Xt=Xt?pa(Xt):null,Xt!==null&&(ke=u(Xt),se=Xt.tag,Xt!==ke||se!==5&&se!==27&&se!==6)&&(Xt=null)):(dt=null,Xt=et),dt!==Xt)){if(se=Dh,gt="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(se=Lh,gt="onPointerLeave",Z="onPointerEnter",k="pointer"),ke=dt==null?it:j(dt),tt=Xt==null?it:j(Xt),it=new se(gt,k+"leave",dt,a,xt),it.target=ke,it.relatedTarget=tt,gt=null,pa(xt)===et&&(se=new se(Z,k+"enter",Xt,a,xt),se.target=tt,se.relatedTarget=ke,gt=se),ke=gt,dt&&Xt)e:{for(se=mv,Z=dt,k=Xt,tt=0,gt=Z;gt;gt=se(gt))tt++;gt=0;for(var $t=k;$t;$t=se($t))gt++;for(;0<tt-gt;)Z=se(Z),tt--;for(;0<gt-tt;)k=se(k),gt--;for(;tt--;){if(Z===k||k!==null&&Z===k.alternate){se=Z;break e}Z=se(Z),k=se(k)}se=null}else se=null;dt!==null&&bm(vt,it,dt,se,!1),Xt!==null&&ke!==null&&bm(vt,ke,Xt,se,!0)}}t:{if(it=et?j(et):window,dt=it.nodeName&&it.nodeName.toLowerCase(),dt==="select"||dt==="input"&&it.type==="file")var Le=Hh;else if(Ih(it))if(Gh)Le=A_;else{Le=E_;var qt=b_}else dt=it.nodeName,!dt||dt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&zc(et.elementType)&&(Le=Hh):Le=T_;if(Le&&(Le=Le(t,et))){Bh(vt,Le,a,xt);break t}qt&&qt(t,it,et),t==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&Sn(it,"number",it.value)}switch(qt=et?j(et):window,t){case"focusin":(Ih(qt)||qt.contentEditable==="true")&&(Ur=qt,Kc=et,Vs=null);break;case"focusout":Vs=Kc=Ur=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Zh(vt,a,xt);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":Zh(vt,a,xt)}var xe;if(qc)t:{switch(t){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Dr?zh(t,a)&&(be="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(Nh&&a.locale!=="ko"&&(Dr||be!=="onCompositionStart"?be==="onCompositionEnd"&&Dr&&(xe=Ch()):(xa=xt,Gc="value"in xa?xa.value:xa.textContent,Dr=!0)),qt=Fl(et,be),0<qt.length&&(be=new Uh(be,t,null,a,xt),vt.push({event:be,listeners:qt}),xe?be.data=xe:(xe=Fh(a),xe!==null&&(be.data=xe)))),(xe=__?v_(t,a):S_(t,a))&&(be=Fl(et,"onBeforeInput"),0<be.length&&(qt=new Uh("onBeforeInput","beforeinput",null,a,xt),vt.push({event:qt,listeners:be}),qt.data=xe)),fv(vt,t,et,a,xt)}Mm(vt,n)})}function po(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(t,a),c!=null&&s.unshift(po(t,c,f)),c=Os(t,n),c!=null&&s.push(po(t,c,f))),t.tag===3)return s;t=t.return}return[]}function mv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,B=E.alternate,et=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||et===null||(B=et,c?(et=Os(a,f),et!=null&&x.unshift(po(a,et,B))):c||(et=Os(a,f),et!=null&&x.push(po(a,et,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var xv=/\r\n?/g,gv=/\u0000|\uFFFD/g;function Em(t){return(typeof t=="string"?t:""+t).replace(xv,`
`).replace(gv,"")}function Tm(t,n){return n=Em(n),Em(t)===n}function Ve(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ti(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ti(t,""+s);break;case"className":we(t,"class",s);break;case"tabIndex":we(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":we(t,a,s);break;case"style":Th(t,s,f);break;case"data":if(n!=="object"){we(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",c.name,c,null),Ve(t,n,"formEncType",c.formEncType,c,null),Ve(t,n,"formMethod",c.formMethod,c,null),Ve(t,n,"formTarget",c.formTarget,c,null)):(Ve(t,n,"encType",c.encType,c,null),Ve(t,n,"method",c.method,c,null),Ve(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Fi);break;case"onScroll":s!=null&&Me("scroll",t);break;case"onScrollEnd":s!=null&&Me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Me("beforetoggle",t),Me("toggle",t),me(t,"popover",s);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":me(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wg.get(a)||a,me(t,a,s))}}function bf(t,n,a,s,c,f){switch(a){case"style":Th(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ti(t,s):(typeof s=="number"||typeof s=="bigint")&&Ti(t,""+s);break;case"onScroll":s!=null&&Me("scroll",t);break;case"onScrollEnd":s!=null&&Me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):me(t,a,s)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,f,x,a,null)}}c&&Ve(t,n,"srcSet",a.srcSet,a,null),s&&Ve(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var E=f=x=c=null,B=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var xt=a[s];if(xt!=null)switch(s){case"name":c=xt;break;case"type":x=xt;break;case"checked":B=xt;break;case"defaultChecked":et=xt;break;case"value":f=xt;break;case"defaultValue":E=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:Ve(t,n,s,xt,a,null)}}Ze(t,f,E,B,et,x,c,!1);return;case"select":Me("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ve(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!s,n!=null?mn(t,!!s,n,!1):a!=null&&mn(t,!!s,a,!0);return;case"textarea":Me("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ve(t,n,x,E,a,null)}En(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ve(t,n,B,s,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(s=0;s<ho.length;s++)Me(ho[s],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(t,n,et,s,a,null)}return;default:if(zc(n)){for(xt in a)a.hasOwnProperty(xt)&&(s=a[xt],s!==void 0&&bf(t,n,xt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ve(t,n,E,s,a,null))}function _v(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,B=null,et=null,xt=null;for(dt in a){var vt=a[dt];if(a.hasOwnProperty(dt)&&vt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":B=vt;default:s.hasOwnProperty(dt)||Ve(t,n,dt,null,s,vt)}}for(var it in s){var dt=s[it];if(vt=a[it],s.hasOwnProperty(it)&&(dt!=null||vt!=null))switch(it){case"type":f=dt;break;case"name":c=dt;break;case"checked":et=dt;break;case"defaultChecked":xt=dt;break;case"value":x=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:dt!==vt&&Ve(t,n,it,dt,s,vt)}}Pi(t,x,E,B,et,xt,f,c);return;case"select":dt=x=E=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":dt=B;default:s.hasOwnProperty(f)||Ve(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":it=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==B&&Ve(t,n,c,f,s,B)}n=E,a=x,s=dt,it!=null?mn(t,!!a,it,!1):!!s!=!!a&&(n!=null?mn(t,!!a,n,!0):mn(t,!!a,a?[]:"",!1));return;case"textarea":dt=it=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ve(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":it=c;break;case"defaultValue":dt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ve(t,n,x,c,s,f)}Mn(t,it,dt);return;case"option":for(var Xt in a)if(it=a[Xt],a.hasOwnProperty(Xt)&&it!=null&&!s.hasOwnProperty(Xt))switch(Xt){case"selected":t.selected=!1;break;default:Ve(t,n,Xt,null,s,it)}for(B in s)if(it=s[B],dt=a[B],s.hasOwnProperty(B)&&it!==dt&&(it!=null||dt!=null))switch(B){case"selected":t.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ve(t,n,B,it,s,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)it=a[se],a.hasOwnProperty(se)&&it!=null&&!s.hasOwnProperty(se)&&Ve(t,n,se,null,s,it);for(et in s)if(it=s[et],dt=a[et],s.hasOwnProperty(et)&&it!==dt&&(it!=null||dt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ve(t,n,et,it,s,dt)}return;default:if(zc(n)){for(var ke in a)it=a[ke],a.hasOwnProperty(ke)&&it!==void 0&&!s.hasOwnProperty(ke)&&bf(t,n,ke,void 0,s,it);for(xt in s)it=s[xt],dt=a[xt],!s.hasOwnProperty(xt)||it===dt||it===void 0&&dt===void 0||bf(t,n,xt,it,s,dt);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!s.hasOwnProperty(Z)&&Ve(t,n,Z,null,s,it);for(vt in s)it=s[vt],dt=a[vt],!s.hasOwnProperty(vt)||it===dt||it==null&&dt==null||Ve(t,n,vt,it,s,dt)}function Am(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Am(x)){for(x=0,E=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],et=B.startTime;if(et>E)break;var xt=B.transferSize,vt=B.initiatorType;xt&&Am(vt)&&(B=B.responseEnd,x+=xt*(B<E?1:(E-et)/(B-et)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ef=null,Tf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Rm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Af(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function Sv(){var t=window.event;return t&&t.type==="popstate"?t===Rf?!1:(Rf=t,!0):(Rf=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(t){return Dm.resolve(null).then(t).catch(bv)}:wm;function bv(t){setTimeout(function(){throw t})}function Na(t){return t==="head"}function Um(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),as(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Qa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&mo(t.ownerDocument.body);a=c}while(a);as(n)}function Lm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Cf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),Ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ev(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Tv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Nm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$?"||t.data==="$~"}function Df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Av(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Uf=null;function Om(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Pm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function zm(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ns(t)}var fi=new Map,Fm=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=G.d;G.d={f:Rv,r:Cv,D:wv,C:Dv,L:Uv,m:Lv,X:Ov,S:Nv,M:Pv};function Rv(){var t=$i.f(),n=Dl();return t||n}function Cv(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?t0(n):$i.r(t)}var es=typeof document>"u"?null:document;function Im(t,n,a){var s=es;if(s&&typeof n=="string"&&n){var c=je(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fm.has(c)||(Fm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Cn(n,"link",t),nt(n),s.head.appendChild(n)))}}function wv(t){$i.D(t),Im("dns-prefetch",t,null)}function Dv(t,n){$i.C(t,n),Im("preconnect",t,n)}function Uv(t,n,a){$i.L(t,n,a);var s=es;if(s&&t&&n){var c='link[rel="preload"][as="'+je(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+je(a.imageSizes)+'"]')):c+='[href="'+je(t)+'"]';var f=c;switch(n){case"style":f=ns(t);break;case"script":f=is(t)}fi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(go(f))||(n=s.createElement("link"),Cn(n,"link",t),nt(n),s.head.appendChild(n)))}}function Lv(t,n){$i.m(t,n);var a=es;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+je(s)+'"][href="'+je(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(t)}if(!fi.has(f)&&(t=g({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}s=a.createElement("link"),Cn(s,"link",t),nt(s),a.head.appendChild(s)}}}function Nv(t,n,a){$i.S(t,n,a);var s=es;if(s&&t){var c=ot(s).hoistableStyles,f=ns(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(xo(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Lf(t,a);var B=x=s.createElement("link");nt(B),Cn(B,"link",t),B._p=new Promise(function(et,xt){B.onload=et,B.onerror=xt}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Ov(t,n){$i.X(t,n);var a=es;if(a&&t){var s=ot(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(go(c)),f||(t=g({src:t,async:!0},n),(n=fi.get(c))&&Nf(t,n),f=a.createElement("script"),nt(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Pv(t,n){$i.M(t,n);var a=es;if(a&&t){var s=ot(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(go(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Nf(t,n),f=a.createElement("script"),nt(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bm(t,n,a,s){var c=(c=J.current)?Bl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=ot(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ns(a.href);var f=ot(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(xo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||zv(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=ot(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ns(t){return'href="'+je(t)+'"'}function xo(t){return'link[rel="stylesheet"]['+t+"]"}function Hm(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function zv(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),nt(n),t.head.appendChild(n))}function is(t){return'[src="'+je(t)+'"]'}function go(t){return"script[async]"+t}function Gm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+je(a.href)+'"]');if(s)return n.instance=s,nt(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),nt(s),Cn(s,"style",c),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":c=ns(a.href);var f=t.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;s=Hm(a),(c=fi.get(c))&&Lf(s,c),f=(t.ownerDocument||t).createElement("link"),nt(f);var x=f;return x._p=new Promise(function(E,B){x.onload=E,x.onerror=B}),Cn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=is(a.src),(c=t.querySelector(go(f)))?(n.instance=c,nt(c),c):(s=a,(c=fi.get(f))&&(s=g({},a),Nf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),nt(c),Cn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Vm(t,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Qa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function km(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Fv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Xm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Iv(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ns(s.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,nt(f);return}f=n.ownerDocument||n,s=Hm(s),(c=fi.get(c))&&Lf(s,c),f=f.createElement("link"),nt(f);var x=f;x._p=new Promise(function(E,B){x.onload=E,x.onerror=B}),Cn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function Bv(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Of===0&&(Of=62500*vv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Of?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(Hv,t),kl=null,Vl.call(t))}function Hv(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var s=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Gv(t,n,a,s,c,f,x,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Wm(t,n,a,s,c,f,x,E,B,et,xt,vt){return t=new Gv(t,n,a,x,B,et,xt,vt,E),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=du(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},xu(f),t}function qm(t){return t?(t=Or,t):Or}function Ym(t,n,a,s,c,f){c=qm(c),s.context===null?s.context=c:s.pendingContext=c,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ba(t,s,n),a!==null&&(Gn(a,t,n),Zs(a,t,n))}function jm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pf(t,n){jm(t,n),(t=t.alternate)&&jm(t,n)}function Zm(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&Gn(n,t,67108864),Pf(t,67108864)}}function Km(t){if(t.tag===13||t.tag===31){var n=$n();n=mi(n);var a=er(t,n);a!==null&&Gn(a,t,n),Pf(t,n)}}var Wl=!0;function Vv(t,n,a,s){var c=O.T;O.T=null;var f=G.p;try{G.p=2,zf(t,n,a,s)}finally{G.p=f,O.T=c}}function kv(t,n,a,s){var c=O.T;O.T=null;var f=G.p;try{G.p=8,zf(t,n,a,s)}finally{G.p=f,O.T=c}}function zf(t,n,a,s){if(Wl){var c=Ff(s);if(c===null)yf(t,n,s,ql,a),Jm(t,s);else if(Wv(c,t,n,a,s))s.stopPropagation();else if(Jm(t,s),n&4&&-1<Xv.indexOf(t)){for(;c!==null;){var f=R(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Et(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var B=1<<31-Wt(x);E.entanglements[1]|=B,x&=~B}wi(f),(Pe&6)===0&&(Cl=b()+500,fo(0))}}break;case 31:case 13:E=er(f,2),E!==null&&Gn(E,f,2),Dl(),Pf(f,2)}if(f=Ff(s),f===null&&yf(t,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else yf(t,n,s,null,a)}}function Ff(t){return t=Ic(t),If(t)}var ql=null;function If(t){if(ql=null,t=pa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function Qm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case _t:return 2;case yt:return 8;case ht:case Ft:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Bf=!1,Oa=null,Pa=null,za=null,vo=new Map,So=new Map,Fa=[],Xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jm(t,n){switch(t){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function Mo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=R(n),n!==null&&Zm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Wv(t,n,a,s,c){switch(n){case"focusin":return Oa=Mo(Oa,t,n,a,s,c),!0;case"dragenter":return Pa=Mo(Pa,t,n,a,s,c),!0;case"mouseover":return za=Mo(za,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,Mo(vo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,Mo(So.get(f)||null,t,n,a,s,c)),!0}return!1}function $m(t){var n=pa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ls(t.priority,function(){Km(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ls(t.priority,function(){Km(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ff(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Fc=s,a.target.dispatchEvent(s),Fc=null}else return n=R(a),n!==null&&Zm(n),t.blockedOn=a,!1;n.shift()}return!0}function tx(t,n,a){Yl(t)&&a.delete(n)}function qv(){Bf=!1,Oa!==null&&Yl(Oa)&&(Oa=null),Pa!==null&&Yl(Pa)&&(Pa=null),za!==null&&Yl(za)&&(za=null),vo.forEach(tx),So.forEach(tx)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qv)))}var Zl=null;function ex(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(If(s||a)===null)continue;break}var f=R(a);f!==null&&(t.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function as(t){function n(B){return jl(B,t)}Oa!==null&&jl(Oa,t),Pa!==null&&jl(Pa,t),za!==null&&jl(za,t),vo.forEach(n),So.forEach(n);for(var a=0;a<Fa.length;a++){var s=Fa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)$m(a),a.blockedOn===null&&Fa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[pn]||null;if(typeof f=="function")x||ex(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[pn]||null)E=x.formAction;else if(If(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ex(a)}}}function nx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(t){this._internalRoot=t}Kl.prototype.render=Hf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();Ym(a,s,t,n,null,null)},Kl.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ym(t.current,2,null,t,null,null),Dl(),n[Oi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Us();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,t),a===0&&$m(t)}};var ix=e.version;if(ix!=="19.2.1")throw Error(r(527,ix,"19.2.1"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var Yv={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{bt=Ql.inject(Yv),Tt=Ql}catch{}}return bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=u0,f=f0,x=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Wm(t,1,!1,null,null,a,s,null,c,f,x,nx),t[Oi]=n.current,Mf(t),new Hf(n)},bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=u0,x=f0,E=d0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Wm(t,1,!0,n,a??null,s,c,B,f,x,E,nx),n.context=qm(null),a=n.current,s=$n(),s=mi(s),c=ya(s),c.callback=null,ba(a,c,s),a=s,n.current.lanes=a,wn(n,a),wi(n),t[Oi]=n.current,Mf(t),new Kl(n)},bo.version="19.2.1",bo}var hx;function aS(){if(hx)return kf.exports;hx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kf.exports=iS(),kf.exports}var rS=aS();const sS=dg(rS);var en=(o=>(o.IDLE="IDLE",o.CAPTURING="CAPTURING",o.ANALYZING="ANALYZING",o.GROWING="GROWING",o.ERROR="ERROR",o))(en||{});const oS=({gameState:o,onInteraction:e,onReset:i,analysisText:r,analysisResult:l})=>{const[u,d]=Kt.useState("");Kt.useEffect(()=>{const m=setInterval(()=>{const p="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789∆∇∑∏";let v="";for(let g=0;g<8;g++)v+=p.charAt(Math.floor(Math.random()*p.length));d(v)},100);return()=>clearInterval(m)},[]);const h=()=>!l||!l.polygon||l.polygon.length===0?"":l.polygon.map(p=>`${p.x/10},${p.y/10}`).join(" ");return ce.jsxs("div",{className:"absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4 md:p-8 overflow-hidden",children:[ce.jsxs("div",{className:"flex flex-col items-center justify-center w-full mt-4",children:[ce.jsx("h1",{className:"text-4xl md:text-7xl font-future text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-widest animate-pulse",style:{textShadow:"0 0 10px #FF10F0, 0 0 20px #FF10F0, 0 0 30px #FF10F0",WebkitTextStroke:"1px #FF10F0"},children:"VENI VIDI VICI"}),ce.jsxs("div",{className:"text-xs font-code text-neon-pink/70 mt-2 tracking-[0.5em] drop-shadow-[0_0_5px_rgba(255,20,240,0.8)]",children:["SYSTEM_ID // ",u]})]}),o===en.IDLE&&ce.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-neon-pink/30 opacity-70",children:[ce.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ce.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ce.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ce.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-pink shadow-[0_0_10px_#FF10F0]"}),ce.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-neon-pink/80 font-code text-xs text-center tracking-widest",children:"[ LOCATE TARGET ]"})]}),o===en.GROWING&&l&&ce.jsxs("div",{className:"absolute inset-0 w-full h-full",children:[ce.jsx("svg",{className:"w-full h-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:ce.jsx("polygon",{points:h(),fill:"none",stroke:"#FF10F0",strokeWidth:"0.2",vectorEffect:"non-scaling-stroke",className:"opacity-50 drop-shadow-[0_0_8px_#FF10F0]",children:ce.jsx("animate",{attributeName:"opacity",values:"0.3;0.7;0.3",dur:"3s",repeatCount:"indefinite"})})}),ce.jsx("div",{className:"absolute top-4 left-4 text-[10px] font-code text-neon-pink bg-black/50 px-2 py-1 border border-neon-pink/50",children:"CONTOUR_LOCKED"})]}),o===en.ANALYZING&&ce.jsx("div",{className:"absolute inset-0 bg-black/20 z-10 flex items-center justify-center backdrop-blur-[2px] transition-all duration-500",children:ce.jsxs("div",{className:"text-neon-pink font-code text-2xl animate-pulse bg-black/70 p-6 border border-neon-pink shadow-[0_0_30px_rgba(255,16,240,0.3)]",children:["VENI VIDI VICI QUID SUMUS",ce.jsx("div",{className:"w-full h-1 bg-neon-pink/30 mt-4 overflow-hidden relative",children:ce.jsx("div",{className:"absolute h-full bg-neon-pink w-1/3 animate-[scanline_1.5s_ease-in-out_infinite]"})})]})}),ce.jsxs("div",{className:"flex flex-col items-center justify-end w-full mb-12 pointer-events-auto",children:[ce.jsx("div",{className:"mb-8 font-code text-neon-pink h-6 text-lg tracking-wider drop-shadow-[0_0_8px_#FF10F0]",children:r}),ce.jsxs("button",{onClick:e,disabled:o===en.ANALYZING,className:`group relative px-12 py-5 bg-black/60 overflow-hidden border-2 transition-all active:scale-95 duration-200 shadow-[0_0_20px_rgba(255,16,240,0.2)]
                ${o===en.ANALYZING?"border-gray-500 opacity-50 cursor-not-allowed":"border-neon-pink hover:bg-neon-pink/10 cursor-pointer hover:shadow-[0_0_40px_rgba(255,16,240,0.6)]"}
            `,children:[ce.jsx("div",{className:"absolute inset-0 w-full h-full bg-neon-pink/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"}),ce.jsx("span",{className:"relative font-future text-2xl md:text-3xl text-white tracking-[0.2em] font-bold group-hover:text-white transition-colors drop-shadow-[0_0_5px_#FF10F0]",children:o===en.IDLE||o===en.GROWING?"VICI":"..."})]}),(o===en.GROWING||o===en.ERROR)&&ce.jsx("button",{onClick:i,className:"mt-8 text-xs text-neon-pink/50 hover:text-white font-code tracking-widest border-b border-transparent hover:border-neon-pink transition-colors uppercase",children:"[ REBOOT SYSTEM ]"}),ce.jsx("div",{className:"absolute bottom-10 left-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent hidden md:block"}),ce.jsx("div",{className:"absolute bottom-10 right-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent hidden md:block"})]}),ce.jsx("div",{className:"absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none mix-blend-overlay"})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="181",lS=0,px=1,cS=2,hg=1,uS=2,sa=3,ja=0,kn=1,oa=2,ua=0,vs=1,bd=2,mx=3,xx=4,fS=5,Mr=100,dS=101,hS=102,pS=103,mS=104,xS=200,gS=201,_S=202,vS=203,Ed=204,Td=205,SS=206,MS=207,yS=208,bS=209,ES=210,TS=211,AS=212,RS=213,CS=214,Ad=0,Rd=1,Cd=2,Ms=3,wd=4,Dd=5,Ud=6,Ld=7,pg=0,wS=1,DS=2,Ya=0,US=1,LS=2,NS=3,OS=4,PS=5,zS=6,FS=7,mg=300,ys=301,bs=302,Nd=303,Od=304,wc=306,Pd=1e3,la=1001,zd=1002,ni=1003,IS=1004,Jl=1005,pi=1006,Yf=1007,br=1008,da=1009,xg=1010,gg=1011,Uo=1012,xh=1013,Tr=1014,ca=1015,As=1016,gh=1017,_h=1018,Lo=1020,_g=35902,vg=35899,Sg=1021,Mg=1022,Ei=1023,No=1026,Oo=1027,yg=1028,vh=1029,Sh=1030,Mh=1031,yh=1033,Mc=33776,yc=33777,bc=33778,Ec=33779,Fd=35840,Id=35841,Bd=35842,Hd=35843,Gd=36196,Vd=37492,kd=37496,Xd=37808,Wd=37809,qd=37810,Yd=37811,jd=37812,Zd=37813,Kd=37814,Qd=37815,Jd=37816,$d=37817,th=37818,eh=37819,nh=37820,ih=37821,ah=36492,rh=36494,sh=36495,oh=36283,lh=36284,ch=36285,uh=36286,BS=3200,HS=3201,GS=0,VS=1,Wa="",hi="srgb",Es="srgb-linear",Ac="linear",Xe="srgb",rs=7680,gx=519,kS=512,XS=513,WS=514,bg=515,qS=516,YS=517,jS=518,ZS=519,_x=35044,vx="300 es",Ui=2e3,Rc=2001;function Eg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Cc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=Cc("canvas");return o.style.display="block",o}const Sx={};function Mx(...o){const e="THREE."+o.shift();console.log(e,...o)}function pe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function rn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Po(...o){const e=o.join(" ");e in Sx||(Sx[e]=!0,pe(...o))}function QS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,fh=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Re(o,e,i){return Math.max(e,Math.min(i,o))}function JS(o,e){return(o%e+e)%e}function Zf(o,e,i){return(1-i)*o+i*e}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,i=0){We.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],S=u[d+0],y=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(g!==C||m!==S||p!==y||v!==A){let M=m*S+p*y+v*A+g*C;M<0&&(S=-S,y=-y,A=-A,C=-C,M=-M);let _=1-h;if(M<.9995){const P=Math.acos(M),N=Math.sin(P);_=Math.sin(_*P)/N,h=Math.sin(h*P)/N,m=m*_+S*h,p=p*_+y*h,v=v*_+A*h,g=g*_+C*h}else{m=m*_+S*h,p=p*_+y*h,v=v*_+A*h,g=g*_+C*h;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return e[i]=h*A+v*g+m*y-p*S,e[i+1]=m*A+v*S+p*g-h*y,e[i+2]=p*A+v*y+h*S-m*g,e[i+3]=v*A-h*g-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(u/2),S=m(r/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*v*g+p*y*A,this._y=p*y*g-S*v*A,this._z=p*v*A+S*y*g,this._w=p*v*g-S*y*A;break;case"YXZ":this._x=S*v*g+p*y*A,this._y=p*y*g-S*v*A,this._z=p*v*A-S*y*g,this._w=p*v*g+S*y*A;break;case"ZXY":this._x=S*v*g-p*y*A,this._y=p*y*g+S*v*A,this._z=p*v*A+S*y*g,this._w=p*v*g-S*y*A;break;case"ZYX":this._x=S*v*g-p*y*A,this._y=p*y*g+S*v*A,this._z=p*v*A-S*y*g,this._w=p*v*g+S*y*A;break;case"YZX":this._x=S*v*g+p*y*A,this._y=p*y*g+S*v*A,this._z=p*v*A-S*y*g,this._w=p*v*g-S*y*A;break;case"XZY":this._x=S*v*g-p*y*A,this._y=p*y*g-S*v*A,this._z=p*v*A+S*y*g,this._w=p*v*g+S*y*A;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=r+h+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pt{constructor(e=0,i=0,r=0){pt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(yx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(yx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-u*g,this.z=l+m*g+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new pt,yx=new Fo;class ge{constructor(e,i,r,l,u,d,h,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],S=r[2],y=r[5],A=r[8],C=l[0],M=l[3],_=l[6],P=l[1],N=l[4],H=l[7],X=l[2],U=l[5],z=l[8];return u[0]=d*C+h*P+m*X,u[3]=d*M+h*N+m*U,u[6]=d*_+h*H+m*z,u[1]=p*C+v*P+g*X,u[4]=p*M+v*N+g*U,u[7]=p*_+v*H+g*z,u[2]=S*C+y*P+A*X,u[5]=S*M+y*N+A*U,u[8]=S*_+y*H+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*d-h*p,S=h*m-v*u,y=p*u-d*m,A=i*g+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(l*p-v*r)*C,e[2]=(h*r-l*d)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ge,bx=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Xe&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xe&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Ac:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:e,whitePoint:r,transfer:Ac,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:bx,fromXYZ:Ex,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Oe=$S();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class tM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=Cc("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Cc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=fa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:e.width,height:e.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Jf(l[d].image)):u.push(Jf(l[d]))}else u=Jf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let nM=0;const $f=new pt;class Pn extends Rs{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=la,l=la,u=pi,d=br,h=Ei,m=da,p=Pn.DEFAULT_ANISOTROPY,v=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=zo(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pd:e.x=e.x-Math.floor(e.x);break;case la:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pd:e.y=e.y-Math.floor(e.y);break;case la:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=mg;Pn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],g=m[8],S=m[1],y=m[5],A=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,H=(y+1)/2,X=(_+1)/2,U=(v+S)/4,z=(g+C)/4,Q=(A+M)/4;return N>H&&N>X?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=U/r,u=z/r):H>X?H<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(H),r=U/l,u=Q/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=z/u,l=Q/u),this.set(r,l,u,i),this}let P=Math.sqrt((M-A)*(M-A)+(g-C)*(g-C)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(M-A)/P,this.y=(g-C)/P,this.z=(S-v)/P,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this.w=Re(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this.w=Re(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends Rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Pn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new bh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends iM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Tg extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=new pt(1/0,1/0,1/0),i=new pt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(vi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,vi):vi.fromBufferAttribute(u,d),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),tc.subVectors(this.max,To),os.subVectors(e.a,To),ls.subVectors(e.b,To),cs.subVectors(e.c,To),Ba.subVectors(ls,os),Ha.subVectors(cs,ls),pr.subVectors(os,cs);let i=[0,-Ba.z,Ba.y,0,-Ha.z,Ha.y,0,-pr.z,pr.y,Ba.z,0,-Ba.x,Ha.z,0,-Ha.x,pr.z,0,-pr.x,-Ba.y,Ba.x,0,-Ha.y,Ha.x,0,-pr.y,pr.x,0];return!td(i,os,ls,cs,tc)||(i=[1,0,0,0,1,0,0,0,1],!td(i,os,ls,cs,tc))?!1:(ec.crossVectors(Ba,Ha),i=[ec.x,ec.y,ec.z],td(i,os,ls,cs,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ta=[new pt,new pt,new pt,new pt,new pt,new pt,new pt,new pt],vi=new pt,$l=new Io,os=new pt,ls=new pt,cs=new pt,Ba=new pt,Ha=new pt,pr=new pt,To=new pt,tc=new pt,ec=new pt,mr=new pt;function td(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){mr.fromArray(o,u);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=e.dot(mr),p=i.dot(mr),v=r.dot(mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const rM=new Io,Ao=new pt,ed=new pt;class Dc{constructor(e=new pt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):rM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(ed)),this.expandByPoint(Ao.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ea=new pt,nd=new pt,nc=new pt,Ga=new pt,id=new pt,ic=new pt,ad=new pt;class Ag{constructor(e=new pt,i=new pt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){nd.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Ga.copy(this.origin).sub(nd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=Ga.dot(this.direction),m=-Ga.dot(nc),p=Ga.lengthSq(),v=Math.abs(1-d*d);let g,S,y,A;if(v>0)if(g=d*m-h,S=d*h-m,A=u*v,g>=0)if(S>=-A)if(S<=A){const C=1/v;g*=C,S*=C,y=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(nd).addScaledVector(nc,S),y}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,r,l,u){id.subVectors(i,e),ic.subVectors(r,e),ad.crossVectors(id,ic);let d=this.direction.dot(ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,e);const m=h*this.direction.dot(ic.crossVectors(Ga,ic));if(m<0)return null;const p=h*this.direction.dot(id.cross(Ga));if(p<0||m+p>d)return null;const v=-h*Ga.dot(ad);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,r,l,u,d,h,m,p,v,g,S,y,A,C,M){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,g,S,y,A,C,M)}set(e,i,r,l,u,d,h,m,p,v,g,S,y,A,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=S,_[3]=y,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),u=1/us.setFromMatrixColumn(e,1).length(),d=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*v,y=d*g,A=h*v,C=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=y+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+y*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,y=m*g,A=p*v,C=p*g;i[0]=S+C*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=y*h-A,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,y=m*g,A=p*v,C=p*g;i[0]=S-C*h,i[4]=-d*g,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*v,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,y=d*g,A=h*v,C=h*g;i[0]=m*v,i[4]=A*p-y,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=C-S*g,i[8]=A*g+y,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=y*g+A,i[10]=S-C*g}else if(e.order==="XZY"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+C,i[5]=d*v,i[9]=y*g-A,i[2]=A*g-y,i[6]=h*v,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,oM)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Va.crossVectors(r,ti),Va.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Va.crossVectors(r,ti)),Va.normalize(),ac.crossVectors(ti,Va),l[0]=Va.x,l[4]=ac.x,l[8]=ti.x,l[1]=Va.y,l[5]=ac.y,l[9]=ti.y,l[2]=Va.z,l[6]=ac.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],S=r[9],y=r[13],A=r[2],C=r[6],M=r[10],_=r[14],P=r[3],N=r[7],H=r[11],X=r[15],U=l[0],z=l[4],Q=l[8],w=l[12],T=l[1],I=l[5],Y=l[9],rt=l[13],lt=l[2],at=l[6],O=l[10],G=l[14],W=l[3],ct=l[7],st=l[11],D=l[15];return u[0]=d*U+h*T+m*lt+p*W,u[4]=d*z+h*I+m*at+p*ct,u[8]=d*Q+h*Y+m*O+p*st,u[12]=d*w+h*rt+m*G+p*D,u[1]=v*U+g*T+S*lt+y*W,u[5]=v*z+g*I+S*at+y*ct,u[9]=v*Q+g*Y+S*O+y*st,u[13]=v*w+g*rt+S*G+y*D,u[2]=A*U+C*T+M*lt+_*W,u[6]=A*z+C*I+M*at+_*ct,u[10]=A*Q+C*Y+M*O+_*st,u[14]=A*w+C*rt+M*G+_*D,u[3]=P*U+N*T+H*lt+X*W,u[7]=P*z+N*I+H*at+X*ct,u[11]=P*Q+N*Y+H*O+X*st,u[15]=P*w+N*rt+H*G+X*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],S=e[10],y=e[14],A=e[3],C=e[7],M=e[11],_=e[15];return A*(+u*m*g-l*p*g-u*h*S+r*p*S+l*h*y-r*m*y)+C*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*v-u*m*v)+M*(+i*p*g-i*h*y-u*d*g+r*d*y+u*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*S+l*d*g-r*d*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],S=e[10],y=e[11],A=e[12],C=e[13],M=e[14],_=e[15],P=g*M*p-C*S*p+C*m*y-h*M*y-g*m*_+h*S*_,N=A*S*p-v*M*p-A*m*y+d*M*y+v*m*_-d*S*_,H=v*C*p-A*g*p+A*h*y-d*C*y-v*h*_+d*g*_,X=A*g*m-v*C*m-A*h*S+d*C*S+v*h*M-d*g*M,U=i*P+r*N+l*H+u*X;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/U;return e[0]=P*z,e[1]=(C*S*u-g*M*u-C*l*y+r*M*y+g*l*_-r*S*_)*z,e[2]=(h*M*u-C*m*u+C*l*p-r*M*p-h*l*_+r*m*_)*z,e[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*y-r*m*y)*z,e[4]=N*z,e[5]=(v*M*u-A*S*u+A*l*y-i*M*y-v*l*_+i*S*_)*z,e[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*_-i*m*_)*z,e[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*y+i*m*y)*z,e[8]=H*z,e[9]=(A*g*u-v*C*u-A*r*y+i*C*y+v*r*_-i*g*_)*z,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*_+i*h*_)*z,e[11]=(v*h*u-d*g*u-v*r*p+i*g*p+d*r*y-i*h*y)*z,e[12]=X*z,e[13]=(v*C*l-A*g*l+A*r*S-i*C*S-v*r*M+i*g*M)*z,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*M-i*h*M)*z,e[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*S+i*h*S)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,g=h+h,S=u*p,y=u*v,A=u*g,C=d*v,M=d*g,_=h*g,P=m*p,N=m*v,H=m*g,X=r.x,U=r.y,z=r.z;return l[0]=(1-(C+_))*X,l[1]=(y+H)*X,l[2]=(A-N)*X,l[3]=0,l[4]=(y-H)*U,l[5]=(1-(S+_))*U,l[6]=(M+P)*U,l[7]=0,l[8]=(A+N)*z,l[9]=(M-P)*z,l[10]=(1-(S+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,v=1/d,g=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,v=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),y=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Ui)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Rc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),y=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Ui)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Rc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new pt,Si=new hn,sM=new pt(0,0,0),oM=new pt(1,1,1),Va=new pt,ac=new pt,ti=new pt,Tx=new hn,Ax=new Fo;class ha{constructor(e=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Re(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Tx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lM=0;const Rx=new pt,fs=new Fo,na=new hn,rc=new pt,Ro=new pt,cM=new pt,uM=new Fo,Cx=new pt(1,0,0),wx=new pt(0,1,0),Dx=new pt(0,0,1),Ux={type:"added"},fM={type:"removed"},ds={type:"childadded",child:null},rd={type:"childremoved",child:null};class Xn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new pt,i=new ha,r=new Fo,l=new pt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ge}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Cx,e)}rotateY(e){return this.rotateOnAxis(wx,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,i){return Rx.copy(e).applyQuaternion(this.quaternion),this.position.add(Rx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cx,e)}translateY(e){return this.translateOnAxis(wx,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Ro,rc,this.up):na.lookAt(rc,Ro,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(na),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ux),ds.child=e,this.dispatchEvent(ds),ds.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fM),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),na.multiply(e.parent.matrixWorld)),e.applyMatrix4(na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ux),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,cM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,uM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),g=d(e.shapes),S=d(e.skeletons),y=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new pt(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new pt,ia=new pt,sd=new pt,aa=new pt,hs=new pt,ps=new pt,Lx=new pt,od=new pt,ld=new pt,cd=new pt,ud=new sn,fd=new sn,dd=new sn;class bi{constructor(e=new pt,i=new pt,r=new pt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Mi.subVectors(l,i),ia.subVectors(r,i),sd.subVectors(e,i);const d=Mi.dot(Mi),h=Mi.dot(ia),m=Mi.dot(sd),p=ia.dot(ia),v=ia.dot(sd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,y=(p*m-h*v)*S,A=(d*v-h*m)*S;return u.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return ud.setScalar(0),fd.setScalar(0),dd.setScalar(0),ud.fromBufferAttribute(e,i),fd.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(ud,u.x),d.addScaledVector(fd,u.y),d.addScaledVector(dd,u.z),d}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),ia.subVectors(e,i),Mi.cross(ia).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Mi.cross(ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),od.subVectors(e,r);const m=hs.dot(od),p=ps.dot(od);if(m<=0&&p<=0)return i.copy(r);ld.subVectors(e,l);const v=hs.dot(ld),g=ps.dot(ld);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(hs,d);cd.subVectors(e,u);const y=hs.dot(cd),A=ps.dot(cd);if(A>=0&&y<=A)return i.copy(u);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ps,h);const M=v*A-y*g;if(M<=0&&g-v>=0&&y-A>=0)return Lx.subVectors(u,l),h=(g-v)/(g-v+(y-A)),i.copy(l).addScaledVector(Lx,h);const _=1/(M+C+S);return d=C*_,h=S*_,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},sc={h:0,s:0,l:0};function hd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Oe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Oe.workingColorSpace){if(e=JS(e,1),i=Re(i,0,1),r=Re(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=hd(d,u,e+1/3),this.g=hd(d,u,e),this.b=hd(d,u,e-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&pe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:pe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=Cg[e.toLowerCase()];return r!==void 0?this.setHex(r,i):pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Oe.workingToColorSpace(Ln.copy(this),e),Math.round(Re(Ln.r*255,0,255))*65536+Math.round(Re(Ln.g*255,0,255))*256+Math.round(Re(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Oe.workingColorSpace){Oe.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){Oe.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(sc);const r=Zf(ka.h,sc.h,i),l=Zf(ka.s,sc.s,i),u=Zf(ka.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Be;Be.NAMES=Cg;let dM=0;class Bo extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=vs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){pe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ed&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wg extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new pt,oc=new We;let hM=0;class ii{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=_x,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_x&&(e.usage=this.usage),e}}class Dg extends ii{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ug extends ii{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Er extends ii{constructor(e,i,r){super(new Float32Array(e),i,r)}}let pM=0;const di=new hn,pd=new Xn,ms=new pt,ei=new Io,Co=new Io,bn=new pt;class Ni extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eg(e)?Ug:Dg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ge().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pt(-1/0,-1/0,-1/0),new pt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pt,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Co.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ei.min,Co.min),ei.expandByPoint(bn),bn.addVectors(ei.max,Co.max),ei.expandByPoint(bn)):(ei.expandByPoint(Co.min),ei.expandByPoint(Co.max))}ei.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)bn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(e,p),bn.add(ms)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Q=0;Q<r.count;Q++)h[Q]=new pt,m[Q]=new pt;const p=new pt,v=new pt,g=new pt,S=new We,y=new We,A=new We,C=new pt,M=new pt;function _(Q,w,T){p.fromBufferAttribute(r,Q),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,T),S.fromBufferAttribute(u,Q),y.fromBufferAttribute(u,w),A.fromBufferAttribute(u,T),v.sub(p),g.sub(p),y.sub(S),A.sub(S);const I=1/(y.x*A.y-A.x*y.y);isFinite(I)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(g,-y.y).multiplyScalar(I),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-A.x).multiplyScalar(I),h[Q].add(C),h[w].add(C),h[T].add(C),m[Q].add(M),m[w].add(M),m[T].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let Q=0,w=P.length;Q<w;++Q){const T=P[Q],I=T.start,Y=T.count;for(let rt=I,lt=I+Y;rt<lt;rt+=3)_(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const N=new pt,H=new pt,X=new pt,U=new pt;function z(Q){X.fromBufferAttribute(l,Q),U.copy(X);const w=h[Q];N.copy(w),N.sub(X.multiplyScalar(X.dot(w))).normalize(),H.crossVectors(U,w);const I=H.dot(m[Q])<0?-1:1;d.setXYZW(Q,N.x,N.y,N.z,I)}for(let Q=0,w=P.length;Q<w;++Q){const T=P[Q],I=T.start,Y=T.count;for(let rt=I,lt=I+Y;rt<lt;rt+=3)z(e.getX(rt+0)),z(e.getX(rt+1)),z(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new pt,u=new pt,d=new pt,h=new pt,m=new pt,p=new pt,v=new pt,g=new pt;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,S=new p.constructor(m.length*v);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?y=m[C]*h.data.stride+h.offset:y=m[C]*v;for(let _=0;_<v;_++)S[A++]=p[y++]}return new ii(S,v,g)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ni,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,g=p.length;v<g;v++){const S=p[v],y=e(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],g=u[p];for(let S=0,y=g.length;S<y;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nx=new hn,xr=new Ag,lc=new Dc,Ox=new pt,cc=new pt,uc=new pt,fc=new pt,md=new pt,dc=new pt,Px=new pt,hc=new pt;class Za extends Xn{constructor(e=new Ni,i=new wg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],g=u[m];v!==0&&(md.fromBufferAttribute(g,e),d?dc.addScaledVector(md,v):dc.addScaledVector(md.sub(i),v))}i.add(dc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(lc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(lc,Ox)===null||xr.origin.distanceToSquared(Ox)>(e.far-e.near)**2))&&(Nx.copy(u).invert(),xr.copy(e.ray).applyMatrix4(Nx),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],_=d[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let H=P,X=N;H<X;H+=3){const U=h.getX(H),z=h.getX(H+1),Q=h.getX(H+2);l=pc(this,_,e,r,p,v,g,U,z,Q),l&&(l.faceIndex=Math.floor(H/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const P=h.getX(M),N=h.getX(M+1),H=h.getX(M+2);l=pc(this,d,e,r,p,v,g,P,N,H),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],_=d[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let H=P,X=N;H<X;H+=3){const U=H,z=H+1,Q=H+2;l=pc(this,_,e,r,p,v,g,U,z,Q),l&&(l.faceIndex=Math.floor(H/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const P=M,N=M+1,H=M+2;l=pc(this,d,e,r,p,v,g,P,N,H),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function mM(o,e,i,r,l,u,d,h){let m;if(e.side===kn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===ja,h),m===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function pc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const v=mM(o,e,i,r,cc,uc,fc,Px);if(v){const g=new pt;bi.getBarycoord(Px,cc,uc,fc,g),l&&(v.uv=bi.getInterpolatedAttribute(l,h,m,p,g,new We)),u&&(v.uv1=bi.getInterpolatedAttribute(u,h,m,p,g,new We)),d&&(v.normal=bi.getInterpolatedAttribute(d,h,m,p,g,new pt),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new pt,materialIndex:0};bi.getNormal(cc,uc,fc,S.normal),v.face=S,v.barycoord=g}return v}class Ho extends Ni{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],g=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Er(p,3)),this.setAttribute("normal",new Er(v,3)),this.setAttribute("uv",new Er(g,2));function A(C,M,_,P,N,H,X,U,z,Q,w){const T=H/z,I=X/Q,Y=H/2,rt=X/2,lt=U/2,at=z+1,O=Q+1;let G=0,W=0;const ct=new pt;for(let st=0;st<O;st++){const D=st*I-rt;for(let q=0;q<at;q++){const mt=q*T-Y;ct[C]=mt*P,ct[M]=D*N,ct[_]=lt,p.push(ct.x,ct.y,ct.z),ct[C]=0,ct[M]=0,ct[_]=U>0?1:-1,v.push(ct.x,ct.y,ct.z),g.push(q/z),g.push(1-st/Q),G+=1}}for(let st=0;st<Q;st++)for(let D=0;D<z;D++){const q=S+D+at*st,mt=S+D+at*(st+1),ut=S+(D+1)+at*(st+1),Mt=S+(D+1)+at*st;m.push(q,mt,Mt),m.push(mt,ut,Mt),W+=6}h.addGroup(y,W,w),y+=W,S+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function xM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Lg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const gM={clone:Ts,merge:On};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ng extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new pt,zx=new We,Fx=new We;class yi extends Ng{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,zx,Fx),i.subVectors(Fx,zx)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,gs=1;class SM extends Xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(xs,gs,e,i);l.layers=this.layers,this.add(l);const u=new yi(xs,gs,e,i);u.layers=this.layers,this.add(u);const d=new yi(xs,gs,e,i);d.layers=this.layers,this.add(d);const h=new yi(xs,gs,e,i);h.layers=this.layers,this.add(h);const m=new yi(xs,gs,e,i);m.layers=this.layers,this.add(m);const p=new yi(xs,gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,S,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Og extends Pn{constructor(e=[],i=ys,r,l,u,d,h,m,p,v){super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MM extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Og(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ho(5,5,5),u=new Li({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ua});u.uniforms.tEquirect.value=i;const d=new Za(l,u),h=i.minFilter;return i.minFilter===br&&(i.minFilter=pi),new SM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class mc extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yM={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class bM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class EM extends Pn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=ni,v=ni,g,S){super(null,d,h,m,p,v,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new pt,TM=new pt,AM=new ge;class Sr{constructor(e=new pt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=gd.subVectors(r,i).cross(TM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(gd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||AM.getNormalMatrix(e),l=this.coplanarPoint(gd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Dc,RM=new We(.5,.5),xc=new pt;class Pg{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,d=new Sr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],g=u[5],S=u[6],y=u[7],A=u[8],C=u[9],M=u[10],_=u[11],P=u[12],N=u[13],H=u[14],X=u[15];if(l[0].setComponents(p-d,y-v,_-A,X-P).normalize(),l[1].setComponents(p+d,y+v,_+A,X+P).normalize(),l[2].setComponents(p+h,y+g,_+C,X+N).normalize(),l[3].setComponents(p-h,y-g,_-C,X-N).normalize(),r)l[4].setComponents(m,S,M,H).normalize(),l[5].setComponents(p-m,y-S,_-M,X-H).normalize();else if(l[4].setComponents(p-m,y-S,_-M,X-H).normalize(),i===Ui)l[5].setComponents(p+m,y+S,_+M,X+H).normalize();else if(i===Rc)l[5].setComponents(m,S,M,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=RM.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CM extends Bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ix=new hn,dh=new Ag,gc=new Dc,_c=new pt;class wM extends Xn{constructor(e=new Ni,i=new CM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,e.ray.intersectsSphere(gc)===!1)return;Ix.copy(l).invert(),dh.copy(e.ray).applyMatrix4(Ix);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let A=S,C=y;A<C;A++){const M=p.getX(A);_c.fromBufferAttribute(g,M),Bx(_c,M,m,l,e,i,this)}}else{const S=Math.max(0,d.start),y=Math.min(g.count,d.start+d.count);for(let A=S,C=y;A<C;A++)_c.fromBufferAttribute(g,A),Bx(_c,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Bx(o,e,i,r,l,u,d){const h=dh.distanceSqToPoint(o);if(h<i){const m=new pt;dh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class zg extends Pn{constructor(e,i,r=Tr,l,u,d,h=ni,m=ni,p,v=No,g=1){if(v!==No&&v!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fg extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Uc extends Ni{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,S=i/m,y=[],A=[],C=[],M=[];for(let _=0;_<v;_++){const P=_*S-d;for(let N=0;N<p;N++){const H=N*g-u;A.push(H,-P,0),C.push(0,0,1),M.push(N/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const N=P+p*_,H=P+p*(_+1),X=P+1+p*(_+1),U=P+1+p*_;y.push(N,H,U),y.push(H,X,U)}this.setIndex(y),this.setAttribute("position",new Er(A,3)),this.setAttribute("normal",new Er(C,3)),this.setAttribute("uv",new Er(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}class DM extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UM extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ig extends Ng{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class LM extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Hx(o,e,i,r){const l=NM(r);switch(i){case Sg:return o*e;case yg:return o*e/l.components*l.byteLength;case vh:return o*e/l.components*l.byteLength;case Sh:return o*e*2/l.components*l.byteLength;case Mh:return o*e*2/l.components*l.byteLength;case Mg:return o*e*3/l.components*l.byteLength;case Ei:return o*e*4/l.components*l.byteLength;case yh:return o*e*4/l.components*l.byteLength;case Mc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Id:case Hd:return Math.max(o,16)*Math.max(e,8)/4;case Fd:case Bd:return Math.max(o,8)*Math.max(e,8)/2;case Gd:case Vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case qd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ah:case rh:case sh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case oh:case lh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ch:case uh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function NM(o){switch(o){case da:case xg:return{byteLength:1,components:1};case Uo:case gg:case As:return{byteLength:2,components:1};case gh:case _h:return{byteLength:2,components:4};case Tr:case xh:case ca:return{byteLength:4,components:1};case _g:case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bg(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function OM(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<g.length;y++){const A=g[S],C=g[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,g[S]=C)}g.length=S+1;for(let y=0,A=g.length;y<A;y++){const C=g[y];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var PM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
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
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
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
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ay=`#define PI 3.141592653589793
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
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sy=`vec3 transformedNormal = objectNormal;
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
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,My=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
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
}`,by=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
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
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ly=`PhysicalMaterial material;
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
#endif`,Ny=`uniform sampler2D dfgLUT;
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
}`,Oy=`
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
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
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xy=`#if defined( USE_POINTS_UV )
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
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
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
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
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
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vb=`float getShadowMask() {
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
}`,Sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`#include <common>
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
}`,Gb=`#if DEPTH_PACKING == 3200
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
}`,Vb=`#define DISTANCE
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
}`,kb=`#define DISTANCE
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`uniform float scale;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Kb=`#define LAMBERT
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
}`,Qb=`#define LAMBERT
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
}`,Jb=`#define MATCAP
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
}`,$b=`#define MATCAP
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
}`,t3=`#define NORMAL
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
}`,e3=`#define NORMAL
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
}`,n3=`#define PHONG
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
}`,i3=`#define PHONG
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
}`,a3=`#define STANDARD
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
}`,r3=`#define STANDARD
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
}`,s3=`#define TOON
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
}`,o3=`#define TOON
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
}`,l3=`uniform float size;
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
}`,c3=`uniform vec3 diffuse;
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
}`,u3=`#include <common>
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
}`,f3=`uniform vec3 color;
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
}`,d3=`uniform float rotation;
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
}`,h3=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:PM,alphahash_pars_fragment:zM,alphamap_fragment:FM,alphamap_pars_fragment:IM,alphatest_fragment:BM,alphatest_pars_fragment:HM,aomap_fragment:GM,aomap_pars_fragment:VM,batching_pars_vertex:kM,batching_vertex:XM,begin_vertex:WM,beginnormal_vertex:qM,bsdfs:YM,iridescence_fragment:jM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:$M,color_fragment:ty,color_pars_fragment:ey,color_pars_vertex:ny,color_vertex:iy,common:ay,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ly,emissivemap_fragment:cy,emissivemap_pars_fragment:uy,colorspace_fragment:fy,colorspace_pars_fragment:dy,envmap_fragment:hy,envmap_common_pars_fragment:py,envmap_pars_fragment:my,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Ry,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:vy,fog_fragment:Sy,fog_pars_fragment:My,gradientmap_pars_fragment:yy,lightmap_pars_fragment:by,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:Ty,lights_pars_begin:Ay,lights_toon_fragment:Cy,lights_toon_pars_fragment:wy,lights_phong_fragment:Dy,lights_phong_pars_fragment:Uy,lights_physical_fragment:Ly,lights_physical_pars_fragment:Ny,lights_fragment_begin:Oy,lights_fragment_maps:Py,lights_fragment_end:zy,logdepthbuf_fragment:Fy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:Hy,map_fragment:Gy,map_pars_fragment:Vy,map_particle_fragment:ky,map_particle_pars_fragment:Xy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:qy,morphinstance_vertex:Yy,morphcolor_vertex:jy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Ky,morphtarget_vertex:Qy,normal_fragment_begin:Jy,normal_fragment_maps:$y,normal_pars_fragment:tb,normal_pars_vertex:eb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:sb,iridescence_pars_fragment:ob,opaque_fragment:lb,packing:cb,premultiplied_alpha_fragment:ub,project_vertex:fb,dithering_fragment:db,dithering_pars_fragment:hb,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:xb,shadowmap_pars_vertex:gb,shadowmap_vertex:_b,shadowmask_pars_fragment:vb,skinbase_vertex:Sb,skinning_pars_vertex:Mb,skinning_vertex:yb,skinnormal_vertex:bb,specularmap_fragment:Eb,specularmap_pars_fragment:Tb,tonemapping_fragment:Ab,tonemapping_pars_fragment:Rb,transmission_fragment:Cb,transmission_pars_fragment:wb,uv_pars_fragment:Db,uv_pars_vertex:Ub,uv_vertex:Lb,worldpos_vertex:Nb,background_vert:Ob,background_frag:Pb,backgroundCube_vert:zb,backgroundCube_frag:Fb,cube_vert:Ib,cube_frag:Bb,depth_vert:Hb,depth_frag:Gb,distanceRGBA_vert:Vb,distanceRGBA_frag:kb,equirect_vert:Xb,equirect_frag:Wb,linedashed_vert:qb,linedashed_frag:Yb,meshbasic_vert:jb,meshbasic_frag:Zb,meshlambert_vert:Kb,meshlambert_frag:Qb,meshmatcap_vert:Jb,meshmatcap_frag:$b,meshnormal_vert:t3,meshnormal_frag:e3,meshphong_vert:n3,meshphong_frag:i3,meshphysical_vert:a3,meshphysical_frag:r3,meshtoon_vert:s3,meshtoon_frag:o3,points_vert:l3,points_frag:c3,shadow_vert:u3,shadow_frag:f3,sprite_vert:d3,sprite_frag:h3},zt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Di={basic:{uniforms:On([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:On([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:On([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:On([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:On([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:On([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:On([zt.points,zt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:On([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:On([zt.common,zt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:On([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:On([zt.sprite,zt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:On([zt.common,zt.displacementmap,{referencePosition:{value:new pt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:On([zt.lights,zt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Di.physical={uniforms:On([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const vc={r:0,b:0,g:0},_r=new ha,p3=new hn;function m3(o,e,i,r,l,u,d){const h=new Be(0);let m=u===!0?0:1,p,v,g=null,S=0,y=null;function A(N){let H=N.isScene===!0?N.background:null;return H&&H.isTexture&&(H=(N.backgroundBlurriness>0?i:e).get(H)),H}function C(N){let H=!1;const X=A(N);X===null?_(h,m):X&&X.isColor&&(_(X,1),H=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||H)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,H){const X=A(H);X&&(X.isCubeTexture||X.mapping===wc)?(v===void 0&&(v=new Za(new Ho(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ts(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(U,z,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),_r.copy(H.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(p3.makeRotationFromEuler(_r)),v.material.toneMapped=Oe.getTransfer(X.colorSpace)!==Xe,(g!==X||S!==X.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Za(new Uc(2,2),new Li({name:"BackgroundMaterial",uniforms:Ts(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(X.colorSpace)!==Xe,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||S!==X.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,H){N.getRGB(vc,Lg(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,H,d)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,H=1){h.set(N),m=H,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(h,m)},render:C,addToRenderList:M,dispose:P}}function x3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(T,I,Y,rt,lt){let at=!1;const O=g(rt,Y,I);u!==O&&(u=O,p(u.object)),at=y(T,rt,Y,lt),at&&A(T,rt,Y,lt),lt!==null&&e.update(lt,o.ELEMENT_ARRAY_BUFFER),(at||d)&&(d=!1,H(T,I,Y,rt),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(lt).buffer))}function m(){return o.createVertexArray()}function p(T){return o.bindVertexArray(T)}function v(T){return o.deleteVertexArray(T)}function g(T,I,Y){const rt=Y.wireframe===!0;let lt=r[T.id];lt===void 0&&(lt={},r[T.id]=lt);let at=lt[I.id];at===void 0&&(at={},lt[I.id]=at);let O=at[rt];return O===void 0&&(O=S(m()),at[rt]=O),O}function S(T){const I=[],Y=[],rt=[];for(let lt=0;lt<i;lt++)I[lt]=0,Y[lt]=0,rt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:rt,object:T,attributes:{},index:null}}function y(T,I,Y,rt){const lt=u.attributes,at=I.attributes;let O=0;const G=Y.getAttributes();for(const W in G)if(G[W].location>=0){const st=lt[W];let D=at[W];if(D===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(D=T.instanceColor)),st===void 0||st.attribute!==D||D&&st.data!==D.data)return!0;O++}return u.attributesNum!==O||u.index!==rt}function A(T,I,Y,rt){const lt={},at=I.attributes;let O=0;const G=Y.getAttributes();for(const W in G)if(G[W].location>=0){let st=at[W];st===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(st=T.instanceColor));const D={};D.attribute=st,st&&st.data&&(D.data=st.data),lt[W]=D,O++}u.attributes=lt,u.attributesNum=O,u.index=rt}function C(){const T=u.newAttributes;for(let I=0,Y=T.length;I<Y;I++)T[I]=0}function M(T){_(T,0)}function _(T,I){const Y=u.newAttributes,rt=u.enabledAttributes,lt=u.attributeDivisors;Y[T]=1,rt[T]===0&&(o.enableVertexAttribArray(T),rt[T]=1),lt[T]!==I&&(o.vertexAttribDivisor(T,I),lt[T]=I)}function P(){const T=u.newAttributes,I=u.enabledAttributes;for(let Y=0,rt=I.length;Y<rt;Y++)I[Y]!==T[Y]&&(o.disableVertexAttribArray(Y),I[Y]=0)}function N(T,I,Y,rt,lt,at,O){O===!0?o.vertexAttribIPointer(T,I,Y,lt,at):o.vertexAttribPointer(T,I,Y,rt,lt,at)}function H(T,I,Y,rt){C();const lt=rt.attributes,at=Y.getAttributes(),O=I.defaultAttributeValues;for(const G in at){const W=at[G];if(W.location>=0){let ct=lt[G];if(ct===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(ct=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(ct=T.instanceColor)),ct!==void 0){const st=ct.normalized,D=ct.itemSize,q=e.get(ct);if(q===void 0)continue;const mt=q.buffer,ut=q.type,Mt=q.bytesPerElement,J=ut===o.INT||ut===o.UNSIGNED_INT||ct.gpuType===xh;if(ct.isInterleavedBufferAttribute){const ft=ct.data,At=ft.stride,Pt=ct.offset;if(ft.isInstancedInterleavedBuffer){for(let Nt=0;Nt<W.locationSize;Nt++)_(W.location+Nt,ft.meshPerAttribute);T.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)M(W.location+Nt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Nt=0;Nt<W.locationSize;Nt++)N(W.location+Nt,D/W.locationSize,ut,st,At*Mt,(Pt+D/W.locationSize*Nt)*Mt,J)}else{if(ct.isInstancedBufferAttribute){for(let ft=0;ft<W.locationSize;ft++)_(W.location+ft,ct.meshPerAttribute);T.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ft=0;ft<W.locationSize;ft++)M(W.location+ft);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let ft=0;ft<W.locationSize;ft++)N(W.location+ft,D/W.locationSize,ut,st,D*Mt,D/W.locationSize*ft*Mt,J)}}else if(O!==void 0){const st=O[G];if(st!==void 0)switch(st.length){case 2:o.vertexAttrib2fv(W.location,st);break;case 3:o.vertexAttrib3fv(W.location,st);break;case 4:o.vertexAttrib4fv(W.location,st);break;default:o.vertexAttrib1fv(W.location,st)}}}}P()}function X(){Q();for(const T in r){const I=r[T];for(const Y in I){const rt=I[Y];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete I[Y]}delete r[T]}}function U(T){if(r[T.id]===void 0)return;const I=r[T.id];for(const Y in I){const rt=I[Y];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete I[Y]}delete r[T.id]}function z(T){for(const I in r){const Y=r[I];if(Y[T.id]===void 0)continue;const rt=Y[T.id];for(const lt in rt)v(rt[lt].object),delete rt[lt];delete Y[T.id]}}function Q(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:w,dispose:X,releaseStatesOfGeometry:U,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:M,disableUnusedAttributes:P}}function g3(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let y=0;for(let A=0;A<g;A++)y+=v[A];i.update(y,r,1)}function m(p,v,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)d(p[A],v[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,g);let A=0;for(let C=0;C<g;C++)A+=v[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function _3(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ei&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Q=z===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==da&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ca&&!Q)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(pe("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),H=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:H,vertexTextures:X,maxSamples:U}}function v3(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Sr,h=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||l;return l=S,r=g.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,y){const A=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||A===null||A.length===0||u&&!M)u?v(null):p();else{const P=u?0:r,N=P*4;let H=_.clippingState||null;m.value=H,H=v(A,S,N,y);for(let X=0;X!==N;++X)H[X]=i[X];_.clippingState=H,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,y,A){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const _=y+C*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,H=y;N!==C;++N,H+=4)d.copy(g[N]).applyMatrix4(P,h),d.normal.toArray(M,H),M[H+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function S3(o){let e=new WeakMap;function i(d,h){return h===Nd?d.mapping=ys:h===Od&&(d.mapping=bs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nd||h===Od)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new MM(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const qa=4,Gx=[.125,.215,.35,.446,.526,.582],yr=20,M3=256,wo=new Ig,Vx=new Be;let _d=null,vd=0,Sd=0,Md=!1;const y3=new pt;class kx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=y3}=u;_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,vd,Sd),this._renderer.xr.enabled=Md,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:As,format:Ei,colorSpace:Es,depthBuffer:!1},l=Xx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xx(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b3(u)),this._blurMaterial=T3(u,e,i),this._ggxMaterial=E3(u,e,i)}return l}_compileMaterial(e){const i=new Za(new Ni,e);this._renderer.compile(i,wo)}_sceneToCubeUV(e,i,r,l,u){const m=new yi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Vx),g.toneMapping=Ya,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Za(new Ho,new wg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let _=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,_=!0):(M.color.copy(Vx),_=!0);for(let N=0;N<6;N++){const H=N%3;H===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[N],u.y,u.z)):H===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[N]));const X=this._cubeSize;_s(l,H*X,N>2?X:0,X,X),g.setRenderTarget(l),_&&g.render(C,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;_s(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,wo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),S=.05+p*.95,y=g*S,{_lodMax:A}=this,C=this._sizeLods[r],M=3*C*(r>A-qa?r-A+qa:0),_=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=A-i,_s(u,M,_,3*C,2*C),l.setRenderTarget(u),l.render(h,wo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,_s(e,M,_,3*C,2*C),l.setRenderTarget(e),l.render(h,wo)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*yr-1),C=u/A,M=isFinite(u)?1+Math.floor(v*C):yr;M>yr&&pe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${yr}`);const _=[];let P=0;for(let z=0;z<yr;++z){const Q=z/C,w=Math.exp(-Q*Q/2);_.push(w),z===0?P+=w:z<M&&(P+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/P;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-r;const H=this._sizeLods[l],X=3*H*(l>N-qa?l-N+qa:0),U=4*(this._cubeSize-H);_s(i,X,U,3*H,2*H),m.setRenderTarget(i),m.render(g,wo)}}function b3(o){const e=[],i=[],r=[];let l=o;const u=o-qa+1+Gx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-qa?m=Gx[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,A=6,C=3,M=2,_=1,P=new Float32Array(C*A*y),N=new Float32Array(M*A*y),H=new Float32Array(_*A*y);for(let U=0;U<y;U++){const z=U%3*2/3-1,Q=U>2?0:-1,w=[z,Q,0,z+2/3,Q,0,z+2/3,Q+1,0,z,Q,0,z+2/3,Q+1,0,z,Q+1,0];P.set(w,C*A*U),N.set(S,M*A*U);const T=[U,U,U,U,U,U];H.set(T,_*A*U)}const X=new Ni;X.setAttribute("position",new ii(P,C)),X.setAttribute("uv",new ii(N,M)),X.setAttribute("faceIndex",new ii(H,_)),r.push(new Za(X,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Xx(o,e,i){const r=new Ar(o,e,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _s(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function E3(o,e,i){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function T3(o,e,i){const r=new Float32Array(yr),l=new pt(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lc(),fragmentShader:`

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
	`}function A3(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Nd||m===Od,v=m===ys||m===bs;if(p||v){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new kx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new kx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function R3(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("WebGLRenderer: "+r+" extension not supported."),l}}}function C3(o,e,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,A=g.attributes.position;let C=0;if(y!==null){const P=y.array;C=y.version;for(let N=0,H=P.length;N<H;N+=3){const X=P[N+0],U=P[N+1],z=P[N+2];S.push(X,U,U,z,z,X)}}else if(A!==void 0){const P=A.array;C=A.version;for(let N=0,H=P.length/3-1;N<H;N+=3){const X=N+0,U=N+1,z=N+2;S.push(X,U,U,z,z,X)}}else return;const M=new(Eg(S)?Ug:Dg)(S,1);M.version=C;const _=u.get(g);_&&e.remove(_),u.set(g,M)}function v(g){const S=u.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function w3(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function p(S,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,S*d,A),i.update(y,r,A))}function v(S,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function g(S,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/d,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,C,0,A);let _=0;for(let P=0;P<A;P++)_+=y[P]*C[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function D3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:rn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function U3(o,e,i){const r=new WeakMap,l=new sn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let T=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",T)};var y=T;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let H=0;A===!0&&(H=1),C===!0&&(H=2),M===!0&&(H=3);let X=h.attributes.position.count*H,U=1;X>e.maxTextureSize&&(U=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*U*4*g),Q=new Tg(z,X,U,g);Q.type=ca,Q.needsUpdate=!0;const w=H*4;for(let I=0;I<g;I++){const Y=_[I],rt=P[I],lt=N[I],at=X*U*4*I;for(let O=0;O<Y.count;O++){const G=O*w;A===!0&&(l.fromBufferAttribute(Y,O),z[at+G+0]=l.x,z[at+G+1]=l.y,z[at+G+2]=l.z,z[at+G+3]=0),C===!0&&(l.fromBufferAttribute(rt,O),z[at+G+4]=l.x,z[at+G+5]=l.y,z[at+G+6]=l.z,z[at+G+7]=0),M===!0&&(l.fromBufferAttribute(lt,O),z[at+G+8]=l.x,z[at+G+9]=l.y,z[at+G+10]=l.z,z[at+G+11]=lt.itemSize===4?l.w:1)}}S={count:g,texture:Q,size:new We(X,U)},r.set(h,S),h.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function L3(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Hg=new Pn,Yx=new zg(1,1),Gg=new Tg,Vg=new aM,kg=new Og,jx=[],Zx=[],Kx=new Float32Array(16),Qx=new Float32Array(9),Jx=new Float32Array(4);function Cs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=jx[l];if(u===void 0&&(u=new Float32Array(l),jx[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Nc(o,e){let i=Zx[e];i===void 0&&(i=new Int32Array(e),Zx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function N3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function O3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function P3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function z3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function F3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Jx.set(r),o.uniformMatrix2fv(this.addr,!1,Jx),_n(i,r)}}function I3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Qx.set(r),o.uniformMatrix3fv(this.addr,!1,Qx),_n(i,r)}}function B3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;Kx.set(r),o.uniformMatrix4fv(this.addr,!1,Kx),_n(i,r)}}function H3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function G3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function V3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function k3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function X3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function W3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function q3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function Y3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function j3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yx.compareFunction=bg,u=Yx):u=Hg,i.setTexture2D(e||u,l)}function Z3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Vg,l)}function K3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||kg,l)}function Q3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Gg,l)}function J3(o){switch(o){case 5126:return N3;case 35664:return O3;case 35665:return P3;case 35666:return z3;case 35674:return F3;case 35675:return I3;case 35676:return B3;case 5124:case 35670:return H3;case 35667:case 35671:return G3;case 35668:case 35672:return V3;case 35669:case 35673:return k3;case 5125:return X3;case 36294:return W3;case 36295:return q3;case 36296:return Y3;case 35678:case 36198:case 36298:case 36306:case 35682:return j3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return K3;case 36289:case 36303:case 36311:case 36292:return Q3}}function $3(o,e){o.uniform1fv(this.addr,e)}function t1(o,e){const i=Cs(e,this.size,2);o.uniform2fv(this.addr,i)}function e1(o,e){const i=Cs(e,this.size,3);o.uniform3fv(this.addr,i)}function n1(o,e){const i=Cs(e,this.size,4);o.uniform4fv(this.addr,i)}function i1(o,e){const i=Cs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function a1(o,e){const i=Cs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function r1(o,e){const i=Cs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function s1(o,e){o.uniform1iv(this.addr,e)}function o1(o,e){o.uniform2iv(this.addr,e)}function l1(o,e){o.uniform3iv(this.addr,e)}function c1(o,e){o.uniform4iv(this.addr,e)}function u1(o,e){o.uniform1uiv(this.addr,e)}function f1(o,e){o.uniform2uiv(this.addr,e)}function d1(o,e){o.uniform3uiv(this.addr,e)}function h1(o,e){o.uniform4uiv(this.addr,e)}function p1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Hg,u[d])}function m1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Vg,u[d])}function x1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||kg,u[d])}function g1(o,e,i){const r=this.cache,l=e.length,u=Nc(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),_n(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Gg,u[d])}function _1(o){switch(o){case 5126:return $3;case 35664:return t1;case 35665:return e1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return f1;case 36295:return d1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return g1}}class v1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=J3(i.type)}}class S1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_1(i.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function $x(o,e){o.seq.push(e),o.map[e.id]=e}function y1(o,e,i){const r=o.name,l=r.length;for(yd.lastIndex=0;;){const u=yd.exec(r),d=yd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){$x(i,p===void 0?new v1(h,o,e):new S1(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new M1(h),$x(i,g)),i=g}}}class Tc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);y1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function tg(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const b1=37297;let E1=0;function T1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const eg=new ge;function A1(o){Oe._getMatrix(eg,Oe.workingColorSpace,o);const e=`mat3( ${eg.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ng(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+T1(o.getShaderSource(e),h)}else return u}function R1(o,e){const i=A1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function C1(o,e){let i;switch(e){case US:i="Linear";break;case LS:i="Reinhard";break;case NS:i="Cineon";break;case OS:i="ACESFilmic";break;case zS:i="AgX";break;case FS:i="Neutral";break;case PS:i="Custom";break;default:pe("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new pt;function w1(){Oe.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function U1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function L1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Do(o){return o!==""}function ig(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(o){return o.replace(N1,P1)}const O1=new Map;function P1(o,e){let i=ve[e];if(i===void 0){const r=O1.get(e);if(r!==void 0)i=ve[r],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return hh(i)}const z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(o){return o.replace(z1,F1)}function F1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function sg(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function I1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===hg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===uS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function B1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case bs:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function G1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case pg:e="ENVMAP_BLENDING_MULTIPLY";break;case wS:e="ENVMAP_BLENDING_MIX";break;case DS:e="ENVMAP_BLENDING_ADD";break}return e}function V1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function k1(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=I1(i),p=B1(i),v=H1(i),g=G1(i),S=V1(i),y=D1(i),A=U1(u),C=l.createProgram();let M,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),_.length>0&&(_+=`
`)):(M=[sg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),_=[sg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?ve.tonemapping_pars_fragment:"",i.toneMapping!==Ya?C1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,R1("linearToOutputTexel",i.outputColorSpace),w1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),d=hh(d),d=ig(d,i),d=ag(d,i),h=hh(h),h=ig(h,i),h=ag(h,i),d=rg(d),h=rg(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=P+M+d,H=P+_+h,X=tg(l,l.VERTEX_SHADER,N),U=tg(l,l.FRAGMENT_SHADER,H);l.attachShader(C,X),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(I){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(C)||"",rt=l.getShaderInfoLog(X)||"",lt=l.getShaderInfoLog(U)||"",at=Y.trim(),O=rt.trim(),G=lt.trim();let W=!0,ct=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,U);else{const st=ng(l,X,"vertex"),D=ng(l,U,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+at+`
`+st+`
`+D)}else at!==""?pe("WebGLProgram: Program Info Log:",at):(O===""||G==="")&&(ct=!1);ct&&(I.diagnostics={runnable:W,programLog:at,vertexShader:{log:O,prefix:M},fragmentShader:{log:G,prefix:_}})}l.deleteShader(X),l.deleteShader(U),Q=new Tc(l,C),w=L1(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(C,b1)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=U,this}let X1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new q1(e),i.set(e,r)),r}}class q1{constructor(e){this.id=X1++,this.code=e,this.usedTimes=0}}function Y1(o,e,i,r,l,u,d){const h=new Rg,m=new W1,p=new Set,v=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,T,I,Y,rt){const lt=Y.fog,at=rt.geometry,O=w.isMeshStandardMaterial?Y.environment:null,G=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),W=G&&G.mapping===wc?G.image.height:null,ct=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&pe("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const st=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,D=st!==void 0?st.length:0;let q=0;at.morphAttributes.position!==void 0&&(q=1),at.morphAttributes.normal!==void 0&&(q=2),at.morphAttributes.color!==void 0&&(q=3);let mt,ut,Mt,J;if(ct){const De=Di[ct];mt=De.vertexShader,ut=De.fragmentShader}else mt=w.vertexShader,ut=w.fragmentShader,m.update(w),Mt=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const ft=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Pt=rt.isInstancedMesh===!0,Nt=rt.isBatchedMesh===!0,te=!!w.map,Ce=!!w.matcap,ee=!!G,fe=!!w.aoMap,F=!!w.lightMap,ne=!!w.bumpMap,Qt=!!w.normalMap,Ht=!!w.displacementMap,Dt=!!w.emissiveMap,_e=!!w.metalnessMap,Gt=!!w.roughnessMap,ie=w.anisotropy>0,L=w.clearcoat>0,b=w.dispersion>0,$=w.iridescence>0,_t=w.sheen>0,yt=w.transmission>0,ht=ie&&!!w.anisotropyMap,Ft=L&&!!w.clearcoatMap,Ut=L&&!!w.clearcoatNormalMap,jt=L&&!!w.clearcoatRoughnessMap,Yt=$&&!!w.iridescenceMap,bt=$&&!!w.iridescenceThicknessMap,Tt=_t&&!!w.sheenColorMap,Zt=_t&&!!w.sheenRoughnessMap,Wt=!!w.specularMap,It=!!w.specularColorMap,le=!!w.specularIntensityMap,V=yt&&!!w.transmissionMap,Lt=yt&&!!w.thicknessMap,Ct=!!w.gradientMap,wt=!!w.alphaMap,Et=w.alphaTest>0,St=!!w.alphaHash,Vt=!!w.extensions;let ue=Ya;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ue=o.toneMapping);const He={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:mt,fragmentShader:ut,defines:w.defines,customVertexShaderID:Mt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Nt,batchingColor:Nt&&rt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&rt.instanceColor!==null,instancingMorph:Pt&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:Ce,envMap:ee,envMapMode:ee&&G.mapping,envMapCubeUVHeight:W,aoMap:fe,lightMap:F,bumpMap:ne,normalMap:Qt,displacementMap:S&&Ht,emissiveMap:Dt,normalMapObjectSpace:Qt&&w.normalMapType===VS,normalMapTangentSpace:Qt&&w.normalMapType===GS,metalnessMap:_e,roughnessMap:Gt,anisotropy:ie,anisotropyMap:ht,clearcoat:L,clearcoatMap:Ft,clearcoatNormalMap:Ut,clearcoatRoughnessMap:jt,dispersion:b,iridescence:$,iridescenceMap:Yt,iridescenceThicknessMap:bt,sheen:_t,sheenColorMap:Tt,sheenRoughnessMap:Zt,specularMap:Wt,specularColorMap:It,specularIntensityMap:le,transmission:yt,transmissionMap:V,thicknessMap:Lt,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===vs&&w.alphaToCoverage===!1,alphaMap:wt,alphaTest:Et,alphaHash:St,combine:w.combine,mapUv:te&&C(w.map.channel),aoMapUv:fe&&C(w.aoMap.channel),lightMapUv:F&&C(w.lightMap.channel),bumpMapUv:ne&&C(w.bumpMap.channel),normalMapUv:Qt&&C(w.normalMap.channel),displacementMapUv:Ht&&C(w.displacementMap.channel),emissiveMapUv:Dt&&C(w.emissiveMap.channel),metalnessMapUv:_e&&C(w.metalnessMap.channel),roughnessMapUv:Gt&&C(w.roughnessMap.channel),anisotropyMapUv:ht&&C(w.anisotropyMap.channel),clearcoatMapUv:Ft&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&C(w.sheenRoughnessMap.channel),specularMapUv:Wt&&C(w.specularMap.channel),specularColorMapUv:It&&C(w.specularColorMap.channel),specularIntensityMapUv:le&&C(w.specularIntensityMap.channel),transmissionMapUv:V&&C(w.transmissionMap.channel),thicknessMapUv:Lt&&C(w.thicknessMap.channel),alphaMapUv:wt&&C(w.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Qt||ie),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!at.attributes.uv&&(te||wt),fog:!!lt,useFog:w.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:rt.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&Oe.getTransfer(w.map.colorSpace)===Xe,decodeVideoTextureEmissive:Dt&&w.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(w.emissiveMap.colorSpace)===Xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Vt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&w.extensions.multiDraw===!0||Nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return He.vertexUv1s=p.has(1),He.vertexUv2s=p.has(2),He.vertexUv3s=p.has(3),p.clear(),He}function _(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)T.push(I),T.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(P(T,w),N(T,w),T.push(o.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function P(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function N(w,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),T.batchingColor&&h.enable(21),T.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.reversedDepthBuffer&&h.enable(4),T.skinning&&h.enable(5),T.morphTargets&&h.enable(6),T.morphNormals&&h.enable(7),T.morphColors&&h.enable(8),T.premultipliedAlpha&&h.enable(9),T.shadowMapEnabled&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.decodeVideoTextureEmissive&&h.enable(20),T.alphaToCoverage&&h.enable(21),w.push(h.mask)}function H(w){const T=A[w.type];let I;if(T){const Y=Di[T];I=gM.clone(Y.uniforms)}else I=w.uniforms;return I}function X(w,T){let I;for(let Y=0,rt=v.length;Y<rt;Y++){const lt=v[Y];if(lt.cacheKey===T){I=lt,++I.usedTimes;break}}return I===void 0&&(I=new k1(o,T,w,u),v.push(I)),I}function U(w){if(--w.usedTimes===0){const T=v.indexOf(w);v[T]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:H,acquireProgram:X,releaseProgram:U,releaseShaderCache:z,programs:v,dispose:Q}}function j1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Z1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function og(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function lg(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g,S,y,A,C,M){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:y,groupOrder:A,renderOrder:g.renderOrder,z:C,group:M},o[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=y,_.groupOrder=A,_.renderOrder=g.renderOrder,_.z=C,_.group=M),e++,_}function h(g,S,y,A,C,M){const _=d(g,S,y,A,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(g,S,y,A,C,M){const _=d(g,S,y,A,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||Z1),r.length>1&&r.sort(S||og),l.length>1&&l.sort(S||og)}function v(){for(let g=e,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function K1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new lg,o.set(r,[d])):l>=u.length?(d=new lg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Q1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new pt,color:new Be};break;case"SpotLight":i={position:new pt,direction:new pt,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pt,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pt,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new pt,halfWidth:new pt,halfHeight:new pt};break}return o[e.id]=i,i}}}function J1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let $1=0;function tE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function eE(o){const e=new Q1,i=J1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new pt);const l=new pt,u=new hn,d=new hn;function h(p){let v=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,C=0,M=0,_=0,P=0,N=0,H=0,X=0,U=0,z=0;p.sort(tE);for(let w=0,T=p.length;w<T;w++){const I=p[w],Y=I.color,rt=I.intensity,lt=I.distance,at=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)v+=Y.r*rt,g+=Y.g*rt,S+=Y.b*rt;else if(I.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],rt);z++}else if(I.isDirectionalLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,W=i.get(I);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=at,r.directionalShadowMatrix[y]=I.shadow.matrix,P++}r.directional[y]=O,y++}else if(I.isSpotLight){const O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(Y).multiplyScalar(rt),O.distance=lt,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,r.spot[C]=O;const G=I.shadow;if(I.map&&(r.spotLightMap[X]=I.map,X++,G.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[C]=G.matrix,I.castShadow){const W=i.get(I);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=at,H++}C++}else if(I.isRectAreaLight){const O=e.get(I);O.color.copy(Y).multiplyScalar(rt),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=O,M++}else if(I.isPointLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const G=I.shadow,W=i.get(I);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,r.pointShadow[A]=W,r.pointShadowMap[A]=at,r.pointShadowMatrix[A]=I.shadow.matrix,N++}r.point[A]=O,A++}else if(I.isHemisphereLight){const O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(rt),O.groundColor.copy(I.groundColor).multiplyScalar(rt),r.hemi[_]=O,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const Q=r.hash;(Q.directionalLength!==y||Q.pointLength!==A||Q.spotLength!==C||Q.rectAreaLength!==M||Q.hemiLength!==_||Q.numDirectionalShadows!==P||Q.numPointShadows!==N||Q.numSpotShadows!==H||Q.numSpotMaps!==X||Q.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=H,r.spotShadowMap.length=H,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=H+X-U,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=z,Q.directionalLength=y,Q.pointLength=A,Q.spotLength=C,Q.rectAreaLength=M,Q.hemiLength=_,Q.numDirectionalShadows=P,Q.numPointShadows=N,Q.numSpotShadows=H,Q.numSpotMaps=X,Q.numLightProbes=z,r.version=$1++)}function m(p,v){let g=0,S=0,y=0,A=0,C=0;const M=v.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const N=p[_];if(N.isDirectionalLight){const H=r.directional[g];H.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(M),g++}else if(N.isSpotLight){const H=r.spot[y];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(M),H.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const H=r.rectArea[A];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(M),d.identity(),u.copy(N.matrixWorld),u.premultiply(M),d.extractRotation(u),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),H.halfWidth.applyMatrix4(d),H.halfHeight.applyMatrix4(d),A++}else if(N.isPointLight){const H=r.point[S];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const H=r.hemi[C];H.direction.setFromMatrixPosition(N.matrixWorld),H.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:r}}function cg(o){const e=new eE(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function nE(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new cg(o),e.set(l,[h])):u>=d.length?(h=new cg(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const iE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
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
}`;function rE(o,e,i){let r=new Pg;const l=new We,u=new We,d=new sn,h=new DM({depthPacking:HS}),m=new UM,p={},v=i.maxTextureSize,g={[ja]:kn,[kn]:ja,[oa]:oa},S=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:iE,fragmentShader:aE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Ni;A.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Za(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hg;let _=this.type;this.render=function(U,z,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;const w=o.getRenderTarget(),T=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(ua),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const rt=_!==sa&&this.type===sa,lt=_===sa&&this.type!==sa;for(let at=0,O=U.length;at<O;at++){const G=U[at],W=G.shadow;if(W===void 0){pe("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ct=W.getFrameExtents();if(l.multiply(ct),u.copy(W.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ct.x),l.x=u.x*ct.x,W.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ct.y),l.y=u.y*ct.y,W.mapSize.y=u.y)),W.map===null||rt===!0||lt===!0){const D=this.type!==sa?{minFilter:ni,magFilter:ni}:{};W.map!==null&&W.map.dispose(),W.map=new Ar(l.x,l.y,D),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const st=W.getViewportCount();for(let D=0;D<st;D++){const q=W.getViewport(D);d.set(u.x*q.x,u.y*q.y,u.x*q.z,u.y*q.w),Y.viewport(d),W.updateMatrices(G,D),r=W.getFrustum(),H(z,Q,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===sa&&P(W,Q),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,T,I)};function P(U,z){const Q=e.update(C);S.defines.VSM_SAMPLES!==U.blurSamples&&(S.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ar(l.x,l.y)),S.uniforms.shadow_pass.value=U.map.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(z,null,Q,S,C,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(z,null,Q,y,C,null)}function N(U,z,Q,w){let T=null;const I=Q.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(I!==void 0)T=I;else if(T=Q.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=T.uuid,rt=z.uuid;let lt=p[Y];lt===void 0&&(lt={},p[Y]=lt);let at=lt[rt];at===void 0&&(at=T.clone(),lt[rt]=at,z.addEventListener("dispose",X)),T=at}if(T.visible=z.visible,T.wireframe=z.wireframe,w===sa?T.side=z.shadowSide!==null?z.shadowSide:z.side:T.side=z.shadowSide!==null?z.shadowSide:g[z.side],T.alphaMap=z.alphaMap,T.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,T.map=z.map,T.clipShadows=z.clipShadows,T.clippingPlanes=z.clippingPlanes,T.clipIntersection=z.clipIntersection,T.displacementMap=z.displacementMap,T.displacementScale=z.displacementScale,T.displacementBias=z.displacementBias,T.wireframeLinewidth=z.wireframeLinewidth,T.linewidth=z.linewidth,Q.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=o.properties.get(T);Y.light=Q}return T}function H(U,z,Q,w,T){if(U.visible===!1)return;if(U.layers.test(z.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===sa)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld);const rt=e.update(U),lt=U.material;if(Array.isArray(lt)){const at=rt.groups;for(let O=0,G=at.length;O<G;O++){const W=at[O],ct=lt[W.materialIndex];if(ct&&ct.visible){const st=N(U,ct,w,T);U.onBeforeShadow(o,U,z,Q,rt,st,W),o.renderBufferDirect(Q,null,rt,st,U,W),U.onAfterShadow(o,U,z,Q,rt,st,W)}}}else if(lt.visible){const at=N(U,lt,w,T);U.onBeforeShadow(o,U,z,Q,rt,at,null),o.renderBufferDirect(Q,null,rt,at,U,null),U.onAfterShadow(o,U,z,Q,rt,at,null)}}const Y=U.children;for(let rt=0,lt=Y.length;rt<lt;rt++)H(Y[rt],z,Q,w,T)}function X(U){U.target.removeEventListener("dispose",X);for(const Q in p){const w=p[Q],T=U.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const sE={[Ad]:Rd,[Cd]:Ud,[wd]:Ld,[Ms]:Dd,[Rd]:Ad,[Ud]:Cd,[Ld]:wd,[Dd]:Ms};function oE(o,e){function i(){let V=!1;const Lt=new sn;let Ct=null;const wt=new sn(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!V&&(o.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){V=Et},setClear:function(Et,St,Vt,ue,He){He===!0&&(Et*=ue,St*=ue,Vt*=ue),Lt.set(Et,St,Vt,ue),wt.equals(Lt)===!1&&(o.clearColor(Et,St,Vt,ue),wt.copy(Lt))},reset:function(){V=!1,Ct=null,wt.set(-1,0,0,0)}}}function r(){let V=!1,Lt=!1,Ct=null,wt=null,Et=null;return{setReversed:function(St){if(Lt!==St){const Vt=e.get("EXT_clip_control");St?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Lt=St;const ue=Et;Et=null,this.setClear(ue)}},getReversed:function(){return Lt},setTest:function(St){St?ft(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(St){Ct!==St&&!V&&(o.depthMask(St),Ct=St)},setFunc:function(St){if(Lt&&(St=sE[St]),wt!==St){switch(St){case Ad:o.depthFunc(o.NEVER);break;case Rd:o.depthFunc(o.ALWAYS);break;case Cd:o.depthFunc(o.LESS);break;case Ms:o.depthFunc(o.LEQUAL);break;case wd:o.depthFunc(o.EQUAL);break;case Dd:o.depthFunc(o.GEQUAL);break;case Ud:o.depthFunc(o.GREATER);break;case Ld:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}wt=St}},setLocked:function(St){V=St},setClear:function(St){Et!==St&&(Lt&&(St=1-St),o.clearDepth(St),Et=St)},reset:function(){V=!1,Ct=null,wt=null,Et=null,Lt=!1}}}function l(){let V=!1,Lt=null,Ct=null,wt=null,Et=null,St=null,Vt=null,ue=null,He=null;return{setTest:function(De){V||(De?ft(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(De){Lt!==De&&!V&&(o.stencilMask(De),Lt=De)},setFunc:function(De,wn,Wn){(Ct!==De||wt!==wn||Et!==Wn)&&(o.stencilFunc(De,wn,Wn),Ct=De,wt=wn,Et=Wn)},setOp:function(De,wn,Wn){(St!==De||Vt!==wn||ue!==Wn)&&(o.stencilOp(De,wn,Wn),St=De,Vt=wn,ue=Wn)},setLocked:function(De){V=De},setClear:function(De){He!==De&&(o.clearStencil(De),He=De)},reset:function(){V=!1,Lt=null,Ct=null,wt=null,Et=null,St=null,Vt=null,ue=null,He=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,y=[],A=null,C=!1,M=null,_=null,P=null,N=null,H=null,X=null,U=null,z=new Be(0,0,0),Q=0,w=!1,T=null,I=null,Y=null,rt=null,lt=null;const at=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=G>=2);let ct=null,st={};const D=o.getParameter(o.SCISSOR_BOX),q=o.getParameter(o.VIEWPORT),mt=new sn().fromArray(D),ut=new sn().fromArray(q);function Mt(V,Lt,Ct,wt){const Et=new Uint8Array(4),St=o.createTexture();o.bindTexture(V,St),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<Ct;Vt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,wt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Lt+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return St}const J={};J[o.TEXTURE_2D]=Mt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ft(o.DEPTH_TEST),d.setFunc(Ms),ne(!1),Qt(px),ft(o.CULL_FACE),fe(ua);function ft(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function At(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function Pt(V,Lt){return g[V]!==Lt?(o.bindFramebuffer(V,Lt),g[V]=Lt,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Nt(V,Lt){let Ct=y,wt=!1;if(V){Ct=S.get(Lt),Ct===void 0&&(Ct=[],S.set(Lt,Ct));const Et=V.textures;if(Ct.length!==Et.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Vt=Et.length;St<Vt;St++)Ct[St]=o.COLOR_ATTACHMENT0+St;Ct.length=Et.length,wt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,wt=!0);wt&&o.drawBuffers(Ct)}function te(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const Ce={[Mr]:o.FUNC_ADD,[dS]:o.FUNC_SUBTRACT,[hS]:o.FUNC_REVERSE_SUBTRACT};Ce[pS]=o.MIN,Ce[mS]=o.MAX;const ee={[xS]:o.ZERO,[gS]:o.ONE,[_S]:o.SRC_COLOR,[Ed]:o.SRC_ALPHA,[ES]:o.SRC_ALPHA_SATURATE,[yS]:o.DST_COLOR,[SS]:o.DST_ALPHA,[vS]:o.ONE_MINUS_SRC_COLOR,[Td]:o.ONE_MINUS_SRC_ALPHA,[bS]:o.ONE_MINUS_DST_COLOR,[MS]:o.ONE_MINUS_DST_ALPHA,[TS]:o.CONSTANT_COLOR,[AS]:o.ONE_MINUS_CONSTANT_COLOR,[RS]:o.CONSTANT_ALPHA,[CS]:o.ONE_MINUS_CONSTANT_ALPHA};function fe(V,Lt,Ct,wt,Et,St,Vt,ue,He,De){if(V===ua){C===!0&&(At(o.BLEND),C=!1);return}if(C===!1&&(ft(o.BLEND),C=!0),V!==fS){if(V!==M||De!==w){if((_!==Mr||H!==Mr)&&(o.blendEquation(o.FUNC_ADD),_=Mr,H=Mr),De)switch(V){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bd:o.blendFunc(o.ONE,o.ONE);break;case mx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case xx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:rn("WebGLState: Invalid blending: ",V);break}else switch(V){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mx:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xx:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",V);break}P=null,N=null,X=null,U=null,z.set(0,0,0),Q=0,M=V,w=De}return}Et=Et||Lt,St=St||Ct,Vt=Vt||wt,(Lt!==_||Et!==H)&&(o.blendEquationSeparate(Ce[Lt],Ce[Et]),_=Lt,H=Et),(Ct!==P||wt!==N||St!==X||Vt!==U)&&(o.blendFuncSeparate(ee[Ct],ee[wt],ee[St],ee[Vt]),P=Ct,N=wt,X=St,U=Vt),(ue.equals(z)===!1||He!==Q)&&(o.blendColor(ue.r,ue.g,ue.b,He),z.copy(ue),Q=He),M=V,w=!1}function F(V,Lt){V.side===oa?At(o.CULL_FACE):ft(o.CULL_FACE);let Ct=V.side===kn;Lt&&(Ct=!Ct),ne(Ct),V.blending===vs&&V.transparent===!1?fe(ua):fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),u.setMask(V.colorWrite);const wt=V.stencilWrite;h.setTest(wt),wt&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Dt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(V){T!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),T=V)}function Qt(V){V!==lS?(ft(o.CULL_FACE),V!==I&&(V===px?o.cullFace(o.BACK):V===cS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),I=V}function Ht(V){V!==Y&&(O&&o.lineWidth(V),Y=V)}function Dt(V,Lt,Ct){V?(ft(o.POLYGON_OFFSET_FILL),(rt!==Lt||lt!==Ct)&&(o.polygonOffset(Lt,Ct),rt=Lt,lt=Ct)):At(o.POLYGON_OFFSET_FILL)}function _e(V){V?ft(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Gt(V){V===void 0&&(V=o.TEXTURE0+at-1),ct!==V&&(o.activeTexture(V),ct=V)}function ie(V,Lt,Ct){Ct===void 0&&(ct===null?Ct=o.TEXTURE0+at-1:Ct=ct);let wt=st[Ct];wt===void 0&&(wt={type:void 0,texture:void 0},st[Ct]=wt),(wt.type!==V||wt.texture!==Lt)&&(ct!==Ct&&(o.activeTexture(Ct),ct=Ct),o.bindTexture(V,Lt||J[V]),wt.type=V,wt.texture=Lt)}function L(){const V=st[ct];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function _t(){try{o.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function yt(){try{o.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ut(){try{o.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function jt(){try{o.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Yt(){try{o.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function bt(){try{o.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Tt(V){mt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),mt.copy(V))}function Zt(V){ut.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function Wt(V,Lt){let Ct=p.get(Lt);Ct===void 0&&(Ct=new WeakMap,p.set(Lt,Ct));let wt=Ct.get(V);wt===void 0&&(wt=o.getUniformBlockIndex(Lt,V.name),Ct.set(V,wt))}function It(V,Lt){const wt=p.get(Lt).get(V);m.get(Lt)!==wt&&(o.uniformBlockBinding(Lt,wt,V.__bindingPointIndex),m.set(Lt,wt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ct=null,st={},g={},S=new WeakMap,y=[],A=null,C=!1,M=null,_=null,P=null,N=null,H=null,X=null,U=null,z=new Be(0,0,0),Q=0,w=!1,T=null,I=null,Y=null,rt=null,lt=null,mt.set(0,0,o.canvas.width,o.canvas.height),ut.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ft,disable:At,bindFramebuffer:Pt,drawBuffers:Nt,useProgram:te,setBlending:fe,setMaterial:F,setFlipSided:ne,setCullFace:Qt,setLineWidth:Ht,setPolygonOffset:Dt,setScissorTest:_e,activeTexture:Gt,bindTexture:ie,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:Yt,texImage3D:bt,updateUBOMapping:Wt,uniformBlockBinding:It,texStorage2D:Ut,texStorage3D:jt,texSubImage2D:_t,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ft,scissor:Tt,viewport:Zt,reset:le}}function lE(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new We,v=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,b){return y?new OffscreenCanvas(L,b):Cc("canvas")}function C(L,b,$){let _t=1;const yt=ie(L);if((yt.width>$||yt.height>$)&&(_t=$/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(_t*yt.width),Ft=Math.floor(_t*yt.height);g===void 0&&(g=A(ht,Ft));const Ut=b?A(ht,Ft):g;return Ut.width=ht,Ut.height=Ft,Ut.getContext("2d").drawImage(L,0,0,ht,Ft),pe("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+Ft+")."),Ut}else return"data"in L&&pe("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,b,$,_t,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=b;if(b===o.RED&&($===o.FLOAT&&(ht=o.R32F),$===o.HALF_FLOAT&&(ht=o.R16F),$===o.UNSIGNED_BYTE&&(ht=o.R8)),b===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.R8UI),$===o.UNSIGNED_SHORT&&(ht=o.R16UI),$===o.UNSIGNED_INT&&(ht=o.R32UI),$===o.BYTE&&(ht=o.R8I),$===o.SHORT&&(ht=o.R16I),$===o.INT&&(ht=o.R32I)),b===o.RG&&($===o.FLOAT&&(ht=o.RG32F),$===o.HALF_FLOAT&&(ht=o.RG16F),$===o.UNSIGNED_BYTE&&(ht=o.RG8)),b===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RG8UI),$===o.UNSIGNED_SHORT&&(ht=o.RG16UI),$===o.UNSIGNED_INT&&(ht=o.RG32UI),$===o.BYTE&&(ht=o.RG8I),$===o.SHORT&&(ht=o.RG16I),$===o.INT&&(ht=o.RG32I)),b===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),$===o.UNSIGNED_INT&&(ht=o.RGB32UI),$===o.BYTE&&(ht=o.RGB8I),$===o.SHORT&&(ht=o.RGB16I),$===o.INT&&(ht=o.RGB32I)),b===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),$===o.UNSIGNED_INT&&(ht=o.RGBA32UI),$===o.BYTE&&(ht=o.RGBA8I),$===o.SHORT&&(ht=o.RGBA16I),$===o.INT&&(ht=o.RGBA32I)),b===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),b===o.RGBA){const Ft=yt?Ac:Oe.getTransfer(_t);$===o.FLOAT&&(ht=o.RGBA32F),$===o.HALF_FLOAT&&(ht=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ht=Ft===Xe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function H(L,b){let $;return L?b===null||b===Tr||b===Lo?$=o.DEPTH24_STENCIL8:b===ca?$=o.DEPTH32F_STENCIL8:b===Uo&&($=o.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Tr||b===Lo?$=o.DEPTH_COMPONENT24:b===ca?$=o.DEPTH_COMPONENT32F:b===Uo&&($=o.DEPTH_COMPONENT16),$}function X(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==ni&&L.minFilter!==pi?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function U(L){const b=L.target;b.removeEventListener("dispose",U),Q(b),b.isVideoTexture&&v.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),T(b)}function Q(L){const b=r.get(L);if(b.__webglInit===void 0)return;const $=L.source,_t=S.get($);if(_t){const yt=_t[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(L),Object.keys(_t).length===0&&S.delete($)}r.remove(L)}function w(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const $=L.source,_t=S.get($);delete _t[b.__cacheKey],d.memory.textures--}function T(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let yt=0;yt<b.__webglFramebuffer[_t].length;yt++)o.deleteFramebuffer(b.__webglFramebuffer[_t][yt]);else o.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)o.deleteFramebuffer(b.__webglFramebuffer[_t]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=L.textures;for(let _t=0,yt=$.length;_t<yt;_t++){const ht=r.get($[_t]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),d.memory.textures--),r.remove($[_t])}r.remove(L)}let I=0;function Y(){I=0}function rt(){const L=I;return L>=l.maxTextures&&pe("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function lt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function at(L,b){const $=r.get(L);if(L.isVideoTexture&&_e(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const _t=L.image;if(_t===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{J($,L,b);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+b)}function O(L,b){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){J($,L,b);return}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+b)}function G(L,b){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){J($,L,b);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+b)}function W(L,b){const $=r.get(L);if(L.version>0&&$.__version!==L.version){ft($,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+b)}const ct={[Pd]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[zd]:o.MIRRORED_REPEAT},st={[ni]:o.NEAREST,[IS]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[pi]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[br]:o.LINEAR_MIPMAP_LINEAR},D={[kS]:o.NEVER,[ZS]:o.ALWAYS,[XS]:o.LESS,[bg]:o.LEQUAL,[WS]:o.EQUAL,[jS]:o.GEQUAL,[qS]:o.GREATER,[YS]:o.NOTEQUAL};function q(L,b){if(b.type===ca&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pi||b.magFilter===Yf||b.magFilter===Jl||b.magFilter===br||b.minFilter===pi||b.minFilter===Yf||b.minFilter===Jl||b.minFilter===br)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ct[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ct[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ct[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,st[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,D[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ni||b.minFilter!==Jl&&b.minFilter!==br||b.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function mt(L,b){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",U));const _t=b.source;let yt=S.get(_t);yt===void 0&&(yt={},S.set(_t,yt));const ht=lt(b);if(ht!==L.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),yt[ht].usedTimes++;const Ft=yt[L.__cacheKey];Ft!==void 0&&(yt[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(b)),L.__cacheKey=ht,L.__webglTexture=yt[ht].texture}return $}function ut(L,b,$){return Math.floor(Math.floor(L/$)/b)}function Mt(L,b,$,_t){const ht=L.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,$,_t,b.data);else{ht.sort((bt,Tt)=>bt.start-Tt.start);let Ft=0;for(let bt=1;bt<ht.length;bt++){const Tt=ht[Ft],Zt=ht[bt],Wt=Tt.start+Tt.count,It=ut(Zt.start,b.width,4),le=ut(Tt.start,b.width,4);Zt.start<=Wt+1&&It===le&&ut(Zt.start+Zt.count-1,b.width,4)===It?Tt.count=Math.max(Tt.count,Zt.start+Zt.count-Tt.start):(++Ft,ht[Ft]=Zt)}ht.length=Ft+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Tt=ht.length;bt<Tt;bt++){const Zt=ht[bt],Wt=Math.floor(Zt.start/4),It=Math.ceil(Zt.count/4),le=Wt%b.width,V=Math.floor(Wt/b.width),Lt=It,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,le,V,Lt,Ct,$,_t,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function J(L,b,$){let _t=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=o.TEXTURE_3D);const yt=mt(L,b),ht=b.source;i.bindTexture(_t,L.__webglTexture,o.TEXTURE0+$);const Ft=r.get(ht);if(ht.version!==Ft.__version||yt===!0){i.activeTexture(o.TEXTURE0+$);const Ut=Oe.getPrimaries(Oe.workingColorSpace),jt=b.colorSpace===Wa?null:Oe.getPrimaries(b.colorSpace),Yt=b.colorSpace===Wa||Ut===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let bt=C(b.image,!1,l.maxTextureSize);bt=Gt(b,bt);const Tt=u.convert(b.format,b.colorSpace),Zt=u.convert(b.type);let Wt=N(b.internalFormat,Tt,Zt,b.colorSpace,b.isVideoTexture);q(_t,b);let It;const le=b.mipmaps,V=b.isVideoTexture!==!0,Lt=Ft.__version===void 0||yt===!0,Ct=ht.dataReady,wt=X(b,bt);if(b.isDepthTexture)Wt=H(b.format===Oo,b.type),Lt&&(V?i.texStorage2D(o.TEXTURE_2D,1,Wt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Wt,bt.width,bt.height,0,Tt,Zt,null));else if(b.isDataTexture)if(le.length>0){V&&Lt&&i.texStorage2D(o.TEXTURE_2D,wt,Wt,le[0].width,le[0].height);for(let Et=0,St=le.length;Et<St;Et++)It=le[Et],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,It.width,It.height,Tt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,Et,Wt,It.width,It.height,0,Tt,Zt,It.data);b.generateMipmaps=!1}else V?(Lt&&i.texStorage2D(o.TEXTURE_2D,wt,Wt,bt.width,bt.height),Ct&&Mt(b,bt,Tt,Zt)):i.texImage2D(o.TEXTURE_2D,0,Wt,bt.width,bt.height,0,Tt,Zt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,Wt,le[0].width,le[0].height,bt.depth);for(let Et=0,St=le.length;Et<St;Et++)if(It=le[Et],b.format!==Ei)if(Tt!==null)if(V){if(Ct)if(b.layerUpdates.size>0){const Vt=Hx(It.width,It.height,b.format,b.type);for(const ue of b.layerUpdates){const He=It.data.subarray(ue*Vt/It.data.BYTES_PER_ELEMENT,(ue+1)*Vt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ue,It.width,It.height,1,Tt,He)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,bt.depth,Tt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Wt,It.width,It.height,bt.depth,0,It.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,bt.depth,Tt,Zt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Wt,It.width,It.height,bt.depth,0,Tt,Zt,It.data)}else{V&&Lt&&i.texStorage2D(o.TEXTURE_2D,wt,Wt,le[0].width,le[0].height);for(let Et=0,St=le.length;Et<St;Et++)It=le[Et],b.format!==Ei?Tt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,It.width,It.height,Tt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Wt,It.width,It.height,0,It.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,It.width,It.height,Tt,Zt,It.data):i.texImage2D(o.TEXTURE_2D,Et,Wt,It.width,It.height,0,Tt,Zt,It.data)}else if(b.isDataArrayTexture)if(V){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,Wt,bt.width,bt.height,bt.depth),Ct)if(b.layerUpdates.size>0){const Et=Hx(bt.width,bt.height,b.format,b.type);for(const St of b.layerUpdates){const Vt=bt.data.subarray(St*Et/bt.data.BYTES_PER_ELEMENT,(St+1)*Et/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,bt.width,bt.height,1,Tt,Zt,Vt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Zt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Wt,bt.width,bt.height,bt.depth,0,Tt,Zt,bt.data);else if(b.isData3DTexture)V?(Lt&&i.texStorage3D(o.TEXTURE_3D,wt,Wt,bt.width,bt.height,bt.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Zt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Wt,bt.width,bt.height,bt.depth,0,Tt,Zt,bt.data);else if(b.isFramebufferTexture){if(Lt)if(V)i.texStorage2D(o.TEXTURE_2D,wt,Wt,bt.width,bt.height);else{let Et=bt.width,St=bt.height;for(let Vt=0;Vt<wt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,Wt,Et,St,0,Tt,Zt,null),Et>>=1,St>>=1}}else if(le.length>0){if(V&&Lt){const Et=ie(le[0]);i.texStorage2D(o.TEXTURE_2D,wt,Wt,Et.width,Et.height)}for(let Et=0,St=le.length;Et<St;Et++)It=le[Et],V?Ct&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Tt,Zt,It):i.texImage2D(o.TEXTURE_2D,Et,Wt,Tt,Zt,It);b.generateMipmaps=!1}else if(V){if(Lt){const Et=ie(bt);i.texStorage2D(o.TEXTURE_2D,wt,Wt,Et.width,Et.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,Zt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Wt,Tt,Zt,bt);M(b)&&_(_t),Ft.__version=ht.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ft(L,b,$){if(b.image.length!==6)return;const _t=mt(L,b),yt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+$);const ht=r.get(yt);if(yt.version!==ht.__version||_t===!0){i.activeTexture(o.TEXTURE0+$);const Ft=Oe.getPrimaries(Oe.workingColorSpace),Ut=b.colorSpace===Wa?null:Oe.getPrimaries(b.colorSpace),jt=b.colorSpace===Wa||Ft===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let St=0;St<6;St++)!Yt&&!bt?Tt[St]=C(b.image[St],!0,l.maxCubemapSize):Tt[St]=bt?b.image[St].image:b.image[St],Tt[St]=Gt(b,Tt[St]);const Zt=Tt[0],Wt=u.convert(b.format,b.colorSpace),It=u.convert(b.type),le=N(b.internalFormat,Wt,It,b.colorSpace),V=b.isVideoTexture!==!0,Lt=ht.__version===void 0||_t===!0,Ct=yt.dataReady;let wt=X(b,Zt);q(o.TEXTURE_CUBE_MAP,b);let Et;if(Yt){V&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,le,Zt.width,Zt.height);for(let St=0;St<6;St++){Et=Tt[St].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const ue=Et[Vt];b.format!==Ei?Wt!==null?V?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ue.width,ue.height,Wt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,le,ue.width,ue.height,0,ue.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,0,0,ue.width,ue.height,Wt,It,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt,le,ue.width,ue.height,0,Wt,It,ue.data)}}}else{if(Et=b.mipmaps,V&&Lt){Et.length>0&&wt++;const St=ie(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,wt,le,St.width,St.height)}for(let St=0;St<6;St++)if(bt){V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Tt[St].width,Tt[St].height,Wt,It,Tt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,Tt[St].width,Tt[St].height,0,Wt,It,Tt[St].data);for(let Vt=0;Vt<Et.length;Vt++){const He=Et[Vt].image[St].image;V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,He.width,He.height,Wt,It,He.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,le,He.width,He.height,0,Wt,It,He.data)}}else{V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Wt,It,Tt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,le,Wt,It,Tt[St]);for(let Vt=0;Vt<Et.length;Vt++){const ue=Et[Vt];V?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,0,0,Wt,It,ue.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Vt+1,le,Wt,It,ue.image[St])}}}M(b)&&_(o.TEXTURE_CUBE_MAP),ht.__version=yt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function At(L,b,$,_t,yt,ht){const Ft=u.convert($.format,$.colorSpace),Ut=u.convert($.type),jt=N($.internalFormat,Ft,Ut,$.colorSpace),Yt=r.get(b),bt=r.get($);if(bt.__renderTarget=b,!Yt.__hasExternalTextures){const Tt=Math.max(1,b.width>>ht),Zt=Math.max(1,b.height>>ht);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ht,jt,Tt,Zt,b.depth,0,Ft,Ut,null):i.texImage2D(yt,ht,jt,Tt,Zt,0,Ft,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Dt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,yt,bt.__webglTexture,0,Ht(b)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,yt,bt.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(L,b,$){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const _t=b.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,ht=H(b.stencilBuffer,yt),Ft=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Ht(b);Dt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ht,b.width,b.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ht,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ht,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ft,o.RENDERBUFFER,L)}else{const _t=b.textures;for(let yt=0;yt<_t.length;yt++){const ht=_t[yt],Ft=u.convert(ht.format,ht.colorSpace),Ut=u.convert(ht.type),jt=N(ht.internalFormat,Ft,Ut,ht.colorSpace),Yt=Ht(b);$&&Dt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,jt,b.width,b.height):Dt(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,jt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,jt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(b.depthTexture);_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),at(b.depthTexture,0);const yt=_t.__webglTexture,ht=Ht(b);if(b.depthTexture.format===No)Dt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Oo)Dt(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function te(L){const b=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const _t=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=_t}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const _t=L.texture.mipmaps;_t&&_t.length>0?Nt(b.__webglFramebuffer[0],L):Nt(b.__webglFramebuffer,L)}else if($){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=o.createRenderbuffer(),Pt(b.__webglDepthbuffer[_t],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}else{const _t=L.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Pt(b.__webglDepthbuffer,L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(L,b,$){const _t=r.get(L);b!==void 0&&At(_t.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&te(L)}function ee(L){const b=L.texture,$=r.get(L),_t=r.get(b);L.addEventListener("dispose",z);const yt=L.textures,ht=L.isWebGLCubeRenderTarget===!0,Ft=yt.length>1;if(Ft||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=b.version,d.memory.textures++),ht){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let jt=0;jt<b.mipmaps.length;jt++)$.__webglFramebuffer[Ut][jt]=o.createFramebuffer()}else $.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ft)for(let Ut=0,jt=yt.length;Ut<jt;Ut++){const Yt=r.get(yt[Ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Dt(L)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<yt.length;Ut++){const jt=yt[Ut];$.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const Yt=u.convert(jt.format,jt.colorSpace),bt=u.convert(jt.type),Tt=N(jt.internalFormat,Yt,bt,jt.colorSpace,L.isXRRenderTarget===!0),Zt=Ht(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Tt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),q(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)At($.__webglFramebuffer[Ut][jt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,jt);else At($.__webglFramebuffer[Ut],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Ut=0,jt=yt.length;Ut<jt;Ut++){const Yt=yt[Ut],bt=r.get(Yt);let Tt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Tt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),q(Tt,Yt),At($.__webglFramebuffer,L,Yt,o.COLOR_ATTACHMENT0+Ut,Tt,0),M(Yt)&&_(Tt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,_t.__webglTexture),q(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)At($.__webglFramebuffer[jt],L,b,o.COLOR_ATTACHMENT0,Ut,jt);else At($.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Ut,0);M(b)&&_(Ut),i.unbindTexture()}L.depthBuffer&&te(L)}function fe(L){const b=L.textures;for(let $=0,_t=b.length;$<_t;$++){const yt=b[$];if(M(yt)){const ht=P(L),Ft=r.get(yt).__webglTexture;i.bindTexture(ht,Ft),_(ht),i.unbindTexture()}}}const F=[],ne=[];function Qt(L){if(L.samples>0){if(Dt(L)===!1){const b=L.textures,$=L.width,_t=L.height;let yt=o.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ft=r.get(L),Ut=b.length>1;if(Ut)for(let Yt=0;Yt<b.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const jt=L.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Yt=0;Yt<b.length;Yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[Yt]);const bt=r.get(b[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,$,_t,0,0,$,_t,yt,o.NEAREST),m===!0&&(F.length=0,ne.length=0,F.push(o.COLOR_ATTACHMENT0+Yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(F.push(ht),ne.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Yt=0;Yt<b.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[Yt]);const bt=r.get(b[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ht(L){return Math.min(l.maxSamples,L.samples)}function Dt(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(L){const b=d.render.frame;v.get(L)!==b&&(v.set(L,b),L.update())}function Gt(L,b){const $=L.colorSpace,_t=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Es&&$!==Wa&&(Oe.getTransfer($)===Xe?(_t!==Ei||yt!==da)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",$)),b}function ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=Y,this.setTexture2D=at,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Ce,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Dt}function cE(o,e){function i(r,l=Wa){let u;const d=Oe.getTransfer(l);if(r===da)return o.UNSIGNED_BYTE;if(r===gh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_h)return o.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===vg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===xg)return o.BYTE;if(r===gg)return o.SHORT;if(r===Uo)return o.UNSIGNED_SHORT;if(r===xh)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===As)return o.HALF_FLOAT;if(r===Sg)return o.ALPHA;if(r===Mg)return o.RGB;if(r===Ei)return o.RGBA;if(r===No)return o.DEPTH_COMPONENT;if(r===Oo)return o.DEPTH_STENCIL;if(r===yg)return o.RED;if(r===vh)return o.RED_INTEGER;if(r===Sh)return o.RG;if(r===Mh)return o.RG_INTEGER;if(r===yh)return o.RGBA_INTEGER;if(r===Mc||r===yc||r===bc||r===Ec)if(d===Xe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Mc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Mc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fd||r===Id||r===Bd||r===Hd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Fd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Id)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Vd||r===kd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Gd||r===Vd)return d===Xe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===kd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh||r===ih)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Xd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$d)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nh)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ih)return d===Xe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ah||r===rh||r===sh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===ah)return d===Xe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oh||r===lh||r===ch||r===uh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===oh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const uE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fE=`
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

}`;class dE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Fg(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Li({vertexShader:uE,fragmentShader:fE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Za(new Uc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hE extends Rs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,S=null,y=null,A=null;const C=typeof XRWebGLBinding<"u",M=new dE,_={},P=i.getContextAttributes();let N=null,H=null;const X=[],U=[],z=new We;let Q=null;const w=new yi;w.viewport=new sn;const T=new yi;T.viewport=new sn;const I=[w,T],Y=new LM;let rt=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=X[J];return ft===void 0&&(ft=new xd,X[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=X[J];return ft===void 0&&(ft=new xd,X[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=X[J];return ft===void 0&&(ft=new xd,X[J]=ft),ft.getHandSpace()};function at(J){const ft=U.indexOf(J.inputSource);if(ft===-1)return;const At=X[ft];At!==void 0&&(At.update(J.inputSource,J.frame,p||d),At.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",G);for(let J=0;J<X.length;J++){const ft=U[J];ft!==null&&(U[J]=null,X[J].disconnect(ft))}rt=null,lt=null,M.reset();for(const J in _)delete _[J];e.setRenderTarget(N),y=null,S=null,g=null,l=null,H=null,Mt.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",O),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await i.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Pt=null,Nt=null;P.depth&&(Nt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=P.stencil?Oo:No,Pt=P.stencil?Lo:Tr);const te={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(te),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),H=new Ar(S.textureWidth,S.textureHeight,{format:Ei,type:da,depthTexture:new zg(S.textureWidth,S.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const At={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),H=new Ar(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:da,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}H.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(J){for(let ft=0;ft<J.removed.length;ft++){const At=J.removed[ft],Pt=U.indexOf(At);Pt>=0&&(U[Pt]=null,X[Pt].disconnect(At))}for(let ft=0;ft<J.added.length;ft++){const At=J.added[ft];let Pt=U.indexOf(At);if(Pt===-1){for(let te=0;te<X.length;te++)if(te>=U.length){U.push(At),Pt=te;break}else if(U[te]===null){U[te]=At,Pt=te;break}if(Pt===-1)break}const Nt=X[Pt];Nt&&Nt.connect(At)}}const W=new pt,ct=new pt;function st(J,ft,At){W.setFromMatrixPosition(ft.matrixWorld),ct.setFromMatrixPosition(At.matrixWorld);const Pt=W.distanceTo(ct),Nt=ft.projectionMatrix.elements,te=At.projectionMatrix.elements,Ce=Nt[14]/(Nt[10]-1),ee=Nt[14]/(Nt[10]+1),fe=(Nt[9]+1)/Nt[5],F=(Nt[9]-1)/Nt[5],ne=(Nt[8]-1)/Nt[0],Qt=(te[8]+1)/te[0],Ht=Ce*ne,Dt=Ce*Qt,_e=Pt/(-ne+Qt),Gt=_e*-ne;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Gt),J.translateZ(_e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const ie=Ce+_e,L=ee+_e,b=Ht-Gt,$=Dt+(Pt-Gt),_t=fe*ee/L*ie,yt=F*ee/L*ie;J.projectionMatrix.makePerspective(b,$,_t,yt,ie,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function D(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ft=J.near,At=J.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(At=M.depthFar)),Y.near=T.near=w.near=ft,Y.far=T.far=w.far=At,(rt!==Y.near||lt!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),rt=Y.near,lt=Y.far),Y.layers.mask=J.layers.mask|6,w.layers.mask=Y.layers.mask&3,T.layers.mask=Y.layers.mask&5;const Pt=J.parent,Nt=Y.cameras;D(Y,Pt);for(let te=0;te<Nt.length;te++)D(Nt[te],Pt);Nt.length===2?st(Y,w,T):Y.projectionMatrix.copy(w.projectionMatrix),q(J,Y,Pt)};function q(J,ft,At){At===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(J){return _[J]};let mt=null;function ut(J,ft){if(v=ft.getViewerPose(p||d),A=ft,v!==null){const At=v.views;y!==null&&(e.setRenderTargetFramebuffer(H,y.framebuffer),e.setRenderTarget(H));let Pt=!1;At.length!==Y.cameras.length&&(Y.cameras.length=0,Pt=!0);for(let ee=0;ee<At.length;ee++){const fe=At[ee];let F=null;if(y!==null)F=y.getViewport(fe);else{const Qt=g.getViewSubImage(S,fe);F=Qt.viewport,ee===0&&(e.setRenderTargetTextures(H,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(H))}let ne=I[ee];ne===void 0&&(ne=new yi,ne.layers.enable(ee),ne.viewport=new sn,I[ee]=ne),ne.matrix.fromArray(fe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(fe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(F.x,F.y,F.width,F.height),ee===0&&(Y.matrix.copy(ne.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Pt===!0&&Y.cameras.push(ne)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const ee=g.getDepthInformation(At[0]);ee&&ee.isValid&&ee.texture&&M.init(ee,l.renderState)}if(Nt&&Nt.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let ee=0;ee<At.length;ee++){const fe=At[ee].camera;if(fe){let F=_[fe];F||(F=new Fg,_[fe]=F);const ne=g.getCameraImage(fe);F.sourceTexture=ne}}}}for(let At=0;At<X.length;At++){const Pt=U[At],Nt=X[At];Pt!==null&&Nt!==void 0&&Nt.update(Pt,ft,p||d)}mt&&mt(J,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),A=null}const Mt=new Bg;Mt.setAnimationLoop(ut),this.setAnimationLoop=function(J){mt=J},this.dispose=function(){}}}const vr=new ha,pE=new hn;function mE(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Lg(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,P,N,H){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),g(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,H)):_.isMeshMatcapMaterial?(u(M,_),A(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),C(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,P,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const P=e.get(_),N=P.envMap,H=P.envMapRotation;N&&(M.envMap.value=N,vr.copy(H),vr.x*=-1,vr.y*=-1,vr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),M.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(vr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,P,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*P,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,P){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const P=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function xE(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const H=N.program;r.uniformBlockBinding(P,H)}function p(P,N){let H=l[P.id];H===void 0&&(A(P),H=v(P),l[P.id]=H,P.addEventListener("dispose",M));const X=N.program;r.updateUBOMapping(P,X);const U=e.render.frame;u[P.id]!==U&&(S(P),u[P.id]=U)}function v(P){const N=g();P.__bindingPointIndex=N;const H=o.createBuffer(),X=P.__size,U=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,H),o.bufferData(o.UNIFORM_BUFFER,X,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,H),H}function g(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const N=l[P.id],H=P.uniforms,X=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let U=0,z=H.length;U<z;U++){const Q=Array.isArray(H[U])?H[U]:[H[U]];for(let w=0,T=Q.length;w<T;w++){const I=Q[w];if(y(I,U,w,X)===!0){const Y=I.__offset,rt=Array.isArray(I.value)?I.value:[I.value];let lt=0;for(let at=0;at<rt.length;at++){const O=rt[at],G=C(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,Y+lt,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,lt),lt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,N,H,X){const U=P.value,z=N+"_"+H;if(X[z]===void 0)return typeof U=="number"||typeof U=="boolean"?X[z]=U:X[z]=U.clone(),!0;{const Q=X[z];if(typeof U=="number"||typeof U=="boolean"){if(Q!==U)return X[z]=U,!0}else if(Q.equals(U)===!1)return Q.copy(U),!0}return!1}function A(P){const N=P.uniforms;let H=0;const X=16;for(let z=0,Q=N.length;z<Q;z++){const w=Array.isArray(N[z])?N[z]:[N[z]];for(let T=0,I=w.length;T<I;T++){const Y=w[T],rt=Array.isArray(Y.value)?Y.value:[Y.value];for(let lt=0,at=rt.length;lt<at;lt++){const O=rt[lt],G=C(O),W=H%X,ct=W%G.boundary,st=W+ct;H+=ct,st!==0&&X-st<G.storage&&(H+=X-st),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=H,H+=G.storage}}}const U=H%X;return U>0&&(H+=X-U),P.__size=H,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",P),N}function M(P){const N=P.target;N.removeEventListener("dispose",M);const H=d.indexOf(N.__bindingPointIndex);d.splice(H,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}const gE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ra=null;function _E(){return ra===null&&(ra=new EM(gE,32,32,Sh,As),ra.minFilter=pi,ra.magFilter=pi,ra.wrapS=la,ra.wrapT=la,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class vE{constructor(e={}){const{canvas:i=KS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const A=new Set([yh,Mh,vh]),C=new Set([da,Tr,Uo,Lo,gh,_h]),M=new Uint32Array(4),_=new Int32Array(4);let P=null,N=null;const H=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let z=!1;this._outputColorSpace=hi;let Q=0,w=0,T=null,I=-1,Y=null;const rt=new sn,lt=new sn;let at=null;const O=new Be(0);let G=0,W=i.width,ct=i.height,st=1,D=null,q=null;const mt=new sn(0,0,W,ct),ut=new sn(0,0,W,ct);let Mt=!1;const J=new Pg;let ft=!1,At=!1;const Pt=new hn,Nt=new pt,te=new sn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function fe(){return T===null?st:1}let F=r;function ne(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mh}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",St,!1),i.addEventListener("webglcontextcreationerror",Vt,!1),F===null){const j="webgl2";if(F=ne(j,R),F===null)throw ne(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let Qt,Ht,Dt,_e,Gt,ie,L,b,$,_t,yt,ht,Ft,Ut,jt,Yt,bt,Tt,Zt,Wt,It,le,V,Lt;function Ct(){Qt=new R3(F),Qt.init(),le=new cE(F,Qt),Ht=new _3(F,Qt,e,le),Dt=new oE(F,Qt),Ht.reversedDepthBuffer&&S&&Dt.buffers.depth.setReversed(!0),_e=new D3(F),Gt=new j1,ie=new lE(F,Qt,Dt,Gt,Ht,le,_e),L=new S3(U),b=new A3(U),$=new OM(F),V=new x3(F,$),_t=new C3(F,$,_e,V),yt=new L3(F,_t,$,_e),Zt=new U3(F,Ht,ie),Yt=new v3(Gt),ht=new Y1(U,L,b,Qt,Ht,V,Yt),Ft=new mE(U,Gt),Ut=new K1,jt=new nE(Qt),Tt=new m3(U,L,b,Dt,yt,y,m),bt=new rE(U,yt,Ht),Lt=new xE(F,_e,Ht,Dt),Wt=new g3(F,Qt,_e),It=new w3(F,Qt,_e),_e.programs=ht.programs,U.capabilities=Ht,U.extensions=Qt,U.properties=Gt,U.renderLists=Ut,U.shadowMap=bt,U.state=Dt,U.info=_e}Ct();const wt=new hE(U,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){R!==void 0&&(st=R,this.setSize(W,ct,!1))},this.getSize=function(R){return R.set(W,ct)},this.setSize=function(R,j,ot=!0){if(wt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,ct=j,i.width=Math.floor(R*st),i.height=Math.floor(j*st),ot===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(W*st,ct*st).floor()},this.setDrawingBufferSize=function(R,j,ot){W=R,ct=j,st=ot,i.width=Math.floor(R*ot),i.height=Math.floor(j*ot),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(rt)},this.getViewport=function(R){return R.copy(mt)},this.setViewport=function(R,j,ot,nt){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,j,ot,nt),Dt.viewport(rt.copy(mt).multiplyScalar(st).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,j,ot,nt){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,j,ot,nt),Dt.scissor(lt.copy(ut).multiplyScalar(st).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Dt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ot=!0){let nt=0;if(R){let K=!1;if(T!==null){const Rt=T.texture.format;K=A.has(Rt)}if(K){const Rt=T.texture.type,Ot=C.has(Rt),Bt=Tt.getClearColor(),kt=Tt.getClearAlpha(),re=Bt.r,oe=Bt.g,Jt=Bt.b;Ot?(M[0]=re,M[1]=oe,M[2]=Jt,M[3]=kt,F.clearBufferuiv(F.COLOR,0,M)):(_[0]=re,_[1]=oe,_[2]=Jt,_[3]=kt,F.clearBufferiv(F.COLOR,0,_))}else nt|=F.COLOR_BUFFER_BIT}j&&(nt|=F.DEPTH_BUFFER_BIT),ot&&(nt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",St,!1),i.removeEventListener("webglcontextcreationerror",Vt,!1),Tt.dispose(),Ut.dispose(),jt.dispose(),Gt.dispose(),L.dispose(),b.dispose(),yt.dispose(),V.dispose(),Lt.dispose(),ht.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",ws),wt.removeEventListener("sessionend",Ds),mi.stop()};function Et(R){R.preventDefault(),Mx("WebGLRenderer: Context Lost."),z=!0}function St(){Mx("WebGLRenderer: Context Restored."),z=!1;const R=_e.autoReset,j=bt.enabled,ot=bt.autoUpdate,nt=bt.needsUpdate,K=bt.type;Ct(),_e.autoReset=R,bt.enabled=j,bt.autoUpdate=ot,bt.needsUpdate=nt,bt.type=K}function Vt(R){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const j=R.target;j.removeEventListener("dispose",ue),He(j)}function He(R){De(R),Gt.remove(R)}function De(R){const j=Gt.get(R).programs;j!==void 0&&(j.forEach(function(ot){ht.releaseProgram(ot)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ot,nt,K,Rt){j===null&&(j=Ce);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,Bt=Oc(R,j,ot,nt,K);Dt.setMaterial(nt,Ot);let kt=ot.index,re=1;if(nt.wireframe===!0){if(kt=_t.getWireframeAttribute(ot),kt===void 0)return;re=2}const oe=ot.drawRange,Jt=ot.attributes.position;let me=oe.start*re,we=(oe.start+oe.count)*re;Rt!==null&&(me=Math.max(me,Rt.start*re),we=Math.min(we,(Rt.start+Rt.count)*re)),kt!==null?(me=Math.max(me,0),we=Math.min(we,kt.count)):Jt!=null&&(me=Math.max(me,0),we=Math.min(we,Jt.count));const Ue=we-me;if(Ue<0||Ue===1/0)return;V.setup(K,nt,Bt,ot,kt);let Ee,ze=Wt;if(kt!==null&&(Ee=$.get(kt),ze=It,ze.setIndex(Ee)),K.isMesh)nt.wireframe===!0?(Dt.setLineWidth(nt.wireframeLinewidth*fe()),ze.setMode(F.LINES)):ze.setMode(F.TRIANGLES);else if(K.isLine){let ae=nt.linewidth;ae===void 0&&(ae=1),Dt.setLineWidth(ae*fe()),K.isLineSegments?ze.setMode(F.LINES):K.isLineLoop?ze.setMode(F.LINE_LOOP):ze.setMode(F.LINE_STRIP)}else K.isPoints?ze.setMode(F.POINTS):K.isSprite&&ze.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ae=K._multiDrawStarts,qe=K._multiDrawCounts,Te=K._multiDrawCount,vn=kt?$.get(kt).bytesPerElement:1,ma=Gt.get(nt).currentProgram.getUniforms();for(let je=0;je<Te;je++)ma.setValue(F,"_gl_DrawID",je),ze.render(ae[je]/vn,qe[je])}else if(K.isInstancedMesh)ze.renderInstances(me,Ue,K.count);else if(ot.isInstancedBufferGeometry){const ae=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,qe=Math.min(ot.instanceCount,ae);ze.renderInstances(me,Ue,qe)}else ze.render(me,Ue)};function wn(R,j,ot){R.transparent===!0&&R.side===oa&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,pn(R,j,ot),R.side=ja,R.needsUpdate=!0,pn(R,j,ot),R.side=oa):pn(R,j,ot)}this.compile=function(R,j,ot=null){ot===null&&(ot=R),N=jt.get(ot),N.init(j),X.push(N),ot.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),R!==ot&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(N.pushLight(K),K.castShadow&&N.pushShadow(K))}),N.setupLights();const nt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let Ot=0;Ot<Rt.length;Ot++){const Bt=Rt[Ot];wn(Bt,ot,K),nt.add(Bt)}else wn(Rt,ot,K),nt.add(Rt)}),N=X.pop(),nt},this.compileAsync=function(R,j,ot=null){const nt=this.compile(R,j,ot);return new Promise(K=>{function Rt(){if(nt.forEach(function(Ot){Gt.get(Ot).currentProgram.isReady()&&nt.delete(Ot)}),nt.size===0){K(R);return}setTimeout(Rt,10)}Qt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Wn=null;function Go(R){Wn&&Wn(R)}function ws(){mi.stop()}function Ds(){mi.start()}const mi=new Bg;mi.setAnimationLoop(Go),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(R){Wn=R,wt.setAnimationLoop(R),R===null?mi.stop():mi.start()},wt.addEventListener("sessionstart",ws),wt.addEventListener("sessionend",Ds),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(j),j=wt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,j,T),N=jt.get(R,X.length),N.init(j),X.push(N),Pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J.setFromProjectionMatrix(Pt,Ui,j.reversedDepth),At=this.localClippingEnabled,ft=Yt.init(this.clippingPlanes,At),P=Ut.get(R,H.length),P.init(),H.push(P),wt.enabled===!0&&wt.isPresenting===!0){const Rt=U.xr.getDepthSensingMesh();Rt!==null&&Ka(Rt,j,-1/0,U.sortObjects)}Ka(R,j,0,U.sortObjects),P.finish(),U.sortObjects===!0&&P.sort(D,q),ee=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ee&&Tt.addToRenderList(P,R),this.info.render.frame++,ft===!0&&Yt.beginShadows();const ot=N.state.shadowsArray;bt.render(ot,R,j),ft===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=P.opaque,K=P.transmissive;if(N.setupLights(),j.isArrayCamera){const Rt=j.cameras;if(K.length>0)for(let Ot=0,Bt=Rt.length;Ot<Bt;Ot++){const kt=Rt[Ot];Ls(nt,K,R,kt)}ee&&Tt.render(R);for(let Ot=0,Bt=Rt.length;Ot<Bt;Ot++){const kt=Rt[Ot];Us(P,R,kt,kt.viewport)}}else K.length>0&&Ls(nt,K,R,j),ee&&Tt.render(R),Us(P,R,j);T!==null&&w===0&&(ie.updateMultisampleRenderTarget(T),ie.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(U,R,j),V.resetDefaultState(),I=-1,Y=null,X.pop(),X.length>0?(N=X[X.length-1],ft===!0&&Yt.setGlobalState(U.clippingPlanes,N.state.camera)):N=null,H.pop(),H.length>0?P=H[H.length-1]:P=null};function Ka(R,j,ot,nt){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)N.pushLight(R),R.castShadow&&N.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){nt&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const Ot=yt.update(R),Bt=R.material;Bt.visible&&P.push(R,Ot,Bt,ot,te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const Ot=yt.update(R),Bt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),te.copy(Ot.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Bt)){const kt=Ot.groups;for(let re=0,oe=kt.length;re<oe;re++){const Jt=kt[re],me=Bt[Jt.materialIndex];me&&me.visible&&P.push(R,Ot,me,ot,te.z,Jt)}}else Bt.visible&&P.push(R,Ot,Bt,ot,te.z,null)}}const Rt=R.children;for(let Ot=0,Bt=Rt.length;Ot<Bt;Ot++)Ka(Rt[Ot],j,ot,nt)}function Us(R,j,ot,nt){const{opaque:K,transmissive:Rt,transparent:Ot}=R;N.setupLightsView(ot),ft===!0&&Yt.setGlobalState(U.clippingPlanes,ot),nt&&Dt.viewport(rt.copy(nt)),K.length>0&&qn(K,j,ot),Rt.length>0&&qn(Rt,j,ot),Ot.length>0&&qn(Ot,j,ot),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Ls(R,j,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[nt.id]===void 0&&(N.state.transmissionRenderTarget[nt.id]=new Ar(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?As:da,minFilter:br,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Rt=N.state.transmissionRenderTarget[nt.id],Ot=nt.viewport||rt;Rt.setSize(Ot.z*U.transmissionResolutionScale,Ot.w*U.transmissionResolutionScale);const Bt=U.getRenderTarget(),kt=U.getActiveCubeFace(),re=U.getActiveMipmapLevel();U.setRenderTarget(Rt),U.getClearColor(O),G=U.getClearAlpha(),G<1&&U.setClearColor(16777215,.5),U.clear(),ee&&Tt.render(ot);const oe=U.toneMapping;U.toneMapping=Ya;const Jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),N.setupLightsView(nt),ft===!0&&Yt.setGlobalState(U.clippingPlanes,nt),qn(R,ot,nt),ie.updateMultisampleRenderTarget(Rt),ie.updateRenderTargetMipmap(Rt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let we=0,Ue=j.length;we<Ue;we++){const Ee=j[we],{object:ze,geometry:ae,material:qe,group:Te}=Ee;if(qe.side===oa&&ze.layers.test(nt.layers)){const vn=qe.side;qe.side=kn,qe.needsUpdate=!0,on(ze,ot,nt,ae,qe,Te),qe.side=vn,qe.needsUpdate=!0,me=!0}}me===!0&&(ie.updateMultisampleRenderTarget(Rt),ie.updateRenderTargetMipmap(Rt))}U.setRenderTarget(Bt,kt,re),U.setClearColor(O,G),Jt!==void 0&&(nt.viewport=Jt),U.toneMapping=oe}function qn(R,j,ot){const nt=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Rt=R.length;K<Rt;K++){const Ot=R[K],{object:Bt,geometry:kt,group:re}=Ot;let oe=Ot.material;oe.allowOverride===!0&&nt!==null&&(oe=nt),Bt.layers.test(ot.layers)&&on(Bt,j,ot,kt,oe,re)}}function on(R,j,ot,nt,K,Rt){R.onBeforeRender(U,j,ot,nt,K,Rt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,j,ot,nt,R,Rt),K.transparent===!0&&K.side===oa&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,U.renderBufferDirect(ot,j,nt,K,R,Rt),K.side=ja,K.needsUpdate=!0,U.renderBufferDirect(ot,j,nt,K,R,Rt),K.side=oa):U.renderBufferDirect(ot,j,nt,K,R,Rt),R.onAfterRender(U,j,ot,nt,K,Rt)}function pn(R,j,ot){j.isScene!==!0&&(j=Ce);const nt=Gt.get(R),K=N.state.lights,Rt=N.state.shadowsArray,Ot=K.state.version,Bt=ht.getParameters(R,K.state,Rt,j,ot),kt=ht.getProgramCacheKey(Bt);let re=nt.programs;nt.environment=R.isMeshStandardMaterial?j.environment:null,nt.fog=j.fog,nt.envMap=(R.isMeshStandardMaterial?b:L).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",ue),re=new Map,nt.programs=re);let oe=re.get(kt);if(oe!==void 0){if(nt.currentProgram===oe&&nt.lightsStateVersion===Ot)return Rr(R,Bt),oe}else Bt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Bt,U),oe=ht.acquireProgram(Bt,kt),re.set(kt,oe),nt.uniforms=Bt.uniforms;const Jt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Yt.uniform),Rr(R,Bt),nt.needsLights=Vo(R),nt.lightsStateVersion=Ot,nt.needsLights&&(Jt.ambientLightColor.value=K.state.ambient,Jt.lightProbe.value=K.state.probe,Jt.directionalLights.value=K.state.directional,Jt.directionalLightShadows.value=K.state.directionalShadow,Jt.spotLights.value=K.state.spot,Jt.spotLightShadows.value=K.state.spotShadow,Jt.rectAreaLights.value=K.state.rectArea,Jt.ltc_1.value=K.state.rectAreaLTC1,Jt.ltc_2.value=K.state.rectAreaLTC2,Jt.pointLights.value=K.state.point,Jt.pointLightShadows.value=K.state.pointShadow,Jt.hemisphereLights.value=K.state.hemi,Jt.directionalShadowMap.value=K.state.directionalShadowMap,Jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Jt.spotShadowMap.value=K.state.spotShadowMap,Jt.spotLightMatrix.value=K.state.spotLightMatrix,Jt.spotLightMap.value=K.state.spotLightMap,Jt.pointShadowMap.value=K.state.pointShadowMap,Jt.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=oe,nt.uniformsList=null,oe}function Oi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Tc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Rr(R,j){const ot=Gt.get(R);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Oc(R,j,ot,nt,K){j.isScene!==!0&&(j=Ce),ie.resetTextureUnits();const Rt=j.fog,Ot=nt.isMeshStandardMaterial?j.environment:null,Bt=T===null?U.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Es,kt=(nt.isMeshStandardMaterial?b:L).get(nt.envMap||Ot),re=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,oe=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Jt=!!ot.morphAttributes.position,me=!!ot.morphAttributes.normal,we=!!ot.morphAttributes.color;let Ue=Ya;nt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ue=U.toneMapping);const Ee=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ze=Ee!==void 0?Ee.length:0,ae=Gt.get(nt),qe=N.state.lights;if(ft===!0&&(At===!0||R!==Y)){const Mn=R===Y&&nt.id===I;Yt.setState(nt,R,Mn)}let Te=!1;nt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==qe.state.version||ae.outputColorSpace!==Bt||K.isBatchedMesh&&ae.batching===!1||!K.isBatchedMesh&&ae.batching===!0||K.isBatchedMesh&&ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ae.instancing===!1||!K.isInstancedMesh&&ae.instancing===!0||K.isSkinnedMesh&&ae.skinning===!1||!K.isSkinnedMesh&&ae.skinning===!0||K.isInstancedMesh&&ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ae.instancingMorph===!1&&K.morphTexture!==null||ae.envMap!==kt||nt.fog===!0&&ae.fog!==Rt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Yt.numPlanes||ae.numIntersection!==Yt.numIntersection)||ae.vertexAlphas!==re||ae.vertexTangents!==oe||ae.morphTargets!==Jt||ae.morphNormals!==me||ae.morphColors!==we||ae.toneMapping!==Ue||ae.morphTargetsCount!==ze)&&(Te=!0):(Te=!0,ae.__version=nt.version);let vn=ae.currentProgram;Te===!0&&(vn=pn(nt,j,K));let ma=!1,je=!1,Pi=!1;const Ze=vn.getUniforms(),Sn=ae.uniforms;if(Dt.useProgram(vn.program)&&(ma=!0,je=!0,Pi=!0),nt.id!==I&&(I=nt.id,je=!0),ma||Y!==R){Dt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(F,"projectionMatrix",R.projectionMatrix),Ze.setValue(F,"viewMatrix",R.matrixWorldInverse);const En=Ze.map.cameraPosition;En!==void 0&&En.setValue(F,Nt.setFromMatrixPosition(R.matrixWorld)),Ht.logarithmicDepthBuffer&&Ze.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ze.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,je=!0,Pi=!0)}if(K.isSkinnedMesh){Ze.setOptional(F,K,"bindMatrix"),Ze.setOptional(F,K,"bindMatrixInverse");const Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ze.setValue(F,"boneTexture",Mn.boneTexture,ie))}K.isBatchedMesh&&(Ze.setOptional(F,K,"batchingTexture"),Ze.setValue(F,"batchingTexture",K._matricesTexture,ie),Ze.setOptional(F,K,"batchingIdTexture"),Ze.setValue(F,"batchingIdTexture",K._indirectTexture,ie),Ze.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Ze.setValue(F,"batchingColorTexture",K._colorsTexture,ie));const mn=ot.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Zt.update(K,ot,vn),(je||ae.receiveShadow!==K.receiveShadow)&&(ae.receiveShadow=K.receiveShadow,Ze.setValue(F,"receiveShadow",K.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Sn.envMap.value=kt,Sn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&j.environment!==null&&(Sn.envMapIntensity.value=j.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=_E()),je&&(Ze.setValue(F,"toneMappingExposure",U.toneMappingExposure),ae.needsLights&&Pc(Sn,Pi),Rt&&nt.fog===!0&&Ft.refreshFogUniforms(Sn,Rt),Ft.refreshMaterialUniforms(Sn,nt,st,ct,N.state.transmissionRenderTarget[R.id]),Tc.upload(F,Oi(ae),Sn,ie)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Tc.upload(F,Oi(ae),Sn,ie),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ze.setValue(F,"center",K.center),Ze.setValue(F,"modelViewMatrix",K.modelViewMatrix),Ze.setValue(F,"normalMatrix",K.normalMatrix),Ze.setValue(F,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Mn=nt.uniformsGroups;for(let En=0,Ti=Mn.length;En<Ti;En++){const zi=Mn[En];Lt.update(zi,vn),Lt.bind(zi,vn)}}return vn}function Pc(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Vo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,j,ot){const nt=Gt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Gt.get(R.texture).__webglTexture=j,Gt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ot=Gt.get(R);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const Qa=F.createFramebuffer();this.setRenderTarget=function(R,j=0,ot=0){T=R,Q=j,w=ot;let nt=!0,K=null,Rt=!1,Ot=!1;if(R){const kt=Gt.get(R);if(kt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(F.FRAMEBUFFER,null),nt=!1;else if(kt.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(kt.__hasExternalTextures)ie.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(kt.__boundDepthTexture!==Jt){if(Jt!==null&&Gt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}const re=R.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ot=!0);const oe=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[j])?K=oe[j][ot]:K=oe[j],Rt=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?K=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?K=oe[ot]:K=oe,rt.copy(R.viewport),lt.copy(R.scissor),at=R.scissorTest}else rt.copy(mt).multiplyScalar(st).floor(),lt.copy(ut).multiplyScalar(st).floor(),at=Mt;if(ot!==0&&(K=Qa),Dt.bindFramebuffer(F.FRAMEBUFFER,K)&&nt&&Dt.drawBuffers(R,K),Dt.viewport(rt),Dt.scissor(lt),Dt.setScissorTest(at),Rt){const kt=Gt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,kt.__webglTexture,ot)}else if(Ot){const kt=j;for(let re=0;re<R.textures.length;re++){const oe=Gt.get(R.textures[re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+re,oe.__webglTexture,ot,kt)}}else if(R!==null&&ot!==0){const kt=Gt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,kt.__webglTexture,ot)}I=-1},this.readRenderTargetPixels=function(R,j,ot,nt,K,Rt,Ot,Bt=0){if(!(R&&R.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt){Dt.bindFramebuffer(F.FRAMEBUFFER,kt);try{const re=R.textures[Bt],oe=re.format,Jt=re.type;if(!Ht.textureFormatReadable(oe)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Jt)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-nt&&ot>=0&&ot<=R.height-K&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(j,ot,nt,K,le.convert(oe),le.convert(Jt),Rt))}finally{const re=T!==null?Gt.get(T).__webglFramebuffer:null;Dt.bindFramebuffer(F.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(R,j,ot,nt,K,Rt,Ot,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(kt=kt[Ot]),kt)if(j>=0&&j<=R.width-nt&&ot>=0&&ot<=R.height-K){Dt.bindFramebuffer(F.FRAMEBUFFER,kt);const re=R.textures[Bt],oe=re.format,Jt=re.type;if(!Ht.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,me),F.bufferData(F.PIXEL_PACK_BUFFER,Rt.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Bt),F.readPixels(j,ot,nt,K,le.convert(oe),le.convert(Jt),0);const we=T!==null?Gt.get(T).__webglFramebuffer:null;Dt.bindFramebuffer(F.FRAMEBUFFER,we);const Ue=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await QS(F,Ue,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Rt),F.deleteBuffer(me),F.deleteSync(Ue),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ot=0){const nt=Math.pow(2,-ot),K=Math.floor(R.image.width*nt),Rt=Math.floor(R.image.height*nt),Ot=j!==null?j.x:0,Bt=j!==null?j.y:0;ie.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ot,0,0,Ot,Bt,K,Rt),Dt.unbindTexture()};const Ns=F.createFramebuffer(),pa=F.createFramebuffer();this.copyTextureToTexture=function(R,j,ot=null,nt=null,K=0,Rt=null){Rt===null&&(K!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=K,K=0):Rt=0);let Ot,Bt,kt,re,oe,Jt,me,we,Ue;const Ee=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(ot!==null)Ot=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,kt=ot.isBox3?ot.max.z-ot.min.z:1,re=ot.min.x,oe=ot.min.y,Jt=ot.isBox3?ot.min.z:0;else{const mn=Math.pow(2,-K);Ot=Math.floor(Ee.width*mn),Bt=Math.floor(Ee.height*mn),R.isDataArrayTexture?kt=Ee.depth:R.isData3DTexture?kt=Math.floor(Ee.depth*mn):kt=1,re=0,oe=0,Jt=0}nt!==null?(me=nt.x,we=nt.y,Ue=nt.z):(me=0,we=0,Ue=0);const ze=le.convert(j.format),ae=le.convert(j.type);let qe;j.isData3DTexture?(ie.setTexture3D(j,0),qe=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ie.setTexture2DArray(j,0),qe=F.TEXTURE_2D_ARRAY):(ie.setTexture2D(j,0),qe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=F.getParameter(F.UNPACK_ROW_LENGTH),vn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ma=F.getParameter(F.UNPACK_SKIP_PIXELS),je=F.getParameter(F.UNPACK_SKIP_ROWS),Pi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,re),F.pixelStorei(F.UNPACK_SKIP_ROWS,oe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt);const Ze=R.isDataArrayTexture||R.isData3DTexture,Sn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const mn=Gt.get(R),Mn=Gt.get(j),En=Gt.get(mn.__renderTarget),Ti=Gt.get(Mn.__renderTarget);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,En.__webglFramebuffer),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let zi=0;zi<kt;zi++)Ze&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,K,Jt+zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gt.get(j).__webglTexture,Rt,Ue+zi)),F.blitFramebuffer(re,oe,Ot,Bt,me,we,Ot,Bt,F.DEPTH_BUFFER_BIT,F.NEAREST);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Gt.has(R)){const mn=Gt.get(R),Mn=Gt.get(j);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,Ns),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,pa);for(let En=0;En<kt;En++)Ze?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,K,Jt+En):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,K),Sn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Mn.__webglTexture,Rt,Ue+En):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mn.__webglTexture,Rt),K!==0?F.blitFramebuffer(re,oe,Ot,Bt,me,we,Ot,Bt,F.COLOR_BUFFER_BIT,F.NEAREST):Sn?F.copyTexSubImage3D(qe,Rt,me,we,Ue+En,re,oe,Ot,Bt):F.copyTexSubImage2D(qe,Rt,me,we,re,oe,Ot,Bt);Dt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(qe,Rt,me,we,Ue,Ot,Bt,kt,ze,ae,Ee.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(qe,Rt,me,we,Ue,Ot,Bt,kt,ze,Ee.data):F.texSubImage3D(qe,Rt,me,we,Ue,Ot,Bt,kt,ze,ae,Ee):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Rt,me,we,Ot,Bt,ze,ae,Ee.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Rt,me,we,Ee.width,Ee.height,ze,Ee.data):F.texSubImage2D(F.TEXTURE_2D,Rt,me,we,Ot,Bt,ze,ae,Ee);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ma),F.pixelStorei(F.UNPACK_SKIP_ROWS,je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pi),Rt===0&&j.generateMipmaps&&F.generateMipmap(qe),Dt.unbindTexture()},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),Dt.unbindTexture()},this.resetState=function(){Q=0,w=0,T=null,Dt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const SE="./02.jpg",ME=`
  uniform float uTime;
  attribute float aType; // 0:Dead, 1:Head, 2:Stem, 3:Flower, 4:Bug
  attribute vec3 color;
  varying vec3 vColor;

  void main() {
    vColor = color;
    vec3 pos = position;

    // Sway logic for Stems (2) and Flowers (3)
    if (aType > 1.5 && aType < 3.5) {
      float swayIntensity = (aType > 2.5) ? 3.0 : 1.0; // Flowers sway more
      float speed = 2.0;
      // Simple sine wave displacement based on Y position and Time
      pos.x += sin(uTime * speed + pos.y * 0.05) * swayIntensity;
      pos.y += cos(uTime * speed * 0.7 + pos.x * 0.05) * (swayIntensity * 0.5);
    }

    // Bug movement (4) - erratic flying
    if (aType > 3.5) {
      float speed = 5.0;
      pos.x += sin(uTime * speed + pos.y * 0.2) * 8.0;
      pos.y += cos(uTime * speed * 1.3 + pos.x * 0.15) * 8.0;
      pos.x += sin(uTime * speed * 2.0) * 4.0;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    // Size attenuation manually or fixed
    // Flowers: 3.0, Stems: 3.0, Bugs: 2.0
    float size = 3.0;
    if (aType > 3.5) size = 2.0; // Bugs smaller
    gl_PointSize = (aType > 0.5) ? size : 0.0;

    gl_Position = projectionMatrix * mvPosition;
  }
`,yE=`
  varying vec3 vColor;
  
  void main() {
    // Circular particles
    vec2 coord = gl_PointCoord - vec2(0.5);
    if(length(coord) > 0.5) discard;
    
    gl_FragColor = vec4(vColor, 0.9);
  }
`,bE=({analysis:o,capturedImage:e,active:i,growthTrigger:r,width:l,height:u})=>{const d=Kt.useRef(null),h=Kt.useRef(null),m=Kt.useRef(null),p=Kt.useRef(null),v=Kt.useRef(null),g=Kt.useRef(0),S=Kt.useRef(null),y=Kt.useRef(0),A=Kt.useRef(null),C=Kt.useRef(0),M=Kt.useRef(null),_=Kt.useRef(null),P=5e4,N=Kt.useRef(null),H=Kt.useRef(Date.now());Kt.useEffect(()=>{if(!e||!o||!i)return;(async()=>{const w=new Image;w.src=SE,await new Promise(at=>{w.onload=at});const T=document.createElement("canvas");T.width=l,T.height=u;const I=T.getContext("2d");if(!I)return;const Y=Math.max(l/w.width,u/w.height),rt=(l-w.width*Y)/2,lt=(u-w.height*Y)/2;I.drawImage(w,rt,lt,w.width*Y,w.height*Y),console.log("=== PlantGrowth Debug (Mask Mode) ==="),console.log("Mask Image size:",w.width,"x",w.height),console.log("Canvas size:",l,"x",u),console.log("Scale:",Y),console.log("Offset:",rt,lt);try{const O=I.getImageData(0,0,l,u).data,G=[],W=[];for(let ct=0;ct<u;ct+=3)for(let st=0;st<l;st+=3){const D=(ct*l+st)*4,q=O[D],mt=O[D+1],ut=O[D+2];if(q>200&&mt<100&&ut<100){const Mt=st-l/2,J=u/2-ct;Math.random()<.3?G.push(Mt,J):W.push(Mt,J)}}console.log("Red mask points - Edges:",G.length/2,"Surface:",W.length/2),console.log("======================================"),S.current=new Float32Array(G),y.current=G.length/2,A.current=new Float32Array(W),C.current=W.length/2}catch(at){console.error("Mask detection failed",at)}})()},[e,o,i,l,u]),Kt.useEffect(()=>{if(!d.current)return;const Q=new bM,w=new Ig(l/-2,l/2,u/2,u/-2,1,1e3);w.position.z=100;const T=new vE({alpha:!0,antialias:!1});T.setSize(l,u),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.current.appendChild(T.domElement);const I=new Ni,Y=new Float32Array(P*3),rt=new Float32Array(P*3),lt=new Float32Array(P).fill(0);I.setAttribute("position",new ii(Y,3)),I.setAttribute("color",new ii(rt,3)),I.setAttribute("aType",new ii(lt,1));const at=new Li({uniforms:{uTime:{value:0}},vertexShader:ME,fragmentShader:yE,transparent:!0,blending:bd,depthTest:!1}),O=new wM(I,at);return Q.add(O),N.current={positions:Y,colors:rt,types:lt,velocities:new Float32Array(P*3),life:new Float32Array(P),activeHeads:[]},m.current=Q,p.current=w,v.current=T,M.current=I,_.current=at,z(),()=>{cancelAnimationFrame(g.current),d.current&&T.domElement&&d.current.removeChild(T.domElement),I.dispose(),at.dispose(),T.dispose()}},[l,u]),Kt.useEffect(()=>{r>0&&i&&X(40)},[r,i]);const X=Q=>{if(!N.current)return;const{positions:w,colors:T,types:I,velocities:Y,life:rt,activeHeads:lt}=N.current,at=S.current,O=y.current,G=A.current,W=C.current;if(!at&&!G)return;let ct=0;for(let st=0;st<P&&!(ct>=Q);st++)if(I[st]===0){let D=0,q=0;if(W>0&&(Math.random()>.5||O===0)&&G){const ut=Math.floor(Math.random()*W);D=G[ut*2],q=G[ut*2+1]}else if(at&&O>0){const ut=Math.floor(Math.random()*O);D=at[ut*2],q=at[ut*2+1]}else continue;I[st]=1,rt[st]=1,w[st*3]=D,w[st*3+1]=q,w[st*3+2]=0,Y[st*3]=(Math.random()-.5)*2,Y[st*3+1]=(Math.random()-.5)*2,T[st*3]=0,T[st*3+1]=1,T[st*3+2]=.5,lt.push(st),ct++}M.current&&(M.current.attributes.aType.needsUpdate=!0)},U=(Q,w,T)=>{if(!N.current)return;const{positions:I,colors:Y,types:rt,life:lt}=N.current,at=Math.floor(Math.random()*P);for(let O=0;O<50;O++){const G=(at+O)%P;if(rt[G]===0){rt[G]=T,I[G*3]=Q,I[G*3+1]=w,I[G*3+2]=0,lt[G]=-1,T===2?(Y[G*3]=0+Math.random()*.1,Y[G*3+1]=.2+Math.random()*.15,Y[G*3+2]=.1+Math.random()*.1):T===3?(Y[G*3]=1,Y[G*3+1]=0+Math.random()*.2,Y[G*3+2]=.8+Math.random()*.2):T===4&&(Y[G*3]=0+Math.random()*.2,Y[G*3+1]=.3+Math.random()*.3,Y[G*3+2]=.8+Math.random()*.2);return}}},z=()=>{var O;if(!m.current||!N.current||!M.current||!_.current)return;const{positions:Q,types:w,velocities:T,life:I,activeHeads:Y}=N.current,rt=(Date.now()-H.current)/1e3;_.current.uniforms.uTime.value=rt;const lt=(O=h.current)==null?void 0:O.getContext("2d");lt&&(lt.clearRect(0,0,l,u),lt.strokeStyle="rgba(250, 250, 250, 0.9)",lt.fillStyle="#00FF00",lt.lineWidth=1,lt.font="10px monospace");const at=[];for(const G of Y){if(w[G]!==1)continue;const W=Q[G*3],ct=Q[G*3+1];if(lt){const st=W+l/2,D=u/2-ct;if(lt.strokeRect(st-10,D-10,20,20),Math.random()>.8&&lt.fillText(Math.random().toFixed(3),st+12,D-2),at.length>0&&Math.random()>.5){const q=at[at.length-1],mt=Q[q*3]+l/2,ut=u/2-Q[q*3+1];Math.abs(mt-st)<100&&Math.abs(ut-D)<100&&(lt.beginPath(),lt.moveTo(st,D),lt.lineTo(mt,ut),lt.stroke())}}Q[G*3]+=T[G*3],Q[G*3+1]+=T[G*3+1],Math.random()<.6&&U(W,ct,2),T[G*3]+=(Math.random()-.5)*.8,T[G*3+1]+=(Math.random()-.5)*.8,T[G*3]*=.92,T[G*3+1]*=.92,Math.random()<.03&&U(W+(Math.random()-.5)*15,ct+(Math.random()-.5)*15,3),Math.random()<.02&&U(W+(Math.random()-.5)*30,ct+(Math.random()-.5)*30,4),I[G]-=.015,I[G]<=0?(w[G]=0,U(W,ct,3),U(W+5,ct+5,3)):at.push(G)}N.current.activeHeads=at,M.current.attributes.position.needsUpdate=!0,M.current.attributes.color.needsUpdate=!0,M.current.attributes.aType.needsUpdate=!0,v.current&&m.current&&p.current&&v.current.render(m.current,p.current),g.current=requestAnimationFrame(z)};return ce.jsxs(ce.Fragment,{children:[ce.jsx("div",{ref:d,className:"absolute inset-0 pointer-events-none z-10"}),ce.jsx("canvas",{ref:h,width:l,height:u,className:"absolute inset-0 pointer-events-none z-15 mix-blend-screen opacity-70"})]})},EE=({baseImage:o,maskImage:e,width:i,height:r,active:l})=>{const u=Kt.useRef(null),d=Kt.useRef(null),h=Kt.useRef(null),m=Kt.useRef(null),p=Kt.useRef(0),v=Kt.useRef(0);return Kt.useEffect(()=>{console.log("================================================="),console.log("MaskedGlitchEffect: COMPONENT MOUNTED!"),console.log("Active:",l),console.log("Width:",i,"Height:",r),console.log("================================================="),(async()=>{console.log("MaskedGlitchEffect: Loading images..."),console.log("Base image path:",o),console.log("Mask image path:",e);try{const S=new Image;S.crossOrigin="anonymous",S.src=o,await new Promise((U,z)=>{S.onload=U,S.onerror=z}),d.current=S,console.log("Base image loaded:",S.width,"x",S.height);const y=new Image;y.crossOrigin="anonymous",y.src=e,await new Promise((U,z)=>{y.onload=U,y.onerror=z}),h.current=y,console.log("Mask image loaded:",y.width,"x",y.height);const A=document.createElement("canvas");A.width=i,A.height=r;const C=A.getContext("2d",{willReadFrequently:!0});if(!C)return;const M=Math.max(i/y.width,r/y.height),_=(i-y.width*M)/2,P=(r-y.height*M)/2;C.drawImage(y,_,P,y.width*M,y.height*M);const N=C.getImageData(0,0,i,r),H=new Uint8Array(i*r);let X=0;for(let U=0;U<N.data.length;U+=4){const z=N.data[U],Q=N.data[U+1],w=N.data[U+2],T=U/4;z>150&&Q<100&&w<100&&(H[T]=1,X++)}m.current=H,console.log(`Mask created: ${X} red pixels out of ${i*r} total pixels`),console.log(`Red region coverage: ${(X/(i*r)*100).toFixed(2)}%`)}catch(S){console.error("Failed to load images:",S)}})()},[o,e,i,r]),Kt.useEffect(()=>{if(!l||!u.current)return;const g=u.current,S=g.getContext("2d",{willReadFrequently:!0});if(!S)return;g.width=i,g.height=r;const y=document.createElement("canvas");y.width=i,y.height=r;const A=y.getContext("2d",{willReadFrequently:!0});if(!A)return;let C=Date.now(),M=0;const _=()=>{const P=d.current,N=m.current;if(!P||!N){p.current=requestAnimationFrame(_);return}M++,M%60===0&&console.log("MaskedGlitchEffect: Animating frame",M);const H=Date.now(),X=(H-C)/1e3;C=H,v.current+=X;const U=Math.max(i/P.width,r/P.height),z=(i-P.width*U)/2,Q=(r-P.height*U)/2;A.clearRect(0,0,i,r),A.drawImage(P,z,Q,P.width*U,P.height*U);const w=A.getImageData(0,0,i,r),T=w.data,I=new Uint8ClampedArray(T),Y=v.current,rt=4,lt=3,at=.01,O=35,G=3,W=2,ct=.03;for(let D=0;D<T.length;D+=4)T[D+3]=0;for(let D=0;D<r;D++){const q=Math.sin(D*at+Y*rt)*lt,mt=Math.random()<ct,ut=mt?(Math.random()-.1)*2*W:0,Mt=Math.floor(q+ut),J=mt?G:O,At=Math.random()<.01,Pt=At?Mt+Math.floor((Math.random()-.5)*2*J):Mt,Nt=At?Mt+Math.floor((Math.random()-.5)*J*.5):Mt,te=At?Mt-Math.floor((Math.random()-.5)*2*J):Mt;for(let Ce=0;Ce<i;Ce++){const ee=D*i+Ce;if(N[ee]===1){const fe=Ce+Pt,F=Ce+Nt,ne=Ce+te,Qt=ee*4;if(fe>=0&&fe<i){const Ht=(D*i+fe)*4;T[Ht]=I[Qt],T[Ht+3]=255}if(F>=0&&F<i){const Ht=(D*i+F)*4;T[Ht+1]=I[Qt+1],T[Ht+3]=255}if(ne>=0&&ne<i){const Ht=(D*i+ne)*4;T[Ht+2]=I[Qt+2],T[Ht+3]=255}}}}if(Math.random()<.15){const D=Math.floor(Math.random()*r),q=Math.floor(Math.random()*20)+10,mt=Math.floor((Math.random()-.5)*50);for(let ut=0;ut<q;ut++){const Mt=D+ut;if(!(Mt<0||Mt>=r))for(let J=0;J<i;J++){const ft=Mt*i+J;if(N[ft]===1){const At=Math.max(0,Math.min(i-1,J+mt)),Pt=Mt*i+At,Nt=ft*4,te=Pt*4;T[Nt]=I[te],T[Nt+1]=I[te+1],T[Nt+2]=I[te+2]}}}}S.clearRect(0,0,i,r),S.putImageData(w,0,0),p.current=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(p.current)}},[l,i,r]),l?ce.jsx("canvas",{ref:u,className:"absolute top-0 left-0 w-full h-full pointer-events-none",style:{opacity:.5,zIndex:10}}):null},ug="./01.jpg",fg="./02.jpg",TE=()=>{console.log("###################################################"),console.log("APP.TSX: COMPONENT RENDERING!"),console.log("###################################################");const o=Kt.useRef(null),e=Kt.useRef(null),i=Kt.useRef(null),r=Kt.useRef(null),l=Kt.useRef(null),u=Kt.useRef(null),d=Kt.useRef(null),h=Kt.useRef(0),m=Kt.useRef(0),p=Kt.useRef(null),v=Kt.useRef(null),g=Kt.useRef(0),S=Kt.useRef([]),[y,A]=Kt.useState(!1),[C,M]=Kt.useState({width:160,height:120}),[_,P]=Kt.useState(en.IDLE),[N,H]=Kt.useState(null),[X,U]=Kt.useState("Align camera to reference image"),[z,Q]=Kt.useState(null),[w,T]=Kt.useState({width:window.innerWidth,height:window.innerHeight}),[I,Y]=Kt.useState(!1),[rt,lt]=Kt.useState(0),[at,O]=Kt.useState(0);console.log("APP STATE - gameState:",_,"capturedImage:",!!z,"isAligned:",I),Kt.useEffect(()=>{const ct=()=>T({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",ct),()=>window.removeEventListener("resize",ct)},[]),Kt.useEffect(()=>{let ct=!1;const st=q=>new Promise((mt,ut)=>{const Mt=new Image;Mt.crossOrigin="anonymous",Mt.onload=()=>mt(Mt),Mt.onerror=J=>ut(J),Mt.src=q});return(async()=>{try{const[q,mt]=await Promise.all([st(ug),st(fg)]);if(ct)return;r.current=q;const ut=200,Mt=Math.round(ut*(q.height/q.width));M({width:ut,height:Mt});const J=document.createElement("canvas");J.width=ut,J.height=Mt;const ft=J.getContext("2d",{willReadFrequently:!0});if(ft){const Nt=Math.min(ut/q.width,Mt/q.height),te=(ut-q.width*Nt)/2,Ce=(Mt-q.height*Nt)/2;ft.drawImage(q,te,Ce,q.width*Nt,q.height*Nt),l.current=ft.getImageData(0,0,ut,Mt);const ee=new Float32Array(ut*Mt),fe=new Float32Array(ut*Mt);let F=0,ne=0;const Qt=l.current.data;for(let Ht=0;Ht<Mt;Ht++)for(let Dt=0;Dt<ut;Dt++){const _e=(Ht*ut+Dt)*4,Gt=(Qt[_e]+Qt[_e+1]+Qt[_e+2])/3;ee[Ht*ut+Dt]=Gt,F+=Gt;const ie=ut-1-Dt;fe[Ht*ut+ie]=Gt,ne+=Gt}u.current=ee,d.current=fe,h.current=F/ee.length,m.current=ne/fe.length}const At=document.createElement("canvas");At.width=ut,At.height=Mt;const Pt=At.getContext("2d",{willReadFrequently:!0});if(Pt){const Nt=Math.max(ut/mt.width,Mt/mt.height),te=(ut-mt.width*Nt)/2,Ce=(Mt-mt.height*Nt)/2;Pt.drawImage(mt,te,Ce,mt.width*Nt,mt.height*Nt);const ee=Pt.getImageData(0,0,ut,Mt).data,fe=new Uint8Array(ut*Mt),F=new Uint8Array(ut*Mt);let ne=0;for(let Qt=0;Qt<Mt;Qt++)for(let Ht=0;Ht<ut;Ht++){const Dt=(Qt*ut+Ht)*4,_e=ee[Dt],Gt=ee[Dt+1],ie=ee[Dt+2];if(_e>180&&Gt<100&&ie<100){const L=Qt*ut+Ht;fe[L]=1;const b=ut-1-Ht;F[Qt*ut+b]=1,ne++}}p.current=fe,v.current=F,g.current=ne,console.log(`Mask processed: ${ne} ROI pixels (${(ne/(ut*Mt)*100).toFixed(1)}%)`)}console.log("Reference and mask loaded and processed"),A(!0)}catch(q){console.error("Failed to load reference/mask images",q),U("IMAGE LOAD ERROR"),P(en.ERROR)}})(),()=>{ct=!0}},[]),Kt.useEffect(()=>{(async()=>{try{console.log("Starting camera...");const st=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1920},height:{ideal:1080}},audio:!1});o.current&&(o.current.srcObject=st)}catch(st){console.error("Camera access denied:",st),U("CAMERA ERROR"),P(en.ERROR)}})()},[]),Kt.useEffect(()=>{if(_!==en.IDLE||!y||!o.current||!i.current||!l.current)return;console.log("Starting continuous alignment detection...");const ct=()=>{const D=o.current,q=i.current,mt=l.current;if(!D||!q||!mt||D.videoWidth===0||!u.current||!d.current)return;q.width=C.width,q.height=C.height;const ut=q.getContext("2d");if(!ut)return;ut.clearRect(0,0,C.width,C.height);const Mt=Math.max(C.width/D.videoWidth,C.height/D.videoHeight),J=(C.width-D.videoWidth*Mt)/2,ft=(C.height-D.videoHeight*Mt)/2;ut.drawImage(D,J,ft,D.videoWidth*Mt,D.videoHeight*Mt);const At=ut.getImageData(0,0,C.width,C.height),Pt=new Float32Array(C.width*C.height);for(let Ht=0;Ht<At.data.length;Ht+=4){const Dt=(At.data[Ht]+At.data[Ht+1]+At.data[Ht+2])/3,_e=Ht/4;Pt[_e]=Dt}const Nt=(Ht,Dt,_e)=>{let Gt=0,ie=0,L=0;if(_e)for(let Ft=0;Ft<Ht.length;Ft++)_e[Ft]&&(Gt+=Ht[Ft],ie+=Dt[Ft],L++);else{L=Ht.length;for(let Ft=0;Ft<Ht.length;Ft++)Gt+=Ht[Ft],ie+=Dt[Ft]}if(L===0)return-1;const b=Gt/L,$=ie/L;let _t=0,yt=0,ht=0;for(let Ft=0;Ft<Ht.length;Ft++){if(_e&&!_e[Ft])continue;const Ut=Ht[Ft]-b,jt=Dt[Ft]-$;_t+=Ut*jt,yt+=Ut*Ut,ht+=jt*jt}return yt===0||ht===0?-1:_t/Math.sqrt(yt*ht)},te=Nt(Pt,u.current,p.current),Ce=Nt(Pt,d.current,v.current),ee=Math.max(te,Ce),fe=Math.max(0,Math.min(100,(ee+1)*50));S.current.push(fe),S.current.length>5&&S.current.shift();const F=S.current.reduce((Ht,Dt)=>Ht+Dt,0)/S.current.length;lt(F);const Qt=F>=75;Y(Qt),U(Qt?`ALIGNED ${F.toFixed(0)}% - TAP TO CAPTURE`:`Align camera: ${F.toFixed(0)}%`)};ct();const st=setInterval(ct,500);return()=>clearInterval(st)},[_,y,C.width,C.height]);const G=Kt.useCallback(async()=>{if(_===en.IDLE){if(!o.current||!e.current)return;if(!I){U("PLEASE ALIGN WITH REFERENCE IMAGE"),setTimeout(()=>U(""),2e3);return}P(en.CAPTURING),U("");const ct=o.current,st=e.current;st.width=ct.videoWidth,st.height=ct.videoHeight;const D=st.getContext("2d");if(!D)return;D.drawImage(ct,0,0,st.width,st.height);const q=st.toDataURL("image/jpeg",.8);Q(q),P(en.ANALYZING),U("VENI VIDI VICI"),H({detected:!0,box_2d:[0,0,1e3,1e3],confidence:1,label:"mask_area"}),U(""),P(en.GROWING),O(ut=>ut+1)}else _===en.GROWING&&O(ct=>ct+1)},[_,I]),W=()=>{P(en.IDLE),Q(null),H(null),O(0),lt(0),Y(!1),S.current=[],U("")};return ce.jsxs("div",{className:"relative w-full h-screen bg-void-black overflow-hidden font-future select-none",children:[ce.jsx("canvas",{ref:e,className:"hidden"}),ce.jsx("canvas",{ref:i,className:"hidden"}),ce.jsx("video",{ref:o,autoPlay:!0,playsInline:!0,muted:!0,className:`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${z?"opacity-0":"opacity-100"}`,style:{filter:"contrast(1.1) brightness(1.1) saturate(0.8) sepia(0.2)"}}),!z&&_===en.IDLE&&ce.jsxs(ce.Fragment,{children:[ce.jsx(EE,{baseImage:ug,maskImage:fg,width:w.width,height:w.height,active:!0}),ce.jsx("div",{className:"absolute inset-0 pointer-events-none transition-all duration-300",style:{border:I?"8px solid #00FF00":"8px solid #FF0000",boxShadow:I?"0 0 30px rgba(0, 255, 0, 0.8), inset 0 0 30px rgba(0, 255, 0, 0.3)":"0 0 20px rgba(255, 0, 0, 0.5)"}})]}),z&&ce.jsx("img",{src:z,alt:"Frozen Reality",className:"absolute top-0 left-0 w-full h-full object-cover",style:{filter:"contrast(1.2) brightness(0.9) saturate(0.5) sepia(0.3) blur(0.5px)"}}),ce.jsx(bE,{active:_===en.GROWING,analysis:N,capturedImage:z,growthTrigger:at,width:w.width,height:w.height}),ce.jsx(oS,{gameState:_,onInteraction:G,onReset:W,analysisText:X,analysisResult:N}),ce.jsx("div",{className:"absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,10,0,0.6)_100%)] mix-blend-multiply"}),ce.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150"})]})},Xg=document.getElementById("root");if(!Xg)throw new Error("Could not find root element to mount to");const AE=sS.createRoot(Xg);AE.render(ce.jsx(Jv.StrictMode,{children:ce.jsx(TE,{})}));
