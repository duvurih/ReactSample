import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QueryForm extends Component {
  render() {
    return (
      <div>
        <h3 className="sub-heading">Enter your location:</h3>
        <form onSubmit={this.props.getWeather}>
            <input name="city" placeholder="Enter City Name"></input>
            <input name="country" placeholder="Enter Country Name"></input>
            <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default QueryForm;

QueryForm.propTypes  = {
  getWeather: PropTypes.func,
};