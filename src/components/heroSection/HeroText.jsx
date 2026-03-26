import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../frameMotion/varients';

const HeroText = () => {
  return (
    <div className='flex flex-col gap-3 h-full justify-center md:text-left sm:text-center'>
      <motion.h2 variants={fadeIn('down',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}}  className='lg:text-2xl sm:text-xl uppercase text-cyan'>Full-Stack Developer</motion.h2>
      <motion.h1 variants={fadeIn('right',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}} className='md:text-(2.8rem) lg:text-6xl sm:text-4xl font-bold font-special text-orange'>Gourav Verma</motion.h1>
      <motion.p variants={fadeIn('up',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}} className='text-lg mt-0 text-white w-auto flex text-justify justify-normal'>Passionate Full-Stack Developer with experience in building dynamic <br />and scalable web applications. I specialize in Java, Springboot, and <br />React.js, and enjoy working across both frontend and backend development. </motion.p>
    </div>
  )
}

export default HeroText
