import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Registration | CTFC 2025 Conference",
  description:
    "Register for the Conference on Technologies for Future Cities (CTFC 2025). Early bird rates available until May 20, 2025. IEEE member discounts available.",
  keywords: [
    "conference registration",
    "CTFC 2025",
    "early bird registration",
    "IEEE member discount",
    "conference fees",
    "academic conference",
  ],
  openGraph: {
    title: "Registration | CTFC 2025 Conference",
    description:
      "Register for the Conference on Technologies for Future Cities (CTFC 2025). Early bird rates available until May 20, 2025. IEEE member discounts available.",
  },
}

export default function RegistrationPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Registration</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Register to attend the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16" id="fees">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card bg-gradient-primary-to-accent text-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Early Bird Registration Deadline:</span>
                  <span className="font-bold">May 20, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Regular Registration Deadline:</span>
                  <span className="font-bold">June 5, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Late/Onsite Registration:</span>
                  <span className="font-bold">After June 5, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Conference Dates:</span>
                  <span className="font-bold">June 15-18, 2025</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">Registration Fees</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3 text-left">Category</th>
                    <th className="border p-3 text-left">Early Bird (Until May 20)</th>
                    <th className="border p-3 text-left">Regular (Until June 5)</th>
                    <th className="border p-3 text-left">Late/Onsite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">IEEE Member</td>
                    <td className="border p-3">₹15,000</td>
                    <td className="border p-3">₹18,000</td>
                    <td className="border p-3">₹20,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-medium">Non-IEEE Member</td>
                    <td className="border p-3">₹18,000</td>
                    <td className="border p-3">₹21,000</td>
                    <td className="border p-3">₹23,000</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Student IEEE Member</td>
                    <td className="border p-3">₹8,000</td>
                    <td className="border p-3">₹10,000</td>
                    <td className="border p-3">₹12,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border p-3 font-medium">Student Non-IEEE Member</td>
                    <td className="border p-3">₹10,000</td>
                    <td className="border p-3">₹12,000</td>
                    <td className="border p-3">₹14,000</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Additional Paper</td>
                    <td className="border p-3">₹5,000</td>
                    <td className="border p-3">₹5,000</td>
                    <td className="border p-3">₹5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">What's Included in Registration</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Access to all conference sessions</li>
              <li>Conference materials (program, proceedings)</li>
              <li>Welcome reception</li>
              <li>Coffee breaks and lunches during the conference</li>
              <li>Conference dinner (except for student registrations)</li>
              <li>Certificate of participation</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Note:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>At least one author of each accepted paper must register at the full registration rate.</li>
                <li>Each registration covers only one paper.</li>
                <li>For additional papers, an additional fee is required.</li>
                <li>
                  Student registration does not include the conference dinner. Tickets can be purchased separately.
                </li>
              </ul>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/registration/fees">
                <Button className="bg-primary hover:bg-primary/90 mr-4">Detailed Fee Information</Button>
              </Link>
              <Link href="/registration/form">
                <Button variant="outline">Register Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="payment-methods">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
            <p className="mb-4">We accept the following payment methods:</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Credit/Debit Card</h3>
                <p>
                  Secure online payment through our registration portal. We accept Visa, MasterCard, and American
                  Express.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Bank Transfer</h3>
                <p>
                  Details for bank transfer will be provided after initial registration. Please note that all bank
                  charges must be borne by the participant.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Cancellation Policy</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Cancellations received before May 15, 2025: 70% refund</li>
              <li>Cancellations received between May 16 and June 5, 2025: 50% refund</li>
              <li>No refunds for cancellations after June 5, 2025</li>
              <li>All cancellation requests must be submitted in writing to registration@ctfc.org</li>
            </ul>

            <div className="flex justify-center mt-8">
              <Link href="/registration/form">
                <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

