import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Cabinet Pricing Guide: Cost Per Linear Foot Explained",
  description: "How much does custom cabinetry cost? Understand custom cabinet pricing per linear foot, what drives cabinet costs, and how to build an accurate quote for any cabinet project.",
  keywords: ["custom cabinet pricing", "custom cabinet cost per linear foot", "how much does custom cabinetry cost", "cabinet pricing guide", "how to price cabinets"],
  alternates: {
    canonical: "https://customwoodquote.com/cabinet-pricing",
  },
  openGraph: {
    title: "Custom Cabinet Pricing Guide: Cost Per Linear Foot Explained",
    description: "Understand custom cabinet pricing per linear foot, what drives cabinet costs up or down, and how to build an accurate quote for any cabinet project.",
    type: "article",
    url: "https://customwoodquote.com/cabinet-pricing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Cabinet Pricing Guide - CraftQuote",
      },
    ],
    publishedTime: "2026-03-18T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Cabinet Pricing Guide: Cost Per Linear Foot Explained",
    description: "Custom cabinet pricing per linear foot, cost drivers, and how to quote cabinet work accurately.",
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
      name: "Custom Cabinet Pricing",
      item: "https://customwoodquote.com/cabinet-pricing",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Price a Custom Cabinet Job",
  description: "A step-by-step guide for woodworkers and cabinet makers to build accurate, profitable quotes for custom cabinet projects.",
  totalTime: "PT20M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Measure and count cabinet units",
      text: "List every cabinet by type: base, wall, tall, and specialty. Record exact dimensions for each. Distinguish between face-frame and frameless construction, as this changes material and labor estimates significantly.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Calculate sheet goods and lumber",
      text: "Estimate plywood or MDF for carcass work by cabinet count. Add face-frame lumber in board feet. Factor in drawer boxes, shelves, and any solid-wood elements separately. Add a 10 to 15 percent waste factor.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Price doors and drawer fronts",
      text: "Doors are often the largest single material cost. Price shaker, raised-panel, or slab doors by the door. If you are outsourcing to a door supplier, get a real quote. If building in-house, calculate rail and stile lumber plus machining time.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Itemize hardware",
      text: "Count hinges, drawer slides, pulls, and knobs for every door and drawer in the project. Hardware adds up fast on large kitchens. Soft-close slides and undermount hardware cost more but are expected on custom work.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Estimate labor by phase",
      text: "Break labor into: design and drawings, material prep (cutting sheet goods, milling lumber), carcass assembly, door and drawer front fitting, finishing, delivery, and installation. Multiply total hours by your shop rate. Never quote a flat per-cabinet number without this breakdown.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add overhead and margin",
      text: "Divide your monthly shop overhead by billable hours to get a per-hour overhead rate. Multiply by project hours. Add overhead before applying your profit margin of 20 to 35 percent. This is the step most cabinet makers skip and the reason jobs come up short.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does custom cabinetry cost per linear foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom cabinetry from a professional cabinet maker typically runs $500 to $1,500 per linear foot installed, depending on wood species, finish, hardware, and joinery complexity. A standard 10-foot run of base cabinets in painted maple might be $6,000 to $8,000. The same run in figured walnut with dovetail drawers and soft-close hardware could reach $12,000 to $15,000. These are installed prices including design time and delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between custom, semi-custom, and stock cabinets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stock cabinets are pre-built in fixed sizes, available at home centers, and typically run $100 to $300 per linear foot. Semi-custom cabinets are ordered through dealers in a wider range of sizes and finishes, usually $300 to $600 per linear foot. Custom cabinets are built to exact dimensions by a local cabinet maker and run $500 to $1,500 per linear foot. Custom allows any species, size, joinery style, and finish with no catalog constraints.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a full kitchen worth of custom cabinets cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full kitchen with 20 to 25 linear feet of custom cabinetry typically runs $12,000 to $35,000 for cabinet and box work alone, not including countertops or appliances. Simple painted shaker doors in maple or alder sit at the lower end. Complex raised-panel doors in cherry or walnut with glass inserts, pull-out shelves, and custom storage solutions push toward the top. Always quote by the actual job, not a per-linear-foot average.",
      },
    },
    {
      "@type": "Question",
      name: "What is a fair shop rate for a cabinet maker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most custom cabinet shops charge $55 to $90 per hour for shop labor, with higher rates in metro areas or for highly skilled joinery work. When setting your rate, divide your target annual income by your billable hours and add your per-hour overhead allocation. Undercutting your rate to win bids is the fastest way to lose money on cabinet jobs. The pricing guide at customwoodquote.com/pricing-guide walks through the full shop rate calculation.",
      },
    },
    {
      "@type": "Question",
      name: "What drives custom cabinet prices up the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest cost drivers in custom cabinetry are: wood species (walnut and cherry cost 3 to 5 times more than poplar or alder), door style (raised-panel doors with matched grain take significantly longer than shaker), drawer construction (dovetail boxes take 3 to 4 times longer than pocket-screw boxes), finish type (sprayed lacquer adds more labor than stain-and-poly), and installation complexity (kitchens with soffits, irregular ceilings, or angled walls add significant fitting time).",
      },
    },
    {
      "@type": "Question",
      name: "Should I quote cabinets per unit or per linear foot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quote by the job, not by a per-unit or per-linear-foot average. Per-linear-foot estimates are useful for ballpark budgeting with clients, but they will cost you money on complex jobs with tall pantry units, corner solutions, or specialty storage. Build your quote from actual materials and labor for each cabinet. CraftQuote automates this breakdown so you get an accurate number without hours of spreadsheet work.",
      },
    },
  ],
};

