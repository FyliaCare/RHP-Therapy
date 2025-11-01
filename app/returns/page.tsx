import { RotateCcw, CheckCircle, XCircle, Package } from 'lucide-react'

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <RotateCcw className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Refunds</h1>
          <p className="text-xl text-gray-600">
            30-Day Money-Back Guarantee - Your satisfaction is our priority
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-emerald-100 rounded-full">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">30-Day Guarantee</h3>
            <p className="text-gray-600">
              Return unopened bottles within 30 days for a full refund
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-emerald-100 rounded-full">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Process</h3>
            <p className="text-gray-600">
              Simple return process with free return shipping
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-emerald-100 rounded-full">
                <RotateCcw className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Refunds</h3>
            <p className="text-gray-600">
              Refunds processed within 5-7 business days
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Policy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                Eligible Items
              </h3>
              <p className="text-gray-600 ml-7">
                We accept returns of unopened bottles of MAEFORX within 30 days of purchase. 
                The product must be in its original packaging with seals intact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <XCircle className="w-5 h-5 text-red-600 mr-2" />
                Non-Returnable Items
              </h3>
              <p className="text-gray-600 ml-7">
                Opened bottles cannot be returned for hygiene and safety reasons. Products 
                purchased more than 30 days ago are not eligible for returns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Return Window</h3>
              <p className="text-gray-600">
                You have 30 days from the date of delivery to initiate a return. The return 
                must be postmarked within this period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Condition Requirements</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Product must be unused and unopened</li>
                <li>Original packaging must be intact</li>
                <li>Safety seals must be unbroken</li>
                <li>All labels must be attached and legible</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return an Item</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Customer Service</h3>
                <p className="text-gray-600">
                  Email us at info@rhptherapy.com or call +233 30 123 4567 to initiate your return. 
                  Please have your order number ready.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Receive Return Authorization</h3>
                <p className="text-gray-600">
                  Our team will provide you with a Return Merchandise Authorization (RMA) number 
                  and return shipping instructions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pack and Ship</h3>
                <p className="text-gray-600">
                  Securely pack the item in its original packaging. Include your RMA number and 
                  original receipt. Ship to the address provided (return shipping is free).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Receive Your Refund</h3>
                <p className="text-gray-600">
                  Once we receive and inspect your return, we'll process your refund within 5-7 
                  business days. You'll receive confirmation via email.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Refund Method</h3>
              <p className="text-gray-600">
                Refunds will be issued to your original payment method. If you paid by credit/debit 
                card, the refund will appear on your statement within 7-10 business days. Mobile 
                Money refunds are typically instant.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Partial Refunds</h3>
              <p className="text-gray-600">
                If you return only some items from a multi-item order, you will receive a partial 
                refund for those items. Shipping costs are non-refundable unless the return is due 
                to our error.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Damaged or Defective Items</h3>
              <p className="text-gray-600">
                If you receive a damaged or defective item, please contact us immediately. We will 
                arrange for a replacement at no cost to you, including return shipping.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Late or Missing Refunds</h3>
              <p className="text-gray-600">
                If you haven't received your refund within the specified timeframe, first check your 
                bank account or contact your card issuer. If you still haven't received it, please 
                contact us at info@rhptherapy.com.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchanges</h2>
          
          <p className="text-gray-600 mb-4">
            We currently do not offer direct exchanges. If you need a different quantity or have 
            concerns about your order, please return your item for a refund and place a new order.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Damaged in Transit?</h3>
            <p className="text-gray-600 mb-4">
              If your item was damaged during shipping, we'll send you a replacement immediately 
              at no charge. Just provide photos of the damage and your order number.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> info@rhptherapy.com
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Phone:</span> +233 30 123 4567
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-emerald-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Questions About Returns?</h3>
          <p className="mb-6">
            Our customer service team is here to help make your return process as smooth as possible
          </p>
          <a
            href="mailto:info@rhptherapy.com"
            className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Customer Service
          </a>
        </div>
      </div>
    </div>
  )
}
