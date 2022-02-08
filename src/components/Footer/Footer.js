import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import './Footer.css'
import donation from '../../assets/img/donation.png'
import fruit from '../../assets/img/fruit.png'
import logoWhite from '../../assets/img/logo-white.png'

const Footer = (props) => {
  return (
    <div>
      <section className="design-section4"></section>
      <Container className="newsletter-section" fluid>
        <Row>
          <Col>
            <div className="newsletter-text-container">
              <h2>Subscribe To Our Newsletter</h2>
              <p>
                Please enter your email address below to subscribe to our
                newsletter so you don't miss out on important information.
              </p>
            </div>
            <div className="newsletter-content-container">
              <div className="footer-logo-container">
                <img className="footer-logo" src={logoWhite} />
              </div>
              <div className="footer-input-container">
                <input
                  className="newsletter-input"
                  type="email"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="newsletter-button-container">
                <button className="newsletter-button">SUBMIT</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="sub-footer-section" fluid>
        <Row>
          <Col>
            <div className="sub-footer-content-container">
              <div className="sub-footer-menu-container">
                <h1>About Us</h1>
                <ul>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/donate">Donations</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
              <div className="sub-footer-menu-container">
                <h1>Support</h1>
                <ul>
                  <li>
                    <a href="#">support@helpinghands.ng</a>
                  </li>
                  <li>
                    <a href="#">Safety Tips</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="sub-footer-menu-container">
                <h1>Our Resources</h1>
                <ul>
                  <li>
                    <a href="#">Our Blog</a>
                  </li>
                  <li>
                    <a href="#">Follow Us On Facebook</a>
                  </li>
                  <li>
                    <a href="#">Follow Us On Instagram</a>
                  </li>
                  <li>
                    <a href="#">Follow Us On Youtube</a>
                  </li>
                  <li>
                    <a href="#">Follow Us On Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="footer" fluid>
        <Row>
          <Col>
            <div className="footer-container">
              Copyright &copy; 2022 of Helping Hands. All Rights Reserved!
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
