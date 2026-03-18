import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDefaultUser } from "@/lib/default-user";

export async function POST(req: NextRequest) {
  try {
    const user = await getDefaultUser();
    const body = await req.json();
    const { materialId, pricePerUnit } = body;

    // Get the original material
    const originalMaterial = await prisma.materialPrice.findUnique({
      where: { id: materialId },
    });

    if (!originalMaterial) {
      return NextResponse.json(
        { error: "Material not found" },
        { status: 404 }
      );
    }

    // Check if user already has an override for this material
    const existingOverride = await prisma.materialPrice.findFirst({
      where: {
        userId: user.id,
        category: originalMaterial.category,
        name: originalMaterial.name,
        species: originalMaterial.species,
        grade: originalMaterial.grade,
      },
    });

    if (existingOverride) {
      // Update existing override
      const updated = await prisma.materialPrice.update({
        where: { id: existingOverride.id },
        data: { pricePerUnit },
      });
      return NextResponse.json({ success: true, material: updated });
    } else {
      // Create new override
      const newOverride = await prisma.materialPrice.create({
        data: {
          userId: user.id,
          category: originalMaterial.category,
          name: originalMaterial.name,
          species: originalMaterial.species,
          grade: originalMaterial.grade,
          unit: originalMaterial.unit,
          pricePerUnit,
          supplier: originalMaterial.supplier,
        },
      });
      return NextResponse.json({ success: true, material: newOverride });
    }
  } catch (error) {
    console.error("Failed to save material override:", error);
    return NextResponse.json(
      { error: "Failed to save material override" },
      { status: 500 }
    );
  }
}
