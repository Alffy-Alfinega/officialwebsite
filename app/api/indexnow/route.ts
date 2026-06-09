/**
 * ============================================================
 * IndexNow API — POST /api/indexnow
 * ============================================================
 * Pings search engines (Bing, Yandex) via the IndexNow protocol
 * to notify them that the site's content has changed and should
 * be re-crawled.
 *
 * IndexNow is an open protocol that lets websites instantly
 * notify search engines about content changes. Bing and Yandex
 * both accept IndexNow pings at their respective endpoints.
 *
 * Request body (JSON, optional):
 *   { "urls": ["https://alffy.alfinega.com/about", ...] }
 *
 * If no body is sent or the urls array is empty, the API
 * automatically submits every URL from the project's sitemap.
 *
 * Auth (optional):
 *   Send header: Authorization: Bearer <INDEXNOW_SECRET>
 *   If INDEXNOW_SECRET env var is not set, auth is skipped.
 *
 * Response (JSON):
 *   { submitted: number, urls: string[], results: { "www.bing.com": 200, "yandex.com": 200 } }
 *
 * Flow:
 *   1. Optional bearer-token authentication
 *   2. Parse optional request body for specific URLs
 *   3. If no URLs provided, pull all URLs from the sitemap
 *   4. Validate at least one URL exists
 *   5. Build the standard IndexNow payload
 *   6. POST to Bing and Yandex IndexNow endpoints
 *   7. Return results with HTTP status for each engine
 * ============================================================
 */

// NextResponse: helper to build JSON responses with status codes
import { NextResponse } from 'next/server'

// sitemap(): a function defined in app/sitemap.ts that returns all
// site URLs as an array of objects with a .url property.
// Used as a fallback when no specific URLs are provided.
import sitemap from '@/app/sitemap'

// --- IndexNow configuration -------------------------------------------------
// INDEXNOW_KEY: A unique key registered with IndexNow providers.
//   The key must also be accessible at https://domain.com/<key>.txt
//   so search engines can verify domain ownership.
const INDEXNOW_KEY = 'd9b8c7139d7c4d7a8ef313315ace4cd5'
const HOST = 'https://alffy.alfinega.com'
const KEY_LOCATION = `${HOST}/${INDEXNOW_KEY}.txt`

/**
 * POST /api/indexnow
 *
 * The main request handler. Note: This uses `Request` (standard Fetch API)
 * rather than `NextRequest` because it doesn't need Next.js extended features
 * like geolocation or cookies.
 *
 * Body (optional):
 *   { "urls": ["https://alffy.alfinega.com/about", ...] }
 *
 * If no body or empty urls array → submits every URL from the sitemap.
 * Protected by a simple bearer token (INDEXNOW_SECRET env var).
 * If INDEXNOW_SECRET is not set, allows unauthenticated calls.
 */
export async function POST(req: Request) {
  // --- Step 1: Optional authentication ---
  // If INDEXNOW_SECRET is configured in environment variables, the request
  // must include an Authorization: Bearer <secret> header.
  // This prevents unauthorized parties from triggering re-crawls.
  // If INDEXNOW_SECRET is not set, the endpoint is open (acceptable because
  // triggering a re-crawl is non-destructive — it only notifies search engines).
  const secret = process.env.INDEXNOW_SECRET
  if (secret) {
    const auth = req.headers.get('authorization')
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  // --- Step 2: Parse request body for specific URLs ---
  // The body is optional. .catch(() => null) silently handles the case
  // where there is no body (e.g., Content-Type is not JSON) or the body
  // is empty — it sets body to null instead of throwing.
  let urls: string[] = []
  try {
    const body = await req.json().catch(() => null)
    if (body?.urls?.length) {
      urls = body.urls
    }
  } catch {
    // No JSON body — this catch is a safety net. The .catch() on the
    // previous line should handle parse failures, but this outer try/catch
    // ensures we never crash. Execution falls through to the sitemap fallback.
  }

  // --- Step 3: Fallback — pull every URL from the sitemap ---
  // If the caller didn't provide specific URLs, submit the entire sitemap.
  // This is useful for a "re-submit everything" ping after a major update.
  if (urls.length === 0) {
    const entries = sitemap()
    urls = entries.map((e) => e.url)
  }

  // --- Step 4: Validate we have at least one URL ---
  // If both the body and sitemap were empty, return an error.
  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs to submit' }, { status: 400 })
  }

  // --- Step 5: Build the IndexNow payload ---
  // The IndexNow API expects this exact shape:
  //   host        — the site's root domain
  //   key         — the registered IndexNow key
  //   keyLocation — URL where the key file is publicly accessible
  //   urlList     — array of URLs to notify
  const payload = {
    host: 'alffy.alfinega.com',
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }

  const results: Record<string, number> = {}

  // --- Step 6: Submit to search engine endpoints ---
  // IndexNow was originally developed by Bing and Yandex jointly.
  // Both accept the same payload format at their respective endpoints.
  // We submit to both so the site is indexed faster on both engines.
  for (const engine of ['www.bing.com', 'yandex.com']) {
    try {
      const res = await fetch(`https://${engine}/indexnow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      })
      results[engine] = res.status
    } catch (err) {
      // If the fetch itself fails (network error, DNS failure, etc.),
      // record status 0 to indicate the engine was unreachable.
      results[engine] = 0
    }
  }

  // --- Step 7: Return results ---
  // Reports how many URLs were submitted, which URLs, and the HTTP
  // status code returned by each search engine.
  return NextResponse.json({
    submitted: urls.length,
    urls,
    results,
  })
}
