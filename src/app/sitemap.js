export const dynamic = "force-static";

const BASE_URL = "https://ivoniz.com";

export default function sitemap() {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/works", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/founder", priority: 0.5, changeFrequency: "monthly" },
    { path: "/best-digital-marketing-company-in-calicut", priority: 0.95, changeFrequency: "weekly" },
    { path: "/best-website-development-company-in-calicut", priority: 0.95, changeFrequency: "weekly" },
    { path: "/best-digital-marketing-company-in-kochi", priority: 0.9, changeFrequency: "weekly" },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
