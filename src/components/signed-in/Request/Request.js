import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Request.css'
import food from '../../../assets/img/food-img.jpg'
import clothes from '../../../assets/img/clothes-img.jpg'
import image1 from '../../../assets/img/donations/clothe1.png'
import image2 from '../../../assets/img/donations/bag.png'
import image3 from '../../../assets/img/donations/laptop.png'
import image4 from '../../../assets/img/donations/shoes.png'
import image5 from '../../../assets/img/donations/tablet.png'

const Request = (props) => {
  document.title = "Request | DAR"
  return (
    <div>
      <Container fluid className="request-content-main-container">
        <Row>
          <Col>
            <div className="request-container">
              <div className="request-top-donated-search-container"></div>
              <ul className="request-filter-buttons-container">
                <li className="request-filter-button request-filter-button-active">
                  ALL
                </li>
                <li className="request-filter-button ">Food</li>
                <li className="request-filter-button">Shoes</li>
                <li className="request-filter-button">Bags</li>
                <li className="request-filter-button">Gadgets</li>
                <li className="request-filter-button">Clothes</li>
                <li className="request-filter-button">Home Appliances</li>
              </ul>
              <div className="request-category-container">
                <article className="request-listing-item">
                  <div>
                    <img src={image1} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={image2} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={image3} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={image4} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item request-item-first-child">
                  <div>
                    <img src={image5} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={image1} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={image2} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
                <article className="request-listing-item">
                  <div>
                    <img src={image3} className="request-listing-img" />
                  </div>
                  <div>
                    <button className="request-now-btn">Request Now</button>
                  </div>
                </article>
              </div>
              <div className="request-pagination-container">
                <div className="pagination-item">&lt;&lt;</div>
                <div className="pagination-item pagination-item-active">1</div>
                <div className="pagination-item">2</div>
                <div className="pagination-item">3</div>
                <div className="pagination-item">. . .</div>
                <div className="pagination-item">50</div>
                <div className="pagination-item">&gt;&gt;</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Request
