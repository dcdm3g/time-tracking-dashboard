import { Timeframe } from '@/interfaces/timeframe'
import { Dashboard } from '@/components/dashboard'

export const dynamicParams = false

export function generateStaticParams() {
  const timeframes = ['daily', 'monthly']
  return timeframes.map((timeframe) => ({ timeframe }))
}

interface TimeframeDashboardProps {
  params: {
    timeframe: Exclude<Timeframe, 'weekly'>
  }
}

export default function DailyOrMonthlyDashboard({
  params,
}: TimeframeDashboardProps) {
  return <Dashboard timeframe={params.timeframe} />
}
