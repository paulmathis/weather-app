import React from 'react';
import format from 'date-fns/format';
import { Box, Icon } from 'reactbulma';
import styled from 'styled-components';

// Convert kelvin to farenheight
function kToF(kelvin) {
  return Math.round(kelvin * (9 / 5) - 459.67);
}

const WeatherBox = styled.div`
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    font-size: 1.5rem;
    height: 12rem;
    background-color: #caebf2;
  }
  i {
    font-size: 2em;
  }
`;

const Day = props => {
  const { dt, weather, temp } = props.weather;
  const date = new Date(dt * 1000); // Convert from unix to datetime
  const day = format(date, 'ddd'); // Extract day of week

  return (
    <WeatherBox className="column is-narrow">
      <Box>
        <span>{day}</span>
        <Icon>
          <i className={`wi wi-owm-${weather[0].id}`} />
        </Icon>
        <div>
          <span className="has-text-info">{kToF(temp.min)}&deg;</span>
          &nbsp;/&nbsp;
          <span className="has-text-danger">{kToF(temp.max)}&deg;</span>
        </div>
      </Box>
    </WeatherBox>
  );
};

export default Day;
