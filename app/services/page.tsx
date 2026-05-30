import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Helpers\'Hub',
  description: 'Explore our comprehensive range of home services.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: '🧹',
      title: 'Cleaning',
      description: 'Professional cleaning services for your home',
    },
    {
      icon: '🔧',
      title: 'Handyman',
      description: 'Repairs and maintenance by skilled professionals',
    },
    {
      icon: '👵',
      title: 'Elderly Care',
      description: 'Compassionate care and support for seniors',
    },
    {
      icon: '🧒',
      title: 'Childcare',
      description: 'Trusted childcare and babysitting services',
    },
    {
      icon: '🏠',
      title: 'Home Maintenance',
      description: 'Regular maintenance to keep your home in top shape',
    },
    {
      icon: '🌳',
      title: 'Garden Work',
      description: 'Professional gardening and landscaping services',
    },
  ]

  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Find trusted help for all your home service needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
