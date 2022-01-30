import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import './Header.css'
import logo from '../../assets/img/logo.png'

const Header = (props) => {
  return (
    <Navbar
      sticky="top"
      className="navbar-main-container"
      bg="light"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img alt="" src={logo} style={{ height: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="menu-nav-item" href="#action1">
              HOME
            </Nav.Link>
            <Nav.Link className="menu-nav-item" href="#action2">
              CONTRIBUTE
            </Nav.Link>
            <Nav.Link className="menu-nav-item" href="#action2">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="menu-nav-item" href="#action2">
              FAQs
            </Nav.Link>
          </Nav>
          <Nav.Link href="#login" className="header-btn primary-button-hollow">
            LOGIN
          </Nav.Link>
          <Nav.Link href="#login" className="header-btn primary-button">
            SIGN UP
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
