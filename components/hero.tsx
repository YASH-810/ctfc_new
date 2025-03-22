import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-gradient-primary-to-secondary text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          CONFERENCE ON TECHNOLOGIES FOR FUTURE CITIES
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          June 15-18, 2025 • Pillai College of Engineering, Panvel
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/registration">
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">Register Now</Button>
          </Link>
          <Link href="/call/submission-portal">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Submit Paper
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

