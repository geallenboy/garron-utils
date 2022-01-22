/**
 * @description 函数防抖
 * @param fn
 * @param delay 延迟时间 默认500ms
 * @return  {Function} 返回防抖后的函数
 */
export const debounce = (fn: Function, delay: number = 500): Function => {
  let timeout: any = null;
  return function (...args: any[]) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      // fn.apply(this, args);
    }, delay);
  };
};
export default debounce;