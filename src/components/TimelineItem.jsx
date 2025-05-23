import React from 'react'

const TimelineItem = ({ title, date, desc, technologies, direction }) => {
  return (
    <div className="flex flex-col gap-y-2 border-2 border-emerald-600/30 shadow-xl rounded-xl p-4 text-white bg-gray-700/50 backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-emerald-600/20 hover:border-emerald-600/70 ">
      <h3 className="text-md md:text-xl font-semibold">{title}</h3>
      <h3 className="text-sm md:text-md">{date}</h3>
      <p className="text-sm md:text-md">{desc}</p>
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1 justify-start md:justify-end">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-md bg-emerald-900/50 border border-emerald-700/50 text-emerald-200 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default TimelineItem