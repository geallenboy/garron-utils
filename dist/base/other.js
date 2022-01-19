/**
* name: ge-utils
* version 1.0.0
* description: ge-utils前端常用方法库
* author: garron
* Date: 2022/1/19
**/

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).other={})}(this,(function(e){"use strict";e.getId=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"===e?n:8|n).toString(16)}))},e.queryString=function(e){var n=(e||window.location.href).split("?")[1],t={};return n.replace(/([^?&=]+)=([^?&=]*)/g,(function(e,n,o){var x=decodeURIComponent(n),r=String(decodeURIComponent(o));return t[x]=r,e})),t},e.version="1.0.0",Object.defineProperty(e,"__esModule",{value:!0})}));
