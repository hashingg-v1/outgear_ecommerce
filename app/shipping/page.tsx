import { Truck, Clock, Package } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
        <p className="text-xl text-gray-600">Fast, reliable delivery for your outdoor adventures</p>
      </div>

      {/* Shipping Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Free Standard Shipping</h3>
          <p className="text-gray-600 mb-2">On orders over $100</p>
          <p className="text-sm text-gray-500">5-7 business days</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Express Shipping</h3>
          <p className="text-gray-600 mb-2">$12.99</p>
          <p className="text-sm text-gray-500">2-3 business days</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Overnight Shipping</h3>
          <p className="text-gray-600 mb-2">$24.99</p>
          <p className="text-sm text-gray-500">Next business day</p>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Details</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Time</h3>
              <p className="text-gray-600">
                Orders are typically processed within 1-2 business days. Orders placed after 2 PM EST will be processed
                the next business day.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping Areas</h3>
              <p className="text-gray-600 mb-2">We currently ship to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>All 50 United States</li>
                <li>Canada (additional fees may apply)</li>
                <li>APO/FPO addresses</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Item Shipping</h3>
              <p className="text-gray-600">
                Large items such as tents and large backpacks may require special shipping arrangements. Additional
                shipping charges may apply for oversized items.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Tracking</h3>
              <p className="text-gray-600">
                Once your order ships, you'll receive a tracking number via email. You can track your package on our
                website or directly with the shipping carrier.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Free Shipping Promotion</h3>
          <p className="text-green-700">
            Enjoy free standard shipping on all orders over $100. No promo code needed - discount applied automatically
            at checkout!
          </p>
        </div>
      </div>
    </div>
  )
}
