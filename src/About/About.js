import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import mobile from '../images/mobile-black.svg';
import web from '../images/web-black.svg';
import graphic from '../images/graphic-black.svg';
import logo from '../images/logo-black.svg';
import motion from '../images/motion-black.svg';
import hello from '../images/hello-there.svg';
import jrlogo from '../images/favicon.png';

class About extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
        });
      }
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Header />
                    <div className="d-flex justify-content-center align-items-center logoMarginTop">
                        <div>
                            <Link to="/">
                            <img src={jrlogo} alt="logo" className="logo" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="row mx-0">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1500">
                                <div className="aboutText1 boldFont-Play">
                                    I'm Jeevan Raj.S.S, Visual storyteller of the product. UI/UX Designer.
                            </div>
                            </div>

                        </div>
                        <div>
                            <div className="d-flex justify-content-center" data-aos="fade-in" data-aos-duration="1500">
                                <img src={hello} alt="Hello There Im Jeevan Raj" className="helloThere" />
                            </div>
                        </div>
                        <div className="row mx-0 pt-5 justify-content-end">
                            <div className="col-lg-7">
                                <div>
                                    <div className="pt-4">
                                        <div className="boldFont-Play lsp-05"  data-aos="fade-left" data-aos-duration="1500">
                                            <h2> A Little About Myself </h2>
                                        </div>
                                        <h4 className="mb-0 lh-15 lsp-05"  data-aos="fade-left" data-aos-duration="2000">
                                            <div className="pt-3">
                                                Visual storyteller of the product. A Chess Kid. Experienced User Interface Designer with
                                                a demonstrated history of working in the
                                                information technology and services industry. Skilled in User Interface Design,
                                                User Experience (UX), Graphic Design, Web Design and Photography.
                                       </div>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 py-4 lightBlackBg marginlr--15">
                            <div className="row px-3 align-items-center">
                                <div className="col-lg-6 whiteColor">
                                    <div data-aos="zoom-out" data-aos-duration="2000">
                                        <div className="aboutTitle boldFont-Play">
                                            Design
                                       </div>
                                        <div className="pt-2">
                                            <h4>
                                                <div>is not just what it looks like and feels like. </div>
                                                <div className="pt-2">
                                                    Design is how it works.
                                               </div>
                                            </h4>
                                        </div>
                                        <div className="pt-3 boldFont-Play lsp-05">
                                            <h5>  - Steve Jobs </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 whiteColor">
                                    <div data-aos="zoom-out" data-aos-duration="2000">
                                        <div>
                                            <div className="boldFont-Play lsp-05 pt-3">
                                                <h3> An Extra More </h3>
                                            </div>
                                            <h6 className="mb-0 lh-15 lsp-05">
                                                <div className="pt-3">
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                                    justo duo dolores et ea rebum.
                                            </div>

                                                <div className="pt-3">
                                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                            </div>
                                                <div className="pt-3">
                                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                            </div>

                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="py-5">
                            <div>
                                <div className="displineBg pt-5" >
                                    <div className="boldFont-Play lsp-05 text-center pt-5">
                                        <h2 data-aos="fade-down" data-aos-duration="2000"> Disciplines </h2>
                                    </div>

                                    <div className="text-center" data-aos="fade-up" data-aos-duration="2000">
                                        <h6 className="lh-15 lsp-05"> Throughout years I have been practising many different disciplines and areas of digital experience design. <br /> Here is an overview of my expertise and skills. </h6>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <div className="py-5">
                                        <div className="d-flex">
                                            <div className="aboutServices d-flex justify-content-center webServices" data-aos="fade-right" data-aos-duration="1000">
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <img src={web} alt="Website" />
                                                    </div>
                                                    <div className="text-center mt--15">
                                                        Web Design
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="aboutServices d-flex justify-content-center mobileServices" data-aos="fade-right" data-aos-duration="1500">
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <img src={mobile} alt="Website" />
                                                    </div>
                                                    <div className="text-center mt--15">
                                                        Mobile App Design
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="aboutServices d-flex justify-content-center logoServices" data-aos="fade-right" data-aos-duration="2000">
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <img src={logo} alt="Website" />
                                                    </div>
                                                    <div className="text-center mt--15">
                                                        Logo Design
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="aboutServices d-flex justify-content-center graphicServices" data-aos="fade-right" data-aos-duration="2500">
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <img src={graphic} alt="Website" />
                                                    </div>
                                                    <div className="text-center mt--15">
                                                        Graphic Design
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="aboutServices d-flex justify-content-center motionServices" data-aos="fade-right" data-aos-duration="3000">
                                                <div>
                                                    <div className="d-flex justify-content-center">
                                                        <img src={motion} alt="Website" />
                                                    </div>
                                                    <div className="text-center mt--15">
                                                        Motion Graphics
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row  mt-5 align-items-center">
                                <div className="col-lg-6 whiteColor lightBlackBg py-5 pr-5">
                                    <div data-aos="fade-right" data-aos-duration="2000">
                                        <div>
                                            <div className="boldFont-Play lsp-05 pt-3 d-flex justify-content-between flex-wrap align-items-center">
                                                <div>
                                                    <h3> Hitasoft Technology Solution </h3>
                                                    <h5>Associate UI/UX Designer</h5>
                                                </div>
                                                <div>
                                                    <h4>2018-2019</h4>
                                                </div>
                                            </div>
                                            <h6 className="mb-0 lh-15 lsp-05">
                                                <div className="pt-3">
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                                    justo duo dolores et ea rebum.
                                            </div>

                                                <div className="pt-3">
                                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                            </div>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 whiteColor px-0 mt-5 py-5">
                                    <div>
                                        <h1 className="boldFont-Play blackColor aboutTitle pl-4">Work Experience</h1>
                                    </div>
                                    <div className="blackBg py-4 px-4 workExpMargin">
                                        <div  data-aos="fade-left" data-aos-duration="2500">
                                            <div className="boldFont-Play lsp-05 pt-3 d-flex justify-content-between flex-wrap align-items-center">
                                                <div>
                                                    <h3> Parampriti Web Solution </h3>
                                                    <h5>Associate UI/UX Designer</h5>
                                                </div>
                                                <div>
                                                    <h4>2018-Present</h4>
                                                </div>
                                            </div>
                                            <h6 className="mb-0 lh-15 lsp-05">
                                                <div className="pt-3">
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                                    justo duo dolores et ea rebum.
                                            </div>

                                                <div className="pt-3">
                                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                            </div>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Footer />
                </Container>
            </div>
        );
    }
}


export default About;
