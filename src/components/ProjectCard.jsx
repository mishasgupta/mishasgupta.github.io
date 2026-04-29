
const ProjectCard = ({ name, desc, img, link, technologies }) => {
  return (
    <a href={link} target="_blank" className="h-full">
      <div className="h-full flex flex-col items-center justify-center w-70 md:w-80 shadow-2xl hover:shadow-emerald-600/20 hover:scale-110 rounded-xl hover:cursor-pointer transition ease-in-out duration-300 justify-self-center border-2 border-emerald-600/30 bg-gray-700/50 p-4 gap-4">
        <h3 className="text-lh md:text-xl font-semibold">{name}</h3>
        <img 
          src={img}
          alt={name}
          className="object-cover rounded-xl h-35 w-55 md:h-50 md:w-70"
        />
        <p className="text-sm md:text-md text-center">{desc}</p>
        <div className="flex justify-around gap-2 items-center">
          {technologies.map((tech, index) => 
            (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-md bg-emerald-900/50 border border-emerald-700/50 text-emerald-200 whitespace-nowrap"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
