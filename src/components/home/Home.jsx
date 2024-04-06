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
            <h1><span className='name'>Mohd </span> <span className='name'> Samiullah </span></h1>
            <h5 >Fullstack Web Developer</h5>
            <CTA />
        
        <HeaderSocial />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Home