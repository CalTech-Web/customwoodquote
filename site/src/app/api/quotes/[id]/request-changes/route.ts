import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';
import ChangesRequestedEmail from '@/emails/ChangesRequestedEmail';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Fetch the project
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            businessName: true,
            name: true,
            email: true,
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

    const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/quotes/${project.shareToken}`;

    // Send email to maker
    await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'quotes@craftquote.com',
      to: project.user.email,
      subject: `Changes Requested: ${project.title}`,
      react: ChangesRequestedEmail({
        projectTitle: project.title,
        customerName: project.customerName || 'Customer',
        message: message,
        quoteLink: shareUrl,
      }),
    });

    return NextResponse.json({
      success: true,
      message: 'Request sent successfully',
    });
  } catch (error) {
    console.error('Error sending request:', error);
    return NextResponse.json(
      { error: 'Failed to send request' },
      { status: 500 }
    );
  }
}
