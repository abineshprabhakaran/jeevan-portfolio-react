import React, { Component } from 'react';
import Header from './Header/Header'
import Banner from './Banner/Banner';
import { Container } from 'reactstrap';
import WebsiteDevelopment from './WesbiteDevelopment/WebsiteDevelopment';
import MobileDesign from './MobileDesign/MobileDesign';
import GraphicDesign from './GraphicDesign/GraphicDesign';

class HomePage extends Component {
  render() {
    return (
    <div>
      <Container fluid={true}>
        <Header />
        <Banner />
        <WebsiteDevelopment />
        <MobileDesign />
        <GraphicDesign />
        </Container>
    </div>
    );
  }
}


export default HomePage;
