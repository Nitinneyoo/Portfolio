import BlogPageScreen from '@/components/FooterPages/BlogPage/BlogPageScreen'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/FooterPages/BlogSection')({
  component: BlogPageScreen,
})


