import { Timeframe } from '@/interfaces/timeframe'
import { TimeframeLink } from '@/components/timeframe-link'
import Image from 'next/image'

interface SidebarProps {
  timeframe: Timeframe
}

export function Sidebar({ timeframe }: SidebarProps) {
  const timeframes = ['daily', 'weekly', 'monthly'] as const

  return (
    <aside className="flex flex-col overflow-hidden rounded-2xl bg-dark-blue xl:row-span-2">
      <div className="flex items-center justify-center gap-5 rounded-b-2xl bg-blue py-9 xl:flex-1 xl:flex-col xl:items-start xl:justify-start xl:gap-11 xl:px-8 xl:pb-0">
        <div className="relative size-16 rounded-full border-2 border-white xl:size-20">
          <Image src="/image-jeremy.png" alt="Jeremy Robson" fill />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm text-pale-blue">Report for</p>

          <h2 className="text-lg font-light text-white xl:text-2xl">
            Jeremy Robson
          </h2>
        </div>
      </div>

      <nav className="py-6 xl:px-8 xl:pb-8">
        <ul className="flex justify-around xl:flex-col xl:gap-5">
          {timeframes.map((t) => (
            <li key={t}>
              <TimeframeLink current={timeframe} to={t} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
