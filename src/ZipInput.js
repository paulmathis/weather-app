import React, {Component} from 'react';
import {Input, Button, Control} from 'reactbulma'
import history from './history'

import './css/ZipInput.css';

class ZipInput extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      input: ''
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
    this.handleInput = this
      .handleInput
      .bind(this);
  }

  // Set state input value
  handleInput(e) {
    this.setState({input: e.target.value});
  }

  // Redirect to /:input on submits
  handleSubmit(e) {
    e.preventDefault();
    console.log(this);
    history.push(`/${this.state.input}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" className=" zip-input-form field">
        <Control>
          <Input
            medium
            onChange={this.handleInput}
            type="text"
            placeholder="Enter a zip code"
            value={this.state.input}/>
        </Control>
        <Control>
          <Button type="submit">
            Submit
          </Button>
        </Control>
      </form>
    );
  }
}

export default ZipInput;
