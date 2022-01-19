/**
* name: ge-utils
* version 1.0.0
* description: ge-utils前端常用方法库
* author: garron
* Date: 2022/1/19
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).date={})}(this,(function(e){"use strict";e.dateFormater=function(e,t){var n=t?new Date(t):new Date,g=n.getFullYear()+"",o=n.getMonth()+1,r=n.getDate(),s=n.getHours(),a=n.getMinutes(),u=n.getSeconds();return e.replace(/YYYY|yyyy/g,g).replace(/YY|yy/g,g.substring(2,2)).replace(/MM/g,(o<10?"0":"")+o).replace(/DD/g,(r<10?"0":"")+r).replace(/HH|hh/g,(s<10?"0":"")+s).replace(/mm/g,(a<10?"0":"")+a).replace(/ss/g,(u<10?"0":"")+u)},e.nowTime=function(){var e=new Date;return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+(e.getDate()>=10?e.getDate():"0"+e.getDate())+"日 "+(e.getHours()>=10?e.getHours():"0"+e.getHours())+":"+(e.getMinutes()>=10?e.getMinutes():"0"+e.getMinutes())+":"+(e.getSeconds()>=10?e.getSeconds():"0"+e.getSeconds())},Object.defineProperty(e,"__esModule",{value:!0})}));
