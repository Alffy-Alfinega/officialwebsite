# Design System

Bold editorial dark aesthetic. Deep black backgrounds with blue primary accent and gold secondary.
Applied via CSS custom properties in `app/globals.css` (see [[foundation/configuration]]) and consumed throughout every component (see [[components/overview]]).

## Colors

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#04040C` | Page background — applied to `<html>` and `<body>` |
| `--surface` | `#0A0A16` | Card/section backgrounds — see [[business/*]] sections |
| `--border` | `#1C1C34` | Borders and dividers |
| `--text` | `#E4E4F0` | Primary text |
| `--text-muted` | `#AAAACC` | Secondary text |
| `--text-faint` | `#8A8AAA` | Labels |
| `--blue` | `#2C6FED` | Primary accent — used in buttons, links, 3D scenes ([[components/r3f]]) |
| `--blue-dim` | `#1A52C4` | Button gradient end |
| Gold | `#D4A843` | Star ratings, secondary accent — also used in R3F scenes |

Defined in `app/globals.css` under `:root[data-theme="dark"]`.

## Typography

| Role | Font | Weights |
|---|---|---|
| Display/Headings | Syne | 400, 600, 700, 800 |
| Body | Outfit | 300, 400, 500, 600 |
| Code/Labels | JetBrains Mono | 400, 500 |

## Animations

| Name | Effect | Duration | Usage |
|---|---|---|---|
| `fade-up` | opacity + translateY | 0.7s | Section entries, hero text — see [[components/overview]] for stagger patterns |
| `fade-in` | opacity | 0.5s | Pre-labels |
| `marquee` | translateX -50% | 40s linear | Service ticker — rendered by [[components/overview#Homepage Sections]] |
| `spin-slow` | rotate 360° | 12s | Spinners |
| `pulse-blue` | boxShadow pulse | 2s | CTA glow |

### Stagger Patterns
- Hero text: 0.2s / 0.38s / 0.54s / 0.72s / 1.0s delays
- Service rows: `index * 0.06s`
- Process steps: `index * 0.1s`
- Why cards: `index * 0.08s`

## Utility Classes
- `.tag` — pill badge, `.tag.active` — highlighted
- `.card-hover` — scale/translate on hover
- `.grid-lines` — repeating diagonal grid overlay
- `.prose-custom` — legal page prose ([[business/legal]])
