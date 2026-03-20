import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barn Door Cost: 2026 Pricing Guide for Custom Woodworkers",
  description:
    "How much does a barn door cost in 2026? Custom barn door pricing by size, style, and wood species. Material costs, labor hours, and how to quote sliding barn door work for your clients.",
  keywords: [
    "barn door cost",
    "how much does a barn door cost",
    "sliding barn door cost",
    "barn door pricing",
    "custom barn door cost",
    "interior barn door cost",
    "barn door installation cost",
    "barn door price",
    "wood barn door cost",
    "barn door hardware cost",
  ],
  alternates: {
    canonical: "https://customwoodquote.com/barn-door-cost",
  },
  openGraph: {
    title: "Barn Door Cost: 2026 Pricing Guide for Custom Woodworkers",
    description:
      "Custom barn door pricing by size, style, and species. Material costs, labor hours, and how to price sliding barn door work for your clients in 2026.",
    type: "article",
    url: "https://customwoodquote.com/barn-door-cost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barn Door Cost 2026 - CraftQuote",
      },
    ],
    publishedTime: "2026-03-20T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barn Door Cost: 2026 Pricing Guide for Custom Woodworkers",
    description:
      "Custom barn door pricing by size, style, and species. How to price sliding barn door work in 2026.",
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
      name: "Barn Door Cost",
      item: "https://customwoodquote.com/barn-door-cost",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a barn door cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom wood barn door costs $400 to $2,500 for the door panel itself, depending on size, species, and design. A standard single sliding barn door (36 x 84 inches) in pine or poplar runs $400 to $800 to build and sell. The same door in white oak or walnut runs $900 to $1,800. Hardware kits (rail, rollers, handle, floor guide) add $100 to $400. A complete installed single barn door package from a custom woodworker typically sells for $600 to $2,200.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a sliding barn door cost to install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional installation of a sliding barn door costs $150 to $400 on top of the door and hardware cost. Installation includes wall blocking to support the header track, mounting the rail, hanging the door, and installing the floor guide and handle. If the wall lacks adequate blocking, adding it adds $100 to $200. Most barn door installations take 2 to 4 hours for a finish carpenter or experienced woodworker. If you are selling a door and installation together, budget 3 to 5 hours of billable time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of barn door hardware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Barn door hardware kits cost $80 to $350 depending on style and quality. A basic flat track kit with two rollers, a floor guide, and a handle runs $80 to $150. A mid-range forged steel or brushed nickel kit runs $150 to $250. Premium handmade or architectural-grade hardware runs $250 to $500 and up. Bypass hardware for double doors (two doors on one opening) costs $180 to $400. Always include hardware as a pass-through line item with a 15 to 20 percent markup when quoting a client.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a barn door?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard Z-brace or board-and-batten barn door (36 x 84 inches) takes 6 to 10 shop hours to build from rough lumber. A frame-and-panel barn door with a center panel or glass insert takes 10 to 16 hours. A solid slab barn door milled from a single wide board takes 5 to 8 hours but requires sourcing wide-width lumber. Finishing adds 2 to 4 hours regardless of door type. Double doors or bypass doors roughly double the build time.",
      },
    },
    {
      "@type": "Question",
      name: "What wood is best for a barn door?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pine and poplar are the most common choices for painted barn doors because they are affordable, light, and take paint well. White oak is the most popular choice for stained or natural-finish barn doors due to its distinctive ray-fleck grain and durability. Walnut is the premium option for a dark, modern look. Reclaimed wood and character-grade lumber are popular for a rustic aesthetic and can be sourced at lower cost than clear-grade hardwoods. For painted doors, poplar offers the best balance of machinability, weight, and paint adhesion.",
      },
    },
    {
      "@type": "Question",
      name: "How do you price a custom barn door?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To price a custom barn door, calculate lumber cost (board footage times species cost per board foot, plus 15 to 20 percent waste), add hardware at your supplier cost plus a 15 to 20 percent markup, then estimate labor hours times your shop rate ($65 to $120 per hour). Add overhead at 15 to 25 percent of labor, then apply a profit margin of 25 to 35 percent on the total cost. A common mistake is underestimating finish time and hardware costs. Use CraftQuote to build an itemized quote that accounts for each cost category.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Price a Custom Barn Door",
  description:
    "Step-by-step cost buildup for quoting a custom sliding barn door for a client.",
  step: [
    {
      "@type": "HowToStep",
      name: "Calculate lumber and material cost",
      text: "Start with the finished door dimensions and work back to rough lumber. A standard 36 x 84-inch board-and-batten door uses approximately 20 to 25 board feet of 4/4 stock. A frame-and-panel door uses 15 to 20 board feet plus panel material. Add 20 percent for waste from jointing, planing, and working around defects. Price lumber at your supplier cost, then apply a 15 to 20 percent material markup when billing the client.",
    },
    {
      "@type": "HowToStep",
      name: "Source and price hardware",
      text: "Choose a hardware kit appropriate for the door weight and customer budget. Flat track kits for doors up to 150 pounds run $80 to $150. Heavy-duty kits for solid hardwood doors run $150 to $350. Get your exact supplier cost, then mark it up 15 to 20 percent when billing. Never quote hardware as an afterthought, it is often 20 to 40 percent of total door project cost.",
    },
    {
      "@type": "HowToStep",
      name: "Estimate labor by phase",
      text: "Break labor into phases: material milling and prep (2 to 4 hours), joinery and assembly (3 to 6 hours), sanding through grits (1 to 3 hours), finish application and curing (2 to 4 hours), and delivery and hanging (2 to 4 hours). Multiply total hours by your shop rate ($65 to $120 per hour). For double doors or bypass systems, multiply by 1.8 to 2.0, as setup and hardware complexity adds time disproportionate to a simple linear doubling.",
    },
    {
      "@type": "HowToStep",
      name: "Add overhead",
      text: "Overhead covers your fixed shop costs: rent, utilities, equipment payments, insurance, and supplies not tied to the specific project. A standard overhead rate is 15 to 25 percent of your total labor cost. Overhead allocation is what separates profitable shops from ones that break even. Barn doors are typically faster projects than large furniture pieces, so overhead per job is lower, but it still must be included.",
    },
    {
      "@type": "HowToStep",
      name: "Apply profit margin and generate your quote",
      text: "After summing materials, labor, and overhead, apply a profit margin of 25 to 35 percent. A door that costs you $600 to produce sells for $857 at 30 percent margin. Present the client with an itemized quote showing lumber, hardware, labor, and finish as separate line items. Itemized quotes reduce pushback because clients can see exactly where their money is going. Use CraftQuote to generate a professional, branded PDF quote in minutes.",
    },
  ],
};

