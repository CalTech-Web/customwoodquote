import type { Metadata } from "next";
import HelpClient from "@/components/HelpClient";

export const metadata: Metadata = {
  title: "Help & FAQ - Woodworking Quote Tool",
  description: "Get help with CraftQuote, the free AI woodworking quote tool. Find answers to common questions about the quote builder, board-foot pricing, and sending professional quotes.",
  openGraph: {
    title: "Help & FAQ - CraftQuote Woodworking Quote Tool",
    description: "Get help with CraftQuote. Answers to common questions about building quotes, pricing, and sending professional estimates to customers.",
    type: "website",
    url: "https://customwoodquote.com/help",
  },
  twitter: {
    card: "summary",
    title: "Help & FAQ - CraftQuote Woodworking Quote Tool",
    description: "Get help with CraftQuote. Answers to common questions about building quotes, pricing, and sending professional estimates.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I create my first quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to the homepage and drop in a reference photo. The AI identifies the piece type, style, and joinery in about five seconds. Confirm what it finds, enter your dimensions, pick your wood species from the pricing database, and review the numbers. No account required."
      }
    },
    {
      "@type": "Question",
      "name": "How is pricing calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three buckets: materials, labor, and overhead. Materials are calculated in board feet using real species pricing. Labor covers every hour you spend on the project, not just shop time. Overhead is your monthly shop cost spread across billable hours. Add your margin and that is your quote."
      }
    },
    {
      "@type": "Question",
      "name": "Can I edit what the AI suggests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Everything is editable. Change the furniture type, style tier, or complexity if the AI got it wrong. Override any species price with your actual supplier cost. Adjust labor hours by category. The AI gives you a fast starting point. The final numbers are yours."
      }
    },
    {
      "@type": "Question",
      "name": "How does a customer receive the quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each completed quote gets a unique shareable link. Your customer opens it without logging in, sees the itemized breakdown, and can accept or request changes on the spot. You can also download a branded PDF for hard copy."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the AI photo analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It identifies furniture type, style, and complexity tier reliably on clear photos. Unusual angles or dark images give it more trouble. Treat it as a confident first pass that you confirm, not a final determination."
      }
    },
    {
      "@type": "Question",
      "name": "Is CraftQuote really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely. No account, no credit card, no usage cap. Build as many quotes as you need."
      }
    },
    {
      "@type": "Question",
      "name": "How do I set my shop rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to Settings. Enter your desired income, estimated taxes, and monthly overhead and the tool suggests a shop rate. Or just type in a flat hourly rate directly."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after a customer accepts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The project status updates on your dashboard. You can track it from there and duplicate the quote later for similar jobs."
      }
    }
  ]
};

export default function HelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HelpClient />
    </>
  );
}
