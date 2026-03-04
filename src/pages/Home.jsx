import Hero from '../components/Hero'
import FacultyCard from '../components/FacultyCard'
import ProgramCard from '../components/ProgramCard'

const faculties = [
  {
    icon: '🔧',
    title: 'School of Engineering',
    description: 'Cutting-edge programs in Computer Science, Mechanical, and Civil Engineering.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80'
  },
  {
    icon: '🎨',
    title: 'School of Design',
    description: 'Creative programs in Graphic Design, UX/UI, and Product Design.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80'
  },
  {
    icon: '💼',
    title: 'School of Management',
    description: 'Business excellence programs including MBA and Finance specializations.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80'
  },
  {
    icon: '📺',
    title: 'School of Media',
    description: 'Programs in Journalism, Broadcasting, and Digital Media Production.',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&q=80'
  },
  {
    icon: '📚',
    title: 'School of Humanities',
    description: 'Diverse liberal arts programs in Literature, History, and Languages.',
    image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=500&q=80'
  }
]

const programs = [
  {
    title: 'Bachelor of Computer Applications',
    duration: '3 Years',
    eligibility: '12th Pass',
    description: 'Master programming and software development fundamentals.'
  },
  {
    title: 'Bachelor of Business Administration',
    duration: '3 Years',
    eligibility: '12th Pass',
    description: 'Develop business and management skills for corporate success.'
  },
  {
    title: 'Master of Computer Applications',
    duration: '2 Years',
    eligibility: 'Graduate with 50% marks',
    description: 'Advanced training in software engineering and technology.'
  },
  {
    title: 'Master of Business Administration',
    duration: '2 Years',
    eligibility: 'Graduate with 50% marks',
    description: 'Strategic management and business leadership development.'
  },
  {
    title: 'PhD in Computer Science',
    duration: '3 Years',
    eligibility: 'Master\'s degree',
    description: 'Research-focused doctoral program in cutting-edge technologies.'
  },
  {
    title: 'PhD in Management',
    duration: '3 Years',
    eligibility: 'Master\'s degree',
    description: 'Doctoral research in business and organizational studies.'
  }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'BCA Graduate 2024',
    text: 'MIT ADT University provided me with exceptional education and industry exposure. The faculty and mentors were incredibly supportive.'
  },
  {
    name: 'Arjun Patel',
    role: 'MBA Graduate 2023',
    text: 'The MBA program transformed my career perspective. Amazing case studies, real-world projects, and networking opportunities.'
  },
  {
    name: 'Neha Singh',
    role: 'Design Student',
    text: 'The design school gave me creative freedom and technical skills. I learned from industry professionals in real projects.'
  }
]

const admissionSteps = [
  { step: 1, title: 'Apply Online', description: 'Fill the application form online with your academic details.' },
  { step: 2, title: 'Submit Documents', description: 'Upload transcripts, certificates, and supporting documents.' },
  { step: 3, title: 'Pay Fee', description: 'Complete the application fee payment.' },
  { step: 4, title: 'Interview', description: 'Attend interview or counseling session.' },
  { step: 5, title: 'Admission', description: 'Confirm admission and pay semester fee.' }
]

