const rateMap = new Map<string, { count: number; resetAt: number }>()

const MAX_BODY_BYTES  = 10_000
const RATE_LIMIT      = 10
const RATE_WINDOW_MS  = 60_000

export function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now   = Date.now()
  const entry = rateMap.get(key)

  if (!entry || now > entry.resetAt) {
    rateMap.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return { allowed: true, remaining: RATE_LIMIT - 1 }
  }

  if (entry.count >= RATE_LIMIT) return { allowed: false, remaining: 0 }

  entry.count++
  return { allowed: true, remaining: RATE_LIMIT - entry.count }
}

export function isAllowedOrigin(request: Request): boolean {
  const origin  = request.headers.get('origin')
  const referer = request.headers.get('referer')
  const allowed = ['https://alffy.alfinega.com', 'http://localhost:3000']

  if (origin  && allowed.some((a) => origin.startsWith(a)))  return true
  if (referer && allowed.some((a) => referer.startsWith(a))) return true
  return false
}

export function validateBodySize(body: string): boolean {
  return new TextEncoder().encode(body).length <= MAX_BODY_BYTES
}
