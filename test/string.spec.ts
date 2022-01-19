import {
  strFistUpperCase,
  telFormat
} from '../src/base/string';

test('字符串首字母大写',()=>{
  const str1:string = 'geAllen';
  expect(strFistUpperCase(str1)).toBe('GeAllen')
})

test('手机号中间四位变成*',()=>{
  const str1:string = '15188889999';
  expect(telFormat(str1)).toBe('151****9999')
})