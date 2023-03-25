import React from 'react';

interface IAppContext {
  numb1: number;
  setNumb1: (data: number) => void;
  numb2: number;
  setNumb2: (data: number) => void;
  sum: number;
  setSum: (data: number) => void;
}
const AppContext = React.createContext<IAppContext>({
  numb1: 0,
  setNumb1: (data: number) => 0,
  numb2: 0,
  setNumb2: (data: number) => 0,
  sum: 0,
  setSum: (data: number) => 0,
});

export const AppContextProvider: React.FC<any> = (props) => {
  const [numb1, setNumb1] = React.useState<number>(0);
  const [numb2, setNumb2] = React.useState<number>(0);
  const [sum, setSum] = React.useState<number>(0);

  const setNumbHandle = (value: number) => {
    return value || 0;
  }
  const setNumb1Handle = (value: number) => {
    setNumb1(setNumbHandle(value));
  }
  const setNumb2Handle = (value: number) => {
    setNumb2(setNumbHandle(value));
  }

  const context: IAppContext = {
    numb1: numb1,
    setNumb1: setNumb1Handle,
    numb2: numb2,
    setNumb2: setNumb2Handle,
    sum: sum,
    setSum: setSum,
  }

  return <AppContext.Provider value={context}>
    {props.children}
  </AppContext.Provider>
}

export default AppContext;