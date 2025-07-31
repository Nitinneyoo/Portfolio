import AboutPageScreen from '@/components/AboutPage/AboutPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/AboutSection')({
  component: AboutPageScreen,
})

