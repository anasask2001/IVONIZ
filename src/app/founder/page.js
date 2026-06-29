import FounderPageClient from "@/components/FounderPageClient";
import { webPageSchema, breadcrumbSchema, ORG_ID } from "@/lib/schema";

const pageSchema = webPageSchema({
  url: "https://ivoniz.com/founder",
  name: "Muhammed Anas — Founder & Managing Director, Ivoniz Pvt Ltd",
  description:
    "Muhammed Anas is the Founder and Managing Director of Ivoniz Pvt Ltd, a technology and digital growth company headquartered in Kozhikode (Calicut), Kerala.",
});

const pageBreadcrumb = breadcrumbSchema([
  { name: "Founder", url: "https://ivoniz.com/founder" },
]);

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://ivoniz.com/founder#person",
  name: "Muhammed Anas",
  jobTitle: "Founder & Managing Director",
  worksFor: { "@id": ORG_ID },
  url: "https://ivoniz.com/founder",
  image: "https://ivoniz.com/founder/founder-of-ivoniz.jpg",
};

export const metadata = {
  title: "Founder & Managing Director",
  description:
    "Meet Muhammed Anas, Founder and Managing Director of Ivoniz Pvt Ltd — a technology and digital growth company in Kozhikode (Calicut), Kerala building web, app, and digital marketing solutions.",
  alternates: {
    canonical: "https://ivoniz.com/founder",
    languages: {
      "en-IN": "https://ivoniz.com/founder",
      "x-default": "https://ivoniz.com/founder",
    },
  },
  openGraph: {
    title: "Muhammed Anas — Founder & Managing Director, Ivoniz Pvt Ltd",
    description:
      "Meet the founder of Ivoniz Pvt Ltd — a technology and digital growth company headquartered in Kozhikode (Calicut), Kerala.",
    url: "https://ivoniz.com/founder",
    type: "profile",
    images: [
      {
        url: "/founder/founder-of-ivoniz.jpg",
        width: 800,
        height: 1000,
        alt: "Muhammed Anas — Founder & Managing Director, Ivoniz Pvt Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Anas — Founder & Managing Director, Ivoniz Pvt Ltd",
    description: "Founder and Managing Director of Ivoniz Pvt Ltd, Kozhikode, Kerala.",
    images: ["/founder/founder-of-ivoniz.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function FounderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <FounderPageClient />
    </>
  );
}
