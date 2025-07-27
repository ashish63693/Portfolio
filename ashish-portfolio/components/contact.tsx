import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-orange-900 mb-8">Get In Touch</h2>
          <p className="text-lg text-orange-700 mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle className="text-orange-800 text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:ashishmedithe500@gmail.com"
                  className="text-orange-600 hover:text-orange-800 transition-colors break-all"
                >
                  ashishmedithe500@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle className="text-orange-800 text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+919291330733" className="text-orange-600 hover:text-orange-800 transition-colors">
                  +91-9291330733
                </a>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center text-white mb-4">
                  <Github className="w-6 h-6" />
                </div>
                <CardTitle className="text-orange-800 text-lg">GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://github.com/ash161204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                  ash161204
                </a>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <CardTitle className="text-orange-800 text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600">IIIT Sri City, Andhra Pradesh</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <a href="mailto:ashishmedithe500@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            >
              <a href="https://github.com/ash161204" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
