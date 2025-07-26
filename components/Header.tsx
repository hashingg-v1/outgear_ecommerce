"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { state } = useCart()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">OutdoorGear</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-green-600 transition-colors">
              Shop
            </Link>
            <Link href="/categories/tents" className="text-gray-700 hover:text-green-600 transition-colors">
              Tents
            </Link>
            <Link href="/categories/shoes" className="text-gray-700 hover:text-green-600 transition-colors">
              Shoes
            </Link>
            <Link href="/categories/backpacks" className="text-gray-700 hover:text-green-600 transition-colors">
              Backpacks
            </Link>
            <Link href="/categories/accessories" className="text-gray-700 hover:text-green-600 transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Search, Cart, User */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link href="/account" className="p-2 text-gray-700 hover:text-green-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/shop" className="text-gray-700 hover:text-green-600 transition-colors">
                Shop
              </Link>
              <Link href="/categories/tents" className="text-gray-700 hover:text-green-600 transition-colors">
                Tents
              </Link>
              <Link href="/categories/shoes" className="text-gray-700 hover:text-green-600 transition-colors">
                Shoes
              </Link>
              <Link href="/categories/backpacks" className="text-gray-700 hover:text-green-600 transition-colors">
                Backpacks
              </Link>
              <Link href="/categories/accessories" className="text-gray-700 hover:text-green-600 transition-colors">
                Accessories
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
