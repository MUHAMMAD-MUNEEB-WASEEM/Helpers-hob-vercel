export default function CTA() {
  return (
    <section className="py-20 gradient-blue-green text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join us in our mission to provide compassionate care and support to those in need. Together, we can create meaningful change in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
            Get Involved
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary-blue font-bold py-3 px-8 rounded-lg transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
