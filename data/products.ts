export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  brand: string
  images: string[]
  colors: string[]
  sizes: string[]
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
  bestseller?: boolean
  specs?: Record<string, string>
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions for all-day listening.",
    price: 299.99,
    originalPrice: 399.99,
    category: "Electronics",
    brand: "AudioMax",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80"
    ],
    colors: ["Black", "Silver", "Rose Gold"],
    sizes: [],
    rating: 4.8,
    reviews: 2456,
    inStock: true,
    featured: true,
    bestseller: true,
    specs: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.2"
    }
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    description: "Elegant timepiece with a slim profile and genuine Italian leather strap. Water-resistant up to 50 meters with sapphire crystal glass.",
    price: 189.99,
    category: "Accessories",
    brand: "TimeCraft",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
    ],
    colors: ["Brown", "Black", "Navy"],
    sizes: [],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    featured: true,
    specs: {
      "Case Diameter": "40mm",
      "Water Resistance": "50m",
      "Movement": "Japanese Quartz",
      "Band Material": "Italian Leather"
    }
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    description: "Sustainable and comfortable organic cotton t-shirt. Pre-shrunk fabric with a modern relaxed fit.",
    price: 45.00,
    originalPrice: 59.00,
    category: "Clothing",
    brand: "EcoWear",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80"
    ],
    colors: ["White", "Black", "Gray", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    reviews: 1234,
    inStock: true,
    bestseller: true,
    specs: {
      "Material": "100% Organic Cotton",
      "Fit": "Relaxed",
      "Care": "Machine washable"
    }
  },
  {
    id: "4",
    name: "Smart Fitness Tracker",
    description: "Track your health goals with precision. Heart rate monitoring, sleep tracking, GPS, and 7-day battery life in a sleek waterproof design.",
    price: 149.99,
    category: "Electronics",
    brand: "FitTech",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80"
    ],
    colors: ["Black", "White", "Pink"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 3421,
    inStock: true,
    featured: true,
    specs: {
      "Display": "1.4\" AMOLED",
      "Battery": "7 days",
      "Water Resistance": "5ATM",
      "Sensors": "HR, SpO2, GPS"
    }
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    description: "Handcrafted acetate frames with polarized UV400 lenses. Italian design meets Japanese precision.",
    price: 225.00,
    category: "Accessories",
    brand: "VisionLux",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80"
    ],
    colors: ["Tortoise", "Black", "Clear"],
    sizes: [],
    rating: 4.4,
    reviews: 567,
    inStock: true,
    specs: {
      "Frame Material": "Acetate",
      "Lens": "Polarized CR-39",
      "UV Protection": "UV400",
      "Origin": "Handmade in Italy"
    }
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    description: "360-degree sound in a compact waterproof design. 24-hour playtime with deep bass and crystal highs.",
    price: 89.99,
    originalPrice: 119.99,
    category: "Electronics",
    brand: "SoundWave",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80"
    ],
    colors: ["Black", "Blue", "Red", "Green"],
    sizes: [],
    rating: 4.6,
    reviews: 2134,
    inStock: true,
    bestseller: true,
    specs: {
      "Power Output": "20W",
      "Battery": "24 hours",
      "Waterproof": "IPX7",
      "Weight": "540g"
    }
  },
  {
    id: "7",
    name: "Premium Running Shoes",
    description: "Engineered for performance with responsive cushioning and breathable mesh upper. Perfect for marathons or daily runs.",
    price: 159.99,
    category: "Footwear",
    brand: "SprintPro",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
    ],
    colors: ["White/Red", "Black/Blue", "Gray/Neon"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    rating: 4.8,
    reviews: 1876,
    inStock: true,
    featured: true,
    specs: {
      "Cushioning": "Responsive Foam",
      "Upper": "Breathable Mesh",
      "Drop": "10mm",
      "Weight": "280g"
    }
  },
  {
    id: "8",
    name: "Leather Crossbody Bag",
    description: "Handcrafted from full-grain leather with adjustable strap. Multiple compartments for everyday essentials.",
    price: 179.99,
    category: "Accessories",
    brand: "LeatherCraft",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
    ],
    colors: ["Tan", "Black", "Burgundy"],
    sizes: [],
    rating: 4.7,
    reviews: 743,
    inStock: true,
    specs: {
      "Material": "Full-Grain Leather",
      "Dimensions": "10\" x 8\" x 3\"",
      "Strap": "Adjustable",
      "Pockets": "3 interior, 1 exterior"
    }
  },
  {
    id: "9",
    name: "Wireless Charging Pad",
    description: "Fast 15W wireless charging with intelligent temperature control. Compatible with all Qi-enabled devices.",
    price: 39.99,
    category: "Electronics",
    brand: "ChargeTech",
    images: [
      "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=800&q=80"
    ],
    colors: ["White", "Black"],
    sizes: [],
    rating: 4.3,
    reviews: 1567,
    inStock: true,
    specs: {
      "Output": "15W max",
      "Compatibility": "Qi-enabled",
      "Safety": "Overheat protection",
      "Design": "Slim profile"
    }
  },
  {
    id: "10",
    name: "Cashmere Sweater",
    description: "Luxuriously soft pure cashmere in a timeless crew neck design. Lightweight warmth for any season.",
    price: 249.99,
    originalPrice: 299.99,
    category: "Clothing",
    brand: "LuxKnit",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
    ],
    colors: ["Camel", "Gray", "Navy", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 456,
    inStock: true,
    featured: true,
    specs: {
      "Material": "100% Cashmere",
      "Weight": "Lightweight",
      "Neckline": "Crew",
      "Care": "Dry clean recommended"
    }
  },
  {
    id: "11",
    name: "Smart Home Hub",
    description: "Control all your smart devices from one place. Voice assistant built-in with premium speaker quality.",
    price: 129.99,
    category: "Electronics",
    brand: "HomeConnect",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    colors: ["White", "Charcoal"],
    sizes: [],
    rating: 4.5,
    reviews: 892,
    inStock: true,
    specs: {
      "Voice Assistant": "Built-in",
      "Connectivity": "WiFi, Bluetooth, Zigbee",
      "Speaker": "360° audio",
      "Compatibility": "10,000+ devices"
    }
  },
  {
    id: "12",
    name: "Yoga Mat Premium",
    description: "Eco-friendly natural rubber mat with perfect grip and cushioning. Non-slip surface for all yoga styles.",
    price: 79.99,
    category: "Sports",
    brand: "ZenFit",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80"
    ],
    colors: ["Purple", "Teal", "Black", "Coral"],
    sizes: [],
    rating: 4.6,
    reviews: 1234,
    inStock: true,
    specs: {
      "Material": "Natural Rubber",
      "Thickness": "5mm",
      "Dimensions": "72\" x 24\"",
      "Features": "Non-slip, eco-friendly"
    }
  }
]

export const categories = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80", count: 156 },
  { name: "Clothing", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80", count: 243 },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80", count: 89 },
  { name: "Footwear", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80", count: 67 },
  { name: "Sports", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", count: 112 }
]

export const brands = ["AudioMax", "TimeCraft", "EcoWear", "FitTech", "VisionLux", "SoundWave", "SprintPro", "LeatherCraft", "ChargeTech", "LuxKnit", "HomeConnect", "ZenFit"]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getBestsellers(): Product[] {
  return products.filter(p => p.bestseller)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return products.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q)
  )
}
