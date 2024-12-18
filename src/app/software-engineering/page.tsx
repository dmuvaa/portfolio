// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import Image from "next/image"
// import { ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react'

// export default function SoftwareEngineering() {
//   return (
//     <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
//       <Header />
//       <main className="flex-1 py-12">
//         <div className="container mx-auto px-4 md:px-6 max-w-6xl">
//           {/* Projects Section */}
//           <section id="projects" className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
//             <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//               {[
//                 {
//                   title: "Defined Recipe",
//                   image: "/images/definedrecipe.png",
//                   date: "June 2024 - Present",
//                   description: "Personalized AI recipe generator with cost savings and food waste reduction.",
//                   points: [
//                     "Developed with 40% potential cost savings and 25% food waste reduction",
//                     "Designed intuitive UI using Sketch and Figma",
//                     "Engineered robust Next.js backend for 100,000+ daily users",
//                     "Integrated Paystack for streamlined payments"
//                   ],
//                   url: "https://definedrecipe.com"
//                 },
//                 {
//                   title: "Smart Brain Quiz",
//                   image: "/images/smart-brain-quiz.png",
//                   date: "March 2024 - Present",
//                   description: "Scalable quiz app with real-time interaction and enhanced user engagement.",
//                   points: [
//                     "Handles 100,000+ concurrent users with 40% reduced response time",
//                     "Implemented responsive design with Next.js",
//                     "Used Socket.io for real-time multiplayer capabilities",
//                     "Enhanced engagement with Three.js leaderboard"
//                   ],
//                   url: "https://github.com/dmuvaa/quiz-app"
//                 },
//                 {
//                   title: "Globe Translator",
//                   image: "/images/globe-translator.png",
//                   date: "June 2024 - July 2024",
//                   description: "Multi-language translation tool with AI integration and high user adoption.",
//                   points: [
//                     "Achieved 10,000+ users in first month with 99+ languages",
//                     "Integrated OpenAI and Stable Fusion APIs",
//                     "Engineered for 99.9% uptime under high traffic",
//                     "Increased user engagement by 30% with intuitive UI"
//                   ],
//                   url: "https://globetranslator.com"
//                 },
//                 {
//                   title: "PataDoc",
//                   image: "/images/patadoc.jpg",
//                   date: "November 2023 - January 2024",
//                   description: "Appointment scheduling system with Calendly integration and performance optimization.",
//                   points: [
//                     "Reduced scheduling time by 40% with Calendly integration",
//                     "Increased user adoption by 25% through targeted marketing",
//                     "Enhanced system performance by 30% with backend optimization"
//                   ],
//                   url: "https://github.com/dmuvaa/PataDoc"
//                 }
//               ].map((project, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//                   <div className="relative w-full h-64">
//                     <Image 
//                       src={project.image} 
//                       alt={project.title} 
//                       layout="fill" 
//                       objectFit="cover"
//                       className="transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                     <p className="text-gray-500 mb-4 flex items-center">
//                       <Calendar className="w-4 h-4 mr-2" />
//                       {project.date}
//                     </p>
//                     <p className="text-gray-700 mb-4">{project.description}</p>
//                     <ul className="mt-4 space-y-2">
//                       {project.points.map((point, i) => (
//                         <li key={i} className="flex items-start">
//                           <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     <a 
//                       href={project.url} 
//                       target="_blank" 
//                       rel="noopener noreferrer" 
//                       className="inline-flex items-center bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition"
//                     >
//                       View Project
//                       <ExternalLink className="w-4 h-4 ml-2" />
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Experience Section */}
//           <section id="experience" className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
//             <div className="space-y-8">
//               {[
//                 {
//                   title: "Junior Software Engineer",
//                   company: "Dencloud Technologies",
//                   location: "Nairobi, Kenya",
//                   date: "May 2024 - Present",
//                   points: [
//                     "Increased system efficiency by 15% using Python, JavaScript, and RESTful APIs",
//                     "Contributed to 25% increase in application efficiency and 20% reduction in bug resolution time",
//                     "Enhanced organic search visibility by 30% within two months using SEO-first strategies",
//                     "Achieved 95% client satisfaction rate and reduced project delivery timelines by 25%"
//                   ]
//                 },
//                 {
//                   title: "Technical Writer",
//                   company: "Cloud Infrastructure Services Ltd",
//                   location: "United Kingdom",
//                   date: "July 2022 - April 2024",
//                   points: [
//                     "Created and maintained comprehensive documentation, improving user comprehension by 30%",
//                     "Developed SEO guidelines, increasing organic traffic by 35% within six months",
//                     "Produced 200+ blog articles, boosting website traffic by 400%"
//                   ]
//                 },
//                 {
//                   title: "Content Writer & SEO Manager",
//                   company: "Hidden Lemur - Travel Media Company",
//                   location: "San Francisco (Remote)",
//                   date: "Feb 2021 - Sep 2022",
//                   points: [
//                     "Boosted organic search traffic by 335% through targeted keyword research using Ahrefs",
//                     "Achieved 200% increase in organic search rankings and 25% uplift in website traffic",
//                     "Directed content teams to produce 850+ high-quality articles, reducing publishing timelines by 60%"
//                   ]
//                 }
//               ].map((job, index) => (
//                 <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
//                   <h3 className="text-xl font-semibold">{job.title}</h3>
//                   <p className="text-gray-700 flex items-center mt-2">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     {job.company} | {job.location}
//                   </p>
//                   <p className="text-gray-500 flex items-center mt-1">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     {job.date}
//                   </p>
//                   <ul className="mt-4 space-y-2">
//                     {job.points.map((point, i) => (
//                       <li key={i} className="flex items-start">
//                         <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Skills Section */}
//           <section id="skills" className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
//             <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//               {[
//                 { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
//                 { title: "Backend", skills: ["Python", "Node.js", "Next.js", "MongoDB"] },
//                 { title: "DevOps", skills: ["Docker", "Kubernetes", "AWS", "Terraform"] },
//                 { title: "System Engineering", skills: ["Nginx", "Apache", "HAProxy", "Firewalls"] }
//               ].map((category, index) => (
//                 <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                   <h3 className="text-xl font-semibold mb-4">{category.title} Skills</h3>
//                   <div className="flex flex-wrap gap-4">
//                     {category.skills.map((skill, i) => (
//                       <div key={i} className="flex items-center bg-blue-100 rounded-full px-3 py-1">
//                         <Image src={`/logos/${skill.toLowerCase().replace('.', '')}.svg`} alt={skill} width={24} height={24} />
//                         <span className="ml-2 text-gray-700">{skill}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }

