import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import './../hover-menu.css';
import { Button, Container, Col, Row, Nav, Link, Item, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Nav_V extends Component {

    state = { clicked: false }

    render() {

       
        return (

            <Row className="fixed-top menu">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>

                    </i>
                </div>
                <Col>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/home" className="logo-vindy">Vindy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                

                <Col className="white-text" >
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  eventKey="link-1">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Contact</Nav.Link>
                        </Nav.Item>
                       
                    </Nav>
                </Col>
            </Row>
      
        )
    }

}




