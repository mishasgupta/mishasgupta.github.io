import React, { forwardRef } from 'react'
import headshot from '../assets/images/newheadshot.jpg'
import { ReactTyped } from 'react-typed'
import columbia from '../assets/images/columbia.jpg'

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-25 md:py-35 px-20 md:px-25 lg:px-60">
      <div className="flex flex-col md:flex-row md:justify-around items-center gap-6">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
          <h1>Hi! I'm Misha. </h1>
          <ReactTyped
              strings={[
                  "A Student.",
                  "A Musician.",
                  "A Developer."
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          <div className="flex justify-center items-center mt-6 gap-2">
            <img 
              src={columbia}
              alt="Columbia"
              className="w-8 h-8"
            />
            <p className="text-lg md:text-xl">B.A. in Computer Science at Columbia University</p>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <img 
            src={headshot}
            alt="Headshot"
            className="w-60 h-60 md:w-90 md:h-90 object-cover rounded-full border-4 border-white"
          />
        </div>
      </div>
    </div>
  )
})

export default Home
