
/**
 * @description 函数节流
 * @param {*} fn 需要做节流处理的函数
 * @param {*} delay 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
export const throttle =(fn,delay:number=500)=>{
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
    let num:number = (16*Math.random())|0;
    return (rep === 'x' ? num : 3 && num | 8).toString(16);
  })
}


/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export const queryString = (url:string) =>{
  let str:string = url;
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