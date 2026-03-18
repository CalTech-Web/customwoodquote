import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getDefaultUser } from '@/lib/default-user';
import { randomUUID } from 'crypto';

export async function GET() {
  try {
    const user = await getDefaultUser();

    const projects = await prisma.project.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        sentAt: 'desc',
      },
      include: {
        lineItems: true,
      },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getDefaultUser();
    const body = await req.json();

    // Build line items create array if provided
    const lineItemsCreate = Array.isArray(body.lineItems)
      ? body.lineItems.map(
          (
            item: {
              category: string;
              name: string;
              description?: string;
              quantity: number;
              unit: string;
              unitCost: number;
              sortOrder?: number;
            },
            index: number
          ) => ({
            category: item.category,
            name: item.name,
            description: item.description,
            quantity: item.quantity,
            unit: item.unit,
            unitCost: item.unitCost,
            totalCost: item.quantity * item.unitCost,
            sortOrder: item.sortOrder ?? index,
          })
        )
      : [];

    // Create the project with line items
    const project = await prisma.project.create({
      data: {
        userId: user.id,
        title: body.title,
        description: body.description,
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.customerPhone,
        furnitureType: body.furnitureType,
        style: body.style,
        complexityTier:
          body.complexityTier != null ? String(body.complexityTier) : null,
        lengthIn: body.lengthIn,
        widthIn: body.widthIn,
        heightIn: body.heightIn,
        photoUrls: body.photoUrls ? JSON.stringify(body.photoUrls) : null,
        aiAnalysis: body.aiAnalysis ? JSON.stringify(body.aiAnalysis) : null,
        shopRate: body.shopRate,
        overheadRate: body.overheadRate,
        marginPercent: body.marginPercent,
        subtotal: body.subtotal,
        tax: body.tax,
        total: body.total,
        shareToken: randomUUID(),
        paymentTerms: body.paymentTerms,
        estimatedTimeline: body.estimatedTimeline,
        notes: body.notes,
        status: body.status || 'draft',
        lineItems: {
          create: lineItemsCreate,
        },
      },
      include: {
        lineItems: true,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
