import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

storiesOf('antd/cascader', module).add('default-value', () => 
  <Cascader
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    options={options}
    onChange={onChange}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Specifies default value by an array.</p></>) } });