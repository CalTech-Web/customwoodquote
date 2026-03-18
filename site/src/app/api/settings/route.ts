import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDefaultUser } from "@/lib/default-user";

export async function GET(req: NextRequest) {
  try {
    const defaultUser = await getDefaultUser();

    const user = await prisma.user.findUnique({
      where: { id: defaultUser.id },
      select: {
        businessName: true,
        logo: true,
        address: true,
        phone: true,
        email: true,
        shopRate: true,
        overheadRate: true,
        defaultMargin: true,
        showDetailedBreakdown: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Failed to fetch user settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}
