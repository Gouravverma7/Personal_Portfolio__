import React from 'react'
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div>
        <h2 className='text-orange text-4xl font-thick mb-4'>Get In Touch</h2>
        <p className='text-white mb-4'>Feel free to reach out if you'd like to collaborate you are just a few clicks away!</p>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactMeLeft
