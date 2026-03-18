import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getDefaultUser } from '@/lib/default-user';
import { Resend } from 'resend';
import { renderToBuffer } from '@react-pdf/renderer';
import QuotePDF from '@/components/QuotePDF';
import React from 'react';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getDefaultUser();
    const { id } = await params;
    const body = await req.json();
    const { customerEmail } = body;

    if (!customerEmail) {
      return NextResponse.json(
        { error: 'customerEmail is required' },
        { status: 400 }
      );
    }

    // Fetch the project
    const project = await prisma.project.findUnique({
      where: { id, userId: user.id },
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
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }

    // Generate PDF as buffer for email attachment
    const pdfElement = React.createElement(QuotePDF, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      project: project as any,
      showDetailedBreakdown: project.user.showDetailedBreakdown ?? true,
    });
    // @ts-expect-error - QuotePDF wraps Document internally
    const stream = await renderToBuffer(pdfElement);
    const pdfBuffer = Buffer.from(stream);

    // Create share link
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const shareUrl = `${baseUrl}/quotes/${project.shareToken}`;

    // Send email via Resend
    await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'quotes@craftquote.com',
      to: customerEmail,
      subject: `Quote for ${project.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Quote for ${project.title}</h2>
          <p>Hello,</p>
          <p>Thank you for your interest. Please find your custom quote attached.</p>
          <p>You can also view your quote online at:</p>
          <p><a href="${shareUrl}" style="color: #0066cc;">${shareUrl}</a></p>
          <p>If you have any questions, please don't hesitate to reach out.</p>
          <p>Best regards,<br/>${project.user.businessName || project.user.name}</p>
        </div>
      `,
      attachments: [
        {
          filename: `quote-${project.title.replace(/\s+/g, '-')}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    // Update project status and sentAt timestamp
    await prisma.project.update({
      where: { id },
      data: {
        status: 'sent',
        sentAt: new Date(),
        customerEmail,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Quote sent successfully',
    });
  } catch (error) {
    console.error('Error sending quote:', error);
    return NextResponse.json(
      { error: 'Failed to send quote' },
      { status: 500 }
    );
  }
}