const news = [
  {
    title: 'MIT ADT Ranked Top 50 Universities in India',
    date: 'Feb 2026',
    image: 'https://images.unsplash.com/photo-1540575467063-178f50002867?w=500&q=80'
  },
  {
    title: 'New Research Center for AI & Machine Learning Inaugurated',
    date: 'Jan 2026',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8186d1bf3e3b359f0?w=500&q=80'
  },
  {
    title: 'Annual Tech Summit 2026 - 500+ Students Participated',
    date: 'Dec 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80'
  }
]

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* About University Section */}
      <section id="about" className="container-section bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="section-title-base text-left mb-6">About Our University</h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg font-light">
                MIT ADT University is a leading institution dedicated to excellence in education, research, and innovation. With a commitment to fostering intellectual growth and social responsibility, we have been shaping leaders and innovators since our establishment.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg font-light">
                Our state-of-the-art infrastructure, experienced faculty, and industry partnerships ensure students receive world-class education preparing them for global challenges.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-light-dark hover:shadow-soft transition-all duration-300">
                  <p className="text-4xl font-bold text-gradient mb-2">500+</p>
                  <p className="text-gray-600 text-sm font-medium">Faculty Members</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-light-dark hover:shadow-soft transition-all duration-300">
                  <p className="text-4xl font-bold text-gradient mb-2">15K+</p>
                  <p className="text-gray-600 text-sm font-medium">Active Students</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-light-dark hover:shadow-soft transition-all duration-300">
                  <p className="text-4xl font-bold text-gradient mb-2">50+</p>
                  <p className="text-gray-600 text-sm font-medium">Programs</p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-delayed">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-secondary-light opacity-20 rounded-2xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1623268011194-d716afefc039?w=600&q=80" 
                alt="Campus" 
                className="relative rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schools / Faculties Section */}
      <section className="container-section bg-gradient-to-b from-light-dark to-light">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Schools & Faculties</h2>
            <p className="section-subtitle">Explore excellence across diverse fields of study and discover your passion</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {faculties.map((faculty, idx) => (
              <div key={faculty.title} className="animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <FacultyCard {...faculty} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Programs</h2>
            <p className="section-subtitle">Choose from our comprehensive range of undergraduate and postgraduate programs designed for your success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program, idx) => (
              <div key={program.title} className="animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/programs" className="btn-primary inline-flex items-center gap-2 group">
              <span>View All Programs</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="container-section bg-gradient-to-b from-light-dark to-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">5-Step Admission Process</h2>
            <p className="section-subtitle">Simple, transparent, and student-friendly admission procedure to get you started</p>
          </div>

          {/* Steps with connecting lines */}
          <div className="grid grid-cols-5 gap-4 mb-12">
            {admissionSteps.map((item, idx) => (
              <div key={item.step} className="relative">
                {/* Connecting line */}
                {idx < admissionSteps.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-secondary-light -z-10"></div>
                )}

                <div className="bg-white rounded-2xl p-6 text-center card-shadow hover:card-elevated transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-elegant">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-primary mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/admissions" className="btn-primary group">
              <span>Start Your Application</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Campus Life Gallery Section */}
      <section className="container-section bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Campus Life</h2>
            <p className="section-subtitle">Experience vibrant student life and world-class facilities</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1427504494785-cdafca3a21b0?w=500&q=80', alt: 'Library', title: 'Modern Library' },
              { src: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&q=80', alt: 'Lab', title: 'Research Lab' },
              { src: 'https://images.unsplash.com/photo-1504384645329-53a613d35337?w=500&q=80', alt: 'Sports', title: 'Sports Complex' },
              { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80', alt: 'Event', title: 'Campus Events' },
              { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80', alt: 'Cafe', title: 'Student Cafe' },
              { src: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&q=80', alt: 'Dorm', title: 'Campus Housing' }
            ].map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 h-64 animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <img 
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container-section bg-gradient-to-br from-primary via-primary-light to-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Students Say</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Hear from our graduates about their transformative journeys at MIT ADT</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.name} 
                className="card bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover-lift animate-slide-up"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-white text-lg mb-8 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="border-t border-white/20 pt-6">
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-secondary text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="container-section bg-light-dark">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Latest News & Events</h2>
            <p className="section-subtitle">Stay updated with what's happening at MIT ADT</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <div 
                key={item.title}
                className="card overflow-hidden hover-lift group h-full animate-fade-in"
                style={{animationDelay: `${idx * 0.15}s`}}
              >
                <div className="relative overflow-hidden h-48 bg-gray-300">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="badge text-white bg-secondary text-xs">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <a 
                    href="#" 
                    className="text-secondary font-semibold hover:text-secondary-light transition-colors duration-300 inline-flex items-center gap-2 mt-auto group/link"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-section bg-gradient-to-r from-secondary to-secondary-light relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container-width relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful students at MIT ADT University and shape your career with world-class education.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/admissions" className="btn-primary !bg-white !text-secondary hover:!bg-light">
              Apply Today
            </a>
            <a href="/about" className="btn-outline !text-white !border-white hover:!bg-white/20">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
