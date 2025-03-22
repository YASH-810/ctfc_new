import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

const tutorials = [
  {
    id: "tut1",
    title: "Introduction to Smart City Technologies",
    speaker: "Prof. Emily Patel",
    speakerTitle: "Digital Governance Chair, GovTech Institute",
    date: "June 15, 2025",
    time: "09:00 - 12:30",
    location: "Seminar Hall A, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This tutorial provides a comprehensive introduction to smart city technologies, covering the fundamental concepts, architectures, and applications. Participants will learn about the key components of smart cities, including IoT infrastructure, data platforms, and application domains. The tutorial will also discuss challenges and opportunities in implementing smart city solutions, with case studies from around the world. This session is ideal for newcomers to the field who want to gain a broad understanding of smart city technologies.",
    audience: "Researchers, practitioners, and students new to the field of smart cities.",
    topics: [
      "Smart city concepts and definitions",
      "Key technologies and infrastructure",
      "Data platforms and analytics",
      "Application domains (transportation, energy, etc.)",
      "Implementation challenges and strategies",
      "Global case studies and best practices",
    ],
  },
  {
    id: "tut2",
    title: "Digital Twins for Urban Management",
    speaker: "Dr. Michael Chen",
    speakerTitle: "Urban Mobility Director, MobileTech",
    date: "June 15, 2025",
    time: "14:00 - 17:30",
    location: "Seminar Hall B, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This tutorial explores the concept of digital twins for urban management, focusing on how virtual replicas of physical cities can be used for planning, monitoring, and optimization. Participants will learn about the architecture of urban digital twins, data integration approaches, and visualization techniques. The tutorial will cover both theoretical foundations and practical implementations, with demonstrations of digital twin platforms and tools. Case studies will illustrate how digital twins are being used to address urban challenges in various domains.",
    audience: "Urban planners, data scientists, and technology professionals interested in digital twin applications.",
    topics: [
      "Digital twin concepts and architecture",
      "Data integration and synchronization",
      "3D modeling and visualization",
      "Simulation and scenario analysis",
      "Real-time monitoring and control",
      "Application domains and case studies",
    ],
  },
  {
    id: "tut3",
    title: "Cybersecurity for Smart City Infrastructure",
    speaker: "Dr. Robert Wilson",
    speakerTitle: "Smart City Solutions, CityTech",
    date: "June 16, 2025",
    time: "09:00 - 12:30",
    location: "Seminar Hall A, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This tutorial addresses the critical issue of cybersecurity in smart city infrastructure, covering threat landscapes, vulnerability assessment, and security strategies. Participants will learn about the unique security challenges of smart city systems, including IoT devices, networks, and data platforms. The tutorial will present frameworks and methodologies for securing smart city infrastructure, with practical guidance on risk assessment, security architecture, and incident response. Real-world examples will illustrate both security breaches and successful protection strategies.",
    audience: "IT security professionals, system architects, and urban technology managers.",
    topics: [
      "Smart city threat landscape",
      "Vulnerability assessment methodologies",
      "Security architecture for smart city systems",
      "IoT security challenges and solutions",
      "Privacy protection and data security",
      "Incident response and recovery strategies",
    ],
  },
  {
    id: "tut4",
    title: "Urban Mobility Analytics and Optimization",
    speaker: "Prof. Lisa Wong",
    speakerTitle: "Urban Planning, City University",
    date: "June 16, 2025",
    time: "14:00 - 17:30",
    location: "Seminar Hall B, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This tutorial focuses on analytics and optimization techniques for urban mobility, covering data collection, analysis, and application to transportation planning and management. Participants will learn about methods for analyzing movement patterns, predicting traffic conditions, and optimizing transportation systems. The tutorial will present both traditional approaches and emerging techniques based on big data and artificial intelligence. Case studies will demonstrate how mobility analytics are being used to improve transportation efficiency, reduce congestion, and enhance sustainability in cities worldwide.",
    audience: "Transportation planners, data analysts, and mobility service providers.",
    topics: [
      "Urban mobility data sources and collection methods",
      "Movement pattern analysis and visualization",
      "Traffic prediction and simulation",
      "Public transportation optimization",
      "Multimodal transportation planning",
      "Emerging mobility services and technologies",
    ],
  },
]

export default function TutorialPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tutorials</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Learn from experts through comprehensive tutorials on various aspects of technologies for future cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="mb-8 text-lg text-center">
              Our tutorials provide in-depth knowledge and insights into specific topics related to smart city
              technologies. Led by renowned experts in their respective fields, these tutorials offer valuable
              theoretical foundations and practical applications to enhance your understanding of future cities.
            </p>

            <div className="space-y-8">
              {tutorials.map((tutorial) => (
                <div key={tutorial.id} id={tutorial.id} className="gradient-border overflow-hidden">
                  {/* Desktop view - horizontal card */}
                  <div className="hidden md:flex bg-white">
                    <div className="w-1/3">
                      <Image
                        src={tutorial.image || "/placeholder.svg"}
                        alt={tutorial.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <h2 className="text-2xl font-bold mb-2 text-primary">{tutorial.title}</h2>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{tutorial.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{tutorial.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{tutorial.location}</span>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">{tutorial.description}</p>
                      <div className="mb-4">
                        <span className="font-semibold">Presenter:</span> {tutorial.speaker}, {tutorial.speakerTitle}
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">Register for Tutorial</Button>
                    </div>
                  </div>

                  {/* Mobile view - regular card */}
                  <div className="md:hidden bg-white">
                    <Image
                      src={tutorial.image || "/placeholder.svg"}
                      alt={tutorial.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2 text-primary">{tutorial.title}</h2>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{tutorial.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{tutorial.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{tutorial.location}</span>
                      </div>
                      <p className="text-gray-700 mb-3 line-clamp-3">{tutorial.description}</p>
                      <div className="mb-4">
                        <span className="font-semibold">Presenter:</span> {tutorial.speaker}
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Register for Tutorial</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Tutorial Registration Information</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              Tutorial registration is included with the main conference registration. You can select which tutorials
              you wish to attend during the registration process.
            </p>
            <p className="mb-6">Space is limited for each tutorial, so early registration is recommended.</p>
            <Link href="/registration/form">
              <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

