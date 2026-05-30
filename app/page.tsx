import Hero from '@/components/Hero'

export default function Home() {
  const services = [
    { icon: '🧹', title: 'Cleaning', description: 'Professional cleaning services for your home' },
    { icon: '🔧', title: 'Handyman', description: 'Repairs and maintenance by skilled professionals' },
    { icon: '👵', title: 'Elderly Care', description: 'Compassionate care and support for seniors' },
    { icon: '🧒', title: 'Childcare', description: 'Trusted childcare and babysitting services' },
    { icon: '🏠', title: 'Home Maintenance', description: 'Regular maintenance to keep your home in top shape' },
    { icon: '🌳', title: 'Garden Work', description: 'Professional gardening and landscaping services' },
  ]

  const whyChoose = [
    {
      icon: '✓',
      title: 'Verified Profiles',
      desc: 'All providers thoroughly vetted',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: '⏱',
      title: 'Flexible Scheduling',
      desc: 'Book at times that suit you',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      desc: 'No hidden fees, clear upfront',
      bgColor: 'bg-orange-50',
      iconColor: 'text-primary-orange',
    },
    {
      icon: '⚡',
      title: 'Fast Matching',
      desc: 'Get matched quickly',
      bgColor: 'bg-orange-50',
      iconColor: 'text-primary-orange',
    },
    {
      icon: '❤',
      title: 'Friendly Support',
      desc: 'We\'re here to help',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: '🏢',
      title: 'Independent Platform',
      desc: 'Fair for all parties',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
  ]

  const customerSteps = [
    { number: 1, title: 'Register', desc: 'Create your profile in minutes' },
    { number: 2, title: 'Request', desc: 'Tell us what you need' },
    { number: 3, title: 'Match', desc: 'Browse verified professionals' },
    { number: 4, title: 'Choose', desc: 'Select your provider' },
    { number: 5, title: 'Schedule', desc: 'Pick your time' },
  ]

  const providerSteps = [
    { number: 1, title: 'Register', desc: 'Join our network' },
    { number: 2, title: 'Profile', desc: 'Showcase your skills' },
    { number: 3, title: 'Requests', desc: 'Get job opportunities' },
    { number: 4, title: 'Earn', desc: 'Get paid directly' },
  ]

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary-blue tracking-widest uppercase mb-4">Services</p>
            <h2 className="section-title mb-6">What We Offer</h2>
            <p className="section-subtitle">
              Find trusted help for all your home service needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-8 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-elegant">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary-blue tracking-widest uppercase mb-4">Process</p>
            <h2 className="section-title mb-6">How It Works</h2>
            <p className="section-subtitle">Simple steps to get the help you need</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-primary-blue mb-8">For Customers</h3>
              {customerSteps.map((step) => (
                <div key={step.number} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-blue text-white font-bold text-lg group-hover:scale-110 transition-elegant">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-primary-orange mb-8">For Providers</h3>
              {providerSteps.map((step) => (
                <div key={step.number} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary-orange text-white font-bold text-lg group-hover:scale-110 transition-elegant">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary-blue tracking-widest uppercase mb-4">Why Us</p>
            <h2 className="section-title mb-6">Why Choose Helpers'Hub</h2>
            <p className="section-subtitle">
              We're committed to trust, transparency, and quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className={`${item.bgColor} card-elegant p-8`}>
                <div className={`text-4xl ${item.iconColor} mb-6`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-primary-blue tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="section-title mb-6">Loved by Households</h2>
            <p className="section-subtitle">
              See what our customers have to say
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                text: 'Booked weekly cleaning in minutes. My helper is reliable and warm — couldn\'t recommend more.',
                author: 'Sophie Laurent',
                location: 'Brussels',
              },
              {
                rating: 5,
                text: 'Found a fantastic handyman for our renovation. Transparent pricing and instant chat.',
                author: 'Mark Janssen',
                location: 'Luxembourg',
              },
              {
                rating: 5,
                text: 'We hired elderly assistance for my mother — kind, patient and trustworthy.',
                author: 'Lieke Bos',
                location: 'Antwerp',
              },
            ].map((testimonial, index) => (
              <div key={index} className="card-elegant p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary-orange text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-primary-blue tracking-widest uppercase mb-4">About</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Trusted by Thousands
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Helpers'Hub is a trusted platform connecting households with verified home service providers across Europe. We believe everyone deserves access to reliable, affordable help.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make it easy, safe, and affordable to find the help you need. We're committed to transparency, quality, and exceptional service.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary-orange">10K+</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">Happy Customers</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary-blue">5K+</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">Verified Providers</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary-green">4.9★</p>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">Average Rating</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-orange to-primary-green rounded-3xl opacity-10 blur-3xl"></div>
              <div className="relative card-elegant p-12 bg-gradient-to-br from-blue-50 to-orange-50">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-6">🌍</div>
                    <p className="text-2xl font-bold text-primary-blue mb-2">Across Europe</p>
                    <p className="text-gray-600">Serving communities everywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-blue via-primary-blue to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers and providers on Helpers'Hub today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-elegant text-lg">
              Find Help
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-blue font-bold py-4 px-10 rounded-full transition-elegant text-lg">
              Become a Provider
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
