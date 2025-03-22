import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export default function ProgramPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Conference Program</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Explore the schedule and program for the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16" id="schedule">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card bg-gradient-primary-to-accent text-white p-8 rounded-lg shadow-lg mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <Calendar className="h-8 w-8 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Conference Dates</h2>
                    <p>June 15-18, 2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-8 w-8 mr-3" />
                  <div>
                    <h2 className="text-2xl font-bold">Venue</h2>
                    <p>Pillai College of Engineering, Panvel</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8 text-center">Conference Schedule Overview</h2>

            <div className="space-y-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 1: June 15, 2025</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      08:00 - 09:00
                    </div>
                    <div>
                      <h4 className="font-bold">Registration</h4>
                      <p className="text-sm text-gray-600">Main Lobby</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      09:00 - 10:00
                    </div>
                    <div>
                      <h4 className="font-bold">Opening Ceremony</h4>
                      <p className="text-sm text-gray-600">Main Auditorium</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      10:00 - 11:30
                    </div>
                    <div>
                      <h4 className="font-bold">Keynote Speech: The Future of Smart Cities</h4>
                      <p className="text-sm text-gray-600">Dr. Jane Smith, AI Research Lead, Future Tech</p>
                      <p className="text-sm text-gray-600">Main Auditorium</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      11:30 - 12:30
                    </div>
                    <div>
                      <h4 className="font-bold">Technical Session 1: Smart Infrastructure</h4>
                      <p className="text-sm text-gray-600">Room A</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      12:30 - 14:00
                    </div>
                    <div>
                      <h4 className="font-bold">Lunch Break</h4>
                      <p className="text-sm text-gray-600">Dining Hall</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      14:00 - 15:30
                    </div>
                    <div>
                      <h4 className="font-bold">Technical Session 2: Urban Mobility</h4>
                      <p className="text-sm text-gray-600">Room B</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      15:30 - 16:00
                    </div>
                    <div>
                      <h4 className="font-bold">Coffee Break</h4>
                      <p className="text-sm text-gray-600">Lobby</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      16:00 - 17:30
                    </div>
                    <div>
                      <h4 className="font-bold">Panel Discussion: Challenges in Implementing Smart City Solutions</h4>
                      <p className="text-sm text-gray-600">Main Auditorium</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      18:00 - 20:00
                    </div>
                    <div>
                      <h4 className="font-bold">Welcome Reception</h4>
                      <p className="text-sm text-gray-600">Garden Area</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 2: June 16, 2025</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      09:00 - 10:30
                    </div>
                    <div>
                      <h4 className="font-bold">Keynote Speech: Sustainable Energy for Future Cities</h4>
                      <p className="text-sm text-gray-600">Dr. Sarah Johnson, Sustainable Energy Expert, EcoTech</p>
                      <p className="text-sm text-gray-600">Main Auditorium</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      10:30 - 11:00
                    </div>
                    <div>
                      <h4 className="font-bold">Coffee Break</h4>
                      <p className="text-sm text-gray-600">Lobby</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      11:00 - 12:30
                    </div>
                    <div>
                      <h4 className="font-bold">Technical Session 3: Sustainable Energy Solutions</h4>
                      <p className="text-sm text-gray-600">Room A</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      12:30 - 14:00
                    </div>
                    <div>
                      <h4 className="font-bold">Lunch Break</h4>
                      <p className="text-sm text-gray-600">Dining Hall</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      14:00 - 15:30
                    </div>
                    <div>
                      <h4 className="font-bold">Technical Session 4: Digital Governance</h4>
                      <p className="text-sm text-gray-600">Room B</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      15:30 - 16:00
                    </div>
                    <div>
                      <h4 className="font-bold">Coffee Break</h4>
                      <p className="text-sm text-gray-600">Lobby</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      16:00 - 17:30
                    </div>
                    <div>
                      <h4 className="font-bold">Workshop: Smart City Data Analytics</h4>
                      <p className="text-sm text-gray-600">Computer Lab</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 3: June 17, 2025</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      09:00 - 10:30
                    </div>
                    <div>
                      <h4 className="font-bold">Keynote Speech: The Role of AI in Future Cities</h4>
                      <p className="text-sm text-gray-600">Prof. John Davis, Smart Infrastructure, Urban University</p>
                      <p className="text-sm text-gray-600">Main Auditorium</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      10:30 - 11:00
                    </div>
                    <div>
                      <h4 className="font-bold">Coffee Break</h4>
                      <p className="text-sm text-gray-600">Lobby</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      11:00 - 12:30
                    </div>
                    <div>
                      <h4 className="font-bold">Technical Session 5: Urban Data Analytics</h4>
                      <p className="text-sm text-gray-600">Room A</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      12:30 - 14:00
                    </div>
                    <div>
                      <h4 className="font-bold">Lunch Break</h4>
                      <p className="text-sm text-gray-600">Dining Hall</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      14:00 - 15:30
                    </div>
                    <div>
                      <h4 className="font-bold">Poster Session</h4>
                      <p className="text-sm text-gray-600">Exhibition Hall</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      15:30 - 16:00
                    </div>
                    <div>
                      <h4 className="font-bold">Coffee Break</h4>
                      <p className="text-sm text-gray-600">Lobby</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      16:00 - 17:30
                    </div>
                    <div>
                      <h4 className="font-bold">Demo Session: Smart City Technologies</h4>
                      <p className="text-sm text-gray-600">Exhibition Hall</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      19:00 - 22:00
                    </div>
                    <div>
                      <h4 className="font-bold">Conference Dinner</h4>
                      <p className="text-sm text-gray-600">Grand Ballroom, Hotel Taj</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 4: June 18, 2025</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      09:00 - 10:30
                    </div>
                    <div>
                      <h4 className="font-bold">Technical Session 6: Smart Healthcare</h4>
                      <p className="text-sm text-gray-600">Room A</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      10:30 - 11:00
                    </div>
                    <div>
                      <h4 className="font-bold">Coffee Break</h4>
                      <p className="text-sm text-gray-600">Lobby</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      11:00 - 12:30
                    </div>
                    <div>
                      <h4 className="font-bold">Panel Discussion: Future Directions in Smart City Research</h4>
                      <p className="text-sm text-gray-600">Main Auditorium</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      12:30 - 14:00
                    </div>
                    <div>
                      <h4 className="font-bold">Lunch Break</h4>
                      <p className="text-sm text-gray-600">Dining Hall</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium w-32 text-center mb-2 md:mb-0 md:mr-4">
                      14:00 - 15:30
                    </div>
                    <div>
                      <h4 className="font-bold">Best Paper Awards & Closing Ceremony</h4>
                      <p className="text-sm text-gray-600">Main Auditorium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/program/schedule">
                <Button className="bg-primary hover:bg-primary/90 mr-4">Detailed Schedule</Button>
              </Link>
              <Link href="/program/workshop">
                <Button variant="outline" className="mr-4">
                  Workshops
                </Button>
              </Link>
              <Link href="/program/tutorial">
                <Button variant="outline">Tutorials</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

