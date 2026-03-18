'use client';

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
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
  );
}
