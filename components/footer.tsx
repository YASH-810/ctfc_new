import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CTFC</h3>
            <p className="mb-4">Conference on Technologies for Future Cities</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-primary">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/program/schedule" className="hover:text-primary">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-primary">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/call/topics" className="hover:text-primary">
                  Call for Papers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/other/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/other/download" className="hover:text-primary">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/other/archive" className="hover:text-primary">
                  Archive
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-primary">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span>Pillai College of Engineering, Panvel, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>contact@ctfc.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="bg-white p-2 rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pce%20logo-T4gjjA5RuR5GPZ6GMZyPKflFI6Z062.png"
                alt="Pillai College of Engineering Logo"
                width={120}
                height={80}
                className="h-auto"
              />
            </div>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mes%20logo-OoPGb1OTdQA71ARQpcm2ju7zjBZxYT.png"
                alt="Mahatma Education Society Logo"
                width={80}
                height={80}
                className="h-auto"
              />
            </div>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ctfc%20logo-y0ph4DSSShHeLhY73UVtBYvV0HZA5F.png"
                alt="Conference on Technologies for Future Cities Logo"
                width={120}
                height={120}
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Conference on Technologies for Future Cities. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

