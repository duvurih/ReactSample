import React, { Component } from 'react';
import './../App.css';
import {Switch, Route } from 'react-router-dom';
import GeoWeather from './../components/geoweather';
import Observations from './../observations/observations';

class Layout extends Component {

  render() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <Switch>
                    <Route exact path='/' component={GeoWeather} />
                    <Route path='/weather' component={GeoWeather} />
                    <Route path='/observation' component={Observations} />
                </Switch>
            </div>
        </div>

    );
  }
}

export default Layout;
