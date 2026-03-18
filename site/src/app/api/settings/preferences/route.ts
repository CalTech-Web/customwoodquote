import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDefaultUser } from "@/lib/default-user";

export async function PUT(req: NextRequest) {
  try {
    const user = await getDefaultUser();
    const body = await req.json();
    const { showDetailedBreakdown } = body;

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        showDetailedBreakdown,
      },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Failed to update quote preferences:", error);
    return NextResponse.json(
      { error: "Failed to update quote preferences" },
      { status: 500 }
    );
  }
}
