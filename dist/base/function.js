/**
* name: ge-utils
* version 1.0.0
* description: ge-utils前端常用方法库
* author: garron
* Date: 2022/1/19
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).function={})}(this,(function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var n=function(e,t){void 0===t&&(t=500);var n=null;return function(){for(var o=this,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){n=null,e.apply(o,r)}),t)}},o=function(e,t){if(void 0===t&&(t=new WeakMap),e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(t.has(e))return t.get(e);var n=Object.getOwnPropertyDescriptors(e),r=Object.create(Object.getPrototypeOf(e),n);t.set(e,r);for(var i=0,f=Reflect.ownKeys(e);i<f.length;i++){var l=f[i];"object"==typeof e[l]&&null!==e[l]?r[l]=o(e[l],t):r[l]=e[l]}return r};e.debounce=n,e.deepClone=o,e.default=n,e.throttle=function(e,n){var o;return void 0===n&&(n=500),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];o||(o=setTimeout((function(){e.call.apply(e,t([this],r,!1)),o=null}),n))}},Object.defineProperty(e,"__esModule",{value:!0})}));
