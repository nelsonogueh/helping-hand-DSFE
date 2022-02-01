import React from 'react'
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
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <VscThreeBars size={iconSize} />
              <div>DASHBOARD</div>
            </div>
            <div>
              <ImCart size={iconSize} />
              <IoNotificationsSharp size={iconSize} />
              <FaRegUserCircle size={iconSize} />
              <AiOutlineCaretDown size={14} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeaderSigned
