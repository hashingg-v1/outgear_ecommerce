"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    category: "Orders & Shipping",
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days, express shipping takes 2-3 business days, and overnight shipping arrives the next business day. Free shipping is available on orders over $100.",
  },
  {
    category: "Orders & Shipping",
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship to all 50 United States, Canada, and APO/FPO addresses. International shipping to other countries is not available at this time.",
  },
  {
    category: "Orders & Shipping",
    question: "Can I track my order?",
    answer:
      "Yes! Once your order ships, you'll receive a tracking number via email. You can track your package on our website or directly with the shipping carrier.",
  },
  {
    category: "Returns & Exchanges",
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on most items. Items must be in original condition with tags attached. We provide prepaid return labels for your convenience.",
  },
  {
    category: "Returns & Exchanges",
    question: "How do I exchange an item?",
    answer:
      "Exchanges are free within 30 days of purchase. Contact our customer service team to initiate an exchange. Exchanges are subject to availability.",
  },
  {
    category: "Returns & Exchanges",
    question: "What items cannot be returned?",
    answer:
      "Used or worn items, items without original tags, personalized or custom items, and items returned after 30 days cannot be returned.",
  },
  {
    category: "Products",
    question: "How do I choose the right size?",
    answer:
      "Please refer to our detailed size guide for measurements and sizing charts for clothing, footwear, and backpacks. When in doubt, contact our customer service team for personalized sizing advice.",
  },
  {
    category: "Products",
    question: "Are your products waterproof?",
    answer:
      "Many of our products feature waterproof or water-resistant materials. Check individual product descriptions for specific waterproof ratings and care instructions.",
  },
  {
    category: "Products",
    question: "Do you offer warranties on your products?",
    answer:
      "Yes, most of our products come with manufacturer warranties ranging from 1-2 years. Warranty details are provided with each product and cover manufacturing defects.",
  },
  {
    category: "Account & Payment",
    question: "Do I need an account to place an order?",
    answer:
      "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and access your order history.",
  },
  {
    category: "Account & Payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay for secure checkout.",
  },
  {
    category: "Account & Payment",
    question: "Is my payment information secure?",
    answer:
      "Yes, we use SSL encryption and secure payment processing to protect your personal and payment information. We never store your credit card details on our servers.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(faqData.map((item) => item.category)))]

  const filteredFAQs =
    selectedCategory === "All" ? faqData : faqData.filter((item) => item.category === selectedCategory)

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">Find answers to common questions about our products and services</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div>
                <span className="text-sm text-green-600 font-medium">{item.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.question}</h3>
              </div>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Still Have Questions?</h2>
        <p className="text-green-700 mb-6">
          Our customer service team is here to help you with any questions not covered in our FAQ.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
          <a
            href="tel:1-800-688-3667"
            className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Call 1-800-OUTDOOR
          </a>
        </div>
      </div>
    </div>
  )
}
