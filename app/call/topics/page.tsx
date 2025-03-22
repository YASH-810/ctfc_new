export default function TopicsPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Call for Papers: Topics</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Explore the topics and research areas for the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-lg">
              The Conference on Technologies for Future Cities (CTFC) invites submissions on a wide range of topics
              related to innovative technologies for future cities. We welcome original research papers, case studies,
              and practical applications in the following areas:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Smart Infrastructure and Buildings</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Smart building technologies and automation</li>
                    <li>Structural health monitoring and maintenance</li>
                    <li>Smart materials and construction techniques</li>
                    <li>Building information modeling (BIM)</li>
                    <li>Infrastructure resilience and adaptation</li>
                    <li>Smart water and waste management</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Urban Mobility and Transportation</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Intelligent transportation systems</li>
                    <li>Connected and autonomous vehicles</li>
                    <li>Mobility as a Service (MaaS)</li>
                    <li>Smart parking solutions</li>
                    <li>Traffic management and optimization</li>
                    <li>Public transportation innovations</li>
                    <li>Last-mile delivery solutions</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Sustainable Energy Solutions</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Renewable energy integration in urban environments</li>
                    <li>Smart grids and microgrids</li>
                    <li>Energy-efficient buildings and districts</li>
                    <li>Energy storage technologies</li>
                    <li>Demand response and energy management</li>
                    <li>Urban energy planning and policy</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Digital Governance and Smart Services</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>E-governance and citizen participation</li>
                    <li>Smart city platforms and dashboards</li>
                    <li>Public service innovations</li>
                    <li>Digital twins for urban management</li>
                    <li>Policy frameworks for smart cities</li>
                    <li>Smart city standards and interoperability</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Urban Data Analytics and Big Data</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Urban sensing and data collection</li>
                    <li>Big data analytics for urban planning</li>
                    <li>Predictive analytics for city services</li>
                    <li>Urban data visualization</li>
                    <li>Data-driven decision making</li>
                    <li>Open data initiatives and platforms</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Internet of Things (IoT) for Smart Cities</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>IoT architectures and platforms for urban applications</li>
                    <li>Sensor networks and deployments</li>
                    <li>Edge and fog computing for smart cities</li>
                    <li>IoT security and privacy in urban environments</li>
                    <li>Low-power wide-area networks (LPWAN) for smart cities</li>
                    <li>IoT standards and interoperability</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">
                    Artificial Intelligence and Machine Learning Applications
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>AI for urban planning and design</li>
                    <li>Machine learning for urban services optimization</li>
                    <li>Computer vision for urban monitoring</li>
                    <li>Natural language processing for citizen engagement</li>
                    <li>Reinforcement learning for urban systems</li>
                    <li>Ethical AI in smart cities</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Smart Healthcare and Wellbeing</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Telemedicine and remote healthcare</li>
                    <li>Health monitoring systems</li>
                    <li>Smart hospitals and clinics</li>
                    <li>Public health surveillance and management</li>
                    <li>Urban design for health and wellbeing</li>
                    <li>Accessibility and inclusive design</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-primary">Cybersecurity for Smart Cities</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Security frameworks for smart city infrastructure</li>
                    <li>Privacy-preserving technologies</li>
                    <li>Threat detection and prevention</li>
                    <li>Secure communication protocols</li>
                    <li>Resilience against cyber attacks</li>
                    <li>Security standards and compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-8 text-lg">
              This list is not exhaustive, and we welcome submissions on other topics related to technologies for future
              cities. Interdisciplinary approaches that combine technical solutions with social, economic, and policy
              considerations are particularly encouraged.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

