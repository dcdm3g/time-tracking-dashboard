import { Timeframe } from '@/interfaces/timeframe'
import { useSearchParams } from 'next/navigation'
import { isTimeframe } from '@/utils/is-timeframe'

export function useTimeframe(): Timeframe {
  const searchParams = useSearchParams()
  const t = searchParams.get('t')

  return t && isTimeframe(t) ? t : 'weekly'
}
