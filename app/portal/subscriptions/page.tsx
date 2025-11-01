'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  Package, 
  CreditCard,
  Pause,
  Play,
  Edit,
  Trash2,
  Plus,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle,
  Truck
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function SubscriptionsPage() {
  const [showCancelModal, setShowCancelModal] = useState(false)

  const activeSubscription = {
    id: 'SUB-001',
    product: 'MAEFORX',
    quantity: 2,
    frequency: 'Every 30 days',
    price: 94.99,
    nextDelivery: '2025-11-10',
    status: 'active',
    startDate: '2025-08-10',
    totalDeliveries: 3,
    savings: 15.00,
    paymentMethod: 'Mobile Money (**** 5678)',
    shippingAddress: '123 Independence Ave, Accra, Ghana',
  }

  const deliveryHistory = [
    { date: '2025-10-10', status: 'Delivered', trackingNumber: 'GH1234567890' },
    { date: '2025-09-10', status: 'Delivered', trackingNumber: 'GH0987654321' },
    { date: '2025-08-10', status: 'Delivered', trackingNumber: 'GH5432167890' },
  ]

  const frequencyOptions = [
    { label: 'Every 15 days', value: 15, savings: 10 },
    { label: 'Every 30 days', value: 30, savings: 15 },
    { label: 'Every 45 days', value: 45, savings: 18 },
    { label: 'Every 60 days', value: 60, savings: 20 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/portal" className="text-emerald-600 hover:text-emerald-700 font-semibold mb-4 inline-block">
            ← Back to Portal
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Subscriptions</h1>
          <p className="text-gray-600">Manage your auto-delivery subscriptions</p>
        </div>

        {/* Active Subscription */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-linear-to-r from-emerald-600 to-teal-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase">Active Subscription</span>
                </div>
                <h2 className="text-2xl font-bold">MAEFORX Auto-Delivery</h2>
                <p className="text-emerald-100 mt-1">Subscription ID: {activeSubscription.id}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">GH₵{activeSubscription.price}</div>
                <div className="text-emerald-100">{activeSubscription.frequency.toLowerCase()}</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Next Delivery */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Next Delivery</h3>
                    <p className="text-gray-600">
                      {new Date(activeSubscription.nextDelivery).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  Skip Next Delivery
                </button>
              </div>
            </div>

            {/* Subscription Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Subscription Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Product</span>
                    <span className="font-semibold text-gray-900">{activeSubscription.product}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity</span>
                    <span className="font-semibold text-gray-900">{activeSubscription.quantity} bottle(s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency</span>
                    <span className="font-semibold text-gray-900">{activeSubscription.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Started</span>
                    <span className="font-semibold text-gray-900">
                      {new Date(activeSubscription.startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Deliveries</span>
                    <span className="font-semibold text-gray-900">{activeSubscription.totalDeliveries}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="text-gray-600">Total Savings</span>
                    <span className="font-bold text-emerald-600">GH₵{activeSubscription.savings.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery & Payment</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Shipping Address</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-900">
                      {activeSubscription.shippingAddress}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Payment Method</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-900 flex items-center justify-between">
                      <span>{activeSubscription.paymentMethod}</span>
                      <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Edit className="w-4 h-4" />
                <span>Edit Frequency</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Package className="w-4 h-4" />
                <span>Change Quantity</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Pause className="w-4 h-4" />
                <span>Pause</span>
              </button>
              <button 
                onClick={() => setShowCancelModal(true)}
                className="flex items-center justify-center space-x-2 px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Savings Summary */}
        <div className="bg-linear-to-br from-amber-500 to-orange-600 rounded-lg shadow-md p-6 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Your Subscription Savings</h3>
              <p className="text-orange-100">Save 15% on every delivery with auto-subscription</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">GH₵{activeSubscription.savings.toFixed(2)}</div>
              <div className="text-orange-100">Total saved so far</div>
            </div>
          </div>
        </div>

        {/* Delivery History */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery History</h3>
          <div className="space-y-3">
            {deliveryHistory.map((delivery, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{delivery.status}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(delivery.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Tracking: {delivery.trackingNumber}</p>
                  <Link href={`/portal/orders`} className="text-sm text-emerald-600 hover:text-emerald-700">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Subscription Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Save 15%</h4>
                <p className="text-sm text-gray-600">Enjoy exclusive discounts on every delivery</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Free Shipping</h4>
                <p className="text-sm text-gray-600">No delivery charges on subscription orders</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Flexible Schedule</h4>
                <p className="text-sm text-gray-600">Pause, skip, or modify anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Create New Subscription CTA */}
        <div className="mt-8 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Want to add another subscription?</h3>
          <p className="text-gray-600 mb-4">Subscribe to regular deliveries and save more</p>
          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            <Plus className="w-5 h-5" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cancel Subscription?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel your subscription? You'll lose your 15% discount and automatic deliveries.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Keep Subscription
              </button>
              <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Yes, Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
