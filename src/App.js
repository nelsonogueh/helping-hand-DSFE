import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import LandingPage from './components/LandingPage/LandingPage'
import ContainerUnsigned from './components/container/unsigned/ContainerUnsigned'
import Donation from './components/Donation/Donation'
import SideBar from './components/signed-in/Sidebar/SideBar'
import ContainerSigned from './components/container/signed/ContainerSigned'
import SignedDonation from './components/signed-in/SignedDonation/SignedDonation'
import Dashboard from './components/signed-in/Dashboard/Dashboard'

// import SignInContent from './components/container/SignInContent/SignInContent'
// import SignSideBar from './components/container/sign-up-sign-incontainer/SignSideBar/SignSideBar'

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
            path="/dashboard"
            element={
              <ContainerSigned>
                <Dashboard />
              </ContainerSigned>
            }
          />
          <Route
            path="/donation"
            element={
              <ContainerSigned>
                <SignedDonation />
              </ContainerSigned>
            }
          />
          {/* <Route
            path="/dashboard"
            element={
              <ContainerSigned>
                <Donation />
              </ContainerSigned>
            }
          /> */}
          {/* <Route
            path="/login"
            element={
              <SigninContainer>
                <SignInContent />
              </SigninContainer>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
