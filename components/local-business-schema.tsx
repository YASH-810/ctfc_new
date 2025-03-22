import Script from "next/script"

export default function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Pillai College of Engineering",
    alternateName: "PCE Panvel",
    url: "https://www.pce.ac.in/",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-eKXe3MrwKosqGJ4AAsxQoNsL7eq7mx.png",
    sameAs: [
      "https://www.facebook.com/PCENewPanvel/",
      "https://twitter.com/PCENewPanvel",
      "https://www.linkedin.com/school/pillai-college-of-engineering-new-panvel/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr. K. M. Vasudevan Pillai Campus, Plot No. 10, Sector 16",
      addressLocality: "New Panvel",
      addressRegion: "Maharashtra",
      postalCode: "410206",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.990891",
      longitude: "73.121226",
    },
    telephone: "+91-22-27481247",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  }

  return (
    <Script id="local-business-schema" type="application/ld+json">
      {JSON.stringify(localBusinessData)}
    </Script>
  )
}

