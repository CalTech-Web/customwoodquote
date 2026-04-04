import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Furniture Cost Guide 2026: Pricing for Every Project",
  description:
    "How much does custom furniture cost? Complete pricing guide for custom wood furniture in 2026. Dining tables, cabinets, beds, desks, shelving, built-ins, and more — real cost ranges from custom woodworkers.",
  keywords: [
    "custom furniture cost",
    "how much does custom furniture cost",
    "custom wood furniture cost",
    "custom furniture pricing",
    "custom furniture price list",
    "custom furniture price",
    "custom woodworking cost",
    "custom wood furniture pricing",
    "custom made furniture cost",
    "custom furniture estimate",
    "how much is custom furniture",
    "cost of custom furniture",
    "wood furniture cost",
    "handmade furniture cost",
  ],
  alternates: {
    canonical: "https://customwoodquote.com/custom-furniture-cost",
  },
  openGraph: {
    title: "Custom Furniture Cost Guide 2026: Pricing for Every Project",
    description:
      "How much does custom furniture cost? Real price ranges for dining tables, cabinets, beds, desks, built-ins, and 30+ more custom wood furniture projects in 2026.",
    type: "article",
    url: "https://customwoodquote.com/custom-furniture-cost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Furniture Cost Guide 2026 - CraftQuote",
      },
    ],
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Furniture Cost Guide 2026: Pricing for Every Project",
    description:
      "Real cost ranges for 30+ custom wood furniture projects. Dining tables, cabinets, beds, desks, shelving, built-ins, and more.",
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
      name: "Custom Furniture Cost Guide",
      item: "https://customwoodquote.com/custom-furniture-cost",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does custom furniture cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom furniture costs range from $500 for a simple bench to $15,000 or more for a large entertainment center or custom built-in library. The most common custom wood furniture pieces fall between $1,500 and $6,000. Price is determined primarily by wood species, size, design complexity, and the woodworker's shop rate. Walnut and cherry cost roughly twice as much as maple or poplar for the same piece.",
      },
    },
    {
      "@type": "Question",
      name: "Why is custom furniture so expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom furniture is priced to cover three categories of cost: materials (lumber, hardware, finishes), labor (often 20 to 60 shop hours per piece), and overhead (shop rent, tools, insurance). A professional custom furniture maker typically charges $50 to $100 per hour for labor. When you add solid hardwood at $5 to $18 per board foot, a 30-hour walnut dining table can cost $3,000 to $5,000 without any margin added. Custom furniture is not competing with production furniture on price; it is competing on quality, longevity, and fit.",
      },
    },
    {
      "@type": "Question",
      name: "Is custom furniture worth the cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For heirloom-quality pieces, yes. Solid hardwood furniture built with traditional joinery outlasts production furniture by decades and often appreciates in desirability. Custom furniture is also made to your exact dimensions, species preference, and design specifications. For pieces that will see daily use and are intended to last a lifetime, the cost-per-year calculation often favors custom over replacing inexpensive production furniture every 5 to 10 years.",
      },
    },
    {
      "@type": "Question",
      name: "What wood species is the most affordable for custom furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Poplar and soft maple are the most affordable hardwoods for painted or stained custom furniture, typically $2 to $4 per board foot. Hard maple and ash are mid-range at $4 to $7 per board foot and work well for natural-finish pieces. White oak and cherry run $6 to $10 per board foot. Walnut is the most expensive common species at $10 to $18 per board foot, which is why walnut custom furniture consistently costs the most.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build custom furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Build time ranges widely by piece type. A simple bench takes 6 to 12 hours. A dining chair takes 12 to 20 hours. A dining table takes 25 to 45 hours. A large entertainment center or built-in bookcase wall can take 80 to 150 hours. Lead time from order to delivery is typically 4 to 12 weeks depending on the woodworker's schedule and the project complexity.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote for custom furniture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest way is to upload a reference photo to CraftQuote. The AI identifies the furniture type, style, and complexity, then guides you through selecting dimensions, species, and hardware to build a complete itemized estimate. It is free and requires no account. For woodworkers, CraftQuote produces a professional PDF quote with your branding that you can send directly to the customer.",
      },
    },
  ],
};

