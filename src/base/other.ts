/**
 * 当前函数库版本
 */
export const version: string = '1.0.0';

/**
 * @description 生成唯一的id
 * @returns
 */
export const getId = (): string => {
  let rule = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx';
  return rule.replace(/[xy]/g, function (rep) {
    let num: number = (16 * Math.random()) | 0;
    return (rep === 'x' ? num : 3 && num | 8).toString(16);
  });
};

/**
 * @description   url参数转对象
 * @param  {String} url
 * @return {Object}
 */
export const queryString = (url: string): Object => {
  let str: string = url || window.location.href;
  const search: string = str.split('?')[1];
  const obj: Object = {};
  const reg: RegExp = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name: string = decodeURIComponent($1);
    let val = String(decodeURIComponent($2));
    obj[name] = val;
    return rs;
  });
  return obj;
};
