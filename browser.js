// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return n({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&f&&f.call(t,n,r.set),t},p=r()?l:y,b=function(t,n,r){p(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(t){return t!=t},v=Math.floor,A=Math.ceil,_=v,w=A,m=function(t){return t<0?w(t):_(t)},s=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY,U=h,g=s,j=function(t){return t===U||t===g},N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),I=Object.prototype.toString,O=I,S=function(t){return O.call(t)},E=Object.prototype.hasOwnProperty,F=function(t,n){return null!=t&&E.call(t,n)},T="function"==typeof Symbol?Symbol.toStringTag:"",H=F,G=T,P=I,L=S,V=function(t){var n,r,e;if(null==t)return P.call(t);r=t[G],n=H(t,G);try{t[G]=void 0}catch(n){return P.call(t)}return e=P.call(t),n?t[G]=r:delete t[G],e},W=N&&"symbol"==typeof Symbol.toStringTag?V:L,x=W,M="function"==typeof Uint32Array,k="function"==typeof Uint32Array?Uint32Array:null,Y=function(t){return M&&t instanceof Uint32Array||"[object Uint32Array]"===x(t)},C=k,q=function(){var t,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),t=Y(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=q()?z:B,J=W,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,R=function(t){return K&&t instanceof Float64Array||"[object Float64Array]"===J(t)},X=Q,Z=function(){var t,n;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),t=R(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},$="function"==typeof Float64Array?Float64Array:void 0,tt=function(){throw new Error("not implemented")},nt=Z()?$:tt,rt=W,et="function"==typeof Uint8Array,ot="function"==typeof Uint8Array?Uint8Array:null,ut=function(t){return et&&t instanceof Uint8Array||"[object Uint8Array]"===rt(t)},it=ot,ft=function(){var t,n;if("function"!=typeof it)return!1;try{n=new it(n=[1,3.14,-3.14,256,257]),t=ut(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},at="function"==typeof Uint8Array?Uint8Array:void 0,ct=function(){throw new Error("not implemented")},lt=ft()?at:ct,yt=W,pt="function"==typeof Uint16Array,bt="function"==typeof Uint16Array?Uint16Array:null,dt=function(t){return pt&&t instanceof Uint16Array||"[object Uint16Array]"===yt(t)},vt=bt,At=function(){var t,n;if("function"!=typeof vt)return!1;try{n=new vt(n=[1,3.14,-3.14,65536,65537]),t=dt(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},_t="function"==typeof Uint16Array?Uint16Array:void 0,wt=function(){throw new Error("not implemented")},mt={uint16:At()?_t:wt,uint8:lt};(t=new mt.uint16(1))[0]=4660;var st,ht,Ut=52===new mt.uint8(t.buffer)[0];!0===Ut?(st=1,ht=0):(st=0,ht=1);var gt,jt,Nt=D,It={HIGH:st,LOW:ht},Ot=new nt(1),St=new Nt(Ot.buffer),Et=It.HIGH,Ft=It.LOW,Tt=function(t,n){return Ot[0]=n,t[0]=St[Et],t[1]=St[Ft],t},Ht=function(t,n){return 1===arguments.length?Tt([0,0],t):Tt(t,n)},Gt=Ht,Pt=D,Lt=!0===Ut?1:0,Vt=new nt(1),Wt=new Pt(Vt.buffer),xt=function(t){return Vt[0]=t,Wt[Lt]};!0===Ut?(gt=1,jt=0):(gt=0,jt=1);var Mt=D,kt={HIGH:gt,LOW:jt},Yt=new nt(1),Ct=new Mt(Yt.buffer),qt=kt.HIGH,zt=kt.LOW,Bt=function(t,n){return Ct[qt]=t,Ct[zt]=n,Yt[0]},Dt=Gt,Jt=xt,Kt=Bt,Qt=[0,0],Rt=j,Xt=d,Zt=function(t){return Math.abs(t)},$t=function(t,n){return Xt(n)||Rt(n)?(t[0]=n,t[1]=0,t):0!==n&&Zt(n)<22250738585072014e-324?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)},tn=function(t,n){return 1===arguments.length?$t([0,0],t):$t(t,n)},nn=xt,rn=function(t){var n=nn(t);return(n=(2146435072&n)>>>20)-1023|0},en=h,on=s,un=d,fn=j,an=function(t,n){var r,e;return Dt(Qt,t),r=Qt[0],r&=2147483647,e=Jt(n),Kt(r|=e&=2147483648,Qt[1])},cn=tn,ln=rn,yn=Gt,pn=Bt,bn=[0,0],dn=[0,0],vn=function(t,n){var r,e;return 0===n||0===t||un(t)||fn(t)?t:(cn(bn,t),n+=bn[1],(n+=ln(t=bn[0]))<-1074?an(0,t):n>1023?t<0?on:en:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,yn(dn,t),r=dn[0],r&=2148532223,e*pn(r|=n+1023<<20,dn[1])))},An=vn,_n=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)},wn=d,mn=m,sn=s,hn=h,Un=function(t,n,r){var e,o,u;return u=(e=t-n)-(o=e*e)*_n(o),An(1-(n-e*u/(2-u)-t),r)},gn=1.4426950408889634,jn=1/(1<<28),Nn=function(t){var n;return wn(t)||t===hn?t:t===sn?0:t>709.782712893384?hn:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<jn?1+t:(n=mn(t<0?gn*t-.5:gn*t+.5),Un(t-.6931471803691238*n,1.9082149292705877e-10*n,n))};function In(t,n,r){var e;return d(t)||d(n)||d(r)||r<=0?NaN:t===s?0:1/r*Nn(-(e=(t-n)/r)-Nn(-e))}var On=function(t){return function(){return t}};return b(In,"factory",(function(t,n){return d(t)||d(n)||n<=0?On(NaN):function(r){var e;return d(r)?NaN:r===s?0:1/n*Nn(-(e=(r-t)/n)-Nn(-e))}})),In},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).pdf=n();
//# sourceMappingURL=browser.js.map
