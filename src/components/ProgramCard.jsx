import { Link } from 'react-router-dom'

export default function ProgramCard({ title, duration, eligibility, description }) {
  return (
    <div className="card hover-lift h-full group">
      <div className="p-8 flex flex-col h-full">
        {/* Icon indicator */}
        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 3 9.756 3 14s3.5 7.747 9 7.747m0-13c5.5 0 9-3.503 9-7.747m0 13c5.5 0 9-3.503 9-7.747"/>
          </svg>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span className="text-gray-600">
                <span className="font-semibold text-primary">Duration:</span> {duration}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span className="text-gray-600">
                <span className="font-semibold text-primary">Eligibility:</span> {eligibility}
              </span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        </div>

        <Link 
          to="/admissions" 
          className="btn-primary w-full text-center !mt-auto group-hover:shadow-elevated transition-all"
        >
          Apply Now
        </Link>
      </div>

      {/* Border gradient effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary to-secondary-light opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}
