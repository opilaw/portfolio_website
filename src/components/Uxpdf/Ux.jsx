import React from 'react'
import './ux.css'
import defatt from '../../assets/Deffatt.svg'
import danske from '../../assets/DanskeBank.png'
import ujji from '../../assets/UJJI.png'
import dsv from '../../assets/DSV.png'
import cgi from '../../assets/MyCivis.svg'

function Ux() {
  return (
    <div className="wrapper-ux">
      <div className="image__container">
        <img src={defatt} id="image"></img>
      </div>
      <div className="image__container">
        <img src={danske} id="image"></img>
      </div>
      <div className="image__container">
        <img src={ujji} id="image"></img>
      </div>
      <div className="image__container">
        <img src={dsv} id="image"></img>
      </div>
      <div className="image__container">
        <img src={cgi} id="image"></img>
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
