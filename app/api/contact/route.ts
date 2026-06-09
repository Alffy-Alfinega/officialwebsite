/**
 * ============================================================
 * Contact Form API — POST /api/contact
 * ============================================================
 * Receives a contact form submission from the website, sends
 * a notification email to the team, and sends an auto-reply
 * confirmation to the visitor.
 *
 * Request body (JSON):
 *   { name, email, service?, budget?, message }
 *
 * Response (JSON):
 *   Success → { success: true }
 *   Error   → { error: "message" }  (with appropriate HTTP status)
 *
 * Flow:
 *   1. Rate-limit check by IP
 *   2. CORS/origin check
 *   3. Body size validation
 *   4. Parse & validate required fields
 *   5. Sanitize all user input (escape HTML)
 *   6. Send notification email to the team
 *   7. Send auto-reply confirmation to the visitor
 *   8. Return { success: true }
 *
 * Any failure at any step returns an error JSON response with
 * an appropriate HTTP status code.
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

/**
 * escapeHtml
 * Converts special HTML characters to their safe entity equivalents.
 * This prevents XSS (cross-site scripting) attacks when user input
 * is rendered inside HTML email templates.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// --- SMTP Transporter -------------------------------------------------------
// Creates a reusable email sender connection. The transporter object is created
// once at module scope (not per-request) so the connection can be reused.
//
// Environment variables used:
//   SMTP_HOST — email server address (default: smtp.gmail.com)
//   SMTP_PORT — port (default: 587 for STARTTLS — insecure start, then upgrade)
//   SMTP_USER — the sender's email address (also used as the login username)
//   SMTP_PASS — the sender's email password or app-specific password
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// --- POST /api/contact -------------------------------------------------------
// Named export: Next.js App Router matches HTTP method to the export name.
// Called when a visitor submits the contact form on the website.
//
// Request flow:
//   1. Extract the visitor's real IP from reverse-proxy headers
//   2. Rate-limit check — blocks IPs that have sent too many requests (429)
//   3. CORS/origin check — rejects requests from unknown domains (403)
//   4. Read body text & validate size — rejects oversized payloads (413)
//   5. Parse JSON & check required fields (name, email, message) (400)
//   6. Sanitize all user-supplied strings (escape HTML to prevent XSS)
//   7. Build & send notification email to the team
//   8. Build & send auto-reply email to the visitor
//   9. Return { success: true }
//
// The entire try block is one atomic unit — any error is caught and returns 500.
export async function POST(req: NextRequest) {
  // --- Step 1: Read the visitor's real IP from headers ---
  // When behind a reverse proxy (Vercel, Cloudflare, Nginx), req.ip may be
  // the proxy's IP. x-forwarded-for contains the original client IP chain.
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  // --- Step 2: Rate-limit by IP ---
  // checkRateLimit uses an in-memory counter keyed by "contact:<ip>".
  // Returns { allowed: boolean, remaining: number }.
  // If the IP exceeded the limit, immediately return 429.
  const { allowed, remaining } = checkRateLimit(`contact:${ip}`)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
  }

  // --- Step 3: CORS / origin validation ---
  // Prevents external sites from submitting to this endpoint (CSRF protection).
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    // --- Step 4: Read body as raw text and check size ---
    // We read as text first (not JSON) so we can reject oversized requests
    // before spending time parsing them.
    const raw = await req.text()
    if (!validateBodySize(raw)) {
      return NextResponse.json({ error: 'Request too large' }, { status: 413 })
    }

    // --- Step 5: Parse JSON and destructure fields ---
    const body = JSON.parse(raw)
    const { name, email, service, budget, message } = body

    // --- Step 6: Validate required fields ---
    // name, email, and message are mandatory. service and budget are optional.
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // --- Step 7: Sanitize all user input ---
    // Prevents malicious HTML/JS from being rendered in the email body.
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

    // --- Step 8: Send notification email to the team ---
    // CONTACT_TO env var specifies who receives the notification.
    // Falls back to contact@alfinega.com if not configured.
    // replyTo is set to the visitor's email so clicking Reply in the
    // email client will address the visitor directly.
    await transporter.sendMail({
      from: `"Alffy Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'contact@alfinega.com',
      replyTo: email,
      subject: `New enquiry from ${safeName}${safeService ? ` — ${safeService}` : ''}`,
      html,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nService: ${safeService || 'Not specified'}\nBudget: ${safeBudget || 'Not specified'}\n\n${safeMessage}`,
    })

    // --- Step 9: Send auto-reply confirmation to the visitor ---
    // A friendly "we got your message" email so the visitor knows
    // the submission was received successfully.
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
                    <p style="color:#AAAACC;font-size:15px;line-height:1.7;margin:0 0 24px;">In the meantime, feel free to reach us directly at <a href="mailto:contact@alfinega.com" style="color:#2C6FED;">contact@alfinega.com</a> or on WhatsApp at <a href="https://wa.me/256747113059" style="color:#2C6FED;">+256 747 113 059</a>.</p>
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
      text: `Hi ${safeName},\n\nThanks for reaching out. We've received your message and will get back to you within 24 hours.\n\n— The Alffy Team\ncontact@alfinega.com | +256 747 113 059\nMakindye, Kampala, Uganda`,
    })

    // --- Step 10: Return success ---
    // Every step completed — notify the client that their message was sent.
    return NextResponse.json({ success: true })

  } catch (error) {
    // --- Error handling ---
    // If anything inside the try block throws (network failure, SMTP down,
    // invalid JSON, missing env var), we catch it here and return a generic
    // 500 error. The real error details are logged server-side for debugging
    // but NOT exposed to the client (security best practice).
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again or email us directly.' }, { status: 500 })
  }
}
