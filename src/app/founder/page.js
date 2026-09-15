import FounderPageClient from "@/components/FounderPageClient";
import { webPageSchema, breadcrumbSchema, ORG_ID } from "@/lib/schema";

const pageSchema = webPageSchema({
  url: "https://ivoniz.com/founder",
  name: "Muhammed Anas — Founder & Managing Director, Ivoniz LLP",
  description:
    "Muhammed Anas is the Founder and Managing Director of Ivoniz LLP, a technology and digital growth company headquartered in Kozhikode (Calicut), Kerala.",
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
  image: {
    "@type": "ImageObject",
    url: "https://ivoniz.com/founder/founder-of-ivoniz.jpg",
    width: 800,
    height: 1000,
  },
};

/* FAQ data — targets "who is the founder/owner" style queries directly,
   so search engines and AI answer engines can quote it verbatim. */
const FAQS = [
  {
    q: "Who is the founder of Ivoniz LLP?",
    a: "Muhammed Anas is the Founder and Managing Director of Ivoniz LLP (Ivoniz Technologies LLP), a technology and digital growth company headquartered in Kozhikode (Calicut), Kerala, India.",
  },
  {
    q: "Who is the owner of Ivoniz?",
    a: "Ivoniz LLP is owned and led by Muhammed Anas, who founded the company and continues to serve as its Founder and Managing Director.",
  },
  {
    q: "Who is the CEO or Managing Director of Ivoniz?",
    a: "Muhammed Anas holds the role of Founder and Managing Director at Ivoniz LLP, overseeing the company's web development, mobile app development, digital marketing, and AI solutions teams.",
  },
  {
    q: "What is Muhammed Anas's background before founding Ivoniz?",
    a: "Muhammed Anas completed his Bachelor of Commerce (B.Com) before moving into technology through self-learning and hands-on project work, eventually founding Ivoniz LLP to help businesses use technology strategically.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const metadata = {
  title: "Founder & Managing Director — Muhammed Anas",
  description:
    "Meet Muhammed Anas, Founder and Managing Director of Ivoniz LLP, a technology and digital growth company based in Kozhikode, Kerala.",
  alternates: {
    canonical: "https://ivoniz.com/founder",
    languages: {
      "en-IN": "https://ivoniz.com/founder",
      "x-default": "https://ivoniz.com/founder",
    },
  },
  openGraph: {
    title: "Muhammed Anas — Founder & Managing Director, Ivoniz LLP",
    description:
      "Meet the founder of Ivoniz LLP — a technology and digital growth company headquartered in Kozhikode (Calicut), Kerala.",
    url: "https://ivoniz.com/founder",
    type: "profile",
    images: [
      {
        url: "/founder/founder-of-ivoniz.jpg",
        width: 800,
        height: 1000,
        alt: "Muhammed Anas — Founder & Managing Director, Ivoniz LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Anas — Founder & Managing Director, Ivoniz LLP",
    description: "Founder and Managing Director of Ivoniz LLP, Kozhikode, Kerala.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FounderPageClient faqs={FAQS} />
    </>
  );
}
