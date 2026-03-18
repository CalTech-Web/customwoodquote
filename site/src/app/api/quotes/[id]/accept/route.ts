import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';
import QuoteAcceptedEmail from '@/emails/QuoteAcceptedEmail';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

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

    // Update project status to accepted
    await prisma.project.update({
      where: { id },
      data: {
        status: 'accepted',
        acceptedAt: new Date(),
      },
    });

    // Send email to maker
    await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'quotes@craftquote.com',
      to: project.user.email,
      subject: `Quote Accepted: ${project.title}`,
      react: QuoteAcceptedEmail({
        projectTitle: project.title,
        customerName: project.customerName || 'Customer',
        projectDescription: project.description,
        total: project.total,
      }),
    });

    return NextResponse.json({
      success: true,
      message: 'Quote accepted successfully',
    });
  } catch (error) {
    console.error('Error accepting quote:', error);
    return NextResponse.json(
      { error: 'Failed to accept quote' },
      { status: 500 }
    );
  }
}
