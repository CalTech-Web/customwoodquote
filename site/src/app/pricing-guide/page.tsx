import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Price Custom Furniture Projects - Complete Guide | CraftQuote",
  description: "Learn how to price custom woodworking and furniture projects profitably. Understand material costs, labor rates, overhead, and profit margins with our comprehensive pricing guide.",
  keywords: ["how to price woodworking projects", "custom furniture pricing guide", "woodworking pricing", "furniture pricing strategy", "shop rate calculator"],
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

export default function PricingGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              CraftQuote
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
            >
              Sign Up
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
            A comprehensive guide to pricing woodworking projects profitably. Learn how to calculate materials, labor, overhead, and profit margins.
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
            The foundation of profitable pricing is knowing your true costs. Most woodworkers underestimate their expenses and end up losing money on projects. There are three main cost categories to track:
          </p>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Costs</h3>
              <p className="text-gray-600 mb-4">
                Material costs include lumber, hardware, finishes, and supplies. Don&rsquo;t forget about waste—you should factor in 10-20% extra for mistakes, defects, and cutoffs.
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
                Labor is the time you spend working on the project. Track your hours accurately—design time, shop time, finishing time, and delivery all count. Your labor rate should reflect your skill level and market conditions.
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
                Overhead is everything else: shop rent, utilities, insurance, tools, maintenance, software, marketing, etc. Calculate your monthly overhead and divide by your billable hours to get an overhead rate.
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
            Your shop rate (hourly rate) should cover your desired income, overhead, taxes, and benefits. Here&rsquo;s how to calculate it:
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
            After covering all costs, you need profit. Profit is not the same as your salary—it&rsquo;s money that stays in the business for growth, equipment, emergencies, and building value.
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
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Forgetting to Track All Hours</h3>
              <p className="text-gray-700">
                Design, client meetings, shopping for materials, cleanup—it all counts. If you don&rsquo;t track it, you&rsquo;re working for free.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Underestimating Material Waste</h3>
              <p className="text-gray-700">
                Lumber has defects, you&rsquo;ll make mistakes, and you need cutoffs for setup. Always add 10-20% to material estimates.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Ignoring Overhead</h3>
              <p className="text-gray-700">
                Your shop costs money even when you&rsquo;re not building. Rent, insurance, utilities, and tools must be factored into every project.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Pricing Based on Competitors</h3>
              <p className="text-gray-700">
                Your costs are different. Your skills are different. Price based on YOUR numbers, not what someone else charges.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Not Adding Profit</h3>
              <p className="text-gray-700">
                Covering costs isn&rsquo;t enough. You need profit to grow, invest in better tools, handle slow periods, and build business value.
              </p>
            </div>

            <div className="rounded-lg bg-red-50 border border-red-200 p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">❌ Dropping Price Too Easily</h3>
              <p className="text-gray-700">
                If a client pushes back on price, reduce scope instead of cutting your margin. Remove features, simplify design, or use less expensive materials.
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
              Use our free board foot calculator to quickly estimate lumber costs. Input dimensions and select wood species to get instant pricing.
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
              Stop Guessing, Start Quoting with Confidence
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              CraftQuote does all the math for you. Track materials, calculate labor, add overhead, and set profit margins—all in one professional quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-block rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
              >
                Start Free Trial
              </Link>
              <Link
                href="/"
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-6 w-5 flex-none text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Track <strong>all three cost categories</strong>: materials, labor, and overhead</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-5 flex-none text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Set your shop rate based on desired income, not market comparison</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-5 flex-none text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Add <strong>15-35% profit margin</strong> on top of costs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-5 flex-none text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Include 10-20% waste factor for materials</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-5 flex-none text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Track every hour: design, shopping, building, finishing, delivery</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-5 flex-none text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>When negotiating, reduce scope—not margin</span>
              </li>
            </ul>
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
            <Link href="/signup" className="text-gray-400 hover:text-gray-300">
              Sign Up
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
