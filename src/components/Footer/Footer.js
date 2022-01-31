import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                    <Link to="#">About Helping Hands</Link>
                  </li>
                  <li>
                    <Link to="/donation">Donations</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Cookie Policy</Link>
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
