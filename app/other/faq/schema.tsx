import Script from "next/script"

export default function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When and where will CTFC 2025 be held?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CTFC 2025 will be held from June 15-18, 2025, at Pillai College of Engineering, New Panvel, Maharashtra, India.",
        },
      },
      {
        "@type": "Question",
        name: "What is the deadline for paper submission?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The paper submission deadline is March 15, 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Will the conference proceedings be indexed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, accepted papers will be published in the conference proceedings and submitted for inclusion in IEEE Xplore Digital Library, indexed by Scopus and Web of Science.",
        },
      },
      {
        "@type": "Question",
        name: "How can I reach the conference venue?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The venue is accessible via direct local trains from major Mumbai stations and is approximately 90 minutes from Mumbai's Chhatrapati Shivaji Maharaj International Airport. Detailed transportation information is available on our website.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any discounts available for registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer early bird registration discounts until May 20, 2025, as well as special rates for IEEE members and students.",
        },
      },
    ],
  }

  return (
    <Script id="faq-structured-data" type="application/ld+json">
      {JSON.stringify(faqData)}
    </Script>
  )
}

