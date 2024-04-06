import React from 'react'
import './training.css'
import pw from '../../assets/pw.jpg'
import pentagonspace from '../../assets/pentagonspace.webp'
import ibm from '../../assets/ibm.png'
import plax from '../../assets/Plaxonic_Technologies.png'
import {FaHandPointRight} from 'react-icons/fa'
// import '../training/training.css'

const Training = () => {
  return (
    <section id='Training'>
      <h5>Experience</h5>
      <h2>Training and Certificate</h2>

      

      <div className="container trainings__container">

      <div className="training">
          <div className="client__avatar">
               <img src={plax} alt="" />
              </div>
              <h5 className="client__name">Plaxonic Technologies | Software Developer </h5>
                <small className="client__review">
                <ul className='training__list'>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p> Full-stack Web Development Internship.  </p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Data Structure and Algorithms and problem-solving skills</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Technical Stack- HTML, CSS, Javascript, React, Redux & Tailwind CSS</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Working and getting hands-on experience in real-time projects</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Communication Skills</p>
                    </li>
                    
                  
                 
                </ul>
                </small>
            </div>
            
          <div className="training">
              <div className="client__avatar">
               <img src={pw} alt="" className='pw'/>
              </div>

              <h5 className="client__name"> PW Skills         | Full Stack Web         Development | Boot Camp Training</h5>
                <small className="client__review">
                  <ul className='training__list'>
                  <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Full-stack Web Development Training for 6 months </p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Data Structure and Algorithms and problem-solving skills</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Technical Stack- JAVA, HTML, CSS, Javascript</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Working and getting hands-on experience in real-time projects</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Communication Skills</p>
                    </li>
                  </ul>
                </small>
          </div>

          
          
            <div className="training">
              <div className="client__avatar">
               <img src={ibm} alt="" />
              </div>
              
              <h5 className="client__name"> IBM | IBM Data Analytics | Innovation Camp</h5>
                <small className="client__review">
                  <ul className='training__list'>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Innovation Camp is a project-based learning program</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Technical Stack: Python, Machine Learning, Deep Learning , Tensorﬂow, Matplotlib, Numpy </p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Working and getting hands-on experience in real-time projects</p>
                    </li>
                    <li>
                    <FaHandPointRight className='training__list-icon' />
                    <p>Project: Potato Disease Classiﬁcation using Deep Learning</p>
                    </li>                  
                    
                  </ul>
                    
                </small>
          </div>

      </div>
    </section>
  )
}

export default Training




      