"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Github, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div
          className={cn(
            "flex flex-col justify-center space-y-6 transition-all duration-700 md:order-1",
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0",
          )}
        >
          <h1 className="font-space text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Designing Tomorrow with <span className="gradient-text">Data Science</span>
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Data Scientist & Web Developer crafting innovative solutions for complex problems
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="glow-border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-blue-500/50 hover:bg-blue-500/10"
            >
              <a href="#portfolio">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100026108134077"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-blue-500 hover:text-primary-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/manas-ranjan-pradhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-blue-500 hover:text-primary-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ManaS066"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-card p-2 text-muted-foreground transition-colors hover:bg-blue-500 hover:text-primary-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div
          className={cn(
            "flex items-center justify-center transition-all duration-700 floating",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
          )}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-xl"></div>
            <div className="relative overflow-hidden rounded-full border-2 border-blue-500/50 bg-card p-2">
              <img
                src="/images/profile.jpg"
                alt="Manas Ranjan Pradhan"
                className="h-120 w-120 rounded-full object-cover md:h-96 md:w-96"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center justify-center text-muted-foreground"
      >
        <span className="mb-1 text-sm">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  )
}

export default Hero