import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function SoftwareEngineering() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Summary Section */}
          <section id="summary" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center font-sans">Summary</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto font-sans text-lg leading-relaxed">
              I am a software developer who creates scalable, user-friendly applications with modern technologies and best practices. With a strong background in full-stack development and a focus on building efficient, intuitive, and visually appealing solutions, I excel at solving complex problems and delivering high-quality software. Whether working with front-end frameworks, back-end systems, or databases, I bring a results-driven approach and a commitment to innovation.
            </p>
          </section>

          {/* What I Do Section */}
          <section id="what-i-do" className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center font-serif">What I Do</h2>
            <ul className="list-disc list-inside max-w-3xl mx-auto text-gray-700 font-mono text-base space-y-2">
              <li>Developing scalable backend solutions using Node.js, Express, Django, FastAPI, and Go.</li>
              <li>Core backend - Redis/Memcached Caching, Microservices, Websockets, Authentication, Pagination, i8n, etc.</li>
              <li>Full-stack development with modern frameworks like Next.js and React.</li>
              <li>Building scalable and optimized APIs and backend services.</li>
              <li>Database modeling and management with tools like Prisma and Postgres.</li>
              <li>Integrating third-party APIs to extend functionality.</li>
              <li>Enhancing user experience with custom solutions, dark/light mode support, and accessibility.</li>
              <li>Writing clean, maintainable, and type-safe code using TypeScript.</li>
              <li>Containerization - Docker and Kubernetes.</li>
              <li>CI/CD pipelines with GitHub Actions.</li>
              <li>Monitoring and logging with tools like Grafana, Prometheus, Datadog, and ELK Stack.</li>
              <li>Performance optimization and load testing.</li>
              <li>SEO optimization and best practices.</li>
              <li>Testing with Mocha, Unittests, Cypress</li>
              <li>Version control with Git and GitHub.</li>
            </ul>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Defined Recipe",
                  image: "/images/definedrecipe.png",
                  date: "June 2024 - Present",
                  description: "Personalized AI recipe generator with cost savings and food waste reduction.",
                  points: [
                    "Developed with 40% potential cost savings and 25% food waste reduction",
                    "Designed intuitive UI using Sketch and Figma",
                    "Engineered robust Next.js backend for 100,000+ daily users",
                    "Integrated Paystack for streamlined payments"
                  ],
                  url: "https://definedrecipe.com"
                },
                {
                  title: "Smart Brain Quiz",
                  image: "/images/smart-brain-quiz.png",
                  date: "March 2024 - Present",
                  description: "Scalable quiz app with real-time interaction and enhanced user engagement.",
                  points: [
                    "Handles 100,000+ concurrent users with 40% reduced response time",
                    "Implemented responsive design with Next.js",
                    "Used Socket.io for real-time multiplayer capabilities",
                    "Enhanced engagement with Three.js leaderboard"
                  ],
                  url: "https://github.com/dmuvaa/quiz-app"
                },
                {
                  title: "Globe Translator",
                  image: "/images/globe-translator.png",
                  date: "June 2024 - July 2024",
                  description: "Multi-language translation tool with AI integration and high user adoption.",
                  points: [
                    "Achieved 10,000+ users in first month with 99+ languages",
                    "Integrated OpenAI and Stable Fusion APIs",
                    "Engineered for 99.9% uptime under high traffic",
                    "Increased user engagement by 30% with intuitive UI"
                  ],
                  url: "https://globetranslator.com"
                },
                {
                  title: "PataDoc",
                  image: "/images/patadoc.jpg",
                  date: "November 2023 - January 2024",
                  description: "Appointment scheduling system with Calendly integration and performance optimization.",
                  points: [
                    "Reduced scheduling time by 40% with Calendly integration",
                    "Increased user adoption by 25% through targeted marketing",
                    "Enhanced system performance by 30% with backend optimization"
                  ],
                  url: "https://github.com/dmuvaa/PataDoc"
                },
                {
                  title: "Workspaces App",
                  image: "/images/workspaces-app.png",
                  date: " October 2024 - Present",
                  description: "An app that lists all coworking spaces worldwide, enabling users to explore and discover the perfect workspace for their needs.",
                  points: [
                    "Comprehensive database of coworking spaces.",
                    "Search and filtering capabilities.",
                    "Responsive design for mobile and desktop users.",
                    "Secure authentication and user management."
                  ],
                  technologies: "Node.js, Next.js, Supabase, Postgres, Tailwind, Prisma",
                  url: "https://workspaces-app.vercel.app/"
                },
                {
                  title: "Next.js Boilerplate",
                  image: "/images/next-boilerplate.png",
                  date: "December 2024 - Present",
                  description: "A comprehensive starter template for modern web development, featuring an array of tools and technologies for rapid application development.",
                  points: [
                    "Next.js 15 for latest optimizations.",
                    "React 19 with enhanced capabilities.",
                    "Supabase for authentication and database management.",
                    "Prisma ORM for simplified database operations.",
                    "ShadCN UI Components for elegant and customizable design.",
                    "Dark/Light mode with system preference detection.",
                    "Hashnode CMS for blog management.",
                    "Built-in SEO optimization for better search engine visibility.",
                    "Mailgun integration for email functionality.",
                    "TypeScript support for code quality and scalability.",
                    "Fully responsive design for all screen sizes."
                  ],
                  technologies: "Next.js 15, React 19, Supabase, Prisma, ShadCN UI",
                  url: "https://github.com/dmuvaa/next-boilerplate"
                },
                {
                  title: "Itinerary Place",
                  image: "/images/itinerary-place.png",
                  date: "November 2024 - Present",
                  description: "An app that compiles travel itineraries from around the world, helping travelers plan their perfect trips.",
                  points: [
                    "Extensive travel itinerary database.",
                    "User-contributed itineraries with reviews.",
                    "Advanced filtering and search."
                  ],
                  technologies: "Node.js, React, Postgres, Tailwind CSS",
                  url: "https://github.com/dmuvaa"
                },
                {
                  title: "Coursework AI",
                  image: "/images/coursework-ai.png",
                  date: "2023",
                  description: "An AI-powered tool for students to assist with coursework, offering intelligent recommendations and resources.",
                  points: [
                    "AI-driven assistance for assignments and projects.",
                    "Integration with educational resources and tools.",
                    "Responsive and accessible design."
                  ],
                  technologies: "Next.js, OpenAI API, Tailwind CSS",
                  url: "#"
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative w-full h-64">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={500}
                      height={300}
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-500 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </p>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <ul className="mt-4 space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {project.technologies && (
                      <p className="text-gray-600 mt-4">
                        <strong>Technologies:</strong> {project.technologies}
                      </p>
                    )}
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Junior Software Engineer",
                  company: "Dencloud Technologies",
                  location: "Nairobi, Kenya",
                  date: "May 2024 - Present",
                  points: [
                    "Increased system efficiency by 15% using Python, JavaScript, and RESTful APIs",
                    "Contributed to 25% increase in application efficiency and 20% reduction in bug resolution time",
                    "Enhanced organic search visibility by 30% within two months using SEO-first strategies",
                    "Achieved 95% client satisfaction rate and reduced project delivery timelines by 25%"
                  ]
                },
                {
                  title: "Technical Writer",
                  company: "Cloud Infrastructure Services Ltd",
                  location: "United Kingdom",
                  date: "July 2022 - April 2024",
                  points: [
                    "Created and maintained comprehensive documentation, improving user comprehension by 30%",
                    "Developed SEO guidelines, increasing organic traffic by 35% within six months",
                    "Produced 200+ blog articles, boosting website traffic by 400%"
                  ]
                },
                {
                  title: "Content Writer & SEO Manager",
                  company: "Hidden Lemur - Travel Media Company",
                  location: "San Francisco (Remote)",
                  date: "Feb 2021 - Sep 2022",
                  points: [
                    "Boosted organic search traffic by 335% through targeted keyword research using Ahrefs",
                    "Achieved 200% increase in organic search rankings and 25% uplift in website traffic",
                    "Directed content teams to produce 850+ high-quality articles, reducing publishing timelines by 60%"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-700 flex items-center mt-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.company} | {job.location}
                  </p>
                  <p className="text-gray-500 flex items-center mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {job.date}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {[
                { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
                { title: "Backend", skills: ["Python", "Node.js", "Next.js", "MongoDB"] },
                { title: "DevOps", skills: ["Docker", "Kubernetes", "AWS", "Terraform"] },
                { title: "System Engineering", skills: ["Nginx", "Apache", "HAProxy", "Firewalls"] }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{category.title} Skills</h3>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="flex items-center bg-blue-100 rounded-full px-3 py-1">
                        <Image src={`/logos/${skill.toLowerCase().replace('.', '')}.svg`} alt={skill} width={24} height={24} />
                        <span className="ml-2 text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}


