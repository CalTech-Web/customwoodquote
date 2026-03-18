import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Wood for Furniture: Choosing the Right Hardwood for Every Project",
  description:
    "Which wood is best for furniture? Compare hardwoods for dining tables, cabinets, shelves, outdoor furniture, and more. Species-by-species guide with strength, workability, cost, and best-use ratings.",
  keywords: [
    "best wood for furniture",
    "best hardwood for furniture",
    "best wood for dining table",
    "best wood for cabinets",
    "best wood for shelves",
    "best wood for outdoor furniture",
    "best wood for coffee table",
    "best wood for a desk",
    "hardwood for furniture making",
    "types of hardwood for furniture",
  ],
  alternates: {
    canonical: "https://customwoodquote.com/best-wood-for-furniture",
  },
  openGraph: {
    title: "Best Wood for Furniture: Choosing the Right Hardwood for Every Project",
    description:
      "Compare hardwoods for dining tables, cabinets, shelves, and outdoor furniture. Ratings for strength, workability, appearance, and cost with a full species comparison table.",
    type: "article",
    url: "https://customwoodquote.com/best-wood-for-furniture",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Wood for Furniture - CraftQuote",
      },
    ],
    publishedTime: "2026-03-18T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Materials",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wood for Furniture: Species Comparison Guide",
    description:
      "Walnut, white oak, cherry, maple, and more. Which hardwood is right for your furniture project? Full comparison with cost, strength, and workability ratings.",
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
      name: "Best Wood for Furniture",
      item: "https://customwoodquote.com/best-wood-for-furniture",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best wood for furniture overall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most custom furniture projects, walnut and white oak are the top choices among professional woodworkers. Walnut offers a rich chocolate-brown color that requires no stain, strong demand from clients, and excellent workability. White oak is slightly more affordable, extremely stable, and popular in contemporary and Scandinavian designs. For mid-range price points, cherry and hard maple are excellent alternatives.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best wood for a dining table?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Walnut and white oak are the most popular choices for custom dining tables. Walnut's rich color makes it a premium choice clients are willing to pay for. White oak is slightly less expensive, extremely stable in wide panels, and compatible with oil and water-based finishes. Hard maple is a durable budget-friendly option that machines cleanly and takes stain evenly, though many prefer it for light, painted, or natural looks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best wood for kitchen cabinets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For painted cabinets, maple and poplar are the standard choices. Maple paints exceptionally well and is hard enough to resist denting. For stained or natural cabinets, cherry and white oak are the most popular. Alder is an affordable option in western US markets for painted or lightly stained work. Avoid soft woods like pine for cabinet boxes as they dent and wear too easily.",
      },
    },
    {
      "@type": "Question",
      name: "What wood is best for shelves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For floating shelves and bookshelves, hardwood plywoods with solid wood edge banding are the most practical choice because they are stable and resist sagging. For solid wood shelves, hard maple, white oak, and cherry all work well. For painted shelves, poplar is the most cost-effective option. Avoid softwoods like pine for loaded shelves longer than 36 inches as they sag over time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best wood for outdoor furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teak is the gold standard for outdoor furniture due to its natural oil content and extreme weather resistance, but it is expensive and import-restricted. White oak is the best domestic alternative: naturally rot-resistant, widely available, and compatible with outdoor oil finishes. White oak Adirondack chairs and dining sets weather beautifully and last decades. Cedar and redwood are also common, especially for larger pieces and structures, due to their natural decay resistance.",
      },
    },
    {
      "@type": "Question",
      name: "Is hardwood or softwood better for furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hardwood is better for most furniture applications that require durability. Hardwoods like walnut, oak, and cherry are denser, resist denting and scratching better, and hold joinery (mortises, dovetails, screws) more securely than softwoods. Softwoods like pine and cedar are appropriate for painted country or cottage-style furniture, outdoor structures, and secondary components like drawer bottoms and back panels where appearance and wear are less critical.",
      },
    },
  ],
};

