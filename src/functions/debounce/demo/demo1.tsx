/**
 * title: 基础用法
 * desc: 多次点击按钮等待1秒之后在触发，如果1秒之内又点击从新计算。
 */

import React, { useState } from 'react';
import { debounce } from 'garron-utils';

export default () => {
  const [count, setCount] = useState<number>(0);
  const toggleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>
        {count}
      </p>
      <button type="button" onClick={debounce(toggleClick, 1000)}>
        Toggle
      </button>
    </div>
  );
};