const CABINET_TYPES = [
  {
    type: "Base Cabinets",
    description: "Ground-level carcasses, typically 34.5 inches tall before countertop",
    costRange: "$180–$450 per linear foot (box only, not installed)",
    drivers: "Width, number of drawers, pull-out shelves, corner solutions",
  },
  {
    type: "Wall Cabinets",
    description: "Upper cabinets, typically 12 inches deep, 30 to 42 inches tall",
    costRange: "$100–$280 per linear foot (box only)",
    drivers: "Height, glass inserts, open shelving vs. doors",
  },
  {
    type: "Tall / Pantry Cabinets",
    description: "Floor-to-ceiling units, often 84 to 96 inches tall",
    costRange: "$600–$1,400 per unit",
    drivers: "Pull-out shelves, interior fittings, door count",
  },
  {
    type: "Specialty / Built-ins",
    description: "Islands, banquettes, laundry, mudroom, media units",
    costRange: "Quoted by job — highly variable",
    drivers: "Complexity, built-in appliances, custom dimensions",
  },
];

const COST_DRIVERS = [
  {
    factor: "Wood Species",
    impact: "High",
    detail: "Poplar and alder are budget-friendly at $3 to $5/bf. Cherry and maple run $5 to $9/bf. Walnut is $10 to $15/bf. Species choice affects every material line on the quote.",
  },
  {
    factor: "Door Style",
    impact: "High",
    detail: "Slab doors are the fastest to build. Shaker adds mortise-and-tenon or cope-and-stick work. Raised-panel adds profiling time. Matched grain across multiple doors adds significant material waste and setup time.",
  },
  {
    factor: "Drawer Construction",
    impact: "Medium",
    detail: "Dovetail drawers are the benchmark for custom work but take 3 to 4 times longer than pocket-screw assembly. Soft-close undermount slides ($15 to $40 each) add hardware cost on every drawer.",
  },
  {
    factor: "Finish Type",
    impact: "Medium",
    detail: "Conversion varnish or catalyzed lacquer sprayed in a spray booth is faster and more durable than brushed or wiped finishes. Paint adds sanding and primer steps. Two-tone kitchens with different upper and lower finishes add scheduling and masking time.",
  },
  {
    factor: "Interior Fittings",
    impact: "Medium",
    detail: "Pull-out trash, lazy Susans, pull-out shelves, drawer organizers, and spice racks all add cost. Each one is additional hardware, cut time, and installation time. Quote every fitting separately.",
  },
  {
    factor: "Installation",
    impact: "Medium",
    detail: "Scribing to irregular walls, working around existing plumbing or electrical, angled ceilings, and decorative trim work add installation time. Get a detailed site measurement before quoting installation on older homes.",
  },
];

