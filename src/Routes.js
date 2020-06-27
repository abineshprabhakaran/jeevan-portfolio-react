import React, { Component } from 'react';
import {Route , BrowserRouter} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Admin from './Admin/Admin';
import Dashboard from './Admin/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
       <Route path="/" component={HomePage} exact />
       <Route path="/about" component={About}  />
       <Route path="/admin" component={Admin}  />
       <Route path="/dashboard" component={Dashboard}  />
       </BrowserRouter>
      </div>
    );
  }
}


export default App;
