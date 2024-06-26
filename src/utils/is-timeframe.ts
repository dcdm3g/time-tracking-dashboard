import { Timeframe } from '@/interfaces/timeframe'

export function isTimeframe(t: string | string[] | undefined): t is Timeframe {
  const timeframes = ['daily', 'weekly', 'monthly']
  return typeof t === 'string' && timeframes.includes(t)
}
