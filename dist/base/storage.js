/**
* name: ge-utils
* version 1.0.0
* description: ge-utils前端常用方法库
* author: garron
* Date: 2022/1/19
**/

!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).storage={})}(this,(function(e){"use strict";e.delCookie=function(e){document.cookie="".concat(encodeURIComponent(e),"=;expires=").concat(new Date)},e.getCookie=function(e){for(var o=decodeURI(document.cookie).split("; "),t="",n=0;n<o.length;n++){var i=o[n].split("=");if(i[0]===e){t=i[1];break}}return t},e.loalStorageGet=function(e){return void 0===e&&(e=""),window.localStorage.getItem(e)},e.loalStorageRemove=function(e){void 0===e&&(e=""),window.localStorage.removeItem(e)},e.loalStorageSet=function(e,o){void 0===e&&(e=""),void 0===o&&(o=""),window.localStorage.setItem(e,o)},e.sessionStorageGet=function(e){return void 0===e&&(e=""),window.sessionStorage.getItem(e)},e.sessionStorageRemove=function(e){void 0===e&&(e=""),window.sessionStorage.removeItem(e)},e.sessionStorageSet=function(e,o){void 0===e&&(e=""),void 0===o&&(o=""),window.sessionStorage.setItem(e,o)},e.setCookie=function(e,o,t){var n=new Date;n.setDate(n.getDate()+t),document.cookie="".concat(e,"=").concat(o,";expires=").concat(n.toUTCString())},Object.defineProperty(e,"__esModule",{value:!0})}));
