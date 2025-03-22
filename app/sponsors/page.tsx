import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const sponsorshipLevels = [
  {
    level: "Platinum",
    price: "₹5,00,000",
    color: "border-[#E5E4E2]", // Platinum color
    bgGradient: "bg-gradient-primary-to-secondary",
    benefits: [
      "Prominent logo placement on all conference materials",
      "5 complimentary conference registrations",
      "Premium exhibition space",
      "Sponsored keynote session",
      "Full-page advertisement in conference program",
      "Logo and link on conference website",
      "Social media promotion",
      "Access to attendee list",
    ],
  },
  {
    level: "Gold",
    price: "₹3,00,000",
    color: "border-[#FFD700]", // Gold color
    bgGradient: "bg-gradient-primary-to-accent",
    benefits: [
      "Logo placement on conference materials",
      "3 complimentary conference registrations",
      "Exhibition space",
      "Half-page advertisement in conference program",
      "Logo and link on conference website",
      "Social media promotion",
    ],
  },
  {
    level: "Silver",
    price: "₹1,50,000",
    color: "border-[#C0C0C0]", // Silver color
    bgGradient: "bg-secondary",
    benefits: [
      "Logo on conference materials",
      "2 complimentary conference registrations",
      "Small exhibition space",
      "Quarter-page advertisement in conference program",
      "Logo and link on conference website",
    ],
  },
  {
    level: "Bronze",
    price: "₹75,000",
    color: "border-[#CD7F32]", // Bronze color
    bgGradient: "bg-primary",
    benefits: [
      "Logo on conference materials",
      "1 complimentary conference registration",
      "Logo and link on conference website",
    ],
  },
]

export default function SponsorsPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sponsors</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Meet the organizations supporting the Conference on Technologies for Future Cities and learn how you can
            become a sponsor.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Sponsors</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[1, 2].map((i) => (
                <div key={i} className="card-3d border-4 border-[#E5E4E2] p-8 rounded-lg flex flex-col items-center">
                  <Image
                    src={`/placeholder.svg?height=150&width=300&text=Platinum Sponsor ${i}`}
                    alt={`Platinum Sponsor ${i}`}
                    width={300}
                    height={150}
                    className="h-24 object-contain mb-4"
                  />
                  <h4 className="text-xl font-bold">Platinum Sponsor {i}</h4>
                  <p className="text-center mt-2">Leading technology company specializing in smart city solutions.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Gold Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-3d border-4 border-[#FFD700] p-6 rounded-lg flex flex-col items-center">
                  <Image
                    src={`/placeholder.svg?height=120&width=240&text=Gold Sponsor ${i}`}
                    alt={`Gold Sponsor ${i}`}
                    width={240}
                    height={120}
                    className="h-20 object-contain mb-4"
                  />
                  <h4 className="text-lg font-bold">Gold Sponsor {i}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Silver Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card-3d border-4 border-[#C0C0C0] p-4 rounded-lg flex flex-col items-center">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Silver Sponsor ${i}`}
                    alt={`Silver Sponsor ${i}`}
                    width={200}
                    height={100}
                    className="h-16 object-contain mb-2"
                  />
                  <h4 className="text-sm font-bold">Silver Sponsor {i}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Bronze Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card-3d border-4 border-[#CD7F32] p-4 rounded-lg flex flex-col items-center">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Bronze Sponsor ${i}`}
                    alt={`Bronze Sponsor ${i}`}
                    width={200}
                    height={100}
                    className="h-16 object-contain mb-2"
                  />
                  <h4 className="text-sm font-bold">Bronze Sponsor {i}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sponsorship Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipLevels.map((level) => (
              <div
                key={level.level}
                className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${level.color}`}
              >
                <div className={`p-6 text-white ${level.bgGradient}`}>
                  <h3 className="text-2xl font-bold text-center">{level.level}</h3>
                  <p className="text-center text-xl mt-2">{level.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {level.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90">Become a Sponsor</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Sponsor CTFC?</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg">
            Sponsoring the Conference on Technologies for Future Cities offers your organization visibility among
            leading researchers, industry professionals, and policymakers in the smart city technology space.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card-3d p-6">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Networking</h3>
              <p>
                Connect with leading researchers, industry professionals, and policymakers in the smart city technology
                space.
              </p>
            </div>

            <div className="card-3d p-6">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Brand Visibility</h3>
              <p>
                Showcase your brand to a targeted audience of decision-makers and thought leaders in the technology
                sector.
              </p>
            </div>

            <div className="card-3d p-6">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 00-2-2H7a2 2 0 00-2 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Business Development</h3>
              <p>
                Identify potential clients, partners, and collaborators for your smart city solutions and technologies.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">Contact for Sponsorship</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

