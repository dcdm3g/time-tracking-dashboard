import { Category } from '@/interfaces/category'
import { Timeframe } from '@/interfaces/timeframe'
import { CategoryBanner } from '@/components/category-banner'
import { getPreviousTimeframe } from '@/utils/get-previous-timeframe'

interface CategoryProps {
  title: Category
  timeframe: Timeframe
  current: number
  previous: number
}

export function CategoryCard({
  title,
  timeframe,
  current,
  previous,
}: CategoryProps) {
  return (
    <div className="flex flex-col -space-y-6 xl:-space-y-5">
      <CategoryBanner title={title} />

      <div className="z-10 flex flex-col gap-1.5 rounded-2xl bg-dark-blue px-6 py-7 transition-colors hover:bg-dusk-blue has-[svg:hover]:bg-dark-blue xl:gap-6 xl:px-7 xl:pb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-white">{title}</h3>

          <svg
            className="group"
            height={5}
            width={21}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="transition-colors group-hover:fill-white"
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 xl:flex-col xl:items-start xl:gap-2">
          <p className="text-xl font-light text-white xl:text-3xl">
            {current}hrs
          </p>

          <p className="text-sm text-pale-blue">
            {getPreviousTimeframe(timeframe)} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  )
}
