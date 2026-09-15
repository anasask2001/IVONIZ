/* ════════════════════════════════════════════════════════════════
   Shared JSON-LD building blocks — single source of truth for the
   entity IDs every page's structured data references.
   ════════════════════════════════════════════════════════════════ */

export const ORG_ID = "https://ivoniz.com/#organization";
export const WEBSITE_ID = "https://ivoniz.com/#website";

/* Organization + LocalBusiness — rendered once, sitewide, in the
   root layout. Every page-level schema (Service, FAQ, WebPage, ...)
   references this entity by @id rather than redefining it. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": ORG_ID,
  name: "Ivoniz LLP",
  legalName: "Ivoniz Technologies LLP",
  alternateName: ["Ivoniz", "Ivoniz Technologies"],
  description:
    "Ivoniz LLP is a technology and digital growth company in Kozhikode, Kerala, offering website development, mobile app development, digital marketing, branding, and AI solutions.",
  url: "https://ivoniz.com",
  logo: "https://ivoniz.com/icons/ivoniz-logo1.png",
  image: "https://ivoniz.com/icons/ivoniz-logo1.png",
  telephone: "+919645760023",
  email: "info@ivoniz.com",
  priceRange: "₹₹",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919645760023",
      contactType: "customer service",
      email: "info@ivoniz.com",
      areaServed: "IN",
      availableLanguage: ["en", "ml"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+918113847950",
      contactType: "sales",
      email: "sales@ivoniz.com",
      areaServed: "IN",
      availableLanguage: ["en", "ml"],
    },
  ],
  founder: {
    "@type": "Person",
    "@id": "https://ivoniz.com/founder#person",
    name: "Muhammed Anas",
    jobTitle: "Founder & Managing Director",
    url: "https://ivoniz.com/founder",
    image: {
      "@type": "ImageObject",
      url: "https://ivoniz.com/founder/founder-of-ivoniz.jpg",
      width: 800,
      height: 1000,
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "7th Floor, Phase 1, HiLITE Business Park",
    addressLocality: "Kozhikode",
    addressRegion: "Kerala",
    postalCode: "673001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.247798588931074,
    longitude: 75.83147697481216,
  },
  areaServed: [
    { "@type": "City", name: "Kozhikode" },
    { "@type": "City", name: "Kochi" },
    { "@type": "City", name: "Thrissur" },
    { "@type": "City", name: "Malappuram" },
    { "@type": "City", name: "Kannur" },
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
  ],
  hasMap: "https://maps.app.goo.gl/q6C1CnZSwnbcX2R47",
  sameAs: [
    "https://maps.app.goo.gl/q6C1CnZSwnbcX2R47",
    "https://www.instagram.com/ivoniz.llp/",
    "https://www.instagram.com/ivoniz.media/",
    "https://www.instagram.com/ivoniz.official/",
    "https://www.facebook.com/profile.php?id=61579264607681",
    "https://www.linkedin.com/company/ivoniz-llp/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "7",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Ivoniz LLP",
  url: "https://ivoniz.com",
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

/* Builds a WebPage (or subtype, e.g. ContactPage) schema for a single page. */
export function webPageSchema({ url, name, description, type = "WebPage" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/* Builds a BreadcrumbList from an array of { name, url } steps,
   always starting from Home. */
export function breadcrumbSchema(steps) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ivoniz.com/" },
      ...steps.map((step, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: step.name,
        item: step.url,
      })),
    ],
  };
}
