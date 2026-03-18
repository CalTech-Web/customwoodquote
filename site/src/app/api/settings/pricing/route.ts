import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDefaultUser } from "@/lib/default-user";

export async function PUT(req: NextRequest) {
  try {
    const user = await getDefaultUser();
    const body = await req.json();
    const { shopRate, overheadRate, defaultMargin, taxRate } = body;

    // Validation
    if (shopRate < 20 || shopRate > 200) {
      return NextResponse.json(
        { error: "Shop rate must be between $20 and $200 per hour" },
        { status: 400 }
      );
    }

    if (overheadRate < 5 || overheadRate > 100) {
      return NextResponse.json(
        { error: "Overhead rate must be between $5 and $100 per hour" },
        { status: 400 }
      );
    }

    if (defaultMargin < 5 || defaultMargin > 50) {
      return NextResponse.json(
        { error: "Default margin must be between 5% and 50%" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        shopRate,
        overheadRate,
        defaultMargin,
      },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Failed to update pricing defaults:", error);
    return NextResponse.json(
      { error: "Failed to update pricing defaults" },
      { status: 500 }
    );
  }
}
