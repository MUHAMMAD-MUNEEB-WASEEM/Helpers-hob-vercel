import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Helpers\'Hub',
  description: 'Learn about Helpers\'Hub mission and values.',
}

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">About Helpers'Hub</h1>
          <p className="text-xl text-gray-600">Our mission to connect trusted helpers with households</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-blue mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Helpers'Hub was founded with a simple mission: to connect households with trusted, verified home service providers. We believe that everyone deserves access to reliable, affordable help for their everyday needs.
              </p>
              <p className="text-gray-600">
                Our platform brings together skilled professionals and households across Europe, creating a transparent and secure marketplace for home services. We're committed to making it easy, safe, and affordable to find the help you need.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <p className="text-lg font-semibold">Company Image</p>
                <p className="text-sm">(Add your company image here)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-blue mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To create a trusted platform that connects households with verified home service providers, making it easy and affordable to find reliable help for everyday needs.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary-orange mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading platform for home services in Europe, known for trust, transparency, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary-blue mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Trust', desc: 'We verify all providers and maintain the highest standards of security.' },
              { title: 'Transparency', desc: 'Clear pricing, honest communication, and no hidden fees.' },
              { title: 'Quality', desc: 'We ensure every service meets our high standards of excellence.' },
              { title: 'Accessibility', desc: 'Making home services affordable and available to everyone.' },
              { title: 'Community', desc: 'Building connections between helpers and households.' },
              { title: 'Innovation', desc: 'Continuously improving our platform for better service.' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold text-primary-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
