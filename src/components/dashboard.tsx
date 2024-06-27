import { Timeframe } from '@/interfaces/timeframe'
import { Sidebar } from '@/components/sidebar'
import { Report } from '@/components/report'

interface DashboardProps {
  timeframe: Timeframe
}

export function Dashboard({ timeframe }: DashboardProps) {
  return (
    <main className="grid w-dashboard gap-6 xl:grid-cols-4 xl:grid-rows-2 xl:gap-8">
      <Sidebar timeframe={timeframe} />
      <Report timeframe={timeframe} />
    </main>
  )
}
