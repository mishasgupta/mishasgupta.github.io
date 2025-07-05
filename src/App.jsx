import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Work from './sections/Work'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <>
      <Navbar 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        workRef={workRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  )
}

export default App
