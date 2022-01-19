/**
 * @description 函数节流
 * @param {*} fn 需要做节流处理的函数
 * @param {*} delay 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
export const throttle = (fn: Function, delay: number = 500): Function => {
  let _time: any;
  return function (...args: any[]) {
    if (!_time) {
      _time = setTimeout(function () {
        fn.call(this, ...args);
        _time = null;
      }, delay);
    }
  };
};
/**
 * @description 函数防抖
 * @param fn
 * @param delay 延迟时间 默认500ms
 * @return  {Function} 返回防抖后的函数
 */
export const debounce = (fn: Function, delay: number = 500): Function => {
  let timeout = null;
  return function (...args: any[]) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn.apply(this, args);
    }, delay);
  };
};
export default debounce;
