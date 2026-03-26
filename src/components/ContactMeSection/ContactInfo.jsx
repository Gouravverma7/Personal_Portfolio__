import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaMobileAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text="gouravverma2907@gmail.com" Image={TfiEmail}/>
      <SingleInfo text="+91-7879558651" Image={FaMobileAlt}/>
      <SingleInfo text="Indore, (M.P.), India" Image={ImLocation}/>
    </div>
  )
}

export default ContactInfo
