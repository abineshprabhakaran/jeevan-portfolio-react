import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button , Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import linkedin from '../../images/linkedin.svg'
import dribble from '../../images/dribbble.svg'
import instagram from '../../images/instagram.svg'
import whatsapp from '../../images/whatsapp.svg'
import jrlogo from '../../images/favicon.png';

class Header extends Component {
    
    render() {
        return (
            <div>
            <div class="toggle">
              <div class="togglemain h-100 whiteColor d-flex justify-content-center align-items-center">
              <img src={jrlogo} className="logo" alt="logo" />
              </div>
            
                <nav className="navbar  align-items-center navbar-expand-lg p-0 fixed-top header py-2 mt-4 mx-4">
                <div className="collapse navbar-collapse animationDelayHeader" id="navbarSupportedContent">
                       
                       <ListGroup className="navbar-nav flex-row">
                           <ListGroupItem className="nav-item  px-3">
                               <Button className="nav-link px-2 py-1 text-uppercase position-relative menu">
                               <Link to="/" className="navLink">Home </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  px-3">
                               <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu ">
                               <Link to="/about" className="navLink">About </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  px-3">
                               <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu ">
                               <Link  className="navLink">Projects </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  px-3">
                               <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu">
                               <Link to="/admin" className="navLink">Contact </Link>
                               </Button>
                           </ListGroupItem>
                       </ListGroup>
                   </div>
                <div className="px-4 animationDelayHeader">
                            <img src={jrlogo} className="logo" alt="logo" />
                        </div>
                    <div className="collapse navbar-collapse justify-content-end animationDelayHeader" id="navbarSupportedContent">
                       
                        <ListGroup className="navbar-nav flex-row">
                            <ListGroupItem className="nav-item  px-3">
                                <Button className="nav-link px-2 py-1 text-uppercase position-relative menu">
                                <img src={linkedin} alt="Linked In" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item  px-3">
                                <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu ">
                                <img src={whatsapp} alt="Whatsapp" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item  px-3">
                                <Button className="nav-link px- py-1 text-uppercase position-relative greyColor menu ">
                                <img src={instagram} alt="Instagram" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item  px-3">
                                <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu">
                                <img src={dribble} alt="Dribble" />
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </nav>
                </div>
            </div>
        );
    }
}


export default Header;
