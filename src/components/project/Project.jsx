import './project.css'
import MovieMate from '../../assets/MovieMate.PNG'
import iNotebook from '../../assets/iNotebook.PNG'
import food from '../../assets/food.png'
import food_ordering from '../../assets/food_ordering.png'
import ecom from '../../assets/ecommerce.png'
import homerental from '../../assets/homerental.png'
import social from '../../assets/social media.png'
import Text_Transform_App from '../../assets/Text_Transform_App.PNG'

const Project = () => {

  return (
    <section id='project'>
      <h5>My recent work</h5>
      <h2>Project</h2>

      <div className="container project__container">

        {/* **************************   Food Delivery Application      ************************** */}

        <article className="project__item">
          <div className="project__item-image">
            <img src={food_ordering} alt="Notes App" />
          </div>
          <h3>Food Ordering App</h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/food-ordering-app-NEXT" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://food-ordering-next.vercel.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

    
        {/* **************************   MERN E-Commerce Website      ************************** */}

        <article className="project__item">
          <div className="project__item-image">
            <img src={ecom} alt="Notes App" />
          </div>
          <h3>MERN E-Commerce Website</h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/MERN-E-Commerce-Website" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://ecommerce-mern-code-2.vercel.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
    
        {/* **************************   Home Rental Application      ************************** */}

        <article className="project__item">
          <div className="project__item-image">
            <img src={homerental} alt="Notes App" />
          </div>
          <h3>Home Rental Application</h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/Home_Rental_Application_Frontend" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://my-dreamhouse.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        {/* **************************   Social Media App      ************************** */}

        <article className="project__item">
          <div className="project__item-image">
            <img src={social} alt="Notes App" />
          </div>
          <h3>Social Media App</h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/Social-Media-App" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://social-media-app-eight-green.vercel.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

    
        {/* **************************   iNotebook      ************************** */}

        <article className="project__item">
          <div className="project__item-image">
            <img src={iNotebook} alt="Notes App" />
          </div>
          <h3>iNotebook</h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/iNotebook" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://inotebook-main.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

      
        {/* **************************   MovieMate App     ************************** */}
        <article className="project__item">
          <div className="project__item-image">
            <img src={MovieMate} alt="Notes App" />
          </div>
          <h3>MovieMate</h3>


          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/MovieMate" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://moviemate-main.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>

        {/* **************************   Text_Transform_App      ************************** */}

        <article className="project__item">
          <div className="project__item-image">
            <img src={Text_Transform_App} alt="Notes App" />
          </div>
          <h3>Text Format App</h3>

          <div className="project__item-cta">
            <a href="https://github.com/MOHDSAMIULLAH/Text-Format-App" className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href="https://text-format-app.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Project