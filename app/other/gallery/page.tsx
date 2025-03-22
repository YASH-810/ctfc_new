import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play } from "lucide-react"
import Link from "next/link"

// Sample data for past conferences
const conferenceYears = [
  {
    year: "2024",
    images: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Conference 2024",
        alt: "Keynote speech at CTFC 2024",
        caption: "Keynote speech by Dr. Jane Smith",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Panel Discussion 2024",
        alt: "Panel discussion at CTFC 2024",
        caption: "Panel discussion on Smart City Technologies",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Workshop 2024",
        alt: "Workshop at CTFC 2024",
        caption: "Workshop on Data Analytics for Smart Cities",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Networking 2024",
        alt: "Networking event at CTFC 2024",
        caption: "Networking session during coffee break",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Award Ceremony 2024",
        alt: "Award ceremony at CTFC 2024",
        caption: "Best Paper Award ceremony",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Conference Dinner 2024",
        alt: "Conference dinner at CTFC 2024",
        caption: "Conference dinner at Hotel Taj",
      },
    ],
    videos: [
      {
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video 1 2024",
        title: "Keynote Speech: The Future of Smart Cities",
        speaker: "Dr. Jane Smith",
        duration: "45:30",
        url: "#",
      },
      {
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video 2 2024",
        title: "Panel Discussion: Challenges in Smart City Implementation",
        speaker: "Various Experts",
        duration: "1:15:20",
        url: "#",
      },
    ],
  },
  {
    year: "2023",
    images: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Conference 2023",
        alt: "Opening ceremony at CTFC 2023",
        caption: "Opening ceremony",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Keynote 2023",
        alt: "Keynote speech at CTFC 2023",
        caption: "Keynote speech by Prof. John Davis",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Poster Session 2023",
        alt: "Poster session at CTFC 2023",
        caption: "Poster session",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Workshop 2023",
        alt: "Workshop at CTFC 2023",
        caption: "IoT Workshop",
      },
    ],
    videos: [
      {
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video 1 2023",
        title: "Keynote: Smart Infrastructure for Future Cities",
        speaker: "Prof. John Davis",
        duration: "50:15",
        url: "#",
      },
      {
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video 2 2023",
        title: "Workshop: IoT for Smart Cities",
        speaker: "Dr. Michael Chen",
        duration: "1:30:45",
        url: "#",
      },
      {
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video 3 2023",
        title: "Panel: Urban Mobility Solutions",
        speaker: "Various Experts",
        duration: "1:05:30",
        url: "#",
      },
    ],
  },
  {
    year: "2022",
    images: [
      {
        src: "/placeholder.svg?height=400&width=600&text=Conference 2022",
        alt: "Group photo at CTFC 2022",
        caption: "Conference group photo",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Keynote 2022",
        alt: "Keynote speech at CTFC 2022",
        caption: "Keynote speech by Dr. Sarah Johnson",
      },
      {
        src: "/placeholder.svg?height=400&width=600&text=Technical Session 2022",
        alt: "Technical session at CTFC 2022",
        caption: "Technical session on Sustainable Energy",
      },
    ],
    videos: [
      {
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video 1 2022",
        title: "Keynote: Sustainable Energy for Smart Cities",
        speaker: "Dr. Sarah Johnson",
        duration: "48:20",
        url: "#",
      },
      {
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video 2 2022",
        title: "Tutorial: Digital Governance Frameworks",
        speaker: "Prof. Emily Patel",
        duration: "1:20:10",
        url: "#",
      },
    ],
  },
]

export default function GalleryPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Conference Gallery</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Explore photos and videos from past editions of the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={conferenceYears[0].year} className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-[400px]">
                {conferenceYears.map((conf) => (
                  <TabsTrigger key={conf.year} value={conf.year}>
                    CTFC {conf.year}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {conferenceYears.map((conf) => (
              <TabsContent key={conf.year} value={conf.year}>
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl font-bold mb-8 text-center">CTFC {conf.year} Photos</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {conf.images.map((image, index) => (
                      <div key={index} className="card-3d overflow-hidden">
                        <div className="relative h-48 md:h-56">
                          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-gray-700">{image.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold mb-8 text-center">CTFC {conf.year} Videos</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {conf.videos.map((video, index) => (
                      <div key={index} className="card-3d overflow-hidden">
                        <div className="relative h-48 md:h-64">
                          <Image
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/50 rounded-full p-3 hover:bg-primary transition-colors">
                              <Play className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold mb-1">{video.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{video.speaker}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">{video.duration}</span>
                            <Link href={video.url} className="text-primary hover:underline text-sm">
                              Watch Video
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

