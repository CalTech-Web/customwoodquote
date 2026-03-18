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

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Upload a Photo",
    description: "Upload 1 to 3 reference photos of the furniture piece you need to quote.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "AI Identifies the Piece",
    description: "AI detects furniture type, style, complexity, joinery, and component count automatically.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Refine the Details",
    description: "Confirm AI suggestions, enter exact dimensions, and select your wood species and finish.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Review Your Pricing",
    description: "See a full breakdown of materials, labor, overhead, and margin before sending anything.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Send a Pro Quote",
    description: "Generate a branded PDF or shareable link your customer can accept or decline online.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const TRUST_BADGES = [
  { label: "50+ Wood Species" },
  { label: "100% Free" },
  { label: "No Account Required" },
  { label: "AI-Powered Analysis" },
  { label: "PDF + Share Link" },
];

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
          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-200"
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white border-y border-gray-100 px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-amber-600 mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700 mb-4">
                  {item.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
                  Step {item.step}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{item.title}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Built for Woodworkers, Not Contractors
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Every feature was designed around the way custom furniture makers actually price their work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-600 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">AI Photo Analysis</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Upload any reference photo. AI detects furniture type, style, complexity, and joinery in seconds.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-600 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">50+ Wood Species</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Real market pricing for hardwoods, softwoods, and exotic species. Override any price with your actual supplier costs.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-600 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Professional Quotes</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                PDF and shareable web link your customers can accept online. Looks like you have a full studio behind you.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-amber-600 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-white mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">100% Free, No Account</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                No credit card, no signup, no usage limits. Start quoting immediately and keep every quote you build.
              </p>
            </div>
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
