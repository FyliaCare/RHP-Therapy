'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  MapPin,
  Download,
  Search,
  Filter,
  Eye,
  RotateCw,
  Calendar,
  CreditCard
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const orders = [
    {
      id: 'ORD-247',
      date: '2025-10-28',
      product: 'MAEFORX',
      quantity: 2,
      amount: 99.98,
      status: 'Delivered',
      deliveryDate: '2025-10-30',
      paymentMethod: 'Mobile Money',
      shippingAddress: '123 Independence Ave, Accra, Ghana',
      trackingNumber: 'GH1234567890',
      timeline: [
        { status: 'Order Placed', date: '2025-10-28 10:30 AM', completed: true },
        { status: 'Payment Confirmed', date: '2025-10-28 10:35 AM', completed: true },
        { status: 'Processing', date: '2025-10-28 02:15 PM', completed: true },
        { status: 'Shipped', date: '2025-10-29 09:00 AM', completed: true },
        { status: 'Out for Delivery', date: '2025-10-30 08:30 AM', completed: true },
        { status: 'Delivered', date: '2025-10-30 02:45 PM', completed: true },
      ]
    },
    {
      id: 'ORD-246',
      date: '2025-10-15',
      product: 'MAEFORX',
      quantity: 1,
      amount: 49.99,
      status: 'Delivered',
      deliveryDate: '2025-10-18',
      paymentMethod: 'Credit Card',
      shippingAddress: '123 Independence Ave, Accra, Ghana',
      trackingNumber: 'GH0987654321',
      timeline: [
        { status: 'Order Placed', date: '2025-10-15 11:20 AM', completed: true },
        { status: 'Payment Confirmed', date: '2025-10-15 11:22 AM', completed: true },
        { status: 'Processing', date: '2025-10-15 03:00 PM', completed: true },
        { status: 'Shipped', date: '2025-10-16 10:00 AM', completed: true },
        { status: 'Out for Delivery', date: '2025-10-18 07:30 AM', completed: true },
        { status: 'Delivered', date: '2025-10-18 01:15 PM', completed: true },
      ]
    },
    {
      id: 'ORD-245',
      date: '2025-09-30',
      product: 'MAEFORX',
      quantity: 3,
      amount: 149.97,
      status: 'Delivered',
      deliveryDate: '2025-10-03',
      paymentMethod: 'Mobile Money',
      shippingAddress: '123 Independence Ave, Accra, Ghana',
      trackingNumber: 'GH5432167890',
      timeline: [
        { status: 'Order Placed', date: '2025-09-30 09:45 AM', completed: true },
        { status: 'Payment Confirmed', date: '2025-09-30 09:50 AM', completed: true },
        { status: 'Processing', date: '2025-09-30 02:30 PM', completed: true },
        { status: 'Shipped', date: '2025-10-01 08:00 AM', completed: true },
        { status: 'Out for Delivery', date: '2025-10-03 09:00 AM', completed: true },
        { status: 'Delivered', date: '2025-10-03 03:30 PM', completed: true },
      ]
    },
    {
      id: 'ORD-244',
      date: '2025-09-15',
      product: 'MAEFORX',
      quantity: 1,
      amount: 49.99,
      status: 'Shipped',
      deliveryDate: null,
      paymentMethod: 'Credit Card',
      shippingAddress: '123 Independence Ave, Accra, Ghana',
      trackingNumber: 'GH9876543210',
      timeline: [
        { status: 'Order Placed', date: '2025-09-15 02:15 PM', completed: true },
        { status: 'Payment Confirmed', date: '2025-09-15 02:18 PM', completed: true },
        { status: 'Processing', date: '2025-09-15 04:30 PM', completed: true },
        { status: 'Shipped', date: '2025-09-16 11:00 AM', completed: true },
        { status: 'Out for Delivery', date: null, completed: false },
        { status: 'Delivered', date: null, completed: false },
      ]
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'shipped':
        return 'bg-blue-100 text-blue-800'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/portal" className="text-emerald-600 hover:text-emerald-700 font-semibold mb-4 inline-block">
            ← Back to Portal
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-600">Track and manage all your orders</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by order ID or product..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Orders</option>
                <option value="delivered">Delivered</option>
                <option value="shipped">Shipped</option>
                <option value="processing">Processing</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Package className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Product</p>
                    <p className="font-semibold text-gray-900">{order.product}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Quantity</p>
                    <p className="font-semibold text-gray-900">{order.quantity} bottle(s)</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Total Amount</p>
                    <p className="font-semibold text-gray-900">GH₵{order.amount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Tracking Number</p>
                    <p className="font-semibold text-gray-900">{order.trackingNumber}</p>
                  </div>
                </div>

                {selectedOrder === order.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t pt-4 mt-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Order Timeline</h4>
                    <div className="space-y-4">
                      {order.timeline.map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-emerald-600' : 'bg-gray-300'
                          }`}>
                            {step.completed && <CheckCircle className="w-4 h-4 text-white" />}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                              {step.status}
                            </p>
                            {step.date && (
                              <p className="text-xs text-gray-500">{step.date}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h4 className="font-semibold text-gray-900 mb-3">Delivery Information</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-500 mb-1">Shipping Address</p>
                            <p className="text-gray-900">{order.shippingAddress}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CreditCard className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-gray-500 mb-1">Payment Method</p>
                            <p className="text-gray-900">{order.paymentMethod}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{selectedOrder === order.id ? 'Hide Details' : 'View Details'}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download Invoice</span>
                  </button>
                  <Link
                    href={`/shop/${order.product.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    <RotateCw className="w-4 h-4" />
                    <span>Reorder</span>
                  </Link>
                  {order.status === 'Delivered' && (
                    <Link
                      href={`/portal/reviews?order=${order.id}`}
                      className="flex items-center space-x-2 px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      <span>Write Review</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <Link href="/shop" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
