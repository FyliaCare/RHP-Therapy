'use client'

import { motion } from 'framer-motion'
import { Leaf, Shield, Heart, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Natural Healing',
    description: 'Phytotherapy uses plant-based remedies that work in harmony with the body for gentle and effective healing.',
    color: 'emerald',
  },
  {
    icon: Shield,
    title: 'Boosts Immunity',
    description: 'Herbal medicines strengthen the immune system, helping the body fight infections and maintain resilience.',
    color: 'blue',
  },
  {
    icon: Heart,
    title: 'Holistic Balance',
    description: 'It promotes overall well-being by addressing the root causes of health issues, not just the symptoms.',
    color: 'rose',
  },
  {
    icon: Sparkles,
    title: 'Safe & Sustainable',
    description: 'Derived from natural sources, phytotherapy is eco-friendly and minimizes side effects compared to synthetic drugs.',
    color: 'amber',
  },
]

const colorClasses: Record<string, { bg: string; text: string; hover: string }> = {
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    hover: 'group-hover:bg-emerald-600',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    hover: 'group-hover:bg-blue-600',
  },
  rose: {
    bg: 'bg-rose-100',
    text: 'text-rose-600',
    hover: 'group-hover:bg-rose-600',
  },
  amber: {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    hover: 'group-hover:bg-amber-600',
  },
}

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-emerald-600">Phytotherapy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of nature's remedies backed by centuries of traditional wisdom
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colors = colorClasses[feature.color]
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} ${colors.hover} rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
