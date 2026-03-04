export default function Research() {
  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Cutting-edge research in AI applications, deep learning, and neural networks.',
      faculty: '15+ PhD Researchers'
    },
    {
      title: 'Cloud Computing & IoT',
      description: 'Advanced research in distributed systems, edge computing, and Internet of Things.',
      faculty: '12+ PhD Researchers'
    },
    {
      title: 'Cybersecurity & Blockchain',
      description: 'Research focused on security protocols, vulnerability assessment, and blockchain technology.',
      faculty: '10+ PhD Researchers'
    },
    {
      title: 'Business Analytics & Data Science',
      description: 'Data-driven research in business intelligence, predictive modeling, and business optimization.',
      faculty: '8+ PhD Researchers'
    },
    {
      title: 'Sustainable Development',
      description: 'Research initiatives aligned with UN Sustainable Development Goals.',
      faculty: '7+ PhD Researchers'
    },
    {
      title: 'Digital Media & Communication',
      description: 'Research in digital content creation, social media analytics, and communication technologies.',
      faculty: '6+ PhD Researchers'
    }
  ]

  return (
    <div className="bg-light">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Research & Innovation</h1>
          <p className="text-xl opacity-90">Pioneering research advancing knowledge and solving global challenges</p>
        </div>
      </section>

      {/* Research Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" 
              alt="Research Lab" 
              className="rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">Our Research Vision</h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                MIT ADT University is committed to conducting high-impact research that addresses real-world problems and contributes to societal progress. Our researchers collaborate with industry partners, government agencies, and international institutions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>150+ active research projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>100+ publications in peer-reviewed journals annually</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>50+ research collaborations with international universities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>State-of-the-art research facilities and labs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Key Research Areas</h2>
          <p className="section-subtitle">Excellence in diverse fields of research and innovation</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-8 card-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <p className="text-secondary font-semibold text-sm">{area.faculty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Research Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden card-shadow">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80" alt="AI Lab" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Advanced Computation Lab</h3>
                <p className="text-gray-600">State-of-the-art computers and AI infrastructure for cutting-edge research.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden card-shadow">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80" alt="Design Lab" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Innovation & Design Studios</h3>
                <p className="text-gray-600">Creative spaces for prototyping, design thinking, and product development.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden card-shadow">
              <img src="https://images.unsplash.com/photo-1576091160650-112884e53805?w=500&q=80" alt="Research Center" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Research Hub</h3>
                <p className="text-gray-600">Collaborative spaces for interdisciplinary research and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PhD Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Doctoral Programs</h2>
          <p className="section-subtitle">Advanced research opportunities for aspiring scholars</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">PhD in Computer Science</h3>
              <p className="text-gray-600 mb-4">Duration: 3 years | Full-time only</p>
              <p className="text-gray-600 mb-4">Specializations: AI/ML, Cloud Computing, Cybersecurity, Data Science</p>
              <a href="/admissions" className="btn-primary inline-block">Apply Now</a>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">PhD in Management</h3>
              <p className="text-gray-600 mb-4">Duration: 3 years | Full-time option available</p>
              <p className="text-gray-600 mb-4">Specializations: Business Analytics, Sustainable Development, Entrepreneurship</p>
              <a href="/admissions" className="btn-primary inline-block">Apply Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
