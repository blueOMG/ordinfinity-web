(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Ru(e,t){const r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const et={},zi=[],Vt=()=>{},Pm=()=>!1,Mm=/^on[^a-z]/,nl=e=>Mm.test(e),Ou=e=>e.startsWith("onUpdate:"),wt=Object.assign,Nu=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Bm=Object.prototype.hasOwnProperty,je=(e,t)=>Bm.call(e,t),Ne=Array.isArray,Vi=e=>ol(e)==="[object Map]",Jh=e=>ol(e)==="[object Set]",Be=e=>typeof e=="function",rt=e=>typeof e=="string",il=e=>typeof e=="symbol",Xe=e=>e!==null&&typeof e=="object",Xh=e=>(Xe(e)||Be(e))&&Be(e.then)&&Be(e.catch),ep=Object.prototype.toString,ol=e=>ep.call(e),Dm=e=>ol(e).slice(8,-1),tp=e=>ol(e)==="[object Object]",Lu=e=>rt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ga=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sl=e=>{const t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Fm=/-(\w)/g,br=sl(e=>e.replace(Fm,(t,r)=>r?r.toUpperCase():"")),Um=/\B([A-Z])/g,_o=sl(e=>e.replace(Um,"-$1").toLowerCase()),al=sl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gl=sl(e=>e?`on${al(e)}`:""),ci=(e,t)=>!Object.is(e,t),Kl=(e,t)=>{for(let r=0;r<e.length;r++)e[r](t)},Aa=(e,t,r)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:r})},Wm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},jm=e=>{const t=rt(e)?Number(e):NaN;return isNaN(t)?e:t};let Zf;const kc=()=>Zf||(Zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ku(e){if(Ne(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=rt(n)?Gm(n):ku(n);if(o)for(const i in o)t[i]=o[i]}return t}else if(rt(e)||Xe(e))return e}const Hm=/;(?![^(]*\))/g,zm=/:([^]+)/,Vm=/\/\*[^]*?\*\//g;function Gm(e){const t={};return e.replace(Vm,"").split(Hm).forEach(r=>{if(r){const n=r.split(zm);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ft(e){let t="";if(rt(e))t=e;else if(Ne(e))for(let r=0;r<e.length;r++){const n=ft(e[r]);n&&(t+=n+" ")}else if(Xe(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qm=Ru(Km);function rp(e){return!!e||e===""}const Ym=e=>rt(e)?e:e==null?"":Ne(e)||Xe(e)&&(e.toString===ep||!Be(e.toString))?JSON.stringify(e,np,2):String(e),np=(e,t)=>t&&t.__v_isRef?np(e,t.value):Vi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:Jh(t)?{[`Set(${t.size})`]:[...t.values()]}:Xe(t)&&!Ne(t)&&!tp(t)?String(t):t;let Jt;class ip{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!t&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const r=Jt;try{return Jt=this,t()}finally{Jt=r}}}on(){Jt=this}off(){Jt=this.parent}stop(t){if(this._active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function op(e){return new ip(e)}function Zm(e,t=Jt){t&&t.active&&t.effects.push(e)}function sp(){return Jt}function ap(e){Jt&&Jt.cleanups.push(e)}const Pu=e=>{const t=new Set(e);return t.w=0,t.n=0,t},lp=e=>(e.w&In)>0,cp=e=>(e.n&In)>0,Qm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=In},Jm=e=>{const{deps:t}=e;if(t.length){let r=0;for(let n=0;n<t.length;n++){const o=t[n];lp(o)&&!cp(o)?o.delete(e):t[r++]=o,o.w&=~In,o.n&=~In}t.length=r}},Pc=new WeakMap;let jo=0,In=1;const Mc=30;let wr;const si=Symbol(""),Bc=Symbol("");class Mu{constructor(t,r=null,n){this.fn=t,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,Zm(this,n)}run(){if(!this.active)return this.fn();let t=wr,r=An;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=wr,wr=this,An=!0,In=1<<++jo,jo<=Mc?Qm(this):Qf(this),this.fn()}finally{jo<=Mc&&Jm(this),In=1<<--jo,wr=this.parent,An=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wr===this?this.deferStop=!0:this.active&&(Qf(this),this.onStop&&this.onStop(),this.active=!1)}}function Qf(e){const{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}let An=!0;const up=[];function xo(){up.push(An),An=!1}function Ao(){const e=up.pop();An=e===void 0?!0:e}function Gt(e,t,r){if(An&&wr){let n=Pc.get(e);n||Pc.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=Pu()),fp(o)}}function fp(e,t){let r=!1;jo<=Mc?cp(e)||(e.n|=In,r=!lp(e)):r=!e.has(wr),r&&(e.add(wr),wr.deps.push(e))}function qr(e,t,r,n,o,i){const s=Pc.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(r==="length"&&Ne(e)){const l=Number(n);s.forEach((h,d)=>{(d==="length"||!il(d)&&d>=l)&&a.push(h)})}else switch(r!==void 0&&a.push(s.get(r)),t){case"add":Ne(e)?Lu(r)&&a.push(s.get("length")):(a.push(s.get(si)),Vi(e)&&a.push(s.get(Bc)));break;case"delete":Ne(e)||(a.push(s.get(si)),Vi(e)&&a.push(s.get(Bc)));break;case"set":Vi(e)&&a.push(s.get(si));break}if(a.length===1)a[0]&&Dc(a[0]);else{const l=[];for(const h of a)h&&l.push(...h);Dc(Pu(l))}}function Dc(e,t){const r=Ne(e)?e:[...e];for(const n of r)n.computed&&Jf(n);for(const n of r)n.computed||Jf(n)}function Jf(e,t){(e!==wr||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Xm=Ru("__proto__,__v_isRef,__isVue"),dp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(il)),Xf=ew();function ew(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...r){const n=Ge(this);for(let i=0,s=this.length;i<s;i++)Gt(n,"get",i+"");const o=n[t](...r);return o===-1||o===!1?n[t](...r.map(Ge)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...r){xo();const n=Ge(this)[t].apply(this,r);return Ao(),n}}),e}function tw(e){const t=Ge(this);return Gt(t,"has",e),t.hasOwnProperty(e)}class hp{constructor(t=!1,r=!1){this._isReadonly=t,this._shallow=r}get(t,r,n){const o=this._isReadonly,i=this._shallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return i;if(r==="__v_raw"&&n===(o?i?pw:wp:i?mp:gp).get(t))return t;const s=Ne(t);if(!o){if(s&&je(Xf,r))return Reflect.get(Xf,r,n);if(r==="hasOwnProperty")return tw}const a=Reflect.get(t,r,n);return(il(r)?dp.has(r):Xm(r))||(o||Gt(t,"get",r),i)?a:pt(a)?s&&Lu(r)?a:a.value:Xe(a)?o?Fu(a):Eo(a):a}}class pp extends hp{constructor(t=!1){super(!1,t)}set(t,r,n,o){let i=t[r];if(Zi(i)&&pt(i)&&!pt(n))return!1;if(!this._shallow&&(!Ea(n)&&!Zi(n)&&(i=Ge(i),n=Ge(n)),!Ne(t)&&pt(i)&&!pt(n)))return i.value=n,!0;const s=Ne(t)&&Lu(r)?Number(r)<t.length:je(t,r),a=Reflect.set(t,r,n,o);return t===Ge(o)&&(s?ci(n,i)&&qr(t,"set",r,n):qr(t,"add",r,n)),a}deleteProperty(t,r){const n=je(t,r);t[r];const o=Reflect.deleteProperty(t,r);return o&&n&&qr(t,"delete",r,void 0),o}has(t,r){const n=Reflect.has(t,r);return(!il(r)||!dp.has(r))&&Gt(t,"has",r),n}ownKeys(t){return Gt(t,"iterate",Ne(t)?"length":si),Reflect.ownKeys(t)}}class rw extends hp{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const nw=new pp,iw=new rw,ow=new pp(!0),Bu=e=>e,ll=e=>Reflect.getPrototypeOf(e);function Ys(e,t,r=!1,n=!1){e=e.__v_raw;const o=Ge(e),i=Ge(t);r||(ci(t,i)&&Gt(o,"get",t),Gt(o,"get",i));const{has:s}=ll(o),a=n?Bu:r?Wu:as;if(s.call(o,t))return a(e.get(t));if(s.call(o,i))return a(e.get(i));e!==o&&e.get(t)}function Zs(e,t=!1){const r=this.__v_raw,n=Ge(r),o=Ge(e);return t||(ci(e,o)&&Gt(n,"has",e),Gt(n,"has",o)),e===o?r.has(e):r.has(e)||r.has(o)}function Qs(e,t=!1){return e=e.__v_raw,!t&&Gt(Ge(e),"iterate",si),Reflect.get(e,"size",e)}function ed(e){e=Ge(e);const t=Ge(this);return ll(t).has.call(t,e)||(t.add(e),qr(t,"add",e,e)),this}function td(e,t){t=Ge(t);const r=Ge(this),{has:n,get:o}=ll(r);let i=n.call(r,e);i||(e=Ge(e),i=n.call(r,e));const s=o.call(r,e);return r.set(e,t),i?ci(t,s)&&qr(r,"set",e,t):qr(r,"add",e,t),this}function rd(e){const t=Ge(this),{has:r,get:n}=ll(t);let o=r.call(t,e);o||(e=Ge(e),o=r.call(t,e)),n&&n.call(t,e);const i=t.delete(e);return o&&qr(t,"delete",e,void 0),i}function nd(){const e=Ge(this),t=e.size!==0,r=e.clear();return t&&qr(e,"clear",void 0,void 0),r}function Js(e,t){return function(n,o){const i=this,s=i.__v_raw,a=Ge(s),l=t?Bu:e?Wu:as;return!e&&Gt(a,"iterate",si),s.forEach((h,d)=>n.call(o,l(h),l(d),i))}}function Xs(e,t,r){return function(...n){const o=this.__v_raw,i=Ge(o),s=Vi(i),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,h=o[e](...n),d=r?Bu:t?Wu:as;return!t&&Gt(i,"iterate",l?Bc:si),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:a?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function nn(e){return function(...t){return e==="delete"?!1:this}}function sw(){const e={get(i){return Ys(this,i)},get size(){return Qs(this)},has:Zs,add:ed,set:td,delete:rd,clear:nd,forEach:Js(!1,!1)},t={get(i){return Ys(this,i,!1,!0)},get size(){return Qs(this)},has:Zs,add:ed,set:td,delete:rd,clear:nd,forEach:Js(!1,!0)},r={get(i){return Ys(this,i,!0)},get size(){return Qs(this,!0)},has(i){return Zs.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Js(!0,!1)},n={get(i){return Ys(this,i,!0,!0)},get size(){return Qs(this,!0)},has(i){return Zs.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Xs(i,!1,!1),r[i]=Xs(i,!0,!1),t[i]=Xs(i,!1,!0),n[i]=Xs(i,!0,!0)}),[e,r,t,n]}const[aw,lw,cw,uw]=sw();function Du(e,t){const r=t?e?uw:cw:e?lw:aw;return(n,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(je(r,o)&&o in n?r:n,o,i)}const fw={get:Du(!1,!1)},dw={get:Du(!1,!0)},hw={get:Du(!0,!1)},gp=new WeakMap,mp=new WeakMap,wp=new WeakMap,pw=new WeakMap;function gw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mw(e){return e.__v_skip||!Object.isExtensible(e)?0:gw(Dm(e))}function Eo(e){return Zi(e)?e:Uu(e,!1,nw,fw,gp)}function vp(e){return Uu(e,!1,ow,dw,mp)}function Fu(e){return Uu(e,!0,iw,hw,wp)}function Uu(e,t,r,n,o){if(!Xe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=mw(e);if(s===0)return e;const a=new Proxy(e,s===2?n:r);return o.set(e,a),a}function Gi(e){return Zi(e)?Gi(e.__v_raw):!!(e&&e.__v_isReactive)}function Zi(e){return!!(e&&e.__v_isReadonly)}function Ea(e){return!!(e&&e.__v_isShallow)}function bp(e){return Gi(e)||Zi(e)}function Ge(e){const t=e&&e.__v_raw;return t?Ge(t):e}function yp(e){return Aa(e,"__v_skip",!0),e}const as=e=>Xe(e)?Eo(e):e,Wu=e=>Xe(e)?Fu(e):e;function _p(e){An&&wr&&(e=Ge(e),fp(e.dep||(e.dep=Pu())))}function xp(e,t){e=Ge(e);const r=e.dep;r&&Dc(r)}function pt(e){return!!(e&&e.__v_isRef===!0)}function Ye(e){return Ep(e,!1)}function Ap(e){return Ep(e,!0)}function Ep(e,t){return pt(e)?e:new ww(e,t)}class ww{constructor(t,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?t:Ge(t),this._value=r?t:as(t)}get value(){return _p(this),this._value}set value(t){const r=this.__v_isShallow||Ea(t)||Zi(t);t=r?t:Ge(t),ci(t,this._rawValue)&&(this._rawValue=t,this._value=r?t:as(t),xp(this))}}function gt(e){return pt(e)?e.value:e}const vw={get:(e,t,r)=>gt(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return pt(o)&&!pt(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Cp(e){return Gi(e)?e:new Proxy(e,vw)}class bw{constructor(t,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Mu(t,()=>{this._dirty||(this._dirty=!0,xp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const t=Ge(this);return _p(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Tp(e,t,r=!1){let n,o;const i=Be(e);return i?(n=e,o=Vt):(n=e.get,o=e.set),new bw(n,o,i||!o,r)}function yw(e,...t){}function En(e,t,r,n){let o;try{o=n?e(...n):e()}catch(i){cl(i,t,r)}return o}function ur(e,t,r,n){if(Be(e)){const i=En(e,t,r,n);return i&&Xh(i)&&i.catch(s=>{cl(s,t,r)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(ur(e[i],t,r,n));return o}function cl(e,t,r,n=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=r;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](e,s,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){En(l,null,10,[e,s,a]);return}}_w(e,r,o,n)}function _w(e,t,r,n=!0){console.error(e)}let ls=!1,Fc=!1;const Ot=[];let Rr=0;const Ki=[];let Vr=null,Jn=0;const Sp=Promise.resolve();let ju=null;function cs(e){const t=ju||Sp;return e?t.then(this?e.bind(this):e):t}function xw(e){let t=Rr+1,r=Ot.length;for(;t<r;){const n=t+r>>>1,o=Ot[n],i=us(o);i<e||i===e&&o.pre?t=n+1:r=n}return t}function Hu(e){(!Ot.length||!Ot.includes(e,ls&&e.allowRecurse?Rr+1:Rr))&&(e.id==null?Ot.push(e):Ot.splice(xw(e.id),0,e),Ip())}function Ip(){!ls&&!Fc&&(Fc=!0,ju=Sp.then(Rp))}function Aw(e){const t=Ot.indexOf(e);t>Rr&&Ot.splice(t,1)}function Ew(e){Ne(e)?Ki.push(...e):(!Vr||!Vr.includes(e,e.allowRecurse?Jn+1:Jn))&&Ki.push(e),Ip()}function id(e,t=ls?Rr+1:0){for(;t<Ot.length;t++){const r=Ot[t];r&&r.pre&&(Ot.splice(t,1),t--,r())}}function $p(e){if(Ki.length){const t=[...new Set(Ki)];if(Ki.length=0,Vr){Vr.push(...t);return}for(Vr=t,Vr.sort((r,n)=>us(r)-us(n)),Jn=0;Jn<Vr.length;Jn++)Vr[Jn]();Vr=null,Jn=0}}const us=e=>e.id==null?1/0:e.id,Cw=(e,t)=>{const r=us(e)-us(t);if(r===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return r};function Rp(e){Fc=!1,ls=!0,Ot.sort(Cw);const t=Vt;try{for(Rr=0;Rr<Ot.length;Rr++){const r=Ot[Rr];r&&r.active!==!1&&En(r,null,14)}}finally{Rr=0,Ot.length=0,$p(),ls=!1,ju=null,(Ot.length||Ki.length)&&Rp()}}function Tw(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||et;let o=r;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in n){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:p,trim:g}=n[d]||et;g&&(o=r.map(E=>rt(E)?E.trim():E)),p&&(o=r.map(Wm))}let a,l=n[a=Gl(t)]||n[a=Gl(br(t))];!l&&i&&(l=n[a=Gl(_o(t))]),l&&ur(l,e,6,o);const h=n[a+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ur(h,e,6,o)}}function Op(e,t,r=!1){const n=t.emitsCache,o=n.get(e);if(o!==void 0)return o;const i=e.emits;let s={},a=!1;if(!Be(e)){const l=h=>{const d=Op(h,t,!0);d&&(a=!0,wt(s,d))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(Xe(e)&&n.set(e,null),null):(Ne(i)?i.forEach(l=>s[l]=null):wt(s,i),Xe(e)&&n.set(e,s),s)}function ul(e,t){return!e||!nl(t)?!1:(t=t.slice(2).replace(/Once$/,""),je(e,t[0].toLowerCase()+t.slice(1))||je(e,_o(t))||je(e,t))}let Tt=null,Np=null;function Ca(e){const t=Tt;return Tt=e,Np=e&&e.type.__scopeId||null,t}function ti(e,t=Tt,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&wd(-1);const i=Ca(t);let s;try{s=e(...o)}finally{Ca(i),n._d&&wd(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function ql(e){const{type:t,vnode:r,proxy:n,withProxy:o,props:i,propsOptions:[s],slots:a,attrs:l,emit:h,render:d,renderCache:p,data:g,setupState:E,ctx:_,inheritAttrs:I}=e;let P,C;const A=Ca(e);try{if(r.shapeFlag&4){const N=o||n;P=$r(d.call(N,N,p,i,E,g,_)),C=l}else{const N=t;P=$r(N.length>1?N(i,{attrs:l,slots:a,emit:h}):N(i,null)),C=t.props?l:Sw(l)}}catch(N){Zo.length=0,cl(N,e,1),P=He(fr)}let z=P;if(C&&I!==!1){const N=Object.keys(C),{shapeFlag:V}=z;N.length&&V&7&&(s&&N.some(Ou)&&(C=Iw(C,s)),z=$n(z,C))}return r.dirs&&(z=$n(z),z.dirs=z.dirs?z.dirs.concat(r.dirs):r.dirs),r.transition&&(z.transition=r.transition),P=z,Ca(A),P}const Sw=e=>{let t;for(const r in e)(r==="class"||r==="style"||nl(r))&&((t||(t={}))[r]=e[r]);return t},Iw=(e,t)=>{const r={};for(const n in e)(!Ou(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function $w(e,t,r){const{props:n,children:o,component:i}=e,{props:s,children:a,patchFlag:l}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?od(n,s,h):!!s;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(s[g]!==n[g]&&!ul(h,g))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:n===s?!1:n?s?od(n,s,h):!0:!!s;return!1}function od(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(t[i]!==e[i]&&!ul(r,i))return!0}return!1}function Rw({vnode:e,parent:t},r){for(;t&&t.subTree===e;)(e=t.vnode).el=r,t=t.parent}const Lp="components";function bn(e,t){return Nw(Lp,e,!0,t)||e}const Ow=Symbol.for("v-ndc");function Nw(e,t,r=!0,n=!1){const o=Tt||xt;if(o){const i=o.type;if(e===Lp){const a=I2(i,!1);if(a&&(a===t||a===br(t)||a===al(br(t))))return i}const s=sd(o[e]||i[e],t)||sd(o.appContext[e],t);return!s&&n?i:s}}function sd(e,t){return e&&(e[t]||e[br(t)]||e[al(br(t))])}const Lw=e=>e.__isSuspense;function kw(e,t){t&&t.pendingBranch?Ne(e)?t.effects.push(...e):t.effects.push(e):Ew(e)}const ea={};function Lt(e,t,r){return kp(e,t,r)}function kp(e,t,{immediate:r,deep:n,flush:o,onTrack:i,onTrigger:s}=et){var a;const l=sp()===((a=xt)==null?void 0:a.scope)?xt:null;let h,d=!1,p=!1;if(pt(e)?(h=()=>e.value,d=Ea(e)):Gi(e)?(h=()=>e,n=!0):Ne(e)?(p=!0,d=e.some(N=>Gi(N)||Ea(N)),h=()=>e.map(N=>{if(pt(N))return N.value;if(Gi(N))return ri(N);if(Be(N))return En(N,l,2)})):Be(e)?t?h=()=>En(e,l,2):h=()=>{if(!(l&&l.isUnmounted))return g&&g(),ur(e,l,3,[E])}:h=Vt,t&&n){const N=h;h=()=>ri(N())}let g,E=N=>{g=A.onStop=()=>{En(N,l,4)}},_;if(ds)if(E=Vt,t?r&&ur(t,l,3,[h(),p?[]:void 0,E]):h(),o==="sync"){const N=O2();_=N.__watcherHandles||(N.__watcherHandles=[])}else return Vt;let I=p?new Array(e.length).fill(ea):ea;const P=()=>{if(A.active)if(t){const N=A.run();(n||d||(p?N.some((V,q)=>ci(V,I[q])):ci(N,I)))&&(g&&g(),ur(t,l,3,[N,I===ea?void 0:p&&I[0]===ea?[]:I,E]),I=N)}else A.run()};P.allowRecurse=!!t;let C;o==="sync"?C=P:o==="post"?C=()=>zt(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),C=()=>Hu(P));const A=new Mu(h,C);t?r?P():I=A.run():o==="post"?zt(A.run.bind(A),l&&l.suspense):A.run();const z=()=>{A.stop(),l&&l.scope&&Nu(l.scope.effects,A)};return _&&_.push(z),z}function Pw(e,t,r){const n=this.proxy,o=rt(e)?e.includes(".")?Pp(n,e):()=>n[e]:e.bind(n,n);let i;Be(t)?i=t:(i=t.handler,r=t);const s=xt;Qi(this);const a=kp(o,i.bind(n),r);return s?Qi(s):ai(),a}function Pp(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function ri(e,t){if(!Xe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pt(e))ri(e.value,t);else if(Ne(e))for(let r=0;r<e.length;r++)ri(e[r],t);else if(Jh(e)||Vi(e))e.forEach(r=>{ri(r,t)});else if(tp(e))for(const r in e)ri(e[r],t);return e}function Mw(e,t){const r=Tt;if(r===null)return e;const n=pl(r)||r.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,l,h=et]=t[i];s&&(Be(s)&&(s={mounted:s,updated:s}),s.deep&&ri(a),o.push({dir:s,instance:n,value:a,oldValue:void 0,arg:l,modifiers:h}))}return e}function Hn(e,t,r,n){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[n];l&&(xo(),ur(l,r,8,[e.el,a,e,t]),Ao())}}const pn=Symbol("_leaveCb"),ta=Symbol("_enterCb");function Bw(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bi(()=>{e.isMounted=!0}),Bs(()=>{e.isUnmounting=!0}),e}const rr=[Function,Array],Mp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rr,onEnter:rr,onAfterEnter:rr,onEnterCancelled:rr,onBeforeLeave:rr,onLeave:rr,onAfterLeave:rr,onLeaveCancelled:rr,onBeforeAppear:rr,onAppear:rr,onAfterAppear:rr,onAppearCancelled:rr},Dw={name:"BaseTransition",props:Mp,setup(e,{slots:t}){const r=yr(),n=Bw();let o;return()=>{const i=t.default&&Dp(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const I of i)if(I.type!==fr){s=I;break}}const a=Ge(e),{mode:l}=a;if(n.isLeaving)return Yl(s);const h=ad(s);if(!h)return Yl(s);const d=Uc(h,a,n,r);Wc(h,d);const p=r.subTree,g=p&&ad(p);let E=!1;const{getTransitionKey:_}=h.type;if(_){const I=_();o===void 0?o=I:I!==o&&(o=I,E=!0)}if(g&&g.type!==fr&&(!Xn(h,g)||E)){const I=Uc(g,a,n,r);if(Wc(g,I),l==="out-in")return n.isLeaving=!0,I.afterLeave=()=>{n.isLeaving=!1,r.update.active!==!1&&r.update()},Yl(s);l==="in-out"&&h.type!==fr&&(I.delayLeave=(P,C,A)=>{const z=Bp(n,g);z[String(g.key)]=g,P[pn]=()=>{C(),P[pn]=void 0,delete d.delayedLeave},d.delayedLeave=A})}return s}}},Fw=Dw;function Bp(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Uc(e,t,r,n){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:E,onLeaveCancelled:_,onBeforeAppear:I,onAppear:P,onAfterAppear:C,onAppearCancelled:A}=t,z=String(e.key),N=Bp(r,e),V=(y,x)=>{y&&ur(y,n,9,x)},q=(y,x)=>{const S=x[1];V(y,x),Ne(y)?y.every(k=>k.length<=1)&&S():y.length<=1&&S()},Y={mode:i,persisted:s,beforeEnter(y){let x=a;if(!r.isMounted)if(o)x=I||a;else return;y[pn]&&y[pn](!0);const S=N[z];S&&Xn(e,S)&&S.el[pn]&&S.el[pn](),V(x,[y])},enter(y){let x=l,S=h,k=d;if(!r.isMounted)if(o)x=P||l,S=C||h,k=A||d;else return;let $=!1;const W=y[ta]=j=>{$||($=!0,j?V(k,[y]):V(S,[y]),Y.delayedLeave&&Y.delayedLeave(),y[ta]=void 0)};x?q(x,[y,W]):W()},leave(y,x){const S=String(e.key);if(y[ta]&&y[ta](!0),r.isUnmounting)return x();V(p,[y]);let k=!1;const $=y[pn]=W=>{k||(k=!0,x(),W?V(_,[y]):V(E,[y]),y[pn]=void 0,N[S]===e&&delete N[S])};N[S]=e,g?q(g,[y,$]):$()},clone(y){return Uc(y,t,r,n)}};return Y}function Yl(e){if(fl(e))return e=$n(e),e.children=null,e}function ad(e){return fl(e)?e.children?e.children[0]:void 0:e}function Wc(e,t){e.shapeFlag&6&&e.component?Wc(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Dp(e,t=!1,r){let n=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=r==null?s.key:String(r)+String(s.key!=null?s.key:i);s.type===$t?(s.patchFlag&128&&o++,n=n.concat(Dp(s.children,t,a))):(t||s.type!==fr)&&n.push(a!=null?$n(s,{key:a}):s)}if(o>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Ar(e,t){return Be(e)?(()=>wt({name:e.name},t,{setup:e}))():e}const Go=e=>!!e.type.__asyncLoader,fl=e=>e.type.__isKeepAlive;function Uw(e,t){Fp(e,"a",t)}function Ww(e,t){Fp(e,"da",t)}function Fp(e,t,r=xt){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(dl(t,n,r),r){let o=r.parent;for(;o&&o.parent;)fl(o.parent.vnode)&&jw(n,t,r,o),o=o.parent}}function jw(e,t,r,n){const o=dl(t,e,n,!0);zu(()=>{Nu(n[t],o)},r)}function dl(e,t,r=xt,n=!1){if(r){const o=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(r.isUnmounted)return;xo(),Qi(r);const a=ur(t,r,e,s);return ai(),Ao(),a});return n?o.unshift(i):o.push(i),i}}const Xr=e=>(t,r=xt)=>(!ds||e==="sp")&&dl(e,(...n)=>t(...n),r),Up=Xr("bm"),bi=Xr("m"),Hw=Xr("bu"),zw=Xr("u"),Bs=Xr("bum"),zu=Xr("um"),Vw=Xr("sp"),Gw=Xr("rtg"),Kw=Xr("rtc");function qw(e,t=xt){dl("ec",e,t)}function N9(e,t,r,n){let o;const i=r&&r[n];if(Ne(e)||rt(e)){o=new Array(e.length);for(let s=0,a=e.length;s<a;s++)o[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,i&&i[s])}else if(Xe(e))if(e[Symbol.iterator])o=Array.from(e,(s,a)=>t(s,a,void 0,i&&i[a]));else{const s=Object.keys(e);o=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const h=s[a];o[a]=t(e[h],h,a,i&&i[a])}}else o=[];return r&&(r[n]=o),o}function yn(e,t,r={},n,o){if(Tt.isCE||Tt.parent&&Go(Tt.parent)&&Tt.parent.isCE)return t!=="default"&&(r.name=t),He("slot",r,n&&n());let i=e[t];i&&i._c&&(i._d=!1),Rt();const s=i&&Wp(i(r)),a=qu($t,{key:r.key||s&&s.key||`_${t}`},s||(n?n():[]),s&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Wp(e){return e.some(t=>Ia(t)?!(t.type===fr||t.type===$t&&!Wp(t.children)):!0)?e:null}const jc=e=>e?Jp(e)?pl(e)||e.proxy:jc(e.parent):null,Ko=wt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jc(e.parent),$root:e=>jc(e.root),$emit:e=>e.emit,$options:e=>Vu(e),$forceUpdate:e=>e.f||(e.f=()=>Hu(e.update)),$nextTick:e=>e.n||(e.n=cs.bind(e.proxy)),$watch:e=>Pw.bind(e)}),Zl=(e,t)=>e!==et&&!e.__isScriptSetup&&je(e,t),Yw={get({_:e},t){const{ctx:r,setupState:n,data:o,props:i,accessCache:s,type:a,appContext:l}=e;let h;if(t[0]!=="$"){const E=s[t];if(E!==void 0)switch(E){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return i[t]}else{if(Zl(n,t))return s[t]=1,n[t];if(o!==et&&je(o,t))return s[t]=2,o[t];if((h=e.propsOptions[0])&&je(h,t))return s[t]=3,i[t];if(r!==et&&je(r,t))return s[t]=4,r[t];Hc&&(s[t]=0)}}const d=Ko[t];let p,g;if(d)return t==="$attrs"&&Gt(e,"get",t),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(r!==et&&je(r,t))return s[t]=4,r[t];if(g=l.config.globalProperties,je(g,t))return g[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:i}=e;return Zl(o,t)?(o[t]=r,!0):n!==et&&je(n,t)?(n[t]=r,!0):je(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,propsOptions:i}},s){let a;return!!r[s]||e!==et&&je(e,s)||Zl(t,s)||(a=i[0])&&je(a,s)||je(n,s)||je(Ko,s)||je(o.config.globalProperties,s)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:je(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function ld(e){return Ne(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let Hc=!0;function Zw(e){const t=Vu(e),r=e.proxy,n=e.ctx;Hc=!1,t.beforeCreate&&cd(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:E,updated:_,activated:I,deactivated:P,beforeDestroy:C,beforeUnmount:A,destroyed:z,unmounted:N,render:V,renderTracked:q,renderTriggered:Y,errorCaptured:y,serverPrefetch:x,expose:S,inheritAttrs:k,components:$,directives:W,filters:j}=t;if(h&&Qw(h,n,null),s)for(const F in s){const D=s[F];Be(D)&&(n[F]=D.bind(r))}if(o){const F=o.call(r,r);Xe(F)&&(e.data=Eo(F))}if(Hc=!0,i)for(const F in i){const D=i[F],G=Be(D)?D.bind(r,r):Be(D.get)?D.get.bind(r,r):Vt,te=!Be(D)&&Be(D.set)?D.set.bind(r):Vt,re=Ue({get:G,set:te});Object.defineProperty(n,F,{enumerable:!0,configurable:!0,get:()=>re.value,set:fe=>re.value=fe})}if(a)for(const F in a)jp(a[F],n,r,F);if(l){const F=Be(l)?l.call(r):l;Reflect.ownKeys(F).forEach(D=>{qo(D,F[D])})}d&&cd(d,e,"c");function R(F,D){Ne(D)?D.forEach(G=>F(G.bind(r))):D&&F(D.bind(r))}if(R(Up,p),R(bi,g),R(Hw,E),R(zw,_),R(Uw,I),R(Ww,P),R(qw,y),R(Kw,q),R(Gw,Y),R(Bs,A),R(zu,N),R(Vw,x),Ne(S))if(S.length){const F=e.exposed||(e.exposed={});S.forEach(D=>{Object.defineProperty(F,D,{get:()=>r[D],set:G=>r[D]=G})})}else e.exposed||(e.exposed={});V&&e.render===Vt&&(e.render=V),k!=null&&(e.inheritAttrs=k),$&&(e.components=$),W&&(e.directives=W)}function Qw(e,t,r=Vt){Ne(e)&&(e=zc(e));for(const n in e){const o=e[n];let i;Xe(o)?"default"in o?i=Bt(o.from||n,o.default,!0):i=Bt(o.from||n):i=Bt(o),pt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[n]=i}}function cd(e,t,r){ur(Ne(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function jp(e,t,r,n){const o=n.includes(".")?Pp(r,n):()=>r[n];if(rt(e)){const i=t[e];Be(i)&&Lt(o,i)}else if(Be(e))Lt(o,e.bind(r));else if(Xe(e))if(Ne(e))e.forEach(i=>jp(i,t,r,n));else{const i=Be(e.handler)?e.handler.bind(r):t[e.handler];Be(i)&&Lt(o,i,e)}}function Vu(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let l;return a?l=a:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(h=>Ta(l,h,s,!0)),Ta(l,t,s)),Xe(t)&&i.set(t,l),l}function Ta(e,t,r,n=!1){const{mixins:o,extends:i}=t;i&&Ta(e,i,r,!0),o&&o.forEach(s=>Ta(e,s,r,!0));for(const s in t)if(!(n&&s==="expose")){const a=Jw[s]||r&&r[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const Jw={data:ud,props:fd,emits:fd,methods:Ho,computed:Ho,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Ho,directives:Ho,watch:e2,provide:ud,inject:Xw};function ud(e,t){return t?e?function(){return wt(Be(e)?e.call(this,this):e,Be(t)?t.call(this,this):t)}:t:e}function Xw(e,t){return Ho(zc(e),zc(t))}function zc(e){if(Ne(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function Pt(e,t){return e?[...new Set([].concat(e,t))]:t}function Ho(e,t){return e?wt(Object.create(null),e,t):t}function fd(e,t){return e?Ne(e)&&Ne(t)?[...new Set([...e,...t])]:wt(Object.create(null),ld(e),ld(t??{})):t}function e2(e,t){if(!e)return t;if(!t)return e;const r=wt(Object.create(null),e);for(const n in t)r[n]=Pt(e[n],t[n]);return r}function Hp(){return{app:null,config:{isNativeTag:Pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t2=0;function r2(e,t){return function(n,o=null){Be(n)||(n=wt({},n)),o!=null&&!Xe(o)&&(o=null);const i=Hp(),s=new WeakSet;let a=!1;const l=i.app={_uid:t2++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:N2,get config(){return i.config},set config(h){},use(h,...d){return s.has(h)||(h&&Be(h.install)?(s.add(h),h.install(l,...d)):Be(h)&&(s.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!a){const g=He(n,o);return g.appContext=i,d&&t?t(g,h):e(g,h,p),a=!0,l._container=h,h.__vue_app__=l,pl(g.component)||g.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){Sa=l;try{return h()}finally{Sa=null}}};return l}}let Sa=null;function qo(e,t){if(xt){let r=xt.provides;const n=xt.parent&&xt.parent.provides;n===r&&(r=xt.provides=Object.create(n)),r[e]=t}}function Bt(e,t,r=!1){const n=xt||Tt;if(n||Sa){const o=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Sa._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return r&&Be(t)?t.call(n&&n.proxy):t}}function n2(e,t,r,n=!1){const o={},i={};Aa(i,hl,1),e.propsDefaults=Object.create(null),zp(e,t,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);r?e.props=n?o:vp(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function i2(e,t,r,n){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,a=Ge(o),[l]=e.propsOptions;let h=!1;if((n||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ul(e.emitsOptions,g))continue;const E=t[g];if(l)if(je(i,g))E!==i[g]&&(i[g]=E,h=!0);else{const _=br(g);o[_]=Vc(l,a,_,E,e,!1)}else E!==i[g]&&(i[g]=E,h=!0)}}}else{zp(e,t,o,i)&&(h=!0);let d;for(const p in a)(!t||!je(t,p)&&((d=_o(p))===p||!je(t,d)))&&(l?r&&(r[p]!==void 0||r[d]!==void 0)&&(o[p]=Vc(l,a,p,void 0,e,!0)):delete o[p]);if(i!==a)for(const p in i)(!t||!je(t,p))&&(delete i[p],h=!0)}h&&qr(e,"set","$attrs")}function zp(e,t,r,n){const[o,i]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(ga(l))continue;const h=t[l];let d;o&&je(o,d=br(l))?!i||!i.includes(d)?r[d]=h:(a||(a={}))[d]=h:ul(e.emitsOptions,l)||(!(l in n)||h!==n[l])&&(n[l]=h,s=!0)}if(i){const l=Ge(r),h=a||et;for(let d=0;d<i.length;d++){const p=i[d];r[p]=Vc(o,l,p,h[p],e,!je(h,p))}}return s}function Vc(e,t,r,n,o,i){const s=e[r];if(s!=null){const a=je(s,"default");if(a&&n===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&Be(l)){const{propsDefaults:h}=o;r in h?n=h[r]:(Qi(o),n=h[r]=l.call(null,t),ai())}else n=l}s[0]&&(i&&!a?n=!1:s[1]&&(n===""||n===_o(r))&&(n=!0))}return n}function Vp(e,t,r=!1){const n=t.propsCache,o=n.get(e);if(o)return o;const i=e.props,s={},a=[];let l=!1;if(!Be(e)){const d=p=>{l=!0;const[g,E]=Vp(p,t,!0);wt(s,g),E&&a.push(...E)};!r&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Xe(e)&&n.set(e,zi),zi;if(Ne(i))for(let d=0;d<i.length;d++){const p=br(i[d]);dd(p)&&(s[p]=et)}else if(i)for(const d in i){const p=br(d);if(dd(p)){const g=i[d],E=s[p]=Ne(g)||Be(g)?{type:g}:wt({},g);if(E){const _=gd(Boolean,E.type),I=gd(String,E.type);E[0]=_>-1,E[1]=I<0||_<I,(_>-1||je(E,"default"))&&a.push(p)}}}const h=[s,a];return Xe(e)&&n.set(e,h),h}function dd(e){return e[0]!=="$"}function hd(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function pd(e,t){return hd(e)===hd(t)}function gd(e,t){return Ne(t)?t.findIndex(r=>pd(r,e)):Be(t)&&pd(t,e)?0:-1}const Gp=e=>e[0]==="_"||e==="$stable",Gu=e=>Ne(e)?e.map($r):[$r(e)],o2=(e,t,r)=>{if(t._n)return t;const n=ti((...o)=>Gu(t(...o)),r);return n._c=!1,n},Kp=(e,t,r)=>{const n=e._ctx;for(const o in e){if(Gp(o))continue;const i=e[o];if(Be(i))t[o]=o2(o,i,n);else if(i!=null){const s=Gu(i);t[o]=()=>s}}},qp=(e,t)=>{const r=Gu(t);e.slots.default=()=>r},s2=(e,t)=>{if(e.vnode.shapeFlag&32){const r=t._;r?(e.slots=Ge(t),Aa(t,"_",r)):Kp(t,e.slots={})}else e.slots={},t&&qp(e,t);Aa(e.slots,hl,1)},a2=(e,t,r)=>{const{vnode:n,slots:o}=e;let i=!0,s=et;if(n.shapeFlag&32){const a=t._;a?r&&a===1?i=!1:(wt(o,t),!r&&a===1&&delete o._):(i=!t.$stable,Kp(t,o)),s=t}else t&&(qp(e,t),s={default:1});if(i)for(const a in o)!Gp(a)&&s[a]==null&&delete o[a]};function Gc(e,t,r,n,o=!1){if(Ne(e)){e.forEach((g,E)=>Gc(g,t&&(Ne(t)?t[E]:t),r,n,o));return}if(Go(n)&&!o)return;const i=n.shapeFlag&4?pl(n.component)||n.component.proxy:n.el,s=o?null:i,{i:a,r:l}=e,h=t&&t.r,d=a.refs===et?a.refs={}:a.refs,p=a.setupState;if(h!=null&&h!==l&&(rt(h)?(d[h]=null,je(p,h)&&(p[h]=null)):pt(h)&&(h.value=null)),Be(l))En(l,a,12,[s,d]);else{const g=rt(l),E=pt(l);if(g||E){const _=()=>{if(e.f){const I=g?je(p,l)?p[l]:d[l]:l.value;o?Ne(I)&&Nu(I,i):Ne(I)?I.includes(i)||I.push(i):g?(d[l]=[i],je(p,l)&&(p[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=s,je(p,l)&&(p[l]=s)):E&&(l.value=s,e.k&&(d[e.k]=s))};s?(_.id=-1,zt(_,r)):_()}}}const zt=kw;function l2(e){return c2(e)}function c2(e,t){const r=kc();r.__VUE__=!0;const{insert:n,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:E=Vt,insertStaticContent:_}=e,I=(M,w,v,L=null,K=null,Q=null,ne=!1,ae=null,le=!!w.dynamicChildren)=>{if(M===w)return;M&&!Xn(M,w)&&(L=J(M),fe(M,K,Q,!0),M=null),w.patchFlag===-2&&(le=!1,w.dynamicChildren=null);const{type:ie,ref:ye,shapeFlag:pe}=w;switch(ie){case Ds:P(M,w,v,L);break;case fr:C(M,w,v,L);break;case ma:M==null&&A(w,v,L,ne);break;case $t:$(M,w,v,L,K,Q,ne,ae,le);break;default:pe&1?V(M,w,v,L,K,Q,ne,ae,le):pe&6?W(M,w,v,L,K,Q,ne,ae,le):(pe&64||pe&128)&&ie.process(M,w,v,L,K,Q,ne,ae,le,oe)}ye!=null&&K&&Gc(ye,M&&M.ref,Q,w||M,!w)},P=(M,w,v,L)=>{if(M==null)n(w.el=a(w.children),v,L);else{const K=w.el=M.el;w.children!==M.children&&h(K,w.children)}},C=(M,w,v,L)=>{M==null?n(w.el=l(w.children||""),v,L):w.el=M.el},A=(M,w,v,L)=>{[M.el,M.anchor]=_(M.children,w,v,L,M.el,M.anchor)},z=({el:M,anchor:w},v,L)=>{let K;for(;M&&M!==w;)K=g(M),n(M,v,L),M=K;n(w,v,L)},N=({el:M,anchor:w})=>{let v;for(;M&&M!==w;)v=g(M),o(M),M=v;o(w)},V=(M,w,v,L,K,Q,ne,ae,le)=>{ne=ne||w.type==="svg",M==null?q(w,v,L,K,Q,ne,ae,le):x(M,w,K,Q,ne,ae,le)},q=(M,w,v,L,K,Q,ne,ae)=>{let le,ie;const{type:ye,props:pe,shapeFlag:H,transition:X,dirs:m}=M;if(le=M.el=s(M.type,Q,pe&&pe.is,pe),H&8?d(le,M.children):H&16&&y(M.children,le,null,L,K,Q&&ye!=="foreignObject",ne,ae),m&&Hn(M,null,L,"created"),Y(le,M,M.scopeId,ne,L),pe){for(const c in pe)c!=="value"&&!ga(c)&&i(le,c,null,pe[c],Q,M.children,L,K,Ee);"value"in pe&&i(le,"value",null,pe.value),(ie=pe.onVnodeBeforeMount)&&Cr(ie,L,M)}m&&Hn(M,null,L,"beforeMount");const f=u2(K,X);f&&X.beforeEnter(le),n(le,w,v),((ie=pe&&pe.onVnodeMounted)||f||m)&&zt(()=>{ie&&Cr(ie,L,M),f&&X.enter(le),m&&Hn(M,null,L,"mounted")},K)},Y=(M,w,v,L,K)=>{if(v&&E(M,v),L)for(let Q=0;Q<L.length;Q++)E(M,L[Q]);if(K){let Q=K.subTree;if(w===Q){const ne=K.vnode;Y(M,ne,ne.scopeId,ne.slotScopeIds,K.parent)}}},y=(M,w,v,L,K,Q,ne,ae,le=0)=>{for(let ie=le;ie<M.length;ie++){const ye=M[ie]=ae?gn(M[ie]):$r(M[ie]);I(null,ye,w,v,L,K,Q,ne,ae)}},x=(M,w,v,L,K,Q,ne)=>{const ae=w.el=M.el;let{patchFlag:le,dynamicChildren:ie,dirs:ye}=w;le|=M.patchFlag&16;const pe=M.props||et,H=w.props||et;let X;v&&zn(v,!1),(X=H.onVnodeBeforeUpdate)&&Cr(X,v,w,M),ye&&Hn(w,M,v,"beforeUpdate"),v&&zn(v,!0);const m=K&&w.type!=="foreignObject";if(ie?S(M.dynamicChildren,ie,ae,v,L,m,Q):ne||D(M,w,ae,null,v,L,m,Q,!1),le>0){if(le&16)k(ae,w,pe,H,v,L,K);else if(le&2&&pe.class!==H.class&&i(ae,"class",null,H.class,K),le&4&&i(ae,"style",pe.style,H.style,K),le&8){const f=w.dynamicProps;for(let c=0;c<f.length;c++){const u=f[c],b=pe[u],T=H[u];(T!==b||u==="value")&&i(ae,u,b,T,K,M.children,v,L,Ee)}}le&1&&M.children!==w.children&&d(ae,w.children)}else!ne&&ie==null&&k(ae,w,pe,H,v,L,K);((X=H.onVnodeUpdated)||ye)&&zt(()=>{X&&Cr(X,v,w,M),ye&&Hn(w,M,v,"updated")},L)},S=(M,w,v,L,K,Q,ne)=>{for(let ae=0;ae<w.length;ae++){const le=M[ae],ie=w[ae],ye=le.el&&(le.type===$t||!Xn(le,ie)||le.shapeFlag&70)?p(le.el):v;I(le,ie,ye,null,L,K,Q,ne,!0)}},k=(M,w,v,L,K,Q,ne)=>{if(v!==L){if(v!==et)for(const ae in v)!ga(ae)&&!(ae in L)&&i(M,ae,v[ae],null,ne,w.children,K,Q,Ee);for(const ae in L){if(ga(ae))continue;const le=L[ae],ie=v[ae];le!==ie&&ae!=="value"&&i(M,ae,ie,le,ne,w.children,K,Q,Ee)}"value"in L&&i(M,"value",v.value,L.value)}},$=(M,w,v,L,K,Q,ne,ae,le)=>{const ie=w.el=M?M.el:a(""),ye=w.anchor=M?M.anchor:a("");let{patchFlag:pe,dynamicChildren:H,slotScopeIds:X}=w;X&&(ae=ae?ae.concat(X):X),M==null?(n(ie,v,L),n(ye,v,L),y(w.children,v,ye,K,Q,ne,ae,le)):pe>0&&pe&64&&H&&M.dynamicChildren?(S(M.dynamicChildren,H,v,K,Q,ne,ae),(w.key!=null||K&&w===K.subTree)&&Ku(M,w,!0)):D(M,w,v,ye,K,Q,ne,ae,le)},W=(M,w,v,L,K,Q,ne,ae,le)=>{w.slotScopeIds=ae,M==null?w.shapeFlag&512?K.ctx.activate(w,v,L,ne,le):j(w,v,L,K,Q,ne,le):O(M,w,le)},j=(M,w,v,L,K,Q,ne)=>{const ae=M.component=A2(M,L,K);if(fl(M)&&(ae.ctx.renderer=oe),E2(ae),ae.asyncDep){if(K&&K.registerDep(ae,R),!M.el){const le=ae.subTree=He(fr);C(null,le,w,v)}return}R(ae,M,w,v,K,Q,ne)},O=(M,w,v)=>{const L=w.component=M.component;if($w(M,w,v))if(L.asyncDep&&!L.asyncResolved){F(L,w,v);return}else L.next=w,Aw(L.update),L.update();else w.el=M.el,L.vnode=w},R=(M,w,v,L,K,Q,ne)=>{const ae=()=>{if(M.isMounted){let{next:ye,bu:pe,u:H,parent:X,vnode:m}=M,f=ye,c;zn(M,!1),ye?(ye.el=m.el,F(M,ye,ne)):ye=m,pe&&Kl(pe),(c=ye.props&&ye.props.onVnodeBeforeUpdate)&&Cr(c,X,ye,m),zn(M,!0);const u=ql(M),b=M.subTree;M.subTree=u,I(b,u,p(b.el),J(b),M,K,Q),ye.el=u.el,f===null&&Rw(M,u.el),H&&zt(H,K),(c=ye.props&&ye.props.onVnodeUpdated)&&zt(()=>Cr(c,X,ye,m),K)}else{let ye;const{el:pe,props:H}=w,{bm:X,m,parent:f}=M,c=Go(w);if(zn(M,!1),X&&Kl(X),!c&&(ye=H&&H.onVnodeBeforeMount)&&Cr(ye,f,w),zn(M,!0),pe&&Ce){const u=()=>{M.subTree=ql(M),Ce(pe,M.subTree,M,K,null)};c?w.type.__asyncLoader().then(()=>!M.isUnmounted&&u()):u()}else{const u=M.subTree=ql(M);I(null,u,v,L,M,K,Q),w.el=u.el}if(m&&zt(m,K),!c&&(ye=H&&H.onVnodeMounted)){const u=w;zt(()=>Cr(ye,f,u),K)}(w.shapeFlag&256||f&&Go(f.vnode)&&f.vnode.shapeFlag&256)&&M.a&&zt(M.a,K),M.isMounted=!0,w=v=L=null}},le=M.effect=new Mu(ae,()=>Hu(ie),M.scope),ie=M.update=()=>le.run();ie.id=M.uid,zn(M,!0),ie()},F=(M,w,v)=>{w.component=M;const L=M.vnode.props;M.vnode=w,M.next=null,i2(M,w.props,L,v),a2(M,w.children,v),xo(),id(),Ao()},D=(M,w,v,L,K,Q,ne,ae,le=!1)=>{const ie=M&&M.children,ye=M?M.shapeFlag:0,pe=w.children,{patchFlag:H,shapeFlag:X}=w;if(H>0){if(H&128){te(ie,pe,v,L,K,Q,ne,ae,le);return}else if(H&256){G(ie,pe,v,L,K,Q,ne,ae,le);return}}X&8?(ye&16&&Ee(ie,K,Q),pe!==ie&&d(v,pe)):ye&16?X&16?te(ie,pe,v,L,K,Q,ne,ae,le):Ee(ie,K,Q,!0):(ye&8&&d(v,""),X&16&&y(pe,v,L,K,Q,ne,ae,le))},G=(M,w,v,L,K,Q,ne,ae,le)=>{M=M||zi,w=w||zi;const ie=M.length,ye=w.length,pe=Math.min(ie,ye);let H;for(H=0;H<pe;H++){const X=w[H]=le?gn(w[H]):$r(w[H]);I(M[H],X,v,null,K,Q,ne,ae,le)}ie>ye?Ee(M,K,Q,!0,!1,pe):y(w,v,L,K,Q,ne,ae,le,pe)},te=(M,w,v,L,K,Q,ne,ae,le)=>{let ie=0;const ye=w.length;let pe=M.length-1,H=ye-1;for(;ie<=pe&&ie<=H;){const X=M[ie],m=w[ie]=le?gn(w[ie]):$r(w[ie]);if(Xn(X,m))I(X,m,v,null,K,Q,ne,ae,le);else break;ie++}for(;ie<=pe&&ie<=H;){const X=M[pe],m=w[H]=le?gn(w[H]):$r(w[H]);if(Xn(X,m))I(X,m,v,null,K,Q,ne,ae,le);else break;pe--,H--}if(ie>pe){if(ie<=H){const X=H+1,m=X<ye?w[X].el:L;for(;ie<=H;)I(null,w[ie]=le?gn(w[ie]):$r(w[ie]),v,m,K,Q,ne,ae,le),ie++}}else if(ie>H)for(;ie<=pe;)fe(M[ie],K,Q,!0),ie++;else{const X=ie,m=ie,f=new Map;for(ie=m;ie<=H;ie++){const ge=w[ie]=le?gn(w[ie]):$r(w[ie]);ge.key!=null&&f.set(ge.key,ie)}let c,u=0;const b=H-m+1;let T=!1,B=0;const U=new Array(b);for(ie=0;ie<b;ie++)U[ie]=0;for(ie=X;ie<=pe;ie++){const ge=M[ie];if(u>=b){fe(ge,K,Q,!0);continue}let ve;if(ge.key!=null)ve=f.get(ge.key);else for(c=m;c<=H;c++)if(U[c-m]===0&&Xn(ge,w[c])){ve=c;break}ve===void 0?fe(ge,K,Q,!0):(U[ve-m]=ie+1,ve>=B?B=ve:T=!0,I(ge,w[ve],v,null,K,Q,ne,ae,le),u++)}const ee=T?f2(U):zi;for(c=ee.length-1,ie=b-1;ie>=0;ie--){const ge=m+ie,ve=w[ge],_e=ge+1<ye?w[ge+1].el:L;U[ie]===0?I(null,ve,v,_e,K,Q,ne,ae,le):T&&(c<0||ie!==ee[c]?re(ve,v,_e,2):c--)}}},re=(M,w,v,L,K=null)=>{const{el:Q,type:ne,transition:ae,children:le,shapeFlag:ie}=M;if(ie&6){re(M.component.subTree,w,v,L);return}if(ie&128){M.suspense.move(w,v,L);return}if(ie&64){ne.move(M,w,v,oe);return}if(ne===$t){n(Q,w,v);for(let pe=0;pe<le.length;pe++)re(le[pe],w,v,L);n(M.anchor,w,v);return}if(ne===ma){z(M,w,v);return}if(L!==2&&ie&1&&ae)if(L===0)ae.beforeEnter(Q),n(Q,w,v),zt(()=>ae.enter(Q),K);else{const{leave:pe,delayLeave:H,afterLeave:X}=ae,m=()=>n(Q,w,v),f=()=>{pe(Q,()=>{m(),X&&X()})};H?H(Q,m,f):f()}else n(Q,w,v)},fe=(M,w,v,L=!1,K=!1)=>{const{type:Q,props:ne,ref:ae,children:le,dynamicChildren:ie,shapeFlag:ye,patchFlag:pe,dirs:H}=M;if(ae!=null&&Gc(ae,null,v,M,!0),ye&256){w.ctx.deactivate(M);return}const X=ye&1&&H,m=!Go(M);let f;if(m&&(f=ne&&ne.onVnodeBeforeUnmount)&&Cr(f,w,M),ye&6)Ae(M.component,v,L);else{if(ye&128){M.suspense.unmount(v,L);return}X&&Hn(M,null,w,"beforeUnmount"),ye&64?M.type.remove(M,w,v,K,oe,L):ie&&(Q!==$t||pe>0&&pe&64)?Ee(ie,w,v,!1,!0):(Q===$t&&pe&384||!K&&ye&16)&&Ee(le,w,v),L&&xe(M)}(m&&(f=ne&&ne.onVnodeUnmounted)||X)&&zt(()=>{f&&Cr(f,w,M),X&&Hn(M,null,w,"unmounted")},v)},xe=M=>{const{type:w,el:v,anchor:L,transition:K}=M;if(w===$t){Te(v,L);return}if(w===ma){N(M);return}const Q=()=>{o(v),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(M.shapeFlag&1&&K&&!K.persisted){const{leave:ne,delayLeave:ae}=K,le=()=>ne(v,Q);ae?ae(M.el,Q,le):le()}else Q()},Te=(M,w)=>{let v;for(;M!==w;)v=g(M),o(M),M=v;o(w)},Ae=(M,w,v)=>{const{bum:L,scope:K,update:Q,subTree:ne,um:ae}=M;L&&Kl(L),K.stop(),Q&&(Q.active=!1,fe(ne,M,w,v)),ae&&zt(ae,w),zt(()=>{M.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ee=(M,w,v,L=!1,K=!1,Q=0)=>{for(let ne=Q;ne<M.length;ne++)fe(M[ne],w,v,L,K)},J=M=>M.shapeFlag&6?J(M.component.subTree):M.shapeFlag&128?M.suspense.next():g(M.anchor||M.el),ue=(M,w,v)=>{M==null?w._vnode&&fe(w._vnode,null,null,!0):I(w._vnode||null,M,w,null,null,null,v),id(),$p(),w._vnode=M},oe={p:I,um:fe,m:re,r:xe,mt:j,mc:y,pc:D,pbc:S,n:J,o:e};let de,Ce;return t&&([de,Ce]=t(oe)),{render:ue,hydrate:de,createApp:r2(ue,de)}}function zn({effect:e,update:t},r){e.allowRecurse=t.allowRecurse=r}function u2(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ku(e,t,r=!1){const n=e.children,o=t.children;if(Ne(n)&&Ne(o))for(let i=0;i<n.length;i++){const s=n[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=gn(o[i]),a.el=s.el),r||Ku(s,a)),a.type===Ds&&(a.el=s.el)}}function f2(e){const t=e.slice(),r=[0];let n,o,i,s,a;const l=e.length;for(n=0;n<l;n++){const h=e[n];if(h!==0){if(o=r[r.length-1],e[o]<h){t[n]=o,r.push(n);continue}for(i=0,s=r.length-1;i<s;)a=i+s>>1,e[r[a]]<h?i=a+1:s=a;h<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=t[s];return r}const d2=e=>e.__isTeleport,Yo=e=>e&&(e.disabled||e.disabled===""),md=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Kc=(e,t)=>{const r=e&&e.to;return rt(r)?t?t(r):null:r},h2={__isTeleport:!0,process(e,t,r,n,o,i,s,a,l,h){const{mc:d,pc:p,pbc:g,o:{insert:E,querySelector:_,createText:I,createComment:P}}=h,C=Yo(t.props);let{shapeFlag:A,children:z,dynamicChildren:N}=t;if(e==null){const V=t.el=I(""),q=t.anchor=I("");E(V,r,n),E(q,r,n);const Y=t.target=Kc(t.props,_),y=t.targetAnchor=I("");Y&&(E(y,Y),s=s||md(Y));const x=(S,k)=>{A&16&&d(z,S,k,o,i,s,a,l)};C?x(r,q):Y&&x(Y,y)}else{t.el=e.el;const V=t.anchor=e.anchor,q=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,y=Yo(e.props),x=y?r:q,S=y?V:Y;if(s=s||md(q),N?(g(e.dynamicChildren,N,x,o,i,s,a),Ku(e,t,!0)):l||p(e,t,x,S,o,i,s,a,!1),C)y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ra(t,r,V,h,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const k=t.target=Kc(t.props,_);k&&ra(t,k,null,h,0)}else y&&ra(t,q,Y,h,1)}Yp(t)},remove(e,t,r,n,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:l,anchor:h,targetAnchor:d,target:p,props:g}=e;if(p&&i(d),s&&i(h),a&16){const E=s||!Yo(g);for(let _=0;_<l.length;_++){const I=l[_];o(I,t,r,E,!!I.dynamicChildren)}}},move:ra,hydrate:p2};function ra(e,t,r,{o:{insert:n},m:o},i=2){i===0&&n(e.targetAnchor,t,r);const{el:s,anchor:a,shapeFlag:l,children:h,props:d}=e,p=i===2;if(p&&n(s,t,r),(!p||Yo(d))&&l&16)for(let g=0;g<h.length;g++)o(h[g],t,r,2);p&&n(a,t,r)}function p2(e,t,r,n,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l}},h){const d=t.target=Kc(t.props,l);if(d){const p=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Yo(t.props))t.anchor=h(s(e),t,a(e),r,n,o,i),t.targetAnchor=p;else{t.anchor=s(e);let g=p;for(;g;)if(g=s(g),g&&g.nodeType===8&&g.data==="teleport anchor"){t.targetAnchor=g,d._lpa=t.targetAnchor&&s(t.targetAnchor);break}h(p,t,d,r,n,o,i)}Yp(t)}return t.anchor&&s(t.anchor)}const g2=h2;function Yp(e){const t=e.ctx;if(t&&t.ut){let r=e.children[0].el;for(;r&&r!==e.targetAnchor;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}const $t=Symbol.for("v-fgt"),Ds=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),ma=Symbol.for("v-stc"),Zo=[];let vr=null;function Rt(e=!1){Zo.push(vr=e?null:[])}function m2(){Zo.pop(),vr=Zo[Zo.length-1]||null}let fs=1;function wd(e){fs+=e}function Zp(e){return e.dynamicChildren=fs>0?vr||zi:null,m2(),fs>0&&vr&&vr.push(e),e}function Xt(e,t,r,n,o,i){return Zp(he(e,t,r,n,o,i,!0))}function qu(e,t,r,n,o){return Zp(He(e,t,r,n,o,!0))}function Ia(e){return e?e.__v_isVNode===!0:!1}function Xn(e,t){return e.type===t.type&&e.key===t.key}const hl="__vInternal",Qp=({key:e})=>e??null,wa=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?rt(e)||pt(e)||Be(e)?{i:Tt,r:e,k:t,f:!!r}:e:null);function he(e,t=null,r=null,n=0,o=null,i=e===$t?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qp(t),ref:t&&wa(t),scopeId:Np,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Yu(l,r),i&128&&e.normalize(l)):r&&(l.shapeFlag|=rt(r)?8:16),fs>0&&!s&&vr&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vr.push(l),l}const He=w2;function w2(e,t=null,r=null,n=0,o=null,i=!1){if((!e||e===Ow)&&(e=fr),Ia(e)){const a=$n(e,t,!0);return r&&Yu(a,r),fs>0&&!i&&vr&&(a.shapeFlag&6?vr[vr.indexOf(e)]=a:vr.push(a)),a.patchFlag|=-2,a}if($2(e)&&(e=e.__vccOpts),t){t=v2(t);let{class:a,style:l}=t;a&&!rt(a)&&(t.class=ft(a)),Xe(l)&&(bp(l)&&!Ne(l)&&(l=wt({},l)),t.style=ku(l))}const s=rt(e)?1:Lw(e)?128:d2(e)?64:Xe(e)?4:Be(e)?2:0;return he(e,t,r,n,o,s,i,!0)}function v2(e){return e?bp(e)||hl in e?wt({},e):e:null}function $n(e,t,r=!1){const{props:n,ref:o,patchFlag:i,children:s}=e,a=t?Zu(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Qp(a),ref:t&&t.ref?r&&o?Ne(o)?o.concat(wa(t)):[o,wa(t)]:wa(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$t?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$n(e.ssContent),ssFallback:e.ssFallback&&$n(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function b2(e=" ",t=0){return He(Ds,null,e,t)}function y2(e,t){const r=He(ma,null,e);return r.staticCount=t,r}function Ri(e="",t=!1){return t?(Rt(),qu(fr,null,e)):He(fr,null,e)}function $r(e){return e==null||typeof e=="boolean"?He(fr):Ne(e)?He($t,null,e.slice()):typeof e=="object"?gn(e):He(Ds,null,String(e))}function gn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$n(e)}function Yu(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(Ne(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),Yu(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!(hl in t)?t._ctx=Tt:o===3&&Tt&&(Tt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Be(t)?(t={default:t,_ctx:Tt},r=32):(t=String(t),n&64?(r=16,t=[b2(t)]):r=8);e.children=t,e.shapeFlag|=r}function Zu(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=ft([t.class,n.class]));else if(o==="style")t.style=ku([t.style,n.style]);else if(nl(o)){const i=t[o],s=n[o];s&&i!==s&&!(Ne(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=n[o])}return t}function Cr(e,t,r,n=null){ur(e,t,7,[r,n])}const _2=Hp();let x2=0;function A2(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||_2,i={uid:x2++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(n,o),emitsOptions:Op(n,o),emit:null,emitted:null,propsDefaults:et,inheritAttrs:n.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Tw.bind(null,i),e.ce&&e.ce(i),i}let xt=null;const yr=()=>xt||Tt;let Qu,Oi,vd="__VUE_INSTANCE_SETTERS__";(Oi=kc()[vd])||(Oi=kc()[vd]=[]),Oi.push(e=>xt=e),Qu=e=>{Oi.length>1?Oi.forEach(t=>t(e)):Oi[0](e)};const Qi=e=>{Qu(e),e.scope.on()},ai=()=>{xt&&xt.scope.off(),Qu(null)};function Jp(e){return e.vnode.shapeFlag&4}let ds=!1;function E2(e,t=!1){ds=t;const{props:r,children:n}=e.vnode,o=Jp(e);n2(e,r,o,t),s2(e,n);const i=o?C2(e,t):void 0;return ds=!1,i}function C2(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=yp(new Proxy(e.ctx,Yw));const{setup:n}=r;if(n){const o=e.setupContext=n.length>1?S2(e):null;Qi(e),xo();const i=En(n,e,0,[e.props,o]);if(Ao(),ai(),Xh(i)){if(i.then(ai,ai),t)return i.then(s=>{bd(e,s,t)}).catch(s=>{cl(s,e,0)});e.asyncDep=i}else bd(e,i,t)}else Xp(e,t)}function bd(e,t,r){Be(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Xe(t)&&(e.setupState=Cp(t)),Xp(e,r)}let yd;function Xp(e,t,r){const n=e.type;if(!e.render){if(!t&&yd&&!n.render){const o=n.template||Vu(e).template;if(o){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,h=wt(wt({isCustomElement:i,delimiters:a},s),l);n.render=yd(o,h)}}e.render=n.render||Vt}{Qi(e),xo();try{Zw(e)}finally{Ao(),ai()}}}function T2(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,r){return Gt(e,"get","$attrs"),t[r]}}))}function S2(e){const t=r=>{e.exposed=r||{}};return{get attrs(){return T2(e)},slots:e.slots,emit:e.emit,expose:t}}function pl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Cp(yp(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Ko)return Ko[r](e)},has(t,r){return r in t||r in Ko}}))}function I2(e,t=!0){return Be(e)?e.displayName||e.name:e.name||t&&e.__name}function $2(e){return Be(e)&&"__vccOpts"in e}const Ue=(e,t)=>Tp(e,t,ds);function Co(e,t,r){const n=arguments.length;return n===2?Xe(t)&&!Ne(t)?Ia(t)?He(e,null,[t]):He(e,t):He(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Ia(r)&&(r=[r]),He(e,t,r))}const R2=Symbol.for("v-scx"),O2=()=>Bt(R2),N2="3.3.8",L2="http://www.w3.org/2000/svg",ei=typeof document<"u"?document:null,_d=ei&&ei.createElement("template"),k2={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t?ei.createElementNS(L2,e):ei.createElement(e,r?{is:r}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>ei.createTextNode(e),createComment:e=>ei.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ei.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,i){const s=r?r.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{_d.innerHTML=n?`<svg>${e}</svg>`:e;const a=_d.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[s?s.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},on="transition",Lo="animation",hs=Symbol("_vtc"),Ju=(e,{slots:t})=>Co(Fw,P2(e),t);Ju.displayName="Transition";const e1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ju.props=wt({},Mp,e1);const Vn=(e,t=[])=>{Ne(e)?e.forEach(r=>r(...t)):e&&e(...t)},xd=e=>e?Ne(e)?e.some(t=>t.length>1):e.length>1:!1;function P2(e){const t={};for(const $ in e)$ in e1||(t[$]=e[$]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:i=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:a=`${r}-enter-to`,appearFromClass:l=i,appearActiveClass:h=s,appearToClass:d=a,leaveFromClass:p=`${r}-leave-from`,leaveActiveClass:g=`${r}-leave-active`,leaveToClass:E=`${r}-leave-to`}=e,_=M2(o),I=_&&_[0],P=_&&_[1],{onBeforeEnter:C,onEnter:A,onEnterCancelled:z,onLeave:N,onLeaveCancelled:V,onBeforeAppear:q=C,onAppear:Y=A,onAppearCancelled:y=z}=t,x=($,W,j)=>{Gn($,W?d:a),Gn($,W?h:s),j&&j()},S=($,W)=>{$._isLeaving=!1,Gn($,p),Gn($,E),Gn($,g),W&&W()},k=$=>(W,j)=>{const O=$?Y:A,R=()=>x(W,$,j);Vn(O,[W,R]),Ad(()=>{Gn(W,$?l:i),sn(W,$?d:a),xd(O)||Ed(W,n,I,R)})};return wt(t,{onBeforeEnter($){Vn(C,[$]),sn($,i),sn($,s)},onBeforeAppear($){Vn(q,[$]),sn($,l),sn($,h)},onEnter:k(!1),onAppear:k(!0),onLeave($,W){$._isLeaving=!0;const j=()=>S($,W);sn($,p),F2(),sn($,g),Ad(()=>{$._isLeaving&&(Gn($,p),sn($,E),xd(N)||Ed($,n,P,j))}),Vn(N,[$,j])},onEnterCancelled($){x($,!1),Vn(z,[$])},onAppearCancelled($){x($,!0),Vn(y,[$])},onLeaveCancelled($){S($),Vn(V,[$])}})}function M2(e){if(e==null)return null;if(Xe(e))return[Ql(e.enter),Ql(e.leave)];{const t=Ql(e);return[t,t]}}function Ql(e){return jm(e)}function sn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[hs]||(e[hs]=new Set)).add(t)}function Gn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[hs];r&&(r.delete(t),r.size||(e[hs]=void 0))}function Ad(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let B2=0;function Ed(e,t,r,n){const o=e._endId=++B2,i=()=>{o===e._endId&&n()};if(r)return setTimeout(i,r);const{type:s,timeout:a,propCount:l}=D2(e,t);if(!s)return n();const h=s+"end";let d=0;const p=()=>{e.removeEventListener(h,g),i()},g=E=>{E.target===e&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},a+1),e.addEventListener(h,g)}function D2(e,t){const r=window.getComputedStyle(e),n=_=>(r[_]||"").split(", "),o=n(`${on}Delay`),i=n(`${on}Duration`),s=Cd(o,i),a=n(`${Lo}Delay`),l=n(`${Lo}Duration`),h=Cd(a,l);let d=null,p=0,g=0;t===on?s>0&&(d=on,p=s,g=i.length):t===Lo?h>0&&(d=Lo,p=h,g=l.length):(p=Math.max(s,h),d=p>0?s>h?on:Lo:null,g=d?d===on?i.length:l.length:0);const E=d===on&&/\b(transform|all)(,|$)/.test(n(`${on}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:E}}function Cd(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Td(r)+Td(e[n])))}function Td(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function F2(){return document.body.offsetHeight}function U2(e,t,r){const n=e[hs];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Xu=Symbol("_vod"),W2={beforeMount(e,{value:t},{transition:r}){e[Xu]=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):ko(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:n}){!t!=!r&&(n?t?(n.beforeEnter(e),ko(e,!0),n.enter(e)):n.leave(e,()=>{ko(e,!1)}):ko(e,t))},beforeUnmount(e,{value:t}){ko(e,t)}};function ko(e,t){e.style.display=t?e[Xu]:"none"}function j2(e,t,r){const n=e.style,o=rt(r);if(r&&!o){if(t&&!rt(t))for(const i in t)r[i]==null&&qc(n,i,"");for(const i in r)qc(n,i,r[i])}else{const i=n.display;o?t!==r&&(n.cssText=r):t&&e.removeAttribute("style"),Xu in e&&(n.display=i)}}const Sd=/\s*!important$/;function qc(e,t,r){if(Ne(r))r.forEach(n=>qc(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=H2(e,t);Sd.test(r)?e.setProperty(_o(n),r.replace(Sd,""),"important"):e[n]=r}}const Id=["Webkit","Moz","ms"],Jl={};function H2(e,t){const r=Jl[t];if(r)return r;let n=br(t);if(n!=="filter"&&n in e)return Jl[t]=n;n=al(n);for(let o=0;o<Id.length;o++){const i=Id[o]+n;if(i in e)return Jl[t]=i}return t}const $d="http://www.w3.org/1999/xlink";function z2(e,t,r,n,o){if(n&&t.startsWith("xlink:"))r==null?e.removeAttributeNS($d,t.slice(6,t.length)):e.setAttributeNS($d,t,r);else{const i=qm(t);r==null||i&&!rp(r)?e.removeAttribute(t):e.setAttribute(t,i?"":r)}}function V2(e,t,r,n,o,i,s){if(t==="innerHTML"||t==="textContent"){n&&s(n,o,i),e[t]=r??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=r;const h=a==="OPTION"?e.getAttribute("value"):e.value,d=r??"";h!==d&&(e.value=d),r==null&&e.removeAttribute(t);return}let l=!1;if(r===""||r==null){const h=typeof e[t];h==="boolean"?r=rp(r):r==null&&h==="string"?(r="",l=!0):h==="number"&&(r=0,l=!0)}try{e[t]=r}catch{}l&&e.removeAttribute(t)}function G2(e,t,r,n){e.addEventListener(t,r,n)}function K2(e,t,r,n){e.removeEventListener(t,r,n)}const Rd=Symbol("_vei");function q2(e,t,r,n,o=null){const i=e[Rd]||(e[Rd]={}),s=i[t];if(n&&s)s.value=n;else{const[a,l]=Y2(t);if(n){const h=i[t]=J2(n,o);G2(e,a,h,l)}else s&&(K2(e,a,s,l),i[t]=void 0)}}const Od=/(?:Once|Passive|Capture)$/;function Y2(e){let t;if(Od.test(e)){t={};let n;for(;n=e.match(Od);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_o(e.slice(2)),t]}let Xl=0;const Z2=Promise.resolve(),Q2=()=>Xl||(Z2.then(()=>Xl=0),Xl=Date.now());function J2(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;ur(X2(n,r.value),t,5,[n])};return r.value=e,r.attached=Q2(),r}function X2(e,t){if(Ne(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const Nd=/^on[a-z]/,ev=(e,t,r,n,o=!1,i,s,a,l)=>{t==="class"?U2(e,n,o):t==="style"?j2(e,r,n):nl(t)?Ou(t)||q2(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tv(e,t,n,o))?V2(e,t,n,i,s,a,l):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),z2(e,t,n,o))};function tv(e,t,r,n){return n?!!(t==="innerHTML"||t==="textContent"||t in e&&Nd.test(t)&&Be(r)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Nd.test(t)&&rt(r)?!1:t in e}const rv=["ctrl","shift","alt","meta"],nv={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>rv.some(r=>e[`${r}Key`]&&!t.includes(r))},iv=(e,t)=>(r,...n)=>{for(let o=0;o<t.length;o++){const i=nv[t[o]];if(i&&i(r,t))return}return e(r,...n)},ov=wt({patchProp:ev},k2);let Ld;function sv(){return Ld||(Ld=l2(ov))}const av=(...e)=>{const t=sv().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=lv(n);if(!o)return;const i=t._component;!Be(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function lv(e){return rt(e)?document.querySelector(e):e}const gl=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},cv={},uv={class:"container-xl",style:{position:"relative",padding:"0",background:"#0A0A0A"}};function fv(e,t){const r=bn("router-view");return Rt(),Xt("div",uv,[He(r)])}const dv=gl(cv,[["render",fv]]);function hv(){return t1().__VUE_DEVTOOLS_GLOBAL_HOOK__}function t1(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const pv=typeof Proxy=="function",gv="devtools-plugin:setup",mv="plugin:settings:set";let Ni,Yc;function wv(){var e;return Ni!==void 0||(typeof window<"u"&&window.performance?(Ni=!0,Yc=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Ni=!0,Yc=global.perf_hooks.performance):Ni=!1),Ni}function vv(){return wv()?Yc.now():Date.now()}class bv{constructor(t,r){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=r;const n={};if(t.settings)for(const s in t.settings){const a=t.settings[s];n[s]=a.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const s=localStorage.getItem(o),a=JSON.parse(s);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(s){try{localStorage.setItem(o,JSON.stringify(s))}catch{}i=s},now(){return vv()}},r&&r.on(mv,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:a,args:l,resolve:h})})})}async setRealTarget(t){this.target=t;for(const r of this.onQueue)this.target.on[r.method](...r.args);for(const r of this.targetQueue)r.resolve(await this.target[r.method](...r.args))}}function yv(e,t){const r=e,n=t1(),o=hv(),i=pv&&r.enableEarlyProxy;if(o&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(gv,e,t);else{const s=i?new bv(r,o):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:r,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bi=typeof window<"u";function _v(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function ec(e,t){const r={};for(const n in t){const o=t[n];r[n]=_r(o)?o.map(e):e(o)}return r}const Qo=()=>{},_r=Array.isArray,xv=/\/$/,Av=e=>e.replace(xv,"");function tc(e,t,r="/"){let n,o={},i="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),o=e(i)),a>-1&&(n=n||t.slice(0,a),s=t.slice(a,t.length)),n=Sv(n??t,r),{fullPath:n+(i&&"?")+i+s,path:n,query:o,hash:s}}function Ev(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function kd(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Cv(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&Ji(t.matched[n],r.matched[o])&&r1(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function Ji(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function r1(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!Tv(e[r],t[r]))return!1;return!0}function Tv(e,t){return _r(e)?Pd(e,t):_r(t)?Pd(t,e):e===t}function Pd(e,t){return _r(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function Sv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/"),o=n[n.length-1];(o===".."||o===".")&&n.push("");let i=r.length-1,s,a;for(s=0;s<n.length;s++)if(a=n[s],a!==".")if(a==="..")i>1&&i--;else break;return r.slice(0,i).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var ps;(function(e){e.pop="pop",e.push="push"})(ps||(ps={}));var Jo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Jo||(Jo={}));function Iv(e){if(!e)if(Bi){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Av(e)}const $v=/^[^#]+#/;function Rv(e,t){return e.replace($v,"#")+t}function Ov(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const ml=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nv(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=Ov(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Md(e,t){return(history.state?history.state.position-t:-1)+e}const Zc=new Map;function Lv(e,t){Zc.set(e,t)}function kv(e){const t=Zc.get(e);return Zc.delete(e),t}let Pv=()=>location.protocol+"//"+location.host;function n1(e,t){const{pathname:r,search:n,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),kd(l,"")}return kd(r,e)+n+o}function Mv(e,t,r,n){let o=[],i=[],s=null;const a=({state:g})=>{const E=n1(e,location),_=r.value,I=t.value;let P=0;if(g){if(r.value=E,t.value=g,s&&s===_){s=null;return}P=I?g.position-I.position:0}else n(E);o.forEach(C=>{C(r.value,_,{delta:P,type:ps.pop,direction:P?P>0?Jo.forward:Jo.back:Jo.unknown})})};function l(){s=r.value}function h(g){o.push(g);const E=()=>{const _=o.indexOf(g);_>-1&&o.splice(_,1)};return i.push(E),E}function d(){const{history:g}=window;g.state&&g.replaceState(Ke({},g.state,{scroll:ml()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Bd(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?ml():null}}function Bv(e){const{history:t,location:r}=window,n={value:n1(e,r)},o={value:t.state};o.value||i(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=e.indexOf("#"),g=p>-1?(r.host&&document.querySelector("base")?e:e.slice(p))+l:Pv()+e+l;try{t[d?"replaceState":"pushState"](h,"",g),o.value=h}catch(E){console.error(E),r[d?"replace":"assign"](g)}}function s(l,h){const d=Ke({},t.state,Bd(o.value.back,l,o.value.forward,!0),h,{position:o.value.position});i(l,d,!0),n.value=l}function a(l,h){const d=Ke({},o.value,t.state,{forward:l,scroll:ml()});i(d.current,d,!0);const p=Ke({},Bd(n.value,l,null),{position:d.position+1},h);i(l,p,!1),n.value=l}return{location:n,state:o,push:a,replace:s}}function Dv(e){e=Iv(e);const t=Bv(e),r=Mv(e,t.state,t.location,t.replace);function n(i,s=!0){s||r.pauseListeners(),history.go(i)}const o=Ke({location:"",base:e,go:n,createHref:Rv.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Fv(e){return typeof e=="string"||e&&typeof e=="object"}function i1(e){return typeof e=="string"||typeof e=="symbol"}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},o1=Symbol("");var Dd;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Dd||(Dd={}));function Xi(e,t){return Ke(new Error,{type:e,[o1]:!0},t)}function Ur(e,t){return e instanceof Error&&o1 in e&&(t==null||!!(e.type&t))}const Fd="[^/]+?",Uv={sensitive:!1,strict:!1,start:!0,end:!0},Wv=/[.+*?^${}()[\]/\\]/g;function jv(e,t){const r=Ke({},Uv,t),n=[];let o=r.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];r.strict&&!h.length&&(o+="/");for(let p=0;p<h.length;p++){const g=h[p];let E=40+(r.sensitive?.25:0);if(g.type===0)p||(o+="/"),o+=g.value.replace(Wv,"\\$&"),E+=40;else if(g.type===1){const{value:_,repeatable:I,optional:P,regexp:C}=g;i.push({name:_,repeatable:I,optional:P});const A=C||Fd;if(A!==Fd){E+=10;try{new RegExp(`(${A})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+N.message)}}let z=I?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;p||(z=P&&h.length<2?`(?:/${z})`:"/"+z),P&&(z+="?"),o+=z,E+=20,P&&(E+=-8),I&&(E+=-20),A===".*"&&(E+=-50)}d.push(E)}n.push(d)}if(r.strict&&r.end){const h=n.length-1;n[h][n[h].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const s=new RegExp(o,r.sensitive?"":"i");function a(h){const d=h.match(s),p={};if(!d)return null;for(let g=1;g<d.length;g++){const E=d[g]||"",_=i[g-1];p[_.name]=E&&_.repeatable?E.split("/"):E}return p}function l(h){let d="",p=!1;for(const g of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of g)if(E.type===0)d+=E.value;else if(E.type===1){const{value:_,repeatable:I,optional:P}=E,C=_ in h?h[_]:"";if(_r(C)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=_r(C)?C.join("/"):C;if(!A)if(P)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${_}"`);d+=A}}return d||"/"}return{re:s,score:n,keys:i,parse:a,stringify:l}}function Hv(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function zv(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const i=Hv(n[r],o[r]);if(i)return i;r++}if(Math.abs(o.length-n.length)===1){if(Ud(n))return 1;if(Ud(o))return-1}return o.length-n.length}function Ud(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vv={type:0,value:""},Gv=/[a-zA-Z0-9_]/;function Kv(e){if(!e)return[[]];if(e==="/")return[[Vv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(E){throw new Error(`ERR (${r})/"${h}": ${E}`)}let r=0,n=r;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,h="",d="";function p(){h&&(r===0?i.push({type:0,value:h}):r===1||r===2||r===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:l==="/"?(h&&p(),s()):l===":"?(p(),r=1):g();break;case 4:g(),r=n;break;case 1:l==="("?r=2:Gv.test(l)?g():(p(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:r=3:d+=l;break;case 3:p(),r=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:t("Unknown state");break}}return r===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),s(),o}function qv(e,t,r){const n=jv(Kv(e.path),r),o=Ke(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Yv(e,t){const r=[],n=new Map;t=Hd({strict:!1,end:!0,sensitive:!1},t);function o(d){return n.get(d)}function i(d,p,g){const E=!g,_=Zv(d);_.aliasOf=g&&g.record;const I=Hd(t,d),P=[_];if("alias"in d){const z=typeof d.alias=="string"?[d.alias]:d.alias;for(const N of z)P.push(Ke({},_,{components:g?g.record.components:_.components,path:N,aliasOf:g?g.record:_}))}let C,A;for(const z of P){const{path:N}=z;if(p&&N[0]!=="/"){const V=p.record.path,q=V[V.length-1]==="/"?"":"/";z.path=p.record.path+(N&&q+N)}if(C=qv(z,p,I),g?g.alias.push(C):(A=A||C,A!==C&&A.alias.push(C),E&&d.name&&!jd(C)&&s(d.name)),_.children){const V=_.children;for(let q=0;q<V.length;q++)i(V[q],C,g&&g.children[q])}g=g||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return A?()=>{s(A)}:Qo}function s(d){if(i1(d)){const p=n.get(d);p&&(n.delete(d),r.splice(r.indexOf(p),1),p.children.forEach(s),p.alias.forEach(s))}else{const p=r.indexOf(d);p>-1&&(r.splice(p,1),d.record.name&&n.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function a(){return r}function l(d){let p=0;for(;p<r.length&&zv(d,r[p])>=0&&(d.record.path!==r[p].record.path||!s1(d,r[p]));)p++;r.splice(p,0,d),d.record.name&&!jd(d)&&n.set(d.record.name,d)}function h(d,p){let g,E={},_,I;if("name"in d&&d.name){if(g=n.get(d.name),!g)throw Xi(1,{location:d});I=g.record.name,E=Ke(Wd(p.params,g.keys.filter(A=>!A.optional).map(A=>A.name)),d.params&&Wd(d.params,g.keys.map(A=>A.name))),_=g.stringify(E)}else if("path"in d)_=d.path,g=r.find(A=>A.re.test(_)),g&&(E=g.parse(_),I=g.record.name);else{if(g=p.name?n.get(p.name):r.find(A=>A.re.test(p.path)),!g)throw Xi(1,{location:d,currentLocation:p});I=g.record.name,E=Ke({},p.params,d.params),_=g.stringify(E)}const P=[];let C=g;for(;C;)P.unshift(C.record),C=C.parent;return{name:I,path:_,params:E,matched:P,meta:Jv(P)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:h,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function Wd(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function Zv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Qv(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="object"?r[n]:r;return t}function jd(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jv(e){return e.reduce((t,r)=>Ke(t,r.meta),{})}function Hd(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}function s1(e,t){return t.children.some(r=>r===e||s1(e,r))}const a1=/#/g,Xv=/&/g,eb=/\//g,tb=/=/g,rb=/\?/g,l1=/\+/g,nb=/%5B/g,ib=/%5D/g,c1=/%5E/g,ob=/%60/g,u1=/%7B/g,sb=/%7C/g,f1=/%7D/g,ab=/%20/g;function ef(e){return encodeURI(""+e).replace(sb,"|").replace(nb,"[").replace(ib,"]")}function lb(e){return ef(e).replace(u1,"{").replace(f1,"}").replace(c1,"^")}function Qc(e){return ef(e).replace(l1,"%2B").replace(ab,"+").replace(a1,"%23").replace(Xv,"%26").replace(ob,"`").replace(u1,"{").replace(f1,"}").replace(c1,"^")}function cb(e){return Qc(e).replace(tb,"%3D")}function ub(e){return ef(e).replace(a1,"%23").replace(rb,"%3F")}function fb(e){return e==null?"":ub(e).replace(eb,"%2F")}function $a(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function db(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){const i=n[o].replace(l1," "),s=i.indexOf("="),a=$a(s<0?i:i.slice(0,s)),l=s<0?null:$a(i.slice(s+1));if(a in t){let h=t[a];_r(h)||(h=t[a]=[h]),h.push(l)}else t[a]=l}return t}function zd(e){let t="";for(let r in e){const n=e[r];if(r=cb(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(_r(n)?n.map(i=>i&&Qc(i)):[n&&Qc(n)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+r,i!=null&&(t+="="+i))})}return t}function hb(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=_r(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const pb=Symbol(""),Vd=Symbol(""),tf=Symbol(""),d1=Symbol(""),Jc=Symbol("");function Po(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e.slice(),reset:r}}function mn(e,t,r,n,o){const i=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const l=p=>{p===!1?a(Xi(4,{from:r,to:t})):p instanceof Error?a(p):Fv(p)?a(Xi(2,{from:t,to:p})):(i&&n.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),s())},h=e.call(n&&n.instances[o],t,r,l);let d=Promise.resolve(h);e.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function rc(e,t,r,n){const o=[];for(const i of e)for(const s in i.components){let a=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(gb(a)){const h=(a.__vccOpts||a)[t];h&&o.push(mn(h,r,n,i,s))}else{let l=a();o.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const d=_v(h)?h.default:h;i.components[s]=d;const g=(d.__vccOpts||d)[t];return g&&mn(g,r,n,i,s)()}))}}return o}function gb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Gd(e){const t=Bt(tf),r=Bt(d1),n=Ue(()=>t.resolve(gt(e.to))),o=Ue(()=>{const{matched:l}=n.value,{length:h}=l,d=l[h-1],p=r.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ji.bind(null,d));if(g>-1)return g;const E=Kd(l[h-2]);return h>1&&Kd(d)===E&&p[p.length-1].path!==E?p.findIndex(Ji.bind(null,l[h-2])):g}),i=Ue(()=>o.value>-1&&bb(r.params,n.value.params)),s=Ue(()=>o.value>-1&&o.value===r.matched.length-1&&r1(r.params,n.value.params));function a(l={}){return vb(l)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(Qo):Promise.resolve()}return{route:n,href:Ue(()=>n.value.href),isActive:i,isExactActive:s,navigate:a}}const mb=Ar({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gd,setup(e,{slots:t}){const r=Eo(Gd(e)),{options:n}=Bt(tf),o=Ue(()=>({[qd(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[qd(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=t.default&&t.default(r);return e.custom?i:Co("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},i)}}}),wb=mb;function vb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bb(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!_r(o)||o.length!==n.length||n.some((i,s)=>i!==o[s]))return!1}return!0}function Kd(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qd=(e,t,r)=>e??t??r,yb=Ar({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=Bt(Jc),o=Ue(()=>e.route||n.value),i=Bt(Vd,0),s=Ue(()=>{let h=gt(i);const{matched:d}=o.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),a=Ue(()=>o.value.matched[s.value]);qo(Vd,Ue(()=>s.value+1)),qo(pb,a),qo(Jc,o);const l=Ye();return Lt(()=>[l.value,a.value,e.name],([h,d,p],[g,E,_])=>{d&&(d.instances[p]=h,E&&E!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),h&&d&&(!E||!Ji(d,E)||!g)&&(d.enterCallbacks[p]||[]).forEach(I=>I(h))},{flush:"post"}),()=>{const h=o.value,d=e.name,p=a.value,g=p&&p.components[d];if(!g)return Yd(r.default,{Component:g,route:h});const E=p.props[d],_=E?E===!0?h.params:typeof E=="function"?E(h):E:null,P=Co(g,Ke({},_,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Yd(r.default,{Component:P,route:h})||P}}});function Yd(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const _b=yb;function xb(e){const t=Yv(e.routes,e),r=e.parseQuery||db,n=e.stringifyQuery||zd,o=e.history,i=Po(),s=Po(),a=Po(),l=Ap(an);let h=an;Bi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ec.bind(null,J=>""+J),p=ec.bind(null,fb),g=ec.bind(null,$a);function E(J,ue){let oe,de;return i1(J)?(oe=t.getRecordMatcher(J),de=ue):de=J,t.addRoute(de,oe)}function _(J){const ue=t.getRecordMatcher(J);ue&&t.removeRoute(ue)}function I(){return t.getRoutes().map(J=>J.record)}function P(J){return!!t.getRecordMatcher(J)}function C(J,ue){if(ue=Ke({},ue||l.value),typeof J=="string"){const v=tc(r,J,ue.path),L=t.resolve({path:v.path},ue),K=o.createHref(v.fullPath);return Ke(v,L,{params:g(L.params),hash:$a(v.hash),redirectedFrom:void 0,href:K})}let oe;if("path"in J)oe=Ke({},J,{path:tc(r,J.path,ue.path).path});else{const v=Ke({},J.params);for(const L in v)v[L]==null&&delete v[L];oe=Ke({},J,{params:p(v)}),ue.params=p(ue.params)}const de=t.resolve(oe,ue),Ce=J.hash||"";de.params=d(g(de.params));const M=Ev(n,Ke({},J,{hash:lb(Ce),path:de.path})),w=o.createHref(M);return Ke({fullPath:M,hash:Ce,query:n===zd?hb(J.query):J.query||{}},de,{redirectedFrom:void 0,href:w})}function A(J){return typeof J=="string"?tc(r,J,l.value.path):Ke({},J)}function z(J,ue){if(h!==J)return Xi(8,{from:ue,to:J})}function N(J){return Y(J)}function V(J){return N(Ke(A(J),{replace:!0}))}function q(J){const ue=J.matched[J.matched.length-1];if(ue&&ue.redirect){const{redirect:oe}=ue;let de=typeof oe=="function"?oe(J):oe;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=A(de):{path:de},de.params={}),Ke({query:J.query,hash:J.hash,params:"path"in de?{}:J.params},de)}}function Y(J,ue){const oe=h=C(J),de=l.value,Ce=J.state,M=J.force,w=J.replace===!0,v=q(oe);if(v)return Y(Ke(A(v),{state:typeof v=="object"?Ke({},Ce,v.state):Ce,force:M,replace:w}),ue||oe);const L=oe;L.redirectedFrom=ue;let K;return!M&&Cv(n,de,oe)&&(K=Xi(16,{to:L,from:de}),re(de,de,!0,!1)),(K?Promise.resolve(K):S(L,de)).catch(Q=>Ur(Q)?Ur(Q,2)?Q:te(Q):D(Q,L,de)).then(Q=>{if(Q){if(Ur(Q,2))return Y(Ke({replace:w},A(Q.to),{state:typeof Q.to=="object"?Ke({},Ce,Q.to.state):Ce,force:M}),ue||L)}else Q=$(L,de,!0,w,Ce);return k(L,de,Q),Q})}function y(J,ue){const oe=z(J,ue);return oe?Promise.reject(oe):Promise.resolve()}function x(J){const ue=Te.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(J):J()}function S(J,ue){let oe;const[de,Ce,M]=Ab(J,ue);oe=rc(de.reverse(),"beforeRouteLeave",J,ue);for(const v of de)v.leaveGuards.forEach(L=>{oe.push(mn(L,J,ue))});const w=y.bind(null,J,ue);return oe.push(w),Ee(oe).then(()=>{oe=[];for(const v of i.list())oe.push(mn(v,J,ue));return oe.push(w),Ee(oe)}).then(()=>{oe=rc(Ce,"beforeRouteUpdate",J,ue);for(const v of Ce)v.updateGuards.forEach(L=>{oe.push(mn(L,J,ue))});return oe.push(w),Ee(oe)}).then(()=>{oe=[];for(const v of M)if(v.beforeEnter)if(_r(v.beforeEnter))for(const L of v.beforeEnter)oe.push(mn(L,J,ue));else oe.push(mn(v.beforeEnter,J,ue));return oe.push(w),Ee(oe)}).then(()=>(J.matched.forEach(v=>v.enterCallbacks={}),oe=rc(M,"beforeRouteEnter",J,ue),oe.push(w),Ee(oe))).then(()=>{oe=[];for(const v of s.list())oe.push(mn(v,J,ue));return oe.push(w),Ee(oe)}).catch(v=>Ur(v,8)?v:Promise.reject(v))}function k(J,ue,oe){a.list().forEach(de=>x(()=>de(J,ue,oe)))}function $(J,ue,oe,de,Ce){const M=z(J,ue);if(M)return M;const w=ue===an,v=Bi?history.state:{};oe&&(de||w?o.replace(J.fullPath,Ke({scroll:w&&v&&v.scroll},Ce)):o.push(J.fullPath,Ce)),l.value=J,re(J,ue,oe,w),te()}let W;function j(){W||(W=o.listen((J,ue,oe)=>{if(!Ae.listening)return;const de=C(J),Ce=q(de);if(Ce){Y(Ke(Ce,{replace:!0}),de).catch(Qo);return}h=de;const M=l.value;Bi&&Lv(Md(M.fullPath,oe.delta),ml()),S(de,M).catch(w=>Ur(w,12)?w:Ur(w,2)?(Y(w.to,de).then(v=>{Ur(v,20)&&!oe.delta&&oe.type===ps.pop&&o.go(-1,!1)}).catch(Qo),Promise.reject()):(oe.delta&&o.go(-oe.delta,!1),D(w,de,M))).then(w=>{w=w||$(de,M,!1),w&&(oe.delta&&!Ur(w,8)?o.go(-oe.delta,!1):oe.type===ps.pop&&Ur(w,20)&&o.go(-1,!1)),k(de,M,w)}).catch(Qo)}))}let O=Po(),R=Po(),F;function D(J,ue,oe){te(J);const de=R.list();return de.length?de.forEach(Ce=>Ce(J,ue,oe)):console.error(J),Promise.reject(J)}function G(){return F&&l.value!==an?Promise.resolve():new Promise((J,ue)=>{O.add([J,ue])})}function te(J){return F||(F=!J,j(),O.list().forEach(([ue,oe])=>J?oe(J):ue()),O.reset()),J}function re(J,ue,oe,de){const{scrollBehavior:Ce}=e;if(!Bi||!Ce)return Promise.resolve();const M=!oe&&kv(Md(J.fullPath,0))||(de||!oe)&&history.state&&history.state.scroll||null;return cs().then(()=>Ce(J,ue,M)).then(w=>w&&Nv(w)).catch(w=>D(w,J,ue))}const fe=J=>o.go(J);let xe;const Te=new Set,Ae={currentRoute:l,listening:!0,addRoute:E,removeRoute:_,hasRoute:P,getRoutes:I,resolve:C,options:e,push:N,replace:V,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:R.add,isReady:G,install(J){const ue=this;J.component("RouterLink",wb),J.component("RouterView",_b),J.config.globalProperties.$router=ue,Object.defineProperty(J.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(l)}),Bi&&!xe&&l.value===an&&(xe=!0,N(o.location).catch(Ce=>{}));const oe={};for(const Ce in an)Object.defineProperty(oe,Ce,{get:()=>l.value[Ce],enumerable:!0});J.provide(tf,ue),J.provide(d1,vp(oe)),J.provide(Jc,l);const de=J.unmount;Te.add(J),J.unmount=function(){Te.delete(J),Te.size<1&&(h=an,W&&W(),W=null,l.value=an,xe=!1,F=!1),de()}}};function Ee(J){return J.reduce((ue,oe)=>ue.then(()=>x(oe)),Promise.resolve())}return Ae}function Ab(e,t){const r=[],n=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const a=t.matched[s];a&&(e.matched.find(h=>Ji(h,a))?n.push(a):r.push(a));const l=e.matched[s];l&&(t.matched.find(h=>Ji(h,l))||o.push(l))}return[r,n,o]}const Eb="modulepreload",Cb=function(e){return"/"+e},Zd={},Qd=function(t,r,n){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Cb(i),i in Zd)return;Zd[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!n)for(let d=o.length-1;d>=0;d--){const p=o[d];if(p.href===i&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const h=document.createElement("link");if(h.rel=s?"stylesheet":Eb,s||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),s)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Jd;const Rn=typeof window<"u";Rn&&((Jd=window==null?void 0:window.navigator)!=null&&Jd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Tb(e){return typeof e=="function"?e():gt(e)}function Sb(e){return sp()?(ap(e),!0):!1}function Xd(e,t,r={}){const{immediate:n=!0}=r,o=Ye(!1);let i=null;function s(){i&&(clearTimeout(i),i=null)}function a(){o.value=!1,s()}function l(...h){s(),o.value=!0,i=setTimeout(()=>{o.value=!1,i=null,e(...h)},Tb(t))}return n&&(o.value=!0,Rn&&l()),Sb(a),{isPending:Fu(o),start:l,stop:a}}var Ib=typeof global=="object"&&global&&global.Object===Object&&global;const $b=Ib;var Rb=typeof self=="object"&&self&&self.Object===Object&&self,Ob=$b||Rb||Function("return this")();const rf=Ob;var Nb=rf.Symbol;const eo=Nb;var h1=Object.prototype,Lb=h1.hasOwnProperty,kb=h1.toString,Mo=eo?eo.toStringTag:void 0;function Pb(e){var t=Lb.call(e,Mo),r=e[Mo];try{e[Mo]=void 0;var n=!0}catch{}var o=kb.call(e);return n&&(t?e[Mo]=r:delete e[Mo]),o}var Mb=Object.prototype,Bb=Mb.toString;function Db(e){return Bb.call(e)}var Fb="[object Null]",Ub="[object Undefined]",e0=eo?eo.toStringTag:void 0;function p1(e){return e==null?e===void 0?Ub:Fb:e0&&e0 in Object(e)?Pb(e):Db(e)}function Wb(e){return e!=null&&typeof e=="object"}var jb="[object Symbol]";function nf(e){return typeof e=="symbol"||Wb(e)&&p1(e)==jb}function Hb(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var zb=Array.isArray;const of=zb;var Vb=1/0,t0=eo?eo.prototype:void 0,r0=t0?t0.toString:void 0;function g1(e){if(typeof e=="string")return e;if(of(e))return Hb(e,g1)+"";if(nf(e))return r0?r0.call(e):"";var t=e+"";return t=="0"&&1/e==-Vb?"-0":t}function m1(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Gb="[object AsyncFunction]",Kb="[object Function]",qb="[object GeneratorFunction]",Yb="[object Proxy]";function Zb(e){if(!m1(e))return!1;var t=p1(e);return t==Kb||t==qb||t==Gb||t==Yb}var Qb=rf["__core-js_shared__"];const nc=Qb;var n0=function(){var e=/[^.]+$/.exec(nc&&nc.keys&&nc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Jb(e){return!!n0&&n0 in e}var Xb=Function.prototype,e3=Xb.toString;function t3(e){if(e!=null){try{return e3.call(e)}catch{}try{return e+""}catch{}}return""}var r3=/[\\^$.*+?()[\]{}|]/g,n3=/^\[object .+?Constructor\]$/,i3=Function.prototype,o3=Object.prototype,s3=i3.toString,a3=o3.hasOwnProperty,l3=RegExp("^"+s3.call(a3).replace(r3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function c3(e){if(!m1(e)||Jb(e))return!1;var t=Zb(e)?l3:n3;return t.test(t3(e))}function u3(e,t){return e==null?void 0:e[t]}function w1(e,t){var r=u3(e,t);return c3(r)?r:void 0}function f3(e,t){return e===t||e!==e&&t!==t}var d3=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,h3=/^\w*$/;function p3(e,t){if(of(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||nf(e)?!0:h3.test(e)||!d3.test(e)||t!=null&&e in Object(t)}var g3=w1(Object,"create");const gs=g3;function m3(){this.__data__=gs?gs(null):{},this.size=0}function w3(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var v3="__lodash_hash_undefined__",b3=Object.prototype,y3=b3.hasOwnProperty;function _3(e){var t=this.__data__;if(gs){var r=t[e];return r===v3?void 0:r}return y3.call(t,e)?t[e]:void 0}var x3=Object.prototype,A3=x3.hasOwnProperty;function E3(e){var t=this.__data__;return gs?t[e]!==void 0:A3.call(t,e)}var C3="__lodash_hash_undefined__";function T3(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=gs&&t===void 0?C3:t,this}function ui(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ui.prototype.clear=m3;ui.prototype.delete=w3;ui.prototype.get=_3;ui.prototype.has=E3;ui.prototype.set=T3;function S3(){this.__data__=[],this.size=0}function wl(e,t){for(var r=e.length;r--;)if(f3(e[r][0],t))return r;return-1}var I3=Array.prototype,$3=I3.splice;function R3(e){var t=this.__data__,r=wl(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():$3.call(t,r,1),--this.size,!0}function O3(e){var t=this.__data__,r=wl(t,e);return r<0?void 0:t[r][1]}function N3(e){return wl(this.__data__,e)>-1}function L3(e,t){var r=this.__data__,n=wl(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function To(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}To.prototype.clear=S3;To.prototype.delete=R3;To.prototype.get=O3;To.prototype.has=N3;To.prototype.set=L3;var k3=w1(rf,"Map");const P3=k3;function M3(){this.size=0,this.__data__={hash:new ui,map:new(P3||To),string:new ui}}function B3(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function vl(e,t){var r=e.__data__;return B3(t)?r[typeof t=="string"?"string":"hash"]:r.map}function D3(e){var t=vl(this,e).delete(e);return this.size-=t?1:0,t}function F3(e){return vl(this,e).get(e)}function U3(e){return vl(this,e).has(e)}function W3(e,t){var r=vl(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function yi(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}yi.prototype.clear=M3;yi.prototype.delete=D3;yi.prototype.get=F3;yi.prototype.has=U3;yi.prototype.set=W3;var j3="Expected a function";function sf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(j3);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var s=e.apply(this,n);return r.cache=i.set(o,s)||i,s};return r.cache=new(sf.Cache||yi),r}sf.Cache=yi;var H3=500;function z3(e){var t=sf(e,function(n){return r.size===H3&&r.clear(),n}),r=t.cache;return t}var V3=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,G3=/\\(\\)?/g,K3=z3(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(V3,function(r,n,o,i){t.push(o?i.replace(G3,"$1"):n||r)}),t});const q3=K3;function Y3(e){return e==null?"":g1(e)}function Z3(e,t){return of(e)?e:p3(e,t)?[e]:q3(Y3(e))}var Q3=1/0;function J3(e){if(typeof e=="string"||nf(e))return e;var t=e+"";return t=="0"&&1/e==-Q3?"-0":t}function X3(e,t){t=Z3(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[J3(t[r++])];return r&&r==n?e:void 0}function e5(e,t,r){var n=e==null?void 0:X3(e,t);return n===void 0?r:n}function t5(e){for(var t=-1,r=e==null?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n}function r5(e){return e==null}function n5(e){return e===void 0}const i5=e=>e===void 0,o5=e=>typeof e=="boolean",v1=e=>typeof e=="number",s5=e=>rt(e)?!Number.isNaN(Number(e)):!1;class a5 extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function l5(e,t){throw new a5(`[${e}] ${t}`)}const b1=(e="")=>e.split(" ").filter(t=>!!t.trim()),i0=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},c5=(e,t)=>{!e||!t.trim()||e.classList.add(...b1(t))},u5=(e,t)=>{!e||!t.trim()||e.classList.remove(...b1(t))},f5=(e,t)=>{var r;if(!Rn||!e||!t)return"";let n=br(t);n==="float"&&(n="cssFloat");try{const o=e.style[n];if(o)return o;const i=(r=document.defaultView)==null?void 0:r.getComputedStyle(e,"");return i?i[n]:""}catch{return e.style[n]}};function af(e,t="px"){if(!e)return"";if(v1(e)||s5(e))return`${e}${t}`;if(rt(e))return e}let na;const d5=e=>{var t;if(!Rn)return 0;if(na!==void 0)return na;const r=document.createElement("div");r.className=`${e}-scrollbar__wrap`,r.style.visibility="hidden",r.style.width="100px",r.style.position="absolute",r.style.top="-9999px",document.body.appendChild(r);const n=r.offsetWidth;r.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",r.appendChild(o);const i=o.offsetWidth;return(t=r.parentNode)==null||t.removeChild(r),na=n-i,na};/*! Element Plus Icons Vue v2.1.0 */var h5=(e,t)=>{let r=e.__vccOpts||e;for(let[n,o]of t)r[n]=o;return r},p5={name:"Close"},g5={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},m5=he("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),w5=[m5];function v5(e,t,r,n,o,i){return Rt(),Xt("svg",g5,w5)}var b5=h5(p5,[["render",v5],["__file","close.vue"]]);const y1="__epPropKey",ms=e=>e,y5=e=>Xe(e)&&!!e[y1],_5=(e,t)=>{if(!Xe(e)||y5(e))return e;const{values:r,required:n,default:o,type:i,validator:s}=e,l={type:i,required:!!n,validator:r||s?h=>{let d=!1,p=[];if(r&&(p=Array.from(r),je(e,"default")&&p.push(o),d||(d=p.includes(h))),s&&(d||(d=s(h))),!d&&p.length>0){const g=[...new Set(p)].map(E=>JSON.stringify(E)).join(", ");yw(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${g}], got value ${JSON.stringify(h)}.`)}return d}:void 0,[y1]:!0};return je(e,"default")&&(l.default=o),l},Fs=e=>t5(Object.entries(e).map(([t,r])=>[t,_5(r,t)])),x5=ms([String,Object,Function]),_1=(e,t)=>{if(e.install=r=>{for(const n of[e,...Object.values(t??{})])r.component(n.name,n)},t)for(const[r,n]of Object.entries(t))e[r]=n;return e},x1={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},A1="update:modelValue";var va=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(va||{});const o0=({from:e,replacement:t,scope:r,version:n,ref:o,type:i="API"},s)=>{Lt(()=>gt(s),a=>{},{immediate:!0})};var A5={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const E5=e=>(t,r)=>C5(t,r,gt(e)),C5=(e,t,r)=>e5(r,e,e).replace(/\{(\w+)\}/g,(n,o)=>{var i;return`${(i=t==null?void 0:t[o])!=null?i:`{${o}}`}`}),T5=e=>{const t=Ue(()=>gt(e).name),r=pt(e)?e:Ye(e);return{lang:t,locale:r,t:E5(e)}},S5=Symbol("localeContextKey"),I5=e=>{const t=e||Bt(S5,Ye());return T5(Ue(()=>t.value||A5))},ba="el",$5="is-",Kn=(e,t,r,n,o)=>{let i=`${e}-${t}`;return r&&(i+=`-${r}`),n&&(i+=`__${n}`),o&&(i+=`--${o}`),i},R5=Symbol("namespaceContextKey"),E1=e=>{const t=e||(yr()?Bt(R5,Ye(ba)):Ye(ba));return Ue(()=>gt(t)||ba)},bl=(e,t)=>{const r=E1(t);return{namespace:r,b:(I="")=>Kn(r.value,e,I,"",""),e:I=>I?Kn(r.value,e,"",I,""):"",m:I=>I?Kn(r.value,e,"","",I):"",be:(I,P)=>I&&P?Kn(r.value,e,I,P,""):"",em:(I,P)=>I&&P?Kn(r.value,e,"",I,P):"",bm:(I,P)=>I&&P?Kn(r.value,e,I,"",P):"",bem:(I,P,C)=>I&&P&&C?Kn(r.value,e,I,P,C):"",is:(I,...P)=>{const C=P.length>=1?P[0]:!0;return I&&C?`${$5}${I}`:""},cssVar:I=>{const P={};for(const C in I)I[C]&&(P[`--${r.value}-${C}`]=I[C]);return P},cssVarName:I=>`--${r.value}-${I}`,cssVarBlock:I=>{const P={};for(const C in I)I[C]&&(P[`--${r.value}-${e}-${C}`]=I[C]);return P},cssVarBlockName:I=>`--${r.value}-${e}-${I}`}},O5=(e,t={})=>{pt(e)||l5("[useLockscreen]","You need to pass a ref param to this function");const r=t.ns||bl("popup"),n=Tp(()=>r.bm("parent","hidden"));if(!Rn||i0(document.body,n.value))return;let o=0,i=!1,s="0";const a=()=>{setTimeout(()=>{u5(document==null?void 0:document.body,n.value),i&&document&&(document.body.style.width=s)},200)};Lt(e,l=>{if(!l){a();return}i=!i0(document.body,n.value),i&&(s=document.body.style.width),o=d5(r.namespace.value);const h=document.documentElement.clientHeight<document.body.scrollHeight,d=f5(document.body,"overflowY");o>0&&(h||d==="scroll")&&i&&(document.body.style.width=`calc(100% - ${o}px)`),c5(document.body,n.value)}),ap(()=>a())},N5=e=>{if(!e)return{onClick:Vt,onMousedown:Vt,onMouseup:Vt};let t=!1,r=!1;return{onClick:s=>{t&&r&&e(s),t=r=!1},onMousedown:s=>{t=s.target===s.currentTarget},onMouseup:s=>{r=s.target===s.currentTarget}}},s0={prefix:Math.floor(Math.random()*1e4),current:0},L5=Symbol("elIdInjection"),k5=()=>yr()?Bt(L5,s0):s0,a0=e=>{const t=k5(),r=E1();return Ue(()=>gt(e)||`${r.value}-id-${t.prefix}-${t.current++}`)};let Di=[];const l0=e=>{const t=e;t.key===x1.esc&&Di.forEach(r=>r(t))},P5=e=>{bi(()=>{Di.length===0&&document.addEventListener("keydown",l0),Rn&&Di.push(e)}),Bs(()=>{Di=Di.filter(t=>t!==e),Di.length===0&&Rn&&document.removeEventListener("keydown",l0)})},c0=Ye(0),M5=2e3,B5=Symbol("zIndexContextKey"),D5=e=>{const t=e||(yr()?Bt(B5,void 0):void 0),r=Ue(()=>{const i=gt(t);return v1(i)?i:M5}),n=Ue(()=>r.value+c0.value);return{initialZIndex:r,currentZIndex:n,nextZIndex:()=>(c0.value++,n.value)}},F5=Symbol(),u0=Ye();function U5(e,t=void 0){const r=yr()?Bt(F5,u0):u0;return e?Ue(()=>{var n,o;return(o=(n=r.value)==null?void 0:n[e])!=null?o:t}):r}var lf=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const W5=Fs({size:{type:ms([Number,String])},color:{type:String}}),j5=Ar({name:"ElIcon",inheritAttrs:!1}),H5=Ar({...j5,props:W5,setup(e){const t=e,r=bl("icon"),n=Ue(()=>{const{size:o,color:i}=t;return!o&&!i?{}:{fontSize:i5(o)?void 0:af(o),"--color":i}});return(o,i)=>(Rt(),Xt("i",Zu({class:gt(r).b(),style:gt(n)},o.$attrs),[yn(o.$slots,"default")],16))}});var z5=lf(H5,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const V5=_1(z5),ic="focus-trap.focus-after-trapped",oc="focus-trap.focus-after-released",G5="focus-trap.focusout-prevented",f0={cancelable:!0,bubbles:!1},K5={cancelable:!0,bubbles:!1},d0="focusAfterTrapped",h0="focusAfterReleased",q5=Symbol("elFocusTrap"),cf=Ye(),yl=Ye(0),uf=Ye(0);let ia=0;const C1=e=>{const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const o=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||o?NodeFilter.FILTER_SKIP:n.tabIndex>=0||n===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t},p0=(e,t)=>{for(const r of e)if(!Y5(r,t))return r},Y5=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},Z5=e=>{const t=C1(e),r=p0(t,e),n=p0(t.reverse(),e);return[r,n]},Q5=e=>e instanceof HTMLInputElement&&"select"in e,hn=(e,t)=>{if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),uf.value=window.performance.now(),e!==r&&Q5(e)&&t&&e.select()}};function g0(e,t){const r=[...e],n=e.indexOf(t);return n!==-1&&r.splice(n,1),r}const J5=()=>{let e=[];return{push:n=>{const o=e[0];o&&n!==o&&o.pause(),e=g0(e,n),e.unshift(n)},remove:n=>{var o,i;e=g0(e,n),(i=(o=e[0])==null?void 0:o.resume)==null||i.call(o)}}},X5=(e,t=!1)=>{const r=document.activeElement;for(const n of e)if(hn(n,t),document.activeElement!==r)return},m0=J5(),ey=()=>yl.value>uf.value,oa=()=>{cf.value="pointer",yl.value=window.performance.now()},w0=()=>{cf.value="keyboard",yl.value=window.performance.now()},ty=()=>(bi(()=>{ia===0&&(document.addEventListener("mousedown",oa),document.addEventListener("touchstart",oa),document.addEventListener("keydown",w0)),ia++}),Bs(()=>{ia--,ia<=0&&(document.removeEventListener("mousedown",oa),document.removeEventListener("touchstart",oa),document.removeEventListener("keydown",w0))}),{focusReason:cf,lastUserFocusTimestamp:yl,lastAutomatedFocusTimestamp:uf}),sa=e=>new CustomEvent(G5,{...K5,detail:e}),ry=Ar({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[d0,h0,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const r=Ye();let n,o;const{focusReason:i}=ty();P5(_=>{e.trapped&&!s.paused&&t("release-requested",_)});const s={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},a=_=>{if(!e.loop&&!e.trapped||s.paused)return;const{key:I,altKey:P,ctrlKey:C,metaKey:A,currentTarget:z,shiftKey:N}=_,{loop:V}=e,q=I===x1.tab&&!P&&!C&&!A,Y=document.activeElement;if(q&&Y){const y=z,[x,S]=Z5(y);if(x&&S){if(!N&&Y===S){const $=sa({focusReason:i.value});t("focusout-prevented",$),$.defaultPrevented||(_.preventDefault(),V&&hn(x,!0))}else if(N&&[x,y].includes(Y)){const $=sa({focusReason:i.value});t("focusout-prevented",$),$.defaultPrevented||(_.preventDefault(),V&&hn(S,!0))}}else if(Y===y){const $=sa({focusReason:i.value});t("focusout-prevented",$),$.defaultPrevented||_.preventDefault()}}};qo(q5,{focusTrapRef:r,onKeydown:a}),Lt(()=>e.focusTrapEl,_=>{_&&(r.value=_)},{immediate:!0}),Lt([r],([_],[I])=>{_&&(_.addEventListener("keydown",a),_.addEventListener("focusin",d),_.addEventListener("focusout",p)),I&&(I.removeEventListener("keydown",a),I.removeEventListener("focusin",d),I.removeEventListener("focusout",p))});const l=_=>{t(d0,_)},h=_=>t(h0,_),d=_=>{const I=gt(r);if(!I)return;const P=_.target,C=_.relatedTarget,A=P&&I.contains(P);e.trapped||C&&I.contains(C)||(n=C),A&&t("focusin",_),!s.paused&&e.trapped&&(A?o=P:hn(o,!0))},p=_=>{const I=gt(r);if(!(s.paused||!I))if(e.trapped){const P=_.relatedTarget;!r5(P)&&!I.contains(P)&&setTimeout(()=>{if(!s.paused&&e.trapped){const C=sa({focusReason:i.value});t("focusout-prevented",C),C.defaultPrevented||hn(o,!0)}},0)}else{const P=_.target;P&&I.contains(P)||t("focusout",_)}};async function g(){await cs();const _=gt(r);if(_){m0.push(s);const I=_.contains(document.activeElement)?n:document.activeElement;if(n=I,!_.contains(I)){const C=new Event(ic,f0);_.addEventListener(ic,l),_.dispatchEvent(C),C.defaultPrevented||cs(()=>{let A=e.focusStartEl;rt(A)||(hn(A),document.activeElement!==A&&(A="first")),A==="first"&&X5(C1(_),!0),(document.activeElement===I||A==="container")&&hn(_)})}}}function E(){const _=gt(r);if(_){_.removeEventListener(ic,l);const I=new CustomEvent(oc,{...f0,detail:{focusReason:i.value}});_.addEventListener(oc,h),_.dispatchEvent(I),!I.defaultPrevented&&(i.value=="keyboard"||!ey()||_.contains(document.activeElement))&&hn(n??document.body),_.removeEventListener(oc,h),m0.remove(s)}}return bi(()=>{e.trapped&&g(),Lt(()=>e.trapped,_=>{_?g():E()})}),Bs(()=>{e.trapped&&E()}),{onKeydown:a}}});function ny(e,t,r,n,o,i){return yn(e.$slots,"default",{handleKeydown:e.onKeydown})}var iy=lf(ry,[["render",ny],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]),_l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var T1={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(_l,function(){var r=1e3,n=6e4,o=36e5,i="millisecond",s="second",a="minute",l="hour",h="day",d="week",p="month",g="quarter",E="year",_="date",I="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(j){var O=["th","st","nd","rd"],R=j%100;return"["+j+(O[(R-20)%10]||O[R]||O[0])+"]"}},z=function(j,O,R){var F=String(j);return!F||F.length>=O?j:""+Array(O+1-F.length).join(R)+j},N={s:z,z:function(j){var O=-j.utcOffset(),R=Math.abs(O),F=Math.floor(R/60),D=R%60;return(O<=0?"+":"-")+z(F,2,"0")+":"+z(D,2,"0")},m:function j(O,R){if(O.date()<R.date())return-j(R,O);var F=12*(R.year()-O.year())+(R.month()-O.month()),D=O.clone().add(F,p),G=R-D<0,te=O.clone().add(F+(G?-1:1),p);return+(-(F+(R-D)/(G?D-te:te-D))||0)},a:function(j){return j<0?Math.ceil(j)||0:Math.floor(j)},p:function(j){return{M:p,y:E,w:d,d:h,D:_,h:l,m:a,s,ms:i,Q:g}[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(j){return j===void 0}},V="en",q={};q[V]=A;var Y="$isDayjsObject",y=function(j){return j instanceof $||!(!j||!j[Y])},x=function j(O,R,F){var D;if(!O)return V;if(typeof O=="string"){var G=O.toLowerCase();q[G]&&(D=G),R&&(q[G]=R,D=G);var te=O.split("-");if(!D&&te.length>1)return j(te[0])}else{var re=O.name;q[re]=O,D=re}return!F&&D&&(V=D),D||!F&&V},S=function(j,O){if(y(j))return j.clone();var R=typeof O=="object"?O:{};return R.date=j,R.args=arguments,new $(R)},k=N;k.l=x,k.i=y,k.w=function(j,O){return S(j,{locale:O.$L,utc:O.$u,x:O.$x,$offset:O.$offset})};var $=function(){function j(R){this.$L=x(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[Y]=!0}var O=j.prototype;return O.parse=function(R){this.$d=function(F){var D=F.date,G=F.utc;if(D===null)return new Date(NaN);if(k.u(D))return new Date;if(D instanceof Date)return new Date(D);if(typeof D=="string"&&!/Z$/i.test(D)){var te=D.match(P);if(te){var re=te[2]-1||0,fe=(te[7]||"0").substring(0,3);return G?new Date(Date.UTC(te[1],re,te[3]||1,te[4]||0,te[5]||0,te[6]||0,fe)):new Date(te[1],re,te[3]||1,te[4]||0,te[5]||0,te[6]||0,fe)}}return new Date(D)}(R),this.init()},O.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},O.$utils=function(){return k},O.isValid=function(){return this.$d.toString()!==I},O.isSame=function(R,F){var D=S(R);return this.startOf(F)<=D&&D<=this.endOf(F)},O.isAfter=function(R,F){return S(R)<this.startOf(F)},O.isBefore=function(R,F){return this.endOf(F)<S(R)},O.$g=function(R,F,D){return k.u(R)?this[F]:this.set(D,R)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(R,F){var D=this,G=!!k.u(F)||F,te=k.p(R),re=function(oe,de){var Ce=k.w(D.$u?Date.UTC(D.$y,de,oe):new Date(D.$y,de,oe),D);return G?Ce:Ce.endOf(h)},fe=function(oe,de){return k.w(D.toDate()[oe].apply(D.toDate("s"),(G?[0,0,0,0]:[23,59,59,999]).slice(de)),D)},xe=this.$W,Te=this.$M,Ae=this.$D,Ee="set"+(this.$u?"UTC":"");switch(te){case E:return G?re(1,0):re(31,11);case p:return G?re(1,Te):re(0,Te+1);case d:var J=this.$locale().weekStart||0,ue=(xe<J?xe+7:xe)-J;return re(G?Ae-ue:Ae+(6-ue),Te);case h:case _:return fe(Ee+"Hours",0);case l:return fe(Ee+"Minutes",1);case a:return fe(Ee+"Seconds",2);case s:return fe(Ee+"Milliseconds",3);default:return this.clone()}},O.endOf=function(R){return this.startOf(R,!1)},O.$set=function(R,F){var D,G=k.p(R),te="set"+(this.$u?"UTC":""),re=(D={},D[h]=te+"Date",D[_]=te+"Date",D[p]=te+"Month",D[E]=te+"FullYear",D[l]=te+"Hours",D[a]=te+"Minutes",D[s]=te+"Seconds",D[i]=te+"Milliseconds",D)[G],fe=G===h?this.$D+(F-this.$W):F;if(G===p||G===E){var xe=this.clone().set(_,1);xe.$d[re](fe),xe.init(),this.$d=xe.set(_,Math.min(this.$D,xe.daysInMonth())).$d}else re&&this.$d[re](fe);return this.init(),this},O.set=function(R,F){return this.clone().$set(R,F)},O.get=function(R){return this[k.p(R)]()},O.add=function(R,F){var D,G=this;R=Number(R);var te=k.p(F),re=function(Te){var Ae=S(G);return k.w(Ae.date(Ae.date()+Math.round(Te*R)),G)};if(te===p)return this.set(p,this.$M+R);if(te===E)return this.set(E,this.$y+R);if(te===h)return re(1);if(te===d)return re(7);var fe=(D={},D[a]=n,D[l]=o,D[s]=r,D)[te]||1,xe=this.$d.getTime()+R*fe;return k.w(xe,this)},O.subtract=function(R,F){return this.add(-1*R,F)},O.format=function(R){var F=this,D=this.$locale();if(!this.isValid())return D.invalidDate||I;var G=R||"YYYY-MM-DDTHH:mm:ssZ",te=k.z(this),re=this.$H,fe=this.$m,xe=this.$M,Te=D.weekdays,Ae=D.months,Ee=D.meridiem,J=function(de,Ce,M,w){return de&&(de[Ce]||de(F,G))||M[Ce].slice(0,w)},ue=function(de){return k.s(re%12||12,de,"0")},oe=Ee||function(de,Ce,M){var w=de<12?"AM":"PM";return M?w.toLowerCase():w};return G.replace(C,function(de,Ce){return Ce||function(M){switch(M){case"YY":return String(F.$y).slice(-2);case"YYYY":return k.s(F.$y,4,"0");case"M":return xe+1;case"MM":return k.s(xe+1,2,"0");case"MMM":return J(D.monthsShort,xe,Ae,3);case"MMMM":return J(Ae,xe);case"D":return F.$D;case"DD":return k.s(F.$D,2,"0");case"d":return String(F.$W);case"dd":return J(D.weekdaysMin,F.$W,Te,2);case"ddd":return J(D.weekdaysShort,F.$W,Te,3);case"dddd":return Te[F.$W];case"H":return String(re);case"HH":return k.s(re,2,"0");case"h":return ue(1);case"hh":return ue(2);case"a":return oe(re,fe,!0);case"A":return oe(re,fe,!1);case"m":return String(fe);case"mm":return k.s(fe,2,"0");case"s":return String(F.$s);case"ss":return k.s(F.$s,2,"0");case"SSS":return k.s(F.$ms,3,"0");case"Z":return te}return null}(de)||te.replace(":","")})},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(R,F,D){var G,te=this,re=k.p(F),fe=S(R),xe=(fe.utcOffset()-this.utcOffset())*n,Te=this-fe,Ae=function(){return k.m(te,fe)};switch(re){case E:G=Ae()/12;break;case p:G=Ae();break;case g:G=Ae()/3;break;case d:G=(Te-xe)/6048e5;break;case h:G=(Te-xe)/864e5;break;case l:G=Te/o;break;case a:G=Te/n;break;case s:G=Te/r;break;default:G=Te}return D?G:k.a(G)},O.daysInMonth=function(){return this.endOf(p).$D},O.$locale=function(){return q[this.$L]},O.locale=function(R,F){if(!R)return this.$L;var D=this.clone(),G=x(R,F,!0);return G&&(D.$L=G),D},O.clone=function(){return k.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},j}(),W=$.prototype;return S.prototype=W,[["$ms",i],["$s",s],["$m",a],["$H",l],["$W",h],["$M",p],["$y",E],["$D",_]].forEach(function(j){W[j[1]]=function(O){return this.$g(O,j[0],j[1])}}),S.extend=function(j,O){return j.$i||(j(O,$,S),j.$i=!0),S},S.locale=x,S.isDayjs=y,S.unix=function(j){return S(1e3*j)},S.en=q[V],S.Ls=q,S.p={},S})})(T1);var oy=T1.exports;const ws=xl(oy),sy=Fs({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:ms([String,Array,Object])},zIndex:{type:ms([String,Number])}}),ay={click:e=>e instanceof MouseEvent},ly="overlay";var cy=Ar({name:"ElOverlay",props:sy,emits:ay,setup(e,{slots:t,emit:r}){const n=bl(ly),o=l=>{r("click",l)},{onClick:i,onMousedown:s,onMouseup:a}=N5(e.customMaskEvent?void 0:o);return()=>e.mask?He("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:s,onMouseup:a},[yn(t,"default")],va.STYLE|va.CLASS|va.PROPS,["onClick","onMouseup","onMousedown"]):Co("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[yn(t,"default")])}});const uy=cy,fy=Fs({center:Boolean,alignCenter:Boolean,closeIcon:{type:x5},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),dy=Fs({...fy,appendToBody:Boolean,beforeClose:{type:ms(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),hy={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[A1]:e=>o5(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},py=(e,t)=>{var r;const o=yr().emit,{nextZIndex:i}=D5();let s="";const a=a0(),l=a0(),h=Ye(!1),d=Ye(!1),p=Ye(!1),g=Ye((r=e.zIndex)!=null?r:i());let E,_;const I=U5("namespace",ba),P=Ue(()=>{const O={},R=`--${I.value}-dialog`;return e.fullscreen||(e.top&&(O[`${R}-margin-top`]=e.top),e.width&&(O[`${R}-width`]=af(e.width))),O}),C=Ue(()=>e.alignCenter?{display:"flex"}:{});function A(){o("opened")}function z(){o("closed"),o(A1,!1),e.destroyOnClose&&(p.value=!1)}function N(){o("close")}function V(){_==null||_(),E==null||E(),e.openDelay&&e.openDelay>0?{stop:E}=Xd(()=>x(),e.openDelay):x()}function q(){E==null||E(),_==null||_(),e.closeDelay&&e.closeDelay>0?{stop:_}=Xd(()=>S(),e.closeDelay):S()}function Y(){function O(R){R||(d.value=!0,h.value=!1)}e.beforeClose?e.beforeClose(O):q()}function y(){e.closeOnClickModal&&Y()}function x(){Rn&&(h.value=!0)}function S(){h.value=!1}function k(){o("openAutoFocus")}function $(){o("closeAutoFocus")}function W(O){var R;((R=O.detail)==null?void 0:R.focusReason)==="pointer"&&O.preventDefault()}e.lockScroll&&O5(h);function j(){e.closeOnPressEscape&&Y()}return Lt(()=>e.modelValue,O=>{O?(d.value=!1,V(),p.value=!0,g.value=n5(e.zIndex)?i():g.value++,cs(()=>{o("open"),t.value&&(t.value.scrollTop=0)})):h.value&&q()}),Lt(()=>e.fullscreen,O=>{t.value&&(O?(s=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=s)}),bi(()=>{e.modelValue&&(h.value=!0,p.value=!0,V())}),{afterEnter:A,afterLeave:z,beforeLeave:N,handleClose:Y,onModalClick:y,close:q,doClose:S,onOpenAutoFocus:k,onCloseAutoFocus:$,onCloseRequested:j,onFocusoutPrevented:W,titleId:a,bodyId:l,closed:d,style:P,overlayDialogStyle:C,rendered:p,visible:h,zIndex:g}},gy=Fs({...dy,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),my=hy,wy=Ar({name:"ElDrawer",components:{ElOverlay:uy,ElFocusTrap:iy,ElIcon:V5,Close:b5},inheritAttrs:!1,props:gy,emits:my,setup(e,{slots:t}){o0({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},Ue(()=>!!t.title)),o0({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},Ue(()=>!!e.customClass));const r=Ye(),n=Ye(),o=bl("drawer"),{t:i}=I5(),s=Ue(()=>e.direction==="rtl"||e.direction==="ltr"),a=Ue(()=>af(e.size));return{...py(e,r),drawerRef:r,focusStartRef:n,isHorizontal:s,drawerSize:a,ns:o,t:i}}}),vy=["aria-label","aria-labelledby","aria-describedby"],by=["id","aria-level"],yy=["aria-label"],_y=["id"];function xy(e,t,r,n,o,i){const s=bn("close"),a=bn("el-icon"),l=bn("el-focus-trap"),h=bn("el-overlay");return Rt(),qu(g2,{to:"body",disabled:!e.appendToBody},[He(Ju,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:ti(()=>[Mw(He(h,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:ti(()=>[He(l,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:ti(()=>[he("div",Zu({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:t[1]||(t[1]=iv(()=>{},["stop"]))}),[he("span",{ref:"focusStartRef",class:ft(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(Rt(),Xt("header",{key:0,class:ft(e.ns.e("header"))},[e.$slots.title?yn(e.$slots,"title",{key:1},()=>[Ri(" DEPRECATED SLOT ")]):yn(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?Ri("v-if",!0):(Rt(),Xt("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:ft(e.ns.e("title"))},Ym(e.title),11,by))]),e.showClose?(Rt(),Xt("button",{key:2,"aria-label":e.t("el.drawer.close"),class:ft(e.ns.e("close-btn")),type:"button",onClick:t[0]||(t[0]=(...d)=>e.handleClose&&e.handleClose(...d))},[He(a,{class:ft(e.ns.e("close"))},{default:ti(()=>[He(s)]),_:1},8,["class"])],10,yy)):Ri("v-if",!0)],2)):Ri("v-if",!0),e.rendered?(Rt(),Xt("div",{key:1,id:e.bodyId,class:ft(e.ns.e("body"))},[yn(e.$slots,"default")],10,_y)):Ri("v-if",!0),e.$slots.footer?(Rt(),Xt("div",{key:2,class:ft(e.ns.e("footer"))},[yn(e.$slots,"footer")],2)):Ri("v-if",!0)],16,vy)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[W2,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var Ay=lf(wy,[["render",xy],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const S1=_1(Ay);function Ey(){throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config")}function Cy({chainId:e}={}){const t=Ey();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function Ty({address:e,account:t,chainId:r,abi:n,args:o,functionName:i,blockNumber:s,blockTag:a}){return Cy({chainId:r}).readContract({abi:n,address:e,account:t,functionName:i,args:o,blockNumber:s,blockTag:a})}const Sy=Symbol(),v0=Object.getPrototypeOf,Xc=new WeakMap,Iy=e=>e&&(Xc.has(e)?Xc.get(e):v0(e)===Object.prototype||v0(e)===Array.prototype),$y=e=>Iy(e)&&e[Sy]||null,b0=(e,t=!0)=>{Xc.set(e,t)},sc=e=>typeof e=="object"&&e!==null,Qn=new WeakMap,zo=new WeakSet,Ry=(e=Object.is,t=(h,d)=>new Proxy(h,d),r=h=>sc(h)&&!zo.has(h)&&(Array.isArray(h)||!(Symbol.iterator in h))&&!(h instanceof WeakMap)&&!(h instanceof WeakSet)&&!(h instanceof Error)&&!(h instanceof Number)&&!(h instanceof Date)&&!(h instanceof String)&&!(h instanceof RegExp)&&!(h instanceof ArrayBuffer),n=h=>{switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:throw h}},o=new WeakMap,i=(h,d,p=n)=>{const g=o.get(h);if((g==null?void 0:g[0])===d)return g[1];const E=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h));return b0(E,!0),o.set(h,[d,E]),Reflect.ownKeys(h).forEach(_=>{if(Object.getOwnPropertyDescriptor(E,_))return;const I=Reflect.get(h,_),P={value:I,enumerable:!0,configurable:!0};if(zo.has(I))b0(I,!1);else if(I instanceof Promise)delete P.value,P.get=()=>p(I);else if(Qn.has(I)){const[C,A]=Qn.get(I);P.value=i(C,A(),p)}Object.defineProperty(E,_,P)}),Object.preventExtensions(E)},s=new WeakMap,a=[1,1],l=h=>{if(!sc(h))throw new Error("object required");const d=s.get(h);if(d)return d;let p=a[0];const g=new Set,E=(x,S=++a[0])=>{p!==S&&(p=S,g.forEach(k=>k(x,S)))};let _=a[1];const I=(x=++a[1])=>(_!==x&&!g.size&&(_=x,C.forEach(([S])=>{const k=S[1](x);k>p&&(p=k)})),p),P=x=>(S,k)=>{const $=[...S];$[1]=[x,...$[1]],E($,k)},C=new Map,A=(x,S)=>{if(g.size){const k=S[3](P(x));C.set(x,[S,k])}else C.set(x,[S])},z=x=>{var S;const k=C.get(x);k&&(C.delete(x),(S=k[1])==null||S.call(k))},N=x=>(g.add(x),g.size===1&&C.forEach(([k,$],W)=>{const j=k[3](P(W));C.set(W,[k,j])}),()=>{g.delete(x),g.size===0&&C.forEach(([k,$],W)=>{$&&($(),C.set(W,[k]))})}),V=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h)),Y=t(V,{deleteProperty(x,S){const k=Reflect.get(x,S);z(S);const $=Reflect.deleteProperty(x,S);return $&&E(["delete",[S],k]),$},set(x,S,k,$){const W=Reflect.has(x,S),j=Reflect.get(x,S,$);if(W&&(e(j,k)||s.has(k)&&e(j,s.get(k))))return!0;z(S),sc(k)&&(k=$y(k)||k);let O=k;if(k instanceof Promise)k.then(R=>{k.status="fulfilled",k.value=R,E(["resolve",[S],R])}).catch(R=>{k.status="rejected",k.reason=R,E(["reject",[S],R])});else{!Qn.has(k)&&r(k)&&(O=l(k));const R=!zo.has(O)&&Qn.get(O);R&&A(S,R)}return Reflect.set(x,S,O,$),E(["set",[S],k,j]),!0}});s.set(h,Y);const y=[V,I,i,N];return Qn.set(Y,y),Reflect.ownKeys(h).forEach(x=>{const S=Object.getOwnPropertyDescriptor(h,x);"value"in S&&(Y[x]=h[x],delete S.value,delete S.writable),Object.defineProperty(V,x,S)}),Y})=>[l,Qn,zo,e,t,r,n,o,i,s,a],[Oy]=Ry();function Ft(e={}){return Oy(e)}function _i(e,t,r){const n=Qn.get(e);let o;const i=[],s=n[3];let a=!1;const h=s(d=>{if(i.push(d),r){t(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&t(i.splice(0))}))});return a=!0,()=>{a=!1,h()}}function Ra(e){return zo.add(e),e}function Mr(e,t,r,n){let o=e[t];return _i(e,()=>{const i=e[t];Object.is(o,i)||r(o=i)},n)}const Vo={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},Ie={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const e=navigator.userAgent.toLowerCase();return Ie.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return Ie.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=Vo.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=Vo.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+Vo.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let r;return(...n)=>{function o(){e(...n)}r&&clearTimeout(r),r=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(Ie.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(e,t){if(!Ie.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise((r,n)=>{const o=new Image;o.onload=r,o.onerror=n,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,Ie.wait(2e3)])},formatBalance(e,t){var n;let r;if(e==="0")r="0.000";else if(typeof e=="string"){const o=Number(e);o&&(r=(n=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return r?`${r} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return Vo.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return Ie.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return Ie.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return Ie.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}},at=Ft({isConnected:!1}),ot={state:at,subscribe(e){return _i(at,()=>e(at))},subscribeKey(e,t){return Mr(at,e,t)},setIsConnected(e){at.isConnected=e},setCaipAddress(e){at.caipAddress=e,at.address=e?Ie.getPlainAddress(e):void 0},setBalance(e,t){at.balance=e,at.balanceSymbol=t},setProfileName(e){at.profileName=e},setProfileImage(e){at.profileImage=e},setAddressExplorerUrl(e){at.addressExplorerUrl=e},resetAccount(){at.isConnected=!1,at.caipAddress=void 0,at.address=void 0,at.balance=void 0,at.balanceSymbol=void 0,at.profileName=void 0,at.profileImage=void 0,at.addressExplorerUrl=void 0}};class ff{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:t})).json()}async getBlob({headers:t,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:t})).blob()}async post({body:t,headers:r,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"POST",headers:r,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:r,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"PUT",headers:r,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:r,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"DELETE",headers:r,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:r}){const n=new URL(t,this.baseUrl);return r&&Object.entries(r).forEach(([o,i])=>{i&&n.searchParams.append(o,i)}),n}}const ac="WALLETCONNECT_DEEPLINK_CHOICE",y0="@w3m/recent",_0="@w3m/connected_wallet_image_url",lr={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(ac,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(ac);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(ac)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=lr.getRecentWallets();t.find(n=>n.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(y0,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(y0);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(_0,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(_0)}catch{console.info("Unable to set Connected Wallet Image Url")}}},ln=Ft({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Cn={state:ln,subscribeNetworkImages(e){return _i(ln.networkImages,()=>e(ln.networkImages))},subscribeKey(e,t){return Mr(ln,e,t)},setWalletImage(e,t){ln.walletImages[e]=t},setNetworkImage(e,t){ln.networkImages[e]=t},setConnectorImage(e,t){ln.connectorImages[e]=t},setTokenImage(e,t){ln.tokenImages[e]=t}},Bo=Ft({connectors:[]}),Kr={state:Bo,subscribeKey(e,t){return Mr(Bo,e,t)},setConnectors(e){Bo.connectors=e.map(t=>Ra(t))},addConnector(e){Bo.connectors.push(Ra(e))},getConnectors(){return Bo.connectors}},Do=Ft({open:!1,selectedNetworkId:void 0}),Oa={state:Do,subscribe(e){return _i(Do,()=>e(Do))},set(e){Object.assign(Do,{...Do,...e})}},It=Ft({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Ct={state:It,subscribeKey(e,t){return Mr(It,e,t)},_getClient(){if(!It._client)throw new Error("NetworkController client not set");return It._client},setClient(e){It._client=Ra(e)},setCaipNetwork(e){It.caipNetwork=e,Oa.set({selectedNetworkId:e==null?void 0:e.id})},setDefaultCaipNetwork(e){It.caipNetwork=e,Oa.set({selectedNetworkId:e==null?void 0:e.id}),It.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){It.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();It.supportsAllNetworks=e.supportsAllNetworks,It.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),It.caipNetwork=e},resetNetwork(){It.isDefaultCaipNetwork||(It.caipNetwork=void 0),It.approvedCaipNetworkIds=void 0,It.supportsAllNetworks=!0}},Qt=Ft({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),ut={state:Qt,subscribeKey(e,t){return Mr(Qt,e,t)},setProjectId(e){Qt.projectId=e},setIncludeWalletIds(e){Qt.includeWalletIds=e},setExcludeWalletIds(e){Qt.excludeWalletIds=e},setFeaturedWalletIds(e){Qt.featuredWalletIds=e},setTokens(e){Qt.tokens=e},setTermsConditionsUrl(e){Qt.termsConditionsUrl=e},setPrivacyPolicyUrl(e){Qt.privacyPolicyUrl=e},setCustomWallets(e){Qt.customWallets=e},setEnableAnalytics(e){Qt.enableAnalytics=e},setSdkVersion(e){Qt.sdkVersion=e},setMetadata(e){Qt.metadata=e}},Ny=Ie.getApiUrl(),Tr=new ff({baseUrl:Ny}),Ly="40",x0="4",kt=Ft({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),We={state:kt,subscribeKey(e,t){return Mr(kt,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=ut.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){const t=`${Tr.baseUrl}/getWalletImage/${e}`,r=await Tr.getBlob({path:t,headers:We._getApiHeaders()});Cn.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${Tr.baseUrl}/public/getAssetImage/${e}`,r=await Tr.getBlob({path:t,headers:We._getApiHeaders()});Cn.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${Tr.baseUrl}/public/getAssetImage/${e}`,r=await Tr.getBlob({path:t,headers:We._getApiHeaders()});Cn.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=Ct.state,t=e==null?void 0:e.map(({imageId:r})=>r).filter(Boolean);t&&await Promise.allSettled(t.map(r=>We._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:e}=Kr.state,t=e.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(t.map(r=>We._fetchConnectorImage(r)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=ut.state;if(e!=null&&e.length){const{data:t}=await Tr.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):x0,include:e==null?void 0:e.join(",")}});t.sort((n,o)=>e.indexOf(n.id)-e.indexOf(o.id));const r=t.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(r.map(n=>We._fetchWalletImage(n))),kt.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=ut.state,n=[...t??[],...r??[]].filter(Boolean),{data:o,count:i}=await Tr.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:x0,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),s=lr.getRecentWallets(),a=o.map(h=>h.image_id).filter(Boolean),l=s.map(h=>h.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(h=>We._fetchWalletImage(h))),kt.recommended=o,kt.count=i??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=ut.state,o=[...kt.recommended.map(({id:l})=>l),...r??[],...n??[]].filter(Boolean),{data:i,count:s}=await Tr.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:String(e),entries:Ly,include:t==null?void 0:t.join(","),exclude:o.join(",")}}),a=i.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>We._fetchWalletImage(l)),Ie.wait(300)]),kt.wallets=[...kt.wallets,...i],kt.count=s>kt.count?s:kt.count,kt.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:r}=ut.state;kt.search=[];const{data:n}=await Tr.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t==null?void 0:t.join(","),exclude:r==null?void 0:r.join(",")}}),o=n.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>We._fetchWalletImage(i)),Ie.wait(300)]),kt.search=n},prefetch(){kt.prefetchPromise=Promise.race([Promise.allSettled([We.fetchFeaturedWallets(),We.fetchRecommendedWallets(),We.fetchNetworkImages(),We.fetchConnectorImages()]),Ie.wait(3e3)])}},ky=Ie.getAnalyticsUrl(),Py=new ff({baseUrl:ky}),My=["MODAL_CREATED"],Li=Ft({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Je={state:Li,subscribe(e){return _i(Li,()=>e(Li))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:r}=ut.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(My.includes(e.data.event)||typeof window>"u")return;await Py.post({path:"/e",headers:Je._getApiHeaders(),body:{eventId:Ie.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){Li.timestamp=Date.now(),Li.data=e,ut.state.enableAnalytics&&Je._sendAnalyticsEvent(Li)}},Et=Ft({view:"Connect",history:["Connect"]}),De={state:Et,subscribeKey(e,t){return Mr(Et,e,t)},push(e,t){e!==Et.view&&(Et.view=e,Et.history.push(e),Et.data=t)},reset(e){Et.view=e,Et.history=[e]},replace(e){Et.history.length>1&&Et.history.at(-1)!==e&&(Et.view=e,Et.history[Et.history.length-1]=e)},goBack(){if(Et.history.length>1){Et.history.pop();const[e]=Et.history.slice(-1);e&&(Et.view=e)}}},aa=Ft({open:!1}),Nt={state:aa,subscribeKey(e,t){return Mr(aa,e,t)},async open(e){await We.state.prefetchPromise,e!=null&&e.view?De.reset(e.view):ot.state.isConnected?De.reset("Account"):De.reset("Connect"),aa.open=!0,Oa.set({open:!0}),Je.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){aa.open=!1,Oa.set({open:!1}),Je.sendEvent({type:"track",event:"MODAL_CLOSE"})}},By=Ie.getBlockchainApiUrl(),A0=new ff({baseUrl:By}),Dy={fetchIdentity({caipChainId:e,address:t}){return A0.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:ut.state.projectId}})},fetchTransactions({account:e,projectId:t,cursor:r}){const n=r?{cursor:r}:{};return A0.get({path:`/v1/account/${e}/history?projectId=${t}`,params:n})}},Wr=Ft({message:"",variant:"success",open:!1}),cr={state:Wr,subscribeKey(e,t){return Mr(Wr,e,t)},showSuccess(e){Wr.message=e,Wr.variant="success",Wr.open=!0},showError(e){Wr.message=e,Wr.variant="error",Wr.open=!0},hide(){Wr.open=!1}},lt=Ft({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),mr={state:lt,subscribe(e){return _i(lt,()=>e(lt))},async fetchTransactions(e){const{projectId:t}=ut.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");lt.loading=!0;try{const r=await Dy.fetchTransactions({account:e,projectId:t,cursor:lt.next}),n=this.filterSpamTransactions(r.data),o=[...lt.transactions,...n];lt.loading=!1,lt.transactions=o,lt.transactionsByYear=this.groupTransactionsByYear(lt.transactionsByYear,n),lt.empty=o.length===0,lt.next=r.next?r.next:void 0}catch{Je.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:lt.next}}),cr.showError("Failed to fetch transactions"),lt.loading=!1,lt.empty=!0}},groupTransactionsByYear(e={},t=[]){const r=e;return t.forEach(n=>{var i;const o=new Date(n.metadata.minedAt).getFullYear();r[o]||(r[o]=[]),(i=r[o])==null||i.push(n)}),r},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(n=>{var o;return((o=n.nft_info)==null?void 0:o.flags.is_spam)===!0}))},resetTransactions(){lt.transactions=[],lt.transactionsByYear={},lt.loading=!1,lt.empty=!1,lt.next=void 0}},yt=Ft({wcError:!1,buffering:!1}),qe={state:yt,subscribeKey(e,t){return Mr(yt,e,t)},_getClient(){if(!yt._client)throw new Error("ConnectionController client not set");return yt._client},setClient(e){yt._client=Ra(e)},connectWalletConnect(){yt.wcPromise=this._getClient().connectWalletConnect(e=>{yt.wcUri=e,yt.wcPairingExpiry=Ie.getPairingExpiry()})},async connectExternal(e){var t,r;await((r=(t=this._getClient()).connectExternal)==null?void 0:r.call(t,e))},checkInstalled(e){var t,r;return(r=(t=this._getClient()).checkInstalled)==null?void 0:r.call(t,e)},resetWcConnection(){yt.wcUri=void 0,yt.wcPairingExpiry=void 0,yt.wcPromise=void 0,yt.wcLinking=void 0,yt.recentWallet=void 0,mr.resetTransactions(),lr.deleteWalletConnectDeepLink()},setWcLinking(e){yt.wcLinking=e},setWcError(e){yt.wcError=e,yt.buffering=!1},setRecentWallet(e){yt.recentWallet=e},setBuffering(e){yt.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}};Ft({status:"uninitialized"});const ki=Ft({themeMode:"dark",themeVariables:{}}),df={state:ki,subscribe(e){return _i(ki,()=>e(ki))},setThemeMode(e){ki.themeMode=e},setThemeVariables(e){ki.themeVariables={...ki.themeVariables,...e}}},ct={getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return Cn.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageUrl)return e==null?void 0:e.imageUrl;if(e!=null&&e.imageId)return Cn.state.networkImages[e.imageId]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return Cn.state.connectorImages[e.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya=globalThis,hf=ya.ShadowRoot&&(ya.ShadyCSS===void 0||ya.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pf=Symbol(),E0=new WeakMap;let I1=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==pf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(hf&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=E0.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&E0.set(r,t))}return t}toString(){return this.cssText}};const Ir=e=>new I1(typeof e=="string"?e:e+"",void 0,pf),$e=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new I1(r,e,pf)},Fy=(e,t)=>{if(hf)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=ya.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},C0=hf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Ir(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Uy,defineProperty:Wy,getOwnPropertyDescriptor:jy,getOwnPropertyNames:Hy,getOwnPropertySymbols:zy,getPrototypeOf:Vy}=Object,Tn=globalThis,T0=Tn.trustedTypes,Gy=T0?T0.emptyScript:"",lc=Tn.reactiveElementPolyfillSupport,Xo=(e,t)=>e,Na={toAttribute(e,t){switch(t){case Boolean:e=e?Gy:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},gf=(e,t)=>!Uy(e,t),S0={attribute:!0,type:String,converter:Na,reflect:!1,hasChanged:gf};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tn.litPropertyMetadata??(Tn.litPropertyMetadata=new WeakMap);let Fi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=S0){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Wy(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=jy(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S0}static _$Ei(){if(this.hasOwnProperty(Xo("elementProperties")))return;const t=Vy(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xo("properties"))){const r=this.properties,n=[...Hy(r),...zy(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(C0(o))}else t!==void 0&&r.push(C0(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fy(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Na).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Na;this._$Em=o,this[o]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??gf)(o?i:this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}};Fi.elementStyles=[],Fi.shadowRootOptions={mode:"open"},Fi[Xo("elementProperties")]=new Map,Fi[Xo("finalized")]=new Map,lc==null||lc({ReactiveElement:Fi}),(Tn.reactiveElementVersions??(Tn.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=globalThis,La=es.trustedTypes,I0=La?La.createPolicy("lit-html",{createHTML:e=>e}):void 0,$1="$lit$",wn=`lit$${(Math.random()+"").slice(9)}$`,R1="?"+wn,Ky=`<${R1}>`,fi=document,vs=()=>fi.createComment(""),bs=e=>e===null||typeof e!="object"&&typeof e!="function",O1=Array.isArray,qy=e=>O1(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",cc=`[ 	
\f\r]`,Fo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$0=/-->/g,R0=/>/g,qn=RegExp(`>|${cc}(?:([^\\s"'>=/]+)(${cc}*=${cc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),O0=/'/g,N0=/"/g,N1=/^(?:script|style|textarea|title)$/i,L1=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ce=L1(1),be=L1(2),di=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),L0=new WeakMap,ni=fi.createTreeWalker(fi,129);function k1(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return I0!==void 0?I0.createHTML(t):t}const Yy=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=Fo;for(let a=0;a<r;a++){const l=e[a];let h,d,p=-1,g=0;for(;g<l.length&&(s.lastIndex=g,d=s.exec(l),d!==null);)g=s.lastIndex,s===Fo?d[1]==="!--"?s=$0:d[1]!==void 0?s=R0:d[2]!==void 0?(N1.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=qn):d[3]!==void 0&&(s=qn):s===qn?d[0]===">"?(s=o??Fo,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?qn:d[3]==='"'?N0:O0):s===N0||s===O0?s=qn:s===$0||s===R0?s=Fo:(s=qn,o=void 0);const E=s===qn&&e[a+1].startsWith("/>")?" ":"";i+=s===Fo?l+Ky:p>=0?(n.push(h),l.slice(0,p)+$1+l.slice(p)+wn+E):l+wn+(p===-2?a:E)}return[k1(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};let eu=class P1{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[h,d]=Yy(t,r);if(this.el=P1.createElement(h,n),ni.currentNode=this.el.content,r===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ni.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith($1)){const g=d[s++],E=o.getAttribute(p).split(wn),_=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:_[2],strings:E,ctor:_[1]==="."?Qy:_[1]==="?"?Jy:_[1]==="@"?Xy:Al}),o.removeAttribute(p)}else p.startsWith(wn)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(N1.test(o.tagName)){const p=o.textContent.split(wn),g=p.length-1;if(g>0){o.textContent=La?La.emptyScript:"";for(let E=0;E<g;E++)o.append(p[E],vs()),ni.nextNode(),l.push({type:2,index:++i});o.append(p[g],vs())}}}else if(o.nodeType===8)if(o.data===R1)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(wn,p+1))!==-1;)l.push({type:7,index:i}),p+=wn.length-1}i++}}static createElement(t,r){const n=fi.createElement("template");return n.innerHTML=t,n}};function to(e,t,r=e,n){var s,a;if(t===di)return t;let o=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const i=bs(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=to(e,o._$AS(e,t.values),o,n)),t}let Zy=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??fi).importNode(r,!0);ni.currentNode=o;let i=ni.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new mf(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new e4(i,this,t)),this._$AV.push(h),l=n[++a]}s!==(l==null?void 0:l.index)&&(i=ni.nextNode(),s++)}return ni.currentNode=fi,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},mf=class M1{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=to(this,t,r),bs(t)?t===st||t==null||t===""?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==di&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qy(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==st&&bs(this._$AH)?this._$AA.nextSibling.data=t:this.$(fi.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=eu.createElement(k1(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const s=new Zy(o,this),a=s.u(this.options);s.p(r),this.$(a),this._$AH=s}}_$AC(t){let r=L0.get(t.strings);return r===void 0&&L0.set(t.strings,r=new eu(t)),r}T(t){O1(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new M1(this.k(vs()),this.k(vs()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}},Al=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=st,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=st}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=to(this,t,r,0),s=!bs(t)||t!==this._$AH&&t!==di,s&&(this._$AH=t);else{const a=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=to(this,a[n+l],r,l),h===di&&(h=this._$AH[l]),s||(s=!bs(h)||h!==this._$AH[l]),h===st?t=st:t!==st&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}s&&!o&&this.O(t)}O(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qy=class extends Al{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===st?void 0:t}},Jy=class extends Al{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==st)}},Xy=class extends Al{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=to(this,t,r,0)??st)===di)return;const n=this._$AH,o=t===st&&n!==st||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==st&&(n===st||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}},e4=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){to(this,t)}};const uc=es.litHtmlPolyfillSupport;uc==null||uc(eu,mf),(es.litHtmlVersions??(es.litHtmlVersions=[])).push("3.1.0");const t4=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new mf(t.insertBefore(vs(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Re=class extends Fi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=t4(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return di}};var Yh;Re._$litElement$=!0,Re.finalized=!0,(Yh=globalThis.litElementHydrateSupport)==null||Yh.call(globalThis,{LitElement:Re});const fc=globalThis.litElementPolyfillSupport;fc==null||fc({LitElement:Re});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let dc,qi,Yi;function r4(e,t){dc=document.createElement("style"),qi=document.createElement("style"),Yi=document.createElement("style"),dc.textContent=hc(e).core.cssText,qi.textContent=hc(e).dark.cssText,Yi.textContent=hc(e).light.cssText,document.head.appendChild(dc),document.head.appendChild(qi),document.head.appendChild(Yi),n4(t)}function n4(e){qi&&Yi&&(e==="light"?(qi.removeAttribute("media"),Yi.media="enabled"):(Yi.removeAttribute("media"),qi.media="enabled"))}function hc(e){return{core:$e`
      :root {
        --w3m-color-mix-strength: ${Ir(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Ir((e==null?void 0:e["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Ir((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Ir((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Ir((e==null?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:$e`
      :root {
        --w3m-color-mix: ${Ir((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Ir((e==null?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:$e`
      :root {
        --w3m-color-mix: ${Ir((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Ir((e==null?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const Pe=$e`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,vt=$e`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,wf=$e`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function i4(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(o){customElements.get(e)||customElements.define(e,o)}}}function o4(e,t){return customElements.get(e)||customElements.define(e,t),t}function me(e){return function(r){return typeof r=="function"?o4(e,r):i4(e,r)}}const s4=$e`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var a4=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let tu=class extends Re{render(){return ce`<slot></slot>`}};tu.styles=[Pe,s4];tu=a4([me("wui-card")],tu);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l4={attribute:!0,type:String,converter:Na,reflect:!1,hasChanged:gf},c4=(e=l4,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function Z(e){return(t,r)=>typeof r=="object"?c4(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vf(e){return Z({...e,state:!0,attribute:!1})}const u4=$e`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,f4=be`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,d4=be`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,h4=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,p4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,g4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,m4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,w4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,v4=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,b4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,y4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,_4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,x4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,A4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,E4=be`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,C4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,T4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,S4=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,I4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,$4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,R4=be` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,O4=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,N4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,L4=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,k4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,P4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,M4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,B4=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,D4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,F4=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,U4=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,W4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,j4=be`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,H4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,z4=be`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,V4=be`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,G4=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,K4=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,q4=be` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,Y4=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,Z4=be`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,Q4=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,J4=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,X4=be`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,e6=be`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,t6=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,r6=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,n6=be`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,i6=be`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,o6=be`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,s6=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,a6=be`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,l6=be`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var El=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const c6={allWallets:f4,appStore:d4,chromeStore:E4,apple:h4,arrowBottom:p4,arrowLeft:g4,arrowRight:m4,arrowTop:w4,browser:v4,checkmark:b4,chevronBottom:y4,chevronLeft:_4,chevronRight:x4,chevronTop:A4,clock:C4,close:T4,compass:I4,coinPlaceholder:S4,copy:$4,cursor:R4,desktop:O4,disconnect:N4,discord:L4,etherscan:k4,extension:P4,externalLink:M4,facebook:B4,filters:D4,github:F4,google:U4,helpCircle:W4,infoCircle:j4,mail:H4,mobile:z4,networkPlaceholder:V4,nftPlaceholder:G4,off:K4,playStore:q4,qrCode:Y4,refresh:Z4,search:Q4,swapHorizontal:J4,swapHorizontalBold:X4,swapVertical:e6,telegram:t6,twitch:r6,twitter:n6,twitterIcon:i6,wallet:s6,walletConnect:a6,walletPlaceholder:o6,warningCircle:l6};let ro=class extends Re{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,ce`${c6[this.name]}`}};ro.styles=[Pe,wf,u4];El([Z()],ro.prototype,"size",void 0);El([Z()],ro.prototype,"name",void 0);El([Z()],ro.prototype,"color",void 0);ro=El([me("wui-icon")],ro);const u6=$e`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var bf=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ys=class extends Re{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return ce`<img src=${this.src} alt=${this.alt} />`}};ys.styles=[Pe,wf,u6];bf([Z()],ys.prototype,"src",void 0);bf([Z()],ys.prototype,"alt",void 0);ys=bf([me("wui-image")],ys);const f6=$e`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var d6=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ru=class extends Re{render(){return ce`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};ru.styles=[Pe,f6];ru=d6([me("wui-loading-hexagon")],ru);const h6=$e`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var yf=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let _s=class extends Re{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,ce`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};_s.styles=[Pe,h6];yf([Z()],_s.prototype,"color",void 0);yf([Z()],_s.prototype,"size",void 0);_s=yf([me("wui-loading-spinner")],_s);const p6=$e`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var B1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ka=class extends Re{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,n=36-t,o=116+n,i=245+n,s=360+n*1.75;return ce`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};ka.styles=[Pe,p6];B1([Z({type:Number})],ka.prototype,"radius",void 0);ka=B1([me("wui-loading-thumbnail")],ka);const g6=$e`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Cl=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let no=class extends Re{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,ce`<slot></slot>`}};no.styles=[g6];Cl([Z()],no.prototype,"width",void 0);Cl([Z()],no.prototype,"height",void 0);Cl([Z()],no.prototype,"borderRadius",void 0);no=Cl([me("wui-shimmer")],no);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},F1=e=>(...t)=>({_$litDirective$:e,values:t});let U1=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m6=F1(class extends U1{constructor(e){var t;if(super(e),e.type!==D1.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.st)!=null&&n.has(i))&&this.it.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const s=!!t[i];s===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(s?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return di}}),w6=$e`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Tl=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let io=class extends Re{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,ce`<slot class=${m6(t)}></slot>`}};io.styles=[Pe,w6];Tl([Z()],io.prototype,"variant",void 0);Tl([Z()],io.prototype,"color",void 0);Tl([Z()],io.prototype,"align",void 0);io=Tl([me("wui-text")],io);const v6=be`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,b6=be`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,y6=be`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,_6=be`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,x6=be`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,A6=be`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,E6=be`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,C6=be`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,T6=be`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,S6=be`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,I6=be`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,$6=be`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,R6=be`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,O6=$e`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var W1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const N6={browser:v6,dao:b6,defi:y6,defiAlt:_6,eth:x6,layers:A6,lock:E6,login:C6,network:T6,nft:S6,noun:I6,profile:$6,system:R6};let Pa=class extends Re{constructor(){super(...arguments),this.name="browser"}render(){return ce`${N6[this.name]}`}};Pa.styles=[Pe,O6];W1([Z()],Pa.prototype,"name",void 0);Pa=W1([me("wui-visual")],Pa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=e=>e??st,Qe={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString({string:e,charsStart:t,charsEnd:r,truncate:n}){return e.length<=t+r?e:n==="end"?`${e.substring(0,t)}...`:n==="start"?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`},generateAvatarColors(e){const r=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(r),o=[];for(let i=0;i<5;i+=1){const s=this.tintColor(n,.15*i);o.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
   `},hexToRgb(e){const t=parseInt(e,16),r=t>>16&255,n=t>>8&255,o=t&255;return[r,n,o]},tintColor(e,t){const[r,n,o]=e,i=Math.round(r+(255-r)*t),s=Math.round(n+(255-n)*t),a=Math.round(o+(255-o)*t);return[i,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},L6=$e`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var er=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Dt=class extends Re{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Qe.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Qe.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Qe.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Qe.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Qe.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Qe.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Qe.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Qe.getSpacingStyles(this.margin,3)};
    `,ce`<slot></slot>`}};Dt.styles=[Pe,L6];er([Z()],Dt.prototype,"flexDirection",void 0);er([Z()],Dt.prototype,"flexWrap",void 0);er([Z()],Dt.prototype,"flexBasis",void 0);er([Z()],Dt.prototype,"flexGrow",void 0);er([Z()],Dt.prototype,"flexShrink",void 0);er([Z()],Dt.prototype,"alignItems",void 0);er([Z()],Dt.prototype,"justifyContent",void 0);er([Z()],Dt.prototype,"columnGap",void 0);er([Z()],Dt.prototype,"rowGap",void 0);er([Z()],Dt.prototype,"gap",void 0);er([Z()],Dt.prototype,"padding",void 0);er([Z()],Dt.prototype,"margin",void 0);Dt=er([me("wui-flex")],Dt);const k6=$e`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Sl=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let oo=class extends Re{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return ce`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",ce`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=Qe.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};oo.styles=[Pe,k6];Sl([Z()],oo.prototype,"imageSrc",void 0);Sl([Z()],oo.prototype,"alt",void 0);Sl([Z()],oo.prototype,"address",void 0);oo=Sl([me("wui-avatar")],oo);const P6=$e`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var en=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let xr=class extends Re{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,r=this.size==="lg",n=r?"12%":"16%",o=r?"xxs":"3xl",i=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${a||i?"100%":n};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,ce` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};xr.styles=[Pe,vt,P6];en([Z()],xr.prototype,"size",void 0);en([Z()],xr.prototype,"backgroundColor",void 0);en([Z()],xr.prototype,"iconColor",void 0);en([Z()],xr.prototype,"iconSize",void 0);en([Z()],xr.prototype,"background",void 0);en([Z({type:Boolean})],xr.prototype,"border",void 0);en([Z()],xr.prototype,"borderColor",void 0);en([Z()],xr.prototype,"icon",void 0);xr=en([me("wui-icon-box")],xr);const M6=$e`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var xi=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Yr=class extends Re{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return ce`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${li(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Qe.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?ce`<wui-image src=${this.networkSrc}></wui-image>`:ce`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return ce`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Yr.styles=[Pe,vt,M6];xi([Z()],Yr.prototype,"networkSrc",void 0);xi([Z()],Yr.prototype,"avatarSrc",void 0);xi([Z()],Yr.prototype,"balance",void 0);xi([Z({type:Boolean})],Yr.prototype,"disabled",void 0);xi([Z({type:Boolean})],Yr.prototype,"isProfileName",void 0);xi([Z()],Yr.prototype,"address",void 0);Yr=xi([me("wui-account-button")],Yr);const B6=$e`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var Us=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let hi=class extends Re{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),ce` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?ce`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:ce`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};hi.styles=[Pe,B6];Us([Z()],hi.prototype,"size",void 0);Us([Z()],hi.prototype,"name",void 0);Us([Z()],hi.prototype,"imageSrc",void 0);Us([Z()],hi.prototype,"walletIcon",void 0);hi=Us([me("wui-wallet-image")],hi);const D6=$e`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var j1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const pc=4;let Ma=class extends Re{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<pc;return ce`${this.walletImages.slice(0,pc).map(({src:r,walletName:n})=>ce`
          <wui-wallet-image
            size="inherit"
            imageSrc=${r}
            name=${li(n)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(pc-this.walletImages.length)].map(()=>ce` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};Ma.styles=[Pe,D6];j1([Z({type:Array})],Ma.prototype,"walletImages",void 0);Ma=j1([me("wui-all-wallets-image")],Ma);const F6=$e`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var So=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let On=class extends Re{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const t=this.size==="md"?"paragraph-600":"small-600";return ce`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?ce`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ce``}};On.styles=[Pe,vt,F6];So([Z()],On.prototype,"size",void 0);So([Z({type:Boolean})],On.prototype,"disabled",void 0);So([Z({type:Boolean})],On.prototype,"fullWidth",void 0);So([Z({type:Boolean})],On.prototype,"loading",void 0);So([Z()],On.prototype,"variant",void 0);On=So([me("wui-button")],On);const H1=be`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,U6=$e`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var z1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ba=class extends Re{constructor(){super(...arguments),this.type="wallet"}render(){return ce`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?ce` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${H1}`:ce`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ba.styles=[Pe,vt,U6];z1([Z()],Ba.prototype,"type",void 0);Ba=z1([me("wui-card-select-loader")],Ba);const W6=be`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,j6=$e`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Ws=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let pi=class extends Re{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,ce`${this.templateVisual()} ${t?W6:H1}`}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:ce`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};pi.styles=[Pe,j6];Ws([Z()],pi.prototype,"size",void 0);Ws([Z()],pi.prototype,"name",void 0);Ws([Z()],pi.prototype,"imageSrc",void 0);Ws([Z({type:Boolean})],pi.prototype,"selected",void 0);pi=Ws([me("wui-network-image")],pi);const H6=$e`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Io=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Nn=class extends Re{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return ce`
      <button data-selected=${li(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?ce`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${li(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:ce`
      <wui-wallet-image size="md" imageSrc=${li(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Nn.styles=[Pe,vt,H6];Io([Z()],Nn.prototype,"name",void 0);Io([Z()],Nn.prototype,"type",void 0);Io([Z()],Nn.prototype,"imageSrc",void 0);Io([Z({type:Boolean})],Nn.prototype,"disabled",void 0);Io([Z({type:Boolean})],Nn.prototype,"selected",void 0);Nn=Io([me("wui-card-select")],Nn);const z6=$e`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var $o=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ln=class extends Re{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t=this.variant==="transparent"?"small-600":"paragraph-600";return ce`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${Qe.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?ce`<wui-image src=${this.imageSrc}></wui-image>`:null}};Ln.styles=[Pe,vt,z6];$o([Z()],Ln.prototype,"variant",void 0);$o([Z()],Ln.prototype,"imageSrc",void 0);$o([Z({type:Boolean})],Ln.prototype,"disabled",void 0);$o([Z()],Ln.prototype,"icon",void 0);$o([Z()],Ln.prototype,"href",void 0);Ln=$o([me("wui-chip")],Ln);const V6=$e`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var _f=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let xs=class extends Re{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return ce`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?ce`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};xs.styles=[Pe,vt,V6];_f([Z()],xs.prototype,"size",void 0);_f([Z({type:Boolean})],xs.prototype,"loading",void 0);xs=_f([me("wui-connect-button")],xs);const G6=$e`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Il=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let so=class extends Re{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return ce`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};so.styles=[Pe,vt,G6];Il([Z({type:Boolean})],so.prototype,"disabled",void 0);Il([Z()],so.prototype,"label",void 0);Il([Z()],so.prototype,"buttonLabel",void 0);so=Il([me("wui-cta-button")],so);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K6=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts=(e,t)=>{var n;const r=e._$AN;if(r===void 0)return!1;for(const o of r)(n=o._$AO)==null||n.call(o,t,!1),ts(o,t);return!0},Da=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},V1=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Z6(t)}};function q6(e){this._$AN!==void 0?(Da(this),this._$AM=e,V1(this)):this._$AM=e}function Y6(e,t=!1,r=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=r;i<n.length;i++)ts(n[i],!1),Da(n[i]);else n!=null&&(ts(n,!1),Da(n));else ts(this,e)}const Z6=e=>{e.type==D1.CHILD&&(e._$AP??(e._$AP=Y6),e._$AQ??(e._$AQ=q6))};let Q6=class extends U1{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),V1(this),this.isConnected=t._$AU}_$AO(t,r=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),r&&(ts(this,t),Da(this))}setValue(t){if(K6(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G1=()=>new J6;let J6=class{};const gc=new WeakMap,K1=F1(class extends Q6{render(e){return st}update(e,[t]){var n;const r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=(n=e.options)==null?void 0:n.host,this.ot(this.lt=e.element)),st}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let r=gc.get(t);r===void 0&&(r=new WeakMap,gc.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=gc.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),X6=$e`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Ai=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Zr=class extends Re{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=G1()}render(){const t=`wui-size-${this.size}`;return ce` ${this.templateIcon()}
      <input
        ${K1(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${li(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?ce`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Zr.styles=[Pe,vt,X6];Ai([Z()],Zr.prototype,"size",void 0);Ai([Z()],Zr.prototype,"icon",void 0);Ai([Z({type:Boolean})],Zr.prototype,"disabled",void 0);Ai([Z()],Zr.prototype,"placeholder",void 0);Ai([Z()],Zr.prototype,"type",void 0);Ai([Z()],Zr.prototype,"keyHint",void 0);Zr=Ai([me("wui-input-text")],Zr);const e_=$e`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var q1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Fa=class extends Re{render(){return ce`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?ce`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Fa.styles=[Pe,e_];q1([Z()],Fa.prototype,"errorMessage",void 0);Fa=q1([me("wui-email-input")],Fa);const t_=$e`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var js=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let gi=class extends Re{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};gi.styles=[Pe,vt,wf,t_];js([Z()],gi.prototype,"size",void 0);js([Z({type:Boolean})],gi.prototype,"disabled",void 0);js([Z()],gi.prototype,"icon",void 0);js([Z()],gi.prototype,"iconColor",void 0);gi=js([me("wui-icon-link")],gi);const r_=$e`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Y1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ua=class extends Re{constructor(){super(...arguments),this.icon="copy"}render(){return ce`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ua.styles=[Pe,vt,r_];Y1([Z()],Ua.prototype,"icon",void 0);Ua=Y1([me("wui-input-element")],Ua);const n_=$e`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var Z1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Wa=class extends Re{constructor(){super(...arguments),this.disabled=!1}render(){return ce`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};Wa.styles=[Pe,vt,n_];Z1([Z({type:Boolean})],Wa.prototype,"disabled",void 0);Wa=Z1([me("wui-input-numeric")],Wa);const i_=$e`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var xf=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let As=class extends Re{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};As.styles=[Pe,vt,i_];xf([Z({type:Boolean})],As.prototype,"disabled",void 0);xf([Z()],As.prototype,"color",void 0);As=xf([me("wui-link")],As);const o_=$e`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Br=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let dr=class extends Re{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return ce`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${li(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return ce`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return ce`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",r=this.iconVariant==="square-blue"?"mdl":"md",n=this.iconSize?this.iconSize:r;return ce`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${r}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?ce`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ce``}chevronTemplate(){return this.chevron?ce`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};dr.styles=[Pe,vt,o_];Br([Z()],dr.prototype,"icon",void 0);Br([Z()],dr.prototype,"iconSize",void 0);Br([Z()],dr.prototype,"variant",void 0);Br([Z()],dr.prototype,"iconVariant",void 0);Br([Z({type:Boolean})],dr.prototype,"disabled",void 0);Br([Z()],dr.prototype,"imageSrc",void 0);Br([Z()],dr.prototype,"alt",void 0);Br([Z({type:Boolean})],dr.prototype,"chevron",void 0);Br([Z({type:Boolean})],dr.prototype,"loading",void 0);dr=Br([me("wui-list-item")],dr);var nu;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(nu||(nu={}));const s_=$e`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Ei=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Qr=class extends Re{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,r]=this.images,n=(t==null?void 0:t.type)==="NFT",o=r!=null&&r.url?r.type==="NFT":n,i=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `,ce`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,r]=this.images,n=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||r!=null&&r.url)?ce`<div class="swap-images-container">
        ${t!=null&&t.url?ce`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${r!=null&&r.url?ce`<wui-image src=${r.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?ce`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:n==="NFT"?ce`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:ce`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",r;return r=this.getIcon(),this.status&&(t=this.getStatusColor()),r?ce`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Qr.styles=[s_];Ei([Z()],Qr.prototype,"type",void 0);Ei([Z()],Qr.prototype,"status",void 0);Ei([Z()],Qr.prototype,"direction",void 0);Ei([Z()],Qr.prototype,"onlyDirectionIcon",void 0);Ei([Z()],Qr.prototype,"images",void 0);Ei([Z()],Qr.prototype,"secondImage",void 0);Qr=Ei([me("wui-transaction-visual")],Qr);const a_=$e`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Bn=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Nr=class extends Re{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return ce`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${nu[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var r;const t=(r=this.descriptions)==null?void 0:r[0];return t?ce`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var r;const t=(r=this.descriptions)==null?void 0:r[1];return t?ce`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};Nr.styles=[Pe,a_];Bn([Z()],Nr.prototype,"type",void 0);Bn([Z()],Nr.prototype,"descriptions",void 0);Bn([Z()],Nr.prototype,"date",void 0);Bn([Z()],Nr.prototype,"onlyDirectionIcon",void 0);Bn([Z()],Nr.prototype,"status",void 0);Bn([Z()],Nr.prototype,"direction",void 0);Bn([Z()],Nr.prototype,"images",void 0);Nr=Bn([me("wui-transaction-list-item")],Nr);const l_=$e`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var c_=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let iu=class extends Re{render(){return ce`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};iu.styles=[Pe,l_];iu=c_([me("wui-transaction-list-item-loader")],iu);const u_=$e`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Q1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ja=class extends Re{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,ce`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ja.styles=[Pe,u_];Q1([Z()],ja.prototype,"variant",void 0);ja=Q1([me("wui-tag")],ja);const f_=$e`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Dr=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let hr=class extends Re{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?ce` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?ce` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?ce`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?ce`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?ce`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?ce`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};hr.styles=[Pe,vt,f_];Dr([Z({type:Array})],hr.prototype,"walletImages",void 0);Dr([Z()],hr.prototype,"imageSrc",void 0);Dr([Z()],hr.prototype,"name",void 0);Dr([Z()],hr.prototype,"tagLabel",void 0);Dr([Z()],hr.prototype,"tagVariant",void 0);Dr([Z()],hr.prototype,"icon",void 0);Dr([Z()],hr.prototype,"walletIcon",void 0);Dr([Z({type:Boolean})],hr.prototype,"disabled",void 0);Dr([Z({type:Boolean})],hr.prototype,"showAllWallets",void 0);hr=Dr([me("wui-list-wallet")],hr);const d_=$e`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var J1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ha=class extends Re{constructor(){super(...arguments),this.logo="google"}render(){return ce`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Ha.styles=[Pe,d_];J1([Z()],Ha.prototype,"logo",void 0);Ha=J1([me("wui-logo")],Ha);const h_=$e`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Af=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Es=class extends Re{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Es.styles=[Pe,vt,h_];Af([Z()],Es.prototype,"logo",void 0);Af([Z({type:Boolean})],Es.prototype,"disabled",void 0);Es=Af([me("wui-logo-select")],Es);const p_=$e`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var Ef=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Cs=class extends Re{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return ce`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?ce`<wui-image src=${this.imageSrc}></wui-image>`:ce`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Cs.styles=[Pe,vt,p_];Ef([Z()],Cs.prototype,"imageSrc",void 0);Ef([Z({type:Boolean})],Cs.prototype,"disabled",void 0);Cs=Ef([me("wui-network-button")],Cs);const g_=$e`
  :host {
    position: relative;
    display: block;
  }
`;var X1=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let za=class extends Re{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,r)=>{const n=t.target,o=this.getInputElement(n),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(t.key)&&t.preventDefault();const s=o.selectionStart;switch(t.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",r);break;case"ArrowRight":this.focusInputField("next",r);break;case"Shift":this.focusInputField("next",r);break;case"Delete":o.value===""?this.focusInputField("prev",r):o.value="";break;case"Backspace":o.value===""?this.focusInputField("prev",r):o.value="";break}},this.focusInputField=(t,r)=>{if(t==="next"){const n=r+1,o=this.numerics[n<this.length?n:r],i=o?this.getInputElement(o):void 0;i&&i.focus()}if(t==="prev"){const n=r-1,o=this.numerics[n>-1?n:r],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return ce`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,r)=>ce`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,r)}
              @keydown=${n=>this.handleKeyDown(n,r)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,r){const n=t.target,o=this.getInputElement(n);if(o){const i=o.value;t.inputType==="insertFromPaste"?this.handlePaste(o,i,r):Qe.isNumber(i)&&t.data?(o.value=t.data,this.focusInputField("next",r)):o.value=""}}handlePaste(t,r,n){const o=r[0];if(o&&Qe.isNumber(o)){t.value=o;const s=r.substring(1);if(n+1<this.length&&s.length){const a=this.numerics[n+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,n+1)}else this.focusInputField("next",n)}else t.value=""}getInputElement(t){var r;return(r=t.shadowRoot)!=null&&r.querySelector("input")?t.shadowRoot.querySelector("input"):null}};za.styles=[Pe,g_];X1([Z({type:Number})],za.prototype,"length",void 0);za=X1([me("wui-otp")],za);var Hs={},m_=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},eg={},tr={};let Cf;const w_=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];tr.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};tr.getSymbolTotalCodewords=function(t){return w_[t]};tr.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};tr.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Cf=t};tr.isKanjiModeEnabled=function(){return typeof Cf<"u"};tr.toSJIS=function(t){return Cf(t)};var $l={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+r)}}e.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},e.from=function(n,o){if(e.isValid(n))return n;try{return t(n)}catch{return o}}})($l);function tg(){this.buffer=[],this.length=0}tg.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var v_=tg;function zs(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}zs.prototype.set=function(e,t,r,n){const o=e*this.size+t;this.data[o]=r,n&&(this.reservedBit[o]=!0)};zs.prototype.get=function(e,t){return this.data[e*this.size+t]};zs.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r};zs.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var b_=zs,rg={};(function(e){const t=tr.getSymbolSize;e.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,i=t(n),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(n){const o=[],i=e.getRowColCoords(n),s=i.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([i[a],i[l]]);return o}})(rg);var ng={};const y_=tr.getSymbolSize,k0=7;ng.getPositions=function(t){const r=y_(t);return[[0,0],[r-k0,0],[0,r-k0]]};var ig={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,l=0,h=null,d=null;for(let p=0;p<i;p++){a=l=0,h=d=null;for(let g=0;g<i;g++){let E=o.get(p,g);E===h?a++:(a>=5&&(s+=t.N1+(a-5)),h=E,a=1),E=o.get(g,p),E===d?l++:(l>=5&&(s+=t.N1+(l-5)),d=E,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let l=0;l<i-1;l++){const h=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(h===4||h===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,l=0;for(let h=0;h<i;h++){a=l=0;for(let d=0;d<i;d++)a=a<<1&2047|o.get(h,d),d>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(d,h),d>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let l=0;l<s;l++)i+=o.data[l];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function r(n,o,i){switch(n){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}e.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)i.isReserved(l,a)||i.xor(l,a,r(o,l,a))},e.getBestMask=function(o,i){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let h=0;h<s;h++){i(h),e.applyMask(h,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(h,o),d<l&&(l=d,a=h)}return a}})(ig);var Rl={};const _n=$l,la=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ca=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Rl.getBlocksCount=function(t,r){switch(r){case _n.L:return la[(t-1)*4+0];case _n.M:return la[(t-1)*4+1];case _n.Q:return la[(t-1)*4+2];case _n.H:return la[(t-1)*4+3];default:return}};Rl.getTotalCodewordsCount=function(t,r){switch(r){case _n.L:return ca[(t-1)*4+0];case _n.M:return ca[(t-1)*4+1];case _n.Q:return ca[(t-1)*4+2];case _n.H:return ca[(t-1)*4+3];default:return}};var og={},Ol={};const rs=new Uint8Array(512),Va=new Uint8Array(256);(function(){let t=1;for(let r=0;r<255;r++)rs[r]=t,Va[t]=r,t<<=1,t&256&&(t^=285);for(let r=255;r<512;r++)rs[r]=rs[r-255]})();Ol.log=function(t){if(t<1)throw new Error("log("+t+")");return Va[t]};Ol.exp=function(t){return rs[t]};Ol.mul=function(t,r){return t===0||r===0?0:rs[Va[t]+Va[r]]};(function(e){const t=Ol;e.mul=function(n,o){const i=new Uint8Array(n.length+o.length-1);for(let s=0;s<n.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=t.mul(n[s],o[a]);return i},e.mod=function(n,o){let i=new Uint8Array(n);for(;i.length-o.length>=0;){const s=i[0];for(let l=0;l<o.length;l++)i[l]^=t.mul(o[l],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},e.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let i=0;i<n;i++)o=e.mul(o,new Uint8Array([1,t.exp(i)]));return o}})(og);const sg=og;function Tf(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Tf.prototype.initialize=function(t){this.degree=t,this.genPoly=sg.generateECPolynomial(this.degree)};Tf.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(t.length+this.degree);r.set(t);const n=sg.mod(r,this.genPoly),o=this.degree-n.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(n,o),i}return n};var __=Tf,ag={},Dn={},Sf={};Sf.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Fr={};const lg="[0-9]+",x_="[A-Z $%*+\\-./:]+";let Ts="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ts=Ts.replace(/u/g,"\\u");const A_="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ts+`)(?:.|[\r
]))+`;Fr.KANJI=new RegExp(Ts,"g");Fr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Fr.BYTE=new RegExp(A_,"g");Fr.NUMERIC=new RegExp(lg,"g");Fr.ALPHANUMERIC=new RegExp(x_,"g");const E_=new RegExp("^"+Ts+"$"),C_=new RegExp("^"+lg+"$"),T_=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Fr.testKanji=function(t){return E_.test(t)};Fr.testNumeric=function(t){return C_.test(t)};Fr.testAlphanumeric=function(t){return T_.test(t)};(function(e){const t=Sf,r=Fr;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return r.testNumeric(i)?e.NUMERIC:r.testAlphanumeric(i)?e.ALPHANUMERIC:r.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(i,s){if(e.isValid(i))return i;try{return n(i)}catch{return s}}})(Dn);(function(e){const t=tr,r=Rl,n=$l,o=Dn,i=Sf,s=7973,a=t.getBCHDigit(s);function l(g,E,_){for(let I=1;I<=40;I++)if(E<=e.getCapacity(I,_,g))return I}function h(g,E){return o.getCharCountIndicator(g,E)+4}function d(g,E){let _=0;return g.forEach(function(I){const P=h(I.mode,E);_+=P+I.getBitsLength()}),_}function p(g,E){for(let _=1;_<=40;_++)if(d(g,_)<=e.getCapacity(_,E,o.MIXED))return _}e.from=function(E,_){return i.isValid(E)?parseInt(E,10):_},e.getCapacity=function(E,_,I){if(!i.isValid(E))throw new Error("Invalid QR Code version");typeof I>"u"&&(I=o.BYTE);const P=t.getSymbolTotalCodewords(E),C=r.getTotalCodewordsCount(E,_),A=(P-C)*8;if(I===o.MIXED)return A;const z=A-h(I,E);switch(I){case o.NUMERIC:return Math.floor(z/10*3);case o.ALPHANUMERIC:return Math.floor(z/11*2);case o.KANJI:return Math.floor(z/13);case o.BYTE:default:return Math.floor(z/8)}},e.getBestVersionForData=function(E,_){let I;const P=n.from(_,n.M);if(Array.isArray(E)){if(E.length>1)return p(E,P);if(E.length===0)return 1;I=E[0]}else I=E;return l(I.mode,I.getLength(),P)},e.getEncodedBits=function(E){if(!i.isValid(E)||E<7)throw new Error("Invalid QR Code version");let _=E<<12;for(;t.getBCHDigit(_)-a>=0;)_^=s<<t.getBCHDigit(_)-a;return E<<12|_}})(ag);var cg={};const ou=tr,ug=1335,S_=21522,P0=ou.getBCHDigit(ug);cg.getEncodedBits=function(t,r){const n=t.bit<<3|r;let o=n<<10;for(;ou.getBCHDigit(o)-P0>=0;)o^=ug<<ou.getBCHDigit(o)-P0;return(n<<10|o)^S_};var fg={};const I_=Dn;function ao(e){this.mode=I_.NUMERIC,this.data=e.toString()}ao.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};ao.prototype.getLength=function(){return this.data.length};ao.prototype.getBitsLength=function(){return ao.getBitsLength(this.data.length)};ao.prototype.write=function(t){let r,n,o;for(r=0;r+3<=this.data.length;r+=3)n=this.data.substr(r,3),o=parseInt(n,10),t.put(o,10);const i=this.data.length-r;i>0&&(n=this.data.substr(r),o=parseInt(n,10),t.put(o,i*3+1))};var $_=ao;const R_=Dn,mc=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function lo(e){this.mode=R_.ALPHANUMERIC,this.data=e}lo.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};lo.prototype.getLength=function(){return this.data.length};lo.prototype.getBitsLength=function(){return lo.getBitsLength(this.data.length)};lo.prototype.write=function(t){let r;for(r=0;r+2<=this.data.length;r+=2){let n=mc.indexOf(this.data[r])*45;n+=mc.indexOf(this.data[r+1]),t.put(n,11)}this.data.length%2&&t.put(mc.indexOf(this.data[r]),6)};var O_=lo,N_=function(t){for(var r=[],n=t.length,o=0;o<n;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&n>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){r.push(i);continue}if(i<2048){r.push(i>>6|192),r.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){r.push(i>>12|224),r.push(i>>6&63|128),r.push(i&63|128);continue}if(i>=65536&&i<=1114111){r.push(i>>18|240),r.push(i>>12&63|128),r.push(i>>6&63|128),r.push(i&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};const L_=N_,k_=Dn;function co(e){this.mode=k_.BYTE,typeof e=="string"&&(e=L_(e)),this.data=new Uint8Array(e)}co.getBitsLength=function(t){return t*8};co.prototype.getLength=function(){return this.data.length};co.prototype.getBitsLength=function(){return co.getBitsLength(this.data.length)};co.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)};var P_=co;const M_=Dn,B_=tr;function uo(e){this.mode=M_.KANJI,this.data=e}uo.getBitsLength=function(t){return t*13};uo.prototype.getLength=function(){return this.data.length};uo.prototype.getBitsLength=function(){return uo.getBitsLength(this.data.length)};uo.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=B_.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),e.put(r,13)}};var D_=uo,dg={exports:{}};(function(e){var t={single_source_shortest_paths:function(r,n,o){var i={},s={};s[n]=0;var a=t.PriorityQueue.make();a.push(n,0);for(var l,h,d,p,g,E,_,I,P;!a.empty();){l=a.pop(),h=l.value,p=l.cost,g=r[h]||{};for(d in g)g.hasOwnProperty(d)&&(E=g[d],_=p+E,I=s[d],P=typeof s[d]>"u",(P||I>_)&&(s[d]=_,a.push(d,_),i[d]=h))}if(typeof o<"u"&&typeof s[o]>"u"){var C=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(C)}return i},extract_shortest_path_from_predecessor_list:function(r,n){for(var o=[],i=n;i;)o.push(i),r[i],i=r[i];return o.reverse(),o},find_path:function(r,n,o){var i=t.single_source_shortest_paths(r,n,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(r){var n=t.PriorityQueue,o={},i;r=r||{};for(i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);return o.queue=[],o.sorter=r.sorter||n.default_sorter,o},default_sorter:function(r,n){return r.cost-n.cost},push:function(r,n){var o={value:r,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(dg);var F_=dg.exports;(function(e){const t=Dn,r=$_,n=O_,o=P_,i=D_,s=Fr,a=tr,l=F_;function h(C){return unescape(encodeURIComponent(C)).length}function d(C,A,z){const N=[];let V;for(;(V=C.exec(z))!==null;)N.push({data:V[0],index:V.index,mode:A,length:V[0].length});return N}function p(C){const A=d(s.NUMERIC,t.NUMERIC,C),z=d(s.ALPHANUMERIC,t.ALPHANUMERIC,C);let N,V;return a.isKanjiModeEnabled()?(N=d(s.BYTE,t.BYTE,C),V=d(s.KANJI,t.KANJI,C)):(N=d(s.BYTE_KANJI,t.BYTE,C),V=[]),A.concat(z,N,V).sort(function(Y,y){return Y.index-y.index}).map(function(Y){return{data:Y.data,mode:Y.mode,length:Y.length}})}function g(C,A){switch(A){case t.NUMERIC:return r.getBitsLength(C);case t.ALPHANUMERIC:return n.getBitsLength(C);case t.KANJI:return i.getBitsLength(C);case t.BYTE:return o.getBitsLength(C)}}function E(C){return C.reduce(function(A,z){const N=A.length-1>=0?A[A.length-1]:null;return N&&N.mode===z.mode?(A[A.length-1].data+=z.data,A):(A.push(z),A)},[])}function _(C){const A=[];for(let z=0;z<C.length;z++){const N=C[z];switch(N.mode){case t.NUMERIC:A.push([N,{data:N.data,mode:t.ALPHANUMERIC,length:N.length},{data:N.data,mode:t.BYTE,length:N.length}]);break;case t.ALPHANUMERIC:A.push([N,{data:N.data,mode:t.BYTE,length:N.length}]);break;case t.KANJI:A.push([N,{data:N.data,mode:t.BYTE,length:h(N.data)}]);break;case t.BYTE:A.push([{data:N.data,mode:t.BYTE,length:h(N.data)}])}}return A}function I(C,A){const z={},N={start:{}};let V=["start"];for(let q=0;q<C.length;q++){const Y=C[q],y=[];for(let x=0;x<Y.length;x++){const S=Y[x],k=""+q+x;y.push(k),z[k]={node:S,lastCount:0},N[k]={};for(let $=0;$<V.length;$++){const W=V[$];z[W]&&z[W].node.mode===S.mode?(N[W][k]=g(z[W].lastCount+S.length,S.mode)-g(z[W].lastCount,S.mode),z[W].lastCount+=S.length):(z[W]&&(z[W].lastCount=S.length),N[W][k]=g(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,A))}}V=y}for(let q=0;q<V.length;q++)N[V[q]].end=0;return{map:N,table:z}}function P(C,A){let z;const N=t.getBestModeForData(C);if(z=t.from(A,N),z!==t.BYTE&&z.bit<N.bit)throw new Error('"'+C+'" cannot be encoded with mode '+t.toString(z)+`.
 Suggested mode is: `+t.toString(N));switch(z===t.KANJI&&!a.isKanjiModeEnabled()&&(z=t.BYTE),z){case t.NUMERIC:return new r(C);case t.ALPHANUMERIC:return new n(C);case t.KANJI:return new i(C);case t.BYTE:return new o(C)}}e.fromArray=function(A){return A.reduce(function(z,N){return typeof N=="string"?z.push(P(N,null)):N.data&&z.push(P(N.data,N.mode)),z},[])},e.fromString=function(A,z){const N=p(A,a.isKanjiModeEnabled()),V=_(N),q=I(V,z),Y=l.find_path(q.map,"start","end"),y=[];for(let x=1;x<Y.length-1;x++)y.push(q.table[Y[x]].node);return e.fromArray(E(y))},e.rawSplit=function(A){return e.fromArray(p(A,a.isKanjiModeEnabled()))}})(fg);const Nl=tr,wc=$l,U_=v_,W_=b_,j_=rg,H_=ng,su=ig,au=Rl,z_=__,Ga=ag,V_=cg,G_=Dn,vc=fg;function K_(e,t){const r=e.size,n=H_.getPositions(t);for(let o=0;o<n.length;o++){const i=n[o][0],s=n[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||r<=i+a))for(let l=-1;l<=7;l++)s+l<=-1||r<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(i+a,s+l,!0,!0):e.set(i+a,s+l,!1,!0))}}function q_(e){const t=e.size;for(let r=8;r<t-8;r++){const n=r%2===0;e.set(r,6,n,!0),e.set(6,r,n,!0)}}function Y_(e,t){const r=j_.getPositions(t);for(let n=0;n<r.length;n++){const o=r[n][0],i=r[n][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,i+a,!0,!0):e.set(o+s,i+a,!1,!0)}}function Z_(e,t){const r=e.size,n=Ga.getEncodedBits(t);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+r-8-3,s=(n>>a&1)===1,e.set(o,i,s,!0),e.set(i,o,s,!0)}function bc(e,t,r){const n=e.size,o=V_.getEncodedBits(t,r);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?e.set(i,8,s,!0):i<8?e.set(i+1,8,s,!0):e.set(n-15+i,8,s,!0),i<8?e.set(8,n-i-1,s,!0):i<9?e.set(8,15-i-1+1,s,!0):e.set(8,15-i-1,s,!0);e.set(n-8,8,1,!0)}function Q_(e,t){const r=e.size;let n=-1,o=r-1,i=7,s=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(o,a-l)){let h=!1;s<t.length&&(h=(t[s]>>>i&1)===1),e.set(o,a-l,h),i--,i===-1&&(s++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}function J_(e,t,r){const n=new U_;r.forEach(function(l){n.put(l.mode.bit,4),n.put(l.getLength(),G_.getCharCountIndicator(l.mode,e)),l.write(n)});const o=Nl.getSymbolTotalCodewords(e),i=au.getTotalCodewordsCount(e,t),s=(o-i)*8;for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const a=(s-n.getLengthInBits())/8;for(let l=0;l<a;l++)n.put(l%2?17:236,8);return X_(n,e,t)}function X_(e,t,r){const n=Nl.getSymbolTotalCodewords(t),o=au.getTotalCodewordsCount(t,r),i=n-o,s=au.getBlocksCount(t,r),a=n%s,l=s-a,h=Math.floor(n/s),d=Math.floor(i/s),p=d+1,g=h-d,E=new z_(g);let _=0;const I=new Array(s),P=new Array(s);let C=0;const A=new Uint8Array(e.buffer);for(let Y=0;Y<s;Y++){const y=Y<l?d:p;I[Y]=A.slice(_,_+y),P[Y]=E.encode(I[Y]),_+=y,C=Math.max(C,y)}const z=new Uint8Array(n);let N=0,V,q;for(V=0;V<C;V++)for(q=0;q<s;q++)V<I[q].length&&(z[N++]=I[q][V]);for(V=0;V<g;V++)for(q=0;q<s;q++)z[N++]=P[q][V];return z}function e8(e,t,r,n){let o;if(Array.isArray(e))o=vc.fromArray(e);else if(typeof e=="string"){let h=t;if(!h){const d=vc.rawSplit(e);h=Ga.getBestVersionForData(d,r)}o=vc.fromString(e,h||40)}else throw new Error("Invalid data");const i=Ga.getBestVersionForData(o,r);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=J_(t,r,o),a=Nl.getSymbolSize(t),l=new W_(a);return K_(l,t),q_(l),Y_(l,t),bc(l,r,0),t>=7&&Z_(l,t),Q_(l,s),isNaN(n)&&(n=su.getBestMask(l,bc.bind(null,l,r))),su.applyMask(n,l),bc(l,r,n),{modules:l,version:t,errorCorrectionLevel:r,maskPattern:n,segments:o}}eg.create=function(t,r){if(typeof t>"u"||t==="")throw new Error("No input text");let n=wc.M,o,i;return typeof r<"u"&&(n=wc.from(r.errorCorrectionLevel,wc.M),o=Ga.from(r.version),i=su.from(r.maskPattern),r.toSJISFunc&&Nl.setToSJISFunction(r.toSJISFunc)),e8(t,o,n,i)};var hg={},If={};(function(e){function t(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let n=r.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+r);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(i){return[i,i]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}e.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,i=n.width&&n.width>=21?n.width:void 0,s=n.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},e.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},e.getImageWidth=function(n,o){const i=e.getScale(n,o);return Math.floor((n+o.margin*2)*i)},e.qrToImageData=function(n,o,i){const s=o.modules.size,a=o.modules.data,l=e.getScale(s,i),h=Math.floor((s+i.margin*2)*l),d=i.margin*l,p=[i.color.light,i.color.dark];for(let g=0;g<h;g++)for(let E=0;E<h;E++){let _=(g*h+E)*4,I=i.color.light;if(g>=d&&E>=d&&g<h-d&&E<h-d){const P=Math.floor((g-d)/l),C=Math.floor((E-d)/l);I=p[a[P*s+C]?1:0]}n[_++]=I.r,n[_++]=I.g,n[_++]=I.b,n[_]=I.a}}})(If);(function(e){const t=If;function r(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,a){let l=a,h=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(h=n()),l=t.getOptions(l);const d=t.getImageWidth(i.modules.size,l),p=h.getContext("2d"),g=p.createImageData(d,d);return t.qrToImageData(g.data,i,l),r(p,h,d),p.putImageData(g,0,0),h},e.renderToDataURL=function(i,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const h=e.render(i,s,l),d=l.type||"image/png",p=l.rendererOpts||{};return h.toDataURL(d,p.quality)}})(hg);var pg={};const t8=If;function M0(e,t){const r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function yc(e,t,r){let n=e+t;return typeof r<"u"&&(n+=" "+r),n}function r8(e,t,r){let n="",o=0,i=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),h=Math.floor(a/t);!l&&!i&&(i=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(n+=i?yc("M",l+r,.5+h+r):yc("m",o,0),o=0,i=!1),l+1<t&&e[a+1]||(n+=yc("h",s),s=0)):o++}return n}pg.render=function(t,r,n){const o=t8.getOptions(r),i=t.modules.size,s=t.modules.data,a=i+o.margin*2,l=o.color.light.a?"<path "+M0(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",h="<path "+M0(o.color.dark,"stroke")+' d="'+r8(s,i,o.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+l+h+`</svg>
`;return typeof n=="function"&&n(null,g),g};const n8=m_,lu=eg,gg=hg,i8=pg;function $f(e,t,r,n,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!n8())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=r,r=t,t=n=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=n,n=void 0):(o=n,n=r,r=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=t,t=n=void 0):s===2&&!t.getContext&&(n=r,r=t,t=void 0),new Promise(function(l,h){try{const d=lu.create(r,n);l(e(d,t,n))}catch(d){h(d)}})}try{const l=lu.create(r,n);o(null,e(l,t,n))}catch(l){o(l)}}Hs.create=lu.create;Hs.toCanvas=$f.bind(null,gg.render);Hs.toDataURL=$f.bind(null,gg.renderToDataURL);Hs.toString=$f.bind(null,function(e,t,r){return i8.render(e,r)});const o8=.1,B0=2.5,jr=7;function _c(e,t,r){return e===t?!1:(e-t<0?t-e:e-t)<=r+o8}function s8(e,t){const r=Array.prototype.slice.call(Hs.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((o,i,s)=>(s%n===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const a8={generate(e,t,r){const n="#141414",o="transparent",s=[],a=s8(e,"Q"),l=t/a.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:I,y:P})=>{const C=(a.length-jr)*l*I,A=(a.length-jr)*l*P,z=.45;for(let N=0;N<h.length;N+=1){const V=l*(jr-N*2);s.push(be`
            <rect
              fill=${N===2?n:o}
              width=${N===0?V-5:V}
              rx= ${N===0?(V-5)*z:V*z}
              ry= ${N===0?(V-5)*z:V*z}
              stroke=${n}
              stroke-width=${N===0?5:0}
              height=${N===0?V-5:V}
              x= ${N===0?A+l*N+5/2:A+l*N}
              y= ${N===0?C+l*N+5/2:C+l*N}
            />
          `)}});const d=Math.floor((r+25)/l),p=a.length/2-d/2,g=a.length/2+d/2-1,E=[];a.forEach((I,P)=>{I.forEach((C,A)=>{if(a[P][A]&&!(P<jr&&A<jr||P>a.length-(jr+1)&&A<jr||P<jr&&A>a.length-(jr+1))&&!(P>p&&P<g&&A>p&&A<g)){const z=P*l+l/2,N=A*l+l/2;E.push([z,N])}})});const _={};return E.forEach(([I,P])=>{var C;_[I]?(C=_[I])==null||C.push(P):_[I]=[P]}),Object.entries(_).map(([I,P])=>{const C=P.filter(A=>P.every(z=>!_c(A,z,l)));return[Number(I),C]}).forEach(([I,P])=>{P.forEach(C=>{s.push(be`<circle cx=${I} cy=${C} fill=${n} r=${l/B0} />`)})}),Object.entries(_).filter(([I,P])=>P.length>1).map(([I,P])=>{const C=P.filter(A=>P.some(z=>_c(A,z,l)));return[Number(I),C]}).map(([I,P])=>{P.sort((A,z)=>A<z?-1:1);const C=[];for(const A of P){const z=C.find(N=>N.some(V=>_c(A,V,l)));z?z.push(A):C.push([A])}return[I,C.map(A=>[A[0],A[A.length-1]])]}).forEach(([I,P])=>{P.forEach(([C,A])=>{s.push(be`
              <line
                x1=${I}
                x2=${I}
                y1=${C}
                y2=${A}
                stroke=${n}
                stroke-width=${l/(B0/2)}
                stroke-linecap="round"
              />
            `)})}),s}},l8=$e`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Ro=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let kn=class extends Re{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,ce`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return be`
      <svg height=${t} width=${t}>
        ${a8.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:ce`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};kn.styles=[Pe,l8];Ro([Z()],kn.prototype,"uri",void 0);Ro([Z({type:Number})],kn.prototype,"size",void 0);Ro([Z()],kn.prototype,"theme",void 0);Ro([Z()],kn.prototype,"imageSrc",void 0);Ro([Z()],kn.prototype,"alt",void 0);kn=Ro([me("wui-qr-code")],kn);const c8=$e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var u8=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let cu=class extends Re{constructor(){super(...arguments),this.inputComponentRef=G1()}render(){return ce`
      <wui-input-text
        ${K1(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,r=t==null?void 0:t.inputElementRef.value;r&&(r.value="",r.focus(),r.dispatchEvent(new Event("input")))}};cu.styles=[Pe,c8];cu=u8([me("wui-search-bar")],cu);const f8=$e`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Vs=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let mi=class extends Re{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return ce`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};mi.styles=[Pe,f8];Vs([Z()],mi.prototype,"backgroundColor",void 0);Vs([Z()],mi.prototype,"iconColor",void 0);Vs([Z()],mi.prototype,"icon",void 0);Vs([Z()],mi.prototype,"message",void 0);mi=Vs([me("wui-snackbar")],mi);const d8=$e`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Fn=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Lr=class extends Re{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,r)=>{const n=r===this.activeTab;return ce`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(r)}
          data-active=${n}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,r){const n=this.buttons[this.activeTab],o=this.buttons[t],i=n==null?void 0:n.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();n&&i&&!r&&t!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&l&&s&&(t!==this.activeTab||r)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,o.animate([{width:`${a.width+l.width}px`}],{duration:r?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:r?0:125,delay:r?0:200,fill:"forwards",easing:"ease"}))}};Lr.styles=[Pe,vt,d8];Fn([Z({type:Array})],Lr.prototype,"tabs",void 0);Fn([Z()],Lr.prototype,"onTabChange",void 0);Fn([Z({type:Array})],Lr.prototype,"buttons",void 0);Fn([Z({type:Boolean})],Lr.prototype,"disabled",void 0);Fn([vf()],Lr.prototype,"activeTab",void 0);Fn([vf()],Lr.prototype,"localTabWidth",void 0);Fn([vf()],Lr.prototype,"isDense",void 0);Lr=Fn([me("wui-tabs")],Lr);const h8=$e`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Rf=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ss=class extends Re{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return ce`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ss.styles=[Pe,vt,h8];Rf([Z()],Ss.prototype,"placement",void 0);Rf([Z()],Ss.prototype,"message",void 0);Ss=Rf([me("wui-tooltip")],Ss);const p8=$e`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ll=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let fo=class extends Re{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,ce`${this.templateVisual()}`}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:ce`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};fo.styles=[Pe,p8];Ll([Z()],fo.prototype,"imageSrc",void 0);Ll([Z()],fo.prototype,"alt",void 0);Ll([Z({type:Boolean})],fo.prototype,"borderRadiusFull",void 0);fo=Ll([me("wui-visual-thumbnail")],fo);const g8=$e`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var pr=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Kt=class extends Re{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Qe.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Qe.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Qe.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Qe.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Qe.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Qe.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Qe.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Qe.getSpacingStyles(this.margin,3)};
    `,ce`<slot></slot>`}};Kt.styles=[Pe,g8];pr([Z()],Kt.prototype,"gridTemplateRows",void 0);pr([Z()],Kt.prototype,"gridTemplateColumns",void 0);pr([Z()],Kt.prototype,"justifyItems",void 0);pr([Z()],Kt.prototype,"alignItems",void 0);pr([Z()],Kt.prototype,"justifyContent",void 0);pr([Z()],Kt.prototype,"alignContent",void 0);pr([Z()],Kt.prototype,"columnGap",void 0);pr([Z()],Kt.prototype,"rowGap",void 0);pr([Z()],Kt.prototype,"gap",void 0);pr([Z()],Kt.prototype,"padding",void 0);pr([Z()],Kt.prototype,"margin",void 0);Kt=pr([me("wui-grid")],Kt);const m8=$e`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var mg=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ka=class extends Re{constructor(){super(...arguments),this.text=""}render(){return ce`${this.template()}`}template(){return this.text?ce`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Ka.styles=[Pe,m8];mg([Z()],Ka.prototype,"text",void 0);Ka=mg([me("wui-separator")],Ka);var wg={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(_l,function(){return function(r,n,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(wg);var w8=wg.exports;const v8=xl(w8);var vg={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(_l,function(){return function(r,n,o){r=r||{};var i=n.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(h,d,p,g){return i.fromToBase(h,d,p,g)}o.en.relativeTime=s,i.fromToBase=function(h,d,p,g,E){for(var _,I,P,C=p.$locale().relativeTime||s,A=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],z=A.length,N=0;N<z;N+=1){var V=A[N];V.d&&(_=g?o(h).diff(p,V.d,!0):p.diff(h,V.d,!0));var q=(r.rounding||Math.round)(Math.abs(_));if(P=_>0,q<=V.r||!V.r){q<=1&&N>0&&(V=A[N-1]);var Y=C[V.l];E&&(q=E(""+q)),I=typeof Y=="string"?Y.replace("%d",q):Y(q,d,V.l,P);break}}if(d)return I;var y=P?C.future:C.past;return typeof y=="function"?y(I):y.replace("%s",I)},i.to=function(h,d){return a(h,d,this,!0)},i.from=function(h,d){return a(h,d,this)};var l=function(h){return h.$u?o.utc():o()};i.toNow=function(h){return this.to(l(this),h)},i.fromNow=function(h){return this.from(l(this),h)}}})})(vg);var b8=vg.exports;const y8=xl(b8);ws.extend(y8);ws.extend(v8);ws.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const bg={getYear(e=new Date().toISOString()){return ws(e).year()},getRelativeDateFromNow(e){return ws(e).fromNow(!0)}},_8=3,x8=["receive","deposit","borrow","claim"],A8=["withdraw","repay","burn"],ji={getTransactionGroupTitle(e){const t=bg.getYear();return e===t?"This Year":e},getTransactionImages(e){const[t,r]=e,n=!!t&&(e==null?void 0:e.every(s=>!!s.nft_info)),o=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!n?[this.getTransactionImage(t),this.getTransactionImage(r)]:o?e.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:ji.getTransactionTransferTokenType(e),url:ji.getTransactionImageURL(e)}},getTransactionImageURL(e){var o,i,s,a,l;let t=null;const r=!!(e!=null&&e.nft_info),n=!!(e!=null&&e.fungible_info);return e&&r?t=(s=(i=(o=e==null?void 0:e.nft_info)==null?void 0:o.content)==null?void 0:i.preview)==null?void 0:s.url:e&&n&&(t=(l=(a=e==null?void 0:e.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),t},getTransactionTransferTokenType(e){return e!=null&&e.fungible_info?"FUNGIBLE":e!=null&&e.nft_info?"NFT":null},getTransactionDescriptions(e){var p,g,E;const t=(p=e.metadata)==null?void 0:p.operationType,r=e.transfers,n=((g=e.transfers)==null?void 0:g.length)>0,o=((E=e.transfers)==null?void 0:E.length)>1,i=n&&(r==null?void 0:r.every(_=>!!_.fungible_info)),[s,a]=r;let l=this.getTransferDescription(s),h=this.getTransferDescription(a);if(!n)return(t==="send"||t==="receive")&&i?(l=Qe.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=Qe.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,h]):[e.metadata.status];if(o)return r.map(_=>this.getTransferDescription(_));let d="";return x8.includes(t)?d="+":A8.includes(t)&&(d="-"),l=d.concat(l),[l]},getTransferDescription(e){var r;let t="";return e&&(e!=null&&e.nft_info?t=((r=e==null?void 0:e.nft_info)==null?void 0:r.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var n;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(n=e==null?void 0:e.fungible_info)==null?void 0:n.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(_8):null}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=globalThis,Of=_a.ShadowRoot&&(_a.ShadyCSS===void 0||_a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nf=Symbol(),D0=new WeakMap;let yg=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Nf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Of&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=D0.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&D0.set(r,t))}return t}toString(){return this.cssText}};const E8=e=>new yg(typeof e=="string"?e:e+"",void 0,Nf),Ut=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new yg(r,e,Nf)},C8=(e,t)=>{if(Of)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=_a.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},F0=Of?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return E8(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:T8,defineProperty:S8,getOwnPropertyDescriptor:I8,getOwnPropertyNames:$8,getOwnPropertySymbols:R8,getPrototypeOf:O8}=Object,Sn=globalThis,U0=Sn.trustedTypes,N8=U0?U0.emptyScript:"",xc=Sn.reactiveElementPolyfillSupport,ns=(e,t)=>e,qa={toAttribute(e,t){switch(t){case Boolean:e=e?N8:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Lf=(e,t)=>!T8(e,t),W0={attribute:!0,type:String,converter:qa,reflect:!1,hasChanged:Lf};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Sn.litPropertyMetadata??(Sn.litPropertyMetadata=new WeakMap);class Ui extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=W0){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&S8(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=I8(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W0}static _$Ei(){if(this.hasOwnProperty(ns("elementProperties")))return;const t=O8(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ns("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ns("properties"))){const r=this.properties,n=[...$8(r),...R8(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(F0(o))}else t!==void 0&&r.push(F0(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return C8(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:qa).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:qa;this._$Em=o,this[o]=a.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,n,o=!1,i){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Lf)(o?i:this[t],r))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,n){this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$E_)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EO(r,this[r]))),this._$ET()}updated(t){}firstUpdated(t){}}Ui.elementStyles=[],Ui.shadowRootOptions={mode:"open"},Ui[ns("elementProperties")]=new Map,Ui[ns("finalized")]=new Map,xc==null||xc({ReactiveElement:Ui}),(Sn.reactiveElementVersions??(Sn.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=globalThis,Ya=is.trustedTypes,j0=Ya?Ya.createPolicy("lit-html",{createHTML:e=>e}):void 0,_g="$lit$",vn=`lit$${(Math.random()+"").slice(9)}$`,xg="?"+vn,L8=`<${xg}>`,wi=document,Is=()=>wi.createComment(""),$s=e=>e===null||typeof e!="object"&&typeof e!="function",Ag=Array.isArray,k8=e=>Ag(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ac=`[ 	
\f\r]`,Uo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H0=/-->/g,z0=/>/g,Yn=RegExp(`>|${Ac}(?:([^\\s"'>=/]+)(${Ac}*=${Ac}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V0=/'/g,G0=/"/g,Eg=/^(?:script|style|textarea|title)$/i,P8=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),se=P8(1),ho=Symbol.for("lit-noChange"),dt=Symbol.for("lit-nothing"),K0=new WeakMap,ii=wi.createTreeWalker(wi,129);function Cg(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return j0!==void 0?j0.createHTML(t):t}const M8=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=Uo;for(let a=0;a<r;a++){const l=e[a];let h,d,p=-1,g=0;for(;g<l.length&&(s.lastIndex=g,d=s.exec(l),d!==null);)g=s.lastIndex,s===Uo?d[1]==="!--"?s=H0:d[1]!==void 0?s=z0:d[2]!==void 0?(Eg.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=Yn):d[3]!==void 0&&(s=Yn):s===Yn?d[0]===">"?(s=o??Uo,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?Yn:d[3]==='"'?G0:V0):s===G0||s===V0?s=Yn:s===H0||s===z0?s=Uo:(s=Yn,o=void 0);const E=s===Yn&&e[a+1].startsWith("/>")?" ":"";i+=s===Uo?l+L8:p>=0?(n.push(h),l.slice(0,p)+_g+l.slice(p)+vn+E):l+vn+(p===-2?a:E)}return[Cg(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),n]};class Rs{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[h,d]=M8(t,r);if(this.el=Rs.createElement(h,n),ii.currentNode=this.el.content,r===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ii.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(_g)){const g=d[s++],E=o.getAttribute(p).split(vn),_=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:_[2],strings:E,ctor:_[1]==="."?D8:_[1]==="?"?F8:_[1]==="@"?U8:kl}),o.removeAttribute(p)}else p.startsWith(vn)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(Eg.test(o.tagName)){const p=o.textContent.split(vn),g=p.length-1;if(g>0){o.textContent=Ya?Ya.emptyScript:"";for(let E=0;E<g;E++)o.append(p[E],Is()),ii.nextNode(),l.push({type:2,index:++i});o.append(p[g],Is())}}}else if(o.nodeType===8)if(o.data===xg)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(vn,p+1))!==-1;)l.push({type:7,index:i}),p+=vn.length-1}i++}}static createElement(t,r){const n=wi.createElement("template");return n.innerHTML=t,n}}function po(e,t,r=e,n){var s,a;if(t===ho)return t;let o=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const i=$s(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=po(e,o._$AS(e,t.values),o,n)),t}class B8{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??wi).importNode(r,!0);ii.currentNode=o;let i=ii.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new Gs(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new W8(i,this,t)),this._$AV.push(h),l=n[++a]}s!==(l==null?void 0:l.index)&&(i=ii.nextNode(),s++)}return ii.currentNode=wi,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Gs{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=dt,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=po(this,t,r),$s(t)?t===dt||t==null||t===""?(this._$AH!==dt&&this._$AR(),this._$AH=dt):t!==this._$AH&&t!==ho&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):k8(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==dt&&$s(this._$AH)?this._$AA.nextSibling.data=t:this.$(wi.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Rs.createElement(Cg(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const s=new B8(o,this),a=s.u(this.options);s.p(r),this.$(a),this._$AH=s}}_$AC(t){let r=K0.get(t.strings);return r===void 0&&K0.set(t.strings,r=new Rs(t)),r}T(t){Ag(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Gs(this.k(Is()),this.k(Is()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class kl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=dt,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=dt}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=po(this,t,r,0),s=!$s(t)||t!==this._$AH&&t!==ho,s&&(this._$AH=t);else{const a=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=po(this,a[n+l],r,l),h===ho&&(h=this._$AH[l]),s||(s=!$s(h)||h!==this._$AH[l]),h===dt?t=dt:t!==dt&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}s&&!o&&this.O(t)}O(t){t===dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class D8 extends kl{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===dt?void 0:t}}class F8 extends kl{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==dt)}}class U8 extends kl{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=po(this,t,r,0)??dt)===ho)return;const n=this._$AH,o=t===dt&&n!==dt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==dt&&(n===dt||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class W8{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){po(this,t)}}const Ec=is.litHtmlPolyfillSupport;Ec==null||Ec(Rs,Gs),(is.litHtmlVersions??(is.litHtmlVersions=[])).push("3.1.0");const j8=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Gs(t.insertBefore(Is(),i),i,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ze extends Ui{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j8(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ho}}var Zh;ze._$litElement$=!0,ze.finalized=!0,(Zh=globalThis.litElementHydrateSupport)==null||Zh.call(globalThis,{LitElement:ze});const Cc=globalThis.litElementPolyfillSupport;Cc==null||Cc({LitElement:ze});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H8={attribute:!0,type:String,converter:qa,reflect:!1,hasChanged:Lf},z8=(e=H8,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(n==="setter"){const{name:s}=r;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function bt(e){return(t,r)=>typeof r=="object"?z8(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(e){return bt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=e=>e??dt;var tn=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let kr=class extends ze{constructor(){super(),this.unsubscribe=[],this.networkImages=Cn.state.networkImages,this.disabled=!1,this.balance="show",this.address=ot.state.address,this.balanceVal=ot.state.balance,this.balanceSymbol=ot.state.balanceSymbol,this.profileName=ot.state.profileName,this.profileImage=ot.state.profileImage,this.network=Ct.state.caipNetwork,this.unsubscribe.push(ot.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Ct.subscribeKey("caipNetwork",t=>this.network=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var n;const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""],r=this.balance==="show";return se`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Ve(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Ve(t)}
        avatarSrc=${Ve(this.profileImage)}
        balance=${r?Ie.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){Nt.open()}};tn([bt({type:Boolean})],kr.prototype,"disabled",void 0);tn([bt()],kr.prototype,"balance",void 0);tn([Le()],kr.prototype,"address",void 0);tn([Le()],kr.prototype,"balanceVal",void 0);tn([Le()],kr.prototype,"balanceSymbol",void 0);tn([Le()],kr.prototype,"profileName",void 0);tn([Le()],kr.prototype,"profileImage",void 0);tn([Le()],kr.prototype,"network",void 0);kr=tn([me("w3m-account-button")],kr);var Ci=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Pn=class extends ze{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=ot.state.isConnected,this.unsubscribe.push(ot.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?se`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Ve(this.balance)}
          >
          </w3m-account-button>
        `:se`
          <w3m-connect-button
            size=${Ve(this.size)}
            label=${Ve(this.label)}
            loadingLabel=${Ve(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Ci([bt({type:Boolean})],Pn.prototype,"disabled",void 0);Ci([bt()],Pn.prototype,"balance",void 0);Ci([bt()],Pn.prototype,"size",void 0);Ci([bt()],Pn.prototype,"label",void 0);Ci([bt()],Pn.prototype,"loadingLabel",void 0);Ci([Le()],Pn.prototype,"isAccount",void 0);Pn=Ci([me("w3m-button")],Pn);var Ks=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let go=class extends ze{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Nt.state.open,this.unsubscribe.push(Nt.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-connect-button
        size=${Ve(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Nt.close():Nt.open()}};Ks([bt()],go.prototype,"size",void 0);Ks([bt()],go.prototype,"label",void 0);Ks([bt()],go.prototype,"loadingLabel",void 0);Ks([Le()],go.prototype,"open",void 0);go=Ks([me("w3m-connect-button")],go);const V8=Ut`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Tg=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const q0="scroll-lock";let Za=class extends ze{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Nt.state.open,this.initializeTheming(),We.prefetch(),this.unsubscribe.push(Nt.subscribeKey("open",t=>t?this.onOpen():this.onClose())),Je.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?se`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&Nt.close()}initializeTheming(){const{themeVariables:t,themeMode:r}=df.state,n=Qe.getColorTheme(r);r4(t,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,cr.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=q0,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${q0}"]`);t&&t.remove()}onAddKeyboardListener(){var r;this.abortController=new AbortController;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",n=>{if(n.key==="Escape")Nt.close();else if(n.key==="Tab"){const{tagName:o}=n.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}};Za.styles=V8;Tg([Le()],Za.prototype,"open",void 0);Za=Tg([me("w3m-modal")],Za);var Pl=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Os=class extends ze{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Ct.state.caipNetwork,this.connected=ot.state.isConnected,this.unsubscribe.push(Ct.subscribeKey("caipNetwork",t=>this.network=t),ot.subscribeKey("isConnected",t=>this.connected=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return se`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${Ve(ct.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((t=this.network)==null?void 0:t.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){Nt.open({view:"Networks"})}};Pl([bt({type:Boolean})],Os.prototype,"disabled",void 0);Pl([Le()],Os.prototype,"network",void 0);Pl([Le()],Os.prototype,"connected",void 0);Os=Pl([me("w3m-network-button")],Os);const G8=Ut`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Sg=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Qa=class extends ze{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=De.state.view,this.unsubscribe.push(De.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{const r=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:r}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=r}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(r=>r())}render(){return se`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return se`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return se`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return se`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return se`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return se`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return se`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return se`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return se`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return se`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return se`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return se`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return se`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return se`<w3m-transactions-view></w3m-transactions-view>`;default:return se`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(t){const{history:r}=De.state;let n=-10,o=10;r.length<this.prevHistoryLength&&(n=10,o=-10),this.prevHistoryLength=r.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};Qa.styles=G8;Sg([Le()],Qa.prototype,"view",void 0);Qa=Sg([me("w3m-router")],Qa);const K8=Ut`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Un=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Pr=class extends ze{constructor(){super(),this.usubscribe=[],this.networkImages=Cn.state.networkImages,this.address=ot.state.address,this.profileImage=ot.state.profileImage,this.profileName=ot.state.profileName,this.balance=ot.state.balance,this.balanceSymbol=ot.state.balanceSymbol,this.network=Ct.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(ot.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):Nt.close()}),Ct.subscribeKey("caipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var r,n;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""];return se`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Ve(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Qe.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Qe.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${Ie.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Ve(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:t}=ot.state;return t?se`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:t}=Ct.state,r=t?t.length>1:!1,n=t==null?void 0:t.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return r||!n}onCopyAddress(){try{this.address&&(Ie.copyToClopboard(this.address),cr.showSuccess("Address copied"))}catch{cr.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&De.push("Networks")}onTransactions(){Je.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),De.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await qe.disconnect(),Je.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Nt.close()}catch{Je.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),cr.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=ot.state;t&&Ie.openHref(t,"_blank")}};Pr.styles=K8;Un([Le()],Pr.prototype,"address",void 0);Un([Le()],Pr.prototype,"profileImage",void 0);Un([Le()],Pr.prototype,"profileName",void 0);Un([Le()],Pr.prototype,"balance",void 0);Un([Le()],Pr.prototype,"balanceSymbol",void 0);Un([Le()],Pr.prototype,"network",void 0);Un([Le()],Pr.prototype,"disconecting",void 0);Pr=Un([me("w3m-account-view")],Pr);var Ig=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let uu=class extends ze{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Ie.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return se`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?se`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:se`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return Ie.isMobile()?se`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){De.push("ConnectingWalletConnect")}};Ig([Le()],uu.prototype,"search",void 0);uu=Ig([me("w3m-all-wallets-view")],uu);const q8=Ut`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var $g=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ja=class extends ze{constructor(){super(),this.unsubscribe=[],this.connectors=Kr.state.connectors,this.unsubscribe.push(Kr.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Ie.isMobile())return null;const t=this.connectors.find(r=>r.type==="WALLET_CONNECT");return t?se`
      <wui-list-wallet
        imageSrc=${Ve(ct.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=ut.state;return t!=null&&t.length?this.filterOutDuplicateWallets(t).map(n=>se`
        <wui-list-wallet
          imageSrc=${Ve(ct.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:t}=We.state;return t.length?this.filterOutDuplicateWallets(t).map(n=>se`
        <wui-list-wallet
          imageSrc=${Ve(ct.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return lr.getRecentWallets().map(r=>se`
        <wui-list-wallet
          imageSrc=${Ve(ct.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>t.type!=="ANNOUNCED"?null:se`
        <wui-list-wallet
          imageSrc=${Ve(ct.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const t=this.connectors.find(r=>r.type==="ANNOUNCED");return this.connectors.map(r=>r.type!=="INJECTED"||!qe.checkInstalled()?null:se`
        <wui-list-wallet
          imageSrc=${Ve(ct.getConnectorImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnector(r)}
          tagLabel=${Ve(t?void 0:"installed")}
          tagVariant=${Ve(t?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:se`
        <wui-list-wallet
          imageSrc=${Ve(ct.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const t=Math.floor(We.state.count/10)*10;return se`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t}=We.state,{customWallets:r,featuredWalletIds:n}=ut.state,{connectors:o}=Kr.state,i=lr.getRecentWallets(),s=o.filter(d=>d.type==="ANNOUNCED");if(n||r||!t.length)return null;const a=s.length+i.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(t).slice(0,l).map(d=>se`
        <wui-list-wallet
          imageSrc=${Ve(ct.getWalletImage(d))}
          name=${(d==null?void 0:d.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
        >
        </wui-list-wallet>
      `)}onConnector(t){t.type==="WALLET_CONNECT"?Ie.isMobile()?De.push("AllWallets"):De.push("ConnectingWalletConnect"):De.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){const{connectors:r}=Kr.state,o=lr.getRecentWallets().map(a=>a.id),i=r.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return t.filter(a=>!o.includes(a.id)&&!i.includes(a.rdns??void 0))}onAllWallets(){Je.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),De.push("AllWallets")}onConnectWallet(t){De.push("ConnectingWalletConnect",{wallet:t})}};Ja.styles=q8;$g([Le()],Ja.prototype,"connectors",void 0);Ja=$g([me("w3m-connect-view")],Ja);const Y8=Ut`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Ti=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};class qt extends ze{constructor(){var t,r,n,o;super(),this.wallet=(t=De.state.data)==null?void 0:t.wallet,this.connector=(r=De.state.data)==null?void 0:r.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ct.getWalletImage(this.wallet)??ct.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=qe.state.wcUri,this.error=qe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(qe.subscribeKey("wcUri",i=>{var s;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),qe.subscribeKey("wcError",i=>this.error=i),qe.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),se`
      <wui-flex
        data-error=${Ve(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Ve(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?se`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,r;this.buffering||(qe.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(r=this.onConnect)==null||r.call(this))}loaderTemplate(){const t=df.state.themeVariables["--w3m-border-radius-master"],r=t?parseInt(t.replace("px",""),10):4;return se`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Ie.copyToClopboard(this.uri),cr.showSuccess("Link copied"))}catch{cr.showError("Failed to copy")}}}qt.styles=Y8;Ti([Le()],qt.prototype,"uri",void 0);Ti([Le()],qt.prototype,"error",void 0);Ti([Le()],qt.prototype,"ready",void 0);Ti([Le()],qt.prototype,"showRetry",void 0);Ti([Le()],qt.prototype,"buffering",void 0);Ti([bt({type:Boolean})],qt.prototype,"isMobile",void 0);Ti([bt()],qt.prototype,"onRetry",void 0);var Z8=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const Q8={INJECTED:"browser",ANNOUNCED:"browser"};let Y0=class extends qt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:Q8[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&lr.setConnectedWalletImageUrl(this.connector.imageUrl),await qe.connectExternal(this.connector),Nt.close(),Je.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){Je.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Y0=Z8([me("w3m-connecting-external-view")],Y0);var J8=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Z0=class extends ze{constructor(){var t,r;super(...arguments),this.dappUrl=(t=ut.state.metadata)==null?void 0:t.url,this.dappName=(r=ut.state.metadata)==null?void 0:r.name}render(){return se`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?se`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&Ie.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){De.goBack()}};Z0=J8([me("w3m-connecting-siwe-view")],Z0);var kf=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Xa=class extends ze{constructor(){var t;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(t=De.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Vo.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),se`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):se`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:r}=qe.state;if(t||Ie.isPairingExpired(r)){if(qe.connectWalletConnect(),this.wallet){const n=ct.getWalletImage(this.wallet);n&&lr.setConnectedWalletImageUrl(n)}else{const o=Kr.state.connectors.find(s=>s.type==="WALLET_CONNECT"),i=ct.getConnectorImage(o);i&&lr.setConnectedWalletImageUrl(i)}await qe.state.wcPromise,this.finalizeConnection(),Nt.close()}}catch(r){Je.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(r==null?void 0:r.message)??"Unknown"}}),qe.setWcError(!0),Ie.isAllowedRetry(this.lastRetry)&&(cr.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:t,recentWallet:r}=qe.state;t&&lr.setWalletConnectDeepLink(t),r&&lr.setWeb3ModalRecent(r),Je.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:t,desktop_link:r,webapp_link:n,injected:o,rdns:i}=this.wallet,s=o==null?void 0:o.map(({injected_id:_})=>_).filter(Boolean),a=i?[i]:s??[],l=a.length,h=t,d=n,p=qe.checkInstalled(a),g=l&&p,E=r&&!Ie.isMobile();g&&this.platforms.push("browser"),h&&this.platforms.push(Ie.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),E&&this.platforms.push("desktop"),!g&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return se`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return se`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return se`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return se`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return se`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return se`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?se`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var n;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("div");r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};kf([Le()],Xa.prototype,"platform",void 0);kf([Le()],Xa.prototype,"platforms",void 0);Xa=kf([me("w3m-connecting-wc-view")],Xa);var X8=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Q0=class extends ze{constructor(){var t;super(...arguments),this.wallet=(t=De.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return se`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?se`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?se`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?se`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?se`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&Ie.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&Ie.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&Ie.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&Ie.openHref(this.wallet.homepage,"_blank")}};Q0=X8([me("w3m-downloads-view")],Q0);var ex=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const tx="https://walletconnect.com/explorer";let J0=class extends ze{render(){return se`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Ie.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:r}=We.state,{customWallets:n}=ut.state;return[...r,...n??[],...t].slice(0,4).map(i=>se`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Ve(ct.getWalletImage(i))}
          @click=${()=>{Ie.openHref(i.homepage??tx,"_blank")}}
        ></wui-list-wallet>
      `)}};J0=ex([me("w3m-get-wallet-view")],J0);const rx=Ut`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Ml=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let mo=class extends ze{constructor(){var t;super(),this.network=(t=De.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Ct.state.caipNetwork,this.unsubscribe.push(Ct.subscribeKey("caipNetwork",r=>{var n;(r==null?void 0:r.id)!==((n=this.currentNetwork)==null?void 0:n.id)&&De.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",r=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return se`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Ve(ct.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:se`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Ct.switchActiveNetwork(this.network),De.goBack())}catch{this.error=!0}}};mo.styles=rx;Ml([Le()],mo.prototype,"showRetry",void 0);Ml([Le()],mo.prototype,"error",void 0);Ml([Le()],mo.prototype,"currentNetwork",void 0);mo=Ml([me("w3m-network-switch-view")],mo);var Rg=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let fu=class extends ze{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ct.state.caipNetwork,this.unsubscribe.push(Ct.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Je.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),De.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:r,supportsAllNetworks:n}=Ct.state,o=t,i=r;return o!=null&&o.length&&(i==null||i.sort((s,a)=>o.indexOf(a.id)-o.indexOf(s.id))),i==null?void 0:i.map(s=>{var a;return se`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${Ve(ct.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!n&&!(o!=null&&o.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(t){const{isConnected:r}=ot.state,{approvedCaipNetworkIds:n,supportsAllNetworks:o,caipNetwork:i}=Ct.state;r&&(i==null?void 0:i.id)!==t.id?n!=null&&n.includes(t.id)?await Ct.switchActiveNetwork(t):o&&De.push("SwitchNetwork",{network:t}):r||(Ct.setCaipNetwork(t),De.push("Connect"))}};Rg([Le()],fu.prototype,"caipNetwork",void 0);fu=Rg([me("w3m-networks-view")],fu);const nx=Ut`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var Si=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const ua="last-transaction",ix=7;let Jr=class extends ze{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=ot.state.address,this.transactions=mr.state.transactions,this.transactionsByYear=mr.state.transactionsByYear,this.loading=mr.state.loading,this.empty=mr.state.empty,this.next=mr.state.next,this.unsubscribe.push(ot.subscribe(t=>{t.isConnected&&this.address!==t.address&&(this.address=t.address,mr.resetTransactions(),mr.fetchTransactions(t.address))}),mr.subscribe(t=>{this.transactions=t.transactions,this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.transactions.length===0&&mr.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const t=Object.keys(this.transactionsByYear).sort().reverse();return t.map((r,n)=>{const o=n===t.length-1,i=parseInt(r,10),s=ji.getTransactionGroupTitle(i),a=this.transactionsByYear[i];return a?se`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,o)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(t,r){const{date:n,descriptions:o,direction:i,isAllNFT:s,images:a,status:l,transfers:h,type:d}=this.getTransactionListItemProps(t),p=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!s?se`
        <wui-transaction-list-item
          date=${n}
          direction=${i}
          id=${r&&this.next?ua:""}
          status=${l}
          type=${d}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:p?h.map((E,_)=>{const I=ji.getTransferDescription(E),P=r&&_===h.length-1;return se` <wui-transaction-list-item
          date=${n}
          direction=${E.direction}
          id=${P&&this.next?ua:""}
          status=${l}
          type=${d}
          onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[_]]}
          .descriptions=${[I]}
        ></wui-transaction-list-item>`}):se`
      <wui-transaction-list-item
        date=${n}
        direction=${i}
        id=${r&&this.next?ua:""}
        status=${l}
        type=${d}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(t,r){return t.map((n,o)=>{const i=r&&o===t.length-1;return se`${this.templateRenderTransaction(n,i)}`})}templateEmpty(){return se`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(ix).fill(se` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}createPaginationObserver(){const{projectId:t}=ut.state;this.paginationObserver=new IntersectionObserver(([r])=>{r!=null&&r.isIntersecting&&!this.loading&&(mr.fetchTransactions(this.address),Je.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:t,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var r,n,o;(r=this.paginationObserver)==null||r.disconnect();const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${ua}`);t&&((o=this.paginationObserver)==null||o.observe(t))}getTransactionListItemProps(t){var l,h,d,p,g;const r=bg.getRelativeDateFromNow((l=t==null?void 0:t.metadata)==null?void 0:l.minedAt),n=ji.getTransactionDescriptions(t),o=t==null?void 0:t.transfers,i=(h=t==null?void 0:t.transfers)==null?void 0:h[0],s=!!i&&((d=t==null?void 0:t.transfers)==null?void 0:d.every(E=>!!E.nft_info)),a=ji.getTransactionImages(o);return{date:r,direction:i==null?void 0:i.direction,descriptions:n,isAllNFT:s,images:a,status:(p=t.metadata)==null?void 0:p.status,transfers:o,type:(g=t.metadata)==null?void 0:g.operationType}}};Jr.styles=nx;Si([Le()],Jr.prototype,"address",void 0);Si([Le()],Jr.prototype,"transactions",void 0);Si([Le()],Jr.prototype,"transactionsByYear",void 0);Si([Le()],Jr.prototype,"loading",void 0);Si([Le()],Jr.prototype,"empty",void 0);Si([Le()],Jr.prototype,"next",void 0);Jr=Si([me("w3m-transactions-view")],Jr);var ox=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const sx=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let X0=class extends ze{render(){return se`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${sx}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Ie.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};X0=ox([me("w3m-what-is-a-network-view")],X0);var ax=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const lx=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let eh=class extends ze{render(){return se`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${lx}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Je.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),De.push("GetWallet")}};eh=ax([me("w3m-what-is-a-wallet-view")],eh);const cx=Ut`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var qs=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const th="local-paginator";let vi=class extends ze{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!We.state.wallets.length,this.wallets=We.state.wallets,this.recommended=We.state.recommended,this.featured=We.state.featured,this.unsubscribe.push(We.subscribeKey("wallets",t=>this.wallets=t),We.subscribeKey("recommended",t=>this.recommended=t),We.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(r=>r()),(t=this.paginationObserver)==null||t.disconnect()}render(){return se`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-grid");this.initial&&t&&(await We.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,r){return[...Array(t)].map(()=>se`
        <wui-card-select-loader type="wallet" id=${Ve(r)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(r=>se`
        <wui-card-select
          imageSrc=${Ve(ct.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:r,featured:n,count:o}=We.state,i=window.innerWidth<352?3:4,s=t.length+r.length;let l=Math.ceil(s/i)*i-s+i;return l-=t.length?n.length%i:0,o===0||[...n,...t,...r].length<o?this.shimmerTemplate(l,th):null}createPaginationObserver(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${th}`);t&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.initial){const{page:o,count:i,wallets:s}=We.state;s.length<i&&We.fetchWallets({page:o+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:r}=Kr.state,n=r.find(({explorerId:o})=>o===t.id);n?De.push("ConnectingExternal",{connector:n}):De.push("ConnectingWalletConnect",{wallet:t})}};vi.styles=cx;qs([Le()],vi.prototype,"initial",void 0);qs([Le()],vi.prototype,"wallets",void 0);qs([Le()],vi.prototype,"recommended",void 0);qs([Le()],vi.prototype,"featured",void 0);vi=qs([me("w3m-all-wallets-list")],vi);const ux=Ut`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Pf=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ns=class extends ze{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?se`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await We.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=We.state;return t.length?se`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(r=>se`
            <wui-card-select
              imageSrc=${Ve(ct.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:se`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:r}=Kr.state,n=r.find(({explorerId:o})=>o===t.id);n?De.push("ConnectingExternal",{connector:n}):De.push("ConnectingWalletConnect",{wallet:t})}};Ns.styles=ux;Pf([Le()],Ns.prototype,"loading",void 0);Pf([bt()],Ns.prototype,"query",void 0);Ns=Pf([me("w3m-all-wallets-search")],Ns);var Bl=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ls=class extends ze{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(qe.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return se`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(r=>r==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:r==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:r==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:r==="web"?{label:"Webapp",icon:"browser",platform:"web"}:r==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:r})=>r),t}onTabChange(t){var n;const r=this.platformTabs[t];r&&((n=this.onSelectPlatfrom)==null||n.call(this,r))}};Bl([bt({type:Array})],Ls.prototype,"platforms",void 0);Bl([bt()],Ls.prototype,"onSelectPlatfrom",void 0);Bl([Le()],Ls.prototype,"buffering",void 0);Ls=Bl([me("w3m-connecting-header")],Ls);var fx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let rh=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=Kr.state,r=t.find(o=>{var i,s;return o.type==="ANNOUNCED"&&((i=o.info)==null?void 0:i.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),n=t.find(o=>o.type==="INJECTED");r?await qe.connectExternal(r):n&&await qe.connectExternal(n),Nt.close(),Je.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){Je.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};rh=fx([me("w3m-connecting-wc-browser")],rh);var dx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let nh=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var t;(t=this.onConnect)==null||t.call(this)},200))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:r,name:n}=this.wallet,{redirect:o,href:i}=Ie.formatNativeUrl(r,this.uri);qe.setWcLinking({name:n,href:i}),qe.setRecentWallet(this.wallet),Ie.openHref(o,"_self")}catch{this.error=!0}}};nh=dx([me("w3m-connecting-wc-desktop")],nh);var hx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ih=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:r,name:n}=this.wallet,{redirect:o,href:i}=Ie.formatNativeUrl(r,this.uri);qe.setWcLinking({name:n,href:i}),qe.setRecentWallet(this.wallet),Ie.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const t=Ie.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(qe.setBuffering(!0),setTimeout(()=>{qe.setBuffering(!1)},5e3))}};ih=hx([me("w3m-connecting-wc-mobile")],ih);const px=Ut`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var gx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let du=class extends qt{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),se`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,r=this.wallet?this.wallet.name:void 0;return qe.setWcLinking(void 0),qe.setRecentWallet(this.wallet),se`<wui-qr-code
      size=${t}
      theme=${df.state.themeMode}
      uri=${this.uri}
      imageSrc=${Ve(ct.getWalletImage(this.wallet))}
      alt=${Ve(r)}
    ></wui-qr-code>`}};du.styles=px;du=gx([me("w3m-connecting-wc-qrcode")],du);const mx=Ut`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var wx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let hu=class extends ze{constructor(){var t;super(...arguments),this.dappImageUrl=(t=ut.state.metadata)==null?void 0:t.icons,this.walletImageUrl=lr.getConnectedWalletImageUrl()}firstUpdated(){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return se`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,r){t.animate([{transform:"translateX(0px)"},{transform:r}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};hu.styles=mx;hu=wx([me("w3m-connecting-siwe")],hu);var vx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let oh=class extends ze{constructor(){var t;if(super(),this.wallet=(t=De.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return se`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Ve(ct.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};oh=vx([me("w3m-connecting-wc-unsupported")],oh);var bx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let sh=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Je.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:r,name:n}=this.wallet,{redirect:o,href:i}=Ie.formatUniversalUrl(r,this.uri);qe.setWcLinking({name:n,href:i}),qe.setRecentWallet(this.wallet),Ie.openHref(o,"_blank")}catch{this.error=!0}}};sh=bx([me("w3m-connecting-wc-web")],sh);const yx=Ut`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Dl=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};function ah(){var o,i,s,a,l,h;const e=(i=(o=De.state.data)==null?void 0:o.connector)==null?void 0:i.name,t=(a=(s=De.state.data)==null?void 0:s.wallet)==null?void 0:a.name,r=(h=(l=De.state.data)==null?void 0:l.network)==null?void 0:h.name,n=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:n?`Get ${n}`:"Downloads",Transactions:"Activity"}}let wo=class extends ze{constructor(){super(),this.unsubscribe=[],this.heading=ah()[De.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(De.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),qe.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${Nt.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Je.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),De.push("WhatIsAWallet")}titleTemplate(){return se`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=De.state,r=t==="Connect";return this.showBack?se`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${De.goBack}
      ></wui-icon-link>`:se`<wui-icon-link
      data-hidden=${!r}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?se`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){var n;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-text");if(r){const o=ah()[t];await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var n;const{history:t}=De.state,r=(n=this.shadowRoot)==null?void 0:n.querySelector("#dynamic");t.length>1&&!this.showBack&&r?(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};wo.styles=[yx];Dl([Le()],wo.prototype,"heading",void 0);Dl([Le()],wo.prototype,"buffering",void 0);Dl([Le()],wo.prototype,"showBack",void 0);wo=Dl([me("w3m-header")],wo);var Og=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let pu=class extends ze{constructor(){super(...arguments),this.data=[]}render(){return se`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>se`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(r=>se`<wui-visual name=${r}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Og([bt({type:Array})],pu.prototype,"data",void 0);pu=Og([me("w3m-help-widget")],pu);const _x=Ut`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var xx=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let gu=class extends ze{render(){const{termsConditionsUrl:t,privacyPolicyUrl:r}=ut.state;return!t&&!r?null:se`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:r}=ut.state;return t&&r?"and":""}termsTemplate(){const{termsConditionsUrl:t}=ut.state;return t?se`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=ut.state;return t?se`<a href=${t}>Privacy Policy</a>`:null}};gu.styles=[_x];gu=xx([me("w3m-legal-footer")],gu);const Ax=Ut`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Ng=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let el=class extends ze{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:r,play_store:n,chrome_store:o,homepage:i}=this.wallet,s=Ie.isMobile(),a=Ie.isIos(),l=Ie.isAndroid(),h=[r,n,i,o].filter(Boolean).length>1,d=Qe.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return h&&!s?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>De.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&i?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:r&&a?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&l?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&Ie.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&Ie.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&Ie.openHref(this.wallet.homepage,"_blank")}};el.styles=[Ax];Ng([bt({type:Object})],el.prototype,"wallet",void 0);el=Ng([me("w3m-mobile-download-links")],el);const Ex=Ut`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var Lg=globalThis&&globalThis.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const Cx={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let tl=class extends ze{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=cr.state.open,this.unsubscribe.push(cr.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:r}=cr.state,n=Cx[r];return se`
      <wui-snackbar
        message=${t}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>cr.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};tl.styles=Ex;Lg([Le()],tl.prototype,"open",void 0);tl=Lg([me("w3m-snackbar")],tl);globalThis&&globalThis.__classPrivateFieldSet;globalThis&&globalThis.__classPrivateFieldGet;var kg={},Fl={};Fl.byteLength=Ix;Fl.toByteArray=Rx;Fl.fromByteArray=Lx;var Or=[],sr=[],Tx=typeof Uint8Array<"u"?Uint8Array:Array,Tc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Pi=0,Sx=Tc.length;Pi<Sx;++Pi)Or[Pi]=Tc[Pi],sr[Tc.charCodeAt(Pi)]=Pi;sr["-".charCodeAt(0)]=62;sr["_".charCodeAt(0)]=63;function Pg(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");r===-1&&(r=t);var n=r===t?0:4-r%4;return[r,n]}function Ix(e){var t=Pg(e),r=t[0],n=t[1];return(r+n)*3/4-n}function $x(e,t,r){return(t+r)*3/4-r}function Rx(e){var t,r=Pg(e),n=r[0],o=r[1],i=new Tx($x(e,n,o)),s=0,a=o>0?n-4:n,l;for(l=0;l<a;l+=4)t=sr[e.charCodeAt(l)]<<18|sr[e.charCodeAt(l+1)]<<12|sr[e.charCodeAt(l+2)]<<6|sr[e.charCodeAt(l+3)],i[s++]=t>>16&255,i[s++]=t>>8&255,i[s++]=t&255;return o===2&&(t=sr[e.charCodeAt(l)]<<2|sr[e.charCodeAt(l+1)]>>4,i[s++]=t&255),o===1&&(t=sr[e.charCodeAt(l)]<<10|sr[e.charCodeAt(l+1)]<<4|sr[e.charCodeAt(l+2)]>>2,i[s++]=t>>8&255,i[s++]=t&255),i}function Ox(e){return Or[e>>18&63]+Or[e>>12&63]+Or[e>>6&63]+Or[e&63]}function Nx(e,t,r){for(var n,o=[],i=t;i<r;i+=3)n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(e[i+2]&255),o.push(Ox(n));return o.join("")}function Lx(e){for(var t,r=e.length,n=r%3,o=[],i=16383,s=0,a=r-n;s<a;s+=i)o.push(Nx(e,s,s+i>a?a:s+i));return n===1?(t=e[r-1],o.push(Or[t>>2]+Or[t<<4&63]+"==")):n===2&&(t=(e[r-2]<<8)+e[r-1],o.push(Or[t>>10]+Or[t>>4&63]+Or[t<<2&63]+"=")),o.join("")}var Mf={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Mf.read=function(e,t,r,n,o){var i,s,a=o*8-n-1,l=(1<<a)-1,h=l>>1,d=-7,p=r?o-1:0,g=r?-1:1,E=e[t+p];for(p+=g,i=E&(1<<-d)-1,E>>=-d,d+=a;d>0;i=i*256+e[t+p],p+=g,d-=8);for(s=i&(1<<-d)-1,i>>=-d,d+=n;d>0;s=s*256+e[t+p],p+=g,d-=8);if(i===0)i=1-h;else{if(i===l)return s?NaN:(E?-1:1)*(1/0);s=s+Math.pow(2,n),i=i-h}return(E?-1:1)*s*Math.pow(2,i-n)};Mf.write=function(e,t,r,n,o,i){var s,a,l,h=i*8-o-1,d=(1<<h)-1,p=d>>1,g=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,E=n?0:i-1,_=n?1:-1,I=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+p>=1?t+=g/l:t+=g*Math.pow(2,1-p),t*l>=2&&(s++,l/=2),s+p>=d?(a=0,s=d):s+p>=1?(a=(t*l-1)*Math.pow(2,o),s=s+p):(a=t*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;e[r+E]=a&255,E+=_,a/=256,o-=8);for(s=s<<o|a,h+=o;h>0;e[r+E]=s&255,E+=_,s/=256,h-=8);e[r+E-_]|=I*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=Fl,r=Mf,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=A,e.INSPECT_MAX_BYTES=50;const o=2147483647;e.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=i(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const f=new Uint8Array(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,Uint8Array.prototype),Object.setPrototypeOf(f,c),f.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(f){if(f>o)throw new RangeError('The value "'+f+'" is invalid for option "size"');const c=new Uint8Array(f);return Object.setPrototypeOf(c,a.prototype),c}function a(f,c,u){if(typeof f=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(f)}return l(f,c,u)}a.poolSize=8192;function l(f,c,u){if(typeof f=="string")return g(f,c);if(ArrayBuffer.isView(f))return _(f);if(f==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f);if(ye(f,ArrayBuffer)||f&&ye(f.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ye(f,SharedArrayBuffer)||f&&ye(f.buffer,SharedArrayBuffer)))return I(f,c,u);if(typeof f=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const b=f.valueOf&&f.valueOf();if(b!=null&&b!==f)return a.from(b,c,u);const T=P(f);if(T)return T;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof f[Symbol.toPrimitive]=="function")return a.from(f[Symbol.toPrimitive]("string"),c,u);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f)}a.from=function(f,c,u){return l(f,c,u)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function h(f){if(typeof f!="number")throw new TypeError('"size" argument must be of type number');if(f<0)throw new RangeError('The value "'+f+'" is invalid for option "size"')}function d(f,c,u){return h(f),f<=0?s(f):c!==void 0?typeof u=="string"?s(f).fill(c,u):s(f).fill(c):s(f)}a.alloc=function(f,c,u){return d(f,c,u)};function p(f){return h(f),s(f<0?0:C(f)|0)}a.allocUnsafe=function(f){return p(f)},a.allocUnsafeSlow=function(f){return p(f)};function g(f,c){if((typeof c!="string"||c==="")&&(c="utf8"),!a.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const u=z(f,c)|0;let b=s(u);const T=b.write(f,c);return T!==u&&(b=b.slice(0,T)),b}function E(f){const c=f.length<0?0:C(f.length)|0,u=s(c);for(let b=0;b<c;b+=1)u[b]=f[b]&255;return u}function _(f){if(ye(f,Uint8Array)){const c=new Uint8Array(f);return I(c.buffer,c.byteOffset,c.byteLength)}return E(f)}function I(f,c,u){if(c<0||f.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(f.byteLength<c+(u||0))throw new RangeError('"length" is outside of buffer bounds');let b;return c===void 0&&u===void 0?b=new Uint8Array(f):u===void 0?b=new Uint8Array(f,c):b=new Uint8Array(f,c,u),Object.setPrototypeOf(b,a.prototype),b}function P(f){if(a.isBuffer(f)){const c=C(f.length)|0,u=s(c);return u.length===0||f.copy(u,0,0,c),u}if(f.length!==void 0)return typeof f.length!="number"||pe(f.length)?s(0):E(f);if(f.type==="Buffer"&&Array.isArray(f.data))return E(f.data)}function C(f){if(f>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return f|0}function A(f){return+f!=f&&(f=0),a.alloc(+f)}a.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==a.prototype},a.compare=function(c,u){if(ye(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),ye(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),!a.isBuffer(c)||!a.isBuffer(u))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===u)return 0;let b=c.length,T=u.length;for(let B=0,U=Math.min(b,T);B<U;++B)if(c[B]!==u[B]){b=c[B],T=u[B];break}return b<T?-1:T<b?1:0},a.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(c,u){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return a.alloc(0);let b;if(u===void 0)for(u=0,b=0;b<c.length;++b)u+=c[b].length;const T=a.allocUnsafe(u);let B=0;for(b=0;b<c.length;++b){let U=c[b];if(ye(U,Uint8Array))B+U.length>T.length?(a.isBuffer(U)||(U=a.from(U)),U.copy(T,B)):Uint8Array.prototype.set.call(T,U,B);else if(a.isBuffer(U))U.copy(T,B);else throw new TypeError('"list" argument must be an Array of Buffers');B+=U.length}return T};function z(f,c){if(a.isBuffer(f))return f.length;if(ArrayBuffer.isView(f)||ye(f,ArrayBuffer))return f.byteLength;if(typeof f!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof f);const u=f.length,b=arguments.length>2&&arguments[2]===!0;if(!b&&u===0)return 0;let T=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return u;case"utf8":case"utf-8":return Q(f).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u*2;case"hex":return u>>>1;case"base64":return le(f).length;default:if(T)return b?-1:Q(f).length;c=(""+c).toLowerCase(),T=!0}}a.byteLength=z;function N(f,c,u){let b=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((u===void 0||u>this.length)&&(u=this.length),u<=0)||(u>>>=0,c>>>=0,u<=c))return"";for(f||(f="utf8");;)switch(f){case"hex":return G(this,c,u);case"utf8":case"utf-8":return j(this,c,u);case"ascii":return F(this,c,u);case"latin1":case"binary":return D(this,c,u);case"base64":return W(this,c,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return te(this,c,u);default:if(b)throw new TypeError("Unknown encoding: "+f);f=(f+"").toLowerCase(),b=!0}}a.prototype._isBuffer=!0;function V(f,c,u){const b=f[c];f[c]=f[u],f[u]=b}a.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let u=0;u<c;u+=2)V(this,u,u+1);return this},a.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let u=0;u<c;u+=4)V(this,u,u+3),V(this,u+1,u+2);return this},a.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let u=0;u<c;u+=8)V(this,u,u+7),V(this,u+1,u+6),V(this,u+2,u+5),V(this,u+3,u+4);return this},a.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?j(this,0,c):N.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(c){if(!a.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:a.compare(this,c)===0},a.prototype.inspect=function(){let c="";const u=e.INSPECT_MAX_BYTES;return c=this.toString("hex",0,u).replace(/(.{2})/g,"$1 ").trim(),this.length>u&&(c+=" ... "),"<Buffer "+c+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(c,u,b,T,B){if(ye(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),!a.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(u===void 0&&(u=0),b===void 0&&(b=c?c.length:0),T===void 0&&(T=0),B===void 0&&(B=this.length),u<0||b>c.length||T<0||B>this.length)throw new RangeError("out of range index");if(T>=B&&u>=b)return 0;if(T>=B)return-1;if(u>=b)return 1;if(u>>>=0,b>>>=0,T>>>=0,B>>>=0,this===c)return 0;let U=B-T,ee=b-u;const ge=Math.min(U,ee),ve=this.slice(T,B),_e=c.slice(u,b);for(let Se=0;Se<ge;++Se)if(ve[Se]!==_e[Se]){U=ve[Se],ee=_e[Se];break}return U<ee?-1:ee<U?1:0};function q(f,c,u,b,T){if(f.length===0)return-1;if(typeof u=="string"?(b=u,u=0):u>2147483647?u=2147483647:u<-2147483648&&(u=-2147483648),u=+u,pe(u)&&(u=T?0:f.length-1),u<0&&(u=f.length+u),u>=f.length){if(T)return-1;u=f.length-1}else if(u<0)if(T)u=0;else return-1;if(typeof c=="string"&&(c=a.from(c,b)),a.isBuffer(c))return c.length===0?-1:Y(f,c,u,b,T);if(typeof c=="number")return c=c&255,typeof Uint8Array.prototype.indexOf=="function"?T?Uint8Array.prototype.indexOf.call(f,c,u):Uint8Array.prototype.lastIndexOf.call(f,c,u):Y(f,[c],u,b,T);throw new TypeError("val must be string, number or Buffer")}function Y(f,c,u,b,T){let B=1,U=f.length,ee=c.length;if(b!==void 0&&(b=String(b).toLowerCase(),b==="ucs2"||b==="ucs-2"||b==="utf16le"||b==="utf-16le")){if(f.length<2||c.length<2)return-1;B=2,U/=2,ee/=2,u/=2}function ge(_e,Se){return B===1?_e[Se]:_e.readUInt16BE(Se*B)}let ve;if(T){let _e=-1;for(ve=u;ve<U;ve++)if(ge(f,ve)===ge(c,_e===-1?0:ve-_e)){if(_e===-1&&(_e=ve),ve-_e+1===ee)return _e*B}else _e!==-1&&(ve-=ve-_e),_e=-1}else for(u+ee>U&&(u=U-ee),ve=u;ve>=0;ve--){let _e=!0;for(let Se=0;Se<ee;Se++)if(ge(f,ve+Se)!==ge(c,Se)){_e=!1;break}if(_e)return ve}return-1}a.prototype.includes=function(c,u,b){return this.indexOf(c,u,b)!==-1},a.prototype.indexOf=function(c,u,b){return q(this,c,u,b,!0)},a.prototype.lastIndexOf=function(c,u,b){return q(this,c,u,b,!1)};function y(f,c,u,b){u=Number(u)||0;const T=f.length-u;b?(b=Number(b),b>T&&(b=T)):b=T;const B=c.length;b>B/2&&(b=B/2);let U;for(U=0;U<b;++U){const ee=parseInt(c.substr(U*2,2),16);if(pe(ee))return U;f[u+U]=ee}return U}function x(f,c,u,b){return ie(Q(c,f.length-u),f,u,b)}function S(f,c,u,b){return ie(ne(c),f,u,b)}function k(f,c,u,b){return ie(le(c),f,u,b)}function $(f,c,u,b){return ie(ae(c,f.length-u),f,u,b)}a.prototype.write=function(c,u,b,T){if(u===void 0)T="utf8",b=this.length,u=0;else if(b===void 0&&typeof u=="string")T=u,b=this.length,u=0;else if(isFinite(u))u=u>>>0,isFinite(b)?(b=b>>>0,T===void 0&&(T="utf8")):(T=b,b=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const B=this.length-u;if((b===void 0||b>B)&&(b=B),c.length>0&&(b<0||u<0)||u>this.length)throw new RangeError("Attempt to write outside buffer bounds");T||(T="utf8");let U=!1;for(;;)switch(T){case"hex":return y(this,c,u,b);case"utf8":case"utf-8":return x(this,c,u,b);case"ascii":case"latin1":case"binary":return S(this,c,u,b);case"base64":return k(this,c,u,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $(this,c,u,b);default:if(U)throw new TypeError("Unknown encoding: "+T);T=(""+T).toLowerCase(),U=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function W(f,c,u){return c===0&&u===f.length?t.fromByteArray(f):t.fromByteArray(f.slice(c,u))}function j(f,c,u){u=Math.min(f.length,u);const b=[];let T=c;for(;T<u;){const B=f[T];let U=null,ee=B>239?4:B>223?3:B>191?2:1;if(T+ee<=u){let ge,ve,_e,Se;switch(ee){case 1:B<128&&(U=B);break;case 2:ge=f[T+1],(ge&192)===128&&(Se=(B&31)<<6|ge&63,Se>127&&(U=Se));break;case 3:ge=f[T+1],ve=f[T+2],(ge&192)===128&&(ve&192)===128&&(Se=(B&15)<<12|(ge&63)<<6|ve&63,Se>2047&&(Se<55296||Se>57343)&&(U=Se));break;case 4:ge=f[T+1],ve=f[T+2],_e=f[T+3],(ge&192)===128&&(ve&192)===128&&(_e&192)===128&&(Se=(B&15)<<18|(ge&63)<<12|(ve&63)<<6|_e&63,Se>65535&&Se<1114112&&(U=Se))}}U===null?(U=65533,ee=1):U>65535&&(U-=65536,b.push(U>>>10&1023|55296),U=56320|U&1023),b.push(U),T+=ee}return R(b)}const O=4096;function R(f){const c=f.length;if(c<=O)return String.fromCharCode.apply(String,f);let u="",b=0;for(;b<c;)u+=String.fromCharCode.apply(String,f.slice(b,b+=O));return u}function F(f,c,u){let b="";u=Math.min(f.length,u);for(let T=c;T<u;++T)b+=String.fromCharCode(f[T]&127);return b}function D(f,c,u){let b="";u=Math.min(f.length,u);for(let T=c;T<u;++T)b+=String.fromCharCode(f[T]);return b}function G(f,c,u){const b=f.length;(!c||c<0)&&(c=0),(!u||u<0||u>b)&&(u=b);let T="";for(let B=c;B<u;++B)T+=H[f[B]];return T}function te(f,c,u){const b=f.slice(c,u);let T="";for(let B=0;B<b.length-1;B+=2)T+=String.fromCharCode(b[B]+b[B+1]*256);return T}a.prototype.slice=function(c,u){const b=this.length;c=~~c,u=u===void 0?b:~~u,c<0?(c+=b,c<0&&(c=0)):c>b&&(c=b),u<0?(u+=b,u<0&&(u=0)):u>b&&(u=b),u<c&&(u=c);const T=this.subarray(c,u);return Object.setPrototypeOf(T,a.prototype),T};function re(f,c,u){if(f%1!==0||f<0)throw new RangeError("offset is not uint");if(f+c>u)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(c,u,b){c=c>>>0,u=u>>>0,b||re(c,u,this.length);let T=this[c],B=1,U=0;for(;++U<u&&(B*=256);)T+=this[c+U]*B;return T},a.prototype.readUintBE=a.prototype.readUIntBE=function(c,u,b){c=c>>>0,u=u>>>0,b||re(c,u,this.length);let T=this[c+--u],B=1;for(;u>0&&(B*=256);)T+=this[c+--u]*B;return T},a.prototype.readUint8=a.prototype.readUInt8=function(c,u){return c=c>>>0,u||re(c,1,this.length),this[c]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(c,u){return c=c>>>0,u||re(c,2,this.length),this[c]|this[c+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(c,u){return c=c>>>0,u||re(c,2,this.length),this[c]<<8|this[c+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(c,u){return c=c>>>0,u||re(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(c,u){return c=c>>>0,u||re(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},a.prototype.readBigUInt64LE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,B=this[++c]+this[++c]*2**8+this[++c]*2**16+b*2**24;return BigInt(T)+(BigInt(B)<<BigInt(32))}),a.prototype.readBigUInt64BE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=u*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],B=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+b;return(BigInt(T)<<BigInt(32))+BigInt(B)}),a.prototype.readIntLE=function(c,u,b){c=c>>>0,u=u>>>0,b||re(c,u,this.length);let T=this[c],B=1,U=0;for(;++U<u&&(B*=256);)T+=this[c+U]*B;return B*=128,T>=B&&(T-=Math.pow(2,8*u)),T},a.prototype.readIntBE=function(c,u,b){c=c>>>0,u=u>>>0,b||re(c,u,this.length);let T=u,B=1,U=this[c+--T];for(;T>0&&(B*=256);)U+=this[c+--T]*B;return B*=128,U>=B&&(U-=Math.pow(2,8*u)),U},a.prototype.readInt8=function(c,u){return c=c>>>0,u||re(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},a.prototype.readInt16LE=function(c,u){c=c>>>0,u||re(c,2,this.length);const b=this[c]|this[c+1]<<8;return b&32768?b|4294901760:b},a.prototype.readInt16BE=function(c,u){c=c>>>0,u||re(c,2,this.length);const b=this[c+1]|this[c]<<8;return b&32768?b|4294901760:b},a.prototype.readInt32LE=function(c,u){return c=c>>>0,u||re(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},a.prototype.readInt32BE=function(c,u){return c=c>>>0,u||re(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},a.prototype.readBigInt64LE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(b<<24);return(BigInt(T)<<BigInt(32))+BigInt(u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),a.prototype.readBigInt64BE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=(u<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(T)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+b)}),a.prototype.readFloatLE=function(c,u){return c=c>>>0,u||re(c,4,this.length),r.read(this,c,!0,23,4)},a.prototype.readFloatBE=function(c,u){return c=c>>>0,u||re(c,4,this.length),r.read(this,c,!1,23,4)},a.prototype.readDoubleLE=function(c,u){return c=c>>>0,u||re(c,8,this.length),r.read(this,c,!0,52,8)},a.prototype.readDoubleBE=function(c,u){return c=c>>>0,u||re(c,8,this.length),r.read(this,c,!1,52,8)};function fe(f,c,u,b,T,B){if(!a.isBuffer(f))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>T||c<B)throw new RangeError('"value" argument is out of bounds');if(u+b>f.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(c,u,b,T){if(c=+c,u=u>>>0,b=b>>>0,!T){const ee=Math.pow(2,8*b)-1;fe(this,c,u,b,ee,0)}let B=1,U=0;for(this[u]=c&255;++U<b&&(B*=256);)this[u+U]=c/B&255;return u+b},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(c,u,b,T){if(c=+c,u=u>>>0,b=b>>>0,!T){const ee=Math.pow(2,8*b)-1;fe(this,c,u,b,ee,0)}let B=b-1,U=1;for(this[u+B]=c&255;--B>=0&&(U*=256);)this[u+B]=c/U&255;return u+b},a.prototype.writeUint8=a.prototype.writeUInt8=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,1,255,0),this[u]=c&255,u+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,65535,0),this[u]=c&255,this[u+1]=c>>>8,u+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,65535,0),this[u]=c>>>8,this[u+1]=c&255,u+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,4294967295,0),this[u+3]=c>>>24,this[u+2]=c>>>16,this[u+1]=c>>>8,this[u]=c&255,u+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,4294967295,0),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4};function xe(f,c,u,b,T){M(c,b,T,f,u,7);let B=Number(c&BigInt(4294967295));f[u++]=B,B=B>>8,f[u++]=B,B=B>>8,f[u++]=B,B=B>>8,f[u++]=B;let U=Number(c>>BigInt(32)&BigInt(4294967295));return f[u++]=U,U=U>>8,f[u++]=U,U=U>>8,f[u++]=U,U=U>>8,f[u++]=U,u}function Te(f,c,u,b,T){M(c,b,T,f,u,7);let B=Number(c&BigInt(4294967295));f[u+7]=B,B=B>>8,f[u+6]=B,B=B>>8,f[u+5]=B,B=B>>8,f[u+4]=B;let U=Number(c>>BigInt(32)&BigInt(4294967295));return f[u+3]=U,U=U>>8,f[u+2]=U,U=U>>8,f[u+1]=U,U=U>>8,f[u]=U,u+8}a.prototype.writeBigUInt64LE=X(function(c,u=0){return xe(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=X(function(c,u=0){return Te(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(c,u,b,T){if(c=+c,u=u>>>0,!T){const ge=Math.pow(2,8*b-1);fe(this,c,u,b,ge-1,-ge)}let B=0,U=1,ee=0;for(this[u]=c&255;++B<b&&(U*=256);)c<0&&ee===0&&this[u+B-1]!==0&&(ee=1),this[u+B]=(c/U>>0)-ee&255;return u+b},a.prototype.writeIntBE=function(c,u,b,T){if(c=+c,u=u>>>0,!T){const ge=Math.pow(2,8*b-1);fe(this,c,u,b,ge-1,-ge)}let B=b-1,U=1,ee=0;for(this[u+B]=c&255;--B>=0&&(U*=256);)c<0&&ee===0&&this[u+B+1]!==0&&(ee=1),this[u+B]=(c/U>>0)-ee&255;return u+b},a.prototype.writeInt8=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,1,127,-128),c<0&&(c=255+c+1),this[u]=c&255,u+1},a.prototype.writeInt16LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,32767,-32768),this[u]=c&255,this[u+1]=c>>>8,u+2},a.prototype.writeInt16BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,32767,-32768),this[u]=c>>>8,this[u+1]=c&255,u+2},a.prototype.writeInt32LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,2147483647,-2147483648),this[u]=c&255,this[u+1]=c>>>8,this[u+2]=c>>>16,this[u+3]=c>>>24,u+4},a.prototype.writeInt32BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4},a.prototype.writeBigInt64LE=X(function(c,u=0){return xe(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=X(function(c,u=0){return Te(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ae(f,c,u,b,T,B){if(u+b>f.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("Index out of range")}function Ee(f,c,u,b,T){return c=+c,u=u>>>0,T||Ae(f,c,u,4),r.write(f,c,u,b,23,4),u+4}a.prototype.writeFloatLE=function(c,u,b){return Ee(this,c,u,!0,b)},a.prototype.writeFloatBE=function(c,u,b){return Ee(this,c,u,!1,b)};function J(f,c,u,b,T){return c=+c,u=u>>>0,T||Ae(f,c,u,8),r.write(f,c,u,b,52,8),u+8}a.prototype.writeDoubleLE=function(c,u,b){return J(this,c,u,!0,b)},a.prototype.writeDoubleBE=function(c,u,b){return J(this,c,u,!1,b)},a.prototype.copy=function(c,u,b,T){if(!a.isBuffer(c))throw new TypeError("argument should be a Buffer");if(b||(b=0),!T&&T!==0&&(T=this.length),u>=c.length&&(u=c.length),u||(u=0),T>0&&T<b&&(T=b),T===b||c.length===0||this.length===0)return 0;if(u<0)throw new RangeError("targetStart out of bounds");if(b<0||b>=this.length)throw new RangeError("Index out of range");if(T<0)throw new RangeError("sourceEnd out of bounds");T>this.length&&(T=this.length),c.length-u<T-b&&(T=c.length-u+b);const B=T-b;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(u,b,T):Uint8Array.prototype.set.call(c,this.subarray(b,T),u),B},a.prototype.fill=function(c,u,b,T){if(typeof c=="string"){if(typeof u=="string"?(T=u,u=0,b=this.length):typeof b=="string"&&(T=b,b=this.length),T!==void 0&&typeof T!="string")throw new TypeError("encoding must be a string");if(typeof T=="string"&&!a.isEncoding(T))throw new TypeError("Unknown encoding: "+T);if(c.length===1){const U=c.charCodeAt(0);(T==="utf8"&&U<128||T==="latin1")&&(c=U)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(u<0||this.length<u||this.length<b)throw new RangeError("Out of range index");if(b<=u)return this;u=u>>>0,b=b===void 0?this.length:b>>>0,c||(c=0);let B;if(typeof c=="number")for(B=u;B<b;++B)this[B]=c;else{const U=a.isBuffer(c)?c:a.from(c,T),ee=U.length;if(ee===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(B=0;B<b-u;++B)this[B+u]=U[B%ee]}return this};const ue={};function oe(f,c,u){ue[f]=class extends u{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${f}]`,this.stack,delete this.name}get code(){return f}set code(T){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:T,writable:!0})}toString(){return`${this.name} [${f}]: ${this.message}`}}}oe("ERR_BUFFER_OUT_OF_BOUNDS",function(f){return f?`${f} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),oe("ERR_INVALID_ARG_TYPE",function(f,c){return`The "${f}" argument must be of type number. Received type ${typeof c}`},TypeError),oe("ERR_OUT_OF_RANGE",function(f,c,u){let b=`The value of "${f}" is out of range.`,T=u;return Number.isInteger(u)&&Math.abs(u)>2**32?T=de(String(u)):typeof u=="bigint"&&(T=String(u),(u>BigInt(2)**BigInt(32)||u<-(BigInt(2)**BigInt(32)))&&(T=de(T)),T+="n"),b+=` It must be ${c}. Received ${T}`,b},RangeError);function de(f){let c="",u=f.length;const b=f[0]==="-"?1:0;for(;u>=b+4;u-=3)c=`_${f.slice(u-3,u)}${c}`;return`${f.slice(0,u)}${c}`}function Ce(f,c,u){w(c,"offset"),(f[c]===void 0||f[c+u]===void 0)&&v(c,f.length-(u+1))}function M(f,c,u,b,T,B){if(f>u||f<c){const U=typeof c=="bigint"?"n":"";let ee;throw B>3?c===0||c===BigInt(0)?ee=`>= 0${U} and < 2${U} ** ${(B+1)*8}${U}`:ee=`>= -(2${U} ** ${(B+1)*8-1}${U}) and < 2 ** ${(B+1)*8-1}${U}`:ee=`>= ${c}${U} and <= ${u}${U}`,new ue.ERR_OUT_OF_RANGE("value",ee,f)}Ce(b,T,B)}function w(f,c){if(typeof f!="number")throw new ue.ERR_INVALID_ARG_TYPE(c,"number",f)}function v(f,c,u){throw Math.floor(f)!==f?(w(f,u),new ue.ERR_OUT_OF_RANGE(u||"offset","an integer",f)):c<0?new ue.ERR_BUFFER_OUT_OF_BOUNDS:new ue.ERR_OUT_OF_RANGE(u||"offset",`>= ${u?1:0} and <= ${c}`,f)}const L=/[^+/0-9A-Za-z-_]/g;function K(f){if(f=f.split("=")[0],f=f.trim().replace(L,""),f.length<2)return"";for(;f.length%4!==0;)f=f+"=";return f}function Q(f,c){c=c||1/0;let u;const b=f.length;let T=null;const B=[];for(let U=0;U<b;++U){if(u=f.charCodeAt(U),u>55295&&u<57344){if(!T){if(u>56319){(c-=3)>-1&&B.push(239,191,189);continue}else if(U+1===b){(c-=3)>-1&&B.push(239,191,189);continue}T=u;continue}if(u<56320){(c-=3)>-1&&B.push(239,191,189),T=u;continue}u=(T-55296<<10|u-56320)+65536}else T&&(c-=3)>-1&&B.push(239,191,189);if(T=null,u<128){if((c-=1)<0)break;B.push(u)}else if(u<2048){if((c-=2)<0)break;B.push(u>>6|192,u&63|128)}else if(u<65536){if((c-=3)<0)break;B.push(u>>12|224,u>>6&63|128,u&63|128)}else if(u<1114112){if((c-=4)<0)break;B.push(u>>18|240,u>>12&63|128,u>>6&63|128,u&63|128)}else throw new Error("Invalid code point")}return B}function ne(f){const c=[];for(let u=0;u<f.length;++u)c.push(f.charCodeAt(u)&255);return c}function ae(f,c){let u,b,T;const B=[];for(let U=0;U<f.length&&!((c-=2)<0);++U)u=f.charCodeAt(U),b=u>>8,T=u%256,B.push(T),B.push(b);return B}function le(f){return t.toByteArray(K(f))}function ie(f,c,u,b){let T;for(T=0;T<b&&!(T+u>=c.length||T>=f.length);++T)c[T+u]=f[T];return T}function ye(f,c){return f instanceof c||f!=null&&f.constructor!=null&&f.constructor.name!=null&&f.constructor.name===c.name}function pe(f){return f!==f}const H=function(){const f="0123456789abcdef",c=new Array(256);for(let u=0;u<16;++u){const b=u*16;for(let T=0;T<16;++T)c[b+T]=f[u]+f[T]}return c}();function X(f){return typeof BigInt>"u"?m:f}function m(){throw new Error("BigInt not supported")}})(kg);var Qh;typeof window<"u"&&(window.Buffer||(window.Buffer=kg.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Qh=window.process)!=null&&Qh.env||(window.process={env:{}}));Ie.getBlockchainApiUrl();const kx=Object.assign,Mg=e=>e!==null&&typeof e=="object",Bf=e=>e!=null,Px=e=>typeof e=="function",Mx=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e);function lh(e,t){const r=t.split(".");let n=e;return r.forEach(o=>{var i;n=Mg(n)&&(i=n[o])!=null?i:""}),n}const ch=[Number,String],Bx=e=>({type:String,default:e});function xa(e){if(Bf(e))return Mx(e)?`${e}px`:String(e)}function Dx(e){if(Bf(e)){if(Array.isArray(e))return{width:xa(e[0]),height:xa(e[1])};const t=xa(e);return{width:t,height:t}}}const Fx=/-(\w)/g,Bg=e=>e.replace(Fx,(t,r)=>r.toUpperCase()),{hasOwnProperty:Ux}=Object.prototype;function Wx(e,t,r){const n=t[r];Bf(n)&&(!Ux.call(e,r)||!Mg(n)?e[r]=n:e[r]=Dg(Object(e[r]),n))}function Dg(e,t){return Object.keys(t).forEach(r=>{Wx(e,t,r)}),e}var jx={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const uh=Ye("zh-CN"),fh=Eo({"zh-CN":jx}),Hx={messages(){return fh[uh.value]},use(e,t){uh.value=e,this.add({[e]:t})},add(e={}){Dg(fh,e)}};var zx=Hx;function Vx(e){const t=Bg(e)+".";return(r,...n)=>{const o=zx.messages(),i=lh(o,t+r)||lh(o,r);return Px(i)?i(...n):i}}function mu(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((r,n)=>r+mu(e,n),""):Object.keys(t).reduce((r,n)=>r+(t[n]?mu(e,n):""),""):""}function Gx(e){return(t,r)=>(t&&typeof t!="string"&&(r=t,t=""),t=t?`${e}__${t}`:e,`${t}${mu(t,r)}`)}function Kx(e){const t=`van-${e}`;return[t,Gx(t),Vx(t)]}function qx(e){return e.install=t=>{const{name:r}=e;r&&(t.component(r,e),t.component(Bg(`-${r}`),e))},e}const[Yx,os]=Kx("loading"),Zx=Array(12).fill(null).map((e,t)=>He("i",{class:os("line",String(t+1))},null)),Qx=He("svg",{class:os("circular"),viewBox:"25 25 50 50"},[He("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Jx={size:ch,type:Bx("circular"),color:String,vertical:Boolean,textSize:ch,textColor:String};var Xx=Ar({name:Yx,props:Jx,setup(e,{slots:t}){const r=Ue(()=>kx({color:e.color},Dx(e.size))),n=()=>{const i=e.type==="spinner"?Zx:Qx;return He("span",{class:os("spinner",e.type),style:r.value},[t.icon?t.icon():i])},o=()=>{var i;if(t.default)return He("span",{class:os("text"),style:{fontSize:xa(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[t.default()])};return()=>{const{type:i,vertical:s}=e;return He("div",{class:os([i,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[n(),o()])}}});const e7=qx(Xx),Df="/assets/logo-7165156a.png",Fg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA5CAYAAADA8o59AAAAAXNSR0IArs4c6QAAClhJREFUeF7dnHesbUUVxr/P3rF3iAgqgqBio4kCL0QBjShNAwoiCogShUS64KO9WAKoPN9DwWgMIliwYVdQERR77F0Ea9QEaRaW+R1mn+y77zl77zl3733L+uvmntkzs2bNzGrfLKsHiog7SbqXpAdL2ljS4yTdX9LdJPHbvyXdKOk6Sb+S9FtJf5d0k+3oYUrLpkt3NdOIuLukx0jaSdKzJD1F0iMk3bHFGLdK+rmkqyR9XtI3JV1r+7YW3/bWJCLuIAm+2CQ3D7FZFiyQiLivpL0kHSDpyZLuvcAVgvk/SfqCpHdLutL2fxfYZ9bnEcGJhic21gMlsTH+KOkzkj5q+/qsDjMazyyQiLinpJdLeo2kR7c8CRlTGzW9SdJXJJ1m+8rcj3PbJ55OlHRwEkS1CzbL7yS9WdL6PjZKtkDSMeZaOlvS5pKy+8hdKEmckHMlnWz7HzN83/hJRKDzPi7p2S14QjDvkXTYLEKJCNZsg6Qz0adjylrMiLifpBPSqbhzI5fdN/iRpCMkXd7lfR4RGBwfk/TMzCkjlCNs39L2uySMl0p6h6RfSHqu7T8X37cWSERwGtZJ2r7FDmo7v1na/VPSaknnzLI7591Bt1+975O05wx8/U/SGenk8ncjRcQjJV0t6eGp8Trbh2YJJCJ2kHSBpE0bRxymAcyfJ+l1ObtzgjDYkMexoMkcn2X2N0s6yPZFbT6OiNdLemup7V8lbW37D/yv8YRExLaSPiHpAW0GHLANls97JR1uG7M5myJi62Q0LNQy/LWk7cpXz6TJpOvqW8klKJqgjw62zYavF0hEPEHSlyQ9KJvbYT6AGXbbcbb/kzNkMk4uSVdVzqfT2q62fVJdRxGxkaTfSMK/KdOnJD0fv2vqCYmIRyVF98QuZttjH5wUrq5zcsZIpwNHtCvjhKtnM9tEHCZSRByWrMXq7whpW07YRIEkE/CDknbPYXIR2+Kv7GH7y23nEBHwt2/b9i3bHW/79BqB4Oji41QJ03d729fME0i6594g6dSenL2WvGU3+31iaqQcG64OjJMfpLBIU/Oc368lbmcbRT+PIuLHkh4/pcN9bF88SSBbEq5IwcGcySyFtij5Q5rM4YjAsjqthwlj/b3E9oeqfUfEXST9JTmEk4Y+0/axcwSSorQE9/BWlyPhoO1pm5jTRIqIu6Yg5pN6YhBh7Fd1XCNiC0nXpIj3pKExm19cFcjekvih0RzuiZkuur1c0m620SuTro2nSkLXECrpg7i2nm6bAOmYIgLH8+IaNYCBsdN44dPO+aqkp/UxywH7xOrafdopiYhXS3p7j5uOa+t5ti+rCARvfG3NOiDAzcsCWSXpk5I40sudLrX9gioTyWDB93hhzwy+yfYbKwLBSDq+Zlz8qI1GAkkTPV/SgT1PdKju2aWb2CZUXr42iLBeIWmrnifC6cAMHyfYIuIDKPyGcbcsBPJQSV9PeY2e5zpY9yfYnmNJRcRjJX1HEgHFPulnKZQydhIj4mspMFs37qpCILtKwn0n371SCIsG5TrO0UfEzikT2bfRgh+yle1fFosZEd+V1GTZHVAI5C2Sjlopkkh83CBpC9tYPSOKiFdJetcAfLIJdrZNtpNxCc8gEEzfOjrayWHBbicLuJIIPbKv7Q+XBPI24l4DMUkEF72MQEjscWJJddfRagRCtgyX/iEDTXTIYU6yTTJrMQyXcfR3QlJq2hqcgUCQGkpoJemPguGLbO+XBAIc6dIBA6bn2sbnYTMQOyMc1ZTGWINASEBhYfWt6IY8GcVYV9veJi0KsST4xFMfgi6wDSoHgZD+xsri6qqjsxAIO+jCIWa4CGN8HwEQbIwIUJM/HDANTZgEHRYRgXVFSOc+DWuwltagOAglrET6CaEg2zdGxD0kYYY+bCBGP51CKLdFBABCBNKUKl6PQKpJ94HmO8gw6EYEckMSCLnvoYyXz6YgJwLhhBAhaBLIOgTy2gR6G2SFBh7kp+nKKk4IOKgCftP3VGY5ISOB7C/p/X3PbpH6X0wdMs6LZJyQkQ4Bc0XYfSXSVbaxIrF0hrayzrc9yp+n5BRWFsD0RisLP4SnAG2eDSw3oV1im6QbiwJ/wEX3GIiJtbYPT2Pjh3xjCoC7PJ2RH4Knzl3b5LQMxEenw5xiG1Ri4amDxT2o0xGmdzazp05CiljWcs2jT1sSchHktvEHRhQRgOqwKoegQ22DhWZcNv23JYF1q6PVRbR3yIkOsRiM8a8UAgeEVghkqGgv462y/cUkEPTX92ogQMUUjyrnQzDTVpIeIRGFl74Y+RDQL+RDMLOLzYBAmlCgL1vJGcMTbZPHHtOAGUMesm5j+28lgbTJGD6nnFMfUuH1fW2RC9nUNq97ywIZKqeOTianPn4zEhHEC0eR5xq6Paee7rldEuqEINxyp8ts71ZlIoE5UPIv6pnB023PQZhERBPqhGd7G1ZxWRyrocLTfa0J1hW4KHTiPIoIfAOek/WVbuBUcDrmoCdrkO/FHIGZblZFLu4jCVR4X5PtSwjlfsl57LrIyMVn2OYZdfm6BLkIJqz6NqRoQ4p3x6pASMZ/bhn7JFg3e9sG8DeREkKTN35NFs+sm4dFB8k+pyJFRABi5/XUNCDifGxv0iWAyEg39o1dmpXhuu8Aox3YAv3O/T7HAutoMlyX+9uel/BLCTJe205LUq2xfcy09yHHpAlPO14dzb/TboD77GCbdyK1FBGbpOwhZTO6JCo8YN1Nex9CiIoqEZOIZwwXTntBRSIFXTLPUuly9h32xVW1l23Afq0oIrgi0JldUu07w4jAtRjl2Ss0/QVV0TC9MeQubgJ3dcnQLH1h1Rxt+6ycj9MbQ3RJV2gbKkzwxhBraSIl5D0WXpXAIPOK9/paayolVnjAQwGWpUgoTsBvx874ChefpCsk/EgH1C1SeoWLs1pd9zE4u9G8jYjtEp5pqQkFBUoFBuqNtC5tUV6wjExe02ZEfxEqqa0SlBxTSk+VfT021SsKlGOjQJjJEqzkgFe7Pl1VExVo0womvjBaikoOswZWGR/YaCsoVUQAZeVUF8RzaoKgI2OklUDS5AF7AVQm5dv6uzYLk9mGWic8hnlnOVaU2ce4eXoCzknjgU8uX5zSonBBq5peEbFhyh5S3A06z/YriwllTSCBhtlRR3b44D5nLQG6UZ/rio6rAXEdk96lsE4OAaamGlDrU1qqBgQWDpwYUYVxVDhLIKVjTqU1KidggWX3kcNxasvuY7xTe6yXhakP9rdtvSzeCx7Z5IRO4jUJBQeRsoGz18uqKEQ8efLT7FgcrVnv4Dr5UCgTgBn2PSCBXilVlMNSOiQV8KxuNhQwVtIaCpjNIowmBha8uyMCSVOfkKJcFL5c6HNjmKZaKU+XF6vmIsU8QatwWsiHF3UgMU8/Un3y3LTIOb8vWCDFYKkqKWEB8io7puAdCqxN+IXySlSLI+1K2BrT8LolUJWUU08+HIHc2qXemiakzgRSuc7KdXtBWmChsdOIHfEbfgMP+7Hbwd8WdXtvWWwh5OzmPtr+H0tgrynPcPcBAAAAAElFTkSuQmCC",Ug="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABK5JREFUeF7tWu111TAMlTagG9AN6ATQCaATQCeATkA7AWUCugHdgLcB3YC3Ad1AnGvkHCfxd+yXvg//eaeNk1hX0tWVHaYjH3zk9tMJgFMEHDkCR5ECIvKKiN4R0WciekNE+PuBiG4OGgARgdHvieiTGj2N9/uDA0C9DYNhOACIje3BAKDeRojDaIR4zthvANTbMPpLgdEuMJu9i4AJoaVCPBUFt3sDQAahpYz1Xb960QAUEloNAGcvEoBKQisFYMvM5y8GgAaEBgDulQxRBlPjkZnXTYGGhLYhojtm3ojIVyK6TVlvVCDzOkKoIaE9q+HwPBUYj+mXAGxnKdCB0P5reWaAAOO/qR7IcL6ZcoZ7uwOg3kZY2iYkd4GheVsiuob31HCovp8Zstd93hMzX+AfXQBoRGhTAODpe2a+sxdE5DUR/SIi/JaMB2a+bgqAGv2BiD4WeiNn4fA2vA7vmyEiiCh4vtR43I5nIYWWR0BDQvMBMQp3x3gA/aNS/+MxF8z8VA2AE+LQ4kv1eCgCUMq+W5JzjEfjA8KrHc/MfGZvLuIAh9B6GY11zcLdMT63xsfA2TDzZTYASjTI69qWM9dTIDmUNZOb7tCIg9dzFF7qfSDSmygAHWp2clEqaExN9xgPpgfptRhXzPzoBaAzofkWP0hY38UFZS4G1LlbTQwHiAjCO2cPrYUH8IyRhA0Yv6TMhdZpOkD3IldIyKUgjCRswHjkOnI+d28vd02mA5wC8KdSTOS+1M7z1nRPzrdg+tDabl0liUmIABBMz7I2k7Ch1e0gGk0HOIoA5QCgjrCrkZWxSAjWdA/TtypzsfWYDnAGgP2Hsi5k5lJCzAp3BR+gQ9O3KnMhAIYOMAiAxyv2aAm/udHhlbA7LHMhAGYEaDggl8m0+3IB8d06y7FIvsPj4J/WTB96pdkCm17MBmASHYgGgPFWf010MHPW80QEfINubpfD65ysBcdWqSLKdmfJCCjct2sGUMg5LQBACP/VlY4aDU+NL923awXAqAPMIsGSNztaYiY1lelr9u1KlpCaG3TM4ghQA91NimG3xSmvKHMor2uNUQfYIwJAgpDUGCO5qdXj91qW63tnTrHraRIBGgVWUo/yTVtsXFtrjLbApotoCYDbxAySc6WS59oZJEBMagmAmwaD6Fir7DkIzDrA5hzgkJ1trQfURQSCp8VeXm0KRbVJswhQHpilwQ7a7RQwsw6wZwRAHlvCM6cvIoIKkOr07IlPbsOVMtpe9+qSbgBoFEAVQviYNBAR+3do0TDe7tPbfYlcA1PzvB1gbwCs3MXGA05grT7wLdYYPznzg6gCEC26RG8H2BsANw2wIxTabpsZ75Bp7anvFORkc9aUBB0DssLe9bwvPJbuEea0570AiHV9Qc8HQEAJRUqUEqR3C6ybEnQfHJG/RcZPUgJ6omT3evgIIsaUvSIABIby53qtyvgJsCVnBsNHEDsHQMuhJTKAgY8RRl94pOpX6HrBeWGwA+xaBWoNK7kv47g8KYDs+7qkQIkxS+Zqp+k7Q4w2QHsfARNeQKpZBQmewWc1s+3vENB7HQFLoucgUuAEQAMETinQAMS9fsTRR8A/UhrtMyUFEVoAAAAASUVORK5CYII=",Wg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABBBJREFUaEO9WuF1VTEIhg0cwRHsBnYDu4HdwE5gncBuYDewG9gN7AiO4AZ4eOa9k8eFBAj35kfPaZvk8gXIBwQkoh8A8Bny4y8A3CDin/wW+ZVE9AEAfgHAu26XV0S85d+RiPgfvwHgff4zcNlwYY/wUiJimRlcLzsfNB84Hzwg/yCij21i+CPdggdEfFrZILJ2AO62t6YTwAbyOwB86T7CJ/Ay+CgfSn9yh5lqszrWHJvneajfvwBsINlU+0V3iKiCbCfI83vbf0PEm4gmMnOJ6CcAfBJr2Szf5H4SIGukF3qoFSJijbPm+/GEiA8ZwT1riOgrADyKuaZ7XAFsWpRCDy8Q4xZmP3j1CByZY4B7RMRv1j4bgA0k2zf72HmYJ2Tcwlc3WQSENdewliE43ssCKE2V56o23g5Eu4WfEfG+CBzfC+w6/XhBxLvZ/irAJjQ7MTvzeQy1QkTyFuZ194j4PBNi9H/rMgMAdoMT142GCbCBlEIPLxAikqa9RB1erlsBqEU5UepIRTkD374i8iUNGv6VoY5wlGNYA4PbcF1ag+eFin9FqYMPxS1cpT8PfbA/GSKSUc4u1JHhumUNNlOtoI7ZJaVFRlOuKwHYQEoBMtShRjlEJGmJP7nMpW4T7fxRUsFMK3L+5lD2DNwzADVTNQndEP4ShVRwXZmJdlqU5pSijpZvahl5iOvKARpRzow6tISazXWatM7IfC+AWpQTpQ4pmxklZUGGfVBwo5ZFmLngpPazRAfWASwBbKYqM+wZdRxaBVgG2ECWU0fWJOW6KoAV1LFLLacEoBHlZKijvJZTBrCBlOW8GXXIZ4PyWk41wArqcNVavD5aCtBIkPnPUeoIJ8i70YS2sZKwzqhDi3JKXqzKNWhwI/85mnWkajm70ISIbjQiP0+JZh3L0U2pBttjpCzQ9vgPp44ygIO8jv2vfwY4lDpKAI6S1qY++cwWzTrSUc4yQE+B1ng4iVJHKpWqAOh6jFQeLQ+hjiWAkQKtoendqSMNMFOgNRLeKHWEopwUwOxjpFHLiVJH6MUqDNDQgrtAa5hqlDrczQ4hgKuPkV3ZUetO2oU63ACrC7RF1DFNkF0APVznzc9E3Dot64v5MuuYJshegPLpLPTeZ4E3TD5KHcP5U4AG16WiCiN35E5HLl30I0odpjyzJgStq2g5hZFAlWaiGXXIQzHnj9pIDgHXuFGr5cyoQ/qjOt9qBNIeI9MRvecCMvg1Sh2b+RuARgetm1g9YAaXjtZMFMk6NqZ6BdDTQbsCwLNWaXaYZR2yRHKljAvAaiL3gDFuVe0ZgHtWR/0xDLLvW724Uw9Q47qS0l0UrBHlRLc5mfYJoNHzWcZ1UcmaTDLKiW7z37SjHbTRr2TnG1FOdLvnf0RvBw9GGsnRAAAAAElFTkSuQmCC",jg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAAAXNSR0IArs4c6QAAAgRJREFUaEPtmb9LHEEUxz8DSgIGsUxhICksUlqonX/FQTAkHAkEUSQQEEEEQZFAIghHQCRFEEMSIfbWYmMhCDY2wYDYCJYWggdfmeNO9kJuf3BzezOy2+7Mm+/nvbdv38wY7sFj7gEDBYQvUTSSHgJvgVFfRGXQcQysW4ivwLsME30b+stCnALPfFOWQc+VhdgCXmeY5NvQXQvxCFgEhoEe3xTG6KkCR8DnosT6ErUiEsFFQlLJGLPji/CojlTpJGkS2DDGpBqfN2iiKElT9tduhQUJIWkG+NLwbHAQkt4DlabcCymdJH0A1v7N7WAiIWkWWP3fxxkEhKQ54FOr6uI9hKR54GNceYyDkNQHjORYXm+AP8aYi1qJlbQArCQJaAUhaQg4BPqTbDh+bzvZsm3FbRu+lMZ4DMQBMJbGRgfGXLqC2APGOyAwjcm/rtLpKbAPDKZZ1eGYa6B013Y4+LCtrcfAA4cik0ydG2OqTb1T8CW2gRxt+IL9Y9dL7hvgW9AQdZAysBlsAxhJrVfA92Bb8QjIS+BHsJuiCMgLYNv7BjCpIAd/UJAE2O33iQcF3RaYZv0CIo2X8hhjW/EBwG5L7a4stKP9E2DZQvwEJvLwWIfWqF2ynAFPOrRAHmZr112hXzz+blwBTwPPgd48XOdwDftNVIoS69CjbZkqItGW+xxOvgXEoKpPPsLn+wAAAABJRU5ErkJggg==",Hg="/assets/logo3-bf86988e.png",zg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAahJREFUWEfV2DFOwzAUBuD/Db4BAwM7CwNH4BBIXdi69jgdnCE7A4fgBiDBwsaI1N4gkVy5SlBIY/v52YlDlwyx48/Ptd+TSWu9AbAH8KOUetxut18o+Kvr+rZt22cAN8aYHVVVdQBwZU3GGIt8KIW0uKZpXonouvMcLfANwH0ftFLIMa4DfpLjxaKR9BnISksiQ2OfgaWQIZx1/QKXRnJwF8ClkFzcJHBuZAzOCZwLGYvzAnMjJbggMBdSimMBU5EpODZQikzFRQFjkTlw0UAuMhdOBAwh7fthydRVJeLi40+q6/My5+mK0nnWXT2XihNHsJ/AFHI4uRy1pTiCIWQOXHIEXf/HHEvbByApgqte4lVvEt85V/yY4RzCnDacoyx6k8QMHNPWh2VvEsmAkj5jLAuYMlBKX9YSpw4Qyt2haxZvBHPgfBmHk22cwJy4FOQkcA6cFHkBnBMnQf6fq48lIjc+4zhjrv/6jTMLbt6UtvMZSGv9QUR3/cc5Z5MU4uvnqC3fLfBARKu8RAdwtMANEe2NMd9KqadQ6pkjesNvdpF8AWBv+ncnQ0BHLgLTD5MAAAAASUVORK5CYII=",rn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK9JREFUSEvN1cEJwzAMQFFpkgayQgfqIWAdM0I7Qm82MeTcLTqYQSXXUCuW5EB893+2wQjh5IW1fkppZOY7EX08Z5CABQAmAHiGEF5WpArknG+llC8iDh6kCmwn7oGIQA/kEPAiTYAHaQasiAqwIGpAi5iAPcLMMxG9/33GawKaD6i+gSa+PZkK0MZVgCXeDFjjTYAnfgh44yLQIy4CMcYVER+eaSYCpw9965Df7/sB3MCuGc1lpucAAAAASUVORK5CYII=",Vg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAqCAYAAAAkqNwKAAAAAXNSR0IArs4c6QAAC5pJREFUaEPtWwtwVdUVXfve900IFhCLwWqxglMRi52iaB3b2tZPp2ptBa3102oHP7WhYKSJJOS+hAl1aEGJnyKKbbUKoYr4HcEPHa3toNRSTRrBVtOSGLVpDAHyfvfsznq9j4bwkryXl2Cc8cwwQHLPOfvss/97HUGWY86cOf7i4uIiv99/ZDKZnKGqZ4vIyQAOBeAHIN6f/lZUAC6ALlXdBmATgBf9fv8bbW1tH9TV1cUB8Jt8hixbtiy0Z8+eI4wxM1X1iwCOARAWkQ5VfV1EnlXV11pbW9vvuuuuRA6b8Yz70ccfDDRk3rx5obFjxx6hqmcZY74uItMAjAVQAMAWEVHVbNbiXiTAAOgG0CkiO1R1czKZfNS27R1VVVV7uNxARPX1e8dxCizLOtEYcwUAMu8wEQmpqiUiSQB7ATQDWK+qDwF423Ec/rzfkRagwsLC2JYtW6Lr1q2jIKSkpt/hOM5YSpqqXgjgCyLyKREZDcDKgWl97UFG8kDviMirxpgNfr//+ZtuuqltMExcuXKlv62t7QwRuVRVv6Kq40UkrR1pGrhnTFV3AHjctu3Vrus298fE0tLSwmAwOC0QCMwG8FYymXyupqamYSAGSkVFxad9Pt+XAJwnIqeq6jgR8Q3E9EH8nre5S0S2GmOecl13U1NTU2P6lrNZz3Ec0nUSgMtE5HwAn+Ql9zVXVeMi8jfXdR8MBAL3b9u2ra2P/cRxnM8AuEJELlHV9wCs7OzsXLt8+fLujBI4a9Yse+rUqZS0c1T1IhGZCSCQjcRmc9h+DpXkoQCs89RrezbqRXqnTJkywe/3/wjAhSJCmzegdnlmhJJUGwgENpeXl3f0po2qO3HixNMBLAbwOU/rViWTyeU+n6/5gE1IzOTJkw8NBALfBUDmnXgwmOcRrqpKadwuIutt2yahLQMxccGCBUWhUOhM27bnA5jhObVs7pK29gNVfQrA8oaGhld7S2FZWdmYcDj8LQBLAYzhxajqEwDubG1t3dSbgfRgY7q6us5V1R96zKOjyOY2syE4229iAN4QkbW2bd+7cOHCdz3Hk2m+LF68+EhjzCJV/YanurnQm1TVVgCVwWDwsd5SWFlZOc227ctF5DoRCVMCVfWvlmX92hhzx34bOY5D50A7cqMXovD/uRCTLYP6/Y4OxBhDL/06JQPAM47j/DvTJE/6TrVt+2YAn/W0JRc6KPXc6wHLslYvWrTojz0nRyKRr6rqNZ4foBnjeE9Vf7d3796yfcypr6+3GxsbGZ5cC+DbIsIwpU8jnAuFg/n2f5GRdgF4VkRuHTVq1Jb58+fzoPuNsrKyowsKCuh1KSGHDTIyYBjToKorANzvOA7j0dSIRCLfUdUSETmlh2nYq6qPx+Pxkn0MdByn2PNe5QAOBzAc3jZXXjLk6ARwq6o+6DjO9p4LOI7DC54pIosAnAagMNcN0rYXwG5VvQPALY7j0GQo1xeRHwCgbT2WMa/3PYPvjYlE4oYUAz2ve5aIzAFw9kF0GgOqsqpSOl7xDlffUzoYNAP4pogsAzChxwEHw0fjef7bALxEx+U4DlWW0nejl3GlNdJV1ReMMdWp9KusrOwT4XD4OgAMA/qNnwZDWZ5z6CkpHasA1AH4p+M4lEwsXLjwqEAgcDH/CWBUPvbas7u0f/e0t7f/tq6uLkb7WlBQUCoiN3hZV1pjyey/iMgvGST6LMtibkvmzeqR1+Z57qGZ7tlC2sONJLilpeXJdP5aXV19ijGG0cIlAEJDsOO/VHXt7t27naVLl+6NRCKHi0ipJ1j7MhqPpiYAD5KBIcuyrlTV7zNVy+cWh+AA/S3xd9pBADc7jrObH9bU1JxnjLkewJdziP363ENVue6GWCw2NxgM0vYeIyK0f1eKSO/U9U0Aj8mSJUvGJBIJRtn0NlTfkTq6GfAmEomfbN++vbW+vt5UV1dfDmAegKlD4fS89O7pRCIxt7Ozs3XcuHFcd56IfC+DYL2dihAcx5liWdZSVloABEcq91gGU9U/WJZV0dHR8cohhxySYOhiWRZtVLGqpj1kPkegw3pBVcsKCwsbdu3adYJt23NF5KIMi7ao6ktkIAsFCxgO5OnF8iE8m7l0JozVbg8Gg2tjsVg3maeq9JBFQ2R66Jy2qmptNBr9fSAQmG5Z1o9F5IIMBLKC9DIZyBukKhw/RERkw4zBfvMWA12fz3d7V1dXPBQKkXlUMWpO3hmT54lZXLg1FottCIVCn/ccyLkZCG4js8nAnwM436tgDPZgB2teC4CHmbYlk0ky7AYRYfTAoD9vBvIQqtpEbx+LxdaEw+EZxhiGd+dkOOC7rKpLJBK5G8DXABx1sLiQxz7visgTrutGXNcN+nw+ekiGMbR/Q8JArxK0yhhzv5flMA+mf+g93mdbgBLI0OA0ETkij4MdrKnvi8jTxphK27bDruvOZ6qVIcTIhx6GJ6t9Pt+vkskk08RrVPXMTAxkseNjBh7ImdwYGIlEVgM446OiwgCeNMY4w6XCqrrdsqycVPgXXq2LZfCRPhh7rff5fD8joclkkhEEjXzvxtGgz0EnYlnWndFodG1WTuQjHsaQgcxEmAfn7UTSYYyIrIhGo48MFMao6p/phdnBYjz1cSD9v371VgBLuru7Nw8USLPMJjU1NccaY9gwoacZ0akc63QiUrlz586Xi4uL48OVyolIuTGmwXVd9kP6T+U+SsUEEWHPeF5jY2PLcBQTALBXvNEYM7e9vb1l/PjxxxtjmOmwXNbbRDQTIiIrVqwIdnR0XAmApeuRXM76h6quoXr1LGe5rnu9iAxJOcsr3D4aCARK4vF4ZzKZnMxgvY9Y8032RVIFVQ+ywboaoQtDlhYN2hX2mJguqHpApJUTJkx4/Oqrr04BgiorK0+xbfsqr9w05AXVioqKYr/ff4Cn36+g2rOkr6q8zcM+zG5cBqanSvoA7rYsq87DsaRK+lVVVUcCuJglrmEs6bPFy5SxZ388VdInxOMj0VRKhQsit48ZM6a+pKSETffUGOqmEoCHVHW/ppJlWSVeyYwwvp5NpRcJ99ivrQmAEIZyEWGHa8S0NVW1zrbtByorK9/oKaFsO/p8vpnJZLJKRAhlG3RbU1X3ALgjHo/fUltby1JVv21NVd2UCuTTBLGx3tTUdIKqXquqF4ygxvrzrM8VFRX9KVNj3XGco0XkMgIC8mysE9TE/vN9vVqnBCuVeHEyMx6OVGPd7/f/v7HuqcRo27ZPMsawQk2Ix4cK7RCRVHGTt+04DmFlB4yhgHYAiLJh5fP57qmoqHip5yZ9QDtYyiK046cHgItqa2vHJhKJ8wBcBWB6L+M5FI41mzVo54hCWKuq9wJoS/eCM0xOgYtc163yCp9sjOWS1hFcREDnomg0+uiSJUvae+5RXV09jWhXEaGEp8BFAF4Tkd8YY27LCG+bPn36oYlE4kODt4kI4W2PGGPYTN+ZA7yNDXDGsmlVG+iy6OE7VfVpAMuOO+64rbNnz05Bd9MjE7yNFSHC21paWjaOOIAlgEbLstb5fL6H4/F4TgDLQCCQAlh6oPIBpVBVo9yPwTmA5xzH+U9vjmcCWIrIKlW9hfjq/jZhkD3JsqzTVZUqPewQX1XdKiJP0uYBaBpI8np55BTE12uQkd5sIL5NruuusSzrvoaGhneygPhSK2mLVxUVFa2hUxvolqS8vHxsKBSiQ2HjfcZwgcxVlSDzR4LB4ObBgsw9MBCLw5cyvcsGZA7g3tbW1ub+njsQZB4Oh4+3bXu2ZVlvGWMorZTcrIztvmcOrusSwcUG1Al5PnOgnaH60P7sEJHNqrqhsLBwR2lp6d7BIPTT0sjDjh49eroxhq1aQt5Szxy8s3JfxntEFfCZw/pcnjlMmjRpVHt7e7y5uTn7Zw5pwtLvJAAwfaKhPiePhza7AGxT1WeG66FNLBab2N3dfbJlWWQiMS58K/KBh3p9ln8PxUOb/wLZwTGRzXs4EQAAAABJRU5ErkJggg==",Gg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAB2dJREFUeF7tWm+IVFUUP+ft4C5qoODirhgpJQklGBkaBhoaGgoZGQoutOLu3DuOiUsrKRVNZLih4Z9tnXdnR1IqEjT0g5GBkJFQkUGBUIGgYfjmgx8EzXVh3ztxtvu22bdv5s28fTPjrvu+DMy79537+91zfvecey/CA/7gA44fJgiY8IAHjIFUKtXAkFOp1D3+fSBCIJVKxWbOnLnBMIwWIlqJiAMAcMayrM3jmoDe3t6nbdtuQcRWAJjm4+zZcUfAgQMHpk2ePHkDALQBwKJiEU5Ed8YFAeziTU1NywCAZ3ojIsZKkTYiyo1pAtLp9BzDMF4jolZEnFMKaE+bc2OOgDxBayWi5aXOdgFyusYMASxojuOwi7cUELSyHYCI1t3XBGhB26Rju6iglY0eAG7fvt143xHALj5r1qwVjuPwTJcsaOUSQETXpJRz7xsCRitoRDSAiMcAgDO8bUGEENEpKeWrNSXAFTRE5DX7ubCCRkQ/IuIOIcRPSqm3AGBPCQTskFIeqgkBOkNrQ8SNoxS0W0TUmcvljqdSqQHTNN9HxLeDwOv3S5iwqhGgBW2LVvGFJQ6yYDMi+gwRO4QQN7nAaWpqSuuUN/DTHC62bU9PJpOVzQTZxZubm1cxaCJaH9bFPYj+QEQZj8e/4/97enqmxmKx0wCwMhD5/w1+FUI8VbFqUCn1KGdnDDxkhjYCy2DejpiyLOsQuzs3yGazj9i2fQ4A5pcBfrCrEKI9UgJ4JgzDeIkFDRGXlzmgos2J6GwsFtvW1tb2l9tQJ0ZnAGB2ubaIqE1KeTQSAvRAJACsH6Wg+eG4AgCs7l/lv8xkMqscxzmFiFPLBc/tHcdZkEgkLocmwBU0XYQ8GWYQxfqwSBmG0XXjxo0P3J0bt71SKklEB8PqCYdSLpeb7oZRyauAK2g6tteFHUAQWUR0wXEcuXXr1j+9bZVSewFgV9A3Asi9IKV83m0TSEAlBM1vgFyb85qeSCQ+977Xy9yniMhhNtqnSwixuygB7OINDQ1rKiFo3tGzu7Mq9/X17e7o6LjlM+sziOhkVMLKJMbj8S99CaiwoI2YufwU1m9a9TJ3HgAeG+20u/37+/sf3r59+99DBGj3EpxchFhPw46LZ3qXZVlHXTHyfiidTi9FRFb6prBGfLwtJ6Vszv8flVJfcNkZlZGg73AKa9v2zmQymSvUVim1BgBOAcDgHn6EzxkhxMteAvoqYMhvzMNS2EKgTNN8k6u5SqwyRLRLSvnhMAJM0/w2KoEpAOoeEaVyudxHhdyd++md3b2I2BnhjA/7FCKujsfj33g9YAYAvKHDIMzOasHx+qWwfo21DrHSr60UeP7u3bt3p3tXmmF5QHd39/xJkyZx/K3mDYqwocHbTYi4zZvC+oHr6elpqqurO42ISyoJnoguSykXeG0UTIR0mblMl7Fc3AR6h96W2m9Z1nveFNYPnE6yzkdVMRYjkIiOSSk3l0yAt6HOEdgzVhPREj+RYi1x6/Sg2TRNcwUvcxUooAqZZo/sCU1AfkfOFKdMmbLGcRw+aV3HILxFRjECMpnMK7wchg2xIHL93huGsai9vf2XSAjI/4hSSgCAyf8VMuJpX9KmZRiQRfrcsyzrIb9VKLAYChqIFrHrHBJEtF9KubOA0vN+fzcRccZZ1YdTbinls35GR00Af9Q0zR+0il8RQszzGtKCelKvLlUFr419LIR4vWIEKKU4j9jPBohooZTyN4/bf6+X1VqAB0RsicfjI8psHkwkHqBPda5qAoalmzq3+L0myLXRgYGBeclkkrfXRjyREMBfVUr9rG9kXBJCPONa4v07IuKd25o8RHRTStlYyHhkBHARg4hdbMhxnLmJROKa1octiJitCfr/jJ4TQrxYcQIymcwTnG7qMBg8d9Oe8S7XOrUigIj2SCnfqTgBGizHOh9SnBdCvKD/69UXlmrFwdpiNUlkIaDdfR+Xs1wT9PX1NXLlZZrm11yG1go9X4Lo7Oy8WRUP0PXCJW2sVQhxXCnlekUxDq4QUSzqosi9BFHMcKQeoL3gqgYyuP1kmubtYic4PMhYLLbctu1/iIhPeKPY+h7E7F6CqDYBB/iyAt/U6O/vn1dfX3+90ABc8Plnfrq2OBhFoUREQ2JclRBgI9lsdqlt2xe1QT685GpxxOMH3m105MiRx+vq6k4AwGjvEQxegqiqB+gjNAsAeKvN9ykG3u3A22TNzc37SrnvU4DgoUsQVSUgaOkrBXz+gHmLnIiyIc4Hhi5B1IIA3lc86zVcLni3/+HDh2fX19d/Us4tECIypZSJoOU38lWADeow4OJo6PJCWPD5AHS6zVll4IFJ/iWIqnuADoPFvFVARHx/4GIsFmvNV/ugmSn0Xim1mIhOBOUM+ZcgakJAWICl9NMCySk23yb1e25ZltVY7CDG7VSRECgFRBRt0un0JsMwuNL0hsRBIURHKTbGNAEMUB+hHySitYh4BwCOWZa1u5RzCe4/5gkoZZbHnQaMFnR+/wkPiJLNsfitCQ8Yi7MW5Zj/BQKJZWlVkIpAAAAAAElFTkSuQmCC",Kg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABrVJREFUaEPNWl+olEUUP+fu+hcffOjhXhAKDOwhyQtKV1IwMkq6glKQoZDhZWfWK5JkZGS0kZGRIVl6ZzYlQyMDI8MbGhQJGRoKGvVgUGAgfPvggw9yvVd3vxNn+XaZHefbnfl2pT6492G/MzPnN/PN7/zmnEGt9REA2ADZnstRFC0tlUqT2ZqHtyqVSvmBgYGTAPB0ozUR/VGr1ZaOjo7exL17986dPXv27wAwL7x7ACLaI6V8NUvbLG201h8DwBYDzNV8Pr9iZGTkH/4N+d/Y2NhjiHgGEfOhgxBRlYhWFIvFX0Lbhtprrd8AgF0GmJvTpk1bvGnTpj8bv9UB8aOU+gARtxvGxxFxPGXQNQDAf43n2sTExMJt27bdCHXS114p9TwiHjPsJxFxTaFQ+N7sowmoVCrNHBgYOAcAixKDG1NTUwu3bt16zR50//79c/L5/CUAeNCYgMNSypd8HQyxK5fLTxHRCQCYaYy3Tkr5ld1PExC/OHDgwIJcLne50ZCIzlQqlSdLpVLVbqi1fpSIzpqfaRzHG4rF4hchznayPXTo0II7d+5cRMQ5hu1OIcS7rrYtgNhAa/0KAOwxjLcLIT50NVZKvYaIu413qavayXHX+4MHD95frVZ5bz9grIySUhbT+rsLULKfTiFinRZ50yPiMiHEr3YnCYX+BADLjHc/RFG0yrWqIaD4s87lcucQ8WGj3ekoila369sJaN++ffNmzJjBVD436exKtVpdwjxvO+WwZZPUVfUBleznb6xYc75SqTzeKeY5AfGg5XL5WSI67rPpXQxERENSyt98ANg2SqkjiNgM9kR09fbt28tdBNWWFBwdf4aIGxu/I+JzhULh65T91GILAFeiKBrsNKMOsnkLAErG79cBYEgI8bfP5KSuEDdmFTFr1qxLxqYMpfIgFaG1FhwSDccniWhYSvmjDxi2aQuIDWx6DqVyJhc7+Lmc41gTx/G4pVaGhRDf+YLxApSAeg8Adhgdh1B5RxWhlHoEEc9bgXOHlPL9EDDegJie+/v7f0bEoYxUfkwI8YLLOY41tVrtrCWOdwshXg8F4w2IDW0VwZs+kMo3CiE+N53UWt8HACy3TAk1XqlU1maNYx33kOVAy6YlolT95qDyFkJJYg2fa1YaoYGlFgflzOerIEA8sFLqJCIOZ6FyIuLguJxn3+6HYw0iLhFCME1nfoIBJcqAlTZ/LvwEUTmrCCKai4g7Da+v5XK5ZY1DWmY0PrTt6lxr/QwAmGels1EUsSzxUuVWn5NxHK/s1QExeIUazmitPwWAEeP7T6VZhyqvN2Ph29fXN+wTp3xXLTOg5JB3AQAeykjlgIgvFwqFj3yd9bHLDIg7dxzy/qpWq4MBqjxYCXQC1RWgBJSduAihcj7eD3bLbCbIrgHZKiL5/Jzn/YT2W1Q5EY1LKVd3mnnf910DSlZpPhFdNs79oVR+l4rwBWDb9QRQAupFADhsDOBN5UR0M47jxZs3b27m1/5zQMnn1KIiiMibyk0VkRUMt+vZCiWrxOqBVUQ9rZwhwVISQrz9vwGklHoiybY2E4IA4E3l7SbAF2TPVkhrPR8ALhqZoqYPgao8dQJ8QPUEEAvW6dOn8wGwmRAEAD4CdEzdplB55rRy14AcOXH28TRnbqxUcSiVZ1IRXQFyJQQBoFkEc6SVvakcAK5PTU0N+uTieqYUHIq7JSGYoiJCqDxYRWReIa21nRDk2tBiOyFop4ozULkUQmgfQsgch8rl8noiOmoM0jYhqLW2VYQ3lTO51Gq1Rb4qIniFUopPa6SU37abRa31lwCwrmETQuUhKiIIECcEAYCLXF7FJxOgqzhNRN6qHAC8cnXegFKKT0G562R1mdIbjzeV+6oIL0D2cTvRaZkSgnZxmlfcN8HCqa5bt24NtitOdwSUUnzKnBBM+mMBW89FJJMTQuVtVURHQI7NfDW5tVHxpVLbzk7Oh1J5u73XFpBS6h0zIUhElXw+P9SLhKBDRYRQeereSwWktR4FgE/MWNPLhGBScD5l5ba9EyxEdFpKucpefScgu/h0LxKC7Iir4BxI5XfVqVz3FB4FgDOm9O+2qt1ur42Nja3v6+szVYc3lbtURAsgV/GJiHZJKd/MSgA+7ZRSdsHZm8pNdd+i5bj4REQXrEPaCSHEWh+nurFJueK2GxHNINwcIo7jLVyRN2i/GeDrK8Sxob+/n2+PrDAc4xshfGsjc/EpBGSvrrjVAdnFJ05sTExMLLmX18VcYB0qImRO6sVp1FrbFe6eFZ9CvGl8KdYVt9Aujv4Lb4arnFQZT8EAAAAASUVORK5CYII=";const t7={components:{},props:{overflow:{default:!1}},data(){return{showDraw:!1,loginParams:{sign:"",address:""},web3jsProvider:null,walletConnectModal:null,account:null,config:null}},mounted(){},methods:{}},r7=y2('<img src="'+Df+'" alt="" class="h-8"><div class="flex items-center"><a href="https://medium.com/@ordinfinity.org" target="_blank"><img src="'+Fg+'" alt="" class="hover-scale w-[3.13rem] mr-[3.13rem]"></a><a href="https://t.me/ordinfinity" target="_blank"><img src="'+Ug+'" alt="" class="mr-[3.13rem] w-8 hover-scale"></a><a href="https://twitter.com/ordinfinity" target="_blank"><img src="'+Wg+'" alt="" class="h-[1.75rem] mr-[3.13rem] hover-scale"></a><div class="hover-scale w-[12.5rem] h-[3.13rem] rounded-[0.75rem] bg-[#F7931A] text-white text-[1.38rem] flex items-center justify-center">LAUNCH APP</div></div>',2),n7=[r7],i7=he("img",{src:Df,alt:"",class:"h-[1.5rem]"},null,-1),o7={class:"flex items-center"},s7=he("div",{class:"w-40 h-12 bg-[#F7931A] rounded-2xl text-white text-[1.17rem] flex items-center justify-center cursor-pointer hover-scale"},"LAUNCH APP",-1),a7={class:"w-full h-full bg-[#1A1B1D] relative"},l7={class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},c7=he("img",{src:Hg,alt:"",class:"h-[2.25rem]"},null,-1),u7=he("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[he("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Bridge"),he("img",{src:rn,alt:"",class:"w-[1rem]"})],-1),f7=he("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[he("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Lend"),he("img",{src:rn,alt:"",class:"w-[1rem]"})],-1),d7=he("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[he("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Governance"),he("img",{src:rn,alt:"",class:"w-[1rem]"})],-1),h7=he("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[he("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"swap"),he("img",{src:rn,alt:"",class:"w-[1rem]"})],-1),p7=he("a",{href:"https://ordinfinity-dao.gitbook.io/ordinfinity/",target:"_blank"},[he("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[he("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Docs"),he("img",{src:rn,alt:"",class:"w-[1rem]"})])],-1),g7=he("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[he("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Github"),he("img",{src:rn,alt:"",class:"w-[1rem]"})],-1),m7=he("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[he("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"FAQ"),he("img",{src:rn,alt:"",class:"w-[1rem]"})],-1),w7=he("div",{class:"absolute bottom-0 left-0 w-full h-[7rem] border-t-[2px] border-[#272727] flex items-center px-[1.67rem]"},[he("a",{href:"https://medium.com/@ordinfinity.org",target:"_blank"},[he("img",{src:Vg,alt:"",class:"w-[3.33rem] mr-[3.5rem] hover-scale"})]),he("a",{href:"https://t.me/ordinfinity",target:"_blank"},[he("img",{src:Gg,alt:"",class:"w-[2.67rem] mr-[3.5rem] hover-scale"})]),he("a",{href:"https://twitter.com/ordinfinity",target:"_blank"},[he("img",{src:Kg,alt:"",class:"h-[2.17rem] hover-scale"})])],-1);function v7(e,t,r,n,o,i){const s=S1;return Rt(),Xt($t,null,[he("div",{class:ft(["hidden lg:flex pl-[2.38rem] pr-[1.75rem] py-8 justify-between items-center fixed top-0 left-0 w-full z-40",{"bg-[rgba(0,0,0,0.5)] backdrop-blur-md":r.overflow}])},n7,2),he("div",{class:ft(["lg:hidden flex items-center justify-between py-8 px-6 fixed top-0 left-0 w-full z-40",{"bg-[rgba(0,0,0,0.5)] backdrop-blur-md":r.overflow}])},[i7,he("div",o7,[s7,he("img",{src:jg,class:"w-8 ml-[1.67rem]",alt:"",onClick:t[0]||(t[0]=a=>o.showDraw=!0)})])],2),He(s,{modelValue:o.showDraw,"onUpdate:modelValue":t[2]||(t[2]=a=>o.showDraw=a),direction:"rtl","show-close":!1,size:"100vw",withHeader:!1},{default:ti(()=>[he("div",a7,[he("div",l7,[c7,he("img",{src:zg,alt:"",class:"w-[1.67rem]",onClick:t[1]||(t[1]=a=>o.showDraw=!1)})]),u7,f7,d7,h7,p7,g7,m7,w7])]),_:1},8,["modelValue"])],64)}const b7=gl(t7,[["render",v7]]),y7={data(){return{overflow:!1}},components:{layoutHead:b7},mounted(){this.$refs.body.addEventListener("scroll",e=>{this.overflow=e.srcElement.scrollTop>70})}},_7={class:"main h-[100vh] overflow-auto",ref:"body"};function x7(e,t,r,n,o,i){const s=bn("layoutHead"),a=bn("router-view");return Rt(),Xt("div",null,[He(s,{overflow:o.overflow},null,8,["overflow"]),he("div",_7,[He(a)],512)])}const A7=gl(y7,[["render",x7]]),E7="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAACVBJREFUeF7tXV1sVNcR/ubu2ruG4JJCq3hNUeEhgrgRUlXlp2laVU0JTcMDUhrxUFLV4EaqbAit+sMT4Ym2UkuwrUopoVWhDzSJxAOJRX7aqE3SJlFVCSXGqA9OFbDdH9MiO9i73t071Zz12rvru/ecu3vOLkV7JQTCZ+bM+ZgzM2dmzoHQxG/+qdRGP+b3xNj7FIPvJI82MOM2BtYRsAZAclG8NAOzBFwlwj/Y5ysEejdP/nte3hvteGLyg2Ytgxo5MR9buzbTtvpzBN7FjHsY2ALAq1MGn4BLRHiLQWcT2etv0MFr1+rkaUzuHED+1SeTmdmFz8PjPjA9wMBaY+lqGEjANRC/Cp9OJNa0/5G++fd0DWyMSZwBODPcvS4Of48H+hYzthpLZHEgEcZ88C9y8E539k9ctch6iZV1APnnG29N53OPg7EfhC4XQkfmyZgCYTAZiz9N3/7gv5HpQwisAchPIp5e17UbwBGANtsU0h4vHgdwOHl16gw9iZwNvlYATA93386+fxxEO2wI5ZwH83nyvAPJ/om/1TtXXQAyQOnjXXtBdBSE9fUK01B6xjSYDyUPTJ0kgGudu2YArx3deGvyltyPGeirdfIbgY6AE+kP4z9Ye6g221gTgHOD3RsAPkOE+24EEOqVgRlvArR71f6JK1F5RQYwM5Ta4oNfvHEdRVQIiuN53AN9NTEweSkKh0gAfjjYvS1G/AKADVEm+T8aeyXP9PAt+ycumMpsDGBB8/DKTQxeEbMrHvBlU000AlBsHpH/h5tv21bTMx5n9r5gYhO1AIq3bV+dO3ezOAzTrSmOZeF6fKfOO4cCKHFeZij1dDNClfj9R+CtvwP+9EX44+fhT48CmRnT9VsZJyFOYmDy8bA4MRTA+eNd++DRCSvSRGTSvus5eN2fXaISABfObI/IxcJwn/s6Dkw9U41TVQALxzN+syknjEQnkn1jZTLnLjyD3OuHl/5OAJbPuYYypsmj+6od+wIBVImBj3ada9bZ1uu+F+27ni8DcGGkF/74S4W/MwDYgu4ts2A+n/zP1M6gBEQggPNDXV8H6LRVISIwE/sX37avjCJ9YuuSDdQCHGEu86G8p2Ng6jeV41cAWMjnZf/iJGRJdCLx2Nvg6feQH38JPD0Kf+LPK9ags386gM1BiTKSx5Oxts9U5hNXADg/lPohgKNRWJuODdIczsyUAzo9amT/muRgDnUMTP6odL1lAEoavs3nd11lkoM0pxJ8AZQSnTeO/SuVhDGV9ejO0vJAGYBzw11PENMxU42KOq5ya5rS88xlFQeq7Z6ZQdsD5SKWORhTpjWOY+KDq/qnniqSLwGoqmfXF/7qsgDU9tBJeOt7QJ2fqFH8YLJSB2OVcQAzKVQlVrd/uljtWwIwPZjazoTFOMGtGLS+B7HNDyK25VErYObHnkX+0rOBDsnFSojxYHL/5MvCexnA4a7nmOkRFxNW4xnkVOqZX7Z67p2fKTBdfkT8fLJ/6mtLAKqOgfiq910XvYMWlXjsLStaWMpb7GX2xV7wbOQEsxHuUrxP5OY2SQeE0sD0cPfDzHzOiNrmoIATRZnTy8wgO9KL4pYvDV10Yog3F9qgOFNHa/JzItqZ7J94QQGYGU6d9Bm9JoQ2x+i2cH78PLIje8um9BZtZ2yzvoIqIC6cfUQF7LY/j/DLRP/k3oIGDqVGGbjD9iQ6frq4MPv6YeQvBCdCaM0GdV7WeXTRQAHR9kfAxeTAZA9JixlieN9Cl1RkGXVxYebM9nDtSXQqECU0CvsEQAdb2Ucem+j60G1f8eCNRF59vQQG9i8jCQTNpzMDQl6ZCtPxNP25D/8hSg+mvseEn5gS2RqnW3iQ/as2t86TS5yY/d1BW6Iv8SHG92l+sOsUiPZY565hWI/9q2Sd6BtbcX4uHeMKQDCfpvRw6vfM+GKjAazb/i0KLM4k8Y23Q8UPc0b1rJsIr9H8UOoi0OAGSBP7d+pufREp0Ym2Lx2DLqTROqPaURyjuaHUPwn4eO08olPq7F+RYzED40/8SYEpR7Xi523eobLWujBGaDKn7okupAEFA/8SDZwD0GEw3toQnf2zNhEAx6mueQHQL00q2BS+Gi+d/bMlQ+6dn6rkgsOPGw+gxv7ZWKxs2+wbh5ereDaYBvNQADZ0C+vsn8R/cnyTcYVfy8V1ExychSzBk8833Ino7N+KkCPRqYCMbdqB2NZHTTCEgCjb11U6qyhE0Yk0NIzR2b+wkENiPgExftd3tUAq7/vb7fpQSMspdMBYYwNpk/jP4Pzb7ExMEdJCIN3Ao5yJ/avM/1X79zcF0VEmpiCWOso1MJkQ2f5ptlds2z603X8kdJSrTIxMqpIJrtJZUnGTE0SpIddlTaIeuSTVn9itimNVvyhZnajmUKWzXCRUS7eqHMfEoFPiI8qbVvsk/W6S/yul15kEGSv/iAtnVQHN9ldIqApX2yl9KaDrDviVq6lFU1QiQRPauIoLl1L6shCbRSWT9FKQKkSN3ZQT2f1KaB5Q5sm+etBJnbi8qGSxrGmiFWF7SW35fxf6YNSfZy+XxXLFWDC2rU8LnlKOX9/tJKAuK2vaLKyr5nA5gmkKPVENUlDXlo6HK/u3orCu7KDl1g7RFPpYjzqCye+2AdWBJz93lcpa0dqhAHTcXCSASmJAFcYNiuImADUrfAlsLmpEe5ssOH7Xd1acZWvZnmHgSdikOhIc9MZUbW8TgVw3WMoc1fqfxW5KYGySpg91QtKJMNLrLIlQtcFShHLd4itzJPsnytZfGadVAqx6qGcvh9rQQp/1qEphOehAWJZX1+IrIxvdZF5p6MMAVo6p2N0qfdQC3CJ49dpMQ/rwJnNh4vKaQ5D9K43TmnP/wxA6GF5zKGihm4s22vsfAQ7GVSBsClvJ/jW7aKO00NFVr6j2r2kXDCvRjXrVqxBYu7lsuFwsuld1TS3dfzNwMNG1xgJFLZcNi9M28rprUG7P1UkiEqy1XndVW7kJF65LNVQyKS6CYVMA675wLRO1rvyHP8ijfTNBnVBaj05UVVojAIW69exJMIbGAAp56+GdlSBGAnBZE1tPPxWhjAxg0Sa2Hh8rQFgTgEXv3Hr+rg4Ai3Fi6wFG06gyZFzrCVALILYeobUAotrWrWeQ7SDZeojbDo5oPQVvCUi1vVv/GYFFNKV0cBP8dxj/Aze4RfLAfoBVAAAAAElFTkSuQmCC",C7="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAPRJREFUWEftlWENwjAQhd9zgAUcYAEnSMABoAALSMABOAAJSMDBkUvaZSvbeldK9qdL9mNrl++7l+yVWPjiwnw0gZZAS6BLQEQ2APS+knz/4/cUkRWAHYA7yacy+gKPIKAL29oSAX4LjBfJdSqwB3AOk1eVSOCKOJI8DQT0QUQOulhTYg7+JVBbIgcfFaglYYFPCvwqYYXPCpRKeOBZAa+EF24SsEqUwM0COYlSuEtgSiJ0Rmy4QclY6tx9Go6UlXL0DHHD3QnEiRKJ+LqrV8vkcY87gQmJInhxAj0JPVpB8uKZur+3OIFSYPpdE2gJtAQWT+ADn7qTIanPvswAAAAASUVORK5CYII=",qg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA1pJREFUaEPtWE1SGlEQ/nrACkNMhewAN3iC4A3gBnqCwF6InEA5wRjIHnICvQF4ArmBZCFxF6piGFMO06kZHJ0/mP8Qq4Yl0+/r/r7ufq/fI7zyH73y+JES2HYG0wykGYioQFpCmoAsFQpyRmyQQB+JUWDmKhMVnsSdEnhOhMmS6epta3YZUXTL8kgZkPvFGkCnDKoSYAS8OT7GFALGyqP67V3nbhyVTCgC99JeNZNVJYBqkQIgDPGodsXO3TQsTiACWqk8ZPOfAZy5OWRgopWKVjKqiu9E9J6IC8yogqkCQsWxjjFdgrq77dthGBK+CWjB/8nmRwxUzY4YmBNwDqhXYmtzSfySirXsjvAJKmp2MsR8nmv/6AQl4YuALBUrlBUuzMEbgeeUxRfqzOdBHGt42BFOwWjYOnIoHs+aQbA8CejOMsLIqhiPoXAzSu1qQeqbAAsDCzYhEAlvAv3SyNKsAR14qekmUJBy2khA7pdPLQ0bc/AGOTcSKnDk58xYS0AHzQo3LwryWGz9qHspGva7nYTWY6Ky2Pfqr/UEeuWb59rUDp+lWo9a817kVgejMDLsiPg8d7x5Z3IlcN/ba2SIBwbQkqkZdp/2Ctr+/aFXkpjoZPW/d9ZdCcjmxk2o7tcRWx2W4oU2njDQ9OoDB4HVmMDXhgNFUetxzCxBM+HX3kFA/loeGAeMNhrkW7MDv2DbsHMSMDXvv6z9sOQtBOzlk1MWH7y2sbCO41pnIbDolU6ISPK7A8QVRBQcC4GHflkb2A6fAM/E1qwbBTyuteaLE4ApAZfGEKkTWJ26NDDPPEHmkbgCdcP53S8fCsCF/RsBkzfKok7u0+bK/H8gIZsnAifDMzJvm24KbLOR16n/HCfzlBb98jXZbllmIktWm7vtu1DXvail5ZiGXQBJ7pfZw9HWmvm+V2xkSHieyexx6rdCuVe6AZHzsv1k7Xcuj6q22/qnR4Sfa7EJQy0D1kuL2ZoxFduz/SSC84tpnU5fVunqK+oB6Swz+Wu3J49tqm8m6BBZe4pZ0tFu53ainwM6iZ289PLcwWOAu17PJH5VjMNO2+4VoELIzLXADUzPS30czpPESAkkqa4f7DQDflRK0ibNQJLq+sFOM+BHpSRt0gwkqa4f7Fefgb8ZzmTJBxQZqwAAAABJRU5ErkJggg==",Yg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABGpJREFUWEetWD1S5EYY/T5BQIGD2cwh3IDJHMIJ2D2Bl0SNisCeE+xygsEBJVrJ4hOYPQGbOfT4BOYGnsCoJmC6XU/VLX/TI6lbg1W1VVtMq/X6+3nv9ceU8JRl+THLsjkRTRKWpyxZMPNlnueL2GKOLcDvWuu/iOg4Ze2INcu6rk9ms9ly6J0oQK31eyL6zW1yS0SDG8YAMvOxtfajW/dBKfX4JoBlWR5nWYYIEjM/5Hl+GQMx9HtVVV88QGPMSVEUz28C6FKMCCKSZIw5L4ri2y4g5WGJ6LNS6ia2TzTF2MBt/Idrkue6rqex2un6sIjes1LqJAauyVrKIhfFn4kInYwn6fRy77Isz7Ise8LfXl9fp9fX19EOHgUQi6uqerLWnhFRcgQ8yPv7+ydmPhtbx8kRdKkGH37B/5VSo971VGWMuSyK4iE1c2M/0qbZWjuqURC9XcojGaBrFNTQmwmbmacpKpJcgyE4GT1m/oGIDlCX1tphTvtv7ZKZz1NARiM4n88nh4eHoBgfubaDtdZtylNqK1ClpTFm+mai1lq3JC3pxQGHwkyY+Vue5+cphe+MR9NoiHqMUwcjqLX+BFBNLQQyF0jWKHWRkY8drhfg0Ekl6RLRo1LqQ0r05BqtNUgfJYJnppSCEdl6OgEGTfHs9LdtAK01avIUzialjvrAy336mqYTYJC+DWJ1tff3LpwWApUa35fqLYAp9grdaIyZjFGEgSgOMsEWQK+Z2DDFr42tva71ItVbGr8BMCj+0Y5lV7Dyu6Hf3AA41u3uCqjrPe+UwlrcAKi1tl2c938CSanFuq7feUPcAgzSG73MjAUtyLmzdCQ7SNlsAUrVkCcYC2QgQp2SGZC359dbpdSsyaZfELsvVFV1aq29MMb8GhP4LpCgL2b+nZm/7+NQj0HKagvQ0wus1NXV1ZbwC/qJCnwPwNaNi9830u2zKDF0RXChlJqGHwmNw8vLyyz1Ziffdfv+Q0TfOa5tlUroc6vvXQCXSql3IUBXxHDU0GA80OibPjVx62HzYQqkC//MzF+ttdgLsx7pL32dbtdgYD47b/w9th8mAldI/IM3xEcx3vB3EHnWFgwOcHBwcCqHAFpraPyks4vv7u5O9/f30UV4elXERQY+0VullEZHtJHK3ouWtHedPIiviClWdPKEaO7t7X2y1iLlPu0SLO4dj+v1Gl0fvQH6b4fGOFQSOT1o6yAWIp8uX5ur1WqZ2kAuMK1zDw3KlpsR04PBVMdAp/4edPhWafX5wfb+i5Cv12t06+CVMhWQX4eoHx0dzf0orm8kkmL5G0ohooddVUSCd032k2uyZqQ8NK8ZujShCTBs3KALbGat/WqMWaRG1dHTe2a+cE3lZ92Y1t70XZga8LHUuPZHEXeNPJppQpZl4VSh4UMHBu+Fw3cAu63r+pdYM0UB+gMAKDP/KIZAsbOFv4N2Foh+XdcPMWD+5WSAsrihAFmWXTjFQLTAgzJKXl1A0H+ihler1SIVlDzZv57G20eKv0Q9AAAAAElFTkSuQmCC",T7="/assets/logo2-9ea92a23.png",S7={data(){return{routeTab:1,showDraw:!1}},methods:{selectRoute(e){this.routeTab=e}}},I7={class:"cross bg-[#242527]"},$7={class:"fixed top-0 left-0 w-full h-[4.8rem] items-center justify-end z-40 pr-[1.25rem] hidden lg:flex"},R7=he("img",{src:Fg,alt:"",class:"hover-scale cursor-pointer w-6 mr-[2.5rem]"},null,-1),O7=he("img",{src:Ug,alt:"",class:"mr-[2.5rem] w-6 hover-scale cursor-pointer"},null,-1),N7=he("img",{src:Wg,alt:"",class:"w-5 mr-[2.5rem] hover-scale cursor-pointer"},null,-1),L7={key:0,class:"hover-scale cursor-pointer w-[11rem] h-[2.75rem] rounded-[0.75rem] bg-[rgba(247,147,26,0.1)] border border-[#F7931A] text-white text-[1rem] flex items-center justify-center px-[0.6rem]"},k7=he("img",{src:E7,alt:"",class:"w-[1.5rem] h-[1.5rem]"},null,-1),P7=he("span",{class:"flex-1"},"BITCOIN",-1),M7=he("img",{src:C7,alt:"",class:"w-4"},null,-1),B7=[k7,P7,M7],D7={key:1,class:"hover-scale cursor-pointer w-[11rem] h-[2.75rem] rounded-[0.75rem] bg-[rgba(247,147,26,0.1)] border border-[#F7931A] text-white text-[1rem] flex items-center justify-center"},F7={class:"w-[17.5rem] h-[100vh] fixed left-0 top-0 z-50 bg-[#1A1B1D] px-[0.75rem] hidden lg:block"},U7={class:"mt-4 mb-[3rem]"},W7=he("img",{src:qg,alt:"",class:"w-6 mr-[0.6rem]"},null,-1),j7=he("img",{src:Yg,alt:"",class:"w-6 mr-[0.6rem]"},null,-1),H7=he("img",{src:T7,alt:"",class:"h-[4rem]"},null,-1),z7={class:"flex items-center"},V7=he("div",{class:"w-40 h-12 bg-[#F7931A] rounded-2xl text-white text-[1.17rem] flex items-center justify-center cursor-pointer hover-scale"},"LAUNCH APP",-1),G7={class:"w-[100vw] h-[100vh] lg:pl-[17.5rem] overflow-y-auto"},K7={class:"w-full h-full bg-[#1A1B1D] relative"},q7={class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},Y7=he("img",{src:Hg,alt:"",class:"h-[2.25rem]"},null,-1),Z7={class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},Q7={class:"flex items-center"},J7=he("img",{src:qg,class:"w-8 mr-[0.8rem]",alt:""},null,-1),X7=he("img",{src:rn,alt:"",class:"w-[1rem]"},null,-1),eA={class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},tA={class:"flex items-center"},rA=he("img",{src:Yg,class:"w-8 mr-[0.8rem]",alt:""},null,-1),nA=he("img",{src:rn,alt:"",class:"w-[1rem]"},null,-1),iA=he("div",{class:"absolute bottom-0 left-0 w-full h-[7rem] border-t-[2px] border-[#272727] flex items-center px-[1.67rem]"},[he("img",{src:Vg,alt:"",class:"w-[3.33rem] mr-[3.5rem] hover-scale"}),he("img",{src:Gg,alt:"",class:"w-[2.67rem] mr-[3.5rem] hover-scale"}),he("img",{src:Kg,alt:"",class:"h-[2.17rem] hover-scale"})],-1);function oA(e,t,r,n,o,i){const s=bn("router-view"),a=S1;return Rt(),Xt($t,null,[he("div",I7,[he("div",$7,[R7,O7,N7,e.$store.state.userAddress?(Rt(),Xt("div",L7,B7)):(Rt(),Xt("div",D7," Connect Wallet "))]),he("div",F7,[he("div",U7,[he("img",{src:Df,alt:"",class:"h-[1.5rem] cursor-pointer",onClick:t[0]||(t[0]=l=>e.$router.replace("/app/home"))})]),he("div",{class:ft(["w-full h-[2.75rem] flex items-center px-5 rounded-[0.75rem] cursor-pointer",{"bg-[#30271D]":o.routeTab==1}]),onClick:t[1]||(t[1]=l=>i.selectRoute(1))},[W7,he("span",{class:ft(["text-[1rem] text-[#999999] font-bold",{"text-[#F7931A]":o.routeTab==1}])},"Bridge",2)],2),he("div",{class:ft(["w-full h-[2.75rem] flex items-center px-5 rounded-[0.75rem] cursor-pointer",{"bg-[#30271D]":o.routeTab==2}]),onClick:t[2]||(t[2]=l=>i.selectRoute(2))},[j7,he("span",{class:ft(["text-[1rem] text-[#999999] font-bold",{"text-[#F7931A]":o.routeTab==2}])},"borrowing",2)],2)]),he("div",{class:ft(["lg:hidden flex items-center justify-between py-8 px-6 fixed top-0 left-0 w-full z-40",{"bg-[rgba(0,0,0,0.5)] backdrop-blur-md":e.overflow}])},[H7,he("div",z7,[V7,he("img",{src:jg,class:"w-8 ml-[1.67rem]",alt:"",onClick:t[3]||(t[3]=l=>o.showDraw=!0)})])],2),he("div",G7,[He(s)])]),He(a,{modelValue:o.showDraw,"onUpdate:modelValue":t[5]||(t[5]=l=>o.showDraw=l),direction:"rtl","show-close":!1,size:"100vw",withHeader:!1},{default:ti(()=>[he("div",K7,[he("div",q7,[Y7,he("img",{src:zg,alt:"",class:"w-[1.67rem]",onClick:t[4]||(t[4]=l=>o.showDraw=!1)})]),he("div",Z7,[he("div",Q7,[J7,he("span",{class:ft(["text-[1.33rem] text-[#999999] font-bold",{"text-[#F7931A]":o.routeTab==1}])},"Bridge",2)]),X7]),he("div",eA,[he("div",tA,[rA,he("span",{class:ft(["text-[1.33rem] text-[#999999] font-bold",{"text-[#F7931A]":o.routeTab==2}])},"borrowing",2)]),nA]),iA])]),_:1},8,["modelValue"])],64)}const sA=gl(S7,[["render",oA]]),aA=[{path:"/",redirect:"/app/home"},{path:"/app",component:A7,children:[{path:"/app/home",name:"首页",component:()=>Qd(()=>import("./index-aa79926f.js"),["assets/index-aa79926f.js","assets/eth-83057141.js","assets/index-49818240.css"])}]},{path:"/cross",component:sA,redirect:"/cross/bridge",children:[{path:"/cross/bridge",name:"bridge",component:()=>Qd(()=>import("./index-e08bdd72.js"),["assets/index-e08bdd72.js","assets/eth-83057141.js"])}]}];var Zg={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(r,n){e.exports=n()})(_l,function(){var r={};r.version="0.2.0";var n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(_){var I,P;for(I in _)P=_[I],P!==void 0&&_.hasOwnProperty(I)&&(n[I]=P);return this},r.status=null,r.set=function(_){var I=r.isStarted();_=o(_,n.minimum,1),r.status=_===1?null:_;var P=r.render(!I),C=P.querySelector(n.barSelector),A=n.speed,z=n.easing;return P.offsetWidth,a(function(N){n.positionUsing===""&&(n.positionUsing=r.getPositioningCSS()),l(C,s(_,A,z)),_===1?(l(P,{transition:"none",opacity:1}),P.offsetWidth,setTimeout(function(){l(P,{transition:"all "+A+"ms linear",opacity:0}),setTimeout(function(){r.remove(),N()},A)},A)):setTimeout(N,A)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var _=function(){setTimeout(function(){r.status&&(r.trickle(),_())},n.trickleSpeed)};return n.trickle&&_(),this},r.done=function(_){return!_&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(_){var I=r.status;return I?(typeof _!="number"&&(_=(1-I)*o(Math.random()*I,.1,.95)),I=o(I+_,0,.994),r.set(I)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},function(){var _=0,I=0;r.promise=function(P){return!P||P.state()==="resolved"?this:(I===0&&r.start(),_++,I++,P.always(function(){I--,I===0?(_=0,r.done()):r.set((_-I)/_)}),this)}}(),r.render=function(_){if(r.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var I=document.createElement("div");I.id="nprogress",I.innerHTML=n.template;var P=I.querySelector(n.barSelector),C=_?"-100":i(r.status||0),A=document.querySelector(n.parent),z;return l(P,{transition:"all 0 linear",transform:"translate3d("+C+"%,0,0)"}),n.showSpinner||(z=I.querySelector(n.spinnerSelector),z&&E(z)),A!=document.body&&d(A,"nprogress-custom-parent"),A.appendChild(I),I},r.remove=function(){p(document.documentElement,"nprogress-busy"),p(document.querySelector(n.parent),"nprogress-custom-parent");var _=document.getElementById("nprogress");_&&E(_)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var _=document.body.style,I="WebkitTransform"in _?"Webkit":"MozTransform"in _?"Moz":"msTransform"in _?"ms":"OTransform"in _?"O":"";return I+"Perspective"in _?"translate3d":I+"Transform"in _?"translate":"margin"};function o(_,I,P){return _<I?I:_>P?P:_}function i(_){return(-1+_)*100}function s(_,I,P){var C;return n.positionUsing==="translate3d"?C={transform:"translate3d("+i(_)+"%,0,0)"}:n.positionUsing==="translate"?C={transform:"translate("+i(_)+"%,0)"}:C={"margin-left":i(_)+"%"},C.transition="all "+I+"ms "+P,C}var a=function(){var _=[];function I(){var P=_.shift();P&&P(I)}return function(P){_.push(P),_.length==1&&I()}}(),l=function(){var _=["Webkit","O","Moz","ms"],I={};function P(N){return N.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(V,q){return q.toUpperCase()})}function C(N){var V=document.body.style;if(N in V)return N;for(var q=_.length,Y=N.charAt(0).toUpperCase()+N.slice(1),y;q--;)if(y=_[q]+Y,y in V)return y;return N}function A(N){return N=P(N),I[N]||(I[N]=C(N))}function z(N,V,q){V=A(V),N.style[V]=q}return function(N,V){var q=arguments,Y,y;if(q.length==2)for(Y in V)y=V[Y],y!==void 0&&V.hasOwnProperty(Y)&&z(N,Y,y);else z(N,q[1],q[2])}}();function h(_,I){var P=typeof _=="string"?_:g(_);return P.indexOf(" "+I+" ")>=0}function d(_,I){var P=g(_),C=P+I;h(P,I)||(_.className=C.substring(1))}function p(_,I){var P=g(_),C;h(_,I)&&(C=P.replace(" "+I+" "," "),_.className=C.substring(1,C.length-1))}function g(_){return(" "+(_.className||"")+" ").replace(/\s+/gi," ")}function E(_){_&&_.parentNode&&_.parentNode.removeChild(_)}return r})})(Zg);var Qg=Zg.exports;const Ff=xb({history:Dv(),routes:aA});Ff.beforeEach((e,t,r)=>{Qg.start(),r()});Ff.afterEach((e,t)=>{Qg.done()});/*!
  * shared v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const wu=typeof window<"u",Wn=(e,t=!1)=>t?Symbol.for(e):Symbol(e),lA=(e,t,r)=>cA({l:e,k:t,s:r}),cA=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),ht=e=>typeof e=="number"&&isFinite(e),uA=e=>Xg(e)==="[object Date]",Mn=e=>Xg(e)==="[object RegExp]",Ul=e=>ke(e)&&Object.keys(e).length===0,St=Object.assign;let dh;const Gr=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hh(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const fA=Object.prototype.hasOwnProperty;function ks(e,t){return fA.call(e,t)}const tt=Array.isArray,it=e=>typeof e=="function",we=e=>typeof e=="string",Fe=e=>typeof e=="boolean",Ze=e=>e!==null&&typeof e=="object",Jg=Object.prototype.toString,Xg=e=>Jg.call(e),ke=e=>{if(!Ze(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},dA=e=>e==null?"":tt(e)||ke(e)&&e.toString===Jg?JSON.stringify(e,null,2):String(e);function hA(e,t=""){return e.reduce((r,n,o)=>o===0?r+n:r+t+n,"")}function Uf(e){let t=e;return()=>++t}function pA(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const fa=e=>!Ze(e)||tt(e);function ss(e,t){if(fa(e)||fa(t))throw new Error("Invalid value");for(const r in e)ks(e,r)&&(fa(e[r])||fa(t[r])?t[r]=e[r]:ss(e[r],t[r]))}/*!
  * message-compiler v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function gA(e,t,r){return{line:e,column:t,offset:r}}function vu(e,t,r){const n={start:e,end:t};return r!=null&&(n.source=r),n}const mA=/\{([0-9a-zA-Z]+)\}/g;function wA(e,...t){return t.length===1&&vA(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(mA,(r,n)=>t.hasOwnProperty(n)?t[n]:"")}const em=Object.assign,ph=e=>typeof e=="string",vA=e=>e!==null&&typeof e=="object";function tm(e,t=""){return e.reduce((r,n,o)=>o===0?r+n:r+t+n,"")}const Oe={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},bA={[Oe.EXPECTED_TOKEN]:"Expected token: '{0}'",[Oe.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Oe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Oe.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Oe.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Oe.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Oe.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Oe.EMPTY_PLACEHOLDER]:"Empty placeholder",[Oe.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Oe.INVALID_LINKED_FORMAT]:"Invalid linked format",[Oe.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Oe.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Oe.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Oe.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Oe.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Oe.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Oo(e,t,r={}){const{domain:n,messages:o,args:i}=r,s=wA((o||bA)[e]||"",...i||[]),a=new SyntaxError(String(s));return a.code=e,t&&(a.location=t),a.domain=n,a}function yA(e){throw e}const Hr=" ",_A="\r",Mt=`
`,xA=String.fromCharCode(8232),AA=String.fromCharCode(8233);function EA(e){const t=e;let r=0,n=1,o=1,i=0;const s=Y=>t[Y]===_A&&t[Y+1]===Mt,a=Y=>t[Y]===Mt,l=Y=>t[Y]===AA,h=Y=>t[Y]===xA,d=Y=>s(Y)||a(Y)||l(Y)||h(Y),p=()=>r,g=()=>n,E=()=>o,_=()=>i,I=Y=>s(Y)||l(Y)||h(Y)?Mt:t[Y],P=()=>I(r),C=()=>I(r+i);function A(){return i=0,d(r)&&(n++,o=0),s(r)&&r++,r++,o++,t[r]}function z(){return s(r+i)&&i++,i++,t[r+i]}function N(){r=0,n=1,o=1,i=0}function V(Y=0){i=Y}function q(){const Y=r+i;for(;Y!==r;)A();i=0}return{index:p,line:g,column:E,peekOffset:_,charAt:I,currentChar:P,currentPeek:C,next:A,peek:z,reset:N,resetPeek:V,skipToPeek:q}}const cn=void 0,CA=".",gh="'",TA="tokenizer";function SA(e,t={}){const r=t.location!==!1,n=EA(e),o=()=>n.index(),i=()=>gA(n.line(),n.column(),n.index()),s=i(),a=o(),l={currentType:14,offset:a,startLoc:s,endLoc:s,lastType:14,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},h=()=>l,{onError:d}=t;function p(w,v,L,...K){const Q=h();if(v.column+=L,v.offset+=L,d){const ne=r?vu(Q.startLoc,v):null,ae=Oo(w,ne,{domain:TA,args:K});d(ae)}}function g(w,v,L){w.endLoc=i(),w.currentType=v;const K={type:v};return r&&(K.loc=vu(w.startLoc,w.endLoc)),L!=null&&(K.value=L),K}const E=w=>g(w,14);function _(w,v){return w.currentChar()===v?(w.next(),v):(p(Oe.EXPECTED_TOKEN,i(),0,v),"")}function I(w){let v="";for(;w.currentPeek()===Hr||w.currentPeek()===Mt;)v+=w.currentPeek(),w.peek();return v}function P(w){const v=I(w);return w.skipToPeek(),v}function C(w){if(w===cn)return!1;const v=w.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v===95}function A(w){if(w===cn)return!1;const v=w.charCodeAt(0);return v>=48&&v<=57}function z(w,v){const{currentType:L}=v;if(L!==2)return!1;I(w);const K=C(w.currentPeek());return w.resetPeek(),K}function N(w,v){const{currentType:L}=v;if(L!==2)return!1;I(w);const K=w.currentPeek()==="-"?w.peek():w.currentPeek(),Q=A(K);return w.resetPeek(),Q}function V(w,v){const{currentType:L}=v;if(L!==2)return!1;I(w);const K=w.currentPeek()===gh;return w.resetPeek(),K}function q(w,v){const{currentType:L}=v;if(L!==8)return!1;I(w);const K=w.currentPeek()===".";return w.resetPeek(),K}function Y(w,v){const{currentType:L}=v;if(L!==9)return!1;I(w);const K=C(w.currentPeek());return w.resetPeek(),K}function y(w,v){const{currentType:L}=v;if(!(L===8||L===12))return!1;I(w);const K=w.currentPeek()===":";return w.resetPeek(),K}function x(w,v){const{currentType:L}=v;if(L!==10)return!1;const K=()=>{const ne=w.currentPeek();return ne==="{"?C(w.peek()):ne==="@"||ne==="%"||ne==="|"||ne===":"||ne==="."||ne===Hr||!ne?!1:ne===Mt?(w.peek(),K()):C(ne)},Q=K();return w.resetPeek(),Q}function S(w){I(w);const v=w.currentPeek()==="|";return w.resetPeek(),v}function k(w){const v=I(w),L=w.currentPeek()==="%"&&w.peek()==="{";return w.resetPeek(),{isModulo:L,hasSpace:v.length>0}}function $(w,v=!0){const L=(Q=!1,ne="",ae=!1)=>{const le=w.currentPeek();return le==="{"?ne==="%"?!1:Q:le==="@"||!le?ne==="%"?!0:Q:le==="%"?(w.peek(),L(Q,"%",!0)):le==="|"?ne==="%"||ae?!0:!(ne===Hr||ne===Mt):le===Hr?(w.peek(),L(!0,Hr,ae)):le===Mt?(w.peek(),L(!0,Mt,ae)):!0},K=L();return v&&w.resetPeek(),K}function W(w,v){const L=w.currentChar();return L===cn?cn:v(L)?(w.next(),L):null}function j(w){return W(w,L=>{const K=L.charCodeAt(0);return K>=97&&K<=122||K>=65&&K<=90||K>=48&&K<=57||K===95||K===36})}function O(w){return W(w,L=>{const K=L.charCodeAt(0);return K>=48&&K<=57})}function R(w){return W(w,L=>{const K=L.charCodeAt(0);return K>=48&&K<=57||K>=65&&K<=70||K>=97&&K<=102})}function F(w){let v="",L="";for(;v=O(w);)L+=v;return L}function D(w){P(w);const v=w.currentChar();return v!=="%"&&p(Oe.EXPECTED_TOKEN,i(),0,v),w.next(),"%"}function G(w){let v="";for(;;){const L=w.currentChar();if(L==="{"||L==="}"||L==="@"||L==="|"||!L)break;if(L==="%")if($(w))v+=L,w.next();else break;else if(L===Hr||L===Mt)if($(w))v+=L,w.next();else{if(S(w))break;v+=L,w.next()}else v+=L,w.next()}return v}function te(w){P(w);let v="",L="";for(;v=j(w);)L+=v;return w.currentChar()===cn&&p(Oe.UNTERMINATED_CLOSING_BRACE,i(),0),L}function re(w){P(w);let v="";return w.currentChar()==="-"?(w.next(),v+=`-${F(w)}`):v+=F(w),w.currentChar()===cn&&p(Oe.UNTERMINATED_CLOSING_BRACE,i(),0),v}function fe(w){P(w),_(w,"'");let v="",L="";const K=ne=>ne!==gh&&ne!==Mt;for(;v=W(w,K);)v==="\\"?L+=xe(w):L+=v;const Q=w.currentChar();return Q===Mt||Q===cn?(p(Oe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),Q===Mt&&(w.next(),_(w,"'")),L):(_(w,"'"),L)}function xe(w){const v=w.currentChar();switch(v){case"\\":case"'":return w.next(),`\\${v}`;case"u":return Te(w,v,4);case"U":return Te(w,v,6);default:return p(Oe.UNKNOWN_ESCAPE_SEQUENCE,i(),0,v),""}}function Te(w,v,L){_(w,v);let K="";for(let Q=0;Q<L;Q++){const ne=R(w);if(!ne){p(Oe.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${v}${K}${w.currentChar()}`);break}K+=ne}return`\\${v}${K}`}function Ae(w){P(w);let v="",L="";const K=Q=>Q!=="{"&&Q!=="}"&&Q!==Hr&&Q!==Mt;for(;v=W(w,K);)L+=v;return L}function Ee(w){let v="",L="";for(;v=j(w);)L+=v;return L}function J(w){const v=(L=!1,K)=>{const Q=w.currentChar();return Q==="{"||Q==="%"||Q==="@"||Q==="|"||Q==="("||Q===")"||!Q||Q===Hr?K:Q===Mt||Q===CA?(K+=Q,w.next(),v(L,K)):(K+=Q,w.next(),v(!0,K))};return v(!1,"")}function ue(w){P(w);const v=_(w,"|");return P(w),v}function oe(w,v){let L=null;switch(w.currentChar()){case"{":return v.braceNest>=1&&p(Oe.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),w.next(),L=g(v,2,"{"),P(w),v.braceNest++,L;case"}":return v.braceNest>0&&v.currentType===2&&p(Oe.EMPTY_PLACEHOLDER,i(),0),w.next(),L=g(v,3,"}"),v.braceNest--,v.braceNest>0&&P(w),v.inLinked&&v.braceNest===0&&(v.inLinked=!1),L;case"@":return v.braceNest>0&&p(Oe.UNTERMINATED_CLOSING_BRACE,i(),0),L=de(w,v)||E(v),v.braceNest=0,L;default:let Q=!0,ne=!0,ae=!0;if(S(w))return v.braceNest>0&&p(Oe.UNTERMINATED_CLOSING_BRACE,i(),0),L=g(v,1,ue(w)),v.braceNest=0,v.inLinked=!1,L;if(v.braceNest>0&&(v.currentType===5||v.currentType===6||v.currentType===7))return p(Oe.UNTERMINATED_CLOSING_BRACE,i(),0),v.braceNest=0,Ce(w,v);if(Q=z(w,v))return L=g(v,5,te(w)),P(w),L;if(ne=N(w,v))return L=g(v,6,re(w)),P(w),L;if(ae=V(w,v))return L=g(v,7,fe(w)),P(w),L;if(!Q&&!ne&&!ae)return L=g(v,13,Ae(w)),p(Oe.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,L.value),P(w),L;break}return L}function de(w,v){const{currentType:L}=v;let K=null;const Q=w.currentChar();switch((L===8||L===9||L===12||L===10)&&(Q===Mt||Q===Hr)&&p(Oe.INVALID_LINKED_FORMAT,i(),0),Q){case"@":return w.next(),K=g(v,8,"@"),v.inLinked=!0,K;case".":return P(w),w.next(),g(v,9,".");case":":return P(w),w.next(),g(v,10,":");default:return S(w)?(K=g(v,1,ue(w)),v.braceNest=0,v.inLinked=!1,K):q(w,v)||y(w,v)?(P(w),de(w,v)):Y(w,v)?(P(w),g(v,12,Ee(w))):x(w,v)?(P(w),Q==="{"?oe(w,v)||K:g(v,11,J(w))):(L===8&&p(Oe.INVALID_LINKED_FORMAT,i(),0),v.braceNest=0,v.inLinked=!1,Ce(w,v))}}function Ce(w,v){let L={type:14};if(v.braceNest>0)return oe(w,v)||E(v);if(v.inLinked)return de(w,v)||E(v);switch(w.currentChar()){case"{":return oe(w,v)||E(v);case"}":return p(Oe.UNBALANCED_CLOSING_BRACE,i(),0),w.next(),g(v,3,"}");case"@":return de(w,v)||E(v);default:if(S(w))return L=g(v,1,ue(w)),v.braceNest=0,v.inLinked=!1,L;const{isModulo:Q,hasSpace:ne}=k(w);if(Q)return ne?g(v,0,G(w)):g(v,4,D(w));if($(w))return g(v,0,G(w));break}return L}function M(){const{currentType:w,offset:v,startLoc:L,endLoc:K}=l;return l.lastType=w,l.lastOffset=v,l.lastStartLoc=L,l.lastEndLoc=K,l.offset=o(),l.startLoc=i(),n.currentChar()===cn?g(l,14):Ce(n,l)}return{nextToken:M,currentOffset:o,currentPosition:i,context:h}}const IA="parser",$A=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function RA(e,t,r){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const n=parseInt(t||r,16);return n<=55295||n>=57344?String.fromCodePoint(n):"�"}}}function OA(e={}){const t=e.location!==!1,{onError:r}=e;function n(C,A,z,N,...V){const q=C.currentPosition();if(q.offset+=N,q.column+=N,r){const Y=t?vu(z,q):null,y=Oo(A,Y,{domain:IA,args:V});r(y)}}function o(C,A,z){const N={type:C};return t&&(N.start=A,N.end=A,N.loc={start:z,end:z}),N}function i(C,A,z,N){N&&(C.type=N),t&&(C.end=A,C.loc&&(C.loc.end=z))}function s(C,A){const z=C.context(),N=o(3,z.offset,z.startLoc);return N.value=A,i(N,C.currentOffset(),C.currentPosition()),N}function a(C,A){const z=C.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(5,N,V);return q.index=parseInt(A,10),C.nextToken(),i(q,C.currentOffset(),C.currentPosition()),q}function l(C,A){const z=C.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(4,N,V);return q.key=A,C.nextToken(),i(q,C.currentOffset(),C.currentPosition()),q}function h(C,A){const z=C.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(9,N,V);return q.value=A.replace($A,RA),C.nextToken(),i(q,C.currentOffset(),C.currentPosition()),q}function d(C){const A=C.nextToken(),z=C.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(8,N,V);return A.type!==12?(n(C,Oe.UNEXPECTED_EMPTY_LINKED_MODIFIER,z.lastStartLoc,0),q.value="",i(q,N,V),{nextConsumeToken:A,node:q}):(A.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,z.lastStartLoc,0,Sr(A)),q.value=A.value||"",i(q,C.currentOffset(),C.currentPosition()),{node:q})}function p(C,A){const z=C.context(),N=o(7,z.offset,z.startLoc);return N.value=A,i(N,C.currentOffset(),C.currentPosition()),N}function g(C){const A=C.context(),z=o(6,A.offset,A.startLoc);let N=C.nextToken();if(N.type===9){const V=d(C);z.modifier=V.node,N=V.nextConsumeToken||C.nextToken()}switch(N.type!==10&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(N)),N=C.nextToken(),N.type===2&&(N=C.nextToken()),N.type){case 11:N.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(N)),z.key=p(C,N.value||"");break;case 5:N.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(N)),z.key=l(C,N.value||"");break;case 6:N.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(N)),z.key=a(C,N.value||"");break;case 7:N.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(N)),z.key=h(C,N.value||"");break;default:n(C,Oe.UNEXPECTED_EMPTY_LINKED_KEY,A.lastStartLoc,0);const V=C.context(),q=o(7,V.offset,V.startLoc);return q.value="",i(q,V.offset,V.startLoc),z.key=q,i(z,V.offset,V.startLoc),{nextConsumeToken:N,node:z}}return i(z,C.currentOffset(),C.currentPosition()),{node:z}}function E(C){const A=C.context(),z=A.currentType===1?C.currentOffset():A.offset,N=A.currentType===1?A.endLoc:A.startLoc,V=o(2,z,N);V.items=[];let q=null;do{const x=q||C.nextToken();switch(q=null,x.type){case 0:x.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(x)),V.items.push(s(C,x.value||""));break;case 6:x.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(x)),V.items.push(a(C,x.value||""));break;case 5:x.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(x)),V.items.push(l(C,x.value||""));break;case 7:x.value==null&&n(C,Oe.UNEXPECTED_LEXICAL_ANALYSIS,A.lastStartLoc,0,Sr(x)),V.items.push(h(C,x.value||""));break;case 8:const S=g(C);V.items.push(S.node),q=S.nextConsumeToken||null;break}}while(A.currentType!==14&&A.currentType!==1);const Y=A.currentType===1?A.lastOffset:C.currentOffset(),y=A.currentType===1?A.lastEndLoc:C.currentPosition();return i(V,Y,y),V}function _(C,A,z,N){const V=C.context();let q=N.items.length===0;const Y=o(1,A,z);Y.cases=[],Y.cases.push(N);do{const y=E(C);q||(q=y.items.length===0),Y.cases.push(y)}while(V.currentType!==14);return q&&n(C,Oe.MUST_HAVE_MESSAGES_IN_PLURAL,z,0),i(Y,C.currentOffset(),C.currentPosition()),Y}function I(C){const A=C.context(),{offset:z,startLoc:N}=A,V=E(C);return A.currentType===14?V:_(C,z,N,V)}function P(C){const A=SA(C,em({},e)),z=A.context(),N=o(0,z.offset,z.startLoc);return t&&N.loc&&(N.loc.source=C),N.body=I(A),e.onCacheKey&&(N.cacheKey=e.onCacheKey(C)),z.currentType!==14&&n(A,Oe.UNEXPECTED_LEXICAL_ANALYSIS,z.lastStartLoc,0,C[z.offset]||""),i(N,A.currentOffset(),A.currentPosition()),N}return{parse:P}}function Sr(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function NA(e,t={}){const r={ast:e,helpers:new Set};return{context:()=>r,helper:i=>(r.helpers.add(i),i)}}function mh(e,t){for(let r=0;r<e.length;r++)Wf(e[r],t)}function Wf(e,t){switch(e.type){case 1:mh(e.cases,t),t.helper("plural");break;case 2:mh(e.items,t);break;case 6:Wf(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function LA(e,t={}){const r=NA(e);r.helper("normalize"),e.body&&Wf(e.body,r);const n=r.context();e.helpers=Array.from(n.helpers)}function kA(e){const t=e.body;return t.type===2?wh(t):t.cases.forEach(r=>wh(r)),e}function wh(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let r=0;r<e.items.length;r++){const n=e.items[r];if(!(n.type===3||n.type===9)||n.value==null)break;t.push(n.value)}if(t.length===e.items.length){e.static=tm(t);for(let r=0;r<e.items.length;r++){const n=e.items[r];(n.type===3||n.type===9)&&delete n.value}}}}const PA="minifier";function Wi(e){switch(e.t=e.type,e.type){case 0:const t=e;Wi(t.body),t.b=t.body,delete t.body;break;case 1:const r=e,n=r.cases;for(let d=0;d<n.length;d++)Wi(n[d]);r.c=n,delete r.cases;break;case 2:const o=e,i=o.items;for(let d=0;d<i.length;d++)Wi(i[d]);o.i=i,delete o.items,o.static&&(o.s=o.static,delete o.static);break;case 3:case 9:case 8:case 7:const s=e;s.value&&(s.v=s.value,delete s.value);break;case 6:const a=e;Wi(a.key),a.k=a.key,delete a.key,a.modifier&&(Wi(a.modifier),a.m=a.modifier,delete a.modifier);break;case 5:const l=e;l.i=l.index,delete l.index;break;case 4:const h=e;h.k=h.key,delete h.key;break;default:throw Oo(Oe.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:PA,args:[e.type]})}delete e.type}const MA="parser";function BA(e,t){const{sourceMap:r,filename:n,breakLineCode:o,needIndent:i}=t,s=t.location!==!1,a={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:i,indentLevel:0};s&&e.loc&&(a.source=e.loc.source);const l=()=>a;function h(P,C){a.code+=P}function d(P,C=!0){const A=C?o:"";h(i?A+"  ".repeat(P):A)}function p(P=!0){const C=++a.indentLevel;P&&d(C)}function g(P=!0){const C=--a.indentLevel;P&&d(C)}function E(){d(a.indentLevel)}return{context:l,push:h,indent:p,deindent:g,newline:E,helper:P=>`_${P}`,needIndent:()=>a.needIndent}}function DA(e,t){const{helper:r}=e;e.push(`${r("linked")}(`),vo(e,t.key),t.modifier?(e.push(", "),vo(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function FA(e,t){const{helper:r,needIndent:n}=e;e.push(`${r("normalize")}([`),e.indent(n());const o=t.items.length;for(let i=0;i<o&&(vo(e,t.items[i]),i!==o-1);i++)e.push(", ");e.deindent(n()),e.push("])")}function UA(e,t){const{helper:r,needIndent:n}=e;if(t.cases.length>1){e.push(`${r("plural")}([`),e.indent(n());const o=t.cases.length;for(let i=0;i<o&&(vo(e,t.cases[i]),i!==o-1);i++)e.push(", ");e.deindent(n()),e.push("])")}}function WA(e,t){t.body?vo(e,t.body):e.push("null")}function vo(e,t){const{helper:r}=e;switch(t.type){case 0:WA(e,t);break;case 1:UA(e,t);break;case 2:FA(e,t);break;case 6:DA(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${r("interpolate")}(${r("list")}(${t.index}))`,t);break;case 4:e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:throw Oo(Oe.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:MA,args:[t.type]})}}const jA=(e,t={})=>{const r=ph(t.mode)?t.mode:"normal",n=ph(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,i=t.breakLineCode!=null?t.breakLineCode:r==="arrow"?";":`
`,s=t.needIndent?t.needIndent:r!=="arrow",a=e.helpers||[],l=BA(e,{mode:r,filename:n,sourceMap:o,breakLineCode:i,needIndent:s});l.push(r==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(s),a.length>0&&(l.push(`const { ${tm(a.map(p=>`${p}: _${p}`),", ")} } = ctx`),l.newline()),l.push("return "),vo(l,e),l.deindent(s),l.push("}"),delete e.helpers;const{code:h,map:d}=l.context();return{ast:e,code:h,map:d?d.toJSON():void 0}};function HA(e,t={}){const r=em({},t),n=!!r.jit,o=!!r.minify,i=r.optimize==null?!0:r.optimize,a=OA(r).parse(e);return n?(i&&kA(a),o&&Wi(a),{ast:a,code:""}):(LA(a,r),jA(a,r))}/*!
  * core-base v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function zA(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Gr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Gr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Gr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const jn=[];jn[0]={w:[0],i:[3,0],"[":[4],o:[7]};jn[1]={w:[1],".":[2],"[":[4],o:[7]};jn[2]={w:[2],i:[3,0],0:[3,0]};jn[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};jn[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};jn[5]={"'":[4,0],o:8,l:[5,0]};jn[6]={'"':[4,0],o:8,l:[6,0]};const VA=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function GA(e){return VA.test(e)}function KA(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function qA(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function YA(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:GA(t)?KA(t):"*"+t}function ZA(e){const t=[];let r=-1,n=0,o=0,i,s,a,l,h,d,p;const g=[];g[0]=()=>{s===void 0?s=a:s+=a},g[1]=()=>{s!==void 0&&(t.push(s),s=void 0)},g[2]=()=>{g[0](),o++},g[3]=()=>{if(o>0)o--,n=4,g[0]();else{if(o=0,s===void 0||(s=YA(s),s===!1))return!1;g[1]()}};function E(){const _=e[r+1];if(n===5&&_==="'"||n===6&&_==='"')return r++,a="\\"+_,g[0](),!0}for(;n!==null;)if(r++,i=e[r],!(i==="\\"&&E())){if(l=qA(i),p=jn[n],h=p[l]||p.l||8,h===8||(n=h[0],h[1]!==void 0&&(d=g[h[1]],d&&(a=i,d()===!1))))return;if(n===7)return t}}const vh=new Map;function QA(e,t){return Ze(e)?e[t]:null}function JA(e,t){if(!Ze(e))return null;let r=vh.get(t);if(r||(r=ZA(t),r&&vh.set(t,r)),!r)return null;const n=r.length;let o=e,i=0;for(;i<n;){const s=o[r[i]];if(s===void 0||it(o))return null;o=s,i++}return o}const XA=e=>e,eE=e=>"",tE="text",rE=e=>e.length===0?"":hA(e),nE=dA;function bh(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function iE(e){const t=ht(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(ht(e.named.count)||ht(e.named.n))?ht(e.named.count)?e.named.count:ht(e.named.n)?e.named.n:t:t}function oE(e,t){t.count||(t.count=e),t.n||(t.n=e)}function sE(e={}){const t=e.locale,r=iE(e),n=Ze(e.pluralRules)&&we(t)&&it(e.pluralRules[t])?e.pluralRules[t]:bh,o=Ze(e.pluralRules)&&we(t)&&it(e.pluralRules[t])?bh:void 0,i=C=>C[n(r,C.length,o)],s=e.list||[],a=C=>s[C],l=e.named||{};ht(e.pluralIndex)&&oE(r,l);const h=C=>l[C];function d(C){const A=it(e.messages)?e.messages(C):Ze(e.messages)?e.messages[C]:!1;return A||(e.parent?e.parent.message(C):eE)}const p=C=>e.modifiers?e.modifiers[C]:XA,g=ke(e.processor)&&it(e.processor.normalize)?e.processor.normalize:rE,E=ke(e.processor)&&it(e.processor.interpolate)?e.processor.interpolate:nE,_=ke(e.processor)&&we(e.processor.type)?e.processor.type:tE,P={list:a,named:h,plural:i,linked:(C,...A)=>{const[z,N]=A;let V="text",q="";A.length===1?Ze(z)?(q=z.modifier||q,V=z.type||V):we(z)&&(q=z||q):A.length===2&&(we(z)&&(q=z||q),we(N)&&(V=N||V));const Y=d(C)(P),y=V==="vnode"&&tt(Y)&&q?Y[0]:Y;return q?p(q)(y,V):y},message:d,type:_,interpolate:E,normalize:g,values:St({},s,l)};return P}let Ps=null;function aE(e){Ps=e}function lE(e,t,r){Ps&&Ps.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:r})}const cE=uE("function:translate");function uE(e){return t=>Ps&&Ps.emit(e,t)}const fE={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function jf(e,t){return t.locale!=null?yh(t.locale):yh(e.locale)}let Sc;function yh(e){return we(e)?e:Sc!=null&&e.resolvedOnce?Sc:Sc=e()}function dE(e,t,r){return[...new Set([r,...tt(t)?t:Ze(t)?Object.keys(t):we(t)?[t]:[r]])]}function rm(e,t,r){const n=we(r)?r:bo,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let i=o.__localeChainCache.get(n);if(!i){i=[];let s=[r];for(;tt(s);)s=_h(i,s,t);const a=tt(t)||!ke(t)?t:t.default?t.default:null;s=we(a)?[a]:a,tt(s)&&_h(i,s,!1),o.__localeChainCache.set(n,i)}return i}function _h(e,t,r){let n=!0;for(let o=0;o<t.length&&Fe(n);o++){const i=t[o];we(i)&&(n=hE(e,t[o],r))}return n}function hE(e,t,r){let n;const o=t.split("-");do{const i=o.join("-");n=pE(e,i,r),o.splice(-1,1)}while(o.length&&n===!0);return n}function pE(e,t,r){let n=!1;if(!e.includes(t)&&(n=!0,t)){n=t[t.length-1]!=="!";const o=t.replace(/!/g,"");e.push(o),(tt(r)||ke(r))&&r[o]&&(n=r[o])}return n}const gE="9.7.0",Wl=-1,bo="en-US",xh="",Ah=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function mE(){return{upper:(e,t)=>t==="text"&&we(e)?e.toUpperCase():t==="vnode"&&Ze(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&we(e)?e.toLowerCase():t==="vnode"&&Ze(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&we(e)?Ah(e):t==="vnode"&&Ze(e)&&"__v_isVNode"in e?Ah(e.children):e}}let nm;function Eh(e){nm=e}let im;function wE(e){im=e}let om;function vE(e){om=e}let sm=null;const bE=e=>{sm=e},yE=()=>sm;let am=null;const Ch=e=>{am=e},_E=()=>am;let Th=0;function xE(e={}){const t=it(e.onWarn)?e.onWarn:pA,r=we(e.version)?e.version:gE,n=we(e.locale)||it(e.locale)?e.locale:bo,o=it(n)?bo:n,i=tt(e.fallbackLocale)||ke(e.fallbackLocale)||we(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:o,s=ke(e.messages)?e.messages:{[o]:{}},a=ke(e.datetimeFormats)?e.datetimeFormats:{[o]:{}},l=ke(e.numberFormats)?e.numberFormats:{[o]:{}},h=St({},e.modifiers||{},mE()),d=e.pluralRules||{},p=it(e.missing)?e.missing:null,g=Fe(e.missingWarn)||Mn(e.missingWarn)?e.missingWarn:!0,E=Fe(e.fallbackWarn)||Mn(e.fallbackWarn)?e.fallbackWarn:!0,_=!!e.fallbackFormat,I=!!e.unresolving,P=it(e.postTranslation)?e.postTranslation:null,C=ke(e.processor)?e.processor:null,A=Fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,z=!!e.escapeParameter,N=it(e.messageCompiler)?e.messageCompiler:nm,V=it(e.messageResolver)?e.messageResolver:im||QA,q=it(e.localeFallbacker)?e.localeFallbacker:om||dE,Y=Ze(e.fallbackContext)?e.fallbackContext:void 0,y=e,x=Ze(y.__datetimeFormatters)?y.__datetimeFormatters:new Map,S=Ze(y.__numberFormatters)?y.__numberFormatters:new Map,k=Ze(y.__meta)?y.__meta:{};Th++;const $={version:r,cid:Th,locale:n,fallbackLocale:i,messages:s,modifiers:h,pluralRules:d,missing:p,missingWarn:g,fallbackWarn:E,fallbackFormat:_,unresolving:I,postTranslation:P,processor:C,warnHtmlMessage:A,escapeParameter:z,messageCompiler:N,messageResolver:V,localeFallbacker:q,fallbackContext:Y,onWarn:t,__meta:k};return $.datetimeFormats=a,$.numberFormats=l,$.__datetimeFormatters=x,$.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&lE($,r,k),$}function Hf(e,t,r,n,o){const{missing:i,onWarn:s}=e;if(i!==null){const a=i(e,r,t,o);return we(a)?a:t}else return t}function Wo(e,t,r){const n=e;n.__localeChainCache=new Map,e.localeFallbacker(e,r,t)}function Ic(e){return r=>AE(r,e)}function AE(e,t){const r=t.b||t.body;if((r.t||r.type)===1){const n=r,o=n.c||n.cases;return e.plural(o.reduce((i,s)=>[...i,Sh(e,s)],[]))}else return Sh(e,r)}function Sh(e,t){const r=t.s||t.static;if(r)return e.type==="text"?r:e.normalize([r]);{const n=(t.i||t.items).reduce((o,i)=>[...o,bu(e,i)],[]);return e.normalize(n)}}function bu(e,t){const r=t.t||t.type;switch(r){case 3:const n=t;return n.v||n.value;case 9:const o=t;return o.v||o.value;case 4:const i=t;return e.interpolate(e.named(i.k||i.key));case 5:const s=t;return e.interpolate(e.list(s.i!=null?s.i:s.index));case 6:const a=t,l=a.m||a.modifier;return e.linked(bu(e,a.k||a.key),l?bu(e,l):void 0,e.type);case 7:const h=t;return h.v||h.value;case 8:const d=t;return d.v||d.value;default:throw new Error(`unhandled node type on format message part: ${r}`)}}const lm=Oe.__EXTEND_POINT__,da=Uf(lm),xn={INVALID_ARGUMENT:lm,INVALID_DATE_ARGUMENT:da(),INVALID_ISO_DATE_ARGUMENT:da(),NOT_SUPPORT_NON_STRING_MESSAGE:da(),__EXTEND_POINT__:da()};function oi(e){return Oo(e,null,void 0)}const cm=e=>e;let Hi=Object.create(null);const yo=e=>Ze(e)&&(e.t===0||e.type===0)&&("b"in e||"body"in e);function um(e,t={}){let r=!1;const n=t.onError||yA;return t.onError=o=>{r=!0,n(o)},{...HA(e,t),detectError:r}}const EE=(e,t)=>{if(!we(e))throw oi(xn.NOT_SUPPORT_NON_STRING_MESSAGE);{Fe(t.warnHtmlMessage)&&t.warnHtmlMessage;const n=(t.onCacheKey||cm)(e),o=Hi[n];if(o)return o;const{code:i,detectError:s}=um(e,t),a=new Function(`return ${i}`)();return s?a:Hi[n]=a}};function CE(e,t){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&we(e)){Fe(t.warnHtmlMessage)&&t.warnHtmlMessage;const n=(t.onCacheKey||cm)(e),o=Hi[n];if(o)return o;const{ast:i,detectError:s}=um(e,{...t,location:!1,jit:!0}),a=Ic(i);return s?a:Hi[n]=a}else{const r=e.cacheKey;if(r){const n=Hi[r];return n||(Hi[r]=Ic(e))}else return Ic(e)}}const Ih=()=>"",ar=e=>it(e);function $h(e,...t){const{fallbackFormat:r,postTranslation:n,unresolving:o,messageCompiler:i,fallbackLocale:s,messages:a}=e,[l,h]=yu(...t),d=Fe(h.missingWarn)?h.missingWarn:e.missingWarn,p=Fe(h.fallbackWarn)?h.fallbackWarn:e.fallbackWarn,g=Fe(h.escapeParameter)?h.escapeParameter:e.escapeParameter,E=!!h.resolvedMessage,_=we(h.default)||Fe(h.default)?Fe(h.default)?i?l:()=>l:h.default:r?i?l:()=>l:"",I=r||_!=="",P=jf(e,h);g&&TE(h);let[C,A,z]=E?[l,P,a[P]||{}]:fm(e,l,P,s,p,d),N=C,V=l;if(!E&&!(we(N)||yo(N)||ar(N))&&I&&(N=_,V=N),!E&&(!(we(N)||yo(N)||ar(N))||!we(A)))return o?Wl:l;let q=!1;const Y=()=>{q=!0},y=ar(N)?N:dm(e,l,A,N,V,Y);if(q)return N;const x=$E(e,A,z,h),S=sE(x),k=SE(e,y,S),$=n?n(k,l):k;if(__INTLIFY_PROD_DEVTOOLS__){const W={timestamp:Date.now(),key:we(l)?l:ar(N)?N.key:"",locale:A||(ar(N)?N.locale:""),format:we(N)?N:ar(N)?N.source:"",message:$};W.meta=St({},e.__meta,yE()||{}),cE(W)}return $}function TE(e){tt(e.list)?e.list=e.list.map(t=>we(t)?hh(t):t):Ze(e.named)&&Object.keys(e.named).forEach(t=>{we(e.named[t])&&(e.named[t]=hh(e.named[t]))})}function fm(e,t,r,n,o,i){const{messages:s,onWarn:a,messageResolver:l,localeFallbacker:h}=e,d=h(e,n,r);let p={},g,E=null;const _="translate";for(let I=0;I<d.length&&(g=d[I],p=s[g]||{},(E=l(p,t))===null&&(E=p[t]),!(we(E)||yo(E)||ar(E)));I++){const P=Hf(e,t,g,i,_);P!==t&&(E=P)}return[E,g,p]}function dm(e,t,r,n,o,i){const{messageCompiler:s,warnHtmlMessage:a}=e;if(ar(n)){const h=n;return h.locale=h.locale||r,h.key=h.key||t,h}if(s==null){const h=()=>n;return h.locale=r,h.key=t,h}const l=s(n,IE(e,r,o,n,a,i));return l.locale=r,l.key=t,l.source=n,l}function SE(e,t,r){return t(r)}function yu(...e){const[t,r,n]=e,o={};if(!we(t)&&!ht(t)&&!ar(t)&&!yo(t))throw oi(xn.INVALID_ARGUMENT);const i=ht(t)?String(t):(ar(t),t);return ht(r)?o.plural=r:we(r)?o.default=r:ke(r)&&!Ul(r)?o.named=r:tt(r)&&(o.list=r),ht(n)?o.plural=n:we(n)?o.default=n:ke(n)&&St(o,n),[i,o]}function IE(e,t,r,n,o,i){return{locale:t,key:r,warnHtmlMessage:o,onError:s=>{throw i&&i(s),s},onCacheKey:s=>lA(t,r,s)}}function $E(e,t,r,n){const{modifiers:o,pluralRules:i,messageResolver:s,fallbackLocale:a,fallbackWarn:l,missingWarn:h,fallbackContext:d}=e,g={locale:t,modifiers:o,pluralRules:i,messages:E=>{let _=s(r,E);if(_==null&&d){const[,,I]=fm(d,E,t,a,l,h);_=s(I,E)}if(we(_)||yo(_)){let I=!1;const C=dm(e,E,t,_,E,()=>{I=!0});return I?Ih:C}else return ar(_)?_:Ih}};return e.processor&&(g.processor=e.processor),n.list&&(g.list=n.list),n.named&&(g.named=n.named),ht(n.plural)&&(g.pluralIndex=n.plural),g}function Rh(e,...t){const{datetimeFormats:r,unresolving:n,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__datetimeFormatters:a}=e,[l,h,d,p]=_u(...t),g=Fe(d.missingWarn)?d.missingWarn:e.missingWarn;Fe(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const E=!!d.part,_=jf(e,d),I=s(e,o,_);if(!we(l)||l==="")return new Intl.DateTimeFormat(_,p).format(h);let P={},C,A=null;const z="datetime format";for(let q=0;q<I.length&&(C=I[q],P=r[C]||{},A=P[l],!ke(A));q++)Hf(e,l,C,g,z);if(!ke(A)||!we(C))return n?Wl:l;let N=`${C}__${l}`;Ul(p)||(N=`${N}__${JSON.stringify(p)}`);let V=a.get(N);return V||(V=new Intl.DateTimeFormat(C,St({},A,p)),a.set(N,V)),E?V.formatToParts(h):V.format(h)}const hm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function _u(...e){const[t,r,n,o]=e,i={};let s={},a;if(we(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw oi(xn.INVALID_ISO_DATE_ARGUMENT);const h=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(h);try{a.toISOString()}catch{throw oi(xn.INVALID_ISO_DATE_ARGUMENT)}}else if(uA(t)){if(isNaN(t.getTime()))throw oi(xn.INVALID_DATE_ARGUMENT);a=t}else if(ht(t))a=t;else throw oi(xn.INVALID_ARGUMENT);return we(r)?i.key=r:ke(r)&&Object.keys(r).forEach(l=>{hm.includes(l)?s[l]=r[l]:i[l]=r[l]}),we(n)?i.locale=n:ke(n)&&(s=n),ke(o)&&(s=o),[i.key||"",a,i,s]}function Oh(e,t,r){const n=e;for(const o in r){const i=`${t}__${o}`;n.__datetimeFormatters.has(i)&&n.__datetimeFormatters.delete(i)}}function Nh(e,...t){const{numberFormats:r,unresolving:n,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__numberFormatters:a}=e,[l,h,d,p]=xu(...t),g=Fe(d.missingWarn)?d.missingWarn:e.missingWarn;Fe(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const E=!!d.part,_=jf(e,d),I=s(e,o,_);if(!we(l)||l==="")return new Intl.NumberFormat(_,p).format(h);let P={},C,A=null;const z="number format";for(let q=0;q<I.length&&(C=I[q],P=r[C]||{},A=P[l],!ke(A));q++)Hf(e,l,C,g,z);if(!ke(A)||!we(C))return n?Wl:l;let N=`${C}__${l}`;Ul(p)||(N=`${N}__${JSON.stringify(p)}`);let V=a.get(N);return V||(V=new Intl.NumberFormat(C,St({},A,p)),a.set(N,V)),E?V.formatToParts(h):V.format(h)}const pm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function xu(...e){const[t,r,n,o]=e,i={};let s={};if(!ht(t))throw oi(xn.INVALID_ARGUMENT);const a=t;return we(r)?i.key=r:ke(r)&&Object.keys(r).forEach(l=>{pm.includes(l)?s[l]=r[l]:i[l]=r[l]}),we(n)?i.locale=n:ke(n)&&(s=n),ke(o)&&(s=o),[i.key||"",a,i,s]}function Lh(e,t,r){const n=e;for(const o in r){const i=`${t}__${o}`;n.__numberFormatters.has(i)&&n.__numberFormatters.delete(i)}}zA();/*!
  * vue-i18n v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const RE="9.7.0";function OE(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Gr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Gr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Gr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Gr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Gr().__INTLIFY_PROD_DEVTOOLS__=!1)}const gm=fE.__EXTEND_POINT__,un=Uf(gm);un(),un(),un(),un(),un(),un(),un(),un();const mm=xn.__EXTEND_POINT__,jt=Uf(mm),mt={UNEXPECTED_RETURN_TYPE:mm,INVALID_ARGUMENT:jt(),MUST_BE_CALL_SETUP_TOP:jt(),NOT_INSTALLED:jt(),NOT_AVAILABLE_IN_LEGACY_MODE:jt(),REQUIRED_VALUE:jt(),INVALID_VALUE:jt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:jt(),NOT_INSTALLED_WITH_PROVIDE:jt(),UNEXPECTED_ERROR:jt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:jt(),BRIDGE_SUPPORT_VUE_2_ONLY:jt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:jt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:jt(),__EXTEND_POINT__:jt()};function At(e,...t){return Oo(e,null,void 0)}const Au=Wn("__translateVNode"),Eu=Wn("__datetimeParts"),Cu=Wn("__numberParts"),wm=Wn("__setPluralRules"),vm=Wn("__injectWithOption"),Tu=Wn("__dispose");function Ms(e){if(!Ze(e))return e;for(const t in e)if(ks(e,t))if(!t.includes("."))Ze(e[t])&&Ms(e[t]);else{const r=t.split("."),n=r.length-1;let o=e,i=!1;for(let s=0;s<n;s++){if(r[s]in o||(o[r[s]]={}),!Ze(o[r[s]])){i=!0;break}o=o[r[s]]}i||(o[r[n]]=e[t],delete e[t]),Ze(o[r[n]])&&Ms(o[r[n]])}return e}function jl(e,t){const{messages:r,__i18n:n,messageResolver:o,flatJson:i}=t,s=ke(r)?r:tt(n)?{}:{[e]:{}};if(tt(n)&&n.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:h}=a;l?(s[l]=s[l]||{},ss(h,s[l])):ss(h,s)}else we(a)&&ss(JSON.parse(a),s)}),o==null&&i)for(const a in s)ks(s,a)&&Ms(s[a]);return s}function bm(e){return e.type}function ym(e,t,r){let n=Ze(t.messages)?t.messages:{};"__i18nGlobal"in r&&(n=jl(e.locale.value,{messages:n,__i18n:r.__i18nGlobal}));const o=Object.keys(n);o.length&&o.forEach(i=>{e.mergeLocaleMessage(i,n[i])});{if(Ze(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(s=>{e.mergeDateTimeFormat(s,t.datetimeFormats[s])})}if(Ze(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(s=>{e.mergeNumberFormat(s,t.numberFormats[s])})}}}function kh(e){return He(Ds,null,e,0)}const Ph="__INTLIFY_META__",Mh=()=>[],NE=()=>!1;let Bh=0;function Dh(e){return(t,r,n,o)=>e(r,n,yr()||void 0,o)}const LE=()=>{const e=yr();let t=null;return e&&(t=bm(e)[Ph])?{[Ph]:t}:null};function zf(e={},t){const{__root:r,__injectWithOption:n}=e,o=r===void 0,i=e.flatJson;let s=Fe(e.inheritLocale)?e.inheritLocale:!0;const a=Ye(r&&s?r.locale.value:we(e.locale)?e.locale:bo),l=Ye(r&&s?r.fallbackLocale.value:we(e.fallbackLocale)||tt(e.fallbackLocale)||ke(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a.value),h=Ye(jl(a.value,e)),d=Ye(ke(e.datetimeFormats)?e.datetimeFormats:{[a.value]:{}}),p=Ye(ke(e.numberFormats)?e.numberFormats:{[a.value]:{}});let g=r?r.missingWarn:Fe(e.missingWarn)||Mn(e.missingWarn)?e.missingWarn:!0,E=r?r.fallbackWarn:Fe(e.fallbackWarn)||Mn(e.fallbackWarn)?e.fallbackWarn:!0,_=r?r.fallbackRoot:Fe(e.fallbackRoot)?e.fallbackRoot:!0,I=!!e.fallbackFormat,P=it(e.missing)?e.missing:null,C=it(e.missing)?Dh(e.missing):null,A=it(e.postTranslation)?e.postTranslation:null,z=r?r.warnHtmlMessage:Fe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter;const V=r?r.modifiers:ke(e.modifiers)?e.modifiers:{};let q=e.pluralRules||r&&r.pluralRules,Y;Y=(()=>{o&&Ch(null);const H={version:RE,locale:a.value,fallbackLocale:l.value,messages:h.value,modifiers:V,pluralRules:q,missing:C===null?void 0:C,missingWarn:g,fallbackWarn:E,fallbackFormat:I,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:z,escapeParameter:N,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};H.datetimeFormats=d.value,H.numberFormats=p.value,H.__datetimeFormatters=ke(Y)?Y.__datetimeFormatters:void 0,H.__numberFormatters=ke(Y)?Y.__numberFormatters:void 0;const X=xE(H);return o&&Ch(X),X})(),Wo(Y,a.value,l.value);function x(){return[a.value,l.value,h.value,d.value,p.value]}const S=Ue({get:()=>a.value,set:H=>{a.value=H,Y.locale=a.value}}),k=Ue({get:()=>l.value,set:H=>{l.value=H,Y.fallbackLocale=l.value,Wo(Y,a.value,H)}}),$=Ue(()=>h.value),W=Ue(()=>d.value),j=Ue(()=>p.value);function O(){return it(A)?A:null}function R(H){A=H,Y.postTranslation=H}function F(){return P}function D(H){H!==null&&(C=Dh(H)),P=H,Y.missing=C}const G=(H,X,m,f,c,u)=>{x();let b;try{__INTLIFY_PROD_DEVTOOLS__,o||(Y.fallbackContext=r?_E():void 0),b=H(Y)}finally{__INTLIFY_PROD_DEVTOOLS__,o||(Y.fallbackContext=void 0)}if(m!=="translate exists"&&ht(b)&&b===Wl||m==="translate exists"&&!b){const[T,B]=X();return r&&_?f(r):c(T)}else{if(u(b))return b;throw At(mt.UNEXPECTED_RETURN_TYPE)}};function te(...H){return G(X=>Reflect.apply($h,null,[X,...H]),()=>yu(...H),"translate",X=>Reflect.apply(X.t,X,[...H]),X=>X,X=>we(X))}function re(...H){const[X,m,f]=H;if(f&&!Ze(f))throw At(mt.INVALID_ARGUMENT);return te(X,m,St({resolvedMessage:!0},f||{}))}function fe(...H){return G(X=>Reflect.apply(Rh,null,[X,...H]),()=>_u(...H),"datetime format",X=>Reflect.apply(X.d,X,[...H]),()=>xh,X=>we(X))}function xe(...H){return G(X=>Reflect.apply(Nh,null,[X,...H]),()=>xu(...H),"number format",X=>Reflect.apply(X.n,X,[...H]),()=>xh,X=>we(X))}function Te(H){return H.map(X=>we(X)||ht(X)||Fe(X)?kh(String(X)):X)}const Ee={normalize:Te,interpolate:H=>H,type:"vnode"};function J(...H){return G(X=>{let m;const f=X;try{f.processor=Ee,m=Reflect.apply($h,null,[f,...H])}finally{f.processor=null}return m},()=>yu(...H),"translate",X=>X[Au](...H),X=>[kh(X)],X=>tt(X))}function ue(...H){return G(X=>Reflect.apply(Nh,null,[X,...H]),()=>xu(...H),"number format",X=>X[Cu](...H),Mh,X=>we(X)||tt(X))}function oe(...H){return G(X=>Reflect.apply(Rh,null,[X,...H]),()=>_u(...H),"datetime format",X=>X[Eu](...H),Mh,X=>we(X)||tt(X))}function de(H){q=H,Y.pluralRules=q}function Ce(H,X){return G(()=>{if(!H)return!1;const m=we(X)?X:a.value,f=v(m),c=Y.messageResolver(f,H);return yo(c)||ar(c)||we(c)},()=>[H],"translate exists",m=>Reflect.apply(m.te,m,[H,X]),NE,m=>Fe(m))}function M(H){let X=null;const m=rm(Y,l.value,a.value);for(let f=0;f<m.length;f++){const c=h.value[m[f]]||{},u=Y.messageResolver(c,H);if(u!=null){X=u;break}}return X}function w(H){const X=M(H);return X??(r?r.tm(H)||{}:{})}function v(H){return h.value[H]||{}}function L(H,X){if(i){const m={[H]:X};for(const f in m)ks(m,f)&&Ms(m[f]);X=m[H]}h.value[H]=X,Y.messages=h.value}function K(H,X){h.value[H]=h.value[H]||{};const m={[H]:X};for(const f in m)ks(m,f)&&Ms(m[f]);X=m[H],ss(X,h.value[H]),Y.messages=h.value}function Q(H){return d.value[H]||{}}function ne(H,X){d.value[H]=X,Y.datetimeFormats=d.value,Oh(Y,H,X)}function ae(H,X){d.value[H]=St(d.value[H]||{},X),Y.datetimeFormats=d.value,Oh(Y,H,X)}function le(H){return p.value[H]||{}}function ie(H,X){p.value[H]=X,Y.numberFormats=p.value,Lh(Y,H,X)}function ye(H,X){p.value[H]=St(p.value[H]||{},X),Y.numberFormats=p.value,Lh(Y,H,X)}Bh++,r&&wu&&(Lt(r.locale,H=>{s&&(a.value=H,Y.locale=H,Wo(Y,a.value,l.value))}),Lt(r.fallbackLocale,H=>{s&&(l.value=H,Y.fallbackLocale=H,Wo(Y,a.value,l.value))}));const pe={id:Bh,locale:S,fallbackLocale:k,get inheritLocale(){return s},set inheritLocale(H){s=H,H&&r&&(a.value=r.locale.value,l.value=r.fallbackLocale.value,Wo(Y,a.value,l.value))},get availableLocales(){return Object.keys(h.value).sort()},messages:$,get modifiers(){return V},get pluralRules(){return q||{}},get isGlobal(){return o},get missingWarn(){return g},set missingWarn(H){g=H,Y.missingWarn=g},get fallbackWarn(){return E},set fallbackWarn(H){E=H,Y.fallbackWarn=E},get fallbackRoot(){return _},set fallbackRoot(H){_=H},get fallbackFormat(){return I},set fallbackFormat(H){I=H,Y.fallbackFormat=I},get warnHtmlMessage(){return z},set warnHtmlMessage(H){z=H,Y.warnHtmlMessage=H},get escapeParameter(){return N},set escapeParameter(H){N=H,Y.escapeParameter=H},t:te,getLocaleMessage:v,setLocaleMessage:L,mergeLocaleMessage:K,getPostTranslationHandler:O,setPostTranslationHandler:R,getMissingHandler:F,setMissingHandler:D,[wm]:de};return pe.datetimeFormats=W,pe.numberFormats=j,pe.rt=re,pe.te=Ce,pe.tm=w,pe.d=fe,pe.n=xe,pe.getDateTimeFormat=Q,pe.setDateTimeFormat=ne,pe.mergeDateTimeFormat=ae,pe.getNumberFormat=le,pe.setNumberFormat=ie,pe.mergeNumberFormat=ye,pe[vm]=n,pe[Au]=J,pe[Eu]=oe,pe[Cu]=ue,pe}function kE(e){const t=we(e.locale)?e.locale:bo,r=we(e.fallbackLocale)||tt(e.fallbackLocale)||ke(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,n=it(e.missing)?e.missing:void 0,o=Fe(e.silentTranslationWarn)||Mn(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=Fe(e.silentFallbackWarn)||Mn(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,s=Fe(e.fallbackRoot)?e.fallbackRoot:!0,a=!!e.formatFallbackMessages,l=ke(e.modifiers)?e.modifiers:{},h=e.pluralizationRules,d=it(e.postTranslation)?e.postTranslation:void 0,p=we(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,g=!!e.escapeParameterHtml,E=Fe(e.sync)?e.sync:!0;let _=e.messages;if(ke(e.sharedMessages)){const V=e.sharedMessages;_=Object.keys(V).reduce((Y,y)=>{const x=Y[y]||(Y[y]={});return St(x,V[y]),Y},_||{})}const{__i18n:I,__root:P,__injectWithOption:C}=e,A=e.datetimeFormats,z=e.numberFormats,N=e.flatJson;return{locale:t,fallbackLocale:r,messages:_,flatJson:N,datetimeFormats:A,numberFormats:z,missing:n,missingWarn:o,fallbackWarn:i,fallbackRoot:s,fallbackFormat:a,modifiers:l,pluralRules:h,postTranslation:d,warnHtmlMessage:p,escapeParameter:g,messageResolver:e.messageResolver,inheritLocale:E,__i18n:I,__root:P,__injectWithOption:C}}function Su(e={},t){{const r=zf(kE(e)),{__extender:n}=e,o={id:r.id,get locale(){return r.locale.value},set locale(i){r.locale.value=i},get fallbackLocale(){return r.fallbackLocale.value},set fallbackLocale(i){r.fallbackLocale.value=i},get messages(){return r.messages.value},get datetimeFormats(){return r.datetimeFormats.value},get numberFormats(){return r.numberFormats.value},get availableLocales(){return r.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return r.getMissingHandler()},set missing(i){r.setMissingHandler(i)},get silentTranslationWarn(){return Fe(r.missingWarn)?!r.missingWarn:r.missingWarn},set silentTranslationWarn(i){r.missingWarn=Fe(i)?!i:i},get silentFallbackWarn(){return Fe(r.fallbackWarn)?!r.fallbackWarn:r.fallbackWarn},set silentFallbackWarn(i){r.fallbackWarn=Fe(i)?!i:i},get modifiers(){return r.modifiers},get formatFallbackMessages(){return r.fallbackFormat},set formatFallbackMessages(i){r.fallbackFormat=i},get postTranslation(){return r.getPostTranslationHandler()},set postTranslation(i){r.setPostTranslationHandler(i)},get sync(){return r.inheritLocale},set sync(i){r.inheritLocale=i},get warnHtmlInMessage(){return r.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){r.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return r.escapeParameter},set escapeParameterHtml(i){r.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return r.pluralRules||{}},__composer:r,t(...i){const[s,a,l]=i,h={};let d=null,p=null;if(!we(s))throw At(mt.INVALID_ARGUMENT);const g=s;return we(a)?h.locale=a:tt(a)?d=a:ke(a)&&(p=a),tt(l)?d=l:ke(l)&&(p=l),Reflect.apply(r.t,r,[g,d||p||{},h])},rt(...i){return Reflect.apply(r.rt,r,[...i])},tc(...i){const[s,a,l]=i,h={plural:1};let d=null,p=null;if(!we(s))throw At(mt.INVALID_ARGUMENT);const g=s;return we(a)?h.locale=a:ht(a)?h.plural=a:tt(a)?d=a:ke(a)&&(p=a),we(l)?h.locale=l:tt(l)?d=l:ke(l)&&(p=l),Reflect.apply(r.t,r,[g,d||p||{},h])},te(i,s){return r.te(i,s)},tm(i){return r.tm(i)},getLocaleMessage(i){return r.getLocaleMessage(i)},setLocaleMessage(i,s){r.setLocaleMessage(i,s)},mergeLocaleMessage(i,s){r.mergeLocaleMessage(i,s)},d(...i){return Reflect.apply(r.d,r,[...i])},getDateTimeFormat(i){return r.getDateTimeFormat(i)},setDateTimeFormat(i,s){r.setDateTimeFormat(i,s)},mergeDateTimeFormat(i,s){r.mergeDateTimeFormat(i,s)},n(...i){return Reflect.apply(r.n,r,[...i])},getNumberFormat(i){return r.getNumberFormat(i)},setNumberFormat(i,s){r.setNumberFormat(i,s)},mergeNumberFormat(i,s){r.mergeNumberFormat(i,s)},getChoiceIndex(i,s){return-1}};return o.__extender=n,o}}const Vf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function PE({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((n,o)=>[...n,...o.type===$t?o.children:[o]],[]):t.reduce((r,n)=>{const o=e[n];return o&&(r[n]=o()),r},{})}function _m(e){return $t}const ME=Ar({name:"i18n-t",props:St({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>ht(e)||!isNaN(e)}},Vf),setup(e,t){const{slots:r,attrs:n}=t,o=e.i18n||Gf({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(r).filter(p=>p!=="_"),s={};e.locale&&(s.locale=e.locale),e.plural!==void 0&&(s.plural=we(e.plural)?+e.plural:e.plural);const a=PE(t,i),l=o[Au](e.keypath,a,s),h=St({},n),d=we(e.tag)||Ze(e.tag)?e.tag:_m();return Co(d,h,l)}}}),Fh=ME;function BE(e){return tt(e)&&!we(e[0])}function xm(e,t,r,n){const{slots:o,attrs:i}=t;return()=>{const s={part:!0};let a={};e.locale&&(s.locale=e.locale),we(e.format)?s.key=e.format:Ze(e.format)&&(we(e.format.key)&&(s.key=e.format.key),a=Object.keys(e.format).reduce((g,E)=>r.includes(E)?St({},g,{[E]:e.format[E]}):g,{}));const l=n(e.value,s,a);let h=[s.key];tt(l)?h=l.map((g,E)=>{const _=o[g.type],I=_?_({[g.type]:g.value,index:E,parts:l}):[g.value];return BE(I)&&(I[0].key=`${g.type}-${E}`),I}):we(l)&&(h=[l]);const d=St({},i),p=we(e.tag)||Ze(e.tag)?e.tag:_m();return Co(p,d,h)}}const DE=Ar({name:"i18n-n",props:St({value:{type:Number,required:!0},format:{type:[String,Object]}},Vf),setup(e,t){const r=e.i18n||Gf({useScope:"parent",__useComponent:!0});return xm(e,t,pm,(...n)=>r[Cu](...n))}}),Uh=DE,FE=Ar({name:"i18n-d",props:St({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Vf),setup(e,t){const r=e.i18n||Gf({useScope:"parent",__useComponent:!0});return xm(e,t,hm,(...n)=>r[Eu](...n))}}),Wh=FE;function UE(e,t){const r=e;if(e.mode==="composition")return r.__getInstance(t)||e.global;{const n=r.__getInstance(t);return n!=null?n.__composer:e.global.__composer}}function WE(e){const t=s=>{const{instance:a,modifiers:l,value:h}=s;if(!a||!a.$)throw At(mt.UNEXPECTED_ERROR);const d=UE(e,a.$),p=jh(h);return[Reflect.apply(d.t,d,[...Hh(p)]),d]};return{created:(s,a)=>{const[l,h]=t(a);wu&&e.global===h&&(s.__i18nWatcher=Lt(h.locale,()=>{a.instance&&a.instance.$forceUpdate()})),s.__composer=h,s.textContent=l},unmounted:s=>{wu&&s.__i18nWatcher&&(s.__i18nWatcher(),s.__i18nWatcher=void 0,delete s.__i18nWatcher),s.__composer&&(s.__composer=void 0,delete s.__composer)},beforeUpdate:(s,{value:a})=>{if(s.__composer){const l=s.__composer,h=jh(a);s.textContent=Reflect.apply(l.t,l,[...Hh(h)])}},getSSRProps:s=>{const[a]=t(s);return{textContent:a}}}}function jh(e){if(we(e))return{path:e};if(ke(e)){if(!("path"in e))throw At(mt.REQUIRED_VALUE,"path");return e}else throw At(mt.INVALID_VALUE)}function Hh(e){const{path:t,locale:r,args:n,choice:o,plural:i}=e,s={},a=n||{};return we(r)&&(s.locale=r),ht(o)&&(s.plural=o),ht(i)&&(s.plural=i),[t,a,s]}function jE(e,t,...r){const n=ke(r[0])?r[0]:{},o=!!n.useI18nComponentName;(Fe(n.globalInstall)?n.globalInstall:!0)&&([o?"i18n":Fh.name,"I18nT"].forEach(s=>e.component(s,Fh)),[Uh.name,"I18nN"].forEach(s=>e.component(s,Uh)),[Wh.name,"I18nD"].forEach(s=>e.component(s,Wh))),e.directive("t",WE(t))}function HE(e,t,r){return{beforeCreate(){const n=yr();if(!n)throw At(mt.UNEXPECTED_ERROR);const o=this.$options;if(o.i18n){const i=o.i18n;if(o.__i18n&&(i.__i18n=o.__i18n),i.__root=t,this===this.$root)this.$i18n=zh(e,i);else{i.__injectWithOption=!0,i.__extender=r.__vueI18nExtend,this.$i18n=Su(i);const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}}else if(o.__i18n)if(this===this.$root)this.$i18n=zh(e,o);else{this.$i18n=Su({__i18n:o.__i18n,__injectWithOption:!0,__extender:r.__vueI18nExtend,__root:t});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=e;o.__i18nGlobal&&ym(t,o,o),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,s)=>this.$i18n.te(i,s),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),r.__setInstance(n,this.$i18n)},mounted(){},unmounted(){const n=yr();if(!n)throw At(mt.UNEXPECTED_ERROR);const o=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,o.__disposer&&(o.__disposer(),delete o.__disposer,delete o.__extender),r.__deleteInstance(n),delete this.$i18n}}}function zh(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[wm](t.pluralizationRules||e.pluralizationRules);const r=jl(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(r).forEach(n=>e.mergeLocaleMessage(n,r[n])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n])),t.numberFormats&&Object.keys(t.numberFormats).forEach(n=>e.mergeNumberFormat(n,t.numberFormats[n])),e}const zE=Wn("global-vue-i18n");function VE(e={},t){const r=__VUE_I18N_LEGACY_API__&&Fe(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=Fe(e.globalInjection)?e.globalInjection:!0,o=__VUE_I18N_LEGACY_API__&&r?!!e.allowComposition:!0,i=new Map,[s,a]=GE(e,r),l=Wn("");function h(g){return i.get(g)||null}function d(g,E){i.set(g,E)}function p(g){i.delete(g)}{const g={get mode(){return __VUE_I18N_LEGACY_API__&&r?"legacy":"composition"},get allowComposition(){return o},async install(E,..._){if(E.__VUE_I18N_SYMBOL__=l,E.provide(E.__VUE_I18N_SYMBOL__,g),ke(_[0])){const C=_[0];g.__composerExtend=C.__composerExtend,g.__vueI18nExtend=C.__vueI18nExtend}let I=null;!r&&n&&(I=t9(E,g.global)),__VUE_I18N_FULL_INSTALL__&&jE(E,g,..._),__VUE_I18N_LEGACY_API__&&r&&E.mixin(HE(a,a.__composer,g));const P=E.unmount;E.unmount=()=>{I&&I(),g.dispose(),P()}},get global(){return a},dispose(){s.stop()},__instances:i,__getInstance:h,__setInstance:d,__deleteInstance:p};return g}}function Gf(e={}){const t=yr();if(t==null)throw At(mt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw At(mt.NOT_INSTALLED);const r=KE(t),n=YE(r),o=bm(t),i=qE(e,o);if(__VUE_I18N_LEGACY_API__&&r.mode==="legacy"&&!e.__useComponent){if(!r.allowComposition)throw At(mt.NOT_AVAILABLE_IN_LEGACY_MODE);return XE(t,i,n,e)}if(i==="global")return ym(n,e,o),n;if(i==="parent"){let l=ZE(r,t,e.__useComponent);return l==null&&(l=n),l}const s=r;let a=s.__getInstance(t);if(a==null){const l=St({},e);"__i18n"in o&&(l.__i18n=o.__i18n),n&&(l.__root=n),a=zf(l),s.__composerExtend&&(a[Tu]=s.__composerExtend(a)),JE(s,t,a),s.__setInstance(t,a)}return a}function GE(e,t,r){const n=op();{const o=__VUE_I18N_LEGACY_API__&&t?n.run(()=>Su(e)):n.run(()=>zf(e));if(o==null)throw At(mt.UNEXPECTED_ERROR);return[n,o]}}function KE(e){{const t=Bt(e.isCE?zE:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw At(e.isCE?mt.NOT_INSTALLED_WITH_PROVIDE:mt.UNEXPECTED_ERROR);return t}}function qE(e,t){return Ul(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function YE(e){return e.mode==="composition"?e.global:e.global.__composer}function ZE(e,t,r=!1){let n=null;const o=t.root;let i=QE(t,r);for(;i!=null;){const s=e;if(e.mode==="composition")n=s.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=s.__getInstance(i);a!=null&&(n=a.__composer,r&&n&&!n[vm]&&(n=null))}if(n!=null||o===i)break;i=i.parent}return n}function QE(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function JE(e,t,r){bi(()=>{},t),zu(()=>{const n=r;e.__deleteInstance(t);const o=n[Tu];o&&(o(),delete n[Tu])},t)}function XE(e,t,r,n={}){const o=t==="local",i=Ap(null);if(o&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw At(mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=Fe(n.inheritLocale)?n.inheritLocale:!we(n.locale),a=Ye(!o||s?r.locale.value:we(n.locale)?n.locale:bo),l=Ye(!o||s?r.fallbackLocale.value:we(n.fallbackLocale)||tt(n.fallbackLocale)||ke(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:a.value),h=Ye(jl(a.value,n)),d=Ye(ke(n.datetimeFormats)?n.datetimeFormats:{[a.value]:{}}),p=Ye(ke(n.numberFormats)?n.numberFormats:{[a.value]:{}}),g=o?r.missingWarn:Fe(n.missingWarn)||Mn(n.missingWarn)?n.missingWarn:!0,E=o?r.fallbackWarn:Fe(n.fallbackWarn)||Mn(n.fallbackWarn)?n.fallbackWarn:!0,_=o?r.fallbackRoot:Fe(n.fallbackRoot)?n.fallbackRoot:!0,I=!!n.fallbackFormat,P=it(n.missing)?n.missing:null,C=it(n.postTranslation)?n.postTranslation:null,A=o?r.warnHtmlMessage:Fe(n.warnHtmlMessage)?n.warnHtmlMessage:!0,z=!!n.escapeParameter,N=o?r.modifiers:ke(n.modifiers)?n.modifiers:{},V=n.pluralRules||o&&r.pluralRules;function q(){return[a.value,l.value,h.value,d.value,p.value]}const Y=Ue({get:()=>i.value?i.value.locale.value:a.value,set:v=>{i.value&&(i.value.locale.value=v),a.value=v}}),y=Ue({get:()=>i.value?i.value.fallbackLocale.value:l.value,set:v=>{i.value&&(i.value.fallbackLocale.value=v),l.value=v}}),x=Ue(()=>i.value?i.value.messages.value:h.value),S=Ue(()=>d.value),k=Ue(()=>p.value);function $(){return i.value?i.value.getPostTranslationHandler():C}function W(v){i.value&&i.value.setPostTranslationHandler(v)}function j(){return i.value?i.value.getMissingHandler():P}function O(v){i.value&&i.value.setMissingHandler(v)}function R(v){return q(),v()}function F(...v){return i.value?R(()=>Reflect.apply(i.value.t,null,[...v])):R(()=>"")}function D(...v){return i.value?Reflect.apply(i.value.rt,null,[...v]):""}function G(...v){return i.value?R(()=>Reflect.apply(i.value.d,null,[...v])):R(()=>"")}function te(...v){return i.value?R(()=>Reflect.apply(i.value.n,null,[...v])):R(()=>"")}function re(v){return i.value?i.value.tm(v):{}}function fe(v,L){return i.value?i.value.te(v,L):!1}function xe(v){return i.value?i.value.getLocaleMessage(v):{}}function Te(v,L){i.value&&(i.value.setLocaleMessage(v,L),h.value[v]=L)}function Ae(v,L){i.value&&i.value.mergeLocaleMessage(v,L)}function Ee(v){return i.value?i.value.getDateTimeFormat(v):{}}function J(v,L){i.value&&(i.value.setDateTimeFormat(v,L),d.value[v]=L)}function ue(v,L){i.value&&i.value.mergeDateTimeFormat(v,L)}function oe(v){return i.value?i.value.getNumberFormat(v):{}}function de(v,L){i.value&&(i.value.setNumberFormat(v,L),p.value[v]=L)}function Ce(v,L){i.value&&i.value.mergeNumberFormat(v,L)}const M={get id(){return i.value?i.value.id:-1},locale:Y,fallbackLocale:y,messages:x,datetimeFormats:S,numberFormats:k,get inheritLocale(){return i.value?i.value.inheritLocale:s},set inheritLocale(v){i.value&&(i.value.inheritLocale=v)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(h.value)},get modifiers(){return i.value?i.value.modifiers:N},get pluralRules(){return i.value?i.value.pluralRules:V},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:g},set missingWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackWarn(){return i.value?i.value.fallbackWarn:E},set fallbackWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackRoot(){return i.value?i.value.fallbackRoot:_},set fallbackRoot(v){i.value&&(i.value.fallbackRoot=v)},get fallbackFormat(){return i.value?i.value.fallbackFormat:I},set fallbackFormat(v){i.value&&(i.value.fallbackFormat=v)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:A},set warnHtmlMessage(v){i.value&&(i.value.warnHtmlMessage=v)},get escapeParameter(){return i.value?i.value.escapeParameter:z},set escapeParameter(v){i.value&&(i.value.escapeParameter=v)},t:F,getPostTranslationHandler:$,setPostTranslationHandler:W,getMissingHandler:j,setMissingHandler:O,rt:D,d:G,n:te,tm:re,te:fe,getLocaleMessage:xe,setLocaleMessage:Te,mergeLocaleMessage:Ae,getDateTimeFormat:Ee,setDateTimeFormat:J,mergeDateTimeFormat:ue,getNumberFormat:oe,setNumberFormat:de,mergeNumberFormat:Ce};function w(v){v.locale.value=a.value,v.fallbackLocale.value=l.value,Object.keys(h.value).forEach(L=>{v.mergeLocaleMessage(L,h.value[L])}),Object.keys(d.value).forEach(L=>{v.mergeDateTimeFormat(L,d.value[L])}),Object.keys(p.value).forEach(L=>{v.mergeNumberFormat(L,p.value[L])}),v.escapeParameter=z,v.fallbackFormat=I,v.fallbackRoot=_,v.fallbackWarn=E,v.missingWarn=g,v.warnHtmlMessage=A}return Up(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw At(mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const v=i.value=e.proxy.$i18n.__composer;t==="global"?(a.value=v.locale.value,l.value=v.fallbackLocale.value,h.value=v.messages.value,d.value=v.datetimeFormats.value,p.value=v.numberFormats.value):o&&w(v)}),M}const e9=["locale","fallbackLocale","availableLocales"],Vh=["t","rt","d","n","tm","te"];function t9(e,t){const r=Object.create(null);return e9.forEach(o=>{const i=Object.getOwnPropertyDescriptor(t,o);if(!i)throw At(mt.UNEXPECTED_ERROR);const s=pt(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(r,o,s)}),e.config.globalProperties.$i18n=r,Vh.forEach(o=>{const i=Object.getOwnPropertyDescriptor(t,o);if(!i||!i.value)throw At(mt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,i)}),()=>{delete e.config.globalProperties.$i18n,Vh.forEach(o=>{delete e.config.globalProperties[`$${o}`]})}}OE();__INTLIFY_JIT_COMPILATION__?Eh(CE):Eh(EE);wE(JA);vE(rm);if(__INTLIFY_PROD_DEVTOOLS__){const e=Gr();e.__INTLIFY__=!0,aE(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const r9={trade_get_earnings:"交易赚取收益",trade_text1:"每日买卖NFT,交易赚取收益",trade_text2:"推广朋友使用,每日享额外收益",trade_amount:"交易额",cost:"费用",web3nft_title_text:"在这里探索、发现和赚钱，世界顶级的",web3nft_info1_title:"多重奖励",web3nft_info1_text:" Opensix 采用创新的算法交易模型，引入整合交易奖励和推荐奖励的双重机制。 ",web3nft_info2_title:"获得未来价值",web3nft_info2_text:" Opensix 通过全新的算法交易模型和金融模型，降低了NFT市场的进入门槛，拓展了NFT市场的边界。 ",collection_nft:"收藏精选NFTS",enter_email_placeholder:"请输入您的邮箱",submit:"提交",limitation:"限制",earnings_rate:"收益率",cycle:"周期",confirm:"确定",cancel:"取消",all:"全部",robot_tips:"连接机器人将自动为你拍卖房间的竞品",auctioned_amount:"已竞拍次数",earn_total:"累计收益",reponse_rare:"回报率",link_robot_text:"点击连接机器人",order_record:"订单记录",my_totalprice:"我的总出价",my_harvest:"我的收获",upgrade:"升级",credit_rank:"我的信誉等级",poor:"差",general:"一般",good:"良好",excellent:"优秀",credit_score:"我的信誉评分",wallet_balance:"钱包余额",u_balance:"USDT余额",approve_limit:"授权限制",platform_balance:"平台余额",usdc_total:"累计USDT",freeze:"使用中",freeze_back:"使用中回退",in:"转入",out:"转出",deduct:"扣除",recharge:"充值",reward:"奖励",join_task:"参加任务",pledge:"质押",pledge_profit:"质押收益",usdt_use:"可用USDT",usdt_limit:"USDT额度",today_earn:"今日收益",convertible_usdt:"可提取USDT",in_progress:"进行中",in_task:"任务中",complete:"完成",fail:"失败",common_functions:"常用功能",exchange:"兑换",withdraw:"提现",loan_center:"贷款中心",flow_record:"流水记录",invite_friends:"邀请好友",help:"帮助中心",use_limit:"可用额度",current_address:"你的当前地址",premium_member:"成为高级会员",ordinary_member:"成为普通会员",tips:"温馨提示",upgrade_tips_text:"作为高级会员，您可以免除每次提款利润的一部分佣金。如果您是普通会员，每次提款都需要支付部分提款手续费",in_show:"展示中",author:"作者名字",link_address:"公链地址",nft_intro:"藏品介绍",remain_time:"剩余时间",sell_price:"售价",earnings:"收益",offer:"出价",detail_tips_text:"在任务进程中，你需要确保余额充足，否则任务会失败，信用分会被扣除。",detail_tips_text2:"您已授权，您是高级会员，竞拍后钱包余额充足。",approve_limit1:"授权额度",return_rate:"回报率",exchange_amount:"兑换数量",exchanged_usdt:"可兑换USDT",exchange_all:"全部兑换",exchange_ratio:"兑换比例",chain_type:"链类型",account:"账户",can_withdraw_amount:"可取款数量",wallet_address:"钱包地址",withdraw_amount:"提现数量",withdraw_fee:"提现费用",real_recive:"实际到账",loan:"贷款",choose_loan_way:"请选择你的贷款方式：",loan_plan:"贷款计划",loan_limit:"贷款额度",oneday_interest:"每日利息",loan_date:"贷款日期",loan_apply_dialog_text:"确定要申请该贷款吗？",repayment_dialog_text:"确定要还款吗？",repayment_dialog_success_text:"还款成功",record:"记录",exchange_record:"兑换记录",withdraw_record:"提现记录",invite_title:"邀请朋友一起赚取加密货币",invite_title1:"如何提高等级，可以得到高达10%的佣金",copy_link:"复制链接",share_friends:"分享好友",get_commission:"获取佣金",my_team:"我的团队",team_amount:"团队规模",subordinate:"直接下属",income_sum:"总收益",today_income:"今日收益",loan_record:"贷款记录",interest_payable:"应付利息",principal:"本金",interest:"利息",apply_date:"申请日期",lend_date:"借出时间",apply_status:"申请状态",apply:"申请",apply_success:"申请成功",home:"首页",lang:"语言",kf:"客服",message:"消息",open_in_wallet_text:"请在钱包内打开！",change_network:"请切换到ETH网络",send:"发送",approve_fail:"授权失败,请重试!",noMore:"没有更多了",join_success:"参与成功",task_earnings:"任务收益",pledge_record:"质押记录",in_use:"使用中",applying:"申请中",pass:"通过",refuse:"拒绝",refund:"还款",enter_withdraw_amount:"请输入正确的提现数量",submit_success_checking:"提交成功，审核中",receive_USDT:"可收到USDT",exchange_success:"兑换成功",enter_exchange_amount:"请输入正确的兑换数量",linked_robot_tips:"你已经连接了机器人，机器人将会自动为你竞拍藏品，你也可以随时取消连接。",confirm_link_dialog_text:"既然你已经选择了一个智能竞拍计划，那么在确认参与后，你的可用配额将由智能竞拍AI机器人托管，从而产生收入。",link_success:"连接成功",already_connected:"已连接",cancel_link_dialog_text:"你确定要取消连接吗？",cancel_link_success:"取消连接成功",email_format_error:"邮箱格式错误",subsirction_success:"订阅成功",copy_success:"复制成功"},n9={trade_get_earnings:"Earn profits from trading",trade_text1:"Buy and sell NFT every day and earn profits from trading",trade_text2:"Promote friends to use it and enjoy extra income every day",trade_amount:"Trade amount",cost:"Gas",web3nft_title_text:"Explore,discover,and make monkey here the world’s top",web3nft_info1_title:"Multiple rewards",web3nft_info1_text:" Opensix adopts an innovative algorithmic trading model, introducing a dual mechanism of integrating transaction rewards and recommendation rewards. ",web3nft_info2_title:"Obtaining Future Value",web3nft_info2_text:" Opensix has lowered the entry threshold of the NFT market and expanded the boundaries of the NFT market through new algorithmic trading and financial models. ",collection_nft:"Collection Selection NFTS",enter_email_placeholder:"Please enter your email address",submit:"Submit",limitation:"limitation",earnings_rate:"Rate of Return",cycle:"cycle",confirm:"Confirm",cancel:"Cancel",all:"All",robot_tips:"The connection robot will automatically auction rooms for you.",auctioned_amount:"Number of auctions completed",earn_total:"Total Revenue",reponse_rare:"Response rate",link_robot_text:"Click to connect the robot",order_record:"Order Record",my_totalprice:"My total bid",my_harvest:"My Benefits",upgrade:"Upgrade",credit_rank:"My credit rating",poor:"Poor",general:"Ordinary",good:"Good",excellent:"Excellent",credit_score:"my_credit_grade",wallet_balance:"Wallet balance",u_balance:"USDT balance",approve_limit:"Authorization limit",platform_balance:"Platform balance",usdc_total:"Accumulated USDT",freeze:"In use",freeze_back:"In use back",in:"Transfer in",out:"Transfer out",deduct:"Deduct",recharge:"Recharge",reward:"Reward",join_task:"Join task",pledge:"Pledge",pledge_profit:"Pledge profit",usdt_use:"Available USDT",usdt_limit:"USDT limit",today_earn:"Today's earnings",convertible_usdt:"Convertible USDT",in_progress:"In Progress",in_task:"In the task",complete:"Completed",fail:"Failed",common_functions:"Common functions",exchange:"Exchange",withdraw:"Withdraw",loan_center:"Loan Center",flow_record:"Flow Record",invite_friends:"Invite Friends",help:"Help",use_limit:"Available limit",current_address:"Your current address",premium_member:"Become a Premium Member",ordinary_member:"Becoming a regular member",tips:"Tips",upgrade_tips_text:"As a senior member, you can waive a commission on a portion of the profit for each withdrawal. If you are an ordinary member, you will need to pay a partial withdrawal fee for each withdrawal，您可以免除每次提款利润的一部分佣金。如果您是普通会员，每次提款都需要支付部分提款手续费",in_show:"On display",author:"Author's Name",link_address:"Public chain address",nft_intro:"Introduction",remain_time:"Time left",sell_price:"Price",earnings:"Income",offer:"Bid price",detail_tips_text:"During the task process, you need to ensure that the balance is sufficient, otherwise the task will fail and credit points will be deducted.",detail_tips_text2:"You have been awarded Jin, you are a senior, and after the auction, the package amount is sufficient.",approve_limit1:"Authorization limit",return_rate:"Response rate",exchange_amount:"Convertible quantity",exchanged_usdt:"Convertible USDT",exchange_all:"Redeem All",exchange_ratio:"Subscription ratio",chain_type:"Chain type",account:"Account",can_withdraw_amount:"Withdrawable quantity",wallet_address:"Wallet address",withdraw_amount:"Withdrawal quantity",withdraw_fee:"Withdrawal expenses",real_recive:"Actual receipt",loan:"Loan",choose_loan_way:"Please choose your loan method",loan_plan:"Loan plan",loan_limit:"Loan limit",oneday_interest:"Daily interest",loan_date:"Loan Date",loan_apply_dialog_text:"Are you sure apply the loan?",repayment_dialog_text:"Are you sure repayment?",repayment_dialog_success_text:"Repayment success",record:"Record",exchange_record:"Exchange record",withdraw_record:"Withdraw record",invite_title:"Invite friends to earn cryptocurrency together",invite_title1:"If you raise the level, you can receive up to 10% commission.",copy_link:"Copy link",share_friends:"Share Friends",get_commission:"Obtaining commission",my_team:"My team",team_amount:"Team size",subordinate:"Direct Reports",income_sum:"Total Income",today_income:"Today's earnings",loan_record:"Loan Record",interest_payable:"Payable interest",principal:"Principal",interest:"Interest",apply_date:"Application date",lend_date:"Lend date",apply_status:"Application status",apply:"Applying",apply_success:"Apply success",home:"Home",lang:"Language",kf:"Customer service",message:"Message",open_in_wallet_text:"Please open in wallet",change_network:"Please change network",send:"Send",approve_fail:"Authorization failed,Tray again!",noMore:"No more",join_success:"Join Success",task_earnings:"Task earnings",pledge_record:"Pledge record",in_use:"In use",applying:"Applying",pass:"Pass",refuse:"Refuse",refund:"Refund",enter_withdraw_amount:"Please enter withdraw amount",submit_success_checking:"Submitted successfully, under review",receive_USDT:"Receive USDT",exchange_success:"Exchange success",enter_exchange_amount:"Please enter exchange amount",linked_robot_tips:"You have connected the robot and it will automatically bid for your collection. You can also cancel the connection at any time.",confirm_link_dialog_text:"Since you have chosen an intelligent bidding plan, after confirming your participation, your available quota will be hosted by the intelligent bidding AI robot, generating revenue.",link_success:"Link success",already_connected:"Connected",cancel_link_dialog_text:"Are you sure you want to cancel the connection?",cancel_link_success:"Cancel success",email_format_error:"Email format error",subsirction_success:"Subscribe success",copy_success:"Copy success"};let Iu="en";localStorage.getItem("NFTLANG")?Iu=localStorage.getItem("NFTLANG"):localStorage.setItem("NFTLANG",Iu);const i9=VE({legacy:!1,locale:Iu,fallbackLocale:"en",messages:{zh:r9,en:n9}});(function(){if(typeof window>"u")return;var e,t="ontouchstart"in window;document.createTouch||(document.createTouch=function(d,p,g,E,_,I,P){return new r(p,g,{pageX:E,pageY:_,screenX:I,screenY:P,clientX:E-window.pageXOffset,clientY:_-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var d=n(),p=0;p<arguments.length;p++)d[p]=arguments[p];return d.length=arguments.length,d}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(d){var p=this;do{if(p.matches(d))return p;p=p.parentElement||p.parentNode}while(p!==null&&p.nodeType===1);return null});var r=function(p,g,E,_,I){_=_||0,I=I||0,this.identifier=g,this.target=p,this.clientX=E.clientX+_,this.clientY=E.clientY+I,this.screenX=E.screenX+_,this.screenY=E.screenY+I,this.pageX=E.pageX+_,this.pageY=E.pageY+I};function n(){var d=[];return d.item=function(p){return this[p]||null},d.identifiedTouch=function(p){return this[p+1]||null},d}var o=!1;function i(d){return function(p){p.type==="mousedown"&&(o=!0),p.type==="mouseup"&&(o=!1),!(p.type==="mousemove"&&!o)&&((p.type==="mousedown"||!e||e&&!e.dispatchEvent)&&(e=p.target),e.closest("[data-no-touch-simulate]")==null&&s(d,p),p.type==="mouseup"&&(e=null))}}function s(d,p){var g=document.createEvent("Event");g.initEvent(d,!0,!0),g.altKey=p.altKey,g.ctrlKey=p.ctrlKey,g.metaKey=p.metaKey,g.shiftKey=p.shiftKey,g.touches=l(p),g.targetTouches=l(p),g.changedTouches=a(p),e.dispatchEvent(g)}function a(d){var p=n();return p.push(new r(e,1,d,0,0)),p}function l(d){return d.type==="mouseup"?n():a(d)}function h(){window.addEventListener("mousedown",i("touchstart"),!0),window.addEventListener("mousemove",i("touchmove"),!0),window.addEventListener("mouseup",i("touchend"),!0)}h.multiTouchOffset=75,t||new h})();/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var o9="store";function No(e,t){Object.keys(e).forEach(function(r){return t(e[r],r)})}function s9(e){return e!==null&&typeof e=="object"}function a9(e){return e&&typeof e.then=="function"}function l9(e,t){return function(){return e(t)}}function Am(e,t,r){return t.indexOf(e)<0&&(r&&r.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Em(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var r=e.state;Hl(e,r,[],e._modules.root,!0),Kf(e,r,t)}function Kf(e,t,r){var n=e._state,o=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={},a={},l=op(!0);l.run(function(){No(i,function(h,d){s[d]=l9(h,e),a[d]=Ue(function(){return s[d]()}),Object.defineProperty(e.getters,d,{get:function(){return a[d].value},enumerable:!0})})}),e._state=Eo({data:t}),e._scope=l,e.strict&&h9(e),n&&r&&e._withCommit(function(){n.data=null}),o&&o.stop()}function Hl(e,t,r,n,o){var i=!r.length,s=e._modules.getNamespace(r);if(n.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=n),!i&&!o){var a=qf(t,r.slice(0,-1)),l=r[r.length-1];e._withCommit(function(){a[l]=n.state})}var h=n.context=c9(e,s,r);n.forEachMutation(function(d,p){var g=s+p;u9(e,g,d,h)}),n.forEachAction(function(d,p){var g=d.root?p:s+p,E=d.handler||d;f9(e,g,E,h)}),n.forEachGetter(function(d,p){var g=s+p;d9(e,g,d,h)}),n.forEachChild(function(d,p){Hl(e,t,r.concat(p),d,o)})}function c9(e,t,r){var n=t==="",o={dispatch:n?e.dispatch:function(i,s,a){var l=rl(i,s,a),h=l.payload,d=l.options,p=l.type;return(!d||!d.root)&&(p=t+p),e.dispatch(p,h)},commit:n?e.commit:function(i,s,a){var l=rl(i,s,a),h=l.payload,d=l.options,p=l.type;(!d||!d.root)&&(p=t+p),e.commit(p,h,d)}};return Object.defineProperties(o,{getters:{get:n?function(){return e.getters}:function(){return Cm(e,t)}},state:{get:function(){return qf(e.state,r)}}}),o}function Cm(e,t){if(!e._makeLocalGettersCache[t]){var r={},n=t.length;Object.keys(e.getters).forEach(function(o){if(o.slice(0,n)===t){var i=o.slice(n);Object.defineProperty(r,i,{get:function(){return e.getters[o]},enumerable:!0})}}),e._makeLocalGettersCache[t]=r}return e._makeLocalGettersCache[t]}function u9(e,t,r,n){var o=e._mutations[t]||(e._mutations[t]=[]);o.push(function(s){r.call(e,n.state,s)})}function f9(e,t,r,n){var o=e._actions[t]||(e._actions[t]=[]);o.push(function(s){var a=r.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},s);return a9(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):a})}function d9(e,t,r,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(i){return r(n.state,n.getters,i.state,i.getters)})}function h9(e){Lt(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function qf(e,t){return t.reduce(function(r,n){return r[n]},e)}function rl(e,t,r){return s9(e)&&e.type&&(r=t,t=e,e=e.type),{type:e,payload:t,options:r}}var p9="vuex bindings",Gh="vuex:mutations",$c="vuex:actions",Mi="vuex",g9=0;function m9(e,t){yv({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[p9]},function(r){r.addTimelineLayer({id:Gh,label:"Vuex Mutations",color:Kh}),r.addTimelineLayer({id:$c,label:"Vuex Actions",color:Kh}),r.addInspector({id:Mi,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),r.on.getInspectorTree(function(n){if(n.app===e&&n.inspectorId===Mi)if(n.filter){var o=[];$m(o,t._modules.root,n.filter,""),n.rootNodes=o}else n.rootNodes=[Im(t._modules.root,"")]}),r.on.getInspectorState(function(n){if(n.app===e&&n.inspectorId===Mi){var o=n.nodeId;Cm(t,o),n.state=b9(_9(t._modules,o),o==="root"?t.getters:t._makeLocalGettersCache,o)}}),r.on.editInspectorState(function(n){if(n.app===e&&n.inspectorId===Mi){var o=n.nodeId,i=n.path;o!=="root"&&(i=o.split("/").filter(Boolean).concat(i)),t._withCommit(function(){n.set(t._state.data,i,n.state.value)})}}),t.subscribe(function(n,o){var i={};n.payload&&(i.payload=n.payload),i.state=o,r.notifyComponentUpdate(),r.sendInspectorTree(Mi),r.sendInspectorState(Mi),r.addTimelineEvent({layerId:Gh,event:{time:Date.now(),title:n.type,data:i}})}),t.subscribeAction({before:function(n,o){var i={};n.payload&&(i.payload=n.payload),n._id=g9++,n._time=Date.now(),i.state=o,r.addTimelineEvent({layerId:$c,event:{time:n._time,title:n.type,groupId:n._id,subtitle:"start",data:i}})},after:function(n,o){var i={},s=Date.now()-n._time;i.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},n.payload&&(i.payload=n.payload),i.state=o,r.addTimelineEvent({layerId:$c,event:{time:Date.now(),title:n.type,groupId:n._id,subtitle:"end",data:i}})}})})}var Kh=8702998,w9=6710886,v9=16777215,Tm={label:"namespaced",textColor:v9,backgroundColor:w9};function Sm(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Im(e,t){return{id:t||"root",label:Sm(t),tags:e.namespaced?[Tm]:[],children:Object.keys(e._children).map(function(r){return Im(e._children[r],t+r+"/")})}}function $m(e,t,r,n){n.includes(r)&&e.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:t.namespaced?[Tm]:[]}),Object.keys(t._children).forEach(function(o){$m(e,t._children[o],r,n+o+"/")})}function b9(e,t,r){t=r==="root"?t:t[r];var n=Object.keys(t),o={state:Object.keys(e.state).map(function(s){return{key:s,editable:!0,value:e.state[s]}})};if(n.length){var i=y9(t);o.getters=Object.keys(i).map(function(s){return{key:s.endsWith("/")?Sm(s):s,editable:!1,value:$u(function(){return i[s]})}})}return o}function y9(e){var t={};return Object.keys(e).forEach(function(r){var n=r.split("/");if(n.length>1){var o=t,i=n.pop();n.forEach(function(s){o[s]||(o[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),o=o[s]._custom.value}),o[i]=$u(function(){return e[r]})}else t[r]=$u(function(){return e[r]})}),t}function _9(e,t){var r=t.split("/").filter(function(n){return n});return r.reduce(function(n,o,i){var s=n[o];if(!s)throw new Error('Missing module "'+o+'" for path "'+t+'".');return i===r.length-1?s:s._children},t==="root"?e:e.root._children)}function $u(e){try{return e()}catch(t){return t}}var Er=function(t,r){this.runtime=r,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=(typeof n=="function"?n():n)||{}},Rm={namespaced:{configurable:!0}};Rm.namespaced.get=function(){return!!this._rawModule.namespaced};Er.prototype.addChild=function(t,r){this._children[t]=r};Er.prototype.removeChild=function(t){delete this._children[t]};Er.prototype.getChild=function(t){return this._children[t]};Er.prototype.hasChild=function(t){return t in this._children};Er.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Er.prototype.forEachChild=function(t){No(this._children,t)};Er.prototype.forEachGetter=function(t){this._rawModule.getters&&No(this._rawModule.getters,t)};Er.prototype.forEachAction=function(t){this._rawModule.actions&&No(this._rawModule.actions,t)};Er.prototype.forEachMutation=function(t){this._rawModule.mutations&&No(this._rawModule.mutations,t)};Object.defineProperties(Er.prototype,Rm);var Ii=function(t){this.register([],t,!1)};Ii.prototype.get=function(t){return t.reduce(function(r,n){return r.getChild(n)},this.root)};Ii.prototype.getNamespace=function(t){var r=this.root;return t.reduce(function(n,o){return r=r.getChild(o),n+(r.namespaced?o+"/":"")},"")};Ii.prototype.update=function(t){Om([],this.root,t)};Ii.prototype.register=function(t,r,n){var o=this;n===void 0&&(n=!0);var i=new Er(r,n);if(t.length===0)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}r.modules&&No(r.modules,function(a,l){o.register(t.concat(l),a,n)})};Ii.prototype.unregister=function(t){var r=this.get(t.slice(0,-1)),n=t[t.length-1],o=r.getChild(n);o&&o.runtime&&r.removeChild(n)};Ii.prototype.isRegistered=function(t){var r=this.get(t.slice(0,-1)),n=t[t.length-1];return r?r.hasChild(n):!1};function Om(e,t,r){if(t.update(r),r.modules)for(var n in r.modules){if(!t.getChild(n))return;Om(e.concat(n),t.getChild(n),r.modules[n])}}function x9(e){return new Yt(e)}var Yt=function(t){var r=this;t===void 0&&(t={});var n=t.plugins;n===void 0&&(n=[]);var o=t.strict;o===void 0&&(o=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ii(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,a=this,l=a.dispatch,h=a.commit;this.dispatch=function(g,E){return l.call(s,g,E)},this.commit=function(g,E,_){return h.call(s,g,E,_)},this.strict=o;var d=this._modules.root.state;Hl(this,d,[],this._modules.root),Kf(this,d),n.forEach(function(p){return p(r)})},Yf={state:{configurable:!0}};Yt.prototype.install=function(t,r){t.provide(r||o9,this),t.config.globalProperties.$store=this;var n=this._devtools!==void 0?this._devtools:!1;n&&m9(t,this)};Yf.state.get=function(){return this._state.data};Yf.state.set=function(e){};Yt.prototype.commit=function(t,r,n){var o=this,i=rl(t,r,n),s=i.type,a=i.payload,l={type:s,payload:a},h=this._mutations[s];h&&(this._withCommit(function(){h.forEach(function(p){p(a)})}),this._subscribers.slice().forEach(function(d){return d(l,o.state)}))};Yt.prototype.dispatch=function(t,r){var n=this,o=rl(t,r),i=o.type,s=o.payload,a={type:i,payload:s},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(a,n.state)})}catch{}var h=l.length>1?Promise.all(l.map(function(d){return d(s)})):l[0](s);return new Promise(function(d,p){h.then(function(g){try{n._actionSubscribers.filter(function(E){return E.after}).forEach(function(E){return E.after(a,n.state)})}catch{}d(g)},function(g){try{n._actionSubscribers.filter(function(E){return E.error}).forEach(function(E){return E.error(a,n.state,g)})}catch{}p(g)})})}};Yt.prototype.subscribe=function(t,r){return Am(t,this._subscribers,r)};Yt.prototype.subscribeAction=function(t,r){var n=typeof t=="function"?{before:t}:t;return Am(n,this._actionSubscribers,r)};Yt.prototype.watch=function(t,r,n){var o=this;return Lt(function(){return t(o.state,o.getters)},r,Object.assign({},n))};Yt.prototype.replaceState=function(t){var r=this;this._withCommit(function(){r._state.data=t})};Yt.prototype.registerModule=function(t,r,n){n===void 0&&(n={}),typeof t=="string"&&(t=[t]),this._modules.register(t,r),Hl(this,this.state,t,this._modules.get(t),n.preserveState),Kf(this,this.state)};Yt.prototype.unregisterModule=function(t){var r=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=qf(r.state,t.slice(0,-1));delete n[t[t.length-1]]}),Em(this)};Yt.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Yt.prototype.hotUpdate=function(t){this._modules.update(t),Em(this,!0)};Yt.prototype._withCommit=function(t){var r=this._committing;this._committing=!0,t(),this._committing=r};Object.defineProperties(Yt.prototype,Yf);const A9=[{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],E9={coinAbi:A9};var C9=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Rc=Math.ceil,ir=Math.floor,Ht="[BigNumber Error] ",qh=Ht+"Number primitive has more than 15 significant digits: ",gr=1e14,Me=14,Oc=9007199254740991,Nc=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],fn=1e7,_t=1e9;function Nm(e){var t,r,n,o=A.prototype={constructor:A,toString:null,valueOf:null},i=new A(1),s=20,a=4,l=-7,h=21,d=-1e7,p=1e7,g=!1,E=1,_=0,I={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},P="0123456789abcdefghijklmnopqrstuvwxyz",C=!0;function A(y,x){var S,k,$,W,j,O,R,F,D=this;if(!(D instanceof A))return new A(y,x);if(x==null){if(y&&y._isBigNumber===!0){D.s=y.s,!y.c||y.e>p?D.c=D.e=null:y.e<d?D.c=[D.e=0]:(D.e=y.e,D.c=y.c.slice());return}if((O=typeof y=="number")&&y*0==0){if(D.s=1/y<0?(y=-y,-1):1,y===~~y){for(W=0,j=y;j>=10;j/=10,W++);W>p?D.c=D.e=null:(D.e=W,D.c=[y]);return}F=String(y)}else{if(!C9.test(F=String(y)))return n(D,F,O);D.s=F.charCodeAt(0)==45?(F=F.slice(1),-1):1}(W=F.indexOf("."))>-1&&(F=F.replace(".","")),(j=F.search(/e/i))>0?(W<0&&(W=j),W+=+F.slice(j+1),F=F.substring(0,j)):W<0&&(W=F.length)}else{if(nt(x,2,P.length,"Base"),x==10&&C)return D=new A(y),q(D,s+D.e+1,a);if(F=String(y),O=typeof y=="number"){if(y*0!=0)return n(D,F,O,x);if(D.s=1/y<0?(F=F.slice(1),-1):1,A.DEBUG&&F.replace(/^0\.0*|\./,"").length>15)throw Error(qh+y)}else D.s=F.charCodeAt(0)===45?(F=F.slice(1),-1):1;for(S=P.slice(0,x),W=j=0,R=F.length;j<R;j++)if(S.indexOf(k=F.charAt(j))<0){if(k=="."){if(j>W){W=R;continue}}else if(!$&&(F==F.toUpperCase()&&(F=F.toLowerCase())||F==F.toLowerCase()&&(F=F.toUpperCase()))){$=!0,j=-1,W=0;continue}return n(D,String(y),O,x)}O=!1,F=r(F,x,10,D.s),(W=F.indexOf("."))>-1?F=F.replace(".",""):W=F.length}for(j=0;F.charCodeAt(j)===48;j++);for(R=F.length;F.charCodeAt(--R)===48;);if(F=F.slice(j,++R)){if(R-=j,O&&A.DEBUG&&R>15&&(y>Oc||y!==ir(y)))throw Error(qh+D.s*y);if((W=W-j-1)>p)D.c=D.e=null;else if(W<d)D.c=[D.e=0];else{if(D.e=W,D.c=[],j=(W+1)%Me,W<0&&(j+=Me),j<R){for(j&&D.c.push(+F.slice(0,j)),R-=Me;j<R;)D.c.push(+F.slice(j,j+=Me));j=Me-(F=F.slice(j)).length}else j-=R;for(;j--;F+="0");D.c.push(+F)}}else D.c=[D.e=0]}A.clone=Nm,A.ROUND_UP=0,A.ROUND_DOWN=1,A.ROUND_CEIL=2,A.ROUND_FLOOR=3,A.ROUND_HALF_UP=4,A.ROUND_HALF_DOWN=5,A.ROUND_HALF_EVEN=6,A.ROUND_HALF_CEIL=7,A.ROUND_HALF_FLOOR=8,A.EUCLID=9,A.config=A.set=function(y){var x,S;if(y!=null)if(typeof y=="object"){if(y.hasOwnProperty(x="DECIMAL_PLACES")&&(S=y[x],nt(S,0,_t,x),s=S),y.hasOwnProperty(x="ROUNDING_MODE")&&(S=y[x],nt(S,0,8,x),a=S),y.hasOwnProperty(x="EXPONENTIAL_AT")&&(S=y[x],S&&S.pop?(nt(S[0],-_t,0,x),nt(S[1],0,_t,x),l=S[0],h=S[1]):(nt(S,-_t,_t,x),l=-(h=S<0?-S:S))),y.hasOwnProperty(x="RANGE"))if(S=y[x],S&&S.pop)nt(S[0],-_t,-1,x),nt(S[1],1,_t,x),d=S[0],p=S[1];else if(nt(S,-_t,_t,x),S)d=-(p=S<0?-S:S);else throw Error(Ht+x+" cannot be zero: "+S);if(y.hasOwnProperty(x="CRYPTO"))if(S=y[x],S===!!S)if(S)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))g=S;else throw g=!S,Error(Ht+"crypto unavailable");else g=S;else throw Error(Ht+x+" not true or false: "+S);if(y.hasOwnProperty(x="MODULO_MODE")&&(S=y[x],nt(S,0,9,x),E=S),y.hasOwnProperty(x="POW_PRECISION")&&(S=y[x],nt(S,0,_t,x),_=S),y.hasOwnProperty(x="FORMAT"))if(S=y[x],typeof S=="object")I=S;else throw Error(Ht+x+" not an object: "+S);if(y.hasOwnProperty(x="ALPHABET"))if(S=y[x],typeof S=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(S))C=S.slice(0,10)=="0123456789",P=S;else throw Error(Ht+x+" invalid: "+S)}else throw Error(Ht+"Object expected: "+y);return{DECIMAL_PLACES:s,ROUNDING_MODE:a,EXPONENTIAL_AT:[l,h],RANGE:[d,p],CRYPTO:g,MODULO_MODE:E,POW_PRECISION:_,FORMAT:I,ALPHABET:P}},A.isBigNumber=function(y){if(!y||y._isBigNumber!==!0)return!1;if(!A.DEBUG)return!0;var x,S,k=y.c,$=y.e,W=y.s;e:if({}.toString.call(k)=="[object Array]"){if((W===1||W===-1)&&$>=-_t&&$<=_t&&$===ir($)){if(k[0]===0){if($===0&&k.length===1)return!0;break e}if(x=($+1)%Me,x<1&&(x+=Me),String(k[0]).length==x){for(x=0;x<k.length;x++)if(S=k[x],S<0||S>=gr||S!==ir(S))break e;if(S!==0)return!0}}}else if(k===null&&$===null&&(W===null||W===1||W===-1))return!0;throw Error(Ht+"Invalid BigNumber: "+y)},A.maximum=A.max=function(){return N(arguments,-1)},A.minimum=A.min=function(){return N(arguments,1)},A.random=function(){var y=9007199254740992,x=Math.random()*y&2097151?function(){return ir(Math.random()*y)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(S){var k,$,W,j,O,R=0,F=[],D=new A(i);if(S==null?S=s:nt(S,0,_t),j=Rc(S/Me),g)if(crypto.getRandomValues){for(k=crypto.getRandomValues(new Uint32Array(j*=2));R<j;)O=k[R]*131072+(k[R+1]>>>11),O>=9e15?($=crypto.getRandomValues(new Uint32Array(2)),k[R]=$[0],k[R+1]=$[1]):(F.push(O%1e14),R+=2);R=j/2}else if(crypto.randomBytes){for(k=crypto.randomBytes(j*=7);R<j;)O=(k[R]&31)*281474976710656+k[R+1]*1099511627776+k[R+2]*4294967296+k[R+3]*16777216+(k[R+4]<<16)+(k[R+5]<<8)+k[R+6],O>=9e15?crypto.randomBytes(7).copy(k,R):(F.push(O%1e14),R+=7);R=j/7}else throw g=!1,Error(Ht+"crypto unavailable");if(!g)for(;R<j;)O=x(),O<9e15&&(F[R++]=O%1e14);for(j=F[--R],S%=Me,j&&S&&(O=Nc[Me-S],F[R]=ir(j/O)*O);F[R]===0;F.pop(),R--);if(R<0)F=[W=0];else{for(W=-1;F[0]===0;F.splice(0,1),W-=Me);for(R=1,O=F[0];O>=10;O/=10,R++);R<Me&&(W-=Me-R)}return D.e=W,D.c=F,D}}(),A.sum=function(){for(var y=1,x=arguments,S=new A(x[0]);y<x.length;)S=S.plus(x[y++]);return S},r=function(){var y="0123456789";function x(S,k,$,W){for(var j,O=[0],R,F=0,D=S.length;F<D;){for(R=O.length;R--;O[R]*=k);for(O[0]+=W.indexOf(S.charAt(F++)),j=0;j<O.length;j++)O[j]>$-1&&(O[j+1]==null&&(O[j+1]=0),O[j+1]+=O[j]/$|0,O[j]%=$)}return O.reverse()}return function(S,k,$,W,j){var O,R,F,D,G,te,re,fe,xe=S.indexOf("."),Te=s,Ae=a;for(xe>=0&&(D=_,_=0,S=S.replace(".",""),fe=new A(k),te=fe.pow(S.length-xe),_=D,fe.c=x(zr(nr(te.c),te.e,"0"),10,$,y),fe.e=fe.c.length),re=x(S,k,$,j?(O=P,y):(O=y,P)),F=D=re.length;re[--D]==0;re.pop());if(!re[0])return O.charAt(0);if(xe<0?--F:(te.c=re,te.e=F,te.s=W,te=t(te,fe,Te,Ae,$),re=te.c,G=te.r,F=te.e),R=F+Te+1,xe=re[R],D=$/2,G=G||R<0||re[R+1]!=null,G=Ae<4?(xe!=null||G)&&(Ae==0||Ae==(te.s<0?3:2)):xe>D||xe==D&&(Ae==4||G||Ae==6&&re[R-1]&1||Ae==(te.s<0?8:7)),R<1||!re[0])S=G?zr(O.charAt(1),-Te,O.charAt(0)):O.charAt(0);else{if(re.length=R,G)for(--$;++re[--R]>$;)re[R]=0,R||(++F,re=[1].concat(re));for(D=re.length;!re[--D];);for(xe=0,S="";xe<=D;S+=O.charAt(re[xe++]));S=zr(S,F,O.charAt(0))}return S}}(),t=function(){function y(k,$,W){var j,O,R,F,D=0,G=k.length,te=$%fn,re=$/fn|0;for(k=k.slice();G--;)R=k[G]%fn,F=k[G]/fn|0,j=re*R+F*te,O=te*R+j%fn*fn+D,D=(O/W|0)+(j/fn|0)+re*F,k[G]=O%W;return D&&(k=[D].concat(k)),k}function x(k,$,W,j){var O,R;if(W!=j)R=W>j?1:-1;else for(O=R=0;O<W;O++)if(k[O]!=$[O]){R=k[O]>$[O]?1:-1;break}return R}function S(k,$,W,j){for(var O=0;W--;)k[W]-=O,O=k[W]<$[W]?1:0,k[W]=O*j+k[W]-$[W];for(;!k[0]&&k.length>1;k.splice(0,1));}return function(k,$,W,j,O){var R,F,D,G,te,re,fe,xe,Te,Ae,Ee,J,ue,oe,de,Ce,M,w=k.s==$.s?1:-1,v=k.c,L=$.c;if(!v||!v[0]||!L||!L[0])return new A(!k.s||!$.s||(v?L&&v[0]==L[0]:!L)?NaN:v&&v[0]==0||!L?w*0:w/0);for(xe=new A(w),Te=xe.c=[],F=k.e-$.e,w=W+F+1,O||(O=gr,F=or(k.e/Me)-or($.e/Me),w=w/Me|0),D=0;L[D]==(v[D]||0);D++);if(L[D]>(v[D]||0)&&F--,w<0)Te.push(1),G=!0;else{for(oe=v.length,Ce=L.length,D=0,w+=2,te=ir(O/(L[0]+1)),te>1&&(L=y(L,te,O),v=y(v,te,O),Ce=L.length,oe=v.length),ue=Ce,Ae=v.slice(0,Ce),Ee=Ae.length;Ee<Ce;Ae[Ee++]=0);M=L.slice(),M=[0].concat(M),de=L[0],L[1]>=O/2&&de++;do{if(te=0,R=x(L,Ae,Ce,Ee),R<0){if(J=Ae[0],Ce!=Ee&&(J=J*O+(Ae[1]||0)),te=ir(J/de),te>1)for(te>=O&&(te=O-1),re=y(L,te,O),fe=re.length,Ee=Ae.length;x(re,Ae,fe,Ee)==1;)te--,S(re,Ce<fe?M:L,fe,O),fe=re.length,R=1;else te==0&&(R=te=1),re=L.slice(),fe=re.length;if(fe<Ee&&(re=[0].concat(re)),S(Ae,re,Ee,O),Ee=Ae.length,R==-1)for(;x(L,Ae,Ce,Ee)<1;)te++,S(Ae,Ce<Ee?M:L,Ee,O),Ee=Ae.length}else R===0&&(te++,Ae=[0]);Te[D++]=te,Ae[0]?Ae[Ee++]=v[ue]||0:(Ae=[v[ue]],Ee=1)}while((ue++<oe||Ae[0]!=null)&&w--);G=Ae[0]!=null,Te[0]||Te.splice(0,1)}if(O==gr){for(D=1,w=Te[0];w>=10;w/=10,D++);q(xe,W+(xe.e=D+F*Me-1)+1,j,G)}else xe.e=F,xe.r=+G;return xe}}();function z(y,x,S,k){var $,W,j,O,R;if(S==null?S=a:nt(S,0,8),!y.c)return y.toString();if($=y.c[0],j=y.e,x==null)R=nr(y.c),R=k==1||k==2&&(j<=l||j>=h)?pa(R,j):zr(R,j,"0");else if(y=q(new A(y),x,S),W=y.e,R=nr(y.c),O=R.length,k==1||k==2&&(x<=W||W<=l)){for(;O<x;R+="0",O++);R=pa(R,W)}else if(x-=j,R=zr(R,W,"0"),W+1>O){if(--x>0)for(R+=".";x--;R+="0");}else if(x+=W-O,x>0)for(W+1==O&&(R+=".");x--;R+="0");return y.s<0&&$?"-"+R:R}function N(y,x){for(var S,k,$=1,W=new A(y[0]);$<y.length;$++)k=new A(y[$]),(!k.s||(S=Zn(W,k))===x||S===0&&W.s===x)&&(W=k);return W}function V(y,x,S){for(var k=1,$=x.length;!x[--$];x.pop());for($=x[0];$>=10;$/=10,k++);return(S=k+S*Me-1)>p?y.c=y.e=null:S<d?y.c=[y.e=0]:(y.e=S,y.c=x),y}n=function(){var y=/^(-?)0([xbo])(?=\w[\w.]*$)/i,x=/^([^.]+)\.$/,S=/^\.([^.]+)$/,k=/^-?(Infinity|NaN)$/,$=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(W,j,O,R){var F,D=O?j:j.replace($,"");if(k.test(D))W.s=isNaN(D)?null:D<0?-1:1;else{if(!O&&(D=D.replace(y,function(G,te,re){return F=(re=re.toLowerCase())=="x"?16:re=="b"?2:8,!R||R==F?te:G}),R&&(F=R,D=D.replace(x,"$1").replace(S,"0.$1")),j!=D))return new A(D,F);if(A.DEBUG)throw Error(Ht+"Not a"+(R?" base "+R:"")+" number: "+j);W.s=null}W.c=W.e=null}}();function q(y,x,S,k){var $,W,j,O,R,F,D,G=y.c,te=Nc;if(G){e:{for($=1,O=G[0];O>=10;O/=10,$++);if(W=x-$,W<0)W+=Me,j=x,R=G[F=0],D=ir(R/te[$-j-1]%10);else if(F=Rc((W+1)/Me),F>=G.length)if(k){for(;G.length<=F;G.push(0));R=D=0,$=1,W%=Me,j=W-Me+1}else break e;else{for(R=O=G[F],$=1;O>=10;O/=10,$++);W%=Me,j=W-Me+$,D=j<0?0:ir(R/te[$-j-1]%10)}if(k=k||x<0||G[F+1]!=null||(j<0?R:R%te[$-j-1]),k=S<4?(D||k)&&(S==0||S==(y.s<0?3:2)):D>5||D==5&&(S==4||k||S==6&&(W>0?j>0?R/te[$-j]:0:G[F-1])%10&1||S==(y.s<0?8:7)),x<1||!G[0])return G.length=0,k?(x-=y.e+1,G[0]=te[(Me-x%Me)%Me],y.e=-x||0):G[0]=y.e=0,y;if(W==0?(G.length=F,O=1,F--):(G.length=F+1,O=te[Me-W],G[F]=j>0?ir(R/te[$-j]%te[j])*O:0),k)for(;;)if(F==0){for(W=1,j=G[0];j>=10;j/=10,W++);for(j=G[0]+=O,O=1;j>=10;j/=10,O++);W!=O&&(y.e++,G[0]==gr&&(G[0]=1));break}else{if(G[F]+=O,G[F]!=gr)break;G[F--]=0,O=1}for(W=G.length;G[--W]===0;G.pop());}y.e>p?y.c=y.e=null:y.e<d&&(y.c=[y.e=0])}return y}function Y(y){var x,S=y.e;return S===null?y.toString():(x=nr(y.c),x=S<=l||S>=h?pa(x,S):zr(x,S,"0"),y.s<0?"-"+x:x)}return o.absoluteValue=o.abs=function(){var y=new A(this);return y.s<0&&(y.s=1),y},o.comparedTo=function(y,x){return Zn(this,new A(y,x))},o.decimalPlaces=o.dp=function(y,x){var S,k,$,W=this;if(y!=null)return nt(y,0,_t),x==null?x=a:nt(x,0,8),q(new A(W),y+W.e+1,x);if(!(S=W.c))return null;if(k=(($=S.length-1)-or(this.e/Me))*Me,$=S[$])for(;$%10==0;$/=10,k--);return k<0&&(k=0),k},o.dividedBy=o.div=function(y,x){return t(this,new A(y,x),s,a)},o.dividedToIntegerBy=o.idiv=function(y,x){return t(this,new A(y,x),0,1)},o.exponentiatedBy=o.pow=function(y,x){var S,k,$,W,j,O,R,F,D,G=this;if(y=new A(y),y.c&&!y.isInteger())throw Error(Ht+"Exponent not an integer: "+Y(y));if(x!=null&&(x=new A(x)),O=y.e>14,!G.c||!G.c[0]||G.c[0]==1&&!G.e&&G.c.length==1||!y.c||!y.c[0])return D=new A(Math.pow(+Y(G),O?y.s*(2-ha(y)):+Y(y))),x?D.mod(x):D;if(R=y.s<0,x){if(x.c?!x.c[0]:!x.s)return new A(NaN);k=!R&&G.isInteger()&&x.isInteger(),k&&(G=G.mod(x))}else{if(y.e>9&&(G.e>0||G.e<-1||(G.e==0?G.c[0]>1||O&&G.c[1]>=24e7:G.c[0]<8e13||O&&G.c[0]<=9999975e7)))return W=G.s<0&&ha(y)?-0:0,G.e>-1&&(W=1/W),new A(R?1/W:W);_&&(W=Rc(_/Me+2))}for(O?(S=new A(.5),R&&(y.s=1),F=ha(y)):($=Math.abs(+Y(y)),F=$%2),D=new A(i);;){if(F){if(D=D.times(G),!D.c)break;W?D.c.length>W&&(D.c.length=W):k&&(D=D.mod(x))}if($){if($=ir($/2),$===0)break;F=$%2}else if(y=y.times(S),q(y,y.e+1,1),y.e>14)F=ha(y);else{if($=+Y(y),$===0)break;F=$%2}G=G.times(G),W?G.c&&G.c.length>W&&(G.c.length=W):k&&(G=G.mod(x))}return k?D:(R&&(D=i.div(D)),x?D.mod(x):W?q(D,_,a,j):D)},o.integerValue=function(y){var x=new A(this);return y==null?y=a:nt(y,0,8),q(x,x.e+1,y)},o.isEqualTo=o.eq=function(y,x){return Zn(this,new A(y,x))===0},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(y,x){return Zn(this,new A(y,x))>0},o.isGreaterThanOrEqualTo=o.gte=function(y,x){return(x=Zn(this,new A(y,x)))===1||x===0},o.isInteger=function(){return!!this.c&&or(this.e/Me)>this.c.length-2},o.isLessThan=o.lt=function(y,x){return Zn(this,new A(y,x))<0},o.isLessThanOrEqualTo=o.lte=function(y,x){return(x=Zn(this,new A(y,x)))===-1||x===0},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&this.c[0]==0},o.minus=function(y,x){var S,k,$,W,j=this,O=j.s;if(y=new A(y,x),x=y.s,!O||!x)return new A(NaN);if(O!=x)return y.s=-x,j.plus(y);var R=j.e/Me,F=y.e/Me,D=j.c,G=y.c;if(!R||!F){if(!D||!G)return D?(y.s=-x,y):new A(G?j:NaN);if(!D[0]||!G[0])return G[0]?(y.s=-x,y):new A(D[0]?j:a==3?-0:0)}if(R=or(R),F=or(F),D=D.slice(),O=R-F){for((W=O<0)?(O=-O,$=D):(F=R,$=G),$.reverse(),x=O;x--;$.push(0));$.reverse()}else for(k=(W=(O=D.length)<(x=G.length))?O:x,O=x=0;x<k;x++)if(D[x]!=G[x]){W=D[x]<G[x];break}if(W&&($=D,D=G,G=$,y.s=-y.s),x=(k=G.length)-(S=D.length),x>0)for(;x--;D[S++]=0);for(x=gr-1;k>O;){if(D[--k]<G[k]){for(S=k;S&&!D[--S];D[S]=x);--D[S],D[k]+=gr}D[k]-=G[k]}for(;D[0]==0;D.splice(0,1),--F);return D[0]?V(y,D,F):(y.s=a==3?-1:1,y.c=[y.e=0],y)},o.modulo=o.mod=function(y,x){var S,k,$=this;return y=new A(y,x),!$.c||!y.s||y.c&&!y.c[0]?new A(NaN):!y.c||$.c&&!$.c[0]?new A($):(E==9?(k=y.s,y.s=1,S=t($,y,0,3),y.s=k,S.s*=k):S=t($,y,0,E),y=$.minus(S.times(y)),!y.c[0]&&E==1&&(y.s=$.s),y)},o.multipliedBy=o.times=function(y,x){var S,k,$,W,j,O,R,F,D,G,te,re,fe,xe,Te,Ae=this,Ee=Ae.c,J=(y=new A(y,x)).c;if(!Ee||!J||!Ee[0]||!J[0])return!Ae.s||!y.s||Ee&&!Ee[0]&&!J||J&&!J[0]&&!Ee?y.c=y.e=y.s=null:(y.s*=Ae.s,!Ee||!J?y.c=y.e=null:(y.c=[0],y.e=0)),y;for(k=or(Ae.e/Me)+or(y.e/Me),y.s*=Ae.s,R=Ee.length,G=J.length,R<G&&(fe=Ee,Ee=J,J=fe,$=R,R=G,G=$),$=R+G,fe=[];$--;fe.push(0));for(xe=gr,Te=fn,$=G;--$>=0;){for(S=0,te=J[$]%Te,re=J[$]/Te|0,j=R,W=$+j;W>$;)F=Ee[--j]%Te,D=Ee[j]/Te|0,O=re*F+D*te,F=te*F+O%Te*Te+fe[W]+S,S=(F/xe|0)+(O/Te|0)+re*D,fe[W--]=F%xe;fe[W]=S}return S?++k:fe.splice(0,1),V(y,fe,k)},o.negated=function(){var y=new A(this);return y.s=-y.s||null,y},o.plus=function(y,x){var S,k=this,$=k.s;if(y=new A(y,x),x=y.s,!$||!x)return new A(NaN);if($!=x)return y.s=-x,k.minus(y);var W=k.e/Me,j=y.e/Me,O=k.c,R=y.c;if(!W||!j){if(!O||!R)return new A($/0);if(!O[0]||!R[0])return R[0]?y:new A(O[0]?k:$*0)}if(W=or(W),j=or(j),O=O.slice(),$=W-j){for($>0?(j=W,S=R):($=-$,S=O),S.reverse();$--;S.push(0));S.reverse()}for($=O.length,x=R.length,$-x<0&&(S=R,R=O,O=S,x=$),$=0;x;)$=(O[--x]=O[x]+R[x]+$)/gr|0,O[x]=gr===O[x]?0:O[x]%gr;return $&&(O=[$].concat(O),++j),V(y,O,j)},o.precision=o.sd=function(y,x){var S,k,$,W=this;if(y!=null&&y!==!!y)return nt(y,1,_t),x==null?x=a:nt(x,0,8),q(new A(W),y,x);if(!(S=W.c))return null;if($=S.length-1,k=$*Me+1,$=S[$]){for(;$%10==0;$/=10,k--);for($=S[0];$>=10;$/=10,k++);}return y&&W.e+1>k&&(k=W.e+1),k},o.shiftedBy=function(y){return nt(y,-Oc,Oc),this.times("1e"+y)},o.squareRoot=o.sqrt=function(){var y,x,S,k,$,W=this,j=W.c,O=W.s,R=W.e,F=s+4,D=new A("0.5");if(O!==1||!j||!j[0])return new A(!O||O<0&&(!j||j[0])?NaN:j?W:1/0);if(O=Math.sqrt(+Y(W)),O==0||O==1/0?(x=nr(j),(x.length+R)%2==0&&(x+="0"),O=Math.sqrt(+x),R=or((R+1)/2)-(R<0||R%2),O==1/0?x="5e"+R:(x=O.toExponential(),x=x.slice(0,x.indexOf("e")+1)+R),S=new A(x)):S=new A(O+""),S.c[0]){for(R=S.e,O=R+F,O<3&&(O=0);;)if($=S,S=D.times($.plus(t(W,$,F,1))),nr($.c).slice(0,O)===(x=nr(S.c)).slice(0,O))if(S.e<R&&--O,x=x.slice(O-3,O+1),x=="9999"||!k&&x=="4999"){if(!k&&(q($,$.e+s+2,0),$.times($).eq(W))){S=$;break}F+=4,O+=4,k=1}else{(!+x||!+x.slice(1)&&x.charAt(0)=="5")&&(q(S,S.e+s+2,1),y=!S.times(S).eq(W));break}}return q(S,S.e+s+1,a,y)},o.toExponential=function(y,x){return y!=null&&(nt(y,0,_t),y++),z(this,y,x,1)},o.toFixed=function(y,x){return y!=null&&(nt(y,0,_t),y=y+this.e+1),z(this,y,x)},o.toFormat=function(y,x,S){var k,$=this;if(S==null)y!=null&&x&&typeof x=="object"?(S=x,x=null):y&&typeof y=="object"?(S=y,y=x=null):S=I;else if(typeof S!="object")throw Error(Ht+"Argument not an object: "+S);if(k=$.toFixed(y,x),$.c){var W,j=k.split("."),O=+S.groupSize,R=+S.secondaryGroupSize,F=S.groupSeparator||"",D=j[0],G=j[1],te=$.s<0,re=te?D.slice(1):D,fe=re.length;if(R&&(W=O,O=R,R=W,fe-=W),O>0&&fe>0){for(W=fe%O||O,D=re.substr(0,W);W<fe;W+=O)D+=F+re.substr(W,O);R>0&&(D+=F+re.slice(W)),te&&(D="-"+D)}k=G?D+(S.decimalSeparator||"")+((R=+S.fractionGroupSize)?G.replace(new RegExp("\\d{"+R+"}\\B","g"),"$&"+(S.fractionGroupSeparator||"")):G):D}return(S.prefix||"")+k+(S.suffix||"")},o.toFraction=function(y){var x,S,k,$,W,j,O,R,F,D,G,te,re=this,fe=re.c;if(y!=null&&(O=new A(y),!O.isInteger()&&(O.c||O.s!==1)||O.lt(i)))throw Error(Ht+"Argument "+(O.isInteger()?"out of range: ":"not an integer: ")+Y(O));if(!fe)return new A(re);for(x=new A(i),F=S=new A(i),k=R=new A(i),te=nr(fe),W=x.e=te.length-re.e-1,x.c[0]=Nc[(j=W%Me)<0?Me+j:j],y=!y||O.comparedTo(x)>0?W>0?x:F:O,j=p,p=1/0,O=new A(te),R.c[0]=0;D=t(O,x,0,1),$=S.plus(D.times(k)),$.comparedTo(y)!=1;)S=k,k=$,F=R.plus(D.times($=F)),R=$,x=O.minus(D.times($=x)),O=$;return $=t(y.minus(S),k,0,1),R=R.plus($.times(F)),S=S.plus($.times(k)),R.s=F.s=re.s,W=W*2,G=t(F,k,W,a).minus(re).abs().comparedTo(t(R,S,W,a).minus(re).abs())<1?[F,k]:[R,S],p=j,G},o.toNumber=function(){return+Y(this)},o.toPrecision=function(y,x){return y!=null&&nt(y,1,_t),z(this,y,x,2)},o.toString=function(y){var x,S=this,k=S.s,$=S.e;return $===null?k?(x="Infinity",k<0&&(x="-"+x)):x="NaN":(y==null?x=$<=l||$>=h?pa(nr(S.c),$):zr(nr(S.c),$,"0"):y===10&&C?(S=q(new A(S),s+$+1,a),x=zr(nr(S.c),S.e,"0")):(nt(y,2,P.length,"Base"),x=r(zr(nr(S.c),$,"0"),10,y,k,!0)),k<0&&S.c[0]&&(x="-"+x)),x},o.valueOf=o.toJSON=function(){return Y(this)},o._isBigNumber=!0,o[Symbol.toStringTag]="BigNumber",o[Symbol.for("nodejs.util.inspect.custom")]=o.valueOf,e!=null&&A.set(e),A}function or(e){var t=e|0;return e>0||e===t?t:t-1}function nr(e){for(var t,r,n=1,o=e.length,i=e[0]+"";n<o;){for(t=e[n++]+"",r=Me-t.length;r--;t="0"+t);i+=t}for(o=i.length;i.charCodeAt(--o)===48;);return i.slice(0,o+1||1)}function Zn(e,t){var r,n,o=e.c,i=t.c,s=e.s,a=t.s,l=e.e,h=t.e;if(!s||!a)return null;if(r=o&&!o[0],n=i&&!i[0],r||n)return r?n?0:-a:s;if(s!=a)return s;if(r=s<0,n=l==h,!o||!i)return n?0:!o^r?1:-1;if(!n)return l>h^r?1:-1;for(a=(l=o.length)<(h=i.length)?l:h,s=0;s<a;s++)if(o[s]!=i[s])return o[s]>i[s]^r?1:-1;return l==h?0:l>h^r?1:-1}function nt(e,t,r,n){if(e<t||e>r||e!==ir(e))throw Error(Ht+(n||"Argument")+(typeof e=="number"?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function ha(e){var t=e.c.length-1;return or(e.e/Me)==t&&e.c[t]%2!=0}function pa(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function zr(e,t,r){var n,o;if(t<0){for(o=r+".";++t;o+=r);e=o+e}else if(n=e.length,++t>n){for(o=r,t-=n;--t;o+=r);e+=o}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}var Lc=Nm(),Lm={exports:{}};(function(e){var t=function(r){var n=1e7,o=7,i=9007199254740992,s=_(i),a="0123456789abcdefghijklmnopqrstuvwxyz",l=typeof BigInt=="function";function h(m,f,c,u){return typeof m>"u"?h[0]:typeof f<"u"?+f==10&&!c?H(m):Q(m,f,c,u):H(m)}function d(m,f){this.value=m,this.sign=f,this.isSmall=!1}d.prototype=Object.create(h.prototype);function p(m){this.value=m,this.sign=m<0,this.isSmall=!0}p.prototype=Object.create(h.prototype);function g(m){this.value=m}g.prototype=Object.create(h.prototype);function E(m){return-i<m&&m<i}function _(m){return m<1e7?[m]:m<1e14?[m%1e7,Math.floor(m/1e7)]:[m%1e7,Math.floor(m/1e7)%1e7,Math.floor(m/1e14)]}function I(m){P(m);var f=m.length;if(f<4&&te(m,s)<0)switch(f){case 0:return 0;case 1:return m[0];case 2:return m[0]+m[1]*n;default:return m[0]+(m[1]+m[2]*n)*n}return m}function P(m){for(var f=m.length;m[--f]===0;);m.length=f+1}function C(m){for(var f=new Array(m),c=-1;++c<m;)f[c]=0;return f}function A(m){return m>0?Math.floor(m):Math.ceil(m)}function z(m,f){var c=m.length,u=f.length,b=new Array(c),T=0,B=n,U,ee;for(ee=0;ee<u;ee++)U=m[ee]+f[ee]+T,T=U>=B?1:0,b[ee]=U-T*B;for(;ee<c;)U=m[ee]+T,T=U===B?1:0,b[ee++]=U-T*B;return T>0&&b.push(T),b}function N(m,f){return m.length>=f.length?z(m,f):z(f,m)}function V(m,f){var c=m.length,u=new Array(c),b=n,T,B;for(B=0;B<c;B++)T=m[B]-b+f,f=Math.floor(T/b),u[B]=T-f*b,f+=1;for(;f>0;)u[B++]=f%b,f=Math.floor(f/b);return u}d.prototype.add=function(m){var f=H(m);if(this.sign!==f.sign)return this.subtract(f.negate());var c=this.value,u=f.value;return f.isSmall?new d(V(c,Math.abs(u)),this.sign):new d(N(c,u),this.sign)},d.prototype.plus=d.prototype.add,p.prototype.add=function(m){var f=H(m),c=this.value;if(c<0!==f.sign)return this.subtract(f.negate());var u=f.value;if(f.isSmall){if(E(c+u))return new p(c+u);u=_(Math.abs(u))}return new d(V(u,Math.abs(c)),c<0)},p.prototype.plus=p.prototype.add,g.prototype.add=function(m){return new g(this.value+H(m).value)},g.prototype.plus=g.prototype.add;function q(m,f){var c=m.length,u=f.length,b=new Array(c),T=0,B=n,U,ee;for(U=0;U<u;U++)ee=m[U]-T-f[U],ee<0?(ee+=B,T=1):T=0,b[U]=ee;for(U=u;U<c;U++){if(ee=m[U]-T,ee<0)ee+=B;else{b[U++]=ee;break}b[U]=ee}for(;U<c;U++)b[U]=m[U];return P(b),b}function Y(m,f,c){var u;return te(m,f)>=0?u=q(m,f):(u=q(f,m),c=!c),u=I(u),typeof u=="number"?(c&&(u=-u),new p(u)):new d(u,c)}function y(m,f,c){var u=m.length,b=new Array(u),T=-f,B=n,U,ee;for(U=0;U<u;U++)ee=m[U]+T,T=Math.floor(ee/B),ee%=B,b[U]=ee<0?ee+B:ee;return b=I(b),typeof b=="number"?(c&&(b=-b),new p(b)):new d(b,c)}d.prototype.subtract=function(m){var f=H(m);if(this.sign!==f.sign)return this.add(f.negate());var c=this.value,u=f.value;return f.isSmall?y(c,Math.abs(u),this.sign):Y(c,u,this.sign)},d.prototype.minus=d.prototype.subtract,p.prototype.subtract=function(m){var f=H(m),c=this.value;if(c<0!==f.sign)return this.add(f.negate());var u=f.value;return f.isSmall?new p(c-u):y(u,Math.abs(c),c>=0)},p.prototype.minus=p.prototype.subtract,g.prototype.subtract=function(m){return new g(this.value-H(m).value)},g.prototype.minus=g.prototype.subtract,d.prototype.negate=function(){return new d(this.value,!this.sign)},p.prototype.negate=function(){var m=this.sign,f=new p(-this.value);return f.sign=!m,f},g.prototype.negate=function(){return new g(-this.value)},d.prototype.abs=function(){return new d(this.value,!1)},p.prototype.abs=function(){return new p(Math.abs(this.value))},g.prototype.abs=function(){return new g(this.value>=0?this.value:-this.value)};function x(m,f){var c=m.length,u=f.length,b=c+u,T=C(b),B=n,U,ee,ge,ve,_e;for(ge=0;ge<c;++ge){ve=m[ge];for(var Se=0;Se<u;++Se)_e=f[Se],U=ve*_e+T[ge+Se],ee=Math.floor(U/B),T[ge+Se]=U-ee*B,T[ge+Se+1]+=ee}return P(T),T}function S(m,f){var c=m.length,u=new Array(c),b=n,T=0,B,U;for(U=0;U<c;U++)B=m[U]*f+T,T=Math.floor(B/b),u[U]=B-T*b;for(;T>0;)u[U++]=T%b,T=Math.floor(T/b);return u}function k(m,f){for(var c=[];f-- >0;)c.push(0);return c.concat(m)}function $(m,f){var c=Math.max(m.length,f.length);if(c<=30)return x(m,f);c=Math.ceil(c/2);var u=m.slice(c),b=m.slice(0,c),T=f.slice(c),B=f.slice(0,c),U=$(b,B),ee=$(u,T),ge=$(N(b,u),N(B,T)),ve=N(N(U,k(q(q(ge,U),ee),c)),k(ee,2*c));return P(ve),ve}function W(m,f){return-.012*m-.012*f+15e-6*m*f>0}d.prototype.multiply=function(m){var f=H(m),c=this.value,u=f.value,b=this.sign!==f.sign,T;if(f.isSmall){if(u===0)return h[0];if(u===1)return this;if(u===-1)return this.negate();if(T=Math.abs(u),T<n)return new d(S(c,T),b);u=_(T)}return W(c.length,u.length)?new d($(c,u),b):new d(x(c,u),b)},d.prototype.times=d.prototype.multiply;function j(m,f,c){return m<n?new d(S(f,m),c):new d(x(f,_(m)),c)}p.prototype._multiplyBySmall=function(m){return E(m.value*this.value)?new p(m.value*this.value):j(Math.abs(m.value),_(Math.abs(this.value)),this.sign!==m.sign)},d.prototype._multiplyBySmall=function(m){return m.value===0?h[0]:m.value===1?this:m.value===-1?this.negate():j(Math.abs(m.value),this.value,this.sign!==m.sign)},p.prototype.multiply=function(m){return H(m)._multiplyBySmall(this)},p.prototype.times=p.prototype.multiply,g.prototype.multiply=function(m){return new g(this.value*H(m).value)},g.prototype.times=g.prototype.multiply;function O(m){var f=m.length,c=C(f+f),u=n,b,T,B,U,ee;for(B=0;B<f;B++){U=m[B],T=0-U*U;for(var ge=B;ge<f;ge++)ee=m[ge],b=2*(U*ee)+c[B+ge]+T,T=Math.floor(b/u),c[B+ge]=b-T*u;c[B+f]=T}return P(c),c}d.prototype.square=function(){return new d(O(this.value),!1)},p.prototype.square=function(){var m=this.value*this.value;return E(m)?new p(m):new d(O(_(Math.abs(this.value))),!1)},g.prototype.square=function(m){return new g(this.value*this.value)};function R(m,f){var c=m.length,u=f.length,b=n,T=C(f.length),B=f[u-1],U=Math.ceil(b/(2*B)),ee=S(m,U),ge=S(f,U),ve,_e,Se,Zt,Wt,zl,Vl;for(ee.length<=c&&ee.push(0),ge.push(0),B=ge[u-1],_e=c-u;_e>=0;_e--){for(ve=b-1,ee[_e+u]!==B&&(ve=Math.floor((ee[_e+u]*b+ee[_e+u-1])/B)),Se=0,Zt=0,zl=ge.length,Wt=0;Wt<zl;Wt++)Se+=ve*ge[Wt],Vl=Math.floor(Se/b),Zt+=ee[_e+Wt]-(Se-Vl*b),Se=Vl,Zt<0?(ee[_e+Wt]=Zt+b,Zt=-1):(ee[_e+Wt]=Zt,Zt=0);for(;Zt!==0;){for(ve-=1,Se=0,Wt=0;Wt<zl;Wt++)Se+=ee[_e+Wt]-b+ge[Wt],Se<0?(ee[_e+Wt]=Se+b,Se=0):(ee[_e+Wt]=Se,Se=1);Zt+=Se}T[_e]=ve}return ee=D(ee,U)[0],[I(T),I(ee)]}function F(m,f){for(var c=m.length,u=f.length,b=[],T=[],B=n,U,ee,ge,ve,_e;c;){if(T.unshift(m[--c]),P(T),te(T,f)<0){b.push(0);continue}ee=T.length,ge=T[ee-1]*B+T[ee-2],ve=f[u-1]*B+f[u-2],ee>u&&(ge=(ge+1)*B),U=Math.ceil(ge/ve);do{if(_e=S(f,U),te(_e,T)<=0)break;U--}while(U);b.push(U),T=q(T,_e)}return b.reverse(),[I(b),I(T)]}function D(m,f){var c=m.length,u=C(c),b=n,T,B,U,ee;for(U=0,T=c-1;T>=0;--T)ee=U*b+m[T],B=A(ee/f),U=ee-B*f,u[T]=B|0;return[u,U|0]}function G(m,f){var c,u=H(f);if(l)return[new g(m.value/u.value),new g(m.value%u.value)];var b=m.value,T=u.value,B;if(T===0)throw new Error("Cannot divide by zero");if(m.isSmall)return u.isSmall?[new p(A(b/T)),new p(b%T)]:[h[0],m];if(u.isSmall){if(T===1)return[m,h[0]];if(T==-1)return[m.negate(),h[0]];var U=Math.abs(T);if(U<n){c=D(b,U),B=I(c[0]);var ee=c[1];return m.sign&&(ee=-ee),typeof B=="number"?(m.sign!==u.sign&&(B=-B),[new p(B),new p(ee)]):[new d(B,m.sign!==u.sign),new p(ee)]}T=_(U)}var ge=te(b,T);if(ge===-1)return[h[0],m];if(ge===0)return[h[m.sign===u.sign?1:-1],h[0]];b.length+T.length<=200?c=R(b,T):c=F(b,T),B=c[0];var ve=m.sign!==u.sign,_e=c[1],Se=m.sign;return typeof B=="number"?(ve&&(B=-B),B=new p(B)):B=new d(B,ve),typeof _e=="number"?(Se&&(_e=-_e),_e=new p(_e)):_e=new d(_e,Se),[B,_e]}d.prototype.divmod=function(m){var f=G(this,m);return{quotient:f[0],remainder:f[1]}},g.prototype.divmod=p.prototype.divmod=d.prototype.divmod,d.prototype.divide=function(m){return G(this,m)[0]},g.prototype.over=g.prototype.divide=function(m){return new g(this.value/H(m).value)},p.prototype.over=p.prototype.divide=d.prototype.over=d.prototype.divide,d.prototype.mod=function(m){return G(this,m)[1]},g.prototype.mod=g.prototype.remainder=function(m){return new g(this.value%H(m).value)},p.prototype.remainder=p.prototype.mod=d.prototype.remainder=d.prototype.mod,d.prototype.pow=function(m){var f=H(m),c=this.value,u=f.value,b,T,B;if(u===0)return h[1];if(c===0)return h[0];if(c===1)return h[1];if(c===-1)return f.isEven()?h[1]:h[-1];if(f.sign)return h[0];if(!f.isSmall)throw new Error("The exponent "+f.toString()+" is too large.");if(this.isSmall&&E(b=Math.pow(c,u)))return new p(A(b));for(T=this,B=h[1];u&!0&&(B=B.times(T),--u),u!==0;)u/=2,T=T.square();return B},p.prototype.pow=d.prototype.pow,g.prototype.pow=function(m){var f=H(m),c=this.value,u=f.value,b=BigInt(0),T=BigInt(1),B=BigInt(2);if(u===b)return h[1];if(c===b)return h[0];if(c===T)return h[1];if(c===BigInt(-1))return f.isEven()?h[1]:h[-1];if(f.isNegative())return new g(b);for(var U=this,ee=h[1];(u&T)===T&&(ee=ee.times(U),--u),u!==b;)u/=B,U=U.square();return ee},d.prototype.modPow=function(m,f){if(m=H(m),f=H(f),f.isZero())throw new Error("Cannot take modPow with modulus 0");var c=h[1],u=this.mod(f);for(m.isNegative()&&(m=m.multiply(h[-1]),u=u.modInv(f));m.isPositive();){if(u.isZero())return h[0];m.isOdd()&&(c=c.multiply(u).mod(f)),m=m.divide(2),u=u.square().mod(f)}return c},g.prototype.modPow=p.prototype.modPow=d.prototype.modPow;function te(m,f){if(m.length!==f.length)return m.length>f.length?1:-1;for(var c=m.length-1;c>=0;c--)if(m[c]!==f[c])return m[c]>f[c]?1:-1;return 0}d.prototype.compareAbs=function(m){var f=H(m),c=this.value,u=f.value;return f.isSmall?1:te(c,u)},p.prototype.compareAbs=function(m){var f=H(m),c=Math.abs(this.value),u=f.value;return f.isSmall?(u=Math.abs(u),c===u?0:c>u?1:-1):-1},g.prototype.compareAbs=function(m){var f=this.value,c=H(m).value;return f=f>=0?f:-f,c=c>=0?c:-c,f===c?0:f>c?1:-1},d.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var f=H(m),c=this.value,u=f.value;return this.sign!==f.sign?f.sign?1:-1:f.isSmall?this.sign?-1:1:te(c,u)*(this.sign?-1:1)},d.prototype.compareTo=d.prototype.compare,p.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var f=H(m),c=this.value,u=f.value;return f.isSmall?c==u?0:c>u?1:-1:c<0!==f.sign?c<0?-1:1:c<0?1:-1},p.prototype.compareTo=p.prototype.compare,g.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var f=this.value,c=H(m).value;return f===c?0:f>c?1:-1},g.prototype.compareTo=g.prototype.compare,d.prototype.equals=function(m){return this.compare(m)===0},g.prototype.eq=g.prototype.equals=p.prototype.eq=p.prototype.equals=d.prototype.eq=d.prototype.equals,d.prototype.notEquals=function(m){return this.compare(m)!==0},g.prototype.neq=g.prototype.notEquals=p.prototype.neq=p.prototype.notEquals=d.prototype.neq=d.prototype.notEquals,d.prototype.greater=function(m){return this.compare(m)>0},g.prototype.gt=g.prototype.greater=p.prototype.gt=p.prototype.greater=d.prototype.gt=d.prototype.greater,d.prototype.lesser=function(m){return this.compare(m)<0},g.prototype.lt=g.prototype.lesser=p.prototype.lt=p.prototype.lesser=d.prototype.lt=d.prototype.lesser,d.prototype.greaterOrEquals=function(m){return this.compare(m)>=0},g.prototype.geq=g.prototype.greaterOrEquals=p.prototype.geq=p.prototype.greaterOrEquals=d.prototype.geq=d.prototype.greaterOrEquals,d.prototype.lesserOrEquals=function(m){return this.compare(m)<=0},g.prototype.leq=g.prototype.lesserOrEquals=p.prototype.leq=p.prototype.lesserOrEquals=d.prototype.leq=d.prototype.lesserOrEquals,d.prototype.isEven=function(){return(this.value[0]&1)===0},p.prototype.isEven=function(){return(this.value&1)===0},g.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},d.prototype.isOdd=function(){return(this.value[0]&1)===1},p.prototype.isOdd=function(){return(this.value&1)===1},g.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},d.prototype.isPositive=function(){return!this.sign},p.prototype.isPositive=function(){return this.value>0},g.prototype.isPositive=p.prototype.isPositive,d.prototype.isNegative=function(){return this.sign},p.prototype.isNegative=function(){return this.value<0},g.prototype.isNegative=p.prototype.isNegative,d.prototype.isUnit=function(){return!1},p.prototype.isUnit=function(){return Math.abs(this.value)===1},g.prototype.isUnit=function(){return this.abs().value===BigInt(1)},d.prototype.isZero=function(){return!1},p.prototype.isZero=function(){return this.value===0},g.prototype.isZero=function(){return this.value===BigInt(0)},d.prototype.isDivisibleBy=function(m){var f=H(m);return f.isZero()?!1:f.isUnit()?!0:f.compareAbs(2)===0?this.isEven():this.mod(f).isZero()},g.prototype.isDivisibleBy=p.prototype.isDivisibleBy=d.prototype.isDivisibleBy;function re(m){var f=m.abs();if(f.isUnit())return!1;if(f.equals(2)||f.equals(3)||f.equals(5))return!0;if(f.isEven()||f.isDivisibleBy(3)||f.isDivisibleBy(5))return!1;if(f.lesser(49))return!0}function fe(m,f){for(var c=m.prev(),u=c,b=0,T,B,U;u.isEven();)u=u.divide(2),b++;e:for(B=0;B<f.length;B++)if(!m.lesser(f[B])&&(U=t(f[B]).modPow(u,m),!(U.isUnit()||U.equals(c)))){for(T=b-1;T!=0;T--){if(U=U.square().mod(m),U.isUnit())return!1;if(U.equals(c))continue e}return!1}return!0}d.prototype.isPrime=function(m){var f=re(this);if(f!==r)return f;var c=this.abs(),u=c.bitLength();if(u<=64)return fe(c,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var b=Math.log(2)*u.toJSNumber(),T=Math.ceil(m===!0?2*Math.pow(b,2):b),B=[],U=0;U<T;U++)B.push(t(U+2));return fe(c,B)},g.prototype.isPrime=p.prototype.isPrime=d.prototype.isPrime,d.prototype.isProbablePrime=function(m,f){var c=re(this);if(c!==r)return c;for(var u=this.abs(),b=m===r?5:m,T=[],B=0;B<b;B++)T.push(t.randBetween(2,u.minus(2),f));return fe(u,T)},g.prototype.isProbablePrime=p.prototype.isProbablePrime=d.prototype.isProbablePrime,d.prototype.modInv=function(m){for(var f=t.zero,c=t.one,u=H(m),b=this.abs(),T,B,U;!b.isZero();)T=u.divide(b),B=f,U=u,f=c,u=b,c=B.subtract(T.multiply(c)),b=U.subtract(T.multiply(b));if(!u.isUnit())throw new Error(this.toString()+" and "+m.toString()+" are not co-prime");return f.compare(0)===-1&&(f=f.add(m)),this.isNegative()?f.negate():f},g.prototype.modInv=p.prototype.modInv=d.prototype.modInv,d.prototype.next=function(){var m=this.value;return this.sign?y(m,1,this.sign):new d(V(m,1),this.sign)},p.prototype.next=function(){var m=this.value;return m+1<i?new p(m+1):new d(s,!1)},g.prototype.next=function(){return new g(this.value+BigInt(1))},d.prototype.prev=function(){var m=this.value;return this.sign?new d(V(m,1),!0):y(m,1,this.sign)},p.prototype.prev=function(){var m=this.value;return m-1>-i?new p(m-1):new d(s,!0)},g.prototype.prev=function(){return new g(this.value-BigInt(1))};for(var xe=[1];2*xe[xe.length-1]<=n;)xe.push(2*xe[xe.length-1]);var Te=xe.length,Ae=xe[Te-1];function Ee(m){return Math.abs(m)<=n}d.prototype.shiftLeft=function(m){var f=H(m).toJSNumber();if(!Ee(f))throw new Error(String(f)+" is too large for shifting.");if(f<0)return this.shiftRight(-f);var c=this;if(c.isZero())return c;for(;f>=Te;)c=c.multiply(Ae),f-=Te-1;return c.multiply(xe[f])},g.prototype.shiftLeft=p.prototype.shiftLeft=d.prototype.shiftLeft,d.prototype.shiftRight=function(m){var f,c=H(m).toJSNumber();if(!Ee(c))throw new Error(String(c)+" is too large for shifting.");if(c<0)return this.shiftLeft(-c);for(var u=this;c>=Te;){if(u.isZero()||u.isNegative()&&u.isUnit())return u;f=G(u,Ae),u=f[1].isNegative()?f[0].prev():f[0],c-=Te-1}return f=G(u,xe[c]),f[1].isNegative()?f[0].prev():f[0]},g.prototype.shiftRight=p.prototype.shiftRight=d.prototype.shiftRight;function J(m,f,c){f=H(f);for(var u=m.isNegative(),b=f.isNegative(),T=u?m.not():m,B=b?f.not():f,U=0,ee=0,ge=null,ve=null,_e=[];!T.isZero()||!B.isZero();)ge=G(T,Ae),U=ge[1].toJSNumber(),u&&(U=Ae-1-U),ve=G(B,Ae),ee=ve[1].toJSNumber(),b&&(ee=Ae-1-ee),T=ge[0],B=ve[0],_e.push(c(U,ee));for(var Se=c(u?1:0,b?1:0)!==0?t(-1):t(0),Zt=_e.length-1;Zt>=0;Zt-=1)Se=Se.multiply(Ae).add(t(_e[Zt]));return Se}d.prototype.not=function(){return this.negate().prev()},g.prototype.not=p.prototype.not=d.prototype.not,d.prototype.and=function(m){return J(this,m,function(f,c){return f&c})},g.prototype.and=p.prototype.and=d.prototype.and,d.prototype.or=function(m){return J(this,m,function(f,c){return f|c})},g.prototype.or=p.prototype.or=d.prototype.or,d.prototype.xor=function(m){return J(this,m,function(f,c){return f^c})},g.prototype.xor=p.prototype.xor=d.prototype.xor;var ue=1<<30,oe=(n&-n)*(n&-n)|ue;function de(m){var f=m.value,c=typeof f=="number"?f|ue:typeof f=="bigint"?f|BigInt(ue):f[0]+f[1]*n|oe;return c&-c}function Ce(m,f){if(f.compareTo(m)<=0){var c=Ce(m,f.square(f)),u=c.p,b=c.e,T=u.multiply(f);return T.compareTo(m)<=0?{p:T,e:b*2+1}:{p:u,e:b*2}}return{p:t(1),e:0}}d.prototype.bitLength=function(){var m=this;return m.compareTo(t(0))<0&&(m=m.negate().subtract(t(1))),m.compareTo(t(0))===0?t(0):t(Ce(m,t(2)).e).add(t(1))},g.prototype.bitLength=p.prototype.bitLength=d.prototype.bitLength;function M(m,f){return m=H(m),f=H(f),m.greater(f)?m:f}function w(m,f){return m=H(m),f=H(f),m.lesser(f)?m:f}function v(m,f){if(m=H(m).abs(),f=H(f).abs(),m.equals(f))return m;if(m.isZero())return f;if(f.isZero())return m;for(var c=h[1],u,b;m.isEven()&&f.isEven();)u=w(de(m),de(f)),m=m.divide(u),f=f.divide(u),c=c.multiply(u);for(;m.isEven();)m=m.divide(de(m));do{for(;f.isEven();)f=f.divide(de(f));m.greater(f)&&(b=f,f=m,m=b),f=f.subtract(m)}while(!f.isZero());return c.isUnit()?m:m.multiply(c)}function L(m,f){return m=H(m).abs(),f=H(f).abs(),m.divide(v(m,f)).multiply(f)}function K(m,f,c){m=H(m),f=H(f);var u=c||Math.random,b=w(m,f),T=M(m,f),B=T.subtract(b).add(1);if(B.isSmall)return b.add(Math.floor(u()*B));for(var U=le(B,n).value,ee=[],ge=!0,ve=0;ve<U.length;ve++){var _e=ge?U[ve]+(ve+1<U.length?U[ve+1]/n:0):n,Se=A(u()*_e);ee.push(Se),Se<U[ve]&&(ge=!1)}return b.add(h.fromArray(ee,n,!1))}var Q=function(m,f,c,u){c=c||a,m=String(m),u||(m=m.toLowerCase(),c=c.toLowerCase());var b=m.length,T,B=Math.abs(f),U={};for(T=0;T<c.length;T++)U[c[T]]=T;for(T=0;T<b;T++){var ee=m[T];if(ee!=="-"&&ee in U&&U[ee]>=B){if(ee==="1"&&B===1)continue;throw new Error(ee+" is not a valid digit in base "+f+".")}}f=H(f);var ge=[],ve=m[0]==="-";for(T=ve?1:0;T<m.length;T++){var ee=m[T];if(ee in U)ge.push(H(U[ee]));else if(ee==="<"){var _e=T;do T++;while(m[T]!==">"&&T<m.length);ge.push(H(m.slice(_e+1,T)))}else throw new Error(ee+" is not a valid character")}return ne(ge,f,ve)};function ne(m,f,c){var u=h[0],b=h[1],T;for(T=m.length-1;T>=0;T--)u=u.add(m[T].times(b)),b=b.times(f);return c?u.negate():u}function ae(m,f){return f=f||a,m<f.length?f[m]:"<"+m+">"}function le(m,f){if(f=t(f),f.isZero()){if(m.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(f.equals(-1)){if(m.isZero())return{value:[0],isNegative:!1};if(m.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-m.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var c=Array.apply(null,Array(m.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return c.unshift([1]),{value:[].concat.apply([],c),isNegative:!1}}var u=!1;if(m.isNegative()&&f.isPositive()&&(u=!0,m=m.abs()),f.isUnit())return m.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(m.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:u};for(var b=[],T=m,B;T.isNegative()||T.compareAbs(f)>=0;){B=T.divmod(f),T=B.quotient;var U=B.remainder;U.isNegative()&&(U=f.minus(U).abs(),T=T.next()),b.push(U.toJSNumber())}return b.push(T.toJSNumber()),{value:b.reverse(),isNegative:u}}function ie(m,f,c){var u=le(m,f);return(u.isNegative?"-":"")+u.value.map(function(b){return ae(b,c)}).join("")}d.prototype.toArray=function(m){return le(this,m)},p.prototype.toArray=function(m){return le(this,m)},g.prototype.toArray=function(m){return le(this,m)},d.prototype.toString=function(m,f){if(m===r&&(m=10),m!==10)return ie(this,m,f);for(var c=this.value,u=c.length,b=String(c[--u]),T="0000000",B;--u>=0;)B=String(c[u]),b+=T.slice(B.length)+B;var U=this.sign?"-":"";return U+b},p.prototype.toString=function(m,f){return m===r&&(m=10),m!=10?ie(this,m,f):String(this.value)},g.prototype.toString=p.prototype.toString,g.prototype.toJSON=d.prototype.toJSON=p.prototype.toJSON=function(){return this.toString()},d.prototype.valueOf=function(){return parseInt(this.toString(),10)},d.prototype.toJSNumber=d.prototype.valueOf,p.prototype.valueOf=function(){return this.value},p.prototype.toJSNumber=p.prototype.valueOf,g.prototype.valueOf=g.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function ye(m){if(E(+m)){var f=+m;if(f===A(f))return l?new g(BigInt(f)):new p(f);throw new Error("Invalid integer: "+m)}var c=m[0]==="-";c&&(m=m.slice(1));var u=m.split(/e/i);if(u.length>2)throw new Error("Invalid integer: "+u.join("e"));if(u.length===2){var b=u[1];if(b[0]==="+"&&(b=b.slice(1)),b=+b,b!==A(b)||!E(b))throw new Error("Invalid integer: "+b+" is not a valid exponent.");var T=u[0],B=T.indexOf(".");if(B>=0&&(b-=T.length-B-1,T=T.slice(0,B)+T.slice(B+1)),b<0)throw new Error("Cannot include negative exponent part for integers");T+=new Array(b+1).join("0"),m=T}var U=/^([0-9][0-9]*)$/.test(m);if(!U)throw new Error("Invalid integer: "+m);if(l)return new g(BigInt(c?"-"+m:m));for(var ee=[],ge=m.length,ve=o,_e=ge-ve;ge>0;)ee.push(+m.slice(_e,ge)),_e-=ve,_e<0&&(_e=0),ge-=ve;return P(ee),new d(ee,c)}function pe(m){if(l)return new g(BigInt(m));if(E(m)){if(m!==A(m))throw new Error(m+" is not an integer.");return new p(m)}return ye(m.toString())}function H(m){return typeof m=="number"?pe(m):typeof m=="string"?ye(m):typeof m=="bigint"?new g(m):m}for(var X=0;X<1e3;X++)h[X]=H(X),X>0&&(h[-X]=H(-X));return h.one=h[1],h.zero=h[0],h.minusOne=h[-1],h.max=M,h.min=w,h.gcd=v,h.lcm=L,h.isInstance=function(m){return m instanceof d||m instanceof p||m instanceof g},h.randBetween=K,h.fromArray=function(m,f,c){return ne(m.map(H),H(f||10),c)},h}();e.hasOwnProperty("exports")&&(e.exports=t)})(Lm);var T9=Lm.exports;const dn=xl(T9),S9={mathpow(e,t){var r;e?r=Lc(e.toString()):r=Lc(e);var n=Lc(Math.pow(10,t||8)),o=r.div(n);return o.toString()},mathpow1(e,t){let r="";if(e&&(r=e.toString()),r.length>t){const n=r.slice(0,r.length-t),o=r.slice(0-t);return n+"."+o}else return t==r.length?"0."+r:"0."+new Array(t-r.length).fill(0).join("")+r},mathlog(e,t){const r=e+"";if(r.includes(".")){const o=r.split(".");let i=new Array(t).fill(0);const s=o[0],a=o[1];for(var n=1;n<=a.length;n++)i.pop();return s+a+i.join("")}return e+new Array(t).fill(0).join("")},plus(e,t){if(e!==""&&t!==""){const r=dn(e),n=dn(t);return r.add(n).toString()}else return 0},minus(e,t){if(e!=""&&t!=""){const r=dn(e),n=dn(t);return r.subtract(n).toString()}else return 0},multiplication(e,t){if(e!=""&&t!=""){const r=dn(e),n=dn(t);return r.multiply(n).toString()}else return 0},division(e,t){if(e!=""&&t!=""){const r=dn(e),n=dn(t);return r.divide(n).toString()}else return 0},async switchNetwork(e){await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+e}]})},async linkWallet({successFn:e,errorFn:t}){if(window.ethereum){try{const r=await window.ethereum.request({method:"eth_requestAccounts"});e(r)}catch(r){t(r)}setTimeout(()=>{window.ethereum&&window.ethereum.on("accountsChanged",function(){window.location.reload()}),window.ethereum&&window.ethereum.on("chainChanged",function(){window.location.reload()})},1e3)}},dealNumber(e,t=0){return e*1>1e4&&e%1e4==0?`${(e/1e4).toFixed()}万`:(e*1).toFixed(t)},copy(e){var t=document.createElement("input");t.setAttribute("id","copyInput"),t.setAttribute("value",e),document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("copyInput").select(),document.execCommand("Copy"),document.getElementById("copyInput").remove()},fixedNumber2(e){let t=e+"";if(t.includes(".")){const r=t.split(".");return r[0]+"."+r[1].slice(0,2)}return t},formatDate(e){let t=new Date(e),r=t.getFullYear(),n=t.getMonth()+1;n=n<10?"0"+n:n;let o=t.getDate();return o=o<10?"0"+o:o,r+"-"+n+"-"+o},getUrlRequest(){const e=window.location.href,t={},r=/[?&]([^=#]+)=([^&#]*)/g;let n;for(;n=r.exec(e);)t[decodeURIComponent(n[1])]=decodeURIComponent(n[2]);return t},openMeiQia(e,t){const r={zh:"tw",en:"en",fr:"en",ja:"ja",kr:"ko",ru:"ru",th:"th",tr:"en",vi:"vi"},n=localStorage.getItem("NFTLANG");window._MEIQIA("language",r[n]||"en"),window._MEIQIA("metadata",{name:e,address:t}),window._MEIQIA("showPanel")}},I9=Object.freeze(S9),$9={userAddress:"",config:{},userInfo:{},langList:[],usdtBalance:0,tokenInfo:{},headerSearch:null},R9=x9({state:$9,mutations:{setUseraddress(e,t){e.userAddress=t},setConfig(e,t){e.config=t},setUserInfo(e,t){e.userInfo=t},setLangList(e,t){e.langList=t},setBalance(e,t){e.usdtBalance=t},setToken(e,t){e.tokenInfo[t.key]=t.value},setHeaderSearch(e,t){console.log(222333),e.headerSearch=t}},actions:{async updateBalance(e){const t=await Ty({address:e.state.config.approveContractAddress,abi:E9.coinAbi,functionName:"balanceOf",args:[e.state.userAddress]});return e.commit("setBalance",I9.mathpow(t,6)),e.state.usdtBalance}}});class O9{constructor(){this.events={}}emit(t,r){this.events[t]&&this.events[t].forEach(function(n){n(r)})}on(t,r){this.events[t]=this.events[t]||[],this.events[t].push(r)}off(t,r){if(this.events[t]){for(var n=0;n<this.events[t].length;n++)if(this.events[t][n]===r){this.events[t].splice(n,1);break}}}}let $i=av(dv);$i.use(i9);$i.use(Ff);$i.use(R9);$i.use(e7);$i.mount("#app");let km=new O9;$i.provide("$bus",km);$i.config.globalProperties.$bus=km;export{$t as F,gl as _,he as a,y2 as b,Xt as c,Df as d,E7 as e,Fg as f,Ug as g,Wg as h,C7 as i,ku as n,Rt as o,N9 as r,W2 as v,Mw as w};
