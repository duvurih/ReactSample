import React, { Component } from 'react';
import './App.css';
import Layout from './layout/layout';
import Header from './layout/topmenu';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <p className="App-header">React Application</p>
              <Header />
              <Layout />            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
