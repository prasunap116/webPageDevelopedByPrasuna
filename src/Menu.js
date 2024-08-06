import './Navbar1.css';

import React, { Component, useState } from 'react';
import logo1 from '../src/images/logo1.png'
import { CiSettings } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import img5 from './images/img5.png'
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from 'react-bootstrap/Navbar';




class Navbar1 extends Component {
    state= {clicked :false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
  render(){
  return (
    
    <section className='navigation' style={{'position':'relative'}}>
      <section className='logos'>
        <div style={{'display':'flex'}}>
          <img  src={logo1}/>
          <Navbar>
             <Container fluid>
              <Navbar.Collapse id="navbarScroll" >
               <Form className="d-flex nav1" style={{'width':'160px'}}>
                   <Form.Control
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                   />
              
                 </Form>
              </Navbar.Collapse>
             </Container>
           </Navbar> 
          
        </div>
        <nav className='icons'>
        
            <div>
              <ul id='navbar' className={this.state.clicked ? "#navbar active":''}>
                  <li className='listItem'>
                      
                      <CiMail className='active menu1'/>
                      
                  </li>
                  <li className='listItem'>
                  <CiSettings className='menu1'/>
                  </li>
                  <li className='listItem'>
                  <CiBellOn className='menu1'/>   
                  </li>
                  <li className='listItem'>
                  <img src={img5} className='menu1'/>   
                  </li>
                  
              </ul>
            </div>
            <div id='mobile' onClick={this.handleClick}>
                <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        
        </nav>
      </section>
      
      
    </section>
  )
}
}

export default Navbar1
