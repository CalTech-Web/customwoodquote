[2026-03-17 18:18:50] ==========================================
[2026-03-17 18:18:50] Agent: Seo Agent
[2026-03-17 18:18:50] Model: sonnet
[2026-03-17 18:18:50] Workspace: /Users/brandonhopkins/Projects/seo/customwoodquote/agents/seo-agent
[2026-03-17 18:18:50] Stop on complete: false
[2026-03-17 18:18:50] Max loops: 5 (0=infinite)
[2026-03-17 18:18:50] ==========================================
[2026-03-17 18:18:50] Run #1 starting (model: sonnet)

[2026-03-17] SEO Audit and Fixes - customwoodquote.com (CraftQuote)

ISSUES FOUND:
- Root layout.tsx had 'use client' directive, blocking metadataBase and site-wide default metadata export
- calculator/page.tsx had 'use client', metadata.ts existed but was disconnected (never loaded by Next.js)
- help/page.tsx had 'use client', no metadata at all, no FAQ schema
- No sitemap.xml or robots.txt
- Functional pages (dashboard, settings, onboarding, projects, login, signup) had no noindex directives

CHANGES MADE:
1. layout.tsx: Extracted NavBar to src/components/NavBar.tsx (client component), converted layout to server component with metadataBase and title template
2. calculator/page.tsx: Extracted calculator UI to CalculatorClient.tsx, page is now a server component exporting proper metadata
3. help/page.tsx: Extracted help UI to HelpClient.tsx, page is now a server component with metadata + FAQPage JSON-LD schema (8 questions)
4. sitemap.ts: Created dynamic sitemap covering /, /calculator, /pricing-guide, /help
5. robots.ts: Created robots rules disallowing /dashboard, /settings, /projects/, /onboarding, /api/
6. noindex layouts: Added layout.tsx with robots noindex/nofollow to dashboard, settings, onboarding, projects, login, signup directories

BUILD: Passed - all pages compile as static/dynamic correctly
