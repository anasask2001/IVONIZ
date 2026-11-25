import { execSync } from "node:child_process";
import { CLIENTS } from "@/lib/clients";

export const dynamic = "force-static";

const BASE_URL = "https://ivoniz.com";

/* lastmod = date of the last git commit that touched the page's source file,
   so Google only sees a new date when the page really changed. Falls back to
   the build time when git history isn't available. CI needs full history
   for this (actions/checkout with fetch-depth: 0). */
function lastModified(file) {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${file}"`, { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
    if (iso) return new Date(iso);
  } catch {}
  return new Date();
}

const routes = [
  { path: "/", file: "src/app/page.js", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", file: "src/components/AboutPageClient.jsx", priority: 0.8, changeFrequency: "monthly" },
  { path: "/works", file: "src/app/works/page.js", priority: 0.8, changeFrequency: "weekly" },
  { path: "/clients", priority: 0.75, changeFrequency: "monthly" },
  { path: "/contact", file: "src/components/ContactPageClient.jsx", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/founder",
    file: "src/components/FounderPageClient.jsx",
    priority: 0.5,
    changeFrequency: "monthly",
    images: [`${BASE_URL}/founder/founder-of-ivoniz.jpg`],
  },
  { path: "/best-digital-marketing-company-in-calicut", priority: 0.95, changeFrequency: "weekly" },
  { path: "/best-website-development-company-in-calicut", priority: 0.95, changeFrequency: "weekly" },
  { path: "/best-digital-marketing-company-in-kochi", priority: 0.9, changeFrequency: "weekly" },
  { path: "/website-development", priority: 0.95, changeFrequency: "weekly" },
  { path: "/ecommerce-website-development", priority: 0.9, changeFrequency: "weekly" },
  { path: "/woocommerce-website-development", priority: 0.85, changeFrequency: "weekly" },
  { path: "/wordpress-website-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/static-website-development", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mobile-app-development", priority: 0.95, changeFrequency: "weekly" },
  { path: "/flutter-app-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/ios-app-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/android-app-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/native-app-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/software-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/erp-software-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/crm-software-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/billing-software-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/catalogue-website-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/web-portal-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/custom-website-vs-wordpress", priority: 0.85, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

/* One case-study page per portfolio project (/works/<slug>). */
const projectRoutes = CLIENTS.map((c) => ({
  path: `/works/${c.slug}`,
  file: "src/lib/clients.js",
  priority: 0.6,
  changeFrequency: "monthly",
  images: [`${BASE_URL}${c.image}`],
}));

export default function sitemap() {
  return [...routes, ...projectRoutes].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: lastModified(route.file || `src/app${route.path}/page.js`),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images ? { images: route.images } : {}),
  }));
}
