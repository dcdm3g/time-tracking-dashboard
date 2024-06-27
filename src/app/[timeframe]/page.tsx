import { Timeframe } from '@/interfaces/timeframe'
import { Dashboard } from '@/components/dashboard'

export const dynamicParams = false

export function generateStaticParams() {
  const timeframes = ['daily', 'monthly']
  return timeframes.map((timeframe) => ({ timeframe }))
}

interface TimeframeDashboardProps {
  params: {
    timeframe: Timeframe
  }
}

export default function TimeframeDashboard({
  params,
}: TimeframeDashboardProps) {
  return <Dashboard timeframe={params.timeframe} />
}
