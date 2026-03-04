export default function FacultyCard({ icon, title, description, image }) {
  return (
    <div className="card overflow-hidden hover-lift group h-full flex flex-col transition-all duration-300">
      {/* Image Container with overlay */}
      <div className="relative overflow-hidden h-56 md:h-64 bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="btn-primary scale-75 group-hover:scale-100 transition-transform duration-300">
            Explore
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 flex-grow mb-6 leading-relaxed">
          {description}
        </p>

        {/* Button */}
        <button className="btn-outline w-full text-center">
          Learn More
        </button>
      </div>

      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-secondary to-secondary-light transform origin-left group-hover:origin-right transition-all duration-500 scale-x-0 group-hover:scale-x-100"></div>
    </div>
  )
}
