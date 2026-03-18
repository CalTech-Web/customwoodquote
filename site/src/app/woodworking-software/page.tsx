import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Woodworking Software in 2026: Design, Cut Lists, and Quoting",
  description: "The best woodworking software for design, cut optimization, and quoting. Covers free and paid tools for custom furniture makers, cabinet makers, and woodworking shops.",
  keywords: [
    "woodworking software",
    "best woodworking design software",
    "woodworking design software",
    "free woodworking software",
    "woodworking cad software",
    "furniture design software",
    "woodworking estimating software",
    "cabinet design software",
  ],
  alternates: {
    canonical: "https://customwoodquote.com/woodworking-software",
  },
  openGraph: {
    title: "Best Woodworking Software in 2026: Design, Cut Lists, and Quoting",
    description: "Design, cut optimization, and quoting tools for custom furniture makers, cabinet makers, and woodworking shops. Free and paid options compared.",
    type: "article",
    url: "https://customwoodquote.com/woodworking-software",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Woodworking Software Guide - CraftQuote",
      },
    ],
    publishedTime: "2026-03-18T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Woodworking Software in 2026: Design, Cut Lists, and Quoting",
    description: "Design, cut optimization, and quoting tools for woodworkers. Free and paid options compared.",
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
      name: "Best Woodworking Software",
      item: "https://customwoodquote.com/woodworking-software",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Woodworking Software",
  description: "The top design, cut optimization, and quoting tools for custom woodworkers and cabinet makers.",
  numberOfItems: 10,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "SketchUp",
      url: "https://www.sketchup.com",
      description: "3D modeling software popular with woodworkers for its intuitive push-pull workflow and free web version.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fusion 360",
      url: "https://www.autodesk.com/products/fusion-360",
      description: "Full parametric CAD with woodworking joints, sheet metal, and rendering. Free for personal use.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CutList Plus",
      url: "https://www.cutlistplus.com",
      description: "Dedicated cut optimization software that minimizes sheet goods and lumber waste.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "CraftQuote",
      url: "https://customwoodquote.com",
      description: "Free AI-powered quoting software built specifically for custom furniture makers and woodworking shops.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Vectric VCarve",
      url: "https://www.vectric.com",
      description: "Industry-standard CNC toolpath and design software for woodworking shops with CNC routers.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Cabinet Vision",
      url: "https://www.cabinetvision.com",
      description: "Professional cabinet design and manufacturing software used by high-volume cabinet shops.",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Woodworker's Journal Plans",
      url: "https://www.woodworkersjournal.com",
      description: "Plan library and reference resource for woodworking projects across skill levels.",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "OpenCutList (SketchUp plugin)",
      url: "https://opencutlist.org",
      description: "Free SketchUp extension that generates cut lists, board layouts, and material reports directly from your model.",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Carbide Create",
      url: "https://carbide3d.com/carbidecreate",
      description: "Free design and toolpath software from Carbide 3D, primarily for CNC routing.",
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "LibreCAD",
      url: "https://librecad.org",
      description: "Free, open-source 2D CAD application for technical drawings, joinery details, and shop layouts.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What software do most woodworkers use for design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SketchUp is the most widely used 3D design tool among custom furniture makers and woodworking shops. Its push-pull modeling workflow maps closely to how woodworkers think about construction. The free web version covers most use cases, and the OpenCutList extension adds cut list generation directly from your model. Fusion 360 is the second most common choice, especially for woodworkers who also do CNC work or need parametric modeling for complex joinery.",
      },
    },
    {
      "@type": "Question",
      name: "Is there free woodworking design software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SketchUp Free (web-based), Fusion 360 (free for personal use), LibreCAD (open-source 2D CAD), and Carbide Create (free CNC design) are all free options. For cut list optimization, CutListOptimizer.com is a free web tool. For quoting, CraftQuote is free with no account required and no usage limits.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best software for creating woodworking cut lists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CutList Plus is the dedicated tool and the most thorough option for optimizing sheet goods and lumber cuts. For woodworkers already using SketchUp, the free OpenCutList extension generates cut lists directly from the model with no re-entry of dimensions. Both produce layouts that show how to cut panels from full sheets with minimal waste.",
      },
    },
    {
      "@type": "Question",
      name: "What software do woodworkers use to write quotes and estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most custom woodworkers still use spreadsheets or pen and paper for quoting, which is slow and error-prone. CraftQuote is a free quoting tool built specifically for custom furniture makers and woodworking shops. It handles material costs (50 plus wood species with per board-foot pricing), labor by category, overhead, and profit margin automatically. Upload reference photos and CraftQuote's AI identifies furniture type, style, and complexity to start the estimate. No account required.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need CAD experience to use woodworking design software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not for SketchUp or Fusion 360. Both have large tutorial libraries and the learning curve for basic furniture modeling is measured in hours, not days. Most woodworkers find SketchUp intuitive because the push-pull workflow mirrors how you think about cutting and assembling wood. LibreCAD requires more technical drawing knowledge. Professional tools like Cabinet Vision or SolidWorks have steeper learning curves and are better suited to high-volume shops.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use design software before sending a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the project. For complex custom pieces with unusual dimensions or joinery, a quick SketchUp model helps catch design issues before you are committed to a quote. For more standard work, most experienced woodworkers can estimate from reference photos and dimensions alone. CraftQuote's AI photo analysis is designed for this case: upload the reference photo, confirm the AI's read on the piece, then build the quote from there without needing a CAD file.",
      },
    },
  ],
};

