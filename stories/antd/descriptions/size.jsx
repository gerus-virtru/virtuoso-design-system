import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Descriptions, Radio, Button } from 'antd';

class Demo extends React.Component {
  state = {
    size: 'default',
  };

  onChange = e => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Radio.Group onChange={this.onChange} value={this.state.size}>
          <Radio value="default">default</Radio>
          <Radio value="middle">middle</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
        <br />
        <br />
        <Descriptions
          bordered
          title="Custom Size"
          size={this.state.size}
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
        <br />
        <br />
        <Descriptions
          title="Custom Size"
          size={this.state.size}
          extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

storiesOf('antd/descriptions', module).add('size', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Custom sizes to fit in a variety of containers.</p></>) } });