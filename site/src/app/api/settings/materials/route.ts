import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDefaultUser } from "@/lib/default-user";

export async function GET() {
  try {
    const user = await getDefaultUser();

    // Get all system materials
    const systemMaterials = await prisma.materialPrice.findMany({
      where: { userId: null },
      orderBy: [{ category: "asc" }, { name: "asc" }],
    });

    // Get user's overrides
    const userOverrides = await prisma.materialPrice.findMany({
      where: { userId: user.id },
      orderBy: [{ category: "asc" }, { name: "asc" }],
    });

    // Combine: user overrides + system materials (excluding ones with user overrides)
    const userOverrideNames = new Set(
      userOverrides.map((m) => `${m.category}-${m.name}-${m.species || ""}-${m.grade || ""}`)
    );

    const systemMaterialsFiltered = systemMaterials.filter(
      (m) => !userOverrideNames.has(`${m.category}-${m.name}-${m.species || ""}-${m.grade || ""}`)
    );

    const allMaterials = [
      ...userOverrides.map((m) => ({ ...m, isUserOverride: true })),
      ...systemMaterialsFiltered.map((m) => ({ ...m, isUserOverride: false })),
    ];

    return NextResponse.json(allMaterials);
  } catch (error) {
    console.error("Failed to fetch materials:", error);
    return NextResponse.json(
      { error: "Failed to fetch materials" },
      { status: 500 }
    );
  }
}
