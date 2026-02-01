import React from 'react'
import Logo from "../assets/Logo/touringcars.png"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    
 <div className=''>
  <hr className='border-black/20'/>
  <div className='flex flex-col md:flex-row justify-around mb-20'>

    {/* Logo & Socials */}
    <div className='space-y-4 py-8 px-8 text-center md:text-left'>
      <img src={Logo} alt="TouringCars Logo" className='mx-auto md:mx-0' />
      <p className='font-bold'>Quality, Safety, Transparency.</p>
      <div className='flex justify-center md:justify-start gap-6 text-xl'>
        <a href="#" className='hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300'><FaInstagram/></a>
        <a href="#" className='hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300'><FaFacebookF/></a>
        <a href="#" className='hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300'><FaYoutube/></a>
        <a href="#" className='hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300'><FaWhatsapp/></a>
      </div>
    </div>

    {/* Contact */}
    <div className='py-8 px-8 text-center md:text-left'>
      <ul className='space-y-4'>
        <li><span className='font-bold'>Contact</span></li>
        <li><a href="#" className='hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300'>WhatsApp</a></li>
        <li><a href="mailto:contato@touringcars.com.br" className='hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300'>contato@touringcars.com.br</a></li>
        <li><a href="tel:+81835129411" className='hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300'>(81) 3512-9411</a></li>
      </ul>
    </div>

    {/* Subscribe */}
    <div className='space-y-4 py-8 px-8 text-center md:text-left'>
      <form>
        <ul className='space-y-4'>
          <li><span className='font-bold'>Subscribe</span></li>
          <li className='text-sm'>Enter your email to receive the latest news from Touring Cars.</li>
          <div className='flex flex-col items-center  sm:flex-row justify-center md:justify-start gap-4'>
            <input type="email" placeholder='E-mail' className='border-black/50 border rounded-lg px-3 py-1'/>
            <button type='submit' className='bg-black text-white  px-4 py-2 rounded-lg cursor-pointer hover:text-black hover:border-2 hover:bg-white transition-all duration-300 px-10'>
              <FaArrowRightLong/>
            </button>
          </div>
        </ul>
      </form>
    </div>

  </div>

  <p className='text-center text-xs pb-10'>© 2026 All rights reserved.</p>
</div>

  )
}

export default Footer
