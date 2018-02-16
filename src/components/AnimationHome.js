import styled, { keyframes } from 'styled-components';

const AnimationHome = styled.div`
  /* position: absolute; */
  width: 100%;
  h1 {
    transform: translateY(40vh);
    ${props => props.animate && `animation: ${fadeAndMove} 2s ease-out forwards`};
    /* ${props => props.animate && `animation: ${move} 2s ease-out forwards`}; */
  }

  form {
    transform: translateY(40vh);
    ${props => props.animate && `animation: ${move} 2s ease-out forwards`};
  }
`;

const fadeAndMove = keyframes`
0% {
  opacity: 1;
  transform: translateY(40vh);
}
35% {
  opacity: 0;
}
60% {
  opacity: 0;
  transform: translateY(20vh);
  }
100% {
  transform: translateY(0);
  opacity: 0;
}
`;

const move = keyframes`
from {transform: translateY(40vh);}
to {transform: translateY(-54px);}
`;

export default AnimationHome;
