import React from 'react';

interface IProps {
  sum: number;
}
const TotalResult: React.FC<IProps> = (props) => {
  return (
    <h4>Result: {props.sum.toLocaleString()}</h4>
  )
}

export default TotalResult;