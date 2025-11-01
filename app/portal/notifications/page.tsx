'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Bell, 
  Package, 
  Heart,
  ShoppingBag,
  Calendar,
  Gift,
  Star,
  TrendingUp,
  CheckCircle,
  X,
  Settings,
  Filter
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NotificationsPage() {
  const [filter, setFilter] = useState('all')
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'Order Delivered',
      message: 'Your order #ORD-247 has been delivered successfully',
      time: '2 hours ago',
      read: false,
      icon: Package,
      color: 'emerald',
    },
    {
      id: 2,
      type: 'health',
      title: 'Medication Reminder',
      message: 'Time to take your MAEFORX - 2 capsules',
      time: '4 hours ago',
      read: false,
      icon: Heart,
      color: 'red',
    },
    {
      id: 3,
      type: 'promotion',
      title: 'Special Offer',
      message: '20% off on your next order! Use code: HEALTH20',
      time: '1 day ago',
      read: true,
      icon: Gift,
      color: 'purple',
    },
    {
      id: 4,
      type: 'subscription',
      title: 'Subscription Renewal',
      message: 'Your subscription will renew in 3 days',
      time: '1 day ago',
      read: false,
      icon: Calendar,
      color: 'blue',
    },
    {
      id: 5,
      type: 'rewards',
      title: 'Points Earned',
      message: 'You earned 250 loyalty points from your recent order',
      time: '2 days ago',
      read: true,
      icon: Star,
      color: 'amber',
    },
    {
      id: 6,
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #ORD-247 is on its way',
      time: '3 days ago',
      read: true,
      icon: Package,
      color: 'emerald',
    },
    {
      id: 7,
      type: 'health',
      title: 'Health Goal Achieved',
      message: 'Congratulations! You\'ve reached your weekly wellness goal',
      time: '4 days ago',
      read: true,
      icon: TrendingUp,
      color: 'green',
    },
    {
      id: 8,
      type: 'consultation',
      title: 'Consultation Reminder',
      message: 'Your consultation with Dr. Kwame Mensah is tomorrow at 10:00 AM',
      time: '5 days ago',
      read: true,
      icon: Calendar,
      color: 'blue',
    },
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true
    if (filter === 'unread') return !n.read
    return n.type === filter
  })

  const getColorClasses = (color: string, isRead: boolean) => {
    const opacity = isRead ? '100' : '100'
    const bgOpacity = isRead ? '50' : '100'
    
    const colors: Record<string, { bg: string, text: string, border: string }> = {
      emerald: { bg: `bg-emerald-${bgOpacity}`, text: `text-emerald-600`, border: 'border-emerald-200' },
      red: { bg: `bg-red-${bgOpacity}`, text: `text-red-600`, border: 'border-red-200' },
      purple: { bg: `bg-purple-${bgOpacity}`, text: `text-purple-600`, border: 'border-purple-200' },
      blue: { bg: `bg-blue-${bgOpacity}`, text: `text-blue-600`, border: 'border-blue-200' },
      amber: { bg: `bg-amber-${bgOpacity}`, text: `text-amber-600`, border: 'border-amber-200' },
      green: { bg: `bg-green-${bgOpacity}`, text: `text-green-600`, border: 'border-green-200' },
    }
    
    return colors[color] || colors.emerald
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/portal" className="text-emerald-600 hover:text-emerald-700 font-semibold mb-4 inline-block">
            ← Back to Portal
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
              <p className="text-gray-600">
                {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}` : 'All caught up!'}
              </p>
            </div>
            <Link
              href="/portal/settings/notifications"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  filter === 'unread'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Unread ({unreadCount})
              </button>
              <button
                onClick={() => setFilter('order')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  filter === 'order'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setFilter('health')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  filter === 'health'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Health
              </button>
              <button
                onClick={() => setFilter('promotion')}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  filter === 'promotion'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Promotions
              </button>
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Mark all as read
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          <AnimatePresence>
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification, index) => {
                const Icon = notification.icon
                const colors = getColorClasses(notification.color, notification.read)
                
                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`bg-white rounded-lg shadow-md overflow-hidden ${
                      !notification.read ? 'border-l-4 ' + colors.border : ''
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                          notification.read ? 'bg-gray-100' : colors.bg
                        }`}>
                          <Icon className={`w-6 h-6 ${notification.read ? 'text-gray-600' : colors.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className={`font-semibold ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                              {notification.title}
                            </h3>
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className={`text-sm mb-2 ${notification.read ? 'text-gray-500' : 'text-gray-700'}`}>
                            {notification.message}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{notification.time}</span>
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-xs text-emerald-600 hover:text-emerald-700 font-medium flex items-center space-x-1"
                              >
                                <CheckCircle className="w-3 h-3" />
                                <span>Mark as read</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications</h3>
                <p className="text-gray-600">
                  {filter === 'all' 
                    ? "You're all caught up!" 
                    : `No ${filter} notifications`}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Notification Preferences */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h3 className="font-medium text-gray-900">Order Updates</h3>
                <p className="text-sm text-gray-600">Get notified about order status changes</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-600 rounded" />
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h3 className="font-medium text-gray-900">Health Reminders</h3>
                <p className="text-sm text-gray-600">Medication and wellness reminders</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-600 rounded" />
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h3 className="font-medium text-gray-900">Promotions & Offers</h3>
                <p className="text-sm text-gray-600">Special deals and exclusive offers</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-600 rounded" />
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <h3 className="font-medium text-gray-900">Loyalty Rewards</h3>
                <p className="text-sm text-gray-600">Points updates and reward notifications</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-600 rounded" />
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <h3 className="font-medium text-gray-900">Newsletter</h3>
                <p className="text-sm text-gray-600">Wellness tips and product updates</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-emerald-600 rounded" />
            </div>
          </div>
          <button className="w-full mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  )
}
