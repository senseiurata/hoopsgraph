import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (numbers) => {
  return (numbers.reduce((prev, curr) => prev + curr) / numbers.length).toFixed(2);
};

export default (props) => {
  return (
    <div>
      <Sparklines height={ 120 } width={ 180 } data={ props.data } min={ props.min } max={ props.max }>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type="avg" />
        <div>{ props.type }</div>
        <div>{ average(props.data) }/game</div>
      </Sparklines>
    </div>
  );
};
