import React from 'react';

interface IProps {
  value: number;
  handleNumber: (data: number) => void;
}
const InputNumber: React.FC<IProps> = (props) => {
  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data: number = Number(event.target.value);
    props.handleNumber(data);
  }

  return (
    <div>
      <input type="number" value={props.value || ''} onChange={handleChangeNumber} />
    </div>
  )
}

export default InputNumber;