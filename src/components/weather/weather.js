import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Weather extends Component {
  render() {
    return (
      <div>
        <h3 className="sub-heading">Weather Information</h3>
        {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.error && <p>Conditions: {this.props.error}</p>}
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