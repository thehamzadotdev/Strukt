import { NextResponse } from "next/server";
import z from "zod";


const signupSchema = z
  .object({
    email: z.string().email("please enter a valid email"),
    firstname: z.string().min(1, "please enter the firstname"),
    lastname: z.string().min(1, "please enter the lastname"),
    password: z
      .string()
      .min(8, "minimum 8 characters are require")
      .max(16, "maximum 16 characters are allowed")
      .regex(/(A-Z)/, "atleast 1 capital alphabet is required")
      .regex(/(a-z)/, "atleast 1 small alphabet is required")
      .regex(/(0-9)/, "atlest 1 number is required"),
    confirmpassword: z.string().min(1, "please enter the confirm password"),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "password doesn't match",
    path: ["confirmpassword"],
  });

  export async function POST(req:Request) {
    try {
        const body= req.json()
        const validationResult = signupSchema.safeParse(body)

        if(!validationResult.success){
            
        }
    } catch (error) {
        
    }
  }