import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Walnut Slab Prices: 2026 Guide for Live Edge Table Makers",
  description:
    "Current walnut slab prices by width and grade for 2026. Live edge walnut slab costs, other species options, and how to price a live edge table project.",
  keywords: [
    "walnut slab prices",
    "live edge walnut slab",
    "walnut slab price per board foot",
    "live edge slab prices",
    "live edge wood prices",
    "walnut slab cost",
    "live edge table cost",
    "walnut dining table slab",
  ],
  alternates: {
    canonical: "https://customwoodquote.com/walnut-slab-prices",
  },
  openGraph: {
    title: "Walnut Slab Prices: 2026 Guide for Live Edge Table Makers",
    description:
      "Current walnut slab prices by width and grade. What to expect when buying a live edge walnut slab and how to price the finished table.",
    type: "article",
    url: "https://customwoodquote.com/walnut-slab-prices",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Walnut Slab Prices 2026 - CraftQuote",
      },
    ],
    publishedTime: "2026-03-19T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walnut Slab Prices: 2026 Guide for Live Edge Table Makers",
    description:
      "Walnut slab price ranges by width and grade plus how to price a live edge table project.",
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
      name: "Walnut Slab Prices",
      item: "https://customwoodquote.com/walnut-slab-prices",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do walnut slabs cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Walnut slabs range from $15 to $40 per board foot for standard widths (12 to 20 inches), $25 to $60 per board foot for wide slabs (20 to 36 inches), and $40 to $100+ per board foot for extra-wide figured slabs over 36 inches. A typical live edge walnut dining table slab (roughly 10 to 14 board feet) costs $300 to $700 for a narrow slab and $600 to $2,000 or more for a wide bookmatched pair.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a live edge slab and regular lumber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A live edge slab is a wide, flat-sawn cut from a single log that retains the natural outer edge of the tree. Unlike standard dimensional lumber, which is milled to a consistent width and has squared edges, a slab preserves the organic shape of the log, including natural curves, bark inclusions, and figure. Slabs are sold by the piece or by board foot and priced by width, figure, and species rather than grade alone.",
      },
    },
    {
      "@type": "Question",
      name: "How much should I charge for a live edge walnut table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A live edge walnut dining table typically sells for $2,500 to $8,000 depending on slab width, length, and base design. To price it: calculate slab cost ($400 to $1,500 for the slab), add base materials ($100 to $400 for steel or solid wood), add labor at your shop rate (15 to 30 hours at $65 to $120 per hour), add overhead (10 to 20 percent), then apply your target margin (20 to 40 percent). CraftQuote automates this calculation.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy live edge walnut slabs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best sources for live edge walnut slabs are specialty hardwood dealers (Woodcraft, Hearne Hardwoods, Cook Woods), local sawyers and urban mills (check local Facebook groups, Craigslist, and sawmill directories), lumber auctions, and direct from arborists who process large-diameter trees. Buying locally saves shipping costs, which for heavy slabs can run $100 to $400 depending on distance.",
      },
    },
    {
      "@type": "Question",
      name: "How many board feet is a live edge dining table slab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard live edge dining table slab for four to six people (roughly 32 to 40 inches wide by 72 to 84 inches long at 1.75 to 2 inches thick) measures approximately 24 to 40 board feet. A wide slab for an 8-person table can exceed 50 board feet. Slabs are often sold as matched pairs (bookmatched) where two sequential slices from the same log are opened like a book to create a wider top.",
      },
    },
    {
      "@type": "Question",
      name: "Is walnut or white oak better for a live edge table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both are excellent for live edge tables. Walnut offers a rich chocolate-brown color with no staining needed and commands the highest resale value. White oak is lighter and more neutral, works well with Scandinavian and contemporary styles, and costs $5 to $15 per board foot less on average. Elm, cherry, and maple are also common live edge species. The best choice depends on the client's aesthetic preferences and project budget.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Price a Live Edge Walnut Table",
  description:
    "Step-by-step method for calculating the cost and sale price of a custom live edge table.",
  step: [
    {
      "@type": "HowToStep",
      name: "Cost the slab",
      text: "Get a quote or purchase the slab and record the actual price paid. If the slab is from your inventory, use what you paid plus a markup of 15 to 20 percent to cover carrying cost and sourcing time.",
    },
    {
      "@type": "HowToStep",
      name: "Add base and hardware materials",
      text: "Price the base materials: steel tube and plate for a metal base ($80 to $250 in material), or solid wood for a trestle or turned-leg base ($100 to $300). Add fasteners, levelers, and finish products.",
    },
    {
      "@type": "HowToStep",
      name: "Estimate labor hours",
      text: "A live edge table typically takes 15 to 35 hours depending on base complexity. Breakdown: slab prep and flattening (4 to 8 hours), finish sanding and sealing (4 to 6 hours), base fabrication (4 to 12 hours), assembly and delivery (2 to 4 hours).",
    },
    {
      "@type": "HowToStep",
      name: "Add overhead and shop costs",
      text: "Multiply total labor cost by an overhead rate of 10 to 25 percent to cover consumables, shop utilities, tool wear, and insurance. A $1,200 labor cost at 20 percent overhead adds $240.",
    },
    {
      "@type": "HowToStep",
      name: "Apply your margin",
      text: "Add a profit margin of 20 to 40 percent on top of your total cost. Custom live edge tables support higher margins because of their unique character. Generate a professional quote in CraftQuote with the full itemized breakdown.",
    },
  ],
};