const DOOR_TYPES = [
  {
    type: "Single Z-brace (36 x 84 in, pine)",
    style: "Z-brace",
    materialCost: "$120 to $200",
    laborHours: "6 to 9 hours",
    hardwareCost: "$100 to $180",
    salePrice: "$500 to $900",
  },
  {
    type: "Single board-and-batten (36 x 84 in, poplar)",
    style: "Board and batten",
    materialCost: "$150 to $240",
    laborHours: "7 to 10 hours",
    hardwareCost: "$120 to $200",
    salePrice: "$600 to $1,000",
  },
  {
    type: "Single solid slab (36 x 84 in, white oak)",
    style: "Solid slab",
    materialCost: "$350 to $600",
    laborHours: "8 to 12 hours",
    hardwareCost: "$150 to $250",
    salePrice: "$900 to $1,800",
  },
  {
    type: "Frame and panel (36 x 84 in, white oak)",
    style: "Frame and panel",
    materialCost: "$320 to $550",
    laborHours: "10 to 16 hours",
    hardwareCost: "$150 to $300",
    salePrice: "$1,100 to $2,200",
  },
  {
    type: "Single solid slab (36 x 84 in, walnut)",
    style: "Solid slab",
    materialCost: "$600 to $1,000",
    laborHours: "8 to 12 hours",
    hardwareCost: "$180 to $350",
    salePrice: "$1,400 to $2,500",
  },
  {
    type: "Double bypass (2x 36 x 84 in, white oak)",
    style: "Bypass double",
    materialCost: "$700 to $1,200",
    laborHours: "18 to 28 hours",
    hardwareCost: "$250 to $450",
    salePrice: "$2,000 to $4,000",
  },
];

