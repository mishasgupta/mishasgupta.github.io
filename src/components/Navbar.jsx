import { useState } from 'react'
import linkedin from '../assets/logos/linkedin.jpg'
import github from '../assets/logos/github.png'
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ( { homeRef, aboutRef, workRef, projectsRef, contactRef } ) => {

  const [isOpen, setOpen] = useState(false)

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  }

  const scrollToSection = (elementRef) => {
    const navbarHeight = 70
    window.scrollTo({
      top: elementRef.current.offsetTop - navbarHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex justify-between items-center text-white sticky top-0 z-50 bg-linear-to-r from-green-900 to-gray-900 animate-fade animate-duration-2000 animate-delay-150 p-8 shadow-xl">
      <div className="text-3xl font-mono">Misha</div>

      <div className="hidden md:flex space-x-6 text-lg">
        <button 
          onClick={() => scrollToSection(homeRef)}
          className="group transition duration-300 relative overflow-hidden animate-fade-down animate-duration-1000 animate-delay-500 cursor-pointer"
        >
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
        </button>
        <button 
          onClick={() => scrollToSection(aboutRef)}
          className="group transition duration-300 relative overflow-hidden animate-fade-down animate-duration-1000 animate-delay-500 cursor-pointer"
        >
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
        </button>
        <button 
          onClick={() => scrollToSection(workRef)}
          className="group transition duration-300 relative overflow-hidden animate-fade-down animate-duration-1000 animate-delay-500 cursor-pointer"
        >
          Experience
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
        </button>
        <button 
          onClick={() => scrollToSection(projectsRef)}
          className="group transition duration-300 relative overflow-hidden animate-fade-down animate-duration-1000 animate-delay-500 cursor-pointer"
        >
          Projects
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
        </button>
        <button 
          onClick={() => scrollToSection(contactRef)}
          className="group transition duration-300 relative overflow-hidden animate-fade-down animate-duration-1000 animate-delay-500 cursor-pointer"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
        </button>
      </div>

      <div className="hidden md:flex space-x-4">
        <a href="https://github.com/mg224" target="_blank">
          <img 
            src={github}
            alt="github"
            className="w-8 h-8 hover:scale-110 transition duration-300"
          />
        </a>
        <a href="https://www.linkedin.com/in/mishasgupta/" target="_blank">
          <img 
            src={linkedin}
            alt="linkedin"
            className="w-8 h-8 hover:scale-110 transition duration-300"
          />
        </a>
      </div>

      <div className="md:hidden z-50">
        <Hamburger 
          toggled={isOpen} 
          toggle={setOpen} 
          size={24}
        />
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ duration: 0.4 }}
            className="z-20 pt-12 pb-28 absolute top-full right-0 h-screen w-full flex flex-col gap-7 text-md bg-linear-to-r from-green-900 to-gray-900"
          >
            <div className='flex flex-col space-y-6 text-lg'>
              <button 
                onClick={() => {
                  scrollToSection(homeRef)
                  setOpen(false)
                }}
                className="hover:scale-110 transition duration-300 cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToSection(aboutRef)
                  setOpen(false)
                }}
                className="hover:scale-110 transition duration-300 cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection(workRef)
                  setOpen(false)
                }}
                className="hover:scale-110 transition duration-300 cursor-pointer"
              >
                Work
              </button>
              <button 
                onClick={() => {
                  scrollToSection(projectsRef)
                  setOpen(false)
                }}
                className="hover:scale-110 transition duration-300 cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  scrollToSection(contactRef)
                  setOpen(false)
                }}
                className="hover:scale-110 transition duration-300 cursor-pointer"
              >
                Contact
              </button>
            </div>
            <div className='flex flex-col items-center justify-center space-y-6'>
              <a href="https://linkedin.com/in/mishasgupta" target="_blank" className="hover:scale-110 transition duration-300 ease-in-out w-24 h-6 rounded-md flex items-center justify-center text-white">
                <img src={linkedin} alt="linkedin" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
                <p className="transition duration-300 ml-2">Linkedin</p>
              </a>
              <a href="https://github.com/mg224" target="_blank" className="hover:scale-110 transition duration-300 ease-in-out w-24 h-6 rounded-md flex items-center justify-center text-white">
                <img src={github} alt="github" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
                <p className="transition duration-300 ml-2">Github</p>
              </a>
            </div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </div>
  )
}

export default Navbar
