import React, { useState, useRef, useEffect } from 'react'
import adobe from '../../assets/XD-icon.svg'
import figma from '../../assets/Figma-icon.svg'
import framer from '../../assets/Framer-icon.svg'
import adobephoto from '../../assets/Photoshop-icon.svg'
import adobeillustrator from '../../assets/Illustrator-icon.svg'
import affinitydesigner from '../../assets/AffinityDesigner-icon.svg'
import affinityphoto from '../../assets/AffinityPhoto-icon.svg'
import './technology.css'
import css from '../../assets/css.svg'
import html from '../../assets/html.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import vue from '../../assets/vuejs.svg'
import pm from '../../assets/PM.svg'
import dc from '../../assets/datacamp.svg'
import dl from '../../assets/dl.svg'
import el from '../../assets/elts.svg'
import bulb from '../../assets/bulb.svg'
import { useInView } from 'react-intersection-observer'
import {
  animate,
  AnimatePresence,
  motion,
  useAnimation,
} from 'framer-motion/dist/framer-motion'

function Technology() {
  const { ref, inView } = useInView()
  const [isInView, setIsInView] = useState(false)
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1,
          type: 'spring',
          stiffness: 50,
          delay: 0.5,
        },
      })
    }
    if (!inView) {
      animation.start({ x: '-100vw' })
    }
    console.log('use effect hook, inView=', inView)
  }, [inView])

  return (
    <div className="wrapper-icons">
      <div className="title-technology">Technology</div>
      <div className="Web">
        <h1 className="Web-title">Programming Languages</h1>
        <ul className="web-section">
          <li className="HTML">
            <img src={html} alt="html" id="html" />
            <p>HTML</p>
          </li>
          <li className="CSS">
            {' '}
            <img src={css} alt="css" id="css" />
            <p>CSS</p>
          </li>
          <li className="JavaScript">
            {' '}
            <img src={javascript} alt="javascript" id="javascript" />
            <p>JavaScript</p>
          </li>
          <li className="ReactJS">
            {' '}
            <img src={react} alt="react" id="react" />
            <p>ReactJS</p>
          </li>
          <li className="VueJS">
            {' '}
            <img src={vue} alt="vuejs" id="vue" />
            <p>VueJS</p>
          </li>
        </ul>
      </div>
      <div className="UX">
        <h1 className="UX-section">UX/UI tools</h1>
        <ul className="UX-technology">
          <li className="AdobeXD">
            <img src={adobe} alt="adobeXD" id="adobe-xd-icon" />
            <p>Adobe XD</p>
          </li>
          <li className="Figma-section">
            {' '}
            <img src={figma} alt="figma" id="figma-icon" />
            <p>Figma</p>
          </li>
          <li className="Framer-section">
            <img src={framer} alt="framer" id="framer-icon" />
            <p>Framer</p>
          </li>
          <li className="AdobePhoto-section">
            <img src={adobephoto} alt="adobe-photoshop" id="adobe-photoshop" />
            <p>Adobe Photoshop</p>
          </li>
          <li className="AdobeIllustrator-section">
            <img
              src={adobeillustrator}
              alt="adobe-illustrator"
              id="adobe-illustrator"
            />
            <p>Adobe Illustrator</p>
          </li>
          <li className="AffinityD-section">
            <img
              src={affinitydesigner}
              alt="affinity-designer"
              id="affinity-designer"
            />
            <p>Affinity Designer</p>
          </li>
          <li className="AffinityPhoto-section">
            <img src={affinityphoto} alt="affinity-photo" id="affinity-photo" />
            <p>Affinity Photo</p>
          </li>
        </ul>
      </div>
      <div className="Box2">
        <div className="number1">01/</div>
        <div className="description1">
          <p id="d1-1">
            Passionated about technology with the background of UX and Game
            Design nerd. Graduated in 2020 MSc in IT- Information Studies at
            Aalborg University. Most of the adult life I spent in Denmark,
            Copenhagen where I gained professional experience and education in
            Information Technology. Privately- an Artist and gamer. Since a very
            young age passionated about painting and art.
          </p>
          <p id="d1-2">
            I dedicate my free time to art and learning languages. Time is too
            valuable to not use it creative.
          </p>
          <div className="description2">
            <p id="d1-4">
              My professional background lies mainly within UX Design, however
              since beginning of my University journey I knew I want to be
              developer. For the last years I consequently improve and learn
              developement in order to fullfil my dreams. Surrounded almost all
              the time with engineers and developers I learned very valuable
              lessons. I worked with many Agile teams and thankfully of my
              experience I am able to look from development and UX perspective
              of solving a problem.
            </p>
          </div>
        </div>
      </div>
      <div className="animation__1" ref={ref}>
        <motion.div animate={animation} className="bulb__img">
          <img src={bulb} alt="bulb" id="bulb" />
        </motion.div>
      </div>
      <div className="Box2">
        <div className="number1">02/</div>
        <div className="description1">
          <p id="d1-1">
            Ardent about learning new things, I challenge myself with new
            threats. One of it, is the ability to learn new languages and not
            being affraid of practise and speaking. I speak english, danish,
            german and polish on the high level. I do not boundered myself only
            with technology and language knowledge. I also developed in the
            management direction and marketing for better communication and
            project management
          </p>
          <p id="d1-2">
            My goal is to valuable employee who is able to deploy the system at
            any level and be self-sufficent member of the team.
          </p>
          <div className="description2">
            <p id="d1-4">
              I love to spend a time actively learning and developing new
              skills. Constantly trying to search a new way to improve myself,
              however I am aware of the fact, that communication and good
              chemistry in the team is one of the most important things in the
              career. Therefore, it is extremely important to me to build a
              great relation with other employees. Vanity is to work for the
              solution, not compete who is right
            </p>
          </div>
        </div>
        <div className="certificates">
          <div>
            {' '}
            <div className="number1">03/</div>
            <div className="number1">Certificates</div>
          </div>

          <div className="certificate__1">
            <img src={pm}></img>
            <span>
              <strong>Agile Foundations </strong>| Project Management Institute
              | Jun 2022
            </span>
          </div>
          <div className="certificate__1">
            <img src={pm}></img>
            <span>
              <strong>Leadership Foundations </strong>| Project Management
              Institute | Nov 2021
            </span>
          </div>
          <div className="certificate__1">
            <img src={dc}></img>
            <span>
              <strong>R Programming </strong>| Data Camp | Dec 2019
            </span>
          </div>
          <div className="certificate__1">
            <img src={dl}></img>
            <span>
              <strong>Danish Language C1 </strong>| Ministry of Foreign Affairs
              of Denmark | May 2017
            </span>
          </div>
          <div className="certificate__1">
            <img src={el}></img>
            <span>
              <strong>English Language C1 </strong>| IELTS | Jun 2018
            </span>
          </div>
        </div>
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

export default Technology
