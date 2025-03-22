import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://ctfc.org"),
  title: {
    default: "Conference on Technologies for Future Cities | CTFC 2025",
    template: "%s | CTFC 2025",
  },
  description:
    "Join the premier international Conference on Technologies for Future Cities (CTFC 2025) exploring AI, Blockchain, Cybersecurity and Smart Infrastructure innovations shaping urban environments.",
  keywords: [
    "future cities",
    "smart cities",
    "AI",
    "blockchain",
    "cybersecurity",
    "urban technology",
    "conference",
    "research",
  ],
  authors: [{ name: "CTFC Organizing Committee" }],
  creator: "Pillai College of Engineering",
  publisher: "Mahatma Education Society",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctfc.org",
    title: "Conference on Technologies for Future Cities | CTFC 2025",
    description:
      "Join the premier international Conference on Technologies for Future Cities (CTFC 2025) exploring AI, Blockchain, Cybersecurity and Smart Infrastructure innovations.",
    siteName: "CTFC 2025",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ctfc%20logo-y0ph4DSSShHeLhY73UVtBYvV0HZA5F.png",
        width: 800,
        height: 600,
        alt: "CTFC 2025 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conference on Technologies for Future Cities | CTFC 2025",
    description:
      "Join the premier international Conference on Technologies for Future Cities (CTFC 2025) exploring AI, Blockchain, Cybersecurity and Smart Infrastructure innovations.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ctfc%20logo-y0ph4DSSShHeLhY73UVtBYvV0HZA5F.png"],
    creator: "@CTFC2025",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Existing head content */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      </head>
      <body className={inter.className}>
        <>
          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
          </Script>

          {/* Microsoft Clarity for heatmaps and session recording */}
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
          <Script id="register-sw" strategy="afterInteractive">
            {`
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `}
          </Script>
        </>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'