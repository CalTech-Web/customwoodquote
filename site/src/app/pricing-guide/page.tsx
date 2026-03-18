import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Price Custom Furniture Projects - Complete Guide | CraftQuote",
  description: "Learn how to price custom woodworking and furniture projects profitably. Understand material costs, labor rates, overhead, and profit margins with our comprehensive pricing guide.",
  keywords: ["how to price woodworking projects", "custom furniture pricing guide", "woodworking pricing", "furniture pricing strategy", "shop rate calculator"],
  alternates: {
    canonical: "https://customwoodquote.com/pricing-guide",
  },
  openGraph: {
    title: "How to Price Custom Furniture Projects - Complete Guide",
    description: "Learn how to price custom woodworking and furniture projects profitably. Complete guide covering materials, labor, overhead, and profit margins.",
    type: "article",
    url: "https://customwoodquote.com/pricing-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Price Custom Furniture Projects - Complete Guide",
    description: "Learn how to price custom woodworking and furniture projects profitably.",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Price Custom Furniture Projects",
  "description": "A complete guide to pricing custom woodworking and furniture projects profitably, covering material costs, labor rates, overhead, and profit margins.",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Calculate Your Material Costs",
      "text": "Add up lumber, hardware, finishes, and consumables. Budget an additional 10 to 20 percent on top of calculated lumber volume to account for waste, defects, and setup pieces.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Set Your Shop Rate",
      "text": "Work backward from your desired annual income. Add taxes, benefits, and annual overhead, then divide by your realistic billable hours per year. For most craftspeople this lands between $45 and $100 per hour.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Calculate Labor Costs",
      "text": "Track every hour spent on the project: design and client calls, material runs, milling, joinery, assembly, finishing, cleanup, and delivery. Multiply total hours by your shop rate.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Allocate Overhead",
      "text": "Divide your monthly shop overhead (rent, utilities, insurance, tool maintenance, software) by your monthly billable hours to get a per-hour overhead rate. Multiply by project hours.",
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Add Your Profit Margin",
      "text": "Add 15 to 35 percent profit margin on top of total costs. Profit funds equipment, absorbs slow months, and builds business value. A minimum of 15 to 20 percent is required for a sustainable operation.",
    },
  ],
};

