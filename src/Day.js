import React from 'react';
import format from 'date-fns/format';
import './css/Day.css';

// Convert kelvin to farenheight
function kToF(kelvin) {
  return Math.round(kelvin * (9 / 5) - 459.67);
}

const Day = props => {
  console.log(props);
  const { dt, weather, temp } = props.weather;
  const date = new Date(dt * 1000); // Convert from unix to datetime
  const day = format(date, 'ddd'); // Extract day of week

  return (
    <div className="day column">
      <div className="box">
        <span>{day}</span>
        <span>
          <i className={`wi wi-owm-${weather[0].id}`} />
        </span>
        <div className="temps">
          <span className="temp has-text-info">{kToF(temp.min)}&deg;</span>
          &nbsp;/&nbsp;
          <span className="temp has-text-danger"> {kToF(temp.max)}&deg;</span>
        </div>
      </div>
    </div>
  );
};

export default Day;
