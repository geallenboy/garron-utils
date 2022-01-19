/**
* name: ge-utils
* version 1.0.0
* description: ge-utils前端常用方法库
* author: garron
* Date: 2022/1/19
**/

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).number={})}(this,(function(e){"use strict";e.digitUppercase=function(e){var t=["角","分"],n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],r=[["元","万","亿"],["","拾","佰","仟"]];e=Math.abs(e);for(var o="",a=0;a<t.length;a++)o+=n[Math.floor(10*e*Math.pow(10,a))%10]+t[a].replace(/零./,"");o=o||"整",e=Math.floor(e);for(a=0;a<r[0].length&&e>0;a++){for(var i="",f=0;f<r[1].length&&e>0;f++)i=n[e%10]+r[1][f]+i,e=Math.floor(e/10);o=i.replace(/(零.)*零$/,"").replace(/^$/,"零")+r[0][a]+o}return o.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},e.format=function(e){var t=e.toString(),n="",r="";t.includes(".")?(n=t.substring(0,t.indexOf(".")),r=t.substring(t.indexOf("."),t.length)):n=t;var o=n.length;if(o<=3)return n;var a=o%3;return a>0?n.slice(0,a)+","+n.slice(a,o).match(/\d{3}/g).join(",")+r:n.slice(0,o).match(/\d{3}/g).join(",")+r},e.randonNum=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},Object.defineProperty(e,"__esModule",{value:!0})}));
