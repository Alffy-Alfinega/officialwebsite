import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/api-utils'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
  if (!checkRateLimit(ip)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })

  let body: { email?: string }
  try { body = await req.json() } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const { email } = body
  if (!email || !email.includes('@')) return NextResponse.json({ error: 'Valid email required' }, { status: 400 })

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Alffy Newsletter" <${process.env.SMTP_USER}>`,
      to: 'contact@alfinega.com',
      subject: `New newsletter subscriber: ${email}`,
      text: `New subscriber: ${email}\nDate: ${new Date().toISOString()}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter email error:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
