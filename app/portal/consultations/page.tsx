'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  Video, 
  MapPin,
  Clock,
  User,
  CheckCircle,
  Plus,
  Search,
  Filter,
  Phone,
  MessageSquare,
  FileText
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ConsultationsPage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [consultationType, setConsultationType] = useState('virtual')

  const specialists = [
    {
      id: 1,
      name: 'Dr. Kwame Mensah',
      title: 'Senior Herbal Practitioner',
      specialty: 'Digestive Health & Wellness',
      experience: '15 years',
      rating: 4.9,
      reviews: 127,
      image: '/placeholder-doctor-1.jpg',
      availability: ['Mon', 'Wed', 'Fri'],
    },
    {
      id: 2,
      name: 'Dr. Ama Asante',
      title: 'Traditional Medicine Specialist',
      specialty: 'Women\'s Health & Holistic Care',
      experience: '12 years',
      rating: 4.8,
      reviews: 98,
      image: '/placeholder-doctor-2.jpg',
      availability: ['Tue', 'Thu', 'Sat'],
    },
    {
      id: 3,
      name: 'Dr. Kofi Osei',
      title: 'Herbal Medicine Expert',
      specialty: 'Cardiovascular & Immune Support',
      experience: '18 years',
      rating: 5.0,
      reviews: 156,
      image: '/placeholder-doctor-3.jpg',
      availability: ['Mon', 'Tue', 'Thu', 'Fri'],
    },
  ]

  const upcomingAppointments = [
    {
      id: 1,
      specialist: 'Dr. Kwame Mensah',
      type: 'Virtual Consultation',
      date: '2025-11-05',
      time: '10:00 AM',
      duration: '30 minutes',
      status: 'confirmed',
    },
  ]

  const pastAppointments = [
    {
      id: 2,
      specialist: 'Dr. Ama Asante',
      type: 'In-Person Consultation',
      date: '2025-10-15',
      time: '2:00 PM',
      duration: '45 minutes',
      status: 'completed',
      notes: 'Recommended continued use of MAEFORX. Follow-up in 4 weeks.',
    },
  ]

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/portal" className="text-emerald-600 hover:text-emerald-700 font-semibold mb-4 inline-block">
            ← Back to Portal
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Consultations</h1>
          <p className="text-gray-600">Book and manage consultations with our herbal specialists</p>
        </div>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.map((apt) => (
              <div key={apt.id} className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{apt.type}</h3>
                      <p className="text-gray-600">with {apt.specialist}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(apt.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{apt.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Confirmed
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 flex items-center justify-center space-x-2">
                    <Video className="w-4 h-4" />
                    <span>Join Virtual Consultation</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Reschedule
                  </button>
                  <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Book New Consultation */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Book a New Consultation</h2>

          {/* Consultation Type */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Consultation Type</label>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setConsultationType('virtual')}
                className={`p-4 border-2 rounded-lg flex items-center space-x-3 transition-all ${
                  consultationType === 'virtual'
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  consultationType === 'virtual' ? 'bg-emerald-600' : 'bg-gray-100'
                }`}>
                  <Video className={`w-6 h-6 ${consultationType === 'virtual' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Virtual Consultation</h3>
                  <p className="text-sm text-gray-600">Video call from anywhere</p>
                </div>
                {consultationType === 'virtual' && (
                  <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                )}
              </button>

              <button
                onClick={() => setConsultationType('in-person')}
                className={`p-4 border-2 rounded-lg flex items-center space-x-3 transition-all ${
                  consultationType === 'in-person'
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  consultationType === 'in-person' ? 'bg-emerald-600' : 'bg-gray-100'
                }`}>
                  <MapPin className={`w-6 h-6 ${consultationType === 'in-person' ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">In-Person</h3>
                  <p className="text-sm text-gray-600">Visit our Accra clinic</p>
                </div>
                {consultationType === 'in-person' && (
                  <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                )}
              </button>
            </div>
          </div>

          {/* Select Specialist */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Select Specialist</label>
            <div className="grid md:grid-cols-3 gap-4">
              {specialists.map((specialist) => (
                <div key={specialist.id} className="border border-gray-200 rounded-lg p-4 hover:border-emerald-600 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{specialist.name}</h3>
                      <p className="text-xs text-gray-600">{specialist.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{specialist.specialty}</p>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <span>{specialist.experience} experience</span>
                    <span>⭐ {specialist.rating} ({specialist.reviews})</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {specialist.availability.map((day) => (
                      <span key={day} className="px-2 py-1 bg-gray-100 text-xs rounded">
                        {day}
                      </span>
                    ))}
                  </div>
                  <button className="w-full px-3 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Time</label>
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-2 border rounded-lg text-sm ${
                      selectedTime === time
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Reason for Consultation (Optional)
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              rows={4}
              placeholder="Briefly describe what you'd like to discuss..."
            />
          </div>

          <button className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-semibold">
            Book Consultation
          </button>
        </div>

        {/* Past Consultations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Past Consultations</h2>
          {pastAppointments.length > 0 ? (
            <div className="space-y-4">
              {pastAppointments.map((apt) => (
                <div key={apt.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{apt.type}</h3>
                      <p className="text-sm text-gray-600">with {apt.specialist}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(apt.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} at {apt.time}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </div>
                  {apt.notes && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700"><strong>Notes:</strong> {apt.notes}</p>
                    </div>
                  )}
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                      Book Follow-up
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No past consultations</p>
          )}
        </div>
      </div>
    </div>
  )
}
