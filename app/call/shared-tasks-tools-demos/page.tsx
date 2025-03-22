import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText, PenToolIcon as Tool, Monitor, Database } from "lucide-react"

export default function SharedTasksToolsDemosPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Call for Shared Tasks, Tools & Demos</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Showcase your innovative tools, systems, and applications related to smart city technologies.
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
                    <p className="text-gray-600">Submission Deadline: April 30, 2025</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <FileText className="mr-2 h-5 w-5" /> Submit Proposal
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <Database className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-xl font-bold">Shared Tasks</h2>
                </div>
                <p className="mb-4">
                  Collaborative challenges focused on specific problems in smart city technologies, with shared datasets
                  and evaluation metrics.
                </p>
                <Link href="#shared-tasks-guidelines">
                  <Button variant="outline" className="w-full">
                    Shared Tasks Guidelines
                  </Button>
                </Link>
              </div>

              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <Tool className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-xl font-bold">Tools</h2>
                </div>
                <p className="mb-4">
                  Software tools, frameworks, and platforms that support the development and implementation of smart
                  city technologies.
                </p>
                <Link href="#tools-guidelines">
                  <Button variant="outline" className="w-full">
                    Tools Guidelines
                  </Button>
                </Link>
              </div>

              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <Monitor className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-xl font-bold">Demos</h2>
                </div>
                <p className="mb-4">
                  Live demonstrations of innovative systems, applications, and prototypes related to smart city
                  technologies.
                </p>
                <Link href="#demos-guidelines">
                  <Button variant="outline" className="w-full">
                    Demos Guidelines
                  </Button>
                </Link>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">About Shared Tasks, Tools & Demos</h2>

              <p className="mb-4">
                The Conference on Technologies for Future Cities (CTFC) invites submissions for shared tasks, tools, and
                demonstrations that showcase innovative technologies, applications, and systems related to smart cities.
                This track provides an opportunity for researchers and practitioners to present their work in an
                interactive format and engage directly with conference participants.
              </p>

              <div className="bg-gradient-primary-to-secondary text-white p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Benefits of Participation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Showcase your innovative work to a targeted audience</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive direct feedback from experts and potential users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Publication of a 2-page extended abstract in the conference proceedings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Networking opportunities with researchers, practitioners, and potential collaborators</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4" id="shared-tasks-guidelines">
                Shared Tasks Guidelines
              </h3>
              <p className="mb-4">
                Shared tasks are collaborative challenges focused on specific problems in smart city technologies. They
                involve shared datasets, evaluation metrics, and a common platform for comparing different approaches.
              </p>

              <h4 className="text-lg font-bold mt-6 mb-2">Shared Task Proposal Requirements</h4>
              <p className="mb-4">Proposals for organizing a shared task should include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Title and abstract (max 200 words)</li>
                <li>
                  Detailed description (max 2 pages) including the task definition, relevance to smart cities, and
                  expected outcomes
                </li>
                <li>Description of the dataset to be used (including data format, size, and availability)</li>
                <li>Evaluation metrics and methodology</li>
                <li>Timeline for the task (registration, release of training data, submission deadline, etc.)</li>
                <li>Brief biography of the organizer(s) (max 200 words per organizer)</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4" id="tools-guidelines">
                Tools Guidelines
              </h3>
              <p className="mb-4">
                This track is for software tools, frameworks, and platforms that support the development and
                implementation of smart city technologies. Tools should be functional, well-documented, and preferably
                open-source.
              </p>

              <h4 className="text-lg font-bold mt-6 mb-2">Tool Submission Requirements</h4>
              <p className="mb-4">Tool submissions should include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Title and abstract (max 200 words)</li>
                <li>
                  Extended abstract (2 pages) describing the tool's purpose, architecture, and relevance to smart cities
                </li>
                <li>Link to the tool (GitHub repository, website, etc.)</li>
                <li>Installation and usage instructions</li>
                <li>Brief description of the demonstration to be presented at the conference</li>
                <li>Brief biography of the presenter(s) (max 200 words per presenter)</li>
                <li>Any special requirements for the demonstration (hardware, software, etc.)</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4" id="demos-guidelines">
                Demos Guidelines
              </h3>
              <p className="mb-4">
                The demo track provides an opportunity to showcase innovative systems, applications, and prototypes
                related to smart city technologies through live demonstrations.
              </p>

              <h4 className="text-lg font-bold mt-6 mb-2">Demo Submission Requirements</h4>
              <p className="mb-4">Demo submissions should include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Title and abstract (max 200 words)</li>
                <li>
                  Extended abstract (2 pages) describing the system, its purpose, architecture, and relevance to smart
                  cities
                </li>
                <li>Brief description of the demonstration to be presented at the conference</li>
                <li>Link to a short video (3-5 minutes) showcasing the demo (if available)</li>
                <li>Brief biography of the presenter(s) (max 200 words per presenter)</li>
                <li>Any special requirements for the demonstration (hardware, software, space, etc.)</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">Selection Process</h3>
              <p className="mb-4">
                Submissions will be reviewed by the Shared Tasks, Tools & Demos Chairs based on the relevance to the
                conference themes, technical quality, innovation, and potential interest to conference participants.
                Selected submissions will be notified by May 15, 2025.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Submission Process</h3>
              <p className="mb-4">
                All submissions should be in PDF format and follow the IEEE conference template. Submissions should be
                made through the conference submission system, selecting the appropriate track (Shared Task, Tool, or
                Demo).
              </p>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Shared Tasks, Tools & Demos Chairs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Dr. David Kim"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Dr. David Kim</h4>
                      <p className="text-sm text-gray-600">Urban Data Analytics Lead, DataCity</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Prof. Lisa Wong"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Prof. Lisa Wong</h4>
                      <p className="text-sm text-gray-600">Urban Planning, City University</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Contact</h3>
              <p className="mb-4">
                For any questions regarding shared tasks, tools, and demos, please contact{" "}
                <a href="mailto:demos-tools@ctfc.org" className="text-primary hover:underline">
                  demos-tools@ctfc.org
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
          <h2 className="text-2xl font-bold mb-6">Featured Demos from Previous Conferences</h2>
          <div className="max-w-5xl mx-auto">
            <p className="mb-8">
              Explore some of the innovative demonstrations from previous editions of the conference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart Traffic Management System",
                  presenter: "Dr. Michael Chen, MobileTech",
                  year: "CTFC 2024",
                  description: "Real-time traffic monitoring and optimization using AI and IoT sensors.",
                },
                {
                  title: "Urban Energy Optimization Platform",
                  presenter: "Dr. Sarah Johnson, EcoTech",
                  year: "CTFC 2024",
                  description: "Platform for optimizing energy usage in urban buildings using predictive analytics.",
                },
                {
                  title: "Citizen Engagement Mobile App",
                  presenter: "Prof. Emily Patel, GovTech Institute",
                  year: "CTFC 2023",
                  description: "Mobile application for citizen participation in urban planning and governance.",
                },
              ].map((item, i) => (
                <div key={i} className="card-3d p-6">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.presenter}</p>
                  <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-8">
              View All Past Demos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

