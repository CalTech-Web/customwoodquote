import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDefaultUser } from "@/lib/default-user";

export async function GET() {
  try {
    const user = await getDefaultUser();

    const templates = await prisma.template.findMany({
      where: { userId: user.id },
      orderBy: { name: "asc" },
    });

    // Parse JSON strings
    const templatesWithParsedLineItems = templates.map((t) => ({
      ...t,
      defaultLineItems: t.defaultLineItems ? JSON.parse(t.defaultLineItems) : [],
    }));

    return NextResponse.json(templatesWithParsedLineItems);
  } catch (error) {
    console.error("Failed to fetch templates:", error);
    return NextResponse.json(
      { error: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getDefaultUser();
    const body = await req.json();
    const { name, furnitureType, style, lineItems } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Template name is required" },
        { status: 400 }
      );
    }

    const template = await prisma.template.create({
      data: {
        userId: user.id,
        name,
        furnitureType: furnitureType || null,
        style: style || null,
        defaultLineItems: lineItems ? JSON.stringify(lineItems) : null,
      },
    });

    return NextResponse.json({ success: true, template });
  } catch (error) {
    console.error("Failed to create template:", error);
    return NextResponse.json(
      { error: "Failed to create template" },
      { status: 500 }
    );
  }
}
