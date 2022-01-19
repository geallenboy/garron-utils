/**
 * 生成指定范围随机数
 * @param min
 * @param max
 * @returns
 */
export const randonNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 数字千分位分隔
 * @param n
 * @returns
 */
export const format = (n: number | string): string => {
  let n_string: string = n.toString();
  let num: string = '';
  let temp: string = '';
  if (n_string.includes('.')) {
    num = n_string.substring(0, n_string.indexOf('.'));
    temp = n_string.substring(n_string.indexOf('.'), n_string.length);
  } else {
    num = n_string;
  }
  let len = num.length;
  if (len <= 3) {
    return num;
  } else {
    let remainder = len % 3;
    if (remainder > 0) {
      //不是3的整数倍
      return (
        num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
      );
    } else {
      //3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(',') + temp;
    }
  }
};

/**
 * 数字转化为大写金额
 * @param num
 * @returns
 */
export const digitUppercase = (num: number): string => {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  num = Math.abs(num);
  let s = '';
  for (let i = 0; i < fraction.length; i++) {
    s += digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i].replace(/零./, '');
  }
  s = s || '整';
  num = Math.floor(num);
  for (let i = 0; i < unit[0].length && num > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && num > 0; j++) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
};
