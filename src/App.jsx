import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Models from './Components/Models'
import FormSection from './Components/FormSection'
import WeeklyHighlight from './Components/WeeklyHighlight'
import LatestSales from './Components/LatestSales'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
import About from './Components/Pages/About'
import HomePage from './Components/Pages/HomePage'


function App() {
  

  return (
   <div>
    

    {/* Routes */}
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/About' element={<About/>}/>
    </Routes>
    <Footer />
   </div>
  )
}

export default App
