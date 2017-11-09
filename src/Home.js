import React, {Component} from 'react';
import {Title} from 'reactbulma'
import ZipInput from './ZipInput';
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home has-text-centered">
        <Title is='1'>Simple Weather</Title>
      </div>
    );
  }
}

export default Home;
