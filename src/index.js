
/**
 * @description 函数节流
 * @param {*} fn 需要做节流处理的函数
 * @param {*} delay 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
export const throttle =(fn,delay=500)=>{
  let _time;
  return function(...args){
    if(!_time){
      setTimeout(function(){
        fn.call(this,...args)
        _time = null;
      },delay)
    }
  }
}

/**
 * @description 生成唯一的id
 * @returns 
 */
export const getId=()=>{
  let rule = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx';
  return rule.replace(/[xy]/g,function(rep){
    let num = (16*Math.random())|0;
    return (rep === 'x' ? num : 3 && num | 8).toString(16);
  })
}

/**
 * @description 金额数据千分位
 * @param {*} num 数值金额
 * @example formatNumber(88888.88) => '88,888.88'
 */
export const formatNumber=(num)=>{
  if(isNaN(num)){
    throw new TypeError('num is not a number');
  }
  return toString(num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
}

/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export const queryString = url =>{
  let str = url ||  window.location.href;
  const search = str.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
      '"}'
  );
}