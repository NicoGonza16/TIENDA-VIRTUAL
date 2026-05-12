import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/data/products'

export function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2">
            <span className="w-8 h-px bg-primary"></span>
            Browse by Category
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Shop by Category</h2>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/catalog?category=${category.name.toLowerCase()}`}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                <p className="text-white/70 text-sm">{category.count} products</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
