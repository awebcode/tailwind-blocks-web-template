/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "source.unsplash.com",
      "cloudinary.com",
      "dummyimage.com",
      "img.freepik.com",
      ],
      unoptimized: true 
  },
};

module.exports = nextConfig
