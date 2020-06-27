import React, { Component } from 'react';
import {Route , BrowserRouter} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       <Route path="/" component={HomePage} exact />
       <Route path="/about" component={About} exact />
       </BrowserRouter>
      </div>
    );
  }
}


export default App;
