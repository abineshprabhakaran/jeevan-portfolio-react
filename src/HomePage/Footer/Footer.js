import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Input, FormGroup , Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import jrlogo from '../../images/favicon.png';
import footerarrow from '../../images/footerarrow.svg';


class Footer extends Component {

    render() {
        return (
            <div>
                <div className="pt-5 container-fluid">
                    <div className="row mx-0 justify-content-between">
                        <div className="col-lg-3">
                            <div>
                                <div>
                                    <h3 className="semiBoldFont">Let's stay in touch.</h3>
                                </div>
                                <FormGroup className="pt-4 d-flex">
                                    <Input type="email" name="email" className="footerInput" placeholder="Email" required />
                                    <Button className="footerArrowButton">   <img src={footerarrow}  alt="Footer arrow icon" /> </Button>
                                </FormGroup>
                            </div>

                        </div>
                        <div className="col-lg-3 d-flex justify-content-end">
                            <div>
                                <img src={jrlogo} className="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="pt-4 pb-3">
                    <div className="row mx-0 justify-content-between">
                        <div className="col-lg-3">
                            <div>
                            <ListGroup className="navbar-nav flex-row">
                           <ListGroupItem className="nav-item  pr-3">
                               <Button className="nav-link pr-2 py-1 semiBoldFont  position-relative menu ">
                               <Link to="/about" className="blackColor text-decoration-none">About </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  pr-3">
                               <Button className="nav-link pr-2 py-1 semiBoldFont position-relative menu ">
                               <Link  to="/projects" className=" blackColor text-decoration-none">Projects </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  pr-3">
                               <Button className="nav-link pr-2 py-1 semiBoldFont position-relative menu">
                               <Link  className="blackColor text-decoration-none">Contact </Link>
                               </Button>
                           </ListGroupItem>
                       </ListGroup>
                            </div>
                            <div className="pt-2">
                            <ListGroup className="navbar-nav flex-row">
                           <ListGroupItem className="nav-item  pr-3">
                               <Button className="nav-link pr-2 py-1   position-relative menu ">
                               <Link className="blackColor text-decoration-none">LinkedIn </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  pr-3">
                               <Button className="nav-link pr-2 py-1  position-relative menu ">
                               <Link  className=" blackColor text-decoration-none">Instagram </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  pr-3">
                               <Button className="nav-link pr-2 py-1  position-relative menu">
                               <Link to="/admin" className="blackColor text-decoration-none">Whatsapp </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  pr-3">
                               <Button className="nav-link pr-2 py-1  position-relative menu">
                               <Link to="/admin" className="blackColor text-decoration-none">Dribbble </Link>
                               </Button>
                           </ListGroupItem>
                       </ListGroup>
                            </div>

                        </div>
                        <div className="col-lg-3 d-flex justify-content-end align-self-end">
                            <div className="f-14">
                            Copyright © 2020 Jeevan Raj
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Footer;
