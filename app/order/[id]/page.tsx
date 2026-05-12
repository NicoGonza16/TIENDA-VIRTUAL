"use client"

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  MapPin,
  CreditCard,
  Download,
  ArrowLeft,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  color?: string
  size?: string
}

interface OrderData {
  orderNumber: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
  shippingAddress: {
    name: string
    address: string
    apartment: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  email: string
  paymentMethod: string
  estimatedDelivery: string
}

export default function OrderDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = use(params)
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem('lastOrder')
    if (stored) {
      const order = JSON.parse(stored)
      if (order.orderNumber === id) {
        setOrderData(order)
      }
    }
  }, [id])

  // Mock data if no session data
  const order = orderData || {
    orderNumber: id,
    items: [
      {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 299.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80'
      }
    ],
    subtotal: 299.99,
    shipping: 0,
    total: 299.99,
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    email: 'john@example.com',
    paymentMethod: 'Credit Card',
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const orderSteps = [
    { name: 'Order Placed', status: 'complete', icon: Package },
    { name: 'Processing', status: 'complete', icon: Clock },
    { name: 'Shipped', status: 'current', icon: Truck },
    { name: 'Delivered', status: 'upcoming', icon: CheckCircle2 },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          {/* Back button */}
          <Link 
            href="/catalog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Order #{order.orderNumber}
              </h1>
              <p className="text-muted-foreground mt-1">
                Placed on {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <Button variant="outline" className="gap-2 w-fit">
              <Download className="w-4 h-4" />
              Download Invoice
            </Button>
          </div>

          {/* Order Status */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <h2 className="font-semibold text-foreground mb-6">Order Status</h2>
            <div className="relative">
              <div className="flex justify-between">
                {orderSteps.map((step, index) => (
                  <div key={step.name} className="flex flex-col items-center relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.status === 'complete' 
                        ? 'bg-green-100 text-green-600' 
                        : step.status === 'current'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <p className={`text-xs sm:text-sm mt-2 text-center ${
                      step.status === 'upcoming' ? 'text-muted-foreground' : 'text-foreground font-medium'
                    }`}>
                      {step.name}
                    </p>
                  </div>
                ))}
              </div>
              {/* Progress bar */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-secondary -z-0">
                <div className="h-full bg-green-500 w-[65%]" />
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Estimated delivery: <span className="text-foreground font-medium">{order.estimatedDelivery}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Items */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-semibold text-foreground mb-4">Items Ordered</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div 
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="flex gap-4"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                        {item.color && ` | ${item.color}`}
                        {item.size && ` | ${item.size}`}
                      </p>
                      <p className="font-medium text-foreground mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order totals */}
              <div className="mt-6 pt-6 border-t border-border space-y-2">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="text-foreground">${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-foreground">
                    {order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span className="text-foreground">$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-foreground pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping & Payment Info */}
            <div className="space-y-6">
              {/* Shipping Address */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Shipping Address</h2>
                </div>
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  {order.shippingAddress.apartment && <p>{order.shippingAddress.apartment}</p>}
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Payment Method</h2>
                </div>
                <p className="text-muted-foreground">{order.paymentMethod}</p>
                <p className="text-muted-foreground">**** **** **** 4242</p>
              </div>

              {/* Contact */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h2 className="font-semibold text-foreground mb-4">Need Help?</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about your order, please contact our support team.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/catalog">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
