/**
 * title: 基础用法
 * desc: url参数转对象
 */

import React, { useState } from 'react';
import { checkStr } from 'garron-utils';

export default () => {

  const [str, setStr] = useState<any>();
  const toggleClick = () => {

  }
  const onChangeClick = (e: any) => {
    console.log(e.target.value)
  }
  const onSelectClick = (val) => {
    console.log(val.target.value)
  }

  return (
    <div>
      <input onChange={onChangeClick} />
      <select onChange={onSelectClick}>
        <option key="1" value={'phone'}>手机号码</option>
        <option key="2" value={'tel'}>座机</option>
        <option key="3" value={'card'}>身份证</option>
        <option key="4" value={'pwd'}>密码</option>
        <option key="5" value={'postal'}>邮政编码</option>
      </select>
      <button type="button" onClick={toggleClick}>
        点击
      </button>

    </div>
  );
};
