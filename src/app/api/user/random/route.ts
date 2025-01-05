import { mysqlPrisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 랜덤 데이터를 가져옵니다.
    const userData = await mysqlPrisma.user.findManyRandom(2, {
      select: {
        name: true,
        email: true
      },
    });

    // JSON 응답으로 반환합니다.
    return NextResponse.json(userData);
  } catch (error) {
    console.error("Error fetching random users:", error);
    return NextResponse.json({ error: "Failed to fetch random users" }, { status: 500 });
  }
}
