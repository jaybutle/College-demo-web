import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-dark-light to-dark text-white mt-20">
      {/* Main Footer Content */}
      <div className="container-width py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent mb-4">
              MIT ADT
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Excellence in Education. Innovation in Research. Leadership in Service.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary hover:shadow-elegant transition-all duration-300 flex items-center justify-center group">
                <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.79V9.25h2.5V7.31c0-2.49 1.52-3.85 3.75-3.85 1.06 0 1.97.08 2.23.11v2.58h-1.53c-1.2 0-1.43.57-1.43 1.4v1.83h2.87l-.37 3.54h-2.5V20h-2.87z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary hover:shadow-elegant transition-all duration-300 flex items-center justify-center group">
                <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 5 9 5"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary hover:shadow-elegant transition-all duration-300 flex items-center justify-center group">
                <svg className="w-5 h-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-secondary-light rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-secondary-light rounded-full"></span>
              Admissions
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  Apply Now
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  Eligibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-secondary-light rounded-full"></span>
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.27-1.27l-1.365-2.73a1 1 0 00-.756-.502l-4.493-1.498A1 1 0 009.28 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z"/>
                </svg>
                +91 98765 43210
              </a>
              <a href="mailto:info@mitadt.edu" className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@mitadt.edu
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Knowledge Avenue, City</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Mon-Fri: 9AM-6PM IST</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-secondary to-secondary-light rounded-full"></span>
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for latest updates and news from MIT ADT.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-500 border border-white/20 focus:border-secondary focus:outline-none transition-all duration-300 text-sm"
              />
              <button 
                type="submit"
                className="w-full btn-primary py-2 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="divide-y divide-gray-700 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} MIT ADT University. All rights reserved.</p>
          </div>
          <div className="flex gap-6 justify-start md:justify-end">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button area */}
      <div className="absolute -top-6 right-8 md:right-12">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-secondary hover:bg-secondary-light text-white rounded-full shadow-elegant hover:shadow-elevated transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0L5 14m7-7v12"/>
          </svg>
        </button>
      </div>
    </footer>
  )
}
