/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Exports as static HTML
  trailingSlash: true, // Ensures URLs have trailing slashes
  basePath: "/BlessingFitness", // GitHub repo name (used for paths)
  assetPrefix: "/BlessingFitness/", // For assets to load correctly on GitHub Pages
};

export default nextConfig;
