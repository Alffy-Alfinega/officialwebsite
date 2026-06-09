# Navigation

## Navbar

**File:** `components/nav/Navbar.tsx`

| Property | Value |
|---|---|
| Type | Client component (useState for mobile menu, useRef for scroll detection) |
| Links | 5 items: Home, Services, Portfolio, About, Pricing |
| Right side | "Get Started" link → `/contact` |
| Mobile menu email | contact@alfinega.com |

The navLinks array contains exactly 5 items (no Contact link, no separate desktop Contact text). All 5 items render in the desktop nav bar.

## Footer

**File:** `components/layout/Footer.tsx`

4-column grid with service links, social links, company info, and newsletter form. Contact email displayed: contact@alfinega.com.
