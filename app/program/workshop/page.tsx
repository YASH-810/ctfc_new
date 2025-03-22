import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

const workshops = [
  {
    id: "ws1",
    title: "Smart City Data Analytics Workshop",
    speaker: "Dr. David Kim",
    speakerTitle: "Urban Data Analytics Lead, DataCity",
    date: "June 16, 2025",
    time: "14:00 - 17:30",
    location: "Computer Lab, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This hands-on workshop will introduce participants to the latest techniques and tools for analyzing urban data. Participants will learn how to collect, process, and visualize data from various urban sources, including IoT sensors, social media, and government databases. The workshop will cover data cleaning, exploratory data analysis, and basic machine learning techniques for urban data analytics. Participants will work on real-world datasets and develop practical skills that can be applied to smart city projects.",
    prerequisites:
      "Basic knowledge of Python programming and data analysis. Participants should bring their own laptops with Python installed.",
    topics: [
      "Introduction to urban data sources and types",
      "Data collection and preprocessing techniques",
      "Exploratory data analysis for urban datasets",
      "Visualization techniques for urban data",
      "Predictive modeling for urban applications",
      "Case studies and practical applications",
    ],
  },
  {
    id: "ws2",
    title: "IoT for Smart Infrastructure",
    speaker: "Prof. John Davis",
    speakerTitle: "Smart Infrastructure, Urban University",
    date: "June 17, 2025",
    time: "09:00 - 12:30",
    location: "Electronics Lab, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This workshop focuses on the implementation of IoT solutions for smart infrastructure. Participants will learn about sensor networks, data collection, and real-time monitoring systems for urban infrastructure. The workshop includes hands-on experience with IoT devices and platforms, allowing participants to build and deploy simple IoT solutions for infrastructure monitoring. Topics covered include sensor selection, network architecture, data transmission protocols, and integration with cloud platforms.",
    prerequisites:
      "Basic knowledge of electronics and programming. Familiarity with Arduino or Raspberry Pi is helpful but not required.",
    topics: [
      "Introduction to IoT for urban infrastructure",
      "Sensor types and selection criteria",
      "Network architectures for IoT deployments",
      "Data transmission protocols (MQTT, CoAP, etc.)",
      "Cloud integration and data storage",
      "Hands-on: Building a simple infrastructure monitoring system",
    ],
  },
  {
    id: "ws3",
    title: "AI-Driven Urban Planning",
    speaker: "Dr. Jane Smith",
    speakerTitle: "AI Research Lead, Future Tech",
    date: "June 17, 2025",
    time: "14:00 - 17:30",
    location: "Seminar Hall, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This workshop explores the application of artificial intelligence in urban planning and design. Participants will learn how AI techniques can be used to analyze urban patterns, optimize resource allocation, and improve decision-making in urban planning. The workshop covers machine learning models for urban data analysis, generative design techniques, and AI-based simulation tools. Participants will work on case studies and practical exercises to understand how AI can address real-world urban planning challenges.",
    prerequisites:
      "Basic understanding of urban planning concepts and familiarity with data analysis. No programming experience required.",
    topics: [
      "Introduction to AI applications in urban planning",
      "Machine learning for urban pattern recognition",
      "Generative design for urban spaces",
      "AI-based simulation and modeling",
      "Decision support systems for urban planning",
      "Ethical considerations in AI-driven urban planning",
    ],
  },
  {
    id: "ws4",
    title: "Sustainable Energy Solutions for Smart Cities",
    speaker: "Dr. Sarah Johnson",
    speakerTitle: "Sustainable Energy Expert, EcoTech",
    date: "June 18, 2025",
    time: "09:00 - 12:30",
    location: "Renewable Energy Lab, PCE",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "This workshop focuses on sustainable energy solutions for smart cities, covering renewable energy integration, smart grids, and energy management systems. Participants will learn about the latest technologies and approaches for implementing sustainable energy solutions in urban environments. The workshop includes case studies of successful implementations, hands-on exercises with energy modeling tools, and discussions on policy and regulatory frameworks. Participants will develop a conceptual design for a sustainable energy system for a smart city neighborhood.",
    prerequisites:
      "Basic knowledge of energy systems and sustainability concepts. No specific technical background required.",
    topics: [
      "Renewable energy technologies for urban applications",
      "Smart grid architecture and components",
      "Energy management systems for buildings and districts",
      "Demand response and load balancing",
      "Energy storage solutions",
      "Policy and regulatory frameworks for sustainable energy",
    ],
  },
]

export default function WorkshopPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Workshops</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Participate in hands-on workshops led by experts in various aspects of technologies for future cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="mb-8 text-lg text-center">
              Our workshops provide hands-on experience and practical knowledge in various aspects of smart city
              technologies. Led by experts in their respective fields, these workshops offer valuable opportunities for
              learning and networking.
            </p>

            <div className="space-y-8">
              {workshops.map((workshop) => (
                <div key={workshop.id} id={workshop.id} className="gradient-border overflow-hidden">
                  {/* Desktop view - horizontal card */}
                  <div className="hidden md:flex bg-white">
                    <div className="w-1/3">
                      <Image
                        src={workshop.image || "/placeholder.svg"}
                        alt={workshop.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <h2 className="text-2xl font-bold mb-2 text-primary">{workshop.title}</h2>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{workshop.location}</span>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">{workshop.description}</p>
                      <div className="mb-4">
                        <span className="font-semibold">Workshop Lead:</span> {workshop.speaker},{" "}
                        {workshop.speakerTitle}
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">Register for Workshop</Button>
                    </div>
                  </div>

                  {/* Mobile view - regular card */}
                  <div className="md:hidden bg-white">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-bold mb-2 text-primary">{workshop.title}</h2>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{workshop.location}</span>
                      </div>
                      <p className="text-gray-700 mb-3 line-clamp-3">{workshop.description}</p>
                      <div className="mb-4">
                        <span className="font-semibold">Workshop Lead:</span> {workshop.speaker}
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Register for Workshop</Button>
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
          <h2 className="text-2xl font-bold mb-6">Workshop Registration Information</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4">
              Workshop registration is separate from the main conference registration. You can register for workshops
              during the conference registration process or separately.
            </p>
            <p className="mb-6">Space is limited for each workshop, so early registration is recommended.</p>
            <Link href="/registration/form">
              <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

