import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'HOME', title: 'Back to Home' },
    { to: '/about', label: 'ABOUT US', title: 'Learn about our company' },
    { to: '/product', label: 'PRODUCT', title: 'Browse our products' },
    { to: '/gallery', label: 'GALLERY', title: 'View our gallery' },
    { to: '/contact', label: 'CONTACT US', title: 'Contact us' },
  ]

  return (
    <header role="banner" className="bg-white">
      <div className="container-fluid ">
        <nav className="flex justify-between items-center" role="navigation" aria-label="Main navigation">
          <Link className="navbar-brand" to="/" title="BHOWMIKA Home">
            <img 
              src="/assets/img/logo/logo.svg" 
              className="h-12 w-auto" 
              alt="BHOWMIKA - Premium Products & Services"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <ul className="flex gap-8 list-none">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    title={link.title}
                    className={`nav-link font-semibold transition-colors ${
                      location.pathname === link.to ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`h-1 w-6 bg-gray-700 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-1 w-6 bg-gray-700 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-1 w-6 bg-gray-700 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
              <ul className="flex flex-col gap-4 p-6 list-none">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      title={link.title}
                      className={`nav-link font-semibold ${
                        location.pathname === link.to ? 'text-blue-600' : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
