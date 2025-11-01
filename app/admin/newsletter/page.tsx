'use client'

import { useState } from 'react'
import { Mail, Send, Users } from 'lucide-react'
import toast from 'react-hot-toast'

export default function NewsletterManagement() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    sendTo: 'all',
  })

  const subscribers = {
    total: 1248,
    active: 1186,
    unsubscribed: 62,
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate sending
    setTimeout(() => {
      toast.success(`Newsletter sent to ${subscribers.active} subscribers!`)
      setFormData({ subject: '', message: '', sendTo: 'all' })
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Newsletter Management</h2>
        <p className="text-gray-600 mt-1">Send updates and promotions to your subscribers</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Subscribers</p>
              <p className="text-3xl font-bold text-gray-900">{subscribers.total}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Subscribers</p>
              <p className="text-3xl font-bold text-gray-900">{subscribers.active}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Unsubscribed</p>
              <p className="text-3xl font-bold text-gray-900">{subscribers.unsubscribed}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Compose Newsletter */}
      <form onSubmit={handleSend} className="bg-white rounded-xl shadow-sm p-8 space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Compose Newsletter</h3>

        {/* Send To */}
        <div>
          <label htmlFor="sendTo" className="block text-sm font-semibold text-gray-700 mb-2">
            Send To
          </label>
          <select
            id="sendTo"
            name="sendTo"
            value={formData.sendTo}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Active Subscribers ({subscribers.active})</option>
            <option value="recent">Recent Subscribers (Last 30 days)</option>
            <option value="test">Test Email (Admin Only)</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject Line *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Enter email subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={12}
            placeholder="Write your newsletter content here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-sm text-gray-500 mt-2">
            You can use basic HTML or plain text. Include links and formatting as needed.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            This will send to <strong>{formData.sendTo === 'all' ? subscribers.active : 'selected'}</strong> subscribers
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5 mr-2" />
            {loading ? 'Sending...' : 'Send Newsletter'}
          </button>
        </div>
      </form>

      {/* Recent Campaigns */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Recent Campaigns</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { subject: 'New Article: Benefits of MAEFORX', sent: '2025-10-25', opened: '68%', clicks: '24%' },
              { subject: 'October Health Tips', sent: '2025-10-15', opened: '72%', clicks: '31%' },
              { subject: 'Welcome to RHP Therapy!', sent: '2025-10-01', opened: '89%', clicks: '42%' },
            ].map((campaign, idx) => (
              <div key={idx} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                <div>
                  <h4 className="font-semibold text-gray-900">{campaign.subject}</h4>
                  <p className="text-sm text-gray-500">Sent on {campaign.sent}</p>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div>
                    <span className="text-gray-600">Opened: </span>
                    <span className="font-semibold text-emerald-600">{campaign.opened}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Clicked: </span>
                    <span className="font-semibold text-purple-600">{campaign.clicks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
