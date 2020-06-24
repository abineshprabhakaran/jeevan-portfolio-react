import React, { Component } from 'react';
import Header from './Header/Header'
import Banner from './Banner/Banner';
import { Container } from 'reactstrap';
import WebsiteDevelopment from './WesbiteDevelopment/WebsiteDevelopment';
import MobileDesign from './MobileDesign/MobileDesign';
import GraphicDesign from './GraphicDesign/GraphicDesign';
import $ from 'jquery';

class HomePage extends Component {
  componentDidMount() {
    var $wrap = $('#wrapper'),
        lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 10; 

    function animate() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        $wrap.css({
            'transform': 'translate(0,0) perspective(50px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
        });
        window.requestAnimationFrame(animate);
    }

    $(window).on('mousemove click', function (e) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (5 * lMouseX) / 100;
        lFollowY = (5 * lMouseY) / 100;
    });

    animate();
}
  render() {
    return (
    <div>
      <div id="wrapper">
      <Container fluid={true}>
        <Header />
        <Banner />
        <WebsiteDevelopment />
        <MobileDesign />
        <GraphicDesign />
        </Container>
        </div>
    </div>
    );
  }
}


export default HomePage;
