import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Request.css'
import food from '../../../assets/img/food-img.jpg'
import clothes from '../../../assets/img/clothes-img.jpg'
import veges from '../../../assets/img/veges.png'

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
              <ul className="request-filter-buttons-container">
                <li className="request-filter-button request-filter-button-active">
                  Food
                </li>
                <li className="request-filter-button">Shoes</li>
                <li className="request-filter-button">Bags</li>
                <li className="request-filter-button">Gadgets</li>
                <li className="request-filter-button">Clothes</li>
                <li className="request-filter-button">Home Appliances</li>
              </ul>
              <div className="request-category-container">
                <article className="request-listing-item">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item request-item-first-child">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={veges} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Request
