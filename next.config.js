/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["www.google.co.uk", 'www.unsplash.com', 'i.imgur.com']
  }
}

module.exports = nextConfig
