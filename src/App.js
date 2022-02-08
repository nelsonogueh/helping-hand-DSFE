import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import ContainerUnsigned from './components/container/unsigned/ContainerUnsigned'
import Donation from './components/Donation/Donation'
import ContainerSigned from './components/container/signed/ContainerSigned'
import SignedDonation from './components/signed-in/SignedDonation/SignedDonation'
import Dashboard from './components/signed-in/Dashboard/Dashboard'
import SigninContainer from './components/container/sign-up-sign-incontainer/SigninContainer'
import SignIn from './components/SignIn/SignIn'
import Blank from './components/signed-in/Blank/Blank'
import Request from './components/signed-in/Request/Request'
import Signup from './components/SignUp/Signup'
import NotFound from './components/NotFound/NotFound'
import RaffleDraw from './components/signed-in/RaffleDraw/RaffleDraw'
import Support from './components/signed-in/Support/Support'
import Contribute from './components/signed-in/Contribute/Contribute'

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <ContainerUnsigned>
                <NotFound />
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
            path="/"
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
                <SignIn />
              </SigninContainer>
            }
          />
          <Route
            path="/signup"
            element={
              <SigninContainer>
                <Signup />
              </SigninContainer>
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
          <Route
            path="/request"
            element={
              <ContainerSigned>
                <Request />
              </ContainerSigned>
            }
          />
          <Route
            path="/raffledraw"
            element={
              <ContainerSigned>
                <RaffleDraw />
              </ContainerSigned>
            }
          />
          <Route
            path="/support"
            element={
              <ContainerSigned>
                <Support />
              </ContainerSigned>
            }
          />
          <Route
            path="/contribute"
            element={
              <ContainerSigned>
                <Contribute />
              </ContainerSigned>
            }
          />
          {/* BLANK COMPONENT AS A TEMPLATE FOR CREATING SIGNED IN COMPONENTS */}
          {/* BLANK COMPONENT AS A TEMPLATE FOR CREATING SIGNED IN COMPONENTS */}
          <Route
            path="/blank"
            element={
              <ContainerSigned>
                <Blank />
              </ContainerSigned>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
