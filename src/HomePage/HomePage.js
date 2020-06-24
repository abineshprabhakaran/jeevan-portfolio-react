import React, { Component } from 'react';
import Header from './Header/Header'
import Banner from './Banner/Banner';
import { Container } from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
    <div>
      <Container fluid={true}>
        <Header />
        <Banner />
        </Container>
    </div>
    );
  }
}


export default HomePage;
