import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { checkRateLimit, isAllowedOrigin, validateBodySize } from '@/lib/api-utils'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

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
  const { allowed, remaining } = checkRateLimit(`contact:${ip}`)
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
    const { name, email, service, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeService = escapeHtml(String(service || ''))
    const safeBudget = escapeHtml(String(budget || ''))
    const safeMessage = escapeHtml(String(message))

    const html = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8" /></head>
      <body style="margin:0;padding:0;background:#04040C;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#04040C;padding:40px 20px;">
          <tr><td>
            <table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#0A0A16;border:1px solid #1C1C34;border-radius:12px;overflow:hidden;">
              <!-- Header -->
              <tr>
                <td style="padding:32px 40px;background:linear-gradient(135deg,#2C6FED,#1A52C4);">
                  <p style="margin:0;color:#fff;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;font-family:'Courier New',monospace;">New Enquiry</p>
                  <h1 style="margin:8px 0 0;color:#fff;font-size:24px;font-weight:700;">Contact Form Submission</h1>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding:36px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${[
                      ['Name', safeName],
                      ['Email', safeEmail],
                      ['Service', safeService || 'Not specified'],
                      ['Budget', safeBudget || 'Not specified'],
                    ].map(([label, value]) => `
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #1C1C34;vertical-align:top;">
                        <p style="margin:0;color:#555;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-family:'Courier New',monospace;">${label}</p>
                        <p style="margin:4px 0 0;color:#E4E4F0;font-size:15px;">${value}</p>
                      </td>
                    </tr>`).join('')}
                    <tr>
                      <td style="padding:24px 0 0;">
                        <p style="margin:0 0 8px;color:#555;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-family:'Courier New',monospace;">Message</p>
                        <div style="background:#04040C;border:1px solid #1C1C34;border-radius:8px;padding:16px;color:#AAAACC;font-size:14px;line-height:1.7;white-space:pre-wrap;">${safeMessage}</div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="padding:20px 40px;border-top:1px solid #1C1C34;">
                  <p style="margin:0;color:#444;font-size:11px;font-family:'Courier New',monospace;">
                    Sent from alffy.alfinega.com · Makindye, Kampala, Uganda
                  </p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: `"Alffy Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'hello@alfinega.com',
      replyTo: email,
      subject: `New enquiry from ${safeName}${safeService ? ` — ${safeService}` : ''}`,
      html,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nService: ${safeService || 'Not specified'}\nBudget: ${safeBudget || 'Not specified'}\n\n${safeMessage}`,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Alffy (Alfinega)" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We've received your message — Alffy`,
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
                    <h1 style="margin:8px 0 0;color:#fff;font-size:24px;font-weight:700;">Thank you, ${safeName}.</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 40px;">
                    <p style="color:#AAAACC;font-size:15px;line-height:1.7;margin:0 0 20px;">We've received your message and will get back to you within 24 hours.</p>
                    <p style="color:#AAAACC;font-size:15px;line-height:1.7;margin:0 0 24px;">In the meantime, feel free to reach us directly at <a href="mailto:hello@alfinega.com" style="color:#2C6FED;">hello@alfinega.com</a> or on WhatsApp at <a href="https://wa.me/256747113059" style="color:#2C6FED;">+256 747 113 059</a>.</p>
                    <p style="color:#555;font-size:13px;margin:0;">— The Alffy Team<br/>Makindye, Kampala, Uganda</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 40px;border-top:1px solid #1C1C34;">
                    <p style="margin:0;color:#333;font-size:11px;font-family:'Courier New',monospace;">alffy.alfinega.com</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
      text: `Hi ${safeName},\n\nThanks for reaching out. We've received your message and will get back to you within 24 hours.\n\n— The Alffy Team\nhello@alfinega.com | +256 747 113 059\nMakindye, Kampala, Uganda`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again or email us directly.' }, { status: 500 })
  }
}
