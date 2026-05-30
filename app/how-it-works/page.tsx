import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How it Works - Helpers\'Hub',
  description: 'Learn how Helpers\'Hub connects customers with trusted home service providers.',
}

export default function HowItWorksPage() {
  const customerSteps = [
    { number: 1, title: 'Register your account', desc: 'Create your profile in minutes' },
    { number: 2, title: 'Request a service', desc: 'Tell us what you need help with' },
    { number: 3, title: 'Get matched with verified providers', desc: 'Browse trusted professionals' },
    { number: 4, title: 'Choose your provider', desc: 'Select based on ratings and availability' },
    { number: 5, title: 'Schedule the work', desc: 'Pick a time that works for you' },
  ]

  const providerSteps = [
    { number: 1, title: 'Register as a provider', desc: 'Join our trusted network' },
    { number: 2, title: 'Create your profile', desc: 'Showcase your skills and experience' },
    { number: 3, title: 'Receive job requests', desc: 'Get notified of matching opportunities' },
    { number: 4, title: 'Get paid directly', desc: 'Secure payments to your account' },
  ]

  const whyChoose = [
    {
      icon: '✓',
      title: 'Verified provider profiles',
      desc: 'All providers are thoroughly vetted and verified',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: '⏱',
      title: 'Flexible scheduling',
      desc: 'Book services at times that suit you best',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: '💰',
      title: 'Transparent pricing',
      desc: 'No hidden fees, clear pricing upfront',
      bgColor: 'bg-orange-50',
      iconColor: 'text-primary-orange',
    },
    {
      icon: '⚡',
      title: 'Fast matching',
      desc: 'Get matched with providers quickly',
      bgColor: 'bg-orange-50',
      iconColor: 'text-primary-orange',
    },
    {
      icon: '❤',
      title: 'Friendly support',
      desc: 'Our team is here to help you',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: '🏢',
      title: 'Independent intermediary',
      desc: 'Neutral platform for fair transactions',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
  ]

  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-primary-blue mb-4">
            How Helpers'Hub works
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for help or offering your services, our platform makes it simple and secure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-blue mb-12">For customers</h2>
              <div className="space-y-8">
                {customerSteps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-blue text-white font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-orange mb-12">For providers</h2>
              <div className="space-y-8">
                {providerSteps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-orange text-white font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary-blue tracking-wide mb-2">WHY US</p>
            <h2 className="text-4xl font-bold text-primary-blue mb-4">
              Why Choose Helpers'Hub
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className={`${item.bgColor} p-8 rounded-lg`}>
                <div className={`text-3xl ${item.iconColor} mb-4`}>{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary-blue tracking-wide mb-2">TESTIMONIALS</p>
            <h2 className="text-4xl font-bold text-primary-blue mb-4">
              Loved by households everywhere
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                rating: 5,
                text: '"Booked weekly cleaning in minutes. My helper is reliable and warm — couldn\'t recommend more."',
                author: 'Sophie Laurent',
                location: 'Brussels',
              },
              {
                rating: 5,
                text: '"Found a fantastic handyman for our renovation. Transparent pricing and instant chat."',
                author: 'Mark Janssen',
                location: 'Luxembourg',
              },
              {
                rating: 5,
                text: '"We hired elderly assistance for my mother — kind, patient and trustworthy."',
                author: 'Lieke Bos',
                location: 'Antwerp',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary-orange text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and providers on Helpers'Hub today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition">
              Find Help
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-blue font-bold py-3 px-8 rounded-full transition">
              Become a Provider
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
