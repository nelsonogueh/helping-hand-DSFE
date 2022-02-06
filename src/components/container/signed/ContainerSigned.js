import React from 'react'

import './ContainerSigned.css'
import SideBar from '../../signed-in/Sidebar/SideBar'
import HeaderSigned from '../../signed-in/signed-header/HeaderSigned'

const ContainerSigned = (props) => {
  return (
    <div className="signed-in-container">
      <SideBar />
      <div className='signed-container-main-section'>
        <HeaderSigned />
        {props.children}
      </div>
    </div>
  )
}

export default ContainerSigned
