'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

// Our featured product - MAEFORX
const product = {
  id: '1',
  name: 'MAEFORX Immune Booster',
  slug: 'maeforx-immune-booster',
  price: 49.99,
  comparePrice: null,
  image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
  rating: 4.9,
  reviews: 248,
  description: 'Premium natural immune system support formula. Made in Ghana with traditional herbal ingredients.',
  features: [
    'Made in Accra, Ghana',
    'Nationwide delivery available',
    '100% natural ingredients',
    'Clinically tested formula'
  ]
}

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
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
            Our <span className="text-emerald-600">Product</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MAEFORX - Ghana's premium natural immune booster, made with pride in Accra
          </p>
        </motion.div>

        {/* Product Showcase */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid md:grid-cols-2">
              {/* Product Image */}
              <Link href={`/shop/${product.slug}`} className="relative aspect-square overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </Link>

              {/* Product Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Link href={`/shop/${product.slug}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-emerald-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-gray-600 font-semibold">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <div>
                    <div className="text-4xl font-bold text-emerald-600">
                      GH₵{product.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      Free delivery nationwide
                    </div>
                  </div>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all flex items-center space-x-2 font-semibold text-lg"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span>Order Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
