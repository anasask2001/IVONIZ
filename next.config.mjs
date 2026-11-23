/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: NEXT_DIST_DIR=.next-build lets a production build run without
  // touching the .next folder a running `next dev` is using.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  images: {
    // Static export has no image server: src/lib/imageLoader.js picks a
    // pre-sized file (e.g. 640px portfolio screenshots) for each width.
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.js",
  },
  reactCompiler: true,
  experimental: {
    // Inline the (13 KB gzipped) stylesheet into each page instead of a
    // render-blocking <link> request (PageSpeed "render-blocking requests").
    inlineCss: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
