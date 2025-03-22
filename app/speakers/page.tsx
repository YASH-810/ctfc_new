import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const speakers = [
  {
    id: "jane-smith",
    name: "Dr. Jane Smith",
    title: "AI Research Lead, Future Tech",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Jane Smith is a leading researcher in artificial intelligence with over 15 years of experience. She leads the AI research team at Future Tech, focusing on developing AI solutions for smart cities.",
    topic: "AI-Driven Urban Planning: Challenges and Opportunities",
    gradient: "primary-to-secondary" as const,
  },
  {
    id: "john-davis",
    name: "Prof. John Davis",
    title: "Smart Infrastructure, Urban University",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Professor John Davis is a renowned expert in smart infrastructure and urban development. He has published extensively on the integration of technology in urban environments.",
    topic: "Building Resilient Smart Infrastructure for Future Cities",
    gradient: "primary-to-accent" as const,
  },
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Sustainable Energy Expert, EcoTech",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Sarah Johnson is a sustainable energy expert with a focus on renewable energy integration in urban environments. She has led several projects on smart grid implementation in cities.",
    topic: "Renewable Energy Integration in Smart Cities",
    gradient: "primary-to-secondary" as const,
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    title: "Urban Mobility Director, MobileTech",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Michael Chen specializes in urban mobility solutions and has been at the forefront of developing intelligent transportation systems for smart cities.",
    topic: "The Future of Urban Mobility: Autonomous and Connected",
    gradient: "primary-to-accent" as const,
  },
  {
    id: "emily-patel",
    name: "Prof. Emily Patel",
    title: "Digital Governance Chair, GovTech Institute",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Professor Emily Patel is an expert in digital governance and smart city policy. Her research focuses on the intersection of technology, policy, and urban governance.",
    topic: "Digital Governance Frameworks for Smart Cities",
    gradient: "primary-to-secondary" as const,
  },
  {
    id: "david-kim",
    name: "Dr. David Kim",
    title: "Urban Data Analytics Lead, DataCity",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. David Kim is a specialist in urban data analytics and has developed several platforms for collecting and analyzing urban data for smart city applications.",
    topic: "Leveraging Big Data for Smart City Decision Making",
    gradient: "primary-to-accent" as const,
  },
]

export default function SpeakersPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Speakers</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Meet the experts and thought leaders who will be sharing their insights at the Conference on Technologies
            for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.id} id={speaker.id} className="flex flex-col">
                <div
                  className={`card bg-gradient-${speaker.gradient} text-white p-6 rounded-t-lg shadow-lg overflow-hidden`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-white mb-4">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">{speaker.name}</h3>
                    <p className="text-sm mt-1 text-center">{speaker.title}</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-b-lg shadow-lg flex-grow">
                  <h4 className="font-bold mb-2">Talk Topic:</h4>
                  <p className="mb-4">{speaker.topic}</p>
                  <h4 className="font-bold mb-2">Bio:</h4>
                  <p className="text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Speaker</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Are you an expert in smart city technologies, urban planning, or related fields? We invite you to share your
            knowledge and insights at the Conference on Technologies for Future Cities.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

