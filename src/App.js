import React, { Component } from 'react';
import { Container } from 'reactbulma';
import AppRouter from './Router';
import styled from 'styled-components';

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        {/* <div className="home hero is-primary is-fullheight">
          <div className="hero-body"> */}
        <AppRouter /> {/* </div>
        </div> */}
      </AppContainer>
    );
  }
}

export default App;
