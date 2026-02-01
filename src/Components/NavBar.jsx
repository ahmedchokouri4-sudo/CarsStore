import React, { useState } from 'react'
import Logo from "../assets/Logo/touringcars.png"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'
import About from './Pages/About'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:px-28 shadow-md relative">
      
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={Logo} alt="TouringCars Logo" className="h-10" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:gap-8">
        <li>
          <Link to={"/About"} className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300">
            About
          </Link>
        </li>
        <li>
          <Link className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300" href="#">
            Contact
          </Link>
        </li>
        <li>
          <Link className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300" href="#">
            Announce
          </Link>
        </li>
        <li>
          <Link className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300" href="#">
            Stock
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
          <li className="w-full text-center py-3 border-b border-gray-200">
            <Link to="/About"  onClick={() => setIsOpen(false)} className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300" href="#">
              About
            </Link>
          </li>
          <li className="w-full text-center py-3 border-b border-gray-200">
            <a className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300" href="#">
              Contact
            </a>
          </li>
          <li className="w-full text-center py-3 border-b border-gray-200">
            <a className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300" href="#">
              Announce
            </a>
          </li>
          <li className="w-full text-center py-3">
            <a className="text-lg text-black hover:bg-black p-1.5 rounded-lg transition-all hover:text-white duration-300" href="#">
              Stock
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar