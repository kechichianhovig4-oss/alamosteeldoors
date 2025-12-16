import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ContactUs from './components/contactus'
import HomePage from './components/Home'
import AboutUs from './components/About'
import Portfolio from './components/Portfolio'
import FAQ from './components/faq'
import Contact from './components/Contact'


const App = () => {
  return (
    <Router>
      <Routes>
       
     
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<FAQ />} />
         <Route path="/Contact" element={<Contact />} />

      </Routes>
    </Router>
  )
}

export default App