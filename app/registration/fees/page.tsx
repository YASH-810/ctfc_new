import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, CreditCard, HelpCircle, Info, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegistrationFeesPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Registration Fees</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Information about registration fees and payment options for the Conference on Technologies for Future
            Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="card-3d p-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <Calendar className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <h2 className="text-xl font-bold">Important Dates</h2>
                    <p className="text-gray-600">Early Bird Registration Deadline: May 20, 2025</p>
                  </div>
                </div>
                <Link href="/registration/form">
                  <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
                </Link>
              </div>
            </div>

            <Tabs defaultValue="standard" className="mb-12">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 w-[400px]">
                  <TabsTrigger value="standard">Standard Registration</TabsTrigger>
                  <TabsTrigger value="student">Student Registration</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="standard">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-3d overflow-hidden">
                    <div className="bg-gradient-primary-to-secondary text-white p-4 text-center">
                      <h3 className="text-xl font-bold">Early Bird</h3>
                      <p className="text-sm">Until May 20, 2025</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex justify-center items-baseline mb-4">
                        <span className="text-3xl font-bold">₹18,000</span>
                        <span className="text-gray-500 ml-1">/person</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">IEEE Member: ₹15,000</p>
                      <ul className="text-sm text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to all sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference materials</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lunch and coffee breaks</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Welcome reception</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference dinner</span>
                        </li>
                      </ul>
                      <Link href="/registration/form">
                        <Button className="w-full bg-primary hover:bg-primary/90">Register</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="card-3d overflow-hidden border-2 border-primary transform scale-105 shadow-xl">
                    <div className="bg-primary text-white p-4 text-center relative">
                      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                        RECOMMENDED
                      </div>
                      <h3 className="text-xl font-bold">Regular</h3>
                      <p className="text-sm">Until June 5, 2025</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex justify-center items-baseline mb-4">
                        <span className="text-3xl font-bold">₹21,000</span>
                        <span className="text-gray-500 ml-1">/person</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">IEEE Member: ₹18,000</p>
                      <ul className="text-sm text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to all sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference materials</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lunch and coffee breaks</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Welcome reception</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference dinner</span>
                        </li>
                      </ul>
                      <Link href="/registration/form">
                        <Button className="w-full bg-primary hover:bg-primary/90">Register</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="card-3d overflow-hidden">
                    <div className="bg-gradient-primary-to-secondary text-white p-4 text-center">
                      <h3 className="text-xl font-bold">Late/Onsite</h3>
                      <p className="text-sm">After June 5, 2025</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex justify-center items-baseline mb-4">
                        <span className="text-3xl font-bold">₹23,000</span>
                        <span className="text-gray-500 ml-1">/person</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">IEEE Member: ₹20,000</p>
                      <ul className="text-sm text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to all sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference materials</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lunch and coffee breaks</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Welcome reception</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference dinner</span>
                        </li>
                      </ul>
                      <Link href="/registration/form">
                        <Button className="w-full bg-primary hover:bg-primary/90">Register</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="student">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card-3d overflow-hidden">
                    <div className="bg-gradient-primary-to-secondary text-white p-4 text-center">
                      <h3 className="text-xl font-bold">Early Bird</h3>
                      <p className="text-sm">Until May 20, 2025</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex justify-center items-baseline mb-4">
                        <span className="text-3xl font-bold">₹10,000</span>
                        <span className="text-gray-500 ml-1">/person</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">IEEE Student Member: ₹8,000</p>
                      <ul className="text-sm text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to all sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference materials</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lunch and coffee breaks</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Welcome reception</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span className="text-gray-400">Conference dinner (optional add-on)</span>
                        </li>
                      </ul>
                      <Link href="/registration/form">
                        <Button className="w-full bg-primary hover:bg-primary/90">Register</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="card-3d overflow-hidden border-2 border-primary transform scale-105 shadow-xl">
                    <div className="bg-primary text-white p-4 text-center relative">
                      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                        RECOMMENDED
                      </div>
                      <h3 className="text-xl font-bold">Regular</h3>
                      <p className="text-sm">Until June 5, 2025</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex justify-center items-baseline mb-4">
                        <span className="text-3xl font-bold">₹12,000</span>
                        <span className="text-gray-500 ml-1">/person</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">IEEE Student Member: ₹10,000</p>
                      <ul className="text-sm text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to all sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference materials</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lunch and coffee breaks</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Welcome reception</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span className="text-gray-400">Conference dinner (optional add-on)</span>
                        </li>
                      </ul>
                      <Link href="/registration/form">
                        <Button className="w-full bg-primary hover:bg-primary/90">Register</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="card-3d overflow-hidden">
                    <div className="bg-gradient-primary-to-secondary text-white p-4 text-center">
                      <h3 className="text-xl font-bold">Late/Onsite</h3>
                      <p className="text-sm">After June 5, 2025</p>
                    </div>
                    <div className="p-6 text-center">
                      <div className="flex justify-center items-baseline mb-4">
                        <span className="text-3xl font-bold">₹14,000</span>
                        <span className="text-gray-500 ml-1">/person</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">IEEE Student Member: ₹12,000</p>
                      <ul className="text-sm text-left space-y-2 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Access to all sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Conference materials</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lunch and coffee breaks</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Welcome reception</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          <span className="text-gray-400">Conference dinner (optional add-on)</span>
                        </li>
                      </ul>
                      <Link href="/registration/form">
                        <Button className="w-full bg-primary hover:bg-primary/90">Register</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <Info className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Additional Options</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div>
                      <h4 className="font-bold">Additional Paper</h4>
                      <p className="text-sm text-gray-600">Per paper beyond the first one</p>
                    </div>
                    <span className="font-bold">₹5,000</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div>
                      <h4 className="font-bold">Conference Dinner (Student)</h4>
                      <p className="text-sm text-gray-600">For student registrations</p>
                    </div>
                    <span className="font-bold">₹3,000</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div>
                      <h4 className="font-bold">Extra Banquet Ticket</h4>
                      <p className="text-sm text-gray-600">For accompanying persons</p>
                    </div>
                    <span className="font-bold">₹3,500</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                    <div>
                      <h4 className="font-bold">Workshop Registration</h4>
                      <p className="text-sm text-gray-600">Per workshop</p>
                    </div>
                    <span className="font-bold">₹2,500</span>
                  </li>
                </ul>
              </div>

              <div className="card-3d p-6">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Important Information</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>At least one author of each accepted paper must register at the full registration rate.</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Each registration covers only one paper. For additional papers, an additional fee is required.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Student registration does not include the conference dinner. Tickets can be purchased separately.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Student registrants must provide valid student ID during registration.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-3d p-6 mb-12">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Payment Methods</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Credit/Debit Card</h4>
                  <p className="text-sm">
                    Secure online payment through our registration portal. We accept Visa, MasterCard, and American
                    Express.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Bank Transfer</h4>
                  <p className="text-sm">
                    Details for bank transfer will be provided after initial registration. Please note that all bank
                    charges must be borne by the participant.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Cancellation Policy</h4>
                <ul className="text-sm space-y-1">
                  <li>• Cancellations received before May 15, 2025: 70% refund</li>
                  <li>• Cancellations received between May 16 and June 5, 2025: 50% refund</li>
                  <li>• No refunds for cancellations after June 5, 2025</li>
                  <li>• All cancellation requests must be submitted in writing to registration@ctfc.org</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Ready to Register?</h3>
              <Link href="/registration/form">
                <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">
                  <Users className="mr-2 h-5 w-5" /> Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

