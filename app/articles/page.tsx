'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'

const articles = [
  {
    id: '1',
    title: 'Ginger: Nature\'s Powerful Healer',
    slug: 'ginger-natures-powerful-healer',
    excerpt: 'Ginger (Zingiber officinale) is one of the most widely used medicinal plants in the world. Known for its warm, spicy flavor and powerful healing properties.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1615485500181-4908c2d28999?w=800',
    author: 'Dr. Sarah Johnson',
    publishedAt: 'September 16, 2025',
    category: 'Herbal Remedies',
  },
  {
    id: '2',
    title: 'The Benefits of Phyto Healing',
    slug: 'benefits-of-phyto-healing',
    excerpt: 'Phytotherapy, also known as plant-based healing, is one of the world\'s oldest forms of medicine — and today, it is experiencing a remarkable renaissance.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800',
    author: 'Jane Smith',
    publishedAt: 'August 28, 2025',
    category: 'Wellness',
  },
  {
    id: '3',
    title: 'Turmeric: The Golden Spice of Life',
    slug: 'turmeric-golden-spice-of-life',
    excerpt: 'Discover the incredible anti-inflammatory properties of turmeric and how this ancient spice can transform your health and wellness routine.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800',
    author: 'Dr. Michael Chen',
    publishedAt: 'October 5, 2025',
    category: 'Anti-Inflammatory',
  },
  {
    id: '4',
    title: 'Building Immunity Naturally',
    slug: 'building-immunity-naturally',
    excerpt: 'Learn how herbal remedies and natural supplements can strengthen your immune system and help your body fight off infections naturally.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
    author: 'Dr. Sarah Johnson',
    publishedAt: 'October 20, 2025',
    category: 'Immune Support',
  },
  {
    id: '5',
    title: 'Herbal Remedies for Digestive Health',
    slug: 'herbal-remedies-digestive-health',
    excerpt: 'Explore natural solutions for common digestive issues using time-tested herbal remedies that promote gut health and overall wellness.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
    author: 'Lisa Green',
    publishedAt: 'October 12, 2025',
    category: 'Digestive Health',
  },
  {
    id: '6',
    title: 'The Science Behind Herbal Medicine',
    slug: 'science-behind-herbal-medicine',
    excerpt: 'Understanding how modern science validates ancient herbal wisdom and the research supporting phytotherapy\'s effectiveness.',
    content: 'Full article content here...',
    image: 'https://images.unsplash.com/photo-1576670159805-381f8df0e5d6?w=800',
    author: 'Dr. Michael Chen',
    publishedAt: 'September 28, 2025',
    category: 'Research',
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Wellness Blog & Articles</h1>
            <p className="text-xl text-emerald-100">
              Discover insights, tips, and knowledge about herbal healing
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link href={`/articles/${articles[0].slug}`}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group">
              <div className="grid md:grid-cols-2">
                <div className="relative h-96 md:h-auto">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="text-sm text-emerald-600 font-semibold mb-2">
                    {articles[0].category}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{articles[0].author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{articles[0].publishedAt}</span>
                  </div>
                  <div className="flex items-center text-emerald-600 font-semibold">
                    Read More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/articles/${article.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
