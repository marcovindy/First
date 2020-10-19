import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from '../serviceWorker';
import linkedIn from '../images/linkedin.png'; 
import instagram from '../images/instagram.jpg'; // Tell webpack this JS file uses this image
import facebook from '../images/facebook.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa } from '@fortawesome/free-solid-svg-icons'


export class Header_V extends Component {



    render() {
        return (
            <Container className="h-100 ">
                <Row className="h-100  align-items-center justify-content-center text-center">
                <Col className="h-100 padding-top-15rem padding-bottom-12c5rem align-self-end col-1">
                        <div >
                            <img width="30px" src={linkedIn} alt="lil" />
                            <img width="30px" src={instagram} alt="Logo" />
                            <img width="30px" src={facebook} alt="Logo" />
                            <FontAwesomeIcon icon={["fal", "coffee"]} />
                        </div>
                        
                    </Col>
                    <Col className="h-100 padding-top-15rem  padding-bottom-12c5rem align-self-end col-10">
                        <div >
                            <h1 className="font-4em">
                               <b>Ahoj, tady <span className="aperto">Marek</span>
                                <br />Developer & Designer</b> 
                        </h1>
                          


                        </div>

                    </Col>
                    <Col className="h-100 padding-top-15rem  padding-bottom-12c5rem align-self-end col-1">
                        <div >
                            a a
                          


                        </div>

                    </Col>
                

                </Row>
            </Container>
        )
    }

}

