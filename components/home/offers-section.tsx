import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getBestsellers } from '@/data/products'
import { ProductCard } from '@/components/product-card'

export function OffersSection() {
  const bestsellers = getBestsellers().slice(0, 3)

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Promo Banner */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80"
              alt="Special offer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-white/80 mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Up to 40% Off
                <br />
                Season Sale
              </h3>
              <p className="text-white/80 mb-6 max-w-sm">
                {"Don't miss out on our biggest sale of the year. Premium products at unbeatable prices."}
              </p>
              <div>
                <Button asChild size="lg" variant="secondary" className="gap-2">
                  <Link href="/catalog?sort=sale">
                    Shop Sale
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bestsellers */}
          <div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2">
                  <span className="w-8 h-px bg-primary"></span>
                  Top Picks
                </span>
                <h3 className="text-2xl font-bold text-foreground">Bestsellers</h3>
              </div>
              <Link 
                href="/catalog?sort=bestseller" 
                className="text-primary hover:underline text-sm font-medium"
              >
                View All
              </Link>
            </div>
            <div className="grid gap-4">
              {bestsellers.map((product) => (
                <Link 
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden relative shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.brand}</p>
                    <h4 className="font-medium text-foreground truncate">{product.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold text-primary">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
