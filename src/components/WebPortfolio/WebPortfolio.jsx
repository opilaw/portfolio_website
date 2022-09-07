import React from 'react'
import './webportfolio.css'
import Section from './Section.jsx'
import app from '../../assets/app.jpg'

function WebPortfolio() {
  return (
    <div className="wrapper-web">
      <div className="project-profile__data__bank">
        <Section
          title="Profile Data Bank System | Vue.js"
          content="Profile Data Bank System is an administrative web application created for Von Keler Engineering. Co-developed with other developer mainly in the Vue.js framework, CSS and HTML. I was responsible for the front-end part of the application. Moreover I fully designed this system by myself. The system handles profile and resume sharing of the employees between the companies, which would like to lent the employee. The primary user of this application are employees on the managerial level, however employees can access to their own personalised dashboard to see with which company their profile was shared with"
          img={'/images/profile1.png'}
          img1={'/images/profile2.png'}
          img2={'/images/profile3.png'}
          img3={'/images/profile4.png'}
        />
      </div>
      <div className="project-weather">
        <Section
          title="Weather Progressive Web Application | React.js"
          content="The Weather App was build in order to exercise the WPA with React.js and Firebase. It is personal project, which is developed fully by me in the free-time. It does not have commercial purposes and it is treated as a skeleton for the functionality exercises, where I can grow further my idea. The app is in a constant develepment, where I code and test my design "
          img={'/images/weather1.png'}
          img1={'/images/weather2.png'}
          img2={'/images/weather3.png'}
          img3={'/images/weather4.png'}
        />
      </div>
      <div className="project-portfolio">
        <Section
          title="Personal Website | React.js"
          content="The website, which you currently visiting is fully designed and developed by me with the help of React.js and Framer Motion. Website is my personal book, where I keep all of my projects. The code is different as the app developed, since I am learning everyday the new things. In this project I was trying to use as much techniques as my knowledge allowed in React.js and minimum of CSS"
          img={'/images/port.png'}
          img1={'/images/port2.png'}
          img2={'/images/port3.png'}
          img3={'/images/port4.png'}
        />
      </div>
      <div className="project-maze">
        <Section
          title="Maze Web Game | Svelte.js, Babylon.js"
          content="The game is still in the development stage, however it is a game which was developed for the fully fun and personal purpose with my developers collegues from work. The application was made in Svelte.js and Babylon.js in order to create fully functional 3D models and keep the gamify functionaliy"
          img={'/images/maze1.png'}
          img1={'/images/maze2.png'}
          img2={'/images/maze3.png'}
          img3={'/images/maze4.png'}
        />
      </div>
      <div className="project-grc">
        <Section
          title="Governance, Risk and Compliance commercial website | Java Script, CSS"
          content="The website was my first professional task at work for the client from the financial industry. I was the only developer who coded and design fully the product. The client wanted a website to be developed only with HTML, CSS and very minimal use of Java Script. Thanks to this project I became a full member of the developers team for Profile Bank System"
          img={'/images/grc1.png'}
          img1={'/images/grc2.png'}
          img2={'/images/grc3.png'}
          img3={'/images/grc4.png'}
        />
      </div>
      <div className="project-gitlab"></div>
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

export default WebPortfolio
