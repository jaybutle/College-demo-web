import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 95, 0.85) 0%, rgba(79, 70, 229, 0.75) 100%), url(https://images.unsplash.com/photo-1541339907198-ccb3ee7dfa51?w=1200&q=80)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-gentle"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-gentle animation-delay-2000"></div>

      <div className="container-width relative z-10">
        <div className="text-center text-white px-4 max-w-3xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="badge text-white bg-white/20 backdrop-blur-md border border-white/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Welcome to Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display animate-slide-up">
            MIT ADT University
          </h1>

          <p className="text-lg md:text-2xl mb-12 opacity-95 leading-relaxed font-light animate-slide-up-delayed">
            Excellence in Education. Innovation in Research. Leadership in Service.
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delayed">
            <Link 
              to="/admissions" 
              className="btn-primary group"
            >
              <span>Apply Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>

            <a 
              href="#about" 
              className="btn-outline !text-white !border-white hover:!bg-white hover:!text-primary group"
            >
              <span>Discover More</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </a>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 text-center animate-fade-in-more-delayed">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold">15K+</p>
              <p className="text-sm md:text-base text-white/80">Active Students</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-sm md:text-base text-white/80">Faculty Members</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold">50+</p>
              <p className="text-sm md:text-base text-white/80">Programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  )
}
