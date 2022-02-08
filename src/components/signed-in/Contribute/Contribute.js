import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Contribute.css'
import spinImage from '../../../assets/img/spinner.png'

const Contribute = (props) => {
  document.title = 'Contribute | DAR'
  return (
    <div>
      <Container fluid className="raffledraw-content-main-container">
        <Row>
          <Col>
            <div className="raffledraw-spin-container">
              <h2 className="raffledraw-title-text">Freewill Support</h2>
              <div className="contribute-description-text">
                If you like what we do at DAR, you can support the project by
                clicking on the button below to make a freewill contribution.
                Any contribution made is highly appreciated. Thank you.
              </div>
              <div className="raffledraw-spin-image-container"></div>
              <div>
                <a target="_blank" href="https://paystack.com/pay/dar-donation">
                  <button className="raffledraw-spin-btn">
                    Contribute Now
                  </button>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contribute
