'use client';

import { useState, useMemo } from 'react';
import PhotoUpload from '@/components/upload/PhotoUpload';

// Material assignment: cut list item ID → lumber option ID
type MaterialAssignment = Record<string, string>;

interface LumberOption {
  id: string;
  label: string;
  species: string;
  grade: string;
  pricePerBF: number;
}

// Prices match prisma/seed.ts
const LUMBER_OPTIONS: LumberOption[] = [
  { id: 'white-oak-fas', label: 'White Oak FAS', species: 'White Oak', grade: 'FAS', pricePerBF: 8.50 },
  { id: 'white-oak-1c', label: 'White Oak #1 Common', species: 'White Oak', grade: '#1 Common', pricePerBF: 6.20 },
  { id: 'red-oak-fas', label: 'Red Oak FAS', species: 'Red Oak', grade: 'FAS', pricePerBF: 7.80 },
  { id: 'red-oak-1c', label: 'Red Oak #1 Common', species: 'Red Oak', grade: '#1 Common', pricePerBF: 5.90 },
  { id: 'hard-maple-fas', label: 'Hard Maple FAS', species: 'Hard Maple', grade: 'FAS', pricePerBF: 9.20 },
  { id: 'hard-maple-1c', label: 'Hard Maple #1 Common', species: 'Hard Maple', grade: '#1 Common', pricePerBF: 7.10 },
  { id: 'cherry-fas', label: 'Cherry FAS', species: 'Cherry', grade: 'FAS', pricePerBF: 11.50 },
  { id: 'cherry-1c', label: 'Cherry #1 Common', species: 'Cherry', grade: '#1 Common', pricePerBF: 8.80 },
  { id: 'walnut-fas', label: 'Walnut FAS', species: 'Walnut', grade: 'FAS', pricePerBF: 14.80 },
  { id: 'walnut-1c', label: 'Walnut #1 Common', species: 'Walnut', grade: '#1 Common', pricePerBF: 11.20 },
  { id: 'ash-fas', label: 'Ash FAS', species: 'Ash', grade: 'FAS', pricePerBF: 7.50 },
  { id: 'poplar-fas', label: 'Poplar FAS', species: 'Poplar', grade: 'FAS', pricePerBF: 5.40 },
  { id: 'poplar-1c', label: 'Poplar #1 Common', species: 'Poplar', grade: '#1 Common', pricePerBF: 4.20 },
  { id: 'pine-select', label: 'Pine Select', species: 'Pine', grade: 'Select', pricePerBF: 4.50 },
  { id: 'pine-2b', label: 'Pine #2 & Better', species: 'Pine', grade: '#2 & Better', pricePerBF: 3.20 },
  { id: 'cedar-clear', label: 'Cedar Clear', species: 'Cedar', grade: 'Clear', pricePerBF: 6.50 },
  { id: 'mahogany-fas', label: 'Mahogany FAS', species: 'Mahogany', grade: 'FAS', pricePerBF: 16.20 },
  { id: 'sapele-fas', label: 'Sapele FAS', species: 'Sapele', grade: 'FAS', pricePerBF: 14.80 },
  { id: 'birch-fas', label: 'Birch FAS', species: 'Birch', grade: 'FAS', pricePerBF: 6.80 },
  { id: 'hickory-fas', label: 'Hickory FAS', species: 'Hickory', grade: 'FAS', pricePerBF: 8.90 },
];

interface FinishOption {
  id: string;
  label: string;
  pricePerQt: number;
  coverageSqFt: number;
}

const FINISH_OPTIONS: FinishOption[] = [
  { id: 'danish-oil', label: 'Danish Oil', pricePerQt: 18.00, coverageSqFt: 150 },
  { id: 'poly-satin', label: 'Polyurethane Satin', pricePerQt: 22.00, coverageSqFt: 180 },
  { id: 'poly-gloss', label: 'Polyurethane Gloss', pricePerQt: 22.00, coverageSqFt: 180 },
  { id: 'lacquer-satin', label: 'Lacquer Satin', pricePerQt: 28.00, coverageSqFt: 200 },
  { id: 'lacquer-gloss', label: 'Lacquer Gloss', pricePerQt: 28.00, coverageSqFt: 200 },
  { id: 'tung-oil', label: 'Tung Oil', pricePerQt: 24.00, coverageSqFt: 160 },
  { id: 'paste-wax', label: 'Paste Wax', pricePerQt: 14.00, coverageSqFt: 100 },
  { id: 'shellac', label: 'Shellac', pricePerQt: 20.00, coverageSqFt: 150 },
];

function calculateSurfaceArea(dims: Dimensions): number {
  const l = dims.unit === 'cm' ? dims.length / 2.54 : dims.length;
  const w = dims.unit === 'cm' ? dims.width / 2.54 : dims.width;
  const h = dims.unit === 'cm' ? dims.height / 2.54 : dims.height;
  return 2 * (l * w + l * h + w * h) / 144; // convert sq inches to sq feet
}

// Types
interface AIAnalysisResult {
  furnitureType?: string;
  style?: string;
  complexity?: number;
  confidence?: number;
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'inches' | 'cm';
}

interface Labor {
  milling: number;
  joinery: number;
  assembly: number;
  sanding: number;
  finishing: number;
  install: number;
}

interface CutListItem {
  id: string;
  name: string;
  qty: number;
  lengthIn: number;
  widthIn: number;
  thicknessIn: number;
  notes?: string;
}

function calcItemBoardFeet(item: CutListItem): number {
  return (item.lengthIn * item.widthIn * item.thicknessIn * item.qty) / 144;
}

