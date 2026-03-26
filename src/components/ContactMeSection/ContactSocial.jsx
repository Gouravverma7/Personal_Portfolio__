import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import SingleSocialContact from './SingleSocialContact'

const ContactSocial = () => {
  return (
    <div className='flex gap-5'>
      <SingleSocialContact link='https://github.com/Gouravverma7/' Icon={FaGithub}/>
      <SingleSocialContact link='https://www.linkedin.com/in/gourav-verma2907/' Icon={FaLinkedin}/>
      <SingleSocialContact link='https://x.com/GouravVerma29?t=9Bwdraj7IPG6CqyPvQ0MNQ&s=09' Icon={FaTwitter}/>
    </div>
  )
}

export default ContactSocial
