import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    comment: "Absolutely love my purchase! The quality exceeded my expectations. Fast shipping and the product looks even better in person. Will definitely shop here again.",
    product: "Premium Wireless Headphones"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    comment: "Best online shopping experience I've had in a long time. The attention to detail in packaging and product quality is outstanding. Highly recommend!",
    product: "Minimalist Leather Watch"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    comment: "Customer service was incredibly helpful when I had questions about sizing. The product arrived perfectly and fits like a dream. Five stars all around!",
    product: "Cashmere Sweater"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2">
            <span className="w-8 h-px bg-primary"></span>
            Customer Reviews
            <span className="w-8 h-px bg-primary"></span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {"Don't just take our word for it. Here's what our customers have to say about their shopping experience."}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                {testimonial.comment}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Purchased: <span className="text-primary">{testimonial.product}</span>
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