const SLAB_PRICING = [
  {
    width: "Under 12 inches",
    grade: "Standard grain",
    pricePerBf: "$10 – $20",
    notes: "Narrower pieces; often used for shelves, benches, and accent pieces",
  },
  {
    width: "12 – 20 inches",
    grade: "Standard",
    pricePerBf: "$15 – $35",
    notes: "Entry-level slab width; suitable for small coffee tables and benches",
  },
  {
    width: "20 – 30 inches",
    grade: "Standard",
    pricePerBf: "$20 – $45",
    notes: "Common for narrow dining tables and console tables",
  },
  {
    width: "30 – 42 inches",
    grade: "Wide slab",
    pricePerBf: "$30 – $65",
    notes: "Comfortable dining width; most sought-after range",
  },
  {
    width: "42 – 60 inches",
    grade: "Extra wide",
    pricePerBf: "$45 – $100+",
    notes: "Conference tables and statement dining tables; limited supply",
  },
  {
    width: "Any width",
    grade: "Figured / crotch / burl",
    pricePerBf: "$50 – $150+",
    notes: "Rare grain patterns; priced by the piece more than by the board foot",
  },
];

const OTHER_SPECIES = [
  {
    species: "White Oak",
    priceRange: "$12 – $35 per bf",
    look: "Light tan, tight grain, ray fleck figure when quarter-sawn",
    bestFor: "Scandinavian and contemporary designs",
  },
  {
    species: "American Black Cherry",
    priceRange: "$10 – $25 per bf",
    look: "Light pink-tan that deepens to amber-red with age",
    bestFor: "Traditional and Shaker-style furniture",
  },
  {
    species: "Hard Maple",
    priceRange: "$8 – $20 per bf (figured 2x to 4x)",
    look: "Creamy white with subtle figure; curly maple has dramatic shimmer",
    bestFor: "Light-colored or painted designs; high-contrast figure pieces",
  },
  {
    species: "American Elm",
    priceRange: "$10 – $25 per bf",
    look: "Interlocked grain with tan and brown tones; wide slabs common",
    bestFor: "Rustic and organic designs; often available in very wide widths",
  },
  {
    species: "Sycamore",
    priceRange: "$8 – $20 per bf",
    look: "Creamy with lacewood-like figure; distinctive quarter-sawn fleck",
    bestFor: "Unique grain character at a lower price point than walnut",
  },
  {
    species: "Claro Walnut",
    priceRange: "$20 – $60 per bf",
    look: "More figured than black walnut; streaks of green, purple, and brown",
    bestFor: "Statement pieces; primarily sourced in California and Pacific Northwest",
  },
];

