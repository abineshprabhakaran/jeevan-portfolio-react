import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from '../HomePage/Header/Header';

class About extends Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Header />
                </Container>
            </div>
        );
    }
}


export default About;
