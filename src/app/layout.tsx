import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/buttons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://seferihisartaksi.com"),
  title: "Seferihisar Taksi 0554 115 44 22 | 7/24 Hızlı ve Güvenli Taksi Hizmeti",
  description: "Seferihisar, Sığacık ve çevresinde hızlı, güvenli ve ekonomik taksi hizmeti. 7/24 taksi çağırmak için hemen arayın.",
  keywords: ["seferihisar taksi", "seferihisar taxi", "sığacık taksi", "seferihisar 7/24 taksi", "izmir havalimanı transfer seferihisar"],
  openGraph: {
    title: "Seferihisar Taksi | 7/24 Hızlı ve Güvenli Taksi Hizmeti",
    description: "Seferihisar, Sığacık ve çevresinde hızlı, güvenli ve ekonomik taksi hizmeti.",
    url: "https://seferihisartaksi.com",
    siteName: "Seferihisar Taksi",
    images: [
      {
        url: "/seferihisar-bg.png",
        width: 1200,
        height: 630,
        alt: "Seferihisar Taksi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seferihisar Taksi | 7/24 Hızlı ve Güvenli Taksi Hizmeti",
    description: "Seferihisar, Sığacık ve çevresinde hızlı, güvenli ve ekonomik taksi hizmeti.",
    images: ["/seferihisar-bg.png"],
  },
  verification: {
    google: "ncU4f-jtgMcObso15TnXl3iw2DX7OlCyXZuBRH1xkYY",
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
    image: "https://seferihisartaksi.com/logo.png",
    "@id": "https://seferihisartaksi.com",
    url: "https://seferihisartaksi.com",
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
