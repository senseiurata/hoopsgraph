import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (numbers) => {
  return (numbers.reduce((prev, curr) => prev + curr) / numbers.length).toFixed(2);
};

export default (props) => {
  return (
    <div className="rc-player-stats-chart">
      <Sparklines height={ 120 } width={ 180 } data={ props.data } min={ props.min } max={ props.max }>
        <SparklinesLine color={ props.color } />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>

      <div>{ average(props.data) }/game</div>
    </div>
  );
};
