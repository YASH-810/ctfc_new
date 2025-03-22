import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, FileText, Lightbulb, Monitor, Users, CheckCircle, ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Call for Papers | Research on Future Cities Technologies",
  description:
    "Submit your research on AI, Blockchain, Smart Infrastructure, and Cybersecurity for Future Cities. Deadline: March 15, 2025. Publication in IEEE Xplore.",
  keywords: [
    "call for papers",
    "research submission",
    "future cities",
    "AI",
    "blockchain",
    "cybersecurity",
    "smart infrastructure",
    "IEEE publication",
  ],
  openGraph: {
    title: "Call for Papers | Research on Future Cities Technologies",
    description:
      "Submit your research on AI, Blockchain, Smart Infrastructure, and Cybersecurity for Future Cities. Deadline: March 15, 2025. Publication in IEEE Xplore.",
  },
}

export default function CallPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Call for Papers</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Submit your research and innovations for the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      {/* Section 1: Call for Papers and Why Submit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" /> Call for Papers
                </h2>
                <p className="mb-4">
                  The Conference on Technologies for Future Cities (CTFC) invites researchers, practitioners, and
                  industry professionals to submit original research papers on innovative technologies for future
                  cities. The conference aims to bring together experts from academia and industry to discuss the latest
                  advancements, challenges, and opportunities in developing smart and sustainable cities.
                </p>
                <p className="mb-4">
                  We welcome submissions that address theoretical foundations, practical applications, case studies, and
                  experimental results related to technologies that will shape the cities of tomorrow.
                </p>
                <div className="mt-6">
                  <Link href="#submit">
                    <Button className="bg-gradient-primary-to-accent text-white">
                      <FileText className="mr-2 h-5 w-5" /> Submit Paper
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="card-3d p-6">
                <h3 className="text-xl font-bold mb-4">Why Submit to CTFC?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Publication in IEEE Xplore Digital Library</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Networking with leading researchers and industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Opportunity for special issue invitations in reputed journals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Best paper awards with recognition and prizes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Visibility among the smart city research community</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Feedback from expert reviewers to improve your research</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Conference Tracks</h2>
            <p className="text-center mb-10 max-w-3xl mx-auto">
              We welcome submissions on a wide range of topics related to technologies for future cities, organized into
              the following tracks:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Smart Infrastructure",
                  icon: (
                    <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  ),
                  items: [
                    "Smart buildings and construction",
                    "Structural health monitoring",
                    "Smart water and waste management",
                    "Infrastructure resilience",
                  ],
                },
                {
                  title: "Urban Mobility",
                  icon: (
                    <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                  ),
                  items: [
                    "Intelligent transportation systems",
                    "Connected and autonomous vehicles",
                    "Mobility as a Service (MaaS)",
                    "Traffic management and optimization",
                  ],
                },
                {
                  title: "Sustainable Energy",
                  icon: (
                    <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  ),
                  items: [
                    "Renewable energy integration",
                    "Smart grids and microgrids",
                    "Energy-efficient buildings",
                    "Energy storage technologies",
                  ],
                },
                {
                  title: "Digital Governance",
                  icon: (
                    <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  ),
                  items: [
                    "E-governance and citizen participation",
                    "Smart city platforms and dashboards",
                    "Public service innovations",
                    "Digital twins for urban management",
                  ],
                },
                {
                  title: "Urban Data Analytics",
                  icon: (
                    <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                  ),
                  items: [
                    "Big data for urban planning",
                    "Predictive analytics for city services",
                    "Urban data visualization",
                    "Open data initiatives",
                  ],
                },
                {
                  title: "Smart Healthcare",
                  icon: (
                    <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  ),
                  items: [
                    "Telemedicine and remote healthcare",
                    "Health monitoring systems",
                    "Smart hospitals and clinics",
                    "Public health surveillance",
                  ],
                },
              ].map((track, index) => (
                <div key={index} className="gradient-border">
                  <div className="bg-white p-6 rounded-lg h-full flex flex-col">
                    <div className="flex flex-col items-center text-center mb-4">
                      {track.icon}
                      <h3 className="font-bold text-lg text-primary mb-2">{track.title}</h3>
                    </div>
                    <ul className="text-sm space-y-2 mt-auto">
                      {track.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Link href="/call/topics">
                <Button className="bg-gradient-primary-to-accent text-white">View All Topics</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Paper Submission Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Paper Submission Guidelines</h2>

            <div className="card-3d p-8 mb-10">
              <h3 className="text-xl font-bold mb-6">1. Paper Submission Process</h3>
              <div className="space-y-4">
                <p>
                  All submissions must be original and not simultaneously submitted to another journal or conference.
                  The submission process involves the following steps:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-bold mt-2 mb-2">Prepare Your Manuscript</h4>
                    <p className="text-sm">
                      Format your paper according to the IEEE conference template and ensure it meets all requirements.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-bold mt-2 mb-2">Create Account</h4>
                    <p className="text-sm">
                      Register or log in to the conference submission system to start the submission process.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-bold mt-2 mb-2">Submit Paper</h4>
                    <p className="text-sm">
                      Upload your paper, provide metadata, and complete the submission form before the deadline.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold mb-2">Paper Categories</h4>
                  <ul className="grid md:grid-cols-3 gap-4">
                    <li className="gradient-border">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-bold">Full Papers</h5>
                        <p className="text-sm">8-10 pages, presenting completed research with substantial results.</p>
                      </div>
                    </li>
                    <li className="gradient-border">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-bold">Short Papers</h5>
                        <p className="text-sm">4-6 pages, presenting work in progress or preliminary results.</p>
                      </div>
                    </li>
                    <li className="gradient-border">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-bold">Posters</h5>
                        <p className="text-sm">2-4 pages, presenting early-stage research or novel concepts.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-3d p-8 mb-10">
              <h3 className="text-xl font-bold mb-6">2. Plagiarism Policy</h3>
              <div className="space-y-4">
                <p>
                  The conference has a zero-tolerance policy towards plagiarism. All submitted papers will be checked
                  for plagiarism using specialized software.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-red-800">Important Notice</h4>
                      <p className="text-sm text-red-700 mt-1">
                        Papers with a similarity index exceeding 20% (excluding references and standard methodology
                        descriptions) will be flagged for further review and may be rejected.
                      </p>
                    </div>
                  </div>
                </div>

                <p>Plagiarism includes, but is not limited to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Copying text, ideas, or results from another source without proper attribution</li>
                  <li>
                    Self-plagiarism (reusing significant portions of one's own previously published work without citing
                    the original source)
                  </li>
                  <li>Submitting a paper written by someone else</li>
                  <li>Presenting someone else's research as one's own</li>
                </ul>

                <p>
                  Authors must properly cite all sources of information and ideas that are not their own. Direct
                  quotations must be enclosed in quotation marks and properly attributed.
                </p>
              </div>
            </div>

            <div className="card-3d p-8">
              <h3 className="text-xl font-bold mb-6">3. Manuscript Formatting Instructions</h3>
              <div className="space-y-4">
                <p>
                  All submissions must follow the IEEE conference template. Papers that do not comply with the
                  formatting guidelines may be rejected without review.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Template Downloads</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <a href="#" className="text-primary hover:underline">
                          IEEE Word Template
                        </a>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-primary mr-2" />
                        <a href="#" className="text-primary hover:underline">
                          IEEE LaTeX Template
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Key Formatting Requirements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• US Letter page size (8.5" x 11")</li>
                      <li>• Two-column format</li>
                      <li>• 10pt Times New Roman font</li>
                      <li>• All figures and tables must be properly cited</li>
                      <li>• References in IEEE format</li>
                    </ul>
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                  <Link href="/call/instructions-presentations">
                    <Button variant="outline">Detailed Instructions</Button>
                  </Link>
                  <Link href="/other/download">
                    <Button variant="outline">Download Templates</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Review Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Review Process</h2>

            <div className="card-3d p-8">
              <p className="mb-6">
                All submissions will undergo a double-blind peer review process by at least three members of the program
                committee. Papers will be evaluated based on originality, technical soundness, significance,
                presentation, and relevance to the conference.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <h4 className="font-bold mt-4 mb-2">Initial Screening</h4>
                  <p className="text-sm">Papers are checked for formatting, scope, and plagiarism</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <h4 className="font-bold mt-4 mb-2">Peer Review</h4>
                  <p className="text-sm">Three reviewers evaluate each paper based on set criteria</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <h4 className="font-bold mt-4 mb-2">Decision</h4>
                  <p className="text-sm">Accept, minor revision, major revision, or reject</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <h4 className="font-bold mt-4 mb-2">Camera-Ready</h4>
                  <p className="text-sm">Authors prepare final version addressing reviewer comments</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-bold mb-4">Review Criteria</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>
                        <span className="font-bold">Originality:</span> Novel contribution to the field
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>
                        <span className="font-bold">Technical Quality:</span> Sound methodology and analysis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>
                        <span className="font-bold">Significance:</span> Impact and relevance to the field
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>
                        <span className="font-bold">Presentation:</span> Clear writing and organization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>
                        <span className="font-bold">Relevance:</span> Alignment with conference themes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>
                        <span className="font-bold">References:</span> Appropriate citation of related work
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Post-Conference Publication */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Post-Conference Publication</h2>

            <div className="card-3d p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Conference Proceedings</h3>
                  <p className="mb-4">
                    Accepted papers will be published in the conference proceedings and will be submitted for inclusion
                    in IEEE Xplore Digital Library, indexed by Scopus and Web of Science.
                  </p>
                  <p>
                    Authors of accepted papers must sign and submit a copyright transfer form before the camera-ready
                    submission deadline. The copyright will be transferred to IEEE for inclusion in the IEEE Xplore
                    Digital Library.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Journal Special Issues</h3>
                  <p className="mb-4">
                    Selected papers may be invited for extension and publication in special issues of reputed journals.
                    The selection will be based on the quality of the paper and its relevance to the journal's scope.
                  </p>
                  <p>
                    Papers invited for journal publication must be substantially extended (at least 30% new content)
                    from the conference version. Simple reformatting or minor additions are not acceptable.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Previous Special Issues</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>IEEE Transactions on Smart Cities (CTFC 2024)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Journal of Urban Technology (CTFC 2023)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Sustainable Cities and Society (CTFC 2022)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Important Dates</h2>

            <div className="card bg-gradient-primary-to-secondary text-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="h-6 w-6 mr-2" /> Key Deadlines
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Paper Submission Deadline:</span>
                      <span className="font-bold">March 15, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Notification of Acceptance:</span>
                      <span className="font-bold">April 30, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Camera-Ready Submission:</span>
                      <span className="font-bold">May 15, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Early Registration Deadline:</span>
                      <span className="font-bold">May 20, 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Conference Dates:</span>
                      <span className="font-bold">June 15-18, 2025</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <Link href="/program/important-dates">
                    <Button className="bg-gradient-primary-to-accent text-white w-full">
                      View All Important Dates
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center text-primary">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-bold">All deadlines are at 11:59 PM UTC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Other Calls */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Other Calls</h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <div className="card-3d overflow-hidden">
                <div className="bg-gradient-primary-to-secondary text-white p-4">
                  <div className="flex items-center">
                    <Lightbulb className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">Tutorials & Workshops</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Proposals for half-day or full-day tutorials and workshops on topics related to technologies for
                    future cities.
                  </p>
                  <Link href="/call/tutorials-workshops">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="card-3d overflow-hidden">
                <div className="bg-gradient-primary-to-secondary text-white p-4">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">Doctoral Consortium</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    A forum for PhD students to present and discuss their research with senior researchers and peers.
                  </p>
                  <Link href="/call/doctoral-consortium">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="card-3d overflow-hidden">
                <div className="bg-gradient-primary-to-secondary text-white p-4">
                  <div className="flex items-center">
                    <Monitor className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">Demos & Tools</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Demonstrations of innovative tools, systems, and applications related to smart city technologies.
                  </p>
                  <Link href="/call/shared-tasks-tools-demos">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Ready to Submit */}
      <section className="py-16 bg-gray-50" id="submit">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Submit?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            We look forward to receiving your contributions to the Conference on Technologies for Future Cities. If you
            have any questions, please contact us at{" "}
            <a href="mailto:papers@ctfc.org" className="text-primary hover:underline">
              papers@ctfc.org
            </a>
            .
          </p>
          <Link href="/call/submission-portal">
            <Button className="bg-gradient-primary-to-accent text-white px-8 py-6 text-lg">
              <FileText className="mr-2 h-5 w-5" /> Submit Your Paper
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

