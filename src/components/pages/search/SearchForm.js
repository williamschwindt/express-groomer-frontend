import React, { onChange } from 'react';
// useState
import { Form, Input, Button, Checkbox, Radio } from 'antd';
const demo = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
onChange = e => {
  console.log('radio checked', e.target.value);
  this.setState({
    value: e.target.value,
  });
};
export default function SearchForm() {
  const onFinish = values => {
    console.log('Success: groomers displayed', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Unable to retrieve data:', errorInfo);
  };

  return (
    <Form
      {...SearchForm}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="petsName"
        name="petsName"
        rules={[
          {
            required: true,
            message: 'What is your pets name?',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <h3>I have a:</h3>
        <Radio value={1}>Dog</Radio>
        <Radio value={2}>Cat</Radio>
      </Radio.Group>

      <Form.Item
        label="Enter zip or postal code:"
        name="zipcode"
        rules={[
          {
            required: true,
            message: 'Please input your zipcode!',
          },
        ]}
      >
        <Input.Zipcode />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Find Your Groomers
        </Button>
      </Form.Item>
    </Form>
  );
}
