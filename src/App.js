import React, { Component } from 'react';
import { Container } from 'reactbulma';
import styled from 'styled-components';
import Home from './Home';
import ZipInput from './ZipInput';
import Forecast from './Forecast';

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Input = styled(ZipInput)``;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }

  // Set state input value

  handleSubmit(e, input) {
    e.preventDefault();

    this.setState({
      forecast: true,
      zip: input
    });
  }

  render() {
    return (
      <AppContainer>
        <Home />
        <Input onSubmit={this.handleSubmit} />
        {this.state.forecast && <Forecast zip={this.state.zip} />}
      </AppContainer>
    );
  }
}

export default App;
