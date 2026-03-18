import { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const ProjectBuilder = dynamic(() => import("@/components/ProjectBuilder"), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 rounded-xl h-64 w-full" />
  ),
});

export const metadata: Metadata = {
  title: "CraftQuote - Quoting Software for Custom Woodworkers",
  description: "AI-assisted quoting software for custom woodworkers. Create professional quotes with AI photo analysis, accurate pricing, and board-foot calculations. Free with no account required.",
  alternates: {
    canonical: "https://customwoodquote.com",
  },
  openGraph: {
    title: "CraftQuote - Quoting Software for Custom Woodworkers",
    description: "AI-assisted quoting software for custom woodworkers. Upload a reference photo, confirm the details, and send a professional quote in minutes. Free with no account required.",
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
    description: "AI-assisted quoting software for custom woodworkers. Upload a reference photo, confirm the details, and send a professional quote in minutes. Free with no account required.",
    images: ["/og-image.jpg"],
  },
};

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Upload a Photo",
    description: "Drop in a photo from your phone or laptop. Customer inspiration images work too.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
  {
    step: 2,
    title: "AI Reads the Piece",
    description: "AI flags the furniture type, style, joinery, and complexity tier. Takes about five seconds.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Refine the Details",
    description: "Edit anything the AI got wrong. Enter real dimensions and pick your species from the pricing database.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Check the Numbers",
    description: "Every line itemized: lumber, hardware, finish, labor by category, and your overhead. Fix it before it leaves your shop.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    step: 5,
    title: "Send a Pro Quote",
    description: "Your customer gets a clean, branded link. They accept or request changes on the spot. You get notified.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const HOME_FAQS = [
  {
    q: "Is CraftQuote free to use?",
    a: "Yes, completely free. No account required, no credit card, no usage limit. Open the tool and start quoting immediately.",
  },
  {
    q: "What types of furniture can I quote?",
    a: "Any custom piece: dining tables, chairs, cabinets, desks, beds, shelving, benches, entertainment centers. If it is made of wood and needs a materials and labor estimate, CraftQuote handles it.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account is required. Build and share a professional quote without signing up. An optional account lets you save projects to a dashboard for tracking and duplicating later.",
  },
  {
    q: "How does AI photo analysis work for furniture quotes?",
    a: "Upload one to three reference photos of the piece. The AI identifies furniture type, style, joinery techniques, and complexity tier in a few seconds. Confirm the analysis, enter your dimensions, pick your wood species, and the quote builds from there.",
  },
  {
    q: "Can I use my own wood species prices?",
    a: "Yes. Every price in the 50-plus species database is editable. Enter your actual supplier cost for any species and the board-foot calculation updates instantly.",
  },
  {
    q: "How long does it take to create a furniture quote?",
    a: "Most quotes take 5 to 15 minutes from photo upload to sharing the link with your customer. Complex pieces with multiple species or custom hardware may take longer.",
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
            Stop Underpricing Custom Furniture
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Most woodworkers spend 3 to 15 hours a week on quotes and still get the number wrong. CraftQuote takes a reference photo and walks you through materials, labor, and overhead in minutes. You get an accurate quote. Your customer gets a clean link to accept it.
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
              Every other quoting tool assumes you are a general contractor. This one does not.
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
                Snap a photo or upload a customer&apos;s inspiration image. The AI reads it and pre-fills the builder. You confirm and move on.
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
                White oak, walnut, cherry, hard maple, ash. Market pricing built in. Plug in your own supplier costs if they differ.{" "}
                <Link href="/pricing-guide" className="text-amber-400 hover:underline">
                  See the pricing guide
                </Link>
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
                A branded PDF and a shareable link your customer can view without logging in. Accept, decline, or request changes, right from the link.
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
                No signup. No credit card. No usage cap. Open the tool and start quoting. Every quote you build is yours to keep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-gray-100 px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-sm text-gray-500 mb-10">
            More questions?{" "}
            <Link href="/help" className="text-amber-600 hover:underline">
              Visit the Help page
            </Link>
          </p>
          <dl className="divide-y divide-gray-100">
            {HOME_FAQS.map(({ q, a }) => (
              <div key={q} className="py-6">
                <dt className="text-base font-semibold text-gray-900 mb-2">{q}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Quote Builder */}
      <section id="quote-builder" className="max-w-4xl mx-auto px-4 pb-16">
        <ProjectBuilder />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": HOME_FAQS.map(({ q, a }) => ({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": a,
                },
              })),
            },
            {
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
              "url": "https://customwoodquote.com",
              "featureList": [
                "AI photo analysis for furniture type, style, and complexity",
                "50+ wood species with per board-foot pricing",
                "Board-foot calculator",
                "Labor estimation by category",
                "Overhead allocation",
                "Professional branded PDF quotes",
                "Shareable quote links with customer accept/decline flow",
                "No account required"
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Create a Custom Furniture Quote with CraftQuote",
              "description": "Create an accurate, professional custom furniture quote in minutes using AI photo analysis and real material pricing.",
              "totalTime": "PT5M",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Upload a Photo",
                  "text": "Drop in a photo from your phone or laptop. Customer inspiration images work too.",
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "AI Reads the Piece",
                  "text": "AI flags the furniture type, style, joinery, and complexity tier. Takes about five seconds.",
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Refine the Details",
                  "text": "Edit anything the AI got wrong. Enter real dimensions and pick your species from the pricing database.",
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Check the Numbers",
                  "text": "Every line itemized: lumber, hardware, finish, labor by category, and your overhead. Fix it before it leaves your shop.",
                },
                {
                  "@type": "HowToStep",
                  "position": 5,
                  "name": "Send a Pro Quote",
                  "text": "Your customer gets a clean, branded link. They accept or request changes on the spot. You get notified.",
                },
              ],
            },
          ])
        }}
      />
    </div>
  );
}