const SOFTWARE_CATEGORIES = [
  {
    category: "Design and 3D Modeling",
    description: "Tools for visualizing, planning, and refining furniture pieces before you cut wood.",
    tools: [
      {
        name: "SketchUp",
        free: true,
        best: "Custom furniture, cabinet layout, shop drawings",
        notes: "Most popular design tool among woodworkers. Intuitive push-pull workflow. Free web version available. Pair with the OpenCutList extension to generate cut lists directly from the model.",
        rating: "Best for most woodworkers",
      },
      {
        name: "Fusion 360",
        free: true,
        best: "Parametric modeling, CNC toolpaths, complex joinery",
        notes: "Full parametric CAD with a free personal license. Steeper learning curve than SketchUp but supports assembly constraints, so changing one dimension updates the whole model. Includes integrated CAM for CNC work.",
        rating: "Best for CNC and parametric work",
      },
      {
        name: "LibreCAD",
        free: true,
        best: "Technical 2D drawings, joinery details, shop layouts",
        notes: "Open-source and completely free. Outputs the kind of dimensioned 2D drawings you would hand to a helper in the shop. Not 3D, but excellent for joinery callouts and precise shop drawings.",
        rating: "Best free 2D option",
      },
    ],
  },
  {
    category: "Cut Optimization",
    description: "Tools that calculate how to cut sheet goods and lumber with minimum waste.",
    tools: [
      {
        name: "CutList Plus",
        free: false,
        best: "Sheet goods optimization, lumber cutting, material reports",
        notes: "The standard dedicated cut optimization tool. Enter your parts list and sheet sizes, and CutList Plus generates optimized cutting layouts with labeled diagrams. Paid software with a free trial. Worth it for high-volume shops.",
        rating: "Best dedicated cut optimizer",
      },
      {
        name: "OpenCutList (SketchUp Extension)",
        free: true,
        best: "SketchUp users who want cut lists without re-entering dimensions",
        notes: "Free SketchUp extension from L'Air du Bois. Reads your model components and generates a full cut list, panel layouts, and material summary. If you already design in SketchUp, this eliminates double-entry entirely.",
        rating: "Best for SketchUp users",
      },
      {
        name: "CutListOptimizer.com",
        free: true,
        best: "Quick sheet goods layouts with no software install",
        notes: "Free web tool. Enter part dimensions and sheet size, get an optimized layout. No account needed. Good for one-off projects or shops that don't want to maintain paid software.",
        rating: "Best quick web tool",
      },
    ],
  },
  {
    category: "CNC Design and Toolpaths",
    description: "Software for designing CNC-routed parts and generating machine toolpaths.",
    tools: [
      {
        name: "Vectric VCarve Pro",
        free: false,
        best: "CNC routing, v-carving, 2D and 2.5D work",
        notes: "The most widely used toolpath software in woodworking shops with CNC routers. Strong design tools, a large user community, and excellent post-processor support for almost every machine. Desktop software with a one-time license.",
        rating: "Industry standard for CNC shops",
      },
      {
        name: "Carbide Create",
        free: true,
        best: "Carbide 3D machines, entry-level CNC routing",
        notes: "Free design and toolpath software from Carbide 3D. Works with any machine that accepts standard G-code. Good starting point for woodworkers new to CNC before committing to VCarve or Fusion 360 CAM.",
        rating: "Best free CNC option",
      },
    ],
  },
  {
    category: "Quoting and Estimating",
    description: "Tools for calculating material costs, labor, overhead, and sending professional quotes to clients.",
    tools: [
      {
        name: "CraftQuote (customwoodquote.com)",
        free: true,
        best: "Custom furniture quotes, cabinet estimates, professional PDFs",
        notes: "Free quoting tool built specifically for custom woodworkers. Upload reference photos and AI identifies furniture type, style, and complexity. Material database covers 50 plus wood species with per board-foot pricing. Labor, overhead, and margin built into the workflow. Output a branded PDF or shareable link. No account required.",
        rating: "Best quoting tool for woodworkers",
        highlight: true,
      },
      {
        name: "Cabinet Vision",
        free: false,
        best: "High-volume cabinet shops, integrated design and manufacturing",
        notes: "Professional cabinet design and production software. Integrates with CNC equipment for automated part generation. Expensive and requires training. Best for shops producing 10 or more kitchens per month.",
        rating: "Best for high-volume cabinet shops",
      },
    ],
  },
];

