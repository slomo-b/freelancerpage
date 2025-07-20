import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, language } = await request.json()

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: language === "de" ? "Alle Felder sind erforderlich" : "All fields are required" },
        { status: 400 },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: language === "de" ? "Ungültige E-Mail-Adresse" : "Invalid email address" },
        { status: 400 },
      )
    }

    // In a real implementation, you would use a service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For now, we'll simulate the email sending
    // You'll need to replace this with actual email service integration

    const emailData = {
      to: "contact@mo-freelancer.ch",
      from: "noreply@mo-freelancer.ch", // This should be a verified domain
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; font-size: 12px; color: #64748b;">
            <p>This email was sent from the contact form on mo-freelancer.ch</p>
            <p>Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This email was sent from the contact form on mo-freelancer.ch
      `,
    }

    // TODO: Replace this with actual email service
    // Example with Resend:
    // const { data, error } = await resend.emails.send(emailData)
    // if (error) throw error

    console.log("Email would be sent:", emailData)

    // Simulate successful email sending
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message:
        language === "de"
          ? "Nachricht erfolgreich gesendet! Ich werde mich bald bei Ihnen melden."
          : "Message sent successfully! I will get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again or contact me directly at contact@mo-freelancer.ch",
      },
      { status: 500 },
    )
  }
}
