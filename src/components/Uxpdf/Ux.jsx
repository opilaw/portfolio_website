import React from 'react'
import './ux.css'

function Ux() {
  return (
    <div className="wrapper-ux">
      <div className="image__container">
        <img src={'/images/Deffatt.svg'} id="image"></img>
      </div>
      <div className="image__container">
        <img src={'/images/DanskeBank.png'} id="image"></img>
      </div>
      <div className="image__container">
        <img src={'/images/UJJI.png'} id="image"></img>
      </div>
      <div className="image__container">
        <img src={'/images/DSV.png'} id="image"></img>
      </div>
      <div className="image__container">
        <img src={'/images/MyCivis.svg'} id="image"></img>
      </div>
      <div className="footer">
        {' '}
        <div className="footer-1">
          <strong>2022 | </strong>
        </div>
        <div className="footer-1">
          Made by Olga Pilawka | All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Ux