// Base labor hours per furniture type at complexity tier 2, ~15 bf
const LABOR_BASE: Record<string, Labor> = {
  table:   { milling: 3,   joinery: 4,   assembly: 3,   sanding: 2,   finishing: 2,   install: 0 },
  chair:   { milling: 2.5, joinery: 5,   assembly: 3,   sanding: 2,   finishing: 1.5, install: 0 },
  cabinet: { milling: 4,   joinery: 6,   assembly: 5,   sanding: 3,   finishing: 2,   install: 2 },
  desk:    { milling: 3,   joinery: 5,   assembly: 4,   sanding: 2.5, finishing: 2,   install: 1 },
  shelf:   { milling: 2,   joinery: 2,   assembly: 2,   sanding: 1.5, finishing: 1.5, install: 1 },
  bed:     { milling: 4,   joinery: 4,   assembly: 4,   sanding: 3,   finishing: 2.5, install: 1 },
  bench:   { milling: 2,   joinery: 3,   assembly: 2,   sanding: 1.5, finishing: 1.5, install: 0 },
};
const LABOR_DEFAULT: Labor = { milling: 3, joinery: 4, assembly: 3, sanding: 2, finishing: 2, install: 0.5 };

// Complexity multipliers: tier 1=simple, 2=moderate, 3=complex, 4=expert
const COMPLEXITY_MULT: Record<number, number> = { 1: 0.6, 2: 1.0, 3: 1.5, 4: 2.2 };

function estimateLabor(
  furnitureType: string | undefined,
  complexity: number | undefined,
  totalBF: number,
): Labor {
  const base = LABOR_BASE[furnitureType || ''] || LABOR_DEFAULT;
  const cMult = COMPLEXITY_MULT[complexity || 2] || 1.0;
  // Scale by board feet: baseline is ~15 bf, scale proportionally but dampened (sqrt)
  const bfMult = totalBF > 0 ? Math.sqrt(totalBF / 15) : 1;
  const round = (n: number) => Math.round(n * 2) / 2; // round to nearest 0.5

  return {
    milling:   round(base.milling * cMult * bfMult),
    joinery:   round(base.joinery * cMult * bfMult),
    assembly:  round(base.assembly * cMult * bfMult),
    sanding:   round(base.sanding * cMult * bfMult),
    finishing: round(base.finishing * cMult * bfMult),
    install:   round(base.install * cMult),
  };
}

function generateCutList(
  furnitureType: string | undefined,
  dims: Dimensions,
  complexity: number = 2
): CutListItem[] {
  const L = dims.unit === 'cm' ? dims.length / 2.54 : dims.length;
  const W = dims.unit === 'cm' ? dims.width / 2.54 : dims.width;
  const H = dims.unit === 'cm' ? dims.height / 2.54 : dims.height;

  let nextId = 0;
  const item = (
    name: string,
    qty: number,
    length: number,
    width: number,
    thickness: number,
    notes?: string
  ): CutListItem => ({
    id: String(++nextId),
    name,
    qty,
    lengthIn: Math.round(Math.max(length, 1) * 10) / 10,
    widthIn: Math.round(Math.max(width, 0.5) * 10) / 10,
    thicknessIn: Math.round(thickness * 1000) / 1000,
    notes,
  });

  switch (furnitureType) {
    case 'table':
      return [
        item('Tabletop Boards', Math.max(1, Math.ceil(W / 6)), L, 6, 1, 'Edge-glued for top'),
        item('Legs', 4, H - 1, 1.75, 1.75),
        item('Long Aprons', 2, L - 7, 4, 0.75),
        item('Short Aprons', 2, W - 7, 4, 0.75),
        ...(complexity >= 3 ? [item('Breadboard Ends', 2, W, 2.5, 1)] : []),
        ...(complexity >= 3 ? [item('Long Stretchers', 2, L - 10, 2, 1)] : []),
        ...(complexity >= 3 ? [item('Short Stretchers', 2, W - 10, 2, 1)] : []),
      ];

    case 'chair':
      return [
        item('Back Legs', 2, H, 3.5, 1.75, 'Shaped from larger stock'),
        item('Front Legs', 2, H * 0.53, 1.75, 1.75),
        item('Side Seat Rails', 2, W * 0.75, 3.5, 0.75),
        item('Front Seat Rail', 1, L * 0.8, 3.5, 0.75),
        item('Back Seat Rail', 1, L * 0.8, 3.5, 0.75),
        item('Upper Back Rail', 1, L * 0.8, 2.5, 0.75),
        item('Back Slats', 3, H * 0.35, 2.5, 0.625),
        item('Seat Boards', Math.max(1, Math.ceil(L / 5)), W * 0.85, 5, 0.75, 'Edge-glued for seat'),
        ...(complexity >= 3 ? [item('Arm Rests', 2, W * 0.7, 3.5, 1)] : []),
        ...(complexity >= 3 ? [item('Arm Supports', 2, 8, 2, 1)] : []),
      ];

    case 'cabinet':
      return [
        item('Side Panels', 2, H, W, 0.75),
        item('Top Panel', 1, L, W, 0.75),
        item('Bottom Panel', 1, L, W, 0.75),
        item('Shelves', Math.max(1, Math.floor(H / 14) - 1), L - 1.5, W - 0.75, 0.75),
        item('Back Panel', 1, L, H, 0.25, 'Plywood'),
        item('Face Frame Stiles', 2, H, 1.5, 0.75),
        item('Face Frame Rails', Math.max(2, Math.floor(H / 14) + 1), L - 3, 1.5, 0.75),
        ...(complexity >= 2 ? [item('Door Panels', 2, H - 3, (L - 3) / 2, 0.75)] : []),
        ...(complexity >= 3 ? [item('Drawer Fronts', 2, L - 3, 6, 0.75)] : []),
        ...(complexity >= 3 ? [item('Drawer Sides', 4, W - 2, 5, 0.5)] : []),
        ...(complexity >= 3 ? [item('Drawer Bottoms', 2, L - 4, W - 2, 0.25, 'Plywood')] : []),
      ];

    case 'desk':
      return [
        item('Desktop Boards', Math.max(1, Math.ceil(W / 6)), L, 6, 1, 'Edge-glued for top'),
        item('Legs', 4, H - 1, 1.75, 1.75),
        item('Back Apron', 1, L - 7, 4, 0.75),
        item('Side Aprons', 2, W - 7, 4, 0.75),
        item('Modesty Panel', 1, L - 7, H * 0.4, 0.5),
        ...(complexity >= 2 ? [item('Drawer Front', 1, L * 0.4, 4, 0.75)] : []),
        ...(complexity >= 2 ? [item('Drawer Sides', 2, W - 3, 4, 0.5)] : []),
        ...(complexity >= 2 ? [item('Drawer Bottom', 1, L * 0.4 - 1, W - 4, 0.25, 'Plywood')] : []),
      ];

    case 'shelf':
      return [
        item('Side Panels', 2, H, W, 0.75),
        item('Shelves', Math.max(2, Math.floor(H / 12)), L, W, 0.75),
        item('Back Panel', 1, L, H, 0.25, 'Plywood'),
        ...(complexity >= 2 ? [item('Face Trim', Math.max(2, Math.floor(H / 12)) + 2, L, 1.5, 0.75)] : []),
        ...(complexity >= 3 ? [item('Crown Molding', 1, L + W * 2, 3, 0.75)] : []),
        ...(complexity >= 3 ? [item('Base Trim', 1, L + W * 2, 3.5, 0.75)] : []),
      ];

    case 'bed':
      return [
        item('Headboard Boards', Math.max(1, Math.ceil(W / 6)), H * 0.6, 6, 1, 'Edge-glued for headboard'),
        item('Footboard Boards', Math.max(1, Math.ceil(W / 6)), H * 0.35, 6, 0.75),
        item('Posts', 4, H, 3, 3),
        item('Side Rails', 2, L, 6, 1.5),
        item('Head/Foot Rails', 2, W - 6, 4, 0.75),
        item('Slats', Math.max(4, Math.ceil(L / 4)), W - 1, 3.5, 0.75),
        ...(complexity >= 3 ? [item('Headboard Cap', 1, W + 2, 3, 1)] : []),
      ];

    case 'bench':
      return [
        item('Seat Boards', Math.max(1, Math.ceil(W / 6)), L, 6, 1.5, 'Edge-glued for seat'),
        item('Legs', 4, H - 1.5, 2, 2),
        item('Long Stretchers', 2, L - 8, 3, 1),
        item('Short Stretchers', 2, W - 8, 3, 1),
        ...(complexity >= 3 ? [item('Back Supports', 2, H * 0.6, 3, 1.5)] : []),
        ...(complexity >= 3 ? [item('Back Slats', Math.max(1, Math.ceil(L / 6)), H * 0.35, 3.5, 0.75)] : []),
      ];

    default:
      return [
        item('Top/Surface Panel', 1, L, W, 0.75),
        item('Bottom Panel', 1, L, W, 0.75),
        item('Side Panels', 2, H, W, 0.75),
        item('Structural Members', 4, H, 2, 1),
      ];
  }
}

