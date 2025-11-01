import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: October 31, 2025
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-600 mb-6">
            At RHP Therapy (Royal Home of Phytotherapy), we are committed to protecting your privacy 
            and ensuring the security of your personal information. This Privacy Policy explains how 
            we collect, use, disclose, and safeguard your information when you visit our website or 
            make a purchase from us.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <Lock className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Data</h3>
              <p className="text-sm text-gray-600">
                Your information is encrypted and protected
              </p>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <Eye className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Transparent</h3>
              <p className="text-sm text-gray-600">
                We're clear about what data we collect
              </p>
            </div>

            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-sm text-gray-600">
                You control your personal information
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Database className="w-6 h-6 text-emerald-600 mr-3" />
            Information We Collect
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
              <p className="text-gray-600 mb-2">
                When you make a purchase or create an account, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Shipping and billing address</li>
                <li>Payment information (processed securely by our payment processor)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-2">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Communication Data</h3>
              <p className="text-gray-600">
                If you contact us via email, phone, or chat, we may keep records of your 
                communications to provide better customer service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
              <div>
                <h3 className="font-semibold text-gray-900">Order Processing</h3>
                <p className="text-gray-600">
                  To process and fulfill your orders, send order confirmations, and provide 
                  customer support.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
              <div>
                <h3 className="font-semibold text-gray-900">Communication</h3>
                <p className="text-gray-600">
                  To send you important updates about your orders, respond to inquiries, and 
                  provide customer service.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
              <div>
                <h3 className="font-semibold text-gray-900">Marketing (With Your Consent)</h3>
                <p className="text-gray-600">
                  To send you newsletters, promotional materials, and special offers if you've 
                  opted in to receive them.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
              <div>
                <h3 className="font-semibold text-gray-900">Website Improvement</h3>
                <p className="text-gray-600">
                  To analyze website usage, improve our services, and enhance user experience.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
              <div>
                <h3 className="font-semibold text-gray-900">Fraud Prevention</h3>
                <p className="text-gray-600">
                  To detect and prevent fraudulent transactions and protect our website security.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
              <div>
                <h3 className="font-semibold text-gray-900">Legal Compliance</h3>
                <p className="text-gray-600">
                  To comply with applicable laws and regulations in Ghana.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>

          <p className="text-gray-600 mb-4">
            We do not sell or rent your personal information to third parties. We may share your 
            information only in the following circumstances:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
              <p className="text-gray-600">
                With trusted third-party service providers who help us operate our business 
                (payment processors, shipping companies, email service providers). These partners 
                are bound by confidentiality agreements.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
              <p className="text-gray-600">
                When required by law or to protect our rights, property, or safety, or that of 
                our users.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Business Transfers</h3>
              <p className="text-gray-600">
                In connection with a merger, acquisition, or sale of assets, your information 
                may be transferred as part of that transaction.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Access and Correction</h3>
              <p className="text-gray-600">
                You have the right to access and update your personal information at any time 
                through your account settings or by contacting us.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Deletion</h3>
              <p className="text-gray-600">
                You can request deletion of your personal information, subject to legal and 
                contractual obligations. Contact us to submit a deletion request.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Marketing Opt-Out</h3>
              <p className="text-gray-600">
                You can unsubscribe from marketing emails at any time by clicking the 
                "unsubscribe" link in any marketing email or by contacting us.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cookie Preferences</h3>
              <p className="text-gray-600">
                You can manage cookie preferences through your browser settings. Note that 
                disabling cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>

          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            These measures include:
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure payment processing through PCI-compliant providers</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal information on a need-to-know basis</li>
            <li>Employee training on data protection and privacy</li>
          </ul>

          <p className="text-gray-600 mt-4">
            However, no method of transmission over the Internet or electronic storage is 100% 
            secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>

          <p className="text-gray-600 mb-4">
            We use cookies and similar tracking technologies to improve your browsing experience. 
            Cookies are small data files stored on your device. We use:
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900">Essential Cookies</p>
              <p className="text-sm text-gray-600">Required for website functionality</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900">Performance Cookies</p>
              <p className="text-sm text-gray-600">Help us understand how visitors use our site</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900">Marketing Cookies</p>
              <p className="text-sm text-gray-600">
                Used to deliver relevant advertisements (only with your consent)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>

          <p className="text-gray-600">
            Our website and services are not directed to individuals under the age of 18. We do 
            not knowingly collect personal information from children. If you believe we have 
            inadvertently collected information from a child, please contact us immediately so we 
            can delete it.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>

          <p className="text-gray-600">
            We may update this Privacy Policy from time to time to reflect changes in our practices 
            or legal requirements. We will notify you of any material changes by posting the updated 
            policy on this page with a new "Last Updated" date. Your continued use of our website 
            after changes are posted constitutes your acceptance of the updated policy.
          </p>
        </div>

        <div className="bg-emerald-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
          <p className="mb-6">
            If you have questions or concerns about this Privacy Policy or our data practices, 
            please contact us:
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>info@rhptherapy.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>+233 30 123 4567</span>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">RHP Therapy</p>
                <p>Factory Location: Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
