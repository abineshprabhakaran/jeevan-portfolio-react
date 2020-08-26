import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import jrlogo from '../images/Logo-white.png';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import ontrack from '../images/ontrack.png';
import ai from '../images/ai.svg';
import xd from '../images/xd.svg';
import Swiper from 'swiper';



//Logos
import logo1 from '../images/Logos/1.png';
import logo2 from '../images/Logos/2.jpg';
import logo3 from '../images/Logos/3.png';
import logo4 from '../images/Logos/4.png';
import logo5 from '../images/Logos/5.png';
import logo6 from '../images/Logos/6.png';
import logo7 from '../images/Logos/7.png';
import logo8 from '../images/Logos/8.png';
import logo9 from '../images/Logos/9.png';
import logo10 from '../images/Logos/10.png';
import logo11 from '../images/Logos/11.png';
import logo12 from '../images/Logos/12.png';
import logo13 from '../images/Logos/13.png';
import logo14 from '../images/Logos/14.jpg';
import logo15 from '../images/Logos/15.png';
import logo16 from '../images/Logos/16.png';
import logo17 from '../images/Logos/17.png';


//Banner
import banner1 from '../images/Banner/1.jpg';
import banner2 from '../images/Banner/2.jpg';
import banner3 from '../images/Banner/3.jpg';
import banner4 from '../images/Banner/4.jpg';
import banner5 from '../images/Banner/5.jpg';
import banner6 from '../images/Banner/6.jpg';
import banner7 from '../images/Banner/7.jpg';
import banner8 from '../images/Banner/8.jpg';
import banner9 from '../images/Banner/9.jpg';
import banner10 from '../images/Banner/10.jpg';
import banner11 from '../images/Banner/11.jpg';
import banner12 from '../images/Banner/12.png';
import banner13 from '../images/Banner/13.jpg';
import banner14 from '../images/Banner/14.png';




class Projects extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
        });
        this.swiper = new Swiper('.webSwiper', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        this.swiper = new Swiper('.bannerSwiper', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoHeight: true, //enable auto height
            observer: true,
            observeParents: true,
        });
        this.swiper = new Swiper('.logoSwiper', {
            slidesPerView: 5,
            slidesPerColumn: 1,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
              },
            speed:1500,
            observer: true,
            observeParents: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="d-flex justify-content-center align-items-center logoMarginTop darkBg">
                    <div>
                        <Link to="/">
                            <img src={jrlogo} alt="logo" className="logo" />
                        </Link>
                    </div>
                </div>

                <div className="row mx-0 py-5 darkBg">
                    <div className="col-lg-1">
                        <div className="nav flex-column nav-pills rotateTabs" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Websites</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Mobile</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Logo</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Graphic</a>
                        </div>
                    </div>
                    <div className="col-lg-11">
                        <div className="tab-content h-100" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div>
                                    <div className="swiper-container webSwiper">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-7 d-flex justify-content-end">
                                                            <div className="pr-5">
                                                                <img src={ontrack} alt="On Track" />
                                                                <div className="pt-3 text-center">
                                                                    <h4 className="mb-0 whiteColor semiBoldFont">
                                                                        On Track Application
                                                           </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="whiteColor col-lg-5 align-self-end">
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                                                duo dolores et ea rebum Stet clita kasd gubergren,
                                                     </p>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                                                invidunt ut labore et dolore magna aliquyam erat, ssed diam nonumy eirmod tempor invidunt ut labore
                                                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                                     </p>
                                                            <p>
                                                                <a>More</a>
                                                            </p>
                                                            <div className="d-flex justify-content-end">

                                                                <div className="pr-3">
                                                                    <img src={xd} alt="Adobe XD" />
                                                                </div>
                                                                <div className="pr-3">
                                                                    <img src={ai} alt="Adobe Illustrator" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <div className="row mx-0">
                                                        <div className="col-lg-7 d-flex justify-content-end">
                                                            <div className="pr-5">
                                                                <img src={ontrack} alt="On Track" />
                                                                <div className="pt-3 text-center">
                                                                    <h4 className="mb-0 whiteColor semiBoldFont">
                                                                        On Track Application
                                                           </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="whiteColor col-lg-5 align-self-end">
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                                                duo dolores et ea rebum Stet clita kasd gubergren,
                                                     </p>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                                                invidunt ut labore et dolore magna aliquyam erat, ssed diam nonumy eirmod tempor invidunt ut labore
                                                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                                     </p>
                                                            <p>
                                                                <a>More</a>
                                                            </p>
                                                            <div className="d-flex justify-content-end">

                                                                <div className="pr-3">
                                                                    <img src={xd} alt="Adobe XD" />
                                                                </div>
                                                                <div className="pr-3">
                                                                    <img src={ai} alt="Adobe Illustrator" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        {/* <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div> */}
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade h-100" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div className="py-5 d-flex align-items-center h-100">
                                    <div class="swiper-container logoSwiper">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo1} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo2} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo3} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo4} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo5} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo6} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo7} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo8} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo9} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo10} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo11} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo12} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo13} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo14} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo15} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo16} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={logo17} alt="logo" className="logoProjects" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <div className="py-5 d-flex align-items-center h-100">
                                    <div class="swiper-container bannerSwiper">
                                        <div class="swiper-wrapper">

                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner1} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner2} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner3} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner4} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner5} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner6} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner7} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner8} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner9} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner10} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner11} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner12} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner13} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div className="d-flex justify-content-center">
                                                    <img src={banner14} alt="logo" className="bannerProjects" />
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Projects;
