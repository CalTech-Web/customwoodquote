import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { prisma } from '@/lib/prisma';
import { getFileFromLocal } from '@/lib/storage/r2';
import QuotePDF from '@/components/QuotePDF';
import React from 'react';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Fetch the project
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        lineItems: {
          orderBy: { sortOrder: 'asc' },
        },
        user: {
          select: {
            businessName: true,
            logo: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            showDetailedBreakdown: true,
          },
        },
      },
    });

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Resolve photo file keys to base64 data URIs for PDF rendering
    let resolvedPhotoUrl: string | null = null;
    if (project.photoUrls) {
      try {
        const keys = JSON.parse(project.photoUrls);
        const firstKey = keys[0];
        if (firstKey && !firstKey.startsWith('http')) {
          const buffer = await getFileFromLocal(firstKey);
          if (buffer) {
            const ext = firstKey.split('.').pop()?.toLowerCase() || 'png';
            const mimeType =
              ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : `image/${ext}`;
            resolvedPhotoUrl = `data:${mimeType};base64,${buffer.toString('base64')}`;
          }
        } else if (firstKey) {
          resolvedPhotoUrl = firstKey;
        }
      } catch {
        // Ignore photo parsing errors for PDF
      }
    }

    // Generate PDF stream
    const pdfElement = React.createElement(QuotePDF, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      project: project as any,
      showDetailedBreakdown: project.user.showDetailedBreakdown ?? true,
      resolvedPhotoUrl,
    });
    // @ts-expect-error - QuotePDF wraps Document internally
    const stream = await renderToStream(pdfElement);

    // Return PDF with download headers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new NextResponse(stream as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="quote-${project.title.replace(/\s+/g, '-')}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
