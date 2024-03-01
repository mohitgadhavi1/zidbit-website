/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "s3.eu-central-1.amazonaws.com",
      "coinranking.com",
    ],
  },
};

module.exports = nextConfig;
