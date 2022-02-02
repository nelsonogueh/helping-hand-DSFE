import React from 'react'

import './SigninContainer.css'
import SignSideBar from './SignSideBar/SignSideBar'

const SigninContainer = (props) => {
  return (
    <div className="signed-in-container">
      <SignSideBar />
      {/* <HeaderSigned /> */}
      {props.children}
    </div>
  )
}

export default SigninContainer
