import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Download } from "lucide-react"

export default function RulesRegulationsPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Rules and Regulations</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Guidelines and policies for paper submission, conference attendance, and publication.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-3d p-8 mb-12">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Conference Policies</h2>
              </div>
              <p className="text-gray-700 mb-4">
                The Conference on Technologies for Future Cities (CTFC) is committed to maintaining high standards of
                academic integrity and ethical conduct. All participants, authors, and presenters are expected to adhere
                to the following rules and regulations.
              </p>
              <div className="flex justify-end">
                <Button className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 h-5 w-5" /> Download Full Policy Document
                </Button>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="section-a" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-xl font-medium">
                  A. Paper Submission and Publication in Conferences
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. Originality</h3>
                    <p>
                      All submitted papers must be original work that has not been previously published or currently
                      under review for publication elsewhere. The paper should contain novel research contributions or
                      innovative applications of existing techniques.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">2. Formatting Requirements</h3>
                    <p>
                      All submissions must strictly follow the IEEE conference template. Papers that do not comply with
                      the formatting guidelines may be rejected without review.
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Full papers: 8-10 pages</li>
                      <li>Short papers: 4-6 pages</li>
                      <li>Posters: 2-4 pages</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">3. Submission Process</h3>
                    <p>
                      Papers must be submitted through the official conference submission system. Late submissions will
                      not be accepted under any circumstances.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">4. Review Process</h3>
                    <p>
                      All submissions will undergo a double-blind peer review process by at least three members of the
                      program committee. Authors should ensure that their identities are not revealed in the submitted
                      papers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">5. Registration Requirement</h3>
                    <p>
                      At least one author of each accepted paper must register for the conference and present the paper.
                      Failure to register or present may result in the paper being excluded from the proceedings.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">6. Copyright</h3>
                    <p>
                      Authors of accepted papers must sign and submit a copyright transfer form before the camera-ready
                      submission deadline. The copyright will be transferred to IEEE for inclusion in the IEEE Xplore
                      Digital Library.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="section-b" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-xl font-medium">B. Attending Conferences</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. Registration</h3>
                    <p>
                      All attendees must register for the conference and pay the appropriate registration fee. On-site
                      registration will be subject to availability and will incur additional charges.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">2. Presentation Guidelines</h3>
                    <p>
                      Authors presenting papers must adhere to the allocated time slots. Presentation materials should
                      be prepared according to the guidelines provided by the conference organizers.
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Oral presentations: 15-20 minutes (including Q&A)</li>
                      <li>Poster presentations: Authors must be present during the designated poster session</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">3. Code of Conduct</h3>
                    <p>
                      All attendees are expected to behave professionally and respectfully towards other participants.
                      Harassment or discrimination of any kind will not be tolerated and may result in expulsion from
                      the conference without refund.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">4. Photography and Recording</h3>
                    <p>
                      Photography and recording of presentations are not permitted without the explicit consent of the
                      presenter and the conference organizers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">5. Cancellation Policy</h3>
                    <p>
                      Cancellations received before May 15, 2025, will receive a 70% refund. Cancellations received
                      between May 16 and June 5, 2025, will receive a 50% refund. No refunds will be provided for
                      cancellations after June 5, 2025.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="section-c" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-xl font-medium">C. Publication in Journals</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. Special Issues</h3>
                    <p>
                      Selected papers from the conference may be invited for extension and publication in special issues
                      of reputed journals. The selection will be based on the quality of the paper and its relevance to
                      the journal's scope.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">2. Extension Requirement</h3>
                    <p>
                      Papers invited for journal publication must be substantially extended (at least 30% new content)
                      from the conference version. Simple reformatting or minor additions are not acceptable.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">3. Review Process</h3>
                    <p>
                      Extended papers will undergo a separate review process according to the journal's standards.
                      Acceptance in the conference does not guarantee acceptance in the journal.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">4. Publication Ethics</h3>
                    <p>
                      Authors must adhere to the ethical guidelines of the journal, including proper citation of related
                      work, acknowledgment of funding sources, and disclosure of conflicts of interest.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">5. Open Access Options</h3>
                    <p>
                      Authors may choose open access publication options where available, subject to payment of the
                      required open access fees.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="section-d" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-xl font-medium">D. Plagiarism Policy</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. Zero Tolerance</h3>
                    <p>
                      The conference has a zero-tolerance policy towards plagiarism. All submitted papers will be
                      checked for plagiarism using specialized software.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">2. Definition of Plagiarism</h3>
                    <p>Plagiarism includes, but is not limited to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Copying text, ideas, or results from another source without proper attribution</li>
                      <li>
                        Self-plagiarism (reusing significant portions of one's own previously published work without
                        citing the original source)
                      </li>
                      <li>Submitting a paper written by someone else</li>
                      <li>Presenting someone else's research as one's own</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">3. Consequences</h3>
                    <p>
                      Papers found to contain plagiarized content will be immediately rejected. If plagiarism is
                      discovered after acceptance or publication, the paper will be withdrawn from the proceedings, and
                      the authors may be banned from submitting to future editions of the conference.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">4. Proper Citation</h3>
                    <p>
                      Authors must properly cite all sources of information and ideas that are not their own. Direct
                      quotations must be enclosed in quotation marks and properly attributed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">5. Similarity Index</h3>
                    <p>
                      Papers with a similarity index exceeding 20% (excluding references and standard methodology
                      descriptions) will be flagged for further review and may be rejected if significant plagiarism is
                      detected.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="section-e" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-xl font-medium">E. Declaration</AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2">1. Author Declaration</h3>
                    <p>By submitting a paper to the conference, authors declare that:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>The paper is original work and has not been published elsewhere</li>
                      <li>All authors listed have made significant contributions to the work</li>
                      <li>All sources of information have been properly cited</li>
                      <li>The paper does not contain any plagiarized content</li>
                      <li>The paper does not infringe on any copyright or intellectual property rights</li>
                      <li>The research has been conducted ethically and responsibly</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">2. Conflict of Interest</h3>
                    <p>
                      Authors must disclose any potential conflicts of interest that might influence the research or its
                      interpretation. This includes financial interests, professional affiliations, or personal
                      relationships that could be perceived as influencing the work.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">3. Ethical Approval</h3>
                    <p>
                      Research involving human subjects, animals, or hazardous materials must have been conducted in
                      accordance with relevant guidelines and regulations. Authors must declare that appropriate ethical
                      approvals have been obtained.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">4. Funding Disclosure</h3>
                    <p>
                      Authors must acknowledge all sources of funding for the research presented in the paper. This
                      includes grants, scholarships, and other financial support.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">5. Responsibility</h3>
                    <p>
                      Authors take full responsibility for the content of their papers. The conference organizers,
                      reviewers, and publishers are not responsible for any errors, inaccuracies, or omissions in the
                      published papers.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <p className="mb-6 text-gray-700">
                By submitting a paper or registering for the conference, participants agree to abide by these rules and
                regulations. Failure to comply may result in rejection of the paper, exclusion from the proceedings, or
                expulsion from the conference without refund.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 h-5 w-5" /> Download Full Policy
                </Button>
                <Link href="/call/submission-portal">
                  <Button variant="outline">Submit Paper</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

