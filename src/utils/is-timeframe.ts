import { Timeframe } from '@/interfaces/timeframe'

export function isTimeframe(text: string): text is Timeframe {
  const timeframes = ['daily', 'weekly', 'monthly']
  return timeframes.includes(text)
}
