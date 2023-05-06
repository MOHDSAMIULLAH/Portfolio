import './project.css'
import notes from '../../assets/notes-app.jpeg'
import movieapp from '../../assets/movieapp.jpeg'
import textUtils from '../../assets/textUtils.jpeg'
import ecommerce from '../../assets/e-commerce.jpeg'

const Project = () => {

  return (
    <section id='project'>
      <h5>My recent work</h5>
      <h2>Project</h2>

      <div className="container project__container">

        {/* **************************  iNotebook App      ************************** */}


        {/* <article className="project__item">
          <div className="project__item-image">
            <img src={notes} alt="Notes App" />
          </div>
          <h3>iNotebook App</h3>

          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/iNotebook" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article> */}

        {/* **************************   News App      ************************** */}


        {/* <article className="project__item">
          <div className="project__item-image">
            <img src={newsapp} alt="Notes App" />
          </div>
          <h3>News App</h3>

          <div className="project__item-cta">
            <a href="https://github.com/ZeenatFirdosh/newsapp" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article> */}


        {/* **************************   TextUtils Clone      ************************** */}

        <article className="project__item">
          <div className="project__item-image">
            <img src={textUtils} alt="Notes App" />
          </div>
          <h3>TextUtils App</h3>

          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/TextUtils" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://textutils-web-app.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>


        {/* **************************   YouTube Clone      ************************** */}
        {/* <article className="project__item">
          <div className="project__item-image">
            <img src={notes} alt="Notes App" />
          </div>
          <h3>YouTube Clone</h3>

          <div className="project__item-cta">
            <a href="https://github.com/ZeenatFirdosh" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article> */}


        {/* **************************   E-Commerce Website      ************************** */}
        <article className="project__item">
          <div className="project__item-image">
            <img src={ecommerce} alt="Notes App" />
          </div>
          <h3>E-Commerce Website </h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/E-Commerce-Main" className='btn' target="_blank" rel="noreferrer">Github</a>

             <a href="https://e-commerce-web-main.netlify.app/"  className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        
        {/* **************************   Movie Search App     ************************** */}
        <article className="project__item">
          <div className="project__item-image">
            <img src={movieapp} alt="Notes App" />
          </div>
          <h3>Movie Search App</h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/Movie-Search-App" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://movie-web-search-app.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Project