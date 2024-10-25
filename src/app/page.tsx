import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Linkedin, Github, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="flex-1">
        <Hero
          title="Hi, I'm Dennis Muvaa"
          subtitle="I'm a software engineer and technical writer with a passion for creating elegant and efficient solutions. I enjoy tackling complex problems and sharing my knowledge with others."
          buttonText="Learn More About Me"
          buttonLink="#about"
        />

        {/* About Section */}
        <section className="py-12 bg-white shadow-inner" id="about">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image 
                  src="/profile.jpg" 
                  alt="Dennis Muvaa" 
                  width={200} 
                  height={250} 
                  className="rounded-full shadow-lg border-4 border-black object-cover" 
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">About Me</h2>
                <p className="text-lg text-gray-700 mb-6">
                I am a full stack developer (with backend specialization) specializing in building scalable, high-performance applications with a strong focus on user engagement. With two years of professional experience, I have successfully delivered a range of projects, from dynamic web applications to in-depth technical content. My approach emphasizes not only robust development but also comprehensive documentation, ensuring clarity and maintainability across all projects.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Software Engineering and Technical Writing Section */}
        <section className="py-12 bg-gradient-to-r from-blue-300 to-indigo-300 text-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Software Engineering</h2>
                <p className="text-lg mb-6">
                  Explore my work in software engineering, including web development, mobile apps, and more. I&apos;ve worked on projects involving complex API integrations, system design, and optimization.
                </p>
                <Link
                  href="/software-engineering"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 text-black px-6 py-3 text-base font-medium shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-colors"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Technical Writing</h2>
                <p className="text-lg mb-6">
                  Check out my technical writing work, including blog posts, documentation, and more. My writing is focused on clear, concise, and accurate content that helps users and developers alike.
                </p>
                <Link
                  href="/technical-writing"
                  className="inline-flex items-center justify-center rounded-md bg-purple-700 text-black px-6 py-3 text-base font-medium shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-colors"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">Education</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* ALX Africa */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Image src="/images/alx-certificate.png" alt="ALX Certificate" width={400} height={300} className="rounded-md mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificate in Software Engineering</h3>
                <p className="text-gray-600 mb-2">ALX Africa • Nairobi, Kenya • 2023</p>
                <p className="text-gray-700">
                  Awarded a Certificate in Software Engineering after 12 months of rigorous learning and practical application.
                </p>
              </div>

              {/* Egerton University */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Arts in Economics</h3>
                <p className="text-gray-600 mb-2">Egerton University • Njoro, Kenya • 2018 • 3.9 GPA</p>
                <p className="text-gray-700">
                  Completed a Bachelor of Arts in Economics with a minor in History, graduating with Second Class Honors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Socials Section */}
        <section className="py-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Connect With Me</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://www.linkedin.com/in/dennis-muvaa-76b84416b" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                <Linkedin className="h-8 w-8 mr-2" />
                <span className="text-lg">LinkedIn</span>
              </a>
              <a href="https://github.com/dmuvaa" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                <Github className="h-8 w-8 mr-2" />
                <span className="text-lg">GitHub</span>
              </a>
              <a href="https://www.techlivened.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200 transition-colors">
                <Globe className="h-8 w-8 mr-2" />
                <span className="text-lg">Blog</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}