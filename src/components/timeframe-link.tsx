'use client'

import { Timeframe } from '@/interfaces/timeframe'
import { useTimeframe } from '@/hooks/use-timeframe'
import Link from 'next/link'

interface TimeframeLinkProps {
  timeframe: Timeframe
}

export function TimeframeLink({ timeframe }: TimeframeLinkProps) {
  const t = useTimeframe()

  return (
    <Link
      data-active={timeframe === t}
      className="text-base text-desaturated-blue transition-colors hover:text-white data-[active=true]:text-white"
      href={{ pathname: '/', query: { t: timeframe } }}
      replace
    >
      {timeframe.replace(/^[a-z]/, (l) => l.toUpperCase())}
    </Link>
  )
}
