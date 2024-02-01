// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function m(t,i,m,d){var o,a;return s(t)||s(i)||s(m)||s(d)||i>d||d>m?NaN:t<=i?r:(o=(m-i)*(d-i),a=(m-i)*(m-d),t<=d?2*e(t-i)-e(o):t<m?e(1-n(m-t,2)/a):0)}function d(t,m,d){var o,a;return s(t)||s(m)||s(d)?i(NaN):t<=d&&d<=m?(o=(m-t)*(d-t),a=(m-t)*(m-d),function(i){if(s(i))return NaN;if(i<=t)return r;if(i<=d)return 2*e(i-t)-e(o);if(i<m)return e(1-n(m-i,2)/a);return 0}):i(NaN)}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map