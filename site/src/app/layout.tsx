import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://customwoodquote.com"),
  title: {
    default: "CraftQuote - Quoting Software for Custom Woodworkers",
    template: "%s | CraftQuote",
  },
  description: "AI-assisted quoting software for custom woodworkers. Create professional quotes with AI photo analysis, accurate pricing, and board-foot calculations. Free with no account required.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "CraftQuote",
                "url": "https://customwoodquote.com",
                "description": "AI-assisted quoting software for custom woodworkers. Create professional quotes with AI photo analysis, accurate pricing, and board-foot calculations. Free with no account required.",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://customwoodquote.com/og-image.jpg",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "CraftQuote",
                "url": "https://customwoodquote.com",
                "description": "AI-assisted quoting software for custom woodworkers.",
              },
            ]),
          }}
        />
        <footer className="bg-gray-800 text-white mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="max-w-xs">
                <div className="text-lg font-bold text-white">CraftQuote</div>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  AI-assisted quoting software for custom woodworkers. Create professional quotes in minutes, not hours. Free, no account required.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <div>
                  <div className="text-gray-300 font-semibold mb-3">Tools</div>
                  <div className="flex flex-col gap-2">
                    <Link href="/projects/new" className="text-gray-400 hover:text-amber-400 transition-colors">New Quote</Link>
                    <Link href="/calculator" className="text-gray-400 hover:text-amber-400 transition-colors">Board-Foot Calculator</Link>
                    <Link href="/dashboard" className="text-gray-400 hover:text-amber-400 transition-colors">Dashboard</Link>
                  </div>
                </div>
                <div>
                  <div className="text-gray-300 font-semibold mb-3">Resources</div>
                  <div className="flex flex-col gap-2">
                    <Link href="/pricing-guide" className="text-gray-400 hover:text-amber-400 transition-colors">Pricing Guide</Link>
                    <Link href="/help" className="text-gray-400 hover:text-amber-400 transition-colors">Help</Link>
                    <Link href="/settings" className="text-gray-400 hover:text-amber-400 transition-colors">Settings</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
              2026 CustomWoodQuote.com. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
