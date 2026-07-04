# ALFFY STYLE GUIDE — Component Styling Paradigm

*Decided: 2026-07-04*

---

## Decision: CSS Variables + Inline Styles

All React components in this project use **inline style objects** (`style={{ }}`) combined with **CSS custom properties** from `:root` in `globals.css`.

Tailwind is **not** used in component TSX files.

---

## Rationale

This project was built with inline styles from the first commit. Migrating to Tailwind utilities across 30+ components was assessed as high-effort / low-value. The current approach works well because:

1. **CSS variables are single-source-of-truth** — changing `--blue` in `:root` affects every component instantly
2. **No class-name lookup required** — you can read a style value directly from the JSX, not a Tailwind config
3. **TypeScript safety** — inline styles are fully typed; wrong values are caught at compile time
4. **No purge risk** — Tailwind's JIT doesn't need to find classes in TSX files

---

## Rules

### DO

```tsx
// Use CSS variables for tokens
<div style={{ color: 'var(--blue)', background: 'var(--surface)' }} />

// Use inline styles for layout and component-specific values
<div style={{ display: 'flex', gap: 16, padding: '24px 32px' }} />

// Use the CSS variable font stack (supports next/font injection)
<p style={{ fontFamily: "var(--font-outfit, 'Outfit', sans-serif)" }} />
```

### DON'T

```tsx
// ❌ Don't use Tailwind utilities in TSX files
<div className="flex gap-4 text-blue-500" />

// ❌ Don't hardcode hex values that have a CSS variable equivalent
<div style={{ color: '#2C6FED' }} />  // use var(--blue) instead
// (Existing code has hardcoded values — fix on next touch, don't let it spread)

// ❌ Don't use both systems on the same element
<div className="flex" style={{ gap: 16 }} />
```

---

## Tailwind Is Still Used For

- `@import 'tailwindcss'` — CSS reset and base normalisation
- `@theme {}` block in `globals.css` — token definitions for tooling / IDE
- The `.grid-bg`, `.blue-glow`, `.gold-glow`, `.tag`, `.card-hover` utility classes defined in `globals.css`
- Occasional responsive utilities (`.md:block`) where a small responsive toggle isn't worth a full JS state

---

## Font Stack

Fonts are loaded via `next/font/google` in `app/layout.tsx` and injected as CSS variables:

| Variable | Font |
|---|---|
| `var(--font-syne)` | Syne |
| `var(--font-outfit)` | Outfit |
| `var(--font-mono)` | JetBrains Mono |

Always reference fonts via the CSS variable, not the font name string, so they degrade gracefully when the variable is missing.

```tsx
// Correct
fontFamily: "var(--font-syne, 'Syne', sans-serif)"

// Works but loses degradation fallback
fontFamily: "'Syne', sans-serif"
```

---

## Token Reference

| Variable | Value | Use |
|---|---|---|
| `--bg` | `#04040C` | Page background |
| `--surface` | `#0A0A16` | Card/section background |
| `--surface-2` | `#10101E` | Elevated surface |
| `--border` | `#1C1C34` | Default border |
| `--text` | `#E4E4F0` | Primary text |
| `--text-muted` | `#CCCCEE` | Secondary text |
| `--text-faint` | `#8A8AAA` | Tertiary / label text |
| `--text-dimmer` | `#6A6A8A` | De-emphasised text |
| `--blue` | `#2C6FED` | Primary accent |
| `--blue-dim` | `#1A52C4` | Darker accent / gradients |
| `--gold` | `#D4A843` | Secondary accent |
