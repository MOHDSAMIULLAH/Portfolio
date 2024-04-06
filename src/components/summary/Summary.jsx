import React from 'react'
import './summary.css'
import {BiCheck} from 'react-icons/bi'

const Summary = () => {
  return (
    <section id='summary'>
      <h5>What I learned</h5>
      <h2>Technical skills summary</h2>

      <div className="container summary__container">
        
        {/* ================ WEB DEVELOPMENT================== */}
        <article className="summary">
          <div className="summary__head">
            <h3>HTML</h3>
          </div>

          <ul className="summary__list">  
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Good understanding of the structure of an HTML document.</p>
            </li>
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Having the cocept of different types of tags, including headings, paragraphs, lists, links, images, and more.</p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>used semantic elements which include header, nav, main, section, article, and footer.</p>
            </li>
                        
          </ul>
        </article>
        {/* ================ WEB DEVELOPMENT================== */}

        <article className="summary">
          <div className="summary__head">
            <h3>CSS</h3>
          </div>

          <ul className="summary__list">
            <li>
              <BiCheck className='summary__list-icon' />
              <p>To apply styles effectively I have learned the syntax of CSS and Selectors.</p>
            </li>
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Comfortable in handling box model as well as Layouts. </p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Implemented media queries for Responsive Design along with transition and animation properties.</p>
            </li>
                        
          </ul>
        </article>
        {/* ================ WEB DEVELOPMENT================== */}

        <article className="summary">
          <div className="summary__head">
            <h3>JavaScript</h3>
          </div>

          <ul className="summary__list">
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Knowledge of Syntax, Control Flow, Functions, Objects, etc.</p>
            </li>
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>handled user interactions and other events in JavaScript.</p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Experience with asynchronous programming using promises, async/await, and callbacks.</p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Proficient in JavaScript programming with experience in developing web applications .</p>
            </li>
                        
          </ul>
        </article>

        <article className="summary">
          <div className="summary__head">
            <h3>React</h3>
          </div>

          <ul className="summary__list">
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Have knowledge of built-in hooks, like useState and useEffect, that allow you to add state and lifecycle methods to functional components.</p>
            </li>
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Posess understanding of a wide variety of build tools and libraries, including swiperjs, emailjs, and react-icons.</p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Knows to manage application state using either local state within a component or a centralized state management tool like Redux.</p>
            </li>
                    
          </ul>
        </article>
        
        {/* ===================== UI/UX ====================== */}
        <article className="summary">
          <div className="summary__head">
            <h3>Java</h3>
          </div>

          <ul className="summary__list">
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Good knowledge of OOPs concept like Abstraction, Encapsulation, Polymorphism, Inheritance.</p>
            </li>
            
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Good practical knowledge of Collections, Framework and Data Structure like List, Set, Map and Queue etc.</p>
            </li>  

            <li>
              <BiCheck className='summary__list-icon' />
              <p>Good in Exception handling and written custom exception..</p>
            </li>             
          </ul>
        </article>
        {/* ================ WEB DEVELOPMENT================== */}

        <article className="summary">
          <div className="summary__head">
            <h3>SQL</h3>
          </div>

          <ul className="summary__list">
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Good understanding of RDBMS concepts.</p>
            </li>
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Comfortable in writing SQL statements like DDL, DML, DQL etc.</p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Implemented Joins and subqueries.</p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Proficient in writing complex SQL queries for data retrieval and analysis.</p>
            </li>
                        
          </ul>
        </article>
        {/* ================ content creation================== */}


        
        

      </div>
    </section>
  )
}

export default Summary