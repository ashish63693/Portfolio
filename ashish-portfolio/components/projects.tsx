import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "NLP Review Analysis",
      description:
        "Built a sentiment analysis system using Bag of Words, trained ML models to classify reviews. Included text preprocessing, vectorization, and logistic regression for binary sentiment prediction.",
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
      githubUrl: "https://github.com/ash161204/NLP_REVIEW_ANALYSIS",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "IoT Accident Detection System",
      description:
        "Built a safety system using accelerometers and alcohol sensors to detect crashes and alert via GSM/GPS. Captured scene image and transmitted location and photo to a mobile app.",
      technologies: ["IoT", "Arduino", "Sensors", "GSM/GPS", "Mobile App"],
      githubUrl: "https://github.com/ash161204/Accident_Alert_System",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-900 text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-orange-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-4`}></div>
                  <CardTitle className="text-orange-800 text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-orange-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
