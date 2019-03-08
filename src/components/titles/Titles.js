import React from 'react';
import './Tiles.css';

const Titles = (props) =>(
    <div>
    <h1 className="main-heading">
      <img src={require("./../../content/images/umbrella.jpg")} alt="weather" className="image-style" /> Weather Information
    </h1>
    <p>Find weather conditions based on location...</p>
  </div>    
)

export default Titles;
