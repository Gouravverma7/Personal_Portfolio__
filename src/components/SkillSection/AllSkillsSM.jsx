import React from "react";
import { FaHtml5, FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
// import { SiDjango } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import SingleSkills from "./SingleSkills";
import {motion} from 'framer-motion';
import {fadeIn} from '../../frameMotion/varients';

const skills = [
    {
        Skill : "HTML",
        icon: FaHtml5,
    },
    {
        Skill : 'CSS',
        icon: FaCss3Alt,
    },
    {
        Skill : 'JavaScript',
        icon: IoLogoJavascript,
    },
    {
        Skill : 'ReactJS',
        icon: RiReactjsFill,
    },
    {
        Skill : 'BootStrap',
        icon: FaBootstrap,
    },
    {
        Skill : 'Java',
        icon: FaJava,
    },
    {
        Skill : 'SpringBoot',
        icon: SiSpringboot,
    },
    {
        Skill : 'ORACLE',
        icon: GrOracle,
    },
    {
        Skill : 'MySQL',
        icon: SiMysql,
    },
    {
        Skill : 'DOCKER',
        icon: FaDocker,
    },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item,index)=>{
        return <motion.div variants={fadeIn('down',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0.7}} key={index} className="flex flex-col items-center "> 
            <item.icon className="text-7xl text-orange"/>
            <p className="text-center mt-4 text-white">{item.Skill}</p>
        </motion.div>
      })}
    </div>
  )
}

export default AllSkillsSM
