"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/cart-context'
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X,
  ChevronDown 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const categories = [
  { name: "Electronics", href: "/catalog?category=electronics" },
  { name: "Clothing", href: "/catalog?category=clothing" },
  { name: "Accessories", href: "/catalog?category=accessories" },
  { name: "Footwear", href: "/catalog?category=footwear" },
  { name: "Sports", href: "/catalog?category=sports" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { totalItems } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/catalog?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-between px-6 py-2 border-b border-border text-sm text-muted-foreground">
          <p>Free shipping on orders over $100</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-foreground transition-colors">Help & Support</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-foreground transition-colors">Track Order</Link>
          </div>
        </div>

        {/* Main navbar */}
        <nav className="flex items-center justify-between px-4 lg:px-6 py-4">
          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 -ml-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="hidden sm:inline">NexStore</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card rounded-xl shadow-lg border border-border p-2 min-w-[200px]">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/catalog" className="text-foreground hover:text-primary transition-colors font-medium">
              Shop All
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Search bar - desktop */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </form>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Mobile search toggle */}
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <Link href="/login" className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <User className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="p-2 hover:bg-secondary rounded-lg transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </Link>

            {/* CTA Button - Desktop */}
            <Button asChild className="hidden lg:flex ml-2">
              <Link href="/catalog">Shop Now</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile search bar */}
        {isSearchOpen && (
          <form onSubmit={handleSearch} className="lg:hidden px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-0"
                autoFocus
              />
            </div>
          </form>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Categories</div>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors pl-8"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/catalog"
                className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop All
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
