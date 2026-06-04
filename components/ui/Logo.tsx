import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showWordmark?: boolean
  className?: string
}

export default function Logo({ size = 'md', showWordmark = true, className = '' }: LogoProps) {
  const heights = { sm: 32, md: 40, lg: 56 }
  const h = heights[size]

  return (
    <Link href="/" className={`flex items-center gap-2 group shrink-0 ${className}`} aria-label="Alffy — Home">
      <Image
        src="/logo-nav.png"
        alt="Alffy (Alfinega) logo"
        width={h}
        height={h}
        className="transition-all duration-300 group-hover:opacity-90"
        priority
      />
      {showWordmark && (
        <span
          className="font-syne font-bold tracking-tight text-white select-none"
          style={{ fontSize: size === 'sm' ? '15px' : size === 'md' ? '17px' : '22px' }}
        >
          ALFFY
        </span>
      )}
    </Link>
  )
}
