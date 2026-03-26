import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'
import {motion} from 'framer-motion';
import {fadeIn} from '../../frameMotion/varients';

const projects = [
  {
  name: 'RealTime Chat App',
  // year : 'APRIL - 2024',
  align : 'right',
  // image: './images/College_Inquiry_chatbot.png',
  link: 'https://github.com/Gouravverma7/chat-webApp',
},
  {
  name: 'Online Shopping Cart Management System',
  // year : 'JULY - 2024',
  align : 'right',
  // image: './images/Placement_management_System.png',
  link: 'https://github.com/Gouravverma7/Shopping_cart_Management_System',
},
// {
//   name: 'Placement Management System',
//   year : 'JULY - 2024',
//   align : 'right',
//   image: '../../public/images/College_Inquiry_chatbot.png',
//   link: '#',
// },
// {
//   name: 'Placement Management System',
//   year : 'JULY - 2024',
//   align : 'right',
//   image: '../../public/images/College_Inquiry_chatbot.png',
//   link: '#',
// },
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-h-[1200px] mx-auto px-4'>
      <motion.div variants={fadeIn('down',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}}>

      <ProjectsText/>
      </motion.div>
      <div className='flex flex-col gap-5 max-w-[1075px] mx-auto mt-12'>
          {projects.map((item,index)=>{
            return <SingleProjects key={index} name={item.name} year={item.year} image={item.image} link={item.link} align={index%2===0 ?'left':'right'}/>
          })}
      </div>
    </div>
  )
}

export default ProjectsMain
