export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ivoniz Pvt Ltd for web development, mobile app development, digital marketing, and AI solutions. Call, WhatsApp, or send us your project details for a free consultation.",
  alternates: {
    canonical: "https://ivoniz.com/contact",
    languages: {
      "en-IN": "https://ivoniz.com/contact",
      "x-default": "https://ivoniz.com/contact",
    },
  },
  openGraph: {
    title: "Contact Ivoniz Pvt Ltd",
    description:
      "Reach out to Ivoniz for web development, mobile apps, digital marketing, and AI solutions. Free consultation available.",
    url: "https://ivoniz.com/contact",
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
    title: "Contact Ivoniz Pvt Ltd",
    description: "Get in touch for web development, mobile apps, digital marketing, and AI solutions.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }) {
  return children;
}
