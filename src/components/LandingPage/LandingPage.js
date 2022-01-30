import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './LandingPage.css'
import bgDesign from '../../assets/img/bg-design.jpg'
import bgDesignSmall from '../../assets/img/bg-design-small.png'
import donation from '../../assets/img/donation.png'
import fruit from '../../assets/img/fruit.png'
import bgEllipse from '../../assets/img/bg-ellipse.png'

const LandingPage = (props) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <section className="section1-container">
              <div className="section1-content-container">
                <h1 className="section1-content-h1">
                  What are you in <span>NEED</span> of?
                </h1>
                <h1 className="section1-content-h2">
                  Request for it and it shall be given to you{' '}
                </h1>
                <button className="primary-button section1-primary-button ">
                  REQUEST{' '}
                </button>
              </div>
            </section>
          </Col>
        </Row>
      </Container>

      <section className="design-section1"></section>

      <Container fluid>
        <Row>
          <Col>
            <section className="section3-container">
              <div className="section3-container-left buttom-margin">
                <img className="section-3-donation-img" src={donation} />
              </div>
              <div className="section3-container-right">
                <h1 className="main-title color-primary ">
                  Do you have something you don't use?
                </h1>
                <h1 className="sub-title buttom-margin">
                  Give to people in need today
                </h1>
                <p className="section-paragraph">
                  Helping Hand serves as a platform which helps you give to the
                  needy. If you have any product or item you don't find useful
                  to you anymore, bring it to us, we have people who are in need
                  of your items.
                </p>
                <p className="section-paragraph buttom-margin">
                  To get started, click the button below
                </p>
                <button className="primary-button section1-primary-button">
                  DONATE
                </button>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      <Container className="section4-container-main" fluid>
        <Row>
          <Col>
            <section className="section4-container">
              <div className="section4-container-left buttom-margin">
                <h1 className="main-title color-primary ">
                  You need something?
                </h1>
                <h1 className="sub-title buttom-margin">
                  Your need is right here
                </h1>
                <p className="section-paragraph">
                  Helping Hands is very keen on ensuring the needy have access
                  to what they need. We have created a bridge between people
                  with useful items and those without.
                </p>
                <p className="section-paragraph buttom-margin">
                  If you are in need of certain goods, click the button below.
                </p>
                <button className="primary-button section1-primary-button">
                  REQUEST
                </button>
              </div>
              <div className="section4-container-right">
                <img className="section-4-donation-img" src={fruit} />
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage
