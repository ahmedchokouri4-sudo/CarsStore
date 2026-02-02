import React from 'react'
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Bmw from "../../assets/cars/BMW M2.png"
import FormSection from '../FormSection';

const Contact = () => {
  return (
 <>
 <div className='flex flex-col lg:flex-row lg:justify-between lg:pl-22'>
     <div className=' py-6 px-6 space-y-6 lg:py-20 '>
    <h1 className='text-left font-bold text-2xl'>Contact</h1> 
    <div className='  flex flex-col justify-start  lg:w-[400px] '>    
         
        <button className='  flex lg:justify-start bg-black text-white text-left px-4 py-3 rounded-2xl items-center gap-3  '><BiPhone /> Contact us</button><br />
        <button className='flex lg:justify-start bg-black text-white  text-left px-4 py-3 rounded-2xl items-center gap-3 '><HiOutlineMail/> Send an email</button><br />
        <button className='flex lg:justify-start bg-black text-white  text-left px-4 py-3 rounded-2xl items-center gap-3 '><FaWhatsapp/> WhatsApp</button><br />
        <button className='flex lg:justify-start bg-black text-white  text-left px-4 py-3 rounded-2xl items-center gap-3 '><FaInstagram/> Instagram</button><br />
        </div>
   </div>
   <div className='lg:py-20 px-4'>
    <img src={Bmw} alt="" />
   </div>
   
  </div>
  <FormSection className="lg:my-6"/>
 </>


 


  
  )
}

export default Contact
