import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Woodworking Quote Template - What Every Estimate Needs",
  description: "Free woodworking quote template for custom furniture makers. See exactly what a professional furniture estimate includes: materials, labor, overhead, and margin. Download the structure and generate quotes instantly.",
  keywords: ["woodworking quote template", "furniture estimate template", "custom furniture quote", "woodworking estimate", "furniture quote format"],
  alternates: {
    canonical: "https://customwoodquote.com/quote-template",
  },
  openGraph: {
    title: "Free Woodworking Quote Template - What Every Estimate Needs",
    description: "See exactly what a professional woodworking quote includes. Free template structure for custom furniture makers covering materials, labor, overhead, and profit margin.",
    type: "article",
    url: "https://customwoodquote.com/quote-template",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Woodworking Quote Template - CraftQuote",
      },
    ],
    publishedTime: "2026-03-18T00:00:00Z",
    authors: ["https://customwoodquote.com"],
    section: "Woodworking Business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Woodworking Quote Template - What Every Estimate Needs",
    description: "See exactly what a professional woodworking quote includes. Free template for custom furniture makers.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://customwoodquote.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Woodworking Quote Template",
      "item": "https://customwoodquote.com/quote-template",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Write a Professional Woodworking Quote",
  "description": "A step-by-step guide to creating professional woodworking quotes that win jobs and protect your margins.",
  "totalTime": "PT15M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "List all materials with board-foot quantities",
      "text": "Identify every species you need, calculate board feet for each component, add a 15 to 20 percent waste buffer, and price at your actual supplier cost per board foot.",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Itemize labor by category",
      "text": "Break labor into design, material sourcing, milling, joinery, assembly, finishing, and delivery. Multiply total hours by your shop rate. Never quote a flat 'labor' line with no breakdown.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Add hardware and consumables",
      "text": "List drawer slides, hinges, table legs, bolts, finish materials, sandpaper, and any other consumables as a separate line. Small items add up and clients respect the transparency.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Include overhead allocation",
      "text": "Divide your monthly shop costs by your billable hours to get a per-hour overhead rate. Multiply by project hours. This is the line most woodworkers leave out and the main reason quotes come up short.",
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Apply your profit margin",
      "text": "Add 20 to 35 percent profit margin on top of total cost. Include a quote validity date (typically 30 days) and a deposit requirement. State your lead time clearly.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should a woodworking quote include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A professional woodworking quote should include: a project description with dimensions and species, an itemized materials list with board-foot quantities and pricing, labor broken down by category (design, milling, assembly, finishing, delivery), hardware and consumables, overhead allocation, your profit margin, total price, quote validity date, deposit amount, and estimated lead time. Quotes that show this level of detail close at a higher rate and reduce scope disputes after the job starts.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I write a quote for custom furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with the project description: dimensions, species, finish, and any special features like inlay or carved details. Then work through materials (lumber by board foot, hardware, finish), labor (every hour by category, not a flat total), overhead, and margin. Use a consistent format so clients can read it easily and you can duplicate it for similar jobs. CraftQuote automates this from a reference photo.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I calculate the price for a custom furniture quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add up material costs (lumber at board-foot pricing plus a 15 percent waste factor, hardware, finish, consumables), labor (every hour times your shop rate), and overhead (monthly shop costs divided by billable hours, multiplied by project hours). Add your profit margin, typically 20 to 35 percent, on top of the total. That final number is your quote price.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a fair deposit for custom woodworking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most custom woodworkers require a 40 to 50 percent deposit to start, with the balance due on delivery. Some shops use a three-part structure: 33 percent to start, 33 percent at a midpoint milestone, and 34 percent on delivery. The deposit covers your materials and initial labor so you are not financing the project out of pocket.",
      },
    },
    {
      "@type": "Question",
      "name": "How long should a woodworking quote be valid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most woodworkers set a 30-day validity window on quotes. Lumber prices change, your schedule fills, and a quote you sent three months ago may no longer reflect your current costs. State the validity date clearly in the quote document. If a client comes back after expiry, requote from current numbers.",
      },
    },
    {
      "@type": "Question",
      "name": "Should I use a spreadsheet or software for woodworking quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spreadsheet templates work but require manual upkeep of material prices, recalculation of board feet, and reformatting for each client. Quoting software like CraftQuote automates the math, stores species pricing, and produces a professional customer-facing output in a fraction of the time. For woodworkers quoting more than a few jobs per month, software pays for itself in time saved.",
      },
    },
  ],
};

