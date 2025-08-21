import TableComp from "./components/Table"
import { Space, Input } from "antd"
import ModalComp from "./components/Modal"
import { useStore } from "./store/store"
import { useState, useEffect, useCallback } from "react"
import type { TableDataType } from "./types/dataTypes"
// import Search from "antd/es/input/Search"

function App() {
  const records = useStore((state) => state.records);
  const [inputValue, setInputValue] = useState<string>('');
  const [req, setReq] = useState<TableDataType[]>([]);

  const change = (e: string) => {
    setInputValue(e)
  }

  const filterRecords = useCallback(() => {
    setReq(records.filter((record) => record.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      (record.number + "").includes(inputValue) ||
      record.date.includes(inputValue)))
  }, [inputValue, records])

  useEffect(() => {
    filterRecords()
  }, [inputValue, filterRecords])

  // const onSearch = (e: string) => setInputValue(e)

  return (
    <Space direction="vertical">
      <Space>
        {/* <Search placeholder="Enter filter search text" onSearch={onSearch} enterButton /> */}
        <Input onChange={(e) => change(e.target.value)} placeholder="Enter filter text" />
        <ModalComp btnContent='Add new record' title='Create new record' />
      </Space>
      <TableComp data={req} />
    </Space>
  )
}

export default App
