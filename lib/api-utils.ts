const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 10
const WINDOW_MS = 60_000
const MAX_BODY_BYTES = 10_000

export function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get('origin') ?? ''
  const allowed = ['https://alffy.alfinega.com', 'http://localhost:3000']
  return allowed.some((a) => origin.startsWith(a))
}

export function bodyTooLarge(body: string): boolean {
  return new TextEncoder().encode(body).length > MAX_BODY_BYTES
}
