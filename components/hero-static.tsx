import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText, UserPlus } from "lucide-react"

export default function HeroStatic() {
  return (
    <div className="relative">
      {/* Hero image with overlay */}
      <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Future Cities Conference"
          alt="Conference on Technologies for Future Cities"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content positioned over the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            CONFERENCE ON TECHNOLOGIES FOR FUTURE CITIES
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            June 15-18, 2025 • Pillai College of Engineering, Panvel
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/registration">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-6 py-5 flex items-center">
                <UserPlus className="mr-2 h-5 w-5" /> Register Now
              </Button>
            </Link>
            <Link href="/call/submission-portal">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-6 py-5 flex items-center"
              >
                <FileText className="mr-2 h-5 w-5" /> Submit Paper
              </Button>
            </Link>
            <Link href="/program/important-dates">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-6 py-5 flex items-center"
              >
                <Calendar className="mr-2 h-5 w-5" /> Important Dates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

