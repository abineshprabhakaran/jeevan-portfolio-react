import React, { Component } from 'react';
import graphicicon from '../../images/graphic-icon.svg';
import graphic from '../../images/graphic.png';
import { Link } from 'react-router-dom';
class GraphicDesign extends Component {
    render() {
        return (
            <div>
                <div className="sectionTop">
                    <div className="px-4">
                        <div className="graphicSection commonSection">
                            <div className="row py-4 px-4">
                                <div className="col-lg-6">
                                    <div>
                                        <div  data-aos="fade-up"  data-aos-duration="500">
                                            <img src={graphicicon} alt="Graphic Icon"/>
                                        </div>
                                        <div className="pt-4">
                                            <h2 className="mb-0 lightBlackColor boldFont-Play lsp-1"  data-aos="fade-up"  data-aos-duration="1000">Graphic Design</h2>
                                            <p className="lightGreyColor py-4 lsp-05"  data-aos="fade-up"  data-aos-duration="1500">
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                             </p>
                                            <div  data-aos="fade-up"  data-aos-duration="2000">
                                                <Link to="/projects" className="lightGreyColor text-decoration-none">
                                                    <span className="position-relative another-link mediumFont">View Projects</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div  data-aos="fade-right"  data-aos-duration="1000">
                                    <img src={graphic} className="w-100 graphicMargin" alt="Graphic Image"/>
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


export default GraphicDesign;
