import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import LandingPage from './components/LandingPage/LandingPage'
// import Donation from './components/Donation/Donation'
import ContainerUnsigned from './components/container/unsigned/ContainerUnsigned'
import Donation from './components/Donation/Donation'

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <ContainerUnsigned>
                <LandingPage />
              </ContainerUnsigned>
            }
          />
          <Route
            path="/donation"
            element={
              <ContainerUnsigned>
                <Donation />
              </ContainerUnsigned>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
