export default function Hero() {
  return (
    <section className="relative bg-white py-16 md:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full -ml-36 -mb-36 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary-blue tracking-widest uppercase">
                Trusted Home Services Across Europe
              </p>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-primary-blue">Helping</span>
                <br />
                <span className="text-primary-orange">Hands,</span>
                <br />
                <span className="text-primary-blue">Caring</span>
                <br />
                <span className="text-primary-orange">Hearts</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Connect with verified, trusted home service providers. From cleaning to handyman services, find the help you need with confidence and ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-accent">
                Find Help
              </button>
              <button className="btn-secondary">
                Become a Provider
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-200">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Verified Providers</p>
                <p className="text-2xl font-bold text-primary-blue">5K+</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Happy Customers</p>
                <p className="text-2xl font-bold text-primary-blue">10K+</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Average Rating</p>
                <p className="text-2xl font-bold text-primary-orange">4.9★</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-primary-orange to-primary-green rounded-3xl opacity-10 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-12 border border-gray-100 shadow-xl">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-6">🤝</div>
                    <p className="text-2xl font-bold text-primary-blue mb-2">Professional Help</p>
                    <p className="text-gray-600">At Your Fingertips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
