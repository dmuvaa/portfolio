import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-muted-foreground" />
              <div>
                <h2 className="text-lg font-semibold">Email</h2>
                <Link href="mailto:dennis@example.com" className="text-primary hover:underline">
                  dmuvaa70@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-muted-foreground" />
              <div>
                <h2 className="text-lg font-semibold">WhatsApp</h2>
                <Link href="https://wa.me/728921448" className="text-primary hover:underline">
                  +254 728921448
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="h-6 w-6 text-muted-foreground" />
              <div>
                <h2 className="text-lg font-semibold">LinkedIn</h2>
                <Link href="https://www.linkedin.com/in/dennis-muvaa-76b84416b/" className="text-primary hover:underline">
                  linkedin.com/in/dennismuvaa
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="mb-4">Prefer to connect on social media?</p>
          <Button asChild>
            <Link href="https://www.linkedin.com/in/dennis-muvaa-76b84416b/">
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  )
}