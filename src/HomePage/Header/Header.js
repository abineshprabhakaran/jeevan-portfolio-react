import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button , Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import linkedin from '../../images/linkedin.svg'
import dribble from '../../images/dribbble.svg'
import instagram from '../../images/instagram.svg'
import whatsapp from '../../images/whatsapp.svg'
import jrlogo from '../../images/favicon.png';
import hamburger from '../../images/menu.svg';

class Header extends Component {
    componentDidMount(){
        function toggle(id) {
            var elt = document.getElementById(id);
            elt.style.display = elt.style.visibility=='visible' ? 'hidden' : 'visible';
          }
    }
    
    render() {
        return (
            <div>
            <div className="toggle">
              <div className="togglemain h-100 whiteColor d-flex justify-content-center align-items-center">
              <img src={hamburger} className="hamburgerMenu" alt="hamburgermenu" />
              </div>
            
                <nav className="navbar  align-items-center navbar-expand-lg p-0 fixed-top header py-2 mt-4 mx-4" id="header">
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
                               <Link to="" className="navLink">Projects </Link>
                               </Button>
                           </ListGroupItem>
                           <ListGroupItem className="nav-item  px-3">
                               <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu">
                               <Link to="" className="navLink">Contact </Link>
                               </Button>
                           </ListGroupItem>
                       </ListGroup>
                   </div>
                <div className="px-4 animationDelayHeader">
                            <img src={jrlogo} className="logo" alt="logo" />
                        </div>
                    <div className="collapse navbar-collapse justify-content-end animationDelayHeader" id="navbarSupportedContent">
                       
                        <ListGroup className="navbar-nav flex-row">
                            <ListGroupItem className="nav-item  px-2">
                                <Button className="nav-link  py-1 text-uppercase socialMenu">
                                <img src={linkedin} alt="Linked In" className="socialIconsHeader" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item  px-2">
                                <Button className="nav-link  py-1 text-uppercase  socialMenu ">
                                <img src={whatsapp} alt="Whatsapp" className="socialIconsHeader" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item  px-2">
                                <Button className="nav-link  py-1 text-uppercase  socialMenu ">
                                <img src={instagram} alt="Instagram" className="socialIconsHeader" />
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item  px-2">
                                <Button className="nav-link  py-1 text-uppercase  socialMenu">
                                <img src={dribble} alt="Dribble" className="socialIconsHeader" />
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
