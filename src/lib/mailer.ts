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


export const sendotpEmail = async(to: string, otp:string, name:string)=>{
  const html = `
      <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background-color: #000;
            color: #fff;
            padding: 32px 24px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 32px 24px;
          }
          .content p {
            margin: 0 0 16px 0;
            font-size: 14px;
          }
          .code-box {
            background-color: #f3f4f6;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            padding: 24px;
            text-align: center;
            margin: 24px 0;
          }
          .code {
            font-size: 36px;
            font-weight: 700;
            letter-spacing: 8px;
            color: #000;
            font-family: 'Courier New', monospace;
          }
          .footer {
            background-color: #f3f4f6;
            padding: 24px;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .footer p {
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Verify Your Email</h1>
          </div>
          <div class="content">
            <p>Hi ${name.charAt(0).toUpperCase()+ name.slice(1)},</p>
            <p>Thank you for signing up! Use the code below to verify your email address.</p>
            <!-- replaced button with 5-digit code display -->
            <div class="code-box">
              <div class="code">${otp}</div>
            </div>
            <p style="font-size: 13px; color: #6b7280;">This code expires in 10 minutes.</p>
          </div>
          <div class="footer">
            <p>If you didn't create this account, you can safely ignore this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject:"Your otp for verification",
    html: html
  });
}