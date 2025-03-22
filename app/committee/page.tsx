import Image from "next/image"

const committees = {
  patrons: [
    {
      name: "Dr. K. M. Vasudevan Pillai",
      title: "Chairman & CEO, Mahatma Education Society",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Daphne Pillai",
      title: "Secretary, Mahatma Education Society",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  mentors: [
    {
      name: "Prof. John Smith",
      title: "Professor, MIT",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Maria Garcia",
      title: "Director, Smart Cities Institute",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Prof. David Lee",
      title: "Professor, Stanford University",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  organizing: [
    {
      name: "Dr. Priam Pillai",
      title: "Conference Chair",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Program Chair",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Michael Chen",
      title: "Technical Program Chair",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Emily Patel",
      title: "Publications Chair",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Robert Kim",
      title: "Finance Chair",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Lisa Wong",
      title: "Publicity Chair",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  advisory: [
    {
      name: "Prof. James Wilson",
      title: "Professor, University of California",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Sophia Martinez",
      title: "Research Director, Future Cities Lab",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Prof. Thomas Brown",
      title: "Professor, University of Tokyo",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Anna Müller",
      title: "Professor, Technical University of Munich",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Prof. Raj Patel",
      title: "Professor, IIT Bombay",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Elizabeth Taylor",
      title: "Director, Urban Technologies Institute",
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  trackChairs: [
    {
      track: "Smart Infrastructure",
      chairs: [
        {
          name: "Dr. Richard Lee",
          affiliation: "University of Singapore",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Prof. Anita Desai",
          affiliation: "IIT Delhi",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      track: "Urban Mobility",
      chairs: [
        {
          name: "Dr. Carlos Rodriguez",
          affiliation: "Technical University of Madrid",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Prof. Mei Lin",
          affiliation: "Tsinghua University",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      track: "Sustainable Energy",
      chairs: [
        {
          name: "Dr. Fatima Al-Zahra",
          affiliation: "KAUST",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Prof. Henrik Svensson",
          affiliation: "KTH Royal Institute of Technology",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      track: "Digital Governance",
      chairs: [
        {
          name: "Dr. Priya Sharma",
          affiliation: "IIIT Bangalore",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Prof. Daniel White",
          affiliation: "University of Melbourne",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      track: "Urban Data Analytics",
      chairs: [
        {
          name: "Dr. Akira Tanaka",
          affiliation: "University of Tokyo",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Prof. Olivia Johnson",
          affiliation: "ETH Zurich",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
  ],
  reviewers: [
    {
      name: "Dr. Aisha Rahman",
      affiliation: "National University of Singapore",
      expertise: "Smart Infrastructure, IoT",
    },
    {
      name: "Prof. Marco Rossi",
      affiliation: "Politecnico di Milano",
      expertise: "Urban Mobility, Transportation Systems",
    },
    {
      name: "Dr. Sanjay Gupta",
      affiliation: "IIT Bombay",
      expertise: "Sustainable Energy, Smart Grids",
    },
    {
      name: "Prof. Laura Chen",
      affiliation: "UC Berkeley",
      expertise: "Digital Governance, Smart City Policy",
    },
    {
      name: "Dr. Hiroshi Yamamoto",
      affiliation: "Kyoto University",
      expertise: "Urban Data Analytics, AI",
    },
    {
      name: "Prof. Elena Petrova",
      affiliation: "Moscow State University",
      expertise: "Smart Healthcare, Telemedicine",
    },
    {
      name: "Dr. Ahmed Al-Farsi",
      affiliation: "King Abdullah University",
      expertise: "Cybersecurity for Smart Cities",
    },
    {
      name: "Prof. Isabella Santos",
      affiliation: "University of São Paulo",
      expertise: "Urban Planning, Smart Buildings",
    },
    {
      name: "Dr. Thomas Mueller",
      affiliation: "Technical University of Berlin",
      expertise: "IoT, Sensor Networks",
    },
    {
      name: "Prof. Nadia Patel",
      affiliation: "University of Toronto",
      expertise: "Smart City Governance, Public Policy",
    },
    {
      name: "Dr. Li Wei",
      affiliation: "Shanghai Jiao Tong University",
      expertise: "Urban Computing, Big Data",
    },
    {
      name: "Prof. Robert Johnson",
      affiliation: "MIT",
      expertise: "AI for Urban Planning, Machine Learning",
    },
    {
      name: "Dr. Maria Gonzalez",
      affiliation: "Technical University of Madrid",
      expertise: "Sustainable Transportation, Mobility as a Service",
    },
    {
      name: "Prof. Kwame Osei",
      affiliation: "University of Cape Town",
      expertise: "Smart Water Management, Environmental Monitoring",
    },
    {
      name: "Dr. Sunita Patel",
      affiliation: "IIIT Hyderabad",
      expertise: "Smart Grids, Energy Management",
    },
  ],
}

export default function CommitteePage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Committee Members</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Meet the team behind the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16" id="patrons">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Patrons</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {committees.patrons.map((member) => (
              <div
                key={member.name}
                className="card-3d bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105"
              >
                {/* Red gradient top border with curve */}
                <div className="bg-white border-t-8 border-gradient-to-r rounded-t-full"></div>
                <div className="p-6 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">{member.name}</h3>
                  <p className="text-center text-gray-600">{member.title}</p>
                </div>
                {/* Red gradient bottom border with curve */}
                <div className="bg-white border-b-8 border-gradient-to-r rounded-b-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="mentors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Mentors</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {committees.mentors.map((member) => (
              <div key={member.name} className="card-3d p-6 flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-center">{member.name}</h3>
                <p className="text-center text-gray-600 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="organizing">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Organizing Committee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {committees.organizing.map((member) => (
              <div key={member.name} className="card-3d p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-center">{member.name}</h3>
                <p className="text-center text-gray-600 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="track-chairs">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Track Chairs</h2>
          <div className="max-w-5xl mx-auto">
            {committees.trackChairs.map((track) => (
              <div key={track.track} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-primary">{track.track} Track</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {track.chairs.map((chair) => (
                    <div key={chair.name} className="gradient-border overflow-hidden">
                      <div className="bg-white p-4 rounded-lg flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mr-4 flex-shrink-0">
                          <Image
                            src={chair.image || "/placeholder.svg"}
                            alt={chair.name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{chair.name}</h4>
                          <p className="text-sm text-gray-600">{chair.affiliation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="advisory">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Advisory Committee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {committees.advisory.map((member) => (
              <div key={member.name} className="card-3d p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-center">{member.name}</h3>
                <p className="text-center text-gray-600 text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="reviewers">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Reviewer Panel</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.reviewers.map((reviewer) => (
                <div key={reviewer.name} className="card-3d p-4">
                  <h4 className="font-bold">{reviewer.name}</h4>
                  <p className="text-sm text-gray-600">{reviewer.affiliation}</p>
                  <p className="text-xs text-gray-500 mt-1">Expertise: {reviewer.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

