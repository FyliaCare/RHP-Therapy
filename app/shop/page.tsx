'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/lib/store/cart'
import toast from 'react-hot-toast'

// Mock products data
const categories = ['All Products', 'Immune Support', 'Digestive Health', 'Anti-Inflammatory', 'Energy & Vitality']

const products = [
  {
    id: '1',
    name: 'MAEFORX Immune Booster',
    slug: 'maeforx-immune-booster',
    category: 'Immune Support',
    price: 49.99,
    comparePrice: 69.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
    rating: 4.9,
    reviews: 248,
    stock: 50,
    description: 'Premium natural immune system support formula with powerful herbal ingredients',
  },
  {
    id: '2',
    name: 'Ginger Root Extract',
    slug: 'ginger-root-extract',
    category: 'Digestive Health',
    price: 34.99,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1615485500181-4908c2d28999?w=500',
    rating: 4.8,
    reviews: 187,
    stock: 35,
    description: 'Powerful anti-inflammatory and digestive support from pure ginger',
  },
  {
    id: '3',
    name: 'Herbal Wellness Blend',
    slug: 'herbal-wellness-blend',
    category: 'Energy & Vitality',
    price: 39.99,
    comparePrice: 54.99,
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500',
    rating: 4.7,
    reviews: 156,
    stock: 42,
    description: 'Complete holistic wellness support formula for daily vitality',
  },
  {
    id: '4',
    name: 'Turmeric Supreme',
    slug: 'turmeric-supreme',
    category: 'Anti-Inflammatory',
    price: 44.99,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500',
    rating: 4.9,
    reviews: 312,
    stock: 28,
    description: 'High-potency turmeric with enhanced absorption for inflammation support',
  },
  {
    id: '5',
    name: 'Echinacea Defense',
    slug: 'echinacea-defense',
    category: 'Immune Support',
    price: 32.99,
    comparePrice: null,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500',
    rating: 4.6,
    reviews: 143,
    stock: 60,
    description: 'Natural immune system fortification with premium echinacea',
  },
  {
    id: '6',
    name: 'Chamomile Calm',
    slug: 'chamomile-calm',
    category: 'Energy & Vitality',
    price: 29.99,
    comparePrice: 39.99,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500',
    rating: 4.8,
    reviews: 221,
    stock: 45,
    description: 'Soothing chamomile blend for relaxation and stress relief',
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [searchQuery, setSearchQuery] = useState('')
  const { addItem } = useCart()

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      stock: product.stock,
    })
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-emerald-100">
              Discover premium herbal remedies for natural wellness
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <Link href={`/shop/${product.slug}`} className="relative block aspect-square overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {product.comparePrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    SALE
                  </div>
                )}
                {product.stock < 20 && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    Low Stock
                  </div>
                )}
              </Link>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-emerald-600 font-semibold mb-2">
                  {product.category}
                </div>

                <Link href={`/shop/${product.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </div>
                    {product.comparePrice && (
                      <div className="text-sm text-gray-400 line-through">
                        ${product.comparePrice}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-all flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
