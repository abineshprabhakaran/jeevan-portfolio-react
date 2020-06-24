import React, { Component } from 'react';
import jeevan from '../../images/jeevan.png';

class Banner extends Component {
  render() {
    return (
    <div>
        <div className="firstSection position-relative d-flex justify-content-between align-items-center">
            <div className="w-50 align-self-end">
                <img src={jeevan} className="w-75 sliderImage" />
            </div>
            <div className="w-50">
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
                            <a href="#" className="btn arrowButton" for="animation3">
                                <svg width="180" height="50">
                                    <defs>
                                        <linearGradient id="grad1">
                                            <stop offset="0%" stop-color="#222222" />
                                            <stop offset="100%" stop-color="#222222" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="5" y="5" rx="20" fill="none" stroke="url(#grad1)" width="161" height="40">
                                    </rect>
                                </svg>
                                <div className="d-flex viewProfileDiv">
                                    <div className="viewProfile">View Profile</div>
                                </div>
                            </a>
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
