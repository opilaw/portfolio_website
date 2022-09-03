import React from 'react'
import closed from '../../../assets/closed-menu.svg'
import { items } from './menuItems.js'
import { Link } from 'react-router-dom'
import './menu.css'
function Menu({ isOpen, onChange, closeSideBar }) {
  return (
    <div className={`Menu ${isOpen && 'open'}`}>
      <span className="close-menu" onClick={() => onChange(false)}>
        <img src={closed} alt="Close menu" id="close-menu" />
      </span>
      <div className="Menu-items">
        <nav>
          <ul>
            <li id="Home">
              <Link to="/" onClick={closeSideBar}>
                Home
              </Link>
            </li>
            <li id="Cv">
              <Link to="/cv" onClick={closeSideBar}>
                CV
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeSideBar}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/researchpapers" onClick={closeSideBar}>
                Research Papers
              </Link>
            </li>
            <li id="contact">
              <Link to="/contact" onClick={closeSideBar}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/*  {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
            {item.itemText}
          </a>
        ))} */}
      </div>
    </div>
  )
}
export default Menu
