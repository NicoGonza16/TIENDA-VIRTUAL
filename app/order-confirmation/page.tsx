"use client"

import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CheckCircle2, Package, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface OrderDetails {
  orderNumber: string
  email: string
  total: number
  estimatedDelivery: string
  shippingAddress: {
    name: string
    address: string
    apartment: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('order')
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem('lastOrder')
    if (stored) {
      setOrderDetails(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="max-w-2xl mx-auto px-4 lg:px-6 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>

          {/* Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>

          {/* Order Number */}
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Order Number</p>
            <p className="text-2xl font-bold text-primary">{orderNumber || orderDetails?.orderNumber}</p>
          </div>

          {/* Order Details */}
          {orderDetails && (
            <div className="bg-card rounded-2xl border border-border p-6 mb-8 text-left">
              <h2 className="font-semibold text-foreground mb-4">Order Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Confirmation sent to</p>
                    <p className="font-medium text-foreground">{orderDetails.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Shipping to</p>
                    <p className="font-medium text-foreground">{orderDetails.shippingAddress.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {orderDetails.shippingAddress.address}
                      {orderDetails.shippingAddress.apartment && `, ${orderDetails.shippingAddress.apartment}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium text-foreground">{orderDetails.estimatedDelivery}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Paid</p>
                    <p className="text-xl font-bold text-foreground">${orderDetails.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href={`/order/${orderNumber || orderDetails?.orderNumber}`}>
                View Order Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/catalog">Continue Shopping</Link>
            </Button>
          </div>

          {/* Info */}
          <p className="text-sm text-muted-foreground mt-8">
            A confirmation email has been sent to your email address with your order details.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  )
}