export default function WalnutSlabPrices() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <article className="mx-auto max-w-3xl px-2 py-8 lg:px-4">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Walnut Slab Prices
          </h1>
          <p className="text-xl text-gray-600">
            Current price ranges for live edge walnut slabs by width and grade, plus how to price a finished table for your client.
          </p>
          <p className="text-sm text-gray-400 mt-3">Updated March 2026</p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#slab-pricing" className="hover:text-amber-600">1. Walnut Slab Price by Width</a></li>
            <li><a href="#what-affects-price" className="hover:text-amber-600">2. What Affects Slab Price</a></li>
            <li><a href="#other-species" className="hover:text-amber-600">3. Other Species for Live Edge Work</a></li>
            <li><a href="#how-to-price" className="hover:text-amber-600">4. How to Price a Live Edge Table</a></li>
            <li><a href="#faq" className="hover:text-amber-600">5. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Section 1: Pricing by Width */}
        <section id="slab-pricing" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Walnut Slab Price by Width</h2>
          <p className="text-gray-600 mb-6">
            Live edge walnut slabs are sold by the board foot and priced primarily by width. Wider, clearer, and more figured slabs command significant premiums over narrow or standard-grain pieces. The table below covers typical retail prices from specialty hardwood dealers in the US as of early 2026.
          </p>

          <div className="rounded-lg border border-gray-200 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Width</th>
                  <th className="px-4 py-3 font-semibold">Grade</th>
                  <th className="px-4 py-3 font-semibold">Price per Board Foot</th>
                  <th className="px-4 py-3 font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SLAB_PRICING.map((row) => (
                  <tr
                    key={row.width + row.grade}
                    className={row.grade === "Extra wide" || row.grade === "Figured / crotch / burl" ? "bg-amber-50/40" : ""}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{row.width}</td>
                    <td className="px-4 py-3 text-gray-600">{row.grade}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.pricePerBf}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-900">Board feet in a dining table slab: </span>
              A 36-inch-wide by 84-inch-long slab at 2 inches thick is approximately 42 board feet. At $35 per board foot, that is $1,470 in slab cost alone, before labor, base materials, or finish. Use the{" "}
              <Link href="/calculator" className="text-amber-700 hover:underline font-medium">
                board foot calculator
              </Link>{" "}
              to compute exact volume for your dimensions.
            </p>
          </div>
        </section>

        {/* Section 2: What Affects Price */}
        <section id="what-affects-price" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Affects Walnut Slab Price</h2>
          <div className="space-y-4">
            {[
              {
                title: "Width",
                impact: "High",
                text: "Width is the single biggest price driver. A 40-inch walnut slab can cost 2 to 3 times more per board foot than a 16-inch slab from the same tree. Wide, clear walnut is rare because most trees do not produce straight logs large enough to yield wide clear slabs.",
              },
              {
                title: "Figure and grain pattern",
                impact: "High",
                text: "Figured walnut (crotch figure, curl, ribbon stripe) commands a significant premium because it is rare and cannot be replicated. Crotch pieces where two main limbs split from the trunk produce dramatic feather-figure patterns priced by the piece rather than the board foot.",
              },
              {
                title: "Thickness",
                impact: "Medium",
                text: "Most live edge table slabs are cut at 2 to 3 inches thick to allow for flattening and finishing while leaving a substantial 1.5 to 2-inch finished thickness. Thicker slabs cost more but offer more material to work with and a more substantial presence.",
              },
              {
                title: "Kiln-dried vs. air-dried",
                impact: "Medium",
                text: "Kiln-dried slabs are ready to work and cost 10 to 20 percent more than air-dried material. Air-dried slabs require additional acclimation time (often 6 to 12 months) and carry a higher risk of movement during and after build. Kiln-dried is preferred for most shop projects.",
              },
              {
                title: "Source and region",
                impact: "Medium",
                text: "Slabs purchased from a local sawyer or urban mill cost 30 to 50 percent less than the same material from a specialty retailer. Central US buyers near Indiana, Ohio, and Missouri pay less than coastal buyers who absorb freight costs. Shipping a single large walnut slab can add $150 to $400.",
              },
              {
                title: "Bookmatched pair",
                impact: "High",
                text: "Bookmatched pairs, two sequential slabs flipped open to create a mirror image for a wide top, are priced as a set. Expect to pay 30 to 60 percent more for a matched pair than for two random slabs of the same species and width because matching pairs are rare and require sawing at a specific interval.",
              },
            ].map(({ title, impact, text }) => (
              <div key={title} className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      impact === "High"
                        ? "bg-amber-100 text-amber-800 border border-amber-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {impact} impact
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Other Species */}
        <section id="other-species" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Species for Live Edge Work</h2>
          <p className="text-gray-600 mb-6">
            Walnut is the most popular species for live edge furniture, but other domestic hardwoods produce excellent slabs at a lower price point. The table below covers the most common alternatives.
          </p>

          <div className="space-y-4">
            {OTHER_SPECIES.map((s) => (
              <div key={s.species} className="rounded-lg border border-gray-200 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{s.species}</h3>
                  <span className="text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5 whitespace-nowrap">
                    {s.priceRange}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-gray-700">Look: </span>{s.look}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-700">Best for: </span>{s.bestFor}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            For per board foot pricing on dimensional lumber across all domestic species, see our{" "}
            <Link href="/wood-prices" className="text-amber-600 hover:underline">
              hardwood prices guide
            </Link>
            . For species selection by furniture type, see{" "}
            <Link href="/best-wood-for-furniture" className="text-amber-600 hover:underline">
              best wood for furniture
            </Link>
            .
          </p>
        </section>

        {/* Section 4: How to Price */}
        <section id="how-to-price" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Price a Live Edge Table</h2>
          <p className="text-gray-600 mb-6">
            Live edge tables are often the highest-margin piece a custom woodworker builds because clients expect a premium and the unique character of the slab justifies it. The steps below walk through a full cost buildup.
          </p>

          <div className="space-y-4 mb-8">
            {howToSchema.step.map((step, i) => (
              <div key={step.name} className="rounded-lg border border-gray-200 p-5">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">
                  Step {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* Example Estimate */}
          <div className="rounded-lg border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-900 px-5 py-3">
              <h3 className="text-white font-semibold">Example: Walnut Dining Table for 6</h3>
              <p className="text-gray-400 text-sm">36&quot; wide x 84&quot; long, live edge top with steel hairpin legs</p>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: "Walnut slab (28 bf at $35/bf)", amount: "$980" },
                { label: "Steel hairpin legs (set of 4)", amount: "$180" },
                { label: "Finish (epoxy filler, oil, wax)", amount: "$65" },
                { label: "Labor: 22 hours at $85/hr", amount: "$1,870" },
                { label: "Overhead (15%)", amount: "$431" },
                { label: "Subtotal (cost)", amount: "$3,526", bold: true },
                { label: "Profit margin (30%)", amount: "$1,509" },
                { label: "Sale price", amount: "$5,035", bold: true, highlight: true },
              ].map(({ label, amount, bold, highlight }) => (
                <div
                  key={label}
                  className={`flex justify-between px-5 py-3 text-sm ${
                    highlight ? "bg-amber-50" : ""
                  }`}
                >
                  <span className={bold ? "font-semibold text-gray-900" : "text-gray-600"}>
                    {label}
                  </span>
                  <span className={bold ? "font-semibold text-gray-900" : "text-gray-600"}>
                    {amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-gray-900 p-6 text-center">
            <p className="text-white font-semibold mb-2">Build this quote in CraftQuote</p>
            <p className="text-gray-300 text-sm mb-4">
              Enter your slab cost, base materials, and labor hours. CraftQuote calculates overhead and margin and generates a professional PDF you can send to your client.
            </p>
            <Link
              href="/projects/new"
              className="inline-block rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-500"
            >
              Start a Live Edge Table Quote
            </Link>
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
                <Link href="/wood-prices" className="font-semibold text-amber-700 hover:underline">
                  Hardwood Prices Per Board Foot
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Dimensional lumber price ranges for walnut, cherry, white oak, maple, and 10 other species.
                </p>
              </div>
              <div>
                <Link href="/calculator" className="font-semibold text-amber-700 hover:underline">
                  Board Foot Calculator
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Calculate total board footage and material cost for any slab or lumber project.
                </p>
              </div>
              <div>
                <Link href="/pricing-guide" className="font-semibold text-amber-700 hover:underline">
                  How to Price Custom Furniture
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Full pricing methodology: shop rate, labor, overhead, and profit margin for custom woodworking.
                </p>
              </div>
              <div>
                <Link href="/best-wood-for-furniture" className="font-semibold text-amber-700 hover:underline">
                  Best Wood for Furniture
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Species comparison guide for dining tables, cabinets, shelves, and outdoor furniture.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
