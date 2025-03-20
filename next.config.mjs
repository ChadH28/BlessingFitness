/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true, 
  basePath: "/BlessingFitness", // Must match the GitHub repo name exactly
  assetPrefix: "/BlessingFitness/", // Ensures assets load correctly
  images: {
    unoptimized: true, // Required for Next.js static export
  },
};

export default nextConfig;