const QUOTE_SECTIONS = [
  {
    number: "01",
    title: "Project Header",
    items: [
      "Client name and contact information",
      "Quote date and quote number",
      "Quote validity (typically 30 days)",
      "Brief project description",
    ],
  },
  {
    number: "02",
    title: "Project Specifications",
    items: [
      "Furniture type and dimensions",
      "Wood species selection",
      "Finish type and sheen level",
      "Joinery method and complexity tier",
      "Special features (inlay, carving, custom hardware)",
    ],
  },
  {
    number: "03",
    title: "Materials Breakdown",
    items: [
      "Lumber: board feet per species at price/bf",
      "Waste factor (add 15 to 20 percent)",
      "Hardware (slides, hinges, legs, fasteners)",
      "Finish materials (oil, wax, lacquer, stain)",
      "Consumables (sandpaper, glue, tape)",
    ],
  },
  {
    number: "04",
    title: "Labor Breakdown",
    items: [
      "Design and client communication (hours)",
      "Material sourcing (hours)",
      "Milling and prep (hours)",
      "Joinery (hours)",
      "Assembly (hours)",
      "Finishing (hours)",
      "Cleanup and delivery (hours)",
    ],
  },
  {
    number: "05",
    title: "Cost Summary",
    items: [
      "Total materials cost",
      "Total labor cost (hours × shop rate)",
      "Overhead allocation",
      "Subtotal",
      "Profit margin (percentage)",
      "Final quote total",
    ],
  },
  {
    number: "06",
    title: "Terms and Next Steps",
    items: [
      "Deposit amount required to start",
      "Payment schedule",
      "Estimated lead time",
      "Revision and change order policy",
      "Accept or decline action for client",
    ],
  },
];

