import React , { Component } from 'react';
import { ListGroup , ListGroupItem , Button } from 'reactstrap';

class Header extends Component {
    componentDidMount(){
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".header").addClass("activeHeader");
            } else {
                $(".header").removeClass("activeHeader");
            }
        });
    }
  render() {
    return (
    <div>
      <nav className="navbar align-items-center navbar-expand-lg p-0 fixed-top header py-3">
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ListGroup className="navbar-nav flex-row">
                    <ListGroupItem className="nav-item  px-3">
                        <Button className="nav-link px-2 py-1 text-uppercase position-relative activeMenu menu ">Home</Button>
                    </ListGroupItem>
                    <ListGroupItem className="nav-item  px-3">
                        <Button className="nav-link px-2 py-1 text-uppercase position-relative greyColor menu ">About</Button>
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
