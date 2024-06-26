import { Timeframe } from '@/interfaces/timeframe'

export function getPreviousTimeframe(timeframe: Timeframe) {
  const previous = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month',
  }

  return previous[timeframe]
}
