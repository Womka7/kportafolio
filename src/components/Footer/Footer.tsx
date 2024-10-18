import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'
import { ImMail } from 'react-icons/im'

export default function Footer() {
  return (
    <footer className='bg-greenforest text-whites font-semibold py-2 flex flex-col justify-center items-center'>
               <div className='flex '> <FaLinkedin className='text-salmon text-3xl mx-2'/>
                <FaGithub className='text-salmon text-3xl mx-2' />
                <FaWhatsappSquare className='text-salmon text-3xl mx-2' />
                <ImMail className='text-salmon text-3xl mx-2'/>
                </div> 
                <p className='pt-1'>© 2024 Hecho por Karina</p>
    </footer>
  )
}