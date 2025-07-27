import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Brain, Cpu, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "C++", "Python"],
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Core Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Machine Learning", "Deep Learning", "IoT", "OOPs", "DSA"],
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Hardware & Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Arduino", "NodeMCU", "Raspberry Pi"],
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "TensorFlow", "OpenCV"],
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-900 text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-orange-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm text-center font-medium"
                      >
                        {skill}
                      </div>
                    ))}
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
