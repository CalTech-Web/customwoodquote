# CraftQuote (CustomWoodQuote.com) - Master Site Facts Document
> Compiled for CraftQuote - March 2026 - For use in site development and content work

---

## Company Identity

| Field | Value |
|---|---|
| **Brand Name** | CraftQuote |
| **Website** | customwoodquote.com |
| **Phone** | Unknown |
| **Address** | Unknown |
| **City / State** | Unknown |
| **Founded** | 2026 |
| **Copyright** | 2026 CustomWoodQuote.com - All Rights Reserved. |

**Tagline / Value Prop:** "AI-assisted quoting software for custom woodworkers. Create professional quotes in minutes, not hours."

**One-liner:** CraftQuote is a free, AI-powered quoting tool that helps custom furniture makers turn reference photos into professional, itemized estimates in minutes.

**Founding Story / Category:** Built for the ~20,000 custom furniture makers in the US who currently price by gut feel, spreadsheets, or pen and paper.

---

## Services Offered (Features)

### 1. AI Photo Analysis
- Upload 1-3 photos of a reference piece
- AI identifies furniture type, style, complexity tier
- Detects visible joinery techniques
- Estimates component count and finish appearance
- Returns structured analysis with confidence scores
- URL: `/`

### 2. Guided Project Builder
- Step-by-step quote creation wizard
- Dimensions with auto board-foot calculation
- Material selection from 50+ wood species with pricing
- Hardware catalog with categorized items
- Labor estimation with adjustable categories
- URL: `/projects/new`

### 3. Board-Foot Calculator
- Free standalone calculator tool
- Supports 12+ common wood species
- Length, width, thickness, and quantity inputs
- Instant cost estimation per species
- URL: `/calculator`

### 4. Quote Generator
- Professional, branded PDF quotes
- Shareable web links for customers
- Itemized breakdowns (materials, labor, overhead)
- Customer accept/decline flow
- URL: `/quotes/[shareToken]`

### 5. Project Dashboard
- All quotes with status tracking
- Search and filter capabilities
- Quick duplicate for similar projects
- Basic analytics (win rate, average value)
- URL: `/dashboard`

---

## Platforms Managed

| Platform | Category |
|---|---|
| Web App | Primary SaaS Platform |
| Vercel | Hosting / Deployment |

---

## Performance Metrics / Stats

| Metric | Value |
|---|---|
| Time savings per quote | Hours to minutes |
| Wood species in database | 50+ |
| Target market size | ~20,000 custom furniture makers in the US |
| Adjacent market validation | Handoff AI ($25M raised), HOVER ($174M raised) |
| Direct competitors | Zero in craft quoting |
| Pain severity | 9/10, unsolved for decades |

---

## Process (How It Works)

| Phase | Title | Description |
|---|---|---|
| Step 1 | Upload Photo | Upload 1-3 reference photos of the furniture piece |
| Step 2 | AI Analysis | AI identifies type, style, complexity, joinery, and components |
| Step 3 | Refine Details | Confirm AI suggestions, enter dimensions, select materials |
| Step 4 | Review Pricing | Review labor, overhead, margin, and total cost |
| Step 5 | Generate Quote | Create branded PDF or shareable link for your customer |

---

## Key Differentiators

- Only quoting tool built specifically for custom woodworkers, not contractors
- AI photo analysis identifies furniture type, style, and complexity automatically
- Material database with 50+ wood species and real pricing
- Built-in board-foot calculator
- Free to use with no login required and no usage limits
- Professional quote output (PDF + shareable link)

---

## Industries Served

| Industry | URL |
|---|---|
| Custom Furniture Making | `/` |
| Cabinetry | `/` |
| Woodworking Shops | `/` |

**Geographic focus:** United States, serving woodworkers nationwide.

---

## FAQ Content

**Q: Is CraftQuote really free?**
Yes. CraftQuote is completely free to use with no account required and no usage limits. Upload photos, build quotes, and generate PDFs at no cost.

**Q: How accurate is the AI photo analysis?**
The AI provides a strong starting point by identifying furniture type, style, and complexity. You always confirm and adjust the suggestions before building your quote.

**Q: What wood species are included in the pricing database?**
Over 50 common hardwood and softwood species with per board-foot pricing. You can also override any price with your actual supplier costs.

**Q: Can my customers see and respond to quotes?**
Yes. Each quote gets a unique shareable link. Your customer can view the professional quote and accept or request changes directly.

**Q: Do I need to create an account?**
No account is required. You can start building quotes immediately.

**Q: What if the AI doesn't recognize my piece correctly?**
The AI suggestions are always editable. Use them as a starting point and adjust the furniture type, style, or complexity to match your project.

---

## Site Structure / Navigation

### Primary Navigation
- Home (`/`)
- Dashboard (`/dashboard`)
- New Quote (`/projects/new`)
- Calculator (`/calculator`)
- Settings (`/settings`)

### CTAs
- Start Building a Quote -> (`/#quote-builder`)

### Additional Pages
- Pricing Guide (`/pricing-guide`)
- Help (`/help`)
- Onboarding (`/onboarding`)
- Shared Quote View (`/quotes/[shareToken]`)

---

## Visual Identity

| Element | Value |
|---|---|
| **Primary Colors** | Amber #d97706, Gray #1f2937 |
| **Hero background** | Gradient from amber-50 to white |
| **Accent color** | Amber #d97706 for CTAs and highlights |
| **Typography** | Geist (sans) + Geist Mono |

---

## Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + PostCSS |
| **UI** | React 19, react-dropzone, driver.js |
| **Database** | SQLite (via Prisma) |
| **ORM** | Prisma |
| **AI Vision** | Anthropic Claude Vision API |
| **File Storage** | Cloudflare R2 / AWS S3 |
| **PDF Generation** | @react-pdf/renderer |
| **Email** | Resend + React Email |
| **Dev Port** | 3000 (localhost:3000) |
| **Hosting** | Vercel |

---

## Key Messaging / Brand Voice

- Built for woodworkers, not contractors. This tool understands materials, joinery, and finish types.
- Stop losing money on underpriced projects. Get accurate quotes every time.
- AI powered starting point, human refined final result. You stay in control.
- From reference photo to professional quote in minutes.
- Free to use, no account required. Start quoting immediately.
- Over 50 wood species with real market pricing built in.
- Professional, branded quotes that impress your customers.
