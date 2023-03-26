import React from 'react';
import './App.scss';
import ButtonCalucaltor from './components/ButtonCalculate';
import InputNumber from './components/InputNumber';
import TotalResult from './components/TotalResult';

const App: React.FC = () => {
  const [numb1, setNumb1] = React.useState<number>(0);
  const [numb2, setNumb2] = React.useState<number>(0);
  const [sum, setSum] = React.useState<number>(0);

  return (
    <React.Fragment>
      <InputNumber handleNumber={setNumb1} value={numb1} />
      <InputNumber handleNumber={setNumb2} value={numb2} />
      <ButtonCalucaltor
        numb1={numb1}
        numb2={numb2}
        setNumb1={setNumb1}
        setNumb2={setNumb2}
        setSum={setSum}
      />
      <TotalResult sum={sum} />
    </React.Fragment>
  )
}


export default App;
