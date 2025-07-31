import FaqPage from '@/components/FooterPages/FaqPage/FaqPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/FooterPages/FaqSection')({
  component: FaqPage,
})


