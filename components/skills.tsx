"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

const skillsData = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  {
    name: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Servlet", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JDBC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
]

const toolsData = [
  { name: "PowerBI", icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" },
  { name: "Sklearn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  {
    name: "Excel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Command Line", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Kaggle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg" },
  { name: "Colab", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
]

const Skills = () => {
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
    <section id="skills" ref={ref} className="bg-muted/10 py-20">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div
            className={cn(
              "flex flex-col justify-center space-y-6 transition-all duration-700",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0",
            )}
          >
            <div>
              <h2 className="font-space text-lg font-medium text-blue-400">My skills</h2>
              <h3 className="mt-2 font-space text-3xl font-bold md:text-4xl gradient-text">
                What My Programming Skills Include?
              </h3>
            </div>

            <p className="text-muted-foreground">
              I develop simple, intuitive and responsive user interfaces that help users get things done with less
              effort and time with these technologies. My expertise spans from front-end development to back-end systems
              and data science.
            </p>
          </div>

          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
            )}
          >
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-card/50 p-1">
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                >
                  Tools
                </TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="mt-6">
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                  {skillsData.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-card"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0,
                        animation: isVisible ? `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards` : "none",
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <div className="tooltip">{skill.name}</div>
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                  {toolsData.map((tool, index) => (
                    <div
                      key={tool.name}
                      className="skill-card"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        opacity: 0,
                        animation: isVisible ? `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards` : "none",
                        boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <div className="tooltip">{tool.name}</div>
                      <img src={tool.icon || "/placeholder.svg"} alt={tool.name} className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

