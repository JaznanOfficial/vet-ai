import Link from "next/link"
import { MessageSquare, Sparkles, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="mr-1 h-3 w-3" />
              AI-Powered Veterinary Assistant
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Instant Pet Health
              <span className="text-primary"> Assessments</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Get preliminary health assessments for your pet in seconds. Our AI analyzes symptoms 
              and images to provide urgency levels, possible conditions, and recommended next steps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/chat">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start Chat
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  How It Works
                </h2>
                <p className="text-muted-foreground text-lg">
                  Three simple steps to get a preliminary assessment
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <CardTitle>1. Describe Symptoms</CardTitle>
                    <CardDescription>
                      Chat with our AI about your pet's symptoms or upload images
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <Zap className="h-6 w-6" />
                    </div>
                    <CardTitle>2. AI Analysis</CardTitle>
                    <CardDescription>
                      Our AI analyzes the information and searches relevant medical data
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <CardTitle>3. Get Assessment</CardTitle>
                    <CardDescription>
                      Receive urgency level, possible conditions, and recommended actions
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Agentic AI Assistant</h3>
                  <p className="text-muted-foreground">
                    Our AI remembers your pet's history. Ask questions like "When was my dog last sick?" 
                    and get instant answers from past assessments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Semantic search through all past conversations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Context-aware responses based on your pet's history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Natural conversation about your pet's health</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Comprehensive Analysis</h3>
                  <p className="text-muted-foreground">
                    Get detailed assessments with urgency levels, possible conditions, 
                    recommended tests, and care instructions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Image analysis for visual symptoms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Urgency level indicators (critical to low)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>Recommended next steps and care instructions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t bg-muted/30 py-12">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Important Medical Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Vet AI is a <strong>triage tool</strong> designed to help you make informed decisions 
                    about your pet's health. It does <strong>not replace professional veterinary care</strong>.
                  </p>
                  <p>
                    Always consult with a licensed veterinarian for medical advice, diagnosis, and treatment. 
                    In case of emergency, contact your local veterinary clinic immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
