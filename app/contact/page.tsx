import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Get in touch with the organizing committee of the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8">
                Have questions about the conference? Want to become a sponsor? Interested in presenting your research?
                We'd love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p>
                      Pillai College of Engineering
                      <br />
                      Dr. K. M. Vasudevan Pillai Campus
                      <br />
                      Plot No. 10, Sector 16
                      <br />
                      New Panvel, Navi Mumbai - 410206
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>contact@ctfc.org</p>
                    <p>info@ctfc.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p>+91 123 456 7890</p>
                    <p>+91 987 654 3210</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your Message" rows={5} />
                </div>

                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Location</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for map - in a real implementation, you would use a map component or iframe */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Map of Pillai College of Engineering, Panvel</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

