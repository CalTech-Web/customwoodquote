import { NextRequest, NextResponse } from 'next/server';

interface AnalysisResult {
  furnitureType:
    | 'table'
    | 'chair'
    | 'cabinet'
    | 'desk'
    | 'shelf'
    | 'bed'
    | 'bench'
    | 'other';
  furnitureTypeConfidence: number;
  style:
    | 'mid-century-modern'
    | 'farmhouse'
    | 'shaker'
    | 'industrial'
    | 'rustic'
    | 'traditional'
    | 'contemporary'
    | 'other';
  styleConfidence: number;
  complexityTier: 1 | 2 | 3 | 4;
  complexityReasoning: string;
  visibleJoinery: string[];
  componentEstimate: {
    legs: number;
    panels: number;
    drawers: number;
    shelves: number;
    doors: number;
  };
  finishAppearance:
    | 'raw'
    | 'matte'
    | 'satin'
    | 'gloss'
    | 'painted'
    | 'stained';
  woodColorFamily: 'light' | 'medium' | 'dark' | 'mixed';
  additionalNotes: string;
}

function getDemoAnalysis(): AnalysisResult {
  return {
    furnitureType: 'table',
    furnitureTypeConfidence: 0.92,
    style: 'mid-century-modern',
    styleConfidence: 0.85,
    complexityTier: 2,
    complexityReasoning:
      'Moderate complexity with clean lines, tapered legs, and a solid top requiring precise joinery for a polished finish',
    visibleJoinery: ['mortise-tenon', 'edge glue-up'],
    componentEstimate: {
      legs: 4,
      panels: 1,
      drawers: 0,
      shelves: 0,
      doors: 0,
    },
    finishAppearance: 'satin',
    woodColorFamily: 'medium',
    additionalNotes:
      'Demo mode — connect an Anthropic API key for real AI vision analysis',
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { imageUrls } = body;

    if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
      return NextResponse.json(
        { error: 'imageUrls array is required' },
        { status: 400 }
      );
    }

    if (imageUrls.length > 3) {
      return NextResponse.json(
        { error: 'Maximum 3 images allowed' },
        { status: 400 }
      );
    }

    // Demo mode: return mock analysis when no API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      // Simulate a brief delay so the UI spinner feels realistic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      return NextResponse.json(
        { analysis: getDemoAnalysis(), demo: true },
        { status: 200 }
      );
    }

    // --- Real API mode below ---
    const Anthropic = (await import('@anthropic-ai/sdk')).default;
    const { getFileFromLocal } = await import('@/lib/storage/r2');

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Load images from local storage
    const imageContents = await Promise.all(
      imageUrls.map(async (url: string) => {
        const match = url.match(/\/api\/images\/(.+)/);
        if (!match) throw new Error(`Invalid image URL: ${url}`);
        const fileKey = decodeURIComponent(match[1]);
        const buffer = await getFileFromLocal(fileKey);
        if (!buffer) throw new Error(`Image not found: ${fileKey}`);
        return {
          type: 'image' as const,
          source: {
            type: 'base64' as const,
            media_type: 'image/jpeg' as const,
            data: buffer.toString('base64'),
          },
        };
      })
    );

    const prompt = `Analyze this furniture piece and return ONLY valid JSON:
{
  "furnitureType": "table|chair|cabinet|desk|shelf|bed|bench|other",
  "furnitureTypeConfidence": 0.0-1.0,
  "style": "mid-century-modern|farmhouse|shaker|industrial|rustic|traditional|contemporary|other",
  "styleConfidence": 0.0-1.0,
  "complexityTier": 1-4,
  "complexityReasoning": "string",
  "visibleJoinery": ["mortise-tenon", "dovetail", etc.],
  "componentEstimate": { "legs": 0, "panels": 0, "drawers": 0, "shelves": 0, "doors": 0 },
  "finishAppearance": "raw|matte|satin|gloss|painted|stained",
  "woodColorFamily": "light|medium|dark|mixed",
  "additionalNotes": "string"
}
Complexity: Tier 1=simple, Tier 2=moderate, Tier 3=complex, Tier 4=expert-level.`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: [...imageContents, { type: 'text', text: prompt }],
        },
      ],
    });

    const textContent = message.content.find((c) => c.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text response from Claude');
    }

    let responseText = textContent.text.trim();
    if (responseText.startsWith('```json')) responseText = responseText.slice(7);
    if (responseText.startsWith('```')) responseText = responseText.slice(3);
    if (responseText.endsWith('```')) responseText = responseText.slice(0, -3);
    responseText = responseText.trim();

    const analysisResult: AnalysisResult = JSON.parse(responseText);

    if (analysisResult.furnitureTypeConfidence < 0.3) {
      return NextResponse.json(
        {
          error: 'Unable to confidently identify furniture. Please provide a clearer photo.',
          confidence: analysisResult.furnitureTypeConfidence,
        },
        { status: 422 }
      );
    }

    return NextResponse.json({ analysis: analysisResult }, { status: 200 });
  } catch (error) {
    console.error('Error analyzing photo:', error);

    // On API errors (auth, rate limit, network), fall back to demo analysis
    // so the pipeline still works during development/testing
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Failed to parse AI response as JSON' },
        { status: 500 }
      );
    }

    console.warn('Falling back to demo analysis due to API error');
    return NextResponse.json(
      { analysis: getDemoAnalysis(), demo: true },
      { status: 200 }
    );
  }
}
