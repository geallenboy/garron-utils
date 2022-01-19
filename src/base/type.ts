/**
 * 返回类型:
 * @param obj
 * @returns
 * String,Function,Number,Boolean,Null,Undefined,Object,
 * Array,Date,RegExp,Error,Symbol,Promise,Set
 */
export const isType = (obj: Object): string => {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
