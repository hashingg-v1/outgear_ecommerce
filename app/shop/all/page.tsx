import { products } from "@/lib/data"
import ProductCard from "@/components/ProductCard"

export default function ShopAllPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
        <p className="text-xl text-gray-600">Discover our complete collection of premium outdoor gear</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">Showing {products.length} products</p>
      </div>
    </div>
  )
}
