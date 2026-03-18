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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a board foot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A board foot is a unit of lumber volume equal to 144 cubic inches, the equivalent of a board 1 inch thick, 12 inches wide, and 12 inches long. Lumber yards use board feet to price hardwoods consistently regardless of board dimensions.",
      },
    },
    {
      "@type": "Question",
      "name": "How do you calculate board feet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Board feet = (Length × Width × Thickness) ÷ 144, with all measurements in inches. A board 96 inches long, 6 inches wide, and 1 inch thick: (96 × 6 × 1) ÷ 144 = 4 board feet.",
      },
    },
    {
      "@type": "Question",
      "name": "How many board feet do I need for a dining table?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard dining table top (72 inches × 36 inches at 1.5 inches thick) requires roughly 27 board feet before waste. Add 15 to 20 percent for defects and setup cuts and plan on ordering 32 to 34 board feet. Legs, aprons, and stretchers add another 15 to 20 board feet depending on design.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the most expensive wood for furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Among common furniture hardwoods, walnut runs $10 to $15 per board foot for standard stock. Cherry and mahogany are mid-range at $9 to $12 per board foot. White oak and hard maple are solid value at $7 to $9 per board foot. Figured stock of any species commands a significant premium.",
      },
    },
    {
      "@type": "Question",
      "name": "Why do lumber yards sell by the board foot instead of by the piece?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Board feet measure volume, which is consistent regardless of board dimensions. Pricing by volume lets the yard price any size board consistently and lets you compare species and grades on equal footing.",
      },
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CalculatorClient />
    </>
  );
}
