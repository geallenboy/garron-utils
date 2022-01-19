import {queryString,getId} from '../src/base/other';

test('获取url请求参数对象',()=>{
  let _url:string = 'https://www.baidu.com/?search=11111&b=2222';
  expect(queryString(_url)['search']).toBe('11111')
})

test('getId',()=>{
  expect(getId())
})