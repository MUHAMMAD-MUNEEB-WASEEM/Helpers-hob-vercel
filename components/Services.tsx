export default function Services() {
  const services = [
    {
      icon: '🏥',
      title: 'Healthcare Support',
      description: 'Comprehensive healthcare assistance and medical support services tailored to individual needs.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Care',
      description: 'Dedicated family support programs designed to strengthen bonds and improve quality of life.',
    },
    {
      icon: '🎓',
      title: 'Education Programs',
      description: 'Educational initiatives and mentorship programs to empower individuals and communities.',
    },
    {
      icon: '💼',
      title: 'Career Development',
      description: 'Professional training and career guidance to help individuals achieve their goals.',
    },
    {
      icon: '🏠',
      title: 'Housing Assistance',
      description: 'Support services to help individuals find safe and affordable housing solutions.',
    },
    {
      icon: '🤝',
      title: 'Community Outreach',
      description: 'Active community engagement programs that foster connection and mutual support.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to support and empower individuals and families in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
