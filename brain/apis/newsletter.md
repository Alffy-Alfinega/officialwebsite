# POST /api/newsletter

Triggered by [[components/overview#UI Components\|NewsletterForm]] in the Footer. Shared security from [[apis/overview#Shared Security Utilities]].

## Request
```json
{ "email": "required, must be valid email format" }
```

## Security (same as [[apis/contact]])
- Rate limited: 10 req/min per IP ([[apis/overview]])
- Origin CSRF check ([[apis/overview]])
- Body size limit: 10KB ([[apis/overview]])
- HTML-escaping

## Behavior
1. Validate email format (regex)
2. Send team notification of new subscriber
3. Send confirmation to subscriber
4. Return `{ success: true }`

Same hoisted Nodemailer transport and env vars ([[foundation/env]]) as [[apis/contact]].
