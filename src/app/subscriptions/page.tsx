import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Vet AI",
    features: [
      "5 AI assessments per month",
      "Basic chat support",
      "Email notifications",
      "7-day history access",
    ],
    current: true,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "For pet owners who need more",
    features: [
      "Unlimited AI assessments",
      "Priority chat support",
      "Image upload & analysis",
      "Unlimited history access",
      "Export assessments as PDF",
      "Email & SMS notifications",
    ],
    popular: true,
  },
  {
    name: "Family",
    price: "$19.99",
    period: "per month",
    description: "For families with multiple pets",
    features: [
      "Everything in Pro",
      "Up to 5 pet profiles",
      "Family sharing",
      "Veterinarian consultation booking",
      "24/7 priority support",
      "Advanced analytics",
    ],
  },
]

export default function SubscriptionsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Choose Your Plan</h1>
                <p className="text-muted-foreground">
                  Select the perfect plan for your pet's health needs
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan) => (
                  <Card
                    key={plan.name}
                    className={`relative ${
                      plan.popular
                        ? "border-primary shadow-lg scale-105"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">
                          {plan.period}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full cursor-pointer"
                        variant={plan.current ? "outline" : plan.popular ? "default" : "outline"}
                        disabled={plan.current}
                      >
                        {plan.current ? "Current Plan" : "Upgrade Now"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        We accept all major credit cards, PayPal, and Apple Pay.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Is there a free trial?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The Free plan is available forever with no credit card required. You can upgrade anytime.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Can I cancel my subscription?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Yes, you can cancel anytime. You'll continue to have access until the end of your billing period.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
