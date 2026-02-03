import React from 'react'
import BackPorshe from "../../assets/cars/porsche-model1 1.png"

const About = () => {
  return (
    <div >
      <div className='flex flex-col  md:flex-row  md:justify-between md:gap-6 lg:flex-row  lg:justify-center   px-6 py-12 space-y-6 lg:space-x-6  '>
        <div className='flex flex-col  bg-gray-300/40 px-6 py-5 rounded-3xl space-y-3 md:max-w-xs    md:space-y-5 md:h-200 lg:max-w-2xl   lg:space-y-26 lg:max-h-200   text-gray-700 text-lg justify-center '>
          <h1 className='font-bold text-2xl text-black  lg:text-3xl md:text-2xl'>About us</h1>
          <p className=' lg:text-2xl  md:text-xl'>Touring Cars specializes primarily in the sale of luxury and super sports cars. With safety, transparency, and quality in mind, our vehicles are inspected and certified to guarantee our customers a completely secure purchase.</p>
          <p className=' lg:text-2xl md:text-xl'>We offer special and exclusive items, as well as a large stock that is renewed daily to provide the best experience and a high standard of quality.</p>
          <p className='lg:text-2xl md:text-xl'>Touring Cars is proud to partner with the best suppliers, dealerships, and technical centers in the world to jointly design one of the best luxury car sales structures in the country.</p>
        </div>
        <div className='md:max-w-xs md:mr-35 '>
          <img src={BackPorshe} alt="BackPorshe" className='bg-gray-300/40 rounded-3xl lg:max-h-200 md:max-w-xl md:h-200 ' />
        </div>
      </div>
      {/* 2eme section */}
    <div className=' space-y-6 md:space-y-0  '>
  {/* Mission & Vision */}
 <div className='flex flex-col items-center justify-center  space-y-6 px-4 py-6 '>

  
 <div className="w-full flex flex-col items-center  py-6 px-4 space-y-6">

  
  <div className="flex flex-col md:flex-row gap-12 lg:justify-center items-stretch w-full lg:ml-31 ">
    <div className="bg-black text-white px-6 py-4 space-y-4 rounded-xl w-full md:w-96  lg:w-2xl">
      <h1 className="font-bold text-xl  md:text-left">Mission</h1>
      <p className=" md:text-left">
        To be the best choice in premium automobiles and to be part of people's special life moments.
      </p>
    </div>

    <div className="bg-black text-white px-6  py-4  space-y-4 rounded-xl w-full md:w-96  lg:w-xl ">
      <h1 className="font-bold text-xl  md:text-left">Vision</h1>
      <p className=" md:text-left">
        To be a national benchmark as the most surprising company in connecting people, vehicles, goods, and related services.
      </p>
    </div>
  </div>

  {/* Values */}
  <div className="w-full flex justify-center max-w-full  ">
    <div className="bg-black text-white px-6 py-4 space-y-4 rounded-xl w-full lg:max-w-7xl lg:ml-31">
      <h1 className="font-bold text-xl ">Values</h1>
      <ul className="space-y-2 list-disc list-inside  md:text-left">
        <li>Inspiring people</li>
        <li>Anticipating demands</li>
        <li>Excellence in all processes</li>
        <li>Fully satisfied clients</li>
        <li>Constant social action</li>
        <li>Sustainability</li>
      </ul>
    </div>
  </div>

</div>

</div>
</div>
     </div>
  )
}

export default About
