import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Find answers to common questions about the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  When and where will the conference be held?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  The Conference on Technologies for Future Cities will be held from June 15-18, 2025, at Pillai College
                  of Engineering, Panvel, Maharashtra, India.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  What is the deadline for paper submission?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  The deadline for paper submission is March 15, 2025. Late submissions will not be accepted.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  What is the format for paper submission?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  All papers must follow the IEEE conference template and be submitted in PDF format. The page limit is
                  8-10 pages for full papers, 4-6 pages for short papers, and 2-4 pages for posters. Templates can be
                  downloaded from the Downloads section.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  How do I register for the conference?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  You can register for the conference by filling out the registration form on our website. Early bird
                  registration is available until May 20, 2025, with discounted rates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  What is included in the registration fee?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  The registration fee includes access to all conference sessions, conference materials (program,
                  proceedings), welcome reception, coffee breaks and lunches during the conference, and a certificate of
                  participation. The conference dinner is included for all registrations except student registrations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  Is there a student discount for registration?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  Yes, we offer discounted rates for students. Student IEEE members receive the highest discount. Please
                  note that student registration does not include the conference dinner, but tickets can be purchased
                  separately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">How many papers can I submit?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  There is no limit to the number of papers you can submit. However, each accepted paper requires at
                  least one author to register at the full registration rate. Additional papers beyond the first one
                  require an additional fee.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  Will the conference proceedings be published?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  Yes, accepted papers will be published in the conference proceedings and will be submitted for
                  inclusion in IEEE Xplore. Selected papers may be invited for extension and publication in special
                  issues of reputed journals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  Is there accommodation available for conference attendees?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  We have negotiated special rates with several hotels near the conference venue. Information about
                  accommodation options will be available on our website closer to the conference date.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">What is the cancellation policy?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  Cancellations received before May 15, 2025, will receive a 70% refund. Cancellations received between
                  May 16 and June 5, 2025, will receive a 50% refund. No refunds will be provided for cancellations
                  after June 5, 2025. All cancellation requests must be submitted in writing to registration@ctfc.org.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">
                  Can I get an invitation letter for visa purposes?
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  Yes, we can provide invitation letters for visa purposes to registered participants. Please contact us
                  at contact@ctfc.org with your registration details and passport information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-white p-4 rounded-lg shadow-md">
                <AccordionTrigger className="text-lg font-medium">How can I become a sponsor?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  We offer various sponsorship packages for organizations interested in supporting the conference.
                  Please visit our Sponsors page for more information or contact us at sponsors@ctfc.org.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

