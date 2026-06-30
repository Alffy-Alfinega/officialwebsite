import { NextResponse } from 'next/server'

// IndexNow key — not a secret; the protocol requires it to be publicly
// readable at https://alffy.alfinega.com/<key>.txt for ownership verification.
// Falls back to the committed default below if INDEXNOW_KEY is unset, so this
// route works in every environment without requiring extra Vercel config.
const DEFAULT_KEY = '20cd4f3aa8bd66f6002630d96601bb46'
const HOST = 'alffy.alfinega.com'

const URLS = [
  `https://${HOST}`,
  `https://${HOST}/services`,
  `https://${HOST}/contact`,
  `https://${HOST}/pricing`,
  `https://${HOST}/portfolio`,
  `https://${HOST}/blog`,
]

export async function POST() {
  const key = process.env.INDEXNOW_KEY || DEFAULT_KEY

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key,
        keyLocation: `https://${HOST}/${key}.txt`,
        urlList: URLS,
      }),
    })

    const bodyText = await res.text().catch(() => '')

    if (!res.ok) {
      return NextResponse.json(
        { error: `IndexNow API returned HTTP ${res.status}`, body: bodyText },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true, status: res.status, submitted: URLS.length })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
