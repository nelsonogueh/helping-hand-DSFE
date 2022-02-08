import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Support.css'

const Support = (props) => {
  document.title = "Support | DAR"
  const handleSupportFormSubmit = (e) => {}
  return (
    <div>
      <Container fluid className="support-content-main-container">
        <Row>
          <Col>
            <form className="signin-form" onSubmit={handleSupportFormSubmit}>
              <div>
                <h2 className="support-title">Leave a message</h2>
                <p className="support-description-text">
                  Please leave us a message with the form below and we'll get
                  back to you as soon as possible.
                </p>
                <div>
                  <label
                    className="signin-form-label"
                    htmlFor="signin-subject-input"
                  >
                    Subject{' '}
                  </label>
                </div>
                <div>
                  <input
                    className="signin-form-control"
                    type="text"
                    placeholder="Subject of your message..."
                    id="signin-subject-input"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label
                    className="signin-form-label"
                    htmlFor="signin-message-input"
                  >
                    Message{' '}
                  </label>
                </div>
                <div>
                  <textarea
                    rows="6"
                    className="signin-form-control"
                    placeholder="Enter your message..."
                    id="signin-message-input"
                  ></textarea>
                </div>
              </div>
              <div className="signin-button-container">
                <div>
                  <button
                    type="submit"
                    className="signin-button signin-form-link"
                  >
                    Submit Form
                  </button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Support
