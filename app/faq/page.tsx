import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Helpers\'Hub',
  description: 'Frequently asked questions about Helpers\'Hub services.',
}

export default function FAQPage() {
  const faqs = [
    {
      question: 'How does Helpers\'Hub work?',
      answer: 'Helpers\'Hub is a platform that connects households with verified home service providers. Customers post their service needs, get matched with qualified providers, and can book services directly through our platform. Providers create profiles, receive job requests, and get paid securely.',
    },
    {
      question: 'Is Helpers\'Hub an employer of the helpers?',
      answer: 'No, Helpers\'Hub operates as an independent intermediary platform. Service providers are independent professionals, not employees of Helpers\'Hub. We facilitate the connection between customers and providers but are not party to the service agreements between them.',
    },
    {
      question: 'How are providers verified?',
      answer: 'All providers on our platform undergo a thorough verification process including background checks, identity verification, and skill assessment. We maintain strict quality standards to ensure customer safety and satisfaction.',
    },
    {
      question: 'How are payments handled?',
      answer: 'Payments are processed securely through our platform. Customers pay through our secure payment system, and providers receive payments directly to their bank accounts. We handle all payment processing and ensure transparency in pricing.',
    },
    {
      question: 'Can I leave a review?',
      answer: 'Yes, after each service, both customers and providers can leave reviews and ratings. This helps maintain quality and transparency on our platform. Reviews are verified and authentic.',
    },
    {
      question: 'How do I cancel a booking?',
      answer: 'You can cancel bookings through your account dashboard. Cancellation policies depend on how close the booking is to the scheduled date. Please refer to our terms and conditions for specific cancellation policies.',
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'If you\'re not satisfied with a service, please contact our support team immediately. We have a dispute resolution process to ensure fair outcomes for both customers and providers.',
    },
    {
      question: 'Is my personal data safe?',
      answer: 'Yes, we take data security very seriously. Helpers\'Hub is GDPR compliant and uses industry-standard encryption to protect your personal information. You have full control over your data and can access, edit, or delete it anytime.',
    },
  ]

  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            Frequently asked questions
          </h1>
          <p className="text-xl text-gray-600">Find answers to common questions</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition group">
                <summary className="font-bold text-lg text-gray-900 flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-blue ml-4 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary-blue mb-4">Didn't find your answer?</h2>
            <p className="text-gray-600 mb-6">
              If you have additional questions, please don't hesitate to contact our support team.
            </p>
            <button className="bg-primary-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
