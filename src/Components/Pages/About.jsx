import React from 'react'
import BackPorshe from "../../assets/cars/porsche-model1 1.png"

const About = () => {
  return (
    <div >
      <div className='flex flex-col  md:flex-row  md:justify-between md:gap-6 lg:flex-row  lg:justify-center   px-6 py-6 space-y-6 lg:space-x-6  '>
        <div className='flex flex-col  bg-gray-300/40 px-6 py-5 rounded-3xl space-y-3 md:max-w-xs md:space-y-5 md:h-200 lg:max-w-2xl   lg:space-y-26 lg:max-h-200   text-gray-700 text-lg justify-center '>
          <h1 className='font-bold lg:text-3xl md:text-2xl'>About us</h1>
          <p className=' lg:text-2xl  md:text-xl'>Touring Cars specializes primarily in the sale of luxury and super sports cars. With safety, transparency, and quality in mind, our vehicles are inspected and certified to guarantee our customers a completely secure purchase.</p>
          <p className=' lg:text-2xl md:text-xl'>We offer special and exclusive items, as well as a large stock that is renewed daily to provide the best experience and a high standard of quality.</p>
          <p className='lg:text-2xl md:text-xl'>Touring Cars is proud to partner with the best suppliers, dealerships, and technical centers in the world to jointly design one of the best luxury car sales structures in the country.</p>
        </div>
        <div className='md:max-w-xs md:mr-35 '>
          <img src={BackPorshe} alt="BackPorshe" className='bg-gray-300/40 rounded-3xl lg:max-h-200 md:max-w-xl md:h-200 ' />
        </div>
      </div>
    </div>
  )
}

export default About
