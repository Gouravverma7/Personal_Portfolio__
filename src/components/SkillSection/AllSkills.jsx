import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
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
        Skill : 'MYSQL',
        icon: SiMysql,
    },
    {
        Skill : 'DOCKER',
        icon: FaDocker,
    },
];

const AllSkills = () => {
  return <div>
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item,index)=>{
            return <motion.div variants={fadeIn('up',`0.${index}`)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}} >

                <SingleSkills key={index} text={item.Skill} imgSvg={<item.icon/>}/>
            </motion.div>
            })}
    </div>
  </div>;
};

export default AllSkills;
