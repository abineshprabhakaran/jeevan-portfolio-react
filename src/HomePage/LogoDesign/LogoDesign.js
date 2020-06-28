import React, { Component } from 'react';
import mobileicon from '../../images/logo-icon.svg';
import mobile from '../../images/logodesign.png';

class LogoDesign extends Component {
    render() {
        return (
            <div>
                <div className="sectionTop">
                    <div className="px-4">
                        <div className="logoSection commonSection">
                            <div className="row py-4 px-4">
                                <div className="col-lg-6">
                                    <div data-aos="fade-left"  data-aos-duration="1000">
                                    <img src={mobile} className="w-100 mobileMargin" alt="Logo Design" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <div data-aos="fade-up"  data-aos-duration="500">
                                            <img src={mobileicon} alt="Logo Icon" />
                                        </div>
                                        <div className="pt-4">
                                            <h2 className="mb-0 lightBlackColor boldFont-Play lsp-1" data-aos="fade-up"  data-aos-duration="1000">Logo Design</h2>
                                            <p className="lightGreyColor py-4 lsp-05" data-aos="fade-up"  data-aos-duration="1500">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                             </p>
                                            <div data-aos="fade-up"  data-aos-duration="2000">
                                                <a href="#" className="lightGreyColor text-decoration-none">
                                                    <span className="position-relative viewMenu mediumFont">View Projects</span>
                                                </a>
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


export default LogoDesign;
