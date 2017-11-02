import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Day from "./Day";

const key = "a08df5773a66dd650a0e2724e8e6f468";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      allWeather: []
    };
  }
  componentDidMount() {
    const location = this.props.match.params.location;

    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast/daily`, {
        params: {
          zip: location,
          appid: key
        }
      })
      .then(({ data }) => {
        console.log(data.list);
        this.setState({
          city: data.city.name,
          allWeather: data.list
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const days = this.state.allWeather.map(day => {
      return <Day weather={day} />;
    });
    return (
      <div>
        {this.state.city}
        {days}
      </div>
    );
  }
}

Forecast.propTypes = {};

export default Forecast;
