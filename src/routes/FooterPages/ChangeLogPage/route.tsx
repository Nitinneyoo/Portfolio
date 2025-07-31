import ChangelogScreen from '@/components/FooterPages/ChangeLogPage/ChangeLogScreen'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/FooterPages/ChangeLogPage')({
  component: ChangelogScreen,
})

