import type { Metadata } from "next";
import CalculatorClient from "@/components/CalculatorClient";

export const metadata: Metadata = {
  title: "Board Foot Calculator - Free Woodworking Tool",
  description: "Free online board foot calculator for woodworkers. Calculate lumber volume and estimate material costs instantly. Includes 12 wood species with per board-foot pricing.",
  keywords: ["board foot calculator", "lumber calculator", "woodworking calculator", "board feet", "wood calculator"],
  alternates: {
    canonical: "https://customwoodquote.com/calculator",
  },
  openGraph: {
    title: "Board Foot Calculator - Free Woodworking Tool",
    description: "Free online board foot calculator for woodworkers. Calculate lumber volume and estimate material costs instantly.",
    type: "website",
    url: "https://customwoodquote.com/calculator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Board Foot Calculator - CraftQuote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Board Foot Calculator - Free Woodworking Tool",
    description: "Free online board foot calculator for woodworkers. Calculate lumber volume and estimate material costs instantly.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://customwoodquote.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Board Foot Calculator",
      "item": "https://customwoodquote.com/calculator",
    },
  ],
};

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Board Foot Calculator",
  "url": "https://customwoodquote.com/calculator",
  "applicationCategory": "UtilityApplication",
  "description": "Free online board foot calculator for woodworkers. Calculate lumber volume and estimate material costs for 12+ wood species instantly.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "operatingSystem": "Web",
  "featureList": [
    "Board foot volume calculation",
    "12+ wood species with per board-foot pricing",
    "Length, width, thickness, and quantity inputs",
    "Instant material cost estimation",
  ],
};

export default function Calculator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <CalculatorClient />
    </>
  );
}
