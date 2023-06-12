(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function M0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wm={exports:{}},da={},Hm={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),L0=Symbol.for("react.portal"),b0=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),U0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),B0=Symbol.for("react.forward_ref"),W0=Symbol.for("react.suspense"),H0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),hf=Symbol.iterator;function $0(t){return t===null||typeof t!="object"?null:(t=hf&&t[hf]||t["@@iterator"],typeof t=="function"?t:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$m=Object.assign,Gm={};function Pi(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Vm}Pi.prototype.isReactComponent={};Pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Km(){}Km.prototype=Pi.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Vm}var cd=ud.prototype=new Km;cd.constructor=ud;$m(cd,Pi.prototype);cd.isPureReactComponent=!0;var ff=Array.isArray,qm=Object.prototype.hasOwnProperty,dd={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,r)&&!Qm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ao,type:t,key:s,ref:o,props:i,_owner:dd.current}}function G0(t,e){return{$$typeof:ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ao}function K0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pf=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K0(""+t.key):e.toString(36)}function tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ao:case L0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tu(o,0):r,ff(i)?(n="",t!=null&&(n=t.replace(pf,"$&/")+"/"),tl(i,e,n,"",function(u){return u})):i!=null&&(hd(i)&&(i=G0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(pf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ff(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+tu(s,l);o+=tl(s,e,n,a,i)}else if(a=$0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+tu(s,l++),o+=tl(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lo(t,e,n){if(t==null)return t;var r=[],i=0;return tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function q0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},nl={transition:null},Q0={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:nl,ReactCurrentOwner:dd};X.Children={map:Lo,forEach:function(t,e,n){Lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lo(t,function(){e++}),e},toArray:function(t){return Lo(t,function(e){return e})||[]},only:function(t){if(!hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Pi;X.Fragment=b0;X.Profiler=U0;X.PureComponent=ud;X.StrictMode=F0;X.Suspense=W0;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$m({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)qm.call(e,a)&&!Qm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ao,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:z0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j0,_context:t},t.Consumer=t};X.createElement=Ym;X.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:B0,render:t}};X.isValidElement=hd;X.lazy=function(t){return{$$typeof:V0,_payload:{_status:-1,_result:t},_init:q0}};X.memo=function(t,e){return{$$typeof:H0,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return Ye.current.useCallback(t,e)};X.useContext=function(t){return Ye.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};X.useEffect=function(t,e){return Ye.current.useEffect(t,e)};X.useId=function(){return Ye.current.useId()};X.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return Ye.current.useMemo(t,e)};X.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};X.useRef=function(t){return Ye.current.useRef(t)};X.useState=function(t){return Ye.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return Ye.current.useTransition()};X.version="18.2.0";Hm.exports=X;var N=Hm.exports;const Y0=M0(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=N,J0=Symbol.for("react.element"),Z0=Symbol.for("react.fragment"),ew=Object.prototype.hasOwnProperty,tw=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nw={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ew.call(e,r)&&!nw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:J0,type:t,key:s,ref:o,props:i,_owner:tw.current}}da.Fragment=Z0;da.jsx=Xm;da.jsxs=Xm;Wm.exports=da;var S=Wm.exports,$u={},Jm={exports:{}},ct={},Zm={exports:{}},eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,W){var $=A.length;A.push(W);e:for(;0<$;){var G=$-1>>>1,de=A[G];if(0<i(de,W))A[G]=W,A[$]=de,$=G;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var W=A[0],$=A.pop();if($!==W){A[0]=$;e:for(var G=0,de=A.length,nr=de>>>1;G<nr;){var Qt=2*(G+1)-1,ft=A[Qt],Yt=Qt+1,Or=A[Yt];if(0>i(ft,$))Yt<de&&0>i(Or,ft)?(A[G]=Or,A[Yt]=$,G=Yt):(A[G]=ft,A[Qt]=$,G=Qt);else if(Yt<de&&0>i(Or,$))A[G]=Or,A[Yt]=$,G=Yt;else break e}}return W}function i(A,W){var $=A.sortIndex-W.sortIndex;return $!==0?$:A.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,f=3,g=!1,_=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=A)r(u),W.sortIndex=W.expirationTime,e(a,W);else break;W=n(u)}}function v(A){if(y=!1,m(A),!_)if(n(a)!==null)_=!0,ht(T);else{var W=n(u);W!==null&&tr(v,W.startTime-A)}}function T(A,W){_=!1,y&&(y=!1,h(O),O=-1),g=!0;var $=f;try{for(m(W),d=n(a);d!==null&&(!(d.expirationTime>W)||A&&!$e());){var G=d.callback;if(typeof G=="function"){d.callback=null,f=d.priorityLevel;var de=G(d.expirationTime<=W);W=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(a)&&r(a),m(W)}else r(a);d=n(a)}if(d!==null)var nr=!0;else{var Qt=n(u);Qt!==null&&tr(v,Qt.startTime-W),nr=!1}return nr}finally{d=null,f=$,g=!1}}var P=!1,x=null,O=-1,j=5,V=-1;function $e(){return!(t.unstable_now()-V<j)}function It(){if(x!==null){var A=t.unstable_now();V=A;var W=!0;try{W=x(!0,A)}finally{W?kt():(P=!1,x=null)}}else P=!1}var kt;if(typeof p=="function")kt=function(){p(It)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,qt=Kt.port2;Kt.port1.onmessage=It,kt=function(){qt.postMessage(null)}}else kt=function(){I(It,0)};function ht(A){x=A,P||(P=!0,kt())}function tr(A,W){O=I(function(){A(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,ht(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var $=f;f=W;try{return A()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,W){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var $=f;f=A;try{return W()}finally{f=$}},t.unstable_scheduleCallback=function(A,W,$){var G=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?G+$:G):$=G,A){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=$+de,A={id:c++,callback:W,priorityLevel:A,startTime:$,expirationTime:de,sortIndex:-1},$>G?(A.sortIndex=$,e(u,A),n(a)===null&&A===n(u)&&(y?(h(O),O=-1):y=!0,tr(v,$-G))):(A.sortIndex=de,e(a,A),_||g||(_=!0,ht(T))),A},t.unstable_shouldYield=$e,t.unstable_wrapCallback=function(A){var W=f;return function(){var $=f;f=W;try{return A.apply(this,arguments)}finally{f=$}}}})(eg);Zm.exports=eg;var rw=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg=N,ut=rw;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ng=new Set,Ps={};function Pr(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(Ps[t]=e,t=0;t<e.length;t++)ng.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,iw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mf={},gf={};function sw(t){return Gu.call(gf,t)?!0:Gu.call(mf,t)?!1:iw.test(t)?gf[t]=!0:(mf[t]=!0,!1)}function ow(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lw(t,e,n,r){if(e===null||typeof e>"u"||ow(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new Xe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new Xe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new Xe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new Xe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new Xe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new Xe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new Xe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new Xe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new Xe(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fd,pd);Fe[e]=new Xe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fd,pd);Fe[e]=new Xe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fd,pd);Fe[e]=new Xe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new Xe(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lw(e,n,i,r)&&(n=null),r||i===null?sw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gn=tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),Ur=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),ig=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),sg=Symbol.for("react.offscreen"),_f=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=_f&&t[_f]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,nu;function as(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var ru=!1;function iu(t,e){if(!t||ru)return"";ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?as(t):""}function aw(t){switch(t.tag){case 5:return as(t.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case Ur:return"Portal";case Ku:return"Profiler";case gd:return"StrictMode";case qu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ig:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case _d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vd:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case Cn:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function uw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function og(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cw(t){var e=og(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=cw(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=og(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ag(t,e){e=e.checked,e!=null&&md(t,"checked",e,!1)}function Ju(t,e){ag(t,e);var n=Gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,Gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var us=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(us(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gn(n)}}function ug(t,e){var n=Gn(e.value),r=Gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ef(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dw=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(t){dw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ps[e]=ps[t]})});function hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ps.hasOwnProperty(t)&&ps[t]?(""+e).trim():e+"px"}function fg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hw=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(t,e){if(e){if(hw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sc=null,ti=null,ni=null;function Cf(t){if(t=ho(t)){if(typeof sc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=ga(e),sc(t.stateNode,t.type,e))}}function pg(t){ti?ni?ni.push(t):ni=[t]:ti=t}function mg(){if(ti){var t=ti,e=ni;if(ni=ti=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function gg(t,e){return t(e)}function _g(){}var su=!1;function vg(t,e,n){if(su)return t(e,n);su=!0;try{return gg(t,e,n)}finally{su=!1,(ti!==null||ni!==null)&&(_g(),mg())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var r=ga(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var oc=!1;if(cn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{oc=!1}function fw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ms=!1,vl=null,yl=!1,lc=null,pw={onError:function(t){ms=!0,vl=t}};function mw(t,e,n,r,i,s,o,l,a){ms=!1,vl=null,fw.apply(pw,arguments)}function gw(t,e,n,r,i,s,o,l,a){if(mw.apply(this,arguments),ms){if(ms){var u=vl;ms=!1,vl=null}else throw Error(k(198));yl||(yl=!0,lc=u)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(t){if(xr(t)!==t)throw Error(k(188))}function _w(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sf(i),t;if(s===r)return Sf(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function wg(t){return t=_w(t),t!==null?Eg(t):null}function Eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Eg(t);if(e!==null)return e;t=t.sibling}return null}var Cg=ut.unstable_scheduleCallback,If=ut.unstable_cancelCallback,vw=ut.unstable_shouldYield,yw=ut.unstable_requestPaint,we=ut.unstable_now,ww=ut.unstable_getCurrentPriorityLevel,wd=ut.unstable_ImmediatePriority,Sg=ut.unstable_UserBlockingPriority,wl=ut.unstable_NormalPriority,Ew=ut.unstable_LowPriority,Ig=ut.unstable_IdlePriority,ha=null,Bt=null;function Cw(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(ha,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:kw,Sw=Math.log,Iw=Math.LN2;function kw(t){return t>>>=0,t===0?32:31-(Sw(t)/Iw|0)|0}var jo=64,zo=4194304;function cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=cs(l):(s&=o,s!==0&&(r=cs(s)))}else o=n&~i,o!==0?r=cs(o):s!==0&&(r=cs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function Tw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Tw(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ac(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function Nw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function Tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rg,Cd,Ng,Pg,xg,uc=!1,Bo=[],On=null,Mn=null,Ln=null,Ds=new Map,Os=new Map,In=[],Pw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(e.pointerId)}}function Yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ho(e),e!==null&&Cd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xw(t,e,n,r,i){switch(e){case"focusin":return On=Yi(On,t,e,n,r,i),!0;case"dragenter":return Mn=Yi(Mn,t,e,n,r,i),!0;case"mouseover":return Ln=Yi(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ds.set(s,Yi(Ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Os.set(s,Yi(Os.get(s)||null,t,e,n,r,i)),!0}return!1}function Ag(t){var e=lr(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,xg(t.priority,function(){Ng(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ic=r,n.target.dispatchEvent(r),ic=null}else return e=ho(n),e!==null&&Cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Tf(t,e,n){rl(t)&&n.delete(e)}function Aw(){uc=!1,On!==null&&rl(On)&&(On=null),Mn!==null&&rl(Mn)&&(Mn=null),Ln!==null&&rl(Ln)&&(Ln=null),Ds.forEach(Tf),Os.forEach(Tf)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,Aw)))}function Ms(t){function e(i){return Xi(i,t)}if(0<Bo.length){Xi(Bo[0],t);for(var n=1;n<Bo.length;n++){var r=Bo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&Xi(On,t),Mn!==null&&Xi(Mn,t),Ln!==null&&Xi(Ln,t),Ds.forEach(e),Os.forEach(e),n=0;n<In.length;n++)r=In[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&In.shift()}var ri=gn.ReactCurrentBatchConfig,Cl=!0;function Dw(t,e,n,r){var i=ne,s=ri.transition;ri.transition=null;try{ne=1,Sd(t,e,n,r)}finally{ne=i,ri.transition=s}}function Ow(t,e,n,r){var i=ne,s=ri.transition;ri.transition=null;try{ne=4,Sd(t,e,n,r)}finally{ne=i,ri.transition=s}}function Sd(t,e,n,r){if(Cl){var i=cc(t,e,n,r);if(i===null)gu(t,e,r,Sl,n),kf(t,r);else if(xw(i,t,e,n,r))r.stopPropagation();else if(kf(t,r),e&4&&-1<Pw.indexOf(t)){for(;i!==null;){var s=ho(i);if(s!==null&&Rg(s),s=cc(t,e,n,r),s===null&&gu(t,e,r,Sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gu(t,e,r,null,n)}}var Sl=null;function cc(t,e,n,r){if(Sl=null,t=yd(r),t=lr(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function Dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ww()){case wd:return 1;case Sg:return 4;case wl:case Ew:return 16;case Ig:return 536870912;default:return 16}default:return 16}}var xn=null,Id=null,il=null;function Og(){if(il)return il;var t,e=Id,n=e.length,r,i="value"in xn?xn.value:xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return il=i.slice(t,1<r?1-r:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Rf(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:Rf,this.isPropagationStopped=Rf,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=dt(xi),co=ge({},xi,{view:0,detail:0}),Mw=dt(co),lu,au,Ji,fa=ge({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(lu=t.screenX-Ji.screenX,au=t.screenY-Ji.screenY):au=lu=0,Ji=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Nf=dt(fa),Lw=ge({},fa,{dataTransfer:0}),bw=dt(Lw),Fw=ge({},co,{relatedTarget:0}),uu=dt(Fw),Uw=ge({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),jw=dt(Uw),zw=ge({},xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bw=dt(zw),Ww=ge({},xi,{data:0}),Pf=dt(Ww),Hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$w[t])?!!e[t]:!1}function Td(){return Gw}var Kw=ge({},co,{key:function(t){if(t.key){var e=Hw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qw=dt(Kw),Qw=ge({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=dt(Qw),Yw=ge({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),Xw=dt(Yw),Jw=ge({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zw=dt(Jw),eE=ge({},fa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tE=dt(eE),nE=[9,13,27,32],Rd=cn&&"CompositionEvent"in window,gs=null;cn&&"documentMode"in document&&(gs=document.documentMode);var rE=cn&&"TextEvent"in window&&!gs,Mg=cn&&(!Rd||gs&&8<gs&&11>=gs),Af=String.fromCharCode(32),Df=!1;function Lg(t,e){switch(t){case"keyup":return nE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function iE(t,e){switch(t){case"compositionend":return bg(e);case"keypress":return e.which!==32?null:(Df=!0,Af);case"textInput":return t=e.data,t===Af&&Df?null:t;default:return null}}function sE(t,e){if(zr)return t==="compositionend"||!Rd&&Lg(t,e)?(t=Og(),il=Id=xn=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mg&&e.locale!=="ko"?null:e.data;default:return null}}var oE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oE[t.type]:e==="textarea"}function Fg(t,e,n,r){pg(r),e=Il(e,"onChange"),0<e.length&&(n=new kd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _s=null,Ls=null;function lE(t){qg(t,0)}function pa(t){var e=Hr(t);if(lg(e))return t}function aE(t,e){if(t==="change")return e}var Ug=!1;if(cn){var cu;if(cn){var du="oninput"in document;if(!du){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),du=typeof Mf.oninput=="function"}cu=du}else cu=!1;Ug=cu&&(!document.documentMode||9<document.documentMode)}function Lf(){_s&&(_s.detachEvent("onpropertychange",jg),Ls=_s=null)}function jg(t){if(t.propertyName==="value"&&pa(Ls)){var e=[];Fg(e,Ls,t,yd(t)),vg(lE,e)}}function uE(t,e,n){t==="focusin"?(Lf(),_s=e,Ls=n,_s.attachEvent("onpropertychange",jg)):t==="focusout"&&Lf()}function cE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pa(Ls)}function dE(t,e){if(t==="click")return pa(e)}function hE(t,e){if(t==="input"||t==="change")return pa(e)}function fE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:fE;function bs(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gu.call(e,i)||!bt(t[i],e[i]))return!1}return!0}function bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ff(t,e){var n=bf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bf(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pE(t){var e=Bg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(r!==null&&Nd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ff(n,s);var o=Ff(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mE=cn&&"documentMode"in document&&11>=document.documentMode,Br=null,dc=null,vs=null,hc=!1;function Uf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hc||Br==null||Br!==_l(r)||(r=Br,"selectionStart"in r&&Nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vs&&bs(vs,r)||(vs=r,r=Il(dc,"onSelect"),0<r.length&&(e=new kd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Br)))}function Ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},hu={},Wg={};cn&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function ma(t){if(hu[t])return hu[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wg)return hu[t]=e[n];return t}var Hg=ma("animationend"),Vg=ma("animationiteration"),$g=ma("animationstart"),Gg=ma("transitionend"),Kg=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){Kg.set(t,e),Pr(e,[t])}for(var fu=0;fu<jf.length;fu++){var pu=jf[fu],gE=pu.toLowerCase(),_E=pu[0].toUpperCase()+pu.slice(1);Xn(gE,"on"+_E)}Xn(Hg,"onAnimationEnd");Xn(Vg,"onAnimationIteration");Xn($g,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(Gg,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function zf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gw(r,e,void 0,t),t.currentTarget=null}function qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;zf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;zf(i,l,u),s=a}}}if(yl)throw t=lc,yl=!1,lc=null,t}function ue(t,e){var n=e[_c];n===void 0&&(n=e[_c]=new Set);var r=t+"__bubble";n.has(r)||(Qg(e,t,2,!1),n.add(r))}function mu(t,e,n){var r=0;e&&(r|=4),Qg(n,t,r,e)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Fs(t){if(!t[Vo]){t[Vo]=!0,ng.forEach(function(n){n!=="selectionchange"&&(vE.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vo]||(e[Vo]=!0,mu("selectionchange",!1,e))}}function Qg(t,e,n,r){switch(Dg(e)){case 1:var i=Dw;break;case 4:i=Ow;break;default:i=Sd}n=i.bind(null,e,n,t),i=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=lr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vg(function(){var u=s,c=yd(n),d=[];e:{var f=Kg.get(t);if(f!==void 0){var g=kd,_=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":g=qw;break;case"focusin":_="focus",g=uu;break;case"focusout":_="blur",g=uu;break;case"beforeblur":case"afterblur":g=uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Xw;break;case Hg:case Vg:case $g:g=jw;break;case Gg:g=Zw;break;case"scroll":g=Mw;break;case"wheel":g=tE;break;case"copy":case"cut":case"paste":g=Bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xf}var y=(e&4)!==0,I=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,m;p!==null;){m=p;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,h!==null&&(v=As(p,h),v!=null&&y.push(Us(p,v,m)))),I)break;p=p.return}0<y.length&&(f=new g(f,_,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==ic&&(_=n.relatedTarget||n.fromElement)&&(lr(_)||_[dn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?lr(_):null,_!==null&&(I=xr(_),_!==I||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Nf,v="onMouseLeave",h="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=xf,v="onPointerLeave",h="onPointerEnter",p="pointer"),I=g==null?f:Hr(g),m=_==null?f:Hr(_),f=new y(v,p+"leave",g,n,c),f.target=I,f.relatedTarget=m,v=null,lr(c)===u&&(y=new y(h,p+"enter",_,n,c),y.target=m,y.relatedTarget=I,v=y),I=v,g&&_)t:{for(y=g,h=_,p=0,m=y;m;m=br(m))p++;for(m=0,v=h;v;v=br(v))m++;for(;0<p-m;)y=br(y),p--;for(;0<m-p;)h=br(h),m--;for(;p--;){if(y===h||h!==null&&y===h.alternate)break t;y=br(y),h=br(h)}y=null}else y=null;g!==null&&Bf(d,f,g,y,!1),_!==null&&I!==null&&Bf(d,I,_,y,!0)}}e:{if(f=u?Hr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var T=aE;else if(Of(f))if(Ug)T=hE;else{T=cE;var P=uE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=dE);if(T&&(T=T(t,u))){Fg(d,T,n,c);break e}P&&P(t,f,u),t==="focusout"&&(P=f._wrapperState)&&P.controlled&&f.type==="number"&&Zu(f,"number",f.value)}switch(P=u?Hr(u):window,t){case"focusin":(Of(P)||P.contentEditable==="true")&&(Br=P,dc=u,vs=null);break;case"focusout":vs=dc=Br=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Uf(d,n,c);break;case"selectionchange":if(mE)break;case"keydown":case"keyup":Uf(d,n,c)}var x;if(Rd)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else zr?Lg(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Mg&&n.locale!=="ko"&&(zr||O!=="onCompositionStart"?O==="onCompositionEnd"&&zr&&(x=Og()):(xn=c,Id="value"in xn?xn.value:xn.textContent,zr=!0)),P=Il(u,O),0<P.length&&(O=new Pf(O,t,null,n,c),d.push({event:O,listeners:P}),x?O.data=x:(x=bg(n),x!==null&&(O.data=x)))),(x=rE?iE(t,n):sE(t,n))&&(u=Il(u,"onBeforeInput"),0<u.length&&(c=new Pf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}qg(d,e)})}function Us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=As(t,n),s!=null&&r.unshift(Us(t,s,i)),s=As(t,e),s!=null&&r.push(Us(t,s,i))),t=t.return}return r}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=As(n,s),a!=null&&o.unshift(Us(n,a,l))):i||(a=As(n,s),a!=null&&o.push(Us(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yE=/\r\n?/g,wE=/\u0000|\uFFFD/g;function Wf(t){return(typeof t=="string"?t:""+t).replace(yE,`
`).replace(wE,"")}function $o(t,e,n){if(e=Wf(e),Wf(t)!==e&&n)throw Error(k(425))}function kl(){}var fc=null,pc=null;function mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,EE=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,CE=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(t){return Hf.resolve(null).then(t).catch(SE)}:gc;function SE(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ms(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ai,js="__reactProps$"+Ai,dn="__reactContainer$"+Ai,_c="__reactEvents$"+Ai,IE="__reactListeners$"+Ai,kE="__reactHandles$"+Ai;function lr(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dn]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vf(t);t!==null;){if(n=t[zt])return n;t=Vf(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[zt]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function ga(t){return t[js]||null}var vc=[],Vr=-1;function Jn(t){return{current:t}}function ce(t){0>Vr||(t.current=vc[Vr],vc[Vr]=null,Vr--)}function ae(t,e){Vr++,vc[Vr]=t.current,t.current=e}var Kn={},He=Jn(Kn),tt=Jn(!1),gr=Kn;function fi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Tl(){ce(tt),ce(He)}function $f(t,e,n){if(He.current!==Kn)throw Error(k(168));ae(He,e),ae(tt,n)}function Yg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,uw(t)||"Unknown",i));return ge({},n,r)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,gr=He.current,ae(He,t),ae(tt,tt.current),!0}function Gf(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Yg(t,e,gr),r.__reactInternalMemoizedMergedChildContext=t,ce(tt),ce(He),ae(He,t)):ce(tt),ae(tt,n)}var Zt=null,_a=!1,vu=!1;function Xg(t){Zt===null?Zt=[t]:Zt.push(t)}function TE(t){_a=!0,Xg(t)}function Zn(){if(!vu&&Zt!==null){vu=!0;var t=0,e=ne;try{var n=Zt;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zt=null,_a=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(t+1)),Cg(wd,Zn),i}finally{ne=e,vu=!1}}return null}var $r=[],Gr=0,Nl=null,Pl=0,gt=[],_t=0,_r=null,en=1,tn="";function rr(t,e){$r[Gr++]=Pl,$r[Gr++]=Nl,Nl=t,Pl=e}function Jg(t,e,n){gt[_t++]=en,gt[_t++]=tn,gt[_t++]=_r,_r=t;var r=en;t=tn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,en=1<<32-Ot(e)+i|n<<i|r,tn=s+t}else en=1<<s|n<<i|r,tn=t}function Pd(t){t.return!==null&&(rr(t,1),Jg(t,1,0))}function xd(t){for(;t===Nl;)Nl=$r[--Gr],$r[Gr]=null,Pl=$r[--Gr],$r[Gr]=null;for(;t===_r;)_r=gt[--_t],gt[_t]=null,tn=gt[--_t],gt[_t]=null,en=gt[--_t],gt[_t]=null}var at=null,lt=null,he=!1,xt=null;function Zg(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,lt=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:en,overflow:tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,lt=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(he){var e=lt;if(e){var n=e;if(!Kf(t,e)){if(yc(t))throw Error(k(418));e=bn(n.nextSibling);var r=at;e&&Kf(t,e)?Zg(r,n):(t.flags=t.flags&-4097|2,he=!1,at=t)}}else{if(yc(t))throw Error(k(418));t.flags=t.flags&-4097|2,he=!1,at=t}}}function qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Go(t){if(t!==at)return!1;if(!he)return qf(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mc(t.type,t.memoizedProps)),e&&(e=lt)){if(yc(t))throw e_(),Error(k(418));for(;e;)Zg(t,e),e=bn(e.nextSibling)}if(qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){lt=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}lt=null}}else lt=at?bn(t.stateNode.nextSibling):null;return!0}function e_(){for(var t=lt;t;)t=bn(t.nextSibling)}function pi(){lt=at=null,he=!1}function Ad(t){xt===null?xt=[t]:xt.push(t)}var RE=gn.ReactCurrentBatchConfig;function Rt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xl=Jn(null),Al=null,Kr=null,Dd=null;function Od(){Dd=Kr=Al=null}function Md(t){var e=xl.current;ce(xl),t._currentValue=e}function Ec(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){Al=t,Dd=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function Et(t){var e=t._currentValue;if(Dd!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(Al===null)throw Error(k(308));Kr=t,Al.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var ar=null;function Ld(t){ar===null?ar=[t]:ar.push(t)}function t_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ld(e)):(n.next=i.next,i.next=n),e.interleaved=n,hn(t,r)}function hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sn=!1;function bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ld(r)):(e.next=i.next,i.next=e),r.interleaved=e,hn(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}function Qf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,r){var i=t.updateQueue;Sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(f=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=ge({},d,f);break e;case 2:Sn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=d}}function Yf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var r_=new tg.Component().refs;function Cc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var va={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=jn(t),s=ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Mt(e,t,i,r),ol(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=jn(t),s=ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Mt(e,t,i,r),ol(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=jn(t),i=ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fn(t,i,r),e!==null&&(Mt(e,t,r,n),ol(e,t,r))}};function Xf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!bs(n,r)||!bs(i,s):!0}function i_(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=nt(e)?gr:He.current,r=e.contextTypes,s=(r=r!=null)?fi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=va,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&va.enqueueReplaceState(e,e.state,null)}function Sc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=r_,bd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=nt(e)?gr:He.current,i.context=fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&va.enqueueReplaceState(i,i.state,null),Dl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===r_&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zf(t){var e=t._init;return e(t._payload)}function s_(t){function e(h,p){if(t){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!t)return null;for(;p!==null;)e(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=zn(h,p),h.index=0,h.sibling=null,h}function s(h,p,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,p,m,v){return p===null||p.tag!==6?(p=ku(m,h.mode,v),p.return=h,p):(p=i(p,m),p.return=h,p)}function a(h,p,m,v){var T=m.type;return T===jr?c(h,p,m.props.children,v,m.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cn&&Zf(T)===p.type)?(v=i(p,m.props),v.ref=Zi(h,p,m),v.return=h,v):(v=hl(m.type,m.key,m.props,null,h.mode,v),v.ref=Zi(h,p,m),v.return=h,v)}function u(h,p,m,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Tu(m,h.mode,v),p.return=h,p):(p=i(p,m.children||[]),p.return=h,p)}function c(h,p,m,v,T){return p===null||p.tag!==7?(p=fr(m,h.mode,v,T),p.return=h,p):(p=i(p,m),p.return=h,p)}function d(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ku(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case bo:return m=hl(p.type,p.key,p.props,null,h.mode,m),m.ref=Zi(h,null,p),m.return=h,m;case Ur:return p=Tu(p,h.mode,m),p.return=h,p;case Cn:var v=p._init;return d(h,v(p._payload),m)}if(us(p)||qi(p))return p=fr(p,h.mode,m,null),p.return=h,p;Ko(h,p)}return null}function f(h,p,m,v){var T=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(h,p,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bo:return m.key===T?a(h,p,m,v):null;case Ur:return m.key===T?u(h,p,m,v):null;case Cn:return T=m._init,f(h,p,T(m._payload),v)}if(us(m)||qi(m))return T!==null?null:c(h,p,m,v,null);Ko(h,m)}return null}function g(h,p,m,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(m)||null,l(p,h,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return h=h.get(v.key===null?m:v.key)||null,a(p,h,v,T);case Ur:return h=h.get(v.key===null?m:v.key)||null,u(p,h,v,T);case Cn:var P=v._init;return g(h,p,m,P(v._payload),T)}if(us(v)||qi(v))return h=h.get(m)||null,c(p,h,v,T,null);Ko(p,v)}return null}function _(h,p,m,v){for(var T=null,P=null,x=p,O=p=0,j=null;x!==null&&O<m.length;O++){x.index>O?(j=x,x=null):j=x.sibling;var V=f(h,x,m[O],v);if(V===null){x===null&&(x=j);break}t&&x&&V.alternate===null&&e(h,x),p=s(V,p,O),P===null?T=V:P.sibling=V,P=V,x=j}if(O===m.length)return n(h,x),he&&rr(h,O),T;if(x===null){for(;O<m.length;O++)x=d(h,m[O],v),x!==null&&(p=s(x,p,O),P===null?T=x:P.sibling=x,P=x);return he&&rr(h,O),T}for(x=r(h,x);O<m.length;O++)j=g(x,h,O,m[O],v),j!==null&&(t&&j.alternate!==null&&x.delete(j.key===null?O:j.key),p=s(j,p,O),P===null?T=j:P.sibling=j,P=j);return t&&x.forEach(function($e){return e(h,$e)}),he&&rr(h,O),T}function y(h,p,m,v){var T=qi(m);if(typeof T!="function")throw Error(k(150));if(m=T.call(m),m==null)throw Error(k(151));for(var P=T=null,x=p,O=p=0,j=null,V=m.next();x!==null&&!V.done;O++,V=m.next()){x.index>O?(j=x,x=null):j=x.sibling;var $e=f(h,x,V.value,v);if($e===null){x===null&&(x=j);break}t&&x&&$e.alternate===null&&e(h,x),p=s($e,p,O),P===null?T=$e:P.sibling=$e,P=$e,x=j}if(V.done)return n(h,x),he&&rr(h,O),T;if(x===null){for(;!V.done;O++,V=m.next())V=d(h,V.value,v),V!==null&&(p=s(V,p,O),P===null?T=V:P.sibling=V,P=V);return he&&rr(h,O),T}for(x=r(h,x);!V.done;O++,V=m.next())V=g(x,h,O,V.value,v),V!==null&&(t&&V.alternate!==null&&x.delete(V.key===null?O:V.key),p=s(V,p,O),P===null?T=V:P.sibling=V,P=V);return t&&x.forEach(function(It){return e(h,It)}),he&&rr(h,O),T}function I(h,p,m,v){if(typeof m=="object"&&m!==null&&m.type===jr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bo:e:{for(var T=m.key,P=p;P!==null;){if(P.key===T){if(T=m.type,T===jr){if(P.tag===7){n(h,P.sibling),p=i(P,m.props.children),p.return=h,h=p;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cn&&Zf(T)===P.type){n(h,P.sibling),p=i(P,m.props),p.ref=Zi(h,P,m),p.return=h,h=p;break e}n(h,P);break}else e(h,P);P=P.sibling}m.type===jr?(p=fr(m.props.children,h.mode,v,m.key),p.return=h,h=p):(v=hl(m.type,m.key,m.props,null,h.mode,v),v.ref=Zi(h,p,m),v.return=h,h=v)}return o(h);case Ur:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=i(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else e(h,p);p=p.sibling}p=Tu(m,h.mode,v),p.return=h,h=p}return o(h);case Cn:return P=m._init,I(h,p,P(m._payload),v)}if(us(m))return _(h,p,m,v);if(qi(m))return y(h,p,m,v);Ko(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,m),p.return=h,h=p):(n(h,p),p=ku(m,h.mode,v),p.return=h,h=p),o(h)):n(h,p)}return I}var mi=s_(!0),o_=s_(!1),fo={},Wt=Jn(fo),zs=Jn(fo),Bs=Jn(fo);function ur(t){if(t===fo)throw Error(k(174));return t}function Fd(t,e){switch(ae(Bs,e),ae(zs,t),ae(Wt,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tc(e,t)}ce(Wt),ae(Wt,e)}function gi(){ce(Wt),ce(zs),ce(Bs)}function l_(t){ur(Bs.current);var e=ur(Wt.current),n=tc(e,t.type);e!==n&&(ae(zs,t),ae(Wt,n))}function Ud(t){zs.current===t&&(ce(Wt),ce(zs))}var pe=Jn(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yu=[];function jd(){for(var t=0;t<yu.length;t++)yu[t]._workInProgressVersionPrimary=null;yu.length=0}var ll=gn.ReactCurrentDispatcher,wu=gn.ReactCurrentBatchConfig,vr=0,me=null,Ie=null,Ae=null,Ml=!1,ys=!1,Ws=0,NE=0;function ze(){throw Error(k(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function Bd(t,e,n,r,i,s){if(vr=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?DE:OE,t=n(r,i),ys){s=0;do{if(ys=!1,Ws=0,25<=s)throw Error(k(301));s+=1,Ae=Ie=null,e.updateQueue=null,ll.current=ME,t=n(r,i)}while(ys)}if(ll.current=Ll,e=Ie!==null&&Ie.next!==null,vr=0,Ae=Ie=me=null,Ml=!1,e)throw Error(k(300));return t}function Wd(){var t=Ws!==0;return Ws=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?me.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function Ct(){if(Ie===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Ae===null?me.memoizedState:Ae.next;if(e!==null)Ae=e,Ie=t;else{if(t===null)throw Error(k(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Ae===null?me.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function Hs(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((vr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,me.lanes|=c,yr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,bt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function a_(){}function u_(t,e){var n=me,r=Ct(),i=e(),s=!bt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,Hd(h_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Vs(9,d_.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(k(349));vr&30||c_(n,e,i)}return i}function c_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,r){e.value=n,e.getSnapshot=r,f_(e)&&p_(t)}function h_(t,e,n){return n(function(){f_(e)&&p_(t)})}function f_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function p_(t){var e=hn(t,1);e!==null&&Mt(e,t,1,-1)}function ep(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:t},e.queue=t,t=t.dispatch=AE.bind(null,me,t),[e.memoizedState,t]}function Vs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function m_(){return Ct().memoizedState}function al(t,e,n,r){var i=jt();me.flags|=t,i.memoizedState=Vs(1|e,n,void 0,r===void 0?null:r)}function ya(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&zd(r,o.deps)){i.memoizedState=Vs(e,n,s,r);return}}me.flags|=t,i.memoizedState=Vs(1|e,n,s,r)}function tp(t,e){return al(8390656,8,t,e)}function Hd(t,e){return ya(2048,8,t,e)}function g_(t,e){return ya(4,2,t,e)}function __(t,e){return ya(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,ya(4,4,v_.bind(null,e,t),n)}function Vd(){}function w_(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function E_(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function C_(t,e,n){return vr&21?(bt(n,e)||(n=kg(),me.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function PE(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=wu.transition;wu.transition={};try{t(!1),e()}finally{ne=n,wu.transition=r}}function S_(){return Ct().memoizedState}function xE(t,e,n){var r=jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I_(t))k_(e,n);else if(n=t_(t,e,n,r),n!==null){var i=qe();Mt(n,t,r,i),T_(n,e,r)}}function AE(t,e,n){var r=jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I_(t))k_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,bt(l,o)){var a=e.interleaved;a===null?(i.next=i,Ld(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=t_(t,e,i,r),n!==null&&(i=qe(),Mt(n,t,r,i),T_(n,e,r))}}function I_(t){var e=t.alternate;return t===me||e!==null&&e===me}function k_(t,e){ys=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ed(t,n)}}var Ll={readContext:Et,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},DE={readContext:Et,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xE.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:ep,useDebugValue:Vd,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=ep(!1),e=t[0];return t=PE.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=jt();if(he){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Oe===null)throw Error(k(349));vr&30||c_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tp(h_.bind(null,r,s,t),[t]),r.flags|=2048,Vs(9,d_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jt(),e=Oe.identifierPrefix;if(he){var n=tn,r=en;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OE={readContext:Et,useCallback:w_,useContext:Et,useEffect:Hd,useImperativeHandle:y_,useInsertionEffect:g_,useLayoutEffect:__,useMemo:E_,useReducer:Eu,useRef:m_,useState:function(){return Eu(Hs)},useDebugValue:Vd,useDeferredValue:function(t){var e=Ct();return C_(e,Ie.memoizedState,t)},useTransition:function(){var t=Eu(Hs)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:u_,useId:S_,unstable_isNewReconciler:!1},ME={readContext:Et,useCallback:w_,useContext:Et,useEffect:Hd,useImperativeHandle:y_,useInsertionEffect:g_,useLayoutEffect:__,useMemo:E_,useReducer:Cu,useRef:m_,useState:function(){return Cu(Hs)},useDebugValue:Vd,useDeferredValue:function(t){var e=Ct();return Ie===null?e.memoizedState=t:C_(e,Ie.memoizedState,t)},useTransition:function(){var t=Cu(Hs)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:u_,useId:S_,unstable_isNewReconciler:!1};function _i(t,e){try{var n="",r=e;do n+=aw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ic(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LE=typeof WeakMap=="function"?WeakMap:Map;function R_(t,e,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fl||(Fl=!0,Mc=r),Ic(t,e)},n}function N_(t,e,n){n=ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ic(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ic(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function np(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QE.bind(null,t,e,n),e.then(t,t))}function rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ln(-1,1),e.tag=2,Fn(n,e,1))),n.lanes|=1),t)}var bE=gn.ReactCurrentOwner,Ze=!1;function Ge(t,e,n,r){e.child=t===null?o_(e,null,n,r):mi(e,t.child,n,r)}function sp(t,e,n,r,i){n=n.render;var s=e.ref;return ii(e,i),r=Bd(t,e,n,r,s,i),n=Wd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(he&&n&&Pd(e),e.flags|=1,Ge(t,e,r,i),e.child)}function op(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,P_(t,e,s,r,i)):(t=hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bs,n(o,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function P_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(bs(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,fn(t,e,i)}return kc(t,e,n,r,i)}function x_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Qr,ot),ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Qr,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Qr,ot),ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Qr,ot),ot|=r;return Ge(t,e,i,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,r,i){var s=nt(n)?gr:He.current;return s=fi(e,s),ii(e,i),n=Bd(t,e,n,r,s,i),r=Wd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(he&&r&&Pd(e),e.flags|=1,Ge(t,e,n,i),e.child)}function lp(t,e,n,r,i){if(nt(n)){var s=!0;Rl(e)}else s=!1;if(ii(e,i),e.stateNode===null)ul(t,e),i_(e,n,r),Sc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=nt(n)?gr:He.current,u=fi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Jf(e,o,r,u),Sn=!1;var f=e.memoizedState;o.state=f,Dl(e,r,o,i),a=e.memoizedState,l!==r||f!==a||tt.current||Sn?(typeof c=="function"&&(Cc(e,n,c,r),a=e.memoizedState),(l=Sn||Xf(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,n_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Rt(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Et(a):(a=nt(n)?gr:He.current,a=fi(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Jf(e,o,r,a),Sn=!1,f=e.memoizedState,o.state=f,Dl(e,r,o,i);var _=e.memoizedState;l!==d||f!==_||tt.current||Sn?(typeof g=="function"&&(Cc(e,n,g,r),_=e.memoizedState),(u=Sn||Xf(e,n,u,r,f,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Tc(t,e,n,r,s,i)}function Tc(t,e,n,r,i,s){A_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gf(e,n,!1),fn(t,e,s);r=e.stateNode,bE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=mi(e,t.child,null,s),e.child=mi(e,null,l,s)):Ge(t,e,l,s),e.memoizedState=r.state,i&&Gf(e,n,!0),e.child}function D_(t){var e=t.stateNode;e.pendingContext?$f(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$f(t,e.context,!1),Fd(t,e.containerInfo)}function ap(t,e,n,r,i){return pi(),Ad(i),e.flags|=256,Ge(t,e,n,r),e.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function Nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function O_(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(pe,i&1),t===null)return wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ca(o,r,0,null),t=fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nc(n),e.memoizedState=Rc,t):$d(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return FE(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=zn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zn(l,s):(s=fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rc,r}return s=t.child,t=s.sibling,r=zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $d(t,e){return e=Ca({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qo(t,e,n,r){return r!==null&&Ad(r),mi(e,t.child,null,n),t=$d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Su(Error(k(422))),qo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ca({mode:"visible",children:r.children},i,0,null),s=fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mi(e,t.child,null,o),e.child.memoizedState=Nc(o),e.memoizedState=Rc,s);if(!(e.mode&1))return qo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=Su(s,r,void 0),qo(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ze||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hn(t,i),Mt(r,t,i,-1))}return Xd(),r=Su(Error(k(421))),qo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,lt=bn(i.nextSibling),at=e,he=!0,xt=null,t!==null&&(gt[_t++]=en,gt[_t++]=tn,gt[_t++]=_r,en=t.id,tn=t.overflow,_r=e),e=$d(e,r.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ec(t.return,e,n)}function Iu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function M_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Iu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Iu(e,!0,n,null,s);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UE(t,e,n){switch(e.tag){case 3:D_(e),pi();break;case 5:l_(e);break;case 1:nt(e.type)&&Rl(e);break;case 4:Fd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?O_(t,e,n):(ae(pe,pe.current&1),t=fn(t,e,n),t!==null?t.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return M_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,x_(t,e,n)}return fn(t,e,n)}var L_,Pc,b_,F_;L_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pc=function(){};b_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ur(Wt.current);var s=null;switch(n){case"input":i=Xu(t,i),r=Xu(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=ec(t,i),r=ec(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kl)}nc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ps.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ue("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};F_=function(t,e,n,r){n!==r&&(e.flags|=4)};function es(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jE(t,e,n){var r=e.pendingProps;switch(xd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return nt(e.type)&&Tl(),Be(e),null;case 3:return r=e.stateNode,gi(),ce(tt),ce(He),jd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(Fc(xt),xt=null))),Pc(t,e),Be(e),null;case 5:Ud(e);var i=ur(Bs.current);if(n=e.type,t!==null&&e.stateNode!=null)b_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Be(e),null}if(t=ur(Wt.current),Go(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zt]=e,r[js]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ds.length;i++)ue(ds[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":vf(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":wf(r,s),ue("invalid",r)}nc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&$o(r.textContent,l,t),i=["children",""+l]):Ps.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Fo(r),yf(r,s,!0);break;case"textarea":Fo(r),Ef(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zt]=e,t[js]=r,L_(t,e,!1,!1),e.stateNode=t;e:{switch(o=rc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ds.length;i++)ue(ds[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":vf(t,r),i=Xu(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ue("invalid",t);break;case"textarea":wf(t,r),i=ec(t,r),ue("invalid",t);break;default:i=r}nc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?fg(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&dg(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xs(t,a):typeof a=="number"&&xs(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ps.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ue("scroll",t):a!=null&&md(t,s,a,o))}switch(n){case"input":Fo(t),yf(t,r,!1);break;case"textarea":Fo(t),Ef(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)F_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ur(Bs.current),ur(Wt.current),Go(e)){if(r=e.stateNode,n=e.memoizedProps,r[zt]=e,(s=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:$o(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r}return Be(e),null;case 13:if(ce(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&lt!==null&&e.mode&1&&!(e.flags&128))e_(),pi(),e.flags|=98560,s=!1;else if(s=Go(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[zt]=e}else pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else xt!==null&&(Fc(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Re===0&&(Re=3):Xd())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return gi(),Pc(t,e),t===null&&Fs(e.stateNode.containerInfo),Be(e),null;case 10:return Md(e.type._context),Be(e),null;case 17:return nt(e.type)&&Tl(),Be(e),null;case 19:if(ce(pe),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)es(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,es(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>vi&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Be(e),null}else 2*we()-s.renderingStartTime>vi&&n!==1073741824&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=pe.current,ae(pe,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return Yd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ot&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function zE(t,e){switch(xd(e),e.tag){case 1:return nt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gi(),ce(tt),ce(He),jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(ce(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(pe),null;case 4:return gi(),null;case 10:return Md(e.type._context),null;case 22:case 23:return Yd(),null;case 24:return null;default:return null}}var Qo=!1,We=!1,BE=typeof WeakSet=="function"?WeakSet:Set,D=null;function qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function xc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var cp=!1;function WE(t,e){if(fc=Cl,t=Bg(),Nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:t,selectionRange:n},Cl=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,I=_.memoizedState,h=e.stateNode,p=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Rt(e.type,y),I);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){_e(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return _=cp,cp=!1,_}function ws(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xc(e,n,s)}i=i.next}while(i!==r)}}function wa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ac(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zt],delete e[js],delete e[_c],delete e[IE],delete e[kE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function j_(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||j_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}function Oc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oc(t,e,n),t=t.sibling;t!==null;)Oc(t,e,n),t=t.sibling}var Me=null,Pt=!1;function wn(t,e,n){for(n=n.child;n!==null;)z_(t,e,n),n=n.sibling}function z_(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:We||qr(n,e);case 6:var r=Me,i=Pt;Me=null,wn(t,e,n),Me=r,Pt=i,Me!==null&&(Pt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Pt?(t=Me,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),Ms(t)):_u(Me,n.stateNode));break;case 4:r=Me,i=Pt,Me=n.stateNode.containerInfo,Pt=!0,wn(t,e,n),Me=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xc(n,e,o),i=i.next}while(i!==r)}wn(t,e,n);break;case 1:if(!We&&(qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}wn(t,e,n);break;case 21:wn(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,wn(t,e,n),We=r):wn(t,e,n);break;default:wn(t,e,n)}}function hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BE),e.forEach(function(r){var i=XE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Pt=!1;break e;case 3:Me=l.stateNode.containerInfo,Pt=!0;break e;case 4:Me=l.stateNode.containerInfo,Pt=!0;break e}l=l.return}if(Me===null)throw Error(k(160));z_(s,o,i),Me=null,Pt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)B_(e,t),e=e.sibling}function B_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tt(e,t),Ut(t),r&4){try{ws(3,t,t.return),wa(3,t)}catch(y){_e(t,t.return,y)}try{ws(5,t,t.return)}catch(y){_e(t,t.return,y)}}break;case 1:Tt(e,t),Ut(t),r&512&&n!==null&&qr(n,n.return);break;case 5:if(Tt(e,t),Ut(t),r&512&&n!==null&&qr(n,n.return),t.flags&32){var i=t.stateNode;try{xs(i,"")}catch(y){_e(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ag(i,s),rc(l,o);var u=rc(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?fg(i,d):c==="dangerouslySetInnerHTML"?dg(i,d):c==="children"?xs(i,d):md(i,c,d,u)}switch(l){case"input":Ju(i,s);break;case"textarea":ug(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ei(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[js]=s}catch(y){_e(t,t.return,y)}}break;case 6:if(Tt(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){_e(t,t.return,y)}}break;case 3:if(Tt(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(e.containerInfo)}catch(y){_e(t,t.return,y)}break;case 4:Tt(e,t),Ut(t);break;case 13:Tt(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qd=we())),r&4&&hp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(We=(u=We)||c,Tt(e,t),We=u):Tt(e,t),Ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(d=D=c;D!==null;){switch(f=D,g=f.child,f.tag){case 0:case 11:case 14:case 15:ws(4,f,f.return);break;case 1:qr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){_e(r,n,y)}}break;case 5:qr(f,f.return);break;case 22:if(f.memoizedState!==null){pp(d);continue}}g!==null?(g.return=f,D=g):pp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=hg("display",o))}catch(y){_e(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){_e(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Tt(e,t),Ut(t),r&4&&hp(t);break;case 21:break;default:Tt(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(j_(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xs(i,""),r.flags&=-33);var s=dp(t);Oc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=dp(t);Dc(t,l,o);break;default:throw Error(k(161))}}catch(a){_e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HE(t,e,n){D=t,W_(t)}function W_(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||We;l=Qo;var u=We;if(Qo=o,(We=a)&&!u)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?mp(i):a!==null?(a.return=o,D=a):mp(i);for(;s!==null;)D=s,W_(s),s=s.sibling;D=i,Qo=l,We=u}fp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):fp(t)}}function fp(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||wa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ms(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}We||e.flags&512&&Ac(e)}catch(f){_e(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function pp(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function mp(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wa(4,e)}catch(a){_e(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){_e(e,i,a)}}var s=e.return;try{Ac(e)}catch(a){_e(e,s,a)}break;case 5:var o=e.return;try{Ac(e)}catch(a){_e(e,o,a)}}}catch(a){_e(e,e.return,a)}if(e===t){D=null;break}var l=e.sibling;if(l!==null){l.return=e.return,D=l;break}D=e.return}}var VE=Math.ceil,bl=gn.ReactCurrentDispatcher,Gd=gn.ReactCurrentOwner,wt=gn.ReactCurrentBatchConfig,J=0,Oe=null,Ce=null,be=0,ot=0,Qr=Jn(0),Re=0,$s=null,yr=0,Ea=0,Kd=0,Es=null,Je=null,qd=0,vi=1/0,Xt=null,Fl=!1,Mc=null,Un=null,Yo=!1,An=null,Ul=0,Cs=0,Lc=null,cl=-1,dl=0;function qe(){return J&6?we():cl!==-1?cl:cl=we()}function jn(t){return t.mode&1?J&2&&be!==0?be&-be:RE.transition!==null?(dl===0&&(dl=kg()),dl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:Dg(t.type)),t):1}function Mt(t,e,n,r){if(50<Cs)throw Cs=0,Lc=null,Error(k(185));uo(t,n,r),(!(J&2)||t!==Oe)&&(t===Oe&&(!(J&2)&&(Ea|=n),Re===4&&kn(t,be)),rt(t,r),n===1&&J===0&&!(e.mode&1)&&(vi=we()+500,_a&&Zn()))}function rt(t,e){var n=t.callbackNode;Rw(t,e);var r=El(t,t===Oe?be:0);if(r===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?TE(gp.bind(null,t)):Xg(gp.bind(null,t)),CE(function(){!(J&6)&&Zn()}),n=null;else{switch(Tg(r)){case 1:n=wd;break;case 4:n=Sg;break;case 16:n=wl;break;case 536870912:n=Ig;break;default:n=wl}n=Y_(n,H_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H_(t,e){if(cl=-1,dl=0,J&6)throw Error(k(327));var n=t.callbackNode;if(si()&&t.callbackNode!==n)return null;var r=El(t,t===Oe?be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jl(t,r);else{e=r;var i=J;J|=2;var s=$_();(Oe!==t||be!==e)&&(Xt=null,vi=we()+500,hr(t,e));do try{KE();break}catch(l){V_(t,l)}while(1);Od(),bl.current=s,J=i,Ce!==null?e=0:(Oe=null,be=0,e=Re)}if(e!==0){if(e===2&&(i=ac(t),i!==0&&(r=i,e=bc(t,i))),e===1)throw n=$s,hr(t,0),kn(t,r),rt(t,we()),n;if(e===6)kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!$E(i)&&(e=jl(t,r),e===2&&(s=ac(t),s!==0&&(r=s,e=bc(t,s))),e===1))throw n=$s,hr(t,0),kn(t,r),rt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:ir(t,Je,Xt);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=qd+500-we(),10<e)){if(El(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gc(ir.bind(null,t,Je,Xt),e);break}ir(t,Je,Xt);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VE(r/1960))-r,10<r){t.timeoutHandle=gc(ir.bind(null,t,Je,Xt),r);break}ir(t,Je,Xt);break;case 5:ir(t,Je,Xt);break;default:throw Error(k(329))}}}return rt(t,we()),t.callbackNode===n?H_.bind(null,t):null}function bc(t,e){var n=Es;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=jl(t,e),t!==2&&(e=Je,Je=n,e!==null&&Fc(e)),t}function Fc(t){Je===null?Je=t:Je.push.apply(Je,t)}function $E(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~Kd,e&=~Ea,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function gp(t){if(J&6)throw Error(k(327));si();var e=El(t,0);if(!(e&1))return rt(t,we()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var r=ac(t);r!==0&&(e=r,n=bc(t,r))}if(n===1)throw n=$s,hr(t,0),kn(t,e),rt(t,we()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,Je,Xt),rt(t,we()),null}function Qd(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(vi=we()+500,_a&&Zn())}}function wr(t){An!==null&&An.tag===0&&!(J&6)&&si();var e=J;J|=1;var n=wt.transition,r=ne;try{if(wt.transition=null,ne=1,t)return t()}finally{ne=r,wt.transition=n,J=e,!(J&6)&&Zn()}}function Yd(){ot=Qr.current,ce(Qr)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,EE(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(xd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:gi(),ce(tt),ce(He),jd();break;case 5:Ud(r);break;case 4:gi();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:Md(r.type._context);break;case 22:case 23:Yd()}n=n.return}if(Oe=t,Ce=t=zn(t.current,null),be=ot=e,Re=0,$s=null,Kd=Ea=yr=0,Je=Es=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ar=null}return t}function V_(t,e){do{var n=Ce;try{if(Od(),ll.current=Ll,Ml){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ml=!1}if(vr=0,Ae=Ie=me=null,ys=!1,Ws=0,Gd.current=null,n===null||n.return===null){Re=1,$s=e,Ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=be,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=rp(o);if(g!==null){g.flags&=-257,ip(g,o,l,s,e),g.mode&1&&np(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){np(s,u,e),Xd();break e}a=Error(k(426))}}else if(he&&l.mode&1){var I=rp(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ip(I,o,l,s,e),Ad(_i(a,l));break e}}s=a=_i(a,l),Re!==4&&(Re=2),Es===null?Es=[s]:Es.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=R_(s,a,e);Qf(s,h);break e;case 1:l=a;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Un===null||!Un.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=N_(s,l,e);Qf(s,v);break e}}s=s.return}while(s!==null)}K_(n)}catch(T){e=T,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function $_(){var t=bl.current;return bl.current=Ll,t===null?Ll:t}function Xd(){(Re===0||Re===3||Re===2)&&(Re=4),Oe===null||!(yr&268435455)&&!(Ea&268435455)||kn(Oe,be)}function jl(t,e){var n=J;J|=2;var r=$_();(Oe!==t||be!==e)&&(Xt=null,hr(t,e));do try{GE();break}catch(i){V_(t,i)}while(1);if(Od(),J=n,bl.current=r,Ce!==null)throw Error(k(261));return Oe=null,be=0,Re}function GE(){for(;Ce!==null;)G_(Ce)}function KE(){for(;Ce!==null&&!vw();)G_(Ce)}function G_(t){var e=Q_(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?K_(t):Ce=e,Gd.current=null}function K_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zE(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,Ce=null;return}}else if(n=jE(n,e,ot),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);Re===0&&(Re=5)}function ir(t,e,n){var r=ne,i=wt.transition;try{wt.transition=null,ne=1,qE(t,e,n,r)}finally{wt.transition=i,ne=r}return null}function qE(t,e,n,r){do si();while(An!==null);if(J&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nw(t,s),t===Oe&&(Ce=Oe=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,Y_(wl,function(){return si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var o=ne;ne=1;var l=J;J|=4,Gd.current=null,WE(t,n),B_(n,t),pE(pc),Cl=!!fc,pc=fc=null,t.current=n,HE(n),yw(),J=l,ne=o,wt.transition=s}else t.current=n;if(Yo&&(Yo=!1,An=t,Ul=i),s=t.pendingLanes,s===0&&(Un=null),Cw(n.stateNode),rt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,t=Mc,Mc=null,t;return Ul&1&&t.tag!==0&&si(),s=t.pendingLanes,s&1?t===Lc?Cs++:(Cs=0,Lc=t):Cs=0,Zn(),null}function si(){if(An!==null){var t=Tg(Ul),e=wt.transition,n=ne;try{if(wt.transition=null,ne=16>t?16:t,An===null)var r=!1;else{if(t=An,An=null,Ul=0,J&6)throw Error(k(331));var i=J;for(J|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:ws(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var f=c.sibling,g=c.return;if(U_(c),c===u){D=null;break}if(f!==null){f.return=g,D=f;break}D=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ws(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,D=h;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,D=m;else e:for(o=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wa(9,l)}}catch(T){_e(l,l.return,T)}if(l===o){D=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,D=v;break e}D=l.return}}if(J=i,Zn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(ha,t)}catch{}r=!0}return r}finally{ne=n,wt.transition=e}}return!1}function _p(t,e,n){e=_i(n,e),e=R_(t,e,1),t=Fn(t,e,1),e=qe(),t!==null&&(uo(t,1,e),rt(t,e))}function _e(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=_i(n,t),t=N_(e,t,1),e=Fn(e,t,1),t=qe(),e!==null&&(uo(e,1,t),rt(e,t));break}}e=e.return}}function QE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(be&n)===n&&(Re===4||Re===3&&(be&130023424)===be&&500>we()-qd?hr(t,0):Kd|=n),rt(t,e)}function q_(t,e){e===0&&(t.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var n=qe();t=hn(t,e),t!==null&&(uo(t,e,n),rt(t,n))}function YE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q_(t,n)}function XE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),q_(t,n)}var Q_;Q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,UE(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,he&&e.flags&1048576&&Jg(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ul(t,e),t=e.pendingProps;var i=fi(e,He.current);ii(e,n),i=Bd(null,e,r,t,i,n);var s=Wd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,Rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bd(e),i.updater=va,e.stateNode=i,i._reactInternals=e,Sc(e,r,t,n),e=Tc(null,e,r,!0,s,n)):(e.tag=0,he&&s&&Pd(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ZE(r),t=Rt(r,t),i){case 0:e=kc(null,e,r,t,n);break e;case 1:e=lp(null,e,r,t,n);break e;case 11:e=sp(null,e,r,t,n);break e;case 14:e=op(null,e,r,Rt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),kc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),lp(t,e,r,i,n);case 3:e:{if(D_(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,n_(t,e),Dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_i(Error(k(423)),e),e=ap(t,e,r,n,i);break e}else if(r!==i){i=_i(Error(k(424)),e),e=ap(t,e,r,n,i);break e}else for(lt=bn(e.stateNode.containerInfo.firstChild),at=e,he=!0,xt=null,n=o_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){e=fn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return l_(e),t===null&&wc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mc(r,i)?o=null:s!==null&&mc(r,s)&&(e.flags|=32),A_(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&wc(e),null;case 13:return O_(t,e,n);case 4:return Fd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mi(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),sp(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(xl,r._currentValue),r._currentValue=o,s!==null)if(bt(s.value,o)){if(s.children===i.children&&!tt.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=ln(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ec(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ec(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ii(e,n),i=Et(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=Rt(r,e.pendingProps),i=Rt(r.type,i),op(t,e,r,i,n);case 15:return P_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),ul(t,e),e.tag=1,nt(r)?(t=!0,Rl(e)):t=!1,ii(e,n),i_(e,r,i),Sc(e,r,i,n),Tc(null,e,r,!0,t,n);case 19:return M_(t,e,n);case 22:return x_(t,e,n)}throw Error(k(156,e.tag))};function Y_(t,e){return Cg(t,e)}function JE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new JE(t,e,n,r)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZE(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_d)return 11;if(t===vd)return 14}return 2}function zn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return fr(n.children,i,s,e);case gd:o=8,i|=8;break;case Ku:return t=vt(12,n,e,i|2),t.elementType=Ku,t.lanes=s,t;case qu:return t=vt(13,n,e,i),t.elementType=qu,t.lanes=s,t;case Qu:return t=vt(19,n,e,i),t.elementType=Qu,t.lanes=s,t;case sg:return Ca(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:o=10;break e;case ig:o=9;break e;case _d:o=11;break e;case vd:o=14;break e;case Cn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fr(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function Ca(t,e,n,r){return t=vt(22,t,r,e),t.elementType=sg,t.lanes=n,t.stateNode={isHidden:!1},t}function ku(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Tu(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,r,i,s,o,l,a){return t=new eC(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bd(s),t}function tC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function X_(t){if(!t)return Kn;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(nt(n))return Yg(t,n,e)}return e}function J_(t,e,n,r,i,s,o,l,a){return t=Zd(n,r,!0,t,i,s,o,l,a),t.context=X_(null),n=t.current,r=qe(),i=jn(n),s=ln(r,i),s.callback=e??null,Fn(n,s,i),t.current.lanes=i,uo(t,i,r),rt(t,r),t}function Sa(t,e,n,r){var i=e.current,s=qe(),o=jn(i);return n=X_(n),e.context===null?e.context=n:e.pendingContext=n,e=ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fn(i,e,o),t!==null&&(Mt(t,i,o,s),ol(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eh(t,e){vp(t,e),(t=t.alternate)&&vp(t,e)}function nC(){return null}var Z_=typeof reportError=="function"?reportError:function(t){console.error(t)};function th(t){this._internalRoot=t}Ia.prototype.render=th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Sa(t,e,null,null)};Ia.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Sa(null,t,null,null)}),e[dn]=null}};function Ia(t){this._internalRoot=t}Ia.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<In.length&&e!==0&&e<In[n].priority;n++);In.splice(n,0,t),n===0&&Ag(t)}};function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function rC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zl(o);s.call(u)}}var o=J_(e,r,t,0,null,!1,!1,"",yp);return t._reactRootContainer=o,t[dn]=o.current,Fs(t.nodeType===8?t.parentNode:t),wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=zl(a);l.call(u)}}var a=Zd(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=a,t[dn]=a.current,Fs(t.nodeType===8?t.parentNode:t),wr(function(){Sa(e,a,n,r)}),a}function Ta(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=zl(o);l.call(a)}}Sa(e,o,t,i)}else o=rC(n,e,t,i,r);return zl(o)}Rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=cs(e.pendingLanes);n!==0&&(Ed(e,n|1),rt(e,we()),!(J&6)&&(vi=we()+500,Zn()))}break;case 13:wr(function(){var r=hn(t,1);if(r!==null){var i=qe();Mt(r,t,1,i)}}),eh(t,1)}};Cd=function(t){if(t.tag===13){var e=hn(t,134217728);if(e!==null){var n=qe();Mt(e,t,134217728,n)}eh(t,134217728)}};Ng=function(t){if(t.tag===13){var e=jn(t),n=hn(t,e);if(n!==null){var r=qe();Mt(n,t,e,r)}eh(t,e)}};Pg=function(){return ne};xg=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};sc=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ga(r);if(!i)throw Error(k(90));lg(r),Ju(r,i)}}}break;case"textarea":ug(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};gg=Qd;_g=wr;var iC={usingClientEntryPoint:!1,Events:[ho,Hr,ga,pg,mg,Qd]},ts={findFiberByHostInstance:lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sC={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wg(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||nC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{ha=Xo.inject(sC),Bt=Xo}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iC;ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(e))throw Error(k(200));return tC(t,e,null,n)};ct.createRoot=function(t,e){if(!nh(t))throw Error(k(299));var n=!1,r="",i=Z_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,r,i),t[dn]=e.current,Fs(t.nodeType===8?t.parentNode:t),new th(e)};ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=wg(e),t=t===null?null:t.stateNode,t};ct.flushSync=function(t){return wr(t)};ct.hydrate=function(t,e,n){if(!ka(e))throw Error(k(200));return Ta(null,t,e,!0,n)};ct.hydrateRoot=function(t,e,n){if(!nh(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Z_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=J_(e,null,t,1,n??null,i,!1,s,o),t[dn]=e.current,Fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ia(e)};ct.render=function(t,e,n){if(!ka(e))throw Error(k(200));return Ta(null,t,e,!1,n)};ct.unmountComponentAtNode=function(t){if(!ka(t))throw Error(k(40));return t._reactRootContainer?(wr(function(){Ta(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1};ct.unstable_batchedUpdates=Qd;ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ka(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Ta(t,e,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev)}catch(t){console.error(t)}}ev(),Jm.exports=ct;var oC=Jm.exports,wp=oC;$u.createRoot=wp.createRoot,$u.hydrateRoot=wp.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function te(){return te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},te.apply(this,arguments)}var Ee;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ee||(Ee={}));const Ep="popstate";function lC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Gs("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Er(i)}return uC(e,n,null,t)}function q(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aC(){return Math.random().toString(36).substr(2,8)}function Cp(t,e){return{usr:t.state,key:t.key,idx:e}}function Gs(t,e,n,r){return n===void 0&&(n=null),te({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_n(e):e,{state:n,key:e&&e.key||r||aC()})}function Er(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _n(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Ee.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(te({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Ee.Pop;let I=c(),h=I==null?null:I-u;u=I,a&&a({action:l,location:y.location,delta:h})}function f(I,h){l=Ee.Push;let p=Gs(y.location,I,h);n&&n(p,I),u=c()+1;let m=Cp(p,u),v=y.createHref(p);try{o.pushState(m,"",v)}catch{i.location.assign(v)}s&&a&&a({action:l,location:y.location,delta:1})}function g(I,h){l=Ee.Replace;let p=Gs(y.location,I,h);n&&n(p,I),u=c();let m=Cp(p,u),v=y.createHref(p);o.replaceState(m,"",v),s&&a&&a({action:l,location:y.location,delta:0})}function _(I){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof I=="string"?I:Er(I);return q(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let y={get action(){return l},get location(){return t(i,o)},listen(I){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Ep,d),a=I,()=>{i.removeEventListener(Ep,d),a=null}},createHref(I){return e(i,I)},createURL:_,encodeLocation(I){let h=_(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:g,go(I){return o.go(I)}};return y}var Se;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Se||(Se={}));const cC=new Set(["lazy","caseSensitive","path","id","index","children"]);function dC(t){return t.index===!0}function Uc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],l=typeof i.id=="string"?i.id:o.join("-");if(q(i.index!==!0||!i.children,"Cannot specify children on an index route"),q(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),dC(i)){let a=te({},i,e(i),{id:l});return r[l]=a,a}else{let a=te({},i,e(i),{id:l,children:void 0});return r[l]=a,i.children&&(a.children=Uc(i.children,e,o,r)),a}})}function Yr(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_n(e):e,i=Di(r.pathname||"/",n);if(i==null)return null;let s=tv(t);hC(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=EC(s[l],IC(i));return o}function tv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=an([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),tv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of nv(s.path))i(s,o,a)}),e}function nv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=nv(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function hC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fC=/^:\w+$/,pC=3,mC=2,gC=1,_C=10,vC=-2,Sp=t=>t==="*";function yC(t,e){let n=t.split("/"),r=n.length;return n.some(Sp)&&(r+=vC),e&&(r+=mC),n.filter(i=>!Sp(i)).reduce((i,s)=>i+(fC.test(s)?pC:s===""?gC:_C),r)}function wC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function EC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=CC({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:an([i,c.pathname]),pathnameBase:NC(an([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=an([i,c.pathnameBase]))}return s}function CC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=l[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=kC(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function SC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function IC(t){try{return decodeURI(t)}catch(e){return yi(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function kC(t,e){try{return decodeURIComponent(t)}catch(n){return yi(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Di(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function TC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_n(t):t;return{pathname:n?n.startsWith("/")?n:RC(n,e):e,search:PC(r),hash:xC(i)}}function RC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ru(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function po(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ra(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_n(t):(i=te({},t),q(!i.pathname||!i.pathname.includes("?"),Ru("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),Ru("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),Ru("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=TC(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const an=t=>t.join("/").replace(/\/\/+/g,"/"),NC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class rh{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function rv(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iv=["post","put","patch","delete"],AC=new Set(iv),DC=["get",...iv],OC=new Set(DC),MC=new Set([301,302,303,307,308]),LC=new Set([307,308]),Nu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},bC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Ip={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ov=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FC=!ov,UC=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function jC(t){q(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e;if(t.mapRouteProperties)e=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;e=E=>({hasErrorBoundary:w(E)})}else e=UC;let n={},r=Uc(t.routes,e,void 0,n),i,s=t.basename||"/",o=te({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),l=null,a=new Set,u=null,c=null,d=null,f=t.hydrationData!=null,g=Yr(r,t.history.location,s),_=null;if(g==null){let w=Nt(404,{pathname:t.history.location.pathname}),{matches:E,route:C}=Ap(r);g=E,_={[C.id]:w}}let y=!g.some(w=>w.route.lazy)&&(!g.some(w=>w.route.loader)||t.hydrationData!=null),I,h={historyAction:t.history.action,location:t.history.location,matches:g,initialized:y,navigation:Nu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||_,fetchers:new Map,blockers:new Map},p=Ee.Pop,m=!1,v,T=!1,P=!1,x=[],O=[],j=new Map,V=0,$e=-1,It=new Map,kt=new Set,Kt=new Map,qt=new Map,ht=new Map,tr=!1;function A(){return l=t.history.listen(w=>{let{action:E,location:C,delta:M}=w;if(tr){tr=!1;return}yi(ht.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let L=uf({currentLocation:h.location,nextLocation:C,historyAction:E});if(L&&M!=null){tr=!0,t.history.go(M*-1),Ao(L,{state:"blocked",location:C,proceed(){Ao(L,{state:"proceeding",proceed:void 0,reset:void 0,location:C}),t.history.go(M)},reset(){Gi(L),G({blockers:new Map(I.state.blockers)})}});return}return ft(E,C)}),h.initialized||ft(Ee.Pop,h.location),I}function W(){l&&l(),a.clear(),v&&v.abort(),h.fetchers.forEach((w,E)=>Ka(E)),h.blockers.forEach((w,E)=>Gi(E))}function $(w){return a.add(w),()=>a.delete(w)}function G(w){h=te({},h,w),a.forEach(E=>E(h))}function de(w,E){var C,M;let L=h.actionData!=null&&h.navigation.formMethod!=null&&Jt(h.navigation.formMethod)&&h.navigation.state==="loading"&&((C=w.state)==null?void 0:C._isRedirect)!==!0,B;E.actionData?Object.keys(E.actionData).length>0?B=E.actionData:B=null:L?B=h.actionData:B=null;let H=E.loaderData?xp(h.loaderData,E.loaderData,E.matches||[],E.errors):h.loaderData;for(let[b]of ht)Gi(b);let U=m===!0||h.navigation.formMethod!=null&&Jt(h.navigation.formMethod)&&((M=w.state)==null?void 0:M._isRedirect)!==!0;i&&(r=i,i=void 0),G(te({},E,{actionData:B,loaderData:H,historyAction:p,location:w,initialized:!0,navigation:Nu,revalidation:"idle",restoreScrollPosition:cf(w,E.matches||h.matches),preventScrollReset:U,blockers:new Map(h.blockers)})),T||p===Ee.Pop||(p===Ee.Push?t.history.push(w,w.state):p===Ee.Replace&&t.history.replace(w,w.state)),p=Ee.Pop,m=!1,T=!1,P=!1,x=[],O=[]}async function nr(w,E){if(typeof w=="number"){t.history.go(w);return}let C=jc(h.location,h.matches,s,o.v7_prependBasename,w,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:M,submission:L,error:B}=kp(o.v7_normalizeFormMethod,!1,C,E),H=h.location,U=Gs(h.location,M,E&&E.state);U=te({},U,t.history.encodeLocation(U));let b=E&&E.replace!=null?E.replace:void 0,Z=Ee.Push;b===!0?Z=Ee.Replace:b===!1||L!=null&&Jt(L.formMethod)&&L.formAction===h.location.pathname+h.location.search&&(Z=Ee.Replace);let re=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,je=uf({currentLocation:H,nextLocation:U,historyAction:Z});if(je){Ao(je,{state:"blocked",location:U,proceed(){Ao(je,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),nr(w,E)},reset(){Gi(je),G({blockers:new Map(h.blockers)})}});return}return await ft(Z,U,{submission:L,pendingError:B,preventScrollReset:re,replace:E&&E.replace})}function Qt(){if($a(),G({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){ft(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}ft(p||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function ft(w,E,C){v&&v.abort(),v=null,p=w,T=(C&&C.startUninterruptedRevalidation)===!0,A0(h.location,h.matches),m=(C&&C.preventScrollReset)===!0;let M=i||r,L=C&&C.overrideNavigation,B=Yr(M,E,s);if(!B){let Ne=Nt(404,{pathname:E.pathname}),{matches:Pe,route:pt}=Ap(M);qa(),de(E,{matches:Pe,loaderData:{},errors:{[pt.id]:Ne}});return}if(h.initialized&&VC(h.location,E)&&!(C&&C.submission&&Jt(C.submission.formMethod))){de(E,{matches:B});return}v=new AbortController;let H=rs(t.history,E,v.signal,C&&C.submission),U,b;if(C&&C.pendingError)b={[Xr(B).route.id]:C.pendingError};else if(C&&C.submission&&Jt(C.submission.formMethod)){let Ne=await Yt(H,E,C.submission,B,{replace:C.replace});if(Ne.shortCircuited)return;U=Ne.pendingActionData,b=Ne.pendingActionError,L=te({state:"loading",location:E},C.submission),H=new Request(H.url,{signal:H.signal})}let{shortCircuited:Z,loaderData:re,errors:je}=await Or(H,E,B,L,C&&C.submission,C&&C.fetcherSubmission,C&&C.replace,U,b);Z||(v=null,de(E,te({matches:B},U?{actionData:U}:{},{loaderData:re,errors:je})))}async function Yt(w,E,C,M,L){$a();let B=te({state:"submitting",location:E},C);G({navigation:B});let H,U=zc(M,E);if(!U.route.action&&!U.route.lazy)H={type:Se.error,error:Nt(405,{method:w.method,pathname:E.pathname,routeId:U.route.id})};else if(H=await ns("action",w,U,M,n,e,s),w.signal.aborted)return{shortCircuited:!0};if(oi(H)){let b;return L&&L.replace!=null?b=L.replace:b=H.location===h.location.pathname+h.location.search,await $i(h,H,{submission:C,replace:b}),{shortCircuited:!0}}if(Ss(H)){let b=Xr(M,U.route.id);return(L&&L.replace)!==!0&&(p=Ee.Push),{pendingActionData:{},pendingActionError:{[b.route.id]:H.error}}}if(cr(H))throw Nt(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:H.data}}}async function Or(w,E,C,M,L,B,H,U,b){let Z=M;Z||(Z=te({state:"loading",location:E,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},L));let re=L||B?L||B:Z.formMethod&&Z.formAction&&Z.formData&&Z.formEncType?{formMethod:Z.formMethod,formAction:Z.formAction,formData:Z.formData,formEncType:Z.formEncType}:void 0,je=i||r,[Ne,Pe]=Tp(t.history,h,C,re,E,P,x,O,Kt,je,s,U,b);if(qa(fe=>!(C&&C.some(mt=>mt.route.id===fe))||Ne&&Ne.some(mt=>mt.route.id===fe)),Ne.length===0&&Pe.length===0){let fe=lf();return de(E,te({matches:C,loaderData:{},errors:b||null},U?{actionData:U}:{},fe?{fetchers:new Map(h.fetchers)}:{})),{shortCircuited:!0}}if(!T){Pe.forEach(mt=>{let Lr=h.fetchers.get(mt.key),Za={state:"loading",data:Lr&&Lr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(mt.key,Za)});let fe=U||h.actionData;G(te({navigation:Z},fe?Object.keys(fe).length===0?{actionData:null}:{actionData:fe}:{},Pe.length>0?{fetchers:new Map(h.fetchers)}:{}))}$e=++V,Pe.forEach(fe=>{fe.controller&&j.set(fe.key,fe.controller)});let pt=()=>Pe.forEach(fe=>Mr(fe.key));v&&v.signal.addEventListener("abort",pt);let{results:Ki,loaderResults:Qa,fetcherResults:Do}=await sf(h.matches,C,Ne,Pe,w);if(w.signal.aborted)return{shortCircuited:!0};v&&v.signal.removeEventListener("abort",pt),Pe.forEach(fe=>j.delete(fe.key));let yn=Dp(Ki);if(yn)return await $i(h,yn,{replace:H}),{shortCircuited:!0};let{loaderData:Oo,errors:Ya}=Pp(h,C,Ne,Qa,b,Pe,Do,qt);qt.forEach((fe,mt)=>{fe.subscribe(Lr=>{(Lr||fe.done)&&qt.delete(mt)})});let Xa=lf(),Ja=af($e),Mo=Xa||Ja||Pe.length>0;return te({loaderData:Oo,errors:Ya},Mo?{fetchers:new Map(h.fetchers)}:{})}function rf(w){return h.fetchers.get(w)||bC}function T0(w,E,C,M){if(FC)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");j.has(w)&&Mr(w);let L=i||r,B=jc(h.location,h.matches,s,o.v7_prependBasename,C,E,M==null?void 0:M.relative),H=Yr(L,B,s);if(!H){Ga(w,E,Nt(404,{pathname:B}));return}let{path:U,submission:b}=kp(o.v7_normalizeFormMethod,!0,B,M),Z=zc(H,U);if(m=(M&&M.preventScrollReset)===!0,b&&Jt(b.formMethod)){R0(w,E,U,Z,H,b);return}Kt.set(w,{routeId:E,path:U}),N0(w,E,U,Z,H,b)}async function R0(w,E,C,M,L,B){if($a(),Kt.delete(w),!M.route.action&&!M.route.lazy){let st=Nt(405,{method:B.formMethod,pathname:C,routeId:E});Ga(w,E,st);return}let H=h.fetchers.get(w),U=te({state:"submitting"},B,{data:H&&H.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(w,U),G({fetchers:new Map(h.fetchers)});let b=new AbortController,Z=rs(t.history,C,b.signal,B);j.set(w,b);let re=await ns("action",Z,M,L,n,e,s);if(Z.signal.aborted){j.get(w)===b&&j.delete(w);return}if(oi(re)){j.delete(w),kt.add(w);let st=te({state:"loading"},B,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(w,st),G({fetchers:new Map(h.fetchers)}),$i(h,re,{submission:B,isFetchActionRedirect:!0})}if(Ss(re)){Ga(w,E,re.error);return}if(cr(re))throw Nt(400,{type:"defer-action"});let je=h.navigation.location||h.location,Ne=rs(t.history,je,b.signal),Pe=i||r,pt=h.navigation.state!=="idle"?Yr(Pe,h.navigation.location,s):h.matches;q(pt,"Didn't find any matches after fetcher action");let Ki=++V;It.set(w,Ki);let Qa=te({state:"loading",data:re.data},B,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(w,Qa);let[Do,yn]=Tp(t.history,h,pt,B,je,P,x,O,Kt,Pe,s,{[M.route.id]:re.data},void 0);yn.filter(st=>st.key!==w).forEach(st=>{let eu=st.key,df=h.fetchers.get(eu),O0={state:"loading",data:df&&df.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(eu,O0),st.controller&&j.set(eu,st.controller)}),G({fetchers:new Map(h.fetchers)});let Oo=()=>yn.forEach(st=>Mr(st.key));b.signal.addEventListener("abort",Oo);let{results:Ya,loaderResults:Xa,fetcherResults:Ja}=await sf(h.matches,pt,Do,yn,Ne);if(b.signal.aborted)return;b.signal.removeEventListener("abort",Oo),It.delete(w),j.delete(w),yn.forEach(st=>j.delete(st.key));let Mo=Dp(Ya);if(Mo)return $i(h,Mo);let{loaderData:fe,errors:mt}=Pp(h,h.matches,Do,Xa,void 0,yn,Ja,qt),Lr={state:"idle",data:re.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(w,Lr);let Za=af(Ki);h.navigation.state==="loading"&&Ki>$e?(q(p,"Expected pending action"),v&&v.abort(),de(h.navigation.location,{matches:pt,loaderData:fe,errors:mt,fetchers:new Map(h.fetchers)})):(G(te({errors:mt,loaderData:xp(h.loaderData,fe,pt,mt)},Za?{fetchers:new Map(h.fetchers)}:{})),P=!1)}async function N0(w,E,C,M,L,B){let H=h.fetchers.get(w),U=te({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},B,{data:H&&H.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(w,U),G({fetchers:new Map(h.fetchers)});let b=new AbortController,Z=rs(t.history,C,b.signal);j.set(w,b);let re=await ns("loader",Z,M,L,n,e,s);if(cr(re)&&(re=await cv(re,Z.signal,!0)||re),j.get(w)===b&&j.delete(w),Z.signal.aborted)return;if(oi(re)){kt.add(w),await $i(h,re);return}if(Ss(re)){let Ne=Xr(h.matches,E);h.fetchers.delete(w),G({fetchers:new Map(h.fetchers),errors:{[Ne.route.id]:re.error}});return}q(!cr(re),"Unhandled fetcher deferred data");let je={state:"idle",data:re.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(w,je),G({fetchers:new Map(h.fetchers)})}async function $i(w,E,C){var M;let{submission:L,replace:B,isFetchActionRedirect:H}=C===void 0?{}:C;E.revalidate&&(P=!0);let U=Gs(w.location,E.location,te({_isRedirect:!0},H?{_isFetchActionRedirect:!0}:{}));if(q(U,"Expected a location on the redirect navigation"),sv.test(E.location)&&ov&&typeof((M=window)==null?void 0:M.location)<"u"){let Pe=t.history.createURL(E.location),pt=Di(Pe.pathname,s)==null;if(window.location.origin!==Pe.origin||pt){B?window.location.replace(E.location):window.location.assign(E.location);return}}v=null;let b=B===!0?Ee.Replace:Ee.Push,{formMethod:Z,formAction:re,formEncType:je,formData:Ne}=w.navigation;!L&&Z&&re&&Ne&&je&&(L={formMethod:Z,formAction:re,formEncType:je,formData:Ne}),LC.has(E.status)&&L&&Jt(L.formMethod)?await ft(b,U,{submission:te({},L,{formAction:E.location}),preventScrollReset:m}):H?await ft(b,U,{overrideNavigation:{state:"loading",location:U,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:L,preventScrollReset:m}):await ft(b,U,{overrideNavigation:{state:"loading",location:U,formMethod:L?L.formMethod:void 0,formAction:L?L.formAction:void 0,formEncType:L?L.formEncType:void 0,formData:L?L.formData:void 0},preventScrollReset:m})}async function sf(w,E,C,M,L){let B=await Promise.all([...C.map(b=>ns("loader",L,b,E,n,e,s)),...M.map(b=>b.matches&&b.match&&b.controller?ns("loader",rs(t.history,b.path,b.controller.signal),b.match,b.matches,n,e,s):{type:Se.error,error:Nt(404,{pathname:b.path})})]),H=B.slice(0,C.length),U=B.slice(C.length);return await Promise.all([Op(w,C,H,H.map(()=>L.signal),!1,h.loaderData),Op(w,M.map(b=>b.match),U,M.map(b=>b.controller?b.controller.signal:null),!0)]),{results:B,loaderResults:H,fetcherResults:U}}function $a(){P=!0,x.push(...qa()),Kt.forEach((w,E)=>{j.has(E)&&(O.push(E),Mr(E))})}function Ga(w,E,C){let M=Xr(h.matches,E);Ka(w),G({errors:{[M.route.id]:C},fetchers:new Map(h.fetchers)})}function Ka(w){j.has(w)&&Mr(w),Kt.delete(w),It.delete(w),kt.delete(w),h.fetchers.delete(w)}function Mr(w){let E=j.get(w);q(E,"Expected fetch controller: "+w),E.abort(),j.delete(w)}function of(w){for(let E of w){let M={state:"idle",data:rf(E).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(E,M)}}function lf(){let w=[],E=!1;for(let C of kt){let M=h.fetchers.get(C);q(M,"Expected fetcher: "+C),M.state==="loading"&&(kt.delete(C),w.push(C),E=!0)}return of(w),E}function af(w){let E=[];for(let[C,M]of It)if(M<w){let L=h.fetchers.get(C);q(L,"Expected fetcher: "+C),L.state==="loading"&&(Mr(C),It.delete(C),E.push(C))}return of(E),E.length>0}function P0(w,E){let C=h.blockers.get(w)||Ip;return ht.get(w)!==E&&ht.set(w,E),C}function Gi(w){h.blockers.delete(w),ht.delete(w)}function Ao(w,E){let C=h.blockers.get(w)||Ip;q(C.state==="unblocked"&&E.state==="blocked"||C.state==="blocked"&&E.state==="blocked"||C.state==="blocked"&&E.state==="proceeding"||C.state==="blocked"&&E.state==="unblocked"||C.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+C.state+" -> "+E.state),h.blockers.set(w,E),G({blockers:new Map(h.blockers)})}function uf(w){let{currentLocation:E,nextLocation:C,historyAction:M}=w;if(ht.size===0)return;ht.size>1&&yi(!1,"A router only supports one blocker at a time");let L=Array.from(ht.entries()),[B,H]=L[L.length-1],U=h.blockers.get(B);if(!(U&&U.state==="proceeding")&&H({currentLocation:E,nextLocation:C,historyAction:M}))return B}function qa(w){let E=[];return qt.forEach((C,M)=>{(!w||w(M))&&(C.cancel(),E.push(M),qt.delete(M))}),E}function x0(w,E,C){if(u=w,d=E,c=C||(M=>M.key),!f&&h.navigation===Nu){f=!0;let M=cf(h.location,h.matches);M!=null&&G({restoreScrollPosition:M})}return()=>{u=null,d=null,c=null}}function A0(w,E){if(u&&c&&d){let C=E.map(L=>Mp(L,h.loaderData)),M=c(w,C)||w.key;u[M]=d()}}function cf(w,E){if(u&&c&&d){let C=E.map(B=>Mp(B,h.loaderData)),M=c(w,C)||w.key,L=u[M];if(typeof L=="number")return L}return null}function D0(w){n={},i=Uc(w,e,void 0,n)}return I={get basename(){return s},get state(){return h},get routes(){return r},initialize:A,subscribe:$,enableScrollRestoration:x0,navigate:nr,fetch:T0,revalidate:Qt,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:rf,deleteFetcher:Ka,dispose:W,getBlocker:P0,deleteBlocker:Gi,_internalFetchControllers:j,_internalActiveDeferreds:qt,_internalSetRoutes:D0},I}function zC(t){return t!=null&&"formData"in t}function jc(t,e,n,r,i,s,o){let l,a;if(s!=null&&o!=="path"){l=[];for(let c of e)if(l.push(c),c.route.id===s){a=c;break}}else l=e,a=e[e.length-1];let u=Ra(i||".",po(l).map(c=>c.pathnameBase),Di(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&a&&a.route.index&&!ih(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:an([n,u.pathname])),Er(u)}function kp(t,e,n,r){if(!r||!zC(r))return{path:n};if(r.formMethod&&!KC(r.formMethod))return{path:n,error:Nt(405,{method:r.formMethod})};let i;if(r.formData){let l=r.formMethod||"get";if(i={formMethod:t?l.toUpperCase():l.toLowerCase(),formAction:uv(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},Jt(i.formMethod))return{path:n,submission:i}}let s=_n(n),o=av(r.formData);return e&&s.search&&ih(s.search)&&o.append("index",""),s.search="?"+o,{path:Er(s),submission:i}}function BC(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Tp(t,e,n,r,i,s,o,l,a,u,c,d,f){let g=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),y=t.createURL(i),I=f?Object.keys(f)[0]:void 0,p=BC(n,I).filter((v,T)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(WC(e.loaderData,e.matches[T],v)||o.some(O=>O===v.route.id))return!0;let P=e.matches[T],x=v;return Rp(v,te({currentUrl:_,currentParams:P.params,nextUrl:y,nextParams:x.params},r,{actionResult:g,defaultShouldRevalidate:s||_.pathname+_.search===y.pathname+y.search||_.search!==y.search||lv(P,x)}))}),m=[];return a.forEach((v,T)=>{if(!n.some(j=>j.route.id===v.routeId))return;let P=Yr(u,v.path,c);if(!P){m.push({key:T,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let x=zc(P,v.path);if(l.includes(T)){m.push({key:T,routeId:v.routeId,path:v.path,matches:P,match:x,controller:new AbortController});return}Rp(x,te({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:s}))&&m.push({key:T,routeId:v.routeId,path:v.path,matches:P,match:x,controller:new AbortController})}),[p,m]}function WC(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function lv(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Rp(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Np(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];q(i,"No route found in manifest");let s={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";yi(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!cC.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,te({},e(i),{lazy:void 0}))}async function ns(t,e,n,r,i,s,o,l,a,u){l===void 0&&(l=!1),a===void 0&&(a=!1);let c,d,f,g=I=>{let h,p=new Promise((m,v)=>h=v);return f=()=>h(),e.signal.addEventListener("abort",f),Promise.race([I({request:e,params:n.params,context:u}),p])};try{let I=n.route[t];if(n.route.lazy)if(I)d=(await Promise.all([g(I),Np(n.route,s,i)]))[0];else if(await Np(n.route,s,i),I=n.route[t],I)d=await g(I);else if(t==="action"){let h=new URL(e.url),p=h.pathname+h.search;throw Nt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:Se.data,data:void 0};else if(I)d=await g(I);else{let h=new URL(e.url),p=h.pathname+h.search;throw Nt(404,{pathname:p})}q(d!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(I){c=Se.error,d=I}finally{f&&e.signal.removeEventListener("abort",f)}if(GC(d)){let I=d.status;if(MC.has(I)){let m=d.headers.get("Location");if(q(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!sv.test(m))m=jc(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!l){let v=new URL(e.url),T=m.startsWith("//")?new URL(v.protocol+m):new URL(m),P=Di(T.pathname,o)!=null;T.origin===v.origin&&P&&(m=T.pathname+T.search+T.hash)}if(l)throw d.headers.set("Location",m),d;return{type:Se.redirect,status:I,location:m,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(a)throw{type:c||Se.data,response:d};let h,p=d.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?h=await d.json():h=await d.text(),c===Se.error?{type:c,error:new rh(I,d.statusText,h),headers:d.headers}:{type:Se.data,data:h,statusCode:d.status,headers:d.headers}}if(c===Se.error)return{type:c,error:d};if($C(d)){var _,y;return{type:Se.deferred,deferredData:d,statusCode:(_=d.init)==null?void 0:_.status,headers:((y=d.init)==null?void 0:y.headers)&&new Headers(d.init.headers)}}return{type:Se.data,data:d}}function rs(t,e,n,r){let i=t.createURL(uv(e)).toString(),s={signal:n};if(r&&Jt(r.formMethod)){let{formMethod:o,formEncType:l,formData:a}=r;s.method=o.toUpperCase(),s.body=l==="application/x-www-form-urlencoded"?av(a):a}return new Request(i,s)}function av(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function HC(t,e,n,r,i){let s={},o=null,l,a=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(q(!oi(c),"Cannot handle redirect results in processLoaderData"),Ss(c)){let g=Xr(t,f),_=c.error;r&&(_=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=_),s[f]=void 0,a||(a=!0,l=rv(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else cr(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!a&&(l=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:u}}function Pp(t,e,n,r,i,s,o,l){let{loaderData:a,errors:u}=HC(e,n,r,i,l);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:g}=s[c];q(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let _=o[c];if(!(g&&g.signal.aborted))if(Ss(_)){let y=Xr(t.matches,f==null?void 0:f.route.id);u&&u[y.route.id]||(u=te({},u,{[y.route.id]:_.error})),t.fetchers.delete(d)}else if(oi(_))q(!1,"Unhandled fetcher revalidation redirect");else if(cr(_))q(!1,"Unhandled fetcher deferred data");else{let y={state:"idle",data:_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,y)}}return{loaderData:a,errors:u}}function xp(t,e,n,r){let i=te({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Xr(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Ap(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Nt(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(l="defer() is not supported in actions")):t===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",l='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new rh(t||500,o,new Error(l),!0)}function Dp(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(oi(n))return n}}function uv(t){let e=typeof t=="string"?_n(t):t;return Er(te({},e,{hash:""}))}function VC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function cr(t){return t.type===Se.deferred}function Ss(t){return t.type===Se.error}function oi(t){return(t&&t.type)===Se.redirect}function $C(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function GC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function KC(t){return OC.has(t.toLowerCase())}function Jt(t){return AC.has(t.toLowerCase())}async function Op(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],a=e[o];if(!a)continue;let u=t.find(d=>d.route.id===a.route.id),c=u!=null&&!lv(u,a)&&(s&&s[a.route.id])!==void 0;if(cr(l)&&(i||c)){let d=r[o];q(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await cv(l,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function cv(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Se.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Se.error,error:i}}return{type:Se.data,data:t.deferredData.data}}}function ih(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Mp(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function zc(t,e){let n=typeof e=="string"?_n(e).search:e.search;if(t[t.length-1].route.index&&ih(n||""))return t[t.length-1];let r=po(t);return r[r.length-1]}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}const Na=N.createContext(null),dv=N.createContext(null),Oi=N.createContext(null),Pa=N.createContext(null),$t=N.createContext({outlet:null,matches:[],isDataRoute:!1}),hv=N.createContext(null);function qC(t,e){let{relative:n}=e===void 0?{}:e;Mi()||q(!1);let{basename:r,navigator:i}=N.useContext(Oi),{hash:s,pathname:o,search:l}=mv(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:an([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Mi(){return N.useContext(Pa)!=null}function mo(){return Mi()||q(!1),N.useContext(Pa).location}function fv(t){N.useContext(Oi).static||N.useLayoutEffect(t)}function go(){let{isDataRoute:t}=N.useContext($t);return t?aS():QC()}function QC(){Mi()||q(!1);let t=N.useContext(Na),{basename:e,navigator:n}=N.useContext(Oi),{matches:r}=N.useContext($t),{pathname:i}=mo(),s=JSON.stringify(po(r).map(a=>a.pathnameBase)),o=N.useRef(!1);return fv(()=>{o.current=!0}),N.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=Ra(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:an([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const YC=N.createContext(null);function XC(t){let e=N.useContext($t).outlet;return e&&N.createElement(YC.Provider,{value:t},e)}function pv(){let{matches:t}=N.useContext($t),e=t[t.length-1];return e?e.params:{}}function mv(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=N.useContext($t),{pathname:i}=mo(),s=JSON.stringify(po(r).map(o=>o.pathnameBase));return N.useMemo(()=>Ra(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function JC(t,e,n){Mi()||q(!1);let{navigator:r}=N.useContext(Oi),{matches:i}=N.useContext($t),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=mo(),u;if(e){var c;let y=typeof e=="string"?_n(e):e;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||q(!1),u=y}else u=a;let d=u.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",g=Yr(t,{pathname:f}),_=rS(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:an([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:an([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?N.createElement(Pa.Provider,{value:{location:Bl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ee.Pop}},_):_}function ZC(){let t=lS(),e=rv(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,s)}const eS=N.createElement(ZC,null);class tS extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?N.createElement($t.Provider,{value:this.props.routeContext},N.createElement(hv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nS(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(Na);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement($t.Provider,{value:e},r)}function rS(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||q(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||eS);let f=e.concat(s.slice(0,u+1)),g=()=>{let _;return c?_=d:a.route.Component?_=N.createElement(a.route.Component,null):a.route.element?_=a.route.element:_=l,N.createElement(nS,{match:a,routeContext:{outlet:l,matches:f,isDataRoute:n!=null},children:_})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?N.createElement(tS,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Bc;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Bc||(Bc={}));var Ks;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ks||(Ks={}));function iS(t){let e=N.useContext(Na);return e||q(!1),e}function sS(t){let e=N.useContext(dv);return e||q(!1),e}function oS(t){let e=N.useContext($t);return e||q(!1),e}function gv(t){let e=oS(),n=e.matches[e.matches.length-1];return n.route.id||q(!1),n.route.id}function lS(){var t;let e=N.useContext(hv),n=sS(Ks.UseRouteError),r=gv(Ks.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function aS(){let{router:t}=iS(Bc.UseNavigateStable),e=gv(Ks.UseNavigateStable),n=N.useRef(!1);return fv(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bl({fromRouteId:e},s)))},[t,e])}function uS(t){let{fallbackElement:e,router:n}=t,[r,i]=N.useState(n.state);N.useLayoutEffect(()=>n.subscribe(i),[n,i]);let s=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:a=>n.navigate(a),push:(a,u,c)=>n.navigate(a,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(a,u,c)=>n.navigate(a,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",l=N.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return N.createElement(N.Fragment,null,N.createElement(Na.Provider,{value:l},N.createElement(dv.Provider,{value:r},N.createElement(hS,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?N.createElement(cS,{routes:n.routes,state:r}):e))),null)}function cS(t){let{routes:e,state:n}=t;return JC(e,void 0,n)}function _v(t){let{to:e,replace:n,state:r,relative:i}=t;Mi()||q(!1);let{matches:s}=N.useContext($t),{pathname:o}=mo(),l=go(),a=Ra(e,po(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(a);return N.useEffect(()=>l(JSON.parse(u),{replace:n,state:r,relative:i}),[l,u,i,n,r]),null}function dS(t){return XC(t.context)}function hS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ee.Pop,navigator:s,static:o=!1}=t;Mi()&&q(!1);let l=e.replace(/^\/*/,"/"),a=N.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=_n(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,_=N.useMemo(()=>{let y=Di(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:f,key:g},navigationType:i}},[l,u,c,d,f,g,i]);return _==null?null:N.createElement(Oi.Provider,{value:a},N.createElement(Pa.Provider,{children:n,value:_}))}var Lp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Lp||(Lp={}));new Promise(()=>{});function fS(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:N.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:N.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qs(){return qs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qs.apply(this,arguments)}function pS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function mS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function gS(t,e){return t.button===0&&(!e||e==="_self")&&!mS(t)}const _S=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function vS(t,e){return jC({basename:e==null?void 0:e.basename,future:qs({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:lC({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||yS(),routes:t,mapRouteProperties:fS}).initialize()}function yS(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=qs({},e,{errors:wS(e.errors)})),e}function wS(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new rh(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const ES=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sh=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=pS(e,_S),{basename:f}=N.useContext(Oi),g,_=!1;if(typeof u=="string"&&CS.test(u)&&(g=u,ES))try{let p=new URL(window.location.href),m=u.startsWith("//")?new URL(p.protocol+u):new URL(u),v=Di(m.pathname,f);m.origin===p.origin&&v!=null?u=v+m.search+m.hash:_=!0}catch{}let y=qC(u,{relative:i}),I=SS(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function h(p){r&&r(p),p.defaultPrevented||I(p)}return N.createElement("a",qs({},d,{href:g||y,onClick:_||s?r:h,ref:n,target:a}))});var bp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(bp||(bp={}));var Fp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fp||(Fp={}));function SS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=go(),a=mo(),u=mv(t,{relative:o});return N.useCallback(c=>{if(gS(c,n)){c.preventDefault();let d=r!==void 0?r:Er(a)===Er(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+vv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new kS;const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wv=function(t){const e=yv(t);return oh.encodeByteArray(e,!0)},Wl=function(t){return wv(t).replace(/\./g,"")},Hl=function(t){try{return oh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){return Ev(void 0,t)}function Ev(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!RS(n)||(t[n]=Ev(t[n],e[n]));return t}function RS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=()=>NS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hl(t[1]);return e&&JSON.parse(e)},lh=()=>{try{return PS()||xS()||AS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cv=t=>{var e,n;return(n=(e=lh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DS=t=>{const e=Cv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sv=()=>{var t;return(t=lh())===null||t===void 0?void 0:t.config},Iv=t=>{var e;return(e=lh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Wl(JSON.stringify(n)),Wl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ah(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function MS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LS(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tv(){return vv.NODE_ADMIN===!0}function bS(){try{return typeof indexedDB=="object"}catch{return!1}}function FS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=US,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new er(i,l,r)}}function jS(t,e){return t.replace(zS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Qs(Hl(s[0])||""),n=Qs(Hl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},BS=function(t){const e=Rv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},WS=function(t){const e=Rv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Up(s)&&Up(o)){if(!$l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Up(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const f=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function VS(t,e){const n=new $S(t,e);return n.subscribe.bind(n)}class $S{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}function xa(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Aa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _o;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YS(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QS(t){return t===sr?void 0:t}function YS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const JS={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ZS=ie.INFO,eI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},tI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uh{constructor(e){this.name=e,this._logLevel=ZS,this._logHandler=tI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const nI=(t,e)=>e.some(n=>t instanceof n);let jp,zp;function rI(){return jp||(jp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iI(){return zp||(zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nv=new WeakMap,Hc=new WeakMap,Pv=new WeakMap,xu=new WeakMap,ch=new WeakMap;function sI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nv.set(n,t)}).catch(()=>{}),ch.set(e,t),e}function oI(t){if(Hc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let Vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lI(t){Vc=t(Vc)}function aI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Au(this),e,...n);return Pv.set(r,e.sort?e.sort():[e]),Bn(r)}:iI().includes(t)?function(...e){return t.apply(Au(this),e),Bn(Nv.get(this))}:function(...e){return Bn(t.apply(Au(this),e))}}function uI(t){return typeof t=="function"?aI(t):(t instanceof IDBTransaction&&oI(t),nI(t,rI())?new Proxy(t,Vc):t)}function Bn(t){if(t instanceof IDBRequest)return sI(t);if(xu.has(t))return xu.get(t);const e=uI(t);return e!==t&&(xu.set(t,e),ch.set(e,t)),e}const Au=t=>ch.get(t);function cI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Bn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Bn(o.result),a.oldVersion,a.newVersion,Bn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const dI=["get","getKey","getAll","getAllKeys","count"],hI=["put","add","delete","clear"],Du=new Map;function Bp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Du.get(e))return Du.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Du.set(e,s),s}lI(t=>({...t,get:(e,n,r)=>Bp(e,n)||t.get(e,n,r),has:(e,n)=>!!Bp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",Wp="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new uh("@firebase/app"),mI="@firebase/app-compat",gI="@firebase/analytics-compat",_I="@firebase/analytics",vI="@firebase/app-check-compat",yI="@firebase/app-check",wI="@firebase/auth",EI="@firebase/auth-compat",CI="@firebase/database",SI="@firebase/database-compat",II="@firebase/functions",kI="@firebase/functions-compat",TI="@firebase/installations",RI="@firebase/installations-compat",NI="@firebase/messaging",PI="@firebase/messaging-compat",xI="@firebase/performance",AI="@firebase/performance-compat",DI="@firebase/remote-config",OI="@firebase/remote-config-compat",MI="@firebase/storage",LI="@firebase/storage-compat",bI="@firebase/firestore",FI="@firebase/firestore-compat",UI="firebase",jI="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="[DEFAULT]",zI={[$c]:"fire-core",[mI]:"fire-core-compat",[_I]:"fire-analytics",[gI]:"fire-analytics-compat",[yI]:"fire-app-check",[vI]:"fire-app-check-compat",[wI]:"fire-auth",[EI]:"fire-auth-compat",[CI]:"fire-rtdb",[SI]:"fire-rtdb-compat",[II]:"fire-fn",[kI]:"fire-fn-compat",[TI]:"fire-iid",[RI]:"fire-iid-compat",[NI]:"fire-fcm",[PI]:"fire-fcm-compat",[xI]:"fire-perf",[AI]:"fire-perf-compat",[DI]:"fire-rc",[OI]:"fire-rc-compat",[MI]:"fire-gcs",[LI]:"fire-gcs-compat",[bI]:"fire-fst",[FI]:"fire-fst-compat","fire-js":"fire-js",[UI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Map,Kc=new Map;function BI(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(Kc.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;Kc.set(e,t);for(const n of Gl.values())BI(n,t);return!0}function dh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new vo("app","Firebase",WI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=jI;function yo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=Sv()),!n)throw Wn.create("no-options");const s=Gl.get(i);if(s){if($l(n,s.options)&&$l(r,s.config))return s;throw Wn.create("duplicate-app",{appName:i})}const o=new XS(i);for(const a of Kc.values())o.addComponent(a);const l=new HI(n,r,o);return Gl.set(i,l),l}function xv(t=Gc){const e=Gl.get(t);if(!e&&t===Gc&&Sv())return yo();if(!e)throw Wn.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=zI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(l.join(" "));return}Ei(new Cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="firebase-heartbeat-database",$I=1,Ys="firebase-heartbeat-store";let Ou=null;function Av(){return Ou||(Ou=cI(VI,$I,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ys)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Ou}async function GI(t){try{return await(await Av()).transaction(Ys).objectStore(Ys).get(Dv(t))}catch(e){if(e instanceof er)Sr.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function Hp(t,e){try{const r=(await Av()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,Dv(t)),await r.done}catch(n){if(n instanceof er)Sr.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function Dv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=1024,qI=30*24*60*60*1e3;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vp(),{heartbeatsToSend:n,unsentEntries:r}=YI(this._heartbeatsCache.heartbeats),i=Wl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vp(){return new Date().toISOString().substring(0,10)}function YI(t,e=KI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$p(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$p(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bS()?FS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await GI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $p(t){return Wl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){Ei(new Cr("platform-logger",e=>new fI(e),"PRIVATE")),Ei(new Cr("heartbeat",e=>new QI(e),"PRIVATE")),Hn($c,Wp,t),Hn($c,Wp,"esm2017"),Hn("fire-js","")}JI("");function hh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ov(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZI=Ov,Mv=new vo("auth","Firebase",Ov());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new uh("@firebase/auth");function ek(t,...e){Kl.logLevel<=ie.WARN&&Kl.warn(`Auth (${Fi}): ${t}`,...e)}function fl(t,...e){Kl.logLevel<=ie.ERROR&&Kl.error(`Auth (${Fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw fh(t,...e)}function Ht(t,...e){return fh(t,...e)}function tk(t,e,n){const r=Object.assign(Object.assign({},ZI()),{[e]:n});return new vo("auth","Firebase",r).create(e,{appName:t.name})}function fh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mv.create(t,...e)}function z(t,e,...n){if(!t)throw fh(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function pn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nk(){return Gp()==="http:"||Gp()==="https:"}function Gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nk()||MS()||"connection"in navigator)?navigator.onLine:!0}function ik(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=ah()||kv()}get(){return rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new wo(3e4,6e4);function Ui(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ji(t,e,n,r,i={}){return bv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=bi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Lv.fetch()(Fv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function bv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sk),e);try{const i=new lk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Jo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Jo(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Jo(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tk(t,c,u);Ft(t,c)}}catch(i){if(i instanceof er)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function Eo(t,e,n,r,i={}){const s=await ji(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Fv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ph(t.config,i):`${t.config.apiScheme}://${i}`}class lk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"network-request-failed")),ok.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ht(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(t,e){return ji(t,"POST","/v1/accounts:delete",e)}async function uk(t,e){return ji(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ck(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=mh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Is(Mu(i.auth_time)),issuedAtTime:Is(Mu(i.iat)),expirationTime:Is(Mu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mu(t){return Number(t)*1e3}function mh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hl(n);return i?JSON.parse(i):(fl("Failed to decode base64 JWT payload"),null)}catch(i){return fl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dk(t){const e=mh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&hk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xs(t,uk(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gk(s.providerUserInfo):[],l=mk(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function pk(t){const e=it(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gk(t){return t.map(e=>{var{providerId:n}=e,r=hh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){const n=await bv(t,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Fv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Lv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _k(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Js;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ck(this,e)}reload(){return pk(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xs(this,ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,I=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:T,providerData:P,stsTokenManager:x}=n;z(m&&x,e,"internal-error");const O=Js.fromJSON(this.name,x);z(typeof m=="string",e,"internal-error"),En(d,e.name),En(f,e.name),z(typeof v=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),En(g,e.name),En(_,e.name),En(y,e.name),En(I,e.name),En(h,e.name),En(p,e.name);const j=new pr({uid:m,auth:e,email:f,emailVerified:v,displayName:d,isAnonymous:T,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:O,createdAt:h,lastLoginAt:p});return P&&Array.isArray(P)&&(j.providerData=P.map(V=>Object.assign({},V))),I&&(j._redirectEventId=I),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new Js;i.updateFromServerResponse(n);const s=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;function rn(t){pn(t instanceof Function,"Expected a class definition");let e=Kp.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jv.type="NONE";const qp=jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(rn(qp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rn(qp);const o=pl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=pr._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new li(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vv(e))return"Blackberry";if($v(e))return"Webos";if(gh(e))return"Safari";if((e.includes("chrome/")||Bv(e))&&!e.includes("edge/"))return"Chrome";if(Hv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zv(t=Ve()){return/firefox\//i.test(t)}function gh(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bv(t=Ve()){return/crios\//i.test(t)}function Wv(t=Ve()){return/iemobile/i.test(t)}function Hv(t=Ve()){return/android/i.test(t)}function Vv(t=Ve()){return/blackberry/i.test(t)}function $v(t=Ve()){return/webos/i.test(t)}function Da(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vk(t=Ve()){var e;return Da(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yk(){return LS()&&document.documentMode===10}function Gv(t=Ve()){return Da(t)||Hv(t)||$v(t)||Vv(t)||/windows phone/i.test(t)||Wv(t)}function wk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e=[]){let n;switch(t){case"Browser":n=Qp(Ve());break;case"Worker":n=`${Qp(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}async function qv(t,e){return ji(t,"GET","/v2/recaptchaConfig",Ui(t,e))}function Yp(t){return t!==void 0&&t.enterprise!==void 0}class Qv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ek().appendChild(r)})}function Ck(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Sk="https://www.google.com/recaptcha/enterprise.js?render=",Ik="recaptcha-enterprise",kk="NO_RECAPTCHA";class Xv{constructor(e){this.type=Ik,this.auth=zi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{qv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Qv(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Yp(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Yp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Yv(Sk+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function Ql(t,e,n,r=!1){const i=new Xv(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new Tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ik()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}async initializeRecaptchaConfig(){const e=await qv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Qv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Xv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ek(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zi(t){return it(t)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=VS(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t,e){const n=dh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($l(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function Pk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xk(t,e,n){const r=zi(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Jv(e),{host:o,port:l}=Ak(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dk()}function Jv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ak(t){const e=Jv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jp(o)}}}function Jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function Ok(t,e){return ji(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(t,e){return Eo(t,"POST","/v1/accounts:signInWithPassword",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}async function Lk(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends _h{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ql(e,r,"signInWithPassword");return Lu(e,i)}else return Lu(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ql(e,r,"signInWithPassword");return Lu(e,s)}else return Promise.reject(i)});case"emailLink":return Mk(e,{email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ok(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){return Eo(t,"POST","/v1/accounts:signInWithIdp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="http://localhost";class Ir extends _h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:bk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uk(t){const e=hs(fs(t)).link,n=e?hs(fs(e)).deep_link_id:null,r=hs(fs(t)).deep_link_id;return(r?hs(fs(r)).link:null)||r||n||e||t}class vh{constructor(e){var n,r,i,s,o,l;const a=hs(fs(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=Fk((i=a.mode)!==null&&i!==void 0?i:null);z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Uk(e);try{return new vh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return Zs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vh.parseLink(n);return z(r,"argument-error"),Zs._fromEmailAndCode(e,r.code,r.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Zv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Co{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Co{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Co{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(t,e){return Eo(t,"POST","/v1/accounts:signUp",Ui(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=Zp(r);return new kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zp(r);return new kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yl(e,n,r,i)}}function ey(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yl._fromErrorAndOperation(t,s,e,r):s})}async function jk(t,e,n=!1){const r=await Xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xs(t,ey(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=mh(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(t,e,n=!1){const r="signIn",i=await ey(t,r,e),s=await kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bk(t,e){return ty(zi(t),e)}async function Wk(t,e,n){var r;const i=zi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ql(i,s,"signUpPassword");o=bu(i,u)}else o=bu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ql(i,s,"signUpPassword");return bu(i,c)}else return Promise.reject(u)});const l=await o.catch(u=>Promise.reject(u)),a=await kr._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(a.user),a}function Hk(t,e,n){return Bk(it(t),Bi.credential(e,n))}function Vk(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function $k(t,e,n){return it(t).beforeAuthStateChanged(e,n)}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){const t=Ve();return gh(t)||Da(t)}const Kk=1e3,qk=10;class ry extends ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gk()&&wk(),this.fallbackToPolling=Gv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Kk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ry.type="LOCAL";const Qk=ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iy.type="SESSION";const sy=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Yk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=yh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function Jk(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function Zk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tT(){return oy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebaseLocalStorageDb",nT=1,Jl="firebaseLocalStorage",ay="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ma(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function rT(){const t=indexedDB.deleteDatabase(ly);return new So(t).toPromise()}function Qc(){const t=indexedDB.open(ly,nT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:ay})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await rT(),e(await Qc()))})})}async function em(t,e,n){const r=Ma(t,!0).put({[ay]:e,value:n});return new So(r).toPromise()}async function iT(t,e){const n=Ma(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function tm(t,e){const n=Ma(t,!0).delete(e);return new So(n).toPromise()}const sT=800,oT=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(tT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Zk(),!this.activeServiceWorker)return;this.sender=new Xk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qc();return await em(e,Xl,"1"),await tm(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>em(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ma(i,!1).getAll();return new So(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const lT=uy;new wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e){return e?rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends _h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uT(t){return ty(t.auth,new wh(t),t.bypassAuthState)}function cT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),zk(n,new wh(t),t.bypassAuthState)}async function dT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),jk(n,new wh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uT;case"linkViaPopup":case"linkViaRedirect":return dT;case"reauthViaPopup":case"reauthViaRedirect":return cT;default:Ft(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new wo(2e3,1e4);class Jr extends cy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=yh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hT.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="pendingRedirect",ml=new Map;class pT extends cy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ml.get(this.auth._key());if(!e){try{const r=await mT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ml.set(this.auth._key(),e)}return this.bypassAuthState||ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mT(t,e){const n=vT(e),r=_T(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gT(t,e){ml.set(t._key(),e)}function _T(t){return rn(t._redirectPersistence)}function vT(t){return pl(fT,t.config.apiKey,t.name)}async function yT(t,e,n=!1){const r=zi(t),i=aT(r,e),o=await new pT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=10*60*1e3;class ET{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wT&&this.cachedEventUids.clear(),this.cachedEventUids.has(nm(e))}saveEventToCache(e){this.cachedEventUids.add(nm(e)),this.lastProcessedEventTime=Date.now()}}function nm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(t,e={}){return ji(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kT=/^https?/;async function TT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ST(t);for(const n of e)try{if(RT(n))return}catch{}Ft(t,"unauthorized-domain")}function RT(t){const e=qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kT.test(n))return!1;if(IT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new wo(3e4,6e4);function rm(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PT(t){return new Promise((e,n)=>{var r,i,s;function o(){rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rm(),n(Ht(t,"network-request-failed"))},timeout:NT.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const l=Ck("iframefcb");return Vt()[l]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},Yv(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw gl=null,e})}let gl=null;function xT(t){return gl=gl||PT(t),gl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=new wo(5e3,15e3),DT="__/auth/iframe",OT="emulator/auth/iframe",MT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bT(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ph(e,OT):`https://${t.config.authDomain}/${DT}`,r={apiKey:e.apiKey,appName:t.name,v:Fi},i=LT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bi(r).slice(1)}`}async function FT(t){const e=await xT(t),n=Vt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:bT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),l=Vt().setTimeout(()=>{s(o)},AT.get());function a(){Vt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jT=500,zT=600,BT="_blank",WT="http://localhost";class im{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HT(t,e,n,r=jT,i=zT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},UT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ve().toLowerCase();n&&(l=Bv(u)?BT:n),zv(u)&&(e=e||WT,a.scrollbars="yes");const c=Object.entries(a).reduce((f,[g,_])=>`${f}${g}=${_},`,"");if(vk(u)&&l!=="_self")return VT(e||"",l),new im(null);const d=window.open(e||"",l,c);z(d,t,"popup-blocked");try{d.focus()}catch{}return new im(d)}function VT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="__/auth/handler",GT="emulator/auth/handler",KT=encodeURIComponent("fac");async function sm(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(e instanceof Zv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Co){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${KT}=${encodeURIComponent(a)}`:"";return`${qT(t)}?${bi(l).slice(1)}${u}`}function qT({config:t}){return t.emulator?ph(t,GT):`https://${t.authDomain}/${$T}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="webStorageSupport";class QT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sy,this._completeRedirectFn=yT,this._overrideRedirectResult=gT}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sm(e,n,r,qc(),i);return HT(e,o,yh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sm(e,n,r,qc(),i);return Jk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FT(e),r=new ET(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fu,{type:Fu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fu];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gv()||gh()||Da()}}const YT=QT;var om="@firebase/auth",lm="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZT(t){Ei(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(t)},u=new Rk(r,i,s,a);return Pk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new Cr("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new XT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(om,lm,JT(t)),Hn(om,lm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=5*60,t1=Iv("authIdTokenMaxAge")||e1;let am=null;const n1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t1)return;const i=n==null?void 0:n.token;am!==i&&(am=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hy(t=xv()){const e=dh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nk(t,{popupRedirectResolver:YT,persistence:[lT,Qk,sy]}),r=Iv("authTokenSyncURL");if(r){const s=n1(r);$k(n,s,()=>s(n.currentUser)),Vk(n,o=>s(o))}const i=Cv("auth");return i&&xk(n,`http://${i}`),n}ZT("Browser");var r1="firebase",i1="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(r1,i1,"app");const Io={apiKey:"AIzaSyAC93G80JDFFLbnqGmgapzfehmsDqTutoY",authDomain:"task-manager-e3421.firebaseapp.com",databaseURL:"https://task-manager-e3421-default-rtdb.firebaseio.com",projectId:"task-manager-e3421",storageBucket:"task-manager-e3421.appspot.com",messagingSenderId:"320328796191",appId:"1:320328796191:web:78ffb1aac911d70ad8ed2a"};firebase.initializeApp(Io);const um="@firebase/database",cm="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fy="";function s1(t){fy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new o1(e)}}catch{}return new l1},dr=py("localStorage"),Yc=py("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new uh("@firebase/database"),a1=function(){let t=1;return function(){return t++}}(),my=function(t){const e=KS(t),n=new HS;n.update(e);const r=n.digest();return oh.encodeByteArray(r)},ko=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ko.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let mr=null,dm=!0;const u1=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ui.logLevel=ie.VERBOSE,mr=ui.log.bind(ui),e&&Yc.set("logging_enabled",!0)):typeof t=="function"?mr=t:(mr=null,Yc.remove("logging_enabled"))},Le=function(...t){if(dm===!0&&(dm=!1,mr===null&&Yc.get("logging_enabled")===!0&&u1(!0)),mr){const e=ko.apply(null,t);mr(e)}},To=function(t){return function(...e){Le(t,...e)}},Xc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ko(...t);ui.error(e)},mn=function(...t){const e=`FIREBASE FATAL ERROR: ${ko(...t)}`;throw ui.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+ko(...t);ui.warn(e)},c1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},d1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ci="[MIN_NAME]",Tr="[MAX_NAME]",Ar=function(t,e){if(t===e)return 0;if(t===Ci||e===Tr)return-1;if(e===Ci||t===Tr)return 1;{const n=hm(t),r=hm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},h1=function(t,e){return t===e?0:t<e?-1:1},is=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},Ch=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Te(e[r]),n+=":",n+=Ch(t[e[r]]);return n+="}",n},gy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _y=function(t){R(!Eh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(c.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},f1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},p1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function m1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const g1=new RegExp("^-?(0*)\\d{1,10}$"),_1=-2147483648,v1=2147483647,hm=function(t){if(g1.test(t)){const e=Number(t);if(e>=_1&&e<=v1)return e}return null},Wi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},y1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ci.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="5",vy="v",yy="s",wy="r",Ey="f",Cy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sy="ls",Iy="p",Jc="ac",ky="websocket",Ty="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function C1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ny(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===ky)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ty)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);C1(t)&&(n.ns=t.namespace);const i=[];return Ue(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.counters_={}}incrementCounter(e,n=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return TS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu={},ju={};function Ih(t){const e=t.toString();return Uu[e]||(Uu[e]=new S1),Uu[e]}function I1(t,e){const n=t.toString();return ju[n]||(ju[n]=e()),ju[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Wi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="start",T1="close",R1="pLPCommand",N1="pRTLPCB",Py="id",xy="pw",Ay="ser",P1="cb",x1="seg",A1="ts",D1="d",O1="dframe",Dy=1870,Oy=30,M1=Dy-Oy,L1=25e3,b1=3e4;class Zr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=To(e),this.stats_=Ih(n),this.urlFn=a=>(this.appCheckToken&&(a[Jc]=this.appCheckToken),Ny(n,Ty,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new k1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(b1)),d1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kh((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fm)this.id=l,this.password=a;else if(o===T1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[fm]="t",r[Ay]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[P1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vy]=Sh,this.transportSessionId&&(r[yy]=this.transportSessionId),this.lastSessionId&&(r[Sy]=this.lastSessionId),this.applicationId&&(r[Iy]=this.applicationId),this.appCheckToken&&(r[Jc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Cy.test(location.hostname)&&(r[wy]=Ey);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zr.forceAllow_=!0}static forceDisallow(){Zr.forceDisallow_=!0}static isAvailable(){return Zr.forceAllow_?!0:!Zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!f1()&&!p1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wv(n),i=gy(r,M1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[O1]="t",r[Py]=e,r[xy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=a1(),window[R1+this.uniqueCallbackIdentifier]=e,window[N1+this.uniqueCallbackIdentifier]=n,this.myIFrame=kh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Py]=this.myID,e[xy]=this.myPW,e[Ay]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Oy+r.length<=Dy;){const o=this.pendingSegs.shift();r=r+"&"+x1+i+"="+o.seg+"&"+A1+i+"="+o.ts+"&"+D1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(L1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=16384,U1=45e3;let Zl=null;typeof MozWebSocket<"u"?Zl=MozWebSocket:typeof WebSocket<"u"&&(Zl=WebSocket);class At{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=To(this.connId),this.stats_=Ih(n),this.connURL=At.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[vy]=Sh,typeof location<"u"&&location.hostname&&Cy.test(location.hostname)&&(o[wy]=Ey),n&&(o[yy]=n),r&&(o[Sy]=r),i&&(o[Jc]=i),s&&(o[Iy]=s),Ny(e,ky,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dr.set("previous_websocket_failure",!0);try{let r;Tv(),this.mySock=new Zl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Zl!==null&&!At.forceDisallow_}static previouslyFailed(){return dr.isInMemoryStorage||dr.get("previous_websocket_failure")===!0}markConnectionHealthy(){dr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Qs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gy(n,F1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(U1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}At.responsesRequiredToBeHealthy=2;At.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zr,At]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=At&&At.isAvailable();let r=n&&!At.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[At];else{const i=this.transports_=[];for(const s of eo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}eo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=6e4,z1=5e3,B1=10*1024,W1=100*1024,zu="t",pm="d",H1="s",mm="r",V1="e",gm="o",_m="a",vm="n",ym="p",$1="h";class G1{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=To("c:"+this.id+":"),this.transportManager_=new eo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>W1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>B1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zu in e){const n=e[zu];n===_m?this.upgradeIfSecondaryHealthy_():n===mm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=is("t",e),r=is("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ym,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_m,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=is("t",e),r=is("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=is(zu,e);if(pm in e){const r=e[pm];if(n===$1){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===vm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===H1?this.onConnectionShutdown_(r):n===mm?this.onReset_(r):n===V1?Xc("Server Error: "+r):n===gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sh!==r&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(j1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(z1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ym,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Ly{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ah()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ea}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=32,Em=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new se("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Th(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function K1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function to(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function by(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function ve(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return Ke(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function q1(t,e){const n=to(t,0),r=to(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ar(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Fy(t,e){if(qn(t)!==qn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(qn(t)>qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Q1{constructor(e,n){this.errorPrefix_=n,this.parts_=to(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Aa(this.parts_[r]);Uy(this)}}function Y1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Aa(e),Uy(t)}function X1(t){const e=t.parts_.pop();t.byteLength_-=Aa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Uy(t){if(t.byteLength_>Em)throw new Error(t.errorPrefix_+"has a key path longer than "+Em+" bytes ("+t.byteLength_+").");if(t.parts_.length>wm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wm+") or object contains a cycle "+or(t))}function or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh extends Ly{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Rh}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=1e3,J1=60*5*1e3,Cm=30*1e3,Z1=1.3,eR=3e4,tR="server_kill",Sm=3;class un extends My{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=un.nextPersistentConnectionId_++,this.log_=To("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=J1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Tv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ea.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Te(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new _o,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;un.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gt(e,"w")){const r=wi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||WS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=BS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xc("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eR&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Z1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+un.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new G1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Qe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(tR)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Qe(d),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wc(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ch(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sm&&(this.reconnectDelay_=Cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fy.replace(/\./g,"-")]=1,ah()?e["framework.cordova"]=1:kv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ea.getInstance().currentlyOnline();return Wc(this.interruptReasons_)&&e}}un.nextPersistentConnectionId_=0;un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(Ci,e),i=new K(Ci,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class jy extends La{static get __EMPTY_NODE(){return Zo}static set __EMPTY_NODE(e){Zo=e}compare(e,n){return Ar(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Tr,Zo)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Zo)}toString(){return".key"}}const di=new jy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??et.EMPTY_NODE,this.right=s??et.EMPTY_NODE}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}De.RED=!0;De.BLACK=!1;class nR{copy(e,n,r,i,s){return this}insert(e,n,r){return new De(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,De.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,De.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new el(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new el(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new nR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t,e){return Ar(t.name,e.name)}function Nh(t,e){return Ar(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;function iR(t){Zc=t}const zy=function(t){return typeof t=="number"?"number:"+_y(t):"string:"+t},By=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else R(t===Zc||t.isEmpty(),"priority of unexpected type.");R(t===Zc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),By(this.priorityNode_)}static set __childrenNodeConstructor(e){Im=e}static get __childrenNodeConstructor(){return Im}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:Y(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_y(this.value_):e+=this.value_,this.lazyHash_=my(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wy,Hy;function sR(t){Wy=t}function oR(t){Hy=t}class lR extends La{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ar(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Tr,new xe("[PRIORITY-POST]",Hy))}makePost(e,n){const r=Wy(e);return new K(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new lR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=Math.log(2);class uR{constructor(e){const n=s=>parseInt(Math.log(s)/aR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ta=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,f;if(c===0)return null;if(c===1)return d=t[a],f=n?n(d):d,new De(f,d.node,De.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=i(a,g),y=i(g+1,u);return d=t[g],f=n?n(d):d,new De(f,d.node,De.BLACK,_,y)}},s=function(a){let u=null,c=null,d=t.length;const f=function(_,y){const I=d-_,h=d;d-=_;const p=i(I+1,h),m=t[I],v=n?n(m):m;g(new De(v,m.node,y,null,p))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),I=Math.pow(2,a.count-(_+1));y?f(I,De.BLACK):(f(I,De.BLACK),f(I,De.RED))}return c},o=new uR(t.length),l=s(o);return new et(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;const Fr={};class sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Fr&&ye,"ChildrenNode.ts has not been loaded"),Bu=Bu||new sn({".priority":Fr},{".priority":ye}),Bu}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ta(r,e.getCompare()):l=Fr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new sn(c,u)}addToIndexes(e,n){const r=Vl(this.indexes_,(i,s)=>{const o=wi(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Fr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ta(l,o.getCompare())}else return Fr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vl(this.indexes_,i=>{if(i===Fr)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&By(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return os||(os=new F(new et(Nh),null,sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||os}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?os:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?os:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{R(Y(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,l)=>{n[o]=l.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zy(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":my(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ro?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cR extends F{constructor(){super(new et(Nh),F.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Ro=new cR;Object.defineProperties(K,{MIN:{value:new K(Ci,F.EMPTY_NODE)},MAX:{value:new K(Tr,Ro)}});jy.__EMPTY_NODE=F.EMPTY_NODE;xe.__childrenNodeConstructor=F;iR(Ro);oR(Ro);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=!0;function ke(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,ke(e))}if(!(t instanceof Array)&&dR){const n=[];let r=!1;if(Ue(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ke(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return F.EMPTY_NODE;const s=ta(n,rR,o=>o.name,Nh);if(r){const o=ta(n,ye.getCompare());return new F(s,ke(e),new sn({".priority":o},{".priority":ye}))}else return new F(s,ke(e),sn.Default)}else{let n=F.EMPTY_NODE;return Ue(t,(r,i)=>{if(Gt(t,r)&&r.substring(0,1)!=="."){const s=ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ke(e))}}sR(ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR extends La{constructor(e){super(),this.indexPath_=e,R(!Q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ar(e.name,n.name):s}makePost(e,n){const r=ke(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Ro);return new K(Tr,e)}toString(){return to(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR extends La{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ar(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=ke(e);return new K(n,r)}toString(){return".value"}}const pR=new fR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){return{type:"value",snapshotNode:t}}function Si(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function no(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(no(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Si(n,r)):o.trackChildChange(ro(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange(no(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ro(i,s,o))}else r.trackChildChange(Si(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.indexedFilter_=new Ph(e.getIndex()),this.index_=e.getIndex(),this.startPost_=io.getStartPost_(e),this.endPost_=io.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,l)=>{s.matches(new K(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new io(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new K(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ro(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(no(n,d));const y=l.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Si(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(no(u.name,u.node)),s.trackChildChange(Si(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ci}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new xh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _R(t){return t.loadsAllData()?new Ph(t.getIndex()):t.hasLimit()?new gR(t):new io(t)}function km(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===pR?n="$value":t.index_===di?n="$key":(R(t.index_ instanceof hR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends My{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=To("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=na.getListenId_(e,r),l={};this.listens_[o]=l;const a=km(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),wi(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=na.getListenId_(e,n);delete this.listens_[r]}get(e){const n=km(e._queryParams),r=e._path.toString(),i=new _o;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Qs(l.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){return{value:null,children:new Map}}function $y(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,ra());const i=t.children.get(r);e=le(e),$y(i,e,n)}}function ed(t,e,n){t.value!==null?n(e,t.value):yR(t,(r,i)=>{const s=new se(e.toString()+"/"+r);ed(i,s,n)})}function yR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=10*1e3,ER=30*1e3,CR=5*60*1e3;class SR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wR(e);const r=Rm+(ER-Rm)*Math.random();ks(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ue(e,(i,s)=>{s>0&&Gt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*CR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function Ah(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dt.ACK_USER_WRITE,this.source=Ah()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new ia(ee(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new ia(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new so(this.source,ee()):new so(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dt.OVERWRITE}operationForChild(e){return Q(this.path)?new Rr(this.source,ee(),this.snap.getImmediateChild(e)):new Rr(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Rr(this.source,ee(),n.value):new Ii(this.source,ee(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ii(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mR(o.childName,o.snapshotNode))}),ls(t,i,"child_removed",e,r,n),ls(t,i,"child_added",e,r,n),ls(t,i,"child_moved",s,r,n),ls(t,i,"child_changed",e,r,n),ls(t,i,"value",e,r,n),i}function ls(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>RR(t,l,a)),o.forEach(l=>{const a=TR(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function TR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RR(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e){return{eventCache:t,serverCache:e}}function Ts(t,e,n,r){return ba(new Qn(e,n,r),t.serverCache)}function Gy(t,e,n,r){return ba(t.eventCache,new Qn(e,n,r))}function sa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;const NR=()=>(Wu||(Wu=new et(h1)),Wu);class oe{constructor(e,n=NR()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ue(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(Q(e))return null;{const r=Y(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:ve(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new oe(null)}}set(e,n){if(Q(e))return new oe(n,this.children);{const r=Y(e),s=(this.children.get(r)||new oe(null)).set(le(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(Q(e))return n;{const r=Y(e),s=(this.children.get(r)||new oe(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ve(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(le(e),ve(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=Y(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),ve(n,i),r):new oe(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new oe(null))}}function Rs(t,e,n){if(Q(e))return new Lt(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ke(i,e);return s=s.updateChild(o,n),new Lt(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new Lt(s)}}}function td(t,e,n){let r=t;return Ue(n,(i,s)=>{r=Rs(r,ve(e,i),s)}),r}function Nm(t,e){if(Q(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new Lt(n)}}function nd(t,e){return Dr(t,e)!=null}function Dr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function Pm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function Vn(t,e){if(Q(e))return t;{const n=Dr(t,e);return n!=null?new Lt(new oe(n)):new Lt(t.writeTree_.subtree(e))}}function rd(t){return t.writeTree_.isEmpty()}function ki(t,e){return Ky(ee(),t.writeTree_,e)}function Ky(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ky(ve(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ve(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e){return Xy(e,t)}function PR(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Rs(t.visibleWrites,e,n)),t.lastWriteId=r}function xR(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=td(t.visibleWrites,e,n),t.lastWriteId=r}function AR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DR(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&OR(l,r.path)?i=!1:yt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return MR(t),!0;if(r.snap)t.visibleWrites=Nm(t.visibleWrites,r.path);else{const l=r.children;Ue(l,a=>{t.visibleWrites=Nm(t.visibleWrites,ve(r.path,a))})}return!0}else return!1}function OR(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(ve(t.path,n),e))return!0;return!1}function MR(t){t.visibleWrites=qy(t.allWrites,LR,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function LR(t){return t.visible}function qy(t,e,n){let r=Lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)yt(n,o)?(l=Ke(n,o),r=Rs(r,l,s.snap)):yt(o,n)&&(l=Ke(o,n),r=Rs(r,ee(),s.snap.getChild(l)));else if(s.children){if(yt(n,o))l=Ke(n,o),r=td(r,l,s.children);else if(yt(o,n))if(l=Ke(o,n),Q(l))r=td(r,ee(),s.children);else{const a=wi(s.children,Y(l));if(a){const u=a.getChild(le(l));r=Rs(r,ee(),u)}}}else throw Li("WriteRecord should have .snap or .children")}}return r}function Qy(t,e,n,r,i){if(!r&&!i){const s=Dr(t.visibleWrites,e);if(s!=null)return s;{const o=Vn(t.visibleWrites,e);if(rd(o))return n;if(n==null&&!nd(o,ee()))return null;{const l=n||F.EMPTY_NODE;return ki(o,l)}}}else{const s=Vn(t.visibleWrites,e);if(!i&&rd(s))return n;if(!i&&n==null&&!nd(s,ee()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(yt(u.path,e)||yt(e,u.path))},l=qy(t.allWrites,o,e),a=n||F.EMPTY_NODE;return ki(l,a)}}}function bR(t,e,n){let r=F.EMPTY_NODE;const i=Dr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Vn(t.visibleWrites,e);return n.forEachChild(ye,(o,l)=>{const a=ki(Vn(s,new se(o)),l);r=r.updateImmediateChild(o,a)}),Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Vn(t.visibleWrites,e);return Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function FR(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ve(e,n);if(nd(t.visibleWrites,s))return null;{const o=Vn(t.visibleWrites,s);return rd(o)?i.getChild(n):ki(o,i.getChild(n))}}function UR(t,e,n,r){const i=ve(e,n),s=Dr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Vn(t.visibleWrites,i);return ki(o,r.getNode().getImmediateChild(n))}else return null}function jR(t,e){return Dr(t.visibleWrites,e)}function zR(t,e,n,r,i,s,o){let l;const a=Vn(t.visibleWrites,e),u=Dr(a,ee());if(u!=null)l=u;else if(n!=null)l=ki(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function BR(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function oa(t,e,n,r){return Qy(t.writeTree,t.treePath,e,n,r)}function Mh(t,e){return bR(t.writeTree,t.treePath,e)}function xm(t,e,n,r){return FR(t.writeTree,t.treePath,e,n,r)}function la(t,e){return jR(t.writeTree,ve(t.treePath,e))}function WR(t,e,n,r,i,s){return zR(t.writeTree,t.treePath,e,n,r,i,s)}function Lh(t,e,n){return UR(t.writeTree,t.treePath,e,n)}function Yy(t,e){return Xy(ve(t.treePath,e),t.writeTree)}function Xy(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ro(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,no(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Si(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ro(r,e.snapshotNode,i.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Jy=new VR;class bh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),s=WR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t){return{filter:t}}function GR(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KR(t,e,n,r,i){const s=new HR;let o,l;if(n.type===Dt.OVERWRITE){const u=n;u.source.fromUser?o=id(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=aa(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Dt.MERGE){const u=n;u.source.fromUser?o=QR(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=sd(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Dt.ACK_USER_WRITE){const u=n;u.revert?o=JR(t,e,u.path,r,i,s):o=YR(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Dt.LISTEN_COMPLETE)o=XR(t,e,n.path,r,s);else throw Li("Unknown operation type: "+n.type);const a=s.getChanges();return qR(e,o,a),{viewCache:o,changes:a}}function qR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=sa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Vy(sa(e)))}}function Zy(t,e,n,r,i,s){const o=e.eventCache;if(la(r,n)!=null)return e;{let l,a;if(Q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Nr(e),c=u instanceof F?u:F.EMPTY_NODE,d=Mh(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=oa(r,Nr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=Y(n);if(u===".priority"){R(qn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=xm(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=le(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=xm(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Lh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ts(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function aa(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=Y(n);if(!a.isCompleteForPath(n)&&qn(n)>1)return e;const _=le(n),I=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(a.getNode(),I):u=c.updateChild(a.getNode(),g,I,_,Jy,null)}const d=Gy(e,u,a.isFullyInitialized()||Q(n),c.filtersNodes()),f=new bh(i,d,s);return Zy(t,d,n,i,f,l)}function id(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new bh(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ts(e,u,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ts(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=le(n),g=l.getNode().getImmediateChild(d);let _;if(Q(f))_=r;else{const y=c.getCompleteChild(d);y!=null?Th(f)===".priority"&&y.getChild(by(f)).isEmpty()?_=y:_=y.updateChild(f,r):_=F.EMPTY_NODE}if(g.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),d,_,f,c,o);a=Ts(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Am(t,e){return t.eventCache.isCompleteForChild(e)}function QR(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ve(n,a);Am(e,Y(c))&&(l=id(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ve(n,a);Am(e,Y(c))||(l=id(t,l,c,u,i,s,o))}),l}function Dm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function sd(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;Q(n)?u=r:u=new oe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=Dm(t,g,f);a=aa(t,a,new se(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),y=Dm(t,_,f);a=aa(t,a,new se(d),y,i,s,o,l)}}),a}function YR(t,e,n,r,i,s,o){if(la(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(Q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return aa(t,e,n,a.getNode().getChild(n),i,s,l,o);if(Q(n)){let u=new oe(null);return a.getNode().forEachChild(di,(c,d)=>{u=u.set(new se(c),d)}),sd(t,e,n,u,i,s,l,o)}else return e}else{let u=new oe(null);return r.foreach((c,d)=>{const f=ve(n,c);a.isCompleteForPath(f)&&(u=u.set(c,a.getNode().getChild(f)))}),sd(t,e,n,u,i,s,l,o)}}function XR(t,e,n,r,i){const s=e.serverCache,o=Gy(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return Zy(t,o,n,r,Jy,i)}function JR(t,e,n,r,i,s){let o;if(la(r,n)!=null)return e;{const l=new bh(r,e,i),a=e.eventCache.getNode();let u;if(Q(n)||Y(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=oa(r,Nr(e));else{const d=e.serverCache.getNode();R(d instanceof F,"serverChildren would be complete if leaf node"),c=Mh(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=Y(n);let d=Lh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,le(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,F.EMPTY_NODE,le(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oa(r,Nr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||la(r,ee())!=null,Ts(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ph(r.getIndex()),s=_R(r);this.processor_=$R(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,l.getNode(),null),c=new Qn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Qn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ba(d,c),this.eventGenerator_=new IR(this.query_)}get query(){return this.query_}}function eN(t){return t.viewCache_.serverCache.getNode()}function tN(t){return sa(t.viewCache_)}function nN(t,e){const n=Nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Om(t){return t.eventRegistrations_.length===0}function rN(t,e){t.eventRegistrations_.push(e)}function Mm(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Lm(t,e,n,r){e.type===Dt.MERGE&&e.source.queryId!==null&&(R(Nr(t.viewCache_),"We should always have a full cache before handling merges"),R(sa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=KR(t.processor_,i,e,n,r);return GR(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,e0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(Si(s,o))}),n.isFullyInitialized()&&r.push(Vy(n.getNode())),e0(t,r,n.getNode(),e)}function e0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return kR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;class t0{constructor(){this.views=new Map}}function sN(t){R(!ua,"__referenceConstructor has already been defined"),ua=t}function oN(){return R(ua,"Reference.ts has not been loaded"),ua}function lN(t){return t.views.size===0}function Fh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Lm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Lm(o,e,n,r));return s}}function n0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=oa(n,i?r:null),a=!1;l?a=!0:r instanceof F?(l=Mh(n,r),a=!1):(l=F.EMPTY_NODE,a=!1);const u=ba(new Qn(l,a,!1),new Qn(r,i,!1));return new ZR(e,u)}return o}function aN(t,e,n,r,i,s){const o=n0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rN(o,n),iN(o,n)}function uN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Yn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Mm(u,n,r)),Om(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Mm(a,n,r)),Om(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Yn(t)&&s.push(new(oN())(e._repo,e._path)),{removed:s,events:o}}function r0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $n(t,e){let n=null;for(const r of t.views.values())n=n||nN(r,e);return n}function i0(t,e){if(e._queryParams.loadsAllData())return Ua(t);{const r=e._queryIdentifier;return t.views.get(r)}}function s0(t,e){return i0(t,e)!=null}function Yn(t){return Ua(t)!=null}function Ua(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;function cN(t){R(!ca,"__referenceConstructor has already been defined"),ca=t}function dN(){return R(ca,"Reference.ts has not been loaded"),ca}let hN=1;class bm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=BR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o0(t,e,n,r,i){return PR(t.pendingWriteTree_,e,n,r,i),i?Hi(t,new Rr(Ah(),e,n)):[]}function fN(t,e,n,r){xR(t.pendingWriteTree_,e,n,r);const i=oe.fromObject(n);return Hi(t,new Ii(Ah(),e,i))}function Dn(t,e,n=!1){const r=AR(t.pendingWriteTree_,e);if(DR(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(ee(),!0):Ue(r.children,o=>{s=s.set(new se(o),!0)}),Hi(t,new ia(r.path,s,n))}else return[]}function No(t,e,n){return Hi(t,new Rr(Dh(),e,n))}function pN(t,e,n){const r=oe.fromObject(n);return Hi(t,new Ii(Dh(),e,r))}function mN(t,e){return Hi(t,new so(Dh(),e))}function gN(t,e,n){const r=jh(t,n);if(r){const i=zh(r),s=i.path,o=i.queryId,l=Ke(s,e),a=new so(Oh(o),l);return Bh(t,s,a)}else return[]}function l0(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||s0(o,e))){const a=uN(o,e,n,r);lN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>Yn(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=wN(f);for(let _=0;_<g.length;++_){const y=g[_],I=y.query,h=d0(t,y);t.listenProvider_.startListening(Ns(I),oo(t,I),h.hashFn,h.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ns(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(ja(f));t.listenProvider_.stopListening(Ns(f),g)}))}EN(t,u)}return l}function a0(t,e,n,r){const i=jh(t,r);if(i!=null){const s=zh(i),o=s.path,l=s.queryId,a=Ke(o,e),u=new Rr(Oh(l),a,n);return Bh(t,o,u)}else return[]}function _N(t,e,n,r){const i=jh(t,r);if(i){const s=zh(i),o=s.path,l=s.queryId,a=Ke(o,e),u=oe.fromObject(n),c=new Ii(Oh(l),a,u);return Bh(t,o,c)}else return[]}function vN(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=Ke(f,i);s=s||$n(g,_),o=o||Yn(g)});let l=t.syncPointTree_.get(i);l?(o=o||Yn(l),s=s||$n(l,ee())):(l=new t0,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=$n(_,ee());y&&(s=s.updateImmediateChild(g,y))}));const u=s0(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=ja(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=CN();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=Fa(t.pendingWriteTree_,i);let d=aN(l,e,n,c,s,a);if(!u&&!o&&!r){const f=i0(l,e);d=d.concat(SN(t,e,f))}return d}function Uh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ke(o,e),u=$n(l,a);if(u)return u});return Qy(i,e,s,n,!0)}function yN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=Ke(u,n);r=r||$n(c,d)});let i=t.syncPointTree_.get(n);i?r=r||$n(i,ee()):(i=new t0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Qn(r,!0,!1):null,l=Fa(t.pendingWriteTree_,e._path),a=n0(i,e,l,s?o.getNode():F.EMPTY_NODE,s);return tN(a)}function Hi(t,e){return u0(e,t.syncPointTree_,null,Fa(t.pendingWriteTree_,ee()))}function u0(t,e,n,r){if(Q(t.path))return c0(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=$n(i,ee()));let s=[];const o=Y(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Yy(r,o);s=s.concat(u0(l,a,u,c))}return i&&(s=s.concat(Fh(i,t,r,n))),s}}function c0(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=$n(i,ee()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Yy(r,o),c=t.operationForChild(o);c&&(s=s.concat(c0(c,l,a,u)))}),i&&(s=s.concat(Fh(i,t,r,n))),s}function d0(t,e){const n=e.query,r=oo(t,n);return{hashFn:()=>(eN(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?gN(t,n._path,r):mN(t,n._path);{const s=m1(i,n);return l0(t,n,null,s)}}}}function oo(t,e){const n=ja(e);return t.queryToTagMap.get(n)}function ja(t){return t._path.toString()+"$"+t._queryIdentifier}function jh(t,e){return t.tagToQueryMap.get(e)}function zh(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Bh(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=Fa(t.pendingWriteTree_,e);return Fh(r,n,i,null)}function wN(t){return t.fold((e,n,r)=>{if(n&&Yn(n))return[Ua(n)];{let i=[];return n&&(i=r0(n)),Ue(r,(s,o)=>{i=i.concat(o)}),i}})}function Ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dN())(t._repo,t._path):t}function EN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ja(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function CN(){return hN++}function SN(t,e,n){const r=e._path,i=oo(t,e),s=d0(t,n),o=t.listenProvider_.startListening(Ns(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!Yn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!Q(u)&&c&&Yn(c))return[Ua(c).query];{let f=[];return c&&(f=f.concat(r0(c).map(g=>g.query))),Ue(d,(g,_)=>{f=f.concat(_)}),f}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Ns(c),oo(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wh(n)}node(){return this.node_}}class Hh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Hh(this.syncTree_,n)}node(){return Uh(this.syncTree_,this.path_)}}const IN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fm=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return TN(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},TN=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},h0=function(t,e,n,r){return Vh(e,new Hh(n,t),r)},f0=function(t,e,n){return Vh(t,new Wh(e),n)};function Vh(t,e,n){const r=t.getPriority().val(),i=Fm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Fm(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new xe(l,ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(ye,(l,a)=>{const u=Vh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Gh(t,e){let n=e instanceof se?e:new se(e),r=t,i=Y(n);for(;i!==null;){const s=wi(r.node.children,i)||{children:{},childCount:0};r=new $h(i,r,s),n=le(n),i=Y(n)}return r}function Vi(t){return t.node.value}function p0(t,e){t.node.value=e,od(t)}function m0(t){return t.node.childCount>0}function RN(t){return Vi(t)===void 0&&!m0(t)}function za(t,e){Ue(t.node.children,(n,r)=>{e(new $h(n,t,r))})}function g0(t,e,n,r){n&&!r&&e(t),za(t,i=>{g0(i,e,!0,r)}),n&&r&&e(t)}function NN(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Po(t){return new se(t.parent===null?t.name:Po(t.parent)+"/"+t.name)}function od(t){t.parent!==null&&PN(t.parent,t.name,t)}function PN(t,e,n){const r=RN(n),i=Gt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,od(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,od(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=/[\[\].#$\/\u0000-\u001F\u007F]/,AN=/[\[\].#$\u0000-\u001F\u007F]/,Hu=10*1024*1024,Kh=function(t){return typeof t=="string"&&t.length!==0&&!xN.test(t)},_0=function(t){return typeof t=="string"&&t.length!==0&&!AN.test(t)},DN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_0(t)},ON=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Eh(t)||t&&typeof t=="object"&&Gt(t,".sv")},v0=function(t,e,n,r){r&&e===void 0||Ba(xa(t,"value"),e,n)},Ba=function(t,e,n){const r=n instanceof se?new Q1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+or(r));if(typeof e=="function")throw new Error(t+"contains a function "+or(r)+" with contents = "+e.toString());if(Eh(e))throw new Error(t+"contains "+e.toString()+" "+or(r));if(typeof e=="string"&&e.length>Hu/3&&Aa(e)>Hu)throw new Error(t+"contains a string greater than "+Hu+" utf8 bytes "+or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ue(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kh(o)))throw new Error(t+" contains an invalid key ("+o+") "+or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Y1(r,o),Ba(t,l,r),X1(r)}),i&&s)throw new Error(t+' contains ".value" child '+or(r)+" in addition to actual children.")}},MN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=to(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Kh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(q1);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&yt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},LN=function(t,e,n,r){if(r&&e===void 0)return;const i=xa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ue(e,(o,l)=>{const a=new se(o);if(Ba(i,l,ve(n,a)),Th(a)===".priority"&&!ON(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),MN(i,s)},y0=function(t,e,n,r){if(!(r&&n===void 0)&&!_0(n))throw new Error(xa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),y0(t,e,n,r)},qh=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DN(n))throw new Error(xa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Fy(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function St(t,e,n){Qh(t,n),jN(t,r=>yt(r,e)||yt(e,r))}function jN(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();mr&&Le("event: "+n.toString()),Wi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="repo_interrupt",WN=25;class HN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ra(),this.transactionQueueTree_=new $h,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VN(t,e,n){if(t.stats_=Ih(t.repoInfo_),t.forceRestClient_||y1())t.server_=new na(t.repoInfo_,(r,i,s,o)=>{Um(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new un(t.repoInfo_,e,(r,i,s,o)=>{Um(t,r,i,s,o)},r=>{jm(t,r)},r=>{$N(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=I1(t.repoInfo_,()=>new SR(t.stats_,t.server_)),t.infoData_=new vR,t.infoSyncTree_=new bm({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=No(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Yh(t,"connected",!1),t.serverSyncTree_=new bm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);St(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function w0(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wa(t){return IN({timestamp:w0(t)})}function Um(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Vl(n,u=>ke(u));o=_N(t.serverSyncTree_,s,a,i)}else{const a=ke(n);o=a0(t.serverSyncTree_,s,a,i)}else if(r){const a=Vl(n,u=>ke(u));o=pN(t.serverSyncTree_,s,a)}else{const a=ke(n);o=No(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ti(t,s)),St(t.eventQueue_,l,o)}function jm(t,e){Yh(t,"connected",e),e===!1&&QN(t)}function $N(t,e){Ue(e,(n,r)=>{Yh(t,n,r)})}function Yh(t,e,n){const r=new se("/.info/"+e),i=ke(n);t.infoData_.updateSnapshot(r,i);const s=No(t.infoSyncTree_,r,i);St(t.eventQueue_,r,s)}function Xh(t){return t.nextWriteId_++}function GN(t,e,n){const r=yN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ke(i).withIndex(e._queryParams.getIndex());vN(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=No(t.serverSyncTree_,e._path,s);else{const l=oo(t.serverSyncTree_,e);o=a0(t.serverSyncTree_,e._path,s,l)}return St(t.eventQueue_,e._path,o),l0(t.serverSyncTree_,e,n,null,!0),s},i=>(xo(t,"get for query "+Te(e)+" failed: "+i),Promise.reject(new Error(i))))}function KN(t,e,n,r,i){xo(t,"set",{path:e.toString(),value:n,priority:r});const s=Wa(t),o=ke(n,r),l=Uh(t.serverSyncTree_,e),a=f0(o,l,s),u=Xh(t),c=o0(t.serverSyncTree_,e,a,u,!0);Qh(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const _=f==="ok";_||Qe("set at "+e+" failed: "+f);const y=Dn(t.serverSyncTree_,u,!_);St(t.eventQueue_,e,y),ld(t,i,f,g)});const d=Zh(t,e);Ti(t,d),St(t.eventQueue_,d,[])}function qN(t,e,n,r){xo(t,"update",{path:e.toString(),value:n});let i=!0;const s=Wa(t),o={};if(Ue(n,(l,a)=>{i=!1,o[l]=h0(ve(e,l),ke(a),t.serverSyncTree_,s)}),i)Le("update() called with empty data.  Don't do anything."),ld(t,r,"ok",void 0);else{const l=Xh(t),a=fN(t.serverSyncTree_,e,o,l);Qh(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Qe("update at "+e+" failed: "+u);const f=Dn(t.serverSyncTree_,l,!d),g=f.length>0?Ti(t,e):e;St(t.eventQueue_,g,f),ld(t,r,u,c)}),Ue(n,u=>{const c=Zh(t,ve(e,u));Ti(t,c)}),St(t.eventQueue_,e,[])}}function QN(t){xo(t,"onDisconnectEvents");const e=Wa(t),n=ra();ed(t.onDisconnect_,ee(),(i,s)=>{const o=h0(i,s,t.serverSyncTree_,e);$y(n,i,o)});let r=[];ed(n,ee(),(i,s)=>{r=r.concat(No(t.serverSyncTree_,i,s));const o=Zh(t,i);Ti(t,o)}),t.onDisconnect_=ra(),St(t.eventQueue_,ee(),r)}function YN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BN)}function xo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function ld(t,e,n,r){e&&Wi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function E0(t,e,n){return Uh(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Jh(t,e=t.transactionQueueTree_){if(e||Ha(t,e),Vi(e)){const n=S0(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&XN(t,Po(e),n)}else m0(e)&&za(e,n=>{Jh(t,n)})}function XN(t,e,n){const r=n.map(u=>u.currentWriteId),i=E0(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];R(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ke(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{xo(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Dn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ha(t,Gh(t.transactionQueueTree_,e)),Jh(t,t.transactionQueueTree_),St(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)Wi(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Qe("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ti(t,e)}},o)}function Ti(t,e){const n=C0(t,e),r=Po(n),i=S0(t,n);return JN(t,i,r),r}function JN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ke(n,a.path);let c=!1,d;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=WN)c=!0,d="maxretry",i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=E0(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Ba("transaction failed: Data returned ",g,a.path);let _=ke(g);typeof g=="object"&&g!=null&&Gt(g,".priority")||(_=_.updatePriority(f.getPriority()));const I=a.currentWriteId,h=Wa(t),p=f0(_,f,h);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=Xh(t),o.splice(o.indexOf(I),1),i=i.concat(o0(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Dn(t.serverSyncTree_,I,!0))}else c=!0,d="nodata",i=i.concat(Dn(t.serverSyncTree_,a.currentWriteId,!0))}St(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ha(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Wi(r[l]);Jh(t,t.transactionQueueTree_)}function C0(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&Vi(r)===void 0;)r=Gh(r,n),e=le(e),n=Y(e);return r}function S0(t,e){const n=[];return I0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function I0(t,e,n){const r=Vi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);za(e,i=>{I0(t,i,n)})}function Ha(t,e){const n=Vi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,p0(e,n.length>0?n:void 0)}za(e,r=>{Ha(t,r)})}function Zh(t,e){const n=Po(C0(t,e)),r=Gh(t.transactionQueueTree_,e);return NN(r,i=>{Vu(t,i)}),Vu(t,r),g0(r,i=>{Vu(t,i)}),n}function Vu(t,e){const n=Vi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?p0(e,void 0):n.length=s+1,St(t.eventQueue_,Po(e),i);for(let o=0;o<r.length;o++)Wi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const zm=function(t,e){const n=tP(t),r=n.namespace;n.domain==="firebase.com"&&mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||c1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ry(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},tP=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=ZN(t.substring(c,d)));const f=eP(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",nP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Bm.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Bm.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class iP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:Th(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=Tm(this._queryParams),n=Ch(e);return n==="{}"?"default":n}get _queryObject(){return Tm(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof ef))return!1;const n=this._repo===e._repo,r=Fy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+K1(this._path)}}class vn extends ef{constructor(e,n){super(e,n,new xh,!1)}get parent(){const e=by(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class lo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Ri(this.ref,e);return new lo(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new lo(i,Ri(this.ref,r),ye)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function on(t,e){return t=it(t),t._checkNotDeleted("ref"),e!==void 0?Ri(t._root,e):t._root}function Ri(t,e){return t=it(t),Y(t._path)===null?bN("child","path",e,!1):y0("child","path",e,!1),new vn(t._repo,ve(t._path,e))}function oP(t,e){t=it(t),qh("push",t._path),v0("push",e,t._path,!0);const n=w0(t._repo),r=nP(n),i=Ri(t,r),s=Ri(t,r);let o;return e!=null?o=Va(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function k0(t){return qh("remove",t._path),Va(t,null)}function Va(t,e){t=it(t),qh("set",t._path),v0("set",e,t._path,!1);const n=new _o;return KN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function tf(t,e){LN("update",e,t._path,!1);const n=new _o;return qN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function lP(t){t=it(t);const e=new sP(()=>{}),n=new nf(e);return GN(t._repo,t,n).then(r=>new lo(r,new vn(t._repo,t._path),t._queryParams.getIndex()))}class nf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new rP("value",this,new lo(e.snapshotNode,new vn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new iP(this,e,n):null}matches(e){return e instanceof nf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}sN(vn);cN(vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="FIREBASE_DATABASE_EMULATOR_HOST",ad={};let uP=!1;function cP(t,e,n,r){t.repoInfo_=new Ry(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function dP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zm(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[aP]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=zm(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new ci(ci.OWNER):new E1(t.name,t.options,e);FN("Invalid Firebase Database URL",o),Q(o.path)||mn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=fP(l,t,c,new w1(t.name,n));return new pP(d,t)}function hP(t,e){const n=ad[e];(!n||n[t.key]!==t)&&mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YN(t),delete n[t.key]}function fP(t,e,n,r){let i=ad[e.name];i||(i={},ad[e.name]=i);let s=i[t.toURLString()];return s&&mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new HN(t,uP,n,r),i[t.toURLString()]=s,s}class pP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mn("Cannot call "+e+" on a deleted database.")}}function Ni(t=xv(),e){const n=dh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=DS("database");r&&mP(n,...r)}return n}function mP(t,e,n,r={}){t=it(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&mn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ci(ci.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:OS(r.mockUserToken,t.app.options.projectId);s=new ci(o)}cP(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){s1(Fi),Ei(new Cr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return dP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Hn(um,cm,t),Hn(um,cm,"esm2017")}un.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};un.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};gP();const _P=()=>{N.useState("");const t=go(),e=yo(Io),n=hy(),r=Ni(e);function i(o){o.preventDefault();var l=document.getElementById("email").value,a=document.getElementById("password").value;Hk(n,l,a).then(u=>{const c=u.user;var d=new Date;tf(on(r,"users/"+c.uid),{last_login:d}),alert("Sucessfull Login"),s(c.uid)}).catch(u=>{u.code;const c=u.message;alert(c)})}function s(o){localStorage.setItem("token","token"),t(`ToDoApp/${o}`)}return S.jsx(S.Fragment,{children:S.jsx("div",{id:"signinform",className:"form-container",children:S.jsxs("form",{className:"form",onSubmit:i,action:"",children:[S.jsx("span",{children:"Login"}),S.jsxs("div",{className:"input-group",children:[S.jsx("input",{id:"email",type:"email",className:"form-control",placeholder:"name@example.com",required:!0}),S.jsx("label",{htmlFor:"floatingInput",children:"Email address"})]}),S.jsxs("div",{className:"input-group",children:[S.jsx("input",{id:"password",type:"password",className:"form-control",placeholder:"Password",required:!0}),S.jsx("label",{htmlFor:"floatingPassword",children:"Password"})]}),S.jsx("div",{className:"feedback-message error-message",children:S.jsx("span",{})}),S.jsx("button",{type:"submit",children:"Login"}),S.jsx("div",{className:"second-option-group",children:S.jsxs("span",{children:["Doesn't have an account yet? ",S.jsx(sh,{to:"ToDoApp/signup",children:"sign-up"})]})})]})})})};const vP=()=>{N.useState(""),N.useState(""),N.useState(""),N.useState([]);const t=go(),e=yo(Io),n=hy(),r=Ni(e);function i(o){o.preventDefault();var l=s("name"),a=s("email"),u=s("password");Wk(n,a,u).then(c=>{const d=c.user;Va(on(r,"users/"+d.uid),{email:a,password:u,name:l}).then(()=>{alert("account created"),localStorage.setItem("token","token"),t(`ToDoApp/${d.uid}`)}).catch(f=>{alert(f)})}).catch(c=>{c.code;const d=c.message;alert(d)})}const s=o=>document.getElementById(o).value;return S.jsx(S.Fragment,{children:S.jsx("div",{id:"signupform",className:"form-container",children:S.jsxs("form",{className:"form",onSubmit:i,action:"",children:[S.jsx("span",{children:"Create Account"}),S.jsxs("div",{className:"input-group",children:[S.jsx("input",{id:"name",type:"text",name:"name",className:"form-control",placeholder:"Thomas Wayne"}),S.jsx("label",{htmlFor:"floatingInput",children:"Complete Name"})]}),S.jsxs("div",{className:"input-group",children:[S.jsx("input",{id:"email",type:"email",name:"email",className:"form-control",placeholder:"name@example.com"}),S.jsx("label",{htmlFor:"floatingInput",children:"Email address"})]}),S.jsxs("div",{className:"input-group",children:[S.jsx("input",{id:"password",type:"password",name:"password",className:"form-control",placeholder:"Password"}),S.jsx("label",{htmlFor:"floatingPassword",children:"Password"})]}),S.jsxs("div",{className:"input-group",children:[S.jsx("input",{id:"confirm-password",type:"password",name:"confirm-password",className:"form-control",placeholder:"Confirm Password"}),S.jsx("label",{htmlFor:"floatingPassword",children:"Confirm Password"})]}),S.jsx("div",{id:"feedback-message",className:"feedback-message",children:S.jsx("span",{})}),S.jsx("button",{type:"submit",children:"Create"}),S.jsx("div",{className:"second-option-group",children:S.jsxs("span",{children:["Already have an account? ",S.jsx(sh,{to:"ToDoApp/signin",children:"sign-in"})]})})]})})})};const yP=()=>{const[t,e]=N.useState(!1),n=go(),r=()=>{localStorage.getItem("token")?localStorage.removeItem("token"):alert("you need to login"),n("/signin")};function i(){document.addEventListener("scroll",s=>{pageYOffset>0?e(!0):e(!1)})}return document.addEventListener("DOMContentLoaded",()=>{pageYOffset>0&&e(!0)}),i(),S.jsx(S.Fragment,{children:S.jsxs("nav",{className:` ${t?"scrolled":""}`,children:[S.jsx("span",{children:"WhatNow"}),S.jsxs("ul",{children:[S.jsx("li",{children:"Home"}),S.jsx("li",{children:S.jsx("a",{onClick:r,children:"Logout"})})]})]})})},wP=()=>S.jsxs(S.Fragment,{children:[S.jsx(yP,{}),S.jsx(dS,{})]});const EP=()=>S.jsxs("div",{className:"error-div",children:[S.jsx("h1",{children:"Uh-Oh O.O. There's something wrong here, let me take you back buddy"}),S.jsx(sh,{className:"link",to:"/",children:"Home Page"})]});const CP=({taskKey:t,dbTaskStatus:e,title:n})=>{const{id:r}=pv(),[i,s]=N.useState(e),o=yo(Io),l=Ni(o);on(Ni());const a=()=>{s(!i),tf(on(l,"users/"+r+"/tasks_list/"+t),{task_status:!i})},u=()=>{k0(on(l,"users/"+r+"/tasks_list/"+t))},c=()=>{var d=document.getElementById("add-task-id"),f=document.getElementById("newTask"),g=document.getElementById("add-task-button");g.textContent="Edit Task",d.textContent=t,f.value=n};return S.jsxs("div",{id:`${t}`,className:"task",children:[S.jsxs("div",{className:"left-task-content",children:[S.jsx("div",{className:"check-div",children:S.jsxs("label",{className:"check-label",children:[S.jsx("input",{checked:i,onChange:a,id:`taskStatus${e}`,type:"checkbox"}),S.jsx("div",{className:"checkmark"})]})}),S.jsx("div",{className:"task-name",children:S.jsx("span",{children:n})})]}),S.jsxs("div",{className:"task-icons",children:[S.jsx("div",{className:"task-edit",children:S.jsx("a",{onClick:c,href:"#",children:S.jsx("svg",{className:"edit-svg",xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 -960 960 960",width:"20",children:S.jsx("path",{d:"M786.667-645.001 644.668-786.334 691.334-833q19-19 47.167-18.667 28.166.334 47.166 19.334L833-785q19 18.999 19.333 46.499.334 27.5-18.666 46.5l-47 47ZM153.333-120Q139-120 129.5-129.5q-9.5-9.5-9.5-23.833v-95q0-6.666 2.333-12.499 2.334-5.834 7.667-11.167l467.335-467.335 141.999 141.999L271.999-130q-5.333 5.333-11.167 7.667Q254.999-120 248.333-120h-95Z"})})})}),S.jsx("div",{className:"task-delete",children:S.jsx("a",{onClick:u,href:"#",children:S.jsx("svg",{className:"delete-svg",xmlns:"http://www.w3.org/2000/svg",height:"20",viewBox:"0 -960 960 960",width:"20",children:S.jsx("path",{d:"M267.333-120q-27 0-46.833-19.833t-19.833-46.833v-553.335h-7.334q-14.166 0-23.75-9.617Q160-759.234 160-773.451q0-14.216 9.583-23.716 9.584-9.5 23.75-9.5H352q0-14.333 9.583-23.833 9.583-9.5 23.75-9.5h189.334q14.167 0 23.75 9.583 9.583 9.584 9.583 23.75h158.667q14.166 0 23.75 9.617Q800-787.433 800-773.217q0 14.217-9.583 23.716-9.584 9.5-23.75 9.5h-7.334v553.335q0 27-19.833 46.833T692.667-120H267.333Zm97.334-184q0 14.167 9.617 23.75 9.617 9.584 23.833 9.584 14.216 0 23.716-9.584 9.5-9.583 9.5-23.75v-319.334q0-14.167-9.617-23.75t-23.833-9.583q-14.216 0-23.716 9.583-9.5 9.583-9.5 23.75V-304Zm164 0q0 14.167 9.617 23.75 9.617 9.584 23.833 9.584 14.216 0 23.716-9.584 9.5-9.583 9.5-23.75v-319.334q0-14.167-9.617-23.75t-23.833-9.583q-14.216 0-23.716 9.583-9.5 9.583-9.5 23.75V-304Z"})})})})]})]})},SP=()=>{const{id:t}=pv(),[e,n]=N.useState([]),r=yo(Io),i=Ni(r),s=on(Ni()),o=on(i,"users/"+t+"/tasks_list/"),l=oP(o);lP(Ri(s,`users/${t}/tasks_list/`)).then(d=>{if(d.exists()){const f=Object.entries(d.val());n(f)}else console.log("No data available")}).catch(d=>{console.error(d)});const a=()=>{k0(on(i,"users/"+t+"/tasks_list/"))};function u(){var d=document.getElementById("newTask").value,f=document.getElementById("newTask");Va(l,{task_status:!1,task_title:d}),f.value=""}function c(){var d=document.getElementById("add-task-button");if(d.textContent=="Edit Task"){var f=document.getElementById("add-task-id").textContent,g=document.getElementById("newTask"),d=document.getElementById("add-task-button");tf(on(i,"users/"+t+"/tasks_list/"+f),{task_title:g.value}),d.textContent="Add Task",f=f,g.value=""}else u()}return S.jsxs("div",{className:"tasks-container",children:[S.jsxs("span",{children:["Task List of User: ",t]}),S.jsxs("div",{className:"new-task-div",children:[S.jsx("button",{id:"add-task-id",children:"Nada aqui"}),S.jsx("label",{id:"new-task-label",htmlFor:"newTask",children:"Task:"}),S.jsx("input",{type:"text",name:"newTask",id:"newTask"}),S.jsx("button",{id:"add-task-button",onClick:c,type:"submit",children:"Add Task"})]}),S.jsx("div",{className:"tasks-list",children:S.jsx("ul",{id:"tasks-ul",children:e.map((d,f)=>S.jsx("li",{children:S.jsx(CP,{taskKey:d[0],dbTaskStatus:d[1].task_status,title:d[1].task_title})},f))})}),S.jsx("div",{className:"bottom-buttons",children:S.jsx("a",{onClick:a,href:"",children:e.length?"Clear All":""})})]})};const IP=({children:t,redirectTo:e})=>{const n=localStorage.getItem("token")!==null;return console.log("isAuth:",n),n?t:S.jsx(_v,{to:e})},kP=vS([{path:"ToDoApp/",element:S.jsx(wP,{}),errorElement:S.jsx(EP,{}),children:[{path:"ToDoApp/:id",element:S.jsx(IP,{redirectTo:"/signin",children:S.jsx(SP,{})})},{path:"ToDoApp/signin",element:S.jsx(_P,{})},{path:"ToDoApp/signup",element:S.jsx(vP,{})},{path:"ToDoApp/",element:S.jsx(_v,{to:"/:0"})}]}]);$u.createRoot(document.getElementById("root")).render(S.jsx(Y0.StrictMode,{children:S.jsx(uS,{router:kP})}));
