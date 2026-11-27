/* ════════════════════════════════════════════════════════════════
   Blog posts — single source for /blog (index), each article's byline and
   schema, related-post links and sitemap.xml. Add a post here when its page
   (src/app/blog/<slug>/page.js) is added; newest first.
   Rules for every post (strategy brief, Nov 2026): no invented statistics,
   prices only from lib costs.js (labelled as market ranges), legal topics
   only from official sources, no claims of a Gulf office.
   ════════════════════════════════════════════════════════════════ */

export const BLOG_URL = "https://ivoniz.com/blog";

/* Author shown on every post. Person entity is defined on /about/founder. */
export const AUTHOR = {
  name: "Muhammed Anas",
  role: "Founder & Managing Director, Ivoniz LLP",
  href: "/about/founder",
  id: "https://ivoniz.com/about/founder#person",
};

export const POSTS = [
  {
    slug: "web-design-trends-2026",
    title: "Web Design Trends 2026: What Actually Helps a Business Website",
    seoTitle: "Web Design Trends 2026 for Business Websites",
    description:
      "Web design trends for 2026, judged for business websites in Kerala and the Gulf: which trends help bring enquiries, which need care, and which to skip.",
    excerpt: "Which 2026 trends help a business website bring enquiries, which need care, and which are just fashion.",
    published: "2026-11-27",
    updated: "2026-11-27",
    minutes: 7,
    market: "All markets",
    topic: "Design",
  },
  {
    slug: "ai-chatbot-for-business-website",
    title: "AI Chatbots on Business Websites: What They Handle and Where They Fail",
    seoTitle: "AI Chatbots for Business Websites: Worth It?",
    description:
      "Should your business website have an AI chatbot? Rule-based vs AI chatbots, what they handle well, where they fail, and what a useful chatbot needs.",
    excerpt: "When a chatbot genuinely helps, when it frustrates customers, and how to tell which you'd get.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 6,
    market: "UAE + Kerala",
    topic: "AI",
  },
  {
    slug: "ai-automation-small-business",
    title: "AI and Automation for Small Businesses: Where It Actually Saves Time",
    seoTitle: "AI and Automation for Small Businesses",
    description:
      "Practical AI and automation for small businesses in Kerala and the UAE: where it saves time, examples by business type, where AI falls short, and how to start.",
    excerpt: "Automation first, AI where text is the bottleneck, and honest limits.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "Kerala + UAE",
    topic: "AI",
  },
  {
    slug: "cart-abandonment-reasons",
    title: "Why Shoppers Abandon Carts (and How to Win Them Back on WhatsApp)",
    seoTitle: "Why Shoppers Abandon Carts (and How to Fix It)",
    description:
      "Why online shoppers abandon carts, how to prevent it with clear costs, guest checkout and local payment options, and how to recover carts by email and WhatsApp.",
    excerpt: "The fixable reasons people leave at checkout, and reminders that help rather than annoy.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "Kerala + UAE",
    topic: "Ecommerce",
  },
  {
    slug: "product-page-checklist",
    title: "Product Page Checklist: What Buyers Need Before They Add to Cart",
    seoTitle: "Product Page Checklist for Online Stores",
    description:
      "A practical product page checklist for online stores: photos, title and price, descriptions by product type, delivery and returns, reviews, the buy button and search details.",
    excerpt: "Everything a product page needs to replace the shop counter, as a checklist.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 6,
    market: "All markets",
    topic: "Ecommerce",
  },
  {
    slug: "ecommerce-website-no-sales",
    title: "Why Your Online Store Gets Visitors but No Sales",
    seoTitle: "Online Store Gets Visitors but No Sales?",
    description:
      "Why an ecommerce website gets traffic but few orders: wrong visitors, weak product pages, trust, surprise costs, hard checkout and slow mobile pages, and what to fix first.",
    excerpt: "Find the step where buyers stop, then fix that step first.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "Kerala + UAE",
    topic: "Ecommerce",
  },
  {
    slug: "website-for-saudi-arabia-qatar-gcc",
    title: "Taking Your Website into Saudi Arabia, Qatar and the GCC",
    seoTitle: "Website for Saudi Arabia, Qatar and the GCC",
    description:
      "What changes when your website expands into Saudi Arabia, Qatar and the GCC: Arabic, local currencies and VAT, Mada payments, ZATCA e-invoicing, delivery and site structure.",
    excerpt: "Arabic, Mada, VAT, e-invoicing and delivery: what to plan before selling across the border.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "GCC",
    topic: "GCC expansion",
  },
  {
    slug: "payment-gateways-uae",
    title: "Payment Gateways for UAE Online Stores: What to Compare",
    seoTitle: "Payment Gateways for UAE Online Stores",
    description:
      "How to choose a payment gateway for a UAE online store: the options, what to compare, approval documents, pay-later options like Tabby and Tamara, and the order of steps.",
    excerpt: "Approval, platform support, fees and settlement: what to compare, and why to apply early.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "UAE",
    topic: "Ecommerce",
  },
  {
    slug: "is-shopify-good-in-uae",
    title: "Is Shopify Good in the UAE? Payments, Arabic and Delivery",
    seoTitle: "Is Shopify Good in the UAE?",
    description:
      "Is Shopify a good choice for a UAE online store? Payments, cash on delivery, Arabic, delivery, VAT and running costs, and when Shopify is (and isn't) a good fit.",
    excerpt: "Straight answers for UAE sellers: payments first, then COD, Arabic, delivery and costs.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "UAE",
    topic: "Ecommerce",
  },
  {
    slug: "whatsapp-business-uae",
    title: "WhatsApp for Business Enquiries in the UAE: Button, App or API?",
    seoTitle: "WhatsApp for Business Enquiries in the UAE",
    description:
      "How UAE and Kerala businesses can handle WhatsApp enquiries: website buttons, the free WhatsApp Business app, and the Business Platform (API), with costs and rules explained.",
    excerpt: "Website button, Business app or API: which one you need, what it costs, and mistakes that lose enquiries.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "UAE + Kerala",
    topic: "Leads",
  },
  {
    slug: "trustworthy-website-uae",
    title: "What Makes a Business Website Trustworthy to UAE Customers",
    seoTitle: "What Makes a Website Trustworthy in the UAE",
    description:
      "The trust signals UAE customers look for before contacting or paying a business online: licence details, real proof, safe payments, language, and what destroys trust.",
    excerpt: "What cautious UAE buyers check before they call or pay, and the checklist to pass it.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "UAE",
    topic: "UAE business",
  },
  {
    slug: "how-to-track-website-leads",
    title: "How to Track Website Leads: Forms, WhatsApp and Calls in GA4",
    seoTitle: "How to Track Website Leads in GA4",
    description:
      "How to track enquiries from your website in Google Analytics 4: form submissions, WhatsApp and phone clicks as key events, UTM tags, and what tracking can't tell you.",
    excerpt: "Which pages and campaigns actually bring enquiries: what to track, how to set it up, and its limits.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "All markets",
    topic: "Leads",
  },
  {
    slug: "website-redesign-without-losing-rankings",
    title: "Website Redesign Without Losing Your Google Rankings",
    seoTitle: "Redesign Your Website Without Losing Rankings",
    description:
      "How to redesign a website without losing Google rankings: list what ranks, map 301 redirects for every old URL, a launch-day checklist, and what to watch afterwards.",
    excerpt: "Why redesigns lose rankings, and the redirect plan and checks that prevent it.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "All markets",
    topic: "SEO",
  },
  {
    slug: "how-long-does-seo-take",
    title: "How Long Does SEO Take? A Realistic Timeline",
    description:
      "How long SEO takes to show results: realistic timelines by type of work, what makes it faster or slower, what to expect for a new website, and warning signs.",
    excerpt: "Weeks for some fixes, months for competitive searches: a breakdown you can judge progress against.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "All markets",
    topic: "SEO",
  },
  {
    slug: "seo-vs-google-ads",
    title: "SEO or Google Ads: Which Should a Small Business Start With?",
    seoTitle: "SEO or Google Ads: Which Should You Start With?",
    description:
      "SEO vs Google Ads for small businesses in Kerala and the UAE: how each works, real click-cost examples, when each should come first, and how to use both.",
    excerpt: "Ads are fast and stop when you stop paying; SEO is slow and keeps working. How to choose.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "Kerala + UAE",
    topic: "SEO",
  },
  {
    slug: "local-seo-kerala-guide",
    title: "Local SEO for Kerala Businesses: A Practical Guide",
    seoTitle: "Local SEO for Kerala Businesses: A Guide",
    description:
      "Local SEO for businesses in Kerala: Google Business Profile, website, consistent listings and reviews, plus Calicut/Kozhikode naming, Malayalam searches and a 30-day plan.",
    excerpt: "Getting found by nearby customers in Kozhikode, Malappuram and across Kerala, with a 30-day plan.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "Kerala",
    topic: "Local SEO",
  },
  {
    slug: "website-maintenance-cost",
    title: "Website Maintenance: What It Includes and What It Costs",
    seoTitle: "Website Maintenance Cost: What's Included",
    description:
      "What website maintenance includes, typical costs for static, WordPress and ecommerce sites in Kerala and the UAE, what happens if you skip it, and how to choose a plan.",
    excerpt: "The cost everyone forgets: what's in a plan, why it varies by site type, and what to ask for.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "Kerala + UAE",
    topic: "Pricing",
  },
  {
    slug: "how-to-make-a-website-that-gets-enquiries",
    title: "How to Make a Website That Turns Visitors into Enquiries",
    seoTitle: "How to Get More Enquiries From Your Website",
    description:
      "Practical ways to get more enquiries from a website: one action per page, button placement and wording, pre-filled WhatsApp links, shorter forms and answering doubts.",
    excerpt: "One clear action per page, WhatsApp in one tap, shorter forms, and doubts answered next to the button.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "All markets",
    topic: "Leads",
  },
  {
    slug: "what-a-business-website-should-include",
    title: "What a Business Website Should Include: Page-by-Page Checklist",
    seoTitle: "What a Business Website Should Include",
    description:
      "Which pages a small business website needs and what goes on each: homepage, service pages, about, work, contact, behind-the-scenes setup, and what to skip.",
    excerpt: "The pages worth having, what each should say, and what you can leave out.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "Kerala + UAE",
    topic: "Website basics",
  },
  {
    slug: "do-you-need-a-website-if-you-have-instagram",
    title: "Do You Need a Website if You Have Instagram and WhatsApp?",
    seoTitle: "Do You Need a Website if You Have Instagram?",
    description:
      "Instagram, WhatsApp Business and a website compared for small businesses: what each does well, what Instagram can't do, and when Instagram alone is enough.",
    excerpt: "An honest answer for businesses selling on Instagram and WhatsApp, including when you don't need a website yet.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 6,
    market: "Kerala",
    topic: "Website basics",
  },
  {
    slug: "signs-you-need-a-new-website",
    title: "7 Signs Your Business Needs a New Website",
    description:
      "Seven signs your business website needs attention, from mobile problems to security warnings, and for each, whether a fix is enough or a rebuild makes sense.",
    excerpt: "Seven warning signs, and an honest call on fix vs rebuild for each.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 6,
    market: "Kerala",
    topic: "Website basics",
  },
  {
    slug: "who-owns-your-website-domain-hosting",
    title: "Who Owns Your Website? Domain, Hosting and Logins Explained",
    seoTitle: "Who Owns Your Website, Domain and Hosting?",
    description:
      "Locked out of your own website? How to check who owns your domain, hosting and logins, what to do if your developer disappeared, and a handover checklist.",
    excerpt: "Paying for a website doesn't make you its owner. What to check today, and how to get control back.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "Kerala + UAE",
    topic: "Website basics",
  },
  {
    slug: "cheap-vs-professional-website",
    title: "Cheap vs Professional Website: What You're Actually Paying For",
    seoTitle: "Cheap vs Professional Website: What You Pay For",
    description:
      "Why website quotes range from ₹10,000 to ₹1,00,000+, what each price usually includes, the costs cheap builds add later, and when cheap is the right choice.",
    excerpt: "Same word, different product: where the money goes, and the questions to ask any quote.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "Kerala",
    topic: "Pricing",
  },
  {
    slug: "google-business-profile-not-showing",
    title: "Google Business Profile Not Showing? Causes and Fixes",
    seoTitle: "Google Business Profile Not Showing? Fixes",
    description:
      "Why your Google Business Profile isn't showing on Google Maps or search: verification, suspension, duplicates, and why it shows by name but not for your service.",
    excerpt: "Not showing at all, or showing but not ranking? How to tell, and what to fix for each.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "Kerala + UAE",
    topic: "Local SEO",
  },
  {
    slug: "why-website-not-showing-on-google",
    title: "Why Your Website Isn't Showing on Google (and How to Check)",
    seoTitle: "Why Your Website Isn't Showing on Google",
    description:
      "Why your website isn't showing on Google: indexing vs ranking, the 2-minute check, settings that block Google on WordPress, Shopify and Wix, and how long it takes.",
    excerpt: "Not indexed or not ranking? A 2-minute check, then the causes and fixes for each.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 7,
    market: "All markets",
    topic: "SEO",
  },
  {
    slug: "why-website-not-generating-leads",
    title: "Why Your Website Isn't Generating Leads (and What to Fix First)",
    seoTitle: "Why Your Website Isn't Generating Leads",
    description:
      "Why a business website gets visitors but no enquiries: broken forms, unclear offers, thin service pages, missing trust, hard-to-reach WhatsApp, and what to fix first.",
    excerpt: "Traffic problem or conversion problem? How to tell, and the order to fix things in.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "Kerala + UAE",
    topic: "Leads",
  },
  {
    slug: "arabic-english-bilingual-website-guide",
    title: "Arabic + English Websites: A Practical Guide",
    description:
      "How to build an English and Arabic website properly: page planning, URLs, language tags, right-to-left layout, mixed text, Arabic fonts, Arabic SEO and a launch checklist.",
    excerpt: "URLs, language tags, right-to-left layout, fonts and Arabic SEO, in the order we deal with them on real projects.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 9,
    market: "GCC",
    topic: "Arabic websites",
  },
  {
    slug: "best-ecommerce-platform-uae",
    title: "Best Ecommerce Platform in the UAE: Shopify vs WooCommerce",
    seoTitle: "Best Ecommerce Platform in the UAE",
    description:
      "Which ecommerce platform is best for a UAE store: Shopify, WooCommerce or a custom build compared on cost, control, Arabic, payments and day-to-day running.",
    excerpt: "No single winner: how to choose by who runs the store, which gateway approves you, Arabic and your monthly budget.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "UAE",
    topic: "Ecommerce",
  },
  {
    slug: "ecommerce-website-cost-uae",
    title: "Ecommerce Website Cost in the UAE: Build + Running Costs",
    seoTitle: "Ecommerce Website Cost in the UAE (2026)",
    description:
      "Ecommerce website price in Dubai and the UAE: typical AED build ranges, monthly fees, payment and delivery charges per order, VAT, and a first-year budget worksheet.",
    excerpt: "Build cost is only the start. Monthly fees, per-order charges and VAT, with a worksheet to fill in.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "UAE",
    topic: "Pricing",
  },
  {
    slug: "website-development-cost-dubai-uae",
    title: "Website Development Cost in Dubai & the UAE (2026 Guide)",
    seoTitle: "Website Development Cost in Dubai & UAE (2026)",
    description:
      "Website design price in Dubai and website development cost in the UAE for 2026: typical AED ranges for business sites, stores and portals, and the running costs.",
    excerpt: "Typical AED ranges by website type, what pushes a quote up, and the yearly costs most quotes leave out.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 8,
    market: "UAE",
    topic: "Pricing",
  },
  {
    slug: "how-to-choose-web-design-company-dubai",
    title: "How to Choose a Web Design Company in Dubai: 12 Checks",
    seoTitle: "How to Choose a Web Design Company in Dubai",
    description:
      "How to choose a web design company in Dubai: what to check in the portfolio, the quote and the contract, the questions to ask, and when a remote team makes sense.",
    excerpt: "What to check in the portfolio, the quote and the contract, and the questions that show who you're really hiring.",
    published: "2026-11-26",
    updated: "2026-11-26",
    minutes: 9,
    market: "UAE",
    topic: "Hiring",
  },
];

export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug);

/* "26 November 2026" */
export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/* Next.js metadata for a post, from its entry above. */
export function postMetadata(slug) {
  const p = postBySlug(slug);
  const url = `${BLOG_URL}/${p.slug}`;
  return {
    title: { absolute: `${p.seoTitle || p.title} | Ivoniz LLP` },
    description: p.description,
    alternates: { canonical: url },
    authors: [{ name: AUTHOR.name, url: `https://ivoniz.com${AUTHOR.href}` }],
    openGraph: {
      siteName: "Ivoniz LLP",
      title: p.title,
      description: p.description,
      url,
      type: "article",
      publishedTime: p.published,
      modifiedTime: p.updated,
      authors: [AUTHOR.name],
      images: [{ url: "/ivoniz-og-image.webp", width: 1734, height: 907, alt: p.title }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/ivoniz-og-image.webp"] },
    robots: { index: true, follow: true },
  };
}