export default function WoodworkingSoftware() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-3xl px-2 py-8 lg:px-4">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Best Woodworking Software in 2026
          </h1>
          <p className="text-xl text-gray-600">
            Design tools, cut optimizers, CNC software, and quoting tools for custom furniture makers, cabinet makers, and woodworking shops. Free and paid options covered.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#design-software" className="hover:text-amber-600">1. Design and 3D Modeling Software</a></li>
            <li><a href="#cut-optimization" className="hover:text-amber-600">2. Cut Optimization Software</a></li>
            <li><a href="#cnc-software" className="hover:text-amber-600">3. CNC Design and Toolpath Software</a></li>
            <li><a href="#quoting-software" className="hover:text-amber-600">4. Quoting and Estimating Software</a></li>
            <li><a href="#how-to-choose" className="hover:text-amber-600">5. How to Choose the Right Tools</a></li>
            <li><a href="#faq" className="hover:text-amber-600">6. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-600 mb-4">
            Most woodworking businesses use four types of software: something to design the piece, something to optimize cuts and minimize waste, something to run CNC equipment if they have it, and something to write professional quotes for clients. This guide covers the best options in each category, with an honest look at what each one does well and where it falls short.
          </p>
          <p className="text-gray-600">
            For each tool, the rating reflects how well it fits the needs of a custom furniture maker or small cabinet shop, not a large production facility or a hobbyist with a table saw in the garage. Both extremes have different requirements.
          </p>
        </section>

        {/* Software Categories */}
        {SOFTWARE_CATEGORIES.map((cat, ci) => {
          const sectionIds = ["design-software", "cut-optimization", "cnc-software", "quoting-software"];
          return (
            <section key={cat.category} id={sectionIds[ci]} className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{cat.category}</h2>
              <p className="text-gray-600 mb-6">{cat.description}</p>
              <div className="space-y-5">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`rounded-lg border p-5 ${
                      tool.highlight
                        ? "border-amber-300 bg-amber-50"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            tool.free
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-gray-100 text-gray-600 border border-gray-200"
                          }`}
                        >
                          {tool.free ? "Free available" : "Paid"}
                        </span>
                        <span className="text-xs font-medium text-amber-700 bg-white border border-amber-200 px-2 py-0.5 rounded-full">
                          {tool.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="font-medium text-gray-700">Best for: </span>
                      {tool.best}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">{tool.notes}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* How to Choose */}
        <section id="how-to-choose" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Tools</h2>
          <p className="text-gray-600 mb-6">
            Most custom furniture makers and small cabinet shops need one tool from each category. More software does not mean better work. Start with the minimum that solves a real problem in your workflow, and add tools only when you hit a clear limitation.
          </p>
          <div className="space-y-4">
            {[
              {
                title: "If you are not yet using any design software",
                text: "Start with SketchUp Free. The web version is free, the community is large, and there are thousands of woodworking-specific tutorials. Add the OpenCutList extension once you are comfortable with modeling and you will get cut lists without any additional software.",
              },
              {
                title: "If you want parametric modeling or do CNC work",
                text: "Fusion 360 is the strongest free option. It handles both design and CAM (toolpaths) in one application, so you avoid exporting files between tools. The learning curve is steeper than SketchUp but the integration is worth it for shops that run CNC regularly.",
              },
              {
                title: "If you build mostly from sheet goods",
                text: "A dedicated cut optimizer pays for itself quickly in reduced material waste. CutList Plus is the standard. If you use SketchUp, OpenCutList is free and eliminates re-entry of dimensions entirely.",
              },
              {
                title: "If you are still quoting by spreadsheet or pen and paper",
                text: (
                  <>
                    This is the highest-leverage change in the list. Slow, inaccurate quoting leads directly to underpriced jobs and lost margin. CraftQuote is free, takes minutes to learn, and handles material costs, labor, overhead, and margin in one workflow. Start with the{" "}
                    <Link href="/quote-template" className="text-amber-600 hover:underline">
                      woodworking quote template
                    </Link>
                    {" "}to understand the structure, then use CraftQuote to build your next real quote.
                  </>
                ),
              },
            ].map(({ title, text }) => (
              <div key={title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gray-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop quoting from spreadsheets.
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
              CraftQuote is a free quoting tool built specifically for custom woodworkers. Upload a reference photo, enter your specs, and send a professional, itemized quote in minutes. Material costs, labor, overhead, and margin all handled automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote-builder"
                className="inline-block rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
              >
                Start Building a Quote
              </Link>
              <Link
                href="/pricing-guide"
                className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Read the Pricing Guide
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                <p className="text-gray-600 mt-0.5">Calculate lumber volume and material cost for 12 common hardwoods and softwoods. Free to use with no account required.</p>
              </div>
              <div>
                <Link href="/pricing-guide" className="font-semibold text-amber-700 hover:underline">
                  How to Price Custom Furniture
                </Link>
                <p className="text-gray-600 mt-0.5">Full pricing methodology covering shop rate, material costs, overhead allocation, and profit margin targets.</p>
              </div>
              <div>
                <Link href="/quote-template" className="font-semibold text-amber-700 hover:underline">
                  Woodworking Quote Template
                </Link>
                <p className="text-gray-600 mt-0.5">Every section a professional woodworking quote needs, with a complete worked example.</p>
              </div>
              <div>
                <Link href="/cabinet-pricing" className="font-semibold text-amber-700 hover:underline">
                  Custom Cabinet Pricing Guide
                </Link>
                <p className="text-gray-600 mt-0.5">Cost per linear foot, cabinet types, cost drivers, and a step-by-step quoting process for cabinet work.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
