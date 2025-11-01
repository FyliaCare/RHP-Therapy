'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-linear-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
              <Leaf className="w-4 h-4" />
              <span>100% Natural & Organic</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Heal Naturally with{' '}
              <span className="text-emerald-600">Phytotherapy</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Made in Ghana with pride. Our premium MAEFORX immune booster combines traditional 
              herbal wisdom with modern science. Manufactured in Accra with nationwide delivery across Ghana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get MAEFORX
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-emerald-600">Made in</div>
                <div className="text-sm text-gray-600">Accra, Ghana</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Natural Product</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">Ghana</div>
                <div className="text-sm text-gray-600">Nationwide Delivery</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Leaf className="w-32 h-32 mx-auto mb-4 opacity-80" />
                  <h3 className="text-4xl font-bold mb-2">MAEFORX</h3>
                  <p className="text-xl">Natural Immune Booster</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]"
            >
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Premium Quality
              </div>
              <div className="text-xs text-gray-600">
                Certified organic herbs from trusted sources
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
