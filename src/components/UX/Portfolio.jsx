import React from 'react'
import { Card } from './Card.jsx'
import './portfolio.css'
import mini from '../../assets/mini.svg'
import pen from '../../assets/pen.svg'

function Ux() {
  return (
    <div className="ux">
      <div className="wrapper">
        <Card
          img={mini}
          title="Web development"
          description="Mix of different web development projects from personal to professional, which are simultaneously the most relevant to me"
          linkUrl="/webportfolio"
        />

        <Card
          img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="UX Design"
          description="UX professional projects, for various clients and goals"
          linkUrl="/ux"
        />
        <Card
          img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          title="Art"
          description="My own art, which are different techniques paintings and drawings"
          linkUrl="/"
        />
        <div className="portfolio__img">
          <img src={pen} id="pen"></img>
        </div>
      </div>
    </div>
  )
}

export default Ux
