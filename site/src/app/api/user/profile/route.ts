import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getDefaultUser } from "@/lib/default-user";

export async function PATCH(req: NextRequest) {
  try {
    const user = await getDefaultUser();
    const body = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: body,
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Failed to update user profile:", error);
    return NextResponse.json(
      { error: "Failed to update user profile" },
      { status: 500 }
    );
  }
}
