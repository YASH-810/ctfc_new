import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Update the metadata to include Panvel keywords

export const metadata: Metadata = {
  title: "About CTFC | Conference on Technologies for Future Cities",
  description:
    "Learn about the Conference on Technologies for Future Cities (CTFC), its mission to advance smart city technologies, and the organizing institution PCE Panvel.",
  keywords: [
    "about CTFC",
    "future cities conference",
    "PCE Panvel",
    "smart city research",
    "conference history",
    "conference tracks",
    "Panvel location",
    "how to reach Panvel",
    "Mumbai suburban railway",
  ],
  openGraph: {
    title: "About CTFC | Conference on Technologies for Future Cities",
    description:
      "Learn about the Conference on Technologies for Future Cities (CTFC), its mission to advance smart city technologies, and the organizing institution PCE Panvel.",
  },
}

export default function AboutPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About the Conference</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Learn more about the Conference on Technologies for Future Cities, its purpose, and the organizing
            institutions.
          </p>
        </div>
      </div>

      <section className="py-16" id="conference-overview">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Conference Overview</h2>
              <p className="mb-4">
                The Conference on Technologies for Future Cities (CTFC) is a premier international conference that
                brings together researchers, industry professionals, policymakers, and students to discuss and showcase
                innovative technologies that will shape the cities of tomorrow.
              </p>
              <p className="mb-4">
                Our mission is to foster collaboration between academia and industry to address the challenges of
                urbanization through technological innovation.
              </p>
              <div className="mt-8">
                <Link href="/about/conference-overview">
                  <Button className="bg-primary hover:bg-primary/90 mr-4">Learn More</Button>
                </Link>
                <Link href="/about/conference-track">
                  <Button variant="outline">Conference Tracks</Button>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Conference"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="pce">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About PCE</h2>
            <p className="mb-4">
              Pillai College of Engineering (PCE) is a premier engineering institution located in Panvel, Maharashtra,
              India. Established in 1999, PCE has grown to become one of the leading engineering colleges in the region,
              known for its academic excellence, research initiatives, and industry collaborations.
            </p>
            <p className="mb-4">
              The college offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines
              and is affiliated with the University of Mumbai and approved by the All India Council for Technical
              Education (AICTE).
            </p>
            <div className="mt-8 text-center">
              <Link href="https://www.pce.ac.in/">
                <Button className="bg-primary hover:bg-primary/90">Learn More About PCE</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="panvel">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Panvel City"
                alt="Panvel City"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Panvel</h2>
              <p className="mb-4 text-gray-700">
                Panvel, the first Municipal Corporation of Raigad, is a historic town known for its lakes, temples,
                forts, and proximity to a wildlife sanctuary. Strategically located on the outskirts of Mumbai, it is
                emerging as Maharashtra's key transportation hub, well-connected by road, rail, and air.
              </p>
              <p className="mb-4 text-gray-700">
                The conference venue, Pillai College of Engineering, New Panvel, is easily accessible via direct local
                trains from major Mumbai stations and is approximately 90 minutes from Mumbai airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="transportation">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Ways to Reach</h2>

            <div className="space-y-8">
              <div className="card-3d p-6">
                <h3 className="text-xl font-bold mb-4">By Train</h3>
                <p className="mb-4">
                  Panvel is well-connected by the Mumbai suburban railway network, with direct trains from major
                  stations:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>CSTM – Kurla – Vashi – Panvel</li>
                  <li>Thane – Nerul – Panvel</li>
                  <li>Diva – Kalamboli – Panvel</li>
                  <li>Vasai – Kopar – Kalamboli – Panvel</li>
                  <li>Karjat – Kalyan – Diva – Kalamboli – Panvel</li>
                  <li>Kasara – Kalyan – Diva – Kalamboli – Panvel</li>
                </ul>
              </div>

              <div className="card-3d p-6">
                <h3 className="text-xl font-bold mb-4">By Air</h3>
                <p className="mb-4">
                  The venue is approximately 1 hour from Chhatrapati Shivaji Maharaj International Airport, Mumbai.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Terminal 1: Handles domestic flights.</li>
                  <li>Terminal 2: Handles both international and domestic flights.</li>
                </ul>
              </div>

              <div className="card-3d p-6">
                <h3 className="text-xl font-bold mb-4">By Road</h3>
                <p>
                  Panvel is well-connected to Mumbai and other parts of Maharashtra via major highways and expressways.
                  Taxis, buses, and private vehicles can be used for convenient travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="conference-track">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Conference Tracks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Infrastructure",
                description: "Innovations in building smart and sustainable infrastructure for future cities.",
              },
              {
                title: "Urban Mobility",
                description: "Technologies for efficient transportation and mobility solutions in urban environments.",
              },
              {
                title: "Sustainable Energy",
                description: "Renewable energy solutions and energy efficiency technologies for urban areas.",
              },
              {
                title: "Digital Governance",
                description: "Digital technologies for improved governance and public services in cities.",
              },
              {
                title: "Smart Healthcare",
                description: "Technological innovations for healthcare delivery in urban environments.",
              },
              {
                title: "Urban Data Analytics",
                description: "Big data and analytics for urban planning and management.",
              },
            ].map((track, index) => (
              <div key={index} className="gradient-border">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-primary">{track.title}</h3>
                  <p>{track.description}</p>
                  <Link
                    href={`/about/conference-track#${track.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary hover:underline mt-4 inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/about/conference-track">
              <Button variant="outline">View All Tracks</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="conference-history">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Conference History</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[2023, 2022, 2021].map((year) => (
                <div key={year} className="gradient-border">
                  <div className="bg-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">CTFC {year}</h3>
                    <p className="mb-4">
                      The {year} edition of the Conference on Technologies for Future Cities was held at Pillai College
                      of Engineering, featuring keynote speakers from leading tech companies and research institutions.
                    </p>
                    <Link href={`/about/conference-history#${year}`} className="text-primary hover:underline">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/about/conference-history">
                <Button className="bg-primary hover:bg-primary/90">Full Conference History</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="join-us">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Be a part of this exciting conference and contribute to shaping the future of our cities through
            technological innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/registration/form">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">Register Now</Button>
            </Link>
            <Link href="/call/submission-portal">
              <Button variant="outline" className="px-8 py-6 text-lg">
                Submit Paper
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

