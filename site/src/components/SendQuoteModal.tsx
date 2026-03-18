'use client';

import { useState } from 'react';

interface SendQuoteModalProps {
  projectId: string;
  projectTitle: string;
  shareToken: string | null;
  onClose: () => void;
  onSuccess: () => void;
}

export default function SendQuoteModal({
  projectId,
  projectTitle,
  shareToken,
  onClose,
  onSuccess,
}: SendQuoteModalProps) {
  const [customerEmail, setCustomerEmail] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const shareUrl = shareToken
    ? `${window.location.origin}/quotes/${shareToken}`
    : '';

  const handleSend = async () => {
    if (!customerEmail) {
      setError('Email is required');
      return;
    }

    setSending(true);
    setError(null);

    try {
      const response = await fetch(`/api/quotes/${projectId}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerEmail }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send quote');
      }

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send quote');
    } finally {
      setSending(false);
    }
  };

  const handleCopyLink = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePreview = () => {
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Send Quote</h2>

        <p className="text-gray-600 mb-4">
          Send quote for: <span className="font-semibold">{projectTitle}</span>
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="customerEmail"
            className="block text-sm font-medium mb-2"
          >
            Customer Email
          </label>
          <input
            type="email"
            id="customerEmail"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="customer@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={sending}
          />
        </div>

        {/* Preview Checkbox */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showPreview}
              onChange={(e) => setShowPreview(e.target.checked)}
              className="mr-2"
              disabled={sending}
            />
            <span className="text-sm">Preview quote before sending</span>
          </label>
        </div>

        {/* Share Link */}
        {shareUrl && (
          <div className="mb-4 p-3 bg-gray-50 rounded">
            <p className="text-sm font-medium mb-2">Share Link</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded bg-white"
              />
              <button
                onClick={handleCopyLink}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
            disabled={sending}
          >
            Cancel
          </button>
          {showPreview && shareUrl && (
            <button
              onClick={handlePreview}
              className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
              disabled={sending}
            >
              Preview
            </button>
          )}
          <button
            onClick={handleSend}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={sending || !customerEmail}
          >
            {sending ? 'Sending...' : 'Send Quote'}
          </button>
        </div>
      </div>
    </div>
  );
}
