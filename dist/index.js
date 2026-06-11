"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=q(function(k,N){
var f=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-pow/dist'),v=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist');function g(e,r,n,i){var u,o;return f(e)||f(r)||f(n)||f(i)||r>i||i>n?NaN:e<=r?F:(u=(n-r)*(i-r),o=(n-r)*(n-i),e<=i?2*v(e-r)-v(u):e<n?v(1-c(n-e,2)/o):0)}N.exports=g
});var p=q(function(z,m){
var l=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-pow/dist'),s=require('@stdlib/math-base-special-ln/dist'),I=require('@stdlib/constants-float64-ninf/dist');function O(e,r,n){var i,u;if(a(e)||a(r)||a(n))return l(NaN);if(!(e<=n&&n<=r))return l(NaN);return i=(r-e)*(n-e),u=(r-e)*(r-n),o;function o(t){return a(t)?NaN:t<=e?I:t<=n?2*s(t-e)-s(i):t<r?s(1-w(r-t,2)/u):0}}m.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=d(),h=p();R(y,"factory",h);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
