import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Weather extends Component {
  render() {
    var {city, country, temperature, humidity, description, error} = this.props;
    return (
      <div>
        <h3 className="sub-heading">Weather Information</h3>
        {city && country && <p>Location: {city}, {country}</p>}
        {temperature && <p>Temperature: {temperature}</p>}
        {humidity && <p>Humidity: {humidity}</p>}
        {description && <p>Conditions: {description}</p>}
        {error && <p>Conditions: {error}</p>}
      </div>
    );
  }
}

export default Weather;

Weather.propTypes  = {
  temperature: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string,
  humidity: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string
};