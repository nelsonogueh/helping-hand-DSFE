import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import './App.css'

import Header from './components/Header/Header'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App
