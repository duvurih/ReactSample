import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Locations extends Component {
  fetchWeather(location){
    const [city, country] = location.split(',');
    this.props.getWeatherData(city, country);
  }
  render() {
    return (
      <div>
        <h3 className="sub-heading">Location Information</h3>
        <ul id="nav" className="list">
            {this.props.locationInfo.map((city, i) => <li key={i} onClick={() =>this.fetchWeather(city)}>{city}</li>)}
        </ul>
      </div>
    );
  }
}

export default Locations;

Locations.propTypes  = {
    locationInfo: PropTypes.array,
    getWeatherData: PropTypes.func
};