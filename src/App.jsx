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
import Contact from './Components/Pages/Contact'
import Announce from './Components/Pages/Announce'
import Stock from './Components/Pages/Stock'


function App() {
  

  return (
   <div>
    

    {/* Routes */}
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Announce' element={<Announce/>}/>
      <Route path='/Stock' element={<Stock/>}/>
    </Routes>
    <Footer />
   </div>
  )
}

export default App
