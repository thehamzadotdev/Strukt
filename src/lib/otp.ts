import bcrypt from "bcryptjs";
import { ota } from "zod/v4/locales";


export  const generateotp =()=>{
const otp = Math.floor(Math.random()*90000)
return otp
}

export  const hashotp = async (otp: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(otp,salt)
};

export const verifyotp =async(otp: string, hash: string)=>{
    return await bcrypt.compare(otp,hash)
}


