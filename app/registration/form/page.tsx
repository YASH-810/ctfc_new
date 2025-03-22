import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RegistrationFormPage() {
  return (
    <div>
      <div className="bg-gradient-primary-to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Registration Form</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Register to attend the Conference on Technologies for Future Cities.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <p className="text-gray-600">Please provide your personal details for registration.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="affiliation">Affiliation/Organization *</Label>
                <Input id="affiliation" placeholder="Enter your organization name" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="position">Position/Title</Label>
                  <Input id="position" placeholder="Enter your position or title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="japan">Japan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold mt-8">Registration Details</h2>
                <p className="text-gray-600">Please select your registration category and options.</p>
              </div>

              <div className="space-y-4">
                <Label>Registration Category *</Label>
                <RadioGroup defaultValue="regular">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="regular" />
                    <Label htmlFor="regular">Regular (Non-IEEE Member) - ₹21,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ieee" id="ieee" />
                    <Label htmlFor="ieee">IEEE Member - ₹18,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Student (Non-IEEE Member) - ₹12,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student-ieee" id="student-ieee" />
                    <Label htmlFor="student-ieee">Student IEEE Member - ₹10,000</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ieee-number">IEEE Membership Number (if applicable)</Label>
                <Input id="ieee-number" placeholder="Enter your IEEE membership number" />
              </div>

              <div className="space-y-4">
                <Label>Paper Submission *</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="paper-yes" />
                    <Label htmlFor="paper-yes">Yes, I have submitted a paper</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="paper-no" />
                    <Label htmlFor="paper-no">No, I am attending without a paper</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="paper-id">Paper ID (if applicable)</Label>
                <Input id="paper-id" placeholder="Enter your paper ID" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paper-title">Paper Title (if applicable)</Label>
                <Input id="paper-title" placeholder="Enter your paper title" />
              </div>

              <div className="space-y-4">
                <Label>Additional Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="extra-paper" />
                    <Label htmlFor="extra-paper">Additional Paper (₹5,000 per paper)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="extra-banquet" />
                    <Label htmlFor="extra-banquet">Extra Banquet Ticket (₹3,000 per person)</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary">Dietary Requirements</Label>
                <Select>
                  <SelectTrigger id="dietary">
                    <SelectValue placeholder="Select dietary requirements" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No special requirements</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="gluten-free">Gluten-free</SelectItem>
                    <SelectItem value="other">Other (please specify)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-requirements">Special Requirements or Comments</Label>
                <Textarea id="special-requirements" placeholder="Enter any special requirements or comments" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold mt-8">Payment Information</h2>
                <p className="text-gray-600">Please select your payment method.</p>
              </div>

              <div className="space-y-4">
                <Label>Payment Method *</Label>
                <RadioGroup defaultValue="credit-card">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer">Bank Transfer</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center space-x-2 mt-8">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    privacy policy
                  </a>
                  .
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Submit Registration
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

