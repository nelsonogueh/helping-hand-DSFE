import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import LandingPage from './components/LandingPage/LandingPage'
// import Donation from './components/Donation/Donation'
import ContainerUnsigned from './components/container/unsigned/ContainerUnsigned'
import Donation from './components/Donation/Donation'

import ContainerSigned from './components/container/signed/ContainerSigned'
import SignInContent from './components/container/SignInContent/SignInContent'
import SigninContainer from './components/container/sign-up-sign-incontainer/SigninContainer'
import SignedDonation from './components/signed-in/Donation/SignedDonation'

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <ContainerUnsigned>
                <LandingPage />
              </ContainerUnsigned>
            }
          />
          <Route
            path=""
            element={
              <ContainerUnsigned>
                <LandingPage />
              </ContainerUnsigned>
            }
          />
          <Route
            path="/donate"
            element={
              <ContainerUnsigned>
                <Donation />
              </ContainerUnsigned>
            }
          />
          <Route
            path="/login"
            element={
              <SigninContainer>
                <SignInContent />
              </SigninContainer>
            }
          />
          <Route
            path="/dashboard"
            element={<ContainerSigned>{/* <Dashb /> */}</ContainerSigned>}
          />
          <Route
            path="/donation"
            element={
              <ContainerSigned>{/* <SignedDonation /> */}</ContainerSigned>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
