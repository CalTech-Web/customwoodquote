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
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 mx-auto mb-6">
              <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Two minutes and you&apos;re quoting.</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Tell us your shop name and rate, and every quote you build will have your information on it. You can change these anytime in settings.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8 text-left">
              <div className="rounded-lg bg-amber-50 border border-amber-100 p-4">
                <div className="text-2xl font-bold text-amber-600 mb-1">50+</div>
                <div className="text-xs text-gray-600">wood species with pricing built in</div>
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-100 p-4">
                <div className="text-2xl font-bold text-amber-600 mb-1">AI</div>
                <div className="text-xs text-gray-600">reads photos and pre-fills the builder</div>
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-100 p-4">
                <div className="text-2xl font-bold text-amber-600 mb-1">Free</div>
                <div className="text-xs text-gray-600">no account, no card, no limits</div>
              </div>
            </div>
            <button
              onClick={() => setCurrentStep('business')}
              className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-500 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}

        {currentStep === 'business' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your shop details</h2>
            <p className="text-gray-500 text-sm mb-6">This goes on every quote you send. Skip it and fill it in later from settings.</p>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Hartwell Custom Woodworks"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => handleBusinessSubmit(true)}
                  className="flex-1 bg-gray-100 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 'pricing' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your default rates</h2>
            <p className="text-gray-500 text-sm mb-6">These pre-fill every new quote. You can adjust them per project at any time.</p>
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
                </label>
                <input
                  type="number"
                  value={pricingInfo.shopRate}
                  onChange={(e) => setPricingInfo({ ...pricingInfo, shopRate: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  min="0"
                  step="0.01"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Includes your labor, overhead, and shop costs. Most custom woodworkers charge $45 to $100/hour.
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  min="0"
                  max="100"
                  step="0.1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  15% covers a slow month. 25% funds your next tool. Below 15% and one bad job hurts.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => handlePricingSubmit(true)}
                  className="flex-1 bg-gray-100 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Skip for Now
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 'sample' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Here is what a finished quote looks like</h2>
            <p className="text-gray-500 text-sm mb-6">Every line is editable. The AI pre-fills this from a photo, then you confirm the numbers.</p>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Farmhouse Dining Table</h3>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="font-medium text-gray-700">Dimensions</span>
                    <p className="text-gray-600">72&quot; × 36&quot; × 30&quot;</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Material</span>
                    <p className="text-gray-600">White Oak</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Style</span>
                    <p className="text-gray-600">Mid-century modern</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Complexity</span>
                    <p className="text-gray-600">Medium (Tier 2)</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm border-t border-gray-100 pt-4 text-gray-600">
                  <div className="flex justify-between"><span>Lumber (38 bf white oak)</span><span>$323</span></div>
                  <div className="flex justify-between"><span>Hardware + finish</span><span>$85</span></div>
                  <div className="flex justify-between"><span>Labor (28 hrs × $55)</span><span>$1,540</span></div>
                  <div className="flex justify-between"><span>Overhead</span><span>$210</span></div>
                  <div className="flex justify-between"><span>Margin (25%)</span><span>$540</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Total</span>
                    <span className="text-2xl font-bold text-amber-600">$2,698</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSampleContinue}
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors"
              >
                Looks good, let&apos;s go
              </button>
            </div>
          </div>
        )}

        {currentStep === 'complete' && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to quote.</h2>
              <p className="text-gray-600 max-w-sm mx-auto">
                Upload a photo of a reference piece, or build your first quote from scratch. Your customer gets a clean link to accept it.
              </p>
            </div>
            <button
              onClick={handleComplete}
              className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-500 transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        <div className="mt-6 flex justify-center gap-2">
          <div className={`w-3 h-3 rounded-full ${currentStep === 'welcome' ? 'bg-amber-600' : 'bg-gray-200'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'business' ? 'bg-amber-600' : 'bg-gray-200'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'pricing' ? 'bg-amber-600' : 'bg-gray-200'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'sample' ? 'bg-amber-600' : 'bg-gray-200'}`} />
          <div className={`w-3 h-3 rounded-full ${currentStep === 'complete' ? 'bg-amber-600' : 'bg-gray-200'}`} />
        </div>
      </div>
    </div>
  );
}
