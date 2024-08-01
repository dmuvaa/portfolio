import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          title="Hi, I'm Dennis Muvaa"
          subtitle="I'm a software engineer and technical writer with a passion for creating elegant and efficient solutions. I enjoy tackling complex problems and sharing my knowledge with others."
          buttonText="Learn More About Me"
          buttonLink="#about"
        />

        {/* About Section */}
        <section className="container py-12 md:py-16 lg:py-20 ml-4 md:ml-8 lg:ml-12" id="about">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">About Me</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                I specialize in full stack development with a focus on building scalable applications and creating comprehensive documentation. With two years of professional experience, I’ve worked on a variety of projects ranging from web applications to technical content creation, ensuring high performance and user engagement.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
              >
                Read More
              </Link>
            </div>
            <div className="flex flex-col items-start justify-center">
              <Image src="/profile.jpg" alt="Dennis Muvaa" className="rounded-full w-full h-auto max-w-xs" />
            </div>
          </div>
        </section>

        {/* Software Engineering Section */}
        <section className="container py-12 md:py-16 lg:py-20 ml-4 md:ml-8 lg:ml-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Software Engineering</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Explore my work in software engineering, including web development, mobile apps, and more. I’ve worked on projects involving complex API integrations, system design, and optimization.
              </p>
              <Link
                href="/software-engineering"
                className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
              >
                View Portfolio
              </Link>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Technical Writing</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Check out my technical writing work, including blog posts, documentation, and more. My writing is focused on clear, concise, and accurate content that helps users and developers alike.
              </p>
              <Link
                href="/technical-writing"
                className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-600"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="container py-12 md:py-16 lg:py-20 ml-4 md:ml-8 lg:ml-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Education</h2>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* ALX Africa */}
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/alx-certificate.png" alt="ALX Certificate" width={600} height={400} className="rounded-md mb-4"/>
              <h3 className="text-xl font-semibold">Certificate in Software Engineering</h3>
              <p className="text-gray-500">ALX Africa • Nairobi, Kenya • 2023</p>
              <p className="mt-2 text-gray-700">
                Awarded a Certificate in Software Engineering after 12 months of rigorous learning and practical application.
              </p>
            </div>

            {/* Egerton University */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold">Bachelor of Arts in Economics</h3>
              <p className="text-gray-500">Egerton University • Njoro, Kenya • 2018 • 3.9 GPA</p>
              <p className="mt-2 text-gray-700">
                Completed a Bachelor of Arts in Economics with a minor in History, graduating with Second Class Honors.
              </p>
            </div>
          </div>
        </section>

        {/* Socials Section */}
        <section className="container py-12 md:py-16 lg:py-20 ml-4 md:ml-8 lg:ml-12 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8">Socials</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/in/dennis-muvaa-76b84416b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <Image src="/logos/linkedin.svg" alt="LinkedIn" width={40} height={40} />
              <span className="ml-2">LinkedIn</span>
            </a>
            <a href="https://github.com/dmuvaa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <Image src="/logos/github.svg" alt="GitHub" width={40} height={40} />
              <span className="ml-2">GitHub</span>
            </a>
            <a href="https://www.techlivened.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <Image src="/logos/blog.svg" alt="Blog" width={100} height={40} />
              <span className="ml-2">Blog</span>
            </a>
          </div>
        </section>
      </main>
      <Footer className="text-center" />
    </div>
  );
}
