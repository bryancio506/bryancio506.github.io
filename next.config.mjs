/** @type {import('next').NextConfig} */
// Static export so the site can be hosted on GitHub Pages (bryancio506.github.io).
// For a project page (username.github.io/repo) set NEXT_PUBLIC_BASE_PATH=/repo.
// For the user root site (bryancio506.github.io) leave it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
