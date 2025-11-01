'use client'

import { useState } from 'react'
import { Search, Filter, Download, Eye, Mail, Phone, MapPin, ShoppingBag } from 'lucide-react'

export default function AdminCustomersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Mock customers data
  const customers = [
    {
      id: '1',
      name: 'Kwame Mensah',
      email: 'kwame.mensah@example.com',
      phone: '+233 20 123 4567',
      location: 'Accra, Ghana',
      joinDate: '2025-08-15',
      totalOrders: 12,
      totalSpent: 599.88,
      status: 'Active',
      lastOrder: '2025-10-28',
    },
    {
      id: '2',
      name: 'Ama Aboagye',
      email: 'ama.aboagye@example.com',
      phone: '+233 24 234 5678',
      location: 'Kumasi, Ghana',
      joinDate: '2025-07-20',
      totalOrders: 8,
      totalSpent: 399.92,
      status: 'Active',
      lastOrder: '2025-10-27',
    },
    {
      id: '3',
      name: 'Kofi Danso',
      email: 'kofi.danso@example.com',
      phone: '+233 26 345 6789',
      location: 'Takoradi, Ghana',
      joinDate: '2025-06-10',
      totalOrders: 15,
      totalSpent: 749.85,
      status: 'Active',
      lastOrder: '2025-10-26',
    },
    {
      id: '4',
      name: 'Abena Osei',
      email: 'abena.osei@example.com',
      phone: '+233 27 456 7890',
      location: 'Tema, Ghana',
      joinDate: '2025-09-05',
      totalOrders: 5,
      totalSpent: 249.95,
      status: 'Active',
      lastOrder: '2025-10-25',
    },
    {
      id: '5',
      name: 'Yaw Boateng',
      email: 'yaw.boateng@example.com',
      phone: '+233 28 567 8901',
      location: 'Cape Coast, Ghana',
      joinDate: '2025-05-12',
      totalOrders: 3,
      totalSpent: 149.97,
      status: 'Inactive',
      lastOrder: '2025-09-10',
    },
    {
      id: '6',
      name: 'Efua Mensah',
      email: 'efua.mensah@example.com',
      phone: '+233 23 678 9012',
      location: 'Tamale, Ghana',
      joinDate: '2025-04-18',
      totalOrders: 20,
      totalSpent: 999.80,
      status: 'VIP',
      lastOrder: '2025-10-29',
    },
  ]

  const stats = [
    { label: 'Total Customers', value: '1,248', change: '+12%', color: 'blue' },
    { label: 'Active Customers', value: '892', change: '+8%', color: 'green' },
    { label: 'VIP Customers', value: '45', change: '+5%', color: 'purple' },
    { label: 'New This Month', value: '67', change: '+15%', color: 'yellow' },
  ]

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'vip':
        return 'bg-purple-100 text-purple-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
    const matchesStatus =
      statusFilter === 'all' || customer.status.toLowerCase() === statusFilter.toLowerCase()
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers Management</h1>
          <p className="text-gray-600 mt-1">View and manage all customer accounts</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Customers</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <span
                className={`text-xs font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search customers by name, email, or phone..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="vip">VIP</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">
                          {customer.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">ID: {customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                      <Mail className="w-4 h-4" />
                      <span>{customer.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{customer.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{customer.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(customer.joinDate).toLocaleDateString('en-GB')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-900">
                        {customer.totalOrders}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Last: {new Date(customer.lastOrder).toLocaleDateString('en-GB')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">
                      GH₵{customer.totalSpent.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(
                        customer.status
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center space-x-2">
                      <button className="text-emerald-600 hover:text-emerald-900 font-medium p-1 hover:bg-emerald-50 rounded transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 font-medium p-1 hover:bg-blue-50 rounded transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No customers found</p>
          </div>
        )}
      </div>
    </div>
  )
}
