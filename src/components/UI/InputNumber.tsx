import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
};

const InputNumberComp = () => {
    return (
        <InputNumber
            min={1}
            max={100}
            placeholder='Enter number'
            style={{width: '20%'}}
            onChange={onChange}
        />);
}

export default InputNumberComp;