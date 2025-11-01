'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Package, 
  TrendingUp, 
  Calendar, 
  Heart, 
  Award,
  ShoppingBag,
  Bell,
  Activity,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  Truck,
  AlertCircle
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ClientPortalPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock user data
  const user = {
    name: 'Kwame Mensah',
    memberSince: '2024-03-15',
    loyaltyPoints: 2450,
    membershipTier: 'Gold',
    nextTierPoints: 550,
  }

  const stats = [
    {
      label: 'Total Orders',
      value: '24',
      change: '+3 this month',
      icon: ShoppingBag,
      color: 'blue',
      trend: 'up'
    },
    {
      label: 'Loyalty Points',
      value: '2,450',
      change: '550 to Platinum',
      icon: Award,
      color: 'emerald',
      trend: 'up'
    },
    {
      label: 'Health Score',
      value: '85%',
      change: '+5% this week',
      icon: Activity,
      color: 'purple',
      trend: 'up'
    },
    {
      label: 'Active Subscription',
      value: '1',
      change: 'Next delivery in 3 days',
      icon: Calendar,
      color: 'orange',
      trend: 'neutral'
    }
  ]

  const recentOrders = [
    {
      id: 'ORD-247',
      product: 'MAEFORX',
      quantity: 2,
      date: '2025-10-28',
      status: 'Delivered',
      amount: 99.98,
      trackingUrl: '#'
    },
    {
      id: 'ORD-246',
      product: 'MAEFORX',
      quantity: 1,
      date: '2025-10-15',
      status: 'Delivered',
      amount: 49.99,
      trackingUrl: '#'
    },
    {
      id: 'ORD-245',
      product: 'MAEFORX',
      quantity: 3,
      date: '2025-09-30',
      status: 'Delivered',
      amount: 149.97,
      trackingUrl: '#'
    }
  ]

  const healthGoals = [
    { name: 'Daily Supplement Intake', progress: 85, target: '30 days' },
    { name: 'Improve Sleep Quality', progress: 70, target: '60 days' },
    { name: 'Boost Energy Levels', progress: 92, target: '90 days' }
  ]

  const upcomingReminders = [
    { type: 'medication', message: 'Take MAEFORX - Morning dose', time: '2 hours' },
    { type: 'subscription', message: 'Subscription delivery arriving', time: '3 days' },
    { type: 'appointment', message: 'Virtual consultation with Dr. Osei', time: '5 days' }
  ]

  const quickActions = [
    { label: 'Reorder MAEFORX', icon: ShoppingBag, href: '/shop', color: 'emerald' },
    { label: 'Book Consultation', icon: Calendar, href: '/portal/consultations', color: 'blue' },
    { label: 'Track Order', icon: Truck, href: '/portal/orders', color: 'purple' },
    { label: 'View Rewards', icon: Award, href: '/portal/rewards', color: 'orange' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-emerald-100">
                {user.membershipTier} Member since {new Date(user.memberSince).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/portal/notifications" className="relative p-2 hover:bg-emerald-700 rounded-full transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
              </Link>
              <Link href="/account" className="px-4 py-2 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                My Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  {stat.trend === 'up' && (
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link
                key={index}
                href={action.href}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all text-center group"
              >
                <div className={`inline-flex p-4 rounded-full bg-${action.color}-100 mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 text-${action.color}-600`} />
                </div>
                <p className="text-sm font-semibold text-gray-900">{action.label}</p>
              </Link>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                <Link href="/portal/orders" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div className="divide-y">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{order.product}</p>
                          <p className="text-sm text-gray-500">Order #{order.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">GH₵{order.amount.toFixed(2)}</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {new Date(order.date).toLocaleDateString('en-GB')} • Qty: {order.quantity}
                      </span>
                      <button className="text-emerald-600 hover:text-emerald-700 font-semibold">
                        Reorder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Goals */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Health Goals Progress</h2>
                <Link href="/portal/health" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
                  Manage Goals
                </Link>
              </div>
              <div className="space-y-4">
                {healthGoals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{goal.name}</span>
                      <span className="text-sm text-gray-500">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-600 h-2 rounded-full transition-all"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Target: {goal.target}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Reminders */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Reminders</h3>
              <div className="space-y-4">
                {upcomingReminders.map((reminder, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      {reminder.type === 'medication' && <AlertCircle className="w-5 h-5 text-emerald-600" />}
                      {reminder.type === 'subscription' && <Package className="w-5 h-5 text-emerald-600" />}
                      {reminder.type === 'appointment' && <Calendar className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{reminder.message}</p>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" />
                        In {reminder.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/portal/reminders" className="block w-full mt-4 text-center py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 font-semibold text-sm transition-colors">
                Manage Reminders
              </Link>
            </div>

            {/* Loyalty Program */}
            <div className="bg-linear-to-br from-amber-500 to-orange-600 rounded-xl shadow-md p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Loyalty Rewards</h3>
                <Award className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold mb-2">{user.loyaltyPoints.toLocaleString()} Points</p>
              <p className="text-amber-100 text-sm mb-4">
                {user.nextTierPoints} points to Platinum tier
              </p>
              <div className="w-full bg-amber-700 rounded-full h-2 mb-4">
                <div 
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${(user.loyaltyPoints / (user.loyaltyPoints + user.nextTierPoints)) * 100}%` }}
                />
              </div>
              <Link href="/portal/rewards" className="block w-full text-center py-2 bg-white text-orange-600 rounded-lg hover:bg-amber-50 font-semibold text-sm transition-colors">
                Redeem Rewards
              </Link>
            </div>

            {/* Referral Program */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Refer & Earn</h3>
              <div className="text-center mb-4">
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Invite friends and earn <span className="font-bold text-emerald-600">200 points</span> for each referral!
                </p>
              </div>
              <Link href="/portal/referrals" className="block w-full text-center py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold text-sm transition-colors">
                Share Referral Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
