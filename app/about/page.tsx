'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Award, Leaf } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We maintain the highest standards in sourcing and producing our herbal remedies.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Our commitment to eco-friendly practices ensures a healthier planet for future generations.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in building strong relationships with our customers and supporting their wellness journey.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Quality is at the heart of everything we do, from sourcing to product formulation.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About RHP Therapy</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Empowering natural wellness through the ancient wisdom of phytotherapy
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At RHP Therapy (Royal Home of Phytotherapy), our mission is to deliver high-quality 
              herbal remedies that empower individuals to enhance their well-being naturally. We 
              believe in the healing power of nature, and our values center on integrity, 
              sustainability, and education.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is to provide effective solutions while fostering a deeper understanding of 
              herbal medicine among our customers. We're dedicated to sharing timeless knowledge 
              and making natural wellness accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Founded with a passion for natural healing, RHP Therapy began as a vision to bring 
                the powerful benefits of phytotherapy to modern wellness seekers. Our journey started 
                with extensive research into traditional herbal remedies and their scientific validation.
              </p>
              <p className="mb-6">
                Today, we're proud to offer a comprehensive range of premium herbal products, each 
                carefully formulated to address specific health needs while maintaining the highest 
                standards of quality and purity.
              </p>
              <p>
                Every product we create is backed by both ancient wisdom and modern science, ensuring 
                that our customers receive effective, safe, and natural solutions for their wellness journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
