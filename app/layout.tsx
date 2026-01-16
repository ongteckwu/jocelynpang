import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jocelynpang.com"),

  title: {
    default: "Jocelyn Pang | Digital Commerce Strategist",
    template: "%s | Jocelyn Pang",
  },

  description:
    "Digital commerce strategist-operator building durable e-commerce growth pillars for FMCG brands across Southeast Asia. Based in Singapore.",

  keywords: [
    "digital commerce strategist",
    "FMCG e-commerce consultant",
    "Southeast Asia e-commerce",
    "marketplace optimization",
    "Singapore e-commerce consultant",
  ],

  authors: [{ name: "Jocelyn Pang", url: "https://jocelynpang.com" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jocelynpang.com",
    siteName: "Jocelyn Pang",
    title: "Jocelyn Pang | Digital Commerce Strategist",
    description:
      "Digital commerce strategist-operator building durable e-commerce growth for FMCG brands across Southeast Asia.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jocelyn Pang - Digital Commerce Strategist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jocelyn Pang | Digital Commerce Strategist",
    description:
      "Digital commerce strategist-operator building durable e-commerce growth for FMCG brands across Southeast Asia.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://jocelynpang.com",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jocelyn Pang",
  url: "https://jocelynpang.com",
  jobTitle: "Digital Commerce Strategist-Operator",
  description:
    "Digital commerce strategist-operator building durable e-commerce growth pillars for FMCG brands across Southeast Asia",
  sameAs: ["https://www.linkedin.com/in/jocelynpang"],
  knowsAbout: [
    "Digital Commerce",
    "E-commerce Strategy",
    "FMCG",
    "Southeast Asia Markets",
    "Marketplace Optimization",
  ],
  areaServed: [
    { "@type": "Place", name: "Singapore" },
    { "@type": "Place", name: "Malaysia" },
    { "@type": "Place", name: "Philippines" },
    { "@type": "Place", name: "Vietnam" },
    { "@type": "Place", name: "Indonesia" },
    { "@type": "Place", name: "Thailand" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
