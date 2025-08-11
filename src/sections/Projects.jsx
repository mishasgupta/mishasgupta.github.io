import { forwardRef } from 'react'
import musiciansmentor from '../assets/images/musiciansmentor.png'
import odyssey from '../assets/images/odyssey.jpg'
import aichef from '../assets/images/aichef.jpg'
import portfolio from '../assets/images/portfolio.png'
import ProjectCard from '../components/ProjectCard'


const Projects = forwardRef((props, ref) => {

  const projects = [
    { 
      name: "Musician's Mentor", 
      desc: "The first online platform built for connecting student musicians for affordable, peer-to-peer music lessons (Currently in testing).", 
      img: musiciansmentor,
      link: "https://github.com/mg224/Musicians-Mentor-v2",
      technologies: ["Django", "React", "Supabase"]
    },

    { 
      name: "Odyssey Family Counseling", 
      desc: "An employee HR management platform for Odyssey Family Counseling presented by EmoryHack4Impact.", 
      img: odyssey,
      link: "https://github.com/Emory-Hack4Impact/Odyssey",
      technologies: ["Next.js", "Supabase", "Prisma"]
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