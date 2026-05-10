/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable gzip/brotli compression
  compress: true,

  images: {
    // Serve modern formats automatically
    formats: ["image/avif", "image/webp"],
    // Limit generated sizes to what we actually use
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  },

  // Reduce unused polyfills and improve tree-shaking
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
  },
};

export default nextConfig;
