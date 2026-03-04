import ProgramCard from '../components/ProgramCard'

const programs = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    duration: '3 Years',
    eligibility: '12th Pass with Mathematics',
    description: 'Master programming, software development, web technologies, and database management.'
  },
  {
    title: 'Bachelor of Business Administration (BBA)',
    duration: '3 Years',
    eligibility: '12th Pass (any stream)',
    description: 'Develop business acumen, leadership skills, and management expertise for corporate roles.'
  },
  {
    title: 'Bachelor of Science in Mathematics',
    duration: '3 Years',
    eligibility: '12th Pass with Mathematics',
    description: 'Explore pure and applied mathematics with strong analytical focus and research orientation.'
  },
  {
    title: 'Bachelor of Design',
    duration: '4 Years',
    eligibility: '12th Pass with portfolio',
    description: 'Creative programs in Graphic Design, UX/UI, and Product Design with hands-on projects.'
  },
  {
    title: 'Master of Computer Applications (MCA)',
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with 50% marks',
    description: 'Advanced training in software engineering, AI/ML, cloud computing, and cybersecurity.'
  },
  {
    title: 'Master of Business Administration (MBA)',
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree (any discipline)',
    description: 'Strategic management, business analytics, entrepreneurship, and global leadership development.'
  },
  {
    title: 'Master of Science in Data Science',
    duration: '2 Years',
    eligibility: 'Bachelor\'s in Science/Engineering/Commerce with 50% marks',
    description: 'Data analytics, machine learning, big data processing, and statistical modeling.'
  },
  {
    title: 'Master of Fine Arts',
    duration: '2 Years',
    eligibility: 'Bachelor\'s degree with portfolio',
    description: 'Advanced studies in visual arts, digital media, and contemporary design practices.'
  },
  {
    title: 'PhD in Computer Science',
    duration: '3 Years',
    eligibility: 'Master\'s degree or equivalent',
    description: 'Research-focused doctoral program in AI, cybersecurity, cloud computing, and emerging technologies.'
  }
]

export default function Programs() {
  return (
    <div className="bg-light w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-24">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl opacity-95 leading-relaxed">Choose from 50+ programs across undergraduate, postgraduate, and doctoral studies</p>
          </div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="badge-secondary inline-block mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm3.5-6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd"/>
              </svg>
              Undergraduate
            </div>
            <h2 className="section-title mb-4">Bachelor Programs (UG)</h2>
            <p className="section-subtitle">3-4 year degree programs for 12th pass students with comprehensive curriculum</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 4).map((program, idx) => (
              <div key={program.title} className="animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="badge-secondary inline-block mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.414l4.293 4.293a1 1 0 01.263.464l2 5A2 2 0 0118 12.479V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-2.5a2 2 0 01.316-1.022l1.844-2.298A2 2 0 0110 7.5v-1a1 1 0 00-1-1H6a1 1 0 00-1 1v3l-2 2V4z"/>
              </svg>
              Postgraduate
            </div>
            <h2 className="section-title mb-4">Master Programs (PG)</h2>
            <p className="section-subtitle">2-year specialist programs with industry focus and professional advancement</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(4, 8).map((program, idx) => (
              <div key={program.title} className="animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctoral Programs */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="badge-secondary inline-block mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
              </svg>
              Research
            </div>
            <h2 className="section-title mb-4">Doctoral Programs (PhD)</h2>
            <p className="section-subtitle">Research-focused programs for aspiring scholars and innovators</p>
          </div>
          <div className="max-w-2xl mx-auto">
            {programs.slice(8).map((program) => (
              <div key={program.title}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="container-section bg-light-dark">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose Our Programs?</h2>
            <p className="section-subtitle">What makes our programs stand out from the rest</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎓', title: 'Industry-Aligned', desc: 'Curriculum designed with industry experts and global standards.' },
              { icon: '👨‍💼', title: 'Expert Faculty', desc: 'Learn from PhD holders and industry professionals with years of experience.' },
              { icon: '🚀', title: 'Placement Focus', desc: '95%+ placement rate with top national and international companies.' },
              { icon: '🌐', title: 'Global Perspective', desc: 'International exchange programs and collaborations with global universities.' }
            ].map((item, idx) => (
              <div 
                key={item.title} 
                className="card p-8 text-center hover:shadow-elevated transition-all duration-300 hover-lift animate-fade-in"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 inline-block transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-section bg-gradient-to-r from-secondary to-secondary-light text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container-width relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Join thousands of successful alumni and transform your future with MIT ADT University</p>
          <a href="/admissions" className="btn-primary !bg-white !text-secondary hover:!bg-light group">
            <span>Apply Now</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
