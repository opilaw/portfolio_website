import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import burger from '../../../assets/burger-menu.svg'
import Menu from './Menu.js'
import logo from '../../../assets/logo.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const closeSideBar = () => {
    setIsOpen(false)
  }

  return (
    <div className="Header">
      <div className="menu-mobile">
        <span
          className="material-icons menu-btn"
          onClick={() => setIsOpen(true)}
        >
          <img src={burger} alt="Burger-menu" id="burger-menu" />
        </span>

        <Menu
          closeSideBar={closeSideBar}
          isOpen={isOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          onChange={setIsOpen}
        ></Menu>
      </div>

      <div className="menu-desktop">
        <nav>
          <ul>
            <li id="logo">Olga Pilawka</li>
            <li id="Home">
              <Link to="/">Home</Link>
            </li>
            <li id="Cv">
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li id="researchpapers">
              <Link to="/researchpapers">Research papers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
