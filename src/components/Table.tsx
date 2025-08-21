import { Space, Table, type TableColumnsType } from "antd";
import type { TableDataType } from "../types/dataTypes";
import ModalComp from "./Modal";

const tableColumns: TableColumnsType<TableDataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
      multiple: 1,
    },
    filterSearch: true,
    onFilter: (value, record) => {
      return record.name.includes(value as string)
    },
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    sorter: {
      compare: (a, b) => a.number - b.number,
      multiple: 2,
    },
    filterSearch: true,
    onFilter: (value, record) => {
      return record.name.includes(value as string)
    },
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: {
      compare: (a, b) => {
        const date1 = new Date(a.date)
        const date2 = new Date(b.date)
        return date1.getTime() - date2.getTime()
    },
      multiple: 3,
    }
  },
  {
    title: 'Actions',
    dataIndex: '',
    key: 'actions',
    render: (_, record) => (
      <Space size='middle'>
        <ModalComp btnContent="Edit" title='Edit record' record={record} />
        <ModalComp btnContent='Delete' title='Record delete' id={record.key}/>
      </Space>)
  }
];

type TableCompProps = {
  data: TableDataType[],
  columns?: TableColumnsType<TableDataType>
}

const TableComp = ({ data, columns = tableColumns }: TableCompProps) => {
  return (
    <Table<TableDataType> dataSource={data} columns={columns} />
  )
}

export default TableComp;