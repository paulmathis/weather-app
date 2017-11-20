import React, { Component } from 'react';
import { Input, Button, Control } from 'reactbulma';
import styled from 'styled-components';

const Form = styled.form`
  .control {
    display: flex;
    justify-content: center;
  }
  input {
    max-width: 500px;
  }

  button {
    font-size: 30px;
  }
`;

class ZipInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: false,
      input: ''
    };
    // this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // Only allow up to 5 numbers
    const regexInput = /^\d{0,5}$|^\d{5}-\d{4}$/;
    if (e.target.value.match(regexInput))
      this.setState({ input: e.target.value }, () => {
        // Only able to submit after all 5 number are input
        const regexSubmit = /^\d{5}$|^\d{5}-\d{4}$/;
        if (this.state.input.match(regexSubmit)) this.setState({ valid: true });
        else this.setState({ valid: false });
      });
  }

  handleSubmit(e) {
    this.props.onSubmit(e, this.state.input);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} action="" className={`${this.props.className} field}`}>
        <Control>
          <Input
            medium
            onChange={this.handleChange}
            type="text"
            placeholder="Enter a 5 digit zip code"
            value={this.state.input}
          />

          {/* Disable submit until 5 digits */}
          <Button
            disabled={!this.state.valid}
            medium
            info
            type="submit"
            className={this.props.loading ? 'is-loading' : ''}
          >
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </Button>
        </Control>
      </Form>
    );
  }
}

export default ZipInput;
