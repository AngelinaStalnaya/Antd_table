import TableComp from "./components/Table"
import { Space, Input } from "antd"
import ModalComp from "./components/Modal"
import { useStore } from "./store/store"
import { useEffect, useState } from "react"
// import { TableDataType } from "./types/dataTypes"

function App() {
  const records = useStore((state) => state.records)
  const [inputValue, setInputValue] = useState<string>('')
  const [req, setReq] = useState<TableDataType[]>([])

  const change = (e: string) => {
    setInputValue(e)
  }

  useEffect(() => {
    setReq(records.filter(record => {
      return record.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      (record.number + '').includes(inputValue) ||
      record.date.includes(inputValue)
    }))
  }, [req, inputValue])
// todo add store method to retrieve filtered values
  return (
    <Space direction="vertical">
      <Space>
        <Input onChange={(e) => change(e.target.value)} />
        <ModalComp btnContent='Add new record' title='Create new record' />
      </Space>
      <TableComp data={req} />
    </Space>
  )
}

export default App
