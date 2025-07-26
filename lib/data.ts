export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  description: string
  features: string[]
  sizes?: string[]
  colors?: string[]
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
  trending?: boolean
}

export const products: Product[] = [
  // TENTS
  {
    id: "1",
    name: "Alpine Pro 4-Season Tent",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&h=600&fit=crop",
    ],
    category: "tents",
    description:
      "Professional-grade 4-season tent designed for extreme weather conditions. Features reinforced aluminum poles and waterproof ripstop nylon construction.",
    features: [
      "Waterproof 3000mm coating",
      "Reinforced aluminum poles",
      "Vestibule for gear storage",
      "Easy setup system",
      "Compact packed size",
    ],
    sizes: ["2-Person", "3-Person", "4-Person"],
    colors: ["Forest Green", "Mountain Gray", "Desert Tan"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    trending: true,
  },
  {
    id: "7",
    name: "Ultralight Backpacking Tent",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop",
    ],
    category: "tents",
    description: "Lightweight 2-person tent perfect for backpacking adventures. Weighs only 3.2 lbs with full rainfly.",
    features: [
      "Ultra-lightweight design",
      "Quick setup",
      "Waterproof rainfly",
      "Compact pack size",
      "Durable materials",
    ],
    sizes: ["1-Person", "2-Person"],
    colors: ["Orange", "Green", "Blue"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    trending: true,
  },
  {
    id: "8",
    name: "Family Camping Tent",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=600&fit=crop",
    ],
    category: "tents",
    description:
      "Spacious family tent with room divider and large vestibule. Perfect for car camping and family trips.",
    features: ["Room divider", "Large vestibule", "Easy setup", "Weather resistant", "Multiple windows"],
    sizes: ["6-Person", "8-Person", "10-Person"],
    colors: ["Blue", "Green", "Gray"],
    rating: 4.4,
    reviews: 156,
    inStock: true,
    featured: true,
  },

  // SHOES
  {
    id: "2",
    name: "TrailMaster Hiking Boots",
    price: 189.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    category: "shoes",
    description:
      "Durable hiking boots with superior ankle support and waterproof membrane. Perfect for long-distance trails and rugged terrain.",
    features: [
      "Waterproof membrane",
      "Vibram sole for traction",
      "Ankle support system",
      "Breathable lining",
      "Reinforced toe cap",
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Brown", "Black", "Olive"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: "9",
    name: "Lightweight Trail Runners",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1520256862855-398228c41684?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop",
    ],
    category: "shoes",
    description: "Lightweight trail running shoes with excellent grip and breathability for fast-paced adventures.",
    features: ["Lightweight design", "Superior grip", "Breathable mesh", "Quick-dry materials", "Flexible sole"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["Blue", "Gray", "Red", "Black"],
    rating: 4.5,
    reviews: 203,
    inStock: true,
    trending: true,
  },
  {
    id: "10",
    name: "Waterproof Hiking Shoes",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop",
    ],
    category: "shoes",
    description: "Mid-cut hiking shoes with waterproof protection and comfortable cushioning for day hikes.",
    features: [
      "Waterproof construction",
      "Comfortable cushioning",
      "Durable outsole",
      "Breathable lining",
      "Secure lacing",
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["Brown", "Black", "Navy"],
    rating: 4.3,
    reviews: 127,
    inStock: true,
  },

  // BACKPACKS
  {
    id: "3",
    name: "Explorer 65L Backpack",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=600&h=600&fit=crop",
    ],
    category: "backpacks",
    description:
      "Large capacity backpack with advanced suspension system and multiple compartments for extended hiking trips.",
    features: [
      "65L capacity",
      "Adjustable suspension",
      "Multiple compartments",
      "Hydration compatible",
      "Rain cover included",
    ],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Forest Green", "Charcoal", "Navy Blue"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    trending: true,
  },
  {
    id: "11",
    name: "Day Hiking Backpack 30L",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "backpacks",
    description:
      "Perfect day pack for hiking and outdoor activities with comfortable padding and organization pockets.",
    features: ["30L capacity", "Padded shoulder straps", "Multiple pockets", "Hydration ready", "Lightweight design"],
    sizes: ["One Size"],
    colors: ["Blue", "Green", "Gray", "Black"],
    rating: 4.4,
    reviews: 98,
    inStock: true,
    featured: true,
  },
  {
    id: "12",
    name: "Ultralight Backpack 45L",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "backpacks",
    description:
      "Ultralight backpack for serious backpackers who want to minimize weight without sacrificing features.",
    features: [
      "Ultra-lightweight materials",
      "45L capacity",
      "Minimalist design",
      "Durable construction",
      "Comfortable fit",
    ],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Orange", "Green", "Blue"],
    rating: 4.6,
    reviews: 74,
    inStock: true,
    trending: true,
  },

  // ACCESSORIES
  {
    id: "4",
    name: "Compact Sleeping Bag",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    category: "accessories",
    description:
      "Lightweight and compact sleeping bag rated for 3-season use. Features synthetic insulation and water-resistant shell.",
    features: [
      "Temperature rated to 20°F",
      "Synthetic insulation",
      "Water-resistant shell",
      "Compression sack included",
      "Full-length zipper",
    ],
    colors: ["Blue", "Red", "Green"],
    rating: 4.4,
    reviews: 73,
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Portable Camp Stove",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    category: "accessories",
    description:
      "Lightweight portable stove perfect for backpacking and camping. Burns efficiently with standard fuel canisters.",
    features: [
      "Lightweight design",
      "Efficient fuel consumption",
      "Wind-resistant burner",
      "Foldable legs",
      "Piezo ignition",
    ],
    rating: 4.5,
    reviews: 92,
    inStock: true,
    trending: true,
  },
  {
    id: "6",
    name: "Waterproof Hiking Jacket",
    price: 129.99,
    originalPrice: 169.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop",
    ],
    category: "accessories",
    description: "Premium waterproof jacket with breathable membrane. Features adjustable hood and multiple pockets.",
    features: ["Waterproof/breathable", "Adjustable hood", "Multiple pockets", "Ventilation zips", "Packable design"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Forest Green", "Red"],
    rating: 4.6,
    reviews: 108,
    inStock: true,
  },
  {
    id: "13",
    name: "Insulated Water Bottle",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    category: "accessories",
    description: "Double-wall insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    features: ["Double-wall insulation", "Leak-proof cap", "Wide mouth opening", "Durable construction", "BPA-free"],
    sizes: ["16oz", "20oz", "32oz"],
    colors: ["Stainless Steel", "Black", "Blue", "Green"],
    rating: 4.7,
    reviews: 245,
    inStock: true,
    featured: true,
  },
  {
    id: "14",
    name: "LED Headlamp",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=600&h=600&fit=crop",
    ],
    category: "accessories",
    description: "Bright LED headlamp with multiple lighting modes and long battery life for outdoor adventures.",
    features: [
      "300 lumen output",
      "Multiple light modes",
      "Waterproof design",
      "Adjustable strap",
      "Long battery life",
    ],
    colors: ["Black", "Red", "Blue"],
    rating: 4.5,
    reviews: 167,
    inStock: true,
    trending: true,
  },
  {
    id: "15",
    name: "Trekking Poles Set",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    ],
    category: "accessories",
    description: "Lightweight carbon fiber trekking poles with comfortable grips and adjustable length.",
    features: [
      "Carbon fiber construction",
      "Adjustable length",
      "Comfortable grips",
      "Tungsten tips",
      "Lightweight design",
    ],
    colors: ["Black", "Blue", "Green"],
    rating: 4.3,
    reviews: 89,
    inStock: true,
  },
]

export const categories = [
  {
    id: "tents",
    name: "Tents & Shelters",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
    description: "Premium tents for all weather conditions",
  },
  {
    id: "shoes",
    name: "Hiking Shoes",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
    description: "Durable footwear for every terrain",
  },
  {
    id: "backpacks",
    name: "Backpacks",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    description: "Comfortable packs for long adventures",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop",
    description: "Essential gear for outdoor activities",
  },
]
