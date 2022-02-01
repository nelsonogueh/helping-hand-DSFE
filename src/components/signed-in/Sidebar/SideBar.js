import React from 'react'
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
                  <li as Link to="/dashboard" className="sidebar-menu-item">
                    <MdDashboard size={iconSize} /> Dashboard
                  </li>
                  <li
                    as
                    Link
                    to="/requests"
                    className="sidebar-menu-item sidebar-active"
                  >
                    <FiSend size={iconSize} /> Request
                  </li>
                  <li as Link to="/donations" className="sidebar-menu-item">
                    <BiDonateHeart size={iconSize} /> Donations
                  </li>
                  <li as Link to="/raffledraw" className="sidebar-menu-item">
                    <IoTicketOutline size={iconSize} /> Raffle Draw
                  </li>
                  <li as Link to="/support" className="sidebar-menu-item">
                    <BiSupport size={iconSize} /> Support
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