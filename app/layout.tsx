import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "LQS LLC | Longarm Quilting Service — Moore, OK",
    template: "%s | LQS LLC Longarm Quilting",
  },
  description:
    "Veteran-owned longarm quilting service in Moore, OK. Affordable edge-to-edge quilting at $0.025/sq in. Batting & thread included. Serving Moore, Norman, Midwest City, and OKC. Call (405) 778-1440.",
  keywords: [
    "longarm quilting Moore OK",
    "longarm quilting service Oklahoma",
    "edge-to-edge quilting Moore",
    "longarm quilting OKC",
    "longarm quilting Norman OK",
    "quilt finishing service Oklahoma",
    "veteran owned quilting service",
    "affordable longarm quilting",
    "LQS LLC",
    "Kevin Gunder quilting",
  ],
  authors: [{ name: "Kevin Gunder", url: "https://lqs.llc" }],
  creator: "LQS LLC",
  metadataBase: new URL("https://lqs.llc"),
  alternates: {
    canonical: "https://lqs.llc",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lqs.llc",
    siteName: "LQS LLC Longarm Quilting Service",
    title: "LQS LLC | Longarm Quilting Service — Moore, OK",
    description:
      "Veteran-owned longarm quilting service in Moore, OK. Edge-to-edge quilting at $0.025/sq in. Batting & thread included. Call (405) 778-1440.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lqs.llc",
  name: "LQS LLC Longarm Quilting Service",
  description:
    "Veteran-owned longarm quilting service in Moore, Oklahoma. Specializing in edge-to-edge quilting with premium 80/20 batting and Glide thread included. Serving quilters across Moore, Norman, Midwest City, and the greater Oklahoma City area.",
  url: "https://lqs.llc",
  telephone: "+14057781440",
  email: "kevin@lqs.llc",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card",
  image: "https://lqs.llc/og-image.jpg",
  logo: "https://lqs.llc/logo.png",
  founder: {
    "@type": "Person",
    name: "Kevin Gunder",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "121 W. Main St, Suite 104",
    addressLocality: "Moore",
    addressRegion: "OK",
    postalCode: "73150",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.3395,
    longitude: -97.4867,
  },
  areaServed: [
    { "@type": "City", name: "Moore", containedIn: "Oklahoma" },
    { "@type": "City", name: "Norman", containedIn: "Oklahoma" },
    { "@type": "City", name: "Midwest City", containedIn: "Oklahoma" },
    { "@type": "City", name: "Oklahoma City", containedIn: "Oklahoma" },
    { "@type": "City", name: "Edmond", containedIn: "Oklahoma" },
    { "@type": "City", name: "Yukon", containedIn: "Oklahoma" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Longarm Quilting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Edge-to-Edge Longarm Quilting",
          description: "Professional longarm quilting at $0.025 per square inch. Batting and thread included.",
        },
        price: "0.025",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "0.025",
          priceCurrency: "USD",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "INH",
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Quilted Jacket Longarm Quilting",
          description: "Custom longarm quilting for quilted jackets.",
        },
        price: "85",
        priceCurrency: "USD",
      },
    ],
  },
  memberOf: [
    {
      "@type": "Organization",
      name: "Moore Chamber of Commerce",
    },
    {
      "@type": "Organization",
      name: "Moore Rotary Club",
    },
  ],
  sameAs: [
    "https://www.lqs.llc",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
