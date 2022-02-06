import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'

import './Dashboard.css'
import food from '../../../assets/img/food-img.jpg'
import clothes from '../../../assets/img/clothes-img.jpg'
import shoes from '../../../assets/img/shoes-img.jpg'
import others from '../../../assets/img/others-img.jpg'

const Dashboard = (props) => {
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
              <div className="dashboard-top-donated-search-container">
                <div className="dashboard-top-donated-items-text">
                  <div>Top Donated Items</div>
                </div>
                <div className="dashboard-top-donated-search-container">
                  <input
                    type="search"
                    placeholder="Search items here..."
                    className="dashboard-top-donated-search-input"
                  />
                </div>
              </div>
              <div className="dashboard-category-container">
                <div className="dashboard-img-row-container">
                  <div className="dashboard-category-item dashboard-item-1">
                    <img
                      className="dashboard-item-1-img dashboard-category-img"
                      src={food}
                    />
                    <div className="dashboard-category-title-text">Food</div>
                  </div>
                  <div className="dashboard-category-item dashboard-item-1">
                    <img
                      className="dashboard-item-2-img dashboard-category-img"
                      src={clothes}
                    />
                    <div className="dashboard-category-title-text">Clothes</div>
                  </div>
                </div>

                <div className="dashboard-img-row-container">
                  <div className="dashboard-category-item dashboard-item-1">
                    <img
                      className="dashboard-item-3-img dashboard-category-img"
                      src={shoes}
                    />
                    <div className="dashboard-category-title-text">Shoes</div>
                  </div>
                  <div className="dashboard-category-item dashboard-item-1">
                    <img
                      className="dashboard-item-4-img dashboard-category-img"
                      src={others}
                    />
                    <div className="dashboard-category-title-text">Others</div>
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

export default Dashboard
