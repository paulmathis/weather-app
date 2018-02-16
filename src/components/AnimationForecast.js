// Fade in and out for the forecasts

import styled, { keyframes } from 'styled-components';

const AnimationForecast = styled.div`
  margin-top: 100px;
  @media (max-width: 1216px) {
    margin-top: 60px;
  }
  @media (max-width: 601px) {
    margin-top: 0px;
  }
  ${props => props.animate && `animation: ${fadeIn} .5s forwards`} ${props =>
      !props.animate && `animation: ${fadeOut} .5s forwards`};
`;

const fadeOut = keyframes`
from {opacity: 1}
to {opacity: 0}
`;

const fadeIn = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

export default AnimationForecast;
