import type { Metadata } from "next";
import CalculatorClient from "@/components/CalculatorClient";

export const metadata: Metadata = {
  title: "Board Foot Calculator - Free Woodworking Tool",
  description: "Free online board foot calculator for woodworkers. Calculate lumber volume and estimate material costs instantly. Includes 12 wood species with per board-foot pricing.",
  keywords: ["board foot calculator", "lumber calculator", "woodworking calculator", "board feet", "wood calculator"],
  openGraph: {
    title: "Board Foot Calculator - Free Woodworking Tool",
    description: "Free online board foot calculator for woodworkers. Calculate lumber volume and estimate material costs instantly.",
    type: "website",
    url: "https://customwoodquote.com/calculator",
  },
  twitter: {
    card: "summary",
    title: "Board Foot Calculator - Free Woodworking Tool",
    description: "Free online board foot calculator for woodworkers. Calculate lumber volume and estimate material costs instantly.",
  },
};

export default function Calculator() {
  return <CalculatorClient />;
}
