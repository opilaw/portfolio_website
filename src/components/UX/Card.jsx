import React from 'react'
import './portfolio.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export function Card(props) {
  return (
    <div className="card">
      <Link to={props.linkUrl} class="link-btn">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>

        <button className="card__btn">View projects</button>
      </Link>
    </div>
  )
}
