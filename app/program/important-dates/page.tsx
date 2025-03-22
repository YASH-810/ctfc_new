import { Calendar } from "lucide-react"

const importantDates = [
  {
    date: "March 15, 2025",
    event: "Paper Submission Deadline",
    description: "Last day to submit papers for the conference.",
  },
  {
    date: "April 30, 2025",
    event: "Notification of Acceptance",
    description: "Authors will be notified of the acceptance status of their papers.",
  },
  {
    date: "May 15, 2025",
    event: "Camera-Ready Submission",
    description: "Deadline for submitting final versions of accepted papers.",
  },
  {
    date: "May 20, 2025",
    event: "Early Registration Deadline",
    description: "Last day to register at the early bird rate.",
  },
  {
    date: "June 5, 2025",
    event: "Regular Registration Deadline",
    description: "Last day to register at the regular rate. After this, late registration rates apply.",
  },
  {
    date: "June 15, 2025",
    event: "Conference Begins",
    description: "Day 1 of the Conference on Technologies for Future Cities.",
  },
  {
    date: "June 16, 2025",
    event: "Workshops & Tutorials",
    description: "Day dedicated to workshops and tutorials.",
  },
  {
    date: "June 17, 2025",
    event: "Main Conference Sessions",
    description: "Technical sessions, keynotes, and poster presentations.",
  },
  {
    date: "June 18, 2025",
    event: "Conference Concludes",
    description: "Final day of the conference, including closing ceremony and best paper awards.",
  },
]

export default function ImportantDatesPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Important Dates</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Key deadlines and dates for the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card-3d p-8 mb-12">
              <div className="flex items-center mb-6">
                <Calendar className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold">Conference Timeline</h2>
              </div>
              <p className="text-gray-700">
                Please note these important dates for your participation in the Conference on Technologies for Future
                Cities. All deadlines are at 11:59 PM UTC on the specified date.
              </p>
            </div>

            <div className="timeline">
              {importantDates.map((item, index) => (
                <div key={index} className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}>
                  <div className="timeline-content">
                    <h3 className="text-xl font-bold text-primary">{item.event}</h3>
                    <p className="text-sm font-semibold text-gray-500 mt-1">{item.date}</p>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Calendar Integration</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-6">
              Add these important dates to your calendar to stay updated with the conference schedule.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                Add to Google Calendar
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-md flex items-center justify-center">
                <Calendar className="h-5 w-5 mr-2" />
                Download iCal File
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

