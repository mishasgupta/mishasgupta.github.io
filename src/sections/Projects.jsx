import React, { forwardRef } from 'react'
import eagleexchange from '../assets/images/eagleexchange.jpeg'
import apidaa from '../assets/images/apidaa.png'
import aichef from '../assets/images/aichef.jpg'
import portfolio from '../assets/images/portfolio.png'
import ProjectCard from '../components/ProjectCard'


const Projects = forwardRef((props, ref) => {

  const projects = [
    { 
      name: "Eagle Exchange", 
      desc: "The first online platform built for freelancing and reselling exclusively within the Emory community.", 
      img: eagleexchange,
      link: "https://github.com/gilstero/EmoryExchange",
      technologies: ["Python", "Django", "React"]
    },

    { 
      name: "APIDAA Alumni", 
      desc: "An interactive directory built to facilitate networking between Emory APIDAA members and alumni.", 
      img: apidaa,
      link: "https://github.com/mg224/apidaaalumnibackend",
      technologies: ["Spring Boot", "React", "PostgreSQL"]
    },

    { 
      name: "AI Chef", 
      desc: "An AI sous chef that helps generate recipes using whatever ingredients you have in your pantry!", 
      img: aichef,
      link: "https://github.com/mg224/ai-chef",
      technologies: ["JavaScript", "React", "HuggingFace"]
    },

    { 
      name: "Personal Portfolio", 
      desc: "My personal portfolio website! Built with React, Vite, Tailwind CSS, and Framer Motion.", 
      img: portfolio,
      link: "",
      technologies: ["JavaScript", "React", "Tailwind CSS"]
    },
];

  return (
    <div ref={ref} className="py-15 md:py-25 text-white flex flex-col justify-center items-center">
      <h3 className="text-3xl md:text-4xl font-semibold">Portfolio</h3>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mt-10 h-full w-3/4 px-8 md:px-20 lg:px-2 py-12 md:py-12 lg:py-12">
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