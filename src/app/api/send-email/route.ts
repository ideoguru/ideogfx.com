// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL ?? "mail@ideogfx.com",
        pass: process.env.ADMIN_EMAIL_PASSWORD ?? "gizyvtjtielkcuhp",
      },
    });

    const attachment = formData.get("attachment");
    let attachmentBuffer: Buffer | null = null;
    let attachmentFilename = "project-brief";

    if (attachment instanceof File) {
      attachmentBuffer = Buffer.from(await attachment.arrayBuffer());
      attachmentFilename = attachment.name || attachmentFilename;
    }

    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Request: ${formData.get("purpose")}`,
      text: `
        Name: ${formData.get("name")}
        Email: ${formData.get("email")}
        Phone: ${formData.get("phone")}
        Message: ${formData.get("message")}
      `,
      attachments: attachmentBuffer
        ? [
            {
              filename: attachmentFilename,
              content: attachmentBuffer,
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
