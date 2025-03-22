"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, FileText, UserPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CarouselSlide {
  type: "card" | "image"
  title: string
  subtitle?: string
  description?: string
  image?: string
  bgColor?: string
}

const slides: CarouselSlide[] = [
  {
    type: "card",
    title: "CONFERENCE ON TECHNOLOGIES FOR FUTURE CITIES",
    subtitle: "June 15-18, 2025 • Pillai College of Engineering, Panvel",
    description:
      "Join us for the premier international conference on innovative technologies shaping the cities of tomorrow.",
    bgColor: "bg-gradient-primary-to-secondary",
  },
  {
    type: "image",
    title: "SHAPING THE FUTURE OF URBAN LIVING",
    subtitle: "Smart Infrastructure • Sustainable Energy • Urban Mobility",
    image: "/placeholder.svg?height=600&width=1200&text=Future Cities",
  },
  {
    type: "card",
    title: "CONNECT WITH GLOBAL EXPERTS",
    subtitle: "500+ Researchers & Industry Professionals",
    description: "Network with leading researchers, industry professionals, and policymakers from around the world.",
    bgColor: "bg-gradient-primary-to-accent",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide.type === "card" ? (
              <div className={`${slide.bgColor || "bg-gradient-primary-to-secondary"} text-white py-20 md:py-32 px-4`}>
                <div className="container mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
                  {slide.subtitle && <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{slide.subtitle}</p>}
                  {slide.description && <p className="text-lg mb-10 max-w-3xl mx-auto">{slide.description}</p>}
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
            ) : (
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src={slide.image || "/placeholder.svg?height=600&width=1200"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
                    {slide.subtitle && <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">{slide.subtitle}</p>}
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
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

