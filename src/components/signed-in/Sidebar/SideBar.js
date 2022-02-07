import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// ICONS
import { MdDashboard } from 'react-icons/md'
import { FiSend } from 'react-icons/fi'
import { BiDonateHeart, BiSupport } from 'react-icons/bi'
import { IoTicketOutline } from 'react-icons/io5'

import './SideBar.css'
import logoWhite from '../../../assets/img/logo-white.png'

const SideBar = (props) => {
  const iconSize = 25

  const [currentEndpoint, setCurrentEndpoint] = useState('')

  useEffect(() => {
    setCurrentEndpoint(window.location.pathname)
  }, [])

  // console.log(window.location.pathname) /dashboard
  // switch (window.location.pathname) {
  //   case "/dashboard":
  //     document.getElementById('').classList.toggle()
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            {' '}
            <section className="sidebar-container">
              <div className="sidebar-logo-container">
                <img src={logoWhite} alt="" className="sidebar-logo-img" />{' '}
              </div>
              <div className="sidebar-menu-item-container">
                <ul className="sidebar-ul">
                  <li
                    id="link-dashboard"
                    className={`sidebar-menu-item 
                    ${
                      (currentEndpoint === '/dashboard' ||
                        currentEndpoint === '/dashboard/') &&
                      'sidebar-active'
                    }
                    `}
                  >
                    <a href="/dashboard">
                      <MdDashboard size={iconSize} /> Dashboard
                    </a>
                  </li>
                  <li
                    id="link-request"
                    className={`sidebar-menu-item 
                    ${
                      (currentEndpoint === '/request' ||
                        currentEndpoint === '/request/') &&
                      'sidebar-active'
                    }
                    `}
                  >
                    <a href="/request">
                      <FiSend size={iconSize} /> Request
                    </a>
                  </li>
                  <li
                    id="link-donation"
                    className={`sidebar-menu-item 
                    ${
                      (currentEndpoint === '/donation' ||
                        currentEndpoint === '/donation/') &&
                      'sidebar-active'
                    }
                    `}
                  >
                    <a href="/donation">
                      <BiDonateHeart size={iconSize} /> Donations
                    </a>
                  </li>
                  <li
                    id="link-raffledraw"
                    className={`sidebar-menu-item 
                    ${
                      (currentEndpoint === '/raffledraw' ||
                        currentEndpoint === '/raffledraw/') &&
                      'sidebar-active'
                    }
                    `}
                  >
                    <a href="/raffledraw">
                      <IoTicketOutline size={iconSize} /> Raffle Draw
                    </a>
                  </li>
                  <li
                    id="link-support"
                    className={`sidebar-menu-item 
                    ${
                      (currentEndpoint === '/support' ||
                        currentEndpoint === '/support/') &&
                      'sidebar-active'
                    }
                    `}
                  >
                    <a href="/support">
                      <BiSupport size={iconSize} /> Support
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SideBar
