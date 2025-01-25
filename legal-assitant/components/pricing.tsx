// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { Logo } from "./logo"

export function Pricing() {
  return (
    <div>
      {/* Header */}
      <div className="w-full fixed top-0 border-b bg-background">
        <div className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
          <Logo />
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#features">
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
      </div>

      {/* Main Content */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 pt-24">
        {/* Title Section */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">Access powerful legal AI assistance at no cost</p>
        </div>

        {/* Free Plan Card */}
        <Card className="w-full max-w-lg border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Free Plan</CardTitle>
            <CardDescription>Get started with legal AI assistance</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="text-center">
              <span className="text-6xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>

            <div className="space-y-3">
              {[
                "Document Analysis with AI insights",
                "Legal Advice through RAG system",
                "Access to Community Insights",
                "Reddit Integration",
                "Unlimited queries",
                "24/7 AI availability",
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-center items-center">
            <Button className="bg-black text-white hover:bg-gray-800" size="lg">
              <Link href="/get-started">Get Started Now</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No credit card required. Start using our legal AI assistant today.
        </p>
      </div>
    </div>
  )
}
