"use client"

import { Facebook, Twitter, Linkedin, Link } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  title: string
  url: string
  description?: string
}

export default function SocialShare({ title, url, description = "" }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-medium">Share this page</h3>
      <div className="flex space-x-2">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
          className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <Button
          onClick={copyToClipboard}
          variant="outline"
          size="icon"
          aria-label="Copy link"
          className="p-2 rounded-full"
        >
          <Link className="h-5 w-5" />
        </Button>
      </div>
      {copied && <p className="text-sm text-green-600">Link copied to clipboard!</p>}
    </div>
  )
}

