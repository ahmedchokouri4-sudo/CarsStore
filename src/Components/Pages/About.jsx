import React from 'react'
import BackPorshe from "../../assets/cars/porsche-model1 1.png"

const About = () => {
  return (
    <div className="max-w-7xl mx-auto"> {/* Container kbir bach mayfutch l-qyas f screens kbar */}
      
      {/* 1ère Section: About Us & Image */}
      <div className='flex flex-col lg:flex-row items-center justify-between px-6 py-12 gap-10'>
        
        {/* Text Side */}
        <div className='flex flex-col bg-gray-300/40 px-8 py-10 rounded-3xl space-y-6 w-full lg:w-1/2 min-h-180 justify-center '>
          <h1 className='font-bold text-3xl text-black lg:text-4xl'>About us</h1>
          <div className='space-y-4 lg:space-y-20 text-gray-700 text-lg lg:text-xl leading-relaxed'>
            <p>Touring Cars specializes primarily in the sale of luxury and super sports cars. With safety, transparency, and quality in mind, our vehicles are inspected and certified to guarantee our customers a completely secure purchase.</p>
            <p>We offer special and exclusive items, as well as a large stock that is renewed daily to provide the best experience and a high standard of quality.</p>
            <p>Touring Cars is proud to partner with the best suppliers, dealerships, and technical centers in the world to jointly design one of the best luxury car sales structures in the country.</p>
          </div>
        </div>

        {/* Image Side */}
        <div className='w-full lg:w-1/2'>
          <img 
            src={BackPorshe} 
            alt="BackPorshe" 
            className='bg-gray-300/40 rounded-3xl w-full h-full object-cover shadow-lg' 
          />
        </div>
      </div>

      {/* 2ème section: Mission, Vision, Values */}
      <div className='px-6 py-10 space-y-8'>
        
        {/* Mission & Vision Row */}
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          {/* Mission */}
          <div className="bg-black text-white p-8 rounded-2xl w-full lg:w-1/2 transition-transform hover:scale-[1.02]">
            <h1 className="font-bold text-2xl mb-4">Mission</h1>
            <p className="text-gray-300 text-lg">
              To be the best choice in premium automobiles and to be part of people's special life moments.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-black text-white p-8 rounded-2xl w-full lg:w-1/2 transition-transform hover:scale-[1.02]">
            <h1 className="font-bold text-2xl mb-4">Vision</h1>
            <p className="text-gray-300 text-lg">
              To be a national benchmark as the most surprising company in connecting people, vehicles, goods, and related services.
            </p>
          </div>
        </div>

        {/* Values - Full Width */}
        <div className="w-full">
          <div className="bg-black text-white p-8 rounded-2xl w-full shadow-xl">
            <h1 className="font-bold text-2xl mb-6">Values</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">•</span> <span>Inspiring people</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">•</span> <span>Anticipating demands</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">•</span> <span>Excellence in all processes</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">•</span> <span>Fully satisfied clients</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">•</span> <span>Constant social action</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-blue-500">•</span> <span>Sustainability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About