import React from 'react'
import background from '../../assets/background.jpg'
import CTA from './CTA'
import './home.css'
import './header.css'
import HeaderSocial from './HeaderSocials'
import '../footer/footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="mask">
            <img src={background} alt="" className="intro" />
        </div>
        <div className="content">
            <h5>Hello I'm</h5>
            <h1>Mohd Samiullah</h1>
            <h5 >Fullstack Web Developer</h5>
            <CTA />
        {/* <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohd-samiullah-587790207/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/MOHDSAMIULLAH" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div> */}
        </div>
        <HeaderSocial />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Home