import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit, bodyTooLarge } from '@/lib/api-utils'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
  if (!checkRateLimit(ip)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  const raw = await req.text()
  if (bodyTooLarge(raw)) return NextResponse.json({ error: 'Body too large' }, { status: 413 })

  let body: Record<string, string>
  try { body = JSON.parse(raw) } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const { name, email, service, budget, message } = body
  if (!name || !email || !message) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Alffy Website" <${process.env.SMTP_USER}>`,
      to: 'contact@alfinega.com',
      replyTo: email,
      subject: `New enquiry from ${name} — ${service || 'General'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
