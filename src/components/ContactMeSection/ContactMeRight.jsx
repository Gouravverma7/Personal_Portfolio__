import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <img src="./images/Email.png" alt="Contact Me" className='max-w-[350px]'/>
      <ContactInfo/>
      <ContactSocial/>
    </div>
  )
}

export default ContactMeRight
