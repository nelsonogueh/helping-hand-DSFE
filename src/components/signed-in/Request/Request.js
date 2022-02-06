import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Request.css'
import food from '../../../assets/img/food-img.jpg'
import clothes from '../../../assets/img/clothes-img.jpg'

const Request = (props) => {
  return (
    <div>
      <Container fluid className="content-main-container">
        <Row>
          <Col>
            <div className="request-container">
              <div className="request-top-donated-search-container">
                <div className="request-top-donated-items-text">
                  <div>Request</div>
                </div>
                <div className="request-top-donated-search-container">
                  <input
                    type="search"
                    placeholder="Search items here..."
                    className="request-top-donated-search-input"
                  />
                </div>
              </div>
              <div className="request-category-container"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Request
