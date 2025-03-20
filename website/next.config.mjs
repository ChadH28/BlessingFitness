/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  basePath: "/BlessingFitness", // Matches your GitHub repo name
  assetPrefix: "/BlessingFitness/", // Ensures assets load correctly
};

export default nextConfig;
