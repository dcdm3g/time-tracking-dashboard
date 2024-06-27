import { Timeframe } from '@/interfaces/timeframe'
import Link from 'next/link'

interface TimeframeLinkProps {
  current: Timeframe
  to: Timeframe
}

export function TimeframeLink({ current, to }: TimeframeLinkProps) {
  return (
    <Link
      data-active={current === to}
      className="text-base text-desaturated-blue transition-colors hover:text-white data-[active=true]:text-white"
      href={to === 'weekly' ? '/' : `/${to}`}
    >
      {to.replace(/^[a-z]/, (l) => l.toUpperCase())}
    </Link>
  )
}
