/**
 * title: 基础用法
 * desc: 字符串首字母大写
 */

import React, { useState } from 'react';
import { myFetch } from '@garron/utils';

export default () => {
  const [str, setStr] = useState<string>('geallen');
  const toggleClick = () => {
    // myFetch("http://localhost:8000/data.json", {}).then((k) => {
    //   console.log(k)
    // })
    const data = { username: 'example' };

    fetch('http://localhost:8000/data.json', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
