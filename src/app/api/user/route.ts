import { db } from "@/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import z, { date } from "zod";

const signupSchema = z
  .object({
    email: z.string().email("please enter a valid email"),
    firstname: z.string().min(1, "please enter the firstname"),
    lastname: z.string().min(1, "please enter the lastname"),
    username:z.string().min(1,"enter a username"),
    password: z
      .string()
      .min(8, "minimum 8 characters are require")
      .max(16, "maximum 16 characters are allowed")
      .regex(/[A-Z]/, "atleast 1 capital alphabet is required")
      .regex(/[a-z]/, "atleast 1 small alphabet is required")
      .regex(/[0-9]/, "atlest 1 number is required"),
    confirmpassword: z.string().min(1, "please enter the confirm password"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "password doesn't match",
    path: ["confirmpassword"],
  });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validationResult = signupSchema.safeParse(body);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map(
        (err:any) => `${err.path.join(".")}: ${err.message}`
      );
      return NextResponse.json(
        { user: null, message: errorMessages.join(", ") },
        { status: 400 }
      );
    }

    const { username,firstname, lastname, email, password, confirmpassword } = validationResult.data;

    const existingUser = await db.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        {
          status: 400,
        }
      );
    }
    const hashpassword = await bcrypt.hash(password,10)


 const newUser = await db.user.create({
   data: {
     username,
     firstname,
     lastname,
     email,
     password: hashpassword,
     confirmpassword: hashpassword,
     createdat: new Date(),
     updatedat: new Date(),
   },
 });
   const { password: _, ...userWithoutPassword } = newUser;

   return NextResponse.json(
     { user: userWithoutPassword, message: "User created successfully" },
     { status: 201 }
   );

  } catch (error) {

        console.error("Signup error:", error);
    return NextResponse.json(
      { user: null, message: "Internal server error" },
      { status: 500 }
    );
  }
  }

