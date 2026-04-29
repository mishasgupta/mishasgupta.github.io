import { forwardRef, Fragment } from 'react'
import TimelineItem from '../components/TimelineItem'

const Work = forwardRef((props, ref) => {

  const experiences = [
    
    {
      title: "Incoming Software Engineer Intern, Bloomberg LP",
      date: "Jun 2026 - Aug 2026",
      desc: "Incoming Summer 2026!",
      technologies: [":)"],
      direction: "left"
    },

    {
      title: "Associate Software Developer, Spectator Publishing Company",
      date: "Sep 2025 - Present",
      desc: "Worked on Spectator products CULPA and theShaft, developing new features/improvements and bug fixes to help maintain sites which receive over 5.6 million visits per year.",
      technologies: ["Python", "React.js", "SQL"],
      direction: "right"
    },

    {
      title: "Software Engineer Intern, WorkforceIQ",
      date: "May 2025 - Aug 2025",
      desc: "Developed the MVP of WorkforceIQ's nursing workforce analytics dashboard, a full stack platform that allows hospital executives to better manage nurse turnover.",
      technologies: ["Python", "AWS", "Next.js"],
      direction: "left"
    },

  ]

  return (
    <div ref={ref} className="py-15 md:py-25 text-white px-5 md:px-20">
      <h3 className="text-center text-3xl md:text-4xl font-semibold">Experience</h3>
      <div className="mt-10 relative">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-600 rounded-lg"></div>

          {experiences.map((exp, index) => {
            return (
              <Fragment key={index}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto relative py-6 md:px-30">

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 z-10"></div>

                  {exp.direction === "left" ? (
                    <>
                      <TimelineItem 
                        title={exp.title} 
                        date={exp.date}
                        desc={exp.desc}
                        technologies={exp.technologies}
                      />
                      <div className="w-4"></div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div className="w-4"></div>
                      <TimelineItem 
                        title={exp.title} 
                        date={exp.date}
                        desc={exp.desc}
                        technologies={exp.technologies}
                      />
                    </>
                  )}
                </div>
              </Fragment>
          )})}

        </div>
      </div>
    </div>
  )
})

export default Work