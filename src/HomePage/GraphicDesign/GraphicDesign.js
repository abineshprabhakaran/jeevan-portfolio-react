import React, { Component } from 'react';
import graphicicon from '../../images/graphic-icon.svg';
import graphic from '../../images/graphic.png';
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
                                        <div>
                                            <img src={graphicicon} />
                                        </div>
                                        <div className="pt-4">
                                            <h2 className="mb-0 lightBlackColor boldFont-Play lsp-1">Graphic Design</h2>
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
                                <div className="col-lg-6">
                                    <img src={graphic} className="w-100 graphicMargin" />
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