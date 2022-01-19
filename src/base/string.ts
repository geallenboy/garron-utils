/**
 * 字符串首字母大写
 * @param str
 * @returns
 */
export const strFistUpperCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 手机号中间四位变成*
 * @param tel
 * @returns
 */
export const telFormat = (tel: string): string => {
  return tel.substring(0, 3) + '****' + tel.substring(7);
};
