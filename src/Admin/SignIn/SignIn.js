import React, { Component  } from 'react';
import jrlogo from '../../images/favicon.png';
import { Link  } from 'react-router-dom';
import {FormGroup , Input} from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

class SignIn extends Component {
    componentDidMount() {
        AOS.init({
            once: true,
        });
    }
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center align-items-center adminBg" >
                    <div className="adminSignInWidth" data-aos="zoom-in" data-aos-duration="1000" >
                    <div className="adminSignIn whiteBg text-left py-4 px-4 px-sm-5">
                                <div className="adminLogo text-center mb-2">
                                  <img src={jrlogo} />
                                </div>
                                <form className="pt-3">
                                    <FormGroup>
                                        <Input type="email" className="customInput" placeholder="Username" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" className="customInput" placeholder="Password" />
                                    </FormGroup>
                                    <div className="mt-4">
                                        <Link className="signInButton semiBoldFont d-flex justify-content-center align-items-center text-uppercase"><span>Sign In</span></Link>
                                    </div>
                                  

                                </form>
                            </div>
                    </div>
                    
                </div>
               
              </div> 
        );
    }
}


export default SignIn;
