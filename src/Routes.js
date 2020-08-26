import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './About/Contact';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
