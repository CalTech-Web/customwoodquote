'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-xl font-bold">CraftQuote</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                  <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/projects/new" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                    New Quote
                  </Link>
                  <Link href="/calculator" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                    Calculator
                  </Link>
                  <Link href="/settings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
                    Settings
                  </Link>
                </div>
              </div>
              {/* Mobile hamburger menu */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded={mobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Hamburger icon */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/projects/new"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  New Quote
                </Link>
                <Link
                  href="/calculator"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Calculator
                </Link>
                <Link
                  href="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </Link>
              </div>
            </div>
          )}
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
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
