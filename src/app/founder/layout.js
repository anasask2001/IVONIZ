import { webPageSchema, breadcrumbSchema, ORG_ID } from "@/lib/schema";

const pageSchema = webPageSchema({
  url: "https://ivoniz.com/founder",
  name: "Our Founder | Ivoniz Pvt Ltd",
  description:
    "Meet Muhammed Anas, founder of Ivoniz Pvt Ltd, a technology and digital growth company based in Kozhikode, Kerala.",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammed Anas",
  jobTitle: "Founder",
  worksFor: { "@id": ORG_ID },
  url: "https://ivoniz.com/founder",
};

const pageBreadcrumb = breadcrumbSchema([
  { name: "Founder", url: "https://ivoniz.com/founder" },
]);

export const metadata = {
  title: "Our Founder",
  description:
    "Meet Muhammed Anas, the founder of Ivoniz Pvt Ltd — building galaxies of possibilities in web development, mobile apps, AI, and digital marketing from Kozhikode, Kerala.",
  alternates: {
    canonical: "https://ivoniz.com/founder",
    languages: {
      "en-IN": "https://ivoniz.com/founder",
      "x-default": "https://ivoniz.com/founder",
    },
  },
  openGraph: {
    title: "Our Founder | Ivoniz Pvt Ltd",
    description:
      "Meet Muhammed Anas, founder of Ivoniz Pvt Ltd, a technology and digital growth company based in Kozhikode, Kerala.",
    url: "https://ivoniz.com/founder",
    type: "profile",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Ivoniz Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Founder | Ivoniz Pvt Ltd",
    description: "Meet Muhammed Anas, founder of Ivoniz Pvt Ltd.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: { index: true, follow: true },
};

export default function FounderLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumb) }} />
      {children}
    </>
  );
}
