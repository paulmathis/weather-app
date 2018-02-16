import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Title } from 'reactbulma';
import Day from './Day';
import AnimationForecast from './AnimationForecast';

const key = 'a08df5773a66dd650a0e2724e8e6f468';

const Columns = styled.div`
  @media (max-width: 601px) {
    margin-top: 20px;
  }
`;

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      allWeather: [],
      // Zip is to check if it has changed
      zip: this.props.zip,
      animate: false
    };
    this.apiCall = this.apiCall.bind(this);
  }

  // Get weather data for zip in route params
  apiCall() {
    const location = this.props.zip;
    this.props.loadingFunc(true);
    console.log('api call');
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast/daily`, {
        params: {
          zip: location,
          appid: key
        }
      })
      .then(({ data }) => {
        this.setState({ city: data.city.name, allWeather: data.list });
        this.props.loadingFunc(false);
        // Fade in
        this.setState({ animate: true });
      })
      .catch(err => {
        console.log(err);
        this.props.loadingFunc(false);
      });
  }

  // On mount make api request
  componentDidMount() {
    this.apiCall();
  }

  // Remake api request on update from ZipInput
  componentDidUpdate() {
    // Only make a new call if the zip has changed
    if (this.state.zip !== this.props.zip) {
      // Fade out before new api call
      this.setState({ animate: false });
      this.apiCall();

      // Set the zip state to the current param
      this.setState({ zip: this.props.zip });
    }
  }

  render() {
    // Render individual day components
    const days = this.state.allWeather.map(day => {
      // console.log(day);
      return <Day key={day.dt} weather={day} />;
    });
    return (
      <AnimationForecast animate={this.state.animate}>
        <Title>{this.state.city}</Title>
        <Columns className="columns is-multiline is-mobile is-centered">
          {/* {this.state.city} */}
          {days}
        </Columns>
      </AnimationForecast>
    );
  }
}

export default Forecast;
