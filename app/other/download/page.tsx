import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import Link from "next/link"

const downloads = [
  {
    category: "Templates",
    items: [
      {
        title: "IEEE Conference Paper Template (Word)",
        description: "Template for preparing papers in Microsoft Word format.",
        size: "245 KB",
        link: "#",
      },
      {
        title: "IEEE Conference Paper Template (LaTeX)",
        description: "Template for preparing papers in LaTeX format.",
        size: "320 KB",
        link: "#",
      },
      {
        title: "Presentation Template",
        description: "PowerPoint template for conference presentations.",
        size: "1.2 MB",
        link: "#",
      },
      {
        title: "Poster Template",
        description: "Template for preparing conference posters.",
        size: "850 KB",
        link: "#",
      },
    ],
  },
  {
    category: "Forms",
    items: [
      {
        title: "Copyright Form",
        description: "IEEE copyright form for accepted papers.",
        size: "125 KB",
        link: "#",
      },
      {
        title: "Registration Form (Offline)",
        description: "Offline registration form for the conference.",
        size: "180 KB",
        link: "#",
      },
      {
        title: "Visa Request Form",
        description: "Form for requesting invitation letter for visa purposes.",
        size: "150 KB",
        link: "#",
      },
    ],
  },
  {
    category: "Information",
    items: [
      {
        title: "Conference Brochure",
        description: "Detailed information about the conference.",
        size: "2.5 MB",
        link: "#",
      },
      {
        title: "Call for Papers (PDF)",
        description: "Detailed call for papers document.",
        size: "420 KB",
        link: "#",
      },
      {
        title: "Sponsorship Prospectus",
        description: "Information about sponsorship opportunities.",
        size: "1.8 MB",
        link: "#",
      },
      {
        title: "Travel Information",
        description: "Guide to traveling to and around Panvel.",
        size: "1.5 MB",
        link: "#",
      },
    ],
  },
]

export default function DownloadPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Downloads</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Access templates, forms, and information related to the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {downloads.map((category) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between"
                    >
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
                      </div>
                      <Link href={item.link}>
                        <Button className="bg-primary hover:bg-primary/90">
                          <FileDown className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

