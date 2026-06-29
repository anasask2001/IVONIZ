import Script from "next/script";
import { Geist, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RightQuickActions from "@/components/RightQuickActions";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable : "--font-open-sans",
  subsets  : ["latin"],
  weight   : ["300", "400", "600"],
});

export const metadata = {
  metadataBase: new URL("https://ivoniz.com"),

  title: {
    default: "Ivoniz Pvt Ltd | Web & App Development Company in Kerala",
    template: "%s | Ivoniz Pvt Ltd",
  },
  description: "Ivoniz Pvt Ltd is a leading web development, mobile app development, and digital marketing company in Kozhikode, Kerala. We build scalable apps, websites, and AI tools to grow your business.",
  keywords: [
    "mobile app development", "web development", "AI tools",
    "Flutter", "React Native", "Next.js", "UI UX Design",
    "Kozhikode", "Kerala", "India",
  ],
  authors: [{ name: "Ivoniz Technologies Pvt Ltd", url: "https://ivoniz.com" }],
  creator: "Ivoniz Technologies Pvt Ltd",
  publisher: "Ivoniz Technologies Pvt Ltd",
  applicationName: "Ivoniz Pvt Ltd",

  alternates: {
    canonical: "https://ivoniz.com",
    languages: {
      "en-IN": "https://ivoniz.com",
      "x-default": "https://ivoniz.com",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ivoniz.com",
    siteName: "Ivoniz Pvt Ltd",
    title: "Ivoniz Pvt Ltd | Web & App Development Company in Kerala",
    description: "Ivoniz Pvt Ltd is a leading web development, mobile app development, and digital marketing company in Kozhikode, Kerala. We build scalable apps, websites, and AI tools to grow your business.",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Ivoniz Pvt Ltd — Web & App Development Company in Kerala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ivoniz Pvt Ltd | Web & App Development Company in Kerala",
    description: "Leading web development, mobile app development, and digital marketing company in Kozhikode, Kerala.",
    images: ["/web-app-manifest-512x512.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  appleWebApp: {
    capable: true,
    title: "Ivoniz Pvt Ltd",
    statusBarStyle: "black-translucent",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${openSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* ── Skip navigation — first focusable element for keyboard/screen-reader users ── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:px-5 focus:py-3 focus:rounded-full focus:bg-black focus:text-white focus:text-sm focus:font-semibold focus:shadow-2xl"
        >
          Skip to main content
        </a>

        {/* ── Google Tag Manager (noscript) ── */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBMJNB28"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {/* ── Google Tag Manager — deferred until after hydration ── */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBMJNB28');
          `}
        </Script>

        {/* ── Sitewide JSON-LD — Organization/LocalBusiness + WebSite ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* ── Google Analytics (gtag.js) — deferred until after hydration ── */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZJKMLK68Z3" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZJKMLK68Z3');
          `}
        </Script>

        <Navbar/>
        {children}
        <RightQuickActions/>
        <ChatWidgetLoader/>
      </body>
    </html>
  );
}
