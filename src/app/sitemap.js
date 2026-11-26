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
    const iso = execSync(`git log -1 --follow --format=%cI -- "${file}"`, { stdio: ["ignore", "pipe", "ignore"] })
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
    path: "/about/founder",
    file: "src/components/FounderPageClient.jsx",
    priority: 0.5,
    changeFrequency: "monthly",
    images: [`${BASE_URL}/founder/founder-of-ivoniz.jpg`],
  },
  { path: "/digital-marketing", priority: 0.95, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services/local-seo-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services/technical-seo-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services/on-page-seo-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services/off-page-seo-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services/ecommerce-seo-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services/seo-audit-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/seo-services/seo-services-dubai", priority: 0.85, changeFrequency: "monthly" },
  { path: "/digital-marketing/social-media-marketing", priority: 0.95, changeFrequency: "weekly" },
  { path: "/digital-marketing/social-media-marketing/instagram-marketing-services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/social-media-marketing/social-media-management", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/social-media-marketing/social-media-advertising", priority: 0.9, changeFrequency: "weekly" },
  { path: "/digital-marketing/social-media-marketing/social-media-content-creation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/website-development/best-website-development-company-in-calicut", priority: 0.95, changeFrequency: "weekly" },
  { path: "/website-development", priority: 0.95, changeFrequency: "weekly" },
  { path: "/website-development/ecommerce-website-development", priority: 0.9, changeFrequency: "weekly" },
  { path: "/website-development/ecommerce-website-development/woocommerce-website-development", priority: 0.85, changeFrequency: "weekly" },
  { path: "/website-development/wordpress-website-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/website-development/static-website-development", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mobile-app-development", priority: 0.95, changeFrequency: "weekly" },
  { path: "/mobile-app-development/flutter-app-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/mobile-app-development/ios-app-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/mobile-app-development/android-app-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mobile-app-development/native-app-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/mobile-app-development/app-development-cost-in-kerala", priority: 0.8, changeFrequency: "monthly" },
  { path: "/software-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/software-development/erp-software-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/software-development/crm-software-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/software-development/billing-software-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/website-development/catalogue-website-development", priority: 0.8, changeFrequency: "monthly" },
  { path: "/website-development/web-portal-development", priority: 0.85, changeFrequency: "monthly" },
  { path: "/website-development/custom-website-vs-wordpress", priority: 0.85, changeFrequency: "monthly" },
  { path: "/website-development/website-development-cost-in-kerala", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/site-map", priority: 0.3, changeFrequency: "monthly" },
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
