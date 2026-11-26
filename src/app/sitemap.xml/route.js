import { sitemapEntries } from "@/lib/sitemapRoutes";

/* /sitemap.xml — the standard XML sitemap search engines read, plus a
   CSS stylesheet (public/sitemap.css) so a person opening it in a browser sees
   a designed page instead of the raw XML tree. Crawlers ignore it. (XSLT is
   not used: Chrome removed XSLT support, so it would show a warning.) Written to out/sitemap.xml at build time (static export). */
export const dynamic = "force-static";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const urls = sitemapEntries()
    .map((e) => {
      const images = (e.images || []).map((img) => `\n    <image:image><image:loc>${esc(img)}</image:loc></image:image>`).join("");
      return `  <url>
    <loc>${esc(e.url)}</loc>
    <lastmod>${e.lastModified.toISOString().slice(0, 10)}</lastmod>
    <changefreq>${e.changeFrequency}</changefreq>
    <priority>${e.priority}</priority>${images}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="/sitemap.css"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
