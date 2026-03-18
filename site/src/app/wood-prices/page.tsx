import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hardwood Prices Per Board Foot: 2026 Pricing Guide",
  description:
    "Current hardwood lumber prices per board foot for walnut, cherry, maple, white oak, and 10+ species. Use these numbers to estimate material costs for custom furniture and woodworking projects.",
  keywords: [
    "walnut price per board foot",
    "walnut board foot price",
    "black walnut price per board foot",
    "cherry wood price per board foot",
    "hardwood prices per board foot",
    "wood prices per board foot",
    "board foot price for walnut",
    "white oak price per board foot",
    "maple price per board foot",
  ],
  alternates: {
    canonical: "https://customwoodquote.com/wood-prices",
  },
  openGraph: {
    title: "Hardwood Prices Per Board Foot: 2026 Pricing Guide",
    description:
      "Current hardwood lumber prices per board foot for walnut, cherry, maple, white oak, and 10+ species. Estimate material costs for any custom furniture or woodworking project.",
    type: "article",
    url: "https://customwoodquote.com/wood-prices",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hardwood Prices Per Board Foot - CraftQuote",
      },
    ],
    publishedTime: "2026-03-18T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardwood Prices Per Board Foot: 2026 Pricing Guide",
    description:
      "Walnut, cherry, maple, white oak pricing per board foot. Estimate lumber costs for furniture and woodworking projects.",
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
      name: "Hardwood Prices Per Board Foot",
      item: "https://customwoodquote.com/wood-prices",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does walnut cost per board foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Black walnut typically runs $10 to $18 per board foot for surfaced lumber from a specialty hardwood dealer, and $6 to $12 per board foot for rough-sawn from a local sawyer or mill. Wide figured slabs for live-edge tables can reach $25 to $50 per board foot. Prices vary by region, grade, thickness, and whether the wood is kiln-dried or air-dried.",
      },
    },
    {
      "@type": "Question",
      name: "What is the current price of black walnut per board foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of 2026, black walnut runs approximately $10 to $18 per board foot for surfaced (S2S or S4S) lumber in common grades, and $14 to $22 per board foot for FAS (firsts and seconds) grade with long clear runs. Rough-sawn walnut from a local sawyer is typically $6 to $12 per board foot. Demand for walnut has kept prices elevated, and supply from central and eastern US forests remains the primary price driver.",
      },
    },
    {
      "@type": "Question",
      name: "How much does cherry wood cost per board foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "American black cherry typically runs $6 to $11 per board foot surfaced from a hardwood dealer, and $4 to $8 per board foot rough-sawn. Cherry is one of the most popular domestic hardwoods for furniture because it machines well, finishes beautifully, and costs significantly less than walnut while still reading as a premium species to customers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most expensive domestic hardwood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Among widely available domestic hardwoods, black walnut and figured maple (curly, birdseye) command the highest prices at $10 to $20 per board foot or more. Specialty figured slabs, large-format live-edge pieces, and bookmatched walnut can reach $30 to $60 per board foot. Exotic imported species like ebony, rosewood, and bocote are more expensive but subject to import restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "How do I estimate lumber cost for a furniture project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the board feet required by the price per board foot for your species, then add a waste factor of 15 to 25 percent for defects, rough-sawing, and dimensional loss during milling. A dining table top in walnut might require 25 to 35 board feet of rough lumber to net 20 board feet of finished material. Use CraftQuote's free board foot calculator at customwoodquote.com/calculator to compute volume and cost automatically.",
      },
    },
    {
      "@type": "Question",
      name: "Why is walnut more expensive than maple or oak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Black walnut grows more slowly than maple and oak, produces lower volumes of clear lumber per tree, and faces strong export demand particularly from Europe and Asia. Walnut's rich chocolate color requires no staining, which drives demand for furniture and cabinetry. Maple and white oak are faster-growing, more abundant, and produce higher yields of clear lumber, keeping their prices lower despite comparable workability and strength.",
      },
    },
  ],
};

