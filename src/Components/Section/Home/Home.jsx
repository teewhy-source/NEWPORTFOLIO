import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../layout/Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import './Home.scss'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>EDIDI TAIYE - Portfolio | Frontend Developer</title>
        <meta name="description" content="Personal portfolio of EDIDI TAIYE, a skilled frontend developer specializing in React, TypeScript, and modern web technologies." />
        <meta name="keywords" content="frontend developer, react developer, portfolio, web development, javascript, typescript" />
        <meta property="og:title" content="EDIDI TAIYE - Portfolio" />
        <meta property="og:description" content="Frontend Developer crafting beautiful digital experiences" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EDIDI TAIYE - Portfolio" />
        <meta name="twitter:description" content="Frontend Developer specializing in React and modern web technologies" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default Home