import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import './LandingPage.css'
import bgDesign from '../../assets/img/bg-design.jpg'
import bgDesignSmall from '../../assets/img/bg-design-small.png'
import donation from '../../assets/img/donation.png'
import image from '../../assets/img/image.png'
import bgEllipse from '../../assets/img/bg-ellipse.png'

const LandingPage = (props) => {
  return (
    <div>
      <section
        className="section1-container"
        // style={{ backgroundImage: `url(${bgEllipse})` }}
      >
        <div className="section1-content-container">
          <h1 className="section1-content-h1">
            What are you in <span>NEED</span> of?
          </h1>
          <h1 className="section1-content-h2">
            Request for it and it shall be given to you{' '}
          </h1>
          <button className="primary-button section1-primary-button ">
            REQUEST{' '}
          </button>
        </div>
      </section>
      <section className="design-section1"></section>
    </div>
  )
}

export default LandingPage