const SPECIES_DATA = [
  {
    species: "Pine (knotty)",
    costPerBf: "$2 to $4",
    weight: "Light",
    finish: "Paint, stain",
    bestFor: "Rustic, farmhouse",
    tier: "Budget",
  },
  {
    species: "Poplar",
    costPerBf: "$3 to $5",
    weight: "Light",
    finish: "Paint",
    bestFor: "Painted doors",
    tier: "Budget",
  },
  {
    species: "Hard Maple",
    costPerBf: "$4 to $7",
    weight: "Medium",
    finish: "Stain, oil",
    bestFor: "Modern, clean look",
    tier: "Budget",
  },
  {
    species: "White Ash",
    costPerBf: "$5 to $8",
    weight: "Medium",
    finish: "Stain, oil",
    bestFor: "Farmhouse, natural",
    tier: "Mid-range",
  },
  {
    species: "White Oak",
    costPerBf: "$7 to $11",
    weight: "Medium-heavy",
    finish: "Oil, wire-brush, fumed",
    bestFor: "Contemporary, transitional",
    tier: "Mid-range",
  },
  {
    species: "Walnut",
    costPerBf: "$12 to $18",
    weight: "Medium-heavy",
    finish: "Oil, wax",
    bestFor: "Modern, high-end",
    tier: "Premium",
  },
];

const tierColors: Record<string, string> = {
  Budget: "bg-green-50 text-green-700 border-green-200",
  "Mid-range": "bg-blue-50 text-blue-700 border-blue-200",
  Premium: "bg-amber-100 text-amber-800 border-amber-200",
};

