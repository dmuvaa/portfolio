import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Briefcase, Rocket, Activity, Quote, Award } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              I&apos;m a passionate developer and technical writer on a journey to create impactful solutions and share knowledge. With a background in technical writing and a growing expertise in software engineering, I&apos;m constantly exploring new technologies and pushing my boundaries.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2" />
              Professional Background
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">My Journey to Becoming a Dev and Technical Writer</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Started as a technical writer at nOps, igniting my passion for understanding technology deeper</li>
              <li>Joined ALX for a comprehensive software engineering course</li>
              <li>Built and launched various projects, showcasing them in my portfolio</li>
              <li>Continuously expanding my skills and taking on new challenges in the tech world</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Rocket className="mr-2" />
              Current Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Upcovered", "Global Workspaces", "Thesis Corner", "Coursework AI"].map((project) => (
                <li key={project} className="flex items-center">
                  <Badge variant="outline" className="mr-2">{project}</Badge>
                  <span>In Development</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2" />
              Hobbies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Playing soccer (7-aside)</li>
              <li>Go Karting</li>
              <li>Hiking</li>
              <li>Karaoke</li>
              <li>Reading books</li>
              <li>Watching sports:
                <ul className="list-circle list-inside ml-4">
                  <li>Soccer</li>
                  <li>NBA</li>
                  <li>Formula 1</li>
                  <li>WRC (World Rally Championship)</li>
                  <li>MotoGP</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Quote className="mr-2" />
              Favorite Quotes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              &quot;The only way to do great work is to love what you do.&quot; - Steve Jobs
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              &quot;In the middle of difficulty lies opportunity.&quot; - Albert Einstein
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              &quot;The future belongs to those who believe in the beauty of their dreams.&quot; - Eleanor Roosevelt
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2" />
              Hackathons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>HackforClimate</li>
              <li>EdTech Series Kenya</li>
              <li>HackforPWDs</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      </div>
      <Footer />
    </>
  )
}