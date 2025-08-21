import TableComp, { type DataType } from "./components/Table"
import { Button, Space } from "antd"
import ModalComp from "./components/Modal"
import dayjs from "dayjs"

const initialValues = (data: DataType) => {
  const dateformat = 'YYYY-MM-DD';

  return {
    nameInit: data.name,
    numberInit: data.number,
    dateInit: dayjs(data.date, dateformat),
  }
}

const 

function App() {
  return (
    <Space>
      <Button htmlType="button" onClick={() => console.log('add')}>Add new record</Button>
      <TableComp />
      <ModalComp btnContent='add' title='Create new record' />
      <ModalComp btnContent="edit" title='Edit record' />
    </Space>
  )
}

export default App