export default function QuoteTemplate() {
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
            Woodworking Quote Template
          </h1>
          <p className="text-xl text-gray-600">
            Most woodworkers lose money on custom furniture because their quotes miss things. Here is every section a professional woodworking quote needs, in the order it should appear, with the line items that matter.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-lg bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#template-sections" className="hover:text-amber-600">1. The Six Sections of a Professional Quote</a></li>
            <li><a href="#sample-quote" className="hover:text-amber-600">2. Sample Quote: Walnut Dining Table</a></li>
            <li><a href="#how-to-write" className="hover:text-amber-600">3. How to Write the Quote</a></li>
            <li><a href="#common-mistakes" className="hover:text-amber-600">4. What Most Templates Get Wrong</a></li>
            <li><a href="#faq" className="hover:text-amber-600">5. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* Section 1: Template Sections */}
        <section id="template-sections" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Six Sections of a Professional Quote</h2>
          <p className="text-gray-600 mb-8">
            A quote that wins jobs and protects your margin covers six areas. Anything shorter leaves the client guessing. Anything longer loses them. This structure works for dining tables, cabinets, beds, shelving units, and any other custom piece.
          </p>
          <div className="space-y-6">
            {QUOTE_SECTIONS.map((section) => (
              <div key={section.number} className="rounded-lg border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-amber-200 leading-none select-none">{section.number}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-amber-500 mt-0.5 shrink-0">&#9656;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Sample Quote */}
        <section id="sample-quote" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sample Quote: Walnut Dining Table</h2>
          <p className="text-gray-600 mb-6">
            Here is a complete example using the template above. This is a standard 72-inch by 36-inch walnut dining table with mortise-and-tenon leg construction and an oil-wax finish.
          </p>

          <div className="rounded-lg border border-gray-200 overflow-hidden">
            {/* Quote Header */}
            <div className="bg-gray-900 text-white p-6">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <div className="text-lg font-bold">CraftQuote Example</div>
                  <div className="text-gray-400 text-sm mt-1">customwoodquote.com</div>
                </div>
                <div className="text-right text-sm text-gray-300">
                  <div>Quote #2026-047</div>
                  <div>Date: March 18, 2026</div>
                  <div>Valid 30 days</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-300"><span className="text-white font-medium">Client:</span> Jane Smith</div>
                <div className="text-sm text-gray-300 mt-1"><span className="text-white font-medium">Project:</span> Walnut Dining Table, 72&quot; × 36&quot; × 30&quot;, Mortise-and-Tenon Legs, Oil-Wax Finish</div>
              </div>
            </div>

            {/* Materials */}
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Materials</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="pb-2 font-medium">Item</th>
                    <th className="pb-2 font-medium text-right">Qty</th>
                    <th className="pb-2 font-medium text-right">Unit Cost</th>
                    <th className="pb-2 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="py-2 text-gray-700">Walnut (tabletop, FAS grade)</td>
                    <td className="py-2 text-right text-gray-600">34 bf</td>
                    <td className="py-2 text-right text-gray-600">$12.50/bf</td>
                    <td className="py-2 text-right font-medium text-gray-900">$425.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">Walnut (legs and aprons)</td>
                    <td className="py-2 text-right text-gray-600">18 bf</td>
                    <td className="py-2 text-right text-gray-600">$12.50/bf</td>
                    <td className="py-2 text-right font-medium text-gray-900">$225.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">Waste factor (15%)</td>
                    <td className="py-2 text-right text-gray-600">&mdash;</td>
                    <td className="py-2 text-right text-gray-600">&mdash;</td>
                    <td className="py-2 text-right font-medium text-gray-900">$97.50</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">Hardware (table buttons, bolts)</td>
                    <td className="py-2 text-right text-gray-600">1 set</td>
                    <td className="py-2 text-right text-gray-600">&mdash;</td>
                    <td className="py-2 text-right font-medium text-gray-900">$45.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">Finish (Rubio Monocoat oil, applicator)</td>
                    <td className="py-2 text-right text-gray-600">1 set</td>
                    <td className="py-2 text-right text-gray-600">&mdash;</td>
                    <td className="py-2 text-right font-medium text-gray-900">$55.00</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-2 font-semibold text-gray-900" colSpan={3}>Materials Subtotal</td>
                    <td className="py-2 text-right font-bold text-gray-900">$847.50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Labor */}
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Labor (Shop Rate: $65/hr)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="pb-2 font-medium">Category</th>
                    <th className="pb-2 font-medium text-right">Hours</th>
                    <th className="pb-2 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Design and client calls", "3.0", "$195.00"],
                    ["Material sourcing", "1.5", "$97.50"],
                    ["Milling and prep", "5.0", "$325.00"],
                    ["Mortise-and-tenon joinery", "8.0", "$520.00"],
                    ["Assembly and glue-up", "4.0", "$260.00"],
                    ["Finishing (3 coats, sand between)", "6.0", "$390.00"],
                    ["Final inspection and delivery", "2.0", "$130.00"],
                  ].map(([cat, hrs, total]) => (
                    <tr key={cat}>
                      <td className="py-2 text-gray-700">{cat}</td>
                      <td className="py-2 text-right text-gray-600">{hrs}</td>
                      <td className="py-2 text-right font-medium text-gray-900">{total}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-200">
                    <td className="py-2 font-semibold text-gray-900">Labor Subtotal</td>
                    <td className="py-2 text-right font-semibold text-gray-900">29.5 hrs</td>
                    <td className="py-2 text-right font-bold text-gray-900">$1,917.50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Cost Summary</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Materials</span><span>$847.50</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Labor (29.5 hrs × $65)</span><span>$1,917.50</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Overhead (29.5 hrs × $9.50/hr)</span><span>$280.25</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 border-t border-gray-200 pt-2 mt-2">
                  <span>Total Cost</span><span>$3,045.25</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Profit Margin (25%)</span><span>$761.31</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 border-t-2 border-gray-900 pt-2 mt-2">
                  <span>Quote Total</span><span>$3,806.56</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-600 space-y-1">
                <div><span className="font-medium text-gray-900">Deposit required:</span> $1,900 (50%) to begin</div>
                <div><span className="font-medium text-gray-900">Balance due:</span> $1,906.56 on delivery</div>
                <div><span className="font-medium text-gray-900">Lead time:</span> 6 to 8 weeks from deposit</div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            This example used the CraftQuote builder. The math is automatic once you enter dimensions and select a species.
          </p>
        </section>

        {/* Section 3: How to Write */}
        <section id="how-to-write" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Write the Quote</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Calculate board feet first</h3>
              <p className="text-gray-600">
                Start with the lumber. Break the piece into its components, estimate dimensions for each, and calculate board feet using the formula: (Length × Width × Thickness) ÷ 144. Add a 15 percent waste factor. That is the number you price. Our{" "}
                <Link href="/calculator" className="text-amber-600 hover:underline">board foot calculator</Link>{" "}
                does this in seconds.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Break labor into categories</h3>
              <p className="text-gray-600">
                Never write &quot;labor: 30 hours.&quot; Break it into categories: design, material runs, milling, joinery, assembly, finishing, and delivery. Clients who see the breakdown rarely question it. Clients who see a single number always do. And you will catch undercounting when you itemize.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Add overhead before margin</h3>
              <p className="text-gray-600">
                Overhead is not profit. It is the cost of running your shop whether or not you are building. Divide your monthly overhead by your monthly billable hours to get a per-hour rate. Multiply by project hours. It shows up as its own line before the margin calculation. For help setting these numbers, see the{" "}
                <Link href="/pricing-guide" className="text-amber-600 hover:underline">pricing guide</Link>.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: State your terms clearly</h3>
              <p className="text-gray-600">
                A quote with no terms is a verbal agreement. Write your deposit requirement, payment schedule, validity date, and lead time. State that changes after acceptance require a change order. Clients who accept a complete quote rarely dispute scope later.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Common Mistakes */}
        <section id="common-mistakes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Most Templates Get Wrong</h2>
          <div className="space-y-4">
            <div className="rounded-lg bg-red-50 border border-red-200 p-5">
              <h3 className="font-semibold text-red-900 mb-1">No overhead line</h3>
              <p className="text-gray-700 text-sm">
                The most common omission. If your template does not have an overhead allocation separate from labor, you are working for less than your shop rate implies. Overhead belongs in the cost section before margin.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-5">
              <h3 className="font-semibold text-red-900 mb-1">Single &quot;materials&quot; line with no breakdown</h3>
              <p className="text-gray-700 text-sm">
                One number with no detail is easy for a client to push back on. An itemized list is not. Show lumber by species and board foot, hardware as a line, and finish as a line. Clients see the work, not the total.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-5">
              <h3 className="font-semibold text-red-900 mb-1">No validity date</h3>
              <p className="text-gray-700 text-sm">
                Lumber prices move. Your schedule fills. Without a validity date, a client can come back six months later and expect your quote to hold. Thirty days is standard. Print it prominently.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-5">
              <h3 className="font-semibold text-red-900 mb-1">No deposit requirement on the document</h3>
              <p className="text-gray-700 text-sm">
                If the deposit amount is not in the quote, you will negotiate it separately for every job. Write the amount and the timing on the document. It sets expectations before the client accepts.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 border border-red-200 p-5">
              <h3 className="font-semibold text-red-900 mb-1">Sending it as a plain email</h3>
              <p className="text-gray-700 text-sm">
                A plain-text email quote looks like a guess. A formatted document with your name, project specs, and itemized costs looks like a professional business. The difference in client perception is significant and requires no extra work if you use the right tool.
              </p>
            </div>
          </div>
        </section>

        {/* CTA - Use CraftQuote */}
        <section className="mb-12">
          <div className="rounded-2xl bg-gray-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Skip the template. Build the quote automatically.
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
              CraftQuote produces a complete, itemized quote from a reference photo. Upload an image of the piece, enter dimensions, pick your species, and the builder handles board-foot calculations, labor breakdown, overhead, and margin. Your customer gets a professional link to view and accept it.
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
                <p className="text-gray-600 mt-0.5">The full methodology: material costs, shop rate formula, overhead allocation, and profit margin targets.</p>
              </div>
              <div>
                <Link href="/calculator" className="font-semibold text-amber-700 hover:underline">
                  Board Foot Calculator
                </Link>
                <p className="text-gray-600 mt-0.5">Calculate lumber volume and estimated material cost for 12 common furniture hardwoods and softwoods.</p>
              </div>
              <div>
                <Link href="/help" className="font-semibold text-amber-700 hover:underline">
                  Help and FAQ
                </Link>
                <p className="text-gray-600 mt-0.5">Answers to common questions about the CraftQuote builder, pricing database, and sending professional quotes.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
