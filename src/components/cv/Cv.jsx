import { useInView } from 'react-intersection-observer'
import {
  animate,
  AnimatePresence,
  motion,
  useAnimation,
} from 'framer-motion/dist/framer-motion'
import React, { useState, useRef, useEffect } from 'react'
import './cv.css'

function Cv() {
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
          delay: 0.2,
        },
      })
    }
    if (!inView) {
      animation.start({ x: '-100vw' })
    }
    console.log('use effect hook, inView=', inView)
  }, [inView])
  return (
    <div className="cv-wrapper">
      <div className="professional__summary">
        <span>WEB DEVELOPER</span>
        <div className="professional__summary__content">
          <div className="center__content">
            <span>Professional Summary</span>
            Exceptional developer with almost 3 years of successfull career in
            IT. Skilled UX Designer and Junior Web Developer with exceptional
            level of expertise in Front-end development including: HTML, CSS,
            JavaScript, React.js, Vue.js and various libraries of frameworks.
            History of bulding and designing various systems in various
            industries. Positive and energetic extravert who loves working in
            cross-functional teams of designers and developers and take new
            difficult challenges which extends knowledge and comfort zone.
          </div>
          <div className="list__content">
            <span>Skills</span>
            <ul>
              <li>Web Development</li>
              <li>UX/UI Design</li>
              <li>Gamification</li>
              <li>HTML, CSS, Java Script</li>
              <li>React.js, Vue.js</li>
              <li>Progressive Web Application</li>
              <li>Interface and Software Development</li>
              <li>Creative Thinking</li>
              <li>Problem solving</li>
              <li>Leadership</li>
              <li>Self motivation</li>
              <li>Team player</li>
              <li>Project Management | Agile</li>
            </ul>
          </div>
        </div>
        <div className="professional__summary__img"></div>
      </div>
      <div className="professional__experience">
        <motion.div
          className="web__development"
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <span> Web Development Professional Experience</span>
          <div className="vke-web">
            <h1>
              Von Keler Engineering | Web Developer/ UX Designer | March 2022 -
              present
            </h1>
            <ul>
              <li>
                Designed and Co-developed Profile Data Bank System for sharing
                employees' professional profiles across diffrent companies.
                Application was coded primarly with Vue.js framework on the
                front-end side. System successfully sold to other companies.
              </li>
              <li>
                Designed and Developed Governance, Risk and Compliance
                commercial website for financial sector client, which
                successfully lead to another projects like Data Profile bank and
                Mobile Learning Application. The website was coded only with
                HTML, CSS and Java Script and fulllfil all of the performance
                requirements.
              </li>
              <li>
                Designed and co-developed Maze Game, which was coded with
                Svelte.js framework and Babylon.js GUI system. The project is
                still under development
              </li>
            </ul>
          </div>
          <div className="line"></div>
        </motion.div>
        <div className="web__development">
          <span> UX Design Professional Experience</span>

          <div className="vke-web">
            <h1>Von Keler Engineering | UX Designer | July 2021 - present </h1>
            <ul>
              <li>
                Designed successful mobile application and dashboard electronic
                civil document system for German and Italian Government and for
                their citizines- "My Civis"
              </li>
              <li>
                Designed efficent and well-deployed series of internal
                companies' administrative systems, which handle employess and
                managerial tasks, project management and administration.
              </li>
              <li>
                Successfuly delivered various commercial web-design, which boost
                the conversion level of the company and built the awarness of
                the product through new contracts with the clients
              </li>
            </ul>
          </div>

          <div className="vke-web">
            <h1>M Developers | UX Designer | Jan 2021 - May 2022 </h1>
            <ul>
              <li>
                Designed successful game and learning mobile application, which
                MVP helped to get various investors and supporters like Oxford
                University and get awards for the most trusted start-up concepts
                in UK.
              </li>
            </ul>
            <div className="vke-web">
              <h1>Aalborg University | UX Designer | Sept 2018 - Jan 2021 </h1>
              <ul>
                <li>
                  Designed a grade and administrative system for almost 8.000
                  teachers and 330.000 learners in Cape Town Area (almost 700
                  schools) bringing fully interactive and user-friendly product
                  supported by South African government. The aftermath of the
                  project success was scientific publication and conference and
                  speech on scientififc conference in UK.
                </li>
                <li>
                  Designed and deployed Cyber Security Learning platform, which
                  contributes to the the topic of the Master Thesis and many
                  Scientific Publications and Conferences, The System was a
                  collaboration with Electronic Departments and IBM company
                  worth 1.5 mln DKK,
                </li>
              </ul>
            </div>
          </div>
          <div className="line2"></div>
          <div className="web__development">
            <span> Education</span>
            <div className="education__anim" ref={ref}>
              <motion.div className="vke-web" animate={animation}>
                {' '}
                <h1>
                  Aalborg University | MSc in IT | Information Studies | Sept
                  2018 - Jul 2020{' '}
                </h1>
                <h2>
                  Choosen as a one of the top students to participate in
                  different projects at the University, scientific publications
                  and conferences. With the average of 10.6/12 in a Danish
                  Grading System (euquivalent to the grade A in US Grade System)
                </h2>
                <ul>
                  <li>
                    As a one of the top students, choosen to co-design the first
                    Danish Pamphlet System for National Library of Denmark
                    (Kongelige Bibliothek) and Copenhagen University, which
                    leads to be the co-author of the scientific publication and
                    speech at the conference
                  </li>
                  <li>
                    Taking part of designing governmental learning
                    administratitive system in Cape Town area in South Africa
                  </li>
                  <li>
                    Successful Master Thesis about Cyber Security Learning
                    System and Gamification, which leads to many quotation in
                    other scientiific papers along with contribution to the
                    personal research papers.
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="vke-web">
              {' '}
              <h1>
                Copenhagen School of Design and Technology- KEA | BS- Bachelor
                of Science | Digital Concept Development | Sept 2014 - Jun 2018{' '}
              </h1>
              <h2>Top of the students on the year</h2>
              <ul>
                <li>
                  Winning a competition for the best website design and
                  marketing for Camp Adventure
                </li>
                <li>
                  Winning the competition for the best Mobile Application for
                  Danske Bank
                </li>
              </ul>
            </div>
            <div className="vke-web">
              {' '}
              <h1>
                Czestochowa University | BA- Bachelor of Arts | Administrative
                Law | Oct 2010- Jun 2013{' '}
              </h1>
              <ul>
                <li>
                  Winning the contest of the best student of the year 2011-2013
                  getting 1st place scholarship for the scientific achievement
                  and best grades achievements
                </li>
                <li>
                  Winning the contest of one of the best students in the country
                  and prize from Ministry of Education
                </li>
                <li>
                  Research paper: Judgment of Administration Court Chief | 14
                  september 2012,sygn. act I OSK 297/11
                </li>
                <li>
                  Research paper: Internet as a Tool of Democracy System| ISSN
                  1898-9233
                </li>
                <li>
                  Research paper: Student's huts in Beskidy as a phenomenom of
                  youth's and tourist's culture
                </li>
                <li>
                  The Economicial, Law and Sociable Aspects to Get the Space of
                  the Universe by Human | Pragmata Tes Oikonomias, 2011, z. 5,
                </li>
              </ul>
            </div>
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

export default Cv
