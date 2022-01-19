import { isType } from './base/type';
import { version, getId, queryString } from './base/other';
import { randonNum, format, digitUppercase } from './base/number';
import { sample } from './base/array';
import { nowTime, dateFormater } from './base/date';
import { scrollToTop, scrollToBottom } from './base/dom';
import { throttle, debounce } from './base/function';
import { strFistUpperCase, telFormat } from './base/string';
import { checkCardNo } from './base/format';
import {
  loalStorageSet,loalStorageGet,
  loalStorageRemove,
  sessionStorageSet,
  sessionStorageGet,
  sessionStorageRemove,
  setCookie,
  getCookie,
  delCookie
} from './base/storage';

export {
  randonNum,sample,nowTime,
  dateFormater,
  scrollToBottom,
  scrollToTop,
  throttle,
  isType,
  strFistUpperCase,
  telFormat,
  checkCardNo,
  version,
  loalStorageSet,
  loalStorageGet,
  loalStorageRemove,
  sessionStorageSet,
  sessionStorageGet,
  sessionStorageRemove,
  setCookie,
  getCookie,
  delCookie,
  debounce,
  format,
  digitUppercase,
  getId,
  queryString
};
