import { Button, Table, type TableColumnsType } from "antd";
import type React from "react";

/*
- Реализовать поиск по всем ячейкам таблицы с инпутом над таблицей   */
/*  удалить / реадктировать -(можно иконкой) */

interface DataType {
  key: React.Key,
  name: string,
  number: number,
  date: string,
}

const tableData = [{
  key: '1',
  name: 'John Brown',
  number: 32,
  date: '2025-08-15',
},
{
  key: '2',
  name: 'Mike Green',
  number: 42,
  date: '2024-12-08',
},
{
  key: '3',
  name: 'Kate Black',
  number: 32,
  date: '2025-05-18',
},
{
  key: '4',
  name: 'Disabled User',
  number: 99,
  date: '2023-07-29',
},
];

const tableColumns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
      multiple: 1,
    }
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    sorter: {
      compare: (a, b) => a.number - b.number,
      multiple: 2,

    }
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: {
      compare:(a, b) => { 
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
    key: '+',
    render: () => <>
      <Button onClick={() => console.log('edit')}>Edit</Button>
      <Button onClick={() => console.log('delete')}>Delete</Button>
    </>
  }
];




const TableComp = ({ data = tableData, columns = tableColumns }: { data?: DataType[], columns?: TableColumnsType<DataType> }) => {
  return (
    <Table<DataType> dataSource={data} columns={columns} />
  )
}

export default TableComp;