import React, { Component } from 'react';
import Input from './Input';
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home has-text-centered">
        <h1 className="title">Simple Weather</h1>
        <Input history={this.props.history} />
      </div>
    );
  }
}

export default Home;
