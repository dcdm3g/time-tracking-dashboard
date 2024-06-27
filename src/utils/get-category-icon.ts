import { Category } from '@/interfaces/category'
import workIcon from '@public/icon-work.svg'
import playIcon from '@public/icon-play.svg'
import studyIcon from '@public/icon-study.svg'
import exerciseIcon from '@public/icon-exercise.svg'
import socialIcon from '@public/icon-social.svg'
import selfCareIcon from '@public/icon-self-care.svg'

export function getCategoryIcon(title: Category) {
  const icons = {
    Work: workIcon,
    Play: playIcon,
    Study: studyIcon,
    Exercise: exerciseIcon,
    Social: socialIcon,
    'Self Care': selfCareIcon,
  }

  return icons[title]
}
