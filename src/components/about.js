import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from '../serviceWorker';

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus dapibus nisi at pharetra. Nullam at lorem aliquet, finibus augue id, aliquam erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo ex arcu, eget accumsan dui facilisis vitae. Sed imperdiet ornare dictum. Aliquam mi eros, vehicula at porta vel, pretium id nis";

export class About_V extends Component { 

    render()
    {
        return(
            
            <Container className="h-100">
                <Row className="h-100 align-items-center justify-content-center text-center">
                    <Col className="h-100 align-self-end col-6">
                  a
                    </Col>
                    <Col className="h-100 align-self-end col-6">
                   
                    {loremIpsum}  {loremIpsum}  {loremIpsum}  {loremIpsum}
                       {loremIpsum}
                       
                   
                    </Col>
                   
                </Row>
            </Container>
        )
    }

}