export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Helpers Hub</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded on the principles of compassion and community service, Helpers Hub has been dedicated to making a positive impact in the lives of those we serve. Our organization brings together passionate individuals committed to creating meaningful change.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With years of experience in community care and support services, we have developed innovative programs that address real needs and create lasting solutions. Our team of dedicated professionals works tirelessly to ensure every individual receives the care and attention they deserve.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-orange">10K+</div>
                <p className="text-gray-600">People Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue">50+</div>
                <p className="text-gray-600">Programs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green">100%</div>
                <p className="text-gray-600">Dedicated</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-orange via-primary-blue to-primary-green p-1 rounded-lg">
            <div className="bg-white p-8 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <p className="text-xl font-semibold text-gray-700">Building Stronger Communities Together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
