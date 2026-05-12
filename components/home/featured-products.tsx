import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { getFeaturedProducts } from '@/data/products'

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2">
              <span className="w-8 h-px bg-primary"></span>
              Handpicked for You
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured Products</h2>
          </div>
          <Link 
            href="/catalog" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
