"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

const projectsData = [
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management system with patient records, appointment scheduling, and billing features.",
    image: "/images/hms.png",
    link: "https://sihhospital.vercel.app/",
    github: "https://github.com/ManaS066/sih-hospital_",
    tags: ["Python", "Flask", "React", "MongoDB"],
  },
  {
    id: 2,
    title: "BridgeWork",
    description:
      "A platform connecting freelancers with potential clients, featuring project management and payment integration.",
    image: "/images/bw.jpg",
    link: "https://github.com/ManaS066/BridgeWork",
    github: "https://github.com/ManaS066/BridgeWork",
    tags: ["HTML", "CSS", "JavaScript","Flask"],
  },
  {
    id: 3,
    title: "Human Detection",
    description:
      "AI-powered human detection system using computer vision techniques for security and surveillance applications.",
    image: "/images/hd.png",
    link: "https://github.com/ManaS066/HumanDetection",
    github: "https://github.com/ManaS066/HumanDetection",
    tags: ["Python", "Jupyter Notebook", "TensorFlow", "OpenCV"],
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather application with forecast data and location-based services.",
    image: "/images/weather.png",
    link: "https://github.com/ManaS066/WeatherWEB.git",
    github: "https://github.com/ManaS066/WeatherWEB.git",
    tags: ["JavaScript", "API", "CSS","Html"],
  },
  {
    id: 5,
    title: "Drug Predictor",
    description: "ML-based application to predict suitable medications based on patient symptoms and medical history.",
    image: "/images/med.png",
    link: "https://github.com/ManaS066/drug-predictor.git",
    github: "https://github.com/ManaS066/drug-predictor.git",
    tags: ["Python", "Machine Learning", "Scikit-learn"],
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with product catalog, shopping cart, and payment processing.",
    image: "/images/ecom.png",
    link: "https://github.com/ManaS066/ecommerce.git",
    github: "https://github.com/ManaS066/ecommerce.git",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 7,
    title: "Stock News SMS Service",
    description: "Automated service that sends SMS alerts for stock price changes and related news.",
    image: "/images/sm.png",
    link: "https://github.com/ManaS066/50Day-50Project/tree/main/day_36/stock-news-hard-start/stock-news-hard-start",
    github: "https://github.com/ManaS066/50Day-50Project/tree/main/day_36/stock-news-hard-start/stock-news-hard-start",
    tags: ["Python", "API", "Twilio","Neural Network"],
  },
  {
    id: 8,
    title: "Space Invader Game",
    description: "Classic arcade-style space invader game built with Pygame.",
    image: "/images/si.png",
    link: "https://github.com/ManaS066/50Day-50Project/tree/main/pyGame/spaceInvader",
    github: "https://github.com/ManaS066/50Day-50Project/tree/main/pyGame/spaceInvader",
    tags: ["Python", "Pygame", "Game Development"],
  },
  {
    id: 9,
    title: "Turtle Race",
    description: "Interactive turtle racing game built with Python's turtle graphics module.",
    image: "/images/tr.png",
    link: "https://github.com/ManaS066/50Day-50Project/tree/main/day_23/turtle-crossing-start",
    github: "https://github.com/ManaS066/50Day-50Project/tree/main/day_23/turtle-crossing-start",
    tags: ["Python", "Turtle Graphics","GUI"],
  },
]

const Projects = () => {
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
    <section id="portfolio" ref={ref} className="py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="font-poppins text-lg font-medium text-primary">My Works</h2>
          <h3 className="mt-2 font-poppins text-3xl font-bold md:text-4xl">See My Works Which Will Amaze You!</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I develop high-quality applications that serve for the long-term. Well-documented, clean, and elegant
            interfaces help any non-technical clients understand and use the products easily.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                "project-card overflow-hidden border-0 shadow-lg transition-all duration-700",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="mb-2 font-poppins text-xl font-bold">{project.title}</h4>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-6 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

