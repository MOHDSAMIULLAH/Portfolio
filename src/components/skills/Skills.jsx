// skills
import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Technical Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Hard Skills</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>skillsd</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediade</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>skillsd</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediade</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediade</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>DBMS</h4>
                <small className='text-light'>Intermediade</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediade</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Intermediade</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Intermediade</small>
              </div>
            </article>

          </div>
        </div>
      {/* ========================== Backend ================================= */}

        <div className="skills__backend">
        <h3>Soft Skills</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Analytical Skills</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Problem-solving</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Teamwork</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Patience</h4>
                {/* <small className='text-light'>Intermediade</small> */}
              </div>
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Flexibility</h4>
                {/* <small className='text-light'>Intermediade</small> */}
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Self-motivation</h4>
                {/* <small className='text-light'>Intermediade</small> */}
              </div>
            </article>
            
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>Accountability</h4>
                {/* <small className='text-light'>Intermediade</small> */}
              </div>
            </article>


            

          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills