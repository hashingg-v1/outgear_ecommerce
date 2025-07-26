export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-xl text-gray-600">Last updated: January 2024</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this
            agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the materials on OutdoorGear's website for
            personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Information</h2>
          <p className="text-gray-600">
            We strive to provide accurate product information, but we do not warrant that product descriptions or other
            content is accurate, complete, reliable, current, or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Questions about the Terms of Service should be sent to us at legal@outdoorgear.com
          </p>
        </section>
      </div>
    </div>
  )
}
