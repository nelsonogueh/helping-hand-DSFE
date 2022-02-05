import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// ICONS
import { MdDashboard } from 'react-icons/md'
import { FiSend } from 'react-icons/fi'
import { BiDonateHeart, BiSupport } from 'react-icons/bi'
import { IoTicketOutline } from 'react-icons/io5'

import './SignSideBar.css'
import signinImage2 from '../../../../assets/img/login-img2.jpg'
import signinDesignImg from '../../../../assets/img/designimage.png'
import googleSigninImage from '../../../../assets/img/signin-google.png'
import outlookSigninImage from '../../../../assets/img/signin-outlook.png'
import logoGreen from '../../../../assets/img/logo.png'

const SignSideBar = (props) => {
  const iconSize = 25
  const handleFormSubmit = (e) => {}
  return (
    <div className="signin-sidebar-main-container">
      <div className="content-image-container">
        <div>
          <img src={signinImage2} alt="" className="signin-sidebar-img" />
        </div>
        <div className="signin-main-content-container">
          <div>
            <a href="/">
              <img src={logoGreen} alt="" className="signin-logo-img" />{' '}
            </a>
          </div>

          <div className="signin-title-container">
            <h1 className="signin-login-h1">Login</h1>
            <div className="signin-signup-text">
              Don't have an account? <a href="/signup">sign up</a>
            </div>
          </div>
          <hr className="signin-hr" />
          <div classNmae="signin-form-container">
            <form className="signin-form" onSubmit={handleFormSubmit}>
              <div>
                <div>
                  <label
                    className="signin-form-label"
                    htmlFor="signin-email-input"
                  >
                    Email{' '}
                  </label>
                </div>
                <div>
                  <input
                    className="signin-form-control"
                    type="email"
                    placeholder="Enter your email..."
                    id="signin-email-input"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label
                    className="signin-form-label"
                    htmlFor="signin-email-input"
                  >
                    Password{' '}
                  </label>
                </div>
                <div>
                  <input
                    className="signin-form-control"
                    type="password"
                    placeholder="Enter your password..."
                    id="signin-password-input"
                  />
                </div>
              </div>
              <div className="signin-button-container">
                <div className="signin-forgot-password-container">
                  <input
                    className="signin-checkbox"
                    type="checkbox"
                    id="signin-checkbox"
                    value="true"
                  />
                  <label
                    htmlFor="signin-checkbox"
                    className="signin-form-label"
                  >
                    {' '}
                    Remember me
                  </label>
                  <div className="signin-signup-text signin-form-label">
                    Forgot password? <a href="/signup">click here</a>
                  </div>
                </div>
                <div>
                  <button className="signin-button">
                    <Link className="signin-form-link" to="/dashboard">
                      LOGIN
                    </Link>
                  </button>
                </div>
              </div>
              <div>
                <hr />
                <div className="signin-or">
                  <span>OR</span>
                </div>

                <div className="signin-google">
                  LOGIN WITH &nbsp; <img src={googleSigninImage} />
                </div>
                <div className="signin-google">
                  LOGIN WITH &nbsp; <img src={outlookSigninImage} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img src={signinDesignImg} alt="" className="signin-design-img" />
      </div>
    </div>
  )
}

export default SignSideBar
