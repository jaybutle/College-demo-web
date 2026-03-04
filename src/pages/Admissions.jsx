import { useState } from 'react'

const steps = [
  {
    step: 1,
    title: 'Apply Online',
    description: 'Fill out the online admission application form with your personal and academic details.'
  },
  {
    step: 2,
    title: 'Submit Documents',
    description: 'Upload required documents including academic records, transcripts, and certificates.'
  },
  {
    step: 3,
    title: 'Pay Application Fee',
    description: 'Complete the online payment of the application fee (₹500).'
  },
  {
    step: 4,
    title: 'Attend Interview',
    description: 'Participate in counseling session and/or interview as per your program requirements.'
  },
  {
    step: 5,
    title: 'Confirm Admission',
    description: 'On selection, confirm your admission by paying the first semester fee.'
  }
]

export default function Admissions() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    qualifications: '',
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
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      program: '',
      qualifications: '',
      message: ''
    })
  }

  return (
    <div className="bg-light w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-24">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions 2026</h1>
            <p className="text-xl opacity-95 leading-relaxed">Join MIT ADT University and embark on your journey towards excellence</p>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Eligibility Requirements</h2>
            <p className="section-subtitle">Clear eligibility criteria for our programs</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card p-10 hover:shadow-elevated transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">Undergraduate Programs</h3>
              <ul className="space-y-4">
                {[
                  '12th Pass (any stream)',
                  'Minimum 50% marks in 12th',
                  'Valid entrance exam scores (if applicable)',
                  'Age: No age limit',
                  'Passport valid for international students'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-10 hover:shadow-elevated transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">Postgraduate Programs</h3>
              <ul className="space-y-4">
                {[
                  "Bachelor's degree from recognized university",
                  "Minimum 50% marks in Bachelor's degree",
                  'Valid GMAT/CAT scores (for MBA)',
                  '12 years of formal education',
                  'Work experience preferred (varies by program)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">5-Step Admission Process</h2>
            <p className="section-subtitle">Simple, transparent, and student-friendly procedure</p>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-12">
            {steps.map((item, idx) => (
              <div key={item.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-secondary-light -z-10"></div>
                )}
                <div className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-elevated transition-all duration-300 relative z-10 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-elegant">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-primary mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Important Dates & Deadlines</h2>
            <p className="section-subtitle">Mark your calendars for these key dates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Application Deadline', date: 'May 31, 2026', icon: '📅', color: 'from-primary to-primary-light' },
              { label: 'Interview Period', date: 'June - July 2026', icon: '🎤', color: 'from-secondary to-secondary-light' },
              { label: 'Results Announced', date: 'July 2026', icon: '✅', color: 'from-accent to-accent-light' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-10 text-center shadow-elegant hover:shadow-elevated transition-all duration-300 hover-lift`}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <p className="text-sm opacity-90 mb-3 font-medium">{item.label}</p>
                <p className="text-3xl font-bold">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container-section bg-light-dark">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">Quick Application Inquiry</h2>
              <p className="section-subtitle">Fill this form and our admissions team will get in touch</p>
            </div>

            <div className="card p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXXXX 00000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Program of Interest *</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a program</option>
                    <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                    <option value="BBA">Bachelor of Business Administration (BBA)</option>
                    <option value="MCA">Master of Computer Applications (MCA)</option>
                    <option value="MBA">Master of Business Administration (MBA)</option>
                    <option value="PhD">PhD Programs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Current Qualifications *</label>
                  <input
                    type="text"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="e.g., 12th Pass / Bachelor's Degree"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your interests and goals..."
                    rows="5"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary group"
                >
                  <span>Submit Application Inquiry</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">Frequently Asked Questions</h2>
              <p className="section-subtitle">Answers to common questions from prospective students</p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'What is the application fee?', a: 'The application fee is ₹500 for all programs. This fee is non-refundable but will be adjusted if you are selected and join the program.' },
                { q: 'Can I apply for multiple programs?', a: 'Yes, you can apply for up to 3 different programs. Each application requires a separate application fee.' },
                { q: 'Are scholarships available?', a: 'Yes, we offer merit-based scholarships, need-based financial aid, and industry-sponsored scholarships. Check our website for detailed eligibility criteria.' },
                { q: 'Do you accept international students?', a: 'Yes, international students are welcome. They need to follow the same admission process with additional document requirements like passport, student visa, etc.' }
              ].map((item, idx) => (
                <details key={idx} className="card p-8 cursor-pointer group hover:shadow-elevated transition-all duration-300">
                  <summary className="font-bold text-lg text-primary flex items-center justify-between group-open:text-secondary transition-colors">
                    {item.q}
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed pl-4 border-l-2 border-secondary">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
