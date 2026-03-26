import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import {motion} from 'framer-motion';
import {fadeIn} from '../../frameMotion/varients';

const HeroPic = () => {
  return (
    <motion.div variants={fadeIn('left',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0}}  className="h-full flex items-center justify-between">
      <img
        src="/images/gourav_picture.png"
        alt="Gourav Verma"
        className="max-h-[1800px] w-auto "
      />
    </motion.div>
  );
};

export default HeroPic;
