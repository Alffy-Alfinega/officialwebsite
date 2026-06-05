// ============================================================
// Utility helpers used across the project.
// ============================================================

// clsx: tiny library that conditionally joins class names.
//   Example: clsx('base', isActive && 'active') → "base active"
import { type ClassValue, clsx } from 'clsx'

// tailwind-merge: intelligently merges Tailwind class strings,
// resolving conflicts (e.g. 'px-4 px-6' becomes just 'px-6').
import { twMerge } from 'tailwind-merge'

// `cn` is the standard shadcn/ui utility for combining classes.
// It first runs clsx to handle conditionals/arrays, then passes
// the result through twMerge to deduplicate Tailwind utilities.
//
// Usage: cn('text-sm', isLarge && 'text-lg', 'px-4')
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
