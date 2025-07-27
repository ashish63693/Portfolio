import { Button } from "@/components/ui/button"
import { Github, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              AM
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-orange-900 mb-4">Ashish Medithe</h1>
            <p className="text-xl md:text-2xl text-orange-700 mb-6">AI/ML Enthusiast & IoT Developer</p>
            <p className="text-lg text-orange-600 max-w-2xl mx-auto mb-8">
              Second-year B.Tech (ECE) student at IIIT Sri City with CGPA 8.61, passionate about AI/ML and IoT systems.
              Experienced in machine learning algorithms and foundational deep learning.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:ashishmedithe500@gmail.com"
              className="flex items-center text-orange-700 hover:text-orange-900 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            <a
              href="tel:+919291330733"
              className="flex items-center text-orange-700 hover:text-orange-900 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Phone
            </a>
            <a
              href="https://github.com/ash161204"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-orange-700 hover:text-orange-900 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
