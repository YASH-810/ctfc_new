"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

// Update the navigation array to include the Important Dates page
const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "PCE", href: "/about#pce" },
      { name: "CTFC", href: "/about#conference-overview" },
      { name: "Conference Track", href: "/about#conference-track" },
      { name: "Conference History", href: "/about#conference-history" },
      { name: "Join Us", href: "/about#join-us" },
      { name: "Purpose", href: "/about#conference-overview" },
      { name: "Conference Overview", href: "/about#conference-overview" },
      { name: "About PCE", href: "/about#pce" },
      { name: "About Panvel", href: "/about#pce" },
    ],
  },
  { name: "Speakers", href: "/speakers" },
  { name: "Contact", href: "/contact" },
  { name: "Sponsors", href: "/sponsors" },
  {
    name: "Call",
    href: "/call",
    children: [
      { name: "Call for Papers", href: "/call" },
      { name: "Call for Tutorials / Workshops", href: "/call/tutorials-workshops" },
      { name: "Call for Doctoral Consortium", href: "/call/doctoral-consortium" },
      { name: "Call for Shared Tasks / Tools / Demos", href: "/call/shared-tasks-tools-demos" },
      { name: "Instructions & Presentations", href: "/call/instructions-presentations" },
      { name: "Rules and Regulations", href: "/call/rules-regulations" },
    ],
  },
  {
    name: "Registration",
    href: "/registration",
    children: [
      { name: "Registration Fees", href: "/registration#fees" },
      { name: "Registration Form", href: "/registration/form" },
    ],
  },
  {
    name: "Committee",
    href: "/committee",
    children: [
      { name: "Patrons", href: "/committee#patrons" },
      { name: "Mentors", href: "/committee#mentors" },
      { name: "Organizing Committee", href: "/committee#organizing" },
      { name: "Track Chairs", href: "/committee#track-chairs" },
      { name: "Advisory Committee", href: "/committee#advisory" },
      { name: "Reviewer Panel", href: "/committee#reviewers" },
    ],
  },
  {
    name: "Program",
    href: "/program",
    children: [
      { name: "Workshop", href: "/program/workshop" },
      { name: "Schedule", href: "/program#schedule" },
      { name: "Tutorial", href: "/program/tutorial" },
      { name: "Important Dates", href: "/program/important-dates" },
    ],
  },
  {
    name: "Other",
    href: "/other",
    children: [
      { name: "Download", href: "/other/download" },
      { name: "Archive", href: "/other/archive" },
      { name: "FAQ", href: "/other/faq" },
      { name: "Gallery", href: "/other/gallery" },
    ],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const isActive = (href: string) => {
    const baseHref = href.split("#")[0]
    return pathname === baseHref || pathname.startsWith(`${baseHref}/`)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header ref={headerRef} className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-eKXe3MrwKosqGJ4AAsxQoNsL7eq7mx.png"
              alt="CTFC 2025 Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {item.children && (
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 transition-all duration-150 ease-in-out ${
                    openDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/registration/form">
            <Button className="bg-gradient-primary-to-accent text-white">Register Now</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md ${
                        isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setOpenDropdown(null)
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/registration/form" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-primary-to-accent text-white">Register Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

