import { NextRequest, NextResponse } from 'next/server';
import { getFileFromLocal } from '@/lib/storage/r2';

const MIME_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  try {
    const { key } = await params;

    if (!key) {
      return NextResponse.json({ error: 'File key is required' }, { status: 400 });
    }

    const decodedKey = decodeURIComponent(key);
    const fileBuffer = await getFileFromLocal(decodedKey);

    if (!fileBuffer) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Detect content type from extension
    const ext = decodedKey.substring(decodedKey.lastIndexOf('.')).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'image/jpeg';

    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    );
  }
}
