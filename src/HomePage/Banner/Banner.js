import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Banner extends Component {
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
            'transform': 'translate(0%,0%) perspective(1500px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
          });
          window.requestAnimationFrame(animate);
        }
    
        $(window).on('mousemove click', function (e) {
          var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
          var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
          lFollowX = (8 * lMouseX) / 100; 
          lFollowY = (8 * lMouseY) / 100;
        });
    
        animate();
      }
  render() {
    return (
    <div>
        <div className="firstSection position-relative d-flex justify-content-between align-items-center">
            <div className="w-50" id="wrapper">
                <div className="banner">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 className="semiBoldFont">Think More</h1>
                        </div>

                        <div className="role pt-3">
                            <div className="block"></div>
                            <p>Design Less</p>
                        </div>
                        <div className="lightGreyColor role">
                            <p className="aboutContent">
                                Hi, I'm Jeevan Raj UI / UX Designer, with a demonstrated history of working
                                experience in the Information Technology and Services Industry. Skilled in Web Design,
                                Mobile UI Design, Motion Graphics, Graphic Design and Photography.
                            </p>
                        </div>
                        <div className="pt-4 viewButtonAnimation">
                            <div  className="btn arrowButton" htmlFor="animation3">
                            <Button className="nav-link px-2 py-1 text-uppercase position-relative viewProfileButton">
                               <Link to="/about" className="link">View Profile </Link>
                               </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}


export default Banner;
