"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { FeatureCard } from "@/components/feature-card"
import { BenefitCard } from "@/components/benefit-card"
import { FileSearch, Scale, MessageSquare, Share2, Brain, Clock, Shield, Sparkles } from "lucide-react"
import { ExternalLink } from "lucide-react"
export default function LandingPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Logo />
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about-us">
            About
          </Link>
        </nav>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Legal AI Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Revolutionize your legal research with AI-powered insights and Reddit community knowledge.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/tool">
                  <Button className="bg-black text-white hover:bg-gray-800" size="lg">Get Started</Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Features</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive legal assistance powered by advanced AI technology
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 w-full max-w-7xl">
                <FeatureCard
                  title="Document Analysis"
                  description="Advanced AI-powered legal document analysis with key insights extraction"
                  icon={FileSearch}
                />
                <FeatureCard
                  title="Legal Advice"
                  description="Get contextual legal guidance through our RAG system trained on legal documents"
                  icon={Scale}
                />
                <FeatureCard
                  title="Community Insights"
                  description="Access summarized public opinions and precedents from legal discussions"
                  icon={MessageSquare}
                />
                <FeatureCard
                  title="Reddit Integration"
                  description="Post your queries to relevant legal communities in a structured format"
                  icon={Share2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Legal AI</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Experience the future of legal assistance
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 w-full max-w-7xl">
                <BenefitCard
                  title="Intelligent Analysis"
                  description="Our AI understands complex legal language and provides clear, actionable insights"
                />
                <BenefitCard
                  title="Time Efficient"
                  description="Reduce research time by up to 70% with our automated analysis tools"
                />
                <BenefitCard
                  title="Reliable Sources"
                  description="Access verified legal documents and community insights from trusted sources"
                />
                <BenefitCard
                  title="User Privacy"
                  description="Your sensitive legal information is protected with enterprise-grade security"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of legal professionals using Legal AI to streamline their work
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/tool">
                  <Button className="bg-black text-white hover:bg-gray-800" size="lg"> <ExternalLink />Try Legal AI Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">© 2025 Legal AI Tool. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}