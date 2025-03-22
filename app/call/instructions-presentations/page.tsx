import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Download, Presentation, Video, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InstructionsPresentationsPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Instructions & Presentations</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Guidelines for preparing and presenting your work at the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="paper" className="mb-12">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-[500px]">
                  <TabsTrigger value="paper">Paper Preparation</TabsTrigger>
                  <TabsTrigger value="presentation">Oral Presentation</TabsTrigger>
                  <TabsTrigger value="poster">Poster Presentation</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="paper">
                <div className="card-3d p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" /> Paper Preparation Guidelines
                  </h2>

                  <div className="space-y-6">
                    <p>
                      All papers must be prepared according to the IEEE conference template. Please follow these
                      guidelines carefully to ensure your paper meets the formatting requirements.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">General Requirements</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>US Letter page size (8.5" x 11")</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Two-column format</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>10pt Times New Roman font</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>1" margins on all sides</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Single line spacing</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>First-line indentation for paragraphs</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>No page numbers (will be added during proceedings preparation)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">Paper Structure</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Title (centered, 24pt font)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Author names and affiliations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Abstract (150-250 words)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Keywords (4-6 keywords)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Introduction</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Related Work</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Methodology</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Results and Discussion</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Conclusion</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Acknowledgments (if applicable)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>References (IEEE format)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-bold mb-4">Templates</h3>
                      <div className="grid md:grid-cols-2 gap-4">
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
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-primary mr-2" />
                          <a href="#" className="text-primary hover:underline">
                            Sample Paper (Word)
                          </a>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-primary mr-2" />
                          <a href="#" className="text-primary hover:underline">
                            Sample Paper (LaTeX)
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-6">
                      <Button className="bg-gradient-primary-to-accent text-white">
                        <Download className="mr-2 h-5 w-5" /> Download All Templates
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="presentation">
                <div className="card-3d p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Presentation className="h-6 w-6 mr-2 text-primary" /> Oral Presentation Guidelines
                  </h2>

                  <div className="space-y-6">
                    <p>
                      Oral presentations are an opportunity to showcase your research to the conference attendees.
                      Please follow these guidelines to prepare an effective presentation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Presentation Format</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Time allocation: 15 minutes presentation + 5 minutes Q&A</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Presentation format: PowerPoint or PDF</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Aspect ratio: 16:9 (widescreen)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Font size: Minimum 24pt for text, 28pt for headings</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Number of slides: 12-15 slides recommended</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">Presentation Structure</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Title slide (title, authors, affiliations)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Brief introduction and motivation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Problem statement and research questions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Methodology and approach</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Key results and findings</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Discussion and implications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Conclusion and future work</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Acknowledgments and contact information</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-bold mb-4">Important Notes</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Arrive at your session room at least 15 minutes before the start of your session.</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>
                            Upload your presentation to the session computer during the break before your session.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Bring a backup copy of your presentation on a USB drive.</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>
                            Practice your presentation to ensure you can complete it within the allocated time.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex justify-center mt-6">
                      <Button className="bg-gradient-primary-to-accent text-white">
                        <Download className="mr-2 h-5 w-5" /> Download Presentation Template
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="poster">
                <div className="card-3d p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Video className="h-6 w-6 mr-2 text-primary" /> Poster Presentation Guidelines
                  </h2>

                  <div className="space-y-6">
                    <p>
                      Poster presentations provide an opportunity for interactive discussion of your research with
                      conference attendees. Please follow these guidelines to prepare an effective poster.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Poster Format</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Size: A0 (841 x 1189 mm / 33.1 x 46.8 inches)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Orientation: Portrait</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Font size: Minimum 24pt for text, 36pt for headings</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>File format: PDF (for printing)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Resolution: 300 dpi minimum</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">Poster Content</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Title (large, readable from 3 meters away)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Authors and affiliations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Brief introduction and motivation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Methodology with clear diagrams</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Key results with visualizations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>Conclusions and future work</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>References (key references only)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>QR code linking to additional materials</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-bold mb-4">Poster Session Information</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Poster session time: June 17, 2025, 14:00 - 15:30</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Poster setup: 13:00 - 14:00 (mounting materials will be provided)</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Poster removal: 15:30 - 16:00 (posters not removed will be discarded)</span>
                        </li>
                        <li className="flex items-start">
                          <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Authors must be present at their posters during the entire session</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex justify-center mt-6">
                      <Button className="bg-gradient-primary-to-accent text-white">
                        <Download className="mr-2 h-5 w-5" /> Download Poster Template
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="mb-6">
                If you have any questions about preparing your paper, presentation, or poster, please contact the
                Publications Chair at{" "}
                <a href="mailto:publications@ctfc.org" className="text-primary hover:underline">
                  publications@ctfc.org
                </a>
                .
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/call">
                  <Button variant="outline">Back to Call for Papers</Button>
                </Link>
                <Link href="/call/submission-portal">
                  <Button className="bg-gradient-primary-to-accent text-white">Submit Paper</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

