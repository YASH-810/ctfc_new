import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText, BookOpen, Lightbulb } from "lucide-react"

export default function TutorialsWorkshopsPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Call for Tutorials & Workshops</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Submit your proposals for tutorials and workshops at the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-3d p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <Calendar className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h2 className="text-xl font-bold">Important Dates</h2>
                    <p className="text-gray-600">Proposal Submission Deadline: April 1, 2025</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <FileText className="mr-2 h-5 w-5" /> Submit Proposal
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Tutorials</h2>
                </div>
                <p className="mb-4">
                  Tutorials provide in-depth knowledge and insights into specific topics related to smart city
                  technologies. They are typically 3-4 hours in duration and are designed to enhance participants'
                  understanding of theoretical foundations and practical applications.
                </p>
                <Link href="#tutorial-guidelines">
                  <Button variant="outline" className="w-full">
                    Tutorial Guidelines
                  </Button>
                </Link>
              </div>

              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Workshops</h2>
                </div>
                <p className="mb-4">
                  Workshops provide hands-on experience and practical knowledge in various aspects of smart city
                  technologies. They are typically half-day or full-day events that include interactive activities,
                  discussions, and collaborative work.
                </p>
                <Link href="#workshop-guidelines">
                  <Button variant="outline" className="w-full">
                    Workshop Guidelines
                  </Button>
                </Link>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">About Tutorials & Workshops</h2>

              <p className="mb-4">
                The Conference on Technologies for Future Cities (CTFC) invites proposals for tutorials and workshops
                that complement the main conference program. These sessions provide opportunities for in-depth
                exploration of specific topics, hands-on learning experiences, and collaborative discussions on emerging
                areas of research and practice in smart city technologies.
              </p>

              <div className="bg-gradient-primary-to-secondary text-white p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Benefits of Organizing a Tutorial or Workshop</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to share your expertise with a targeted audience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Networking with researchers and practitioners in your field</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Publication of tutorial/workshop materials in the conference proceedings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complimentary registration for the main conference (for organizers)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4" id="tutorial-guidelines">
                Tutorial Guidelines
              </h3>
              <p className="mb-4">
                Tutorials are educational sessions that provide in-depth knowledge on specific topics related to smart
                city technologies. They are typically 3-4 hours in duration and are designed to enhance participants'
                understanding of theoretical foundations and practical applications.
              </p>

              <h4 className="text-lg font-bold mt-6 mb-2">Tutorial Proposal Requirements</h4>
              <p className="mb-4">Tutorial proposals should include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Title and abstract (max 200 words)</li>
                <li>
                  Detailed description (max 2 pages) including objectives, topics to be covered, and target audience
                </li>
                <li>Tutorial duration (3-4 hours)</li>
                <li>Prerequisites for participants</li>
                <li>Brief biography of the presenter(s) (max 200 words per presenter)</li>
                <li>Any special requirements (e.g., software, hardware)</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4" id="workshop-guidelines">
                Workshop Guidelines
              </h3>
              <p className="mb-4">
                Workshops are interactive sessions that provide hands-on experience and practical knowledge in various
                aspects of smart city technologies. They are typically half-day or full-day events that include
                activities, discussions, and collaborative work.
              </p>

              <h4 className="text-lg font-bold mt-6 mb-2">Workshop Proposal Requirements</h4>
              <p className="mb-4">Workshop proposals should include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Title and abstract (max 200 words)</li>
                <li>
                  Detailed description (max 2 pages) including objectives, format, activities, and expected outcomes
                </li>
                <li>Workshop duration (half-day or full-day)</li>
                <li>Target audience and expected number of participants</li>
                <li>Brief biography of the organizer(s) (max 200 words per organizer)</li>
                <li>Any special requirements (e.g., software, hardware, room setup)</li>
                <li>If applicable, a call for papers/participation for the workshop</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">Selection Process</h3>
              <p className="mb-4">
                Proposals will be reviewed by the Tutorials & Workshops Chairs based on the relevance to the conference
                themes, the expertise of the presenters/organizers, and the potential interest to conference
                participants. Selected proposals will be notified by April 15, 2025.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Submission Process</h3>
              <p className="mb-4">
                All proposals should be submitted in PDF format through the conference submission system. Please select
                the "Tutorial Proposal" or "Workshop Proposal" track when submitting.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Tutorials & Workshops Chairs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Dr. Michael Chen"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Dr. Michael Chen</h4>
                      <p className="text-sm text-gray-600">Urban Mobility Director, MobileTech</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Prof. Emily Patel"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Prof. Emily Patel</h4>
                      <p className="text-sm text-gray-600">Digital Governance Chair, GovTech Institute</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Contact</h3>
              <p className="mb-4">
                For any questions regarding tutorials and workshops, please contact{" "}
                <a href="mailto:tutorials-workshops@ctfc.org" className="text-primary hover:underline">
                  tutorials-workshops@ctfc.org
                </a>
                .
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/call">
                <Button variant="outline" className="mr-4">
                  Back to Call for Papers
                </Button>
              </Link>
              <Button className="bg-primary hover:bg-primary/90">
                <FileText className="mr-2 h-5 w-5" /> Submit Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Previous Tutorials & Workshops</h2>
          <div className="max-w-5xl mx-auto">
            <p className="mb-8">
              Explore some of the tutorials and workshops from previous editions of the conference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart City Data Analytics",
                  type: "Workshop",
                  presenter: "Dr. David Kim",
                  year: "CTFC 2024",
                },
                {
                  title: "IoT for Smart Infrastructure",
                  type: "Tutorial",
                  presenter: "Prof. John Davis",
                  year: "CTFC 2024",
                },
                {
                  title: "AI-Driven Urban Planning",
                  type: "Workshop",
                  presenter: "Dr. Jane Smith",
                  year: "CTFC 2023",
                },
              ].map((item, i) => (
                <div key={i} className="card-3d p-6">
                  <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium inline-block mb-2">
                    {item.type}
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.presenter}</p>
                  <p className="text-sm text-gray-500">{item.year}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-8">
              View All Past Tutorials & Workshops
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

