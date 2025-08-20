import InputNumberComp from "./components/UI/InputNumber"
import TableComp from "./components/Table"
import InputComp from "./components/UI/Input"

function App() {

  return (
    <>
    {/* {кнопка добавить => модалка с дабавлением полей таблицы + валидация } */}
    {/* { при работе с рактированием - модалка с заполненными полями для измения } */}
    <TableComp/>
    <InputNumberComp/>
    <InputComp/>
    </>
  )
}

export default App
