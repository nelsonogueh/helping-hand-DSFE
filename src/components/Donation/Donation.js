import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import donation from '../../assets/img/donation.png'
import fruit from '../../assets/img/fruit.png'
import logoWhite from '../../assets/img/logo-white.png'

import './Donation.css'

const Donation = (props) => {
  return (
    <div>
      <Container fluid className="donation-main-container">
        <Row>
          <Col>
            <section className="donate-section-add-donations">
              <div>
                <h1 className="donate-title-h1">LET'S GET STARTED</h1>
                <p className="donate-title-paragraph">
                  We are Glad you are here to help people in Need. <br />
                  This is a step towards making our environment a better place
                  to live in
                </p>
              </div>
              <div className="donate-add-donation-btn">
                <a href="#">
                  <span>+</span> Add Donations
                </a>
              </div>
            </section>
            <hr className='donate-hr' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Donation
