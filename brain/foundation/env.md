# Environment Variables

Set in Vercel → Settings → Environment Variables (see [[foundation/infrastructure]]) or `.env.local` for local dev. A `.env.example` template is committed (see [[foundation/configuration#.env.example]]).

| Variable | Required For | Default |
|---|---|---|
| `SMTP_HOST` | Contact + Newsletter | `smtp.gmail.com` |
| `SMTP_PORT` | Contact + Newsletter | `587` |
| `SMTP_USER` | Contact + Newsletter | — |
| `SMTP_PASS` | Contact + Newsletter | — |
| `CONTACT_TO` | Contact + Newsletter | `hello@alfinega.com` |
| `INDEXNOW_SECRET` | IndexNow auth (optional) | — |

Usage details:
- `SMTP_*` vars → [[apis/contact]] and [[apis/newsletter]] — nodemailer transport
- `CONTACT_TO` → recipient for contact form enquiries
- `INDEXNOW_SECRET` → bearer token protecting [[apis/indexnow]]

`.env*.local` files are gitignored. `.env.example` is committed as a template.
