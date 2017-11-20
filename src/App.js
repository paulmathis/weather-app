import React, { Component } from 'react';
import { Container } from 'reactbulma';
import styled from 'styled-components';
import { Title } from 'reactbulma';
import ZipInput from './components/ZipInput';
import Forecast from './components/Forecast';
import AnimationHome from './components/AnimationHome';
import './css/font-awesome.css';
import './css/base.css';

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: false,
      loading: false,
      animate: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.animation = this.animation.bind(this);
  }

  // Set state input value
  handleSubmit(e, input) {
    e.preventDefault();

    // On first submit, trigger animation
    if (!this.state.forecast) {
      this.animation();
    }

    this.setState({
      zip: input
    });
  }

  // Trigger animation, wait 2 seconds and then render forecast
  animation() {
    this.setState(
      {
        animate: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            forecast: true
          });
        }, 2000);
      }
    );
  }

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    return (
      <AppContainer>
        <AnimationHome animate={this.state.animate}>
          <Title is="1">Simple Weather</Title>
          <ZipInput loading={this.state.loading} onSubmit={this.handleSubmit} />
        </AnimationHome>

        {this.state.forecast && <Forecast loadingFunc={this.setLoading} zip={this.state.zip} />}
      </AppContainer>
    );
  }
}

export default App;
