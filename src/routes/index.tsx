import HomePageScreen from '@/components/HomePage/HomePAge'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePageScreen,
})

