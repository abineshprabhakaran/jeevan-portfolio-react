import React, { Component } from 'react';
import websiteicon from '../../images/website-icon.svg';
import laptop from '../../images/laptop.png';
import $ from 'jquery';

class WebsiteDevelopment extends Component {
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
                'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
            });
            window.requestAnimationFrame(animate);
        }

        $(window).on('mousemove click', function (e) {
            var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
            var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
            lFollowX = (12 * lMouseX) / 100;
            lFollowY = (10 * lMouseY) / 100;
        });

        animate();
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
                                        <div>
                                            <img src={websiteicon} alt="Website Icon" />
                                        </div>
                                        <div className="pt-4">
                                            <h2 className="mb-0 lightBlackColor boldFont-Play lsp-1">Website Design</h2>
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
                                    <div id="wrapper">
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
