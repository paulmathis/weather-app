import React, { Component } from 'react';
import axios from 'axios';
import Day from './Day';

const key = 'a08df5773a66dd650a0e2724e8e6f468';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      allWeather: [],
      // Zip is to check if it has changed
      zip: this.props.zip
    };
    this.apiCall = this.apiCall.bind(this);
  }

  // Get weather data for zip in route params
  apiCall() {
    const location = this.props.zip;
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
      })
      .catch(err => {
        console.log(err);
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
      <div className="columns">
        {/* {this.state.city} */}
        {days}
      </div>
    );
  }
}

export default Forecast;
