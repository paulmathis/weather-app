import React, { Component } from 'react';
import { Input, Button, Control } from 'reactbulma';
import styled from 'styled-components';
import history from './history';

const Form = styled.form`
  background-color: red;
  .control {
    display: flex;
    justify-content: center;
  }
  input {
    max-width: 500px;
  }
`;

class ZipInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    console.log(this.props.history.pathname === '/');
    console.log(history.location.pathname === '/');
  }
  // Set state input value
  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  // Redirect to /:input on submits
  handleSubmit(e) {
    e.preventDefault();
    history.push(`/${this.state.input}`);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} action="" className=" zip-input-form field">
        <Control>
          <Input
            medium
            onChange={this.handleInput}
            type="text"
            placeholder="Enter a zip code"
            value={this.state.input}
          />
        </Control>
        <Control>
          <Button type="submit">Submit</Button>
        </Control>
      </Form>
    );
  }
}

export default ZipInput;