// Step components
function Step1PhotoUpload({
  onNext,
  aiAnalysis,
  setAiAnalysis,
  uploadedKeys,
  setUploadedKeys,
}: {
  onNext: () => void;
  aiAnalysis: AIAnalysisResult | null;
  setAiAnalysis: (result: AIAnalysisResult | null) => void;
  uploadedKeys: string[];
  setUploadedKeys: (keys: string[]) => void;
}) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleUploadComplete = async (fileKeys: string[]) => {
    setUploadedKeys(fileKeys);
    setIsAnalyzing(true);

    try {
      // Convert fileKeys to local API URLs
      const imageUrls = fileKeys.map(
        (key) => `/api/images/${encodeURIComponent(key)}`
      );

      const response = await fetch('/api/ai/analyze-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrls }),
      });

      if (response.ok) {
        const result = await response.json();
        // Map API response to our component format
        setAiAnalysis({
          furnitureType: result.analysis.furnitureType,
          style: result.analysis.style,
          complexity: result.analysis.complexityTier,
          confidence: result.analysis.furnitureTypeConfidence,
        });
      } else {
        // API error: let user manually select furniture type
        setAiAnalysis({
          furnitureType: 'other',
          style: 'modern',
          complexity: 2,
          confidence: 0,
        });
      }
    } catch (error) {
      console.error('AI analysis failed:', error);
      // Network error: let user manually select furniture type
      setAiAnalysis({
        furnitureType: 'other',
        style: 'modern',
        complexity: 2,
        confidence: 0,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Step 1: Upload Photos</h2>
      <PhotoUpload onUploadComplete={handleUploadComplete} maxFiles={3} />

      {isAnalyzing && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Analyzing your piece...</p>
        </div>
      )}

      {aiAnalysis && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-lg">AI Analysis Results</h3>

          <div>
            <label className="block text-sm font-medium mb-2">Furniture Type</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={aiAnalysis.furnitureType || ''}
              onChange={(e) => setAiAnalysis({ ...aiAnalysis, furnitureType: e.target.value })}
            >
              <option value="table">Table</option>
              <option value="cabinet">Cabinet</option>
              <option value="chair">Chair</option>
              <option value="desk">Desk</option>
              <option value="shelf">Shelf</option>
              <option value="bed">Bed</option>
              <option value="bench">Bench</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Style</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={aiAnalysis.style || ''}
              onChange={(e) => setAiAnalysis({ ...aiAnalysis, style: e.target.value })}
            >
              <option value="modern">Modern</option>
              <option value="traditional">Traditional</option>
              <option value="rustic">Rustic</option>
              <option value="industrial">Industrial</option>
              <option value="farmhouse">Farmhouse</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Complexity (1-4)
            </label>
            <input
              type="range"
              min="1"
              max="4"
              value={aiAnalysis.complexity || 2}
              onChange={(e) => setAiAnalysis({ ...aiAnalysis, complexity: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Simple</span>
              <span>Complex</span>
            </div>
          </div>

          {aiAnalysis.confidence && (
            <p className="text-sm text-gray-600">
              Confidence: {Math.round(aiAnalysis.confidence * 100)}%
            </p>
          )}
        </div>
      )}

      <button
        onClick={onNext}
        disabled={uploadedKeys.length === 0 || isAnalyzing}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {isAnalyzing ? 'Analyzing...' : 'Next: Dimensions'}
      </button>
    </div>
  );
}

function Step2Dimensions({
  onNext,
  onBack,
  dimensions,
  setDimensions,
  uploadedKeys,
  aiAnalysis,
  cutList,
  setCutList,
  wasteFactor,
  setWasteFactor,
}: {
  onNext: () => void;
  onBack: () => void;
  dimensions: Dimensions;
  setDimensions: (d: Dimensions) => void;
  uploadedKeys: string[];
  aiAnalysis: AIAnalysisResult | null;
  cutList: CutListItem[];
  setCutList: (items: CutListItem[]) => void;
  wasteFactor: number;
  setWasteFactor: (n: number) => void;
}) {
  const handleRegenerate = () => {
    setCutList(generateCutList(aiAnalysis?.furnitureType, dimensions, aiAnalysis?.complexity));
  };

  const totalBF = cutList.reduce((sum, item) => sum + calcItemBoardFeet(item), 0);
  const totalWithWaste = totalBF * (1 + wasteFactor / 100);

  const updateItem = (id: string, field: keyof CutListItem, value: string | number) => {
    setCutList(cutList.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const removeItem = (id: string) => {
    setCutList(cutList.filter(item => item.id !== id));
  };

  const addItem = () => {
    const newId = String(Math.max(0, ...cutList.map(i => Number(i.id))) + 1);
    setCutList([...cutList, {
      id: newId,
      name: 'Custom Part',
      qty: 1,
      lengthIn: 12,
      widthIn: 4,
      thicknessIn: 0.75,
    }]);
  };

  const styleLabels: Record<string, string> = {
    'mid-century-modern': 'Mid-Century Modern',
    farmhouse: 'Farmhouse',
    shaker: 'Shaker',
    industrial: 'Industrial',
    rustic: 'Rustic',
    traditional: 'Traditional',
    contemporary: 'Contemporary',
  };

  const complexityLabels: Record<number, string> = {
    1: 'Simple',
    2: 'Moderate',
    3: 'Complex',
    4: 'Expert',
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Step 2: Dimensions & Cut List</h2>

      {/* Project summary: photo + AI analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {uploadedKeys.length > 0 && (
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <img
              src={`/api/images/${encodeURIComponent(uploadedKeys[0])}`}
              alt="Uploaded piece"
              className="w-full h-48 object-contain bg-gray-50"
            />
          </div>
        )}

        {aiAnalysis && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-sm text-blue-800">AI Analysis</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Type</span>
                <p className="font-medium capitalize">{aiAnalysis.furnitureType}</p>
              </div>
              <div>
                <span className="text-gray-500">Style</span>
                <p className="font-medium">
                  {styleLabels[aiAnalysis.style || ''] || aiAnalysis.style}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Complexity</span>
                <p className="font-medium">
                  Tier {aiAnalysis.complexity} — {complexityLabels[aiAnalysis.complexity || 2]}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Confidence</span>
                <p className="font-medium">
                  {aiAnalysis.confidence ? `${Math.round(aiAnalysis.confidence * 100)}%` : '—'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overall dimensions */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Overall Dimensions</h3>
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setDimensions({ ...dimensions, unit: 'inches' })}
            className={`px-4 py-2 rounded text-sm ${
              dimensions.unit === 'inches'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Inches
          </button>
          <button
            onClick={() => setDimensions({ ...dimensions, unit: 'cm' })}
            className={`px-4 py-2 rounded text-sm ${
              dimensions.unit === 'cm'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Centimeters
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Length ({dimensions.unit})
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={dimensions.length}
              onChange={(e) =>
                setDimensions({ ...dimensions, length: parseFloat(e.target.value) || 0 })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Width ({dimensions.unit})
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={dimensions.width}
              onChange={(e) =>
                setDimensions({ ...dimensions, width: parseFloat(e.target.value) || 0 })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Height ({dimensions.unit})
            </label>
            <input
              type="number"
              inputMode="decimal"
              value={dimensions.height}
              onChange={(e) =>
                setDimensions({ ...dimensions, height: parseFloat(e.target.value) || 0 })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Cut list */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-700">Cut List</h3>
          <button
            onClick={handleRegenerate}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Regenerate from dimensions
          </button>
        </div>

        {cutList.length === 0 ? (
          <div className="text-center py-8 text-gray-400 border border-dashed border-gray-300 rounded-lg">
            <p>No components yet.</p>
            <p className="text-sm mt-1">Click &ldquo;Regenerate from dimensions&rdquo; or add parts manually.</p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b text-left text-gray-600">
                  <th className="py-2.5 px-3 font-medium">Component</th>
                  <th className="py-2.5 px-2 font-medium w-16 text-center">Qty</th>
                  <th className="py-2.5 px-2 font-medium w-20 text-center">L&quot;</th>
                  <th className="py-2.5 px-2 font-medium w-20 text-center">W&quot;</th>
                  <th className="py-2.5 px-2 font-medium w-20 text-center">T&quot;</th>
                  <th className="py-2.5 px-2 font-medium w-20 text-right">BF</th>
                  <th className="py-2.5 px-2 w-8"></th>
                </tr>
              </thead>
              <tbody>
                {cutList.map(item => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="py-1.5 px-3">
                      <input
                        type="text"
                        value={item.name}
                        onChange={e => updateItem(item.id, 'name', e.target.value)}
                        className="w-full px-2 py-1 border border-gray-200 rounded text-sm bg-transparent focus:bg-white focus:border-blue-400 outline-none"
                      />
                      {item.notes && (
                        <span className="text-xs text-gray-400 pl-2">{item.notes}</span>
                      )}
                    </td>
                    <td className="py-1.5 px-2">
                      <input
                        type="number"
                        value={item.qty}
                        onChange={e => updateItem(item.id, 'qty', parseInt(e.target.value) || 0)}
                        className="w-full px-1 py-1 border border-gray-200 rounded text-sm text-center bg-transparent focus:bg-white focus:border-blue-400 outline-none"
                        min={1}
                      />
                    </td>
                    <td className="py-1.5 px-2">
                      <input
                        type="number"
                        value={item.lengthIn}
                        onChange={e => updateItem(item.id, 'lengthIn', parseFloat(e.target.value) || 0)}
                        className="w-full px-1 py-1 border border-gray-200 rounded text-sm text-center bg-transparent focus:bg-white focus:border-blue-400 outline-none"
                        step="0.1"
                      />
                    </td>
                    <td className="py-1.5 px-2">
                      <input
                        type="number"
                        value={item.widthIn}
                        onChange={e => updateItem(item.id, 'widthIn', parseFloat(e.target.value) || 0)}
                        className="w-full px-1 py-1 border border-gray-200 rounded text-sm text-center bg-transparent focus:bg-white focus:border-blue-400 outline-none"
                        step="0.1"
                      />
                    </td>
                    <td className="py-1.5 px-2">
                      <input
                        type="number"
                        value={item.thicknessIn}
                        onChange={e => updateItem(item.id, 'thicknessIn', parseFloat(e.target.value) || 0)}
                        className="w-full px-1 py-1 border border-gray-200 rounded text-sm text-center bg-transparent focus:bg-white focus:border-blue-400 outline-none"
                        step="0.125"
                      />
                    </td>
                    <td className="py-1.5 px-2 text-right font-mono text-gray-700">
                      {calcItemBoardFeet(item).toFixed(2)}
                    </td>
                    <td className="py-1.5 px-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-500 text-lg leading-none"
                        title="Remove"
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button
          onClick={addItem}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          + Add component
        </button>
      </div>

      {/* Board feet summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Subtotal</span>
          <span className="font-mono">{totalBF.toFixed(2)} bf</span>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium whitespace-nowrap">
            Waste factor: {wasteFactor}%
          </label>
          <input
            type="range"
            min={5}
            max={35}
            step={5}
            value={wasteFactor}
            onChange={e => setWasteFactor(parseInt(e.target.value))}
            className="flex-1"
          />
        </div>
        <div className="flex justify-between items-center border-t border-gray-300 pt-3">
          <span className="text-sm font-semibold">Total (with waste)</span>
          <span className="text-2xl font-bold text-blue-600">
            {totalWithWaste.toFixed(2)} bf
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 min-h-[44px]"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!dimensions.length || !dimensions.width || !dimensions.height}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed min-h-[44px]"
        >
          Next: Materials
        </button>
      </div>
    </div>
  );
}

function Step3Materials({
  onNext,
  onBack,
  cutList,
  wasteFactor,
  componentMaterials,
  setComponentMaterials,
  selectedFinishId,
  setSelectedFinishId,
  dimensions,
}: {
  onNext: () => void;
  onBack: () => void;
  cutList: CutListItem[];
  wasteFactor: number;
  componentMaterials: MaterialAssignment;
  setComponentMaterials: (m: MaterialAssignment) => void;
  selectedFinishId: string;
  setSelectedFinishId: (id: string) => void;
  dimensions: Dimensions;
}) {
  const [quickAssignId, setQuickAssignId] = useState('');

  const handleQuickAssign = () => {
    if (!quickAssignId) return;
    const updated: MaterialAssignment = {};
    for (const item of cutList) {
      updated[item.id] = quickAssignId;
    }
    setComponentMaterials(updated);
  };

  const handleAssign = (itemId: string, optionId: string) => {
    setComponentMaterials({ ...componentMaterials, [itemId]: optionId || undefined! });
  };

  const unassignedCount = cutList.filter(item => !componentMaterials[item.id]).length;

  // Lumber cost computation
  const lumberByOption: Record<string, number> = {};
  for (const item of cutList) {
    const optionId = componentMaterials[item.id];
    if (!optionId) continue;
    const bf = calcItemBoardFeet(item);
    lumberByOption[optionId] = (lumberByOption[optionId] || 0) + bf;
  }
  let lumberSubtotal = 0;
  for (const [optionId, bf] of Object.entries(lumberByOption)) {
    const option = LUMBER_OPTIONS.find(o => o.id === optionId);
    if (option) lumberSubtotal += bf * option.pricePerBF;
  }
  const lumberTotal = lumberSubtotal * (1 + wasteFactor / 100);

  // Finish cost computation
  const selectedFinish = FINISH_OPTIONS.find(f => f.id === selectedFinishId);
  const surfaceSqFt = calculateSurfaceArea(dimensions);
  const finishQty = selectedFinish ? Math.max(1, Math.ceil(surfaceSqFt / selectedFinish.coverageSqFt)) : 0;
  const finishCost = selectedFinish ? finishQty * selectedFinish.pricePerQt : 0;

  const totalMaterialsCost = lumberTotal + finishCost;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Step 3: Materials</h2>

      {/* A. Quick Assign bar */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <label className="block text-sm font-medium text-blue-800 mb-2">Quick Assign All Components</label>
        <div className="flex gap-2">
          <select
            value={quickAssignId}
            onChange={e => setQuickAssignId(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Select species...</option>
            {LUMBER_OPTIONS.map(opt => (
              <option key={opt.id} value={opt.id}>
                {opt.label} — ${opt.pricePerBF.toFixed(2)}/bf
              </option>
            ))}
          </select>
          <button
            onClick={handleQuickAssign}
            disabled={!quickAssignId}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap"
          >
            Apply to All
          </button>
        </div>
      </div>

      {/* Unassigned warning */}
      {unassignedCount > 0 && (
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg px-4 py-3 text-sm text-yellow-800">
          {unassignedCount} component{unassignedCount > 1 ? 's' : ''} without a species assigned — {unassignedCount > 1 ? 'they' : 'it'} will contribute $0 to the lumber cost.
        </div>
      )}

      {/* B. Component Materials table */}
      {cutList.length === 0 ? (
        <div className="text-center py-8 text-gray-400 border border-dashed border-gray-300 rounded-lg">
          <p>No components in cut list.</p>
          <p className="text-sm mt-1">Go back to Step 2 to add components.</p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b text-left text-gray-600">
                <th className="py-2.5 px-3 font-medium">Component</th>
                <th className="py-2.5 px-2 font-medium w-14 text-center">Qty</th>
                <th className="py-2.5 px-2 font-medium w-16 text-right">BF</th>
                <th className="py-2.5 px-3 font-medium">Wood Species</th>
                <th className="py-2.5 px-2 font-medium w-24 text-right">Cost</th>
              </tr>
            </thead>
            <tbody>
              {cutList.map(item => {
                const assignedId = componentMaterials[item.id];
                const option = assignedId ? LUMBER_OPTIONS.find(o => o.id === assignedId) : null;
                const bf = calcItemBoardFeet(item);
                const cost = option ? bf * option.pricePerBF : 0;
                return (
                  <tr key={item.id} className={`border-b border-gray-100 hover:bg-gray-50/50 ${!assignedId ? 'bg-yellow-50/50' : ''}`}>
                    <td className="py-2 px-3 font-medium text-gray-800">
                      {item.name}
                      {item.notes && <span className="text-xs text-gray-400 ml-1">({item.notes})</span>}
                    </td>
                    <td className="py-2 px-2 text-center text-gray-600">{item.qty}</td>
                    <td className="py-2 px-2 text-right font-mono text-gray-600">{bf.toFixed(2)}</td>
                    <td className="py-2 px-3">
                      <select
                        value={assignedId || ''}
                        onChange={e => handleAssign(item.id, e.target.value)}
                        className={`w-full px-2 py-1 border rounded text-sm ${assignedId ? 'border-gray-200 bg-transparent' : 'border-yellow-300 bg-yellow-50'}`}
                      >
                        <option value="">Select species...</option>
                        {LUMBER_OPTIONS.map(opt => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label} — ${opt.pricePerBF.toFixed(2)}/bf
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-2 px-2 text-right font-mono text-gray-700">
                      {cost > 0 ? `$${cost.toFixed(2)}` : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* C. Lumber Cost Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Lumber Cost Summary</h3>
        <div className="flex justify-between text-sm">
          <span>Lumber subtotal</span>
          <span className="font-mono">${lumberSubtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Waste factor ({wasteFactor}%)</span>
          <span className="font-mono">+${(lumberSubtotal * wasteFactor / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-300 pt-2">
          <span className="text-sm font-semibold">Lumber total</span>
          <span className="font-mono font-semibold text-blue-600">${lumberTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* D. Finish section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Finish</h3>
        <select
          value={selectedFinishId}
          onChange={e => setSelectedFinishId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="">No finish selected</option>
          {FINISH_OPTIONS.map(f => (
            <option key={f.id} value={f.id}>
              {f.label} — ${f.pricePerQt.toFixed(2)}/qt ({f.coverageSqFt} sq ft/qt)
            </option>
          ))}
        </select>
        {selectedFinish && (
          <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-600">Surface area</span>
              <span className="font-mono">{surfaceSqFt.toFixed(1)} sq ft</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quarts needed</span>
              <span className="font-mono">{finishQty}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Finish cost</span>
              <span className="font-mono">${finishCost.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* E. Total Materials Cost */}
      <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Total Materials Cost</span>
          <span className="text-2xl font-bold text-blue-600">${totalMaterialsCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Lumber: ${lumberTotal.toFixed(2)}</span>
          <span>Finish: ${finishCost.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:sticky md:bottom-4 md:bg-white md:p-4 md:rounded-lg md:shadow-lg">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 min-h-[44px]"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 min-h-[44px]"
        >
          Next: Labor & Time
        </button>
      </div>
    </div>
  );
}

function Step4Labor({
  onNext,
  onBack,
  labor,
  setLabor,
  shopRate,
  furnitureType,
  complexity,
}: {
  onNext: () => void;
  onBack: () => void;
  labor: Labor;
  setLabor: (l: Labor) => void;
  shopRate: number;
  furnitureType?: string;
  complexity?: number;
}) {
  const totalHours =
    labor.milling +
    labor.joinery +
    labor.assembly +
    labor.sanding +
    labor.finishing +
    labor.install;

  const totalLaborCost = totalHours * shopRate;

  const complexityLabels: Record<number, string> = {
    1: 'Simple', 2: 'Moderate', 3: 'Complex', 4: 'Expert',
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Step 4: Labor & Time</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm font-medium text-blue-800">AI-Estimated Hours</p>
        <p className="text-xs text-gray-600 mt-1">
          Based on {furnitureType ? <span className="capitalize font-medium">{furnitureType}</span> : 'furniture type'}
          {complexity ? <>, Tier {complexity} ({complexityLabels[complexity]})</> : ''}, and cut list board feet.
          Adjust any values below as needed.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Milling (hours)</label>
          <input
            type="number"
            step="0.5"
            value={labor.milling}
            onChange={(e) =>
              setLabor({ ...labor, milling: parseFloat(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Joinery (hours)</label>
          <input
            type="number"
            step="0.5"
            value={labor.joinery}
            onChange={(e) =>
              setLabor({ ...labor, joinery: parseFloat(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Assembly (hours)</label>
          <input
            type="number"
            step="0.5"
            value={labor.assembly}
            onChange={(e) =>
              setLabor({ ...labor, assembly: parseFloat(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Sanding (hours)</label>
          <input
            type="number"
            step="0.5"
            value={labor.sanding}
            onChange={(e) =>
              setLabor({ ...labor, sanding: parseFloat(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Finishing (hours)</label>
          <input
            type="number"
            step="0.5"
            value={labor.finishing}
            onChange={(e) =>
              setLabor({ ...labor, finishing: parseFloat(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Install (hours)</label>
          <input
            type="number"
            step="0.5"
            value={labor.install}
            onChange={(e) =>
              setLabor({ ...labor, install: parseFloat(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Total Hours:</span>
          <span className="text-xl font-bold">{totalHours.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Labor Cost (${shopRate}/hr):</span>
          <span className="text-xl font-bold text-blue-600">
            ${totalLaborCost.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:sticky md:bottom-4 md:bg-white md:p-4 md:rounded-lg md:shadow-lg">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 min-h-[44px]"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 min-h-[44px]"
        >
          Next: Review
        </button>
      </div>
    </div>
  );
}

function Step5Review({
  onBack,
  onSubmit,
  materialsCost,
  laborCost,
  overheadRate,
  totalHours,
  marginPercent,
  taxPercent,
  isSaving,
}: {
  onBack: () => void;
  onSubmit: () => void;
  materialsCost: number;
  laborCost: number;
  overheadRate: number;
  totalHours: number;
  marginPercent: number;
  taxPercent: number;
  isSaving?: boolean;
}) {
  const overhead = totalHours * overheadRate;
  const subtotal = materialsCost + laborCost + overhead;
  const profit = subtotal * (marginPercent / 100);
  const tax = (subtotal + profit) * (taxPercent / 100);
  const total = subtotal + profit + tax;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Step 5: Review & Finalize</h2>

      <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-lg border-b pb-2">Itemized Breakdown</h3>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Materials Subtotal:</span>
            <span className="font-medium">${materialsCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Labor Subtotal:</span>
            <span className="font-medium">${laborCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>
              Overhead ({totalHours.toFixed(1)} hrs × ${overheadRate}/hr):
            </span>
            <span className="font-medium">${overhead.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between">
            <span className="font-semibold">Subtotal:</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Profit Margin ({marginPercent}%):</span>
            <span className="font-medium">${profit.toFixed(2)}</span>
          </div>
          {taxPercent > 0 && (
            <div className="flex justify-between">
              <span>Tax ({taxPercent}%):</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
          )}
          <div className="border-t pt-2 flex justify-between text-xl">
            <span className="font-bold">Grand Total:</span>
            <span className="font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:sticky md:bottom-4 md:bg-white md:p-4 md:rounded-lg md:shadow-lg">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 min-h-[44px]"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={isSaving}
          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed min-h-[44px]"
        >
          {isSaving ? 'Saving...' : 'Save Project'}
        </button>
      </div>
    </div>
  );
}

// Main component
export default function ProjectBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedKeys, setUploadedKeys] = useState<string[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysisResult | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    length: 60,
    width: 30,
    height: 30,
    unit: 'inches',
  });
  const [cutList, setCutList] = useState<CutListItem[]>([]);
  const [wasteFactor, setWasteFactor] = useState(20);
  const [componentMaterials, setComponentMaterials] = useState<MaterialAssignment>({});
  const [selectedFinishId, setSelectedFinishId] = useState('');
  const [labor, setLabor] = useState<Labor>({
    milling: 4,
    joinery: 6,
    assembly: 4,
    sanding: 3,
    finishing: 2,
    install: 1,
  });

  // User profile defaults (would come from DB in real app)
  const shopRate = 50;
  const overheadRate = 15;
  const marginPercent = 20;
  const taxPercent = 0;

  // Calculate totals
  const totalHours =
    labor.milling +
    labor.joinery +
    labor.assembly +
    labor.sanding +
    labor.finishing +
    labor.install;
  const laborCost = totalHours * shopRate;

  const materialsCost = useMemo(() => {
    const lumberByOption: Record<string, number> = {};
    for (const item of cutList) {
      const optionId = componentMaterials[item.id];
      if (!optionId) continue;
      const bf = calcItemBoardFeet(item);
      lumberByOption[optionId] = (lumberByOption[optionId] || 0) + bf;
    }
    let lumberSubtotal = 0;
    for (const [optionId, bf] of Object.entries(lumberByOption)) {
      const option = LUMBER_OPTIONS.find(o => o.id === optionId);
      if (option) lumberSubtotal += bf * option.pricePerBF;
    }
    const lumberTotal = lumberSubtotal * (1 + wasteFactor / 100);

    let finishCost = 0;
    if (selectedFinishId) {
      const fin = FINISH_OPTIONS.find(f => f.id === selectedFinishId);
      if (fin) {
        const sqFt = calculateSurfaceArea(dimensions);
        const qtsNeeded = Math.max(1, Math.ceil(sqFt / fin.coverageSqFt));
        finishCost = qtsNeeded * fin.pricePerQt;
      }
    }

    return lumberTotal + finishCost;
  }, [cutList, componentMaterials, wasteFactor, selectedFinishId, dimensions]);

  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async () => {
    setIsSaving(true);
    try {
      const overhead = totalHours * overheadRate;
      const subtotal = materialsCost + laborCost + overhead;
      const profit = subtotal * (marginPercent / 100);
      const tax = (subtotal + profit) * (taxPercent / 100);
      const total = subtotal + profit + tax;

      // Build line items from cut list, labor, and finish
      const lineItems: {
        category: string;
        name: string;
        description?: string;
        quantity: number;
        unit: string;
        unitCost: number;
      }[] = [];

      // Material line items from cut list
      for (const item of cutList) {
        const optionId = componentMaterials[item.id];
        const option = optionId
          ? LUMBER_OPTIONS.find((o) => o.id === optionId)
          : null;
        if (option) {
          const bf = calcItemBoardFeet(item);
          lineItems.push({
            category: 'material',
            name: `${option.label} — ${item.name}`,
            description: item.notes,
            quantity: Math.round(bf * 100) / 100,
            unit: 'bf',
            unitCost: option.pricePerBF,
          });
        }
      }

      // Finish line item
      if (selectedFinishId) {
        const fin = FINISH_OPTIONS.find((f) => f.id === selectedFinishId);
        if (fin) {
          const sqFt = calculateSurfaceArea(dimensions);
          const qtsNeeded = Math.max(1, Math.ceil(sqFt / fin.coverageSqFt));
          lineItems.push({
            category: 'finish',
            name: fin.label,
            quantity: qtsNeeded,
            unit: 'qt',
            unitCost: fin.pricePerQt,
          });
        }
      }

      // Labor line items
      const laborCategories: { key: keyof Labor; label: string }[] = [
        { key: 'milling', label: 'Milling' },
        { key: 'joinery', label: 'Joinery' },
        { key: 'assembly', label: 'Assembly' },
        { key: 'sanding', label: 'Sanding' },
        { key: 'finishing', label: 'Finishing' },
        { key: 'install', label: 'Installation' },
      ];
      for (const cat of laborCategories) {
        if (labor[cat.key] > 0) {
          lineItems.push({
            category: 'labor',
            name: cat.label,
            quantity: labor[cat.key],
            unit: 'hr',
            unitCost: shopRate,
          });
        }
      }

      const dimsIn = {
        lengthIn:
          dimensions.unit === 'cm'
            ? dimensions.length / 2.54
            : dimensions.length,
        widthIn:
          dimensions.unit === 'cm'
            ? dimensions.width / 2.54
            : dimensions.width,
        heightIn:
          dimensions.unit === 'cm'
            ? dimensions.height / 2.54
            : dimensions.height,
      };

      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `${(aiAnalysis?.furnitureType || 'custom').replace(/^./, (c) => c.toUpperCase())} — ${aiAnalysis?.style || 'Custom'}`,
          furnitureType: aiAnalysis?.furnitureType,
          style: aiAnalysis?.style,
          complexityTier: aiAnalysis?.complexity,
          ...dimsIn,
          photoUrls: uploadedKeys,
          aiAnalysis: aiAnalysis,
          shopRate,
          overheadRate,
          marginPercent,
          subtotal,
          tax,
          total,
          lineItems,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to save project');
      }

      const project = await response.json();
      window.location.href = `/dashboard`;
    } catch (error) {
      console.error('Error saving project:', error);
      alert(
        'Failed to save project: ' +
          (error instanceof Error ? error.message : 'Unknown error')
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      {/* Desktop stepper */}
      <div className="mb-8 hidden md:block">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
              {step < 5 && (
                <div
                  className={`w-16 h-1 ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>Photos</span>
          <span>Dimensions</span>
          <span>Materials</span>
          <span>Labor</span>
          <span>Review</span>
        </div>
      </div>

      {/* Mobile stepper */}
      <div className="mb-8 md:hidden">
        <div className="text-center mb-2">
          <span className="text-sm text-gray-600">Step {currentStep} of 5</span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`flex-1 h-2 rounded-full ${
                step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            ></div>
          ))}
        </div>
        <div className="text-center mt-2">
          <span className="text-sm font-medium text-gray-700">
            {currentStep === 1 && 'Photos'}
            {currentStep === 2 && 'Dimensions & Cut List'}
            {currentStep === 3 && 'Materials'}
            {currentStep === 4 && 'Labor'}
            {currentStep === 5 && 'Review'}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        {currentStep === 1 && (
          <Step1PhotoUpload
            onNext={() => {
              setCutList(generateCutList(aiAnalysis?.furnitureType, dimensions, aiAnalysis?.complexity));
              setCurrentStep(2);
            }}
            aiAnalysis={aiAnalysis}
            setAiAnalysis={setAiAnalysis}
            uploadedKeys={uploadedKeys}
            setUploadedKeys={setUploadedKeys}
          />
        )}
        {currentStep === 2 && (
          <Step2Dimensions
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
            dimensions={dimensions}
            setDimensions={setDimensions}
            uploadedKeys={uploadedKeys}
            aiAnalysis={aiAnalysis}
            cutList={cutList}
            setCutList={setCutList}
            wasteFactor={wasteFactor}
            setWasteFactor={setWasteFactor}
          />
        )}
        {currentStep === 3 && (
          <Step3Materials
            onNext={() => {
              const totalBF = cutList.reduce((sum, item) => sum + calcItemBoardFeet(item), 0);
              setLabor(estimateLabor(aiAnalysis?.furnitureType, aiAnalysis?.complexity, totalBF));
              setCurrentStep(4);
            }}
            onBack={() => setCurrentStep(2)}
            cutList={cutList}
            wasteFactor={wasteFactor}
            componentMaterials={componentMaterials}
            setComponentMaterials={setComponentMaterials}
            selectedFinishId={selectedFinishId}
            setSelectedFinishId={setSelectedFinishId}
            dimensions={dimensions}
          />
        )}
        {currentStep === 4 && (
          <Step4Labor
            onNext={() => setCurrentStep(5)}
            onBack={() => setCurrentStep(3)}
            labor={labor}
            setLabor={setLabor}
            shopRate={shopRate}
            furnitureType={aiAnalysis?.furnitureType}
            complexity={aiAnalysis?.complexity}
          />
        )}
        {currentStep === 5 && (
          <Step5Review
            onBack={() => setCurrentStep(4)}
            onSubmit={handleSubmit}
            materialsCost={materialsCost}
            laborCost={laborCost}
            overheadRate={overheadRate}
            totalHours={totalHours}
            marginPercent={marginPercent}
            taxPercent={taxPercent}
            isSaving={isSaving}
          />
        )}
      </div>
    </div>
  );
}
