import React from 'react'
import Rs6 from "../assets/cars/AudiRs6.png"
import Range from "../assets/cars/blackRange.png"
import EletricCar from "../assets/cars/EletricCar.png"

const Models = () => {
  return (
    <div className="flex justify-center mb-20 px-4">
      <div className="flex flex-col items-center">
        
          <div className=' w-full'>
            <h1 className="font-bold text-3xl py-4">Models</h1>
          </div>
        

        {/* Images */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 md:gap-8">
          <img src={Rs6} alt="Rs6" className="w-64 sm:w-64 md:w-80 lg:w-96" />
          <img src={Range} alt="Range" className="w-64 sm:w-64 md:w-80 lg:w-96" />
          <img src={EletricCar} alt="EletricCar" className="w-64 sm:w-64 md:w-80 lg:w-96" />
        </div>
      </div>
    </div>
  )
}

export default Models


