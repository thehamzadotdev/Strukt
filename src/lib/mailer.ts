import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


export const sendotpEmail = async(to: string, otp:string)=>{
  const html = `
    <div style="font-family: Inter, system-ui; line-height:1.4">
      <h3>Verification code</h3>
      <p>Your verification code is: <strong style="font-size:20px">${otp}</strong></p>
      <p>Code expires in 10 minutes.</p>
    </div>
  `;
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject:"your otp for verification"
  });
}