import { NextRequest, NextResponse } from 'next/server';
import { generateFileKey, saveFile } from '@/lib/storage/r2';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';

    // Handle multipart form data (file upload)
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file') as File | null;

      if (!file) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
      }

      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          { error: 'Invalid content type. Only JPEG, PNG, and WebP images are allowed.' },
          { status: 400 }
        );
      }

      const fileKey = generateFileKey(file.name);
      const buffer = Buffer.from(await file.arrayBuffer());
      await saveFile(fileKey, buffer, file.type);

      return NextResponse.json({ fileKey });
    }

    // Handle JSON request (legacy presigned URL flow — return direct upload info)
    const body = await request.json();
    const { fileName, contentType: fileContentType } = body;

    if (!fileName || !fileContentType) {
      return NextResponse.json(
        { error: 'fileName and contentType are required' },
        { status: 400 }
      );
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(fileContentType)) {
      return NextResponse.json(
        { error: 'Invalid content type. Only JPEG, PNG, and WebP images are allowed.' },
        { status: 400 }
      );
    }

    const fileKey = generateFileKey(fileName);

    return NextResponse.json({ fileKey, uploadMode: 'direct' });
  } catch (error) {
    console.error('Error handling upload:', error);
    return NextResponse.json(
      { error: 'Failed to generate upload URL' },
      { status: 500 }
    );
  }
}
