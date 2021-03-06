import React, { Component } from 'react';
import mobileicon from '../../images/mobile-icon.svg';
import mobile from '../../images/mobile.png';
import { Link } from 'react-router-dom';

class MobileDesign extends Component {
    render() {
        return (
            <div>
                <div className="sectionTop">
                    <div className="px-4">
                        <div className="mobileSection commonSection">
                            <div className="row py-4 px-4">
                                <div className="col-lg-6">
                                    <div data-aos="fade-left"  data-aos-duration="1000">
                                    <img src={mobile} className="w-100 mobileMargin" alt="Mobile Design" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <div data-aos="fade-up"  data-aos-duration="500">
                                            <img src={mobileicon} alt="Mobile Icon" />
                                        </div>
                                        <div className="pt-4">
                                            <h2 className="mb-0 lightBlackColor boldFont-Play lsp-1" data-aos="fade-up"  data-aos-duration="1000">Mobile Design</h2>
                                            <p className="lightGreyColor py-4 lsp-05" data-aos="fade-up"  data-aos-duration="1500">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                             </p>
                                            <div data-aos="fade-up"  data-aos-duration="2000">
                                                <Link to="/projects" className="lightGreyColor text-decoration-none">
                                                    <span className="position-relative another-link mediumFont">View Projects</span>
                                                </Link>
                                            </div>
                                        </div>
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


export default MobileDesign;
