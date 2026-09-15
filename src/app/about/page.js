import AboutPageClient from "@/components/AboutPageClient";
import { breadcrumbSchema } from "@/lib/schema";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Ivoniz",
  url: "https://ivoniz.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Ivoniz LLP",
    url: "https://ivoniz.com",
    founder: { "@type": "Person", name: "Muhammed Anas" },
    description:
      "Ivoniz LLP is a technology and digital growth company dedicated to helping businesses transform ideas into successful digital products through design, development, and marketing.",
  },
};

const pageBreadcrumb = breadcrumbSchema([
  { name: "About", url: "https://ivoniz.com/about" },
]);

export const metadata = {
  title: "About Us",
  description:
    "Ivoniz LLP is a technology and digital growth company headquartered in Kozhikode (Calicut), Kerala — helping businesses design, build, and market digital products that get results.",
  alternates: {
    canonical: "https://ivoniz.com/about",
    languages: {
      "en-IN": "https://ivoniz.com/about",
      "x-default": "https://ivoniz.com/about",
    },
  },
  openGraph: {
    title: "About Ivoniz LLP | Kozhikode, Kerala",
    description:
      "A technology partner, not just a vendor — Ivoniz LLP designs, builds, and markets digital products for businesses across Kerala.",
    url: "https://ivoniz.com/about",
    type: "website",
    images: [
      {
        url: "/ivoniz-og-image.webp",
        width: 1734,
        height: 907,
        alt: "Ivoniz LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ivoniz LLP | Kozhikode, Kerala",
    description: "A technology and digital growth company in Kozhikode (Calicut), Kerala.",
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumb) }} />
      <AboutPageClient />
    </>
  );
}
