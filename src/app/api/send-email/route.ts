// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    const mailOptions: any = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Request: ${formData.get("purpose")}`,
      text: `
        Name: ${formData.get("name")}
        Email: ${formData.get("email")}
        Phone: ${formData.get("phone")}
        Message: ${formData.get("message")}
      `,
      attachments: formData.get("attachment")
        ? [
            {
              filename: "project-brief",
              content: formData.get("attachment"),
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
