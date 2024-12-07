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
              <p>Knows to manage application state using centralized state management tool like Redux.</p>
            </li>
                    
          </ul>
        </article>
        
        {/* ===================== UI/UX ====================== */}
        <article className="summary">
          <div className="summary__head">
            <h3>NextJs</h3>
          </div>

          <ul className="summary__list">
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Strong understanding of Next.js framework, including its file-based routing system and API routes.</p>
            </li>
            
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Experience in building server-rendered React applications using Next.js.
              </p>
            </li>  

            <li>
              <BiCheck className='summary__list-icon' />
              <p>Familiar with implementing dynamic routing and pre-fetching data for faster navigation.
              </p>
            </li>             
          </ul>
        </article>
 
        {/* ================ WEB DEVELOPMENT================== */}
        <article className="summary">
          <div className="summary__head">
            <h3>Node</h3>
          </div>

          <ul className="summary__list">  
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Proficient in building server-side applications using Node.js with an understanding of its event-driven and non-blocking architecture.</p>
            </li>
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Familiar with creating RESTful APIs and managing request/response cycles.
              </p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Knowledge of middleware integration using frameworks like Express.js.
              </p>
            </li>
                        
          </ul>
        </article>
        {/* ================ WEB DEVELOPMENT================== */}

        <article className="summary">
          <div className="summary__head">
            <h3>MongoDB</h3>
          </div>

          <ul className="summary__list">
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Strong understanding of MongoDB as a NoSQL database, including its document-based structure.</p>
            </li>
            
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Proficient in designing schemas and collections with embedded and referenced data models.
              </p>
            </li>
            <li>
              <BiCheck className='summary__list-icon' />
              <p>Experience with CRUD operations (Create, Read, Update, Delete) using MongoDB queries.
              </p>
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

      </div>
    </section>
  )
}

export default Summary