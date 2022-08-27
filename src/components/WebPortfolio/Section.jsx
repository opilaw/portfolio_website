import React from 'react'
import './webportfolio.css'

function Section(props) {
  return (
    <div className="wrapper-section">
      <div className="parent-wrapper">
        <img src={props.img} class="section__image" />
        <div className="section-text">
          <div className="title">{props.title}</div>

          <div className="project-content">{props.content}</div>
        </div>
      </div>

      <div className="image-section">
        <img src={props.img1} class="section__image-1" />
        <img src={props.img2} class="section__image-2" />
        <img src={props.img3} class="section__image-3" />
      </div>
    </div>
  )
}

export default Section
