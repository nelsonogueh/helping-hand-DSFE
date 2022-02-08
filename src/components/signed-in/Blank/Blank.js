import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Blank.css'

const Blank = (props) => {
  return (
    <div>
      <Container fluid className="content-main-container">
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blank
