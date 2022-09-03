import React from 'react'
import { Card } from './Card.jsx'
import './portfolio.css'
import mini from '../../assets/mini.svg'
import pen from '../../assets/pen.svg'
import miniweb from '../../assets/Mini-web.svg'
import skull from '../../assets/skull.jpg'

function Ux() {
  return (
    <div className="ux">
      <div className="wrapper">
        <Card
          img={miniweb}
          title="Web development"
          description="Mix of different web development projects from personal to professional, which are simultaneously the most relevant to me"
          linkUrl="/webportfolio"
        />

        <Card
          img={mini}
          title="UX Design"
          description="UX professional projects, for various clients and goals"
          linkUrl="/ux"
        />
        <Card
          img={skull}
          description="My own art, which are different techniques paintings and drawings"
          linkUrl="/art"
        />
        <div className="portfolio__img">
          <img src={pen} id="pen"></img>
        </div>
      </div>
    </div>
  )
}

export default Ux
