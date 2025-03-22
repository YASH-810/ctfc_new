import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileDown, Archive, HelpCircle } from "lucide-react"

export default function OtherPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Access downloads, archives, and frequently asked questions about the Conference on Technologies for Future
            Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <FileDown className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Downloads</h2>
              <p className="mb-6">
                Access conference materials, templates, and other resources for participants and authors.
              </p>
              <Link href="/other/download" className="mt-auto">
                <Button className="bg-primary hover:bg-primary/90">View Downloads</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Archive className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Archive</h2>
              <p className="mb-6">
                Browse through the proceedings and materials from previous editions of the conference.
              </p>
              <Link href="/other/archive" className="mt-auto">
                <Button className="bg-primary hover:bg-primary/90">View Archive</Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">FAQ</h2>
              <p className="mb-6">
                Find answers to frequently asked questions about the conference, registration, and submissions.
              </p>
              <Link href="/other/faq" className="mt-auto">
                <Button className="bg-primary hover:bg-primary/90">View FAQ</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

