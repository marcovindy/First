import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import { Button, Container, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header_V } from './components/header.js'
import { Nav_V } from './components/navigation.js'
import { About_V } from './components/about';
import './components/scroll.js'



function App() {


  
  return (
    
    <div className="App">


      <Nav_V />
     
      <header className="App-header">
      

        
        <Header_V />
     
      </header>
      
      <About_V />
    </div>
  );

  
}

export default App;



