import React, { useEffect, useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Space,

} from 'antd';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const FormComp: React.FC = () => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState<boolean>(false);
  const values = Form.useWatch([], form)

  const onReset = () => 
    form.resetFields();

  const onFinish = (values: FormData) => {
    console.log(values)
  }

  useEffect(()=> {
    form.validateFields({validateOnly: true})
    .then(()=> setSubmittable(true))
    .catch(()=> setSubmittable(false))
  }, [form, values])

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant='outlined'
      style={{ maxWidth: 600 }}
      size='large'
      onFinish={onFinish}
    >
      <Form.Item label="Name" name="nameInput" rules={[{ required: true, min: 1, message: 'Name required!' }]}>
        <Input/>
      </Form.Item>

      <Form.Item
        label="Number"
        name="numberInput"
        rules={[{ required: true, message: 'Number required!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Date"
        name="DatePicker"
        rules={[{ required: true, message: 'Date required!' }]}
      >
        <DatePicker />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Space>
        <Button type="primary" htmlType="submit" disabled={!submittable}>
          Submit
        </Button>
        <Button type='default' htmlType='button' onClick={onReset} >
          Reset
        </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormComp;