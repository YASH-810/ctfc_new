"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumbs() {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on homepage
  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter((segment) => segment)

  // Create breadcrumb items with proper URLs and labels
  const breadcrumbs = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join("/")}`
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return { url, label }
  })

  return (
    <nav aria-label="Breadcrumb" className="py-2 px-4 text-sm">
      <ol className="flex flex-wrap items-center">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:text-primary">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.url} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            {index === breadcrumbs.length - 1 ? (
              <span className="font-medium text-primary" aria-current="page">
                {breadcrumb.label}
              </span>
            ) : (
              <Link href={breadcrumb.url} className="text-gray-500 hover:text-primary">
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

