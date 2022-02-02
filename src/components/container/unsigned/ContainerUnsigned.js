import React from 'react'

import './ContainerUnsigned.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const ContainerUnsigned = (props) => {
  return (
    <div className='unsigned-container'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default ContainerUnsigned
