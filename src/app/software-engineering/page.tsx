// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Image from "next/image";

// export default function SoftwareEngineering() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <main className="flex-1 bg-gray-50 py-12">
//         <div className="container mx-auto px-4 md:px-6">
//           {/* Projects Section */}
//           <section id="projects" className="mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
//             <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//               {/* Project 1 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <Image src="/images/defined-recipe.png" alt="Defined Recipe" width={600} height={400} className="rounded-md"/>
//                 <h3 className="text-xl font-semibold mt-4">Defined Recipe</h3>
//                 <p className="text-gray-500 mb-4">June 2024 - Present</p>
//                 <ul className="mt-4 list-disc pl-5 space-y-2">
//                   <li>Developed a personalized AI recipe generator with 40% potential cost savings and a 25% reduction in food waste.</li>
//                   <li>Designed an intuitive user interface using Sketch and Figma.</li>
//                   <li>Engineered a robust backend system with Next.js to handle 100,000+ daily users.</li>
//                   <li>Integrated Paystack for streamlined payment processing.</li>
//                 </ul>
//                 <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition">View Project</a>
//               </div>

//               {/* Project 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <Image src="/images/smart-brain-quiz.png" alt="Smart Brain Quiz" width={600} height={400} className="rounded-md"/>
//                 <h3 className="text-xl font-semibold mt-4">Smart Brain Quiz</h3>
//                 <p className="text-gray-500 mb-4">March 2024 - Present</p>
//                 <ul className="mt-4 list-disc pl-5 space-y-2">
//                   <li>Created a scalable quiz app handling 100,000+ concurrent users, reducing server response time by 40%.</li>
//                   <li>Implemented a responsive design with Next.js, improving user interaction and page load speed.</li>
//                   <li>Used Socket.io for real-time user interaction and multiplayer capabilities.</li>
//                   <li>Enhanced user engagement with a Three.js leaderboard.</li>
//                 </ul>
//                 <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition">View Project</a>
//               </div>

//               {/* Project 3 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <Image src="/images/globe-translator.png" alt="Globe Translator" width={600} height={400} className="rounded-md"/>
//                 <h3 className="text-xl font-semibold mt-4">Globe Translator</h3>
//                 <p className="text-gray-500 mb-4">June 2024 - July 2024</p>
//                 <ul className="mt-4 list-disc pl-5 space-y-2">
//                   <li>Launched Globe Translator, achieving 10,000+ users in the first month with support for 99+ languages.</li>
//                   <li>Integrated OpenAI and Stable Fusion APIs for seamless language translation.</li>
//                   <li>Engineered infrastructure to support high-traffic demands with 99.9% uptime.</li>
//                   <li>Increased user engagement by 30% with an intuitive UI.</li>
//                 </ul>
//                 <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition">View Project</a>
//               </div>

//               {/* Project 4 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <Image src="/images/patadoc.png" alt="PataDoc" width={600} height={400} className="rounded-md"/>
//                 <h3 className="text-xl font-semibold mt-4">PataDoc</h3>
//                 <p className="text-gray-500 mb-4">November 2023 - January 2024</p>
//                 <p className="text-gray-700 mt-2">
//                   Reduced appointment scheduling time by 40% through seamless integration of Calendly.
//                 </p>
//                 <ul className="mt-4 list-disc pl-5 space-y-2">
//                   <li>Increased user adoption by 25% through targeted marketing strategies.</li>
//                   <li>Enhanced system performance by 30% through backend optimization and efficient database queries.</li>
//                 </ul>
//                 <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition">View Project</a>
//               </div>
//             </div>
//           </section>

//           {/* Experience Section */}
//           <section id="experience" className="mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>
//             <div className="space-y-8">
//               {/* Experience 1 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold">Junior Software Engineer</h3>
//                 <p className="text-gray-700">Dencloud Technologies | May 2024 - Present | Nairobi, Kenya</p>
//                 <ul className="mt-4 list-disc pl-5 space-y-2">
//                   <li>Increased system efficiency by 15% through the use of Python, JavaScript, and RESTful APIs.</li>
//                   <li>Contributed to a 25% increase in application efficiency and reduced bug resolution time by 20%.</li>
//                   <li>Enhanced organic search visibility by 30% within two months using SEO-first strategies.</li>
//                   <li>Achieved a 95% client satisfaction rate and reduced project delivery timelines by 25%.</li>
//                 </ul>
//               </div>

//               {/* Experience 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold">Technical Writer</h3>
//                 <p className="text-gray-700">Cloud Infrastructure Services Ltd | July 2022 - April 2024 | United Kingdom</p>
//                 <ul className="mt-4 list-disc pl-5 space-y-2">
//                   <li>Created and maintained comprehensive documentation, improving user comprehension by 30%.</li>
//                   <li>Developed comprehensive SEO guidelines, increasing organic traffic by 35% within six months.</li>
//                   <li>Produced 200+ blog articles, boosting website traffic by 400%.</li>
//                 </ul>
//               </div>

//               {/* Experience 3 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold">Content Writer & SEO Manager</h3>
//                 <p className="text-gray-700">Hidden Lemur - Travel Media Company | Feb 2021 - Sep 2022 | San Francisco (Remote)</p>
//                 <ul className="mt-4 list-disc pl-5 space-y-2">
//                   <li>Boosted organic search traffic by 335% through targeted keyword research using Ahrefs.</li>
//                   <li>Achieved a 200% increase in organic search rankings and a 25% uplift in website traffic.</li>
//                   <li>Directed content teams to produce 850+ high-quality articles, reducing publishing timelines by 60%.</li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Skills Section */}
//           <section id="skills" className="mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
//             <div className="space-y-12">
//               {/* Frontend Skills */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Frontend Skills</h3>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <Image src="/logos/html5.svg" alt="HTML5" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">HTML5</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/css3.svg" alt="CSS3" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">CSS3</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/javascript.svg" alt="JavaScript" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">JavaScript</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/react.svg" alt="React" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">React</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Backend Skills */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Backend Skills</h3>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <Image src="/logos/python.svg" alt="Python" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Python</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/nodejs.svg" alt="Node.js" width={100} height={40} />
//                     <span className="ml-2 text-gray-700">Node.js</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/nextjs.svg" alt="Next.js" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Next.js</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/mongodb.svg" alt="MongoDB" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">MongoDB</span>
//                   </div>
//                 </div>
//               </div>

//               {/* DevOps Skills */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">DevOps Skills</h3>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <Image src="/logos/docker.svg" alt="Docker" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Docker</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/kubernetes.svg" alt="Kubernetes" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Kubernetes</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/aws.svg" alt="AWS" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">AWS</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/terraform.svg" alt="Terraform" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Terraform</span>
//                   </div>
//                 </div>
//               </div>

//               {/* System Engineering Skills */}
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">System Engineering Skills</h3>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <Image src="/logos/nginx.svg" alt="Nginx" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Nginx</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/apache.svg" alt="Apache" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Apache</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/haproxy.svg" alt="HAProxy" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">HAProxy</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Image src="/logos/firewall.svg" alt="Firewalls" width={40} height={40} />
//                     <span className="ml-2 text-gray-700">Firewalls</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
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
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative w-full h-64">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      layout="fill" 
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
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