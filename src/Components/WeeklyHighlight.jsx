import React from 'react'
import Porshe from "../assets/cars/Macan.png"
import TextMacan from "../assets/cars/Text Macan.png"

const WeeklyHighlight = () => {
  return (
<div className="flex justify-center py-2 mb-20 px-4">
  <div className="flex flex-col items-center w-full max-w-6xl">
    {/* Title */}
    <h1 className="font-bold text-3xl py-4 text-center md:text-left w-full">Weekly Highlight</h1>

    {/* Images */}
    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full justify-center">
      <img src={Porshe} alt="Porshe" className="sm:w-[400px] md:w-[450px] lg:w-[500px] object-cover rounded-lg" />
      <img src={TextMacan} alt="TextMacan" className="sm:w-[400px] md:w-[450px] lg:w-[500px] object-cover rounded-lg" />
    </div>
  </div>
</div>



  )
}

export default WeeklyHighlight
