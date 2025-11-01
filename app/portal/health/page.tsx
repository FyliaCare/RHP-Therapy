'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Heart, 
  Activity, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Pill,
  Target,
  Plus,
  Edit,
  Trash2,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function HealthProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const healthMetrics = [
    {
      name: 'Blood Pressure',
      current: '120/80',
      unit: 'mmHg',
      status: 'normal',
      trend: 'stable',
      lastUpdated: '2025-10-30',
      history: [
        { date: '2025-10-30', value: '120/80' },
        { date: '2025-10-23', value: '118/78' },
        { date: '2025-10-16', value: '122/82' },
      ]
    },
    {
      name: 'Blood Sugar',
      current: '95',
      unit: 'mg/dL',
      status: 'normal',
      trend: 'improving',
      lastUpdated: '2025-10-29',
      history: [
        { date: '2025-10-29', value: '95' },
        { date: '2025-10-22', value: '102' },
        { date: '2025-10-15', value: '108' },
      ]
    },
    {
      name: 'Weight',
      current: '75',
      unit: 'kg',
      status: 'normal',
      trend: 'stable',
      lastUpdated: '2025-10-28',
      history: [
        { date: '2025-10-28', value: '75' },
        { date: '2025-10-21', value: '75.5' },
        { date: '2025-10-14', value: '76' },
      ]
    },
  ]

  const medications = [
    {
      id: 1,
      name: 'MAEFORX',
      dosage: '2 capsules',
      frequency: 'Twice daily',
      time: ['8:00 AM', '8:00 PM'],
      startDate: '2025-09-01',
      endDate: '2025-12-01',
      purpose: 'General wellness and vitality',
      instructions: 'Take with meals',
      adherence: 92,
    },
  ]

  const healthGoals = [
    {
      id: 1,
      title: 'Maintain healthy blood pressure',
      target: 'Keep BP below 130/85',
      progress: 85,
      deadline: '2025-12-31',
      status: 'on-track',
    },
    {
      id: 2,
      title: 'Improve sleep quality',
      target: '7-8 hours nightly',
      progress: 70,
      deadline: '2025-11-30',
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'Regular supplement intake',
      target: '95% adherence',
      progress: 92,
      deadline: 'Ongoing',
      status: 'on-track',
    },
  ]

  const appointments = [
    {
      id: 1,
      type: 'Follow-up Consultation',
      practitioner: 'Dr. Kwame Mensah',
      date: '2025-11-05',
      time: '10:00 AM',
      location: 'Virtual',
      status: 'upcoming',
    },
    {
      id: 2,
      type: 'Health Check',
      practitioner: 'Dr. Ama Asante',
      date: '2025-10-15',
      time: '2:00 PM',
      location: 'Accra Clinic',
      status: 'completed',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
      case 'on-track':
      case 'completed':
        return 'text-green-600 bg-green-100'
      case 'warning':
      case 'in-progress':
        return 'text-yellow-600 bg-yellow-100'
      case 'critical':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving':
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case 'declining':
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <Activity className="w-4 h-4 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/portal" className="text-emerald-600 hover:text-emerald-700 font-semibold mb-4 inline-block">
            ← Back to Portal
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Profile</h1>
          <p className="text-gray-600">Track your health metrics and wellness journey</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b overflow-x-auto">
            {['overview', 'metrics', 'medications', 'goals', 'appointments'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Health Score */}
            <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg shadow-md p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Overall Health Score</h2>
                  <p className="text-emerald-100">Based on your recent metrics and adherence</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold">85</div>
                  <div className="text-emerald-100">out of 100</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              {healthMetrics.map((metric, index) => (
                <motion.div
                  key={metric.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{metric.name}</h3>
                      <p className="text-2xl font-bold text-emerald-600 mt-1">
                        {metric.current} <span className="text-sm text-gray-500">{metric.unit}</span>
                      </p>
                    </div>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-2 py-1 rounded-full ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                    <span className="text-gray-500">Updated {metric.lastUpdated}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Current Medications</h3>
                <div className="space-y-4">
                  {medications.map((med) => (
                    <div key={med.id} className="flex items-start space-x-3 border-b pb-4 last:border-0">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Pill className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{med.name}</h4>
                        <p className="text-sm text-gray-600">{med.dosage} - {med.frequency}</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-emerald-600 h-2 rounded-full"
                              style={{ width: `${med.adherence}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-600">{med.adherence}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-4">
                  {appointments.filter(a => a.status === 'upcoming').map((apt) => (
                    <div key={apt.id} className="flex items-start space-x-3 border-b pb-4 last:border-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{apt.type}</h4>
                        <p className="text-sm text-gray-600">{apt.practitioner}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(apt.date).toLocaleDateString()} at {apt.time}
                        </p>
                        <span className="text-xs text-gray-500">{apt.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Metrics Tab */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Health Metrics</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Plus className="w-4 h-4" />
                <span>Add Metric</span>
              </button>
            </div>

            {healthMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{metric.name}</h3>
                    <p className="text-3xl font-bold text-emerald-600 mt-2">
                      {metric.current} <span className="text-sm text-gray-500">{metric.unit}</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                    {getTrendIcon(metric.trend)}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Recent History</h4>
                  <div className="space-y-2">
                    {metric.history.map((entry, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{new Date(entry.date).toLocaleDateString()}</span>
                        <span className="font-semibold text-gray-900">{entry.value} {metric.unit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    View Full History
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                    Log New Reading
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Medications Tab */}
        {activeTab === 'medications' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Medication Tracking</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Plus className="w-4 h-4" />
                <span>Add Medication</span>
              </button>
            </div>

            {medications.map((med, index) => (
              <motion.div
                key={med.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{med.name}</h3>
                      <p className="text-gray-600">{med.dosage} - {med.frequency}</p>
                      <p className="text-sm text-gray-500 mt-1">{med.purpose}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Schedule</p>
                    <div className="space-y-1">
                      {med.time.map((time, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Duration</p>
                    <p className="text-gray-900">{med.startDate} to {med.endDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Instructions</p>
                    <p className="text-gray-900">{med.instructions}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Adherence Rate</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-600 h-2 rounded-full"
                          style={{ width: `${med.adherence}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900">{med.adherence}%</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    View History
                  </button>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                    Mark as Taken
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Health Goals</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Plus className="w-4 h-4" />
                <span>Add Goal</span>
              </button>
            </div>

            {healthGoals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{goal.title}</h3>
                      <p className="text-gray-600">{goal.target}</p>
                      <p className="text-sm text-gray-500 mt-1">Deadline: {goal.deadline}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(goal.status)}`}>
                    {goal.status.replace('-', ' ')}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-semibold text-gray-900">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Update Progress
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Appointments</h2>
              <Link
                href="/portal/consultations"
                className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>

            {appointments.map((apt, index) => (
              <motion.div
                key={apt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      apt.status === 'upcoming' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      <Calendar className={`w-6 h-6 ${
                        apt.status === 'upcoming' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{apt.type}</h3>
                      <p className="text-gray-600">{apt.practitioner}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm capitalize ${getStatusColor(apt.status)}`}>
                    {apt.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Date</p>
                    <p className="text-gray-900 font-semibold">
                      {new Date(apt.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Time</p>
                    <p className="text-gray-900 font-semibold">{apt.time}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Location</p>
                    <p className="text-gray-900 font-semibold">{apt.location}</p>
                  </div>
                </div>

                {apt.status === 'upcoming' && (
                  <div className="flex space-x-3">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Reschedule
                    </button>
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                      {apt.location === 'Virtual' ? 'Join Call' : 'Get Directions'}
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
