import { useEffect, useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Space,
} from 'antd';
import type { TableDataType } from '../types/dataTypes';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';


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

type FormCompProps = {
  recordValues?: TableDataType | null,
  addOpt?: (newRecord: TableDataType) => void | undefined,
  updateOpt?: (recordId: string, newRecord: TableDataType) => void | undefined,
}

const FormComp = ({  recordValues, addOpt, updateOpt }: FormCompProps) => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState<boolean>(false);
  const values = Form.useWatch([], form)

  const onReset = () => form.resetFields();

  const addNewRecord = (data: FormData) => {
    const record = new FormData;
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'date') {
        value = dayjs(value).format('DD-MM-YYYY')
      }
      record.append(key, value);
    });
    if (!record.get('key')) {
      record.append('key', uuidv4())
    }
    return Object.fromEntries(record.entries())
  }

  const onFinish = (values: FormData) => {
    const result = addNewRecord(values)

    if (addOpt) {
      addOpt(result as unknown as TableDataType)
      onReset()
    }
    // todo: refactor  as-as clause

    if (updateOpt) {
      updateOpt(recordValues?.key as string, result as unknown as TableDataType)
    }
  }

  useEffect(() => {
    form.validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => {setSubmittable(false)})
  }, [form, values])

  useEffect(() => {
    if (recordValues) {
      const v = JSON.parse(JSON.stringify(recordValues))
      v.date = dayjs(recordValues.date)
      form.setFieldsValue(v)
      setSubmittable(true)
    }
  }, [form, recordValues])

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant='outlined'
      style={{ maxWidth: 600 }}
      size='large'
      onFinish={(values) => onFinish(values as FormData)}
    >
      <Form.Item label="Name" name="name" rules={[{ required: true, min: 1, message: 'Name required!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Number"
        name="number"
        rules={[{ required: true, message: 'Number required!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: 'Date required!' }]}
      >
        <DatePicker format='DD/MM/YYYY'/>
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Space>
          <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
          </Button>
          {recordValues &&
            <Button type='default' htmlType='button' onClick={onReset} >
              Reset
            </Button>}
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormComp;