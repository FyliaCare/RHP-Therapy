'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function Mission() {
  return (
    <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Quote className="w-16 h-16 mx-auto mb-8 text-emerald-400" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Mission
          </h2>

          <p className="text-xl leading-relaxed mb-8 text-gray-100">
            At RHP Therapy, our mission is to deliver high-quality herbal remedies that empower 
            individuals to enhance their well-being naturally. We believe in the healing power of 
            nature, and our values center on <strong>integrity</strong>, <strong>sustainability</strong>, 
            and <strong>education</strong>.
          </p>

          <blockquote className="text-2xl italic text-emerald-200 mb-8 border-l-4 border-emerald-400 pl-6 py-4">
            "Herbs have been used for centuries to support health and wellness. We are dedicated 
            to sharing this timeless knowledge and making it accessible to everyone."
          </blockquote>

          <div className="text-emerald-300">
            <p className="font-semibold">— Jane Smith, Founder</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
