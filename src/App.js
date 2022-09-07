import './App.css'
import React from 'react'

import Background from './components/header/background/Background'
import Header from './components/header/header/Header'
import WebPortfolio from './components/WebPortfolio/WebPortfolio'
import Ux from './components/Uxpdf/Ux'

import Face from './components/contentlanding/Face'
import Portfolio from './components/UX/Portfolio'
import Contact from './components/Contact/Contact'
import Cv from './components/cv/Cv'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ResearchPapers from './components/ResearchPapers/ResearchPapers'
import Art from './components/artportfolio/artportfolio.jsx'

function App() {
  return (
    // <div className="App">
    <Router basename="/">
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Face />} index />
          <Route exact path="/cv" element={<Cv />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/researchpapers" element={<ResearchPapers />} />
          <Route path="/webportfolio" element={<WebPortfolio />} />
          <Route path="/ux" element={<Ux />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
