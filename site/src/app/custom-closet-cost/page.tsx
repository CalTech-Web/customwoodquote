import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Closet Cost: What to Expect in 2026",
  description: "How much does a custom closet cost? Understand custom closet pricing per linear foot, what drives the cost up or down, and how to build an accurate quote for any custom closet project.",
  keywords: ["custom closet cost", "custom closet cost per linear foot", "how much does a custom closet cost", "average custom closet cost", "custom closet cost calculator", "walk-in closet cost", "built-in closet pricing"],
  alternates: {
    canonical: "https://customwoodquote.com/custom-closet-cost",
  },
  openGraph: {
    title: "Custom Closet Cost: What to Expect in 2026",
    description: "Custom closet pricing per linear foot, cost by closet type, what drives cost up or down, and how woodworkers can build accurate quotes for any custom closet project.",
    type: "article",
    url: "https://customwoodquote.com/custom-closet-cost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Closet Cost Guide - CraftQuote",
      },
    ],
    publishedTime: "2026-03-19T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Closet Cost: What to Expect in 2026",
    description: "Custom closet pricing by type, cost per linear foot, and how to quote custom closet work accurately.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://customwoodquote.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Custom Closet Cost",
      item: "https://customwoodquote.com/custom-closet-cost",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Price a Custom Closet Build",
  description: "A step-by-step guide for woodworkers and finish carpenters to build accurate, profitable quotes for custom closet projects.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Measure the space and list all components",
      text: "Measure the closet opening: width, depth, and ceiling height. List every component needed: hanging sections (single and double rod), shelf runs, drawer banks, shoe shelves, and any islands or benches. Count each element separately. A walk-in with a center island, double-hang sections, and a shoe tower is three different labor and material categories.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Choose materials and calculate sheet goods",
      text: "Most custom closet work uses plywood or MDF for carcasses and shelves, with solid wood for face frames and trim if specified. Calculate sheet goods by counting shelves, panels, and drawer boxes. Add 10 to 15 percent waste. If using a hardwood species for the face frame or exposed edges, price those board feet separately using your wood species pricing.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Price hardware per component",
      text: "Count every rod bracket, shelf pin, drawer slide, hinge, and pull. Closet hardware adds up significantly on large walk-ins. Soft-close drawer slides, pull-out valet rods, and tie or belt racks are expected on custom work and should appear as separate line items. Price each before finalizing your quote.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Estimate labor by phase",
      text: "Break labor into: design and layout, material cutting and prep, component assembly, site installation, and touch-up. Multiply total hours by your shop rate. Walk-in closets with islands or angled walls take significantly longer to install than reach-ins. Do not apply a flat rate per linear foot across all closet types.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add overhead and profit margin",
      text: "Calculate your per-hour overhead rate and apply it to the project hours before adding your profit margin. Target 20 to 30 percent net margin on top of total project cost. Overhead covers shop, tools, insurance, and vehicle costs that run whether or not you are on the job site. Skipping this step is the most common reason custom closet jobs lose money.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a custom closet cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom closet built by a woodworker or finish carpenter typically costs $1,500 to $6,000 for a reach-in and $5,000 to $25,000 or more for a large walk-in closet. Cost depends on size, materials (solid wood versus plywood versus MDF), the number of drawers, and installation complexity. A simple reach-in with shelves and a hanging rod in painted MDF sits at the low end. A walk-in with a center island, all-solid-wood construction, soft-close drawers, and a custom shoe wall is a very different project.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average custom closet cost per linear foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom closet work typically runs $150 to $500 per linear foot for wall-hung shelving systems and $300 to $900 per linear foot for fully custom built-in closet units with drawers and face frames. These are installed prices including design, materials, and labor. Per-linear-foot averages are useful for client budget conversations but should come out of your actual quote math, not be used to set the price upfront.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a walk-in closet cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom walk-in closet built by a woodworker typically ranges from $5,000 to $25,000 depending on size and specification. A smaller walk-in (5 by 8 feet) with painted MDF shelving, double hang sections, and basic hardware might be $5,000 to $8,000 installed. A larger walk-in (10 by 12 feet) in painted maple or white oak with a center island, soft-close drawers, shoe shelves, and a valet section can run $15,000 to $25,000 or more.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost difference between a reach-in and a walk-in closet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A reach-in closet (typically 6 to 8 feet wide, 24 inches deep) runs $1,500 to $6,000 custom built. A walk-in closet starts around $5,000 and can exceed $25,000 for a large, fully appointed space. Walk-ins cost more because of total linear footage, more component types (islands, benches, shoe walls), more complex installation in a three-dimensional space, and more hardware overall.",
      },
    },
    {
      "@type": "Question",
      name: "What drives custom closet prices up the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest cost drivers in custom closet work are: the number of drawers (each drawer adds cutting, assembly, slides, and face hardware), material choice (solid wood versus plywood versus MDF affects both material and finishing cost), a center island (adds significant material and installation complexity), finish type (painted finishes require more prep and coats than clear or natural finishes), and installation complexity (angled walls, low ceilings, or slab door closets that require precise fitting).",
      },
    },
    {
      "@type": "Question",
      name: "Should I charge by the linear foot or by the job for custom closet work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always quote by the job. Use per-linear-foot as a sanity check or client communication tool after you have built the real quote. A reach-in closet and a walk-in with a center island have completely different labor profiles even if they have the same total linear footage of shelving. Quote from actual material takeoffs and labor estimates for each specific project. CraftQuote automates this process so you can get to an accurate number without hours of spreadsheet work.",
      },
    },
  ],
};

