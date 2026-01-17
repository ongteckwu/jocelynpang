import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.RESEND_TO_EMAIL || "jocelynpang95@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, company, enquiryType, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const enquiryLabel =
      enquiryType === "consultancy"
        ? "Consultancy"
        : enquiryType === "speaking"
        ? "Speaking Engagement"
        : enquiryType === "both"
        ? "Consultancy & Speaking"
        : "General";

    await resend.emails.send({
      from: "Jocelyn Pang Website <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New ${enquiryLabel} Enquiry from ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f9f8f6; font-family: Georgia, 'Times New Roman', serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f8f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color: #5c4a3d; padding: 32px 40px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: normal;">New ${enquiryLabel} Enquiry</h1>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Contact Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e6e3;">
                    <span style="color: #8b7355; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</span>
                    <p style="margin: 8px 0 0 0; color: #2d2a26; font-size: 16px;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e6e3;">
                    <span style="color: #8b7355; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                    <p style="margin: 8px 0 0 0;"><a href="mailto:${email}" style="color: #5c4a3d; font-size: 16px;">${email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e6e3;">
                    <span style="color: #8b7355; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</span>
                    <p style="margin: 8px 0 0 0; color: #2d2a26; font-size: 16px;">${company || "Not provided"}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e8e6e3;">
                    <span style="color: #8b7355; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Interested In</span>
                    <p style="margin: 8px 0 0 0; color: #2d2a26; font-size: 16px;">${enquiryLabel}</p>
                  </td>
                </tr>
              </table>
              <!-- Message -->
              <div>
                <span style="color: #8b7355; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</span>
                <p style="margin: 12px 0 0 0; color: #2d2a26; font-size: 16px; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</p>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f8f6; padding: 24px 40px; text-align: center;">
              <p style="margin: 0; color: #8b7355; font-size: 13px;">Sent from jocelynpang.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
