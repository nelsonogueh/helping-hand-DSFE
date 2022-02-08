import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './NotFound.css'
import notfoundImg from '../../assets/img/not-found.gif'

const NotFound = (props) => {
  document.title = 'ERROR 404 - NOT FOUND | DAR'
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <section className="notfound-section-container">
              <div className="section1-content-container">
                <div></div>
                <img className='notfound-img' src={notfoundImg} />
                <h1 className="section1-content-h1">404 NOT FOUND</h1>
                <div className="section1-content-h2 notfound-sub-text">
                  Sorry! The content you're looking for could not be found.
                  Please return to <a href="/">home page</a> .
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>

      <section className="design-section1"></section>
    </div>
  )
}

export default NotFound
