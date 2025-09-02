/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // generates static HTML export
  images: {
    unoptimized: true         // disables image optimization (needed for GitHub Pages)
  },
  basePath: '/caseForge2025'  // repository name as basePath
};

export default nextConfig;

