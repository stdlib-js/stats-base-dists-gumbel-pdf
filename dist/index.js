"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=f(function(R,v){
var t=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-exp/dist'),y=require('@stdlib/constants-float64-ninf/dist');function d(e,r,n){var i;return t(e)||t(r)||t(n)||n<=0?NaN:e===y?0:(i=(e-r)/n,1/n*s(-i-s(-i)))}v.exports=d
});var N=f(function(g,q){
var F=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-exp/dist'),z=require('@stdlib/constants-float64-ninf/dist');function I(e,r){if(a(e)||a(r)||r<=0)return F(NaN);return n;function n(i){var u;return a(i)?NaN:i===z?0:(u=(i-e)/r,1/r*o(-u-o(-u)))}}q.exports=I
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),x=N();l(p,"factory",x);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
