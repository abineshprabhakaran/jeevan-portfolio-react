import React, { Component } from 'react';
import mobileicon from '../../images/mobile-icon.svg';
import mobile from '../../images/mobile.png';

class MobileDesign extends Component {
    render() {
        return (
            <div>
                <div className="sectionTop">
                    <div className="px-4">
                        <div className="mobileSection commonSection">
                            <div className="row py-4 px-4">
                                <div className="col-lg-6">
                                    <img src={mobile} className="w-100 mobileMargin" alt="Mobile Design" />
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <div>
                                            <img src={mobileicon} alt="Mobile Icon" />
                                        </div>
                                        <div className="pt-4">
                                            <h2 className="mb-0 lightBlackColor boldFont-Play lsp-1">Mobile Design</h2>
                                            <p className="lightGreyColor py-4 lsp-05">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                             </p>
                                            <div>
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


export default MobileDesign;
