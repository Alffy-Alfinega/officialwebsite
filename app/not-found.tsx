// ============================================================
// 404 (Not Found) page.
// Next.js automatically shows this component when the
// requested route doesn't match any page file.
// ============================================================

// Link – Next.js client‑side navigation component (no full
// page reload).
import Link from 'next/link'

export default function NotFound() {
  return (
    // Full‑viewport container, centred both axes, with
    // horizontal padding.
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Giant, semi‑transparent "404" as a background
          decoration text. The `select-none` class prevents
          users from accidentally selecting it. */}
      <span className="font-syne font-extrabold text-[10rem] leading-none select-none" style={{ color: 'rgba(44,111,237,0.08)' }}>
        404
      </span>

      {/* Main heading – pulled up slightly to overlap the
          decoration text. */}
      <h1 className="font-syne font-bold text-3xl text-white mt-4 mb-3 -mt-8">
        Page not found
      </h1>

      {/* Friendly explanation + a hint to go home. */}
      <p className="font-outfit text-sm text-[#9A9ABB] mb-8 max-w-sm">
        This page doesn&apos;t exist or may have moved. Head back to the home page and find what you&apos;re looking for.
      </p>

      {/* Primary action – link back to the homepage. */}
      <Link
        href="/"
        className="px-8 py-4 font-syne font-semibold text-sm text-white rounded-full transition-all duration-200 hover:opacity-90"
        style={{ background: 'linear-gradient(135deg, #2C6FED, #1A52C4)' }}
      >
        Back to Home
      </Link>
    </div>
  )
}
