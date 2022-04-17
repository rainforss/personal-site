/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/blogs/pages/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
