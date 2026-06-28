import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

const pageSchema = webPageSchema({
  url: "https://ivoniz.com/about",
  name: "About Ivoniz | Design. Build. Market.",
  description:
    "Ivoniz Pvt Ltd is a technology and digital growth company helping businesses launch, grow, and scale through design, web & mobile development, AI automation, and digital marketing.",
});

const pageBreadcrumb = breadcrumbSchema([
  { name: "About", url: "https://ivoniz.com/about" },
]);

export const metadata = {
  title: "About Us | Design. Build. Market.",
  description:
    "Ivoniz Pvt Ltd is a technology and digital growth company helping businesses launch, grow, and scale through design, web & mobile development, AI automation, and digital marketing.",
  alternates: {
    canonical: "https://ivoniz.com/about",
    languages: {
      "en-IN": "https://ivoniz.com/about",
      "x-default": "https://ivoniz.com/about",
    },
  },
  openGraph: {
    title: "About Ivoniz | Design. Build. Market.",
    description:
      "We help businesses transform ideas into successful digital products — through strategic design, modern development, and results-driven marketing.",
    url: "https://ivoniz.com/about",
    type: "website",
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
    title: "About Ivoniz | Design. Build. Market.",
    description: "Ivoniz Pvt Ltd is a technology and digital growth company based in Kozhikode, Kerala.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumb) }} />
      {children}
    </>
  );
}
