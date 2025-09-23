import React from 'react'
import Header from '../../layout/Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Project/Project'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default Home