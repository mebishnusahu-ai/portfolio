import type { Metadata } from "next";
import { Inter, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Loader from "@/components/layout/Loader";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-cursive" });

export const metadata: Metadata = {
  metadataBase: new URL('https://db-pro.online'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Expert Software Engineer in Bhilai | Custom Web & AI Solutions",
    template: "%s | Expert Software Engineer Bhilai"
  },
  description: "Bishnu Prasad Sahu & Deepika Tendulkar provide world-class software solutions, web development, and hotel/restaurant website creation in Bhilai, India. Expert software engineers specializing in AI and modern web technologies.",
  keywords: [
    "software solutions", 
    "software engineer", 
    "software engineer in bhilai", 
    "web development", 
    "hotel website create", 
    "restaurant website create in bhilai",
    "bishnu prasad sahu", 
    "deepika tandulkar", 
    "software solutions at bhilai", 
    "best web developer in bhilai",
    "custom software development india"
  ],
  authors: [{ name: "Bishnu Prasad Sahu" }, { name: "Deepika Tendulkar" }],
  creator: "Bishnu Prasad Sahu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://db-pro.online",
    title: "Expert Software Engineer in Bhilai | Custom Web & AI Solutions",
    description: "Expert software engineering and web development services in Bhilai. We specialize in software solutions for hotels, restaurants, and businesses.",
    siteName: "Bishnu & Deepika Portfolio",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "Bishnu & Deepika Software Solutions"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Software Engineer in Bhilai | Custom Web & AI Solutions",
    description: "Professional software solutions and web development in Bhilai by Bishnu Prasad Sahu & Deepika Tendulkar.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "zbIBbK2W7a6V1VU9oanrEb1dJ0-1izeWgr64XqaiYZ4",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "#person-bishnu",
      "name": "Bishnu Prasad Sahu",
      "jobTitle": "Software Engineer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhilai",
        "addressRegion": "Chhattisgarh",
        "addressCountry": "India"
      },
      "url": "https://db-pro.online",
      "sameAs": [
        "https://www.linkedin.com/in/mebishnusahu05/",
        "https://github.com/MeBishnuSahu"
      ]
    },
    {
      "@type": "Person",
      "@id": "#person-deepika",
      "name": "Deepika Tendulkar",
      "jobTitle": "Frontend Developer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhilai",
        "addressRegion": "Chhattisgarh",
        "addressCountry": "India"
      },
      "url": "https://db-pro.online"
    },
    {
      "@type": "ProfessionalService",
      "name": "Bishnu & Deepika Software Solutions",
      "image": "https://db-pro.online/logo.png",
      "description": "Providing top-tier software solutions, web development, and hospitality tech in Bhilai.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhilai",
        "addressLocality": "Bhilai",
        "addressRegion": "CG",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.1938,
        "longitude": 81.3509
      },
      "url": "https://db-pro.online",
      "telephone": "+91-9301105706",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${dancingScript.variable} font-sans antialiased text-black bg-white`}>
        <Loader />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
