import { HelpCircle } from 'lucide-react'

export default function FAQPage() {
  const faqs = [
    {
      category: 'Product Information',
      questions: [
        {
          q: 'What is MAEFORX?',
          a: 'MAEFORX is our flagship phytotherapy product, formulated using 100% natural Ghanaian herbs. It supports your body\'s natural healing processes and promotes overall wellness.',
        },
        {
          q: 'Is MAEFORX safe to use?',
          a: 'Yes, MAEFORX is made from 100% natural ingredients and is third-party lab tested. However, we recommend consulting your healthcare provider before use, especially if you are pregnant, nursing, or taking other medications.',
        },
        {
          q: 'How long does one bottle last?',
          a: 'Each bottle contains a 30-day supply when taken as directed (2 capsules daily).',
        },
        {
          q: 'Are there any side effects?',
          a: 'MAEFORX is made from natural ingredients and is generally well-tolerated. However, as with any supplement, some individuals may experience mild digestive discomfort. Discontinue use if you experience any adverse reactions.',
        },
      ],
    },
    {
      category: 'Ordering & Payment',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards (Visa, Mastercard), Mobile Money (MTN, Vodafone, AirtelTigo), and bank transfers.',
        },
        {
          q: 'Is my payment information secure?',
          a: 'Yes, we use industry-standard encryption and secure payment gateways to protect your payment information.',
        },
        {
          q: 'Can I cancel or modify my order?',
          a: 'Orders can be cancelled or modified within 2 hours of placement. After that, the order is processed and shipped.',
        },
        {
          q: 'Do you offer bulk discounts?',
          a: 'Yes! Contact us for bulk orders of 10 bottles or more for special pricing.',
        },
      ],
    },
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          q: 'Do you deliver nationwide in Ghana?',
          a: 'Yes, we deliver to all regions in Ghana from our facility in Accra.',
        },
        {
          q: 'How long does delivery take?',
          a: 'Delivery typically takes 2-3 business days for Accra and Greater Accra Region, and 3-5 business days for other regions.',
        },
        {
          q: 'What is the shipping cost?',
          a: 'Shipping is GH₵15 for orders under GH₵100. Orders over GH₵100 qualify for free shipping.',
        },
        {
          q: 'Can I track my order?',
          a: 'Yes, you will receive a tracking number via SMS and email once your order is shipped.',
        },
      ],
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, you can return unopened bottles for a full refund.',
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact our customer service team at info@rhptherapy.com or call +233 30 123 4567 to initiate a return.',
        },
        {
          q: 'When will I receive my refund?',
          a: 'Refunds are processed within 5-7 business days after we receive your returned item.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about RHP Therapy and MAEFORX
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-emerald-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{section.category}</h2>
              </div>
              <div className="p-6 space-y-6">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our customer service team is here to help you
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:info@rhptherapy.com"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+233301234567"
              className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Call: +233 30 123 4567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
