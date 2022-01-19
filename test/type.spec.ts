import {isType} from '../src/base/type';

test('isType类型验证',()=>{
  const str1:Object = 'str11';
  const str2:Number= 1222;
  
  expect(isType(str1)).toBe('String')
  expect(isType(str2)).toBe('Number')
})