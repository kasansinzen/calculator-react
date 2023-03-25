import React from 'react';
import AppContext from '../stores/app.context';

const TotalResult: React.FC = () => {
  const { sum } = React.useContext(AppContext);
  return (
    <h4>Result: {sum.toLocaleString()}</h4>
  )
}

export default TotalResult;