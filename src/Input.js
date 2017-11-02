import React, { Component } from 'react';
import './css/Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      input: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // Set state input value
  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  // Redirect to /:input on submits
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.input);
    this.props.history.push(`/${this.state.input}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" className=" input-form field">
        <div className="control">
          <input
            onChange={this.handleInput}
            type="text"
            className="input is-medium"
            placeholder="Enter a zip code"
            value={this.state.input}
          />
        </div>
        <div className="control">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Input;
