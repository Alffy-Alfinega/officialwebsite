import { NextResponse } from 'next/server'
import sitemap from '@/app/sitemap'

const INDEXNOW_KEY = 'd9b8c7139d7c4d7a8ef313315ace4cd5'
const HOST = 'https://alffy.alfinega.com'
const KEY_LOCATION = `${HOST}/${INDEXNOW_KEY}.txt`

/**
 * POST /api/indexnow
 *
 * Body (optional):
 *   { "urls": ["https://alffy.alfinega.com/about", ...] }
 *
 * If no body or empty urls array → submits every URL from the sitemap.
 * Protected by a simple bearer token (INDEXNOW_SECRET env var).
 * If INDEXNOW_SECRET is not set, allows unauthenticated calls (fine for non-destructive pings).
 */
export async function POST(req: Request) {
  // Optional auth
  const secret = process.env.INDEXNOW_SECRET
  if (secret) {
    const auth = req.headers.get('authorization')
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  // Determine URLs to submit
  let urls: string[] = []
  try {
    const body = await req.json().catch(() => null)
    if (body?.urls?.length) {
      urls = body.urls
    }
  } catch {
    // no body — fall through to sitemap
  }

  // Fallback: pull every URL from the sitemap
  if (urls.length === 0) {
    const entries = sitemap()
    urls = entries.map((e) => e.url)
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs to submit' }, { status: 400 })
  }

  // IndexNow accepts batch submissions up to 10,000 URLs
  const payload = {
    host: 'alffy.alfinega.com',
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  const results: Record<string, number> = {}

  // Submit to both Bing and Yandex (they share IndexNow but each has their own endpoint)
  for (const engine of ['www.bing.com', 'yandex.com']) {
    try {
      const res = await fetch(`https://${engine}/indexnow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      })
      results[engine] = res.status
    } catch (err) {
      results[engine] = 0
    }
  }

  return NextResponse.json({
    submitted: urls.length,
    urls,
    results,
  })
}
