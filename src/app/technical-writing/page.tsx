import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"

export default function TechnicalWriting() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          {/* Main Heading and Introduction */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Writing Experience</h2>
          <p className="text-gray-700 mb-12">
            I have extensive experience in technical writing, where I&apos;ve specialized in creating comprehensive documentation, SEO strategies, and content that enhances user engagement. My work spans across multiple domains including cloud infrastructure, SEO content strategy, and technical documentation for software products. My aim is to make complex technical concepts accessible and understandable to a wide audience, while also driving organic traffic through targeted content creation.
          </p>

          {/* Projects Section */}
          <section id="projects" className="mb-12">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">SEO Content Strategy - Hidden Lemur Media</h3>
                <p className="text-gray-600">Feb 2021 - Sep 2022</p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-left">
                  <li>Developed and implemented a comprehensive SEO strategy that increased organic traffic by 150% over six months.</li>
                  <li>Conducted comprehensive site audits and implemented strategic SEO improvements.</li>
                  <li>Directed content creation and editorial processes for over 100 high-quality articles.</li>
                  <li>Boosted organic search traffic by 335% through targeted keyword research using Ahrefs.</li>
                </ul>
              </div>
              {/* Project 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Technical Writing - Cloud Infrastructure Services</h3>
                <p className="text-gray-600">July 2022 - April 2024</p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-left">
                  <li>Authored over 200 blog articles on diverse tech topics, driving a 400% increase in website traffic.</li>
                  <li>Improved user engagement and comprehension through clear, concise, and accurate technical writing.</li>
                  <li>Enhanced the company's authority in the tech industry through in-depth coverage of topics like Ubuntu, Node.js, Nginx, AWS, and more.</li>
                  <li>Developed content that effectively reduced customer support inquiries by 30%.</li>
                </ul>
              </div>
              {/* Project 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Cloud Writer - nOps.io</h3>
                <p className="text-gray-600">May 2021 - May 2022</p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-left">
                  <li>Produced detailed and comprehensive documentation on AWS Cloud Services, significantly reducing integration time.</li>
                  <li>Created and optimized a glossary page, improving search engine rankings by 525%.</li>
                  <li>Improved SEO performance, resulting in a 1000% increase in organic traffic within six months.</li>
                  <li>Developed technical documentation that reduced customer support inquiries by 30%.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SEO Expertise Section */}
          <section id="seo-expertise" className="mb-12 relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">SEO Expertise</h2>

            {/* Central Branch Line */}
            <div className="absolute top-[5rem] bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"></div>

            <div className="space-y-12 relative z-10">
              {/* Programmatic SEO (Left) */}
              <div className="flex justify-end items-center w-full relative">
                {/* Connector Line */}
                <div className="absolute right-[calc(50%-2rem)] w-8 h-0.5 bg-gray-300 transform translate-y-4"></div>
                <div className="w-5/12 ml-6">
                  <h3 className="text-xl font-semibold mb-3">Programmatic SEO</h3>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                    <li>Creates and manages large-scale programmatic SEO campaigns, automating content creation across numerous pages.</li>
                    <li>Utilizes data-driven approaches to generate pages targeting long-tail keywords, driving significant organic traffic growth.</li>
                    <li>Integrates with CMS to dynamically generate optimized content, ensuring consistency and SEO best practices.</li>
                    <li>Monitors performance using analytics tools, adjusting strategies to maximize organic traffic and conversions.</li>
                  </ul>
                </div>
              </div>

              {/* Site Audits (Right) */}
              <div className="flex justify-start items-center w-full relative">
                {/* Connector Line */}
                <div className="absolute left-[calc(50%-2rem)] w-8 h-0.5 bg-gray-300 transform translate-y-4"></div>
                <div className="w-5/12 mr-6">
                  <h3 className="text-xl font-semibold mb-3">Site Audits</h3>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                    <li>Performs comprehensive site audits using Ahrefs, SEMrush, and Google Search Console to identify technical SEO issues.</li>
                    <li>Analyzes on-page elements like meta tags, headers, and content structure for SEO optimization.</li>
                    <li>Optimizes site speed, mobile usability, and security, aligning with key search engine ranking factors.</li>
                    <li>Provides actionable audit reports to improve site health and search engine visibility.</li>
                  </ul>
                </div>
              </div>

              {/* Keyword Research (Left) */}
              <div className="flex justify-end items-center w-full relative">
                {/* Connector Line */}
                <div className="absolute right-[calc(50%-2rem)] w-8 h-0.5 bg-gray-300 transform translate-y-4"></div>
                <div className="w-5/12 ml-6">
                  <h3 className="text-xl font-semibold mb-3">Keyword Research</h3>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                    <li>Conducts thorough keyword research to uncover high-value keywords that align with business goals.</li>
                    <li>Analyzes search intent to ensure content meets user expectations and drives organic traffic.</li>
                    <li>Tracks keyword rankings and trends to refine strategies for maintaining competitive SERP positions.</li>
                    <li>Balances short-term wins with long-term growth, targeting both high-traffic and low-competition keywords.</li>
                  </ul>
                </div>
              </div>

              {/* Server Side Rendering (Right) */}
              <div className="flex justify-start items-center w-full relative">
                {/* Connector Line */}
                <div className="absolute left-[calc(50%-2rem)] w-8 h-0.5 bg-gray-300 transform translate-y-4"></div>
                <div className="w-5/12 mr-6">
                  <h3 className="text-xl font-semibold mb-3">Server Side Rendering (Next.js)</h3>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                    <li>Implements Server Side Rendering (SSR) with Next.js to enhance page load speed and SEO performance.</li>
                    <li>Ensures content is fully rendered on the server before delivery, improving crawlability by search engines.</li>
                    <li>Optimizes SSR configurations to balance performance with resource usage, enhancing user experience.</li>
                    <li>Continuously refines SSR setups to adapt to changes in search engine algorithms and user behavior.</li>
                  </ul>
                </div>
              </div>

              {/* Featured Snippets (Left) */}
              <div className="flex justify-end items-center w-full relative">
                {/* Connector Line */}
                <div className="absolute right-[calc(50%-2rem)] w-8 h-0.5 bg-gray-300 transform translate-y-4"></div>
                <div className="w-5/12 ml-6">
                  <h3 className="text-xl font-semibold mb-3">Featured Snippets</h3>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                    <li>Structures content to target and capture featured snippets, driving higher click-through rates.</li>
                    <li>Uses schema markup and formatting to make content more attractive for snippet inclusion.</li>
                    <li>Crafts concise answers to common queries, meeting criteria for snippet selection by search engines.</li>
                    <li>Monitors snippet performance to maintain visibility and adapt to evolving search behaviors.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Projects Section */}
          <section id="seo-projects" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">SEO Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* nOps.io */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm transition transform hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">nOps.io</h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                  <li>Part of the SEO strategy focusing on keyword optimization.</li>
                  <li>Increased organic traffic by optimizing the site's structure and content for key industry terms.</li>
                  <li>Implemented advanced keyword strategies, aligning content with nOps.io's business goals.</li>
                  <li>Regularly monitored SEO performance, making adjustments to maintain and improve rankings.</li>
                </ul>
              </div>
              {/* Hiddenlemur Media */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm transition transform hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Hiddenlemur Media</h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                  <li>Developed and executed comprehensive SEO strategies, including content creation and keyword optimization.</li>
                  <li>Conducted regular site audits and keyword research, ensuring competitiveness and alignment with search trends.</li>
                  <li>Tracked KPIs to measure the success of SEO initiatives, providing insights for future strategies.</li>
                </ul>
              </div>
              {/* Cloud Infrastructure Services Ltd */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm transition transform hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Cloud Infrastructure Services Ltd</h3>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-left text-gray-700">
                  <li>Drove SEO efforts, improving search rankings and traffic through server-side rendering, site audits, and content optimization.</li>
                  <li>Strategically targeted high-value search queries, increasing visibility and user engagement.</li>
                  <li>Enhanced technical SEO aspects like site speed, mobile optimization, and security features.</li>
                  <li>Analyzed SEO performance data, providing actionable insights for continuous improvement.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Top Article Samples Section */}
          <section id="top-article-samples" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Article Samples</h2>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Article 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Server-Side Rendering in Next.js for SEO</h3>
                <p className="text-gray-700 mb-4">
                  Explore the benefits of SSR in Next.js and its impact on SEO performance.
                </p>
                <a href="https://www.techlivened.com/server-side-rendering-in-nextjs-for-seo" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Full Article</a>
              </div>

              {/* Article 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">React Hooks Explained</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive guide to understanding and using React Hooks effectively.
                </p>
                <a href="https://www.techlivened.com/react-hooks-explained" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Full Article</a>
              </div>

              {/* Article 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2  text-gray-800">Microsoft Remote Desktop Services Security Best Practices</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to secure your Remote Desktop Services environment effectively.
                </p>
                <a href="https://cloudinfrastructureservices.co.uk/microsoft-remote-desktop-services-security-best-practices/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Full Article</a>
              </div>

              {/* Article 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Implementing Caching in Node.js</h3>
                <p className="text-gray-700 mb-4">
                  Discover techniques to improve Node.js application performance through caching.
                </p>
                <a href="https://www.techlivened.com/implementing-caching-in-node-js" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Full Article</a>
              </div>

              {/* Article 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">NumPy vs Pandas in 2024</h3>
                <p className="text-gray-700 mb-4">
                  A comparison of two popular Python libraries for data manipulation and analysis.
                </p>
                <a href="https://www.techlivened.com/numpy-vs-pandas-in-2024" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Full Article</a>
              </div>

              {/* Article 6 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Best AI Tools to Generate Images</h3>
                <p className="text-gray-700 mb-4">
                  An overview of the top AI-powered image generation tools available in the market.
                </p>
                <a href="https://www.techlivened.com/best-ai-tools-to-generate-images" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Full Article</a>
              </div>

              {/* Article 7 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">GitLab Integration: Integrating GitLab with Other Tools and Services</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to integrate GitLab with various development tools and services for improved workflow.
                </p>
                <a href="https://cloudinfrastructureservices.co.uk/gitlab-integration-integrating-gitlab-with-other-tools-and-services/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Full Article</a>
              </div>
            </div>

            {/* Button to Personal Blog */}
            <div className="mt-12 text-center">
              <a href="https://www.techlivened.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
                Check My Personal Blog for More Articles
              </a>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Writing Skills</h2>
            <div className="space-y-12">
              {/* Technical Writing Skills */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Writing</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center">
                    <Image src="/logos/markdown.svg" alt="Markdown" width={40} height={40} />
                    <span className="ml-2 text-gray-700">Markdown</span>
                  </div>
                  <div className="flex items-center">
                    <Image src="/logos/github.svg" alt="GitHub" width={40} height={40} />
                    <span className="ml-2 text-gray-700">GitHub</span>
                  </div>
                  <div className="flex items-center">
                    <Image src="/logos/word.svg" alt="Microsoft Word" width={40} height={40} />
                    <span className="ml-2 text-gray-700">Microsoft Word</span>
                  </div>
                </div>
              </div>

              {/* SEO Skills */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">SEO</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center">
                    <Image src="/logos/ahrefs.svg" alt="Ahrefs" width={40} height={40} />
                    <span className="ml-2 text-gray-700">Ahrefs</span>
                  </div>
                  <div className="flex items-center">
                    <Image src="/logos/google-analytics.svg" alt="Google Analytics" width={40} height={40} />
                    <span className="ml-2 text-gray-700">Google Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Image src="/logos/wordpress.svg" alt="WordPress" width={40} height={40} />
                    <span className="ml-2 text-gray-700">WordPress</span>
                  </div>
                </div>
              </div>

              {/* Content Creation Skills */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center">
                    <Image src="/logos/figma.svg" alt="Figma" width={40} height={40} />
                    <span className="ml-2 text-gray-700">Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}