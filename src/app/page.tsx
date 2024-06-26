import { Sidebar } from '@/components/sidebar'
import { Report } from '@/components/report'
import { isTimeframe } from '@/utils/is-timeframe'

interface HomeProps {
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

export default function Home({ searchParams }: HomeProps) {
  const t = searchParams?.t
  const timeframe = isTimeframe(t) ? t : 'weekly'

  return (
    <main className="grid w-dashboard gap-6 xl:grid-cols-4 xl:grid-rows-2 xl:gap-8">
      <Sidebar />
      <Report timeframe={timeframe} />
    </main>
  )
}
