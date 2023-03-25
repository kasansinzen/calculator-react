import React from 'react';
import './App.scss';
import ButtonCalucaltor from './components/ButtonCalculate';
import InputNumber from './components/InputNumber';
import TotalResult from './components/TotalResult';
import AppContext, { AppContextProvider } from './stores/app.context';

const AppService: React.FC = () => {
  const { numb1, numb2, setNumb1, setNumb2 } = React.useContext(AppContext);

  return (
    <React.Fragment>
      <InputNumber handleNumber={setNumb1} value={numb1} />
      <InputNumber handleNumber={setNumb2} value={numb2} />
      <ButtonCalucaltor />
      <TotalResult />
    </React.Fragment>
  )
}

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppService />
    </AppContextProvider>
  )
}

export default App;
