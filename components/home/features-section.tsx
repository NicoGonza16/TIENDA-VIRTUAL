import { Truck, Shield, RefreshCw, Headphones } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% protected checkout"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated assistance"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-12 border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center lg:flex-row lg:text-left gap-3 lg:gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
