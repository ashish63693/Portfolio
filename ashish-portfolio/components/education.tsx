import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "IIIT Sri City",
      period: "2023 – Present",
      grade: "CGPA: 8.61 (Till 3rd Sem)",
      color: "from-orange-400 to-red-500",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Hyderabad",
      period: "2020 – 2022",
      grade: "",
      color: "from-amber-400 to-orange-500",
    },
  ]

  const certifications = [
    {
      title: "Machine Learning A-Z",
      provider: "Udemy",
      description: "Hands-on course covering key ML algorithms in Python.",
    },
    {
      title: "OpenCV Bootcamp",
      provider: "OpenCV University",
      description: "Learned image processing and object detection.",
    },
  ]

  return (
    <section id="education" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-900 text-center mb-12">Education & Certifications</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-orange-800 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-orange-200">
                    <CardHeader>
                      <div className={`w-full h-1 rounded-full bg-gradient-to-r ${edu.color} mb-3`}></div>
                      <CardTitle className="text-orange-800 text-lg">{edu.degree}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-orange-700 font-medium">{edu.institution}</p>
                      <p className="text-orange-600">{edu.period}</p>
                      {edu.grade && <p className="text-orange-800 font-semibold mt-2">{edu.grade}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-orange-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-orange-200">
                    <CardHeader>
                      <div className="w-full h-1 rounded-full bg-gradient-to-r from-red-400 to-pink-500 mb-3"></div>
                      <CardTitle className="text-orange-800 text-lg">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-orange-700 font-medium">{cert.provider}</p>
                      <p className="text-orange-600 mt-2">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Involvement */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-orange-800 mb-6 text-center">Involvement & Projects</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-orange-800 mb-2">AI/ML Domain Member</h4>
                    <p className="text-orange-700">Connexlon Club, IIIT Sri City</p>
                    <p className="text-orange-600">1st & 2nd Semester</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <div className="w-full h-1 rounded-full bg-gradient-to-r from-red-400 to-pink-500 mb-3"></div>
                  <CardTitle className="text-orange-800 text-lg">Vehicle Verification System (IoT + CV)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4">
                    Designed an access-control system using Raspberry Pi and camera. Applied YOLOv5/YOLOv7 to detect
                    vehicle number plates and extracted text with Tesseract OCR. Verified against local database for
                    entry approval.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">IoT</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">
                      Computer Vision
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">
                      Raspberry Pi
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">YOLO</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">OCR</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
