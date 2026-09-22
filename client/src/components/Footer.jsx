import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Free Education', href: '/courses' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Login', href: '/login' },
  { label: 'Sign Up', href: '/signup' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-headline-md font-bold text-on-primary hover:opacity-90 transition-opacity">
              Skill Mitra
            </Link>
            <p className="text-body-md text-on-primary/70 max-w-xs leading-relaxed">
              Empowering the next generation of professionals through accessible education and real opportunities.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {['language', 'group', 'mail'].map((icon) => (
                <button
                  key={icon}
                  className="w-9 h-9 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-secondary-container/30 transition-colors"
                  aria-label={icon}
                >
                  <span className="material-symbols-outlined text-[18px] text-on-primary">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-label-md font-semibold text-on-primary uppercase tracking-wider mb-1">
              Platform
            </h4>
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-label-md text-on-primary/70 hover:text-secondary-fixed hover:opacity-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="text-label-md font-semibold text-on-primary uppercase tracking-wider mb-1">
              Stay Updated
            </h4>
            <p className="text-label-md text-on-primary/70">
              Get weekly insights on courses, jobs, and career tips.
            </p>
            <div className="flex mt-1">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 rounded-l-lg text-label-md text-on-surface bg-white border-0 focus:outline-none focus:ring-2 focus:ring-secondary-container"
              />
              <button className="px-4 py-2.5 rounded-r-lg bg-secondary-container text-on-secondary-container text-label-md font-semibold hover:bg-secondary-fixed transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-on-primary/20 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-label-sm text-on-primary/50">
            © 2024 Skill Mitra. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-label-sm text-on-primary/50 hover:text-secondary-fixed transition-colors">Privacy Policy</a>
            <a href="#" className="text-label-sm text-on-primary/50 hover:text-secondary-fixed transition-colors">Terms of Service</a>
            <a href="#" className="text-label-sm text-on-primary/50 hover:text-secondary-fixed transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
