import { forwardRef, Fragment } from 'react'
import TimelineItem from '../components/TimelineItem'

const Work = forwardRef((props, ref) => {

  const experiences = [

    {
      title: "Software Engineer Intern, WorkforceIQ",
      date: "May 2025 - Present",
      desc: "Developed the MVP of WorkforceIQ's nursing workforce analytics dashboard.",
      technologies: ["Python", "AWS", "Next.js"],
      direction: "left"
    },

    {
      title: "Research Assistant, Emory Cognition & Visualization Lab",
      date: "Jan 2025 - May 2025",
      desc: "Worked to create data visualizations for a research study examining the impact of data visualization on artistic activism.",
      technologies: ["Python", "Pandas", "Altair"],
      direction: "right"
    },

    {
      title: "Research Assistant, Emory Spatial Computing Lab",
      date: "Jan 2025 - May 2025",
      desc: "Collaborated with 4 PhD students on HuMob Challenge 2024, top 10 team submission and paper published at ACM SIGSPATIAL 2024.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
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