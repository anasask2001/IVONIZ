import Script from "next/script";
import { Geist, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import RightQuickActions from "@/components/RightQuickActions";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import LeadPopup from "@/components/LeadPopup";
import AnalyticsRouteTracker from "@/components/AnalyticsRouteTracker";
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
    default: "Ivoniz LLP | Web & App Development Company in Kerala",
    template: "%s | Ivoniz LLP",
  },
  description: "Ivoniz LLP is a web development, mobile app development, and digital marketing company in Kozhikode, Kerala — scalable apps, websites, and AI tools.",
  keywords: [
    "mobile app development", "web development", "AI tools",
    "Flutter", "React Native", "Next.js", "UI UX Design",
    "Kozhikode", "Kerala", "India",
  ],
  authors: [{ name: "Ivoniz LLP", url: "https://ivoniz.com" }],
  creator: "Ivoniz LLP",
  publisher: "Ivoniz LLP",
  applicationName: "Ivoniz LLP",

  // Homepage canonical (page.js is a client component, so it cannot export metadata).
  alternates: { canonical: "https://ivoniz.com" },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ivoniz.com",
    siteName: "Ivoniz LLP",
    title: "Ivoniz LLP | Web & App Development Company in Kerala",
    description: "Ivoniz LLP is a web development, mobile app development, and digital marketing company in Kozhikode, Kerala — scalable apps, websites, and AI tools.",
    images: [
      {
        url: "/ivoniz-og-image.webp",
        width: 1734,
        height: 907,
        alt: "Ivoniz LLP — Web & App Development Company in Kerala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ivoniz LLP | Web & App Development Company in Kerala",
    description: "Leading web development, mobile app development, and digital marketing company in Kozhikode, Kerala.",
    images: ["/ivoniz-og-image.webp"],
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
    title: "Ivoniz LLP",
    statusBarStyle: "black-translucent",
  },

  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kozhikode (Calicut), Kerala",
    "geo.position": "11.247798588931074;75.83147697481216",
    ICBM: "11.247798588931074, 75.83147697481216",
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

        {/* ── Sitewide JSON-LD — Organization/LocalBusiness + WebSite ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* ── Analytics: Google Analytics 4 + Meta Pixel, loaded on first interaction ──
            The gtag/fbq queue stubs are defined straight away, so the page view and any
            early clicks are queued and sent the moment the real scripts arrive. The
            scripts themselves (~400 KB) load on the visitor's first scroll, tap, key
            press or mouse move, keeping them off the critical path for real users and
            PageSpeed alike. Visits with zero interaction are not tracked.
            (GTM-KBMJNB28 was removed on 2026-11-23: the container had no tags. To use
            GTM again, add its loader inside load() below.) */}
        <Script id="analytics-init" strategy="afterInteractive">
          {`
            (function(w,d){
              w.dataLayer = w.dataLayer || [];
              w.gtag = w.gtag || function(){ w.dataLayer.push(arguments); };
              gtag('js', new Date());
              gtag('config', 'G-ZJKMLK68Z3');

              if (!w.fbq) {
                var n = w.fbq = function(){ n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
                if (!w._fbq) w._fbq = n;
                n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
              }
              fbq('init', '1591110779305524');
              fbq('track', 'PageView');

              var done = false;
              var events = ['pointerdown', 'keydown', 'touchstart', 'scroll', 'mousemove', 'wheel'];
              function add(src){ var t = d.createElement('script'); t.async = true; t.src = src; d.head.appendChild(t); }
              function load(){
                if (done) return; done = true;
                events.forEach(function(e){ w.removeEventListener(e, load, { passive: true }); });
                add('https://www.googletagmanager.com/gtag/js?id=G-ZJKMLK68Z3');
                add('https://connect.facebook.net/en_US/fbevents.js');
              }
              events.forEach(function(e){ w.addEventListener(e, load, { passive: true, once: true }); });
            })(window, document);
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1591110779305524&ev=PageView&noscript=1"
          />
        </noscript>

        <AnalyticsRouteTracker/>
        <Navbar/>
        {children}
        <RightQuickActions/>
        <ChatWidgetLoader/>
        <LeadPopup/>
      </body>
    </html>
  );
}
