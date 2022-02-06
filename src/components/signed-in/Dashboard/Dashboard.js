import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Dashboard.css'

const Blank = (props) => {
  return (
    <div>
      <Container fluid className="content-main-container">
        <Row>
          <Col>
            <div className="dashboard-container">
              <div className="dashboard-report-container">
                <div className="dashboard-summary-item">
                  <div className="dashboard-no-request-container">
                    No. of request per month
                  </div>
                  <div className="dashboard-summary-counter-text">5</div>
                  <div className="dashboard-view-detail-link">
                    <a href="#">View details</a>
                  </div>
                </div>
                <hr className="dashboard-summary-hr" />
                <div className="dashboard-summary-item">
                  <div className="dashboard-no-request-container">
                    Total items requested
                  </div>
                  <div className="dashboard-summary-counter-text">3</div>
                  <div className="dashboard-view-detail-link">
                    <a href="#">View details</a>
                  </div>
                </div>
                <hr className="dashboard-summary-hr" />
                <div className="dashboard-summary-item">
                  <div className="dashboard-no-request-container">
                    Total items donated
                  </div>
                  <div className="dashboard-summary-counter-text">0</div>
                  <div className="dashboard-view-detail-link">
                    <a href="#">View details</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blank
