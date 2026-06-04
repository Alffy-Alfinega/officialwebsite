# POST /api/contact

Triggered by [[components/overview#UI Components\|ContactForm]] on the [[routes/map#Page Routes\|/contact]] page. Shared security from [[apis/overview#Shared Security Utilities]].

## Request
```json
{ "name": "required", "email": "required", "service": "optional", "budget": "optional", "message": "required" }
```

## Security
- Rate limited: 10 req/min per IP ([[apis/overview]])
- Origin CSRF check ([[apis/overview]])
- Body size limit: 10KB ([[apis/overview]])
- HTML-escaping of all inputs

## Behavior
1. Validate fields + security checks
2. Send team notification (styled HTML email)
3. Send auto-reply to sender (thank-you)
4. Return `{ success: true }`

## Nodemailer
Transport created once at module scope (not per-request — avoids cold-start overhead). Uses `SMTP_*` and `CONTACT_TO` env vars from [[foundation/env]].

## Error Handling
Returns `{ error }` with 400/413/429/403/500. Logs to console.
