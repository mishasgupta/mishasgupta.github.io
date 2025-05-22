import React from 'react';
import reactLogo from '../assets/logos/react.png';
import viteLogo from '../assets/logos/vite.png';
import tailwindLogo from '../assets/logos/tailwind.png';

const Footer = () => {

  return (
    <footer className="text-white w-full h-12 px-3 md:px-8 py-10 flex items-center justify-between text-sm inset-shadow">
      <div>
        <p>© 2025 Misha Gupta</p>
      </div>

      <div className='flex flex-row space-x-2 items-center'>
        <p>Built with React, Vite, and Tailwind CSS.</p>
        <div></div>
        <img 
          src={reactLogo} 
          alt="React"
          className="h-6 w-7 object-fit"
        />
        <img 
          src={viteLogo} 
          alt="Vite"
          className="h-6 w-6 object-fit"
        />
        <img 
          src={tailwindLogo} 
          alt="TailwindCSS"
          className="h-6 w-8 object-fit"
        />
      </div>
    </footer>
  )
}

export default Footer