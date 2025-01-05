import { mysqlPrisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export async function POST(request : Request) {
    console.log("Request", request);
    try {
        const body = await request.json();
        const {name, email,password} = body;

        if(!name || !email ||!password) {
            NextResponse.json({error: "Name and email are required"}, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await mysqlPrisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        });

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error("Error Createing User", error);
        return NextResponse.json({error: "Error creating user"}, { status: 500 });
    }
}

export async function GET() {
    try {
      // 랜덤 데이터를 가져옵니다.
      const userData = await mysqlPrisma.user.findManyRandom(5, {
        select: {
          id: true,
          name: true,
        },
      });
  
      // JSON 응답으로 반환합니다.
      return NextResponse.json(userData);
    } catch (error) {
      console.error("Error fetching random users:", error);
      return NextResponse.json({ error: "Failed to fetch random users" }, { status: 500 });
    }
  }
  