const CLOSET_TYPES = [
  {
    type: "Reach-In Closet",
    description: "Single-door or bifold access, typically 6 to 8 ft wide, 24 inches deep",
    costRange: "$1,500 – $6,000 installed",
    drivers: "Shelf count, number of drawers, finish type",
  },
  {
    type: "Walk-In Closet (Small)",
    description: "5 by 8 ft or similar, L-shaped or U-shaped layout",
    costRange: "$5,000 – $10,000 installed",
    drivers: "Layout complexity, drawer count, hardware spec",
  },
  {
    type: "Walk-In Closet (Large)",
    description: "10 by 12 ft or larger, often with a center island or seating",
    costRange: "$12,000 – $25,000+ installed",
    drivers: "Island, shoe wall, material species, all-soft-close hardware",
  },
  {
    type: "Built-In Wardrobe",
    description: "Floor-to-ceiling built-in with solid doors, often in a bedroom alcove",
    costRange: "$3,000 – $12,000 installed",
    drivers: "Door count, interior fittings, integrated lighting",
  },
];

const COST_DRIVERS = [
  {
    factor: "Number of Drawers",
    impact: "High",
    detail: "Each drawer requires cutting a box, assembling it, installing a slide ($15 to $40 per slide), and fitting a face. A walk-in with 20 drawers has $300 to $800 in hardware alone, plus three to five hours of additional labor. Always count drawers as a separate line item.",
  },
  {
    factor: "Material Choice",
    impact: "High",
    detail: "Painted MDF is the most affordable substrate. Painted or stained plywood is stronger and holds fasteners better. Solid wood (maple, white oak, or walnut) for face frames and exposed panels adds significantly to material cost. Species choice on exposed surfaces affects both material and finishing labor.",
  },
  {
    factor: "Center Island or Bench",
    impact: "High",
    detail: "A center island in a walk-in closet is essentially a freestanding cabinet with a countertop, drawers on multiple sides, and a toe kick. It adds $2,000 to $6,000 to the project depending on size and drawer count. A built-in bench adds less but still requires framing, a seat panel, and sometimes interior storage.",
  },
  {
    factor: "Finish Type",
    impact: "Medium",
    detail: "Natural or clear finishes on plywood or MDF require sealing, sanding, and topcoat. Painted finishes require primer, filling, sanding, and multiple coats. Two-tone color schemes (painted interior, stained trim) add scheduling and masking time. Spray-applied finishes are faster and more durable than brushed-on finishes.",
  },
  {
    factor: "Installation Complexity",
    impact: "Medium",
    detail: "Square rooms with flat ceilings are the fastest to install. Angled ceilings, sloped floors, or irregular walls require scribing, custom cuts, and more fitting time. Closets in older homes often have out-of-plumb walls that require shimming, scribing, and custom filler pieces at every run.",
  },
  {
    factor: "Hardware Specification",
    impact: "Medium",
    detail: "Soft-close drawer slides, pull-out valet rods, rotating tie racks, belt organizers, and pull-out shoe shelves all add hardware cost and installation time. On a large walk-in, a full soft-close hardware package can add $400 to $1,200 to the material cost alone. Quote hardware as a separate line item from carcass and shelving.",
  },
];

