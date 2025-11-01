'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Award, 
  Gift, 
  TrendingUp,
  Star,
  Crown,
  Sparkles,
  ShoppingBag,
  Users,
  Calendar,
  CheckCircle,
  Lock,
  Copy
} from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function RewardsPage() {
  const [copiedCode, setCopiedCode] = useState(false)

  const loyaltyData = {
    currentPoints: 2450,
    tier: 'Gold',
    nextTier: 'Platinum',
    pointsToNextTier: 550,
    lifetimePoints: 5320,
    lifetimeSavings: 234.50,
  }

  const tiers = [
    {
      name: 'Silver',
      minPoints: 0,
      color: 'from-gray-400 to-gray-600',
      benefits: ['5% discount on orders', 'Birthday gift', 'Early sale access'],
    },
    {
      name: 'Gold',
      minPoints: 2000,
      color: 'from-amber-400 to-orange-600',
      benefits: ['10% discount on orders', 'Free shipping', 'Priority support', 'Exclusive products'],
      current: true,
    },
    {
      name: 'Platinum',
      minPoints: 3000,
      color: 'from-purple-400 to-indigo-600',
      benefits: ['15% discount on orders', 'Free express shipping', 'VIP support', 'Exclusive products', 'Personal health advisor'],
    },
  ]

  const rewardHistory = [
    {
      id: 1,
      date: '2025-10-30',
      type: 'earned',
      points: 250,
      description: 'Order #ORD-247 completed',
    },
    {
      id: 2,
      date: '2025-10-25',
      type: 'redeemed',
      points: -500,
      description: 'GH₵25 discount coupon',
    },
    {
      id: 3,
      date: '2025-10-15',
      type: 'earned',
      points: 200,
      description: 'Order #ORD-246 completed',
    },
    {
      id: 4,
      date: '2025-10-10',
      type: 'bonus',
      points: 100,
      description: 'Subscription renewal bonus',
    },
  ]

  const availableRewards = [
    {
      id: 1,
      name: 'GH₵10 Discount',
      points: 200,
      description: 'Get GH₵10 off your next order',
      type: 'discount',
    },
    {
      id: 2,
      name: 'GH₵25 Discount',
      points: 500,
      description: 'Get GH₵25 off your next order',
      type: 'discount',
    },
    {
      id: 3,
      name: 'GH₵50 Discount',
      points: 1000,
      description: 'Get GH₵50 off your next order',
      type: 'discount',
    },
    {
      id: 4,
      name: 'Free Shipping',
      points: 150,
      description: 'Free shipping on your next order',
      type: 'shipping',
    },
    {
      id: 5,
      name: 'Free Consultation',
      points: 800,
      description: '30-minute consultation with our specialist',
      type: 'consultation',
    },
    {
      id: 6,
      name: 'Gift Box',
      points: 1500,
      description: 'Exclusive wellness gift box',
      type: 'gift',
      locked: true,
    },
  ]

  const referralCode = 'RHPJ2M5K'

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopiedCode(true)
    toast.success('Referral code copied!')
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/portal" className="text-emerald-600 hover:text-emerald-700 font-semibold mb-4 inline-block">
            ← Back to Portal
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rewards & Loyalty</h1>
          <p className="text-gray-600">Earn points and unlock exclusive benefits</p>
        </div>

        {/* Current Points & Tier */}
        <div className="bg-linear-to-br from-amber-500 to-orange-600 rounded-lg shadow-md p-8 text-white mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Crown className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase">{loyaltyData.tier} Member</span>
              </div>
              <h2 className="text-4xl font-bold">{loyaltyData.currentPoints.toLocaleString()} Points</h2>
              <p className="text-orange-100 mt-1">
                {loyaltyData.pointsToNextTier} points to {loyaltyData.nextTier}
              </p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-2" />
              <div className="text-sm text-orange-100">Lifetime Savings</div>
              <div className="text-2xl font-bold">GH₵{loyaltyData.lifetimeSavings.toFixed(2)}</div>
            </div>
          </div>
          <div className="bg-white/20 rounded-full h-3 mb-2">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-300"
              style={{ width: `${(loyaltyData.currentPoints / 3000) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-orange-100">
            <span>Silver (0)</span>
            <span>Gold (2000)</span>
            <span>Platinum (3000)</span>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`border-2 rounded-lg p-6 ${
                  tier.current ? 'border-amber-500 bg-amber-50' : 'border-gray-200'
                }`}
              >
                <div className={`bg-linear-to-r ${tier.color} text-white rounded-lg p-4 mb-4 text-center`}>
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <p className="text-sm opacity-90">{tier.minPoints}+ points</p>
                </div>
                {tier.current && (
                  <div className="flex items-center justify-center space-x-2 mb-4 text-amber-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Current Tier</span>
                  </div>
                )}
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Available Rewards */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Redeem Your Points</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {availableRewards.map((reward) => (
              <div
                key={reward.id}
                className={`border rounded-lg p-6 ${
                  reward.locked || loyaltyData.currentPoints < reward.points
                    ? 'border-gray-200 opacity-60'
                    : 'border-gray-200 hover:border-emerald-600 transition-colors'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    reward.locked || loyaltyData.currentPoints < reward.points
                      ? 'bg-gray-100'
                      : 'bg-emerald-100'
                  }`}>
                    {reward.locked ? (
                      <Lock className="w-6 h-6 text-gray-400" />
                    ) : reward.type === 'discount' ? (
                      <Gift className="w-6 h-6 text-emerald-600" />
                    ) : reward.type === 'consultation' ? (
                      <Users className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <ShoppingBag className="w-6 h-6 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{reward.points}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{reward.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                <button
                  disabled={reward.locked || loyaltyData.currentPoints < reward.points}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                    reward.locked || loyaltyData.currentPoints < reward.points
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  {reward.locked ? 'Locked' : loyaltyData.currentPoints < reward.points ? 'Not Enough Points' : 'Redeem'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Earn More Points */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Earn More Points</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Make Purchases</h3>
                  <p className="text-sm text-gray-600">Earn 10 points for every GH₵1 spent</p>
                </div>
                <div className="text-emerald-600 font-bold">10pts/GH₵</div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Refer Friends</h3>
                  <p className="text-sm text-gray-600">Get 500 points for each referral</p>
                </div>
                <div className="text-blue-600 font-bold">500pts</div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Subscribe</h3>
                  <p className="text-sm text-gray-600">Bonus 100 points on each renewal</p>
                </div>
                <div className="text-purple-600 font-bold">100pts</div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Write Reviews</h3>
                  <p className="text-sm text-gray-600">Earn 50 points per product review</p>
                </div>
                <div className="text-amber-600 font-bold">50pts</div>
              </div>
            </div>
          </div>

          {/* Referral Program */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Refer & Earn</h2>
            <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg p-6 text-white mb-6">
              <Sparkles className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Share the Wellness</h3>
              <p className="text-emerald-100 mb-4">
                Give GH₵25, Get 500 points. Your friends get GH₵25 off their first order, and you earn 500 loyalty points!
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Your Referral Code</label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={referralCode}
                  readOnly
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg font-mono text-lg text-center"
                />
                <button
                  onClick={copyReferralCode}
                  className="px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {copiedCode && (
                <p className="text-sm text-emerald-600 mt-2">✓ Copied to clipboard!</p>
              )}
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Share via WhatsApp
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                Share via Email
              </button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Referral Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">12</div>
                  <div className="text-xs text-gray-600">Friends Referred</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">6,000</div>
                  <div className="text-xs text-gray-600">Points Earned</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Points History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Points History</h2>
          <div className="space-y-3">
            {rewardHistory.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'earned' ? 'bg-green-100' :
                    transaction.type === 'bonus' ? 'bg-blue-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'earned' || transaction.type === 'bonus' ? (
                      <TrendingUp className={`w-5 h-5 ${
                        transaction.type === 'bonus' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    ) : (
                      <Gift className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className={`text-lg font-bold ${
                  transaction.points > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.points > 0 ? '+' : ''}{transaction.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
