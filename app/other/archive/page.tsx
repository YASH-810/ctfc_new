import { Button } from "@/components/ui/button"
import Link from "next/link"

const archives = [
  {
    year: 2024,
    title: "CTFC 2024",
    description:
      "The 2024 edition of the Conference on Technologies for Future Cities was held at Pillai College of Engineering, Panvel, from June 10-13, 2024.",
    keynotes: [
      "Dr. Jane Smith, AI Research Lead, Future Tech",
      "Prof. John Davis, Smart Infrastructure, Urban University",
      "Dr. Sarah Johnson, Sustainable Energy Expert, EcoTech",
    ],
    papers: 120,
    participants: 350,
    proceedings: "#",
  },
  {
    year: 2023,
    title: "CTFC 2023",
    description:
      "The 2023 edition of the Conference on Technologies for Future Cities was held at Pillai College of Engineering, Panvel, from June 12-15, 2023.",
    keynotes: [
      "Dr. Michael Chen, Urban Mobility Director, MobileTech",
      "Prof. Emily Patel, Digital Governance Chair, GovTech Institute",
      "Dr. David Kim, Urban Data Analytics Lead, DataCity",
    ],
    papers: 105,
    participants: 320,
    proceedings: "#",
  },
  {
    year: 2022,
    title: "CTFC 2022",
    description:
      "The 2022 edition of the Conference on Technologies for Future Cities was held at Pillai College of Engineering, Panvel, from June 13-16, 2022.",
    keynotes: [
      "Dr. Robert Wilson, Smart City Solutions, CityTech",
      "Prof. Lisa Wong, Urban Planning, City University",
      "Dr. James Brown, IoT Expert, ConnectedCity",
    ],
    papers: 95,
    participants: 280,
    proceedings: "#",
  },
]

export default function ArchivePage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Archive</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Browse through the proceedings and materials from previous editions of the Conference on Technologies for
            Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {archives.map((archive) => (
                <div key={archive.year} className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2">{archive.title}</h2>
                  <p className="mb-4">{archive.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-bold mb-2">Keynote Speakers:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {archive.keynotes.map((keynote, index) => (
                          <li key={index}>{keynote}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2">
                        <span className="font-bold">Papers Presented:</span> {archive.papers}
                      </div>
                      <div className="mb-2">
                        <span className="font-bold">Participants:</span> {archive.participants}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link href={archive.proceedings}>
                      <Button className="bg-primary hover:bg-primary/90">View Proceedings</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

