export default function About() {
  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'Commitment to the highest standards in teaching, research, and student development.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Fostering creativity, critical thinking, and forward-looking approaches to problem-solving.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Building trust through transparent practices and ethical conduct in all endeavors.'
    },
    {
      icon: '🌍',
      title: 'Inclusivity',
      description: 'Creating a welcoming and diverse environment for students, faculty, and staff.'
    },
    {
      icon: '❤️',
      title: 'Community',
      description: 'Contributing positively to society through social responsibility and sustainable practices.'
    },
    {
      icon: '👥',
      title: 'Collaboration',
      description: 'Building partnerships with industry, academia, and government for mutual growth.'
    }
  ]

  const achievements = [
    { number: '15K+', label: 'Active Students' },
    { number: '500+', label: 'Faculty Members' },
    { number: '50+', label: 'Academic Programs' },
    { number: '95%', label: 'Placement Rate' },
    { number: '150+', label: 'Research Projects' },
    { number: '100+', label: 'Publications Annually' }
  ]

  return (
    <div className="bg-light w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-24">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About MIT ADT University</h1>
            <p className="text-xl opacity-95 leading-relaxed">A premier institution dedicated to excellence, innovation, and social responsibility</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-secondary-light opacity-20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80" 
                alt="Campus" 
                className="relative rounded-2xl shadow-elevated w-full"
              />
            </div>
            <div>
              <h2 className="section-title-base text-left mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg font-light">
                MIT ADT University is a leading institution established with a mission to provide accessible and excellent higher education. Over the years, we have grown into a vibrant learning community dedicated to empowering students to become leaders and innovators.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg font-light">
                Our institution focuses on academic excellence, cutting-edge research, social responsibility, and holistic student development. We believe in creating an environment where curiosity thrives, innovation flourishes, and every individual reaches their potential.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg font-light">
                With state-of-the-art infrastructure, experienced faculty, and strong industry partnerships, we prepare students for successful careers and meaningful contributions to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card p-10 hover:shadow-elevated transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 className="section-title-base text-left mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6 leading-relaxed font-light">
                To be a globally recognized institution empowering students with knowledge, skills, and values that enable them to become responsible leaders and innovators, driving positive change in their respective fields and society.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                We envision a world where our graduates are catalysts for transformation, combining academic excellence with social consciousness and ethical leadership.
              </p>
            </div>

            <div className="card p-10 hover:shadow-elevated transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
              </div>
              <h2 className="section-title-base text-left mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6 leading-relaxed font-light">
                To provide world-class education that combines theoretical knowledge with practical application, fostering innovation, entrepreneurship, and research excellence.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                We are committed to developing skilled professionals, conducting meaningful research, and contributing to social and economic development through community engagement and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Core Values</h2>
            <p className="section-subtitle">Principles that guide our decisions and actions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div 
                key={value.title} 
                className="card p-8 hover:shadow-elevated transition-all duration-300 hover-lift group animate-slide-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="container-section bg-gradient-to-br from-primary via-primary-light to-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container-width relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16">By The Numbers</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((item, idx) => (
              <div key={item.label} className="text-center animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <p className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white">{item.number}</p>
                <p className="text-lg opacity-90 font-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Accreditations */}
      <section className="container-section bg-light-dark">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Recognition & Accreditations</h2>
            <p className="section-subtitle">Industry-recognized and internationally accredited programs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏅', title: 'Top 50 Universities', desc: 'Ranked among the top 50 universities in India by multiple national organizations.' },
              { icon: '📜', title: 'Accredited Programs', desc: 'All major programs accredited by NAAC, AICTE, and international quality assurance bodies.' },
              { icon: '🌟', title: 'International Partnerships', desc: 'Collaborations with 50+ universities across USA, UK, Canada, Australia, and Europe.' }
            ].map((item, idx) => (
              <div 
                key={item.title}
                className="card p-10 text-center hover:shadow-elevated transition-all duration-300 hover-lift animate-fade-in"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 inline-block transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose MIT ADT University?</h2>
            <p className="section-subtitle">Discover what sets us apart from other institutions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: '📚', title: 'Academic Excellence', desc: 'Rigorous curriculum designed by industry experts and regularly updated with latest trends.' },
              { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Learn from PhD holders, industry veterans, and award-winning educators with global experience.' },
              { icon: '🏗️', title: 'Modern Infrastructure', desc: 'Smart classrooms, advanced labs, libraries, sports facilities, and digital learning platforms.' },
              { icon: '💼', title: 'Strong Placements', desc: '95%+ placement rate with average package of ₹12-15 lakhs and international opportunities.' },
              { icon: '🔬', title: 'Research & Innovation', desc: 'Active research centers, publications in peer-reviewed journals, and industry collaborations.' },
              { icon: '🌍', title: 'Global Community', desc: 'International student body, exchange programs, and global alumni network of 50,000+.' }
            ].map((item, idx) => (
              <div 
                key={item.title} 
                className="flex gap-6 p-6 rounded-2xl hover:bg-light-dark transition-colors duration-300 animate-slide-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-secondary to-secondary-light text-white text-2xl">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
