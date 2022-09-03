import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className="container">
      <div className="text-container">
        <text id="name">Olga Paulina Pilawka</text>
        <text id="info">
          <strong>Linkedin: </strong>
          <span>https://www.linkedin.com/in/olga-paulina-pilawka/</span>
        </text>
        <text id="info">
          <strong>Mobile:</strong> +49 151 41279815
        </text>
        <text id="info">
          <strong>Email:</strong> olga.pilawka@gmail.com
        </text>
      </div>
      <div className="wrapper-image-contact">
        <img
          src={process.env.PUBLIC_URL + '/images/message.svg'}
          alt="message"
          id="message"
        />
        ;
      </div>
    </div>
  )
}

export default Contact