export default function CustomClosetCost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-3xl px-2 py-8 lg:px-4">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Custom Closet Cost: What to Expect in 2026
          </h1>
          <p className="text-xl text-gray-600">
            Custom closet pricing depends on type, size, materials, and how many drawers are in the build. This guide covers what custom closets cost per linear foot, what drives prices up or down, and how woodworkers and finish carpenters can quote closet work accurately.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#cost-overview" className="hover:text-amber-600">1. Custom Closet Cost Overview</a></li>
            <li><a href="#closet-types" className="hover:text-amber-600">2. Cost by Closet Type</a></li>
            <li><a href="#cost-drivers" className="hover:text-amber-600">3. What Drives Custom Closet Prices Up or Down</a></li>
            <li><a href="#how-to-quote" className="hover:text-amber-600">4. How to Price a Custom Closet Build</a></li>
            <li><a href="#faq" className="hover:text-amber-600">5. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Section 1: Cost Overview */}
        <section id="cost-overview" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Closet Cost Overview</h2>
          <p className="text-gray-600 mb-6">
            Custom closet work ranges from a simple reach-in refresh to a full walk-in with a center island, drawers on three walls, and a built-in bench. The table below shows installed price ranges by tier. These are woodworker-built prices, not closet system dealer prices.
          </p>

          <div className="rounded-lg border border-gray-200 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Closet Type</th>
                  <th className="px-4 py-3 font-semibold">Typical Installed Cost</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Reach-In Closet</td>
                  <td className="px-4 py-3 text-gray-600">$1,500 – $6,000</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">6 to 8 ft wide, shelves + hanging</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Small Walk-In Closet</td>
                  <td className="px-4 py-3 text-gray-600">$5,000 – $10,000</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">5 by 8 ft, L or U layout</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Large Walk-In Closet</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">$12,000 – $25,000+</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">10 by 12 ft+, island, drawers</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Built-In Wardrobe</td>
                  <td className="px-4 py-3 text-gray-600">$3,000 – $12,000</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">Floor-to-ceiling, solid doors</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 mb-6">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-900">Per-linear-foot reference: </span>
              Wall-hung custom shelving typically runs $150 to $500 per linear foot installed. Fully built-in custom units with drawers and face frames run $300 to $900 per linear foot. These are rough benchmarks for client conversations. Your actual quote should come from a material and labor takeoff, not from a per-linear-foot average applied across the whole job.
            </p>
          </div>

          <p className="text-gray-600">
            The most common reason custom closet jobs lose money is underestimating drawer count and installation time. Count every drawer before quoting, and scope the installation conditions before committing to a price.
          </p>
        </section>

        {/* Section 2: Closet Types */}
        <section id="closet-types" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost by Closet Type</h2>
          <p className="text-gray-600 mb-6">
            Every closet type has a different material and labor profile. Quoting each type at a flat per-linear-foot rate will cost you money on complex jobs.
          </p>
          <div className="space-y-4">
            {CLOSET_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border border-gray-200 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.type}</h3>
                  <span className="text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded whitespace-nowrap self-start">{item.costRange}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                <p className="text-xs text-gray-500"><span className="font-medium">Key drivers: </span>{item.drivers}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Note on closet system dealers vs. custom woodworkers: </span>
              Dealer-supplied systems (California Closets, The Container Store, etc.) are typically $100 to $350 per linear foot installed using laminate-coated panels. Custom woodworker-built closets start around $150 per linear foot for simple shelving and go well above $500 per linear foot for all-wood, fully appointed built-ins. The difference is solid construction, unlimited sizing flexibility, and a finish that matches the rest of the home.
            </p>
          </div>
        </section>

        {/* Section 3: Cost Drivers */}
        <section id="cost-drivers" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Drives Custom Closet Prices Up or Down</h2>
          <p className="text-gray-600 mb-6">
            These six factors account for most of the variation in custom closet pricing. Understanding them lets you explain price differences to clients and catch scope creep before it erodes your margin.
          </p>
          <div className="space-y-4">
            {COST_DRIVERS.map((item) => (
              <div key={item.factor} className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-gray-900">{item.factor}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    item.impact === "High"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: How to Quote */}
        <section id="how-to-quote" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Price a Custom Closet Build</h2>
          <div className="space-y-5">
            {[
              {
                step: "Step 1",
                title: "Measure the space and list every component",
                text: (
                  <>
                    Measure closet width, depth, and ceiling height. List each section by type: single-hang, double-hang, shelf-only, drawer bank, shoe shelf, island, or bench. Walk-ins need a layout drawing before you can price accurately. Do not apply a per-linear-foot average across a U-shaped walk-in with a center island; it will not cover your real costs.
                  </>
                ),
              },
              {
                step: "Step 2",
                title: "Calculate sheet goods and solid wood",
                text: (
                  <>
                    Count shelves, side panels, drawer boxes, and backs. Estimate plywood or MDF sheets needed and add 10 to 15 percent waste. If using a hardwood species for face frames or exposed edges, calculate board feet separately. Use our{" "}
                    <Link href="/calculator" className="text-amber-600 hover:underline">board foot calculator</Link>
                    {" "}to price any solid lumber elements accurately.
                  </>
                ),
              },
              {
                step: "Step 3",
                title: "Price hardware per component",
                text: (
                  <>
                    Count every rod bracket, shelf pin, drawer slide, hinge, pull, valet rod, and specialty organizer. On a large walk-in, hardware alone can reach $600 to $1,500. Quote hardware as a line item, not buried in a per-linear-foot rate. Soft-close slides are expected on custom work and should be in your default specification.
                  </>
                ),
              },
              {
                step: "Step 4",
                title: "Estimate labor by phase",
                text: (
                  <>
                    Break labor into: design and layout, shop cutting and prep, component assembly, site installation, and touch-up. Multiply total hours by your shop rate. For help setting a profitable shop rate, see the{" "}
                    <Link href="/pricing-guide" className="text-amber-600 hover:underline">pricing guide</Link>.
                    {" "}Installation in a three-dimensional walk-in space takes longer than a reach-in. Scope conditions before committing to a flat installation price.
                  </>
                ),
              },
              {
                step: "Step 5",
                title: "Apply overhead and profit margin",
                text: (
                  <>
                    Overhead is not profit. It is the cost of your shop, vehicle, insurance, and tools running regardless of which job you are on. Calculate your per-hour overhead rate, apply it to project hours, then add your profit margin of 20 to 30 percent on top of total cost. See the{" "}
                    <Link href="/cabinet-pricing" className="text-amber-600 hover:underline">cabinet pricing guide</Link>
                    {" "}for more on overhead allocation.
                  </>
                ),
              },
            ].map(({ step, title, text }) => (
              <div key={step} className="rounded-lg border border-gray-200 p-5">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">{step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gray-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Build custom closet quotes in minutes, not hours.
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
              CraftQuote handles material calculations, labor breakdown, overhead, and margin automatically. Upload a photo of the closet space, enter your specs, and send a professional, itemized quote to your client. Free with no account required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote-builder"
                className="inline-block rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
              >
                Start Building a Quote
              </Link>
              <Link
                href="/quote-template"
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                See the Quote Template
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <dl className="divide-y divide-gray-200">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="py-6">
                <dt className="text-lg font-semibold text-gray-900 mb-3">{item.name}</dt>
                <dd className="text-gray-600 leading-relaxed">{item.acceptedAnswer.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="space-y-3 text-sm">
              <div>
                <Link href="/cabinet-pricing" className="font-semibold text-amber-700 hover:underline">
                  Custom Cabinet Pricing Guide
                </Link>
                <p className="text-gray-600 mt-0.5">How to price custom cabinet work per linear foot, what drives cabinet costs, and how to quote a cabinet job accurately.</p>
              </div>
              <div>
                <Link href="/pricing-guide" className="font-semibold text-amber-700 hover:underline">
                  How to Price Custom Furniture Projects
                </Link>
                <p className="text-gray-600 mt-0.5">The full pricing methodology: shop rate, overhead allocation, material costs, and profit margin targets for any custom woodworking project.</p>
              </div>
              <div>
                <Link href="/calculator" className="font-semibold text-amber-700 hover:underline">
                  Board Foot Calculator
                </Link>
                <p className="text-gray-600 mt-0.5">Calculate lumber volume and material cost for solid-wood components across 12 common hardwoods and softwoods.</p>
              </div>
              <div>
                <Link href="/quote-template" className="font-semibold text-amber-700 hover:underline">
                  Woodworking Quote Template
                </Link>
                <p className="text-gray-600 mt-0.5">Every section a professional quote needs, with a complete worked example for custom furniture and cabinet work.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
