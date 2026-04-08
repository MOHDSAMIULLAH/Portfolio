import React from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import AIEngineering from './components/ai/AIEngineering'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Education from './components/education/Education'
import Training from './components/training/Training'
import Achievements from './components/achievements/Achievements'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Nav />
      <About />
      <Achievements />
      <Skills />
      <AIEngineering />
      <Project />
      <Training />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
