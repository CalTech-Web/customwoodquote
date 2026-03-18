'use client';

import { useState } from 'react';
import { TutorialButton } from '@/components/help/TutorialDriver';

const faqItems = [
  {
    question: 'How do I create my first quote?',
    answer: 'Go to the homepage and drop in a reference photo. The AI identifies the piece type, style, and joinery in about five seconds. Confirm what it finds, enter your dimensions, pick your wood species from the pricing database, and review the numbers. No account required.',
  },
  {
    question: 'How is pricing calculated?',
    answer: 'Three buckets: materials, labor, and overhead. Materials are calculated in board feet using real species pricing. Labor covers every hour you spend on the project, not just shop time. Overhead is your monthly shop cost spread across billable hours. Add your margin and that is your quote.',
  },
  {
    question: 'Can I edit what the AI suggests?',
    answer: 'Everything is editable. Change the furniture type, style tier, or complexity if the AI got it wrong. Override any species price with your actual supplier cost. Adjust labor hours by category. The AI gives you a fast starting point. The final numbers are yours.',
  },
  {
    question: 'How does a customer receive the quote?',
    answer: 'Each completed quote gets a unique shareable link. Your customer opens it without logging in, sees the itemized breakdown, and can accept or request changes on the spot. You can also download a branded PDF for hard copy.',
  },
  {
    question: 'What happens after a customer accepts?',
    answer: 'The project status updates on your dashboard. You can track it from there and duplicate the quote later for similar jobs.',
  },
  {
    question: 'How accurate is the AI photo analysis?',
    answer: 'It identifies furniture type, style, and complexity tier reliably on clear photos. Unusual angles or dark images give it more trouble. Treat it as a confident first pass that you confirm, not a final determination.',
  },
  {
    question: 'How do I set my shop rate?',
    answer: 'Go to Settings. Enter your desired income, estimated taxes, and monthly overhead and the tool suggests a shop rate. Or just type in a flat hourly rate directly.',
  },
  {
    question: 'Is CraftQuote really free?',
    answer: 'Yes, completely. No account, no credit card, no usage cap. Build as many quotes as you need.',
  },
];

export { faqItems };

export default function HelpClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
        <p className="text-lg text-gray-600">
          Quick answers to the questions that come up most.
        </p>
      </div>

      {/* Tutorial Section */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Interactive Tutorial</h2>
            <p className="text-gray-700">
              A short guided tour of the main features. Takes about two minutes.
            </p>
          </div>
          <TutorialButton />
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">1</span>
            <p><strong>Upload a photo.</strong> Drop in a customer inspiration image or snap a photo of a reference piece. The AI reads it in about five seconds.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">2</span>
            <p><strong>Confirm and refine.</strong> Check what the AI identified. Enter real dimensions, pick your wood species, and adjust any labor categories that do not match your project.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">3</span>
            <p><strong>Review the numbers.</strong> Materials, labor, overhead, and margin are all broken out. Fix anything before it leaves your shop.</p>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">4</span>
            <p><strong>Send the quote.</strong> Share a link or download a PDF. Your customer sees a clean, itemized quote and can accept on the spot.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h2>
        <p className="text-gray-700 mb-6">
          Not finding what you need? Send a message and we will get back to you.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              Thank you! Your message has been sent. We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
