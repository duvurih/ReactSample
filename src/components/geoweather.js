import React, { Component } from 'react';
import './../App.css';
import Titles from './titles/Titles';
import QueryForm from './query-form/QueryForm';
import Weather from './weather/weather';
import Map from './maps/maps';
import Locations from './locations/locations';
const API_KEY = '5c997ea849c76978af17fcb26ad2e3ca';
class GeoWeather extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    lat: undefined,
    lng: undefined,
    cities: [],
    error: undefined
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    await this.getWeatherData(city, country);
  }

  getWeatherData = async (city, country) =>{
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      const geo_api_call = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${data.name}&components=country:${data.sys.country}&key=AIzaSyA1vWp8aa0ohma7Zev45V7T2y5842aOh0I&callback`);
      const geo_data = await geo_api_call.json();
      var newArray = this.state.cities.slice();
      if(this.state.cities.indexOf(`${data.name}, ${data.sys.country}`) === -1){
        newArray.push(`${data.name}, ${data.sys.country}`);
      }
      // destructuring
      const {main:{temp, humidity}, name, sys:{country}, weather: [{description}]} = data;
      const {results: [{geometry: {location: {lat, lng}}}]} = geo_data;
      this.setState({
        temperature: temp,
        city: name,
        country: country,
        humidity: humidity,
        description: description,
        lat: lat,
        lng: lng,
        cities: newArray,
        error:""
      });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:"Please enter values"
      });
    }       
  }

  render() {
    return (
        <div style={{backgroundImage: `url(require("./../content/images/weatherimage.jpg"))`}}>
            <div className="row">
                <div className="col-sm-12">
                <Titles />
                </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <QueryForm getWeather={this.getWeather}/>
              </div>
              <div className="col-sm-4">
                <Locations locationInfo={this.state.cities} getWeatherData={this.getWeatherData} />
              </div>
              <div className="col-sm-4">
                <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <Map 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  lat = {this.state.lat}
                  lng = {this.state.lng}
                  error={this.state.error}                
                />
              </div>
            </div>
        </div>
    );
  }
}

export default GeoWeather;
