import { Button, Table, type TableColumnsType } from "antd";
import type React from "react";

/* использовать Antd + сортировка по всем колонкам */
/* поиск по всем ячейкам таблицы через инпут над таблицей - сортировка в зависимости от типа значения  */
/* таблица с -имя - дата - числовое значение - действия: удалить / реадктировать -(можно иконкой) */

interface DataType {
  key: React.Key,
  name: string,
  number: number,
  date: string
}

const tableData = [{
  key: '1',
  name: 'John Brown',
  number: 32,
  date: 'New York No. 1 Lake Park',
},
{
  key: '2',
  name: 'Jim Green',
  number: 42,
  date: 'London No. 1 Lake Park',
},
{
  key: '3',
  name: 'Joe Black',
  number: 32,
  date: 'Sydney No. 1 Lake Park',
},
{
  key: '4',
  name: 'Disabled User',
  number: 99,
  date: 'Sydney No. 1 Lake Park',
},
];

const tableColumns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
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


const TableComp = ({ data=tableData, columns=tableColumns }: { data?: DataType[], columns?: TableColumnsType<DataType> }) => {
  return (
    <Table<DataType> dataSource={data} columns={columns} />
  )
}

export default TableComp;