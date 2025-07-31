import ContactPageScreen from '@/components/ContactPage/ContactPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ContactSection')({
  component: ContactPageScreen,
})

