import { NextResponse } from 'next/server'

export async function POST() {
  const key = process.env.INDEXNOW_KEY
  if (!key) return NextResponse.json({ error: 'No IndexNow key configured' }, { status: 500 })

  const urls = [
    'https://alffy.alfinega.com',
    'https://alffy.alfinega.com/services',
    'https://alffy.alfinega.com/contact',
    'https://alffy.alfinega.com/pricing',
    'https://alffy.alfinega.com/portfolio',
    'https://alffy.alfinega.com/blog',
  ]

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: 'alffy.alfinega.com', key, urlList: urls }),
    })
    return NextResponse.json({ success: true, status: res.status })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
