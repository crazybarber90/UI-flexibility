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
    <nav className="bg-bg text-gray-300 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={'/'}>
            <div className="text-primary font-extralight text-xl font-poppins cursor-pointer">
              UI Agency
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 relative">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-extralight
                  relative px-2 py-1 transition-colors
                  ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-text hover:text-accent'
                  }
                  group
                `}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
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
          <div className="bg-bg flex flex-col items-center space-y-4 py-4 rounded-lg">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium text-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-text hover:text-accent'
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
