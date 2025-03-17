"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div
            className={cn(
              "flex items-center justify-center transition-all duration-700 delay-300",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0",
            )}
          >
            <div className="relative max-w-md">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/40 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl bg-card">
                <img
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Manas Ranjan Pradhan"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col justify-center space-y-6 transition-all duration-700 delay-500",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
            )}
          >
            <div>
              <h2 className="font-space text-lg font-medium text-blue-400">About me</h2>
              <h3 className="mt-2 font-space text-3xl font-bold md:text-4xl gradient-text">
                Need a Creative Product? I can Help You!
              </h3>
            </div>

            <p className="text-muted-foreground">
              Hi! I'm Manas Ranjan Pradhan, and I'm a passionate data science student with a keen interest in many
              domains like data science, web development, and machine learning. I love transforming ideas into reality
              with innovative solutions and am always eager to learn new skills, tools, and concepts.
            </p>

            <p className="text-muted-foreground">
              Alongside working on solo projects, I have collaborated with creative teams, gaining experience in daily
              stand-ups, communications, source control, and project management.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="glow-border rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <a href="https://www.linkedin.com/in/manas-ranjan-pradhan/" target="_blank" rel="noopener noreferrer">
                  Hire me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-blue-500/50 hover:bg-blue-500/10"
              >
                <a
                  href="https://drive.google.com/file/d/18G62-Cpc96y6s2-f_WJ_HvVay_J7nZHB/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

