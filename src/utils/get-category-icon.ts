import { Category } from '@/interfaces/category'
import workIcon from '&/icon-work.svg'
import playIcon from '&/icon-play.svg'
import studyIcon from '&/icon-study.svg'
import exerciseIcon from '&/icon-exercise.svg'
import socialIcon from '&/icon-social.svg'
import selfCareIcon from '&/icon-self-care.svg'

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
