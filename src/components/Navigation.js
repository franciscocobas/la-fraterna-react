import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

import logoFlorFraterna from '../assets/flower.svg';
import './Navigation.scss';

export default function Navigation(props) {

  return (
    <Navbar id='navigation-container' bg="light" expand="lg" fixed='top' fluid>
      <Navbar.Brand href="#home" className='flex-grow-1'>
        <img id='logo-flor-fraterna' 
          src={logoFlorFraterna} 
          alt='Logo Flor Fraterna' 
          className='d-inline-block align-middle'
        />
        La Fraterna
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">¿Qué somos?</Nav.Link>
          <Nav.Link href="#link">Propuestas</Nav.Link>
          <Nav.Link href="#link">Gastronomía</Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}