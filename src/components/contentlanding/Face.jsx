import React from 'react'

import './face.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Technology from '../Technology/Technology'
import intro from '../../assets/ryj.png'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

function Face() {
  return (
    <div className="Face-main">
      <div className="welcomebox">
        <img src={intro} alt="UX Designer, Web Developer" id="intro" />

        <div className="selection">
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0, rotate: [0, 45, 0] }}
            transition={{ duration: 2, delay: 0.5 }}
            className="info"
          >
            <p className="one-ux">Junior Front-end Developer</p>
            <p className="two-ux">Passionated about technology and design</p>
          </motion.div>

          <div className="buttons_landing">
            <button id="button_landing_1">
              <Link to="/contact">Contact</Link>
            </button>
            <button id="button_landing_2">
              <Link to="/portfolio">Portfolio</Link>
            </button>
          </div>
        </div>
      </div>

      <Technology />
    </div>
  )
}

export default Face
