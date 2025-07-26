import { RotateCcw, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
        <p className="text-xl text-gray-600">We want you to love your gear. If not, we'll make it right.</p>
      </div>

      {/* Return Policy Overview */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <RotateCcw className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold text-green-800">30-Day Return Policy</h2>
        </div>
        <p className="text-green-700">
          We offer a 30-day return policy on most items. Items must be in original condition with tags attached.
        </p>
      </div>

      {/* Return Process */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return an Item</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <span className="text-green-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Initiate Your Return</h3>
              <p className="text-gray-600">
                Contact our customer service team or use our online return portal to start your return.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Package Your Items</h3>
              <p className="text-gray-600">
                Pack items securely in original packaging when possible. Include all accessories and documentation.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <span className="text-green-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ship Your Return</h3>
              <p className="text-gray-600">
                Use the prepaid return label we provide. Drop off at any authorized shipping location.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <span className="text-green-600 font-bold">4</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Receive Your Refund</h3>
              <p className="text-gray-600">
                Once we receive and process your return, your refund will be issued within 5-7 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Return Conditions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Returnable Items</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Unused items with original tags</li>
            <li>• Items in original packaging</li>
            <li>• Defective or damaged items</li>
            <li>• Wrong size or color orders</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <XCircle className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Non-Returnable Items</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Used or worn items</li>
            <li>• Items without original tags</li>
            <li>• Personalized or custom items</li>
            <li>• Items returned after 30 days</li>
          </ul>
        </div>
      </div>

      {/* Exchange Information */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchanges</h2>
        <p className="text-gray-600 mb-4">
          Need a different size or color? We offer free exchanges within 30 days of purchase.
        </p>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-blue-800 text-sm">
              Exchanges are subject to availability. If your preferred item is out of stock, we'll issue a full refund.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
        <p className="text-gray-600 mb-4">Our customer service team is here to assist with your return or exchange.</p>
        <div className="space-y-2">
          <p className="text-gray-700">Email: returns@outdoorgear.com</p>
          <p className="text-gray-700">Phone: 1-800-OUTDOOR (1-800-688-3667)</p>
        </div>
      </div>
    </div>
  )
}
