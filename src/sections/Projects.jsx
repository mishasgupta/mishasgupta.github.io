import { forwardRef } from 'react'
import musiciansmentor from '../assets/images/musiciansmentor.png'
import odyssey from '../assets/images/odyssey.jpg'
import aichef from '../assets/images/aichef.jpg'
import portfolio from '../assets/images/portfolio.png'
import webserver from '../assets/images/webserver.png'
import makefile from '../assets/images/makefile.png'
import redis from '../assets/images/redis.png'
import ProjectCard from '../components/ProjectCard'


const Projects = forwardRef((props, ref) => {

  const projects = [
    { 
      name: "Redis Clone in C++", 
      desc: "A Redis-like in-memory key-value database built from scratch in C/C++", 
      img: redis,
      link: "https://github.com/mg224",
      technologies: ["C", "C++", "Sockets API"]
    },
    
    { 
      name: "mymake", 
      desc: "A utility which performs a subset of GNU make’s functionality, written in C++.", 
      img: makefile,
      link: "https://github.com/mg224",
      technologies: ["C++"]
    },

    { 
      name: "HTTP/1.0 Web Server in C", 
      desc: "A simplified HTTP/1.0 web server that handles TCP sockets, request parsing, and static file serving.", 
      img: webserver,
      link: "https://github.com/mg224",
      technologies: ["C", "Sockets API"]
    },
    
    { 
      name: "Musician's Mentor", 
      desc: "The first online platform built for connecting student musicians for affordable, peer-to-peer music lessons.", 
      img: musiciansmentor,
      link: "https://github.com/mg224/Musicians-Mentor-v2",
      technologies: ["Django", "React.js", "PostgreSQL"]
    },

    { 
      name: "ByteToBite", 
      desc: "An AI sous chef that helps generate recipes using whatever ingredients you have in your pantry!", 
      img: aichef,
      link: "https://github.com/mg224/ByteToBite",
      technologies: ["React.js", "Express.js", "Google Gemini API"]
    },

    { 
      name: "Personal Portfolio", 
      desc: "My personal portfolio website! Built with React, Vite, and Tailwind CSS.", 
      img: portfolio,
      link: "",
      technologies: ["JavaScript", "React", "Tailwind CSS"]
    },
];

  return (
    <div ref={ref} className="py-15 md:py-25 text-white flex flex-col justify-center items-center">
      <h3 className="text-3xl md:text-4xl font-semibold">Projects</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mt-10 w-3/4 px-8 lg:px-2 py-12">
        {projects.map((project, index) => 
          (
            <ProjectCard 
              key={index}
              name={project.name}
              desc={project.desc}
              img={project.img}
              link={project.link}
              technologies={project.technologies}
            />
          )
        )}
      </div>
    </div>
  )
})

export default Projects