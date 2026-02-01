import React from 'react'
import Ram from "../assets/cars/RAM (1).png"
import Sw4 from "../assets/cars/SW4.png"
import SeaDoo from "../assets/cars/SEA-DOO.png"

const LatestSales = () => {
  return (
 <div className='flex justify-center mb-20'>
  <div className='flex flex-col items-center'>
    <h1 className='font-bold text-3xl py-4 text-center'>Latest Sales</h1>
    <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
      <img src={Ram} alt="Ram" className='w-64 md:w-72 lg:w-80' />
      <img src={Sw4} alt="Sw4" className='w-64 md:w-72 lg:w-80' />
      <img src={SeaDoo} alt="SeaDoo" className='w-64 md:w-72 lg:w-80' />
    </div>
  </div>
</div>



  )
}

export default LatestSales
