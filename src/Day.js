import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";

// Convert kelvin to farenheight
function kToF(kelvin) {
  return Math.round(kelvin * (9 / 5) - 459.67);
}

const Day = props => {
  console.log(props);
  const { dt, weather, temp } = props.weather;
  const date = new Date(dt * 1000); // Convert from unix to datetime
  const day = format(date, "ddd"); // Extract day of week
  return (
    <div>
      {day}
      {weather[0].main}
      {kToF(temp.max)}
      {kToF(temp.min)}
    </div>
  );
};

Day.propTypes = {};

export default Day;
