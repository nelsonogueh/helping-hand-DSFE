import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// ICONS
import { MdDashboard } from 'react-icons/md'
import { FiSend } from 'react-icons/fi'
import { BiDonateHeart, BiSupport } from 'react-icons/bi'
import { IoTicketOutline } from 'react-icons/io5'

import './SigninContainer.css'
import signinImage2 from '../../../assets/img/login-img2.jpg'
import signinDesignImg from '../../../assets/img/designimage.png'

const SigninContainer = (props) => {
  const iconSize = 25
  const handleFormSubmit = (e) => {}
  return (
    <div className="signin-sidebar-main-container">
      <div className="content-image-container">
        <div>
          <img src={signinImage2} alt="" className="signin-sidebar-img" />
        </div>
        <div className="signin-main-content-container">{props.children}</div>
      </div>
      <div>
        <img src={signinDesignImg} alt="" className="signin-design-img" />
      </div>
    </div>
  )
}

export default SigninContainer
