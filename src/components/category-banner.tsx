import { tv } from 'tailwind-variants'
import { Category } from '@/interfaces/category'
import { getCategoryIcon } from '@/utils/get-category-icon'
import Image from 'next/image'
import workIcon from '@public/icon-work.svg'

const banner = tv({
  slots: {
    base: 'h-16 shrink-0 relative rounded-t-2xl overflow-hidden',
    icon: 'absolute',
  },
  variants: {
    title: {
      Work: {
        base: 'bg-light-orange',
        icon: '-top-3 right-4',
      },
      Play: {
        base: 'bg-soft-blue',
        icon: '-top-2.5 right-7',
      },
      Study: {
        base: 'bg-light-red',
        icon: '-top-1.5 right-4',
      },
      Exercise: {
        base: 'bg-lime-green',
        icon: 'right-4',
      },
      Social: {
        base: 'bg-violet',
        icon: '-top-4 right-3.5',
      },
      'Self Care': {
        base: 'bg-soft-orange',
        icon: '-top-3 right-[1.375rem]',
      },
    },
  },
})

interface CategoryBannerProps {
  title: Category
}

export function CategoryBanner({ title }: CategoryBannerProps) {
  const { base, icon: iconFn } = banner({ title })
  const icon = getCategoryIcon(title)

  return (
    <div className={base()}>
      <Image
        className={iconFn()}
        src={icon}
        alt=""
        priority={icon === workIcon}
      />
    </div>
  )
}
