import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Dashboard.css'

const Dashboard = (props) => {
  return (
    <div>
      <Container fluid className="donation-main-container">
        <Row>
          <Col>
            <h1>Dashboard</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
