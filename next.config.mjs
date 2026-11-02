/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/software-engineering",
        destination: "/work",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
