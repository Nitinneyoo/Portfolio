import ProjectPageScreen from '@/components/ProjectPage/ProjectPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ProjectSection')({
  component: ProjectPageScreen,
})
