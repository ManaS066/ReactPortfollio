"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

const Contact = () => {
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
    <section id="contact" ref={ref} className="bg-muted/30 py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="font-poppins text-lg font-medium text-primary">Contact</h2>
          <h3 className="mt-2 font-poppins text-3xl font-bold md:text-4xl">
            Have You Any Project? Please Drop a Message
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Get in touch and let me know how I can help. Fill out the form and I'll be in touch as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className={cn(
              "lg:col-span-1 transition-all duration-700",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0",
            )}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-poppins text-lg font-semibold">Address</h4>
                      <p className="text-muted-foreground">Jaleswar, Balasore, Odisha, 756032</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-poppins text-lg font-semibold">Phone</h4>
                      <a href="tel:+918984398009" className="text-muted-foreground hover:text-primary">
                        +91 8984398009
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-poppins text-lg font-semibold">Email</h4>
                      <a
                        href="mailto:manasranjanpradhan2004@gmail.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        manasranjanpradhan2004@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 font-poppins text-lg font-semibold">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=100026108134077"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/manas-ranjan-pradhan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://github.com/ManaS066"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={cn(
              "lg:col-span-2 transition-all duration-700 delay-300",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
            )}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Doe" className="border-muted-foreground/20" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-muted-foreground/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can I help you?" className="border-muted-foreground/20" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      className="min-h-[150px] border-muted-foreground/20"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