const SPECIES = [
  {
    name: "Black Walnut",
    roughPerBf: "$6 – $12",
    surfacedPerBf: "$10 – $18",
    tier: "Premium",
    uses: "Dining tables, desks, cabinets",
    notes: "Most sought-after domestic hardwood. Rich brown color with no stain needed.",
  },
  {
    name: "White Oak",
    roughPerBf: "$5 – $10",
    surfacedPerBf: "$8 – $15",
    tier: "Premium",
    uses: "Dining tables, flooring, cabinets",
    notes: "Strong, stable, and trending. Quarter-sawn figure commands a premium.",
  },
  {
    name: "American Black Cherry",
    roughPerBf: "$4 – $8",
    surfacedPerBf: "$6 – $11",
    tier: "Mid-Range",
    uses: "Bedroom furniture, dining, built-ins",
    notes: "Ages to deep amber-red. Excellent for fine furniture.",
  },
  {
    name: "Hard Maple",
    roughPerBf: "$3 – $6",
    surfacedPerBf: "$5 – $9",
    tier: "Mid-Range",
    uses: "Workbenches, cutting boards, flooring",
    notes: "Figured maple (curly, birdseye) costs 2 to 4 times more.",
  },
  {
    name: "Red Oak",
    roughPerBf: "$2 – $5",
    surfacedPerBf: "$4 – $7",
    tier: "Budget",
    uses: "General furniture, cabinets, flooring",
    notes: "Most abundant US hardwood. Strong and easy to work.",
  },
  {
    name: "Ash",
    roughPerBf: "$3 – $6",
    surfacedPerBf: "$5 – $9",
    tier: "Mid-Range",
    uses: "Tool handles, sporting goods, furniture",
    notes: "Excellent shock resistance. Similar figure to oak.",
  },
  {
    name: "Poplar",
    roughPerBf: "$2 – $4",
    surfacedPerBf: "$3 – $6",
    tier: "Budget",
    uses: "Painted cabinets, drawer boxes, secondary wood",
    notes: "Not for natural finish. Best value for painted work.",
  },
  {
    name: "Alder",
    roughPerBf: "$2 – $4",
    surfacedPerBf: "$3 – $6",
    tier: "Budget",
    uses: "Painted or stained cabinets, furniture",
    notes: "Very consistent grain. Popular in west coast shops.",
  },
  {
    name: "Hickory",
    roughPerBf: "$3 – $6",
    surfacedPerBf: "$5 – $8",
    tier: "Mid-Range",
    uses: "Rustic furniture, flooring, tool handles",
    notes: "Hardest domestic hardwood. Bold grain contrast.",
  },
  {
    name: "Eastern Black Walnut (Slab)",
    roughPerBf: "$12 – $30",
    surfacedPerBf: "$18 – $50+",
    tier: "Premium",
    uses: "Live-edge tables, statement pieces",
    notes: "Wide figured slabs at a major premium. Price by the piece.",
  },
  {
    name: "Douglas Fir",
    roughPerBf: "$2 – $4",
    surfacedPerBf: "$3 – $6",
    tier: "Budget",
    uses: "Structural, rustic furniture, shelving",
    notes: "Softwood. Common in reclaimed and industrial-look work.",
  },
  {
    name: "Eastern White Pine",
    roughPerBf: "$1 – $3",
    surfacedPerBf: "$2 – $5",
    tier: "Budget",
    uses: "Painted furniture, country/cottage style",
    notes: "Softest option. Dents easily but excellent for painted traditional work.",
  },
];

