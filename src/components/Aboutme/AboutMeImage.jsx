import React from 'react'

const AboutMeImage = () => {
  return (
    <div className="relative w-full max-w-[300px] md:max-w-[350px]">
      <div className="relative h-[420px] rounded-[100px] w-full aspect-[3/5]  overflow-hidden">
        <img src="/images/about-me.jpg" alt="about me" className="w-full h-full object-cover" />
      </div>

      <div className="absolute bottom-[-20px] left-[-20px] w-full h-full bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  )
}

export default AboutMeImage