const SPECIES = [
  {
    name: "Black Walnut",
    strength: "High",
    workability: "Excellent",
    appearance: "Rich chocolate-brown, dramatic grain",
    costPerBf: "$10 – $18",
    bestFor: "Dining tables, desks, statement pieces",
    tier: "Premium",
  },
  {
    name: "White Oak",
    strength: "Very High",
    workability: "Good",
    appearance: "Light tan with ray-fleck figure when quartersawn",
    costPerBf: "$8 – $15",
    bestFor: "Dining tables, cabinets, outdoor furniture",
    tier: "Premium",
  },
  {
    name: "American Black Cherry",
    strength: "Medium-High",
    workability: "Excellent",
    appearance: "Light pink-tan, darkens to rich amber-red with age",
    costPerBf: "$6 – $11",
    bestFor: "Bedroom furniture, dining, built-ins",
    tier: "Mid-Range",
  },
  {
    name: "Hard Maple",
    strength: "Very High",
    workability: "Good",
    appearance: "Creamy white with subtle grain, takes stain evenly",
    costPerBf: "$5 – $9",
    bestFor: "Painted cabinets, workbenches, light natural pieces",
    tier: "Mid-Range",
  },
  {
    name: "Red Oak",
    strength: "High",
    workability: "Good",
    appearance: "Pink-brown with pronounced open grain",
    costPerBf: "$4 – $7",
    bestFor: "Traditional cabinets, general furniture",
    tier: "Budget",
  },
  {
    name: "Ash",
    strength: "Very High",
    workability: "Good",
    appearance: "Light tan with bold straight grain, similar to oak",
    costPerBf: "$5 – $9",
    bestFor: "Furniture, tool handles, sports equipment",
    tier: "Mid-Range",
  },
  {
    name: "Poplar",
    strength: "Medium",
    workability: "Excellent",
    appearance: "Greenish-white, not suitable for natural finish",
    costPerBf: "$3 – $6",
    bestFor: "Painted cabinets, drawer boxes, secondary wood",
    tier: "Budget",
  },
  {
    name: "Teak",
    strength: "Very High",
    workability: "Good (dulls tools)",
    appearance: "Golden-brown with natural oily luster",
    costPerBf: "$20 – $40",
    bestFor: "Outdoor furniture, marine applications",
    tier: "Premium",
  },
  {
    name: "Cedar (Western Red)",
    strength: "Low-Medium",
    workability: "Excellent",
    appearance: "Reddish-brown aromatic wood",
    costPerBf: "$3 – $6",
    bestFor: "Outdoor furniture, closets, chests",
    tier: "Budget",
  },
];

