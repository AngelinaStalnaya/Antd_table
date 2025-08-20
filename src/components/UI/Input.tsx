import { Input } from 'antd';

interface InputProps {
  placeholder?: string,
}

const InputComp = ({placeholder = 'Enter smth', }: InputProps) => {
  return (
    <Input
      placeholder={placeholder}
      style={{width:'50%'}}
    />)
}

export default InputComp;