"use client";

import { useState, useEffect } from "react";
import { TutorialButton } from "@/components/help/TutorialDriver";

type Tab = "business" | "pricing" | "materials" | "preferences" | "templates" | "help";

interface BusinessInfo {
  businessName: string;
  logo: string;
  address: string;
  phone: string;
  email: string;
}

interface PricingDefaults {
  shopRate: number;
  overheadRate: number;
  defaultMargin: number;
  taxRate: number;
}

interface MaterialOverride {
  id: string;
  name: string;
  category: string;
  species?: string;
  grade?: string;
  unit: string;
  pricePerUnit: number;
  isUserOverride: boolean;
}

interface QuotePreferences {
  showDetailedBreakdown: boolean;
  defaultPaymentTerms: string;
  defaultEstimatedTimeline: string;
}

interface Template {
  id: string;
  name: string;
  furnitureType: string;
  style: string;
  defaultLineItems: unknown[];
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("business");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Business Info
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    businessName: "",
    logo: "",
    address: "",
    phone: "",
    email: "",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");

  // Pricing Defaults
  const [pricingDefaults, setPricingDefaults] = useState<PricingDefaults>({
    shopRate: 50,
    overheadRate: 15,
    defaultMargin: 20,
    taxRate: 0,
  });

  // Materials
  const [materials, setMaterials] = useState<MaterialOverride[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOverride | null>(null);
  const [overridePrice, setOverridePrice] = useState("");
  const [showOverrideModal, setShowOverrideModal] = useState(false);

  // Quote Preferences
  const [quotePreferences, setQuotePreferences] = useState<QuotePreferences>({
    showDetailedBreakdown: true,
    defaultPaymentTerms: "50% deposit, 50% on completion",
    defaultEstimatedTimeline: "4-6 weeks",
  });

  // Templates
  const [templates, setTemplates] = useState<Template[]>([]);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    name: "",
    furnitureType: "",
    style: "",
    lineItems: [] as unknown[],
  });

  useEffect(() => {
    fetchUserData();
    fetchMaterials();
    fetchTemplates();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await fetch("/api/settings");
      if (!res.ok) throw new Error("Failed to fetch settings");
      const data = await res.json();

      setBusinessInfo({
        businessName: data.businessName || "",
        logo: data.logo || "",
        address: data.address || "",
        phone: data.phone || "",
        email: data.email || "",
      });
      setLogoPreview(data.logo || "");

      setPricingDefaults({
        shopRate: data.shopRate || 50,
        overheadRate: data.overheadRate || 15,
        defaultMargin: data.defaultMargin || 20,
        taxRate: data.taxRate || 0,
      });

      setQuotePreferences({
        showDetailedBreakdown: data.showDetailedBreakdown ?? true,
        defaultPaymentTerms: data.defaultPaymentTerms || "50% deposit, 50% on completion",
        defaultEstimatedTimeline: data.defaultEstimatedTimeline || "4-6 weeks",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const fetchMaterials = async () => {
    try {
      const res = await fetch("/api/settings/materials");
      if (!res.ok) throw new Error("Failed to fetch materials");
      const data = await res.json();
      setMaterials(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const fetchTemplates = async () => {
    try {
      const res = await fetch("/api/settings/templates");
      if (!res.ok) throw new Error("Failed to fetch templates");
      const data = await res.json();
      setTemplates(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadLogo = async () => {
    if (!logoFile) return businessInfo.logo;

    try {
      // Get presigned URL
      const presignedRes = await fetch("/api/upload/presigned-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: logoFile.name,
          contentType: logoFile.type,
        }),
      });

      if (!presignedRes.ok) throw new Error("Failed to get upload URL");
      const { uploadUrl, fileKey } = await presignedRes.json();

      // Upload to R2
      const uploadRes = await fetch(uploadUrl, {
        method: "PUT",
        body: logoFile,
        headers: {
          "Content-Type": logoFile.type,
        },
      });

      if (!uploadRes.ok) throw new Error("Failed to upload logo");
      return fileKey;
    } catch (err) {
      throw new Error("Logo upload failed: " + (err instanceof Error ? err.message : String(err)));
    }
  };

  const saveBusinessInfo = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      let logoUrl = businessInfo.logo;
      if (logoFile) {
        logoUrl = await uploadLogo();
      }

      const res = await fetch("/api/settings/business", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...businessInfo,
          logo: logoUrl,
        }),
      });

      if (!res.ok) throw new Error("Failed to save business info");
      setSuccess("Business information saved successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const savePricingDefaults = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    // Validation
    if (pricingDefaults.shopRate < 20 || pricingDefaults.shopRate > 200) {
      setError("Shop rate must be between $20 and $200 per hour");
      setLoading(false);
      return;
    }
    if (pricingDefaults.overheadRate < 5 || pricingDefaults.overheadRate > 100) {
      setError("Overhead rate must be between $5 and $100 per hour");
      setLoading(false);
      return;
    }
    if (pricingDefaults.defaultMargin < 5 || pricingDefaults.defaultMargin > 50) {
      setError("Default margin must be between 5% and 50%");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/settings/pricing", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pricingDefaults),
      });

      if (!res.ok) throw new Error("Failed to save pricing defaults");
      setSuccess("Pricing defaults saved successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const openOverrideModal = (material: MaterialOverride) => {
    setSelectedMaterial(material);
    setOverridePrice(material.pricePerUnit.toString());
    setShowOverrideModal(true);
  };

  const saveMaterialOverride = async () => {
    if (!selectedMaterial) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/settings/materials/override", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          materialId: selectedMaterial.id,
          pricePerUnit: parseFloat(overridePrice),
        }),
      });

      if (!res.ok) throw new Error("Failed to save material override");
      setSuccess("Material override saved successfully");
      setTimeout(() => setSuccess(""), 3000);
      setShowOverrideModal(false);
      fetchMaterials();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const resetMaterialOverride = async (materialId: string) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`/api/settings/materials/override/${materialId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to reset material override");
      setSuccess("Material override reset to default");
      setTimeout(() => setSuccess(""), 3000);
      fetchMaterials();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const saveQuotePreferences = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/settings/preferences", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quotePreferences),
      });

      if (!res.ok) throw new Error("Failed to save quote preferences");
      setSuccess("Quote preferences saved successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const saveTemplate = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/settings/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTemplate),
      });

      if (!res.ok) throw new Error("Failed to save template");
      setSuccess("Template saved successfully");
      setTimeout(() => setSuccess(""), 3000);
      setShowTemplateModal(false);
      setNewTemplate({ name: "", furnitureType: "", style: "", lineItems: [] });
      fetchTemplates();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const deleteTemplate = async (templateId: string) => {
    if (!confirm("Are you sure you want to delete this template?")) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/settings/templates/${templateId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete template");
      setSuccess("Template deleted successfully");
      setTimeout(() => setSuccess(""), 3000);
      fetchTemplates();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  const filteredMaterials = materials.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const userOverrides = materials.filter((m) => m.isUserOverride);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("business")}
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === "business"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Business Info
          </button>
          <button
            onClick={() => setActiveTab("pricing")}
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === "pricing"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Pricing Defaults
          </button>
          <button
            onClick={() => setActiveTab("materials")}
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === "materials"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Material Overrides
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === "preferences"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Quote Preferences
          </button>
          <button
            onClick={() => setActiveTab("templates")}
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === "templates"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Templates
          </button>
          <button
            onClick={() => setActiveTab("help")}
            className={`px-4 py-2 font-medium whitespace-nowrap ${
              activeTab === "help"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Help
          </button>
        </div>

        {/* Error/Success Messages */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
            {success}
          </div>
        )}

        {/* Business Info Tab */}
        {activeTab === "business" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Business Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  value={businessInfo.businessName}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, businessName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleLogoChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {logoPreview && (
                  <div className="mt-2">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="h-24 w-24 object-cover rounded-md border border-gray-300"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={businessInfo.address}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  value={businessInfo.phone}
                  onChange={(e) =>
                    setBusinessInfo({ ...businessInfo, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  inputMode="email"
                  value={businessInfo.email}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>

              <button
                onClick={saveBusinessInfo}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? "Saving..." : "Save Business Info"}
              </button>
            </div>
          </div>
        )}

        {/* Pricing Defaults Tab */}
        {activeTab === "pricing" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Pricing Defaults</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shop Rate ($/hour)
                  <span
                    className="ml-2 text-gray-500 cursor-help"
                    title="Your hourly labor rate. Range: $20-$200"
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  min="20"
                  max="200"
                  step="5"
                  value={pricingDefaults.shopRate}
                  onChange={(e) =>
                    setPricingDefaults({
                      ...pricingDefaults,
                      shopRate: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Overhead Rate ($/hour)
                  <span
                    className="ml-2 text-gray-500 cursor-help"
                    title="Shop overhead costs per hour (utilities, rent, equipment). Range: $5-$100"
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  min="5"
                  max="100"
                  step="5"
                  value={pricingDefaults.overheadRate}
                  onChange={(e) =>
                    setPricingDefaults({
                      ...pricingDefaults,
                      overheadRate: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Margin (%)
                  <span
                    className="ml-2 text-gray-500 cursor-help"
                    title="Profit margin applied to quotes. Range: 5%-50%"
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  min="5"
                  max="50"
                  step="5"
                  value={pricingDefaults.defaultMargin}
                  onChange={(e) =>
                    setPricingDefaults({
                      ...pricingDefaults,
                      defaultMargin: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tax Rate (%)
                  <span className="ml-2 text-gray-500 text-sm">(optional)</span>
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  min="0"
                  max="20"
                  step="0.25"
                  value={pricingDefaults.taxRate}
                  onChange={(e) =>
                    setPricingDefaults({
                      ...pricingDefaults,
                      taxRate: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                onClick={savePricingDefaults}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? "Saving..." : "Save Pricing Defaults"}
              </button>
            </div>
          </div>
        )}

        {/* Material Overrides Tab */}
        {activeTab === "materials" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Material Price Overrides</h2>

            {/* User Overrides Section */}
            {userOverrides.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Your Price Overrides</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Material
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Category
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Your Price
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {userOverrides.map((material) => (
                        <tr key={material.id}>
                          <td className="px-4 py-3 text-sm">
                            {material.name}
                            {material.species && ` (${material.species})`}
                          </td>
                          <td className="px-4 py-3 text-sm">{material.category}</td>
                          <td className="px-4 py-3 text-sm">
                            ${material.pricePerUnit.toFixed(2)}/{material.unit}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <button
                              onClick={() => resetMaterialOverride(material.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              Reset to Default
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* System Materials Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Material
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Default Price
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMaterials
                    .filter((m) => !m.isUserOverride)
                    .map((material) => (
                      <tr key={material.id}>
                        <td className="px-4 py-3 text-sm">
                          {material.name}
                          {material.species && ` (${material.species})`}
                        </td>
                        <td className="px-4 py-3 text-sm">{material.category}</td>
                        <td className="px-4 py-3 text-sm">
                          ${material.pricePerUnit.toFixed(2)}/{material.unit}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <button
                            onClick={() => openOverrideModal(material)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            Override Price
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Quote Preferences Tab */}
        {activeTab === "preferences" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quote Preferences</h2>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showDetailedBreakdown"
                  checked={quotePreferences.showDetailedBreakdown}
                  onChange={(e) =>
                    setQuotePreferences({
                      ...quotePreferences,
                      showDetailedBreakdown: e.target.checked,
                    })
                  }
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="showDetailedBreakdown"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Show detailed line item breakdown to customers
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Payment Terms
                </label>
                <textarea
                  value={quotePreferences.defaultPaymentTerms}
                  onChange={(e) =>
                    setQuotePreferences({
                      ...quotePreferences,
                      defaultPaymentTerms: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 50% deposit, 50% on completion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Estimated Timeline
                </label>
                <input
                  type="text"
                  value={quotePreferences.defaultEstimatedTimeline}
                  onChange={(e) =>
                    setQuotePreferences({
                      ...quotePreferences,
                      defaultEstimatedTimeline: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 4-6 weeks"
                />
              </div>

              <button
                onClick={saveQuotePreferences}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? "Saving..." : "Save Quote Preferences"}
              </button>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === "templates" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Project Templates</h2>
              <button
                onClick={() => setShowTemplateModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                + Create Template
              </button>
            </div>

            {templates.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No templates yet. Create one to speed up quote creation.
              </p>
            ) : (
              <div className="grid gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{template.name}</h3>
                        <p className="text-sm text-gray-600">
                          {template.furnitureType} {template.style && `- ${template.style}`}
                        </p>
                      </div>
                      <button
                        onClick={() => deleteTemplate(template.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Override Modal */}
        {showOverrideModal && selectedMaterial && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Override Material Price</h3>
              <p className="text-sm text-gray-600 mb-4">
                {selectedMaterial.name}
                {selectedMaterial.species && ` (${selectedMaterial.species})`}
              </p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Price (per {selectedMaterial.unit})
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  min="0"
                  value={overridePrice}
                  onChange={(e) => setOverridePrice(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={saveMaterialOverride}
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                >
                  {loading ? "Saving..." : "Save Override"}
                </button>
                <button
                  onClick={() => setShowOverrideModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Help Tab */}
        {activeTab === "help" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Help & Tutorial</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Need help getting started? Try our interactive tutorial to learn the basics of CraftQuote.
              </p>
              <div>
                <TutorialButton />
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  For more resources, visit the{" "}
                  <a href="/help" className="text-blue-600 hover:text-blue-800 underline">
                    Help Center
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Template Modal */}
        {showTemplateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Create Project Template</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Template Name
                  </label>
                  <input
                    type="text"
                    value={newTemplate.name}
                    onChange={(e) =>
                      setNewTemplate({ ...newTemplate, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Dining Table"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Furniture Type
                  </label>
                  <input
                    type="text"
                    value={newTemplate.furnitureType}
                    onChange={(e) =>
                      setNewTemplate({ ...newTemplate, furnitureType: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Table"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Style
                  </label>
                  <input
                    type="text"
                    value={newTemplate.style}
                    onChange={(e) =>
                      setNewTemplate({ ...newTemplate, style: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Modern"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Note: Line items can be added when using this template to create a project.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={saveTemplate}
                    disabled={loading || !newTemplate.name}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
                  >
                    {loading ? "Saving..." : "Save Template"}
                  </button>
                  <button
                    onClick={() => setShowTemplateModal(false)}
                    className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
