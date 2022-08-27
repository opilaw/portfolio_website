import React from 'react'
import './contact.css'
import message from '../../assets/message.svg'

function Contact() {
  return (
    <div className="container">
      <div className="text-container">
        <text id="name">Olga Paulina Pilawka</text>
        <text id="info">
          <strong>Linkedin: </strong>
          https://www.linkedin.com/in/olga-paulina-pilawka/
        </text>
        <text id="info">
          <strong>Mobile:</strong> +49 151 41279815
        </text>
        <text id="info">
          <strong>Email:</strong> olga.pilawka@gmail.com
        </text>
      </div>
      <div className="wrapper-image-contact">
        <img src={message} alt="message" id="message" />
      </div>
    </div>
  )
}

export default Contact
