/**
 * 校验身份证号码
 * @param value
 * @returns
 */
export const checkCardNo = (value: string): boolean => {
  const reg: RegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
};
