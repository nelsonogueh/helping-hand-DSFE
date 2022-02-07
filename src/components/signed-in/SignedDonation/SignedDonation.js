import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './SignedDonation.css'

const SignedDonation = (props) => {
  return (
    <div>
      <Container fluid className="donation-main-container">
        <Row>
          <Col>
            <section className="donate-section-add-donations">
              <div>
                <p className="donate-title-paragraph">
                  We are glad you are here to help people in need. <br />
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
            <hr className="donate-hr" />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <form className="donate-user-info-form">
              <h2>Donation</h2>
              <div>
                <label
                  className="user-detail-category"
                  htmlFor="user-detail-name"
                >
                  What do you want to donate?
                </label>
              </div>
              <div>
                <select id="user-detail-category" className="user-detail-input">
                  <option>Shoes</option>
                  <option>Food</option>
                  <option>Clothes</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="user-detail-name" htmlFor="user-detail-email">
                  Upload Picture of Item you want to donate
                </label>
              </div>
              <div>
                <input
                  className="user-detail-input"
                  type="file"
                  id="user-detail-email"
                />
              </div>
              <div>
                <button className="donate-btn">SUBMIT</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignedDonation
