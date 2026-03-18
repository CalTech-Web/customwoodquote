'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type OnboardingStep = 'welcome' | 'business' | 'pricing' | 'sample' | 'complete';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [businessInfo, setBusinessInfo] = useState({
    businessName: '',
    address: '',
    phone: '',
  });
  const [pricingInfo, setPricingInfo] = useState({
    shopRate: 55,
    marginPercent: 20,
  });

  const handleBusinessSubmit = async (skip: boolean = false) => {
    if (!skip) {
      try {
        await fetch('/api/user/profile', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(businessInfo),
        });
      } catch (error) {
        console.error('Failed to save business info:', error);
      }
    }
    setCurrentStep('pricing');
  };

  const handlePricingSubmit = async (skip: boolean = false) => {
    if (!skip) {
      try {
        await fetch('/api/user/profile', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pricingInfo),
        });
      } catch (error) {
        console.error('Failed to save pricing info:', error);
      }
    }
    setCurrentStep('sample');
  };

  const handleSampleContinue = () => {
    setCurrentStep('complete');
  };

  const handleComplete = async () => {
    try {
      await fetch('/api/user/profile', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ onboardingCompleted: true }),
      });
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to complete onboarding:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {currentStep === 'welcome' && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to CraftQuote!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your professional woodworking quote generator. Let&apos;s get you set up in just a few steps.
            </p>
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-gray-500">Video placeholder (YouTube/Vimeo embed)</p>
            </div>
            <button
              onClick={() => setCurrentStep('business')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}

        {currentStep === 'business' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Setup</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleBusinessSubmit(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessInfo.businessName}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, businessName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Woodworking Shop"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={businessInfo.address}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Workshop Lane, City, ST 12345"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={businessInfo.phone}
                  onChange={(e) => setBusinessInfo({ ...businessInfo, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => handleBusinessSubmit(true)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 'pricing' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Setup</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePricingSubmit(false);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shop Rate ($/hour)
                  <span className="ml-2 text-gray-500 text-xs cursor-help" title="Your hourly rate for labor">ℹ️</span>
                </label>
                <input
                  type="number"
                  value={pricingInfo.shopRate}
                  onChange={(e) => setPricingInfo({ ...pricingInfo, shopRate: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="0.01"
                />
                <p className="text-sm text-gray-500 mt-1">
                  This covers your labor, overhead, and shop costs
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profit Margin (%)
                </label>
                <input
                  type="number"
                  value={pricingInfo.marginPercent}
                  onChange={(e) => setPricingInfo({ ...pricingInfo, marginPercent: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  max="100"
                  step="0.1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Industry typical: 15-25%
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => handlePricingSubmit(true)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 'sample' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Project</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Farmhouse Dining Table</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Dimensions:</span>
                    <p className="text-gray-600">72&quot; × 36&quot; × 30&quot;</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Material:</span>
                    <p className="text-gray-600">White Oak</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Style:</span>
                    <p className="text-gray-600">Mid-century modern</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Complexity:</span>
                    <p className="text-gray-600">Medium (Tier 2)</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Total:</span>
                    <span className="text-2xl font-bold text-blue-600">$3,500</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                This is a sample quote to help you understand how the platform works. You can edit or create your own quotes after setup.
              </p>
              <button
                onClick={handleSampleContinue}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {currentStep === 'complete' && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">You&apos;re All Set!</h2>
              <p className="text-lg text-gray-600">
                You&apos;re ready to create your first quote.
              </p>
            </div>
            <button
              onClick={handleComplete}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        <div className="mt-6 flex justify-center gap-2">
          <div className={`w-3 h-3 rounded-full ${currentStep === 'welcome' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'business' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'pricing' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'sample' ? 'bg-blue-600' : 'bg-gray-300'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'complete' ? 'bg-blue-600' : 'bg-gray-300'}`} />
        </div>
      </div>
    </div>
  );
}
