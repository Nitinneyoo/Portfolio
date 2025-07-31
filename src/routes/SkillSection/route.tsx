import SkillPageScreen from '@/components/SkillPage/SkillPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/SkillSection')({
  component: SkillPageScreen,
})


