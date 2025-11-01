'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Share2, Star, Check, Package, Truck, Shield } from 'lucide-react'
import { useCart } from '@/lib/store/cart'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedTab, setSelectedTab] = useState('description')
  const { addItem } = useCart()

  // For now, we only have MAEFORX product
  const product = {
    id: '1',
    name: 'MAEFORX',
    slug: 'maeforx',
    description: 'Advanced phytotherapy formula for comprehensive wellness. Made with 100% natural Ghanaian herbs, MAEFORX supports your body\'s natural healing processes and promotes overall health.',
    longDescription: `MAEFORX is our flagship phytotherapy product, carefully formulated using traditional Ghanaian herbal medicine combined with modern scientific research. Each ingredient is sourced from local farms in Ghana and processed in our Accra facility under strict quality control standards.

This powerful blend has been used for generations to support overall wellness, boost immunity, and promote natural healing. Our formula is non-GMO, free from artificial additives, and suitable for long-term use.`,
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800',
    category: 'Wellness',
    stock: 50,
    rating: 4.8,
    reviews: 128,
    features: [
      '100% Natural Ingredients',
      'Made in Accra, Ghana',
      'No Artificial Additives',
      'Third-Party Lab Tested',
      'Sustainable Sourcing',
      'Traditional Herbal Formula',
    ],
    ingredients: [
      'Moringa Oleifera Extract',
      'Neem Leaf Powder',
      'African Ginger Root',
      'Bitter Leaf Extract',
      'Prekese (Tetrapleura tetraptera)',
      'Baobab Fruit Powder',
    ],
    usage: 'Take 2 capsules daily with meals, or as directed by your healthcare provider. For best results, use consistently for at least 30 days.',
    benefits: [
      'Supports immune system function',
      'Promotes natural detoxification',
      'Enhances digestive health',
      'Boosts energy levels naturally',
      'Supports cardiovascular health',
      'Anti-inflammatory properties',
    ],
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      stock: product.stock,
    })
    toast.success(`Added ${quantity} x ${product.name} to cart!`)
  }

  const reviews = [
    {
      id: 1,
      name: 'Kwame Mensah',
      rating: 5,
      date: '2025-10-20',
      comment: 'Excellent product! I\'ve been using MAEFORX for 3 months and my health has improved significantly. Highly recommend!',
      verified: true,
    },
    {
      id: 2,
      name: 'Ama Aboagye',
      rating: 5,
      date: '2025-10-15',
      comment: 'Great quality herbal medicine. Delivery was fast and the product is authentic. Will order again!',
      verified: true,
    },
    {
      id: 3,
      name: 'Kofi Danso',
      rating: 4,
      date: '2025-10-10',
      comment: 'Good product, noticed improvements after 2 weeks. Price is reasonable for the quality.',
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-emerald-600">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Package className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Made in Ghana</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Nationwide Delivery</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Quality Assured</p>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">GH₵{product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-600 ml-2">per bottle</span>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity:
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">{product.stock} in stock</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 mb-4"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              <Link
                href="/checkout"
                className="w-full block text-center border-2 border-emerald-600 text-emerald-600 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Buy Now
              </Link>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <div className="border-t">
            <div className="flex border-b">
              <button
                onClick={() => setSelectedTab('description')}
                className={`px-6 py-4 font-medium transition-colors ${
                  selectedTab === 'description'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setSelectedTab('ingredients')}
                className={`px-6 py-4 font-medium transition-colors ${
                  selectedTab === 'ingredients'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setSelectedTab('usage')}
                className={`px-6 py-4 font-medium transition-colors ${
                  selectedTab === 'usage'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Usage
              </button>
              <button
                onClick={() => setSelectedTab('reviews')}
                className={`px-6 py-4 font-medium transition-colors ${
                  selectedTab === 'reviews'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>

            <div className="p-8">
              {selectedTab === 'description' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-600 whitespace-pre-line mb-6">{product.longDescription}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">Health Benefits:</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedTab === 'ingredients' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">100% Natural Ingredients</h3>
                  <p className="text-gray-600 mb-6">
                    MAEFORX contains only the finest natural ingredients, sourced from trusted Ghanaian suppliers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                        <span className="text-gray-700">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'usage' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Use</h3>
                  <p className="text-gray-600 mb-6">{product.usage}</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Important Notes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                      <li>Consult your healthcare provider before use if pregnant or nursing</li>
                      <li>Not intended to diagnose, treat, cure, or prevent any disease</li>
                      <li>Keep out of reach of children</li>
                      <li>Store in a cool, dry place away from direct sunlight</li>
                    </ul>
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <p className="font-medium text-gray-900">{review.name}</p>
                                {review.verified && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                    <Check className="w-3 h-3 mr-1" />
                                    Verified Purchase
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('en-GB')}
                          </span>
                        </div>
                        <p className="text-gray-600 ml-13">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
