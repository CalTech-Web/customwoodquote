import { Metadata } from "next";
import ProjectBuilder from "@/components/ProjectBuilder";

export const metadata: Metadata = {
  title: "CraftQuote - Quoting Software for Custom Woodworkers",
  description: "AI-assisted quoting software for custom woodworkers. Create professional quotes with AI photo analysis, accurate pricing, and board-foot calculations. Trusted by 100+ woodworkers.",
  openGraph: {
    title: "CraftQuote - Quoting Software for Custom Woodworkers",
    description: "AI-assisted quoting software for custom woodworkers. Create professional quotes with AI photo analysis, accurate pricing, and board-foot calculations.",
    type: "website",
    url: "https://customwoodquote.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CraftQuote - Quoting Software for Custom Woodworkers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CraftQuote - Quoting Software for Custom Woodworkers",
    description: "AI-assisted quoting software for custom woodworkers. Create professional quotes with AI photo analysis, accurate pricing, and board-foot calculations.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI-Assisted Quoting for Custom Woodworkers
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create professional quotes in minutes with AI-powered photo analysis, accurate board-foot calculations, and material pricing. Stop losing money on underpriced projects.
          </p>
          <div className="mt-8">
            <a
              href="#quote-builder"
              className="rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Start Building a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Quote Builder */}
      <section id="quote-builder" className="max-w-4xl mx-auto px-4 pb-16">
        <ProjectBuilder />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CraftQuote",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "AI-assisted quoting software for custom woodworkers. Create professional quotes with AI photo analysis, accurate pricing, and board-foot calculations.",
            "operatingSystem": "Web",
            "url": "https://customwoodquote.com"
          })
        }}
      />
    </div>
  );
}