export default function CabinetPricing() {
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
            Custom Cabinet Pricing Guide
          </h1>
          <p className="text-xl text-gray-600">
            Custom cabinetry pricing depends on species, door style, hardware, and construction method. This guide explains how to price cabinet work accurately, what per-linear-foot numbers mean, and how to build a quote that covers your real costs.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#cost-per-linear-foot" className="hover:text-amber-600">1. Custom Cabinet Cost Per Linear Foot</a></li>
            <li><a href="#cabinet-types" className="hover:text-amber-600">2. Cabinet Types and Their Pricing</a></li>
            <li><a href="#cost-drivers" className="hover:text-amber-600">3. What Drives Cabinet Prices Up or Down</a></li>
            <li><a href="#how-to-quote" className="hover:text-amber-600">4. How to Price a Cabinet Job</a></li>
            <li><a href="#faq" className="hover:text-amber-600">5. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Section 1: Cost Per Linear Foot */}
        <section id="cost-per-linear-foot" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Cabinet Cost Per Linear Foot</h2>
          <p className="text-gray-600 mb-6">
            Per-linear-foot pricing is a useful shorthand for client conversations, but it obscures the real drivers of cabinet cost. Here are the typical installed ranges for each tier of cabinetry.
          </p>

          <div className="rounded-lg border border-gray-200 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Cabinet Tier</th>
                  <th className="px-4 py-3 font-semibold">Cost Per Linear Foot (Installed)</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Stock</td>
                  <td className="px-4 py-3 text-gray-600">$100 – $300</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">Home center, fixed sizes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Semi-Custom</td>
                  <td className="px-4 py-3 text-gray-600">$300 – $600</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">Dealer, more options, longer lead</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Custom (your work)</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">$500 – $1,500+</td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">Built to exact spec by a cabinet maker</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5 mb-6">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-900">Why the range is wide: </span>
              A 10-foot run of painted shaker maple base cabinets might be $6,000 installed. The same 10 feet in walnut with dovetail drawers, soft-close hardware, and pull-out shelves could reach $14,000. Species, door style, and interior fittings matter more than the linear footage.
            </p>
          </div>

          <p className="text-gray-600">
            As a cabinet maker, quoting below $500 per linear foot on custom work is a signal that you are not covering overhead or labor at your actual rate. The per-linear-foot number should come out of your real quote math, not the other way around. Use it to sanity-check the total with your client, not to set the price.
          </p>
        </section>

        {/* Section 2: Cabinet Types */}
        <section id="cabinet-types" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cabinet Types and Their Pricing</h2>
          <p className="text-gray-600 mb-6">
            Every cabinet type has different material and labor requirements. Quote each type separately rather than applying a single per-linear-foot average across the job.
          </p>
          <div className="space-y-4">
            {CABINET_TYPES.map((item) => (
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
              <span className="font-semibold text-gray-900">Note on box-only vs. installed pricing: </span>
              The ranges above for base and wall cabinets reflect box-only cost (built and delivered, not installed). Installed pricing adds $50 to $150 per linear foot depending on the complexity of the space. Quote installation labor separately as its own line item.
            </p>
          </div>
        </section>

        {/* Section 3: Cost Drivers */}
        <section id="cost-drivers" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Drives Cabinet Prices Up or Down</h2>
          <p className="text-gray-600 mb-6">
            These six factors account for most of the variation in custom cabinet pricing. Understanding them lets you explain price differences to clients and catch scope creep before it erodes your margin.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Price a Cabinet Job</h2>
          <div className="space-y-5">
            {[
              {
                step: "Step 1",
                title: "Count and measure every cabinet unit",
                text: (
                  <>
                    List base cabinets, wall cabinets, tall cabinets, and specialty units separately with exact dimensions. Note face-frame vs. frameless construction, door count, and drawer count per unit. This list is your material takeoff. Do not skip specialty units or corner solutions; they are often the most expensive per-unit.
                  </>
                ),
              },
              {
                step: "Step 2",
                title: "Calculate sheet goods and lumber",
                text: (
                  <>
                    Estimate plywood for carcasses and backs. Add face-frame lumber in board feet if applicable. Price doors and drawer fronts separately, whether you are building them or sourcing them. Use our{" "}
                    <Link href="/calculator" className="text-amber-600 hover:underline">board foot calculator</Link>
                    {" "}to price any solid lumber components accurately.
                  </>
                ),
              },
              {
                step: "Step 3",
                title: "Price hardware per door and drawer",
                text: (
                  <>
                    Count every hinge, slide, pull, and knob. On a 20-cabinet kitchen with 30 doors and 20 drawers, hardware alone can reach $800 to $2,000 depending on specifications. Soft-close undermount slides and concealed hinges are expected on custom work and should be in your quote by default.
                  </>
                ),
              },
              {
                step: "Step 4",
                title: "Estimate labor by phase",
                text: (
                  <>
                    Break labor into: design and drawings, material prep (cutting sheet goods, milling), carcass assembly, door and drawer fitting, finishing, delivery, and installation. Multiply total hours by your shop rate. For methodology on setting a profitable shop rate, see the{" "}
                    <Link href="/pricing-guide" className="text-amber-600 hover:underline">pricing guide</Link>.
                  </>
                ),
              },
              {
                step: "Step 5",
                title: "Apply overhead and profit margin",
                text: (
                  <>
                    Overhead is not profit. It is the cost of your shop, tools, utilities, and insurance that runs whether or not you are building. Calculate your per-hour overhead rate, apply it to project hours, and add it before your margin. Target 20 to 30 percent profit margin on top of total cost. The margin line is what separates a sustainable custom cabinet business from one that breaks even.
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
              Build cabinet quotes in minutes, not hours.
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
              CraftQuote handles the material calculations, labor breakdown, overhead, and margin automatically. Upload a photo of the cabinet project, enter your specs, and send a professional, itemized quote to your client. Free with no account required.
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
                <Link href="/pricing-guide" className="font-semibold text-amber-700 hover:underline">
                  How to Price Custom Furniture Projects
                </Link>
                <p className="text-gray-600 mt-0.5">The full pricing methodology: shop rate, overhead, material costs, and profit margin targets for woodworking and cabinet work.</p>
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
                <p className="text-gray-600 mt-0.5">Every section a professional quote needs, with a complete worked example including materials, labor breakdown, overhead, and margin.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
