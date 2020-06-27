import React, { Component } from 'react';
import websiteicon from '../../images/website-icon.svg';
import laptop from '../../images/laptop.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

class WebsiteDevelopment extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
        });
    }

    render() {
        return (
            <div>
                <div className="sectionTop">

                    <div className="px-4">
                        <div className="websiteSection commonSection">
                            <div className="row py-4 px-4">
                                <div className="col-lg-6">
                                    <div>
                                        <div data-aos="fade-up" data-aos-duration="500">
                                            <img src={websiteicon} alt="Website Icon" />
                                        </div>
                                        <div className="pt-4">
                                            <h2 className="mb-0 lightBlackColor boldFont-Play lsp-1" data-aos="fade-up" data-aos-duration="1000">Website Design</h2>
                                            <p className="lightGreyColor py-4 lsp-05" data-aos="fade-up" data-aos-duration="1500">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                             </p>
                                            <div data-aos="fade-up" data-aos-duration="2000">
                                                <a href="#" className="lightGreyColor text-decoration-none">
                                                    <span className="position-relative viewMenu mediumFont">View Projects</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div data-aos="fade-right" data-aos-duration="1000">
                                        <img src={laptop} className="w-100 laptopMargin" alt="Website Development" />
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


export default WebsiteDevelopment;
