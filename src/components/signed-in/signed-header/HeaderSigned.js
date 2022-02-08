import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// ICONS
import { VscThreeBars } from 'react-icons/vsc'
import { ImCart } from 'react-icons/im'
import { IoNotificationsSharp } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineCaretDown } from 'react-icons/ai'

import './HeaderSigned.css'
import logoWhite from '../../../assets/img/logo-white.png'

const HeaderSigned = (props) => {
  const iconSize = 25

  const [currentEndpoint, setCurrentEndpoint] = useState('')
  const [endpointText, setEndpointText] = useState('')
  const [navbarVisible, setNavbarVisible] = useState(false)

  useEffect(() => {
    let currentEndpointLocation = window.location.pathname
    setCurrentEndpoint(currentEndpointLocation)

    switch (currentEndpointLocation) {
      case '/dashboard' || '/dashboard/':
        setEndpointText('DASHBOARD')
        break
      case '/request' || '/request/':
        setEndpointText('REQUEST')
        break
      case '/donation' || '/donation/':
        setEndpointText('DONATION')
        break
      case '/raffledraw' || '/raffledraw/':
        setEndpointText('RAFFLE DRAW')
        break
      case '/support' || '/support/':
        setEndpointText('SUPPORT')
        break
      case '/contribute' || '/contribute/':
        setEndpointText('CONTRIBUTE')
        break

      default:
        setEndpointText('')
        break
    }
  }, [currentEndpoint, endpointText])

  const toggleSidebar = (e) => {
    if (navbarVisible) {
      document
        .getElementById('sidebar-signed')
        .classList.remove('hide-nav-sidebar')
    } else {
      document
        .getElementById('sidebar-signed')
        .classList.add('hide-nav-sidebar')
    }

    setNavbarVisible(!navbarVisible)
  }
  return (
    <div className="signed-header-container">
      <div className="signed-dashboard-toggle-icon-container">
        <VscThreeBars
          className="signed-toggle-icon"
          onClick={toggleSidebar}
          size={iconSize}
        />
        <div>{endpointText}</div>
      </div>
      <div className="signed-profile-icon-container">
        <ImCart className="signed-header-icon" size={iconSize} />
        <IoNotificationsSharp className="signed-header-icon" size={iconSize} />
        <FaRegUserCircle className="signed-header-icon-3" size={iconSize} />
        <AiOutlineCaretDown className="signed-header-icon-caret" size={14} />
      </div>
    </div>
  )
}

export default HeaderSigned
