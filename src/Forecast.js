import React, {Component} from 'react';
import axios from 'axios';
import {Container} from 'reactbulma';
import Day from './Day';
import ZipInput from './ZipInput';

const key = 'a08df5773a66dd650a0e2724e8e6f468';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      allWeather: [],
      // Zip is to check if it has changed
      zip: this.props.match.params.location
    };
    this.apiCall = this
      .apiCall
      .bind(this);
  }

  // Get weather data for zip in route params
  apiCall() {
    const location = this.props.match.params.location;
    console.log('api call');
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast/daily`, {
      params: {
        zip: location,
        appid: key
      }
    })
      .then(({data}) => {
        this.setState({city: data.city.name, allWeather: data.list});
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
    console.log("updated")
    // Only make a new call if the zip has changed
    if (this.state.zip !== this.props.match.params.location) {
      this.apiCall();
      // Set the zip state to the current param
      this.setState({zip: this.props.match.params.location});
    }
  }

  render() {
    // Render individual day components
    const days = this
      .state
      .allWeather
      .map(day => {
        // console.log(day);
        return <Day key={day.dt} weather={day}/>;
      });
    return (
      <div className="columns">{days}</div>
    );
  }
}

export default Forecast;
