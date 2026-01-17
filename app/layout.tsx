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

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon",
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

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jocelyn Pang Digital Commerce Consulting",
  description:
    "Strategic consultancy and speaking services for FMCG brands scaling e-commerce across Southeast Asia",
  url: "https://jocelynpang.com",
  provider: {
    "@type": "Person",
    name: "Jocelyn Pang",
  },
  serviceType: ["Digital Commerce Strategy", "E-commerce Consulting", "Keynote Speaking", "Executive Workshops"],
  areaServed: [
    { "@type": "Place", name: "Singapore" },
    { "@type": "Place", name: "Malaysia" },
    { "@type": "Place", name: "Philippines" },
    { "@type": "Place", name: "Vietnam" },
    { "@type": "Place", name: "Indonesia" },
    { "@type": "Place", name: "Thailand" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Jocelyn Pang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jocelyn Pang is a digital commerce strategist-operator based in Singapore, specializing in building durable e-commerce growth pillars for FMCG brands across Southeast Asia. She has experience scaling brands in Singapore, Malaysia, Philippines, Vietnam, Indonesia, and Thailand.",
      },
    },
    {
      "@type": "Question",
      name: "What is FMCG e-commerce consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FMCG e-commerce consulting involves strategic guidance for Fast-Moving Consumer Goods brands to optimize their digital commerce presence across marketplaces, social commerce, and direct-to-consumer channels. This includes marketplace optimization, channel strategy, and building sustainable growth systems rather than chasing short-term performance metrics.",
      },
    },
    {
      "@type": "Question",
      name: "What markets does Jocelyn Pang work in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jocelyn Pang works across six Southeast Asian markets: Singapore, Malaysia, Philippines, Vietnam, Indonesia, and Thailand. She specializes in helping FMCG brands navigate the different platform ecosystems and consumer behaviors across these diverse markets.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Jocelyn Pang offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jocelyn offers strategic consultancy for e-commerce growth, keynote speaking and panel discussions on digital commerce, and executive workshops for leadership teams. Her consulting focuses on marketplace optimization, building new distribution channels, and creating durable growth systems for FMCG brands.",
      },
    },
    {
      "@type": "Question",
      name: "What speaking topics does Jocelyn Pang cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jocelyn speaks on three main topics: (1) Why most FMCG e-commerce strategies break at scale, (2) The hidden cost of performance-led growth, and (3) Operating digital commerce across uneven Southeast Asian markets. She presents to leadership teams and senior operators about what actually works at scale.",
      },
    },
    {
      "@type": "Question",
      name: "How can I hire Jocelyn Pang for consulting or speaking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Jocelyn through the enquiry form on her website at jocelynpang.com or email her directly at jocelynpang95@gmail.com. She typically responds within 48 hours and works with FMCG brands scaling across Southeast Asia.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = [personSchema, professionalServiceSchema, faqSchema];

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans`}
      >
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--brown-dark)] focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
