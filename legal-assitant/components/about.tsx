// @ts-nocheck
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import {Logo} from './logo'
export function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
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
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team - Team HMM</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two passionate developers building the future of legal technology using RAG Systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <img 
              src="https://scontent.fdel29-1.fna.fbcdn.net/v/t1.6435-9/62440003_870134346695949_2994284519680376832_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=r_wL98RrD4sQ7kNvgFUjC0x&_nc_zt=23&_nc_ht=scontent.fdel29-1.fna&_nc_gid=AYnaEriso2PQWQtcSxSHKJL&oh=00_AYDicFmOtDzn5g2-nOqaGugInD4vXVVZoN322XdGwNQjmg&oe=67BB4274" 
              alt="Team Member 1" 
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">Garv Sethi</h2>
            <p className="text-muted-foreground mb-4">
              Pre Final Year CSE Student @ IITR <br></br>
              Upcoming SDE Intern @ Microsoft
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/cruelkratos" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sethigarv/" target="_blank">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com/CruelKratos" target="_blank">
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <img 
              src="https://wallpapers.com/images/high/sad-gojo-satoru-ge11u23sui7b82sm.webp" 
              alt="Team Member 2" 
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">Kunal Bansal</h2>
            <p className="text-muted-foreground mb-4">
            Pre Final Year CSE Student @ IITR <br></br>
            Upcoming SDE Intern @ Google
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com/fuu092" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/kunal-bansal-160a15257/" target="_blank">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com/elonmusk" target="_blank">
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}