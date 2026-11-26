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
    // OFF since 27 Nov 2026. When true, Next.js put the whole stylesheet into
    // every page TWICE (a <style> tag plus a copy in the RSC payload): ~226 KB
    // of each page's HTML. Off = one cached CSS file. Measured on the local
    // build (Lighthouse mobile): HTML transfer -45% per page, first paint
    // unchanged within noise. Trade-off: PageSpeed lists the CSS file under
    // "render-blocking requests" again. Set back to true to revert.
    inlineCss: false,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
