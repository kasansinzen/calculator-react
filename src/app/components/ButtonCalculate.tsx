import React from 'react';
import AppContext from '../stores/app.context';

const ButtonCalucaltor: React.FC = () => {
  const {numb1, numb2, setSum, setNumb1, setNumb2} = React.useContext(AppContext);

  const handlePlus = () => {
    setSum(numb1 + numb2);
  }
  const handleMinus = () => {
    setSum(numb1 - numb2);
  }
  const handleMultiply = () => {
    setSum(numb1 * numb2);
  }
  const handleDeiice = () => {
    setSum(numb1 / numb2);
  }
  const handleReset = () => {
    setNumb1(0);
    setNumb2(0);
    setSum(0);
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