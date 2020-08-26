import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ListGroup, ListGroupItem, Input, FormGroup , Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import jrlogo from '../images/Logo-white.png';
import phone from '../images/phon-contact.svg';
import mail from '../images/mail-contact.svg';
import Footer from '../HomePage/Footer/Footer';
import Header from '../HomePage/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


class Contact extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
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
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center whiteColor contactText boldFont-Play">
                            Don't be shy. let's Collaborate to create Stunning works.
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center py-5">
                            <div class="w-75">
                            <div className="d-flex">
                                <div>
                                    <img src={phone} className="phone" />
                                </div>
                                <div className="pl-3">
                                    <div className="f-14 text-uppercase darkGreyColor">with Smile</div>
                                    <h5 className="mb-0 pt-2"> 
                                   <a href="tel:919597589717" className="whiteColor text-decoration-none">9597589717</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="d-flex pt-5">
                                <div>
                                    <img src={mail} className="email" />
                                </div>
                                <div className="pl-3">
                                    <div className="f-14 text-uppercase darkGreyColor">with Pleasure</div>
                                    <h5 className="mb-0 pt-2"> 
                                   <a href="mailto:jeevanraj2705@gmail.com" className="whiteColor text-decoration-none">jeevanraj2705@gmail.com</a>
                                    </h5>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="p-3 contactBg">
                                <Input type="text" name="name" className="contactInput mt-4" placeholder="Your Name" required />
                                <Input type="email" name="email" className="contactInput mt-4" placeholder="Your Email" required />
                                <Input type="number" name="phone" className="contactInput mt-4" placeholder="Your Mobile Number" required />
                                <textarea type="text" name="message" className="contactTextArea my-4" placeholder="Share your thoughts" ></textarea>
                                </div>
                            </div>
                            <div>
                                <Button class="feebdackButton">Share your Feedback</Button>
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


export default Contact;
