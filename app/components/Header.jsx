'use client'

import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.jpg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-gray-800 text-white py-4 relative sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex gap-4 items-center">
          <Image src={logo} alt="logo" width="40" height="40" />
          <h1 className="text-2xl font-bold">Notaria Prestige</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a
            href="#about"
            className="hover:text-blue-300 transition duration-300"
          >
            À propos
          </a>
          <a
            href="#services"
            className="hover:text-blue-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-300 transition duration-300"
          >
            Témoignages
          </a>
          <a
            href="#contact"
            className="hover:text-blue-300 transition duration-300"
          >
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-gray-800 ease-in-out duration-1000">
          <nav className="flex flex-col space-y-4 px-4 py-4 gap-2">
            <a
              href="#about"
              className="hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              À propos
            </a>
            <a
              href="#services"
              className="hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Témoignages
            </a>
            <a
              href="#contact"
              className="hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
