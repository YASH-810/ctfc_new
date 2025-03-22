import type { Metadata } from "next"
import HeroStatic from "@/components/hero-static"
import SpeakerCard from "@/components/speaker-card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, FileText, Video, Download, Bell, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Conference on Technologies for Future Cities | CTFC 2025",
  description:
    "Join the premier Conference on Technologies for Future Cities (CTFC 2025) exploring AI, Blockchain, and Smart Infrastructure innovations. June 15-18, 2025 at PCE, Panvel.",
  keywords: [
    "future cities",
    "smart cities",
    "AI",
    "blockchain",
    "cybersecurity",
    "urban technology",
    "conference",
    "research",
    "PCE",
    "Panvel",
    "conference 2025",
    "academic conference India",
    "technology conference Mumbai",
    "smart city research conference",
    "future cities technologies",
    "urban technology innovation",
    "Panvel conference venue",
    "IEEE conference India 2025",
  ],
  openGraph: {
    title: "Conference on Technologies for Future Cities | CTFC 2025",
    description:
      "Join the premier Conference on Technologies for Future Cities (CTFC 2025) exploring AI, Blockchain, and Smart Infrastructure innovations. June 15-18, 2025 at PCE, Panvel.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ctfc%20logo-y0ph4DSSShHeLhY73UVtBYvV0HZA5F.png",
        width: 800,
        height: 600,
        alt: "CTFC 2025 Logo",
      },
    ],
  },
}

export default function Home() {
  return (
    <div>
      <HeroStatic />

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-3d flex flex-col items-center text-center p-6">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Conference Dates</h3>
              <p>June 15-18, 2025</p>
            </div>
            <div className="card-3d flex flex-col items-center text-center p-6">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p>Pillai College of Engineering, Panvel</p>
            </div>
            <div className="card-3d flex flex-col items-center text-center p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Participants</h3>
              <p>500+ Researchers & Industry Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About the Conference</h2>
            <p className="text-lg text-gray-700">
              The rapid urban expansion in developing countries like India has resulted in challenges such as inadequate
              infrastructure and environmental issues due to unplanned growth. To address these concerns, Pillai College
              of Engineering hosts conferences on "Technologies for Future Cities," focusing on innovative solutions in
              software, hardware, and governance for sustainable urban development.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/about">
              <Button variant="outline" className="mr-4">
                Learn More
              </Button>
            </Link>
            <Link href="/registration">
              <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About PCE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=PCE Campus"
                alt="Pillai College of Engineering"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Pillai College of Engineering</h2>
              <p className="mb-4 text-gray-700">
                Pillai College of Engineering (PCE), established in 1999 in Navi Mumbai, is a reputed institution
                affiliated with the University of Mumbai and approved by AICTE. It is an accredited research center
                offering PhD programs in Mechanical Engineering, Computer Engineering, and Information Technology, with
                NAAC A+ accreditation and NBA recognition for three departments.
              </p>
              <p className="mb-4 text-gray-700">
                The institute emphasizes advanced teaching-learning facilities, research, and consultancy while
                promoting environmental consciousness among students. PCE faculty actively engage in R&D projects for
                government agencies and have contributed to urbanization studies for global and national organizations
                like the UN, TCE, and CIDCO.
              </p>
              <Link href="/about#pce">
                <Button className="bg-primary hover:bg-primary/90 mt-4">Learn More About PCE</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpeakerCard
              name="Dr. Jane Smith"
              title="AI Research Lead, Future Tech"
              image="/placeholder.svg?height=300&width=300"
              gradient="primary-to-secondary"
            />
            <SpeakerCard
              name="Prof. John Davis"
              title="Smart Infrastructure, Urban University"
              image="/placeholder.svg?height=300&width=300"
              gradient="primary-to-accent"
            />
            <SpeakerCard
              name="Dr. Sarah Johnson"
              title="Sustainable Energy Expert, EcoTech"
              image="/placeholder.svg?height=300&width=300"
              gradient="primary-to-secondary"
            />
          </div>
          <div className="text-center mt-10">
            <Link href="/speakers">
              <Button variant="outline">View All Speakers</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card-3d p-6 flex flex-col items-center text-center">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Abstract Book</h3>
              <p className="mb-4 text-gray-700">Access the compilation of abstracts for the conference.</p>
              <Link href="/other/download" className="mt-auto">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </Link>
            </div>

            <div className="card-3d p-6 flex flex-col items-center text-center">
              <Video className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Previous Conference Videos</h3>
              <p className="mb-4 text-gray-700">Watch sessions from past conferences.</p>
              <Link href="/other/archive" className="mt-auto">
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" /> Watch Videos
                </Button>
              </Link>
            </div>

            <div className="card-3d p-6 flex flex-col items-center text-center">
              <Download className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Conference Brochures</h3>
              <p className="mb-4 text-gray-700">Download promotional materials for the current conference.</p>
              <Link href="/other/download" className="mt-auto">
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </Link>
            </div>

            <div className="card-3d p-6 flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Program Schedule</h3>
              <p className="mb-4 text-gray-700">View the detailed schedule of conference events.</p>
              <Link href="/program" className="mt-auto">
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" /> View Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card bg-gradient-primary-to-secondary text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-center">Call for Papers</h2>
              <p className="mb-6">
                We invite researchers and practitioners to submit papers on innovative technologies for future cities.
                Topics include smart infrastructure, sustainable energy, urban mobility, and more.
              </p>
              <div className="flex justify-center">
                <Link href="/call/topics">
                  <Button className="bg-white text-primary hover:bg-gray-100">View Topics</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={`/placeholder.svg?height=100&width=200&text=Sponsor ${i}`}
                  alt={`Sponsor ${i}`}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/sponsors">
              <Button variant="outline">Become a Sponsor</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News & Announcements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Announcements</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                date: "March 1, 2025",
                title: "Paper Submission Deadline Extended",
                content: "Due to numerous requests, the paper submission deadline has been extended to March 25, 2025.",
              },
              {
                date: "February 15, 2025",
                title: "New Keynote Speaker Announced",
                content:
                  "We are pleased to announce that Dr. Emily Patel, Digital Governance Chair at GovTech Institute, will be joining us as a keynote speaker.",
              },
              {
                date: "February 1, 2025",
                title: "Early Bird Registration Now Open",
                content: "Take advantage of our early bird registration rates available until May 20, 2025.",
              },
              {
                date: "January 15, 2025",
                title: "Call for Workshops and Tutorials",
                content:
                  "We are now accepting proposals for workshops and tutorials. Submission deadline is April 1, 2025.",
              },
            ].map((news, index) => (
              <div key={index} className="gradient-border overflow-hidden">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary">{news.title}</h3>
                    <span className="text-sm text-gray-500 mt-1 md:mt-0">{news.date}</span>
                  </div>
                  <p className="text-gray-700">{news.content}</p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/news">
              <Button className="bg-primary hover:bg-primary/90">
                <Bell className="h-4 w-4 mr-2" /> View All Announcements
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

