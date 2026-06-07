import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { checkRateLimit, isAllowedOrigin, validateBodySize } from '@/lib/api-utils'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const { allowed, remaining } = checkRateLimit(`newsletter:${ip}`)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
  }
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const raw = await req.text()
    if (!validateBodySize(raw)) {
      return NextResponse.json({ error: 'Request too large' }, { status: 413 })
    }
    const body = JSON.parse(raw)
    const { email } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email address required.' }, { status: 400 })
    }

    const safeEmail = String(email)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')

    // Notify the team of new subscriber
    await transporter.sendMail({
      from: `"Alffy Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'hello@alfinega.com',
      subject: `New newsletter subscriber: ${safeEmail}`,
      text: `New subscriber: ${safeEmail}\n\nAdd to your mailing list.`,
      html: `
        <div style="font-family:sans-serif;background:#04040C;color:#E4E4F0;padding:32px;border-radius:12px;border:1px solid #1C1C34;">
          <p style="color:#555;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-family:monospace;">New Newsletter Subscriber</p>
          <h2 style="color:#2C6FED;margin:8px 0 24px;">${safeEmail}</h2>
          <p style="color:#aaa;font-size:14px;">Add this address to your mailing list.</p>
          <p style="color:#444;font-size:11px;margin-top:32px;font-family:monospace;">alffy.alfinega.com</p>
        </div>
      `,
    })

    // Confirm subscription to the subscriber
    await transporter.sendMail({
      from: `"Alffy (Alfinega)" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `You're subscribed — Alffy Newsletter`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#04040C;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#04040C;padding:40px 20px;">
            <tr><td>
              <table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#0A0A16;border:1px solid #1C1C34;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:32px 40px;background:linear-gradient(135deg,#2C6FED,#1A52C4);">
                    <p style="margin:0;color:#fff;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;font-family:'Courier New',monospace;">Alffy (Alfinega)</p>
                    <h1 style="margin:8px 0 0;color:#fff;font-size:24px;font-weight:700;">You're on the list.</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 40px;">
                    <p style="color:#AAAACC;font-size:15px;line-height:1.7;margin:0 0 20px;">
                      Thanks for subscribing. You'll hear from us monthly with practical insights on web design, SEO, branding, and digital marketing — written for East African businesses.
                    </p>
                    <p style="color:#AAAACC;font-size:15px;line-height:1.7;margin:0 0 24px;">
                      No spam. Unsubscribe anytime by replying to any email.
                    </p>
                    <p style="color:#555;font-size:13px;margin:0;">— The Alffy Team<br/>Makindye, Kampala, Uganda</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 40px;border-top:1px solid #1C1C34;">
                    <p style="margin:0;color:#333;font-size:11px;font-family:'Courier New',monospace;">alffy.alfinega.com · hello@alfinega.com</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
      text: `You're subscribed to the Alffy newsletter.\n\nYou'll receive monthly insights on web design, SEO, branding, and digital marketing. No spam — unsubscribe anytime by replying to any email.\n\n— The Alffy Team\nhello@alfinega.com | alffy.alfinega.com`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json({ error: 'Signup failed. Please try again or email us directly.' }, { status: 500 })
  }
}
