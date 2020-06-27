import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import jrlogo from '../../images/favicon.png';

class Header extends Component {
    componentDidMount() {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".header").addClass("activeHeader");
            } else {
                $(".header").removeClass("activeHeader");
            }
        });
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".logoContainer").addClass("logoContainerBlock");
            } else {
                $(".logoContainer").removeClass("logoContainerBlock");
            }
        });
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".jusEnd").addClass("jusBetween");
            } else {
                $(".jusEnd").removeClass("jusBetween");
            }
        });

    }
    
    render() {
        return (
            <div>
                <nav className="navbar align-items-center navbar-expand-lg p-0 fixed-top header py-3">
                    <div className="collapse navbar-collapse jusEnd" id="navbarSupportedContent">
                        <div className="logoContainer px-4">
                            <img src={jrlogo} className="logo" />
                        </div>
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
                                <Button className="nav-link px- py-1 text-uppercase position-relative greyColor menu ">Project</Button>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item  px-3">
                                <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu">Contact</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Header;
