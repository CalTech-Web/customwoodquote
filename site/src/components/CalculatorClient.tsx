"use client";

import Link from "next/link";
import { useState } from "react";

const woodSpecies = [
  { name: "Select a species...", pricePerBf: 0 },
  { name: "White Oak", pricePerBf: 8.5 },
  { name: "Red Oak", pricePerBf: 6.75 },
  { name: "Hard Maple", pricePerBf: 7.25 },
  { name: "Soft Maple", pricePerBf: 5.5 },
  { name: "Cherry", pricePerBf: 9.0 },
  { name: "Walnut", pricePerBf: 12.5 },
  { name: "Ash", pricePerBf: 6.0 },
  { name: "Poplar", pricePerBf: 4.25 },
  { name: "Mahogany", pricePerBf: 10.5 },
  { name: "Birch", pricePerBf: 5.75 },
  { name: "Pine (Select)", pricePerBf: 3.5 },
  { name: "Cedar", pricePerBf: 4.0 },
];

export default function CalculatorClient() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [selectedSpecies, setSelectedSpecies] = useState(0);

  const calculateBoardFeet = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const t = parseFloat(thickness);
    const q = parseInt(quantity);

    if (isNaN(l) || isNaN(w) || isNaN(t) || isNaN(q) || l <= 0 || w <= 0 || t <= 0 || q <= 0) {
      return null;
    }

    return ((l * w * t) / 144) * q;
  };

  const boardFeet = calculateBoardFeet();
  const estimatedCost = boardFeet && woodSpecies[selectedSpecies].pricePerBf > 0
    ? boardFeet * woodSpecies[selectedSpecies].pricePerBf
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              CraftQuote
            </Link>
            <Link
              href="/#quote-builder"
              className="rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
            >
              Build a Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Board Foot Calculator
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Lumber yards price by the board foot. Get your number before you price the job.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mt-12 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Calculate Board Feet</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700">
                Length (inches)
              </label>
              <input
                type="number"
                id="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm px-4 py-2 border"
                placeholder="e.g., 72"
                min="0"
                step="0.25"
              />
            </div>

            <div>
              <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                Width (inches)
              </label>
              <input
                type="number"
                id="width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm px-4 py-2 border"
                placeholder="e.g., 8"
                min="0"
                step="0.25"
              />
            </div>

            <div>
              <label htmlFor="thickness" className="block text-sm font-medium text-gray-700">
                Thickness (inches)
              </label>
              <input
                type="number"
                id="thickness"
                value={thickness}
                onChange={(e) => setThickness(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm px-4 py-2 border"
                placeholder="e.g., 1"
                min="0"
                step="0.125"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity (pieces)
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm px-4 py-2 border"
                placeholder="e.g., 4"
                min="1"
                step="1"
              />
            </div>
          </div>

          {/* Wood Species Selection */}
          <div className="mt-6">
            <label htmlFor="species" className="block text-sm font-medium text-gray-700">
              Wood Species (optional - for cost estimate)
            </label>
            <select
              id="species"
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm px-4 py-2 border"
            >
              {woodSpecies.map((species, index) => (
                <option key={index} value={index}>
                  {species.name}
                  {species.pricePerBf > 0 ? ` - $${species.pricePerBf.toFixed(2)}/bf` : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Results */}
          {boardFeet !== null && (
            <div className="mt-8 rounded-lg bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Results</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Board Feet:</span>
                  <span className="text-2xl font-bold text-amber-600">
                    {boardFeet.toFixed(2)} bf
                  </span>
                </div>
                {estimatedCost !== null && (
                  <div className="flex justify-between items-center pt-2 border-t border-amber-200">
                    <span className="text-gray-700">Estimated Cost ({woodSpecies[selectedSpecies].name}):</span>
                    <span className="text-2xl font-bold text-green-600">
                      ${estimatedCost.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium mb-1">Calculation:</p>
                <p>Board Feet = (Length × Width × Thickness ÷ 144) × Quantity</p>
                <p className="mt-1">
                  ({length}&quot; × {width}&quot; × {thickness}&quot; ÷ 144) × {quantity} = {boardFeet.toFixed(2)} bf
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Educational Content */}
        <div className="mt-12 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a Board Foot?</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              A board foot measures lumber volume, not surface area or linear length. One board foot is exactly 144 cubic inches, the equivalent of a board 1 inch thick, 12 inches wide, and 12 inches long.
            </p>
            <p className="text-gray-600 mt-4">
              Lumber yards price by the board foot, not by the piece or the running foot. If you are estimating material cost any other way, you are guessing, and you will usually guess low.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">How to Calculate Board Feet</h3>
            <p className="text-gray-600">
              The formula is: <strong>(Length × Width × Thickness) ÷ 144 = Board Feet</strong>
            </p>
            <p className="text-gray-600 mt-4">
              All three measurements go in as inches. Length runs along the grain. Width is across. Thickness is the actual nominal dimension of the board, not the finished dimension after milling.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Example Calculation</h3>
            <p className="text-gray-600">
              A board 8 feet long (96&quot;), 6 inches wide, 1 inch thick: (96 × 6 × 1) ÷ 144 = 4 board feet. Order 4 of them and you need 16 board feet before waste. Add 15% for defects and cutoffs and you are ordering about 18.5 board feet. That is the number to give your lumber yard.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Board feet are step one.
          </h2>
          <p className="text-amber-50 mb-6 max-w-2xl mx-auto">
            The full quote still needs hardware, labor by category, overhead, and your margin. CraftQuote handles all of it, starting from a photo of the piece.
          </p>
          <Link
            href="/#quote-builder"
            className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-amber-600 shadow-sm hover:bg-amber-50"
          >
            Start Building a Quote
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              Home
            </Link>
            <Link href="/pricing-guide" className="text-gray-400 hover:text-gray-300">
              Pricing Guide
            </Link>
            <Link href="/#quote-builder" className="text-gray-400 hover:text-gray-300">
              Build a Quote
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; 2026 CraftQuote. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