export default function WoodPrices() {
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

      <article className="mx-auto max-w-3xl px-2 py-8 lg:px-4">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Hardwood Prices Per Board Foot
          </h1>
          <p className="text-xl text-gray-600">
            Current price ranges for walnut, cherry, white oak, maple, and 10+ species. Use these numbers to estimate lumber costs before you quote a custom furniture or woodworking project.
          </p>
          <p className="text-sm text-gray-400 mt-3">Updated March 2026</p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#pricing-table" className="hover:text-amber-600">1. Hardwood Pricing Table</a></li>
            <li><a href="#walnut" className="hover:text-amber-600">2. Black Walnut Price Per Board Foot</a></li>
            <li><a href="#cherry" className="hover:text-amber-600">3. Cherry Wood Price Per Board Foot</a></li>
            <li><a href="#white-oak" className="hover:text-amber-600">4. White Oak Price Per Board Foot</a></li>
            <li><a href="#estimating" className="hover:text-amber-600">5. How to Estimate Lumber Costs</a></li>
            <li><a href="#faq" className="hover:text-amber-600">6. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Section 1: Pricing Table */}
        <section id="pricing-table" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hardwood Pricing Table</h2>
          <p className="text-gray-600 mb-6">
            Prices below represent typical retail ranges from US hardwood dealers and specialty lumber yards as of early 2026. Rough-sawn prices are unplaned lumber from a sawyer or mill. Surfaced prices are for S2S or S4S stock from a retail hardwood dealer. Your local market will vary by 20 to 30 percent in either direction.
          </p>

          <div className="rounded-lg border border-gray-200 overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Species</th>
                  <th className="px-4 py-3 font-semibold">Rough (per bf)</th>
                  <th className="px-4 py-3 font-semibold">Surfaced (per bf)</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SPECIES.map((s) => (
                  <tr key={s.name} className={s.tier === "Premium" ? "bg-amber-50/40" : ""}>
                    <td className="px-4 py-3 font-medium text-gray-900">{s.name}</td>
                    <td className="px-4 py-3 text-gray-600">{s.roughPerBf}</td>
                    <td className="px-4 py-3 text-gray-600">{s.surfacedPerBf}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          s.tier === "Premium"
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : s.tier === "Mid-Range"
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "bg-gray-100 text-gray-600 border border-gray-200"
                        }`}
                      >
                        {s.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 mb-4">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-900">Add a waste factor: </span>
              When buying rough-sawn lumber, budget 15 to 25 percent more volume than your finished part list requires. Defects, warp, and milling loss are normal. Wide or figured stock often has more waste than standard-grade boards.
            </p>
          </div>
        </section>

        {/* Section 2: Walnut */}
        <section id="walnut" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Black Walnut Price Per Board Foot</h2>
          <p className="text-gray-600 mb-4">
            Black walnut is the most in-demand domestic hardwood for custom furniture, and it commands the highest price among commonly available species. As of early 2026, typical retail pricing from a hardwood dealer runs:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 pl-2">
            <li><span className="font-medium text-gray-900">Rough-sawn (from a local sawyer or mill):</span> $6 to $12 per board foot</li>
            <li><span className="font-medium text-gray-900">Surfaced S2S or S4S (from a hardwood dealer):</span> $10 to $18 per board foot</li>
            <li><span className="font-medium text-gray-900">FAS grade with long clear runs:</span> $14 to $22 per board foot</li>
            <li><span className="font-medium text-gray-900">Wide slabs (live-edge, figured):</span> $20 to $50+ per board foot</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Walnut prices vary by region. The central US (Indiana, Ohio, Missouri) where most walnut grows tends to have the lowest local prices. Buyers on the coasts pay a freight premium of $1 to $3 per board foot on top of mill prices.
          </p>
          <div className="rounded-lg border border-gray-200 p-5 mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2">Why walnut is expensive</h3>
            <p className="text-sm text-gray-600 mb-3">
              Black walnut grows more slowly than maple or oak, produces less clear lumber per tree, and faces strong export demand from Europe and Asia. Its rich chocolate-brown color requires no stain, which drives premium pricing for furniture and cabinetry.
            </p>
            <p className="text-sm text-gray-600">
              For most custom furniture projects, walnut is worth the material cost because customers associate it with quality and craftsmen can charge accordingly. A walnut dining table commands a higher selling price than the same design in red oak, and the material cost difference rarely exceeds $200 to $400 on a typical table.
            </p>
          </div>
          <p className="text-gray-600">
            Use our{" "}
            <Link href="/calculator" className="text-amber-600 hover:underline">
              board foot calculator
            </Link>{" "}
            to compute total walnut material cost for your project dimensions.
          </p>
        </section>

        {/* Section 3: Cherry */}
        <section id="cherry" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cherry Wood Price Per Board Foot</h2>
          <p className="text-gray-600 mb-4">
            American black cherry is one of the best values in domestic hardwoods for furniture work. It machines cleanly, finishes beautifully, and darkens to a rich amber-red with age and light exposure. Current retail pricing:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 pl-2">
            <li><span className="font-medium text-gray-900">Rough-sawn:</span> $4 to $8 per board foot</li>
            <li><span className="font-medium text-gray-900">Surfaced S2S or S4S:</span> $6 to $11 per board foot</li>
            <li><span className="font-medium text-gray-900">FAS grade:</span> $9 to $13 per board foot</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Cherry is grown primarily in the northeastern US and Appalachian region. It remains more affordable than walnut while still signaling premium craftsmanship to buyers. For bedroom furniture and traditional-style pieces, cherry is often the first choice for shops targeting the $3,000 to $8,000 furniture segment.
          </p>
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-900">Cherry patinas over time: </span>
              New cherry is a light pinkish-tan. After 6 to 18 months of light exposure, it deepens to the rich reddish-brown associated with antique cherry furniture. Inform customers of this so they understand the long-term look of the piece.
            </p>
          </div>
        </section>

        {/* Section 4: White Oak */}
        <section id="white-oak" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">White Oak Price Per Board Foot</h2>
          <p className="text-gray-600 mb-4">
            White oak has surged in demand over the last decade, driven by its use in Scandinavian-influenced furniture design and its compatibility with water-based and oil finishes. It is now priced close to walnut in many markets. Current retail pricing:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 pl-2">
            <li><span className="font-medium text-gray-900">Rough-sawn:</span> $5 to $10 per board foot</li>
            <li><span className="font-medium text-gray-900">Surfaced:</span> $8 to $15 per board foot</li>
            <li><span className="font-medium text-gray-900">Quarter-sawn (for ray fleck figure):</span> $12 to $20 per board foot</li>
          </ul>
          <p className="text-gray-600">
            Quarter-sawn white oak is significantly more expensive than flat-sawn because the yield per log is lower. It produces the distinctive ray-fleck figure popular in Arts and Crafts and mission furniture styles and in contemporary Scandinavian designs.
          </p>
        </section>

        {/* Section 5: Estimating */}
        <section id="estimating" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Estimate Lumber Costs for a Project</h2>
          <div className="space-y-5">
            {[
              {
                step: "Step 1",
                title: "Build a parts list",
                text: "List every part in the project: top panels, legs, aprons, drawer fronts, case sides, shelves, and any secondary wood components. Record the finished dimensions (length, width, thickness) for each part.",
              },
              {
                step: "Step 2",
                title: "Calculate board feet per part",
                text: "Board feet = (thickness in inches × width in inches × length in inches) ÷ 144. For a dining table top that is 1.5\" thick × 36\" wide × 84\" long: (1.5 × 36 × 84) ÷ 144 = 31.5 board feet finished. Add 20 percent waste to get 38 board feet to purchase.",
              },
              {
                step: "Step 3",
                title: "Add waste",
                text: "Add 15 to 25 percent to your total board footage for defects, warp, and milling loss. Use 20 percent as a default. Figured or wide stock and rough-sawn lumber both warrant 25 percent or more.",
              },
              {
                step: "Step 4",
                title: "Multiply by species price",
                text: "Multiply total board feet (with waste) by your actual lumber cost per board foot. If you pay $12/bf for walnut and need 38 board feet, your material cost is $456. Always use your actual supplier price, not a guideline number, when building a real quote.",
              },
              {
                step: "Step 5",
                title: "Add material markup",
                text: "Most shops add a 10 to 20 percent material markup to cover sourcing time, delivery costs, and the risk of material defects discovered mid-project. This is standard in custom work and should be clearly stated in your quote.",
              },
            ].map(({ step, title, text }) => (
              <div key={step} className="rounded-lg border border-gray-200 p-5">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">{step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-gray-900 p-6 text-center">
            <p className="text-white font-semibold mb-2">Skip the math</p>
            <p className="text-gray-300 text-sm mb-4">
              Enter your project dimensions and species in the board foot calculator. It computes volume and material cost instantly.
            </p>
            <Link
              href="/calculator"
              className="inline-block rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-500"
            >
              Open the Board Foot Calculator
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
                <Link href="/calculator" className="font-semibold text-amber-700 hover:underline">
                  Board Foot Calculator
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Calculate total lumber volume and material cost for any project dimensions across 12 common species.
                </p>
              </div>
              <div>
                <Link href="/pricing-guide" className="font-semibold text-amber-700 hover:underline">
                  How to Price Custom Furniture
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Full methodology: material costs, shop rate, labor, overhead, and profit margin targets for custom woodworking.
                </p>
              </div>
              <div>
                <Link href="/cabinet-pricing" className="font-semibold text-amber-700 hover:underline">
                  Custom Cabinet Pricing Guide
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Cabinet-specific pricing: cost per linear foot, door styles, hardware, and how to build a cabinet quote.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
