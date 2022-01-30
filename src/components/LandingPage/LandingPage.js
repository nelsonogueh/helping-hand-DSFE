import React  from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";

import './LandingPage.css'
import bgDesign from '../../assets/img/bg-design.png'
import bgDesignSmall from '../../assets/img/bg-design-small.png'
import donation from '../../assets/img/donation.png'
import image from '../../assets/img/image.png'



const LandingPage = (props) => {
  return (
    <section className="section1-container">
        <div><h1>What are you in NEED of?</h1>
<h1>Request for it and it shall be given to you </h1>
<button  className="primary-button">Request </button></div>
    </section>
  );
};

export default LandingPage;
