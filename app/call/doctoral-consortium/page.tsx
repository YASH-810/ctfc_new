import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText } from "lucide-react"

export default function DoctoralConsortiumPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Call for Doctoral Consortium</h1>
          <p className="max-w-3xl mx-auto text-lg">
            An opportunity for PhD students to present and discuss their research with senior researchers and peers.
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
                    <p className="text-gray-600">Submission Deadline: April 15, 2025</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <FileText className="mr-2 h-5 w-5" /> Submit Proposal
                </Button>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-6">About the Doctoral Consortium</h2>

              <p className="mb-4">
                The Doctoral Consortium at the Conference on Technologies for Future Cities (CTFC) provides an
                opportunity for PhD students to present and discuss their research with senior researchers and peers in
                a supportive environment. The consortium aims to help students with their thesis and research plans,
                career development, and to establish a community of researchers in the field of smart city technologies.
              </p>

              <div className="bg-gradient-primary-to-secondary text-white p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Benefits of Participation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Feedback on your research from experienced researchers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to network with peers and senior researchers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mentoring sessions with experienced researchers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Publication of your research abstract in the conference proceedings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduced registration fee for the main conference</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Eligibility</h3>
              <p className="mb-4">
                The Doctoral Consortium is open to PhD students at any stage of their research, though preference will
                be given to students who have a clear research proposal but are still in the early stages of their work.
                Students who have already completed their PhD are not eligible.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Submission Guidelines</h3>
              <p className="mb-4">Submissions should include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  A research abstract (max 2 pages) describing your research problem, methodology, and current status
                </li>
                <li>A CV (max 2 pages)</li>
                <li>A letter of recommendation from your PhD supervisor</li>
              </ul>
              <p className="mb-4">
                All submissions must be in PDF format and follow the IEEE conference template. Submissions should be
                made through the conference submission system.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Selection Process</h3>
              <p className="mb-4">
                Submissions will be reviewed by a committee of senior researchers based on the quality of the research,
                its relevance to the conference themes, and the potential benefit to the student from participation in
                the consortium. Selected participants will be notified by May 15, 2025.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Format of the Doctoral Consortium</h3>
              <p className="mb-4">
                The Doctoral Consortium will be held on June 15, 2025, as a pre-conference event. The program will
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Short presentations by each participant</li>
                <li>Feedback sessions with senior researchers</li>
                <li>Panel discussions on research methods and career development</li>
                <li>Networking opportunities</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Doctoral Consortium Chairs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Prof. Maria Garcia"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Prof. Maria Garcia</h4>
                      <p className="text-sm text-gray-600">Director, Smart Cities Institute</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Prof. David Lee"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Prof. David Lee</h4>
                      <p className="text-sm text-gray-600">Professor, Stanford University</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">Contact</h3>
              <p className="mb-4">
                For any questions regarding the Doctoral Consortium, please contact{" "}
                <a href="mailto:doctoral-consortium@ctfc.org" className="text-primary hover:underline">
                  doctoral-consortium@ctfc.org
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
          <h2 className="text-2xl font-bold mb-6">Previous Doctoral Consortium Participants</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-8">
              Meet some of the PhD students who participated in previous editions of the CTFC Doctoral Consortium and
              learn about their research.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-3d p-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=Student ${i}`}
                      alt={`PhD Student ${i}`}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-center">PhD Student {i}</h3>
                  <p className="text-sm text-gray-600 text-center mb-2">University Name</p>
                  <p className="text-sm text-center">Research on smart city technologies and urban mobility.</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-8">
              View All Past Participants
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

