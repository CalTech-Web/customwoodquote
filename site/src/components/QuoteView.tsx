'use client';

import { useState } from 'react';

interface User {
  businessName: string | null;
  logo: string | null;
  name: string | null;
  email: string;
  phone: string | null;
  address: string | null;
}

interface LineItem {
  id: string;
  category: string;
  name: string;
  description: string | null;
  quantity: number;
  unit: string;
  unitCost: number;
  totalCost: number;
  sortOrder: number;
}

interface Project {
  id: string;
  title: string;
  description: string | null;
  style: string | null;
  lengthIn: number | null;
  widthIn: number | null;
  heightIn: number | null;
  photoUrls: string | null;
  subtotal: number | null;
  tax: number | null;
  total: number | null;
  paymentTerms: string | null;
  estimatedTimeline: string | null;
  notes: string | null;
  shareToken: string | null;
  lineItems: LineItem[];
  user: User;
}

interface QuoteViewProps {
  project: Project;
  showDetailedBreakdown?: boolean;
}

export default function QuoteView({
  project,
  showDetailedBreakdown = true,
}: QuoteViewProps) {
  const [copied, setCopied] = useState(false);
  const [showRequestChanges, setShowRequestChanges] = useState(false);
  const [changeMessage, setChangeMessage] = useState('');

  const photoUrls = project.photoUrls ? JSON.parse(project.photoUrls) : [];
  const rawPhoto = photoUrls[0];
  const firstPhoto = rawPhoto
    ? rawPhoto.startsWith('/') || rawPhoto.startsWith('http')
      ? rawPhoto
      : `/api/images/${encodeURIComponent(rawPhoto)}`
    : null;

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/quotes/${project.shareToken}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(`/api/quotes/${project.id}/pdf`);
      if (!response.ok) throw new Error('Failed to download PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `quote-${project.title.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download PDF');
    }
  };

  const handleAcceptQuote = async () => {
    try {
      const response = await fetch(`/api/quotes/${project.id}/accept`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Failed to accept quote');

      alert('Quote accepted! The maker has been notified.');
      window.location.reload();
    } catch (error) {
      console.error('Error accepting quote:', error);
      alert('Failed to accept quote. Please try again.');
    }
  };

  const handleRequestChanges = async () => {
    try {
      const response = await fetch(`/api/quotes/${project.id}/request-changes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: changeMessage }),
      });

      if (!response.ok) throw new Error('Failed to send request');

      alert('Your request has been sent to the maker.');
      setShowRequestChanges(false);
      setChangeMessage('');
    } catch (error) {
      console.error('Error requesting changes:', error);
      alert('Failed to send request. Please try again.');
    }
  };

  // Group line items by category for summary view
  const categoryTotals = project.lineItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category] += item.totalCost;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8 border-b pb-6">
          <div className="flex justify-between items-start">
            <div>
              {project.user.logo && (
                <img
                  src={project.user.logo}
                  alt="Business logo"
                  className="h-16 mb-4"
                />
              )}
              <h1 className="text-2xl font-bold">
                {project.user.businessName || project.user.name}
              </h1>
              {project.user.address && (
                <p className="text-gray-600">{project.user.address}</p>
              )}
              {project.user.phone && (
                <p className="text-gray-600">{project.user.phone}</p>
              )}
              <p className="text-gray-600">{project.user.email}</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold mb-2">Quote</h2>
              <p className="text-gray-600">Project: {project.title}</p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Project Details</h3>

          {firstPhoto && (
            <img
              src={firstPhoto}
              alt={project.title}
              className="w-full max-w-md mb-4 rounded"
            />
          )}

          {project.description && (
            <p className="mb-2">
              <span className="font-semibold">Description:</span>{' '}
              {project.description}
            </p>
          )}

          {project.style && (
            <p className="mb-2">
              <span className="font-semibold">Style:</span> {project.style}
            </p>
          )}

          {project.lengthIn && project.widthIn && project.heightIn && (
            <p className="mb-2">
              <span className="font-semibold">Dimensions:</span>{' '}
              {project.lengthIn}&quot; L × {project.widthIn}&quot; W ×{' '}
              {project.heightIn}&quot; H
            </p>
          )}
        </div>

        {/* Itemized Breakdown */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Cost Breakdown</h3>

          {showDetailedBreakdown ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-800">
                  <th className="text-left py-2">Item</th>
                  <th className="text-right py-2">Qty</th>
                  <th className="text-right py-2">Unit</th>
                  <th className="text-right py-2">Rate</th>
                  <th className="text-right py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {project.lineItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">
                      <div className="font-semibold">{item.name}</div>
                      {item.description && (
                        <div className="text-sm text-gray-600">
                          {item.description}
                        </div>
                      )}
                    </td>
                    <td className="text-right py-2">{item.quantity}</td>
                    <td className="text-right py-2">{item.unit}</td>
                    <td className="text-right py-2">
                      ${item.unitCost.toFixed(2)}
                    </td>
                    <td className="text-right py-2">
                      ${item.totalCost.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-800">
                  <th className="text-left py-2">Category</th>
                  <th className="text-right py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(categoryTotals).map(([category, total]) => (
                  <tr key={category} className="border-b">
                    <td className="py-2 font-semibold capitalize">
                      {category}
                    </td>
                    <td className="text-right py-2">${total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Totals */}
          <div className="mt-4 border-t-2 border-gray-800 pt-4">
            {project.subtotal !== null && (
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Subtotal:</span>
                <span>${project.subtotal.toFixed(2)}</span>
              </div>
            )}
            {project.tax !== null && project.tax > 0 && (
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Tax:</span>
                <span>${project.tax.toFixed(2)}</span>
              </div>
            )}
            {project.total !== null && (
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>${project.total.toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Payment Terms & Timeline */}
        {(project.paymentTerms || project.estimatedTimeline) && (
          <div className="mb-8">
            {project.paymentTerms && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Payment Terms</h4>
                <p className="text-gray-700">{project.paymentTerms}</p>
              </div>
            )}
            {project.estimatedTimeline && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Estimated Timeline</h4>
                <p className="text-gray-700">{project.estimatedTimeline}</p>
              </div>
            )}
          </div>
        )}

        {/* Notes */}
        {project.notes && (
          <div className="mb-8">
            <h4 className="font-bold mb-2">Notes</h4>
            <p className="text-gray-700 whitespace-pre-wrap">
              {project.notes}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download PDF
          </button>
          {project.shareToken && (
            <button
              onClick={handleCopyLink}
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50"
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          )}
          <button
            onClick={handleAcceptQuote}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Accept Quote
          </button>
          <button
            onClick={() => setShowRequestChanges(true)}
            className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Request Changes
          </button>
        </div>

        {/* Request Changes Modal */}
        {showRequestChanges && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
              <h3 className="text-lg font-bold mb-4">Request Changes</h3>
              <textarea
                value={changeMessage}
                onChange={(e) => setChangeMessage(e.target.value)}
                className="w-full border rounded p-2 mb-4 min-h-[120px]"
                placeholder="Please describe the changes you'd like..."
              />
              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => {
                    setShowRequestChanges(false);
                    setChangeMessage('');
                  }}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRequestChanges}
                  disabled={!changeMessage.trim()}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
