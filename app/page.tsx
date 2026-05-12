import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { CategoriesSection } from '@/components/home/categories-section'
import { OffersSection } from '@/components/home/offers-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { FeaturesSection } from '@/components/home/features-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FeaturedProducts />
        <CategoriesSection />
        <OffersSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
