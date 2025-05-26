import React, { forwardRef } from 'react'
import CardSlider from '../components/CardSlider'

const About = forwardRef((props, ref) => {

  return (
    <div ref={ref} className="text-white py-15 md:py-20">
      <h3 className="text-center text-3xl md:text-4xl font-semibold">A Little Bit About Me</h3>
      <div className="flex justify-center mt-10">
        <div className="border-2 border-emerald-600/30 shadow-xl rounded-xl p-4 text-white bg-gray-700/50 backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-emerald-600/20 hover:border-emerald-600/70 w-sm md:w-md lg:w-xl">
          <p className="text-md">I'm an aspiring software engineer interested in AI, software systems/architecture, cloud computing, and databases! These days, I'm enjoying experimenting with full stack development using React, Java/Spring Boot, and PostgreSQL.</p>

          <p className="text-md mt-4">In my free time, you can find me spending time with my cats or exploring nature with friends. I'm also a longtime classical musician, playing the trombone since 6th grade. Although I'm currently living in New York City, I still love to support my hometown Atlanta sports teams whenever I can!</p>
        </div>
      </div>
      <CardSlider />
    </div>
  )
})

export default About
