import TableComp from "./components/Table"
import FormComp from "./components/Form"
import { Button } from "antd"

function App() {

  return (
    <>
    {/* {кнопка добавить => модалка с дабавлением полей таблицы + валидация } */}
    {/* { при работе с рактированием - модалка с заполненными полями для измения } */}
    <Button  htmlType="button" onClick={()=> console.log('add')}>Add new record</Button>
    <TableComp/>

    <FormComp/>
    </>
  )
}

export default App
