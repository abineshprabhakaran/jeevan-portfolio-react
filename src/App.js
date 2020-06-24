import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import CustomCursor from './CustomCursor/CustomCursor';

class App extends Component {
  render() {
    return (
    <div>
      <CustomCursor />
      <HomePage />
    </div>
    );
  }
}


export default App;
