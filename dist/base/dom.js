/**
* name: ge-utils
* version 1.0.0
* description: ge-utils前端常用方法库
* author: garron
* Date: 2022/1/19
**/

!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((o="undefined"!=typeof globalThis?globalThis:o||self).dom={})}(this,(function(o){"use strict";var e=function(){var o=document.documentElement.scrollTop||document.body.scrollTop;o>0&&(window.requestAnimationFrame(e),window.scrollTo(0,o-o/8))};o.scrollToBottom=function(){window.scrollTo(0,document.documentElement.clientHeight)},o.scrollToTop=e,Object.defineProperty(o,"__esModule",{value:!0})}));
