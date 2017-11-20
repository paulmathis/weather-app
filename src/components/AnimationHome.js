import styled, { keyframes } from 'styled-components';

const AnimationHome = styled.div`
  position: absolute;
  width: 100%;
  h1 {
    ${props => props.animate && `animation: ${fade} 1s forwards`};
  }

  ${props => props.animate && `animation: ${move} 2s ease-out forwards`};
`;

const fade = keyframes`
from {opacity: 1}
to {opacity: 0}
`;

const move = keyframes`
from {transform: translateY(0)}
to {transform: translateY(-50vh)}
`;

export default AnimationHome;
