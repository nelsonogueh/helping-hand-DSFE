import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './RaffleDraw.css'
import spinImage from '../../../assets/img/spinner.png'

const RaffleDraw = (props) => {
  return (
    <div>
      <Container fluid className="raffledraw-content-main-container">
        <Row>
          <Col>
            <div className="raffledraw-spin-container">
              <h2 className="raffledraw-title-text">SPIN AND WIN</h2>
              <div className="raffledraw-description-text">
                Spin the wheel and win gifts and prices right now. Please note
                that you only have one chance per day.
              </div>
              <div className="raffledraw-spin-image-container">
                <img
                  className="raffledraw-spin-image"
                  src={spinImage}
                  alt="spin image"
                />
              </div>
              <div>
                <button className="raffledraw-spin-btn">Spin Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RaffleDraw
