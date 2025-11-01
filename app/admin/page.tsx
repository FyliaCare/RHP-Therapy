'use client'

import Link from 'next/link'
import { FileText, Mail, ShoppingCart, Users, TrendingUp, Package } from 'lucide-react'

const stats = [
  {
    name: 'Total Orders',
    value: '248',
    change: '+12.5%',
    icon: ShoppingCart,
    color: 'bg-blue-500',
  },
  {
    name: 'Published Articles',
    value: '42',
    change: '+3',
    icon: FileText,
    color: 'bg-emerald-500',
  },
  {
    name: 'Newsletter Subscribers',
    value: '1,248',
    change: '+84',
    icon: Mail,
    color: 'bg-purple-500',
  },
  {
    name: 'Total Customers',
    value: '856',
    change: '+28',
    icon: Users,
    color: 'bg-amber-500',
  },
]

const recentOrders = [
  { id: '#ORD-001', customer: 'Kwame Mensah', product: 'MAEFORX', amount: 'GH₵49.99', status: 'Delivered' },
  { id: '#ORD-002', customer: 'Ama Asante', product: 'MAEFORX', amount: 'GH₵49.99', status: 'Processing' },
  { id: '#ORD-003', customer: 'Kofi Boateng', product: 'MAEFORX', amount: 'GH₵49.99', status: 'Shipped' },
  { id: '#ORD-004', customer: 'Akua Owusu', product: 'MAEFORX', amount: 'GH₵49.99', status: 'Pending' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-emerald-600 mt-1">{stat.change} this month</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/admin/articles/new"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <FileText className="w-8 h-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Create New Article</h3>
          <p className="text-sm text-gray-600">Write and publish new blog content</p>
        </Link>

        <Link
          href="/admin/newsletter"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <Mail className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Send Newsletter</h3>
          <p className="text-sm text-gray-600">Compose and send to subscribers</p>
        </Link>

        <Link
          href="/admin/orders"
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <Package className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Orders</h3>
          <p className="text-sm text-gray-600">View and process customer orders</p>
        </Link>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-gray-200">
          <Link href="/admin/orders" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
            View all orders →
          </Link>
        </div>
      </div>
    </div>
  )
}
