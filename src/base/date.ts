/**
 * 当前时间
 * @returns {string} YYYY年MM月DD hh时mm分ss秒
 */
export const nowTime = (): string => {
  const now: Date = new Date();
  const year: number = now.getFullYear();
  const month: number = now.getMonth();
  const date: number | string = now.getDate() >= 10 ? now.getDate() : '0' + now.getDate();
  const hour: number | string = now.getHours() >= 10 ? now.getHours() : '0' + now.getHours();
  const miu: number | string = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes();
  const sec: number | string = now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds();
  return year + '年' + (month + 1) + '月' + date + '日 ' + hour + ':' + miu + ':' + sec;
};

/**
 * 格式化时间
 * @param formater
 * @param time
 * @returns {string}
 */
export const dateFormater = (formater: string, time: string): string => {
  let date: Date = time ? new Date(time) : new Date(),
    Y: string = date.getFullYear() + '',
    M: number = date.getMonth() + 1,
    D: number = date.getDate(),
    H: number = date.getHours(),
    m: number = date.getMinutes(),
    s: number = date.getSeconds();

  return formater
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substring(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s);
};
