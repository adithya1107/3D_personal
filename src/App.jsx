import React from 'react'
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