const costGuides = {
  tables: [
    { href: "/custom-dining-table-cost", label: "Custom Dining Table Cost", range: "$2,000 – $9,000" },
    { href: "/custom-coffee-table-cost", label: "Custom Coffee Table Cost", range: "$800 – $5,500" },
    { href: "/custom-wood-desk-cost", label: "Custom Wood Desk Cost", range: "$800 – $4,500" },
    { href: "/farmhouse-table-cost", label: "Farmhouse Table Cost", range: "$1,200 – $4,500" },
    { href: "/live-edge-table-cost", label: "Live Edge Table Cost", range: "$1,500 – $8,000" },
    { href: "/epoxy-table-cost", label: "Epoxy River Table Cost", range: "$2,500 – $10,000" },
    { href: "/custom-console-table-cost", label: "Custom Console Table Cost", range: "$600 – $2,800" },
    { href: "/custom-kitchen-island-cost", label: "Custom Kitchen Island Cost", range: "$1,500 – $8,000" },
    { href: "/butcher-block-countertop-cost", label: "Butcher Block Countertop Cost", range: "$40 – $200/sq ft" },
  ],
  seating: [
    { href: "/custom-dining-chair-cost", label: "Custom Dining Chair Cost", range: "$400 – $1,200 each" },
    { href: "/custom-bar-stool-cost", label: "Custom Bar Stool Cost", range: "$300 – $900 each" },
    { href: "/custom-bench-cost", label: "Custom Bench Cost", range: "$400 – $2,200" },
    { href: "/rocking-chair-cost", label: "Custom Rocking Chair Cost", range: "$600 – $7,000+" },
  ],
  bedroom: [
    { href: "/custom-bed-frame-cost", label: "Custom Bed Frame Cost", range: "$1,200 – $5,500" },
    { href: "/murphy-bed-cost", label: "Murphy Bed Cost", range: "$1,800 – $6,000" },
    { href: "/custom-dresser-cost", label: "Custom Dresser Cost", range: "$1,200 – $4,500" },
    { href: "/custom-nightstand-cost", label: "Custom Nightstand Cost", range: "$400 – $1,400" },
  ],
  storage: [
    { href: "/cabinet-pricing", label: "Custom Cabinet Pricing", range: "$150 – $650/linear ft" },
    { href: "/custom-sideboard-cost", label: "Custom Sideboard Cost", range: "$1,200 – $4,500" },
    { href: "/custom-tv-stand-cost", label: "Custom TV Stand Cost", range: "$800 – $3,200" },
    { href: "/wine-rack-cost", label: "Wine Rack Cost", range: "$400 – $3,000" },
    { href: "/home-bar-cost", label: "Home Bar Cost", range: "$2,000 – $10,000" },
  ],
  builtins: [
    { href: "/built-in-bookshelves-cost", label: "Built-in Bookshelves Cost", range: "$1,500 – $10,000+" },
    { href: "/custom-closet-cost", label: "Custom Closet Cost", range: "$1,200 – $6,000" },
    { href: "/custom-entertainment-center-cost", label: "Custom Entertainment Center Cost", range: "$2,000 – $12,000" },
    { href: "/custom-pantry-cost", label: "Custom Pantry Cost", range: "$1,500 – $7,000" },
    { href: "/mudroom-built-ins-cost", label: "Mudroom Built-ins Cost", range: "$1,200 – $5,000" },
    { href: "/garage-cabinets-cost", label: "Garage Cabinets Cost", range: "$800 – $4,500" },
    { href: "/laundry-room-cabinets-cost", label: "Laundry Room Cabinets Cost", range: "$600 – $3,500" },
    { href: "/custom-bathroom-vanity-cost", label: "Custom Bathroom Vanity Cost", range: "$800 – $5,000" },
    { href: "/window-seat-cost", label: "Window Seat Cost", range: "$600 – $2,500" },
  ],
  outdoor: [
    { href: "/outdoor-furniture-cost", label: "Outdoor Furniture Cost", range: "$600 – $6,000+" },
    { href: "/barn-door-cost", label: "Barn Door Cost", range: "$800 – $3,500" },
  ],
  architectural: [
    { href: "/floating-shelves-cost", label: "Floating Shelves Cost", range: "$200 – $1,200" },
    { href: "/reclaimed-wood-shelves-cost", label: "Reclaimed Wood Shelves Cost", range: "$300 – $1,800" },
    { href: "/shiplap-cost", label: "Shiplap Cost", range: "$2 – $7/sq ft" },
    { href: "/wainscoting-cost", label: "Wainscoting Cost", range: "$3 – $12/sq ft" },
    { href: "/wood-accent-wall-cost", label: "Wood Accent Wall Cost", range: "$400 – $2,500" },
    { href: "/wood-ceiling-cost", label: "Wood Ceiling Cost", range: "$3 – $15/sq ft" },
    { href: "/wood-mantel-cost", label: "Wood Mantel Cost", range: "$500 – $3,000" },
    { href: "/wood-stair-treads-cost", label: "Wood Stair Treads Cost", range: "$50 – $250 each" },
  ],
};