export default function BestWoodForFurniture() {
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
            Best Wood for Furniture
          </h1>
          <p className="text-xl text-gray-600">
            A species-by-species guide for custom furniture makers. Covers dining tables, cabinets, shelves, outdoor furniture, and more, with strength, workability, and cost comparisons for each major hardwood.
          </p>
          <p className="text-sm text-gray-400 mt-3">Updated March 2026</p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#comparison" className="hover:text-amber-600">1. Hardwood Comparison Table</a></li>
            <li><a href="#dining-table" className="hover:text-amber-600">2. Best Wood for Dining Tables</a></li>
            <li><a href="#cabinets" className="hover:text-amber-600">3. Best Wood for Cabinets</a></li>
            <li><a href="#shelves" className="hover:text-amber-600">4. Best Wood for Shelves</a></li>
            <li><a href="#outdoor" className="hover:text-amber-600">5. Best Wood for Outdoor Furniture</a></li>
            <li><a href="#desks-coffee-tables" className="hover:text-amber-600">6. Best Wood for Desks and Coffee Tables</a></li>
            <li><a href="#faq" className="hover:text-amber-600">7. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Section 1: Comparison Table */}
        <section id="comparison" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hardwood Comparison Table</h2>
          <p className="text-gray-600 mb-6">
            The table below covers nine species commonly used in custom furniture shops. Cost per board foot reflects typical US retail pricing from a hardwood dealer as of early 2026. For rough-sawn pricing from a local sawyer, expect 30 to 40 percent less.
          </p>
          <div className="rounded-lg border border-gray-200 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Species</th>
                  <th className="px-4 py-3 font-semibold">Strength</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Workability</th>
                  <th className="px-4 py-3 font-semibold">Cost/bf</th>
                  <th className="px-4 py-3 font-semibold hidden md:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SPECIES.map((s) => (
                  <tr key={s.name} className={s.tier === "Premium" ? "bg-amber-50/40" : ""}>
                    <td className="px-4 py-3 font-medium text-gray-900">{s.name}</td>
                    <td className="px-4 py-3 text-gray-600">{s.strength}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{s.workability}</td>
                    <td className="px-4 py-3 text-gray-600">{s.costPerBf}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{s.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            See detailed pricing in the{" "}
            <Link href="/wood-prices" className="text-amber-600 hover:underline">
              hardwood prices per board foot guide
            </Link>
            , or use the{" "}
            <Link href="/calculator" className="text-amber-600 hover:underline">
              board foot calculator
            </Link>{" "}
            to estimate your material cost.
          </p>
        </section>

        {/* Section 2: Dining Tables */}
        <section id="dining-table" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Wood for Dining Tables</h2>
          <p className="text-gray-600 mb-4">
            Dining tables take more abuse than almost any other furniture piece: heat from dishes, spills, elbows, and daily use. The species you choose needs to be hard enough to resist denting, stable enough to stay flat in wide panels, and attractive enough for the room centerpiece it becomes.
          </p>

          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                1. Black Walnut <span className="text-xs font-normal text-amber-700 ml-2 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">Best Overall</span>
              </h3>
              <p className="text-gray-600 text-sm">
                The most popular choice for premium custom dining tables. Walnut's rich chocolate-brown color requires no stain, its grain is dramatic and distinctive, and clients readily associate it with quality. It is moderately hard (Janka hardness 1010), workable with standard tooling, and stable in wide panels. The higher material cost ($10 to $18 per board foot) is easily recovered in the table selling price.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                2. White Oak <span className="text-xs font-normal text-blue-700 ml-2 bg-blue-50 border border-blue-200 rounded-full px-2 py-0.5">Best for Contemporary</span>
              </h3>
              <p className="text-gray-600 text-sm">
                White oak is the dominant choice for Scandinavian-influenced and contemporary dining tables. Harder than walnut (Janka 1360), very stable in wide panels, and compatible with both oil and water-based finishes without blotching. Quarter-sawn white oak adds distinctive ray-fleck figure for an additional premium. Pricing runs $8 to $15 per board foot for flat-sawn, more for quartersawn.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                3. Hard Maple <span className="text-xs font-normal text-gray-600 ml-2 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5">Best Budget Choice</span>
              </h3>
              <p className="text-gray-600 text-sm">
                Hard maple (Janka 1450) is the hardest commonly used domestic furniture hardwood. It resists denting better than walnut or oak and costs significantly less ($5 to $9 per board foot). The tradeoff is that maple's subtle grain is less visually dramatic and it blotches if stained unevenly. Many shops use maple for light-colored, natural, or painted dining tables where grain drama is less important than durability.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-gray-700">
            <span className="font-semibold text-amber-900">Board footage tip: </span>
            A standard 36&quot; x 72&quot; dining table top requires roughly 20 to 28 board feet of finished hardwood. With a 20 percent waste factor for rough-sawn material, budget 24 to 34 board feet at purchase. Use the{" "}
            <Link href="/calculator" className="text-amber-700 hover:underline font-medium">
              board foot calculator
            </Link>{" "}
            to run the exact numbers for your dimensions.
          </div>
        </section>

        {/* Section 3: Cabinets */}
        <section id="cabinets" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Wood for Cabinets</h2>
          <p className="text-gray-600 mb-4">
            Cabinet species selection depends on whether the finish will be painted or natural/stained. The two categories require different wood choices.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-3">For Painted Cabinets</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">Hard Maple</span> is the professional standard. Paints exceptionally well, very hard, and resists chipping and denting at door corners. Slightly higher cost than poplar but the hardness is worth it for kitchen and bath cabinets.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Poplar</span> is the budget choice for painted work. Softer than maple (Janka 540) but very consistent grain with no blotching. Works well for furniture and built-ins where doors will not take daily kitchen abuse.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Alder</span> is the standard in western US shops. Similar hardness to poplar, smooth and consistent, and widely available on the west coast at competitive pricing.
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-3">For Stained or Natural Cabinets</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">Cherry</span> is the classic choice for traditional cabinetry. Ages gracefully to a deep amber-red, machines cleanly, and finishes beautifully with oil or lacquer. Popular for kitchen cabinets in the $8,000 to $20,000 range.
                </li>
                <li>
                  <span className="font-medium text-gray-900">White Oak</span> has become the contemporary replacement for cherry in many markets. Bold grain, compatible with oil and water-based finishes, and popular in transitional and modern kitchens.
                </li>
                <li>
                  <span className="font-medium text-gray-900">Red Oak</span> remains popular for traditional cabinets, particularly in value-driven markets. Abundant, affordable at $4 to $7 per board foot, and takes stain evenly across the grain.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            For detailed cabinet pricing by door style, drawer construction, and species, see the{" "}
            <Link href="/cabinet-pricing" className="text-amber-600 hover:underline">
              custom cabinet pricing guide
            </Link>
            .
          </p>
        </section>

        {/* Section 4: Shelves */}
        <section id="shelves" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Wood for Shelves</h2>
          <p className="text-gray-600 mb-4">
            Shelf material selection comes down to three factors: span length, load, and finish. Long shelves under heavy loads sag over time regardless of species, so hardwood plywood or thicker solid stock is often a better structural choice than thin solid wood boards.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Solid Wood Shelves</h3>
              <p className="text-sm text-gray-600 mb-3">
                For solid wood shelves up to 36 inches in span, hard maple, white oak, and cherry all resist sagging well. For longer spans, increase thickness to 1.25 inches or add a front edge with height to increase the section modulus. Walnut is an excellent choice for open-shelf built-ins where the material will be prominently displayed.
              </p>
              <p className="text-sm text-gray-600">
                Avoid pine and cedar for loaded shelves. Both are soft and will develop visible sag within a year under the weight of books or dishes.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Plywood Shelves with Edge Banding</h3>
              <p className="text-sm text-gray-600">
                Hardwood plywood (birch or hardwood-faced) with solid wood edge banding is the most cost-effective approach for long or heavily loaded shelves. The cross-ply construction resists sagging better than solid wood of the same thickness. Face the edges with matching species strips or wider lumber to conceal the plies and match the room aesthetic.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Outdoor Furniture */}
        <section id="outdoor" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Wood for Outdoor Furniture</h2>
          <p className="text-gray-600 mb-4">
            Outdoor furniture requires wood that resists moisture, rot, and UV degradation. The species pool narrows significantly compared to indoor work.
          </p>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Teak <span className="text-xs font-normal text-amber-700 ml-2 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">Gold Standard</span>
              </h3>
              <p className="text-sm text-gray-600">
                Teak is the highest-performing outdoor hardwood. Its natural silica and oil content make it extremely resistant to water, rot, insects, and weathering. Teak outdoor furniture is commonly expected to last 50 years or more with minimal maintenance. The downside: cost runs $20 to $40 per board foot or more, and sustainably sourced teak from FSC-certified plantations commands a further premium.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                White Oak <span className="text-xs font-normal text-blue-700 ml-2 bg-blue-50 border border-blue-200 rounded-full px-2 py-0.5">Best Domestic Alternative</span>
              </h3>
              <p className="text-sm text-gray-600">
                White oak is the top domestic alternative for outdoor furniture. Unlike red oak, white oak's pores are naturally plugged with tyloses, making it water-resistant without treatment. It ages to a silver-gray patina outdoors (similar to teak), is readily available, and can be finished with outdoor oil for color retention. White oak Adirondack chairs and outdoor dining sets are increasingly common in custom shops targeting premium outdoor markets.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Western Red Cedar <span className="text-xs font-normal text-gray-600 ml-2 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5">Best Budget Option</span>
              </h3>
              <p className="text-sm text-gray-600">
                Cedar's natural aromatic oils make it rot-resistant. It is lightweight, easy to work, and relatively inexpensive at $3 to $6 per board foot. The tradeoff is softness (Janka 350), which means it dents and scratches more readily than white oak or teak. Best for large outdoor structures like pergolas, planters, and rustic garden benches where weight matters more than durability under contact.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-gray-700">
            <span className="font-semibold text-amber-900">Important: </span>
            Never use red oak outdoors. Unlike white oak, red oak&apos;s open pores are not plugged with tyloses and it absorbs moisture, swells, and rots within 1 to 2 seasons outside.
          </div>
        </section>

        {/* Section 6: Desks and Coffee Tables */}
        <section id="desks-coffee-tables" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Wood for Desks and Coffee Tables</h2>
          <p className="text-gray-600 mb-4">
            Desks and coffee tables share similar requirements: a flat, durable surface that resists scratches and holds up to daily contact. They are also high-visibility pieces where wood selection strongly affects the perceived value.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Desks</h3>
              <p className="text-sm text-gray-600">
                Walnut is the most popular premium desk species. A live-edge walnut slab desk is one of the most requested custom pieces in the market. White oak and hard maple are excellent alternatives at lower price points. For painted or lacquered desks, hard maple or poplar both work well and take a flat paint finish cleanly.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Coffee Tables</h3>
              <p className="text-sm text-gray-600">
                Cherry and walnut are the top choices for natural finish coffee tables. Both have strong grain character that makes smaller pieces like coffee tables visually interesting. For live-edge or slab coffee tables, walnut, elm, and figured maple slabs are popular. Cherry and white oak are strong choices for more traditional-framed designs.
              </p>
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

        {/* CTA */}
        <section className="mb-12">
          <div className="rounded-lg bg-gray-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to quote your project?</h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Once you&apos;ve chosen your species, use CraftQuote to build a professional itemized estimate in minutes. Free, no account required.
            </p>
            <Link
              href="/"
              className="inline-block rounded-md bg-amber-600 px-6 py-3 text-base font-semibold text-white hover:bg-amber-500"
            >
              Build a Quote Free
            </Link>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-8">
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
            <div className="space-y-3 text-sm">
              <div>
                <Link href="/wood-prices" className="font-semibold text-amber-700 hover:underline">
                  Hardwood Prices Per Board Foot
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Current pricing for walnut, cherry, white oak, maple, and 10+ species. Use these numbers to estimate material cost before building your quote.
                </p>
              </div>
              <div>
                <Link href="/calculator" className="font-semibold text-amber-700 hover:underline">
                  Board Foot Calculator
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Enter your project dimensions and species to instantly calculate board footage and material cost.
                </p>
              </div>
              <div>
                <Link href="/pricing-guide" className="font-semibold text-amber-700 hover:underline">
                  How to Price Custom Furniture
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Full pricing methodology: materials, shop rate, labor, overhead, and profit margin for custom woodworking.
                </p>
              </div>
              <div>
                <Link href="/cabinet-pricing" className="font-semibold text-amber-700 hover:underline">
                  Custom Cabinet Pricing Guide
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Cabinet cost per linear foot, door styles, hardware, and how to structure a cabinet quote.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
