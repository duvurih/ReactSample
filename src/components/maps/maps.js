import React, { Component } from 'react';
import './maps.css';
import PropTypes from 'prop-types';

class Map extends Component {

    componentDidMount(){
        this.loadMap();
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.city !== this.props.city){
            return true;
        }else{
            return false;
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.city !== this.props.city){
            this.renderMarker();
        }
    }

    loadMap = () =>{
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA1vWp8aa0ohma7Zev45V7T2y5842aOh0I&callback=renderMap");
        window.renderMap = this.renderMap;
    }

    renderMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'),{
            center: {lat: -34.397, lng: 150.644},
            zoom: 4
        });
        window.map = map;
    }

    renderMarker(){
        if(this.props.lat && this.props.lng){
            var contentString = `<p> <img src=${require('./../../content/images/temperature.jpg')} alt="Temperature" className="image-style" width="30px" height="30px">  ${this.props.temperature} </img></p> ` +
            `<p> <img src=${require("./../../content/images/humidity.png")} alt="Temperature" className="image-style"  width="30px" height="30px"> ${this.props.humidity} </img></p> ` +
            `<p> <img src=${require("./../../content/images/storm.jpg")} alt="Conditions" className="image-style"  width="30px" height="30px"> ${this.props.description}  </img></p> `;
            var information = new window.google.maps.InfoWindow({
                content: contentString
            });
            var imageUrl = '';
            if(this.props.description.toString().includes("rain")){
                imageUrl = require("./../../content/images/rainy1.png");
             }else if(this.props.description.toString().includes("cloud")){
                imageUrl = require("./../../content/images/cloudy1.png");
             }else if(this.props.description.toString().includes("sky")){
                imageUrl = require("./../../content/images/sunny.jpg");
             }else if(this.props.description.toString().includes("mist")){
                imageUrl = require("./../../content/images/mist.png");
             }else{
                imageUrl = require("./../../content/images/others.jpg");
             }
            const image = {
                url: imageUrl,
                size: new window.google.maps.Size(50,50),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(0, 32),
                scaledSize: new window.google.maps.Size(50, 50)
            };
            var marker = new window.google.maps.Marker({
                position: {lat: this.props.lat, lng: this.props.lng},
                label: this.props.temperature.toString(),
                map: window.map,
                title: this.props.city.toString(),
                icon: image
            });
    
            marker.addListener('click', function(){
                information.close();
                information.setContent(contentString);
                information.open(window.map, marker);
            });
        }        
    }

    render() {
        return (
            <main>
            <div id="map"></div>
            </main>
        );
    }
}
/*
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1vWp8aa0ohma7Zev45V7T2y5842aOh0I&callback=renderMap" async defer></script>
*/

function loadScript(url){
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}

export default Map;

Map.propTypes  = {
    temperature: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    humidity: PropTypes.number,
    description: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    error: PropTypes.string
};