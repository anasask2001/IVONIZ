export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      /* AI / answer-engine crawlers — explicitly allowed for GEO (Generative
         Engine Optimization) so AI Overviews, ChatGPT, Perplexity, etc. can
         crawl and cite Ivoniz's pages. */
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://ivoniz.com/sitemap.xml",
  };
}