export default function BarnDoorCost() {
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
            Barn Door Cost
          </h1>
          <p className="text-xl text-gray-600">
            Custom barn door pricing by style, size, and wood species. What materials and labor cost, how long they take to build, and how to quote sliding barn door work for your clients in 2026.
          </p>
          <p className="text-sm text-gray-400 mt-3">Updated March 2026</p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#cost-by-type" className="hover:text-amber-600">1. Cost by Door Style and Size</a></li>
            <li><a href="#cost-by-species" className="hover:text-amber-600">2. Cost by Wood Species</a></li>
            <li><a href="#hardware-cost" className="hover:text-amber-600">3. Barn Door Hardware Cost</a></li>
            <li><a href="#cost-drivers" className="hover:text-amber-600">4. What Drives Barn Door Costs</a></li>
            <li><a href="#how-to-price" className="hover:text-amber-600">5. How to Price a Custom Barn Door</a></li>
            <li><a href="#faq" className="hover:text-amber-600">6. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Section 1: Cost by Type */}
        <section id="cost-by-type" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Barn Door Cost by Style and Size</h2>
          <p className="text-gray-600 mb-6">
            The table below shows typical material costs, labor hours, hardware costs, and sale prices for custom barn door projects. Sale prices include materials, hardware, labor at $75 to $95 per hour, overhead at 20 percent, and a 30 percent profit margin. Installation is not included unless noted.
          </p>

          <div className="rounded-lg border border-gray-200 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Door Type</th>
                  <th className="px-4 py-3 font-semibold hidden md:table-cell">Material Cost</th>
                  <th className="px-4 py-3 font-semibold hidden lg:table-cell">Labor Hours</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Hardware</th>
                  <th className="px-4 py-3 font-semibold">Sale Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {DOOR_TYPES.map((row) => (
                  <tr
                    key={row.type}
                    className={row.type.includes("white oak") && row.style === "Solid slab" ? "bg-amber-50/40" : ""}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.materialCost}</td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{row.laborHours}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.hardwareCost}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.salePrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-900">Note: </span>
              Prices above are for the door panel and hardware only. Add $150 to $400 for professional installation if you are offering a complete supply-and-install package. Use the{" "}
              <Link href="/pricing-guide" className="text-amber-700 hover:underline font-medium">
                custom furniture pricing guide
              </Link>{" "}
              to build a precise cost using your actual shop rate and overhead.
            </p>
          </div>
        </section>

        {/* Section 2: Cost by Species */}
        <section id="cost-by-species" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Barn Door Cost by Wood Species</h2>
          <p className="text-gray-600 mb-6">
            Species choice is the largest variable in barn door material cost. Pine and poplar are common for painted doors. White oak and walnut dominate for stained or natural-finish doors at the higher end of the market.
          </p>

          <div className="rounded-lg border border-gray-200 overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-semibold">Species</th>
                  <th className="px-4 py-3 font-semibold">Cost/bf</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Weight</th>
                  <th className="px-4 py-3 font-semibold hidden md:table-cell">Best Finish</th>
                  <th className="px-4 py-3 font-semibold hidden lg:table-cell">Best For</th>
                  <th className="px-4 py-3 font-semibold">Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SPECIES_DATA.map((row) => (
                  <tr key={row.species}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.species}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.costPerBf}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.weight}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.finish}</td>
                    <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{row.bestFor}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${tierColors[row.tier]}`}>
                        {row.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">White oak: the most popular choice for stained barn doors</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                White oak has become the default choice for custom barn doors in contemporary and transitional interiors. Its open grain accepts oil and wire-brush finishes well, and its hardness makes it resistant to dings and wear, important for a door that will be slid open and closed daily. A standard 36 x 84-inch solid white oak barn door uses approximately 22 to 28 board feet of 4/4 stock (finished at 7/8 to 1 inch), putting lumber cost at $175 to $310 before waste allowance. See{" "}
                <Link href="/wood-prices" className="text-amber-700 hover:underline">
                  hardwood prices per board foot
                </Link>{" "}
                for current market pricing.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pine and poplar: best for painted barn doors</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When a client wants a painted barn door, pine and poplar are the right call. Both are lighter than hardwoods, which reduces stress on wall blocking and hardware. Poplar has a smoother surface than pine and takes primer and paint better with less grain show-through. Knotty pine is popular for rustic farmhouse aesthetics and is priced similarly to poplar. Either species can be milled at most lumber yards in the dimensional widths needed for a board-and-batten or Z-brace door without sourcing from a specialty hardwood dealer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Hardware Cost */}
        <section id="hardware-cost" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Barn Door Hardware Cost</h2>
          <p className="text-gray-600 mb-6">
            Hardware is the second largest cost category for a barn door project. A complete hardware kit includes the top track (rail), two rollers, a bottom floor guide, and a handle or pull. Door stops are sometimes sold separately.
          </p>

          <div className="space-y-4 mb-8">
            {[
              {
                tier: "Basic flat track kit",
                priceRange: "$80 to $150",
                includes: "Flat steel or aluminum track, two basic rollers, floor guide, handle",
                best: "Painted or budget barn doors, light-duty residential use",
              },
              {
                tier: "Mid-range forged or brushed finish kit",
                priceRange: "$150 to $250",
                includes: "Steel track with matte or brushed finish, smooth-rolling bearings, integrated stop, pull handle",
                best: "Standard hardwood barn doors, most residential projects",
              },
              {
                tier: "Premium architectural hardware",
                priceRange: "$250 to $500+",
                includes: "Heavy-duty track rated for 200+ lbs, soft-close mechanism, matching handles and pulls, concealed floor guide",
                best: "Walnut or premium hardwood doors, high-end residential or hospitality",
              },
              {
                tier: "Bypass double door hardware",
                priceRange: "$180 to $400",
                includes: "Double-track bypass system for two doors on one opening, all hardware included",
                best: "Wide openings, closets, pantries, laundry rooms",
              },
            ].map(({ tier, priceRange, includes, best }) => (
              <div key={tier} className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{tier}</h3>
                  <span className="text-base font-semibold text-amber-700 whitespace-nowrap">{priceRange}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1"><span className="font-medium text-gray-700">Includes:</span> {includes}</p>
                <p className="text-gray-600 text-sm"><span className="font-medium text-gray-700">Best for:</span> {best}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-amber-900">Markup tip: </span>
              Always pass hardware through to the client at your cost plus a 15 to 20 percent markup. Hardware sourcing, ordering, and receiving takes your time. Quoting hardware at cost with no markup is one of the most common pricing mistakes on barn door projects.
            </p>
          </div>
        </section>

        {/* Section 4: Cost Drivers */}
        <section id="cost-drivers" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Drives Barn Door Costs</h2>
          <div className="space-y-4">
            {[
              {
                title: "Door style and design complexity",
                impact: "High",
                text: "A Z-brace or simple board-and-batten door takes 6 to 9 hours and requires only basic joinery. A frame-and-panel door with grooved stiles and rails takes 10 to 16 hours and requires more precise joinery setup. A door with a glass insert, decorative cutout, or inlay can add 4 to 8 additional hours. Style choice alone can double the labor cost on a single door.",
              },
              {
                title: "Wood species",
                impact: "High",
                text: "Species is the largest single driver of material cost. A 36 x 84-inch door built from knotty pine costs $100 to $180 in lumber. The same door in white oak costs $180 to $320, and in walnut $380 to $650. Premium species also take more time to machine due to hardness and tend to require more careful grain matching on multi-board panels.",
              },
              {
                title: "Door size",
                impact: "High",
                text: "Standard single barn doors are 36 x 84 inches (for a 32-inch opening) or 42 x 84 inches (for a 36-inch opening). Oversized doors for wide openings or tall ceilings use significantly more material. A 48 x 96-inch door uses nearly twice the lumber of a 36 x 84-inch door. Track length also increases with door width, adding hardware cost.",
              },
              {
                title: "Single vs. double or bypass",
                impact: "High",
                text: "Double bypass systems require two full door panels and a dedicated bypass hardware kit. Material and hardware costs roughly double. Labor scales at 1.5 to 1.8x due to the additional setup time for aligning two tracks and matching door panels. Bypass doors covering a wide closet or pantry opening are among the highest-margin barn door projects.",
              },
              {
                title: "Finish type",
                impact: "Medium",
                text: "A simple oil-wax finish (Rubio, Osmo) adds 2 to 3 hours for application and drying between coats. A painted finish requires primer, sanding sealer, and 2 topcoats, adding 3 to 5 hours. Fumed or wire-brushed white oak finishes require additional surface prep steps before the oil finish, adding 1 to 3 hours. Premium film finishes (conversion varnish) require spray equipment and add material cost.",
              },
              {
                title: "Hardware grade",
                impact: "Medium",
                text: "Hardware cost ranges from $80 for a basic flat track kit to $500+ for premium architectural hardware. Soft-close mechanisms add $30 to $80 to any kit and are increasingly requested by clients in higher-end projects. The hardware choice should match the door and species tier, pairing a basic kit with a walnut slab door will undermine the project's perceived value.",
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

        {/* Section 5: How to Price */}
        <section id="how-to-price" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Price a Custom Barn Door</h2>
          <p className="text-gray-600 mb-6">
            Barn doors are one of the highest-volume custom woodworking orders because homeowners and interior designers order them repeatedly. Getting your pricing right on the first quote makes it easy to win repeat work.
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
              <h3 className="text-white font-semibold">Example: White Oak Solid Slab Barn Door, 36 x 84 in</h3>
              <p className="text-gray-400 text-sm">7/8-inch finished thickness, mid-range flat-bar hardware, Rubio Monocoat finish</p>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: "White oak 4/4 FAS lumber (26 bf at $9/bf, incl. 20% waste)", amount: "$234" },
                { label: "Material markup (18%)", amount: "$42" },
                { label: "Hardware kit (flat track, 2 rollers, floor guide, pull)", amount: "$195" },
                { label: "Hardware markup (18%)", amount: "$35" },
                { label: "Rubio Monocoat finish (2 coats)", amount: "$45" },
                { label: "Sandpaper and abrasives", amount: "$25" },
                { label: "Wood glue and fasteners", amount: "$15" },
                { label: "Total materials and hardware", amount: "$591", bold: true },
                { label: "Labor: milling and prep (3 hr)", amount: "$255" },
                { label: "Labor: glue-up and assembly (3 hr)", amount: "$255" },
                { label: "Labor: sanding (2 hr)", amount: "$170" },
                { label: "Labor: finish application (2 hr)", amount: "$170" },
                { label: "Labor: delivery and hanging (3 hr)", amount: "$255" },
                { label: "Total labor (13 hr at $85/hr)", amount: "$1,105", bold: true },
                { label: "Overhead (20%)", amount: "$221" },
                { label: "Subtotal (cost)", amount: "$1,917", bold: true },
                { label: "Profit margin (30%)", amount: "$822" },
                { label: "Sale price", amount: "$2,739", bold: true, highlight: true },
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
              Enter your lumber cost, hardware, labor hours, and overhead. CraftQuote calculates your margin and generates a professional, itemized PDF for your client.
            </p>
            <Link
              href="/projects/new"
              className="inline-block rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-500"
            >
              Start a Barn Door Quote
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
                  Current price ranges for white oak, walnut, maple, cherry, and 9 other species.
                </p>
              </div>
              <div>
                <Link href="/cabinet-pricing" className="font-semibold text-amber-700 hover:underline">
                  Custom Cabinet Pricing
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Cost per linear foot, cabinet types, and how to price custom cabinetry work.
                </p>
              </div>
              <div>
                <Link href="/custom-closet-cost" className="font-semibold text-amber-700 hover:underline">
                  Custom Closet Cost
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Pricing for reach-in, walk-in, and built-in closet systems, often sold alongside barn doors.
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
                <Link href="/calculator" className="font-semibold text-amber-700 hover:underline">
                  Board Foot Calculator
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Calculate total board footage and lumber cost for your barn door project.
                </p>
              </div>
              <div>
                <Link href="/quote-template" className="font-semibold text-amber-700 hover:underline">
                  Woodworking Quote Template
                </Link>
                <p className="text-gray-600 mt-0.5">
                  Free quote template showing every line item to include on a professional barn door estimate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
