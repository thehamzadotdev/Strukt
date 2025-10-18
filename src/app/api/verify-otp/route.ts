import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST (req:Request) {
    try {
        const {email, otp}= await req.json()

        const user =await db.user.findUnique({
            where:{
                email
            }
        })

        if(!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        if(user.otp !== otp) return NextResponse.json({ error: "invalid otp" }, { status: 400 });
        if (new Date() > new Date(user.expiresAt)) return NextResponse.json({ error: "OTP expired" }, { status: 400 });

        await db.user.update({
            where:{email},
            data:{
                isVerified: true
            }
        })
        
    } catch (error) {
            console.error("otp error:", error);
            return NextResponse.json(
              { user: null, message: "Internal server error" },
              { status: 500 }
            );
    }
}