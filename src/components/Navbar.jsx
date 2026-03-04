import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinkClass = ({ isActive }) =>
    `px-1 py-2 text-sm font-medium transition-all duration-300 relative group ${
      isActive
        ? 'text-secondary'
        : 'text-gray-700 hover:text-primary'
    }`

  const navLinkUnderline = ({ isActive }) =>
    `${isActive ? 'bg-secondary' : 'bg-primary group-hover:bg-primary'} absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-soft">
      <div className="container-width">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              MIT ADT
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-2 lg:items-center">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `${isActive ? 'text-secondary font-semibold' : 'text-gray-700 hover:text-primary'} px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                `${isActive ? 'text-secondary font-semibold' : 'text-gray-700 hover:text-primary'} px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/programs" 
              className={({ isActive }) =>
                `${isActive ? 'text-secondary font-semibold' : 'text-gray-700 hover:text-primary'} px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium`
              }
            >
              Programs
            </NavLink>
            <NavLink 
              to="/admissions" 
              className={({ isActive }) =>
                `${isActive ? 'text-secondary font-semibold' : 'text-gray-700 hover:text-primary'} px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium`
              }
            >
              Admissions
            </NavLink>
            <NavLink 
              to="/research" 
              className={({ isActive }) =>
                `${isActive ? 'text-secondary font-semibold' : 'text-gray-700 hover:text-primary'} px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium`
              }
            >
              Research
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                `${isActive ? 'text-secondary font-semibold' : 'text-gray-700 hover:text-primary'} px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium`
              }
            >
              Contact
            </NavLink>
            <div className="ml-4 pl-4 border-l border-gray-300">
              <Link to="/admissions" className="btn-primary text-sm py-2 px-6">
                Apply Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-primary hover:bg-light-dark transition-colors duration-300 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-light border-t border-gray-200 animate-fade-in">
          <div className="container-width px-0 py-3 space-y-2">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-gray-700 hover:bg-light-dark'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-gray-700 hover:bg-light-dark'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/programs"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-gray-700 hover:bg-light-dark'
                }`
              }
            >
              Programs
            </NavLink>
            <NavLink
              to="/admissions"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-gray-700 hover:bg-light-dark'
                }`
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to="/research"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-gray-700 hover:bg-light-dark'
                }`
              }
            >
              Research
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-gray-700 hover:bg-light-dark'
                }`
              }
            >
              Contact
            </NavLink>
            <div className="px-4 py-3 mt-4 border-t border-gray-200">
              <Link to="/admissions" onClick={closeMenu} className="btn-primary w-full text-center block text-sm">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
