import ContactPageClient from "@/components/ContactPageClient";
import { webPageSchema, breadcrumbSchema, ORG_ID } from "@/lib/schema";

const pageSchema = webPageSchema({
  url: "https://ivoniz.com/contact",
  name: "Contact Ivoniz LLP | Kozhikode, Kerala",
  description:
    "Get in touch with Ivoniz LLP at HiLITE Business Park, Kozhikode (Calicut), Kerala. Call +91 96457 60023 or +91 81138 47950 (Sales) for web development, app development, and digital marketing enquiries.",
  type: "ContactPage",
});

const pageBreadcrumb = breadcrumbSchema([
  { name: "Contact", url: "https://ivoniz.com/contact" },
]);

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Ivoniz LLP in Kozhikode (Calicut), Kerala for web development, mobile app development, and digital marketing services. Call +91 96457 60023, WhatsApp, or visit us at HiLITE Business Park.",
  alternates: {
    canonical: "https://ivoniz.com/contact",
    languages: {
      "en-IN": "https://ivoniz.com/contact",
      "x-default": "https://ivoniz.com/contact",
    },
  },
  openGraph: {
    title: "Contact Ivoniz LLP | Kozhikode, Kerala",
    description:
      "Get in touch with Ivoniz LLP — HiLITE Business Park, Kozhikode (Calicut), Kerala. Web development, app development, and digital marketing.",
    url: "https://ivoniz.com/contact",
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
    title: "Contact Ivoniz LLP | Kozhikode, Kerala",
    description: "Web development, app development, and digital marketing — HiLITE Business Park, Kozhikode, Kerala.",
    images: ["/ivoniz-og-image.webp"],
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumb) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://ivoniz.com/contact#contactpage",
            mainEntity: { "@id": ORG_ID },
          }),
        }}
      />
      <ContactPageClient />
    </>
  );
}
