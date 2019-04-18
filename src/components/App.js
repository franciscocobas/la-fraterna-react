import React, { Component } from 'react';

import Navigation from './Navigation'
import HeaderFraterna from './HeaderFraterna'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <HeaderFraterna />
      </div>
    );
  }
}

export default App;
