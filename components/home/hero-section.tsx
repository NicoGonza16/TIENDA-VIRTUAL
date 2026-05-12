import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-[600px] lg:min-h-[700px]">
          {/* Content */}
          <div className="flex flex-col justify-center px-4 lg:px-12 py-12 lg:py-0">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <span className="w-8 h-px bg-primary"></span>
              New Collection 2024
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Discover Your
              <br />
              <span className="text-primary">Perfect Style</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 text-pretty">
              Explore our curated collection of premium products designed for modern living. 
              Quality meets elegance in every detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/catalog">
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/catalog">Explore Catalog</Link>
              </Button>
            </div>
            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50k+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
              alt="Hero banner showcasing premium products"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating card */}
            <div className="absolute bottom-8 left-4 lg:left-8 right-4 lg:right-auto lg:max-w-xs bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80"
                    alt="Featured product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">Minimalist Watch</p>
                  <p className="text-sm text-muted-foreground">Premium Collection</p>
                  <p className="text-primary font-semibold">$189.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
