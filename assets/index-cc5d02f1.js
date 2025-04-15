(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function La(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const se={},qn=[],ot=()=>{},Ip=()=>!1,Cp=/^on[^a-z]/,Ps=t=>Cp.test(t),Fa=t=>t.startsWith("onUpdate:"),pe=Object.assign,$a=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tp=Object.prototype.hasOwnProperty,V=(t,e)=>Tp.call(t,e),N=Array.isArray,Kn=t=>Ns(t)==="[object Map]",Wf=t=>Ns(t)==="[object Set]",$=t=>typeof t=="function",ge=t=>typeof t=="string",Ua=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Vf=t=>oe(t)&&$(t.then)&&$(t.catch),zf=Object.prototype.toString,Ns=t=>zf.call(t),Sp=t=>Ns(t).slice(8,-1),Gf=t=>Ns(t)==="[object Object]",Ba=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kr=La(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ms=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Op=/-(\w)/g,ii=Ms(t=>t.replace(Op,(e,n)=>n?n.toUpperCase():"")),Rp=/\B([A-Z])/g,xn=Ms(t=>t.replace(Rp,"-$1").toLowerCase()),qf=Ms(t=>t.charAt(0).toUpperCase()+t.slice(1)),mo=Ms(t=>t?`on${qf(t)}`:""),Ji=(t,e)=>!Object.is(t,e),Yr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},is=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ap=t=>{const e=ge(t)?Number(t):NaN;return isNaN(e)?t:e};let Lc;const Ko=()=>Lc||(Lc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kn(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ge(i)?Np(i):kn(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ge(t))return t;if(oe(t))return t}}const xp=/;(?![^(]*\))/g,kp=/:([^]+)/,Pp=/\/\*[^]*?\*\//g;function Np(t){const e={};return t.replace(Pp,"").split(xp).forEach(n=>{if(n){const i=n.split(kp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Re(t){let e="";if(ge(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const i=Re(t[n]);i&&(e+=i+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dp=La(Mp);function Kf(t){return!!t||t===""}const jt=t=>ge(t)?t:t==null?"":N(t)||oe(t)&&(t.toString===zf||!$(t.toString))?JSON.stringify(t,Yf,2):String(t),Yf=(t,e)=>e&&e.__v_isRef?Yf(t,e.value):Kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Wf(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!N(e)&&!Gf(e)?String(e):e;let et;class Lp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Fp(t,e=et){e&&e.active&&e.effects.push(t)}function $p(){return et}const Ha=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xf=t=>(t.w&Xt)>0,Qf=t=>(t.n&Xt)>0,Up=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xt},Bp=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Xf(r)&&!Qf(r)?r.delete(t):e[n++]=r,r.w&=~Xt,r.n&=~Xt}e.length=n}},Yo=new WeakMap;let Bi=0,Xt=1;const Xo=30;let tt;const vn=Symbol(""),Qo=Symbol("");class ja{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fp(this,i)}run(){if(!this.active)return this.fn();let e=tt,n=Wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tt,tt=this,Wt=!0,Xt=1<<++Bi,Bi<=Xo?Up(this):Fc(this),this.fn()}finally{Bi<=Xo&&Bp(this),Xt=1<<--Bi,tt=this.parent,Wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tt===this?this.deferStop=!0:this.active&&(Fc(this),this.onStop&&this.onStop(),this.active=!1)}}function Fc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Wt=!0;const Jf=[];function pi(){Jf.push(Wt),Wt=!1}function gi(){const t=Jf.pop();Wt=t===void 0?!0:t}function $e(t,e,n){if(Wt&&tt){let i=Yo.get(t);i||Yo.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Ha()),Zf(r)}}function Zf(t,e){let n=!1;Bi<=Xo?Qf(t)||(t.n|=Xt,n=!Xf(t)):n=!t.has(tt),n&&(t.add(tt),tt.deps.push(t))}function Ot(t,e,n,i,r,s){const o=Yo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&N(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":N(t)?Ba(n)&&a.push(o.get("length")):(a.push(o.get(vn)),Kn(t)&&a.push(o.get(Qo)));break;case"delete":N(t)||(a.push(o.get(vn)),Kn(t)&&a.push(o.get(Qo)));break;case"set":Kn(t)&&a.push(o.get(vn));break}if(a.length===1)a[0]&&Jo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Jo(Ha(l))}}function Jo(t,e){const n=N(t)?t:[...t];for(const i of n)i.computed&&$c(i);for(const i of n)i.computed||$c(i)}function $c(t,e){(t!==tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Hp=La("__proto__,__v_isRef,__isVue"),eh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ua)),jp=Wa(),Wp=Wa(!1,!0),Vp=Wa(!0),Uc=zp();function zp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=G(this);for(let s=0,o=this.length;s<o;s++)$e(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(G)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pi();const i=G(this)[e].apply(this,n);return gi(),i}}),t}function Gp(t){const e=G(this);return $e(e,"has",t),e.hasOwnProperty(t)}function Wa(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?lg:sh:e?rh:ih).get(i))return i;const o=N(i);if(!t){if(o&&V(Uc,r))return Reflect.get(Uc,r,s);if(r==="hasOwnProperty")return Gp}const a=Reflect.get(i,r,s);return(Ua(r)?eh.has(r):Hp(r))||(t||$e(i,"get",r),e)?a:Ae(a)?o&&Ba(r)?a:a.value:oe(a)?t?oh(a):Ga(a):a}}const qp=th(),Kp=th(!0);function th(t=!1){return function(n,i,r,s){let o=n[i];if(ri(o)&&Ae(o)&&!Ae(r))return!1;if(!t&&(!rs(r)&&!ri(r)&&(o=G(o),r=G(r)),!N(n)&&Ae(o)&&!Ae(r)))return o.value=r,!0;const a=N(n)&&Ba(i)?Number(i)<n.length:V(n,i),l=Reflect.set(n,i,r,s);return n===G(s)&&(a?Ji(r,o)&&Ot(n,"set",i,r):Ot(n,"add",i,r)),l}}function Yp(t,e){const n=V(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ot(t,"delete",e,void 0),i}function Xp(t,e){const n=Reflect.has(t,e);return(!Ua(e)||!eh.has(e))&&$e(t,"has",e),n}function Qp(t){return $e(t,"iterate",N(t)?"length":vn),Reflect.ownKeys(t)}const nh={get:jp,set:qp,deleteProperty:Yp,has:Xp,ownKeys:Qp},Jp={get:Vp,set(t,e){return!0},deleteProperty(t,e){return!0}},Zp=pe({},nh,{get:Wp,set:Kp}),Va=t=>t,Ds=t=>Reflect.getPrototypeOf(t);function Dr(t,e,n=!1,i=!1){t=t.__v_raw;const r=G(t),s=G(e);n||(e!==s&&$e(r,"get",e),$e(r,"get",s));const{has:o}=Ds(r),a=i?Va:n?Ka:Zi;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Lr(t,e=!1){const n=this.__v_raw,i=G(n),r=G(t);return e||(t!==r&&$e(i,"has",t),$e(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Fr(t,e=!1){return t=t.__v_raw,!e&&$e(G(t),"iterate",vn),Reflect.get(t,"size",t)}function Bc(t){t=G(t);const e=G(this);return Ds(e).has.call(e,t)||(e.add(t),Ot(e,"add",t,t)),this}function Hc(t,e){e=G(e);const n=G(this),{has:i,get:r}=Ds(n);let s=i.call(n,t);s||(t=G(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Ji(e,o)&&Ot(n,"set",t,e):Ot(n,"add",t,e),this}function jc(t){const e=G(this),{has:n,get:i}=Ds(e);let r=n.call(e,t);r||(t=G(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Ot(e,"delete",t,void 0),s}function Wc(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function $r(t,e){return function(i,r){const s=this,o=s.__v_raw,a=G(o),l=e?Va:t?Ka:Zi;return!t&&$e(a,"iterate",vn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ur(t,e,n){return function(...i){const r=this.__v_raw,s=G(r),o=Kn(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Va:e?Ka:Zi;return!e&&$e(s,"iterate",l?Qo:vn),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Nt(t){return function(...e){return t==="delete"?!1:this}}function eg(){const t={get(s){return Dr(this,s)},get size(){return Fr(this)},has:Lr,add:Bc,set:Hc,delete:jc,clear:Wc,forEach:$r(!1,!1)},e={get(s){return Dr(this,s,!1,!0)},get size(){return Fr(this)},has:Lr,add:Bc,set:Hc,delete:jc,clear:Wc,forEach:$r(!1,!0)},n={get(s){return Dr(this,s,!0)},get size(){return Fr(this,!0)},has(s){return Lr.call(this,s,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:$r(!0,!1)},i={get(s){return Dr(this,s,!0,!0)},get size(){return Fr(this,!0)},has(s){return Lr.call(this,s,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:$r(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ur(s,!1,!1),n[s]=Ur(s,!0,!1),e[s]=Ur(s,!1,!0),i[s]=Ur(s,!0,!0)}),[t,n,e,i]}const[tg,ng,ig,rg]=eg();function za(t,e){const n=e?t?rg:ig:t?ng:tg;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(V(n,r)&&r in i?n:i,r,s)}const sg={get:za(!1,!1)},og={get:za(!1,!0)},ag={get:za(!0,!1)},ih=new WeakMap,rh=new WeakMap,sh=new WeakMap,lg=new WeakMap;function cg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ug(t){return t.__v_skip||!Object.isExtensible(t)?0:cg(Sp(t))}function Ga(t){return ri(t)?t:qa(t,!1,nh,sg,ih)}function fg(t){return qa(t,!1,Zp,og,rh)}function oh(t){return qa(t,!0,Jp,ag,sh)}function qa(t,e,n,i,r){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=ug(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Yn(t){return ri(t)?Yn(t.__v_raw):!!(t&&t.__v_isReactive)}function ri(t){return!!(t&&t.__v_isReadonly)}function rs(t){return!!(t&&t.__v_isShallow)}function ah(t){return Yn(t)||ri(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function lh(t){return is(t,"__v_skip",!0),t}const Zi=t=>oe(t)?Ga(t):t,Ka=t=>oe(t)?oh(t):t;function ch(t){Wt&&tt&&(t=G(t),Zf(t.dep||(t.dep=Ha())))}function uh(t,e){t=G(t);const n=t.dep;n&&Jo(n)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return hg(t,!1)}function hg(t,e){return Ae(t)?t:new dg(t,e)}class dg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Zi(e)}get value(){return ch(this),this._value}set value(e){const n=this.__v_isShallow||rs(e)||ri(e);e=n?e:G(e),Ji(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zi(e),uh(this))}}function er(t){return Ae(t)?t.value:t}const _g={get:(t,e,n)=>er(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function fh(t){return Yn(t)?t:new Proxy(t,_g)}class pg{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ja(e,()=>{this._dirty||(this._dirty=!0,uh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=G(this);return ch(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function gg(t,e,n=!1){let i,r;const s=$(t);return s?(i=t,r=ot):(i=t.get,r=t.set),new pg(i,r,s||!r,n)}function Vt(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Ls(s,e,n)}return r}function Qe(t,e,n,i){if($(t)){const s=Vt(t,e,n,i);return s&&Vf(s)&&s.catch(o=>{Ls(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Qe(t[s],e,n,i));return r}function Ls(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Vt(l,null,10,[t,o,a]);return}}mg(t,n,r,i)}function mg(t,e,n,i=!0){console.error(t)}let tr=!1,Zo=!1;const Oe=[];let pt=0;const Xn=[];let bt=null,hn=0;const hh=Promise.resolve();let Ya=null;function vg(t){const e=Ya||hh;return t?e.then(this?t.bind(this):t):e}function yg(t){let e=pt+1,n=Oe.length;for(;e<n;){const i=e+n>>>1;nr(Oe[i])<t?e=i+1:n=i}return e}function Xa(t){(!Oe.length||!Oe.includes(t,tr&&t.allowRecurse?pt+1:pt))&&(t.id==null?Oe.push(t):Oe.splice(yg(t.id),0,t),dh())}function dh(){!tr&&!Zo&&(Zo=!0,Ya=hh.then(ph))}function Eg(t){const e=Oe.indexOf(t);e>pt&&Oe.splice(e,1)}function bg(t){N(t)?Xn.push(...t):(!bt||!bt.includes(t,t.allowRecurse?hn+1:hn))&&Xn.push(t),dh()}function Vc(t,e=tr?pt+1:0){for(;e<Oe.length;e++){const n=Oe[e];n&&n.pre&&(Oe.splice(e,1),e--,n())}}function _h(t){if(Xn.length){const e=[...new Set(Xn)];if(Xn.length=0,bt){bt.push(...e);return}for(bt=e,bt.sort((n,i)=>nr(n)-nr(i)),hn=0;hn<bt.length;hn++)bt[hn]();bt=null,hn=0}}const nr=t=>t.id==null?1/0:t.id,wg=(t,e)=>{const n=nr(t)-nr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ph(t){Zo=!1,tr=!0,Oe.sort(wg);const e=ot;try{for(pt=0;pt<Oe.length;pt++){const n=Oe[pt];n&&n.active!==!1&&Vt(n,null,14)}}finally{pt=0,Oe.length=0,_h(),tr=!1,Ya=null,(Oe.length||Xn.length)&&ph()}}function Ig(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||se;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||se;h&&(r=n.map(p=>ge(p)?p.trim():p)),f&&(r=n.map(qo))}let a,l=i[a=mo(e)]||i[a=mo(ii(e))];!l&&s&&(l=i[a=mo(xn(e))]),l&&Qe(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qe(c,t,6,r)}}function gh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=gh(c,e,!0);u&&(a=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(oe(t)&&i.set(t,null),null):(N(s)?s.forEach(l=>o[l]=null):pe(o,s),oe(t)&&i.set(t,o),o)}function Fs(t,e){return!t||!Ps(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,xn(e))||V(t,e))}let Ye=null,$s=null;function ss(t){const e=Ye;return Ye=t,$s=t&&t.type.__scopeId||null,e}function Cg(t){$s=t}function Tg(){$s=null}function ea(t,e=Ye,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&tu(-1);const s=ss(e);let o;try{o=t(...r)}finally{ss(s),i._d&&tu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vo(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:E,inheritAttrs:b}=t;let P,W;const q=ss(t);try{if(n.shapeFlag&4){const k=r||i;P=_t(u.call(k,k,f,s,p,h,E)),W=l}else{const k=e;P=_t(k.length>1?k(s,{attrs:l,slots:a,emit:c}):k(s,null)),W=e.props?l:Sg(l)}}catch(k){Gi.length=0,Ls(k,t,1),P=ce(at)}let K=P;if(W&&b!==!1){const k=Object.keys(W),{shapeFlag:de}=K;k.length&&de&7&&(o&&k.some(Fa)&&(W=Og(W,o)),K=Qt(K,W))}return n.dirs&&(K=Qt(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),P=K,ss(q),P}const Sg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ps(n))&&((e||(e={}))[n]=t[n]);return e},Og=(t,e)=>{const n={};for(const i in t)(!Fa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Rg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?zc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Fs(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zc(i,o,c):!0:!!o;return!1}function zc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Fs(n,s))return!0}return!1}function Ag({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xg=t=>t.__isSuspense;function kg(t,e){e&&e.pendingBranch?N(t)?e.effects.push(...t):e.effects.push(t):bg(t)}const Br={};function yo(t,e,n){return mh(t,e,n)}function mh(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=se){var a;const l=$p()===((a=Ce)==null?void 0:a.scope)?Ce:null;let c,u=!1,f=!1;if(Ae(t)?(c=()=>t.value,u=rs(t)):Yn(t)?(c=()=>t,i=!0):N(t)?(f=!0,u=t.some(k=>Yn(k)||rs(k)),c=()=>t.map(k=>{if(Ae(k))return k.value;if(Yn(k))return pn(k);if($(k))return Vt(k,l,2)})):$(t)?e?c=()=>Vt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Qe(t,l,3,[p])}:c=ot,e&&i){const k=c;c=()=>pn(k())}let h,p=k=>{h=q.onStop=()=>{Vt(k,l,4)}},E;if(rr)if(p=ot,e?n&&Qe(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const k=Rm();E=k.__watcherHandles||(k.__watcherHandles=[])}else return ot;let b=f?new Array(t.length).fill(Br):Br;const P=()=>{if(q.active)if(e){const k=q.run();(i||u||(f?k.some((de,Pe)=>Ji(de,b[Pe])):Ji(k,b)))&&(h&&h(),Qe(e,l,3,[k,b===Br?void 0:f&&b[0]===Br?[]:b,p]),b=k)}else q.run()};P.allowRecurse=!!e;let W;r==="sync"?W=P:r==="post"?W=()=>Ne(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),W=()=>Xa(P));const q=new ja(c,W);e?n?P():b=q.run():r==="post"?Ne(q.run.bind(q),l&&l.suspense):q.run();const K=()=>{q.stop(),l&&l.scope&&$a(l.scope.effects,q)};return E&&E.push(K),K}function Pg(t,e,n){const i=this.proxy,r=ge(t)?t.includes(".")?vh(i,t):()=>i[t]:t.bind(i,i);let s;$(e)?s=e:(s=e.handler,n=e);const o=Ce;oi(this);const a=mh(r,s.bind(i),n);return o?oi(o):yn(),a}function vh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function pn(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))pn(t.value,e);else if(N(t))for(let n=0;n<t.length;n++)pn(t[n],e);else if(Wf(t)||Kn(t))t.forEach(n=>{pn(n,e)});else if(Gf(t))for(const n in t)pn(t[n],e);return t}function yh(t,e){const n=Ye;if(n===null)return t;const i=Vs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=se]=e[s];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&pn(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function on(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(pi(),Qe(l,n,8,[t.el,a,t,e]),gi())}}function Ng(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vr(()=>{t.isMounted=!0}),Hs(()=>{t.isUnmounting=!0}),t}const qe=[Function,Array],Eh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},Mg={name:"BaseTransition",props:Eh,setup(t,{slots:e}){const n=bm(),i=Ng();let r;return()=>{const s=e.default&&wh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const b of s)if(b.type!==at){o=b;break}}const a=G(t),{mode:l}=a;if(i.isLeaving)return Eo(o);const c=Gc(o);if(!c)return Eo(o);const u=ta(c,a,i,n);na(c,u);const f=n.subTree,h=f&&Gc(f);let p=!1;const{getTransitionKey:E}=c.type;if(E){const b=E();r===void 0?r=b:b!==r&&(r=b,p=!0)}if(h&&h.type!==at&&(!dn(c,h)||p)){const b=ta(h,a,i,n);if(na(h,b),l==="out-in")return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Eo(o);l==="in-out"&&c.type!==at&&(b.delayLeave=(P,W,q)=>{const K=bh(i,h);K[String(h.key)]=h,P._leaveCb=()=>{W(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=q})}return o}}},Dg=Mg;function bh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ta(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:E,onBeforeAppear:b,onAppear:P,onAfterAppear:W,onAppearCancelled:q}=e,K=String(t.key),k=bh(n,t),de=(F,ee)=>{F&&Qe(F,i,9,ee)},Pe=(F,ee)=>{const Z=ee[1];de(F,ee),N(F)?F.every(Se=>Se.length<=1)&&Z():F.length<=1&&Z()},Be={mode:s,persisted:o,beforeEnter(F){let ee=a;if(!n.isMounted)if(r)ee=b||a;else return;F._leaveCb&&F._leaveCb(!0);const Z=k[K];Z&&dn(t,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),de(ee,[F])},enter(F){let ee=l,Z=c,Se=u;if(!n.isMounted)if(r)ee=P||l,Z=W||c,Se=q||u;else return;let R=!1;const le=F._enterCb=He=>{R||(R=!0,He?de(Se,[F]):de(Z,[F]),Be.delayedLeave&&Be.delayedLeave(),F._enterCb=void 0)};ee?Pe(ee,[F,le]):le()},leave(F,ee){const Z=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return ee();de(f,[F]);let Se=!1;const R=F._leaveCb=le=>{Se||(Se=!0,ee(),le?de(E,[F]):de(p,[F]),F._leaveCb=void 0,k[Z]===t&&delete k[Z])};k[Z]=t,h?Pe(h,[F,R]):R()},clone(F){return ta(F,e,n,i)}};return Be}function Eo(t){if(Us(t))return t=Qt(t),t.children=null,t}function Gc(t){return Us(t)?t.children?t.children[0]:void 0:t}function na(t,e){t.shapeFlag&6&&t.component?na(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ve?(o.patchFlag&128&&r++,i=i.concat(wh(o.children,e,a))):(e||o.type!==at)&&i.push(a!=null?Qt(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Lg(t,e){return $(t)?(()=>pe({name:t.name},e,{setup:t}))():t}const Xr=t=>!!t.type.__asyncLoader,Us=t=>t.type.__isKeepAlive;function Fg(t,e){Ih(t,"a",e)}function $g(t,e){Ih(t,"da",e)}function Ih(t,e,n=Ce){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Bs(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Us(r.parent.vnode)&&Ug(i,e,n,r),r=r.parent}}function Ug(t,e,n,i){const r=Bs(e,t,i,!0);Ch(()=>{$a(i[e],r)},n)}function Bs(t,e,n=Ce,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pi(),oi(n);const a=Qe(e,n,t,o);return yn(),gi(),a});return i?r.unshift(s):r.push(s),s}}const kt=t=>(e,n=Ce)=>(!rr||t==="sp")&&Bs(t,(...i)=>e(...i),n),Bg=kt("bm"),vr=kt("m"),Hg=kt("bu"),jg=kt("u"),Hs=kt("bum"),Ch=kt("um"),Wg=kt("sp"),Vg=kt("rtg"),zg=kt("rtc");function Gg(t,e=Ce){Bs("ec",t,e)}const qg=Symbol.for("v-ndc");function Kg(t,e,n,i){let r;const s=n&&n[i];if(N(t)||ge(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const ia=t=>t?Dh(t)?Vs(t)||t.proxy:ia(t.parent):null,zi=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ia(t.parent),$root:t=>ia(t.root),$emit:t=>t.emit,$options:t=>Qa(t),$forceUpdate:t=>t.f||(t.f=()=>Xa(t.update)),$nextTick:t=>t.n||(t.n=vg.bind(t.proxy)),$watch:t=>Pg.bind(t)}),bo=(t,e)=>t!==se&&!t.__isScriptSetup&&V(t,e),Yg={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(bo(i,e))return o[e]=1,i[e];if(r!==se&&V(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&V(c,e))return o[e]=3,s[e];if(n!==se&&V(n,e))return o[e]=4,n[e];ra&&(o[e]=0)}}const u=zi[e];let f,h;if(u)return e==="$attrs"&&$e(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==se&&V(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,V(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return bo(r,e)?(r[e]=n,!0):i!==se&&V(i,e)?(i[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==se&&V(t,o)||bo(e,o)||(a=s[0])&&V(a,o)||V(i,o)||V(zi,o)||V(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qc(t){return N(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ra=!0;function Xg(t){const e=Qa(t),n=t.proxy,i=t.ctx;ra=!1,e.beforeCreate&&Kc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:E,activated:b,deactivated:P,beforeDestroy:W,beforeUnmount:q,destroyed:K,unmounted:k,render:de,renderTracked:Pe,renderTriggered:Be,errorCaptured:F,serverPrefetch:ee,expose:Z,inheritAttrs:Se,components:R,directives:le,filters:He}=e;if(c&&Qg(c,i,null),o)for(const ue in o){const te=o[ue];$(te)&&(i[ue]=te.bind(n))}if(r){const ue=r.call(n,n);oe(ue)&&(t.data=Ga(ue))}if(ra=!0,s)for(const ue in s){const te=s[ue],rn=$(te)?te.bind(n,n):$(te.get)?te.get.bind(n,n):ot,Nr=!$(te)&&$(te.set)?te.set.bind(n):ot,sn=Fh({get:rn,set:Nr});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>sn.value,set:ft=>sn.value=ft})}if(a)for(const ue in a)Th(a[ue],i,n,ue);if(l){const ue=$(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(te=>{im(te,ue[te])})}u&&Kc(u,t,"c");function ve(ue,te){N(te)?te.forEach(rn=>ue(rn.bind(n))):te&&ue(te.bind(n))}if(ve(Bg,f),ve(vr,h),ve(Hg,p),ve(jg,E),ve(Fg,b),ve($g,P),ve(Gg,F),ve(zg,Pe),ve(Vg,Be),ve(Hs,q),ve(Ch,k),ve(Wg,ee),N(Z))if(Z.length){const ue=t.exposed||(t.exposed={});Z.forEach(te=>{Object.defineProperty(ue,te,{get:()=>n[te],set:rn=>n[te]=rn})})}else t.exposed||(t.exposed={});de&&t.render===ot&&(t.render=de),Se!=null&&(t.inheritAttrs=Se),R&&(t.components=R),le&&(t.directives=le)}function Qg(t,e,n=ot){N(t)&&(t=sa(t));for(const i in t){const r=t[i];let s;oe(r)?"default"in r?s=Qr(r.from||i,r.default,!0):s=Qr(r.from||i):s=Qr(r),Ae(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Kc(t,e,n){Qe(N(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Th(t,e,n,i){const r=i.includes(".")?vh(n,i):()=>n[i];if(ge(t)){const s=e[t];$(s)&&yo(r,s)}else if($(t))yo(r,t.bind(n));else if(oe(t))if(N(t))t.forEach(s=>Th(s,e,n,i));else{const s=$(t.handler)?t.handler.bind(n):e[t.handler];$(s)&&yo(r,s,t)}}function Qa(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>os(l,c,o,!0)),os(l,e,o)),oe(e)&&s.set(e,l),l}function os(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&os(t,s,n,!0),r&&r.forEach(o=>os(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Jg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jg={data:Yc,props:Xc,emits:Xc,methods:Hi,computed:Hi,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Hi,directives:Hi,watch:em,provide:Yc,inject:Zg};function Yc(t,e){return e?t?function(){return pe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Zg(t,e){return Hi(sa(t),sa(e))}function sa(t){if(N(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Hi(t,e){return t?pe(Object.create(null),t,e):e}function Xc(t,e){return t?N(t)&&N(e)?[...new Set([...t,...e])]:pe(Object.create(null),qc(t),qc(e??{})):e}function em(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const i in e)n[i]=ke(t[i],e[i]);return n}function Sh(){return{app:null,config:{isNativeTag:Ip,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tm=0;function nm(t,e){return function(i,r=null){$(i)||(i=pe({},i)),r!=null&&!oe(r)&&(r=null);const s=Sh(),o=new Set;let a=!1;const l=s.app={_uid:tm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Am,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ce(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Vs(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){as=l;try{return c()}finally{as=null}}};return l}}let as=null;function im(t,e){if(Ce){let n=Ce.provides;const i=Ce.parent&&Ce.parent.provides;i===n&&(n=Ce.provides=Object.create(i)),n[t]=e}}function Qr(t,e,n=!1){const i=Ce||Ye;if(i||as){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:as._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$(e)?e.call(i&&i.proxy):e}}function rm(t,e,n,i=!1){const r={},s={};is(s,Ws,1),t.propsDefaults=Object.create(null),Oh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:fg(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function sm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=G(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Fs(t.emitsOptions,h))continue;const p=e[h];if(l)if(V(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const E=ii(h);r[E]=oa(l,a,E,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Oh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!V(e,f)&&((u=xn(f))===f||!V(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=oa(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!V(e,f))&&(delete s[f],c=!0)}c&&Ot(t,"set","$attrs")}function Oh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Kr(l))continue;const c=e[l];let u;r&&V(r,u=ii(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Fs(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=G(n),c=a||se;for(let u=0;u<s.length;u++){const f=s[u];n[f]=oa(r,l,f,c[f],t,!V(c,f))}}return o}function oa(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(oi(r),i=c[n]=l.call(null,e),yn())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===xn(n))&&(i=!0))}return i}function Rh(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!$(t)){const u=f=>{l=!0;const[h,p]=Rh(f,e,!0);pe(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return oe(t)&&i.set(t,qn),qn;if(N(s))for(let u=0;u<s.length;u++){const f=ii(s[u]);Qc(f)&&(o[f]=se)}else if(s)for(const u in s){const f=ii(u);if(Qc(f)){const h=s[u],p=o[f]=N(h)||$(h)?{type:h}:pe({},h);if(p){const E=eu(Boolean,p.type),b=eu(String,p.type);p[0]=E>-1,p[1]=b<0||E<b,(E>-1||V(p,"default"))&&a.push(f)}}}const c=[o,a];return oe(t)&&i.set(t,c),c}function Qc(t){return t[0]!=="$"}function Jc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zc(t,e){return Jc(t)===Jc(e)}function eu(t,e){return N(e)?e.findIndex(n=>Zc(n,t)):$(e)&&Zc(e,t)?0:-1}const Ah=t=>t[0]==="_"||t==="$stable",Ja=t=>N(t)?t.map(_t):[_t(t)],om=(t,e,n)=>{if(e._n)return e;const i=ea((...r)=>Ja(e(...r)),n);return i._c=!1,i},xh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Ah(r))continue;const s=t[r];if($(s))e[r]=om(r,s,i);else if(s!=null){const o=Ja(s);e[r]=()=>o}}},kh=(t,e)=>{const n=Ja(e);t.slots.default=()=>n},am=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),is(e,"_",n)):xh(e,t.slots={})}else t.slots={},e&&kh(t,e);is(t.slots,Ws,1)},lm=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=se;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(pe(r,e),!n&&a===1&&delete r._):(s=!e.$stable,xh(e,r)),o=e}else e&&(kh(t,e),o={default:1});if(s)for(const a in r)!Ah(a)&&!(a in o)&&delete r[a]};function aa(t,e,n,i,r=!1){if(N(t)){t.forEach((h,p)=>aa(h,e&&(N(e)?e[p]:e),n,i,r));return}if(Xr(i)&&!r)return;const s=i.shapeFlag&4?Vs(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ge(c)?(u[c]=null,V(f,c)&&(f[c]=null)):Ae(c)&&(c.value=null)),$(l))Vt(l,a,12,[o,u]);else{const h=ge(l),p=Ae(l);if(h||p){const E=()=>{if(t.f){const b=h?V(f,l)?f[l]:u[l]:l.value;r?N(b)&&$a(b,s):N(b)?b.includes(s)||b.push(s):h?(u[l]=[s],V(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,V(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ne(E,n)):E()}}}const Ne=kg;function cm(t){return um(t)}function um(t,e){const n=Ko();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=ot,insertStaticContent:E}=t,b=(d,_,g,v=null,m=null,C=null,S=!1,I=null,T=!!_.dynamicChildren)=>{if(d===_)return;d&&!dn(d,_)&&(v=Mr(d),ft(d,m,C,!0),d=null),_.patchFlag===-2&&(T=!1,_.dynamicChildren=null);const{type:y,ref:A,shapeFlag:O}=_;switch(y){case js:P(d,_,g,v);break;case at:W(d,_,g,v);break;case wo:d==null&&q(_,g,v,S);break;case Ve:R(d,_,g,v,m,C,S,I,T);break;default:O&1?de(d,_,g,v,m,C,S,I,T):O&6?le(d,_,g,v,m,C,S,I,T):(O&64||O&128)&&y.process(d,_,g,v,m,C,S,I,T,Fn)}A!=null&&m&&aa(A,d&&d.ref,C,_||d,!_)},P=(d,_,g,v)=>{if(d==null)i(_.el=a(_.children),g,v);else{const m=_.el=d.el;_.children!==d.children&&c(m,_.children)}},W=(d,_,g,v)=>{d==null?i(_.el=l(_.children||""),g,v):_.el=d.el},q=(d,_,g,v)=>{[d.el,d.anchor]=E(d.children,_,g,v,d.el,d.anchor)},K=({el:d,anchor:_},g,v)=>{let m;for(;d&&d!==_;)m=h(d),i(d,g,v),d=m;i(_,g,v)},k=({el:d,anchor:_})=>{let g;for(;d&&d!==_;)g=h(d),r(d),d=g;r(_)},de=(d,_,g,v,m,C,S,I,T)=>{S=S||_.type==="svg",d==null?Pe(_,g,v,m,C,S,I,T):ee(d,_,m,C,S,I,T)},Pe=(d,_,g,v,m,C,S,I)=>{let T,y;const{type:A,props:O,shapeFlag:x,transition:L,dirs:j}=d;if(T=d.el=o(d.type,C,O&&O.is,O),x&8?u(T,d.children):x&16&&F(d.children,T,null,v,m,C&&A!=="foreignObject",S,I),j&&on(d,null,v,"created"),Be(T,d,d.scopeId,S,v),O){for(const X in O)X!=="value"&&!Kr(X)&&s(T,X,null,O[X],C,d.children,v,m,Et);"value"in O&&s(T,"value",null,O.value),(y=O.onVnodeBeforeMount)&&dt(y,v,d)}j&&on(d,null,v,"beforeMount");const ne=(!m||m&&!m.pendingBranch)&&L&&!L.persisted;ne&&L.beforeEnter(T),i(T,_,g),((y=O&&O.onVnodeMounted)||ne||j)&&Ne(()=>{y&&dt(y,v,d),ne&&L.enter(T),j&&on(d,null,v,"mounted")},m)},Be=(d,_,g,v,m)=>{if(g&&p(d,g),v)for(let C=0;C<v.length;C++)p(d,v[C]);if(m){let C=m.subTree;if(_===C){const S=m.vnode;Be(d,S,S.scopeId,S.slotScopeIds,m.parent)}}},F=(d,_,g,v,m,C,S,I,T=0)=>{for(let y=T;y<d.length;y++){const A=d[y]=I?Ft(d[y]):_t(d[y]);b(null,A,_,g,v,m,C,S,I)}},ee=(d,_,g,v,m,C,S)=>{const I=_.el=d.el;let{patchFlag:T,dynamicChildren:y,dirs:A}=_;T|=d.patchFlag&16;const O=d.props||se,x=_.props||se;let L;g&&an(g,!1),(L=x.onVnodeBeforeUpdate)&&dt(L,g,_,d),A&&on(_,d,g,"beforeUpdate"),g&&an(g,!0);const j=m&&_.type!=="foreignObject";if(y?Z(d.dynamicChildren,y,I,g,v,j,C):S||te(d,_,I,null,g,v,j,C,!1),T>0){if(T&16)Se(I,_,O,x,g,v,m);else if(T&2&&O.class!==x.class&&s(I,"class",null,x.class,m),T&4&&s(I,"style",O.style,x.style,m),T&8){const ne=_.dynamicProps;for(let X=0;X<ne.length;X++){const _e=ne[X],Ze=O[_e],$n=x[_e];($n!==Ze||_e==="value")&&s(I,_e,Ze,$n,m,d.children,g,v,Et)}}T&1&&d.children!==_.children&&u(I,_.children)}else!S&&y==null&&Se(I,_,O,x,g,v,m);((L=x.onVnodeUpdated)||A)&&Ne(()=>{L&&dt(L,g,_,d),A&&on(_,d,g,"updated")},v)},Z=(d,_,g,v,m,C,S)=>{for(let I=0;I<_.length;I++){const T=d[I],y=_[I],A=T.el&&(T.type===Ve||!dn(T,y)||T.shapeFlag&70)?f(T.el):g;b(T,y,A,null,v,m,C,S,!0)}},Se=(d,_,g,v,m,C,S)=>{if(g!==v){if(g!==se)for(const I in g)!Kr(I)&&!(I in v)&&s(d,I,g[I],null,S,_.children,m,C,Et);for(const I in v){if(Kr(I))continue;const T=v[I],y=g[I];T!==y&&I!=="value"&&s(d,I,y,T,S,_.children,m,C,Et)}"value"in v&&s(d,"value",g.value,v.value)}},R=(d,_,g,v,m,C,S,I,T)=>{const y=_.el=d?d.el:a(""),A=_.anchor=d?d.anchor:a("");let{patchFlag:O,dynamicChildren:x,slotScopeIds:L}=_;L&&(I=I?I.concat(L):L),d==null?(i(y,g,v),i(A,g,v),F(_.children,g,A,m,C,S,I,T)):O>0&&O&64&&x&&d.dynamicChildren?(Z(d.dynamicChildren,x,g,m,C,S,I),(_.key!=null||m&&_===m.subTree)&&Ph(d,_,!0)):te(d,_,g,A,m,C,S,I,T)},le=(d,_,g,v,m,C,S,I,T)=>{_.slotScopeIds=I,d==null?_.shapeFlag&512?m.ctx.activate(_,g,v,S,T):He(_,g,v,m,C,S,T):Ai(d,_,T)},He=(d,_,g,v,m,C,S)=>{const I=d.component=Em(d,v,m);if(Us(d)&&(I.ctx.renderer=Fn),wm(I),I.asyncDep){if(m&&m.registerDep(I,ve),!d.el){const T=I.subTree=ce(at);W(null,T,_,g)}return}ve(I,d,_,g,m,C,S)},Ai=(d,_,g)=>{const v=_.component=d.component;if(Rg(d,_,g))if(v.asyncDep&&!v.asyncResolved){ue(v,_,g);return}else v.next=_,Eg(v.update),v.update();else _.el=d.el,v.vnode=_},ve=(d,_,g,v,m,C,S)=>{const I=()=>{if(d.isMounted){let{next:A,bu:O,u:x,parent:L,vnode:j}=d,ne=A,X;an(d,!1),A?(A.el=j.el,ue(d,A,S)):A=j,O&&Yr(O),(X=A.props&&A.props.onVnodeBeforeUpdate)&&dt(X,L,A,j),an(d,!0);const _e=vo(d),Ze=d.subTree;d.subTree=_e,b(Ze,_e,f(Ze.el),Mr(Ze),d,m,C),A.el=_e.el,ne===null&&Ag(d,_e.el),x&&Ne(x,m),(X=A.props&&A.props.onVnodeUpdated)&&Ne(()=>dt(X,L,A,j),m)}else{let A;const{el:O,props:x}=_,{bm:L,m:j,parent:ne}=d,X=Xr(_);if(an(d,!1),L&&Yr(L),!X&&(A=x&&x.onVnodeBeforeMount)&&dt(A,ne,_),an(d,!0),O&&go){const _e=()=>{d.subTree=vo(d),go(O,d.subTree,d,m,null)};X?_.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=vo(d);b(null,_e,g,v,d,m,C),_.el=_e.el}if(j&&Ne(j,m),!X&&(A=x&&x.onVnodeMounted)){const _e=_;Ne(()=>dt(A,ne,_e),m)}(_.shapeFlag&256||ne&&Xr(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Ne(d.a,m),d.isMounted=!0,_=g=v=null}},T=d.effect=new ja(I,()=>Xa(y),d.scope),y=d.update=()=>T.run();y.id=d.uid,an(d,!0),y()},ue=(d,_,g)=>{_.component=d;const v=d.vnode.props;d.vnode=_,d.next=null,sm(d,_.props,v,g),lm(d,_.children,g),pi(),Vc(),gi()},te=(d,_,g,v,m,C,S,I,T=!1)=>{const y=d&&d.children,A=d?d.shapeFlag:0,O=_.children,{patchFlag:x,shapeFlag:L}=_;if(x>0){if(x&128){Nr(y,O,g,v,m,C,S,I,T);return}else if(x&256){rn(y,O,g,v,m,C,S,I,T);return}}L&8?(A&16&&Et(y,m,C),O!==y&&u(g,O)):A&16?L&16?Nr(y,O,g,v,m,C,S,I,T):Et(y,m,C,!0):(A&8&&u(g,""),L&16&&F(O,g,v,m,C,S,I,T))},rn=(d,_,g,v,m,C,S,I,T)=>{d=d||qn,_=_||qn;const y=d.length,A=_.length,O=Math.min(y,A);let x;for(x=0;x<O;x++){const L=_[x]=T?Ft(_[x]):_t(_[x]);b(d[x],L,g,null,m,C,S,I,T)}y>A?Et(d,m,C,!0,!1,O):F(_,g,v,m,C,S,I,T,O)},Nr=(d,_,g,v,m,C,S,I,T)=>{let y=0;const A=_.length;let O=d.length-1,x=A-1;for(;y<=O&&y<=x;){const L=d[y],j=_[y]=T?Ft(_[y]):_t(_[y]);if(dn(L,j))b(L,j,g,null,m,C,S,I,T);else break;y++}for(;y<=O&&y<=x;){const L=d[O],j=_[x]=T?Ft(_[x]):_t(_[x]);if(dn(L,j))b(L,j,g,null,m,C,S,I,T);else break;O--,x--}if(y>O){if(y<=x){const L=x+1,j=L<A?_[L].el:v;for(;y<=x;)b(null,_[y]=T?Ft(_[y]):_t(_[y]),g,j,m,C,S,I,T),y++}}else if(y>x)for(;y<=O;)ft(d[y],m,C,!0),y++;else{const L=y,j=y,ne=new Map;for(y=j;y<=x;y++){const je=_[y]=T?Ft(_[y]):_t(_[y]);je.key!=null&&ne.set(je.key,y)}let X,_e=0;const Ze=x-j+1;let $n=!1,Nc=0;const xi=new Array(Ze);for(y=0;y<Ze;y++)xi[y]=0;for(y=L;y<=O;y++){const je=d[y];if(_e>=Ze){ft(je,m,C,!0);continue}let ht;if(je.key!=null)ht=ne.get(je.key);else for(X=j;X<=x;X++)if(xi[X-j]===0&&dn(je,_[X])){ht=X;break}ht===void 0?ft(je,m,C,!0):(xi[ht-j]=y+1,ht>=Nc?Nc=ht:$n=!0,b(je,_[ht],g,null,m,C,S,I,T),_e++)}const Mc=$n?fm(xi):qn;for(X=Mc.length-1,y=Ze-1;y>=0;y--){const je=j+y,ht=_[je],Dc=je+1<A?_[je+1].el:v;xi[y]===0?b(null,ht,g,Dc,m,C,S,I,T):$n&&(X<0||y!==Mc[X]?sn(ht,g,Dc,2):X--)}}},sn=(d,_,g,v,m=null)=>{const{el:C,type:S,transition:I,children:T,shapeFlag:y}=d;if(y&6){sn(d.component.subTree,_,g,v);return}if(y&128){d.suspense.move(_,g,v);return}if(y&64){S.move(d,_,g,Fn);return}if(S===Ve){i(C,_,g);for(let O=0;O<T.length;O++)sn(T[O],_,g,v);i(d.anchor,_,g);return}if(S===wo){K(d,_,g);return}if(v!==2&&y&1&&I)if(v===0)I.beforeEnter(C),i(C,_,g),Ne(()=>I.enter(C),m);else{const{leave:O,delayLeave:x,afterLeave:L}=I,j=()=>i(C,_,g),ne=()=>{O(C,()=>{j(),L&&L()})};x?x(C,j,ne):ne()}else i(C,_,g)},ft=(d,_,g,v=!1,m=!1)=>{const{type:C,props:S,ref:I,children:T,dynamicChildren:y,shapeFlag:A,patchFlag:O,dirs:x}=d;if(I!=null&&aa(I,null,g,d,!0),A&256){_.ctx.deactivate(d);return}const L=A&1&&x,j=!Xr(d);let ne;if(j&&(ne=S&&S.onVnodeBeforeUnmount)&&dt(ne,_,d),A&6)wp(d.component,g,v);else{if(A&128){d.suspense.unmount(g,v);return}L&&on(d,null,_,"beforeUnmount"),A&64?d.type.remove(d,_,g,m,Fn,v):y&&(C!==Ve||O>0&&O&64)?Et(y,_,g,!1,!0):(C===Ve&&O&384||!m&&A&16)&&Et(T,_,g),v&&kc(d)}(j&&(ne=S&&S.onVnodeUnmounted)||L)&&Ne(()=>{ne&&dt(ne,_,d),L&&on(d,null,_,"unmounted")},g)},kc=d=>{const{type:_,el:g,anchor:v,transition:m}=d;if(_===Ve){bp(g,v);return}if(_===wo){k(d);return}const C=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:I}=m,T=()=>S(g,C);I?I(d.el,C,T):T()}else C()},bp=(d,_)=>{let g;for(;d!==_;)g=h(d),r(d),d=g;r(_)},wp=(d,_,g)=>{const{bum:v,scope:m,update:C,subTree:S,um:I}=d;v&&Yr(v),m.stop(),C&&(C.active=!1,ft(S,d,_,g)),I&&Ne(I,_),Ne(()=>{d.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Et=(d,_,g,v=!1,m=!1,C=0)=>{for(let S=C;S<d.length;S++)ft(d[S],_,g,v,m)},Mr=d=>d.shapeFlag&6?Mr(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),Pc=(d,_,g)=>{d==null?_._vnode&&ft(_._vnode,null,null,!0):b(_._vnode||null,d,_,null,null,null,g),Vc(),_h(),_._vnode=d},Fn={p:b,um:ft,m:sn,r:kc,mt:He,mc:F,pc:te,pbc:Z,n:Mr,o:t};let po,go;return e&&([po,go]=e(Fn)),{render:Pc,hydrate:po,createApp:nm(Pc,po)}}function an({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ph(t,e,n=!1){const i=t.children,r=e.children;if(N(i)&&N(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ft(r[s]),a.el=o.el),n||Ph(o,a)),a.type===js&&(a.el=o.el)}}function fm(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const hm=t=>t.__isTeleport,Ve=Symbol.for("v-fgt"),js=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),Gi=[];let rt=null;function me(t=!1){Gi.push(rt=t?null:[])}function dm(){Gi.pop(),rt=Gi[Gi.length-1]||null}let ir=1;function tu(t){ir+=t}function Nh(t){return t.dynamicChildren=ir>0?rt||qn:null,dm(),ir>0&&rt&&rt.push(t),t}function Ge(t,e,n,i,r,s){return Nh(z(t,e,n,i,r,s,!0))}function si(t,e,n,i,r){return Nh(ce(t,e,n,i,r,!0))}function la(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const Ws="__vInternal",Mh=({key:t})=>t??null,Jr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||Ae(t)||$(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,i=0,r=null,s=t===Ve?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mh(e),ref:e&&Jr(e),scopeId:$s,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ye};return a?(Za(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),ir>0&&!o&&rt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rt.push(l),l}const ce=_m;function _m(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===qg)&&(t=at),la(t)){const a=Qt(t,e,!0);return n&&Za(a,n),ir>0&&!s&&rt&&(a.shapeFlag&6?rt[rt.indexOf(t)]=a:rt.push(a)),a.patchFlag|=-2,a}if(Sm(t)&&(t=t.__vccOpts),e){e=pm(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=Re(a)),oe(l)&&(ah(l)&&!N(l)&&(l=pe({},l)),e.style=kn(l))}const o=ge(t)?1:xg(t)?128:hm(t)?64:oe(t)?4:$(t)?2:0;return z(t,e,n,i,r,o,s,!0)}function pm(t){return t?ah(t)||Ws in t?pe({},t):t:null}function Qt(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?mm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mh(a),ref:e&&e.ref?n&&r?N(r)?r.concat(Jr(e)):[r,Jr(e)]:Jr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gm(t=" ",e=0){return ce(js,null,t,e)}function ca(t="",e=!1){return e?(me(),si(at,null,t)):ce(at,null,t)}function _t(t){return t==null||typeof t=="boolean"?ce(at):N(t)?ce(Ve,null,t.slice()):typeof t=="object"?Ft(t):ce(js,null,String(t))}function Ft(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function Za(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(N(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Za(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ws in e)?e._ctx=Ye:r===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),i&64?(n=16,e=[gm(e)]):n=8);t.children=e,t.shapeFlag|=n}function mm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Re([e.class,i.class]));else if(r==="style")e.style=kn([e.style,i.style]);else if(Ps(r)){const s=e[r],o=i[r];o&&s!==o&&!(N(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dt(t,e,n,i=null){Qe(t,e,7,[n,i])}const vm=Sh();let ym=0;function Em(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||vm,s={uid:ym++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rh(i,r),emitsOptions:gh(i,r),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ig.bind(null,s),t.ce&&t.ce(s),s}let Ce=null;const bm=()=>Ce||Ye;let el,Un,nu="__VUE_INSTANCE_SETTERS__";(Un=Ko()[nu])||(Un=Ko()[nu]=[]),Un.push(t=>Ce=t),el=t=>{Un.length>1?Un.forEach(e=>e(t)):Un[0](t)};const oi=t=>{el(t),t.scope.on()},yn=()=>{Ce&&Ce.scope.off(),el(null)};function Dh(t){return t.vnode.shapeFlag&4}let rr=!1;function wm(t,e=!1){rr=e;const{props:n,children:i}=t.vnode,r=Dh(t);rm(t,n,r,e),am(t,i);const s=r?Im(t,e):void 0;return rr=!1,s}function Im(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lh(new Proxy(t.ctx,Yg));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Tm(t):null;oi(t),pi();const s=Vt(i,t,0,[t.props,r]);if(gi(),yn(),Vf(s)){if(s.then(yn,yn),e)return s.then(o=>{iu(t,o,e)}).catch(o=>{Ls(o,t,0)});t.asyncDep=s}else iu(t,s,e)}else Lh(t,e)}function iu(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=fh(e)),Lh(t,n)}let ru;function Lh(t,e,n){const i=t.type;if(!t.render){if(!e&&ru&&!i.render){const r=i.template||Qa(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=pe(pe({isCustomElement:s,delimiters:a},o),l);i.render=ru(r,c)}}t.render=i.render||ot}oi(t),pi(),Xg(t),gi(),yn()}function Cm(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}}))}function Tm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Cm(t)},slots:t.slots,emit:t.emit,expose:e}}function Vs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fh(lh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zi)return zi[n](t)},has(e,n){return n in e||n in zi}}))}function Sm(t){return $(t)&&"__vccOpts"in t}const Fh=(t,e)=>gg(t,e,rr);function $h(t,e,n){const i=arguments.length;return i===2?oe(e)&&!N(e)?la(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&la(n)&&(n=[n]),ce(t,e,n))}const Om=Symbol.for("v-scx"),Rm=()=>Qr(Om),Am="3.3.4",xm="http://www.w3.org/2000/svg",_n=typeof document<"u"?document:null,su=_n&&_n.createElement("template"),km={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?_n.createElementNS(xm,t):_n.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{su.innerHTML=i?`<svg>${t}</svg>`:t;const a=su.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pm(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nm(t,e,n){const i=t.style,r=ge(n);if(n&&!r){if(e&&!ge(e))for(const s in e)n[s]==null&&ua(i,s,"");for(const s in n)ua(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const ou=/\s*!important$/;function ua(t,e,n){if(N(n))n.forEach(i=>ua(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Mm(t,e);ou.test(n)?t.setProperty(xn(i),n.replace(ou,""),"important"):t[i]=n}}const au=["Webkit","Moz","ms"],Io={};function Mm(t,e){const n=Io[e];if(n)return n;let i=ii(e);if(i!=="filter"&&i in t)return Io[e]=i;i=qf(i);for(let r=0;r<au.length;r++){const s=au[r]+i;if(s in t)return Io[e]=s}return e}const lu="http://www.w3.org/1999/xlink";function Dm(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lu,e.slice(6,e.length)):t.setAttributeNS(lu,e,n);else{const s=Dp(e);n==null||s&&!Kf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Lm(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Kf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Vn(t,e,n,i){t.addEventListener(e,n,i)}function Fm(t,e,n,i){t.removeEventListener(e,n,i)}function $m(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Um(e);if(i){const c=s[e]=jm(i,r);Vn(t,a,c,l)}else o&&(Fm(t,a,o,l),s[e]=void 0)}}const cu=/(?:Once|Passive|Capture)$/;function Um(t){let e;if(cu.test(t)){e={};let i;for(;i=t.match(cu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let Co=0;const Bm=Promise.resolve(),Hm=()=>Co||(Bm.then(()=>Co=0),Co=Date.now());function jm(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Qe(Wm(i,n.value),e,5,[i])};return n.value=t,n.attached=Hm(),n}function Wm(t,e){if(N(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const uu=/^on[a-z]/,Vm=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Pm(t,i,r):e==="style"?Nm(t,n,i):Ps(e)?Fa(e)||$m(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zm(t,e,i,r))?Lm(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Dm(t,e,i,r))};function zm(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&uu.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||uu.test(e)&&ge(n)?!1:e in t}const Mt="transition",ki="animation",ls=(t,{slots:e})=>$h(Dg,Gm(t),e);ls.displayName="Transition";const Uh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ls.props=pe({},Eh,Uh);const ln=(t,e=[])=>{N(t)?t.forEach(n=>n(...e)):t&&t(...e)},fu=t=>t?N(t)?t.some(e=>e.length>1):t.length>1:!1;function Gm(t){const e={};for(const R in t)R in Uh||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,E=qm(r),b=E&&E[0],P=E&&E[1],{onBeforeEnter:W,onEnter:q,onEnterCancelled:K,onLeave:k,onLeaveCancelled:de,onBeforeAppear:Pe=W,onAppear:Be=q,onAppearCancelled:F=K}=e,ee=(R,le,He)=>{cn(R,le?u:a),cn(R,le?c:o),He&&He()},Z=(R,le)=>{R._isLeaving=!1,cn(R,f),cn(R,p),cn(R,h),le&&le()},Se=R=>(le,He)=>{const Ai=R?Be:q,ve=()=>ee(le,R,He);ln(Ai,[le,ve]),hu(()=>{cn(le,R?l:s),Dt(le,R?u:a),fu(Ai)||du(le,i,b,ve)})};return pe(e,{onBeforeEnter(R){ln(W,[R]),Dt(R,s),Dt(R,o)},onBeforeAppear(R){ln(Pe,[R]),Dt(R,l),Dt(R,c)},onEnter:Se(!1),onAppear:Se(!0),onLeave(R,le){R._isLeaving=!0;const He=()=>Z(R,le);Dt(R,f),Xm(),Dt(R,h),hu(()=>{R._isLeaving&&(cn(R,f),Dt(R,p),fu(k)||du(R,i,P,He))}),ln(k,[R,He])},onEnterCancelled(R){ee(R,!1),ln(K,[R])},onAppearCancelled(R){ee(R,!0),ln(F,[R])},onLeaveCancelled(R){Z(R),ln(de,[R])}})}function qm(t){if(t==null)return null;if(oe(t))return[To(t.enter),To(t.leave)];{const e=To(t);return[e,e]}}function To(t){return Ap(t)}function Dt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function cn(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function hu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Km=0;function du(t,e,n,i){const r=t._endId=++Km,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Ym(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function Ym(t,e){const n=window.getComputedStyle(t),i=E=>(n[E]||"").split(", "),r=i(`${Mt}Delay`),s=i(`${Mt}Duration`),o=_u(r,s),a=i(`${ki}Delay`),l=i(`${ki}Duration`),c=_u(a,l);let u=null,f=0,h=0;e===Mt?o>0&&(u=Mt,f=o,h=s.length):e===ki?c>0&&(u=ki,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Mt:ki:null,h=u?u===Mt?s.length:l.length:0);const p=u===Mt&&/\b(transform|all)(,|$)/.test(i(`${Mt}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function _u(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>pu(n)+pu(t[i])))}function pu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Xm(){return document.body.offsetHeight}const gu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return N(e)?n=>Yr(e,n):e};function Qm(t){t.target.composing=!0}function mu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jm={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=gu(r);const s=i||r.props&&r.props.type==="number";Vn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=qo(a)),t._assign(a)}),n&&Vn(t,"change",()=>{t.value=t.value.trim()}),e||(Vn(t,"compositionstart",Qm),Vn(t,"compositionend",mu),Vn(t,"change",mu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=gu(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&qo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Zm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ev=(t,e)=>n=>{if(!("key"in n))return;const i=xn(n.key);if(e.some(r=>r===i||Zm[r]===i))return t(n)},tv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Pi(t,!0),i.enter(t)):i.leave(t,()=>{Pi(t,!1)}):Pi(t,e))},beforeUnmount(t,{value:e}){Pi(t,e)}};function Pi(t,e){t.style.display=e?t._vod:"none"}const nv=pe({patchProp:Vm},km);let vu;function iv(){return vu||(vu=cm(nv))}const rv=(...t)=>{const e=iv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=sv(i);if(!r)return;const s=e._component;!$(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sv(t){return ge(t)?document.querySelector(t):t}/**
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
 */const Bh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const w=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+Bh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Hh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ov=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(n[u],n[f],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ov(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw new av;const h=s<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),f!==64){const E=c<<6&192|f;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class av extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jh=function(t){const e=Hh(t);return tl.encodeByteArray(e,!0)},cs=function(t){return jh(t).replace(/\./g,"")},us=function(t){try{return tl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lv(t){return Wh(void 0,t)}function Wh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cv(n)||(t[n]=Wh(t[n],e[n]));return t}function cv(t){return t!=="__proto__"}/**
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
 */function uv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fv=()=>uv().__FIREBASE_DEFAULTS__,hv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&us(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return fv()||hv()||dv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vh=t=>{var e,n;return(n=(e=nl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_v=t=>{const e=Vh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},zh=()=>{var t;return(t=nl())===null||t===void 0?void 0:t.config},Gh=t=>{var e;return(e=nl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function pv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cs(JSON.stringify(n)),cs(JSON.stringify(o)),a].join(".")}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function il(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function gv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mv(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kh(){return Bh.NODE_ADMIN===!0}function vv(){try{return typeof indexedDB=="object"}catch{return!1}}function yv(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ev="FirebaseError";class en extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ev,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?bv(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new en(r,a,i)}}function bv(t,e){return t.replace(wv,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const wv=/\{\$([^}]+)}/g;/**
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
 */function sr(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
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
 */const Yh=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=sr(us(s[0])||""),n=sr(us(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Iv=function(t){const e=Yh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Cv=function(t){const e=Yh(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ai(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fs(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function hs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(yu(s)&&yu(o)){if(!hs(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function yu(t){return t!==null&&typeof t=="object"}/**
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
 */function vi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Wi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Tv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Sv(t,e){const n=new Ov(t,e);return n.subscribe.bind(n)}class Ov{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Rv(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=So),r.error===void 0&&(r.error=So),r.complete===void 0&&(r.complete=So);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function So(){}function rl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Av=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,w(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Gs=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class In{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class xv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new zs;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pv(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kv(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kv(t){return t===un?void 0:t}function Pv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Mv={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Dv=Q.INFO,Lv={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Fv=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Lv[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=Dv,this._logHandler=Fv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const $v=(t,e)=>e.some(n=>t instanceof n);let Eu,bu;function Uv(){return Eu||(Eu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bv(){return bu||(bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xh=new WeakMap,ha=new WeakMap,Qh=new WeakMap,Oo=new WeakMap,ol=new WeakMap;function Hv(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xh.set(n,t)}).catch(()=>{}),ol.set(e,t),e}function jv(t){if(ha.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ha.set(t,e)}let da={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wv(t){da=t(da)}function Vv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ro(this),e,...n);return Qh.set(i,e.sort?e.sort():[e]),zt(i)}:Bv().includes(t)?function(...e){return t.apply(Ro(this),e),zt(Xh.get(this))}:function(...e){return zt(t.apply(Ro(this),e))}}function zv(t){return typeof t=="function"?Vv(t):(t instanceof IDBTransaction&&jv(t),$v(t,Uv())?new Proxy(t,da):t)}function zt(t){if(t instanceof IDBRequest)return Hv(t);if(Oo.has(t))return Oo.get(t);const e=zv(t);return e!==t&&(Oo.set(t,e),ol.set(e,t)),e}const Ro=t=>ol.get(t);function Gv(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=zt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(zt(o.result),l.oldVersion,l.newVersion,zt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qv=["get","getKey","getAll","getAllKeys","count"],Kv=["put","add","delete","clear"],Ao=new Map;function wu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Kv.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||qv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ao.set(e,s),s}Wv(t=>({...t,get:(e,n,i)=>wu(e,n)||t.get(e,n,i),has:(e,n)=>!!wu(e,n)||t.has(e,n)}));/**
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
 */class Yv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Xv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _a="@firebase/app",Iu="0.9.14";/**
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
 */const Cn=new sl("@firebase/app"),Qv="@firebase/app-compat",Jv="@firebase/analytics-compat",Zv="@firebase/analytics",e0="@firebase/app-check-compat",t0="@firebase/app-check",n0="@firebase/auth",i0="@firebase/auth-compat",r0="@firebase/database",s0="@firebase/database-compat",o0="@firebase/functions",a0="@firebase/functions-compat",l0="@firebase/installations",c0="@firebase/installations-compat",u0="@firebase/messaging",f0="@firebase/messaging-compat",h0="@firebase/performance",d0="@firebase/performance-compat",_0="@firebase/remote-config",p0="@firebase/remote-config-compat",g0="@firebase/storage",m0="@firebase/storage-compat",v0="@firebase/firestore",y0="@firebase/firestore-compat",E0="firebase",b0="10.0.0";/**
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
 */const pa="[DEFAULT]",w0={[_a]:"fire-core",[Qv]:"fire-core-compat",[Zv]:"fire-analytics",[Jv]:"fire-analytics-compat",[t0]:"fire-app-check",[e0]:"fire-app-check-compat",[n0]:"fire-auth",[i0]:"fire-auth-compat",[r0]:"fire-rtdb",[s0]:"fire-rtdb-compat",[o0]:"fire-fn",[a0]:"fire-fn-compat",[l0]:"fire-iid",[c0]:"fire-iid-compat",[u0]:"fire-fcm",[f0]:"fire-fcm-compat",[h0]:"fire-perf",[d0]:"fire-perf-compat",[_0]:"fire-rc",[p0]:"fire-rc-compat",[g0]:"fire-gcs",[m0]:"fire-gcs-compat",[v0]:"fire-fst",[y0]:"fire-fst-compat","fire-js":"fire-js",[E0]:"fire-js-all"};/**
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
 */const ds=new Map,ga=new Map;function I0(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function li(t){const e=t.name;if(ga.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;ga.set(e,t);for(const n of ds.values())I0(n,t);return!0}function al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const C0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new yr("app","Firebase",C0);/**
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
 */class T0{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=b0;function Jh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pa,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Gt.create("bad-app-name",{appName:String(r)});if(n||(n=zh()),!n)throw Gt.create("no-options");const s=ds.get(r);if(s){if(hs(n,s.options)&&hs(i,s.config))return s;throw Gt.create("duplicate-app",{appName:r})}const o=new Nv(r);for(const l of ga.values())o.addComponent(l);const a=new T0(n,i,o);return ds.set(r,a),a}function Zh(t=pa){const e=ds.get(t);if(!e&&t===pa&&zh())return Jh();if(!e)throw Gt.create("no-app",{appName:t});return e}function qt(t,e,n){var i;let r=(i=w0[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}li(new In(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const S0="firebase-heartbeat-database",O0=1,or="firebase-heartbeat-store";let xo=null;function ed(){return xo||(xo=Gv(S0,O0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(or)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),xo}async function R0(t){try{return await(await ed()).transaction(or).objectStore(or).get(td(t))}catch(e){if(e instanceof en)Cn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Cu(t,e){try{const i=(await ed()).transaction(or,"readwrite");await i.objectStore(or).put(e,td(t)),await i.done}catch(n){if(n instanceof en)Cn.warn(n.message);else{const i=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(i.message)}}}function td(t){return`${t.name}!${t.options.appId}`}/**
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
 */const A0=1024,x0=30*24*60*60*1e3;class k0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N0(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=x0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tu(),{heartbeatsToSend:n,unsentEntries:i}=P0(this._heartbeatsCache.heartbeats),r=cs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Tu(){return new Date().toISOString().substring(0,10)}function P0(t,e=A0){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Su(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Su(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class N0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vv()?yv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await R0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Su(t){return cs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function M0(t){li(new In("platform-logger",e=>new Yv(e),"PRIVATE")),li(new In("heartbeat",e=>new k0(e),"PRIVATE")),qt(_a,Iu,t),qt(_a,Iu,"esm2017"),qt("fire-js","")}M0("");function ll(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function nd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D0=nd,id=new yr("auth","Firebase",nd());/**
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
 */const _s=new sl("@firebase/auth");function L0(t,...e){_s.logLevel<=Q.WARN&&_s.warn(`Auth (${yi}): ${t}`,...e)}function Zr(t,...e){_s.logLevel<=Q.ERROR&&_s.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function ct(t,...e){throw cl(t,...e)}function mt(t,...e){return cl(t,...e)}function F0(t,e,n){const i=Object.assign(Object.assign({},D0()),{[e]:n});return new yr("auth","Firebase",i).create(e,{appName:t.name})}function cl(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return id.create(t,...e)}function D(t,e,...n){if(!t)throw cl(e,...n)}function wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zr(e),new Error(e)}function Rt(t,e){t||wt(e)}/**
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
 */function ma(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $0(){return Ou()==="http:"||Ou()==="https:"}function Ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function U0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($0()||gv()||"connection"in navigator)?navigator.onLine:!0}function B0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Er{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=il()||qh()}get(){return U0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ul(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rd{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const H0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const j0=new Er(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ei(t,e,n,i,r={}){return sd(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rd.fetch()(od(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sd(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},H0),e);try{const r=new W0(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hr(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw F0(t,u,c);ct(t,u)}}catch(r){if(r instanceof en)throw r;ct(t,"network-request-failed",{message:String(r)})}}async function qs(t,e,n,i,r={}){const s=await Ei(t,e,n,i,r);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function od(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ul(t.config,r):`${t.config.apiScheme}://${r}`}class W0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mt(this.auth,"network-request-failed")),j0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=mt(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function V0(t,e){return Ei(t,"POST","/v1/accounts:delete",e)}async function z0(t,e){return Ei(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function G0(t,e=!1){const n=ut(t),i=await n.getIdToken(e),r=fl(i);D(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:qi(ko(r.auth_time)),issuedAtTime:qi(ko(r.iat)),expirationTime:qi(ko(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ko(t){return Number(t)*1e3}function fl(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Zr("JWT malformed, contained fewer than 3 sections"),null;try{const r=us(n);return r?JSON.parse(r):(Zr("Failed to decode base64 JWT payload"),null)}catch(r){return Zr("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function q0(t){const e=fl(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ar(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof en&&K0(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function K0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Y0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ps(t){var e;const n=t.auth,i=await t.getIdToken(),r=await ar(t,z0(n,{idToken:i}));D(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?J0(s.providerUserInfo):[],a=Q0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ad(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function X0(t){const e=ut(t);await ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Q0(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function J0(t){return t.map(e=>{var{providerId:n}=e,i=ll(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Z0(t,e){const n=await sd(t,{},async()=>{const i=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=od(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rd.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):q0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Z0(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new lr;return i&&(D(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(D(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
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
 */function Lt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=ll(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ad(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ar(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return G0(this,e)}reload(){return X0(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ps(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ar(this,V0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,W=(c=n.createdAt)!==null&&c!==void 0?c:void 0,q=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:k,isAnonymous:de,providerData:Pe,stsTokenManager:Be}=n;D(K&&Be,e,"internal-error");const F=lr.fromJSON(this.name,Be);D(typeof K=="string",e,"internal-error"),Lt(f,e.name),Lt(h,e.name),D(typeof k=="boolean",e,"internal-error"),D(typeof de=="boolean",e,"internal-error"),Lt(p,e.name),Lt(E,e.name),Lt(b,e.name),Lt(P,e.name),Lt(W,e.name),Lt(q,e.name);const ee=new En({uid:K,auth:e,email:h,emailVerified:k,displayName:f,isAnonymous:de,photoURL:E,phoneNumber:p,tenantId:b,stsTokenManager:F,createdAt:W,lastLoginAt:q});return Pe&&Array.isArray(Pe)&&(ee.providerData=Pe.map(Z=>Object.assign({},Z))),P&&(ee._redirectEventId=P),ee}static async _fromIdTokenResponse(e,n,i=!1){const r=new lr;r.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ps(s),s}}/**
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
 */const Ru=new Map;function It(t){Rt(t instanceof Function,"Expected a class definition");let e=Ru.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ru.set(t,e),e)}/**
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
 */class ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ld.type="NONE";const Au=ld;/**
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
 */function es(t,e,n){return`firebase:${t}:${e}:${n}`}class Qn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=es(this.userKey,r.apiKey,s),this.fullPersistenceKey=es("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Qn(It(Au),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||It(Au);const o=es(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=En._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qn(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Qn(s,e,i))}}/**
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
 */function xu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dd(e))return"Blackberry";if(_d(e))return"Webos";if(hl(e))return"Safari";if((e.includes("chrome/")||ud(e))&&!e.includes("edge/"))return"Chrome";if(hd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function cd(t=xe()){return/firefox\//i.test(t)}function hl(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ud(t=xe()){return/crios\//i.test(t)}function fd(t=xe()){return/iemobile/i.test(t)}function hd(t=xe()){return/android/i.test(t)}function dd(t=xe()){return/blackberry/i.test(t)}function _d(t=xe()){return/webos/i.test(t)}function Ks(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ey(t=xe()){var e;return Ks(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ty(){return mv()&&document.documentMode===10}function pd(t=xe()){return Ks(t)||hd(t)||_d(t)||dd(t)||/windows phone/i.test(t)||fd(t)}function ny(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gd(t,e=[]){let n;switch(t){case"Browser":n=xu(xe());break;case"Worker":n=`${xu(xe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${i}`}async function md(t,e){return Ei(t,"GET","/v2/recaptchaConfig",br(t,e))}function ku(t){return t!==void 0&&t.enterprise!==void 0}class vd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function iy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yd(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=mt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",iy().appendChild(i)})}function ry(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sy="https://www.google.com/recaptcha/enterprise.js?render=",oy="recaptcha-enterprise",ay="NO_RECAPTCHA";class Ed{constructor(e){this.type=oy,this.auth=wr(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{md(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new vd(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;ku(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ay)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&ku(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}yd(sy+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Pu(t,e,n,i=!1){const r=new Ed(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class ly{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class cy{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nu(this),this.idTokenSubscription=new Nu(this),this.beforeStateQueue=new ly(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ps(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ut(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}async initializeRecaptchaConfig(){const e=await md(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new vd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ed(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&It(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&L0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wr(t){return ut(t)}class Nu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sv(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function uy(t,e){const n=al(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(hs(s,e??{}))return r;ct(r,"already-initialized")}return n.initialize({options:e})}function fy(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(It);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function hy(t,e,n){const i=wr(t);D(i._canInitEmulator,i,"emulator-config-failed"),D(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=bd(e),{host:o,port:a}=dy(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||_y()}function bd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dy(t){const e=bd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Mu(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Mu(o)}}}function Mu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _y(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,n){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}async function py(t,e){return Ei(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Po(t,e){return qs(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
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
 */async function gy(t,e){return qs(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function my(t,e){return qs(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
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
 */class cr extends dl{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new cr(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new cr(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Pu(e,i,"signInWithPassword");return Po(e,r)}else return Po(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Pu(e,i,"signInWithPassword");return Po(e,s)}else return Promise.reject(r)});case"emailLink":return gy(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return py(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return my(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Jn(t,e){return qs(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
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
 */const vy="http://localhost";class Tn extends dl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=ll(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Tn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Jn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jn(e,n)}buildRequest(){const e={requestUri:vy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */function yy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ey(t){const e=ji(Wi(t)).link,n=e?ji(Wi(e)).deep_link_id:null,i=ji(Wi(t)).deep_link_id;return(i?ji(Wi(i)).link:null)||i||n||e||t}class _l{constructor(e){var n,i,r,s,o,a;const l=ji(Wi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,f=yy((r=l.mode)!==null&&r!==void 0?r:null);D(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ey(e);try{return new _l(n)}catch{return null}}}/**
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
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return cr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=_l.parseLink(n);return D(i,"argument-error"),cr._fromEmailAndCode(e,i.code,i.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends wd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends Ir{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ut.credential(n,i)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class Bt extends Ir{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class Ht extends Ir{constructor(){super("twitter.com")}static credential(e,n){return Tn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ht.credential(n,i)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await En._fromIdTokenResponse(e,i,r),o=Du(i);return new ci({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Du(i);return new ci({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Du(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gs extends en{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new gs(e,n,i,r)}}function Id(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(t,s,e,i):s})}async function by(t,e,n=!1){const i=await ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",i)}/**
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
 */async function wy(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await ar(t,Id(i,r,e,t),n);D(s.idToken,i,"internal-error");const o=fl(s.idToken);D(o,i,"internal-error");const{sub:a}=o;return D(t.uid===a,i,"user-mismatch"),ci._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(i,"user-mismatch"),s}}/**
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
 */async function Cd(t,e,n=!1){const i="signIn",r=await Id(t,i,e),s=await ci._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Iy(t,e){return Cd(wr(t),e)}function Cy(t,e,n){return Iy(ut(t),bi.credential(e,n))}function Ty(t,e,n,i){return ut(t).onIdTokenChanged(e,n,i)}function Sy(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const ms="__sak";/**
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
 */class Td{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ms,"1"),this.storage.removeItem(ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Oy(){const t=xe();return hl(t)||Ks(t)}const Ry=1e3,Ay=10;class Sd extends Td{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Oy()&&ny(),this.fallbackToPolling=pd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);ty()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ay):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Ry)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sd.type="LOCAL";const xy=Sd;/**
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
 */class Od extends Td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Od.type="SESSION";const Rd=Od;/**
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
 */function ky(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Ys(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await ky(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
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
 */function pl(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Py{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=pl("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vt(){return window}function Ny(t){vt().location.href=t}/**
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
 */function Ad(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function My(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ly(){return Ad()?self:null}/**
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
 */const xd="firebaseLocalStorageDb",Fy=1,vs="firebaseLocalStorage",kd="fbase_key";class Cr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([vs],e?"readwrite":"readonly").objectStore(vs)}function $y(){const t=indexedDB.deleteDatabase(xd);return new Cr(t).toPromise()}function va(){const t=indexedDB.open(xd,Fy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(vs,{keyPath:kd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(vs)?e(i):(i.close(),await $y(),e(await va()))})})}async function Lu(t,e,n){const i=Xs(t,!0).put({[kd]:e,value:n});return new Cr(i).toPromise()}async function Uy(t,e){const n=Xs(t,!1).get(e),i=await new Cr(n).toPromise();return i===void 0?null:i.value}function Fu(t,e){const n=Xs(t,!0).delete(e);return new Cr(n).toPromise()}const By=800,Hy=3;class Pd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await va(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Hy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ad()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(Ly()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await My(),!this.activeServiceWorker)return;this.sender=new Py(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await va();return await Lu(e,ms,"1"),await Fu(e,ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Lu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Uy(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Xs(r,!1).getAll();return new Cr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),By)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pd.type="LOCAL";const jy=Pd;new Er(3e4,6e4);/**
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
 */function Wy(t,e){return e?It(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gl extends dl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vy(t){return Cd(t.auth,new gl(t),t.bypassAuthState)}function zy(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),wy(n,new gl(t),t.bypassAuthState)}async function Gy(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),by(n,new gl(t),t.bypassAuthState)}/**
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
 */class Nd{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vy;case"linkViaPopup":case"linkViaRedirect":return Gy;case"reauthViaPopup":case"reauthViaRedirect":return zy;default:ct(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qy=new Er(2e3,1e4);class zn extends Nd{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=pl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qy.get())};e()}}zn.currentPopupAction=null;/**
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
 */const Ky="pendingRedirect",ts=new Map;class Yy extends Nd{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ts.get(this.auth._key());if(!e){try{const i=await Xy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ts.set(this.auth._key(),e)}return this.bypassAuthState||ts.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xy(t,e){const n=Zy(e),i=Jy(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Qy(t,e){ts.set(t._key(),e)}function Jy(t){return It(t._redirectPersistence)}function Zy(t){return es(Ky,t.config.apiKey,t.name)}async function eE(t,e,n=!1){const i=wr(t),r=Wy(i,e),o=await new Yy(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const tE=10*60*1e3;class nE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Md(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tE&&this.cachedEventUids.clear(),this.cachedEventUids.has($u(e))}saveEventToCache(e){this.cachedEventUids.add($u(e)),this.lastProcessedEventTime=Date.now()}}function $u(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Md({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Md(t);default:return!1}}/**
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
 */async function rE(t,e={}){return Ei(t,"GET","/v1/projects",e)}/**
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
 */const sE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oE=/^https?/;async function aE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rE(t);for(const n of e)try{if(lE(n))return}catch{}ct(t,"unauthorized-domain")}function lE(t){const e=ma(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!oE.test(n))return!1;if(sE.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const cE=new Er(3e4,6e4);function Uu(){const t=vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uE(t){return new Promise((e,n)=>{var i,r,s;function o(){Uu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uu(),n(mt(t,"network-request-failed"))},timeout:cE.get()})}if(!((r=(i=vt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=vt().gapi)===null||s===void 0)&&s.load)o();else{const a=ry("iframefcb");return vt()[a]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},yd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ns=null,e})}let ns=null;function fE(t){return ns=ns||uE(t),ns}/**
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
 */const hE=new Er(5e3,15e3),dE="__/auth/iframe",_E="emulator/auth/iframe",pE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mE(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ul(e,_E):`https://${t.config.authDomain}/${dE}`,i={apiKey:e.apiKey,appName:t.name,v:yi},r=gE.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${vi(i).slice(1)}`}async function vE(t){const e=await fE(t),n=vt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:mE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pE,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=vt().setTimeout(()=>{s(o)},hE.get());function l(){vt().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const yE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EE=500,bE=600,wE="_blank",IE="http://localhost";class Bu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CE(t,e,n,i=EE,r=bE){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yE),{width:i.toString(),height:r.toString(),top:s,left:o}),c=xe().toLowerCase();n&&(a=ud(c)?wE:n),cd(c)&&(e=e||IE,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,E])=>`${h}${p}=${E},`,"");if(ey(c)&&a!=="_self")return TE(e||"",a),new Bu(null);const f=window.open(e||"",a,u);D(f,t,"popup-blocked");try{f.focus()}catch{}return new Bu(f)}function TE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const SE="__/auth/handler",OE="emulator/auth/handler",RE=encodeURIComponent("fac");async function Hu(t,e,n,i,r,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:yi,eventId:r};if(e instanceof wd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))o[u]=f}if(e instanceof Ir){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${RE}=${encodeURIComponent(l)}`:"";return`${AE(t)}?${vi(a).slice(1)}${c}`}function AE({config:t}){return t.emulator?ul(t,OE):`https://${t.authDomain}/${SE}`}/**
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
 */const No="webStorageSupport";class xE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rd,this._completeRedirectFn=eE,this._overrideRedirectResult=Qy}async _openPopup(e,n,i,r){var s;Rt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hu(e,n,i,ma(),r);return CE(e,o,pl())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Hu(e,n,i,ma(),r);return Ny(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Rt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await vE(e),i=new nE(e);return n.register("authEvent",r=>(D(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(No,{type:No},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[No];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pd()||hl()||Ks()}}const kE=xE;var ju="@firebase/auth",Wu="1.0.0";/**
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
 */class PE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ME(t){li(new In("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gd(t)},c=new cy(i,r,s,l);return fy(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),li(new In("auth-internal",e=>{const n=wr(e.getProvider("auth").getImmediate());return(i=>new PE(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(ju,Wu,NE(t)),qt(ju,Wu,"esm2017")}/**
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
 */const DE=5*60,LE=Gh("authIdTokenMaxAge")||DE;let Vu=null;const FE=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>LE)return;const r=n==null?void 0:n.token;Vu!==r&&(Vu=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $E(t=Zh()){const e=al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uy(t,{popupRedirectResolver:kE,persistence:[jy,xy,Rd]}),i=Gh("authTokenSyncURL");if(i){const s=FE(i);Sy(n,s,()=>s(n.currentUser)),Ty(n,o=>s(o))}const r=Vh("auth");return r&&hy(n,`http://${r}`),n}ME("Browser");var UE="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z";const tn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},zu={mdi:{size:24,viewbox:"0 0 24 24"},"simple-icons":{size:24,viewbox:"0 0 24 24"},default:{size:0,viewbox:"0 0 0 0"}},BE={name:"icon",props:{type:String,path:{type:String,required:!0},size:{type:[String,Number],default:24},viewbox:String,flip:{type:String,validator:t=>["horizontal","vertical","both","none"].includes(t)},rotate:{type:Number,default:0}},computed:{styles(){return{"--sx":["both","horizontal"].includes(this.flip)?"-1":"1","--sy":["both","vertical"].includes(this.flip)?"-1":"1","--r":isNaN(this.rotate)?this.rotate:this.rotate+"deg"}},defaults(){return zu[this.type]||zu.default},sizeValue(){return this.size||this.defaults.size},viewboxValue(){return this.viewbox||this.defaults.viewbox}}},HE=["width","height","viewBox"],jE=["d"];function WE(t,e,n,i,r,s){return me(),Ge("svg",{width:s.sizeValue,height:s.sizeValue,viewBox:s.viewboxValue,style:kn(s.styles)},[z("path",{d:n.path},null,8,jE)],12,HE)}const VE=tn(BE,[["render",WE],["__scopeId","data-v-76aa6b74"]]),Gu={__name:"CloseButton",props:{show:{type:Boolean,default:!1}},setup(t){return(e,n)=>yh((me(),si(er(VE),{class:"close-btn",size:"24",type:"mdi",path:er(UE)},null,8,["path"])),[[tv,t.show]])}};function Dd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ml={},Qs={},Ue={};Object.defineProperty(Ue,"__esModule",{value:!0});function zE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var GE=function t(e,n){zE(this,t),this.data=e,this.text=n.text||e,this.options=n};Ue.default=GE;Object.defineProperty(Qs,"__esModule",{value:!0});Qs.CODE39=void 0;var qE=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),KE=Ue,YE=XE(KE);function XE(t){return t&&t.__esModule?t:{default:t}}function QE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function JE(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function ZE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var e1=function(t){ZE(e,t);function e(n,i){return QE(this,e),n=n.toUpperCase(),i.mod43&&(n+=i1(r1(n))),JE(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return qE(e,[{key:"encode",value:function(){for(var i=Mo("*"),r=0;r<this.data.length;r++)i+=Mo(this.data[r])+"0";return i+=Mo("*"),{data:i,text:this.text}}},{key:"valid",value:function(){return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)!==-1}}]),e}(YE.default),Ld=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],t1=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770];function Mo(t){return n1(Fd(t))}function n1(t){return t1[t].toString(2)}function i1(t){return Ld[t]}function Fd(t){return Ld.indexOf(t)}function r1(t){for(var e=0,n=0;n<t.length;n++)e+=Fd(t[n]);return e=e%43,e}Qs.CODE39=e1;var gt={},vl={},wi={},ae={};Object.defineProperty(ae,"__esModule",{value:!0});var Ni;function Do(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $d=ae.SET_A=0,Ud=ae.SET_B=1,Bd=ae.SET_C=2;ae.SHIFT=98;var s1=ae.START_A=103,o1=ae.START_B=104,a1=ae.START_C=105;ae.MODULO=103;ae.STOP=106;ae.FNC1=207;ae.SET_BY_CODE=(Ni={},Do(Ni,s1,$d),Do(Ni,o1,Ud),Do(Ni,a1,Bd),Ni);ae.SWAP={101:$d,100:Ud,99:Bd};ae.A_START_CHAR=String.fromCharCode(208);ae.B_START_CHAR=String.fromCharCode(209);ae.C_START_CHAR=String.fromCharCode(210);ae.A_CHARS="[\0-_È-Ï]";ae.B_CHARS="[ -È-Ï]";ae.C_CHARS="(Ï*[0-9]{2}Ï*)";ae.BARS=[11011001100,11001101100,11001100110,10010011e3,10010001100,10001001100,10011001e3,10011000100,10001100100,11001001e3,11001000100,11000100100,10110011100,10011011100,10011001110,10111001100,10011101100,10011100110,11001110010,11001011100,11001001110,11011100100,11001110100,11101101110,11101001100,11100101100,11100100110,11101100100,11100110100,11100110010,11011011e3,11011000110,11000110110,10100011e3,10001011e3,10001000110,10110001e3,10001101e3,10001100010,11010001e3,11000101e3,11000100010,10110111e3,10110001110,10001101110,10111011e3,10111000110,10001110110,11101110110,11010001110,11000101110,11011101e3,11011100010,11011101110,11101011e3,11101000110,11100010110,11101101e3,11101100010,11100011010,11101111010,11001000010,11110001010,1010011e4,10100001100,1001011e4,10010000110,10000101100,10000100110,1011001e4,10110000100,1001101e4,10011000010,10000110100,10000110010,11000010010,1100101e4,11110111010,11000010100,10001111010,10100111100,10010111100,10010011110,10111100100,10011110100,10011110010,11110100100,11110010100,11110010010,11011011110,11011110110,11110110110,10101111e3,10100011110,10001011110,10111101e3,10111100010,11110101e3,11110100010,10111011110,10111101110,11101011110,11110101110,11010000100,1101001e4,11010011100,1100011101011];Object.defineProperty(wi,"__esModule",{value:!0});var l1=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c1=Ue,u1=f1(c1),We=ae;function f1(t){return t&&t.__esModule?t:{default:t}}function h1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d1(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function _1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var p1=function(t){_1(e,t);function e(n,i){h1(this,e);var r=d1(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n.substring(1),i));return r.bytes=n.split("").map(function(s){return s.charCodeAt(0)}),r}return l1(e,[{key:"valid",value:function(){return/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)}},{key:"encode",value:function(){var i=this.bytes,r=i.shift()-105,s=We.SET_BY_CODE[r];if(s===void 0)throw new RangeError("The encoding does not start with a start character.");this.shouldEncodeAsEan128()===!0&&i.unshift(We.FNC1);var o=e.next(i,1,s);return{text:this.text===this.data?this.text.replace(/[^\x20-\x7E]/g,""):this.text,data:e.getBar(r)+o.result+e.getBar((o.checksum+r)%We.MODULO)+e.getBar(We.STOP)}}},{key:"shouldEncodeAsEan128",value:function(){var i=this.options.ean128||!1;return typeof i=="string"&&(i=i.toLowerCase()==="true"),i}}],[{key:"getBar",value:function(i){return We.BARS[i]?We.BARS[i].toString():""}},{key:"correctIndex",value:function(i,r){if(r===We.SET_A){var s=i.shift();return s<32?s+64:s-32}else return r===We.SET_B?i.shift()-32:(i.shift()-48)*10+i.shift()-48}},{key:"next",value:function(i,r,s){if(!i.length)return{result:"",checksum:0};var o=void 0,a=void 0;if(i[0]>=200){a=i.shift()-105;var l=We.SWAP[a];l!==void 0?o=e.next(i,r+1,l):((s===We.SET_A||s===We.SET_B)&&a===We.SHIFT&&(i[0]=s===We.SET_A?i[0]>95?i[0]-96:i[0]:i[0]<32?i[0]+96:i[0]),o=e.next(i,r+1,s))}else a=e.correctIndex(i,s),o=e.next(i,r+1,s);var c=e.getBar(a),u=a*r;return{result:c+o.result,checksum:u+o.checksum}}}]),e}(u1.default);wi.default=p1;var yl={};Object.defineProperty(yl,"__esModule",{value:!0});var Kt=ae,Hd=function(e){return e.match(new RegExp("^"+Kt.A_CHARS+"*"))[0].length},jd=function(e){return e.match(new RegExp("^"+Kt.B_CHARS+"*"))[0].length},Wd=function(e){return e.match(new RegExp("^"+Kt.C_CHARS+"*"))[0]};function El(t,e){var n=e?Kt.A_CHARS:Kt.B_CHARS,i=t.match(new RegExp("^("+n+"+?)(([0-9]{2}){2,})([^0-9]|$)"));if(i)return i[1]+String.fromCharCode(204)+Vd(t.substring(i[1].length));var r=t.match(new RegExp("^"+n+"+"))[0];return r.length===t.length?t:r+String.fromCharCode(e?205:206)+El(t.substring(r.length),!e)}function Vd(t){var e=Wd(t),n=e.length;if(n===t.length)return t;t=t.substring(n);var i=Hd(t)>=jd(t);return e+String.fromCharCode(i?206:205)+El(t,i)}yl.default=function(t){var e=void 0,n=Wd(t).length;if(n>=2)e=Kt.C_START_CHAR+Vd(t);else{var i=Hd(t)>jd(t);e=(i?Kt.A_START_CHAR:Kt.B_START_CHAR)+El(t,i)}return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,function(r,s){return String.fromCharCode(203)+s})};Object.defineProperty(vl,"__esModule",{value:!0});var g1=wi,m1=zd(g1),v1=yl,y1=zd(v1);function zd(t){return t&&t.__esModule?t:{default:t}}function E1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lo(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function b1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var w1=function(t){b1(e,t);function e(n,i){if(E1(this,e),/^[\x00-\x7F\xC8-\xD3]+$/.test(n))var r=Lo(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,(0,y1.default)(n),i));else var r=Lo(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));return Lo(r)}return e}(m1.default);vl.default=w1;var bl={};Object.defineProperty(bl,"__esModule",{value:!0});var I1=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),C1=wi,T1=S1(C1),qu=ae;function S1(t){return t&&t.__esModule?t:{default:t}}function O1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R1(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function A1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var x1=function(t){A1(e,t);function e(n,i){return O1(this,e),R1(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,qu.A_START_CHAR+n,i))}return I1(e,[{key:"valid",value:function(){return new RegExp("^"+qu.A_CHARS+"+$").test(this.data)}}]),e}(T1.default);bl.default=x1;var wl={};Object.defineProperty(wl,"__esModule",{value:!0});var k1=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),P1=wi,N1=M1(P1),Ku=ae;function M1(t){return t&&t.__esModule?t:{default:t}}function D1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L1(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function F1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var $1=function(t){F1(e,t);function e(n,i){return D1(this,e),L1(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,Ku.B_START_CHAR+n,i))}return k1(e,[{key:"valid",value:function(){return new RegExp("^"+Ku.B_CHARS+"+$").test(this.data)}}]),e}(N1.default);wl.default=$1;var Il={};Object.defineProperty(Il,"__esModule",{value:!0});var U1=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),B1=wi,H1=j1(B1),Yu=ae;function j1(t){return t&&t.__esModule?t:{default:t}}function W1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function V1(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function z1(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var G1=function(t){z1(e,t);function e(n,i){return W1(this,e),V1(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,Yu.C_START_CHAR+n,i))}return U1(e,[{key:"valid",value:function(){return new RegExp("^"+Yu.C_CHARS+"+$").test(this.data)}}]),e}(H1.default);Il.default=G1;Object.defineProperty(gt,"__esModule",{value:!0});gt.CODE128C=gt.CODE128B=gt.CODE128A=gt.CODE128=void 0;var q1=vl,K1=Js(q1),Y1=bl,X1=Js(Y1),Q1=wl,J1=Js(Q1),Z1=Il,eb=Js(Z1);function Js(t){return t&&t.__esModule?t:{default:t}}gt.CODE128=K1.default;gt.CODE128A=X1.default;gt.CODE128B=J1.default;gt.CODE128C=eb.default;var Me={},Cl={},Je={};Object.defineProperty(Je,"__esModule",{value:!0});Je.SIDE_BIN="101";Je.MIDDLE_BIN="01010";Je.BINARIES={L:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],G:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],R:["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"],O:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],E:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]};Je.EAN2_STRUCTURE=["LL","LG","GL","GG"];Je.EAN5_STRUCTURE=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"];Je.EAN13_STRUCTURE=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];var Zs={},Pn={};Object.defineProperty(Pn,"__esModule",{value:!0});var tb=Je,nb=function(e,n,i){var r=e.split("").map(function(o,a){return tb.BINARIES[n[a]]}).map(function(o,a){return o?o[e[a]]:""});if(i){var s=e.length-1;r=r.map(function(o,a){return a<s?o+i:o})}return r.join("")};Pn.default=nb;Object.defineProperty(Zs,"__esModule",{value:!0});var ib=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Bn=Je,rb=Pn,Xu=Gd(rb),sb=Ue,ob=Gd(sb);function Gd(t){return t&&t.__esModule?t:{default:t}}function ab(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lb(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function cb(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ub=function(t){cb(e,t);function e(n,i){ab(this,e);var r=lb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));return r.fontSize=!i.flat&&i.fontSize>i.width*10?i.width*10:i.fontSize,r.guardHeight=i.height+r.fontSize/2+i.textMargin,r}return ib(e,[{key:"encode",value:function(){return this.options.flat?this.encodeFlat():this.encodeGuarded()}},{key:"leftText",value:function(i,r){return this.text.substr(i,r)}},{key:"leftEncode",value:function(i,r){return(0,Xu.default)(i,r)}},{key:"rightText",value:function(i,r){return this.text.substr(i,r)}},{key:"rightEncode",value:function(i,r){return(0,Xu.default)(i,r)}},{key:"encodeGuarded",value:function(){var i={fontSize:this.fontSize},r={height:this.guardHeight};return[{data:Bn.SIDE_BIN,options:r},{data:this.leftEncode(),text:this.leftText(),options:i},{data:Bn.MIDDLE_BIN,options:r},{data:this.rightEncode(),text:this.rightText(),options:i},{data:Bn.SIDE_BIN,options:r}]}},{key:"encodeFlat",value:function(){var i=[Bn.SIDE_BIN,this.leftEncode(),Bn.MIDDLE_BIN,this.rightEncode(),Bn.SIDE_BIN];return{data:i.join(""),text:this.text}}}]),e}(ob.default);Zs.default=ub;Object.defineProperty(Cl,"__esModule",{value:!0});var fb=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Mi=function t(e,n,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:t(s,n,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},hb=Je,db=Zs,_b=pb(db);function pb(t){return t&&t.__esModule?t:{default:t}}function gb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mb(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function vb(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Qu=function(e){var n=e.substr(0,12).split("").map(function(i){return+i}).reduce(function(i,r,s){return s%2?i+r*3:i+r},0);return(10-n%10)%10},yb=function(t){vb(e,t);function e(n,i){gb(this,e),n.search(/^[0-9]{12}$/)!==-1&&(n+=Qu(n));var r=mb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));return r.lastChar=i.lastChar,r}return fb(e,[{key:"valid",value:function(){return this.data.search(/^[0-9]{13}$/)!==-1&&+this.data[12]===Qu(this.data)}},{key:"leftText",value:function(){return Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftText",this).call(this,1,6)}},{key:"leftEncode",value:function(){var i=this.data.substr(1,6),r=hb.EAN13_STRUCTURE[this.data[0]];return Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftEncode",this).call(this,i,r)}},{key:"rightText",value:function(){return Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightText",this).call(this,7,6)}},{key:"rightEncode",value:function(){var i=this.data.substr(7,6);return Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightEncode",this).call(this,i,"RRRRRR")}},{key:"encodeGuarded",value:function(){var i=Mi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"encodeGuarded",this).call(this);return this.options.displayValue&&(i.unshift({data:"000000000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),this.options.lastChar&&(i.push({data:"00"}),i.push({data:"00000",text:this.options.lastChar,options:{fontSize:this.fontSize}}))),i}}]),e}(_b.default);Cl.default=yb;var Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});var Eb=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),jr=function t(e,n,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:t(s,n,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},bb=Zs,wb=Ib(bb);function Ib(t){return t&&t.__esModule?t:{default:t}}function Cb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Tb(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Sb(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Ju=function(e){var n=e.substr(0,7).split("").map(function(i){return+i}).reduce(function(i,r,s){return s%2?i+r:i+r*3},0);return(10-n%10)%10},Ob=function(t){Sb(e,t);function e(n,i){return Cb(this,e),n.search(/^[0-9]{7}$/)!==-1&&(n+=Ju(n)),Tb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return Eb(e,[{key:"valid",value:function(){return this.data.search(/^[0-9]{8}$/)!==-1&&+this.data[7]===Ju(this.data)}},{key:"leftText",value:function(){return jr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftText",this).call(this,0,4)}},{key:"leftEncode",value:function(){var i=this.data.substr(0,4);return jr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"leftEncode",this).call(this,i,"LLLL")}},{key:"rightText",value:function(){return jr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightText",this).call(this,4,4)}},{key:"rightEncode",value:function(){var i=this.data.substr(4,4);return jr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"rightEncode",this).call(this,i,"RRRR")}}]),e}(wb.default);Tl.default=Ob;var Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});var Rb=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Ab=Je,xb=Pn,kb=qd(xb),Pb=Ue,Nb=qd(Pb);function qd(t){return t&&t.__esModule?t:{default:t}}function Mb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Db(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Lb(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Fb=function(e){var n=e.split("").map(function(i){return+i}).reduce(function(i,r,s){return s%2?i+r*9:i+r*3},0);return n%10},$b=function(t){Lb(e,t);function e(n,i){return Mb(this,e),Db(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return Rb(e,[{key:"valid",value:function(){return this.data.search(/^[0-9]{5}$/)!==-1}},{key:"encode",value:function(){var i=Ab.EAN5_STRUCTURE[Fb(this.data)];return{data:"1011"+(0,kb.default)(this.data,i,"01"),text:this.text}}}]),e}(Nb.default);Sl.default=$b;var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});var Ub=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Bb=Je,Hb=Pn,jb=Kd(Hb),Wb=Ue,Vb=Kd(Wb);function Kd(t){return t&&t.__esModule?t:{default:t}}function zb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Gb(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function qb(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Kb=function(t){qb(e,t);function e(n,i){return zb(this,e),Gb(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return Ub(e,[{key:"valid",value:function(){return this.data.search(/^[0-9]{2}$/)!==-1}},{key:"encode",value:function(){var i=Bb.EAN2_STRUCTURE[parseInt(this.data)%4];return{data:"1011"+(0,jb.default)(this.data,i,"01"),text:this.text}}}]),e}(Vb.default);Ol.default=Kb;var Tr={};Object.defineProperty(Tr,"__esModule",{value:!0});var Yb=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();Tr.checksum=ya;var Xb=Pn,Hn=Yd(Xb),Qb=Ue,Jb=Yd(Qb);function Yd(t){return t&&t.__esModule?t:{default:t}}function Zb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ew(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function tw(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var nw=function(t){tw(e,t);function e(n,i){Zb(this,e),n.search(/^[0-9]{11}$/)!==-1&&(n+=ya(n));var r=ew(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));return r.displayValue=i.displayValue,i.fontSize>i.width*10?r.fontSize=i.width*10:r.fontSize=i.fontSize,r.guardHeight=i.height+r.fontSize/2+i.textMargin,r}return Yb(e,[{key:"valid",value:function(){return this.data.search(/^[0-9]{12}$/)!==-1&&this.data[11]==ya(this.data)}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var i="";return i+="101",i+=(0,Hn.default)(this.data.substr(0,6),"LLLLLL"),i+="01010",i+=(0,Hn.default)(this.data.substr(6,6),"RRRRRR"),i+="101",{data:i,text:this.text}}},{key:"guardedEncoding",value:function(){var i=[];return this.displayValue&&i.push({data:"00000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),i.push({data:"101"+(0,Hn.default)(this.data[0],"L"),options:{height:this.guardHeight}}),i.push({data:(0,Hn.default)(this.data.substr(1,5),"LLLLL"),text:this.text.substr(1,5),options:{fontSize:this.fontSize}}),i.push({data:"01010",options:{height:this.guardHeight}}),i.push({data:(0,Hn.default)(this.data.substr(6,5),"RRRRR"),text:this.text.substr(6,5),options:{fontSize:this.fontSize}}),i.push({data:(0,Hn.default)(this.data[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&i.push({data:"00000000",text:this.text.substr(11,1),options:{textAlign:"right",fontSize:this.fontSize}}),i}}]),e}(Jb.default);function ya(t){var e=0,n;for(n=1;n<11;n+=2)e+=parseInt(t[n]);for(n=0;n<11;n+=2)e+=parseInt(t[n])*3;return(10-e%10)%10}Tr.default=nw;var Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});var iw=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),rw=Pn,sw=Xd(rw),ow=Ue,aw=Xd(ow),lw=Tr;function Xd(t){return t&&t.__esModule?t:{default:t}}function cw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fo(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function uw(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var fw=["XX00000XXX","XX10000XXX","XX20000XXX","XXX00000XX","XXXX00000X","XXXXX00005","XXXXX00006","XXXXX00007","XXXXX00008","XXXXX00009"],hw=[["EEEOOO","OOOEEE"],["EEOEOO","OOEOEE"],["EEOOEO","OOEEOE"],["EEOOOE","OOEEEO"],["EOEEOO","OEOOEE"],["EOOEEO","OEEOOE"],["EOOOEE","OEEEOO"],["EOEOEO","OEOEOE"],["EOEOOE","OEOEEO"],["EOOEOE","OEEOEO"]],dw=function(t){uw(e,t);function e(n,i){cw(this,e);var r=Fo(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));if(r.isValid=!1,n.search(/^[0-9]{6}$/)!==-1)r.middleDigits=n,r.upcA=Zu(n,"0"),r.text=i.text||""+r.upcA[0]+n+r.upcA[r.upcA.length-1],r.isValid=!0;else if(n.search(/^[01][0-9]{7}$/)!==-1)if(r.middleDigits=n.substring(1,n.length-1),r.upcA=Zu(r.middleDigits,n[0]),r.upcA[r.upcA.length-1]===n[n.length-1])r.isValid=!0;else return Fo(r);else return Fo(r);return r.displayValue=i.displayValue,i.fontSize>i.width*10?r.fontSize=i.width*10:r.fontSize=i.fontSize,r.guardHeight=i.height+r.fontSize/2+i.textMargin,r}return iw(e,[{key:"valid",value:function(){return this.isValid}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var i="";return i+="101",i+=this.encodeMiddleDigits(),i+="010101",{data:i,text:this.text}}},{key:"guardedEncoding",value:function(){var i=[];return this.displayValue&&i.push({data:"00000000",text:this.text[0],options:{textAlign:"left",fontSize:this.fontSize}}),i.push({data:"101",options:{height:this.guardHeight}}),i.push({data:this.encodeMiddleDigits(),text:this.text.substring(1,7),options:{fontSize:this.fontSize}}),i.push({data:"010101",options:{height:this.guardHeight}}),this.displayValue&&i.push({data:"00000000",text:this.text[7],options:{textAlign:"right",fontSize:this.fontSize}}),i}},{key:"encodeMiddleDigits",value:function(){var i=this.upcA[0],r=this.upcA[this.upcA.length-1],s=hw[parseInt(r)][parseInt(i)];return(0,sw.default)(this.middleDigits,s)}}]),e}(aw.default);function Zu(t,e){for(var n=parseInt(t[t.length-1]),i=fw[n],r="",s=0,o=0;o<i.length;o++){var a=i[o];a==="X"?r+=t[s++]:r+=a}return r=""+e+r,""+r+(0,lw.checksum)(r)}Rl.default=dw;Object.defineProperty(Me,"__esModule",{value:!0});Me.UPCE=Me.UPC=Me.EAN2=Me.EAN5=Me.EAN8=Me.EAN13=void 0;var _w=Cl,pw=Ii(_w),gw=Tl,mw=Ii(gw),vw=Sl,yw=Ii(vw),Ew=Ol,bw=Ii(Ew),ww=Tr,Iw=Ii(ww),Cw=Rl,Tw=Ii(Cw);function Ii(t){return t&&t.__esModule?t:{default:t}}Me.EAN13=pw.default;Me.EAN8=mw.default;Me.EAN5=yw.default;Me.EAN2=bw.default;Me.UPC=Iw.default;Me.UPCE=Tw.default;var ui={},eo={},Sr={};Object.defineProperty(Sr,"__esModule",{value:!0});Sr.START_BIN="1010";Sr.END_BIN="11101";Sr.BINARIES=["00110","10001","01001","11000","00101","10100","01100","00011","10010","01010"];Object.defineProperty(eo,"__esModule",{value:!0});var Sw=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Wr=Sr,Ow=Ue,Rw=Aw(Ow);function Aw(t){return t&&t.__esModule?t:{default:t}}function xw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function kw(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Pw(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Nw=function(t){Pw(e,t);function e(){return xw(this,e),kw(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Sw(e,[{key:"valid",value:function(){return this.data.search(/^([0-9]{2})+$/)!==-1}},{key:"encode",value:function(){var i=this,r=this.data.match(/.{2}/g).map(function(s){return i.encodePair(s)}).join("");return{data:Wr.START_BIN+r+Wr.END_BIN,text:this.text}}},{key:"encodePair",value:function(i){var r=Wr.BINARIES[i[1]];return Wr.BINARIES[i[0]].split("").map(function(s,o){return(s==="1"?"111":"1")+(r[o]==="1"?"000":"0")}).join("")}}]),e}(Rw.default);eo.default=Nw;var Al={};Object.defineProperty(Al,"__esModule",{value:!0});var Mw=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Dw=eo,Lw=Fw(Dw);function Fw(t){return t&&t.__esModule?t:{default:t}}function $w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Uw(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Bw(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ef=function(e){var n=e.substr(0,13).split("").map(function(i){return parseInt(i,10)}).reduce(function(i,r,s){return i+r*(3-s%2*2)},0);return Math.ceil(n/10)*10-n},Hw=function(t){Bw(e,t);function e(n,i){return $w(this,e),n.search(/^[0-9]{13}$/)!==-1&&(n+=ef(n)),Uw(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return Mw(e,[{key:"valid",value:function(){return this.data.search(/^[0-9]{14}$/)!==-1&&+this.data[13]===ef(this.data)}}]),e}(Lw.default);Al.default=Hw;Object.defineProperty(ui,"__esModule",{value:!0});ui.ITF14=ui.ITF=void 0;var jw=eo,Ww=Qd(jw),Vw=Al,zw=Qd(Vw);function Qd(t){return t&&t.__esModule?t:{default:t}}ui.ITF=Ww.default;ui.ITF14=zw.default;var Ke={},Nn={};Object.defineProperty(Nn,"__esModule",{value:!0});var Gw=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),qw=Ue,Kw=Yw(qw);function Yw(t){return t&&t.__esModule?t:{default:t}}function Xw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qw(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Jw(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Zw=function(t){Jw(e,t);function e(n,i){return Xw(this,e),Qw(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return Gw(e,[{key:"encode",value:function(){for(var i="110",r=0;r<this.data.length;r++){var s=parseInt(this.data[r]),o=s.toString(2);o=eI(o,4-o.length);for(var a=0;a<o.length;a++)i+=o[a]=="0"?"100":"110"}return i+="1001",{data:i,text:this.text}}},{key:"valid",value:function(){return this.data.search(/^[0-9]+$/)!==-1}}]),e}(Kw.default);function eI(t,e){for(var n=0;n<e;n++)t="0"+t;return t}Nn.default=Zw;var xl={},Mn={};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.mod10=tI;Mn.mod11=nI;function tI(t){for(var e=0,n=0;n<t.length;n++){var i=parseInt(t[n]);(n+t.length)%2===0?e+=i:e+=i*2%10+Math.floor(i*2/10)}return(10-e%10)%10}function nI(t){for(var e=0,n=[2,3,4,5,6,7],i=0;i<t.length;i++){var r=parseInt(t[t.length-1-i]);e+=n[i%n.length]*r}return(11-e%11)%11}Object.defineProperty(xl,"__esModule",{value:!0});var iI=Nn,rI=oI(iI),sI=Mn;function oI(t){return t&&t.__esModule?t:{default:t}}function aI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lI(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function cI(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var uI=function(t){cI(e,t);function e(n,i){return aI(this,e),lI(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n+(0,sI.mod10)(n),i))}return e}(rI.default);xl.default=uI;var kl={};Object.defineProperty(kl,"__esModule",{value:!0});var fI=Nn,hI=_I(fI),dI=Mn;function _I(t){return t&&t.__esModule?t:{default:t}}function pI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gI(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function mI(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var vI=function(t){mI(e,t);function e(n,i){return pI(this,e),gI(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n+(0,dI.mod11)(n),i))}return e}(hI.default);kl.default=vI;var Pl={};Object.defineProperty(Pl,"__esModule",{value:!0});var yI=Nn,EI=bI(yI),tf=Mn;function bI(t){return t&&t.__esModule?t:{default:t}}function wI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function II(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function CI(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var TI=function(t){CI(e,t);function e(n,i){return wI(this,e),n+=(0,tf.mod10)(n),n+=(0,tf.mod10)(n),II(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return e}(EI.default);Pl.default=TI;var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});var SI=Nn,OI=RI(SI),nf=Mn;function RI(t){return t&&t.__esModule?t:{default:t}}function AI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xI(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function kI(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var PI=function(t){kI(e,t);function e(n,i){return AI(this,e),n+=(0,nf.mod11)(n),n+=(0,nf.mod10)(n),xI(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return e}(OI.default);Nl.default=PI;Object.defineProperty(Ke,"__esModule",{value:!0});Ke.MSI1110=Ke.MSI1010=Ke.MSI11=Ke.MSI10=Ke.MSI=void 0;var NI=Nn,MI=Or(NI),DI=xl,LI=Or(DI),FI=kl,$I=Or(FI),UI=Pl,BI=Or(UI),HI=Nl,jI=Or(HI);function Or(t){return t&&t.__esModule?t:{default:t}}Ke.MSI=MI.default;Ke.MSI10=LI.default;Ke.MSI11=$I.default;Ke.MSI1010=BI.default;Ke.MSI1110=jI.default;var to={};Object.defineProperty(to,"__esModule",{value:!0});to.pharmacode=void 0;var WI=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),VI=Ue,zI=GI(VI);function GI(t){return t&&t.__esModule?t:{default:t}}function qI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function KI(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function YI(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var XI=function(t){YI(e,t);function e(n,i){qI(this,e);var r=KI(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));return r.number=parseInt(n,10),r}return WI(e,[{key:"encode",value:function(){for(var i=this.number,r="";!isNaN(i)&&i!=0;)i%2===0?(r="11100"+r,i=(i-2)/2):(r="100"+r,i=(i-1)/2);return r=r.slice(0,-2),{data:r,text:this.text}}},{key:"valid",value:function(){return this.number>=3&&this.number<=131070}}]),e}(zI.default);to.pharmacode=XI;var no={};Object.defineProperty(no,"__esModule",{value:!0});no.codabar=void 0;var QI=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),JI=Ue,ZI=eC(JI);function eC(t){return t&&t.__esModule?t:{default:t}}function tC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nC(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function iC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var rC=function(t){iC(e,t);function e(n,i){tC(this,e),n.search(/^[0-9\-\$\:\.\+\/]+$/)===0&&(n="A"+n+"A");var r=nC(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n.toUpperCase(),i));return r.text=r.options.text||r.text.replace(/[A-D]/g,""),r}return QI(e,[{key:"valid",value:function(){return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)!==-1}},{key:"encode",value:function(){for(var i=[],r=this.getEncodings(),s=0;s<this.data.length;s++)i.push(r[this.data.charAt(s)]),s!==this.data.length-1&&i.push("0");return{text:this.text,data:i.join("")}}},{key:"getEncodings",value:function(){return{0:"101010011",1:"101011001",2:"101001011",3:"110010101",4:"101101001",5:"110101001",6:"100101011",7:"100101101",8:"100110101",9:"110100101","-":"101001101",$:"101100101",":":"1101011011","/":"1101101011",".":"1101101101","+":"1011011011",A:"1011001001",B:"1001001011",C:"1010010011",D:"1010011001"}}}]),e}(ZI.default);no.codabar=rC;var io={};Object.defineProperty(io,"__esModule",{value:!0});io.GenericBarcode=void 0;var sC=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),oC=Ue,aC=lC(oC);function lC(t){return t&&t.__esModule?t:{default:t}}function cC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uC(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function fC(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var hC=function(t){fC(e,t);function e(n,i){return cC(this,e),uC(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i))}return sC(e,[{key:"encode",value:function(){return{data:"10101010101010101010101010101010101010101",text:this.text}}},{key:"valid",value:function(){return!0}}]),e}(aC.default);io.GenericBarcode=hC;Object.defineProperty(ml,"__esModule",{value:!0});var dC=Qs,Vr=gt,jn=Me,rf=ui,Di=Ke,_C=to,pC=no,gC=io;ml.default={CODE39:dC.CODE39,CODE128:Vr.CODE128,CODE128A:Vr.CODE128A,CODE128B:Vr.CODE128B,CODE128C:Vr.CODE128C,EAN13:jn.EAN13,EAN8:jn.EAN8,EAN5:jn.EAN5,EAN2:jn.EAN2,UPC:jn.UPC,UPCE:jn.UPCE,ITF14:rf.ITF14,ITF:rf.ITF,MSI:Di.MSI,MSI10:Di.MSI10,MSI11:Di.MSI11,MSI1010:Di.MSI1010,MSI1110:Di.MSI1110,pharmacode:_C.pharmacode,codabar:pC.codabar,GenericBarcode:gC.GenericBarcode};var Ci={};Object.defineProperty(Ci,"__esModule",{value:!0});var mC=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};Ci.default=function(t,e){return mC({},t,e)};var Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});Ml.default=vC;function vC(t){var e=[];function n(i){if(Array.isArray(i))for(var r=0;r<i.length;r++)n(i[r]);else i.text=i.text||"",i.data=i.data||"",e.push(i)}return n(t),e}var Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});Dl.default=yC;function yC(t){return t.marginTop=t.marginTop||t.margin,t.marginBottom=t.marginBottom||t.margin,t.marginRight=t.marginRight||t.margin,t.marginLeft=t.marginLeft||t.margin,t}var Ll={},Fl={},ro={};Object.defineProperty(ro,"__esModule",{value:!0});ro.default=EC;function EC(t){var e=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"];for(var n in e)e.hasOwnProperty(n)&&(n=e[n],typeof t[n]=="string"&&(t[n]=parseInt(t[n],10)));return typeof t.displayValue=="string"&&(t.displayValue=t.displayValue!="false"),t}var so={};Object.defineProperty(so,"__esModule",{value:!0});var bC={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",text:void 0,textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function(){}};so.default=bC;Object.defineProperty(Fl,"__esModule",{value:!0});var wC=ro,IC=Jd(wC),CC=so,sf=Jd(CC);function Jd(t){return t&&t.__esModule?t:{default:t}}function TC(t){var e={};for(var n in sf.default)sf.default.hasOwnProperty(n)&&(t.hasAttribute("jsbarcode-"+n.toLowerCase())&&(e[n]=t.getAttribute("jsbarcode-"+n.toLowerCase())),t.hasAttribute("data-"+n.toLowerCase())&&(e[n]=t.getAttribute("data-"+n.toLowerCase())));return e.value=t.getAttribute("jsbarcode-value")||t.getAttribute("data-value"),e=(0,IC.default)(e),e}Fl.default=TC;var $l={},Ul={},ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.getTotalWidthOfEncodings=ze.calculateEncodingAttributes=ze.getBarcodePadding=ze.getEncodingHeight=ze.getMaximumHeightOfEncodings=void 0;var SC=Ci,OC=RC(SC);function RC(t){return t&&t.__esModule?t:{default:t}}function Zd(t,e){return e.height+(e.displayValue&&t.text.length>0?e.fontSize+e.textMargin:0)+e.marginTop+e.marginBottom}function e_(t,e,n){if(n.displayValue&&e<t){if(n.textAlign=="center")return Math.floor((t-e)/2);if(n.textAlign=="left")return 0;if(n.textAlign=="right")return Math.floor(t-e)}return 0}function AC(t,e,n){for(var i=0;i<t.length;i++){var r=t[i],s=(0,OC.default)(e,r.options),o;s.displayValue?o=PC(r.text,s,n):o=0;var a=r.data.length*s.width;r.width=Math.ceil(Math.max(o,a)),r.height=Zd(r,s),r.barcodePadding=e_(o,a,s)}}function xC(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].width;return e}function kC(t){for(var e=0,n=0;n<t.length;n++)t[n].height>e&&(e=t[n].height);return e}function PC(t,e,n){var i;if(n)i=n;else if(typeof document<"u")i=document.createElement("canvas").getContext("2d");else return 0;i.font=e.fontOptions+" "+e.fontSize+"px "+e.font;var r=i.measureText(t);if(!r)return 0;var s=r.width;return s}ze.getMaximumHeightOfEncodings=kC;ze.getEncodingHeight=Zd;ze.getBarcodePadding=e_;ze.calculateEncodingAttributes=AC;ze.getTotalWidthOfEncodings=xC;Object.defineProperty(Ul,"__esModule",{value:!0});var NC=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),MC=Ci,DC=LC(MC),$o=ze;function LC(t){return t&&t.__esModule?t:{default:t}}function FC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var $C=function(){function t(e,n,i){FC(this,t),this.canvas=e,this.encodings=n,this.options=i}return NC(t,[{key:"render",value:function(){if(!this.canvas.getContext)throw new Error("The browser does not support canvas.");this.prepareCanvas();for(var n=0;n<this.encodings.length;n++){var i=(0,DC.default)(this.options,this.encodings[n].options);this.drawCanvasBarcode(i,this.encodings[n]),this.drawCanvasText(i,this.encodings[n]),this.moveCanvasDrawing(this.encodings[n])}this.restoreCanvas()}},{key:"prepareCanvas",value:function(){var n=this.canvas.getContext("2d");n.save(),(0,$o.calculateEncodingAttributes)(this.encodings,this.options,n);var i=(0,$o.getTotalWidthOfEncodings)(this.encodings),r=(0,$o.getMaximumHeightOfEncodings)(this.encodings);this.canvas.width=i+this.options.marginLeft+this.options.marginRight,this.canvas.height=r,n.clearRect(0,0,this.canvas.width,this.canvas.height),this.options.background&&(n.fillStyle=this.options.background,n.fillRect(0,0,this.canvas.width,this.canvas.height)),n.translate(this.options.marginLeft,0)}},{key:"drawCanvasBarcode",value:function(n,i){var r=this.canvas.getContext("2d"),s=i.data,o;n.textPosition=="top"?o=n.marginTop+n.fontSize+n.textMargin:o=n.marginTop,r.fillStyle=n.lineColor;for(var a=0;a<s.length;a++){var l=a*n.width+i.barcodePadding;s[a]==="1"?r.fillRect(l,o,n.width,n.height):s[a]&&r.fillRect(l,o,n.width,n.height*s[a])}}},{key:"drawCanvasText",value:function(n,i){var r=this.canvas.getContext("2d"),s=n.fontOptions+" "+n.fontSize+"px "+n.font;if(n.displayValue){var o,a;n.textPosition=="top"?a=n.marginTop+n.fontSize-n.textMargin:a=n.height+n.textMargin+n.marginTop+n.fontSize,r.font=s,n.textAlign=="left"||i.barcodePadding>0?(o=0,r.textAlign="left"):n.textAlign=="right"?(o=i.width-1,r.textAlign="right"):(o=i.width/2,r.textAlign="center"),r.fillText(i.text,o,a)}}},{key:"moveCanvasDrawing",value:function(n){var i=this.canvas.getContext("2d");i.translate(n.width,0)}},{key:"restoreCanvas",value:function(){var n=this.canvas.getContext("2d");n.restore()}}]),t}();Ul.default=$C;var Bl={};Object.defineProperty(Bl,"__esModule",{value:!0});var UC=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),BC=Ci,HC=jC(BC),Uo=ze;function jC(t){return t&&t.__esModule?t:{default:t}}function WC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var zr="http://www.w3.org/2000/svg",VC=function(){function t(e,n,i){WC(this,t),this.svg=e,this.encodings=n,this.options=i,this.document=i.xmlDocument||document}return UC(t,[{key:"render",value:function(){var n=this.options.marginLeft;this.prepareSVG();for(var i=0;i<this.encodings.length;i++){var r=this.encodings[i],s=(0,HC.default)(this.options,r.options),o=this.createGroup(n,s.marginTop,this.svg);this.setGroupOptions(o,s),this.drawSvgBarcode(o,s,r),this.drawSVGText(o,s,r),n+=r.width}}},{key:"prepareSVG",value:function(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);(0,Uo.calculateEncodingAttributes)(this.encodings,this.options);var n=(0,Uo.getTotalWidthOfEncodings)(this.encodings),i=(0,Uo.getMaximumHeightOfEncodings)(this.encodings),r=n+this.options.marginLeft+this.options.marginRight;this.setSvgAttributes(r,i),this.options.background&&this.drawRect(0,0,r,i,this.svg).setAttribute("style","fill:"+this.options.background+";")}},{key:"drawSvgBarcode",value:function(n,i,r){var s=r.data,o;i.textPosition=="top"?o=i.fontSize+i.textMargin:o=0;for(var a=0,l=0,c=0;c<s.length;c++)l=c*i.width+r.barcodePadding,s[c]==="1"?a++:a>0&&(this.drawRect(l-i.width*a,o,i.width*a,i.height,n),a=0);a>0&&this.drawRect(l-i.width*(a-1),o,i.width*a,i.height,n)}},{key:"drawSVGText",value:function(n,i,r){var s=this.document.createElementNS(zr,"text");if(i.displayValue){var o,a;s.setAttribute("style","font:"+i.fontOptions+" "+i.fontSize+"px "+i.font),i.textPosition=="top"?a=i.fontSize-i.textMargin:a=i.height+i.textMargin+i.fontSize,i.textAlign=="left"||r.barcodePadding>0?(o=0,s.setAttribute("text-anchor","start")):i.textAlign=="right"?(o=r.width-1,s.setAttribute("text-anchor","end")):(o=r.width/2,s.setAttribute("text-anchor","middle")),s.setAttribute("x",o),s.setAttribute("y",a),s.appendChild(this.document.createTextNode(r.text)),n.appendChild(s)}}},{key:"setSvgAttributes",value:function(n,i){var r=this.svg;r.setAttribute("width",n+"px"),r.setAttribute("height",i+"px"),r.setAttribute("x","0px"),r.setAttribute("y","0px"),r.setAttribute("viewBox","0 0 "+n+" "+i),r.setAttribute("xmlns",zr),r.setAttribute("version","1.1"),r.setAttribute("style","transform: translate(0,0)")}},{key:"createGroup",value:function(n,i,r){var s=this.document.createElementNS(zr,"g");return s.setAttribute("transform","translate("+n+", "+i+")"),r.appendChild(s),s}},{key:"setGroupOptions",value:function(n,i){n.setAttribute("style","fill:"+i.lineColor+";")}},{key:"drawRect",value:function(n,i,r,s,o){var a=this.document.createElementNS(zr,"rect");return a.setAttribute("x",n),a.setAttribute("y",i),a.setAttribute("width",r),a.setAttribute("height",s),o.appendChild(a),a}}]),t}();Bl.default=VC;var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});var zC=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function GC(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var qC=function(){function t(e,n,i){GC(this,t),this.object=e,this.encodings=n,this.options=i}return zC(t,[{key:"render",value:function(){this.object.encodings=this.encodings}}]),t}();Hl.default=qC;Object.defineProperty($l,"__esModule",{value:!0});var KC=Ul,YC=jl(KC),XC=Bl,QC=jl(XC),JC=Hl,ZC=jl(JC);function jl(t){return t&&t.__esModule?t:{default:t}}$l.default={CanvasRenderer:YC.default,SVGRenderer:QC.default,ObjectRenderer:ZC.default};var Ti={};Object.defineProperty(Ti,"__esModule",{value:!0});function Wl(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vl(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function zl(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var eT=function(t){zl(e,t);function e(n,i){Wl(this,e);var r=Vl(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.name="InvalidInputException",r.symbology=n,r.input=i,r.message='"'+r.input+'" is not a valid input for '+r.symbology,r}return e}(Error),tT=function(t){zl(e,t);function e(){Wl(this,e);var n=Vl(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.name="InvalidElementException",n.message="Not supported type to render on",n}return e}(Error),nT=function(t){zl(e,t);function e(){Wl(this,e);var n=Vl(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.name="NoElementException",n.message="No element to render on.",n}return e}(Error);Ti.InvalidInputException=eT;Ti.InvalidElementException=tT;Ti.NoElementException=nT;Object.defineProperty(Ll,"__esModule",{value:!0});var iT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rT=Fl,Ea=t_(rT),sT=$l,Vi=t_(sT),oT=Ti;function t_(t){return t&&t.__esModule?t:{default:t}}function Gl(t){if(typeof t=="string")return aT(t);if(Array.isArray(t)){for(var e=[],n=0;n<t.length;n++)e.push(Gl(t[n]));return e}else{if(typeof HTMLCanvasElement<"u"&&t instanceof HTMLImageElement)return lT(t);if(t&&t.nodeName&&t.nodeName.toLowerCase()==="svg"||typeof SVGElement<"u"&&t instanceof SVGElement)return{element:t,options:(0,Ea.default)(t),renderer:Vi.default.SVGRenderer};if(typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement)return{element:t,options:(0,Ea.default)(t),renderer:Vi.default.CanvasRenderer};if(t&&t.getContext)return{element:t,renderer:Vi.default.CanvasRenderer};if(t&&(typeof t>"u"?"undefined":iT(t))==="object"&&!t.nodeName)return{element:t,renderer:Vi.default.ObjectRenderer};throw new oT.InvalidElementException}}function aT(t){var e=document.querySelectorAll(t);if(e.length!==0){for(var n=[],i=0;i<e.length;i++)n.push(Gl(e[i]));return n}}function lT(t){var e=document.createElement("canvas");return{element:e,options:(0,Ea.default)(t),renderer:Vi.default.CanvasRenderer,afterRender:function(){t.setAttribute("src",e.toDataURL())}}}Ll.default=Gl;var ql={};Object.defineProperty(ql,"__esModule",{value:!0});var cT=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function uT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var fT=function(){function t(e){uT(this,t),this.api=e}return cT(t,[{key:"handleCatch",value:function(n){if(n.name==="InvalidInputException")if(this.api._options.valid!==this.api._defaults.valid)this.api._options.valid(!1);else throw n.message;else throw n;this.api.render=function(){}}},{key:"wrapBarcodeCall",value:function(n){try{var i=n.apply(void 0,arguments);return this.api._options.valid(!0),i}catch(r){return this.handleCatch(r),this.api}}}]),t}();ql.default=fT;var hT=ml,bn=nn(hT),dT=Ci,Rr=nn(dT),_T=Ml,n_=nn(_T),pT=Dl,of=nn(pT),gT=Ll,mT=nn(gT),vT=ro,yT=nn(vT),ET=ql,bT=nn(ET),i_=Ti,wT=so,r_=nn(wT);function nn(t){return t&&t.__esModule?t:{default:t}}var Tt=function(){},oo=function(e,n,i){var r=new Tt;if(typeof e>"u")throw Error("No element to render on was provided.");return r._renderProperties=(0,mT.default)(e),r._encodings=[],r._options=r_.default,r._errorHandler=new bT.default(r),typeof n<"u"&&(i=i||{},i.format||(i.format=o_()),r.options(i)[i.format](n,i).render()),r};oo.getModule=function(t){return bn.default[t]};for(var af in bn.default)bn.default.hasOwnProperty(af)&&IT(bn.default,af);function IT(t,e){Tt.prototype[e]=Tt.prototype[e.toUpperCase()]=Tt.prototype[e.toLowerCase()]=function(n,i){var r=this;return r._errorHandler.wrapBarcodeCall(function(){i.text=typeof i.text>"u"?void 0:""+i.text;var s=(0,Rr.default)(r._options,i);s=(0,yT.default)(s);var o=t[e],a=s_(n,o,s);return r._encodings.push(a),r})}}function s_(t,e,n){t=""+t;var i=new e(t,n);if(!i.valid())throw new i_.InvalidInputException(i.constructor.name,t);var r=i.encode();r=(0,n_.default)(r);for(var s=0;s<r.length;s++)r[s].options=(0,Rr.default)(n,r[s].options);return r}function o_(){return bn.default.CODE128?"CODE128":Object.keys(bn.default)[0]}Tt.prototype.options=function(t){return this._options=(0,Rr.default)(this._options,t),this};Tt.prototype.blank=function(t){var e=new Array(t+1).join("0");return this._encodings.push({data:e}),this};Tt.prototype.init=function(){if(this._renderProperties){Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]);var t;for(var e in this._renderProperties){t=this._renderProperties[e];var n=(0,Rr.default)(this._options,t.options);n.format=="auto"&&(n.format=o_()),this._errorHandler.wrapBarcodeCall(function(){var i=n.value,r=bn.default[n.format.toUpperCase()],s=s_(i,r,n);ba(t,s,n)})}}};Tt.prototype.render=function(){if(!this._renderProperties)throw new i_.NoElementException;if(Array.isArray(this._renderProperties))for(var t=0;t<this._renderProperties.length;t++)ba(this._renderProperties[t],this._encodings,this._options);else ba(this._renderProperties,this._encodings,this._options);return this};Tt.prototype._defaults=r_.default;function ba(t,e,n){e=(0,n_.default)(e);for(var i=0;i<e.length;i++)e[i].options=(0,Rr.default)(n,e[i].options),(0,of.default)(e[i].options);(0,of.default)(n);var r=t.renderer,s=new r(t.element,e,n);s.render(),t.afterRender&&t.afterRender()}typeof window<"u"&&(window.JsBarcode=oo);typeof jQuery<"u"&&(jQuery.fn.JsBarcode=function(t,e){var n=[];return jQuery(this).each(function(){n.push(this)}),oo(n,t,e)});var CT=oo;const TT=Dd(CT);/*! vue-barcode v2.0.2 | (c) 2018-present Chen Fengyuan | MIT */var a_=Lg({name:"VueBarcode",props:{value:{type:String,default:void 0},options:{type:Object,default:void 0},tag:{type:String,default:"canvas"}},watch:{$props:{deep:!0,immediate:!0,handler(){this.$el&&this.generate()}}},mounted(){this.generate()},methods:{generate(){TT(this.$el,String(this.value),this.options)}},render(){return $h(this.tag,this.$slots.default)}});const ST={class:"flex flex-row justify-between items-center my-3"},OT={class:"overflow-y-scroll max-h-72 mb-3 text-white text-center"},RT={class:"mb-3"},AT={class:"font-bold text-l mb-6"},xT={class:"flex flex-row justify-between items-center"},kT={class:"text-s text-justify text-white"},PT={__name:"CouponForm",props:{is_shown:{type:Boolean,default:!0},instruction:{type:String,default:"Em có thể sử dụng phiếu này để đổi"},gift:{type:String,default:"meo meo"},expires_at:{type:String,default:"Không có"},code:{type:String,default:"ABCDEF"},color:{type:String,default:"white"}},setup(t){return(e,n)=>(me(),Ge("div",{class:"p-6 rounded border backdrop-blur-lg w-full noise",style:kn({backgroundColor:t.color,borderColor:t.color})},[z("div",ST,[z("div",null,[ce(Gu,{onClick:n[0]||(n[0]=i=>e.$emit("close"))})]),z("div",null,[ce(Gu,{onClick:n[1]||(n[1]=i=>e.$emit("close")),show:t.is_shown},null,8,["show"])])]),z("div",OT,[z("div",RT,jt(t.instruction),1),z("div",AT,jt(t.gift),1)]),z("div",xT,[z("div",kT,"Ngày hết hạn: "+jt(t.expires_at),1),ce(er(a_),{value:t.code,options:{displayValue:!1,background:e.none,lineColor:"#ffffff",height:25,width:1.5}},null,8,["value","options"])])],4))}},NT=tn(PT,[["__scopeId","data-v-9cc564f0"]]);const MT=t=>(Cg("data-v-4c3f960a"),t=t(),Tg(),t),DT={class:"top-0 absolute grid grid-cols-12 w-full gap-x-6 bg-black/95",style:"z-index: 15"},LT={key:0},FT=MT(()=>z("div",{class:"text-center text-base text-white mt-12 mb-2"},"nhập passcode để đổi quà",-1)),$T=["onKeyup","disabled"],UT={__name:"CouponView",props:{is_portrait:{type:Boolean,default:!1},is_shown:{type:Boolean,default:!0},instruction:{type:String,default:"Em có thể dùng phiếu này để đổi"},gift:{type:String,default:"meo meo"},expires_at:{type:String,default:"Không có"},code:{type:String,default:"ABCDEF"},color:{type:String,default:"white"}},emits:["redeemed","close"],setup(t,{emit:e}){const n=t,i=nt(!1),r=nt(""),s=nt(!1),o=async()=>{try{const l=await Cy($E(),"lhtoan20@apcs.vn",r.value);e("redeemed",n.code,n.gift),s.value=!0}catch(l){console.log(l),i.value=!0,setTimeout(()=>{i.value=!1},1e3)}},a=l=>{l.preventDefault()};return(l,c)=>(me(),Ge("div",DT,[z("div",{class:Re({"col-span-1":n.is_portrait,"col-span-3":!n.is_portrait})},null,2),z("div",{class:Re(["flex flex-col justify-center text-center items-center h-screen w-full",{"col-span-10":n.is_portrait,"col-span-6":!n.is_portrait}])},[ce(NT,{id:n.code,is_shown:n.is_shown,onClose:c[0]||(c[0]=u=>l.$emit("close")),color:n.color,instruction:n.instruction,gift:n.gift,expires_at:n.expires_at,code:n.code},null,8,["id","is_shown","color","instruction","gift","expires_at","code"]),s.value?ca("",!0):(me(),Ge("div",LT,[FT,yh(z("input",{type:"password",class:Re(["p-1 pl-4 text-white rounded-full outline-none bg-white/0 bg-gradient-to-br border backdrop-blur-lg",{"shake from-red/40 border-red":i.value&&!s.value,"from-white/40 border-white":!i.value}]),onKeyup:ev(o,["enter"]),"onUpdate:modelValue":c[1]||(c[1]=u=>r.value=u),disabled:i.value,onCopy:a},null,42,$T),[[Jm,r.value]])]))],2),z("div",{class:Re({"col-span-1":n.is_portrait,"col-span-3":!n.is_portrait})},null,2)]))}},BT=tn(UT,[["__scopeId","data-v-4c3f960a"]]),lf="@firebase/database",cf="1.0.0";/**
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
 */let l_="";function HT(t){l_=t}/**
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
 */class jT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class WT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const c_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jT(e)}}catch{}return new WT},gn=c_("localStorage"),wa=c_("sessionStorage");/**
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
 */const Zn=new sl("@firebase/database"),VT=function(){let t=1;return function(){return t++}}(),u_=function(t){const e=Av(t),n=new Tv;n.update(e);const i=n.digest();return tl.encodeByteArray(i)},Ar=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ar.apply(null,i):typeof i=="object"?e+=be(i):e+=i,e+=" "}return e};let wn=null,uf=!0;const zT=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zn.logLevel=Q.VERBOSE,wn=Zn.log.bind(Zn),e&&wa.set("logging_enabled",!0)):typeof t=="function"?wn=t:(wn=null,wa.remove("logging_enabled"))},we=function(...t){if(uf===!0&&(uf=!1,wn===null&&wa.get("logging_enabled")===!0&&zT(!0)),wn){const e=Ar.apply(null,t);wn(e)}},xr=function(t){return function(...e){we(t,...e)}},Ia=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ar(...t);Zn.error(e)},At=function(...t){const e=`FIREBASE FATAL ERROR: ${Ar(...t)}`;throw Zn.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Ar(...t);Zn.warn(e)},GT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",Sn="[MAX_NAME]",Dn=function(t,e){if(t===e)return 0;if(t===fi||e===Sn)return-1;if(e===fi||t===Sn)return 1;{const n=ff(t),i=ff(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},KT=function(t,e){return t===e?0:t<e?-1:1},Li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},Yl=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=be(e[i]),n+=":",n+=Yl(t[e[i]]);return n+="}",n},f_=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const h_=function(t){w(!Kl(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},YT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const JT=new RegExp("^-?(0*)\\d{1,10}$"),ZT=-2147483648,eS=2147483647,ff=function(t){if(JT.test(t)){const e=Number(t);if(e>=ZT&&e<=eS)return e}return null},Si=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},tS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class iS{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class ei{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ei.OWNER="owner";/**
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
 */const Xl="5",d_="v",__="s",p_="r",g_="f",m_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,v_="ls",y_="p",Ca="ac",E_="websocket",b_="long_polling";/**
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
 */class w_{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function rS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function I_(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let i;if(e===E_)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===b_)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rS(t)&&(n.ns=t.namespace);const r=[];return Te(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class sS{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lv(this.counters_)}}/**
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
 */const Bo={},Ho={};function Ql(t){const e=t.toString();return Bo[e]||(Bo[e]=new sS),Bo[e]}function oS(t,e){const n=t.toString();return Ho[n]||(Ho[n]=e()),Ho[n]}/**
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
 */class aS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Si(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hf="start",lS="close",cS="pLPCommand",uS="pRTLPCB",C_="id",T_="pw",S_="ser",fS="cb",hS="seg",dS="ts",_S="d",pS="dframe",O_=1870,R_=30,gS=O_-R_,mS=25e3,vS=3e4;class Gn{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xr(e),this.stats_=Ql(n),this.urlFn=l=>(this.appCheckToken&&(l[Ca]=this.appCheckToken),I_(n,b_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vS)),qT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jl((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hf)this.id=a,this.password=l;else if(o===lS)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[hf]="t",i[S_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[fS]=this.scriptTagHolder.uniqueCallbackIdentifier),i[d_]=Xl,this.transportSessionId&&(i[__]=this.transportSessionId),this.lastSessionId&&(i[v_]=this.lastSessionId),this.applicationId&&(i[y_]=this.applicationId),this.appCheckToken&&(i[Ca]=this.appCheckToken),typeof location<"u"&&location.hostname&&m_.test(location.hostname)&&(i[p_]=g_);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gn.forceAllow_=!0}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){return Gn.forceAllow_?!0:!Gn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YT()&&!XT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=jh(n),r=f_(i,gS);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[pS]="t",i[C_]=e,i[T_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jl{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VT(),window[cS+this.uniqueCallbackIdentifier]=e,window[uS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jl.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[C_]=this.myID,e[T_]=this.myPW,e[S_]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+R_+i.length<=O_;){const o=this.pendingSegs.shift();i=i+"&"+hS+r+"="+o.seg+"&"+dS+r+"="+o.ts+"&"+_S+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(mS)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const yS=16384,ES=45e3;let ys=null;typeof MozWebSocket<"u"?ys=MozWebSocket:typeof WebSocket<"u"&&(ys=WebSocket);class it{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xr(this.connId),this.stats_=Ql(n),this.connURL=it.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[d_]=Xl,typeof location<"u"&&location.hostname&&m_.test(location.hostname)&&(o[p_]=g_),n&&(o[__]=n),i&&(o[v_]=i),r&&(o[Ca]=r),s&&(o[y_]=s),I_(e,E_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gn.set("previous_websocket_failure",!0);try{let i;Kh(),this.mySock=new ys(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ys!==null&&!it.forceDisallow_}static previouslyFailed(){return gn.isInMemoryStorage||gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=sr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=f_(n,yS);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ES))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}it.responsesRequiredToBeHealthy=2;it.healthyTimeout=3e4;/**
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
 */class ur{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gn,it]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=it&&it.isAvailable();let i=n&&!it.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[it];else{const r=this.transports_=[];for(const s of ur.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);ur.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ur.globalTransportInitialized_=!1;/**
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
 */const bS=6e4,wS=5e3,IS=10*1024,CS=100*1024,jo="t",df="d",TS="s",_f="r",SS="e",pf="o",gf="a",mf="n",vf="p",OS="h";class RS{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xr("c:"+this.id+":"),this.transportManager_=new ur(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>IS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(jo in e){const n=e[jo];n===gf?this.upgradeIfSecondaryHealthy_():n===_f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Li("t",e),i=Li("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Li("t",e),i=Li("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Li(jo,e);if(df in e){const i=e[df];if(n===OS){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===mf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TS?this.onConnectionShutdown_(i):n===_f?this.onReset_(i):n===SS?Ia("Server Error: "+i):n===pf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ia("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xl!==i&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class A_{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class x_{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Es extends x_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!il()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Es}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yf=32,Ef=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new J("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jt(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function Zl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function AS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function k_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function fe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof J)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new J(n,0)}function H(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=B(t),i=B(e);if(n===null)return e;if(n===i)return De(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xS(t,e){const n=fr(t,0),i=fr(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Dn(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function ec(t,e){if(Jt(t)!==Jt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Jt(t)>Jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class kS{constructor(e,n){this.errorPrefix_=n,this.parts_=fr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Gs(this.parts_[i]);P_(this)}}function PS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gs(e),P_(t)}function NS(t){const e=t.parts_.pop();t.byteLength_-=Gs(e),t.parts_.length>0&&(t.byteLength_-=1)}function P_(t){if(t.byteLength_>Ef)throw new Error(t.errorPrefix_+"has a key path longer than "+Ef+" bytes ("+t.byteLength_+").");if(t.parts_.length>yf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yf+") or object contains a cycle "+fn(t))}function fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class tc extends x_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new tc}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fi=1e3,MS=60*5*1e3,bf=30*1e3,DS=1.3,LS=3e4,FS="server_kill",wf=3;class St extends A_{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=St.nextPersistentConnectionId_++,this.log_=xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fi,this.maxReconnectDelay_=MS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Kh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Es.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(be(s)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new zs,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;St.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const i=ai(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iv(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ia("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LS&&(this.reconnectDelay_=Fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*DS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+St.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new RS(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{Fe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(FS)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Fe(f),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fa(this.interruptReasons_)&&(this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Yl(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new J(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wf&&(this.reconnectDelay_=bf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+l_.replace(/\./g,"-")]=1,il()?e["framework.cordova"]=1:qh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Es.getInstance().currentlyOnline();return fa(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class ao{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new U(fi,e),r=new U(fi,n);return this.compare(i,r)!==0}minPost(){return U.MIN}}/**
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
 */let Gr;class N_ extends ao{static get __EMPTY_NODE(){return Gr}static set __EMPTY_NODE(e){Gr=e}compare(e,n){return Dn(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Sn,Gr)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Gr)}toString(){return".key"}}const ti=new N_;/**
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
 */class qr{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Ee.RED,this.left=r??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,i,r,s){return new Ee(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class $S{copy(e,n,i,r,s){return this}insert(e,n,i){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qr(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new $S;/**
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
 */function US(t,e){return Dn(t.name,e.name)}function nc(t,e){return Dn(t,e)}/**
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
 */let Ta;function BS(t){Ta=t}const M_=function(t){return typeof t=="number"?"number:"+h_(t):"string:"+t},D_=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else w(t===Ta||t.isEmpty(),"priority of unexpected type.");w(t===Ta||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let If;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),D_(this.priorityNode_)}static set __childrenNodeConstructor(e){If=e}static get __childrenNodeConstructor(){return If}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:B(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=B(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(w(i!==".priority"||Jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+M_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=h_(this.value_):e+=this.value_,this.lazyHash_=u_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=ye.VALUE_TYPE_ORDER.indexOf(n),s=ye.VALUE_TYPE_ORDER.indexOf(i);return w(r>=0,"Unknown leaf type: "+n),w(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let L_,F_;function HS(t){L_=t}function jS(t){F_=t}class WS extends ao{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Dn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Sn,new ye("[PRIORITY-POST]",F_))}makePost(e,n){const i=L_(e);return new U(n,new ye("[PRIORITY-POST]",i))}toString(){return".priority"}}const he=new WS;/**
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
 */const VS=Math.log(2);class zS{constructor(e){const n=s=>parseInt(Math.log(s)/VS,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bs=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let f,h;if(u===0)return null;if(u===1)return f=t[l],h=n?n(f):f,new Ee(h,f.node,Ee.BLACK,null,null);{const p=parseInt(u/2,10)+l,E=r(l,p),b=r(p+1,c);return f=t[p],h=n?n(f):f,new Ee(h,f.node,Ee.BLACK,E,b)}},s=function(l){let c=null,u=null,f=t.length;const h=function(E,b){const P=f-E,W=f;f-=E;const q=r(P+1,W),K=t[P],k=n?n(K):K;p(new Ee(k,K.node,b,null,q))},p=function(E){c?(c.left=E,c=E):(u=E,c=E)};for(let E=0;E<l.count;++E){const b=l.nextBitIsOne(),P=Math.pow(2,l.count-(E+1));b?h(P,Ee.BLACK):(h(P,Ee.BLACK),h(P,Ee.RED))}return u},o=new zS(t.length),a=s(o);return new Le(i||e,a)};/**
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
 */let Wo;const Wn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(Wn&&he,"ChildrenNode.ts has not been loaded"),Wo=Wo||new Ct({".priority":Wn},{".priority":he}),Wo}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=bs(i,e.getCompare()):a=Wn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ct(u,c)}addToIndexes(e,n){const i=fs(this.indexes_,(r,s)=>{const o=ai(this.indexSet_,s);if(w(o,"Missing index implementation for "+s),r===Wn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bs(a,o.getCompare())}else return Wn;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new Ct(i,this.indexSet_)}removeFromIndexes(e,n){const i=fs(this.indexes_,r=>{if(r===Wn)return r;{const s=n.get(e.name);return s?r.remove(new U(e.name,s)):r}});return new Ct(i,this.indexSet_)}}/**
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
 */let $i;class M{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&D_(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $i||($i=new M(new Le(nc),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$i}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$i:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new U(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?$i:this.priorityNode_;return new M(r,o,s)}}updateChild(e,n){const i=B(e);if(i===null)return n;{w(B(e)!==".priority"||Jt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(re(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(he,(o,a)=>{n[o]=a.val(e),i++,s&&M.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+M_(this.getPriority().val())+":"),this.forEachChild(he,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":u_(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kr?-1:0}withIndex(e){if(e===ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(he),r=n.getIterator(he);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ti?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GS extends M{constructor(){super(new Le(nc),M.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const kr=new GS;Object.defineProperties(U,{MIN:{value:new U(fi,M.EMPTY_NODE)},MAX:{value:new U(Sn,kr)}});N_.__EMPTY_NODE=M.EMPTY_NODE;ye.__childrenNodeConstructor=M;BS(kr);jS(kr);/**
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
 */const qS=!0;function Ie(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,Ie(e))}if(!(t instanceof Array)&&qS){const n=[];let i=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ie(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return M.EMPTY_NODE;const s=bs(n,US,o=>o.name,nc);if(i){const o=bs(n,he.getCompare());return new M(s,Ie(e),new Ct({".priority":o},{".priority":he}))}else return new M(s,Ie(e),Ct.Default)}else{let n=M.EMPTY_NODE;return Te(t,(i,r)=>{if(yt(t,i)&&i.substring(0,1)!=="."){const s=Ie(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ie(e))}}HS(Ie);/**
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
 */class KS extends ao{constructor(e){super(),this.indexPath_=e,w(!H(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Dn(e.name,n.name):s}makePost(e,n){const i=Ie(e),r=M.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(n,r)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,kr);return new U(Sn,e)}toString(){return fr(this.indexPath_,0).join("/")}}/**
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
 */class YS extends ao{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Dn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const i=Ie(e);return new U(n,i)}toString(){return".value"}}const XS=new YS;/**
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
 */function $_(t){return{type:"value",snapshotNode:t}}function hi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function dr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ic{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(hr(n,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(hi(n,i)):o.trackChildChange(dr(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(he,(r,s)=>{n.hasChild(r)||i.trackChildChange(hr(r,s))}),n.isLeafNode()||n.forEachChild(he,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(dr(r,s,o))}else i.trackChildChange(hi(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class _r{constructor(e){this.indexedFilter_=new ic(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_r.getStartPost_(e),this.endPost_=_r.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new U(n,i))||(i=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=M.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(M.EMPTY_NODE);const s=this;return n.forEachChild(he,(o,a)=>{s.matches(new U(o,a))||(r=r.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class JS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new _r(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new U(n,i))||(i=M.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=M.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(M.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,p)=>f(p,h)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const l=new U(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(dr(n,i,f)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(hr(n,f));const b=a.updateImmediateChild(n,M.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(hi(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(hr(c.name,c.node)),s.trackChildChange(hi(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
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
 */class rc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new rc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZS(t){return t.loadsAllData()?new ic(t.getIndex()):t.hasLimit()?new JS(t):new _r(t)}function Cf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===he?n="$priority":t.index_===XS?n="$value":t.index_===ti?n="$key":(w(t.index_ instanceof KS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=be(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+be(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=be(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Tf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==he&&(e.i=t.index_.toString()),e}/**
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
 */class ws extends A_{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=xr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ws.getListenId_(e,i),a={};this.listens_[o]=a;const l=Cf(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,i),ai(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=ws.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Cf(e._queryParams),i=e._path.toString(),r=new zs;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=sr(a.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class eO{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Is(){return{value:null,children:new Map}}function U_(t,e,n){if(H(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=B(e);t.children.has(i)||t.children.set(i,Is());const r=t.children.get(i);e=re(e),U_(r,e,n)}}function Sa(t,e,n){t.value!==null?n(e,t.value):tO(t,(i,r)=>{const s=new J(e.toString()+"/"+i);Sa(r,s,n)})}function tO(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class nO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Sf=10*1e3,iO=30*1e3,rO=5*60*1e3;class sO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nO(e);const i=Sf+(iO-Sf)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Te(e,(r,s)=>{s>0&&yt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*rO))}}/**
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
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function sc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function oc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ac(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Cs{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=st.ACK_USER_WRITE,this.source=sc()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new Cs(Y(),n,this.revert)}}else return w(B(this.path)===e,"operationForChild called for unrelated child."),new Cs(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class pr{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return H(this.path)?new pr(this.source,Y()):new pr(this.source,re(this.path))}}/**
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
 */class On{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=st.OVERWRITE}operationForChild(e){return H(this.path)?new On(this.source,Y(),this.snap.getImmediateChild(e)):new On(this.source,re(this.path),this.snap)}}/**
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
 */class di{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=st.MERGE}operationForChild(e){if(H(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new On(this.source,Y(),n.value):new di(this.source,Y(),n)}else return w(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new di(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Rn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class oO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function aO(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(QS(o.childName,o.snapshotNode))}),Ui(t,r,"child_removed",e,i,n),Ui(t,r,"child_added",e,i,n),Ui(t,r,"child_moved",s,i,n),Ui(t,r,"child_changed",e,i,n),Ui(t,r,"value",e,i,n),r}function Ui(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>cO(t,a,l)),o.forEach(a=>{const l=lO(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function lO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cO(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),r=new U(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function lo(t,e){return{eventCache:t,serverCache:e}}function Yi(t,e,n,i){return lo(new Rn(e,n,i),t.serverCache)}function B_(t,e,n,i){return lo(t.eventCache,new Rn(e,n,i))}function Oa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function An(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Vo;const uO=()=>(Vo||(Vo=new Le(KT)),Vo);class ie{constructor(e,n=uO()){this.value=e,this.children=n}static fromObject(e){let n=new ie(null);return Te(e,(i,r)=>{n=n.set(new J(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(H(e))return null;{const i=B(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:fe(new J(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const n=B(e),i=this.children.get(n);return i!==null?i.subtree(re(e)):new ie(null)}}set(e,n){if(H(e))return new ie(n,this.children);{const i=B(e),s=(this.children.get(i)||new ie(null)).set(re(e),n),o=this.children.insert(i,s);return new ie(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=B(e),i=this.children.get(n);if(i){const r=i.remove(re(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const n=B(e),i=this.children.get(n);return i?i.get(re(e)):null}}setTree(e,n){if(H(e))return n;{const i=B(e),s=(this.children.get(i)||new ie(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ie(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(fe(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(H(e))return null;{const s=B(e),o=this.children.get(s);return o?o.findOnPath_(re(e),fe(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,i){if(H(e))return this;{this.value&&i(n,this.value);const r=B(e),s=this.children.get(r);return s?s.foreachOnPath_(re(e),fe(n,r),i):new ie(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(fe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new ie(null))}}function Xi(t,e,n){if(H(e))return new lt(new ie(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=De(r,e);return s=s.updateChild(o,n),new lt(t.writeTree_.set(r,s))}else{const r=new ie(n),s=t.writeTree_.setTree(e,r);return new lt(s)}}}function Ra(t,e,n){let i=t;return Te(n,(r,s)=>{i=Xi(i,fe(e,r),s)}),i}function Of(t,e){if(H(e))return lt.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new lt(n)}}function Aa(t,e){return Ln(t,e)!=null}function Ln(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Rf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(he,(i,r)=>{e.push(new U(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new U(i,r.value))}),e}function Yt(t,e){if(H(e))return t;{const n=Ln(t,e);return n!=null?new lt(new ie(n)):new lt(t.writeTree_.subtree(e))}}function xa(t){return t.writeTree_.isEmpty()}function _i(t,e){return H_(Y(),t.writeTree_,e)}function H_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(w(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=H_(fe(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(fe(t,".priority"),i)),n}}/**
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
 */function lc(t,e){return z_(e,t)}function fO(t,e,n,i,r){w(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Xi(t.visibleWrites,e,n)),t.lastWriteId=i}function hO(t,e,n,i){w(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ra(t.visibleWrites,e,n),t.lastWriteId=i}function dO(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function _O(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&pO(a,i.path)?r=!1:Xe(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return gO(t),!0;if(i.snap)t.visibleWrites=Of(t.visibleWrites,i.path);else{const a=i.children;Te(a,l=>{t.visibleWrites=Of(t.visibleWrites,fe(i.path,l))})}return!0}else return!1}function pO(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(fe(t.path,n),e))return!0;return!1}function gO(t){t.visibleWrites=j_(t.allWrites,mO,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mO(t){return t.visible}function j_(t,e,n){let i=lt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Xe(n,o)?(a=De(n,o),i=Xi(i,a,s.snap)):Xe(o,n)&&(a=De(o,n),i=Xi(i,Y(),s.snap.getChild(a)));else if(s.children){if(Xe(n,o))a=De(n,o),i=Ra(i,a,s.children);else if(Xe(o,n))if(a=De(o,n),H(a))i=Ra(i,Y(),s.children);else{const l=ai(s.children,B(a));if(l){const c=l.getChild(re(a));i=Xi(i,Y(),c)}}}else throw mi("WriteRecord should have .snap or .children")}}return i}function W_(t,e,n,i,r){if(!i&&!r){const s=Ln(t.visibleWrites,e);if(s!=null)return s;{const o=Yt(t.visibleWrites,e);if(xa(o))return n;if(n==null&&!Aa(o,Y()))return null;{const a=n||M.EMPTY_NODE;return _i(o,a)}}}else{const s=Yt(t.visibleWrites,e);if(!r&&xa(s))return n;if(!r&&n==null&&!Aa(s,Y()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},a=j_(t.allWrites,o,e),l=n||M.EMPTY_NODE;return _i(a,l)}}}function vO(t,e,n){let i=M.EMPTY_NODE;const r=Ln(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(he,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Yt(t.visibleWrites,e);return n.forEachChild(he,(o,a)=>{const l=_i(Yt(s,new J(o)),a);i=i.updateImmediateChild(o,l)}),Rf(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Yt(t.visibleWrites,e);return Rf(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yO(t,e,n,i,r){w(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=fe(e,n);if(Aa(t.visibleWrites,s))return null;{const o=Yt(t.visibleWrites,s);return xa(o)?r.getChild(n):_i(o,r.getChild(n))}}function EO(t,e,n,i){const r=fe(e,n),s=Ln(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Yt(t.visibleWrites,r);return _i(o,i.getNode().getImmediateChild(n))}else return null}function bO(t,e){return Ln(t.visibleWrites,e)}function wO(t,e,n,i,r,s,o){let a;const l=Yt(t.visibleWrites,e),c=Ln(l,Y());if(c!=null)a=c;else if(n!=null)a=_i(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&u.length<r;)f(p,i)!==0&&u.push(p),p=h.getNext();return u}else return[]}function IO(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function Ts(t,e,n,i){return W_(t.writeTree,t.treePath,e,n,i)}function cc(t,e){return vO(t.writeTree,t.treePath,e)}function Af(t,e,n,i){return yO(t.writeTree,t.treePath,e,n,i)}function Ss(t,e){return bO(t.writeTree,fe(t.treePath,e))}function CO(t,e,n,i,r,s){return wO(t.writeTree,t.treePath,e,n,i,r,s)}function uc(t,e,n){return EO(t.writeTree,t.treePath,e,n)}function V_(t,e){return z_(fe(t.treePath,e),t.writeTree)}function z_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class TO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,dr(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,hr(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,hi(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,dr(i,e.snapshotNode,r.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class SO{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const G_=new SO;class fc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:An(this.viewCache_),s=CO(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function OO(t){return{filter:t}}function RO(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AO(t,e,n,i,r){const s=new TO;let o,a;if(n.type===st.OVERWRITE){const c=n;c.source.fromUser?o=ka(t,e,c.path,c.snap,i,r,s):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!H(c.path),o=Os(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===st.MERGE){const c=n;c.source.fromUser?o=kO(t,e,c.path,c.children,i,r,s):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pa(t,e,c.path,c.children,i,r,a,s))}else if(n.type===st.ACK_USER_WRITE){const c=n;c.revert?o=MO(t,e,c.path,i,r,s):o=PO(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===st.LISTEN_COMPLETE)o=NO(t,e,n.path,i,s);else throw mi("Unknown operation type: "+n.type);const l=s.getChanges();return xO(e,o,l),{viewCache:o,changes:l}}function xO(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Oa(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push($_(Oa(e)))}}function q_(t,e,n,i,r,s){const o=e.eventCache;if(Ss(i,n)!=null)return e;{let a,l;if(H(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=An(e),u=c instanceof M?c:M.EMPTY_NODE,f=cc(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Ts(i,An(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=B(n);if(c===".priority"){w(Jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Af(i,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=re(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Af(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=uc(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,r,s):a=o.getNode()}}return Yi(e,a,o.isFullyInitialized()||H(n),t.filter.filtersNodes())}}function Os(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(H(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=B(n);if(!l.isCompleteForPath(n)&&Jt(n)>1)return e;const E=re(n),P=l.getNode().getImmediateChild(p).updateChild(E,i);p===".priority"?c=u.updatePriority(l.getNode(),P):c=u.updateChild(l.getNode(),p,P,E,G_,null)}const f=B_(e,c,l.isFullyInitialized()||H(n),u.filtersNodes()),h=new fc(r,f,s);return q_(t,f,n,r,h,a)}function ka(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new fc(r,e,s);if(H(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Yi(e,c,!0,t.filter.filtersNodes());else{const f=B(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Yi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=re(n),p=a.getNode().getImmediateChild(f);let E;if(H(h))E=i;else{const b=u.getCompleteChild(f);b!=null?Zl(h)===".priority"&&b.getChild(k_(h)).isEmpty()?E=b:E=b.updateChild(h,i):E=M.EMPTY_NODE}if(p.equals(E))l=e;else{const b=t.filter.updateChild(a.getNode(),f,E,h,u,o);l=Yi(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function xf(t,e){return t.eventCache.isCompleteForChild(e)}function kO(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=fe(n,l);xf(e,B(u))&&(a=ka(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=fe(n,l);xf(e,B(u))||(a=ka(t,a,u,c,r,s,o))}),a}function kf(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Pa(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;H(n)?c=i:c=new ie(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),E=kf(t,p,h);l=Os(t,l,new J(f),E,r,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const p=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!p){const E=e.serverCache.getNode().getImmediateChild(f),b=kf(t,E,h);l=Os(t,l,new J(f),b,r,s,o,a)}}),l}function PO(t,e,n,i,r,s,o){if(Ss(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(H(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Os(t,e,n,l.getNode().getChild(n),r,s,a,o);if(H(n)){let c=new ie(null);return l.getNode().forEachChild(ti,(u,f)=>{c=c.set(new J(u),f)}),Pa(t,e,n,c,r,s,a,o)}else return e}else{let c=new ie(null);return i.foreach((u,f)=>{const h=fe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Pa(t,e,n,c,r,s,a,o)}}function NO(t,e,n,i,r){const s=e.serverCache,o=B_(e,s.getNode(),s.isFullyInitialized()||H(n),s.isFiltered());return q_(t,o,n,i,G_,r)}function MO(t,e,n,i,r,s){let o;if(Ss(i,n)!=null)return e;{const a=new fc(i,e,r),l=e.eventCache.getNode();let c;if(H(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ts(i,An(e));else{const f=e.serverCache.getNode();w(f instanceof M,"serverChildren would be complete if leaf node"),u=cc(i,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=B(n);let f=uc(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,re(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,M.EMPTY_NODE,re(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ts(i,An(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ss(i,Y())!=null,Yi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class DO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new ic(i.getIndex()),s=ZS(i);this.processor_=OO(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(M.EMPTY_NODE,a.getNode(),null),u=new Rn(l,o.isFullyInitialized(),r.filtersNodes()),f=new Rn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=lo(f,u),this.eventGenerator_=new oO(this.query_)}get query(){return this.query_}}function LO(t){return t.viewCache_.serverCache.getNode()}function FO(t,e){const n=An(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!H(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Pf(t){return t.eventRegistrations_.length===0}function $O(t,e){t.eventRegistrations_.push(e)}function Nf(t,e,n){const i=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Mf(t,e,n,i){e.type===st.MERGE&&e.source.queryId!==null&&(w(An(t.viewCache_),"We should always have a full cache before handling merges"),w(Oa(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=AO(t.processor_,r,e,n,i);return RO(t.processor_,s.viewCache),w(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,K_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function UO(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(he,(s,o)=>{i.push(hi(s,o))}),n.isFullyInitialized()&&i.push($_(n.getNode())),K_(t,i,n.getNode(),e)}function K_(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return aO(t.eventGenerator_,e,n,r)}/**
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
 */let Rs;class BO{constructor(){this.views=new Map}}function HO(t){w(!Rs,"__referenceConstructor has already been defined"),Rs=t}function jO(){return w(Rs,"Reference.ts has not been loaded"),Rs}function WO(t){return t.views.size===0}function hc(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return w(s!=null,"SyncTree gave us an op for an invalid query."),Mf(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Mf(o,e,n,i));return s}}function VO(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ts(n,r?i:null),l=!1;a?l=!0:i instanceof M?(a=cc(n,i),l=!1):(a=M.EMPTY_NODE,l=!1);const c=lo(new Rn(a,l,!1),new Rn(i,r,!1));return new DO(e,c)}return o}function zO(t,e,n,i,r,s){const o=VO(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$O(o,n),UO(o,n)}function GO(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Zt(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Nf(c,n,i)),Pf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Nf(l,n,i)),Pf(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Zt(t)&&s.push(new(jO())(e._repo,e._path)),{removed:s,events:o}}function Y_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ni(t,e){let n=null;for(const i of t.views.values())n=n||FO(i,e);return n}function X_(t,e){if(e._queryParams.loadsAllData())return co(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Q_(t,e){return X_(t,e)!=null}function Zt(t){return co(t)!=null}function co(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let As;function qO(t){w(!As,"__referenceConstructor has already been defined"),As=t}function KO(){return w(As,"Reference.ts has not been loaded"),As}let YO=1;class Df{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=IO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function XO(t,e,n,i,r){return fO(t.pendingWriteTree_,e,n,i,r),r?Oi(t,new On(sc(),e,n)):[]}function QO(t,e,n,i){hO(t.pendingWriteTree_,e,n,i);const r=ie.fromObject(n);return Oi(t,new di(sc(),e,r))}function mn(t,e,n=!1){const i=dO(t.pendingWriteTree_,e);if(_O(t.pendingWriteTree_,e)){let s=new ie(null);return i.snap!=null?s=s.set(Y(),!0):Te(i.children,o=>{s=s.set(new J(o),!0)}),Oi(t,new Cs(i.path,s,n))}else return[]}function uo(t,e,n){return Oi(t,new On(oc(),e,n))}function JO(t,e,n){const i=ie.fromObject(n);return Oi(t,new di(oc(),e,i))}function ZO(t,e){return Oi(t,new pr(oc(),e))}function eR(t,e,n){const i=dc(t,n);if(i){const r=_c(i),s=r.path,o=r.queryId,a=De(s,e),l=new pr(ac(o),a);return pc(t,s,l)}else return[]}function Na(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Q_(o,e))){const l=GO(o,e,n,i);WO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(h,p)=>Zt(p));if(u&&!f){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=iR(h);for(let E=0;E<p.length;++E){const b=p[E],P=b.query,W=tp(t,b);t.listenProvider_.startListening(Qi(P),xs(t,P),W.hashFn,W.onComplete)}}}!f&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Qi(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(fo(h));t.listenProvider_.stopListening(Qi(h),p)}))}rR(t,c)}return a}function tR(t,e,n,i){const r=dc(t,i);if(r!=null){const s=_c(r),o=s.path,a=s.queryId,l=De(o,e),c=new On(ac(a),l,n);return pc(t,o,c)}else return[]}function nR(t,e,n,i){const r=dc(t,i);if(r){const s=_c(r),o=s.path,a=s.queryId,l=De(o,e),c=ie.fromObject(n),u=new di(ac(a),l,c);return pc(t,o,u)}else return[]}function Lf(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,p)=>{const E=De(h,r);s=s||ni(p,E),o=o||Zt(p)});let a=t.syncPointTree_.get(r);a?(o=o||Zt(a),s=s||ni(a,Y())):(a=new BO,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=M.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,E)=>{const b=ni(E,Y());b&&(s=s.updateImmediateChild(p,b))}));const c=Q_(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=fo(e);w(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=sR();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const u=lc(t.pendingWriteTree_,r);let f=zO(a,e,n,u,s,l);if(!c&&!o&&!i){const h=X_(a,e);f=f.concat(oR(t,e,h))}return f}function J_(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=De(o,e),c=ni(a,l);if(c)return c});return W_(r,e,s,n,!0)}function Oi(t,e){return Z_(e,t.syncPointTree_,null,lc(t.pendingWriteTree_,Y()))}function Z_(t,e,n,i){if(H(t.path))return ep(t,e,n,i);{const r=e.get(Y());n==null&&r!=null&&(n=ni(r,Y()));let s=[];const o=B(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=V_(i,o);s=s.concat(Z_(a,l,c,u))}return r&&(s=s.concat(hc(r,t,i,n))),s}}function ep(t,e,n,i){const r=e.get(Y());n==null&&r!=null&&(n=ni(r,Y()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=V_(i,o),u=t.operationForChild(o);u&&(s=s.concat(ep(u,a,l,c)))}),r&&(s=s.concat(hc(r,t,i,n))),s}function tp(t,e){const n=e.query,i=xs(t,n);return{hashFn:()=>(LO(e)||M.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?eR(t,n._path,i):ZO(t,n._path);{const s=QT(r,n);return Na(t,n,null,s)}}}}function xs(t,e){const n=fo(e);return t.queryToTagMap.get(n)}function fo(t){return t._path.toString()+"$"+t._queryIdentifier}function dc(t,e){return t.tagToQueryMap.get(e)}function _c(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function pc(t,e,n){const i=t.syncPointTree_.get(e);w(i,"Missing sync point for query tag that we're tracking");const r=lc(t.pendingWriteTree_,e);return hc(i,n,r,null)}function iR(t){return t.fold((e,n,i)=>{if(n&&Zt(n))return[co(n)];{let r=[];return n&&(r=Y_(n)),Te(i,(s,o)=>{r=r.concat(o)}),r}})}function Qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(KO())(t._repo,t._path):t}function rR(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=fo(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function sR(){return YO++}function oR(t,e,n){const i=e._path,r=xs(t,e),s=tp(t,n),o=t.listenProvider_.startListening(Qi(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)w(!Zt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!H(c)&&u&&Zt(u))return[co(u).query];{let h=[];return u&&(h=h.concat(Y_(u).map(p=>p.query))),Te(f,(p,E)=>{h=h.concat(E)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Qi(u),xs(t,u))}}return o}/**
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
 */class gc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gc(n)}node(){return this.node_}}class mc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new mc(this.syncTree_,n)}node(){return J_(this.syncTree_,this.path_)}}const aR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ff=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cR(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},cR=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&w(!1,"Unexpected increment value: "+i);const r=e.node();if(w(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},np=function(t,e,n,i){return vc(e,new mc(n,t),i)},uR=function(t,e,n){return vc(t,new gc(e),n)};function vc(t,e,n){const i=t.getPriority().val(),r=Ff(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ff(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ye(a,Ie(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new ye(r))),o.forEachChild(he,(a,l)=>{const c=vc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class yc{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ec(t,e){let n=e instanceof J?e:new J(e),i=t,r=B(n);for(;r!==null;){const s=ai(i.node.children,r)||{children:{},childCount:0};i=new yc(r,i,s),n=re(n),r=B(n)}return i}function Ri(t){return t.node.value}function ip(t,e){t.node.value=e,Ma(t)}function rp(t){return t.node.childCount>0}function fR(t){return Ri(t)===void 0&&!rp(t)}function ho(t,e){Te(t.node.children,(n,i)=>{e(new yc(n,t,i))})}function sp(t,e,n,i){n&&!i&&e(t),ho(t,r=>{sp(r,e,!0,i)}),n&&i&&e(t)}function hR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Pr(t){return new J(t.parent===null?t.name:Pr(t.parent)+"/"+t.name)}function Ma(t){t.parent!==null&&dR(t.parent,t.name,t)}function dR(t,e,n){const i=fR(n),r=yt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Ma(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Ma(t))}/**
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
 */const _R=/[\[\].#$\/\u0000-\u001F\u007F]/,pR=/[\[\].#$\u0000-\u001F\u007F]/,zo=10*1024*1024,bc=function(t){return typeof t=="string"&&t.length!==0&&!_R.test(t)},op=function(t){return typeof t=="string"&&t.length!==0&&!pR.test(t)},gR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),op(t)},mR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Kl(t)||t&&typeof t=="object"&&yt(t,".sv")},wc=function(t,e,n){const i=n instanceof J?new kS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fn(i));if(typeof e=="function")throw new Error(t+"contains a function "+fn(i)+" with contents = "+e.toString());if(Kl(e))throw new Error(t+"contains "+e.toString()+" "+fn(i));if(typeof e=="string"&&e.length>zo/3&&Gs(e)>zo)throw new Error(t+"contains a string greater than "+zo+" utf8 bytes "+fn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Te(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!bc(o)))throw new Error(t+" contains an invalid key ("+o+") "+fn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PS(i,o),wc(t,a,i),NS(i)}),r&&s)throw new Error(t+' contains ".value" child '+fn(i)+" in addition to actual children.")}},vR=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=fr(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!bc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(xS);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Xe(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},yR=function(t,e,n,i){if(i&&e===void 0)return;const r=rl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Te(e,(o,a)=>{const l=new J(o);if(wc(r,a,fe(n,l)),Zl(l)===".priority"&&!mR(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),vR(r,s)},ap=function(t,e,n,i){if(!(i&&n===void 0)&&!op(n))throw new Error(rl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ER=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ap(t,e,n,i)},bR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gR(n))throw new Error(rl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class wR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ic(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!ec(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function lp(t,e,n){Ic(t,n),cp(t,i=>ec(i,e))}function xt(t,e,n){Ic(t,n),cp(t,i=>Xe(i,e)||Xe(e,i))}function cp(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(IR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function IR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();wn&&we("event: "+n.toString()),Si(i)}}}/**
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
 */const CR="repo_interrupt",TR=25;class SR{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Is(),this.transactionQueueTree_=new yc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OR(t,e,n){if(t.stats_=Ql(t.repoInfo_),t.forceRestClient_||tS())t.server_=new ws(t.repoInfo_,(i,r,s,o)=>{$f(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Uf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new St(t.repoInfo_,e,(i,r,s,o)=>{$f(t,i,r,s,o)},i=>{Uf(t,i)},i=>{AR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=oS(t.repoInfo_,()=>new sO(t.stats_,t.server_)),t.infoData_=new eO,t.infoSyncTree_=new Df({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=uo(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tc(t,"connected",!1),t.serverSyncTree_=new Df({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);xt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function RR(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cc(t){return aR({timestamp:RR(t)})}function $f(t,e,n,i,r){t.dataUpdateCount++;const s=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=fs(n,c=>Ie(c));o=nR(t.serverSyncTree_,s,l,r)}else{const l=Ie(n);o=tR(t.serverSyncTree_,s,l,r)}else if(i){const l=fs(n,c=>Ie(c));o=JO(t.serverSyncTree_,s,l)}else{const l=Ie(n);o=uo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gr(t,s)),xt(t.eventQueue_,a,o)}function Uf(t,e){Tc(t,"connected",e),e===!1&&kR(t)}function AR(t,e){Te(e,(n,i)=>{Tc(t,n,i)})}function Tc(t,e,n){const i=new J("/.info/"+e),r=Ie(n);t.infoData_.updateSnapshot(i,r);const s=uo(t.infoSyncTree_,i,r);xt(t.eventQueue_,i,s)}function up(t){return t.nextWriteId_++}function xR(t,e,n,i){Sc(t,"update",{path:e.toString(),value:n});let r=!0;const s=Cc(t),o={};if(Te(n,(a,l)=>{r=!1,o[a]=np(fe(e,a),Ie(l),t.serverSyncTree_,s)}),r)we("update() called with empty data.  Don't do anything."),Hf(t,i,"ok",void 0);else{const a=up(t),l=QO(t.serverSyncTree_,e,o,a);Ic(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||Fe("update at "+e+" failed: "+c);const h=mn(t.serverSyncTree_,a,!f),p=h.length>0?gr(t,e):e;xt(t.eventQueue_,p,h),Hf(t,i,c,u)}),Te(n,c=>{const u=pp(t,fe(e,c));gr(t,u)}),xt(t.eventQueue_,e,[])}}function kR(t){Sc(t,"onDisconnectEvents");const e=Cc(t),n=Is();Sa(t.onDisconnect_,Y(),(r,s)=>{const o=np(r,s,t.serverSyncTree_,e);U_(n,r,o)});let i=[];Sa(n,Y(),(r,s)=>{i=i.concat(uo(t.serverSyncTree_,r,s));const o=pp(t,r);gr(t,o)}),t.onDisconnect_=Is(),xt(t.eventQueue_,Y(),i)}function PR(t,e,n){let i;B(e._path)===".info"?i=Lf(t.infoSyncTree_,e,n):i=Lf(t.serverSyncTree_,e,n),lp(t.eventQueue_,e._path,i)}function Bf(t,e,n){let i;B(e._path)===".info"?i=Na(t.infoSyncTree_,e,n):i=Na(t.serverSyncTree_,e,n),lp(t.eventQueue_,e._path,i)}function NR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(CR)}function Sc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Hf(t,e,n,i){e&&Si(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function fp(t,e,n){return J_(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function Oc(t,e=t.transactionQueueTree_){if(e||_o(t,e),Ri(e)){const n=dp(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&MR(t,Pr(e),n)}else rp(e)&&ho(e,n=>{Oc(t,n)})}function MR(t,e,n){const i=n.map(c=>c.currentWriteId),r=fp(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=De(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Sc(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(mn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_o(t,Ec(t.transactionQueueTree_,e)),Oc(t,t.transactionQueueTree_),xt(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)Si(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Fe("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}gr(t,e)}},o)}function gr(t,e){const n=hp(t,e),i=Pr(n),r=dp(t,n);return DR(t,r,i),i}function DR(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=De(n,l.path);let u=!1,f;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,r=r.concat(mn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=TR)u=!0,f="maxretry",r=r.concat(mn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=fp(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){wc("transaction failed: Data returned ",p,l.path);let E=Ie(p);typeof p=="object"&&p!=null&&yt(p,".priority")||(E=E.updatePriority(h.getPriority()));const P=l.currentWriteId,W=Cc(t),q=uR(E,h,W);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=q,l.currentWriteId=up(t),o.splice(o.indexOf(P),1),r=r.concat(XO(t.serverSyncTree_,l.path,q,l.currentWriteId,l.applyLocally)),r=r.concat(mn(t.serverSyncTree_,P,!0))}else u=!0,f="nodata",r=r.concat(mn(t.serverSyncTree_,l.currentWriteId,!0))}xt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}_o(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Si(i[a]);Oc(t,t.transactionQueueTree_)}function hp(t,e){let n,i=t.transactionQueueTree_;for(n=B(e);n!==null&&Ri(i)===void 0;)i=Ec(i,n),e=re(e),n=B(e);return i}function dp(t,e){const n=[];return _p(t,e,n),n.sort((i,r)=>i.order-r.order),n}function _p(t,e,n){const i=Ri(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ho(e,r=>{_p(t,r,n)})}function _o(t,e){const n=Ri(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,ip(e,n.length>0?n:void 0)}ho(e,i=>{_o(t,i)})}function pp(t,e){const n=Pr(hp(t,e)),i=Ec(t.transactionQueueTree_,e);return hR(i,r=>{Go(t,r)}),Go(t,i),sp(i,r=>{Go(t,r)}),n}function Go(t,e){const n=Ri(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ip(e,void 0):n.length=s+1,xt(t.eventQueue_,Pr(e),r);for(let o=0;o<i.length;o++)Si(i[o])}}/**
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
 */function LR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function FR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const jf=function(t,e){const n=$R(t),i=n.namespace;n.domain==="firebase.com"&&At(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&At("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GT();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new w_(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new J(n.pathString)}},$R=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(r=LR(t.substring(u,f)));const h=FR(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),n=e.substring(E+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class gp{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class mp{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class UR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Rc{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return H(this._path)?null:Zl(this._path)}get ref(){return new Pt(this._repo,this._path)}get _queryIdentifier(){const e=Tf(this._queryParams),n=Yl(e);return n==="{}"?"default":n}get _queryObject(){return Tf(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof Rc))return!1;const n=this._repo===e._repo,i=ec(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+AS(this._path)}}class Pt extends Rc{constructor(e,n){super(e,n,new rc,!1)}get parent(){const e=k_(this._path);return e===null?null:new Pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mr{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),i=ks(this.ref,e);return new mr(this._node.getChild(n),i,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new mr(r,ks(this.ref,i),he)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vp(t,e){return t=ut(t),t._checkNotDeleted("ref"),e!==void 0?ks(t._root,e):t._root}function ks(t,e){return t=ut(t),B(t._path)===null?ER("child","path",e,!1):ap("child","path",e,!1),new Pt(t._repo,fe(t._path,e))}function BR(t,e){yR("update",e,t._path,!1);const n=new zs;return xR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ac{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new gp("value",this,new mr(e.snapshotNode,new Pt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mp(this,e,n):null}matches(e){return e instanceof Ac?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mp(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const i=ks(new Pt(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new gp(e.type,this,new mr(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function HR(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,f)=>{Bf(t._repo,t,a),l(u,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new UR(n,s||void 0),a=e==="value"?new Ac(o):new xc(e,o);return PR(t._repo,t,a),()=>Bf(t._repo,t,a)}function jR(t,e,n,i){return HR(t,"value",e,n,i)}HO(Pt);qO(Pt);/**
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
 */const WR="FIREBASE_DATABASE_EMULATOR_HOST",Da={};let VR=!1;function zR(t,e,n,i){t.repoInfo_=new w_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function GR(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||At("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jf(s,r),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[WR]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=jf(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new ei(ei.OWNER):new iS(t.name,t.options,e);bR("Invalid Firebase Database URL",o),H(o.path)||At("Database URL must point to the root of a Firebase Database (not including a child path).");const f=KR(a,t,u,new nS(t.name,n));return new YR(f,t)}function qR(t,e){const n=Da[e];(!n||n[t.key]!==t)&&At(`Database ${e}(${t.repoInfo_}) has already been deleted.`),NR(t),delete n[t.key]}function KR(t,e,n,i){let r=Da[e.name];r||(r={},Da[e.name]=r);let s=r[t.toURLString()];return s&&At("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new SR(t,VR,n,i),r[t.toURLString()]=s,s}class YR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pt(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&At("Cannot call "+e+" on a deleted database.")}}function yp(t=Zh(),e){const n=al(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=_v("database");i&&XR(n,...i)}return n}function XR(t,e,n,i={}){t=ut(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&At("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&At('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ei(ei.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:pv(i.mockUserToken,t.app.options.projectId);s=new ei(o)}zR(r,e,n,s)}/**
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
 */function QR(t){HT(yi),li(new In("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return GR(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),qt(lf,cf,t),qt(lf,cf,"esm2017")}St.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};St.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};QR();const JR={class:"font-bold text-l mb-3"},ZR={class:"flex flex-row justify-between items-center"},eA={class:"text-s text-justify text-white"},tA={__name:"Coupon",props:{is_shown:{type:Boolean,default:!0},instruction:{type:String,default:"Em có thể sử dụng phiếu này để đổi"},gift:{type:String,default:"meo meo"},expires_at:{type:String,default:"Không có"},code:{type:String,default:"ABCDEF"},color:{type:String,default:"white"}},setup(t){return(e,n)=>(me(),Ge("div",{class:"p-6 rounded border bg-transparent backdrop-blur-lg text-white noise",style:kn({backgroundColor:t.color,borderColor:t.color})},[z("div",JR,jt(t.gift),1),z("div",ZR,[z("div",eA,"Ngày hết hạn: "+jt(t.expires_at),1),ce(er(a_),{value:t.code,options:{displayValue:!1,background:e.none,lineColor:"#ffffff",height:25,width:1.5}},null,8,["value","options"])])],4))}},nA=tn(tA,[["__scopeId","data-v-894960f5"]]),iA={class:"text-white text-center pb-6"},rA={key:0},sA={key:1},oA={__name:"CouponContainer",setup(t){const e=yp(),n=nt([]),i=nt(null),r=()=>{const o=vp(e,"forHann/coupons");jR(o,a=>{const l=a.val();l?n.value=Object.entries(l).map(([c,u])=>{if(u.is_redeemed)return null;const f=u.expires_at?new Date(u.expires_at*1e3).toLocaleDateString("en-GB"):"Không có",h=u.color?u.color:"white";return{key:c,color:h,gift:u.gift,expires_at:f}}).filter(Boolean):n.value=[]})},s=Fh(()=>n.value.length);return vr(()=>{r()}),Hs(()=>{}),(o,a)=>(me(),Ge(Ve,null,[z("div",iA,[s.value>0?(me(),Ge("div",rA,"Hiện tại em có "+jt(s.value)+" phiếu quà tặng nè",1)):(me(),Ge("div",sA,"Hiện tại anh chưa nghĩ ra thêm phiếu quà tặng nào, em có thể gợi ý giúp anh nhaa"))]),z("div",{ref_key:"container",ref:i,class:"w-full h-[70vh] justify-center items-center overflow-y-scroll"},[(me(!0),Ge(Ve,null,Kg(n.value,l=>(me(),si(nA,{class:"mb-6 cursor-pointer hover:drop-shadow-[0_0_0.25rem_rgba(255,255,255,0.5)] transition duration-300",key:l.key,gift:l.gift,color:l.color,expires_at:l.expires_at,code:l.key,onClick:c=>o.$emit("coupon-clicked",l)},null,8,["gift","color","expires_at","code","onClick"]))),128))],512)],64))}};const aA={__name:"ButtonItem",props:{textColor:{type:String,default:"var(--black)"},bgColor:{type:String,default:"var(--white)"},borderColor:{type:String,default:"var(--white)"},text:{type:String}},setup(t){return(e,n)=>(me(),Ge("button",{class:Re(["border-2 rounded-full border-solid text-base select-none",t.borderColor==="var(--white)"?"hover:shadow-smw":"hover:shadow-sm"]),style:kn({backgroundColor:t.bgColor,borderColor:t.borderColor,color:t.textColor}),onClick:n[0]||(n[0]=i=>e.$emit("buttonClick"))},jt(t.text),7))}},lA=tn(aA,[["__scopeId","data-v-60c20eeb"]]);const cA={class:"flex h-[80%] flex-col overflow-y-scroll max-h-72 pb-6"},uA={class:"whitespace-pre-line text-white text-justify"},fA={class:"flex h-[20%] justify-center items-center mb-6"},hA={class:"flex flex-row"},dA={__name:"ModalForm",props:{msg:{type:String,default:"meo meo"},color:{type:String,default:"white"}},setup(t){return(e,n)=>(me(),Ge("div",{class:Re(["w-full h-auto p-6 rounded bg-gradient-to-br to-transparent border backdrop-blur-lg",[`from-${t.color}/40`,`border-${t.color}`]])},[z("div",cA,[z("pre",uA,"            "+jt(t.msg)+`
            `,1)]),z("div",fA,[z("div",hA,[ce(lA,{onButtonClick:n[0]||(n[0]=i=>e.$emit("close")),text:"Okii anh"})])])],2))}},_A=tn(dA,[["__scopeId","data-v-3b226b9e"]]),pA={class:"top-0 absolute grid grid-cols-12 w-full gap-x-6 bg-black/90",style:"z-index: 15"},gA={__name:"ModalView",props:{msg:{type:String,default:"meo meo"},is_portrait:{type:Boolean,default:!1}},setup(t){return(e,n)=>(me(),Ge("div",pA,[z("div",{class:Re({"col-span-1":t.is_portrait,"col-span-3":!t.is_portrait})},null,2),z("div",{class:Re([{"col-span-10":t.is_portrait,"col-span-6":!t.is_portrait},"flex flex-col justify-center items-center h-screen w-full"])},[ce(_A,{onClose:n[0]||(n[0]=i=>e.$emit("close")),msg:t.msg,class:"w-full"},null,8,["msg"])],2),z("div",{class:Re({"col-span-1":t.is_portrait,"col-span-3":!t.is_portrait})},null,2)]))}};const mA={class:"grid grid-cols-12 gap-x-6 max-h-screen box-border"},vA={__name:"ListCoupon",props:{is_portrait:{type:Boolean,default:!1}},setup(t){const e=nt(!1),n=nt(!1),i=nt(`Hello Hann,

Anh nhận được thông báo rùi. Anh sẽ nhắn em sớm để xác nhận rồi gửi em nhaa. Có thể anh bận nên nhắn trễ xíu, hy vọng em bỏ qua cho anhh.

Anh Toàn.`),r=nt([]);nt("");const s=yp(),o=c=>{e.value=!0,r.value=c},a=(c,u)=>{fetch("https://sendemail-hw7waiqoxq-uc.a.run.app",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({to:"hientoanlam@gmail.com",subject:`The '${c}' coupon has been redeemed!`,message:`Hi Toan, Hann has redeemed the coupon for '${u}'. Please proceed with next steps!`})})},l=(c,u)=>{const f=vp(s,`forHann/coupons/${c}`);BR(f,{is_redeemed:!0,redeemed_at:Date.now()}),a(c,u),e.value=!1,n.value=!0};return vr(()=>{}),(c,u)=>(me(),Ge(Ve,null,[z("div",mA,[z("div",{class:Re({"col-span-1":t.is_portrait,"col-span-2":!t.is_portrait})},null,2),z("div",{class:Re([{"col-span-10":t.is_portrait,"col-span-8":!t.is_portrait},"flex flex-col items-center justify-center items-center h-screen"])},[z("div",{class:Re(["text-center title text-white font-bold py-8 tracking-1",{"text-l":t.is_portrait,"text-xl":!t.is_portrait}])},"Hann's Coupons",2),ce(oA,{onCouponClicked:o})],2),z("div",{class:Re({"col-span-1":t.is_portrait,"col-span-2":!t.is_portrait})},null,2)]),ce(ls,{name:"fade"},{default:ea(()=>[e.value?(me(),si(BT,{key:0,onClose:u[0]||(u[0]=f=>e.value=!1),onRedeemed:l,is_portrait:t.is_portrait,color:r.value.color,code:r.value.key,gift:r.value.gift,expires_at:r.value.expires_at},null,8,["is_portrait","color","code","gift","expires_at"])):ca("",!0)]),_:1}),ce(ls,{name:"fade"},{default:ea(()=>[n.value?(me(),si(gA,{key:0,onClose:u[1]||(u[1]=f=>n.value=!1),msg:i.value,is_portrait:t.is_portrait},null,8,["msg","is_portrait"])):ca("",!0)]),_:1})],64))}},yA=tn(vA,[["__scopeId","data-v-45db75c0"]]);const EA={__name:"App",setup(t){const e=nt(window.matchMedia("(orientation: portrait)").matches),n=()=>{e.value=window.matchMedia("(orientation: portrait)").matches};return vr(()=>{window.addEventListener("resize",n),window.addEventListener("orientationchange",n)}),Hs(()=>{window.removeEventListener("resize",n),window.removeEventListener("orientationchange",n)}),(i,r)=>(me(),si(yA,{is_portrait:e.value},null,8,["is_portrait"]))}},bA=tn(EA,[["__scopeId","data-v-890d8dde"]]);/*!
 * vue-svg-inline v1.0.0
 * (c) Olumide Olugbemiro
 * Released under the MIT License.
 */var wA={props:{src:{type:String,required:!1},styleClass:{type:String,default:"myClass"},styleId:{type:String,default:"myId"}},created:function(){var e=this.$props;fetch(e.src).then(function(n){return n.text()}).then(function(n){var i=null;if(window.DOMParser){var r=new DOMParser;i=r.parseFromString(n,"application/xml")}else i=new ActiveXObject("Microsoft.XMLDOM"),i.async="false",i.loadXML(n);i.documentElement.setAttribute("class",e.styleClass),i.documentElement.setAttribute("id",e.styleId),document.getElementById("svg").replaceWith(i.documentElement)}).catch(function(n){return console.log(n)})}};function IA(t,e,n,i,r,s,o,a,l,c){typeof o!="boolean"&&(l=a,a=o,o=!1);var u=typeof n=="function"?n.options:n;t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,r&&(u.functional=!0)),i&&(u._scopeId=i);var f;if(s?(f=function(b){b=b||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!b&&typeof __VUE_SSR_CONTEXT__<"u"&&(b=__VUE_SSR_CONTEXT__),e&&e.call(this,l(b)),b&&b._registeredComponents&&b._registeredComponents.add(s)},u._ssrRegister=f):e&&(f=o?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(E){e.call(this,a(E))}),f)if(u.functional){var h=u.render;u.render=function(b,P){return f.call(P),h(b,P)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,f):[f]}return n}var CA=IA,TA=wA,SA=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{attrs:{id:"svg"}})},OA=[],RA=void 0,AA=void 0,xA=void 0,kA=!1,PA=CA({render:SA,staticRenderFns:OA},RA,TA,AA,kA,xA,void 0,void 0),NA={install:function(e,n){e.component("vue-svg-inline",PA)}},MA=NA;const DA=Dd(MA);var LA="firebase",FA="10.0.0";/**
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
 */qt(LA,FA,"app");const $A={apiKey:"AIzaSyCY5kWWn1FgxwqQeHacq-ahovHFrGMkfpo",authDomain:"our-odyssey.firebaseapp.com",projectId:"our-odyssey",storageBucket:"our-odyssey.appspot.com",messagingSenderId:"959052027883",appId:"1:959052027883:web:45b0ef7a2baa88e37dabae",measurementId:"G-SEJXSNP0G6"};Jh($A);const Ep=rv(bA);Ep.use(DA);Ep.mount("#app");
