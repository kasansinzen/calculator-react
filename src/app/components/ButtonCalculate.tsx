import React from 'react';

interface IProps {
  numb1: number;
  numb2: number;
  setNumb1(data: number): void
  setNumb2(data: number): void
  setSum(data: number): void;
}
const ButtonCalucaltor: React.FC<IProps> = (props) => {
  const handlePlus = () => {
    props.setSum(props.numb1 + props.numb2);
  }
  const handleMinus = () => {
    props.setSum(props.numb1 - props.numb2);
  }
  const handleMultiply = () => {
    props.setSum(props.numb1 * props.numb2);
  }
  const handleDeiice = () => {
    props.setSum(props.numb1 / props.numb2);
  }
  const handleReset = () => {
    props.setNumb1(0);
    props.setNumb2(0);
    props.setSum(0);
  }
  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDeiice}>/</button>
      <span> | </span>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ButtonCalucaltor;