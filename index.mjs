// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function i(t,r,i){var d;return s(t)||s(r)||s(i)||i<=0?NaN:t===e?0:1/i*n(-(d=(t-r)/i)-n(-d))}function d(t,i){return s(t)||s(i)||i<=0?r(NaN):function(r){var d;if(s(r))return NaN;if(r===e)return 0;return 1/i*n(-(d=(r-t)/i)-n(-d))}}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map
