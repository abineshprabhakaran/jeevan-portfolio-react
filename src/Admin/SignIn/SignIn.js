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
                                <form className="pt-3" action="auth" method="POST">
                                    <FormGroup>
                                        <Input type="name" name="username" className="customInput" placeholder="Username" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" name="password" className="customInput" placeholder="Password" required />
                                    </FormGroup>
                                    <div className="mt-4">
                                        <button type="submit" className="signInButton semiBoldFont d-flex justify-content-center align-items-center text-uppercase"><span>Sign In</span></button>
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
