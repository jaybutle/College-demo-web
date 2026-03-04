import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="bg-light w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-24">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-95 leading-relaxed">Get in touch with our team for any inquiries or assistance</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="card p-10 text-center hover:shadow-elevated transition-all duration-300 hover-lift group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Campus Address</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium">MIT ADT University</p>
                <p>Knowledge Avenue</p>
                <p>Mumbai, Maharashtra 400001</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="card p-10 text-center hover:shadow-elevated transition-all duration-300 hover-lift group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Email</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">General Inquiries</p>
                  <a href="mailto:info@mitadt.edu" className="text-secondary hover:text-secondary-light transition-colors">{' '}info@mitadt.edu</a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Admissions</p>
                  <a href="mailto:admissions@mitadt.edu" className="text-secondary hover:text-secondary-light transition-colors">admissions@mitadt.edu</a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Academics</p>
                  <a href="mailto:academics@mitadt.edu" className="text-secondary hover:text-secondary-light transition-colors">academics@mitadt.edu</a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="card p-10 text-center hover:shadow-elevated transition-all duration-300 hover-lift group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.27-1.27l-1.365-2.73a1 1 0 00-.756-.502l-4.493-1.498A1 1 0 009.28 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Phone</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Main Helpline</p>
                  <a href="tel:+919876543210" className="text-secondary hover:text-secondary-light transition-colors">+91 98765 43210</a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Admissions</p>
                  <a href="tel:+919876543211" className="text-secondary hover:text-secondary-light transition-colors">+91 98765 43211</a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Support</p>
                  <a href="tel:+919876543212" className="text-secondary hover:text-secondary-light transition-colors">+91 98765 43212</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info and Hours Section */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="section-title-base text-left mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="card p-10">
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Subject of your inquiry"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help..."
                    rows="6"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary group"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Location & Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title-base text-left mb-8">Location & Hours</h2>
              </div>

              {/* Map Placeholder */}
              <div className="card overflow-hidden shadow-elevated h-96">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8233127418254!2d72.8479!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c999999999999%3A0x0!2sKnowledge%20Avenue!5e0!3m2!1sen!2sin!4v1234567890"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>

              {/* Office Hours */}
              <div className="card p-10">
                <h3 className="text-2xl font-bold text-primary mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-secondary font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-secondary font-medium">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Sunday & Holidays</span>
                    <span className="text-red-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Can We Help You */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Can We Help You With?</h2>
            <p className="section-subtitle">Choose the best way to connect with us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎓', title: 'Admissions Query', desc: 'Email or call our admissions team for program details and application support.' },
              { icon: '📚', title: 'Academic Support', desc: 'Connect with our academic advisors for course information or guidance.' },
              { icon: '💼', title: 'Placement Services', desc: 'Get in touch with our career department for job opportunities.' },
              { icon: '💬', title: 'General Inquiry', desc: 'Have any other questions? Reach out and we will assist you.' }
            ].map((item, idx) => (
              <div 
                key={item.title}
                className="card p-8 text-center hover:shadow-elevated transition-all duration-300 hover-lift group animate-fade-in"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 inline-block transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
