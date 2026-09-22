import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Free Education', href: '/courses' },
  { label: 'Higher Education', href: '/courses?tier=premium' },
  { label: 'Earning Opportunities', href: '/pricing' },
  { label: 'Community', href: '/#community' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface transition-all duration-300 ${
        scrolled ? 'shadow-nav' : 'shadow-sm'
      }`}
      id="main-nav"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-4 md:px-margin-desktop py-4">
        {/* Brand */}
        <Link
          to="/"
          className="text-headline-md font-bold text-primary hover:opacity-80 transition-opacity"
        >
          Skill Mitra
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-primary p-2 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href.split('?')[0]
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-label-md transition-colors duration-200 ${
                  isActive
                    ? 'text-secondary border-b-2 border-secondary pb-1'
                    : 'text-primary hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-label-md text-primary hover:text-secondary transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-label-md bg-primary-container text-on-primary px-6 py-2.5 rounded-lg hover:bg-primary transition-colors shadow-sm"
          >
            Sign Up Free
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-surface-variant px-4 py-4 space-y-3 animate-[fadeInUp_0.2s_ease]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block text-label-md text-on-surface hover:text-primary py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-surface-variant">
            <Link
              to="/login"
              className="text-center text-label-md text-primary border border-primary rounded-lg py-2.5 hover:bg-surface-container transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-center text-label-md bg-primary-container text-on-primary rounded-lg py-2.5 hover:bg-primary transition-colors"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
