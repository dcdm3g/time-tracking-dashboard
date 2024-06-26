import { Timeframe } from '@/interfaces/timeframe'
import { CategoryCard } from '@/components/category-card'
import { report } from '@/data/report'

interface ReportProps {
  timeframe: Timeframe
}

export function Report({ timeframe }: ReportProps) {
  return (
    <section className="xl:col-span-3 xl:row-span-2 xl:grid xl:grid-cols-subgrid xl:grid-rows-subgrid">
      <ul className="grid gap-8 xl:col-span-3 xl:row-span-2 xl:grid-cols-subgrid xl:grid-rows-subgrid">
        {report.map(({ title, timeframes }) => {
          const { current, previous } = timeframes[timeframe]

          return (
            <li key={title}>
              <CategoryCard {...{ title, timeframe, current, previous }} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
