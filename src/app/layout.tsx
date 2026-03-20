import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/buttons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { InstallPrompt } from "@/components/ui/InstallPrompt";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const viewport: Viewport = {
  themeColor: "#facc15",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://seferihisartaxi.com"),
  title: "Seferihisar Taksi 0554 115 44 22 | 7/24 Hızlı ve Güvenli Taksi Hizmeti",
  description: "Seferihisar, Sığacık ve çevresinde hızlı, güvenli ve ekonomik taksi hizmeti. 7/24 taksi çağırmak için hemen arayın.",
  keywords: ["seferihisar taksi", "seferihisar taxi", "sığacık taksi", "seferihisar 7/24 taksi", "izmir havalimanı transfer seferihisar"],
  openGraph: {
    title: "Seferihisar Taksi | 7/24 Hızlı ve Güvenli Taksi Hizmeti",
    description: "Seferihisar, Sığacık ve çevresinde hızlı, güvenli ve ekonomik taksi hizmeti.",
    url: "https://seferihisartaxi.com",
    siteName: "Seferihisar Taksi",
    images: [
      {
        url: "https://seferihisartaxi.com/seo-resmi.jpeg",
        width: 800,
        height: 1200,
        alt: "Seferihisar Taksi Hizmeti",
      },
      {
        url: "https://seferihisartaxi.com/taxi-premium-1.png",
        width: 1200,
        height: 800,
        alt: "Seferihisar Merkez Ticari Taksi",
      },
      {
        url: "https://seferihisartaxi.com/taxi-premium-2.png",
        width: 1200,
        height: 800,
        alt: "Sığacık Havalimanı VIP Transfer",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seferihisar Taksi | 7/24 Hızlı ve Güvenli Taksi Hizmeti",
    description: "Seferihisar, Sığacık ve çevresinde hızlı, güvenli ve ekonomik taksi hizmeti.",
    images: ["https://seferihisartaxi.com/seo-resmi.jpeg"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico.png' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon.ico.png',
  },
  verification: {
    google: "ncU4f-jtgMcObso15TnXl3iw2DX7OlCyXZuBRH1xkYY",
    yandex: "64396064fd2e5110",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Seferi Taksi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Seferihisar Taksi",
    image: [
      "https://seferihisartaxi.com/logo.png",
      "https://seferihisartaxi.com/seo-resmi.jpeg",
      "https://seferihisartaxi.com/taxi-premium-1.png",
      "https://seferihisartaxi.com/taxi-premium-2.png"
    ],
    "@id": "https://seferihisartaxi.com",
    url: "https://seferihisartaxi.com",
    telephone: "+905541154422",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Seferihisar Merkez",
      addressLocality: "Seferihisar",
      addressRegion: "İzmir",
      postalCode: "35460",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.196397,
      longitude: 26.757042,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: ["Seferihisar", "Sığacık", "Ürkmez", "Doğanbey", "İzmir Adnan Menderes Havalimanı"],
    priceRange: "₺₺",
    sameAs: [
      "https://g.page/r/CXiz0i0fzzocEAE",
      "https://share.google/xWuGUnAEOpNTzRvb3"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "134"
    }
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen pb-16 md:pb-0`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18027028171"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18027028171');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
        <InstallPrompt />
        <CookieConsent />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <div className="hidden md:flex fixed bottom-6 right-6 z-50">
          <WhatsAppButton className="rounded-full !p-4 shadow-lg hover:shadow-xl" />
        </div>
      </body>
    </html>
  );
}
