import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'

export default function Footer() {
  return (
    <footer className='bg-greenforest text-whites '>
        <section className='container mx-auto text-center flex justify-center '>
            <p className='flex items-center text-3xl'>© 2024 Karina | <FaLinkedin className='text-salmon text-5xl p-2'/> | <FaGithub className='text-salmon text-5xl p-2' /> | <FaWhatsappSquare className='text-salmon text-5xl p-2' /> | <ImMail className='text-salmon text-5xl p-2'/> </p>
        </section>
    </footer>
  )
}
