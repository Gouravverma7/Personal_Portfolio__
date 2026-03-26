// import React from 'react'
// import AboutMeText from './AboutMeText'
// import AboutMeImage from './AboutMeImage'

// const AboutMeMain = () => {
//   return (
//     <div className='flex md:flex-row sm:flex-col gap-28 px-12 max-w-[1000px] mx-auto mt-[100px] justify-between items-center'>
//       <AboutMeText/>
//       <AboutMeImage/>
//     </div>
//   )
// }

// export default AboutMeMain

import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import {motion} from 'framer-motion';
import {fadeIn} from '../../frameMotion/varients';

const AboutMeMain = () => {
  return (
    <div id="about" className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 md:gap-20 px-6 md:px-14 max-w-[1200px] h-[10px] mx-auto mt-16 md:mt-24"> 
    {/* max-h-[0px] */}
      <motion.div variants={fadeIn('right',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0.7}}>
        <AboutMeText />
      </motion.div >
      <motion.div variants={fadeIn('left',0.2)} initial='hidden' whileInView='show' viewport={{once:false, amount:0.7}}>
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;


















// import React from "react";
// import AboutMeText from "./AboutMeText";
// import AboutMeImage from "./AboutMeImage";

// const AboutMeMain = () => {
//   return (
//     <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 md:gap-20 px-6 md:px-14 max-w-[1200px] mx-auto mt-16 md:mt-24">
//       {/* Left: Text */}
//       <AboutMeText />

//       {/* Right: Image */}
//       <div className="flex-shrink-0">
//         <AboutMeImage />
//       </div>
//     </div>
//   );
// };

// export default AboutMeMain;
