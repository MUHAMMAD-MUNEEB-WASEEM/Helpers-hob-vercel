'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We would love to hear from you</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Address</h3>
              <p className="text-gray-600 text-sm">
                Exquisite Services BV<br />
                Netherlands
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-600 text-sm">
                Available during business hours<br />
                Contact via email for fastest response
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600 text-sm">
                support@helpershub.nl<br />
                We respond within 24 hours
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-blue mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="provider">Become a Provider</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-blue mb-6">Company Info</h2>
              <div className="bg-gray-50 p-8 rounded-lg space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Legal Entity</h3>
                  <p className="text-gray-600">Exquisite Services BV</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">KvK Number</h3>
                  <p className="text-gray-600">90849086</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">VAT Number</h3>
                  <p className="text-gray-600">NL865473754B01</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">support@helpershub.nl</p>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">GDPR Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    We handle personal data with care. You stay in control: access, edit, or delete your data anytime. Read our Privacy Policy for details on processing, retention and your rights under the EU General Data Protection Regulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
