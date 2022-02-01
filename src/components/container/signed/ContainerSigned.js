import React from 'react'

import './ContainerSigned.css'
import SideBar from '../../signed-in/Sidebar/SideBar'
import HeaderSigned from '../../signed-in/signed-header/HeaderSigned'

const ContainerSigned = (props) => {
  return (
    <div className="signed-in-container">
      <SideBar />
      <HeaderSigned />
      {props.children}
    </div>
  )
}

export default ContainerSigned
