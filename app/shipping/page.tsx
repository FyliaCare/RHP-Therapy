import { Truck, Package, MapPin, Clock, Phone } from 'lucide-react'

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Truck className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Delivery</h1>
          <p className="text-xl text-gray-600">
            Fast and reliable nationwide delivery across Ghana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Delivery Coverage</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We deliver to all regions in Ghana from our manufacturing facility in Accra.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-gray-900">Greater Accra Region</p>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-gray-900">Major Cities (Kumasi, Takoradi, Tamale)</p>
                  <p className="text-sm text-gray-600">3-4 business days</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-gray-900">Other Regions</p>
                  <p className="text-sm text-gray-600">4-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Package className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Shipping Costs</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Affordable shipping rates with free delivery on qualifying orders.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Standard Shipping</p>
                <p className="text-2xl font-bold text-emerald-600">GH₵15</p>
                <p className="text-sm text-gray-600 mt-1">Orders under GH₵100</p>
              </div>
              <div className="p-4 bg-emerald-600 rounded-lg">
                <p className="font-semibold text-white mb-1">FREE SHIPPING</p>
                <p className="text-2xl font-bold text-white">GH₵0</p>
                <p className="text-sm text-emerald-100 mt-1">Orders GH₵100 and above</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Processing Time</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-emerald-600 mb-2">1-2</p>
              <p className="text-sm text-gray-600">Business Days</p>
              <p className="text-xs text-gray-500 mt-2">Order processing time</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-emerald-600 mb-2">24hr</p>
              <p className="text-sm text-gray-600">Response Time</p>
              <p className="text-xs text-gray-500 mt-2">Customer service availability</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-emerald-600 mb-2">100%</p>
              <p className="text-sm text-gray-600">Trackable</p>
              <p className="text-xs text-gray-500 mt-2">All shipments tracked</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Tracking</h3>
              <p className="text-gray-600">
                Once your order is shipped, you will receive a tracking number via SMS and email. 
                You can use this number to track your package in real-time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery Attempts</h3>
              <p className="text-gray-600">
                Our courier will make up to 3 delivery attempts. If all attempts fail, the package 
                will be held at the nearest collection point, and you will be notified.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Signature Required</h3>
              <p className="text-gray-600">
                A signature is required upon delivery to ensure your package is received safely. 
                Please ensure someone is available to receive the package.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Package Protection</h3>
              <p className="text-gray-600">
                All packages are securely sealed and discreetly packaged to protect your privacy 
                and ensure product integrity during transit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Damaged or Missing Items</h3>
              <p className="text-gray-600">
                If your package arrives damaged or items are missing, please contact our customer 
                service team immediately at +233 30 123 4567 or info@rhptherapy.com. We will 
                arrange a replacement at no additional cost.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-lg p-8">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-bold text-gray-900">Need Help?</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Have questions about your delivery? Our customer service team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> +233 30 123 4567
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> info@rhptherapy.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
