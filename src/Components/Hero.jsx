import React from 'react'
import porshe911 from "../assets/cars/porsche-model5 1 (1).png"
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Hero = () => {
  return (
  <div className="flex flex-col md:flex-row items-center justify-between  md:pl-30 gap-10 pt-4">
  
  {/* Text */}
  <div className="flex flex-col space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-bold">Quality,</h1>
    <h1 className="text-4xl md:text-6xl font-bold">Safety,</h1>
    <h1 className="text-4xl md:text-6xl font-bold">Transparency.</h1>

    <div className="flex justify-center md:justify-start">
      <button className="flex items-center gap-2 font-bold text-white bg-black p-2 px-4 rounded-3xl cursor-pointer hover:bg-white hover:text-black hover:border-2 transition-all duration-300">
        Access full inventory
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="w-full md:w-auto flex justify-center">
    <img
      src={porshe911}
      alt="911"
      className="w-full max-w-md md:max-w-full "
    />
  </div>

</div>

  )
}

export default Hero
