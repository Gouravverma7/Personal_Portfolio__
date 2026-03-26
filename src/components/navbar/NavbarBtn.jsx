import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";


const NavbarBtn = () => {
  return (
    <a href="mailto:gouravverma2901@gmail.com" rel="noopener noreferrer" className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
      Get in Touch
      <div className="sm:hidden md:block">
      <FaLocationArrow />
      </div>

    </a>
  )
}

export default NavbarBtn
