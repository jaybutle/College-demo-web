export default function Students() {
  const branchEnrollment = [
    { name: 'Computer Science (BCA/B.Tech CS)', students: 450, color: 'from-blue-500 to-blue-600' },
    { name: 'Business Administration (BBA)', students: 320, color: 'from-green-500 to-green-600' },
    { name: 'Data Science & AI (M.Tech)', students: 180, color: 'from-purple-500 to-purple-600' },
    { name: 'Engineering (B.Tech)', students: 280, color: 'from-orange-500 to-orange-600' },
    { name: 'Design', students: 150, color: 'from-pink-500 to-pink-600' },
    { name: 'Mathematics & Science', students: 220, color: 'from-cyan-500 to-cyan-600' }
  ]

  const achievements = [
    { title: '98% Placement Rate', desc: 'Graduates placed in top companies', icon: '🎯' },
    { title: '50+ Internships', desc: 'Students interning at Fortune 500 companies', icon: '💼' },
    { title: '200+ Publications', desc: 'Student research papers published in journals', icon: '📚' },
    { title: '15+ Awards', desc: 'National and international competitions won', icon: '🏆' },
    { title: '25+ Startups', desc: 'Student-led startups and ventures launched', icon: '🚀' },
    { title: '100+ Certifications', desc: 'Industry certifications earned by students', icon: '🎓' }
  ]

  const successStories = [
    {
      name: 'Arjun Sharma',
      batch: 'BCA 2021',
      company: 'Google',
      position: 'Software Engineer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
      achievement: 'Promoted to Senior Engineer within 2 years. Led 3 major projects impacting 1M+ users.',
      branch: 'Computer Science'
    },
    {
      name: 'Priya Verma',
      batch: 'MBA 2022',
      company: 'McKinsey & Company',
      position: 'Management Consultant',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      achievement: 'Fastest promoted consultant. Managing portfolio of 5 Fortune 500 clients.',
      branch: 'Business Administration'
    },
    {
      name: 'Rohan Patel',
      batch: 'B.Tech CS 2020',
      company: 'Meta',
      position: 'Machine Learning Engineer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
      achievement: 'Deployed ML models serving 500M+ users. 5+ patents filed.',
      branch: 'Computer Science'
    },
    {
      name: 'Neha Singh',
      batch: 'Design 2019',
      company: 'IDEO',
      position: 'Lead Product Designer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
      achievement: 'Award-winning designer. Featured in Design magazines worldwide.',
      branch: 'Design'
    },
    {
      name: 'Vikram Desai',
      batch: 'M.Tech Data Science 2021',
      company: 'Goldman Sachs',
      position: 'Senior Data Scientist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
      achievement: 'Developed predictive models reducing trading losses by 23%.',
      branch: 'Data Science'
    },
    {
      name: 'Anjali Nair',
      batch: 'BBA 2020',
      company: 'Own Startup',
      position: 'Founder & CEO',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
      achievement: 'Founded EdTech startup with $2M funding. 50K+ users in 6 months.',
      branch: 'Business Administration'
    }
  ]

  const testimonials = [
    {
      quote: "MIT ADT University transformed my career. The faculty's mentorship and industry exposure gave me edge in interviews.",
      author: 'Rahul Kumar',
      role: 'Senior Software Architect at Amazon',
      batch: 'B.Tech 2019'
    },
    {
      quote: "The curriculum was industry-aligned and practical. We didn't just learn theories, we built real-world solutions.",
      author: 'Deepika Mahajan',
      role: 'Product Manager at Flipkart',
      batch: 'MBA 2021'
    },
    {
      quote: "Amazing support for entrepreneurship. The startup incubation program helped us build our first venture.",
      author: 'Samir Chopra',
      role: 'Founder, TechVenture Labs',
      batch: 'B.Tech 2020'
    },
    {
      quote: "The global exposure through exchange programs was invaluable. Studied in Singapore and interned in US.",
      author: 'Kavya Sharma',
      role: 'Data Analyst at Microsoft',
      batch: 'B.Com 2020'
    }
  ]

  const totalStudents = branchEnrollment.reduce((sum, branch) => sum + branch.students, 0)

  return (
    <div className="bg-light w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-24">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Students</h1>
            <p className="text-xl opacity-95 leading-relaxed">Discover the brilliant minds shaping the future. Over {totalStudents.toLocaleString()}+ students across programs</p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: `${totalStudents}+`, label: 'Active Students', icon: '👥' },
              { number: '6', label: 'Academic Branches', icon: '🎓' },
              { number: '98%', label: 'Placement Rate', icon: '💼' },
              { number: '25+', label: 'Student Startups', icon: '🚀' }
            ].map((stat) => (
              <div key={stat.label} className="card p-8 text-center hover:shadow-elevated transition-all duration-300 hover-lift group">
                <div className="text-5xl mb-4 group-hover:scale-110 inline-block transition-transform duration-300">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-secondary mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students by Branch */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="badge-secondary inline-block mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v-3h8v3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              Enrollment Distribution
            </div>
            <h2 className="section-title mb-4">Students by Branch</h2>
            <p className="section-subtitle">Current enrollment across our academic programs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Branch List */}
            <div className="space-y-6">
              {branchEnrollment.map((branch) => {
                const percentage = (branch.students / totalStudents) * 100
                return (
                  <div key={branch.name} className="card p-6 hover:shadow-elevated transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-primary text-lg">{branch.name}</h3>
                      <span className="badge-secondary text-sm">{branch.students} students</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${branch.color} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{percentage.toFixed(1)}% of total enrollment</p>
                  </div>
                )
              })}
            </div>

            {/* Visual Stats */}
            <div className="space-y-8">
              <div className="card p-8 bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
                <h3 className="text-2xl font-bold text-primary mb-6">Program Distribution</h3>
                <div className="space-y-4">
                  {branchEnrollment.map((branch) => (
                    <div key={branch.name} className="flex justify-between items-center p-3 bg-white rounded-lg hover:shadow-md transition-all">
                      <span className="font-semibold text-gray-700">{branch.name}</span>
                      <span className={`bg-gradient-to-r ${branch.color} text-white px-4 py-2 rounded-full font-bold text-sm`}>
                        {branch.students}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="badge-secondary inline-block mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Student Achievements
            </div>
            <h2 className="section-title mb-4">Our Students Excel</h2>
            <p className="section-subtitle">Recognition and achievements across academics, research, and professional spheres</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <div 
                key={achievement.title}
                className="card p-8 text-center hover:shadow-elevated transition-all duration-300 hover-lift animate-fade-in"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-5xl mb-4 inline-block">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="badge-secondary inline-block mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000-2A4 4 0 000 5v10a4 4 0 004 4h12a4 4 0 004-4V5a4 4 0 00-8 0v-.5a1 1 0 00-2 0V5a4 4 0 00-8 0z" clipRule="evenodd"/>
              </svg>
              Success Stories
            </div>
            <h2 className="section-title mb-4">Where Our Graduates Work</h2>
            <p className="section-subtitle">Inspiring journeys from MIT ADT to global success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div 
                key={story.name}
                className="card overflow-hidden hover:shadow-elevated transition-all duration-300 hover-lift animate-slide-up"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="bg-gradient-to-r from-secondary to-primary p-6 text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white overflow-hidden">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{story.batch}</p>
                  <div className="badge-primary text-xs inline-block mb-3">{story.branch}</div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Currently at</p>
                    <p className="font-bold text-primary text-lg">{story.company}</p>
                    <p className="text-secondary">{story.position}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed border-t pt-4">
                    <span className="font-semibold text-primary">"</span>{story.achievement}<span className="font-semibold text-primary">"</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <div className="badge-secondary inline-block mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l4 4v-4h3a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l-4 4v-4H2a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2z" clipRule="evenodd"/>
              </svg>
              Student Testimonials
            </div>
            <h2 className="section-title mb-4">What Students Say</h2>
            <p className="section-subtitle">Real experiences from our accomplished alumni</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.author}
                className="card p-8 hover:shadow-elevated transition-all duration-300 hover-lift border-l-4 border-secondary animate-fade-in"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-secondary mt-1">Batch {testimonial.batch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Highlights */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Student Life Highlights</h2>
            <p className="section-subtitle">Beyond academics - clubs, events, and campus experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎭', title: 'Cultural Events', desc: 'Annual fest with performances, competitions & celebrations' },
              { icon: '⚽', title: 'Sports & Fitness', desc: 'Active sports clubs and inter-college tournaments' },
              { icon: '💻', title: 'Tech Clubs', desc: 'AI, Web Dev, Robotics clubs with hands-on projects' },
              { icon: '🤝', title: 'Community Service', desc: 'NSS activities and social responsibility programs' },
              { icon: '📱', title: 'Innovation Labs', desc: 'Hackathons and innovation challenges throughout the year' },
              { icon: '🌍', title: 'Global Exchange', desc: 'Partnerships with universities for student exchange' },
              { icon: '🎓', title: 'Mentorship', desc: 'Senior students mentor juniors in academics and career' },
              { icon: '🏢', title: 'Industry Visits', desc: 'Regular industrial tours and guest lectures' }
            ].map((highlight) => (
              <div key={highlight.title} className="card p-6 text-center hover:shadow-elevated transition-all duration-300 hover-lift group">
                <div className="text-4xl mb-3 group-hover:scale-125 inline-block transition-transform duration-300">{highlight.icon}</div>
                <h3 className="font-bold text-primary mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Become part of a thriving community of {totalStudents.toLocaleString()}+ students pursuing excellence</p>
          <a href="/admissions" className="btn-primary !bg-white !text-secondary hover:!bg-light group">
            <span>Start Your Journey</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
