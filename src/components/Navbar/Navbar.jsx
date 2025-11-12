import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-[#0A0F0F] text-gray-300 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-[#00E0C6] font-bold text-xl font-poppins cursor-pointer">
            UI Agency
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 relative">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-2 py-1 font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00E0C6]'
                    : 'text-gray-300 hover:text-[#35F0FF]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#00E0C6] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden max-w-[90%] mx-auto rounded-lg backdrop-blur-md">
          <div
            className="flex flex-col items-center space-y-4 py-4 rounded-lg"
            style={{ backgroundColor: 'rgba(18,24,24,0.7)' }}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium text-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00E0C6]'
                    : 'text-gray-300 hover:text-[#35F0FF]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
