import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Signup.css'
import signinImage2 from '../../assets/img/login-img2.jpg'
import signinDesignImg from '../../assets/img/designimage.png'
import googleSigninImage from '../../assets/img/signin-google.png'
import outlookSigninImage from '../../assets/img/signin-outlook.png'
import logoGreen from '../../assets/img/logo.png'

const Signup = (props) => {
  document.title = 'SIGN UP | DAR'

  const iconSize = 25
  const handleFormSubmit = (e) => {}
  return (
    <div className="signin-main-content-container">
      <div>
        <a href="/">
          <img src={logoGreen} alt="" className="signin-logo-img" />{' '}
        </a>
      </div>

      <div className="signin-title-container">
        <h1 className="signin-login-h1">Sign up</h1>
        <div className="signin-signup-text">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
      <hr className="signin-hr" />
      <div classNmae="signin-form-container">
        <form className="signin-form" onSubmit={handleFormSubmit}>
          <div>
            <div>
              <label className="signin-form-label" htmlFor="signin-phone-input">
                Phone{' '}
              </label>
            </div>
            <div>
              <input
                className="signin-form-control"
                type="tel"
                placeholder="Enter your phone number..."
                id="signin-phone-input"
              />
            </div>
          </div>
          <div>
            <div>
              <label className="signin-form-label" htmlFor="signin-email-input">
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
                htmlFor="signin-password-input"
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
          <div>
            <div>
              <label
                className="signin-form-label"
                htmlFor="signin-confirm-password-input"
              >
                Confirm Password{' '}
              </label>
            </div>
            <div>
              <input
                className="signin-form-control"
                type="password"
                placeholder="Confirm your password..."
                id="signin-confirm-password-input"
              />
            </div>
          </div>
          <div className="signin-button-container">
            <div className="signin-forgot-password-container">
              <button className="signin-button">
                <Link className="signin-form-link" to="/dashboard">
                  Sign up
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