type GuideEntry = { href: string; label: string; range: string };

function CategorySection({
  title,
  guides,
}: {
  title: string;
  guides: GuideEntry[];
}) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {guides.map(({ href, label, range }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition-colors"
          >
            <span className="font-medium text-gray-800 text-sm">{label}</span>
            <span className="text-xs text-amber-700 font-semibold ml-3 whitespace-nowrap">
              {range}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function CustomFurnitureCost() {
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
            Custom Furniture Cost Guide 2026
          </h1>
          <p className="text-xl text-gray-600">
            Real price ranges for 30+ custom wood furniture projects, from a simple bench to a full built-in library wall. Every estimate below reflects solid hardwood construction at professional shop rates.
          </p>
        </header>

        {/* Quick Reference Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Custom Furniture Cost at a Glance
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Furniture Type
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Typical Cost Range
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">
                    Avg. Build Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Custom Dining Table", "$2,000 – $9,000", "25 – 45 hrs"],
                  ["Custom Coffee Table", "$800 – $5,500", "16 – 30 hrs"],
                  ["Live Edge Table", "$1,500 – $8,000", "25 – 45 hrs"],
                  ["Custom Wood Desk", "$800 – $4,500", "20 – 40 hrs"],
                  ["Custom Bed Frame", "$1,200 – $5,500", "25 – 50 hrs"],
                  ["Custom Dresser", "$1,200 – $4,500", "30 – 55 hrs"],
                  ["Built-in Bookshelves", "$1,500 – $10,000+", "40 – 120 hrs"],
                  ["Custom Closet", "$1,200 – $6,000", "25 – 60 hrs"],
                  ["Custom Entertainment Center", "$2,000 – $12,000", "50 – 120 hrs"],
                  ["Custom Cabinets", "$150 – $650/linear ft", "varies"],
                  ["Custom Dining Chair", "$400 – $1,200 each", "12 – 22 hrs"],
                  ["Custom Bench", "$400 – $2,200", "8 – 20 hrs"],
                  ["Floating Shelves", "$200 – $1,200", "4 – 10 hrs"],
                  ["Wood Mantel", "$500 – $3,000", "10 – 25 hrs"],
                  ["Barn Door", "$800 – $3,500", "10 – 20 hrs"],
                ].map(([type, cost, time]) => (
                  <tr key={type} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800 font-medium">{type}</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">{cost}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Ranges assume solid domestic hardwood (maple, ash, white oak) at a professional shop rate of $55 to $85/hr. Walnut adds 20 to 40% to material cost. Painted poplar reduces material cost by 40 to 60%.
          </p>
        </section>

        {/* What Drives Cost */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Drives Custom Furniture Cost
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Wood Species",
                impact: "High",
                text: "Poplar: $2 to $4/bf. Hard maple or ash: $4 to $7/bf. White oak or cherry: $6 to $10/bf. Walnut: $10 to $18/bf. On a dining table with 40 board feet of lumber, switching from maple to walnut adds $240 to $560 in material cost before overhead and margin.",
              },
              {
                title: "Size and Scope",
                impact: "High",
                text: "A 6-foot dining table requires roughly 30% more material and 20% more labor than a 5-foot version. Built-ins and entertainment centers scale steeply with width and number of compartments. Always quote by the linear foot or square foot for large pieces to capture scope changes.",
              },
              {
                title: "Design Complexity",
                impact: "High",
                text: "Mortise-and-tenon joinery takes 2 to 3 times longer than pocket screws. Hand-cut dovetail drawers add 4 to 8 hours per drawer. Carved or turned details require specialized tooling and skill. Simple, clean designs are the most efficient to build and the easiest to price accurately.",
              },
              {
                title: "Labor Rate",
                impact: "High",
                text: "Custom woodworkers charge $45 to $100/hr depending on skill level, market, and specialization. A 30-hour project at $65/hr generates $1,950 in labor alone. Most custom furniture underpricing traces to the woodworker not counting all their hours, including design, material runs, and delivery.",
              },
              {
                title: "Finish Type",
                impact: "Medium",
                text: "A penetrating oil finish on walnut costs $40 to $80 in materials and 2 to 4 hours to apply. A sprayed lacquer or catalyzed finish costs $80 to $200 in materials and requires spray equipment. A hand-rubbed oil-varnish blend is the most durable and practical for most furniture and adds $50 to $120 in total cost.",
              },
              {
                title: "Hardware",
                impact: "Medium",
                text: "Drawer slides range from $8 (basic epoxy slides) to $60 each (Blum Tandem full-extension soft-close). Hinges range from $4 to $40 each. A dresser with 6 drawers using quality soft-close slides costs $200 to $360 in hardware alone. Hardware costs are easy to underestimate on storage pieces.",
              },
            ].map(({ title, impact, text }) => (
              <div key={title} className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      impact === "High"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {impact} Impact
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Cost Guides by Category */}
        <section className="mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Cost Guides by Category
          </h2>
          <p className="text-gray-600 mb-8">
            Each guide below covers price ranges by species and size, cost drivers, a worked pricing example, and how to quote that piece type accurately.
          </p>

          <CategorySection title="Tables and Work Surfaces" guides={costGuides.tables} />
          <CategorySection title="Seating" guides={costGuides.seating} />
          <CategorySection title="Bedroom Furniture" guides={costGuides.bedroom} />
          <CategorySection title="Storage and Display" guides={costGuides.storage} />
          <CategorySection title="Built-ins and Cabinetry" guides={costGuides.builtins} />
          <CategorySection title="Outdoor and Architectural" guides={costGuides.outdoor} />
          <CategorySection title="Wall Treatments and Millwork" guides={costGuides.architectural} />
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Common Questions About Custom Furniture Cost
          </h2>
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
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get an Instant Quote for Any Furniture Project
            </h2>
            <p className="text-amber-50 mb-6 max-w-xl mx-auto">
              Upload a photo of the piece you want built. CraftQuote identifies the type, style, and complexity, then walks you through materials, labor, and margin to generate a professional quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#quote-builder"
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-amber-600 shadow-sm hover:bg-amber-50"
              >
                Start Building a Quote
              </Link>
              <Link
                href="/calculator"
                className="inline-block rounded-md bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-800"
              >
                Board Foot Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing Resources for Woodworkers</h2>
            <div className="space-y-3 text-sm">
              <div>
                <Link href="/pricing-guide" className="font-semibold text-amber-700 hover:underline">
                  How to Price Custom Furniture Projects
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Complete guide to shop rates, material cost, overhead allocation, and profit margin for custom woodworking.
                </p>
              </div>
              <div>
                <Link href="/wood-prices" className="font-semibold text-amber-700 hover:underline">
                  Lumber Prices by Species
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Current per-board-foot pricing for 20+ domestic and imported hardwoods and softwoods.
                </p>
              </div>
              <div>
                <Link href="/walnut-slab-prices" className="font-semibold text-amber-700 hover:underline">
                  Walnut Slab Prices
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Live edge walnut slab pricing by slab size, figure grade, and source type.
                </p>
              </div>
              <div>
                <Link href="/best-wood-for-furniture" className="font-semibold text-amber-700 hover:underline">
                  Best Wood Species for Custom Furniture
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Species comparison by durability, workability, finish quality, and cost. Includes recommendations by furniture type.
                </p>
              </div>
              <div>
                <Link href="/quote-template" className="font-semibold text-amber-700 hover:underline">
                  Free Woodworking Quote Template
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Professional quote format with all line items a custom furniture quote should include.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
