/**
 * ============================================================
 * Newsletter API — POST /api/newsletter
 * ============================================================
 * Accepts email addresses for the newsletter subscription.
 * Sends a notification to the team and a confirmation email
 * to the subscriber.
 *
 * Request body (JSON):
 *   { email: "user@example.com" }
 *
 * Response (JSON):
 *   Success → { success: true }
 *   Error   → { error: "message" }  (with appropriate HTTP status)
 *
 * Flow:
 *   1. Rate-limit check by IP
 *   2. CORS/origin check
 *   3. Body size validation
 *   4. Parse JSON & validate email format
 *   5. Sanitize email (escape HTML)
 *   6. Notify the team of new subscriber via email
 *   7. Send confirmation email to the subscriber
 *   8. Return { success: true }
 *
 * Any failure returns an error JSON with an appropriate HTTP status.
 * ============================================================
 */

// NextRequest: the incoming HTTP request object (Next.js extended version)
// NextResponse: helper to build JSON responses with status codes
import { NextRequest, NextResponse } from 'next/server'

// nodemailer: Node.js library for sending emails over SMTP
import nodemailer from 'nodemailer'

// checkRateLimit: prevents spam by limiting requests per IP
// isAllowedOrigin: ensures requests come from the site's own domain (CORS protection)
// validateBodySize: rejects oversized request bodies
import { checkRateLimit, isAllowedOrigin, validateBodySize } from '@/lib/api-utils'

// --- SMTP Transporter -------------------------------------------------------
// Reusable email sender connection (same pattern as the contact API).
// Configured via environment variables:
//   SMTP_HOST  — email server address (default: smtp.gmail.com)
//   SMTP_PORT  — email server port     (default: 587)
//   SMTP_USER  — email account login
//   SMTP_PASS  — email account password
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// --- POST /api/newsletter ---------------------------------------------------
// Called when a visitor submits their email in the newsletter sign-up form.
//
// Request flow:
//   1. Extract IP from headers and check rate limit
//   2. Validate request origin (CORS / CSRF protection)
//   3. Read body, check size, parse JSON
//   4. Validate email format with a basic regex
//   5. Sanitize the email string (escape HTML characters)
//   6. Notify the team via email about the new subscriber
//   7. Send a "you're subscribed" confirmation to the subscriber
//   8. Return { success: true }
//
// The entire try block is one atomic unit — any error is caught and returns 500.
export async function POST(req: NextRequest) {
  // --- Step 1: Rate limiting ---
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const { allowed, remaining } = checkRateLimit(`newsletter:${ip}`)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
  }

  // --- Step 2: CORS / origin check ---
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    // --- Step 3: Read body text, validate size, parse JSON ---
    const raw = await req.text()
    if (!validateBodySize(raw)) {
      return NextResponse.json({ error: 'Request too large' }, { status: 413 })
    }
    const body = JSON.parse(raw)
    const { email } = body

    // --- Step 4: Validate email format ---
    // Simple regex check — ensures there's at least one character before @,
    // a domain with at least one dot, and no spaces.
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email address required.' }, { status: 400 })
    }

    // --- Step 5: Sanitize email (escape HTML characters) ---
    // Even though email addresses normally don't contain HTML, we sanitize
    // anyway to prevent XSS if this value is rendered in web views later.
    const safeEmail = String(email)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')

    // --- Step 6: Notify the team ---
    // Sends an email to CONTACT_TO with the subscriber's address so the
    // team knows to add them to the mailing list.
    await transporter.sendMail({
      from: `"Alffy Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'contact@alfinega.com',
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

    // --- Step 7: Send confirmation to the subscriber ---
    // A welcome email so the visitor knows their subscription was successful.
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
                    <p style="margin:0;color:#333;font-size:11px;font-family:'Courier New',monospace;">alffy.alfinega.com · contact@alfinega.com</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
      text: `You're subscribed to the Alffy newsletter.\n\nYou'll receive monthly insights on web design, SEO, branding, and digital marketing. No spam — unsubscribe anytime by replying to any email.\n\n— The Alffy Team\ncontact@alfinega.com | alffy.alfinega.com`,
    })

    // --- Step 8: Return success ---
    return NextResponse.json({ success: true })

  } catch (error) {
    // --- Error handling ---
    // Logs the real error server-side but returns a generic message to
    // the client for security reasons (don't leak internal details).
    console.error('Newsletter signup error:', error)
    return NextResponse.json({ error: 'Signup failed. Please try again or email us directly.' }, { status: 500 })
  }
}
