/**
 * title: 基础用法
 * desc: 手机号中间四位变成
 */

import React, { useState } from 'react';
import { telFormat } from 'garron-utils';

export default () => {
  const [str, setStr] = useState<string>('15188889999');
  const toggleClick = () => {
    setStr(telFormat(str));
  }

  return (
    <div>
      <p>
        {str}
      </p>
      <button type="button" onClick={toggleClick}>
        点击
      </button>
    </div>
  );
};
