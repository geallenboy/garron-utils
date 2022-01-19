import {
  format,
  digitUppercase
} from '../src/base/number';

test('数字千分位分隔',()=>{
  const str1:string = '123456789';
  const str2:string = '123456789.123';
  const str3:number = 123456789;
  expect(format(str1)).toBe('123,456,789')
  expect(format(str2)).toBe('123,456,789.123')
  expect(format(str3)).toBe('123,456,789')
})

test('数字转化为大写金额',()=>{
  const str3:number = 123456789;
  expect(digitUppercase(str3)).toBe('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元零')
  
})