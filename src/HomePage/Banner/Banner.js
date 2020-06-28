import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
    <div>
        <div className="firstSection position-relative d-flex justify-content-between align-items-center">
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
                            <div  className="btn arrowButton" htmlFor="animation3">
                            <Button className="nav-link px-2 py-1 text-uppercase position-relative viewProfileButton">
                               <Link to="/about" className="navLink">View Profile </Link>
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
