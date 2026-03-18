'use client';

import { useState } from 'react';
import { TutorialButton } from '@/components/help/TutorialDriver';

export default function HelpPage() {
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

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const faqItems = [
    {
      question: 'How do I create my first quote?',
      answer: 'Click the "New Quote" button in the navigation bar or on your dashboard. Fill in the project details, upload photos (optional), and the system will help you calculate costs and generate a professional quote.',
    },
    {
      question: 'How is pricing calculated?',
      answer: 'Pricing is based on materials, labor hours (using your shop rate), and your profit margin. You can customize material costs and shop rates in Settings.',
    },
    {
      question: 'Can I customize my quotes?',
      answer: 'Yes! You can add your business logo, adjust pricing, add custom line items, and include notes or payment terms. All quotes are fully customizable.',
    },
    {
      question: 'How do I send a quote to a customer?',
      answer: 'Once your quote is ready, click "Send Quote" and enter your customer\'s email. They\'ll receive a link to view and accept/decline the quote online.',
    },
    {
      question: 'What happens when a customer accepts a quote?',
      answer: 'You\'ll receive a notification, and the project status will update to "Accepted" on your dashboard. You can then track the project through completion.',
    },
    {
      question: 'Can I use photos in my quotes?',
      answer: 'Absolutely! Upload photos of reference pieces, sketches, or inspiration. Our AI can analyze photos to help estimate dimensions and complexity.',
    },
    {
      question: 'How do I update my shop rate?',
      answer: 'Go to Settings > Pricing to update your shop rate, overhead costs, and default profit margin. These settings apply to all new quotes.',
    },
    {
      question: 'Can I create quote templates?',
      answer: 'Yes! In Settings > Templates, you can save common project configurations with predefined materials and labor estimates to speed up quote creation.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
        <p className="text-lg text-gray-600">
          Everything you need to know about CraftQuote
        </p>
      </div>

      {/* Tutorial Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Interactive Tutorial</h2>
            <p className="text-gray-700">
              Take a quick tour of the main features and learn how to get started.
            </p>
          </div>
          <TutorialButton />
        </div>
      </div>

      {/* Video Tutorials */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Video Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Getting Started Video</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Getting Started</h3>
              <p className="text-sm text-gray-600">Learn the basics in 5 minutes</p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Creating Quotes Video</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Creating Your First Quote</h3>
              <p className="text-sm text-gray-600">Step-by-step walkthrough</p>
            </div>
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
          Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get back to you as soon as possible.
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