export default function PricingGuide() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              CraftQuote
            </Link>
            <Link
              href="/#quote-builder"
              className="rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
            >
              Build a Quote
            </Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        {/* Title Section */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            How to Price Custom Furniture Projects
          </h1>
          <p className="text-xl text-gray-600">
            The Woodworking Network has tracked craftsman pricing for over 25 years. The problem has not changed. Woodworkers consistently underestimate project costs, often by two to five times. Here is how to stop.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#understanding-costs" className="hover:text-amber-600">1. Understanding Your Costs</a></li>
            <li><a href="#shop-rate" className="hover:text-amber-600">2. Setting Your Shop Rate</a></li>
            <li><a href="#profit-margins" className="hover:text-amber-600">3. Profit Margins Explained</a></li>
            <li><a href="#pricing-mistakes" className="hover:text-amber-600">4. Common Pricing Mistakes</a></li>
            <li><a href="#calculator" className="hover:text-amber-600">5. Use Our Calculator</a></li>
          </ul>
        </nav>

        {/* Section 1: Understanding Your Costs */}
        <section id="understanding-costs" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Your Costs</h2>

          <p className="text-gray-600 mb-6">
            Every project has three cost buckets. Miss any one of them and you are working for less than you think. Most underprice jobs trace back to the same gap: labor that was tracked, overhead that was not.
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Costs</h3>
              <p className="text-gray-600 mb-4">
                Material costs cover lumber, hardware, finishes, and consumables. The number most makers miss is waste. Hardwood has defects, you will make mistakes, and cutoffs for setup pieces add up fast. Budget 10 to 20% on top of your calculated lumber volume.
              </p>
              <div className="bg-gray-50 rounded p-4">
                <p className="font-mono text-sm text-gray-700">
                  Example: Walnut dining table<br />
                  • 40 board feet walnut @ $12.50/bf = $500<br />
                  • Hardware (slides, brackets) = $75<br />
                  • Finish (oil, wax) = $40<br />
                  • Waste factor (15%) = $92<br />
                  <strong className="block mt-2">Total Material Cost: $707</strong>
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Labor Costs</h3>
              <p className="text-gray-600 mb-4">
                Labor is every hour you spend on the project: design and client calls, shopping for materials, milling, joinery, assembly, finishing, cleanup, and delivery. All of it counts. If you only track shop time you are leaving several hours per project unpriced.
              </p>
              <div className="bg-gray-50 rounded p-4">
                <p className="font-mono text-sm text-gray-700">
                  Example: Walnut dining table (continued)<br />
                  • Design & planning: 4 hours<br />
                  • Milling & joinery: 12 hours<br />
                  • Assembly: 6 hours<br />
                  • Finishing: 8 hours<br />
                  • Total: 30 hours × $50/hour = $1,500<br />
                  <strong className="block mt-2">Total Labor Cost: $1,500</strong>
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Overhead Costs</h3>
              <p className="text-gray-600 mb-4">
                Overhead is everything that costs money before you touch a piece of wood: shop rent, utilities, insurance, tool maintenance, software, and vehicle costs. Your shop runs whether you are building or not. That cost belongs in every quote. Divide your monthly total by your billable hours to get a per-hour rate.
              </p>
              <div className="bg-gray-50 rounded p-4">
                <p className="font-mono text-sm text-gray-700">
                  Example: Monthly overhead calculation<br />
                  • Rent: $800<br />
                  • Utilities: $150<br />
                  • Insurance: $200<br />
                  • Tool maintenance: $100<br />
                  • Software/subscriptions: $50<br />
                  • Total: $1,300/month<br /><br />
                  If you work 160 hours/month:<br />
                  $1,300 ÷ 160 = $8.13/hour overhead<br />
                  <strong className="block mt-2">Table overhead: 30 hours × $8.13 = $244</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Setting Your Shop Rate */}
        <section id="shop-rate" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Setting Your Shop Rate</h2>

          <p className="text-gray-600 mb-6">
            The number at the bottom of this formula is not profit. It is what you need to keep the lights on, pay taxes, and take home a living. The formula works backward from what you need, not from what feels comfortable to charge.
          </p>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Shop Rate Formula</h3>
            <div className="font-mono text-sm space-y-2">
              <p>1. Desired annual income: $60,000</p>
              <p>2. Add taxes & benefits (30%): $18,000</p>
              <p>3. Add annual overhead: $15,600</p>
              <p>4. Total needed per year: $93,600</p>
              <p>5. Billable hours per year: 1,500 (reality, not 2080)</p>
              <p className="text-lg font-bold text-amber-700 pt-2 border-t border-amber-300">
                Shop Rate: $93,600 ÷ 1,500 = $62.40/hour
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Benchmarks</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Beginner:</strong> $30-45/hour - Still learning, basic projects</li>
              <li>• <strong>Intermediate:</strong> $45-65/hour - Solid skills, consistent quality</li>
              <li>• <strong>Advanced:</strong> $65-100/hour - Expert craftsman, complex work</li>
              <li>• <strong>Master/Specialty:</strong> $100-200+/hour - High-end custom, unique skills</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Profit Margins */}
        <section id="profit-margins" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Profit Margins Explained</h2>

          <p className="text-gray-600 mb-6">
            Covering costs is not a business. Profit is the margin between your total costs and the quote you send, and it does real work: funds new equipment, absorbs slow months, and builds the value of your operation. Without it, one bad job erases three good ones.
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Target Profit Margins</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="font-bold text-amber-600 mr-2">15-20%:</span>
                  <span>Minimum healthy margin for sustainable business</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-amber-600 mr-2">25-35%:</span>
                  <span>Good margin for most custom furniture work</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-amber-600 mr-2">40-50%+:</span>
                  <span>Premium work, unique designs, strong brand</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-green-50 border border-green-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Pricing Example</h3>
              <div className="font-mono text-sm space-y-1">
                <p className="text-gray-700">Walnut Dining Table - Final Price</p>
                <p>Materials: $707</p>
                <p>Labor (30 hrs × $50): $1,500</p>
                <p>Overhead (30 hrs × $8.13): $244</p>
                <p className="border-t border-green-300 pt-1 mt-1">Subtotal (Costs): $2,451</p>
                <p>Profit Margin (25%): $613</p>
                <p className="text-lg font-bold text-green-700 border-t border-green-300 pt-1 mt-1">
                  Final Quote: $3,064
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Common Pricing Mistakes */}
        <section id="pricing-mistakes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Pricing Mistakes</h2>

          <div className="space-y-4">
            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Only Tracking Shop Hours</h3>
              <p className="text-gray-700">
                Design, client calls, materials runs, cleanup, delivery. Each of those is time you spent on this project. If you do not log it, you worked it for free.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Skipping the Waste Factor</h3>
              <p className="text-gray-700">
                Hardwood has defects. You will need test pieces for setup. A board cracks. Add 15% to your lumber estimate by default and adjust up for figured or difficult material.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Ignoring Overhead</h3>
              <p className="text-gray-700">
                The shop costs money whether you are building or not. Rent, insurance, utilities, and tool maintenance belong in every quote. If you skip them, clients are getting a subsidy they do not know about.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Pricing Off Competitors</h3>
              <p className="text-gray-700">
                You do not know their shop rate, their overhead, or their material costs. Anchoring your price to theirs just means you are sharing their mistakes. Price from your own numbers.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Confusing Cost Recovery with Profit</h3>
              <p className="text-gray-700">
                Breaking even is not a sustainable business. Profit funds better tooling, absorbs slow months, and gives you negotiating room. Without it, one difficult job puts you in the hole.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Cutting Margin When a Client Pushes Back</h3>
              <p className="text-gray-700">
                Reduce scope instead. Simplify the joinery, swap species, remove a drawer. Your margin exists for a reason. Once you train clients that pushing gets results, they will push on every job.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Embed Section */}
        <section id="calculator" className="mb-12">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Calculate Board Feet for Your Next Project
            </h2>
            <p className="text-amber-50 mb-6 max-w-2xl mx-auto">
              Lumber is the biggest variable in most furniture quotes. Enter your dimensions, pick a species, and you have a material cost in seconds. Twelve common species are included with per board-foot pricing.
            </p>
            <Link
              href="/calculator"
              className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-amber-600 shadow-sm hover:bg-amber-50"
            >
              Open Calculator
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gray-900 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Put the numbers to work on your next project
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              CraftQuote does the math: materials with board-foot pricing, labor by category, overhead allocation, and your margin. Upload a reference photo and the quote builds itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote-builder"
                className="inline-block rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
              >
                Start Building a Quote
              </Link>
              <Link
                href="/calculator"
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Board Foot Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="mb-12">
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Start with your next quote</h2>
            <p className="text-gray-700">
              The fastest way to internalize this framework is to run a real project through it. Take a job you have already completed and work backward. Pull your actual lumber receipt, count your hours, and calculate what you needed to charge. The gap between that number and what you quoted is what this guide is for. Do that once and the formula sticks.
            </p>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              Home
            </Link>
            <Link href="/calculator" className="text-gray-400 hover:text-gray-300">
              Calculator
            </Link>
            <Link href="/#quote-builder" className="text-gray-400 hover:text-gray-300">
              Build a Quote
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; 2026 CraftQuote. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
